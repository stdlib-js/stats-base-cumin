// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.0-esm/index.mjs";function s(r,s,n,i,a){var f,o,d,m,l;if(r<=0)return i;if(d=a<0?(1-r)*a:0,f=s[o=n<0?(1-r)*n:0],i[d]=f,d+=a,l=1,!1===e(f))for(;l<r;l++){if(m=s[o+=n],e(m)){f=m;break}(m<f||m===f&&t(m))&&(f=m),i[d]=f,d+=a}if(e(f))for(;l<r;l++)i[d]=f,d+=a;return i}r(s,"ndarray",(function(r,s,n,i,a,f,o){var d,m,l,j,p;if(r<=0)return a;if(l=o,d=s[m=i],a[l]=d,l+=f,p=1,!1===e(d))for(;p<r;p++){if(j=s[m+=n],e(j)){d=j;break}(j<d||j===d&&t(j))&&(d=j),a[l]=d,l+=f}if(e(d))for(;p<r;p++)a[l]=d,l+=f;return a}));const{ndarray:n}=s;export{s as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
