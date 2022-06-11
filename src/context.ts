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
import Config from "./types/config"
import HoleData from "./types/data"
import Lodaing from './components/loading'
import body from './components/body'
import card from './components/card'

export default class HoleContext {
  public conf: Config
  public $root!: HTMLElement
  public data: HoleData[] | undefined
  index: number
  constructor(conf: Config) {
    this.conf = conf
    this.$root = this.conf.el
    this.index = 0
  }
  public loadingShow() {
    Lodaing(this)
  }
  public async fetchData() {
    return await fetch(this.conf.api + "/hole", {
      method: 'POST',
    }).then(res => res.json()).then(res => {
      res.reverse()
      this.data = res
    })
  }
  public async bodyShow() {
    await this.fetchData()
    if (this.data) {
      body(this)
      card(this)
    }
  }
  public nextPage() {
    card(this)
  }
  public moreHide() {
    document.querySelector("#hole-next-page")?.remove()
  }
  public async like(id: string) {
    const ls = localStorage.getItem("hole-like")
    const like = ls ? JSON.parse(ls) : {}
    if (!like[id]) {
      fetch(this.conf.api + "/hole/like", {
        method: 'POST',
        body: JSON.stringify({
          id: id,
        })
      }).then(res => res.json())
      like[id] = true
      localStorage.setItem("hole-like", JSON.stringify(like))
      document.querySelector(`#like-num-${id}`)!.innerHTML = `${Number(document.querySelector(`#like-num-${id}`)!.innerHTML) + 1}`
      this.setlike()
    }
  }
  public setlike() {
    const ls = localStorage.getItem("hole-like")
    const like = ls ? JSON.parse(ls) : {}
    for (const key in like) {
      document.querySelector("[myid='" + key + "']")!?.classList.add("liked")
    }
  }
}
