"use strict";var b=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var P=b(function(J,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-negative-zero/dist');function A(v,u,f,l,a,s,m){var e,c,n,t,i,o,r,q,x;if(e=u.data,c=a.data,n=u.accessors[0],t=a.accessors[1],o=l,r=m,i=n(e,o),t(c,r,i),r+=s,x=1,p(i)===!1)for(x;x<v;x++){if(o+=f,q=n(e,o),p(q)){i=q;break}(q<i||q===i&&z(q))&&(i=q),t(c,r,i),r+=s}if(p(i))for(x;x<v;x++)t(c,r,i),r+=s;return a}y.exports=A
});var k=b(function(K,j){
var g=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/array-base-arraylike2object/dist'),C=P();function D(v,u,f,l,a,s,m){var e,c,n,t,i,o,r;if(v<=0)return a;if(t=Z(u),i=Z(a),t.accessorProtocol||i.accessorProtocol)return C(v,t,f,l,i,s,m),a;if(c=l,n=m,e=u[c],a[n]=e,n+=s,r=1,g(e)===!1)for(r;r<v;r++){if(c+=f,o=u[c],g(o)){e=o;break}(o<e||o===e&&B(o))&&(e=o),a[n]=e,n+=s}if(g(e))for(r;r<v;r++)a[n]=e,n+=s;return a}j.exports=D
});var h=b(function(L,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),E=k();function F(v,u,f,l,a){var s=O(v,f),m=O(v,a);return E(v,u,f,s,l,a,m)}R.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),H=k();G(w,"ndarray",H);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
