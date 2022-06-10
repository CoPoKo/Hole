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
}

function cardItem(e: HoleData) {
  console.log('cardItem');
  return `
  <div id="${e.id}" class="card">
    <div class="card-header">
      <h3 class="card-title">${e.time}</h3>
    </div>
    <div class="card-body">
      <div>
        <p>${e.content}</p>
      </div>
    </div>
    <div class="card-footer">
    </div>
  </div>
`
}