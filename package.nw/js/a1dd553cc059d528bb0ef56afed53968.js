'use strict';!function(require,directRequire){const a=require('./84b183688a46c9e2626d3e6f83365e13.js'),b=directRequire('./214c25062f31e2cad941b3ec069db1fe.js');var c=new b('APPSERVICE');c.ready=!0,c.__proto__.publish=function(b){let c=b.data.webviewIds||[];0==c.length?this.broadcast('WEBVIEW',b):'array'==a.getType(c)&&c.forEach((a)=>{this.transfer(`WEBVIEW_${a}`,b)})},c.__proto__.triggerOnEvent=function({eventName:a,data:b,webviewID:c}){this.send({command:'APPSERVICE_ON_EVENT',data:{eventName:a,data:b},webviewID:c})},c.__proto__.invokeCallback=function(a,b){this.send({command:'APPSERVICE_INVOKE_CALLBACK',data:{callbackID:a,res:b}})},module.exports=c}(require('lazyload'),require);