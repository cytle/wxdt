'use strict';!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),d=require('./db2217eb4cff896bdcbc50abe005058f.js'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./da7c31daaf542cf1796023d8e344b98a.js'),g=require('./3bfffbe88b3d923921f851c0697974fe.js');module.exports={appMax:()=>{return(b)=>{global.Win.maximize(),b({type:a.WINDOW_MAXIMIZE})}},appMin:()=>{return(c,d)=>{try{if(d().window.windowStatus.mode===b.WINDOW_MODE.MIN)return}catch(a){}global.Win.minimize(),c({type:a.WINDOW_MINIMIZE})}},appFullscreen:()=>{return(b)=>{b({type:a.WINDOW_FULLSCREEN})}},appResize:(b)=>{return(c)=>{c({type:a.WINDOW_RESIZE,position:b})}},recordFocus:(b)=>(c,d)=>{const e=d();b!==e.window.focus&&c({type:a.WINDOW_RECORD_FOCUS,focus:b})},setMask:(c,d=b.MASK_TYPE.GLOBAL_BLOCKING)=>{return{type:a.WINDOW_SET_MASK,maskType:d,show:c}},setMainWindow:(d)=>(e)=>{(d!==b.MAIN_WINDOW_TYPE.WEB_DEBUGGER||d!==b.MAIN_WINDOW_TYPE.DEV)&&(c.lastSelect=null),e({type:a.WINDOW_SET_MAIN_WINDOW,mainWindow:d})},setAboutWindow:(b)=>{return{type:a.WINDOW_SET_ABOUT,data:b}},setDebuggerWindow:(b)=>{const c=g.getCurrent();return f(b.show?'weapp_open_devtools':'weapp_close_devtools',c.appid),{type:a.WINDOW_SET_DEBUGGER,data:b}},setSimulator:(b={})=>{const c=g.getCurrent();return f(b.show?'weapp_open_simulator':'weapp_close_simulator',c.appid),{type:a.WINDOW_SET_SIMULATOR,data:b}},setCustomCompile:(b)=>{return{type:a.WINDOW_SET_CUSTOMCOMPILE,data:b}},setQCloud:(b)=>{return{type:a.WINDOW_SET_QCLOUD,data:b}},setProjectManagement:(c)=>async(e,f)=>{if(c.show){const a=f();if(a.window.projectManagement.show)try{const a=await d.onWindowRegistered(b.WINDOW_REGISTRY.PROJECT_MANAGEMENT);return void a.window.focus()}catch(a){}}e({type:a.WINDOW_SET_PROJECT_MANAGEMENT,data:c})},setRemoteDebugWindow:(c)=>async(e,f)=>{if(c.show){const a=f();if(a.window.remoteDebugWindow.show)try{const a=await d.onWindowRegistered(b.WINDOW_REGISTRY.REMOTE_DEBUG_WINDOW);return void a.window.focus()}catch(a){}}e({type:a.WINDOW_SET_REMOTE_DEBUG_WINDOW,data:c})},setQCloudDebugWindow:(c)=>async(e,f)=>{if(c.show){const a=f();if(a.window.qcloudDebugWindow.show)try{const a=await d.onWindowRegistered(b.WINDOW_REGISTRY.QCLOUD_DEBUG_WINDOW);return void a.window.focus()}catch(a){}}e({type:a.WINDOW_SET_QCLOUD_DEBUG_WINDOW,data:c})},setEditor:(b)=>{return{type:a.WINDOW_SET_EDITOR,data:b}},toggleDebugWindow:()=>{const b=e.getState(),c=b.window.debug&&b.window.debug.show,d=g.getCurrent();return f(c?'weapp_close_devtools':'weapp_open_devtools',d.appid),{type:a.WINDOW_TOGGLE_DEBUGGER}},toggleSimulatorWindow:()=>{const b=e.getState(),c=g.getCurrent(),d=b.window.simulator&&b.window.simulator.show;return f(d?'weapp_close_simulator':'weapp_open_simulator',c.appid),{type:a.WINDOW_TOGGLE_SIMULATOR}},toggleSimulatorPosition:()=>{return{type:a.WINDOW_TOGGLE_SIMULATOR_POSITION}},toggleEditorWindow:()=>{const b=e.getState(),c=g.getCurrent(),d=b.window.editor&&b.window.editor.show;return f(d?'weapp_close_editor':'weapp_open_editor',c.appid),{type:a.WINDOW_TOGGLE_EDITOR}},setQCloudActionType:(b)=>{return{type:a.WINDOW_SET_QCLOUD_ACTION,data:b}},toggleToolbar:()=>{return{type:a.WINDOW_TOGGLE_TOOLBAR}},clearMiniCodeOptions:()=>{return{type:a.WINDOW_CLEAR_MINICODE_OPTIONS}},syncWindow:(b={},c)=>(d)=>{d({type:a.WINDOW_SYNC_STORE,data:b,syncTime:c})}}}(require('lazyload'),require);