'use strict';!function(require,directRequire){const{USER_DATA_PATH:a,TMP_DATA_PATH:b,STORE_DATA_PATH:c}=require('./37be435102276ea9cf47609ff6535cd4.js'),d=new RegExp(`^${a}/`),e=new RegExp(`^${b}`),f=new RegExp(`^${c}`);var g=['window','document','frames','self','location','navigator','localStorage','history','Caches','screen','alert','confirm','prompt','fetch','XMLHttpRequest','WebSocket','webkit','WeixinJSCore','Reporter','print'];global.appConfig.isDev||g.push('WeixinJSBridge'),module.exports={setting:{MaxLocalstorageSize:10,MaxCodeSize:5,MaxWebviewDepth:5,ExpendedMaxWebviewDepth:5,MaxBackgroundLifespan:300,MaxRequestConcurrent:5,MaxUploadConcurrent:1,MaxDownloadConcurrent:10,MaxFileStorageSize:100,MinTabbarCount:2,MaxTabbarCount:5,MaxTabbarIconSize:40,MaxDataSize:1048576,MaxWebsocketConnect:2,GameDownloadFileSizeLimit:50,DownloadFileSizeLimit:10},MAX_PAGE_STACK_DEPTH:5,DEFAULT_NAVIGATIONBAR_WHITE_TEXTCOLOR:'#f8f8f8',DEFAULT_NAVIGATIONBAR_BLACK_TEXTCOLOR:'#000000',DEFAULT_NAVIGATIONBAR_BGCOLOR:'#000000',default_tabBarBorderBlackColor:'rgba(0, 0, 0, 0.33)',default_tabBarBorderWhiteColor:'rgba(255, 255, 255, 0.33)',default_backgroundColor:'#ffffff',default_android_tabbar_height:54,default_ios_tabbar_height:48,default_android_navigationbar_height:48,default_ios_navigationbar_height:44,default_statusbar_height:20,default_search_widget_radio:0.6,default_conversation_widget_radio:0.8,NO_BOM_VAR:g,whiteFileExtName:{".wxml":!0,".wxss":!0,".wxs":!0,".png":!0,".jpg":!0,".jpeg":!0,".gif":!0,".svg":!0,".js":!0,".json":!0,".cer":!0,".mp3":!0,".aac":!0,".m4a":!0,".mp4":!0,".wav":!0,".ogg":!0,".silk":!0},gameWhiteFileExtName:{".png":!0,".jpg":!0,".jpeg":!0,".gif":!0,".svg":!0,".js":!0,".json":!0,".cer":!0,".obj":!0,".dae":!0,".fbx":!0,".mtl":!0,".stl":!0,".3ds":!0,".mp3":!0,".pvr":!0,".wav":!0,".plist":!0,".ttf":!0,".fnt":!0,".gz":!0,".ccz":!0,".m4a":!0,".mp4":!0,".bmp":!0,".atlas":!0,".swf":!0,".ani":!0,".part":!0,".proto":!0,".bin":!0,".sk":!0,".mipmaps":!0,".txt":!0,".zip":!0,".ogg":!0,".silk":!0,".dbbin":!0,".dbmv":!0,".etc":!0},errorPrefix:{COMPONENT_FOR_DEVELOPER:'For developer:',WXML_RUNTIME_ERROR:'WXMLRT',WXML_RUNTIME_ERROR_REG:/^WXMLRT_[^:]*:/,WXML_PLUGIN_RUNTIME_ERROR_REG:/^WXMLRT_\$plugin_([^_]*)_([^:]*):/,WXS_RUNTIME_ERROR:'WXSRT',WEBVIEW_ERROR:'WEBVIEW_ERROR',CODE_ERROR:'CODE_ERROR'},weappURLRegular:/^https?\:\/\/.*?\.debug.open.weixin.qq.com/,weappASURLRegular:/^https?\:\/\/.*?\.appservice.open.weixin.qq.com/,weappLocalIdRegular:/^https?\:\/\/wxfile.open.weixin.qq.com\//,weappWidgetPageRegular:/^https?\:\/\/.*?\.widget.open.weixin.qq.com/,weappWidgetServiceRegular:/^https?\:\/\/.*?\.widgetservice.open.weixin.qq.com/,weappEditorServiceRegular:/^https?\:\/\/.*?\.?editorservice.open.weixin.qq.com/,weappGamePageRegular:/^https?\:\/\/.*?\.game.open.weixin.qq.com/,weappTraceRegular:/^https?\:\/\/trace.open.weixin.qq.com/,weappUsrFileReqular:d,weappTmpFileReqular:e,weappStoreFileReqular:f,TOURIST_APPID:'touristappid',GAME_TOURIST_APPID:'wx6ac3f5090a6b99c5',SCENE_DEFAULT:1001,SCENE_SHARE_TICKET:1044,SCENE_MINI_PROGRAM:1037,SCENE_MINI_PROGRAM_BACK:1038,SCENE_GROUP_SHARE:1008,SCENE_SINGLE_SHARE:1007,SCENE_PROFILE:1020,SCENE_CUSTOM_MENU:1035,SCENE_APP_SHARE_MESSAGE:1036,SCENE_TEMPLETE_MESSAGE:1043}}(require('lazyload'),require);