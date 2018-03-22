'use strict';!function(require,directRequire){function a(a){let b=i.createHash('md5');return b.update(a).digest('hex')}async function b(a){return new Promise(async(b,c)=>{try{const c=await o({taskName:'processJS',config:{projectPath:a.projectPath,file:a.file,es6:a.es6?'yes':'no',minified:a.minified?'yes':'no',sourceMaps:'map',sourceFileName:e.basename(a.file)},dataStr:a.code,maxTimeout:180000,useBackup:!0,downgrade:!1,onAfterRun:a.onAfterRun,forceBackup:q});b(c)}catch(a){a instanceof Error?c(a):c(new Error(a))}})}async function c(c,g={}){return new Promise(async(h,i)=>{w[c.hash||'']||(w[c.hash||'']={});let j=w[c.hash||''],{es6:k,minified:m,newFeature:n}=c.setting,{srcFilePath:o,fileBuffer:q,destFilePath:t,destPath:u,fileName:v,onAfterRun:x,projectPath:y,filesIgnored:z}=g,A=r(q),B='';if(void 0===A){let a=new Error(l.config.FILE_NOT_UTF8.format(o));throw a.code=s,a}let C=Date.now(),D=a(A),E=`${o}_${k}_${m}`;if(j[E]&&j[E].md5===D)(k||m)&&512000<=A.length&&(z||[]).push(v),A=j[E].jsCode,B=j[E].map,console.log('compile js',v,'in cache, skip.');else{if((k||m)&&512000>A.length){const a=await b({projectPath:y,file:v,es6:k,minified:m,sourceFileName:v,code:A,onAfterRun:x});if(console.log(`process ${v} cost time: ${Date.now()-C}`),a.error){const b=a.error,c=new Error(b.message||b);return c.code=b.code,i(c)}A=a.code,B=a.map}else(k||m)&&512000<=A.length&&(z||[]).push(v),B=await p(e.join(y,v),A);j[E]={md5:D,jsCode:A,map:B}}let F=e.dirname(t);f.sync(F),d.writeFileSync(t,A),h()})}const d=require('fs'),e=require('path'),f=require('mkdir-p'),g=require('babel-core'),h=require('uglify-js'),i=require('crypto'),j=require('./162bf2ee28b76d3b3d95b685cede4146.js'),k=require('babel-code-frame'),l=require('./common/locales/index.js'),m=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),n=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),o=require('./9beb6be9c4f08fd7406b0e6f964234ea.js'),p=require('./cdbf7243dc99f8461acbb1d57af1d8ae.js');let q=!1;const{bufToUTF8:r}=require('./efc820e1b92d6e4063535296d4a24213.js'),{FILE_NOT_UTF8:s,BABEL_TRANS_JS_ERR:t,UGLIFY_JS_ERR:u,BABILI_JS_ERR:v}=require('./949d8235c744ced2a80121e4dba34c28.js');var w={};module.exports=async function(a,b={}){let d=a.compileType,{distPath:f,onProgressUpdate:g,onFilesIgnored:h}=b,k=await j(a),l=k.getAllJSFiles(),o=d==m.plugin?a.miniprogramRoot:'';const p=[],q=[];let i=[...l],r=(a)=>{const b=i.findIndex((b)=>b===a);0<=b&&i.splice(b,1),i[0]&&g('compilejs','\u6B63\u5728\u5904\u7406 '+i[0])};for(let d=0,g=l.length;d<g;d++){let b=l[d],g=k.getFile(b,null);q.push(c(a,{projectPath:k.srcPath,srcFilePath:e.join(o,b),destFilePath:e.join(f,o,b),destPath:e.join(f,o),fileBuffer:g,fileName:b,onAfterRun:r.bind(null,b),filesIgnored:p}))}if(await Promise.all(q),d==m.plugin){k=await n(a),l=k.getAllJSFiles(),o=a.pluginRoot;const b=[];i=[...l],r=(a)=>{const b=i.findIndex((b)=>b===a);0<=b&&i.splice(b,1),i[0]&&g('compilejs','\u6B63\u5728\u5904\u7406 '+i[0])};for(let d=0,g=l.length;d<g;d++){let g=l[d],h=k.getFile(g,null);b.push(c(a,{projectPath:k.srcPath,srcFilePath:e.join(o,g),destFilePath:e.join(f,o,g),destPath:e.join(f,o),fileBuffer:h,fileName:g,onAfterRun:r.bind(null,g),filesIgnored:p}))}await Promise.all(b)}h(p)}}(require('lazyload'),require);