(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{850:function(e,t,n){},851:function(e,t,n){},917:function(e,t,n){"use strict";var l=n(850);n.n(l).a},918:function(e,t,n){"use strict";var l=n(851);n.n(l).a},962:function(e,t,n){"use strict";n.r(t);n(841),n(804);var l=n(790),a=n.n(l),o=(n(896),n(897),n(898),n(818),n(812),n(819),n(899),n(900),n(902),n(903),n(904),n(905),n(906),n(907),window.CodeMirror||a.a),i={name:"UCodeEditor",props:{value:{type:String,default:""},language:{type:String,default:null},languageChange:{type:Boolean,default:!1,required:!1},placeholder:{type:String,default:null},lineNumbers:{type:Boolean,default:!0},fullScreen:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:999}},data:function(){return{code:"",hasCode:!1,mode:"javascript",coder:null,options:{tabSize:2,theme:"panda-syntax",line:!0,hintOptions:{tables:{users:["name","score","birthDate"],countries:["name","population","size"]}}},modes:[{value:"css",label:"CSS"},{value:"javascript",label:"Javascript"},{value:"html",label:"XML/HTML"},{value:"x-java",label:"Java"},{value:"x-objectivec",label:"Objective-C"},{value:"x-python",label:"Python"},{value:"x-rsrc",label:"R"},{value:"x-sh",label:"Shell"},{value:"x-sql",label:"SQL"},{value:"x-swift",label:"Swift"},{value:"x-vue",label:"Vue"},{value:"markdown",label:"Markdown"}],fullCoder:!1}},watch:{language:{immediate:!0,handler:function(e){var t=this;this._getCoder().then((function(){if(e){var n=t._getLanguage(e);n&&(t.mode=n.label,t.coder.setOption("mode","text/".concat(n.value)))}}))}}},computed:{placeholderShow:function(){return null==this.placeholder?"请在此输入".concat(this.language,"代码"):this.placeholder},nullTipStyle:function(){return this.lineNumbers?{left:"36px"}:{left:"12px"}},coderOptions:function(){return{tabSize:this.options.tabSize,theme:this.options.theme,lineNumbers:this.lineNumbers,line:!0,hintOptions:this.options.hintOptions}},fullScreenParentProps:function(){var e={class:["full-screen-parent",this.fullCoder?"full-screen":""],style:{}};return this.fullCoder&&(e.style["z-index"]=this.zIndex),e}},mounted:function(){this._initialize()},methods:{_initialize:function(){var e=this;this.coder=o.fromTextArea(this.$refs.textarea,this.coderOptions),this.coder.setValue(this.value||this.code),this.value||this.code?this.hasCode=!0:this.hasCode=!1,this.coder.on("change",(function(t){e.code=t.getValue(),e.code?e.hasCode=!0:e.hasCode=!1,e.$emit&&e.$emit("input",e.code)})),this.coder.on("focus",(function(){e.hasCode=!0})),this.coder.on("blur",(function(){e.code?e.hasCode=!0:e.hasCode=!1}))},getCodeContent:function(){return this.code},setCodeContent:function(e){this.coder.setValue(e)},_getLanguage:function(e){return this.modes.find((function(t){var n=e.toLowerCase(),l=t.label.toLowerCase(),a=t.value.toLowerCase();return l===n||a===n}))},_getCoder:function(){var e=this;return new Promise((function(t){!function n(){e.coder?t(e.coder):setTimeout(n,10)}()}))},changeMode:function(e){this.coder.setOption("mode","text/".concat(e));var t=this._getLanguage(e).label.toLowerCase();this.$emit("language-change",t)},nullTipClick:function(){this.coder.focus()}}},s=(n(917),n(90)),u={components:{"u-code-editor":Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._b({},"div",e.fullScreenParentProps,!1),[e.fullScreen?n("a-icon",{staticClass:"full-screen-icon",attrs:{type:"fullscreen"},on:{click:function(){return e.fullCoder=!e.fullCoder}}}):e._e(),e._v(" "),n("div",{staticClass:"code-editor-cust full-screen-child"},[n("textarea",{ref:"textarea"}),e._v(" "),n("span",{staticClass:"null-tip",class:{"null-tip-hidden":e.hasCode},style:e.nullTipStyle,on:{click:e.nullTipClick}},[e._v(e._s(e.placeholderShow))]),e._v(" "),e.languageChange?[n("a-select",{staticClass:"code-mode-select",attrs:{size:"small",placeholder:"请选择主题"},on:{change:e.changeMode},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},e._l(e.modes,(function(t){return n("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v("\n          "+e._s(t.label)+"\n        ")])})),1)]:e._e()],2)],1)}),[],!1,null,null,null).exports},data:function(){return{editorValue:""}}},r=(n(918),Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"date"},[n("u-code-editor",{staticStyle:{"min-height":"100px"},attrs:{language:"javascript",fullScreen:!0},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}),e._v("\n  "+e._s(e.editorValue)+"\n")],1)}),[],!1,null,null,null));t.default=r.exports}}]);