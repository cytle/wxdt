'use strict';!function(require,directRequire){async function a(a,b){let e=d.getCurrent(),l=d.getCurrentConfig();if(e.isTourist)return k.Allow;if(l&&l.permission&&l.permission[a]){let e=l.permission[a];if(0===e.state)return global.appConfig.isDev?k.Allow:k.NoAllow;if(1===e.state)return k.Allow;if(4===e.state){let{body:e}=await f({url:`${g.checkApiAuth}`,method:'post',needToken:1,needAppID:1,needCheckErrCode:-1,forceLogin:-1,body:JSON.stringify({appid:d.getProjectAppID(),jsapi:a})}),l=e.baseresponse||{errcode:-1e4},m=parseInt(l.errcode);if(m==i.AUTH_DENY)return k.UserCancel;if(0!=m){let a=j.parseCgiErrorCode(m,l.errmsg);throw a}let n=e.state||4;if(1==n)return k.Allow;if(4==n){let i=e.auth_desc||`${d.getShowName()} 希望获取 ${a} 的操作权限，是否允许？`,j=e.scope;return new Promise((a)=>{b({type:c.SIMULATOR_SET_CONFIRM,data:{show:!0,content:i,callback:(b)=>{let c=[];b?(c.push({state:1,scope:j}),a(k.Allow)):(c.push({state:2,scope:j}),a(k.UserCancel)),f({url:`${g.setAuth}`,method:'post',body:JSON.stringify({appid:d.getProjectAppID(),auth_item:c}),needToken:1,needAppID:1}).catch((a)=>{h.error(`checkPermission setAuth error ${a}`)})}}})})}}}return k.Allow}const b=require('./common/locales/index.js'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./3bfffbe88b3d923921f851c0697974fe.js'),e=require('./0db350fb89acd99bf2de39677770889c.js'),f=require('./15ba1827c7f6564a45df6bd44da3a977.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),k={NoAllow:0,Allow:1,UserCancel:2,AuthFail:3};module.exports={exec:function(d){let{api:f,callbackID:g}=d;return(h)=>{a(f,h).then((a)=>{if(a==k.Allow){if(e[f])return e[f](h,d);throw b.config.API_NOT_SUPPORT}else if(a==k.NoAllow)throw'no permission';else if(a==k.UserCancel)throw'auth deny'}).then((a)=>{a&&h({type:c.ASSDK_CALLBACK,res:a,callbackID:g})}).catch((a)=>{h({type:c.ASSDK_CALLBACK,res:{errMsg:`${f}:fail ${a}`},callbackID:g})})}}}}(require('lazyload'),require);