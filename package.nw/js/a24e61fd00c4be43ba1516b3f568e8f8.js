'use strict';!function(require,directRequire){const a=require('react'),b=require('./bc04f89cf8edab62335086e0a2a5a103.js'),c=require('./common/locales/index.js'),d=require('./72653d4b93cdd7443296229431a7aa9a.js'),f='edit';module.exports=class extends a.Component{constructor(a){super(a),this.onAutoSaveChange=()=>{this.props.updateIDESetting(f,'autoSave',!this.state.autoSave),this.setState({autoSave:!this.state.autoSave})},this.onSaveBeforeCompileChange=()=>{this.props.updateIDESetting(f,'saveBeforeCompile',!this.state.saveBeforeCompile),this.setState({saveBeforeCompile:!this.state.saveBeforeCompile})},this.onAutoRefreshChange=()=>{this.props.updateIDESetting(f,'autoRefresh',!this.state.autoRefresh),this.setState({autoRefresh:!this.state.autoRefresh})},this.onWrapChange=()=>{const a='off'===this.state.wrap?'on':'off';this.props.updateIDESetting(f,'wrap',a),this.setState({wrap:a})},this.onInsertSpacesChange=()=>{this.props.updateIDESetting(f,'insertSpaces',!this.state.insertSpaces),this.setState({insertSpaces:!this.state.insertSpaces})},this.onMinimapChange=()=>{this.props.updateIDESetting(f,'minimap',!this.state.minimap),this.setState({minimap:!this.state.minimap})},this.onGitIgnoreWindowsReturnChange=()=>{this.props.updateIDESetting(f,'gitIgnoreWindowsReturn',!this.state.gitIgnoreWindowsReturn),this.setState({gitIgnoreWindowsReturn:!this.state.gitIgnoreWindowsReturn})},this.onTabSizeChange=(a)=>{let b=parseInt(a.target.value);1>b&&(b=1),8<b&&(b=8),this.props.updateIDESetting(f,'tabSize',b),this.setState({tabSize:b})};let{settings:b}=this.props;this.state={autoSave:b.autoSave,autoRefresh:b.autoRefresh,saveBeforeCompile:b.saveBeforeCompile,wrap:b.wrap,insertSpaces:b.insertSpaces,minimap:b.minimap,gitIgnoreWindowsReturn:b.gitIgnoreWindowsReturn,tabSize:b.tabSize}}getSetting(){return{autoSave:this.state.autoSave,autoRefresh:this.state.autoRefresh,saveBeforeCompile:this.state.saveBeforeCompile,wrap:this.state.wrap,insertSpaces:this.state.insertSpaces,minimap:this.state.minimap,tabSize:this.state.tabSize}}render(){return a.createElement('div',{className:'setting-theme ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{htmlFor:'',className:'ui-form-label'},c.config.SETTING_FILE_SAVE),a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onAutoSaveChange},a.createElement('i',{className:this.state.autoSave?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},c.config.SETTING_AUTO_SAVE)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onSaveBeforeCompileChange},a.createElement('i',{className:this.state.saveBeforeCompile?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},c.config.SETTING_SAVE_BEFORE_COMPILE)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onAutoRefreshChange},a.createElement('i',{className:this.state.autoRefresh?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},c.config.SETTING_COMPILE_ON_SAVE)))),a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{htmlFor:'',className:'ui-form-label'},c.config.SETTING_EDITOR),a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onWrapChange},a.createElement('i',{className:'on'===this.state.wrap?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},c.config.SETTING_WRAP)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onInsertSpacesChange},a.createElement('i',{className:this.state.insertSpaces?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},c.config.SETTING_TAB_TO_SPACES)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onMinimapChange},a.createElement('i',{className:this.state.minimap?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},c.config.SETTING_MINIMAP)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.onGitIgnoreWindowsReturnChange},a.createElement('i',{className:this.state.gitIgnoreWindowsReturn?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text',dangerouslySetInnerHTML:{__html:c.config.GIT_USE_UNIX_RETURN||'Git \u6BD4\u8F83\u6587\u4EF6\u5185\u5BB9\u65F6\uFF0C<br />\u5FFD\u7565 Windows \u98CE\u683C\u56DE\u8F66\u7B26'}})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{htmlFor:'',className:'ui-form-label'},c.config.SETTING_TAB_SIZE),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'number',placeholder:'',value:this.state.tabSize,className:'ui-input',onChange:this.onTabSizeChange})))))}}}(require('lazyload'),require);