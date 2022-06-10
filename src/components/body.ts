import HoleContext from "../context";

export default function body(ctx: HoleContext) {
  console.log('body');
  ctx.$root.innerHTML = `
  <div class="hole">
    <div id="hole-list"></div>
    <button id="hole-next-page" type="button" class="btn btn-default card">Next</button>
  </div>`
  document.querySelector("#hole-next-page")?.addEventListener("click", () => {
    console.log("nextPage");
    ctx.nextPage()
  })
}