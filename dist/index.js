"use strict";var a=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(s){throw (i=0, s)}};};var e=a(function(o,t){
var n=require('@stdlib/assert-is-string/dist').isPrimitive,z=/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;function f(r){return!n(r)||r.length<2||r.length>255?!1:z.test(r)}t.exports=f
});var u=e();module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
