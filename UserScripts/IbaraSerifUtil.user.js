// ==UserScript==
// @name        IbaraSerifUtil
// @namespace   https://twitter.com/11powder
// @description セリフをどんどん入れよう！
// @include     http://lisge.com/ib/*.php*
// @version     1.0.0.8
// @updateURL   https://pejuta.github.io/IbaraUtilities/UserScripts/IbaraSerifUtil.user.js
// @downloadURL https://pejuta.github.io/IbaraUtilities/UserScripts/IbaraSerifUtil.user.js
// @grant       none
// ==/UserScript==
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports='　<span class="B2">－　－　－　－　－　－　O R　－　－　－　－　－　－</span><br>\r\n'},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(s).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var r,i,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=a.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,p=[],h=n(9);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=s[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(w(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(w(r.parts[o],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],r={},i=0;i<e.length;i++){var s=e[i],o=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function v(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertAt.before,n);n.insertBefore(t,i)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),v(e,t),t}function m(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function w(e,t){var n,r,i,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var o=u++;n=l||(l=g(t)),r=E.bind(null,n,o,!1),i=E.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),v(e,t),t}(t),r=S.bind(null,n,t),i=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=x.bind(null,n),i=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(a=s[o.id]).refs--,r.push(a)}e&&f(d(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var $,y=($=[],function(e,t){return $[e]=t,$.filter(Boolean).join("\n")});function E(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function x(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function S(e,t,n){var r=n.css,i=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||s)&&(r=h(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},function(e,t){e.exports="<div class='Preview'><div class='Y3 PreviewHeader'>《{PREVIEW_TYPE}プレビュー》 <a href='#'> [Help] </a></div><span class=\"PreviewBody\"></span></div>"},function(e,t){e.exports='<div class="SE1"><table class="BLK0"><tr valign="TOP">\r\n   <td width="60"><img src=\'{ICON_URL}\' class=\'IC\'></td>\r\n   <td style="color:#CC8844">{SERIF_HTML}</td>\r\n</tr></table></div><div class="CL"></div>'},function(e,t){e.exports="<div class='SE2'>【ERROR】書き込み内容は{MAX_CHARS}文字以内です！（現在{CHARS}文字）</div>"},function(e,t){e.exports="<div style='position: absolute; z-index: 2;'><div class='SE3'><table cellpadding='0' cellspacing='0' class='SE0'><tr valign='TOP'>\r\n    <td width='70'><img src='p/iba_icon.png' class='RE2' alt='RE'></td>\r\n    <td class='F3'>\r\n        <a><span class='Y4'>{SCRIPT_NAME}の機能・使い方</span></a><br>\r\n            <div style='margin:10px;'>\r\n            ・入力した発言内容を自動的に解析してプレビューを表示します。<br>\r\n            ・<b class='O3'>Ctrl+Shift+Enterキー</b>を押すと、送信ボタンを押したのと同様にその発言内容を送信します。<br>\r\n            ・<b class='O3'>Tab</b>キーを押すと、欠けている装飾閉じタグ(<b class='Y3'>&lt;/B&gt;, &lt;/f4&gt;</b>など)を自動的に補完します。<br>\r\n            ・タグ名(<b class='Y3'>i4, S</b>など)を入力してからTabキーを押すと、指定の装飾タグを自動入力します。<br>\r\n            　<span class='P3'>例： f5 ⇒ &lt;f5&gt&lt;/f5&gt</span><br>\r\n            <br>　(hint) 入力自動補完に対応しているタグ名の一覧（小文字可、半角のみ）：<br><b class='Y3'>\r\n                　　 F[1-7] B B[1-7] I I[1-7] S S[1-7] U U[1-7]\r\n            </b>\r\n            </div>\r\n    </td>\r\n</tr></table></div></div>"},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'@charset "utf-8";\r\n\r\n.SE1 {\r\n    max-width: 850px;\r\n}\r\n',""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,s=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'@charset "utf-8";\r\n\r\n#PreviewFooter {\r\n    margin-bottom: 15px;\r\n    max-width: 870px;\r\n    max-height: 50vh;\r\n}\r\n\r\n#FooterToggle {\r\n    height: 20px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n#FooterBody {\r\n    overflow-y: scroll;\r\n    max-height: calc(50vh - 20px);\r\n}',""])},function(e,t,n){"use strict";function r(e,t){let n=e.toString();for(const e in t)void 0!==t[e]&&null!==t[e]&&(n=n.replace(new RegExp("{"+e+"}","g"),t[e].toString()));return n}n.r(t);const i={"&":"&amp;","'":"&#x27;",'"':"&quot;","`":"&#x60;","<":"&lt;",">":"&gt;"},s=new RegExp(`[${Object.keys(i).join("")}]`,"g");function o(e){return e.replace(s,e=>i[e])}const a=/(?:\r\n|\r|\n)/g,c=/<br>/gi;function l(e){return e?e.replace(a,"<br>"):e}function u(e){return e?e.replace(c,"\r\n"):e}const p=function e(t){const n=Object.getOwnPropertyNames(t);for(const r of n){const n=t[r];t[r]=n&&"object"==typeof n?e(n):n}return Object.freeze(t)}({F:{pattern:"F(?=\\d)",tagName:"span"},B:{pattern:"B",tagName:"b"},I:{pattern:"I",tagName:"i"},S:{pattern:"S",tagName:"s"},U:{pattern:"U",tagName:"u"}});let h=0;const f=[];for(const e in p)if(p.hasOwnProperty(e)){const t=p[e].pattern;h=t.length,f.push(t)}const d=h+1,v=f.join("|"),b="(?:"+v+")[1-7]?";function g(e,t,n,r){const i=p[t.toUpperCase()].tagName;return n?`<${i} class='F${n}'>${r}</${i}>`:`<${i}>${r}</${i}>`}const m=new RegExp(o("<"+("("+v+")([1-7]?)")+">(.*?)</\\1\\2>"),"ig");function w(e){let t=o(e);t=l(t).replace(/&lt;br&gt;/gi,"<BR>");for(let e=0;e<2;e++)t=t.replace(/&lt;(([1-9][0-9]?)D([1-9][0-9]?[0-9]?))&gt;/i,"<span class='DX'>【 <b>$1</b>：[$2個の$3面ダイスを振る] 】</span>");return function(e,t,n){let r=e.toString();for(;;){if(!t.test(r))return r;r=r.replace(t,n)}}(t,m,g)}class y{constructor(){this.id=0,this.prevResolve=null}setDelay(e,t,...n){return new Promise((r,i)=>{this.id&&this.prevResolve&&(clearTimeout(this.id),this.prevResolve(null)),this.id=setTimeout(t=>{this.id=0,this.prevResolve=null,r(e.apply(null,t))},t,n),this.prevResolve=r})}static delay(e){return new Promise(t=>{setTimeout(()=>t(),e)})}}var E=n(3),x=n.n(E);class S{constructor(e){this.$preview=null,this.delayMS=e.delayMS,this.previewType=e.previewType,this.containerClass=e.containerClass,this.removePreviousPreview=e.removePreviousPreview,this.delayer=new y}buildDelayedEventCallback(e){const t=this.buildInstantEventCallback(e);return e=>{this.delayer.setDelay(()=>{t(e)},this.delayMS)}}buildInstantEventCallback(e){return t=>{this.insertPreview(e.targetSelector(t),e.type);const n=this.buildHtml(t);this.updatePreview(n)}}insertPreview(e,t){switch(t){case"insertBefore":this.$preview&&$(e).prev().is("."+S.PREVIEW_CONTAINER_CLASS_NAME)?this.$preview=$(e).prev():(this.$preview&&this.removePreviousPreview||(this.$preview=this.buildContainer()),this.$preview.insertBefore(e));break;case"insertAfter":this.$preview&&$(e).next().is("."+S.PREVIEW_CONTAINER_CLASS_NAME)?this.$preview=$(e).next():(this.$preview&&this.removePreviousPreview||(this.$preview=this.buildContainer()),this.$preview.insertAfter(e));break;case"prepend":this.$preview&&$(e).children().first().is("."+S.PREVIEW_CONTAINER_CLASS_NAME)?this.$preview=$(e).children().first():(this.$preview&&this.removePreviousPreview||(this.$preview=this.buildContainer()),this.$preview.prependTo(e));break;case"append":this.$preview&&$(e).children().last().is("."+S.PREVIEW_CONTAINER_CLASS_NAME)?this.$preview=$(e).children().last():(this.$preview&&this.removePreviousPreview||(this.$preview=this.buildContainer()),this.$preview.appendTo(e))}return this.$preview}updatePreview(e){this.$preview||this.throwNoPreviewContainerError(),this.$preview.find(".PreviewBody").html(e),e?this.$preview.show():this.$preview.hide()}showPreview(){this.$preview||this.throwNoPreviewContainerError(),this.$preview.show()}hidePreview(){this.$preview||this.throwNoPreviewContainerError(),this.$preview.hide()}buildContainer(){return this.$preview=$(`<div class="${S.PREVIEW_CONTAINER_CLASS_NAME}"/>`).html(r(x.a,{PREVIEW_TYPE:this.previewType})).addClass(this.containerClass),this.$preview}throwNoPreviewContainerError(){throw new Error("invalid operation: preview container have not inserted yet.")}}S.PREVIEW_CONTAINER_CLASS_NAME="PreviewContainer";const T=/^[ \r\n\t\v]*/,C=/[ 　]*$/;const I=/[\u{0}-\u{9}\u{B}\u{C}\u{E}-\u{1F}\u{10000}-\u{10FFFF}]/gu;class R extends S{constructor(e){super(e),this.userENo=(/IBR_KEY=.+?_(\d+)(?:;|$)/.exec(document.cookie)||[])[1]||null}static sanitizeText(e){return function(e,t=""){return e.replace(I,t)}(function(e,t=""){return e?(e=(e=e.replace(T,"")).replace(C,""))||t:e}(e,"?"),"?")}}R.DEFAULT_ICON="p/nii.png";var P="IbaraSerifUtil",A=200;class N{static extract(e=""){const t=$(`input[name^=dt_icai${e}]`).get().map(e=>e.value);localStorage.setItem(N.STORAGE_NAME+e,JSON.stringify(t))}static load(e=""){const t=localStorage.getItem(N.STORAGE_NAME+e);return t?JSON.parse(t):[]}}N.STORAGE_NAME=P+"_IconNicknames";var _=n(4),k=n.n(_),O=n(0),U=n.n(O),L=n(5),M=n.n(L);n(7);const F=/^\/((?:\+|-)?\d+)\//;class B extends R{constructor(e,t=!1,n){var r,i,s,o;super({delayMS:e,previewType:"セリフ",containerClass:"SerifPreview",removePreviousPreview:t}),this.delayMS=e,this.maxChars=B.MAX_CHARS,n=null!=n?n:{},this.iconUrls=null!=(r=n.iconUrls)?r:$("#ICONLIST img.IC").get().map(e=>{var t;return null!=(t=e.getAttribute("src"))?t:""}),this.iconNicknames=null!=(i=n.iconNicknames)?i:$("#ICONLIST img.IC").get().map(e=>{var t;return null!=(t=e.getAttribute("alt"))?t:""}),this.subIconNicknames=null!=(s=n.subIconNicknames)?s:N.load(),this.nickname=null!=(o=n.nickname)?o:$(".SHIDARI > table:first a.F2:first > b + br")[0].nextSibling.textContent}enableSerifPreview(e,t,n=(e=>e.nextElementSibling),r=(e=>e.previousElementSibling),i=!1){const s=this.buildDelayedEventCallback({targetSelector:e=>n(e.currentTarget),type:"insertAfter"}),o=this.buildDelayedEventCallback({targetSelector:e=>e.currentTarget,type:"insertAfter"}),a=(this.buildDelayedEventCallback({targetSelector:e=>e.currentTarget,type:"insertAfter"}),["icon",n]),c=["text",r];if(e.on({change:s},a),t.on({"focus input":o},c),i){const e=this.buildInstantEventCallback({targetSelector:e=>e.currentTarget,type:"insertAfter"}),n="TEMP_INSTANT",r={};r[n]=e,t.on(r,c).trigger(n).off(n)}}buildHtml(e){e.data[0];const t=e.data[1];let n,r;"icon"===e.data[0]?(r=$(e.currentTarget),n=$(t(e.currentTarget))):(n=$(e.currentTarget),r=$(t(e.currentTarget)));const i={$icon:r,$text:n};return this.formatHtml(i)}formatHtml(e){const t=R.sanitizeText(e.$text.val());return 0===t.length?t:t.length>this.maxChars?r(M.a,{CHARS:t.length,MAX_CHARS:this.maxChars}):this.formatPreviewHtml(t,e)}formatPreviewHtml(e,t){const n=t.$icon.val();let i=-1;/^\d+$/.test(n)&&(i=parseInt(n,10));const s=t.$name?t.$name.val():this.nickname,a=e.split("###"),c=[];let l=0;for(const e of a){const t=e.split("+++");if(""===t.join("")){l++;continue}const n=[];for(let e of t){if(!e)continue;let t=i;const a=F.exec(e);a&&(t=parseInt(a[1],10),e=e.substring(a[0].length));const c=t in this.iconUrls?this.iconUrls[t]:R.DEFAULT_ICON;let l=this.subIconNicknames[t]||this.iconNicknames[t]||s;const u=/^@([^@]*?)@/.exec(e);u&&(l=u[1],e=e.substring(u[0].length)),e=w(e),l&&(e=`${o(l)}<br>「${e}」`),n.push(r(k.a,{ICON_URL:c,SERIF_HTML:e}))}c.push(n.join(""))}return l>0&&c.push(`<div class='NoSerif'>セリフなし(${(l/a.length*100).toFixed(0)}%)</div>`),c.join(U.a)}}function j(e,t,n){let r;r=n||t;const i=function(e,...t){return"touchstart"===e.type&&e.preventDefault(),r.apply(this,[e,...t])};return"string"==typeof t?e.on("click ontouchstart",t,i):e.on("click ontouchstart",i)}B.DATANAME_INITIAL_PREVIEW_HIDDEN="initial_preview_hidden",B.MAX_CHARS=400;n(10);class H extends B{constructor(e){super(e,!0),this.$footer=null}enableMessagePreview(e,t,n,r,i=!1){this.$footer=$("<div id='PreviewFooter'><div id='FooterToggle'>▲▼ プレビュー表示切り替え</div><div id='FooterBody'></div></div>").prependTo(r),j(this.$footer.find("#FooterToggle"),(function(){const e=$(this).next();if("0px"===e.css("height")){const t=e.css("height","auto").height();e.css("height","0px").animate({height:t},200,()=>e.css("height","auto"))}else e.css("height",e.height()).animate({height:"0px"},200)}));const s=this.buildDelayedEventCallback({targetSelector:e=>this.$footer.find("#FooterBody")[0],type:"append"}),o={$icon:e,$text:t,$name:n};if(e.on({change:s},o),t.on({"input focus":s},o),n.on({"input focus":s},o),i){const e=this.buildInstantEventCallback({targetSelector:e=>this.$footer[0],type:"append"}),n="TEMP_INSTANT",r={};r[n]=e,t.on(r,o).trigger(n).off(n)}}buildHtml(e){return this.formatHtml(e.data)}}var D=n(6),V=n.n(D);class W{constructor(e){this.attachedElement=null,this.$help=$(r(V.a,{SCRIPT_NAME:e}));const t=this;this.onClickHandler=function(e){e.preventDefault();const n=this;t.attachedElement===n?(t.$help.hide(),t.attachedElement=null):(t.$help.insertAfter(n).show(),t.attachedElement=n)}}enable(e,t){t?j($(e),t,this.onClickHandler):j($(e),this.onClickHandler),j(this.$help,()=>{this.$help.hide(),this.attachedElement=null})}}class Y{constructor(){}enable(e,t,n){let r="input[type='submit']";"string"==typeof n&&(r+="[value='"+n+"']");const i=this,s=function(e){const t=$(this).closest("form").find(r);i.submitWithCertainKeysDown(t,e)};t?$(e).on("keydown",t,s):$(e).on("keydown",s)}submitWithCertainKeysDown(e,t){13===t.which&&t.ctrlKey&&t.shiftKey&&(t.preventDefault(),e.first().trigger("click"))}}const K=new RegExp("<("+b+")>","gi"),z=new RegExp("</("+b+")>","gi"),G=new RegExp("<?("+b+")>?$","i"),J=new RegExp("</("+b+")>$","i"),X=new RegExp("</?([^>]{0,"+d+"}?)$"),q=new RegExp(b,"i");class Q{constructor(){}enable(e,t){const n=this,r=function(e){n.autoCompleteTag(this,e)};t?$(e).on("keydown",t,r):$(e).on("keydown",r)}autoCompleteTag(e,t){if(9===t.which){if(t.preventDefault(),e.selectionEnd&&e.selectionStart!==e.selectionEnd)return void e.setSelectionRange(e.selectionEnd,e.selectionEnd);if(this.insertOrnamentTags(e))return void $(e).trigger("input");this.insertLastUnclosedTagEnd(e)&&$(e).trigger("input")}else"/"===t.key&&this.completeLastUnclosedTagEnd(e)&&(t.preventDefault(),$(e).trigger("input"))}insertOrnamentTags(e){if("number"!=typeof e.selectionStart)return!1;if(e.selectionEnd&&e.selectionStart!==e.selectionEnd)return!1;const t=e.selectionStart,n=e.value.slice(0,t),r=e.value.slice(t),i=G.exec(n);if(!i)return!1;if(J.test(n))return!1;if(/^<[^<>]+?>$/.test(i[0]))return!1;const s=X.exec(n);if(s){const e=new RegExp("^([^<]{0,"+(d-s[1].length)+"}?)>").exec(r);if(e){if(q.test(s[1]+e[1]))return!1}}const o="<"+i[1]+"></"+i[1]+">";e.value=n.slice(0,-i[0].length)+o+r;const a=t-i[0].length+i[1].length+2;return e.setSelectionRange(a,a),!0}insertLastUnclosedTagEnd(e){if("number"!=typeof e.selectionStart)return!1;if(e.selectionEnd&&e.selectionStart!==e.selectionEnd)return!1;const t=e.selectionStart,n=e.value.slice(0,t),r=e.value.slice(t),i=this.findUnclosedTags(n,r);if(0===i.length)return!1;const s="</"+i[i.length-1]+">";return e.value=n+s+r,e.setSelectionRange(t,t+s.length),!0}findUnclosedTags(e,t){const n=e.match(K);if(!n)return[];const r=n.map((e,t)=>e.slice(1,e.length-1)),i=(e+t).match(z);if(!i)return r;const s=i.map((e,t)=>e.slice(2,e.length-1));for(let e=s.length-1;e>=0;e--)for(let t=r.length-1;t>=0;t--)if(s[e]===r[t]){r.splice(t,1);break}return r}completeLastUnclosedTagEnd(e){if("number"!=typeof e.selectionStart)return!1;if(e.selectionStart<=0||e.selectionStart!==e.selectionEnd)return!1;const t=e.selectionStart,n=e.value.slice(0,t),r=e.value.slice(t);if("<"!==n[t-1])return!1;const i=this.findUnclosedTags(n,r);if(0===i.length)return!1;const s="/"+i[i.length-1]+">";return e.value=n+s+r,e.setSelectionRange(t+1,t+s.length),!0}}const Z=new RegExp("^(?:[ \\r\\n\\t\\v]|<br>)+","i");const ee=new RegExp("(?:\\r\\n|\\r|\\n)$","i"),te=new RegExp("^(?:[ \\r\\n\\t\\v]|<br>)+$","i");class ne{constructor(e=!0){this.convertsOnEnable=e}enable(e,t){const n=e=>{ne.insertBRIfEnter(e),ne.brToLR(e.currentTarget)};if(t?$(e).on("input",t,n):$(e).on("input",n),this.convertsOnEnable){let n;n=t?$(t,e):$(e),n.each((e,t)=>{ne.brToLR(t)})}}static insertBRIfEnter(e){const t=e.currentTarget,n=t.selectionStart;if(!n)return;const r=t.value.slice(0,n);if(!te.test(r))return;const i=ee.exec(r);if(!i)return;const s=t.selectionEnd||n,o=i[0].length;t.value=t.value.slice(0,n-o)+"<br>"+t.value.substring(n),t.setSelectionRange(n+4-o,s+4-o)}static brToLR(e){const t=function(e){if(!e)return u(e);const t=Z.exec(e);return t?t[0]+u(e.substring(t[0].length)):u(e)}(e.value);if(t===e.value)return;const n=e.selectionStart,r=e.selectionEnd||n,i=e.value;e.value=t;const s=e.value.length-i.length;null!==n&&null!==r&&e.setSelectionRange(n+s,r+s)}}class re{constructor(e,t=re.DEFAULT_ROWS){this.defaultClassName=e,this.rows=t}enable(e,t){t=t||this.defaultClassName;const n=$(e).each((e,n)=>{re.insertTextareaBefore(n,this.rows,t)}).hide().prev().on("input",(function(){re.applyTextareaValueToPrevInput(this)}));n.closest("form").on("submit",()=>{n.each((e,t)=>re.applyTextareaValueToPrevInput(t))})}static insertTextareaBefore(e,t,n){const r=$("<textarea/>").insertBefore(e)[0];r.className=e.className,n&&r.classList.add(n),r.style.width=e.style.width,r.rows=t,r.defaultValue=e.defaultValue,r.value=e.value,r.onkeydown=e.onkeydown,r.onkeyup=e.onkeyup,r.oninput=e.oninput,r.onchange=e.onchange,r.onfocus=e.onfocus}static applyTextareaValueToPrevInput(e){$(e).nextUntil("input").addBack().last().next()[0].value=function(e){if(!e)return l(e);const t=T.exec(e);return t?t[0]+l(e.substring(t[0].length)):l(e)}(e.value)}}re.DEFAULT_ROWS=3;class ie{constructor(){this.submitted=!1}enable(e,t){const n=function(e){this.submitted&&e.preventDefault(),this.submitted=!0};t?$(e).on("submit",t,n):$(e).on("submit",n)}}const se=$(U.a).filter("span.B2").first().html();function oe(e,t,n){let r,i,s;r=t?$(t,e):$(e),n?(i=r.find(".SE1 + div.CL").filter((e,t)=>0===$(t).parents(n).length),s=r.find("span.B2").filter((e,t)=>0===$(t).parents(n).length)):(i=r.find(".SE1 + div.CL"),s=r.find("span.B2")),i.prev().addBack().remove(),s.filter((e,t)=>t.innerHTML.startsWith(se)).next("br").addBack().remove()}(class{static select(){switch(document.location.pathname){case"/ib/act_main.php":case"/ib/act_trade.php":case"/ib/act_card.php":this.main();break;case"/ib/act_battle.php":this.battle();break;case"/ib/act_se.php":this.serif();break;case"/ib/act_aide.php":this.aide();break;case"/ib/act_chat.php":case"/ib/act_comu.php":this.chat();break;case"/ib/act_chara.php":this.chara();case"/ib/act_np.php":this.np()}}static main(){const e=$("input").filter((e,t)=>/^dt_.*?mes\d*$/.test(t.getAttribute("name")||""));(new re).enable(e),this.enableUtilityFuncs(e.add("textarea[name='dt_nikki']")),this.enableSerifPreview({$serifIcons:e.prev().prev(),$serifTexts:e.prev(),initialPreviewContainerSelector:"#NPVHD"})}static battle(){const e=$("input").filter((e,t)=>/^dt_.*?ms\d*(?:-\d*)?$/.test(t.getAttribute("name")||""));this.enableSerifFuncs(e);const t=this.getIdFromLocation();let n;t&&(n={nickname:$("a[href^='act_battle.php'] > span.Y3").html().slice(1,-1),subIconNicknames:N.load(t)}),this.enableSerifPreview({$serifIcons:e.map((e,t)=>$(t).prevUntil("select").last().prev()[0]),$serifTexts:e.prev(),iconToText:e=>$(e).nextUntil("textarea").last().next()[0],textToIcon:e=>$(e).prevUntil("select").last().prev()[0],characterInfo:n})}static serif(){const e=$("input").filter((e,t)=>/^dt_se\d*(?:-\d*)?$/.test(t.getAttribute("name")||""));this.enableSerifFuncs(e);const t=this.getIdFromLocation();let n;t&&(n={nickname:$("a[href^='act_se.php'] > span.Y3").html().slice(1,-1),subIconNicknames:N.load(t)}),this.enableSerifPreview({$serifIcons:e.prev().prev(),$serifTexts:e.prev(),characterInfo:n})}static aide(){const e=$("tr[id^='EDIT']").filter((e,t)=>/\d+$/.test(t.id)).get().map(e=>/\d+$/.exec(e.id)[0]);for(const t of e)N.extract(t)}static chat(){const e=$("textarea[name='dt_mes']");this.enableUtilityFuncs(e),this.enableMessagePreview(e.next().next(),e,e.next().next().next())}static np(){const e=$("input").filter((e,t)=>/^dt_.*?mes\d*$/.test(t.getAttribute("name")||""));this.enableSerifFuncs(e)}static chara(){N.extract()}static enableHelp(){new W(P).enable(document.body,".PreviewHeader")}static enableSerifFuncs(e){(new re).enable(e),this.enableUtilityFuncs(e.prev())}static enableUtilityFuncs(e){(new ie).enable(document.body,"form"),(new Y).enable(e),(new Q).enable(e),(new ne).enable(e)}static enableSerifPreview(e){this.enableHelp(),oe(document.body,void 0,e.initialPreviewContainerSelector),new B(A,!1,e.characterInfo).enableSerifPreview(e.$serifIcons,e.$serifTexts,e.iconToText,e.textToIcon,!0)}static enableMessagePreview(e,t,n){this.enableHelp(),new H(A).enableMessagePreview(e,t,n,t.closest("div"))}static getIdFromLocation(){if(!document.location.search)return;const e=/^a=(\d+)$/,t=document.location.search.substring(1).split("&").find(t=>e.test(t));return t?e.exec(t)[1]:void 0}}).select()}]);