'use strict';!function(require,directRequire){const a=require('react'),b=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),c=require('./c4190a2430506f3602ca550e1e75d620.js'),d=require('./9a24eb4fb7a49d4dd24531943fc3c899.js'),{connect:e}=require('react-redux');class f extends a.Component{componentDidMount(){this.initWebview()}componentWillReceiveProps(a){a.webview!=this.props.webview&&a.webview&&setTimeout(()=>{this.showDevTools()}),a.device!=this.props.device&&setTimeout(()=>{this.setDevice()})}initWebview(){let a=this.devtoolsview=document.createElement('webview');a.setAttribute('partition','persist:devtools'),a.setAttribute('style','height:100%;width:100%;position:relative;');let b=`${a.getUserAgent()} devtoolsview port/${global.messageCenterPort}`;a.setUserAgentOverride(b),this.container.appendChild(a)}setDevice(){const a=this.props;d.send({command:'SET_DEVICE',data:{width:0,height:0,deviceScaleFactor:parseFloat(a.dpr),mobile:!0,fitWindow:!1,scale:1,screenHeight:parseInt(a.height),screenWidth:parseInt(a.width),positionX:0,positionY:0,screenOrientation:{angle:0,type:'portraitPrimary'}}})}_newwindow(a){a.preventDefault();let b=a.targetUrl;b&&('https://developers.google.com/web/tools/chrome-devtools/'===b&&(b='https://mp.weixin.qq.com/debug/wxadoc/dev/index.html'),'https://developers.google.com/web/updates/2017/05/devtools-release-notes'===b&&(b='https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/new.html'),nw.Window.open(b,{width:799,height:799}))}showDevTools(){let a=this.props.webview,b=this.devtoolsview;const c=()=>{b.removeEventListener('loadcommit',c);const d=()=>{a.removeEventListener('loadcommit',d),a.showDevTools(!0,b)};a.addEventListener('loadcommit',d),a.src='html/about.html'};b.addEventListener('loadcommit',c),b.addEventListener('contentload',()=>{this.setDevice()}),b.src='about:blank',b.addEventListener('newwindow',this._newwindow)}render(){return a.createElement('div',{ref:(a)=>this.container=a,style:{flex:1},className:'devtools'})}}module.exports=e((a)=>{let b=a.webdebugger||{},c=a.toolbar.deviceInfo;return{device:c,dpr:c.dpr,height:c.screenHeight-c.navigationbarHeight-c.statusbarHeight,width:c.screenWidth,webview:b.webview}},(a)=>{return{debuggerActions:b.bindActionCreators(c,a)}})(f)}(require('lazyload'),require);