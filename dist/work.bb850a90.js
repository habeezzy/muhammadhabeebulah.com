parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({8:[function(require,module,exports) {
module.exports="/img3.21232dc7.jpg";
},{}],11:[function(require,module,exports) {
module.exports="/LIMM.572fe28a.jpg";
},{}],12:[function(require,module,exports) {
module.exports="/itJS.8f28ac42.jpg";
},{}],19:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],18:[function(require,module,exports) {
var e=require("./bundle-url");function n(e){var n=e.cloneNode();n.onload=function(){e.remove()},n.href=e.href.split("?")[0]+"?"+Date.now(),e.parentNode.insertBefore(n,e.nextSibling)}var l=null;function r(){l||(l=setTimeout(function(){for(var r=document.querySelectorAll('link[rel="stylesheet"]'),t=0;t<r.length;t++)e.getBaseURL(r[t].href)===e.getBundleURL()&&n(r[t]);l=null},50))}module.exports=r;
},{"./bundle-url":19}],7:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./..\\img\\img3.jpg":8,"./..\\img\\LIMM.jpg":11,"./..\\img\\itJS.jpg":12,"_css_loader":18}],9:[function(require,module,exports) {
module.exports="/img1.b98c9d68.jpg";
},{}],10:[function(require,module,exports) {
module.exports="/img2.75c1c173.jpg";
},{}],6:[function(require,module,exports) {
"use strict";require("../scss/main.scss");var i=require("../img/img3.jpg"),e=p(i),r=require("../img/img1.jpg"),g=p(r),u=require("../img/img2.jpg"),m=p(u),s=require("../img/itJS.jpg"),q=p(s),t=require("../img/LIMM.jpg"),j=p(t);function p(i){return i&&i.__esModule?i:{default:i}}
},{"../scss/main.scss":7,"../img/img3.jpg":8,"../img/img1.jpg":9,"../img/img2.jpg":10,"../img/itJS.jpg":12,"../img/LIMM.jpg":11}],20:[function(require,module,exports) {

var e="__parcel__error__overlay__",t=(0,eval)("this"),o=module.bundle.Module;function a(e){o.call(this,e),this.hot={data:module.bundle.hotData,_acceptCallbacks:[],_disposeCallbacks:[],accept:function(e){this._acceptCallbacks.push(e||function(){})},dispose:function(e){this._disposeCallbacks.push(e)}},module.bundle.hotData=null}module.bundle.Module=a;var r=module.bundle.parent;if(!(r&&r.isParcelRequire||"undefined"==typeof WebSocket)){var n=location.hostname,i="https:"===location.protocol?"wss":"ws",c=new WebSocket(i+"://"+n+":51553/");c.onmessage=function(e){var o=JSON.parse(e.data);if("update"===o.type&&(o.assets.forEach(function(e){d(t.parcelRequire,e)}),o.assets.forEach(function(e){e.isNew||u(t.parcelRequire,e.id)})),"reload"===o.type&&(c.close(),c.onclose=function(){location.reload()}),"error-resolved"===o.type&&(console.log("[parcel] ✨ Error resolved"),l()),"error"===o.type){console.error("[parcel] 🚨  "+o.error.message+"\n"+o.error.stack),l();var a=s(o);document.body.appendChild(a)}}}function l(){var t=document.getElementById(e);t&&t.remove()}function s(t){var o=document.createElement("div");o.id=e;var a=document.createElement("div"),r=document.createElement("pre");return a.innerText=t.error.message,r.innerText=t.error.stack,o.innerHTML='<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">'+a.innerHTML+"</div><pre>"+r.innerHTML+"</pre></div>",o}function p(e,t){var o=e.modules;if(!o)return[];var a,r,n,i=[];for(a in o)for(r in o[a][1])((n=o[a][1][r])===t||Array.isArray(n)&&n[n.length-1]===t)&&i.push(+a);return e.parent&&(i=i.concat(p(e.parent,t))),i}function d(e,t){var o=e.modules;if(o)if(o[t.id]||!e.parent){var a=new Function("require","module","exports",t.generated.js);t.isNew=!o[t.id],o[t.id]=[a,t.deps]}else e.parent&&d(e.parent,t)}function u(e,o){var a=e.modules;if(a){if(!a[o]&&e.parent)return u(e.parent,o);var r=e.cache[o];return e.hotData={},r&&(r.hot.data=e.hotData),r&&r.hot&&r.hot._disposeCallbacks.length&&r.hot._disposeCallbacks.forEach(function(t){t(e.hotData)}),delete e.cache[o],e(o),(r=e.cache[o])&&r.hot&&r.hot._acceptCallbacks.length?(r.hot._acceptCallbacks.forEach(function(e){e()}),!0):p(t.parcelRequire,o).some(function(e){return u(t.parcelRequire,e)})}}
},{}]},{},[20,6])
//# sourceMappingURL=/work.ee67a5a0.map