(()=>{var e={654:(e,t,n)=>{var r=n(733).securely,o=n(228),u=n(648),c=u.getFramesArray,i=u.isFrameElement;function a(e,t,n){i(t)&&r((function(){var r=t.onloadS;r&&(t.onloadS=null,t.removeAttributeS("onload"),t.addEventListenerS("load",(function(){o(e,[this],n)})),t.onloadS=r)}))}e.exports=function(e,t,n){for(var r=0;r<t.length;r++)for(var o=t[r],u=c(o,!0),i=0;i<u.length;i++)a(e,u[i],n)}},750:e=>{e.exports=function(e){e&&e.contentWindow}},228:(e,t,n)=>{var r=n(733).securely,o=n(851),u=n(750);function c(e,t){for(var n=null,u=-1;e[++u];)if(!r((function(){return o(e[u],e,e.ObjectS)}))&&e[u].frameElement===t){n=e[u];break}return n}e.exports=function(e,t,n){for(var r=0;r<t.length;r++){var o=t[r];u(o);var i=c(e,o);i&&n(i)}}},328:(e,t,n)=>{var r=n(733).securely,o=n(648).getFramesArray;e.exports=function(e,t){for(var n=function(e){var n=t[e];if("string"!=typeof n)return"continue";var u=r((function(){return document.createElementS("template")}));r((function(){return u.innerHTMLS=n})),function(e){for(var t=function(t){var n=e[t];r((function(){return n.removeAttributeS("onload")}))},n=0;n<e.length;n++)t(n)}(o(u.content,!1)),t[e]=r((function(){return u.innerHTMLS}))},u=0;u<t.length;u++)n(u)}},352:(e,t,n)=>{var r,o=n(733),u=o.securely,c=o.secureNewWin,i=n(228),a=n(583),f=n(459),l=n(58);e.exports=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;function o(r){e(t,r),u((function(){r.frameElement.addEventListenerS("load",(function(){i(n,[this],(function(){e(t,r)}))}))}))}(r=r||t)===t&&(c(n),a(n,o),f(n,o),l(n,o),t(n,u))}},58:(e,t,n)=>{var r=n(654),o=n(733).securely,u=n(648),c=u.getFramesArray,i=u.getArguments,a=n(328),f=n(228),l={Document:["replaceChildren","append","prepend","write","writeln"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"]};e.exports=function(e,t){var n=function(n){for(var u=l[n],p=function(l){var p=u[l];o((function(){var u=ObjectS.getOwnPropertyDescriptor(e[n].prototype,p),l=u.set?"set":"value";u[l]=function(e,t,n){return function(){var u=this,l=i(arguments),p=o((function(){return u.parentElementS||u}));r(e,l,n),a(e,l);var s=o((function(){return t.applyS(u,l)})),d=c(p,!1);return f(e,d,n),f(e,l,n),s}}(e,u[l],t),ObjectS.defineProperty(e[n].prototype,p,u)}))},s=0;s<u.length;s++)p(s)};for(var u in l)n(u)}},459:(e,t,n)=>{var r=n(228),o=n(733).securely,u=n(648).getArguments;function c(e,t,n){if(t)return t.handleEvent?t.handleEvent.apply(t,n):t.apply(e,n)}function i(e,t,n){return function(){var t=this,i=u(arguments),a="function"==typeof i[0]?0:1,f=i[a];return i[a]=function(){r(e,[this],n);var t=u(arguments);c(this,f,t)},o((function(){return t.addEventListenerS(i[0],i[1],i[2],i[3])}))}}e.exports=function(e,t){o((function(){return ObjectS.defineProperty(e.EventTarget.prototype,"addEventListener",{value:i(e,addEventListener,t)})}))}},583:(e,t,n)=>{n(648).getArguments,e.exports=function(e,t){e.open,e.open=function(){return null}}},733:(e,t,n)=>{var r=n(983),o=[top],u={objects:{document:["createElement"],Object:["defineProperty","getOwnPropertyDescriptor"]},prototypes:{Attr:["localName","name","nodeName"],String:["toLowerCase"],Function:["apply","call","bind"],Map:["get","set"],Node:["nodeType","parentElement","toString"],Document:["querySelectorAll"],DocumentFragment:["querySelectorAll","toString"],Object:["toString"],Array:["includes","push","slice"],Element:["innerHTML","toString","querySelectorAll","getAttribute","removeAttribute","tagName"],HTMLElement:["onload","toString"],HTMLScriptElement:["src"],EventTarget:["addEventListener"]}},c=r(top,u);e.exports={securely:c,secureNewWin:function(e){c((function(){o.includesS(e)||(o.pushS(e),r(e,u))}))}}},648:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var o=n(733).securely;function u(e,t){for(var n=!1,r=function(r){o((function(){e.includesS(t[r])||(e.pushS(t[r]),n=!0)}))},u=0;u<t.length;u++)r(u);return n}e.exports={getArguments:function(e){for(var t=[],n=0;n<e.length;n++)t[n]=e[n];return t},getFramesArray:function(e,t){var n,c=[];if(null===e||"object"!==r(e))return c;if(n=e,"[object TrustedHTML]"===o((function(){return n.toStringS()}))||!function(e){return o((function(){return[ElementS.prototype.ELEMENT_NODE,ElementS.prototype.DOCUMENT_FRAGMENT_NODE,ElementS.prototype.DOCUMENT_NODE].includesS(e.nodeTypeS)}))}(e))return c;var i=o((function(){return function(e){switch(o((function(){return e.toStringS()}))){case"[object HTMLDocument]":return o((function(){return window.Document}));case"[object DocumentFragment]":return o((function(){return window.DocumentFragment}));default:return o((function(){return window.Element}))}}(e).prototype.querySelectorAllS.call(e,"iframe,frame,object,embed")}));return u(c,o((function(){return Array.prototype.sliceS.call(i)}))),t&&u(c,[e]),c},isFrameElement:function(e){return o((function(){return["[object HTMLIFrameElement]","[object HTMLFrameElement]","[object HTMLObjectElement]","[object HTMLEmbedElement]"].includesS(e.toStringS())}))}}},983:(e,t,n)=>{var r=n(586),o=n(587),u=n(172),c=!1;function i(){return c}function a(e,t){var n=e.document.createElement("iframe");e.document.head.appendChild(n),t(n.contentWindow),n.parentElement.removeChild(n)}function f(e,t,n,r,o,u,i,a,f,l,p){var s,d,m=c;c=!0;try{s=e(t,n,r,o,u,i,a,f,l,p)}catch(u){d=u}if(m||(c=!1),d)throw d;return s}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{objects:{},prototypes:{}};return a(e,(function(n){f((function(){r(e,n,i,t.objects||{}),o(e,n,i,t.prototypes||{}),u(e,n,i)}))})),f}},586:e=>{e.exports=function(e,t,n,r){for(var o in r)for(var u=r[o],c=function(r){var c=u[r],i=t[o][c];"function"==typeof i&&(i=i.bind(t[o])),t.Object.defineProperty(e[o],c+"S",{configurable:!1,get:function(){if(n())return i}})},i=0;i<u.length;i++)c(i)}},587:e=>{function t(e,t){return function(n,r,o,u,c){if(t())return e(this,n,r,o,u,c)}}function n(e,n,r){var o=n.value,u=n.set||function(){},c=n.get||function(){return o};n.configurable=!1,delete n.value,delete n.writable;var i=e.Function.prototype.call.bind(c),a=e.Function.prototype.call.bind(u);return n.get=t(i,r),n.set=t(a,r),n}function r(e,t,r,o,u,c){for(var i=e[u],a=[];;){var f=t.Object.getOwnPropertyDescriptor(i.prototype,c);if(t.Array.prototype.push.call(a,i.prototype),f)break;i=t.Object.getPrototypeOf(i.prototype).constructor}for(var l=t.Object.getOwnPropertyDescriptor(a[a.length-1],c);a.length;){var p=t.Array.prototype.pop.call(a);r[p.constructor.name]&&t.Array.prototype.includes.call(r[p.constructor.name],c)||(t.Object.defineProperty(p,c+"S",n(t,l,o)),r[p.constructor.name]=r[p.constructor.name]||[],t.Array.prototype.push.call(r[p.constructor.name],c))}}e.exports=function(e,t,n,o){var u=new t.Object,c=function(c){var i=t[c];t.Object.defineProperty(e,c+"S",{configurable:!1,get:function(){if(n())return i}}),u[c]=u[c]||[];for(var a=o[c],f=0;f<a.length;f++){var l=a[f];r(e,t,u,n,c,l),r(e,t,u,n,c+"S",l)}};for(var i in o)c(i)}},172:e=>{e.exports=function(e,t,n){var r=t.Object.getOwnPropertyDescriptor(e.Document.prototype,"currentScript").get.bind(e.document);t.Object.defineProperty(e.document,"currentScriptS",{configurable:!1,get:function(){if(n())return r()}})}},626:e=>{e.exports={SRC_IS_NOT_A_WINDOW:'provided argument "src" must be a proper window of instance Window',DST_IS_NOT_A_WINDOW:'provided argument "dst" must be a proper window of instance Window',SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:'provided argument "src" must be a window in the same origin as the current context window'}},851:(e,t,n)=>{const{DST_IS_NOT_A_WINDOW:r,SRC_IS_NOT_A_WINDOW:o,SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:u}=n(626);function c(e,t){const n=t(e);return n===n.window}function i(e,t,n){return null===n.getPrototypeOf.call(t,e)}e.exports=function(e,t=window,n=window.Object){if(!c(t,n))throw new Error(o);if(!c(e,n))throw new Error(r);if(i(window,t,n))throw new Error(u);return i(e,t,n)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t=n(352),r=n.n(t);e=window,Object.defineProperty(e,"SNOW",{value:r()})})()})();