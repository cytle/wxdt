'use strict';!function(require,directRequire){function a(a){let c=a.headers.host,d=!a.connection.encrypted||/^http:/.test(a.url)?'http':'https',e='http'==d?a.url:d+'://'+c+a.url,f=b.parse(e);return f.pureHref=f.href.replace(/\?.*/,'').replace(/\#.*/,''),f}const b=require('url'),c=require('path'),d=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),e='https://clients1.google.com/tbproxy/af/',f='http://aboutblank',{weappURLRegular:g,weappASURLRegular:h,weappLocalIdRegular:i,weappEditorServiceRegular:j,weappWidgetPageRegular:k,weappWidgetServiceRegular:l,weappGamePageRegular:m,weappTraceRegular:n,weappUsrFileReqular:o,weappStoreFileReqular:p,weappTmpFileReqular:q}=d,r=require('./3bfffbe88b3d923921f851c0697974fe.js'),s=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),t=require('./730f2a99f4d5cff2946dd0a3bad0a600.js'),u=require('./07af6655c180a0694f993b79d5b077df.js');module.exports={forceLocalProxy:[g,h,i,f,e,j,k,l,m,n,o,p,q],dealLocalResponse:function(b,d,g){var h=a(b),j=h.pureHref;if(0==j.indexOf(`/appservice`))t.getAppServiceSource(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')});else if(0==j.indexOf(`/__pageframe__`)){let a=h.href;t.getWebviewSource(a).then((b)=>{const d={};'.svg'===c.extname(a)&&(d['Content-Type']='image/svg+xml'),g(200,d,b)}).catch(()=>{g(404,{},'')})}else 0==j.indexOf(`/editor`)?t.getEditorSource(j).then((a)=>{g(200,a.headers||{},a.body)}).catch(()=>{g(404,{},'')}):0==j.indexOf(`/trace`)?u.getTraceRoute(h,(a,b)=>{a?g(500,{},JSON.stringify(a.message)):g(200,{},JSON.stringify(b))}):0==j.indexOf(`/widgetwebview`)?t.getWidgetWebviewResource(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')}):0==j.indexOf(`/widgetservice`)?t.getWidgetServiceResource(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')}):0==j.indexOf(`/game`)?t.getGamePageResource(j).then((a)=>{g(200,{},a)}).catch((a)=>{g(404,{},a.toString())}):0==j.indexOf(`/aboutblank`)?g(200,{},''):0==j.indexOf(`/favicon.ico`)?g(200,{},''):0==j.indexOf(`/remotedebug/`)?g(200,{},''):0===j.indexOf(e)?g(400,{},''):0===j.indexOf(f)?g(200,{},''):i.test(j)||q.test(j)||p.test(j)?t.getLocalIdResponse(j.replace(i,'wxfile://')).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')}):m.test(j)?t.getGamePageResource(j).then((a)=>{g(200,{},a)}).catch((a)=>{g(404,{},a.toString())}):o.test(j)&&t.getUsrFileResponse(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')})}}}(require('lazyload'),require);