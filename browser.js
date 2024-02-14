// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function S(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+S(n):S(n)+r}var _=String.fromCharCode,O=isNaN,E=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function A(r){var t,e,n,i,a,l,f,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=k.exec(r);n;)(t=r.slice(o,k.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=k.lastIndex,n=k.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){return"string"==typeof r}function P(r){var t,e;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[V(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return A.apply(null,t)}var C,U=Object.prototype,$=U.toString,I=U.__defineGetter__,B=U.__defineSetter__,R=U.__lookupGetter__,L=U.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(R.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,t,e.get),a&&B&&B.call(r,t,e.set),r};var M=C;function G(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Z=W(),N=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&X.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"",H=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return N.call(r);e=r[q],t=z(r,q);try{r[q]=void 0}catch(t){return N.call(r)}return n=N.call(r),t?r[q]=e:delete r[q],n}:function(r){return N.call(r)},J=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)},K=/./;function Q(r){return"boolean"==typeof r}var Y=W();function rr(){return Y&&"symbol"==typeof Symbol.toStringTag}var tr=Object.prototype.toString,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",or=rr()?function(r){var t,e,n;if(null==r)return tr.call(r);e=r[nr],t=z(r,nr);try{r[nr]=void 0}catch(t){return tr.call(r)}return n=tr.call(r),t?r[nr]=e:delete r[nr],n}:function(r){return tr.call(r)},ir=Boolean,ar=Boolean.prototype.toString,cr=rr();function ur(r){return"object"==typeof r&&(r instanceof ir||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===or(r)))}function lr(r){return Q(r)||ur(r)}function fr(){return new Function("return this;")()}G(lr,"isPrimitive",Q),G(lr,"isObject",ur);var sr="object"==typeof self?self:null,pr="object"==typeof window?window:null,yr="object"==typeof globalThis?globalThis:null,gr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fr()}if(yr)return yr;if(sr)return sr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=gr.document&&gr.document.childNodes,br=Int8Array,hr=W(),vr=Object.prototype.toString,mr="function"==typeof Symbol?Symbol:void 0,wr="function"==typeof mr?mr.toStringTag:"",Sr=hr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return vr.call(r);e=r[wr],t=z(r,wr);try{r[wr]=void 0}catch(t){return vr.call(r)}return n=vr.call(r),t?r[wr]=e:delete r[wr],n}:function(r){return vr.call(r)};function jr(){return/^\s*function\s*([^(]*)/i}var _r=/^\s*function\s*([^(]*)/i;function Or(r){return null!==r&&"object"==typeof r}function Er(r){var t,e,n,o;if(("Object"===(e=Sr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=_r.exec(n.toString()))return t[1]}return Or(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(jr,"REGEXP",_r),G(Or,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!J(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Or));var Tr="function"==typeof K||"object"==typeof br||"function"==typeof dr?function(r){return Er(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Er(r).toLowerCase():t};function Ar(r){return"function"===Tr(r)}var kr,xr=Object,Vr=Object.getPrototypeOf,Fr=W(),Pr=Object.prototype.toString,Cr="function"==typeof Symbol?Symbol:void 0,Ur="function"==typeof Cr?Cr.toStringTag:"",$r=Fr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Pr.call(r);e=r[Ur],t=z(r,Ur);try{r[Ur]=void 0}catch(t){return Pr.call(r)}return n=Pr.call(r),t?r[Ur]=e:delete r[Ur],n}:function(r){return Pr.call(r)};kr=Ar(Object.getPrototypeOf)?Vr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===$r(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=kr,Br=W(),Rr=Object.prototype.toString,Lr="function"==typeof Symbol?Symbol:void 0,Mr="function"==typeof Lr?Lr.toStringTag:"",Gr=Br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Rr.call(r);e=r[Mr],t=z(r,Mr);try{r[Mr]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[Mr]=e:delete r[Mr],n}:function(r){return Rr.call(r)},Wr=Object.prototype;function Zr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!J(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Ir(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&Ar(t.constructor)&&"[object Function]"===Gr(t.constructor)&&z(t,"isPrototypeOf")&&Ar(t.isPrototypeOf)&&(t===Wr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}var Nr=W(),Xr=Object.prototype.toString,zr="function"==typeof Symbol?Symbol:void 0,Dr="function"==typeof zr?zr.toStringTag:"",qr=Nr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Xr.call(r);e=r[Dr],t=z(r,Dr);try{r[Dr]=void 0}catch(t){return Xr.call(r)}return n=Xr.call(r),t?r[Dr]=e:delete r[Dr],n}:function(r){return Xr.call(r)},Hr="function"==typeof Uint8Array;function Jr(r){return Hr&&r instanceof Uint8Array||"[object Uint8Array]"===qr(r)}function Kr(r){if(r.__esModule)return r;var t=r.default;if("function"==typeof t){var e=function r(){if(this instanceof r){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(t,e);return new n}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var Qr=Kr(Object.freeze({__proto__:null,default:{}})),Yr=Qr.readFile;function rt(){var r,t;for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);Yr.apply(null,r)}var tt=Qr.readFileSync;function et(r,t){var e;try{e=arguments.length>1?tt(r,t):tt(r)}catch(r){return r}return e}G(rt,"sync",et);var nt="function"==typeof Uint8Array?Uint8Array:null,ot="function"==typeof Uint8Array?Uint8Array:void 0,it=function(){var r,t;if("function"!=typeof nt)return!1;try{r=Jr(t=new nt(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ot:function(){throw new Error("not implemented")};function at(r,t,e){var n,o;if(arguments.length<3)n={},o=t;else{if(!Zr(t))throw new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",t));n=t,o=e}if(!Ar(o))throw new TypeError(P("invalid argument. Callback argument must be a function. Value: `%s`.",o));function i(r,t){var e,n;if(r)return o(r);if(Jr(t))return o(null,t);for(e=new it(t.length),n=0;n<t.length;n++)e[n]=t[n];o(null,e)}n.encoding=null,rt(r,n,i)}function ct(r,t){if("function"!=typeof t)throw new TypeError(P("invalid argument. Second argument must be callable. Value: `%s`.",t));return r instanceof t}return G(at,"sync",(function(r,t){var e,n,o,i;if(arguments.length>1){if(!Zr(t))throw new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",t));e=t}else e={};if(e.encoding=null,ct(o=et(r,e),Error))return o;if(Jr(o))return o;for(n=new it(o.length),i=0;i<o.length;i++)n[i]=o[i];return n})),at},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).readWASM=t();
//# sourceMappingURL=browser.js.map
