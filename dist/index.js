"use strict";var b=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var P=b(function(M,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist');function C(v,u,f,m,a,n,l){var e,c,o,t,i,s,r,q,x;if(e=u.data,c=a.data,o=u.accessors[0],t=a.accessors[1],s=m,r=l,i=o(e,s),t(c,r,i),r+=n,x=1,p(i)===!1)for(x;x<v;x++){if(s+=f,q=o(e,s),p(q)){i=q;break}(q<i||q===i&&B(q))&&(i=q),t(c,r,i),r+=n}if(p(i))for(x;x<v;x++)t(c,r,i),r+=n;return a}y.exports=C
});var k=b(function(Q,j){
var g=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/array-base-arraylike2object/dist'),E=P();function F(v,u,f,m,a,n,l){var e,c,o,t,i,s,r;if(v<=0)return a;if(t=Z(u),i=Z(a),t.accessorProtocol||i.accessorProtocol)return E(v,t,f,m,i,n,l),a;if(c=m,o=l,e=u[c],a[o]=e,o+=n,r=1,g(e)===!1)for(r;r<v;r++){if(c+=f,s=u[c],g(s)){e=s;break}(s<e||s===e&&D(s))&&(e=s),a[o]=e,o+=n}if(g(e))for(r;r<v;r++)a[o]=e,o+=n;return a}j.exports=F
});var h=b(function(S,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),G=k();function H(v,u,f,m,a){var n=O(v,f),l=O(v,a);return G(v,u,f,n,m,a,l)}R.exports=H
});var A=b(function(T,z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),J=k();I(w,"ndarray",J);z.exports=w
});var K=A();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
