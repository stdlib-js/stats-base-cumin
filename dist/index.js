"use strict";var q=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var x=q(function(D,p){
var m=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist');function h(v,u,c,f,n){var i,s,r,a,e;if(v<=0)return f;if(c<0?s=(1-v)*c:s=0,n<0?r=(1-v)*n:r=0,i=u[s],f[r]=i,r+=n,e=1,m(i)===!1)for(e;e<v;e++){if(s+=c,a=u[s],m(a)){i=a;break}(a<i||a===i&&R(a))&&(i=a),f[r]=i,r+=n}if(m(i))for(e;e<v;e++)f[r]=i,r+=n;return f}p.exports=h
});var g=q(function(E,b){
var l=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist');function w(v,u,c,f,n,i,s){var r,a,e,t,o;if(v<=0)return n;if(a=f,e=s,r=u[a],n[e]=r,e+=i,o=1,l(r)===!1)for(o;o<v;o++){if(a+=c,t=u[a],l(t)){r=t;break}(t<r||t===r&&j(t))&&(r=t),n[e]=r,e+=i}if(l(r))for(o;o<v;o++)n[e]=r,e+=i;return n}b.exports=w
});var O=q(function(F,Z){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=x(),A=g();z(k,"ndarray",A);Z.exports=k
});var B=O();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
