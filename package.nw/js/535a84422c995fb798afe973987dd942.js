'use strict';!function(require,directRequire){function a(a){return function(){this.enabled&&g[a]()}}function b(){return[{label:j.MENU_TITLE_APP,submenu:[{label:j.MENU_SWITCH_ACCOUNT,click:a('switchAccount'),shouldEnabled:'!inLoginWindow'},{type:'separator'},{label:j.MENU_ABOUT,click:a('about')},{label:j.MENU_CHECK_UPDATE,click:a('checkUpdate')},{label:j.MENU_BBS,click:a('BBS')},{label:j.MENU_DOC,click:a('Doc')},{type:'separator'},{label:j.MENU_INSPECT,submenu:[{label:j.MENU_INSPECT_APP,click:a('inspectApp')}]},{label:j.MENU_SWITCH_DEV_MODE,submenu:[{type:'checkbox',label:j.MENU_WEB_DEV,click:a('switchToWebDev'),shouldEnabled:'isMiniProgramDev'},{type:'checkbox',label:j.MENU_MINI_PROGRAM_DEV,click:a('switchToMiniProgramDev'),shouldEnabled:'isWebDev'}],shouldEnabled:'isMiniProgramDev || isWebDev'},{label:j.MENU_EXIT,modifiers:l,key:'q',click:a('exit')}]},{label:j.MENU_TITLE_EDIT,submenu:[{label:j.MENU_UNDO,key:'z',modifiers:l,click:a('undo')},{label:j.MENU_REDO,key:'z',modifiers:'shift+'+l,click:a('redo')},{type:'separator'},{label:j.MENU_COPY,key:'c',modifiers:l,click:a('copy')},{label:j.MENU_CUT,key:'x',modifiers:l,click:a('cut')},{label:j.MENU_PASTE,key:'v',modifiers:l,click:a('paste')},{label:j.MENU_SELECT_ALL,key:'a',modifiers:l,click:a('selectAll')}]},{label:j.MENU_TITLE_TOOLS,submenu:[{label:j.MENU_TITLE_BACK,key:'left',modifiers:l,click:a('back')},{label:j.MENU_TITLE_FORWARD,key:'right',modifiers:l,click:a('forward')},{label:j.MENU_REFRESH,key:'r',modifiers:l,click:a('refresh')},{label:j.MENU_TITLE_LOCATION,key:'l',modifiers:l,click:a('focusAddress')}]},{label:j.MENU_TITLE_SETTINGS,submenu:[{label:j.MENU_PROXY_SETTINGS,modifiers:l,key:',',click:a('openProxySettings')},{label:j.MENU_NOTIFICATION_SETTINGS,click:a('openNotificationSettings')}]}]}function c(){const a=b(),c=a[0];return a.shift(),a.shift(),a.push(c),a[2].submenu=a[2].submenu.slice(7),a}function d(a,b){for(const c of b)if(c.submenu){const b=new nw.Menu;d(b,c.submenu);const e=new nw.MenuItem({label:c.label,submenu:b});e.enabled=!c.shouldEnabled||i.evaluate(c.shouldEnabled),a.append(e),c.instance=e}else{const b={};for(const a in c)b[a]=c[a];const d=new nw.MenuItem(b);d.enabled=!b.shouldEnabled||i.evaluate(b.shouldEnabled),a.append(d),c.instance=d}}function e(a){let b=new nw.Menu({type:'menubar'});b.createMacBuiltin('temp',{hideEdit:!1,hideWindow:!0}),b.items[1].label=j.MENU_TITLE_EDIT;let c=b.items[1].submenu.items[0];b.items[1].submenu.removeAt(0),c.label=j.MENU_UNDO;let d=b.items[1].submenu.items[0];b.items[1].submenu.removeAt(0),d.label=j.MENU_REDO;let e=b.items[1].submenu.items[2];b.items[1].submenu.removeAt(2),e.label=j.MENU_COPY;let f=b.items[1].submenu.items[1];b.items[1].submenu.removeAt(1),f.label=j.MENU_CUT;let g=b.items[1].submenu.items[1];b.items[1].submenu.removeAt(1),g.label=j.MENU_PASTE;const h=a.items[1].submenu;h.removeAt(0),h.insert(c,0),h.removeAt(1),h.insert(d,1),h.removeAt(3),h.insert(e,3),h.removeAt(4),h.insert(f,4),h.removeAt(5),h.insert(g,5)}const f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./25d0beb4120ce2acafb4e03b95444fda.js'),h=require('./common/locales/index.js'),i=require('./41f4eba9fb17703b7d61eca8b05aa076.js'),j=h.config,k='darwin'===process.platform,l=k?'cmd':'ctrl',m=new Map;module.exports={set:()=>{},init:(a)=>{a||(a=global.Win);const f=new nw.Menu({type:'menubar'}),g=k?b():c();m.set(a,{menu:f,structure:g}),d(f,g),k&&e(f),a.menu=f},update:(a)=>{a||(a=global.Win);const b=m.get(a);if(!b)return;const c=b.structure,d=(a)=>{for(const b of a){if(b.instance){if(b.shouldEnabled){const a=b.instance.enabled,c=i.evaluate(b.shouldEnabled);a!==c&&(b.instance.enabled=c)}if(b.shouldChecked){const a=b.instance.checked,c=i.evaluate(b.shouldChecked);a!==c&&(b.instance.checked=c)}}b.submenu&&(b.instance?b.instance.enabled&&d(b.submenu):d(b.submenu))}};d(c)}}}(require('lazyload'),require);