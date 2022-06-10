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
    console.log('FetchData')
    return await fetch(this.conf.api + "/hole", {
      method: 'POST',
    }).then(res => res.json()).then(res => {
      res.reverse()
      console.log(res)
      this.data = res
    })
  }
  public async bodyShow() {
    console.log('bodyShow')
    await this.fetchData()
    if (this.data) {
      body(this)
      card(this)
    }
  }
  public nextPage() {
    console.log("nextPage");
    card(this)
  }
  public moreHide() {
    document.querySelector("#hole-next-page")?.remove()
  }
}