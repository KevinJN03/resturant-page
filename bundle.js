(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap);"]),c.push([e.id,'\n:root {\n    --buttercream:rgba(249, 225, 150, 0.5);\n}\n\n* {\n    font-family: "Roboto", "Poppins", sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.img-container {\n    width: 300px;\n    height: 300px;\n    border-radius:  50%;\n    \n}\n\nimg {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 50%;\nobject-position: 50% 50%;\n}\n.grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-flow: row;\n    padding: 20px 10px;\n    gap: 20px 10px;\n}\n.food-container {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n.food-container p {\n    padding: 10px;\n    text-align: center;\n}\n#dish-container {\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n}\n\n#dish-container img {\n\n\n}\n\n#header {\n    padding-top: 20px;\n    font-size: 2.4rem;\n    text-align: center;\n    font-family: "Poppins";\n    font-weight: 400;\n    background-color: var(--buttercream);\n    padding-bottom: 20px;\n\n\n}\n\n.btn {\n    font-size: 2rem;\n    padding: 5px 10px;\n\n}\n\n#btn-container {\n    margin-top: 40px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    gap: 20px;\n}\n\n.btn {\n    \n    background: transparent;\n    border: none;\n    transition: padding-bottom 0.5s ease-in-out;;\n    padding: 10px 15px;\n    \n}\n\n#content {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    background-color:var(--buttercream);\n    width: 650px;\n    min-height: 550px;;\n    margin: 40px auto 0px auto;\n    \n\n}\n\n\n\n h2, h3{\n    font-weight: 400;\n}\n\n.active {\n    border-bottom: 3px solid white;\n}\n\n.btn:hover {\n    position: relative;\n    padding-bottom: 25px\n}\n\n',""]);const a=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&c[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],d=r.base?s[0]+r.base:s[0],p=i[d]||0,u="".concat(d," ").concat(p);i[d]=p+1;var l=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var s=r(e,o),d=0;d<i.length;d++){var p=n(i[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},906:(e,t,n)=>{var r={"./cookie.jpg":419,"./donut.jpg":209,"./food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg":665,"./friedChicken.jpg":878,"./pepperoni.jpg":10};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=906},419:(e,t,n)=>{"use strict";e.exports=n.p+"fbef7afdfa756b172c36.jpg"},209:(e,t,n)=>{"use strict";e.exports=n.p+"ee3f1d405f308c928db8.jpg"},665:(e,t,n)=>{"use strict";e.exports=n.p+"fbef7afdfa756b172c36.jpg"},878:(e,t,n)=>{"use strict";e.exports=n.p+"f51486ca408733f4eb72.jpg"},10:(e,t,n)=>{"use strict";e.exports=n.p+"4145cc4b005dd5a0ac97.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";const e=()=>{const e=document.querySelector("#content");return e.innerHTML="",e},t=n.p+"9afd01e15ccd76c07d34.jpg";function r(){const n=document.querySelector("#content");e();const r=document.createElement("h2");r.textContent="Savor the Perfect Blend of Pizza and Dessert Delights!";const o=document.createElement("h3");o.textContent="Crafted with unwavering passion since 2001";const i=document.createElement("div");i.classList.add("img-container");const c=document.createElement("img");c.src=t,c.alt="photo of chef with curly hair";const a=document.createElement("h3");return a.textContent="Order online or visit us!",i.append(c),n.append(r,o,i,a),n}const o=function(e){let t={};return e.keys().map(((n,r)=>{t[n.replace("./","")]=e(n)})),t}(n(906)),i=(e,t,n)=>{const r=document.createElement("div");r.classList.add("food-container");const i=document.createElement("h2");i.textContent=e;const c=document.createElement("div");c.setAttribute("id","dish-container");const a=document.createElement("img");a.src=`${o[`${t}.jpg`]}`;const s=document.createElement("p");return s.textContent=n,console.log("img: ",a),c.append(a),r.append(c,i,s),r};var c=n(379),a=n.n(c),s=n(795),d=n.n(s),p=n(569),u=n.n(p),l=n(565),f=n.n(l),m=n(216),g=n.n(m),h=n(589),v=n.n(h),b=n(426),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=u().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=g(),a()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,function(){const e=document.querySelector("body"),t=document.createElement("h1");t.textContent="SweetSlice";const n=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button");n.textContent="Home",o.textContent="Contact",i.textContent="Menu",n.classList.add("btn"),n.setAttribute("id","home-btn"),o.classList.add("btn"),o.setAttribute("id","contact-btn"),i.classList.add("btn"),i.setAttribute("id","menu-btn");const c=document.createElement("header");c.setAttribute("id","header");const a=document.createElement("div");a.setAttribute("id","btn-container"),a.append(n,i,o),c.append(t,a),e.append(c,r())}();const y=document.getElementById("contact-btn"),w=document.getElementById("home-btn"),E=document.getElementById("menu-btn");function C(e){const t=document.querySelectorAll(".btn");for(let n=0;n<t.length;n++)n!=e?t[n].classList.remove("active"):t[n].classList.add("active")}y.addEventListener("click",(function(){C(2),function(){const t=document.querySelector("#content");e();const n=document.createElement("p");n.textContent="1024 Oakwood Ave San Diego, CA 22434";const r=document.createElement("p");r.innerHTML="Mon-Thurs:8am-8pm<br>Fri-Sun:8am-11pm";const o=document.createElement("p");o.innerHTML='<a href="tel:+12228885555">(222)-888 5555</a>',t.append(n,r,o)}()})),w.addEventListener("click",(function(){C(0),r()})),E.addEventListener("click",(function(){C(1),(()=>{const t=document.getElementById("content");e();const n=document.createElement("div");n.classList.add("grid-container");const r=i("Pepperoni Pizza","pepperoni","pizza dough, tomato sauce, mozzarella cheese, pepperoni slices, and olive oil."),o=i("Cholocate Chip Cookie","cookie","All-purpose flour, Butter, Granulated sugar, Brown sugar, Eggs, Vanilla extract, Baking soda, Salt, Chocolate chips, "),c=i("Donut","donut","All-purpose flour, Sugar, Baking powder, Salt, Milk, Eggs, Butter, Vanilla extract, Vegetable oil"),a=i("Fried Chicken","friedChicken","Chicken pieces, All-purpose flour, Salt, Black pepper, Paprika, Garlic powder, Onion powder, Dried herbs, Buttermilk, Vegetable oil");n.append(r,o,c,a),t.append(n)})()}))})()})();