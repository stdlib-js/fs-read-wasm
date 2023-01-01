// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).readWASM=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&b.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(t){var r,e,n;if(null==t)return s.call(t);e=t[d],r=v(t,d);try{t[d]=void 0}catch(r){return s.call(t)}return n=s.call(t),r?t[d]=e:delete t[d],n}:function(t){return s.call(t)};var j=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var h=/./;function w(t){return"boolean"==typeof t}var _=Boolean.prototype.toString;var m=y();function O(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function A(t){return w(t)||O(t)}function E(){return new Function("return this;")()}a(A,"isPrimitive",w),a(A,"isObject",O);var S="object"==typeof self?self:null,P="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},U="object"==typeof T?T:null;var B=function(t){if(arguments.length){if(!w(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(S)return S;if(P)return P;if(U)return U;throw new Error("unexpected error. Unable to resolve global object.")}(),C=B.document&&B.document.childNodes,F=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;function k(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(x,"REGEXP",V),a(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!j(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(k));var G="function"==typeof h||"object"==typeof F||"function"==typeof C?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function L(t){return"function"===G(t)}var I,R=Object.getPrototypeOf;I=L(Object.getPrototypeOf)?R:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=I;var D=Object.prototype;function N(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!j(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&L(r.constructor)&&"[object Function]"===g(r.constructor)&&v(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===D||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}var W="function"==typeof Uint8Array;function X(t){return W&&t instanceof Uint8Array||"[object Uint8Array]"===g(t)}function q(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var H=q(Object.freeze({__proto__:null,default:{}})),J=H.readFile;function K(){var t,r;for(t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);J.apply(null,t)}var Q=H.readFileSync;function Y(t,r){var e;try{e=arguments.length>1?Q(t,r):Q(t)}catch(t){return t}return e}a(K,"sync",Y);var Z="function"==typeof Uint8Array?Uint8Array:null;var $="function"==typeof Uint8Array?Uint8Array:void 0;var tt=function(){var t,r;if("function"!=typeof Z)return!1;try{t=X(r=new Z(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?$:function(){throw new Error("not implemented")};function rt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function et(t,r,e){var n,o;if(arguments.length<3)n={},o=r;else{if(!N(r))throw new TypeError(rt("0C42h",r));n=r,o=e}if(!L(o))throw new TypeError(rt("0C42n",o));function u(t,r){var e,n;if(t)return o(t);if(X(r))return o(null,r);for(e=new tt(r.length),n=0;n<r.length;n++)e[n]=r[n];o(null,e)}n.encoding=null,K(t,n,u)}function nt(t,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return t instanceof r}return a(et,"sync",(function(t,r){var e,n,o,u;if(arguments.length>1){if(!N(r))throw new TypeError(rt("0C42h",r));e=r}else e={};if(e.encoding=null,nt(o=Y(t,e),Error))return o;if(X(o))return o;for(n=new tt(o.length),u=0;u<o.length;u++)n[u]=o[u];return n})),et}));
//# sourceMappingURL=browser.js.map
