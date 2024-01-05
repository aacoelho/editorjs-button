!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AnyButton=t():n.AnyButton=t()}(window,(function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=0)}([function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));e(1);function o(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function a(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function r(n,t,e){return t&&a(n.prototype,t),e&&a(n,e),n}var s=function(){function n(t){var e=t.data,o=t.config,i=t.api,a=t.readOnly;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.api=i,this.readOnly=a,this.nodes={wrapper:null,container:null,inputHolder:null,anyButtonHolder:null,textInput:null,linkInput:null,registButton:null,anyButton:null,state:n.STATE.VIEW},this.aligns=[{name:"left",title:"Align left",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M85.282 500.778c3.357 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86Zm0-101.549c3.357 3.32 7.207 5.222 11.997 5.222h342.71c4.812 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.757-1.925-8.542-5.282-11.861-3.357-3.32-7.185-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.104-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-102.035c3.357 3.32 7.207 5.223 11.997 5.223h411.355c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861-3.358-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-101.57c3.357 3.341 7.207 5.223 11.997 5.223h308.645c4.32 0 8.639-1.882 11.996-5.222 3.358-3.32 4.79-7.104 4.79-11.861v-33.68c0-4.758-1.432-8.542-4.79-11.862-3.357-3.34-7.677-5.222-11.996-5.222H97.279c-4.79 0-8.64 1.882-11.997 5.222-3.357 3.32-5.282 7.104-5.282 11.861v33.68c0 4.758 1.925 8.542 5.282 11.862Z"/></svg>'},{name:"center",title:"Align center",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm-51 101c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.757 1.925 8.542 5.282 11.86 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86ZM525.721 336H114.366c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.358 3.32 7.207 5.223 11.997 5.223H525.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223Zm-52 102.021H165.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.862v33.68c0 4.757 1.432 8.542 4.79 11.86 3.357 3.341 7.677 5.223 11.996 5.223h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862-3.357-3.34-7.207-5.222-11.997-5.222Z"/></svg>'},{name:"right",title:"Align right",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm0 101.549c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.757 1.925 8.542 5.282 11.861 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.104 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 102.035c-3.357-3.32-7.207-5.223-11.997-5.223H131.366c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861 3.358 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 101.57c-3.357-3.341-7.207-5.223-11.997-5.223H234.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.861v33.68c0 4.758 1.432 8.542 4.79 11.862 3.357 3.34 7.677 5.222 11.996 5.222h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862Z"/></svg>'}];var r={baseClass:this.api.styles.block,hide:"hide",btn:"cdx-btn",container:"anyButtonContainer",input:"anyButtonContainer__input",inputHolder:"anyButtonContainer__inputHolder",inputText:"anyButtonContainer__input--text",inputLink:"anyButtonContainer__input--link",registButton:"anyButtonContainer__registerButton",anyButtonHolder:"anyButtonContainer__anyButtonHolder",btnColor:"cdx-btn--default"};this.CSS=Object.assign(r,o.css),this.data={link:e.link||"",text:e.text||"",align:e.align||n.DEFAULT_ALIGN_TYPE}}return r(n,[{key:"validate",value:function(n){return""!==this._data.link&&""!==this._data.text}},{key:"save",value:function(n){return this._data}},{key:"data",set:function(t){this._data=Object.assign({},{link:this.api.sanitizer.clean(t.link||"",n.sanitize),text:this.api.sanitizer.clean(t.text||"",n.sanitize),align:this.api.sanitizer.clean(t.align||n.DEFAULT_ALIGN_TYPE,n.sanitize)})},get:function(){return this._data}}],[{key:"toolbox",get:function(){return{title:"Button",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path d="m207 207 335.746 129.046-93.871 50.932L548 485.875 485.875 548l-98.896-99.125-50.934 93.871L207 207Zm-39.327 92.208a14.631 14.631 0 0 1 13.917 9.142 14.662 14.662 0 0 1-3.63 16.263l-43.892 43.945a14.62 14.62 0 0 1-14.265 3.947 14.641 14.641 0 0 1-10.408-10.537 14.661 14.661 0 0 1 4.1-14.238l43.891-43.945a14.626 14.626 0 0 1 8.458-4.348c.604-.114 1.215-.19 1.829-.227Zm-14.63-72.782c8.08 0 14.63 6.558 14.63 14.649 0 8.09-6.55 14.648-14.63 14.648H50.63c-8.08 0-14.63-6.558-14.63-14.648s6.55-14.649 14.63-14.649ZM359.01 108.783a14.631 14.631 0 0 1 13.917 9.141 14.662 14.662 0 0 1-3.63 16.264l-43.891 43.945a14.62 14.62 0 0 1-14.263 3.942 14.641 14.641 0 0 1-10.405-10.534 14.661 14.661 0 0 1 4.094-14.236l43.891-43.945a14.626 14.626 0 0 1 8.458-4.348c.604-.115 1.215-.191 1.829-.229Zm-244.144-7.095a14.622 14.622 0 0 1 11.887 4.349l43.891 43.944a14.661 14.661 0 0 1 4.105 14.241 14.641 14.641 0 0 1-10.41 10.54 14.62 14.62 0 0 1-14.268-3.953l-43.89-43.944a14.662 14.662 0 0 1-3.727-15.38 14.635 14.635 0 0 1 12.412-9.797ZM240.824 36c8.08 0 14.63 6.558 14.63 14.648v102.537c0 8.09-6.55 14.649-14.63 14.649-8.08 0-14.63-6.56-14.63-14.649V50.648c0-8.09 6.55-14.648 14.63-14.648Z" fill="#5C6B7A" fill-rule="evenodd"/></svg>'}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!1}},{key:"STATE",get:function(){return{EDIT:0,VIEW:1}}},{key:"DEFAULT_ALIGN_TYPE",get:function(){return"center"}},{key:"sanitize",get:function(){return{text:!1,link:!1}}}]),r(n,[{key:"render",value:function(){return this.nodes.wrapper=this.make("div",this.CSS.baseClass),this.nodes.container=this.make("div",this.CSS.container),this.nodes.inputHolder=this.makeInputHolder(),this.nodes.anyButtonHolder=this.makeAnyButtonHolder(),this.nodes.container.appendChild(this.nodes.inputHolder),this.nodes.container.appendChild(this.nodes.anyButtonHolder),""!==this._data.link?(this.init(),this.show(n.STATE.VIEW)):this.show(n.STATE.EDIT),this.nodes.wrapper.appendChild(this.nodes.container),this.updateAlign(this.data.align),this.nodes.wrapper}},{key:"renderSettings",value:function(){var t=this,e={icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M510.084 344.96c1.024-8.192 1.792-16.512 1.792-24.96s-.768-16.768-1.792-24.96l54.127-42.368c4.863-3.84 6.27-10.752 3.071-16.384l-51.184-88.704c-3.199-5.504-9.853-7.808-15.61-5.504l-63.725 25.728c-13.18-10.112-27.639-18.688-43.25-25.216l-9.597-67.84C382.764 68.736 377.518 64 371.12 64H268.752c-6.398 0-11.644 4.736-12.668 10.752l-9.597 67.84c-15.611 6.528-30.07 14.976-43.25 25.216l-63.724-25.728c-5.758-2.176-12.412 0-15.611 5.504l-51.184 88.704c-3.2 5.504-1.792 12.416 3.07 16.384l54 42.368c-1.024 8.192-1.792 16.512-1.792 24.96s.768 16.768 1.792 24.96l-54 42.368c-4.862 3.84-6.27 10.752-3.07 16.384l51.184 88.704c3.199 5.504 9.853 7.808 15.61 5.504l63.725-25.728c13.18 10.112 27.639 18.688 43.25 25.216l9.597 67.84c1.024 6.016 6.27 10.752 12.668 10.752H371.12c6.398 0 11.644-4.736 12.668-10.752l9.597-67.84c15.611-6.528 30.07-14.976 43.25-25.216l63.724 25.728c5.758 2.176 12.412 0 15.611-5.504l51.184-88.704c3.2-5.504 1.792-12.416-3.07-16.384l-54-42.368ZM319.936 409.6c-49.52 0-89.572-40.064-89.572-89.6 0-49.536 40.052-89.6 89.572-89.6s89.572 40.064 89.572 89.6c0 49.536-40.052 89.6-89.572 89.6Z"/></svg>',name:"edit-button",label:"Edit button",toggle:"edit",isActive:this.nodes.state===n.STATE.EDIT,onActivate:function(){t.show(0===t.nodes.state?1:0)}},i=this.aligns.map((function(n){return{icon:n.icon,name:"align-".concat(n.name),label:n.title,toggle:"align",isActive:t.data.align===n.name,onActivate:function(){t.updateAlign(n.name)}}}));return[e].concat(o(i))}},{key:"updateAlign",value:function(n){var t=this;this.data.align===n&&this.nodes.anyButton.classList.contains("cdx-pr-button--".concat(n))||(this.data.align=n,this.aligns.forEach((function(n){t.nodes.anyButton.classList.toggle("cdx-pr-button--".concat(n.name),t.data.align===n.name)})))}},{key:"makeInputHolder",value:function(){var t=this,e=this.make("div",[this.CSS.inputHolder]);return this.nodes.textInput=this.make("div",[this.api.styles.input,this.CSS.input,this.CSS.inputText],{contentEditable:!this.readOnly}),this.nodes.textInput.dataset.placeholder=this.api.i18n.t("Type button copy"),this.nodes.linkInput=this.make("div",[this.api.styles.input,this.CSS.input,this.CSS.inputLink],{contentEditable:!this.readOnly}),this.nodes.linkInput.dataset.placeholder=this.api.i18n.t("Paste or type URL"),this.nodes.registButton=this.make("button",[this.api.styles.button,this.CSS.registButton]),this.nodes.registButton.type="button",this.nodes.registButton.textContent=this.api.i18n.t("Add button"),this.nodes.registButton.addEventListener("click",(function(e){t.data={link:t.nodes.linkInput.textContent,text:t.nodes.textInput.textContent,align:t.data.align},t.show(n.STATE.VIEW)})),e.appendChild(this.nodes.textInput),e.appendChild(this.nodes.linkInput),e.appendChild(this.nodes.registButton),e}},{key:"init",value:function(){this.nodes.textInput.textContent=this._data.text,this.nodes.linkInput.textContent=this._data.link}},{key:"show",value:function(n){this.nodes.anyButton.textContent=this._data.text,this.nodes.anyButton.setAttribute("href",this._data.link),this.nodes.state=n,this.changeState(n)}},{key:"makeAnyButtonHolder",value:function(){var n=this.make("div",[this.CSS.hide,this.CSS.anyButtonHolder]);return this.nodes.anyButton=this.make("a",[this.CSS.btn,this.CSS.btnColor],{target:"_blank",rel:"nofollow noindex noreferrer"}),this.nodes.anyButton.textContent=this.api.i18n.t("Default Button"),n.appendChild(this.nodes.anyButton),n}},{key:"changeState",value:function(t){switch(t){case n.STATE.EDIT:this.nodes.inputHolder.classList.remove(this.CSS.hide),this.nodes.anyButtonHolder.classList.add(this.CSS.hide),this.autofocusTextInput();break;case n.STATE.VIEW:this.nodes.inputHolder.classList.add(this.CSS.hide),this.nodes.anyButtonHolder.classList.remove(this.CSS.hide)}}},{key:"autofocusTextInput",value:function(){var n=document.createRange(),t=window.getSelection();n.selectNodeContents(this.nodes.textInput),n.collapse(!1),t.removeAllRanges(),t.addRange(n),this.api.toolbar.close(),this.nodes.textInput.focus()}},{key:"make",value:function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.createElement(n);Array.isArray(e)?(t=a.classList).add.apply(t,o(e)):e&&a.classList.add(e);for(var r in i)a[r]=i[r];return a}}]),n}()},function(n,t,e){var o=e(2),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);n.exports=i.locals||{}},function(n,t,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function s(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},o=[],i=0;i<n.length;i++){var a=n[i],c=t.base?a[0]+t.base:a[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=s(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(r[d].references++,r[d].updater(p)):r.push({identifier:u,updater:v(p,t),references:1}),o.push(u)}return o}function l(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function p(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(a,r[t]):n.appendChild(a)}}function f(n,t,e){var o=e.css,i=e.media,a=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,g=0;function v(n,t){var e,o,i;if(t.singleton){var a=g++;e=h||(h=l(t)),o=p.bind(null,e,a,!1),i=p.bind(null,e,a,!0)}else e=l(t),o=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=s(e[o]);r[i].references--}for(var a=c(n,t),l=0;l<e.length;l++){var u=s(e[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}e=a}}}},function(n,t,e){(t=e(4)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),t.push([n.i,".hide {\n  display: none !important;\n}\n\n.anyButtonContainer {\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.anyButtonContainer__registerButton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 32px;\n  padding: 8px 10px 8px 8px;\n  background-color: #0080ff;\n  border: 1px solid #0073e6;\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.3;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer;\n  margin-top: 16px;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n\n  transition: background-color 200ms ease-out, border-color 200ms ease-out,\n    color 200ms ease-out;\n\n  &::before {\n    content: \"\";\n    display: block;\n    width: 16px;\n    height: 16px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M356 64v219.999L576 284v72H356v220h-72V356H64v-72h220V64h72Z'/%3E%3C/svg%3E\");\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-right: 6px;\n  }\n}\n\n.anyButtonContainer__registerButton:hover,\n.anyButtonContainer__registerButton:focus {\n  background-color: #0073e6;\n  border: 1px solid #0066cd;\n  color: #ffffff;\n}\n\n.anyButtonContainer__inputHolder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.anyButtonContainer__input {\n  padding-left: 38px;\n  background-repeat: no-repeat;\n  background-position: 12px 11px;\n  background-size: 16px 16px;\n  white-space: normal;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  color: #2d3640;\n  line-height: 1.3;\n  min-height: 40px;\n  border: 1px solid #d3dce6;\n  transition: all 200ms ease-out;\n  box-shadow: none;\n  width: 100%;\n}\n\n.anyButtonContainer__input:hover,\n.anyButtonContainer__input:focus-within {\n  border-color: #0080ff;\n}\n\n.anyButtonContainer__input + .anyButtonContainer__input {\n  margin-top: 8px;\n}\n\n.anyButtonContainer__input--link {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='512' height='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96.356 236.658c16.535-17.067 39.341-26.17 63.288-26.17 23.946 0 46.752 9.103 63.857 26.17l6.842 6.258 12.543-12.516-6.841-6.258c-17.105-17.066-26.228-39.822-26.228-64.284 0-23.894 9.123-46.08 26.228-63.147l70.129-70.542C322.708 9.67 345.514 0 369.46 0c24.517 0 46.753 9.102 63.857 26.169l52.455 52.907C502.877 96.142 512 118.329 512 142.79c0 23.893-9.123 46.649-26.227 63.716l-70.13 69.973c-17.674 16.498-39.91 26.169-63.857 26.169-23.946 0-46.182-9.102-63.857-26.169l-5.702-6.827-13.113 12.516 6.271 6.827c16.535 16.497 26.227 39.822 26.227 63.715s-9.692 46.649-26.227 63.147l-68.989 69.973C188.722 502.33 166.486 512 142.54 512c-23.947 0-46.183-9.102-63.857-26.169l-52.455-52.338C9.123 415.858 0 393.671 0 369.21c0-23.893 9.123-46.08 26.227-63.147l70.13-69.404Zm232.054 0c12.543 12.515 35.35 12.515 48.463 0l68.989-69.974c6.842-6.826 10.263-14.79 10.263-23.893 0-9.102-3.421-17.635-10.263-23.893L392.837 65.99c-5.701-6.258-14.824-9.671-23.946-9.671-9.123 0-17.675 3.413-23.947 9.671l-70.129 69.973c-6.272 6.827-9.692 14.792-9.692 23.894 0 9.102 3.42 17.635 9.692 24.462l6.842 6.258 32.499-32.427c10.263-10.809 28.508-10.809 39.91 0 10.834 10.809 10.834 28.445 0 39.822L321.569 230.4l6.842 6.258ZM55.875 369.208c0 9.672 3.421 18.205 9.693 24.463l52.454 52.907c12.544 12.515 34.78 12.515 47.893 0l70.13-70.542c6.271-6.258 10.262-14.792 10.262-23.894 0-9.102-3.99-17.635-10.262-23.893l-6.272-6.827s-31.359 31.29-33.07 32.427c-10.832 10.809-28.507 10.809-39.34 0-11.403-10.809-11.403-28.445 0-39.822.57-1.707 32.499-32.427 32.499-32.427l-6.842-6.258c-5.702-6.826-14.824-10.24-23.946-10.24-9.123 0-17.675 3.982-23.947 10.24l-70.13 69.405c-5.7 7.395-9.122 15.36-9.122 24.462Z' fill='%235C6B7A' fill-rule='nonzero'/%3E%3C/svg%3E\");\n}\n.anyButtonContainer__input--text {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath fill='%235C6B7A' fill-rule='nonzero' d='M85.282 500.778c3.357 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86Zm0-101.549c3.357 3.32 7.207 5.222 11.997 5.222h342.71c4.812 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.757-1.925-8.542-5.282-11.861-3.357-3.32-7.185-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.104-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-102.035c3.357 3.32 7.207 5.223 11.997 5.223h411.355c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861-3.358-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-101.57c3.357 3.341 7.207 5.223 11.997 5.223h308.645c4.32 0 8.639-1.882 11.996-5.222 3.358-3.32 4.79-7.104 4.79-11.861v-33.68c0-4.758-1.432-8.542-4.79-11.862-3.357-3.34-7.677-5.222-11.996-5.222H97.279c-4.79 0-8.64 1.882-11.997 5.222-3.357 3.32-5.282 7.104-5.282 11.861v33.68c0 4.758 1.925 8.542 5.282 11.862Z'/%3E%3C/svg%3E\");\n  background-size: 20px 20px;\n  background-position: 10px;\n}\n.anyButtonContainer__input[contentEditable=\"true\"][data-placeholder]::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #5c6b7a;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1.3;\n  opacity: 0;\n}\n\n.anyButtonContainer__input[contentEditable=\"true\"][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.anyButtonContainer__input[contentEditable=\"true\"][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.cdx-button {\n  white-space: nowrap;\n}\n\n.anyButtonContainer__anyButtonHolder {\n  text-align: center;\n  display: flex;\n}\n\n.cdx-btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none !important;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.cdx-btn--default {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.cdx-btn--gray {\n  color: #fff;\n  background-color: #7c7c7c;\n  border-color: #7c7c7c;\n}\n\n.cdx-pr-button--left {\n  margin-right: auto;\n}\n.cdx-pr-button--center {\n  margin: 0 auto;\n}\n.cdx-pr-button--right {\n  margin-left: auto;\n}\n\n/* Editor.js */\n#editorjs\n  .ce-toolbar\n  .ce-settings\n  .ce-popover-item.ce-popover-item--active[data-item-name=\"edit-button\"] {\n  display: none;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(r=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}var r,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}}]).default}));