import HoleContext from "../context";
import HoleData from "../types/data";

export default function card(ctx: HoleContext) {
  console.log('card');
  for (let index = ctx.index; index < ctx.index + ctx.conf.limit; index++) {
    if (index >= ctx.data!.length) {
      ctx.moreHide()
      break
    }
    const e = ctx.data![index];
    const $item = document.createElement('div')
    $item.innerHTML = cardItem(e)
    ctx.$root.querySelector('#hole-list')!.appendChild($item)
  }
  ctx.index += ctx.conf.limit
  ctx.$root.querySelectorAll('#hole-list .heart')!.forEach(it => {
    it.addEventListener("click", (e) => {
      const ele = e.currentTarget! as HTMLElement
      const id = ele.getAttribute('myid')!
      console.log(id);
      ctx.like(id);
    })
  })
}

function cardItem(e: HoleData) {
  console.log('cardItem');
  return `
  <div id="${e.id}" class="card">
    <div class="card-header">
      <img src="${e.avatar}" class="avatar">
      <h3 class="card-title float-right"><strong>${e.name}</strong> · ${e.time} </h3>
    </div>
    <div class="card-body">
      <div>
        <p>${e.content}</p>
      </div>
    </div>
    <div class="card-footer">
      <h3 id="like-num-${e.id}" class="card-title float-right"> ${e.like} </h3>
      <h3 myid="${e.id}" class="card-title float-right heart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></h3>
    </div>
  </div>
`
}