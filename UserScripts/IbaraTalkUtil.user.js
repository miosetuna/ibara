// ==UserScript==
// @name        IbaraTalkUtil
// @namespace   https://twitter.com/11powder
// @description 交流ってスバラシティ
// @include     http://lisge.com/ib/talk.php*
// @version     1.0.9.1
// @updateURL   https://pejuta.github.io/IbaraUtilities/UserScripts/IbaraTalkUtil.user.js
// @downloadURL https://pejuta.github.io/IbaraUtilities/UserScripts/IbaraTalkUtil.user.js
// @grant       none
// ==/UserScript==
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e){t.exports="<div class='Preview'><div class='Y3 PreviewHeader'>《{PREVIEW_TYPE}プレビュー》 <a href='#'> [Help] </a></div>{INNER_HTML}</div>"},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(s).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r,i,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,d=0,h=[],u=n(10);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=s[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(w(r.parts[o],e))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(w(r.parts[o],e));s[r.id]={id:r.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],o=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function v(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=h[h.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),v(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function w(t,e){var n,r,i,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var o=d++;n=c||(c=b(e)),r=E.bind(null,n,o,!1),i=E.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),v(t,e),e}(e),r=F.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=N.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var o=n[i];(a=s[o.id]).refs--,r.push(a)}t&&f(p(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete s[a.id]}}}};var y,S=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function E(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=S(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function N(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function F(t,e,n){var r=n.css,i=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||s)&&(r=u(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports="<div style='position: absolute; z-index: 2;'><div class='SE3'><table cellpadding='0' cellspacing='0' class='SE0'><tr valign='TOP'>\r\n    <td width='70'><img src='p/iba_icon.png' class='RE2' alt='RE'></td>\r\n    <td class='F3'>\r\n        <a><span class='Y4'>{SCRIPT_NAME}の機能・使い方</span></a><br>\r\n            <div style='margin:10px;'>\r\n            ・入力した発言内容を自動的に解析してプレビューを表示します。<br>\r\n            ・<b class='O3'>Ctrl+Shift+Enterキー</b>を押すと、送信ボタンを押したのと同様にその発言内容を送信します。<br>\r\n            ・<b class='O3'>Tab</b>キーを押すと、欠けている装飾閉じタグ(<b class='Y3'>&lt;/B&gt;, &lt;/f4&gt;</b>など)を自動的に補完します。<br>\r\n            ・タグ名(<b class='Y3'>i4, S</b>など)を入力してからTabキーを押すと、指定の装飾タグを自動入力します。<br>\r\n            　<span class='P3'>例： f5 ⇒ &lt;f5&gt&lt;/f5&gt</span><br>\r\n            <br>　(hint) 入力自動補完に対応しているタグ名の一覧（小文字可、半角のみ）：<br><b class='Y3'>\r\n                　　 F[1-7] B B[1-7] I I[1-7] S S[1-7] U U[1-7]\r\n            </b>\r\n            </div>\r\n    </td>\r\n</tr></table></div></div>"},function(t,e){t.exports="<div class='{CNT_CLASS_NAME}'><table cellpadding='0' cellspacing='0' class='SE0'><tr valign='TOP'>\r\n   <td width='70'><img src='{ICON_URL}' class='RE2' alt='RE'></td>\r\n   <td class='F3'>\r\n       {RESPONSE}\r\n       <a href='#'><span class='Y3'>{SENDER_NAME}({SENDER_ENO})</span></a><br>{TALK_HTML}\r\n   </td>\r\n</tr></table></div>"},function(t,e){t.exports='<a href="talk.php?p={PLACE_ID}&amp;sno={TREE_ID}" target="_blank" class="F1">＞{RES_NAMES} <br></a>'},function(t,e){t.exports='<div class="{CLASS_NAME}">\r\n<table cellpadding="0" cellspacing="0" class="SE0"><tbody><tr valign="TOP"><td width="70" rowspan="2"><img src="{ICON_URL}" alt="RE" class="RE2"></td>\r\n<td class="F3"><a href="k/now/r{ENO}.html" target="_blank"><span class="Y3">{NAME}({ENO})</span></a><br>{RES_HTML}{BODY_HTML}</td></tr>\r\n<tr valign="BOTTOM"><td align="RIGHT" class="B1"><a href="./talk.php?p={PLACE_ID}" target="_blank"><span class="B1">at {PLACE_NAME}</span></a> ({DATE}) <a class="RE" style="display: none;" data-nn="{ID}"></a><a href="./talk.php?p={PLACE_ID}&sno={TREE_ID_OR_ID}" target="_blank"><span class="ShowTree">Show Tree</span></a></td></tr></tbody></table>\r\n</div>'},function(t,e){t.exports='<div id="FavLine">\r\n    <div id="FavLinePrev" class="BUT2"></div>\r\n    <div id="FavLineNav">\r\n        <div id="FavSearch">\r\n            <span>検索： </span>\r\n            <input type="text" class="TXT">\r\n            <select class="ARE">\r\n                <option value="0">降順</option>\r\n                <option value="1">昇順</option>\r\n            </select>\r\n        </div>\r\n        <div id="FavLineNext" class="BUT2"></div>\r\n    </div>\r\n    <div id="FavLineBody">\r\n        <div id="FavLeftLine"></div><div id="FavRightLine"></div>\r\n    </div>\r\n</div>'},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"@charset \"utf-8\";\r\n\r\ndiv.MXM > table[width='970']:first-of-type td[width='700'] {\r\n    /* say container */\r\n    max-width: 700px;\r\n    overflow: visible;\r\n}\r\n\r\ndiv.MXM > table[width='970']:first-of-type td[width='270'] {\r\n    /* say search */\r\n    vertical-align: top;\r\n    padding-top: 20px;\r\n}\r\n\r\n.SE3, .SE4 {\r\n    overflow: visible;\r\n    max-width: calc(100% - 20px);\r\n}\r\n\r\n.Preview .SE3, .Preview .SE4  {\r\n    max-width: initial;\r\n}\r\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,s=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,'@charset "utf-8";\r\n\r\n.OneColumn .SE3 > table, .OneColumn .SE4 > table {\r\n    width: 900px;\r\n}\r\n.TwoColumns .SE3 > table, .TwoColumns .SE4 > table {\r\n    width: 440px;\r\n}',""])},function(t,e,n){var r=n(14);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,'@charset "utf-8";\r\n\r\n.ShowTree {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    color: #DDDD66;\r\n    cursor: pointer;\r\n    margin: 0 6px;\r\n    padding: 0 4px 0 3px;\r\n    background: #333300;\r\n    transition: 0.1s;\r\n    border: 1px solid #444400;\r\n}\r\n\r\n.ShowTree:hover {\r\n    color: #66CC33;\r\n}',""])},function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,'@charset "utf-8";\r\n\r\n#FavLineNav {\r\n    position: relative;\r\n    min-height: 1px;\r\n}\r\n\r\n#FavLinePrev, #FavLineNext {\r\n    display: inline-block;\r\n    width: 200px;\r\n    text-align: center;\r\n    position: absolute;\r\n}\r\n#FavLinePrev {\r\n    left: 15px;\r\n}\r\n#FavLineNext {\r\n    right: 15px;\r\n}\r\n\r\n#FavSearch {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: 500px;\r\n    text-align: center;\r\n}\r\n\r\n#FavSearch > input {\r\n    width: 360px;\r\n}\r\n\r\n.ShowFavsBtn {\r\n    color: #DD4444;\r\n    background-color: black;\r\n    border: #661111 solid 1px;\r\n    border-radius: 3px;\r\n    margin-left: 6px;\r\n    padding: 2px 4px 0px 4px;\r\n    font-size: 13.5px;\r\n    line-height: 30px;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    transition: 0.1s;\r\n}\r\n.ShowFavsBtn:hover {\r\n    border-color: #992222;\r\n    background-color: #660000;\r\n    color: #FF6666;\r\n}\r\n.ShowFavsBtn.Shown {\r\n    color: #EE5555;\r\n    background-color: #FFEEEE;\r\n}\r\n.ShowFavsBtn.Shown:hover {\r\n    background-color: #FFCCCC;\r\n}\r\n\r\n.FavChat {\r\n    display: inline-block;\r\n    height: 18px;\r\n    position: relative;\r\n    top: 1px;\r\n    left: 1px;\r\n    color: #DD4444;\r\n    border: #661111 solid 1px;\r\n    background-color: #110000;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n    margin: 0 7px 0 5px;\r\n}\r\n.FavChat:before {\r\n    content: "\\2661";\r\n    display: inline-block;\r\n    height: 100%;\r\n    padding: 0 4px;\r\n}\r\n.FavChat:hover {\r\n    color: #FF6666;\r\n    border-color: #992222;\r\n    background-color: #660000;\r\n}\r\n\r\n.FavChat.Favd {\r\n    color: #EE5555;\r\n    background-color: #FFEEEE;\r\n}\r\n.FavChat.Favd:hover {\r\n    background-color: #FFCCCC;\r\n}\r\n.FavChat.Favd:before {\r\n    content: "\\2665";\r\n}\r\n\r\n#FavLineBody {\r\n    margin-top: 42px;\r\n}\r\n\r\n#FavLeftLine, #FavRightLine {\r\n    float: left;\r\n    padding: 0px 12px;\r\n}\r\n.OneColumn #FavLeftLine, .OneColumn #FavRightLine {\r\n    width: 920px;\r\n}\r\n.TwoColumns #FavLeftLine, .TwoColumns #FavRightLine {\r\n    width: 460px;\r\n}\r\n.OneColumn #FavLeftLine {\r\n    border-right: none;\r\n}\r\n.TwoColumns #FavLeftLine {\r\n    border-right: 1px solid rgb(51, 51, 51);\r\n}',""])},function(t,e,n){"use strict";function r(t){return t?t.replace(/(?:\r\n|\r|\n)/g,"<BR>"):t}n.r(e);class i{constructor(){}enable(t,e){this.eventCallback=function(t){var e;this.value=(e=this.value)?e.replace(/<br>/gi,"\r\n"):e},e?$(t).on("keyup input",e,this.eventCallback):$(t).on("keyup input",this.eventCallback)}}const s={"&":"&amp;","'":"&#x27;",'"':"&quot;","`":"&#x60;","<":"&lt;",">":"&gt;"},o=new RegExp(`[${Object.keys(s).join("")}]`,"g");function a(t){return t.replace(o,t=>s[t])}const l=function t(e){const n=Object.getOwnPropertyNames(e);for(const r of n){const n=e[r];e[r]=n&&"object"==typeof n?t(n):n}return Object.freeze(e)}({F:{pattern:"F(?=\\d)",tagName:"span"},B:{pattern:"B",tagName:"b"},I:{pattern:"I",tagName:"i"},S:{pattern:"S",tagName:"s"},U:{pattern:"U",tagName:"u"}});let c=0;const d=[];for(const t in l)if(l.hasOwnProperty(t)){const e=l[t].pattern;c=e.length,d.push(e)}const h=c+1,u=d.join("|"),f="(?:"+u+")[1-7]?";function p(t,e,n,r){const i=l[e.toUpperCase()].tagName;return n?`<${i} class='F${n}'>${r}</${i}>`:`<${i}>${r}</${i}>`}const v=new RegExp(a("<"+("("+u+")([1-7]?)")+">(.*?)</\\1\\2>"),"ig");const m=new RegExp("<("+f+")>","gi"),b=new RegExp("</("+f+")>","gi"),g=new RegExp("<?("+f+")>?$","i"),w=new RegExp("</("+f+")>$","i"),y=new RegExp("</?([^>]{0,"+h+"}?)$"),S=new RegExp(f,"i");class E{constructor(){}enable(t,e){const n=this;this.eventCallback=function(t){n.autoCompleteTag(this,t)},e?$(t).on("keydown",e,this.eventCallback):$(t).on("keydown",this.eventCallback)}autoCompleteTag(t,e){if(9===e.which){if(e.preventDefault(),t.selectionEnd&&t.selectionStart!==t.selectionEnd)return void t.setSelectionRange(t.selectionEnd,t.selectionEnd);if(this.insertOrnamentTags(t))return;this.insertLastUnclosedTagEnd(t)}else"/"===e.key&&this.completeLastUnclosedTagEnd(t)&&e.preventDefault()}insertOrnamentTags(t){if("number"!=typeof t.selectionStart)return!1;if(t.selectionEnd&&t.selectionStart!==t.selectionEnd)return!1;const e=t.selectionStart,n=t.value.slice(0,e),r=t.value.slice(e),i=g.exec(n);if(!i)return!1;if(w.test(n))return!1;if(/^<[^<>]+?>$/.test(i[0]))return!1;const s=y.exec(n);if(s){const t=new RegExp("^([^<]{0,"+(h-s[1].length)+"}?)>").exec(r);if(t){if(S.test(s[1]+t[1]))return!1}}const o="<"+i[1]+"></"+i[1]+">";t.value=n.slice(0,-i[0].length)+o+r;const a=e-i[0].length+i[1].length+2;return t.setSelectionRange(a,a),!0}insertLastUnclosedTagEnd(t){if("number"!=typeof t.selectionStart)return!1;if(t.selectionEnd&&t.selectionStart!==t.selectionEnd)return!1;const e=t.selectionStart,n=t.value.slice(0,e),r=t.value.slice(e),i=this.findUnclosedTags(n,r);if(0===i.length)return!1;const s="</"+i[i.length-1]+">";return t.value=n+s+r,t.setSelectionRange(e,e+s.length),!0}findUnclosedTags(t,e){const n=t.match(m);if(!n)return[];const r=n.map((t,e)=>t.slice(1,t.length-1)),i=(t+e).match(b);if(!i)return r;const s=i.map((t,e)=>t.slice(2,t.length-1));for(let t=s.length-1;t>=0;t--)for(let e=r.length-1;e>=0;e--)if(s[t]===r[e]){r.splice(e,1);break}return r}completeLastUnclosedTagEnd(t){if("number"!=typeof t.selectionStart)return!1;if(t.selectionStart<=0||t.selectionStart!==t.selectionEnd)return!1;const e=t.selectionStart,n=t.value.slice(0,e),r=t.value.slice(e);if("<"!==n[e-1])return!1;const i=this.findUnclosedTags(n,r);if(0===i.length)return!1;const s="/"+i[i.length-1]+">";return t.value=n+s+r,t.setSelectionRange(e+1,e+s.length),!0}}class N{constructor(){}enable(t,e,n){let r="input[type='submit']";"string"==typeof n&&(r+="[value='"+n+"']");const i=this;this.eventCallback=function(t){const e=$(this).closest("form").find(r);i.submitWithCertainKeysDown(e,t)},e?$(t).on("keydown",e,this.eventCallback):$(t).on("keydown",this.eventCallback)}submitWithCertainKeysDown(t,e){13===e.which&&e.ctrlKey&&e.shiftKey&&(e.preventDefault(),t.first().click())}}var F=n(3),x=n.n(F),A="IbaraTalkUtil",T=1,C=5;function I(t,e){let n=t.toString();for(const t in e)void 0!==e[t]&&null!==e[t]&&(n=n.replace(new RegExp("{"+t+"}","g"),e[t].toString()));return n}class L{constructor(){this.attachedElement=null,this.$help=$(I(x.a,{SCRIPT_NAME:A}));const t=this;this.onClickHandler=function(e){e.preventDefault();const n=this;t.attachedElement===n?(t.$help.hide(),t.attachedElement=null):(t.$help.insertAfter(n).show(),t.attachedElement=n)}}enable(t,e){e?$(t).on("click",e,this.onClickHandler):$(t).on("click",this.onClickHandler),this.$help.on("click",()=>{this.$help.hide(),this.attachedElement=null})}}var _=n(0),O=n.n(_),R=n(4),D=n.n(R);class B{constructor(){this.id=0}setDelay(t,e,...n){this.id&&clearTimeout(this.id),arguments.length>=3?this.id=setTimeout(e=>{t.apply(null,e),this.id=0},e,n):this.id=setTimeout(()=>{t.call(null),this.id=0},e)}}function k(t){if(!t)return t;const e=/^[ \r\n\t]*([\s\S]*?)\s*$/.exec(t);return e?e[1]:t}n(8);class M extends class{constructor(t){this.delayMS=t,this.delayer=new B,this.eventCallback=e=>{this.delayer.setDelay(()=>this.previewEvent(e),t,e)}}static formatPreviewHtml(t,e){const n=e.extraFormatArg||{};return I(t,$.extend(n,{CHARS:e.chars,MAX_CHARS:e.maxChars,PREVIEW_TYPE:e.previewType}))}static buildPreviewParentBlock(t){return $("<div class='PreviewParentBlock' name='Preview' />").addClass(t)}static insertPreview(t,e){let n=t.next(".PreviewParentBlock");return 0===n.length&&(n=this.buildPreviewParentBlock(e).insertAfter(t)),n}static appendPreview(t,e){var n=t.find(".PreviewParentBlock");return 0===n.length&&(n=this.buildPreviewParentBlock(e).appendTo(t)),n}static updateTalkPreview(t){const e=this.insertPreview(t.$insertAfter,t.styleName),n=k(t.$text.val());if(0===n.length)return void e.css("display","none");if(n.length>t.maxChars)return void e.html(this.formatPreviewHtml(I(O.a,{INNER_HTML:"<div class='SE2'>【ERROR】書き込み内容は{MAX_CHARS}文字以内です！（現在{CHARS}文字）</div>"}),{chars:n.length,maxChars:t.maxChars,previewType:"発言"})).css("display","block");const i=k(t.$name.val());if(i.length>8)return void e.html(this.formatPreviewHtml(I(O.a,{INNER_HTML:"<div class='Preview'><div class='SE2'>【ERROR】発言者名は{MAX_CHARS}文字以内です！（現在{CHARS}文字）</div></div>"}),{chars:i.length,maxChars:8,previewType:"発言"})).css("display","block");let s=a(i),o=n;const l=/^@([\s\S]*?)@/.exec(o);l&&(l[1]&&(s=r(a(l[1]))),o=o.substring(l[0].length)),o=function(t){let e=a(t);e=r(e).replace(/&lt;br&gt;/gi,"<BR>");for(let t=0;t<2;t++)e=e.replace(/&lt;(([1-9][0-9]?)D([1-9][0-9]?[0-9]?))&gt;/i,"<span class='DX'>【 <b>$1</b>：[$2個の$3面ダイスを振る] 】</span>");return function(t,e,n){let r=t.toString();for(;;){if(!e.test(r))return r;r=r.replace(e,n)}}(e,v,p)}(o);const c=t.$icon.val();let d="p/nii.png";/^\d+$/.test(c)&&(d=t.iconUrls[parseInt(c,10)]);const h=this.formatPreviewHtml(t.template,{chars:n.length,maxChars:t.maxChars,previewType:"発言",extraFormatArg:{ICON_URL:d,SENDER_NAME:s,TALK_HTML:o}});e.html(h).css("display","block")}}{constructor(t){super(t),this.delayMS=t,this.iconUrls=M.extractOrLoadIconUrlArray(),this.userENo=(/IBR_KEY=.+?_(\d+)(?:;|$)/.exec(document.cookie)||[])[1]||null}enable(){$(document.body).on("keyup input","textarea[name^='dt_mes']",this.eventCallback).on("keyup input","input[name^='dt_ai']",this.eventCallback).on("change","select[name^='dt_ic']",this.eventCallback)}previewEvent(t){const e=$(t.currentTarget).parent("form"),n=this.formatTalkTemplate(e),r={$insertAfter:e,$text:e.find("textarea[name^='dt_mes']"),$name:e.find("input[name^='dt_ai']"),$icon:e.find("select[name^='dt_ic']"),template:n,maxChars:400,iconUrls:this.iconUrls,styleName:"Talk"};M.updateTalkPreview(r)}formatTalkTemplate(t){let e="SE3",n="";M.isResponseForm(t)&&(e="SE4",n="<a class='F1' href='#'>＞返信 <br></a>");const r=I(D.a,{CNT_CLASS_NAME:e,RESPONSE:n,SENDER_ENO:this.userENo});return I(O.a,{INNER_HTML:r})}static extractOrLoadIconUrlArray(){return $("#CL1 img.IC").get().map(t=>{var e;return null!=(e=t.getAttribute("src"))?e:""})}static isResponseForm(t){return"say"!==t.attr("name")}}n(11);class P{constructor(){}enable(){const t=$("#PLSBN3").parent("a"),e=t.prop("onclick"),n=this;this.eventCallback=function(t){e.call(this,t),n.switchColumnClass(this)},t.prop("onclick","").on("click",this.eventCallback),this.switchColumnClass(t[0])}switchColumnClass(t){2===(-1===t.textContent.indexOf("２列")?2:1)?$("div.MXM").addClass(P.CLASSNAME_TWO_COLUMNS).removeClass(P.CLASSNAME_ONE_COLUMN):$("div.MXM").addClass(P.CLASSNAME_ONE_COLUMN).removeClass(P.CLASSNAME_TWO_COLUMNS)}}P.CLASSNAME_ONE_COLUMN="OneColumn",P.CLASSNAME_TWO_COLUMNS="TwoColumns";var U=function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{l(r.next(t))}catch(t){s(t)}}function a(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((r=r.apply(t,e||[])).next())}))};class j{constructor(t){this.db=null,this.dbName=t.dbName,this.tableName=t.tableName,this.dbVersion=t.dbVersion,t.optionalParameters&&(this.optionalParameters=Object.freeze(Object.assign({},t.optionalParameters)))}get DBPromise(){return this.dbPromise}get DBIsOpen(){return!!this.db}open(t){const e=indexedDB.open(this.dbName,this.dbVersion);return this.dbPromise=new Promise((n,r)=>{const i=this;e.onsuccess=function(t){i.db=this.result,n(i.db)},e.onerror=function(t){i.db=null,r("db error")},e.onupgradeneeded=function(e){const n=this.result;if(t)t(n,e);else{n.createObjectStore(i.tableName,i.optionalParameters)}}})}close(){var t;null===(t=this.db)||void 0===t||t.close()}count(t){if(!this.db)throw this.throwDBIsNotReadyError();const e=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).count(t);return new Promise((t,n)=>{e.onsuccess=function(e){t(this.result)},e.onerror=function(t){n("db error")}})}get(t){if(!this.db)throw this.throwDBIsNotReadyError();const e=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).get(t);return new Promise((t,n)=>{e.onsuccess=function(e){t(this.result)},e.onerror=function(t){n("db error")}})}getAll(t,e){if(!this.db)throw this.throwDBIsNotReadyError();const n=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).getAll(t,e);return new Promise((t,e)=>{n.onsuccess=function(e){t(this.result)},n.onerror=function(t){e("db error")}})}getAllDescending(t,e){return U(this,void 0,void 0,(function*(){const n=[];if(void 0===e)return yield this.iterate(t=>(n.push(t),!1),t,"prev"),n;let r=e;return r<=0?n:(yield this.iterate(t=>(n.push(t),0==--r),t,"prev"),n)}))}getKey(t){if(!this.db)throw this.throwDBIsNotReadyError();const e=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).getKey(t);return new Promise((t,n)=>{e.onsuccess=function(e){t(this.result)},e.onerror=function(t){n("db error")}})}getAllKeys(t,e){if(!this.db)throw this.throwDBIsNotReadyError();const n=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).getAllKeys(t,e);return new Promise((t,e)=>{n.onsuccess=function(e){t(this.result)},n.onerror=function(t){e("db error")}})}add(t,e){if(!this.db)throw this.throwDBIsNotReadyError();const n=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName);return this.addOne(n,t,e)}bulkAdd(t){return U(this,void 0,void 0,(function*(){if(!this.db)throw this.throwDBIsNotReadyError();if(0===t.length)return[];const e=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName),n=[];for(const r of t)n.push(yield this.addOne(e,r));return n}))}put(t,e){if(!this.db)throw this.throwDBIsNotReadyError();const n=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName);return this.putOne(n,t,e)}bulkPut(t){return U(this,void 0,void 0,(function*(){if(!this.db)throw this.throwDBIsNotReadyError();if(0===t.length)return[];const e=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName),n=[];for(const r of t)n.push(yield this.putOne(e,r));return n}))}delete(t){if(!this.db)throw this.throwDBIsNotReadyError();const e=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName);return this.deleteOne(e,t)}bulkDelete(t){return U(this,void 0,void 0,(function*(){if(!this.db)throw this.throwDBIsNotReadyError();if(0===t.length)return;const e=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName);for(const n of t)yield this.deleteOne(e,n)}))}clear(){if(!this.db)throw this.throwDBIsNotReadyError();const t=this.db.transaction(this.tableName,"readwrite").objectStore(this.tableName).clear();return new Promise((e,n)=>{t.onsuccess=function(t){e()},t.onerror=function(t){n("db error")}})}openCursor(t,e,n){if(!this.db)throw this.throwDBIsNotReadyError();return this.db.transaction(this.tableName,n).objectStore(this.tableName).openCursor(t,e)}openKeyCursor(t,e,n){if(!this.db)throw this.throwDBIsNotReadyError();return this.db.transaction(this.tableName,n).objectStore(this.tableName).openKeyCursor(t,e)}iterate(t,e,n,r){const i=this.openCursor(e,n,r);return new Promise((e,n)=>{i.onsuccess=function(n){const r=this.result;r?t(r.value,r)?e():r.continue():e()},i.onerror=function(t){n("db error")}})}iterateKey(t,e,n,r){const i=this.openKeyCursor(e,n,r);return new Promise((e,n)=>{i.onsuccess=function(n){const r=this.result;r?t(r.key,r)?e():r.continue():e()},i.onerror=function(t){n("db error")}})}addOne(t,e,n){const r=t.add(e,n);return new Promise((t,e)=>{r.onsuccess=function(e){t(this.result)},r.onerror=function(t){e("db error")}})}putOne(t,e,n){const r=t.put(e,n);return new Promise((t,e)=>{r.onsuccess=function(e){t(this.result)},r.onerror=function(t){e("db error")}})}deleteOne(t,e){if(!this.db)throw this.throwDBIsNotReadyError();const n=t.delete(e);return new Promise((t,e)=>{n.onsuccess=function(e){t()},n.onerror=function(t){e("db error")}})}throwDBIsNotReadyError(){throw new Error("DBの準備が完了していません。Promiseを参照してDBが開けるまで待機してください。")}}const H=new RegExp(`^\\d{1,${C}}$`);class V{constructor(t){this.id=t.id,this.treeId=t.treeId,this.eno=t.eno,this.resNames=t.resNames,this.name=t.name,this.iconUrl=t.iconUrl,this.placeId=t.placeId,this.placeName=t.placeName,this.date=t.date,this.bodyHtml=t.bodyHtml,this.trueId=V.toTrueId(this.id)}static toTrueId(t){return t%1e3*1e7+Math.floor(t/1e3)}static toId(t){return t%1e7*1e3+Math.floor(t/1e7)}static matchFavItem(t,e){if(!t)return!0;if(H.exec(t)){return parseInt(t,10)===e.eno||!!e.resNames&&-1!==e.resNames.indexOf(`(${t})`)}const n=t.toLowerCase();return-1!==e.name.toLowerCase().indexOf(n)||!!e.resNames&&-1!==e.resNames.indexOf(t)||-1!==e.placeName.toLowerCase().indexOf(n)||-1!==e.bodyHtml.toLowerCase().indexOf(n)}}var W=function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{l(r.next(t))}catch(t){s(t)}}function a(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((r=r.apply(t,e||[])).next())}))};class K{constructor(){this.table=new j({dbName:A,dbVersion:T,tableName:"FavData",optionalParameters:{autoIncrement:!1,keyPath:"trueId"}}),this.table.dbVersion>=1&&this.table.open()}get DBPromise(){return new Promise((t,e)=>{this.table.DBPromise.then(()=>t(),t=>e(t))})}get DBIsOpen(){return this.table.DBIsOpen}addFav(t){return this.table.put(t)}deleteFav(t){return this.table.delete(V.toTrueId(t))}takeFrom(t=null,e,n){return W(this,void 0,void 0,(function*(){let r;return r="number"==typeof t?yield this.table.getAll(IDBKeyRange.lowerBound(V.toTrueId(t),!!e),n):yield this.table.getAll(null,n),r}))}takeLastFrom(t=null,e,n){return W(this,void 0,void 0,(function*(){let r;return r="number"==typeof t?yield this.table.getAllDescending(IDBKeyRange.upperBound(V.toTrueId(t),!!e),n):yield this.table.getAllDescending(null,n),r}))}contains(t){return W(this,void 0,void 0,(function*(){let e=!1;const n=V.toTrueId(t);return yield this.table.iterateKey(t=>(e=!0,!0),n,"prev"),e}))}intersect(t){return W(this,void 0,void 0,(function*(){if(0===t.length)return[];const e=t.map(V.toTrueId).sort((t,e)=>e-t);let n=e.shift();const r=[];return yield this.table.iterateKey(t=>{for(;n>=t;){if(n===t&&r.push(V.toId(n)),0===e.length)return!0;n=e.shift()}return!1},null,"prev"),r}))}search(t,e=null,n,r,i){return W(this,void 0,void 0,(function*(){const s=[];let o=null;if("number"==typeof e&&(o=i&&i.startsWith("prev")?IDBKeyRange.upperBound(V.toTrueId(e),!!n):i&&i.startsWith("next")?IDBKeyRange.lowerBound(V.toTrueId(e),!!n):e),"number"!=typeof r)yield this.table.iterate(e=>{V.matchFavItem(t,e)&&s.push(e)},o,i);else{if(r<=0)return[];let e=r;yield this.table.iterate(n=>{if(V.matchFavItem(t,n)&&(s.push(n),0==--e))return!0},o,i)}return s}))}}var Y=n(5),q=n.n(Y),X=n(6),z=n.n(X),G=n(7),J=n.n(G),Q=(n(13),n(15),function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{l(r.next(t))}catch(t){s(t)}}function a(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((r=r.apply(t,e||[])).next())}))});class Z{constructor(){this.eventCallback=null,this.$frame=null,this.$regularLineElements=$("#LEFTLINE,#RIGHTLINE,form[name='nex'],form[name='bef']"),this.maxShownFavs=Z.initialShownFavs,this.$showFavsBtn=$(`<span class="${Z.CLASSNAME_SHOW_FAVS_BUTTON}">お気に入り</span>`),this.searchDelayer=new B,this.searchingPromise=null,this.db=new K}enable(t){return Q(this,void 0,void 0,(function*(){yield this.db.DBPromise,yield this.addFavButtons(t);const e=this,n=function(t){e.toggleFav(this)};this.eventCallback=n,$(t).on("click","."+Z.CLASSNAME_FAV_BUTTON,n),this.$showFavsBtn.insertAfter($(".BUTT3 > img").parent().parent("a").next("a").next("a")).on("click",()=>this.toggleFavTimeLine())}))}toggleFav(t){if(t.classList.contains(Z.CLASSNAME_FAV_BUTTON_FAVD)){const e=parseInt(t.dataset[Z.DATANAME_FAV_BUTTON_ID],10);this.db.deleteFav(e),t.classList.remove(Z.CLASSNAME_FAV_BUTTON_FAVD)}else{const e=this.buildFavItem(t);this.db.addFav(e),t.classList.add(Z.CLASSNAME_FAV_BUTTON_FAVD)}this.toggleButtonsWithTheSameID(t)}toggleButtonsWithTheSameID(t){if(this.$frame&&$(t).closest(this.$frame).length>0){const e=t.dataset[Z.DATANAME_FAV_BUTTON_ID],n=$(t.ownerDocument).find("."+Z.CLASSNAME_FAV_BUTTON).filter((function(){return this!==t&&this.dataset[Z.DATANAME_FAV_BUTTON_ID]===e}));n.length>0&&n.each((t,e)=>{e.classList.toggle(Z.CLASSNAME_FAV_BUTTON_FAVD)})}}addFavButtons(t,e=!1){return Q(this,void 0,void 0,(function*(){const n=$(t).find("a.RE"),r=n.get().map(t=>{var e;return parseInt(null!=(e=t.getAttribute("nn"))?e:t.dataset.nn,10)});let i=null;return e||(i=new Set(yield this.db.intersect(r))),n.each((t,n)=>{const s=$(`<span class="${Z.CLASSNAME_FAV_BUTTON}"></span>`).insertBefore(n);s[0].dataset[Z.DATANAME_FAV_BUTTON_ID]=r[t].toString(),(e||i.has(r[t]))&&s.addClass(Z.CLASSNAME_FAV_BUTTON_FAVD)}).prev()}))}buildFavItem(t){const e=parseInt(t.dataset[Z.DATANAME_FAV_BUTTON_ID],10),n=t.parentElement.childNodes[1].textContent.slice(2,-2),r=t.parentElement.firstElementChild.textContent.substring(3),i=$(t).closest("table").find("tr:first"),s=i.find("td:first>img")[0],o=parseInt(s.getAttribute("snn"),10),a=parseInt(s.getAttribute("no"),10),l=parseInt(s.getAttribute("pl"),10),c=s.getAttribute("src"),d=i.find("td:eq(1)").clone(),h=d.contents();let u,f=null;h.eq(0).is("a.F1")?(f=h.eq(0).text().slice(1,-1),h.eq(0).remove(),u=h.eq(1)):u=h.eq(0);const p=u.text().slice(0,-(a.toString().length+2));u.remove(),d.children().first().remove();const v=d.html();return d.remove(),new V({id:e,treeId:o,eno:a,placeId:l,placeName:r,date:n,iconUrl:c,resNames:f,name:p,bodyHtml:v})}toggleFavTimeLine(){return Q(this,void 0,void 0,(function*(){if(this.$showFavsBtn.toggleClass(Z.CLASSNAME_SHOW_FAVS_BUTTON_SHOWN),this.$frame&&"none"!==this.$frame.css("display"))return this.$frame.fadeOut(Z.animationFadeMS),void this.$regularLineElements.fadeIn(Z.animationFadeMS);if(this.maxShownFavs<=0)return;this.$frame||(this.$frame=this.insertFavTimeLineElements()),this.$frame.show();const t=yield this.takeFirstEnoughFavItems();yield this.overwriteFavItemsOnFavTimeLine(t),this.$regularLineElements.fadeOut(Z.animationFadeMS)}))}insertFavTimeLineElements(){const t=$(J.a).insertBefore("#LEFTLINE");this.$favTimeLineOrdering=$("#FavSearch > select").val(this.checkIfOrderingIsAscending()?"1":"0"),this.$frame=t;return t.find("#FavLinePrev").html(`前の${this.maxShownFavs}件を表示`).on("click",()=>this.toPrevOfFavTimeLine()),t.find("#FavLineNext").html(`次の${this.maxShownFavs}件を表示`).on("click",()=>this.toNextOfFavTimeLine()),this.enableSearch(),t}takeFirstEnoughFavItems(){return Q(this,void 0,void 0,(function*(){const t=this.getSearchWordValue();return this.checkIfOrderingIsAscending()?yield this.db.search(t,null,null,this.maxShownFavs,"next"):yield this.db.search(t,null,null,this.maxShownFavs,"prev")}))}toNextOfFavTimeLine(){return Q(this,void 0,void 0,(function*(){const t=this.currentFavItems.map(t=>t.trueId),e=this.getSearchWordValue();let n;n=this.checkIfOrderingIsAscending()?yield this.db.search(e,V.toId(Math.max(...t)),!0,this.maxShownFavs,"next"):yield this.db.search(e,V.toId(Math.min(...t)),!0,this.maxShownFavs,"prev"),0!==n.length&&(yield this.overwriteFavItemsOnFavTimeLine(n))}))}toPrevOfFavTimeLine(){return Q(this,void 0,void 0,(function*(){const t=this.currentFavItems.map(t=>t.trueId),e=this.getSearchWordValue();let n;if(n=this.checkIfOrderingIsAscending()?(yield this.db.search(e,V.toId(Math.min(...t)),!0,this.maxShownFavs,"prev")).reverse():(yield this.db.search(e,V.toId(Math.max(...t)),!0,this.maxShownFavs,"next")).reverse(),0!==n.length){if(n.length<this.maxShownFavs){if(this.currentFavItems.length<this.maxShownFavs)return;const t=this.currentFavItems.slice().sort((t,e)=>t.trueId-e.trueId);let e;this.checkIfOrderingIsAscending()?(e=t.slice(0,this.maxShownFavs-n.length),n=n.concat(e)):(e=t.reverse().slice(0,this.maxShownFavs-n.length),n=e.concat(n))}yield this.overwriteFavItemsOnFavTimeLine(n)}}))}overwriteFavItemsOnFavTimeLine(t){return Q(this,void 0,void 0,(function*(){if(!this.$frame)throw new Error("invalid operation");this.currentFavItems=t;const e=t.map(this.formatFav),n=Math.ceil(this.maxShownFavs/2),r=[$(document.createDocumentFragment()),$(document.createDocumentFragment())];for(let t=0;t<e.length;++t)t<n?r[0].append(e[t]):r[1].append(e[t]);const i=this.$frame.find("#FavLeftLine"),s=this.$frame.find("#FavRightLine"),o=i.children(),a=s.children();i.prepend(r[0]),s.prepend(r[1]),o.remove(),a.remove(),this.$frame.find("#FavLineBody").hide().fadeIn(Z.animationFadeMS),yield this.addFavButtons(this.$frame[0],!0)}))}enableSearch(){return Q(this,void 0,void 0,(function*(){if(!this.$frame||!this.$favTimeLineOrdering)throw new Error("invalid operation");const t=this.$frame.find("#FavSearch > input"),e=()=>{const e=this.searchingPromise;this.searchingPromise=(()=>Q(this,void 0,void 0,(function*(){if(!this.$frame)throw new Error("invalid operation");const n=t.val();if(e&&(yield e),n!==t.val())return;const r=this.checkIfOrderingIsAscending()?"next":"prev",i=yield this.db.search(n,null,null,this.maxShownFavs,r);yield this.overwriteFavItemsOnFavTimeLine(i),this.searchingPromise=null})))()};t.on("input",t=>{13===t.keyCode?(t.preventDefault(),this.searchDelayer.setDelay(e,0)):this.searchDelayer.setDelay(e,Z.searchDelayMS)}),this.$favTimeLineOrdering.on("change",t=>{this.searchDelayer.setDelay(e,100)})}))}getSearchWordValue(){return this.$frame&&"none"!==this.$frame.css("display")?this.$frame.find("#FavSearch > input").val():""}checkIfOrderingIsAscending(){return this.$frame&&"none"!==this.$frame.css("display")?"1"===this.$frame.find("#FavSearch > select").val():Z.initiallyOrderedByAscending}formatFav(t){let e,n;t.resNames?(e="SE4",n=q.a):(e="SE3",n="");const r=I(z.a,{RES_HTML:n});return I(r,{CLASS_NAME:e,ID:t.id,TREE_ID:t.treeId,PLACE_NAME:t.placeName,NAME:t.name,ENO:t.eno,PLACE_ID:t.placeId,ICON_URL:t.iconUrl,DATE:t.date,RES_NAMES:t.resNames,BODY_HTML:t.bodyHtml,TREE_ID_OR_ID:0===t.treeId?t.id:t.treeId})}}Z.animationFadeMS=400,Z.searchDelayMS=200,Z.CLASSNAME_FAV_BUTTON="FavChat",Z.CLASSNAME_FAV_BUTTON_FAVD="Favd",Z.CLASSNAME_SHOW_FAVS_BUTTON="ShowFavsBtn",Z.CLASSNAME_SHOW_FAVS_BUTTON_SHOWN="Shown",Z.DEFAULT_SHOWN_FAVS=10,Z.initialShownFavs=parseInt($("input[name='dt_kz']").attr("value")||Z.DEFAULT_SHOWN_FAVS.toString(),10),Z.initiallyOrderedByAscending="1"===$("select[name='dt_jn'] > option").filter((function(){return!!$(this).attr("selected")})).val(),Z.DATANAME_FAV_BUTTON_ID="id",(()=>{if(!document.getElementById("CL1"))return;const t=new i,e=new E,n=new N,r=new L,s=new M(200),o=new P,a=new Z;t.enable(document.body,"textarea[name^='dt_mes']"),n.enable(document.body,"textarea[name^='dt_mes']","発言する"),e.enable(document.body,"textarea[name^='dt_mes']"),r.enable(document.body,".PreviewHeader"),s.enable(),o.enable(),a.enable(document.body)})()}]);