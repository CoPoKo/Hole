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
import HoleContext from "../context";
import HoleData from "../types/data";

export default function card(ctx: HoleContext) {
  for (let index = ctx.index; index < ctx.index + ctx.conf.limit; index++) {
    if (index >= ctx.data!.length) {
      ctx.moreHide()
      break
    }
    const e = ctx.data![index];
    const $item = document.createElement('div')
    $item.innerHTML = cardItem(e)
    ctx.$root.querySelector('#hole-list')!.appendChild($item)
    ctx.setlike()
  }
  ctx.index += ctx.conf.limit
  ctx.$root.querySelectorAll('#hole-list .heart')!.forEach(it => {
    it.addEventListener("click", (e) => {
      const ele = e.currentTarget! as HTMLElement
      const id = ele.getAttribute('myid')!
      ctx.like(id);
    })
  })
  if (window.HoleLoadCardCallback) {
    window.HoleLoadCardCallback()
  }
}

function cardItem(e: HoleData) {
  return `
  <div id="${e.id}" class="card">
    <div class="card-header">
      <img src="${e.avatar}" class="avatar">
      <p class="card-title float-right"><strong>${e.name}</strong> · ${e.time} </p>
    </div>
    <div class="card-body">
      <div>
        <p>${e.content}</p>
      </div>
    </div>
    <div class="card-footer">
      <p id="like-num-${e.id}" class="card-title float-right"> ${e.like} </p>
      <p myid="${e.id}" class="card-title float-right heart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></p>
    </div>
  </div>
`
}