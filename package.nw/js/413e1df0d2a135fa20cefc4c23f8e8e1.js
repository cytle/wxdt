'use strict';!function(require,directRequire){const a=require('redux'),b=require('./52b49e58e68bc258f1d5149392e86f7f.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:e}=require('react-redux');module.exports=e((a)=>{let b=a.simulator.pickerInfo||{};return{show:b.show&&'multi'==b.mode,array:b.array,current:b.current,callbackID:b.callbackID,webviewID:b.webviewID,api:b.api}},(a)=>{return{hidePicker:d.bindActionCreators(c.hidePicker,a)}})(b)}(require('lazyload'),require);