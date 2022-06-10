import HoleContext from "../context";


export default function loading(ctx: HoleContext) {
  console.log('loading');
  ctx.$root.innerHTML = `
  <div class="hole-loading">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
`
}