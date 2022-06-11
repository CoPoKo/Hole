var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var style = /* @__PURE__ */ (() => '.hole-loading{margin:100px auto 0;width:150px;text-align:center}.hole-loading>div{width:30px;height:30px;background-color:#87ceeb;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.hole-loading .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.hole-loading .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes bouncedelay{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}.hole{width:100%;margin-right:auto;margin-left:auto}.hole .btn:not(:disabled):not(.disabled){cursor:pointer}.hole .btn{margin:0 auto;display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.hole .btn-default{background-color:#f8f9fa;border-color:#ddd;color:#444}.hole button{text-transform:none;overflow:visible;margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.hole .float-right{float:right!important}.hole .float-left{float:left!important}.hole img.note-float-left{margin-right:10px}.hole img.note-float-right{margin-left:10px}.hole.dark-mode .btn-default{background-color:#3a4047;color:#fff;border-color:#6c757d}/*!\n * ==========================================================================\n * "CoPoKo Hole" License\n * GNU General Public License version 3.0 (GPLv3)\n * ==========================================================================\n * This file is part of "CoPoKo Hole"\n *\n * "CoPoKo Hole" is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License as published by\n * the Free Software Foundation, either version 3 of the License, or\n * (at your option) any later version.\n *\n * "CoPoKo Hole" is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with "CoPoKo Hole". If not, see <http://www.gnu.org/licenses/>.\n * ==========================================================================\n*/.hole .card{box-shadow:0 0 1px #00000021,0 1px 3px #0003;margin-bottom:1rem;position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0 solid rgba(0,0,0,.125);border-radius:.25rem}.hole .card .card-header{background-color:transparent;border-bottom:1px solid rgba(0,0,0,.125);padding:.75rem 1.25rem;position:relative;border-top-left-radius:.25rem;border-top-right-radius:.25rem;margin-bottom:0;box-sizing:border-box}.hole .card .card-header .avatar{border-radius:50%;float:left;height:40px;width:40px}.hole .card .card-header .card-title{float:left;font-size:1.1rem;font-weight:400;margin:8px 0 0}.hole .card .card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.hole .card .card-footer{padding:.75rem 1.25rem;background-color:#00000008;border-top:0 solid rgba(0,0,0,.125)}.hole .card .card-footer .heart{width:15px;margin-right:8px;cursor:pointer}.hole .card .card-footer .heart svg path{fill:#3498db}.hole .card .card-footer .heart svg:hover path{fill:red}.hole a{color:#007bff;text-decoration:none;background-color:transparent}.hole.dark-mode .card{background-color:#343a40;color:#fff}.hole.dark-mode .card .card-footer{background-color:#0000001a}\n')();
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
const defaultConf = {
  id: "#Hole",
  api: "https://xxxxx.xxxx/",
  limit: 10,
  el: document.querySelector("#Hole")
};
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
function loading(ctx) {
  console.log("loading");
  ctx.$root.innerHTML = `
  <div class="hole-loading">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
`;
}
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
function body(ctx) {
  var _a;
  console.log("body");
  ctx.$root.innerHTML = `
  <div class="hole">
    <div id="hole-list"></div>
    <button id="hole-next-page" type="button" class="btn btn-default card">Next</button>
  </div>`;
  (_a = document.querySelector("#hole-next-page")) == null ? void 0 : _a.addEventListener("click", () => {
    console.log("nextPage");
    ctx.nextPage();
  });
}
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
function card(ctx) {
  console.log("card");
  for (let index = ctx.index; index < ctx.index + ctx.conf.limit; index++) {
    if (index >= ctx.data.length) {
      ctx.moreHide();
      break;
    }
    const e = ctx.data[index];
    const $item = document.createElement("div");
    $item.innerHTML = cardItem(e);
    ctx.$root.querySelector("#hole-list").appendChild($item);
  }
  ctx.index += ctx.conf.limit;
  ctx.$root.querySelectorAll("#hole-list .heart").forEach((it) => {
    it.addEventListener("click", (e) => {
      const ele = e.currentTarget;
      const id = ele.getAttribute("myid");
      console.log(id);
      ctx.like(id);
    });
  });
}
function cardItem(e) {
  console.log("cardItem");
  return `
  <div id="${e.id}" class="card">
    <div class="card-header">
      <img src="${e.avatar}" class="avatar">
      <p class="card-title float-right"><strong>${e.name}</strong> \xB7 ${e.time} </p>
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
`;
}
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
class HoleContext {
  constructor(conf) {
    __publicField(this, "conf");
    __publicField(this, "$root");
    __publicField(this, "data");
    __publicField(this, "index");
    this.conf = conf;
    this.$root = this.conf.el;
    this.index = 0;
  }
  loadingShow() {
    loading(this);
  }
  fetchData() {
    return __async(this, null, function* () {
      console.log("FetchData");
      return yield fetch(this.conf.api + "/hole", {
        method: "POST"
      }).then((res) => res.json()).then((res) => {
        res.reverse();
        console.log(res);
        this.data = res;
      });
    });
  }
  bodyShow() {
    return __async(this, null, function* () {
      console.log("bodyShow");
      yield this.fetchData();
      if (this.data) {
        body(this);
        card(this);
      }
    });
  }
  nextPage() {
    console.log("nextPage");
    card(this);
  }
  moreHide() {
    var _a;
    (_a = document.querySelector("#hole-next-page")) == null ? void 0 : _a.remove();
  }
  like(id) {
    return __async(this, null, function* () {
      const ls = localStorage.getItem("hole-like");
      const like = ls ? JSON.parse(ls) : {};
      if (!like[id]) {
        fetch(this.conf.api + "/hole/like", {
          method: "POST",
          body: JSON.stringify({
            id
          })
        }).then((res) => res.json()).then((res) => {
          console.log(res);
        });
        like[id] = true;
        localStorage.setItem("hole-like", JSON.stringify(like));
        document.querySelector(`#like-num-${id}`).innerHTML = `${Number(document.querySelector(`#like-num-${id}`).innerHTML) + 1}`;
      }
    });
  }
}
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
const _Hole = class {
  constructor(conf) {
    __publicField(this, "conf");
    __publicField(this, "$root");
    __publicField(this, "ctx");
    __publicField(this, "dataPromise");
    this.conf = _Hole.initConf(conf);
    if (this.conf.el instanceof HTMLElement)
      this.$root = this.conf.el;
    this.ctx = new HoleContext(this.conf);
    this.initComponents();
  }
  initComponents() {
    this.ctx.loadingShow();
    this.ctx.bodyShow();
  }
  nextPage() {
    this.ctx.nextPage();
  }
  static initConf(conf) {
    const config = Object.assign(defaultConf, conf);
    if (typeof config.id === "string" && !!config.id) {
      try {
        const El = document.querySelector(config.id);
        if (!El)
          throw Error(`HTMLElement "${config.id}" was not found.`);
        config.el = El;
        console.log(config);
      } catch (e) {
        console.error(e);
        throw new Error("Please check your `id` config.");
      }
    }
    config.api = config.api.replace(/\/$/, "");
    return config;
  }
};
let Hole = _Hole;
__publicField(Hole, "defaultConf", defaultConf);
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
export { Hole as default };
//# sourceMappingURL=Hole.es.js.map
