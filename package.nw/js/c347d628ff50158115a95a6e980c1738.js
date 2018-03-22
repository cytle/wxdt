'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./d8460cd7eec9b5ac3077a1c3fc6a50d2.js'),c=require('./6893c66b236a52295ea5c35a8052630d.js'),d=require('./48ed383395967d737f11ebc42820b913.js'),e=require('./3708d3f281e2f2a71c7feda26168f3dc.js'),f=require('./aa1f2a2e68329a3bbaa996a52b5ea65b.js'),g=require('./ff946754202ecf377034d29daac7c8d9.js'),h=require('./ca9102c5efe003cb9f99bcd8df78f429.js'),i=require('./c754d906e04f71224e14d49a89769678.js'),j=require('./8e89d5836133cac25c6aa23d785c63d9.js'),k=require('./e12e47cfa49959a6d49ea1936dc19380.js'),l=require('./10279410b7cf7ea9409d42a7eb37225c.js'),m=require('./b6dd6ba0b853899c69527eaf93a58f7b.js'),n=require('./413e1df0d2a135fa20cefc4c23f8e8e1.js'),o=require('./d03a90fbd796428c64e8c47eef5f4e71.js'),p=require('./8e7fed729e9f11f30d63365586719bf0.js'),q=require('./504ae46dc4a72502ee836b22913fbe81.js'),r=require('./9a1630c7db7597f338c9319bfc8571c5.js'),s=require('./a1b9e6fb17fda6e4b961ef97ab1371f8.js'),t=require('./6fc2d18cec70b19ca4d1e2defbdf43cd.js'),u=require('./72653d4b93cdd7443296229431a7aa9a.js'),v=require('./3bfffbe88b3d923921f851c0697974fe.js'),w=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),x=require('./1ca0b7713664710bff99ca9c6d29c43c.js'),y=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),z=require('./84eac15ddafa077aa832c98b6c2290bd.js'),A=require('./f094f1d16fffcac4d74949e4fc6b09ac.js'),B=require('./ea653f45dc25181ca4f1b108175009b7.js'),C=require('./dc4889188702c881b1432b490a2a4850.js'),D=require('./03f56b6c971ec6f7813234d685a2fa8c.js'),E=require('classnames'),F=require('./d3fc1d4b6cfd440a6300e62456252a06.js'),G=require('./137588fc97010af6b33c2be1d533447b.js'),H=require('./b6a2a0af8ea41ee5132948d45a0a6677.js'),I=require('./a03c8e76d4fe0178cd6a28a2fbc16ddd.js'),J=require('./195285e5284f78e12cb71042e95b9566.js'),K=require('./b86cb96a5caed2b5ae72ef2e6a5d13ef.js'),L=require('./0cecfd7c413f06c788a4d6b7972cdf96.js'),M=require('./e452f0d072800b8203d233682d37d71a.js');class N extends a.Component{constructor(a){super(a),this.onResizeStop=(a,b)=>{this.props.windowActions.setSimulator({width:b})},this.state={simulatorStyle:{}}}componentDidMount(){chrome.fontSettings.setMinimumFontSize({pixelSize:1})}componentWillUnmount(){}componentWillReceiveProps(a){a.vibrate!=this.props.vibrate&&('short'==a.vibrate?this.vibrateAnimation(1):'long'==a.vibrate&&this.vibrateAnimation(3))}async vibrateAnimation(a){if(0>=a)return void this.props.simulatorActions.setVibrate('none');var b=[`translate(1%,5px) scale(${this.props.deviceScale})`,`translate(-1%,5px) scale(${this.props.deviceScale})`];const c=async(a)=>{return 0>=a.length?void this.setState({simulatorStyle:{}}):(this.setState({simulatorStyle:{transition:'all linear 0.05s',transform:a[0]}}),a.splice(0,1),new Promise((b,d)=>{setTimeout(()=>{c(a).then(()=>{b()}).catch((a)=>{d(a)})},50)}))};await c(b),await this.vibrateAnimation(--a)}reLaunch(){}getOptionsComponents(){let b=this.props,c=[];return b.switch.selectorPickerShow&&c.push(a.createElement(o,{key:'selectorpicker'})),b.switch.datePickerShow&&c.push(a.createElement(l,{key:'datepicker'})),b.switch.timePickerShow&&c.push(a.createElement(m,{key:'timepicker'})),b.switch.multiPickerShow&&c.push(a.createElement(n,{key:'multipicker'})),b.switch.paymentShow&&c.push(a.createElement(f,{key:'payment'})),b.switch.confirmShow&&c.push(a.createElement(s,{key:'confirm'})),b.switch.authorizeShow&&c.push(a.createElement(z,{key:'authorize'})),c}getWindowComponents(){let b=this.props,c=[];return b.window.groupShow&&c.push(a.createElement(q,{key:'grouplist'})),b.window.settingShow&&c.push(a.createElement(r,{key:'setting'})),b.window.addCardShow&&c.push(a.createElement(C,{key:'addcard'})),b.window.viewCardShow&&c.push(a.createElement(D,{key:'viewcard'})),b.window.h5AddCardShow&&c.push(a.createElement(K,{key:'h5addcard'})),b.window.h5ViewCardShow&&c.push(a.createElement(L,{key:'h5viewcard'})),b.window.h5ChooseCardShow&&c.push(a.createElement(M,{key:'h5choosecard'})),b.window.locationShow&&c.push(a.createElement(A,{key:'location'})),b.window.addPhoneContactShow&&c.push(a.createElement(H,{key:'addPhoneContact'})),b.window.chooseAddressShow&&c.push(a.createElement(I,{key:'chooseAddress'})),b.window.chooseInvoiceTitleShow&&c.push(a.createElement(J,{key:'chooseInvoiceTitle'})),c}render(){let f,g,l=this.props,m={width:l.width},n=E('simulator-container',{"ui-invisible":!l.show}),o=[];for(let b in this.props.enableFullScreen||this.props.libVersion&&170<=parseInt(this.props.libVersion.replace(/\./g,''))&&'custom'===this.props.navigationStyle?(f=l.screenHeight,g=0):(f=l.screenHeight-l.navigationbarHeight-l.statusbarHeight,g=l.navigationbarHeight+l.statusbarHeight),l.webviewInfos){let c=l.webviewInfos[b],e=f,h=g;l.tabbarShow&&-1!=c.tabbarIndex&&('top'==l.tabbarPosition?(e-=l.tabbarHeight,h+=l.tabbarHeight):e-=l.tabbarHeight),o.push(a.createElement(d,{key:b,show:l.currentWebviewID==b,info:c,top:h,height:e}))}l.standbyWebview&&o.push(a.createElement(d,{key:l.standbyWebview.id,show:!1,info:l.standbyWebview,top:g,height:f,type:'standby'})),0>=o.length&&o.push(a.createElement(d,{key:-1,show:!0,info:{},top:g,height:f,type:'tip'}));let q=_extends({width:l.screenWidth,height:l.screenHeight,transform:`scale(${l.deviceScale})`,transformOrigin:'50% 0',marginLeft:-l.screenWidth/2},this.state.simulatorStyle);return a.createElement(B,{width:l.width,height:'100%',className:n,style:{minWidth:l.shellMinWidth},leftResizable:l.workbenchShow&&'right'===l.position,rightResizable:l.workbenchShow&&'left'===l.position,onResizeStop:this.onResizeStop},a.createElement(x,null),a.createElement('div',{className:'simulator-shell'},a.createElement('div',{className:'simulator',style:q},a.createElement(F,null),a.createElement(b,null),o,a.createElement(c,null),a.createElement(e,null),a.createElement(h,null),a.createElement(i,null),a.createElement(j,null),a.createElement(k,null),this.getOptionsComponents(),a.createElement(p,null)),this.getWindowComponents()),a.createElement(t,null),a.createElement(G,null),a.createElement('div',{className:'ui-divider-vertical',style:{pointerEvents:'none'}}))}}module.exports=N}(require('lazyload'),require);