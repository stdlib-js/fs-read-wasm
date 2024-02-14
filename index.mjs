// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@v0.2.0-esm/index.mjs";import r,{sync as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.0-esm/index.mjs";function d(e,i,o){var d,a;if(arguments.length<3)d={},a=i;else{if(!t(i))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",i));d=i,a=o}if(!n(a))throw new TypeError(m("invalid argument. Callback argument must be a function. Value: `%s`.",a));function u(e,t){var n,r;if(e)return a(e);if(s(t))return a(null,t);for(n=new l(t.length),r=0;r<t.length;r++)n[r]=t[r];a(null,n)}d.encoding=null,r(e,d,u)}function a(e,n){var r,d,a,u;if(arguments.length>1){if(!t(n))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",n));r=n}else r={};if(r.encoding=null,a=i(e,r),o(a,Error))return a;if(s(a))return a;for(d=new l(a.length),u=0;u<a.length;u++)d[u]=a[u];return d}e(d,"sync",a);export{d as default,a as sync};
//# sourceMappingURL=index.mjs.map
