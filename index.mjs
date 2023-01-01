// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@esm/index.mjs";import n,{sync as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";function m(e,i,l){var m,f;if(arguments.length<3)m={},f=i;else{if(!r(i))throw new TypeError(d("0C42h",i));m=i,f=l}if(!t(f))throw new TypeError(d("0C42n",f));function h(e,r){var t,n;if(e)return f(e);if(s(r))return f(null,r);for(t=new o(r.length),n=0;n<r.length;n++)t[n]=r[n];f(null,t)}m.encoding=null,n(e,m,h)}function f(e,t){var n,m,f,h;if(arguments.length>1){if(!r(t))throw new TypeError(d("0C42h",t));n=t}else n={};if(n.encoding=null,f=i(e,n),l(f,Error))return f;if(s(f))return f;for(m=new o(f.length),h=0;h<f.length;h++)m[h]=f[h];return m}e(m,"sync",f);export{m as default,f as sync};
//# sourceMappingURL=index.mjs.map
