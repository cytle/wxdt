'use strict';!function(require,directRequire){const a=require('./f171257bbcaef547a3cf27266ccb0db2.js'),b=require('./15ba1827c7f6564a45df6bd44da3a977.js'),c=require('./3bfffbe88b3d923921f851c0697974fe.js'),d=require('./5719b6ded53098ffd9e848abcac30153.js'),{DEV_INVALID_APPID:e,DEV_APP_NOT_BAND:f,NOT_LOGIN:g,INVALID_LOGIN:h,INVALID_TOKEN:i,DEV_INVALID_SIGNATURE:j,DEV_NEED_RELOGIN:k}=require('./df6d0ff021a69fb541c733de4dbba0fe.js');module.exports={getAppInfo:(c)=>new Promise(async(j,l)=>{try{const{resp:m,body:n}=await b({url:`${a.createWeappURL}?appid=${c}`,needToken:1});let o=n.baseresponse,p=o?parseInt(o.errcode):0;switch(p){case g:case h:case i:case e:case k:return l(d.ERROR.NEED_LOGIN());case f:return l(d.ERROR.APPID_NOT_BOUND());case e:return l(d.ERROR.INVALID_APPID());}0===p?j(n):l(d.ERROR.GET_APP_INFO_ERROR(p))}catch(a){console.error(a),l(d.ERROR.GENERIC_ERROR(a.toString()))}}),getAppAttr:(a)=>new Promise(async(b,e)=>{try{const d=c.getLatestProjectAttr(a);b(d)}catch(a){e(d.ERROR.GENERIC_ERROR(a.toString()))}})}}(require('lazyload'),require);