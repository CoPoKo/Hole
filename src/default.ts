import Config from "./types/config";

export const defaultConf: Config = {
  id: "#Hole",
  api: "https://xxxxx.xxxx/",
  limit: 10,
  el: document.querySelector<HTMLElement>("#Hole")!,
}