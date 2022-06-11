var __defProp=Object.defineProperty,__defNormalProp=(e,t,i)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,__publicField=(e,t,i)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,i),i),__async=(e,t,i)=>new Promise(((n,o)=>{var l=e=>{try{c(i.next(e))}catch(t){o(t)}},r=e=>{try{c(i.throw(e))}catch(t){o(t)}},c=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,r);c((i=i.apply(e,t)).next())}));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Hole=t()}(this,(function(){"use strict";
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
const e={id:"#Hole",api:"https://xxxxx.xxxx/",limit:10,el:document.querySelector("#Hole")};
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
function t(e){for(let t=e.index;t<e.index+e.conf.limit;t++){if(t>=e.data.length){e.moreHide();break}const n=e.data[t],o=document.createElement("div");o.innerHTML=i(n),e.$root.querySelector("#hole-list").appendChild(o),e.setlike()}e.index+=e.conf.limit,e.$root.querySelectorAll("#hole-list .heart").forEach((t=>{t.addEventListener("click",(t=>{const i=t.currentTarget.getAttribute("myid");e.like(i)}))})),window.HoleLoadCardCallback&&window.HoleLoadCardCallback()}function i(e){return`\n  <div id="${e.id}" class="card">\n    <div class="card-header">\n      <img src="${e.avatar}" class="avatar">\n      <p class="card-title float-right"><strong>${e.name}</strong> · ${e.time} </p>\n    </div>\n    <div class="card-body">\n      <div>\n        <p>${e.content}</p>\n      </div>\n    </div>\n    <div class="card-footer">\n      <p id="like-num-${e.id}" class="card-title float-right"> ${e.like} </p>\n      <p myid="${e.id}" class="card-title float-right heart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></p>\n    </div>\n  </div>\n`}
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
  */class n{constructor(e){__publicField(this,"conf"),__publicField(this,"$root"),__publicField(this,"data"),__publicField(this,"index"),this.conf=e,this.$root=this.conf.el,this.index=0}loadingShow(){this.$root.innerHTML='\n  <div class="hole-loading">\n    <div class="bounce1"></div>\n    <div class="bounce2"></div>\n    <div class="bounce3"></div>\n  </div>\n'}fetchData(){return __async(this,null,(function*(){return yield fetch(this.conf.api+"/hole",{method:"POST"}).then((e=>e.json())).then((e=>{e.reverse(),this.data=e}))}))}bodyShow(){return __async(this,null,(function*(){
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
var e,i;yield this.fetchData(),this.data&&((e=this).$root.innerHTML='\n  <div class="hole">\n    <div id="hole-list"></div>\n    <button id="hole-next-page" type="button" class="btn btn-default card">Next</button>\n  </div>',null==(i=document.querySelector("#hole-next-page"))||i.addEventListener("click",(()=>{e.nextPage()})),t(this))}))}nextPage(){t(this)}moreHide(){var e;null==(e=document.querySelector("#hole-next-page"))||e.remove()}like(e){return __async(this,null,(function*(){const t=localStorage.getItem("hole-like"),i=t?JSON.parse(t):{};i[e]||(fetch(this.conf.api+"/hole/like",{method:"POST",body:JSON.stringify({id:e})}).then((e=>e.json())),i[e]=!0,localStorage.setItem("hole-like",JSON.stringify(i)),document.querySelector(`#like-num-${e}`).innerHTML=`${Number(document.querySelector(`#like-num-${e}`).innerHTML)+1}`,this.setlike())}))}setlike(){var e;const t=localStorage.getItem("hole-like"),i=t?JSON.parse(t):{};for(const n in i)null==(e=document.querySelector("[myid='"+n+"']"))||e.classList.add("liked")}}
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
  */const o=class{constructor(e){__publicField(this,"conf"),__publicField(this,"$root"),__publicField(this,"ctx"),__publicField(this,"dataPromise"),this.conf=o.initConf(e),this.conf.el instanceof HTMLElement&&(this.$root=this.conf.el),this.ctx=new n(this.conf),this.initComponents()}initComponents(){this.ctx.loadingShow(),this.ctx.bodyShow(),window.HoleInitComponentsCallback&&window.HoleInitComponentsCallback()}nextPage(){this.ctx.nextPage()}static initConf(t){const i=Object.assign(e,t);if("string"==typeof i.id&&i.id)try{const e=document.querySelector(i.id);if(!e)throw Error(`HTMLElement "${i.id}" was not found.`);i.el=e}catch(n){throw console.error(n),new Error("Please check your `id` config.")}return i.api=i.api.replace(/\/$/,""),i}};let l=o;__publicField(l,"defaultConf",e);
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
return console.log("CoPoKo Hole v0.0.7"),l}));
//# sourceMappingURL=Hole.js.map
