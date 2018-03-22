'use strict';!function(require,directRequire){function a(a,b){a({type:f.SIMULATOR_SET_NAVIGATION_BAR,data:{showRecordWording:b}})}async function b(b,c){let{operationType:d,duration:e,format:f}=c.args;e=e||q,e>q&&(e=q);let r=Date.now(),s=0;return f=f||'aac',new Promise((d)=>{let q=g();navigator.mediaDevices.getUserMedia(o).then((g)=>{l=[];try{m=new MediaRecorder(g,p)}catch(a){return void d({errMsg:`${c.api}:fail ${a}`})}m.onstart=()=>{r=Date.now(),n=setTimeout(()=>{m&&m.stop()},e),q.triggerOnEvent({eventName:'onRecorderStateChange',data:{state:'start'}})},m.onpause=()=>{clearTimeout(n),s=Date.now()-r},m.onresume=()=>{r=Date.now(),n=setTimeout(()=>{m&&m.stop()},e-s)},m.onstop=()=>{clearTimeout(n);let c=new Blob(l,{type:`audio/webm`}),d=Date.now()-r+s,e=new FileReader;e.addEventListener('loadend',()=>{let c=i.getCurrent(),g=e.result||'';const l=g.split(',');l&&l[1]?g=l[1]:console.warn('invalid record data');let{error:n,tempFilePath:o}=h.saveBase64DataToFile(c,g,`.durationTime=${d}.${f}`)||{};m=void 0,q.triggerOnEvent({eventName:'onRecorderStateChange',data:{tempFilePath:o,fileSize:g.length,duration:d,state:'stop'}}),j.display({command:k.DISPLAY_INFO,type:'RECORD_FORMAT_INFO',data:{}}),a(b,!1)}),e.readAsDataURL(c)},m.ondataavailable=(a)=>{a.data&&0<a.data.size&&l.push(a.data)},m.onerror=(c)=>{q.triggerOnEvent({eventName:'onRecorderStateChange',data:{state:'error',errMsg:c.message}}),a(b,!1)},m.start(10),a(b,!0),d({errMsg:`${c.api}:ok`})}).catch((a)=>{d({errMsg:`${c.api}:fail ${a.name}`})})})}async function c(a,b){if(m)m.stop();else return{errMsg:`${b.api}:ok`};return{errMsg:`${b.api}:ok`}}async function d(b,c){let d=g();if(m)m.pause();else return{errMsg:`${c.api}:fail`};return d.triggerOnEvent({eventName:'onRecorderStateChange',data:{state:'pause'}}),a(b,!1),{errMsg:`${c.api}:ok`}}async function e(b,c){if(m)m.resume();else return{errMsg:`${c.api}:fail`};return a(b,!0),{errMsg:`${c.api}:ok`}}const f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./dfd9a72b9ff6078018aa4a64eed949a5.js'),h=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),i=require('./3bfffbe88b3d923921f851c0697974fe.js'),j=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js');var l,m,n;const o={audio:!0},p={mimeType:'audio/webm'},q=600000;module.exports={startRecord:async function(b,c){return new Promise((d)=>{navigator.mediaDevices.getUserMedia(o).then((e)=>{l=[];try{m=new MediaRecorder(e,p)}catch(a){return void d({errMsg:`${c.api}:fail ${a}`})}m.onstop=()=>{let e=new Blob(l,{type:'audio/webm'}),f=new FileReader;f.addEventListener('loadend',()=>{let a=i.getCurrent(),b=h.copyFileDataToTemp(a,f.result,'.silk');d({errMsg:`${c.api}:ok`,tempFilePath:b}),m=void 0}),f.readAsDataURL(e),a(b,!1)},m.ondataavailable=(a)=>{a.data&&0<a.data.size&&l.push(a.data)},clearTimeout(n),n=setTimeout(()=>{m&&m.stop()},60000),m.start(10),a(b,!0)}).catch(()=>{d({errMsg:`${c.api}:fail 未找到或者无权限调用录音设备`})})})},stopRecord:c,operateRecorder:async function(a,f){let{operationType:g,duration:h,format:i}=f.args;if('pause'===g)return await d(a,f);return'resume'===g?await e(a,f):'stop'===g?await c(a,f):'start'===g?await b(a,f):{errMsg:`${f.api}:fail illegal operationType`}}}}(require('lazyload'),require);