"use strict";var b=function(u,a){return function(){try{return a||u((a={exports:{}}).exports,a),a.exports}catch(c){throw (a=0, c)}};};var P=b(function(J,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-negative-zero/dist');function A(u,a,c,l,e,s,m){var i,t,n,f,v,o,r,q,x;if(i=a.data,t=e.data,n=a.accessors[0],f=e.accessors[1],o=l,r=m,v=n(i,o),f(t,r,v),r+=s,x=1,p(v)===!1)for(x;x<u;x++){if(o+=c,q=n(i,o),p(q)){v=q;break}(q<v||q===v&&z(q))&&(v=q),f(t,r,v),r+=s}if(p(v))for(x;x<u;x++)f(t,r,v),r+=s;return e}y.exports=A
});var k=b(function(K,j){
var g=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/array-base-arraylike2object/dist'),C=P();function D(u,a,c,l,e,s,m){var i,t,n,f,v,o,r;if(u<=0)return e;if(f=Z(a),v=Z(e),f.accessorProtocol||v.accessorProtocol)return C(u,f,c,l,v,s,m),e;if(t=l,n=m,i=a[t],e[n]=i,n+=s,r=1,g(i)===!1)for(r;r<u;r++){if(t+=c,o=a[t],g(o)){i=o;break}(o<i||o===i&&B(o))&&(i=o),e[n]=i,n+=s}if(g(i))for(r;r<u;r++)e[n]=i,n+=s;return e}j.exports=D
});var h=b(function(L,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),E=k();function F(u,a,c,l,e){var s=O(u,c),m=O(u,e);return E(u,a,c,s,l,e,m)}R.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),H=k();G(w,"ndarray",H);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
