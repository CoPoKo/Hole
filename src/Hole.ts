/*!
 * ==========================================================================
 * "CoPoKo Hole" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Hole"
 *
 * "CoPoKo Hole" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Hole" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Hole". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
import './style/style.scss'
import { defaultConf } from './default'
import Config from './types/config'
import HoleContext from './context'

export default class Hole {
  public conf: Config
  public $root!: HTMLElement
  public ctx: any
  public dataPromise: Promise<any> | undefined

  constructor(conf: Partial<Config>) {
    this.conf = Hole.initConf(conf)
    if (this.conf.el instanceof HTMLElement) this.$root = this.conf.el
    this.ctx = new HoleContext(this.conf)
    this.initComponents()
  }
  private initComponents() {
    this.ctx.loadingShow()
    this.ctx.bodyShow()
  }
  public nextPage() {
    this.ctx.nextPage()
  }
  public static readonly defaultConf: Config = defaultConf
  private static initConf(conf: Partial<Config>): Config {
    const config = Object.assign(defaultConf, conf)
    if (typeof config.id === 'string' && !!config.id) {
      try {
        const El = document.querySelector<HTMLElement>(config.id)
        if (!El) throw Error(`HTMLElement "${config.id}" was not found.`)
        config.el = El
        console.log(config);
      } catch (e) {
        console.error(e)
        throw new Error('Please check your `id` config.')
      }
    }
    config.api = config.api.replace(/\/$/, '')
    return config
  }
}