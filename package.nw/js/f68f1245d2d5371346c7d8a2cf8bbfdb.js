'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b){const d=c.getState();return{errMsg:`${b.api}:ok`,networkType:d.toolbar.network.current}}async function b(a,b){var f=Math.floor;const g=c.getState();let h=g.toolbar.deviceInfo,i=0.6*h.screenWidth,j=0.8*i,k=g.project.current.compileType,l=e.getWidgetOffset(k,h);return k==d.search?(i=l.width,j=g.simulator.widget&&g.simulator.widget.height?g.simulator.widget.height:l.height):k==d.conversation&&(i=l.width,j=l.height),{errMsg:`${b.api}:ok`,windowWidth:f(i),windowHeight:f(j)}}const c=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),d=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),g=require('./0634ee2ebd3e560d9d4804ecc960160f.js');module.exports={getSystemInfo:b,getSystemInfoSync:b,getNetworkType:a,getNetworkTypeSync:a,openApp:async function(a,b){return{errMsg:`${b.api}:ok`}},onTapCallback:async function(a,b){return a({type:g.SIMULATOR_SET_WIDGET,data:{tapCallback:_extends({},b.args)}}),{errMsg:`${b.api}:ok`}}}}(require('lazyload'),require);