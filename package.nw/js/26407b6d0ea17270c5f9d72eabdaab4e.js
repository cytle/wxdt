'use strict';!function(require,directRequire){function a(){j()}async function b(b){let d=await c(b);h&&h.srcPath==d.srcPath||(j(),h&&h.unWatch(a),h=d,h.watch(a))}const c=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),d=require('./6e1614a32b5d10964071477dd7310d21.js'),e=require('./f7ca1affcf2f20dc24139b0e03c203f6.js'),f=require('./503c215d003cb9646f16deee95253baf.js'),g=require('./2d8c17f8789be1869edbd369314f5eaa.js');var h,i='';const j=()=>{i=''},k=async(a,b={})=>{const{pluginId:c,version:g}=b;let h=[],i=await d(a,{pluginId:c,version:g,cut:!1}),j=await e(a,{pluginId:c,version:g,app:!0}),k=await f(a,{pluginId:c,version:g,wxss:!0,prefix:i.name});return h.push(`${i.code}`),h.push(`eval('${j}')`),h.push(`eval('${k}')`),{code:h.join('\n'),key:`${c}`}};module.exports=async(a,c={})=>{const{pluginId:d,version:e}=c,f=`${d}_${e}`;if('dev'==e)return d==a.appid?(await b(a),i&&i.key==f||(i=await k(a,c)),i.code):'';let h=await g(d,e);return h['/pageframe.js']}}(require('lazyload'),require);