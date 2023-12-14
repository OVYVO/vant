/*! For license information please see 5278.5e431e42.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5278"],{90115:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r("29861");r.es(a,t),r("53293");var o=a.default},29861:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a.default}});var a=r("65806");r.es(a,t)},65806:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r("38613"),o=r("33186"),l=r("54827"),u=r("25486"),n=(0,a.defineComponent)({__name:"index",setup(e){var t=(0,u.useTranslate)({"zh-CN":{info:"\u5BC6\u7801\u4E3A 6 \u4F4D\u6570\u5B57",showInfo:"\u63D0\u793A\u4FE1\u606F",addGutter:"\u683C\u5B50\u95F4\u8DDD",errorInfo:"\u5BC6\u7801\u9519\u8BEF",removeMask:"\u660E\u6587\u5C55\u793A",customLength:"\u81EA\u5B9A\u4E49\u957F\u5EA6"},"en-US":{info:"Some tips",showInfo:"Show Info",addGutter:"Add Gutter",errorInfo:"Password Mistake",removeMask:"Remove Mask",customLength:"Custom Length"}}),r=(0,a.ref)({showInfo:"123",addGutter:"123",basicUsage:"123",removeMask:"123",customLength:"123"}),n=(0,a.ref)("basicUsage"),s=(0,a.ref)(""),i=(0,a.ref)(),c=(0,a.ref)(),d=(0,a.ref)(),f=(0,a.ref)(),v=(0,a.ref)(),h={showInfo:i,addGutter:c,basicUsage:d,removeMask:f,customLength:v},p=e=>{if(n.value){var a="customLength"===n.value?4:6,o=(r.value[n.value]+e).slice(0,a);r.value[n.value]=o,"showInfo"===n.value&&6===o.length&&"123456"!==o&&(s.value=t("errorInfo"))}},m=()=>{n.value&&(r.value[n.value]=r.value[n.value].slice(0,r.value[n.value].length-1),"showInfo"===n.value&&(s.value=""))};return(0,a.watch)(n,e=>{if(e){var t=h[e].value;if(t){var{top:r}=t.$el.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+r)}}}),(e,u)=>{var h=(0,a.resolveComponent)("demo-block");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(h,{ref_key:"basicUsage",ref:d,title:(0,a.unref)(t)("basicUsage")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{value:r.value.basicUsage,focused:"basicUsage"===n.value,onFocus:u[0]||(u[0]=e=>n.value="basicUsage")},null,8,["value","focused"])]),_:1},8,["title"]),(0,a.createVNode)(h,{ref_key:"customLength",ref:v,title:(0,a.unref)(t)("customLength")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{value:r.value.customLength,length:4,focused:"customLength"===n.value,onFocus:u[1]||(u[1]=e=>n.value="customLength")},null,8,["value","focused"])]),_:1},8,["title"]),(0,a.createVNode)(h,{ref_key:"addGutter",ref:c,title:(0,a.unref)(t)("addGutter")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{value:r.value.addGutter,gutter:10,focused:"addGutter"===n.value,onFocus:u[2]||(u[2]=e=>n.value="addGutter")},null,8,["value","focused"])]),_:1},8,["title"]),(0,a.createVNode)(h,{ref_key:"removeMask",ref:f,title:(0,a.unref)(t)("removeMask")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{mask:!1,value:r.value.removeMask,focused:"removeMask"===n.value,onFocus:u[3]||(u[3]=e=>n.value="removeMask")},null,8,["value","focused"])]),_:1},8,["title"]),(0,a.createVNode)(h,{ref_key:"showInfo",ref:i,title:(0,a.unref)(t)("showInfo")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{info:(0,a.unref)(t)("info"),value:r.value.showInfo,"error-info":s.value,focused:"showInfo"===n.value,onFocus:u[4]||(u[4]=e=>n.value="showInfo")},null,8,["info","value","error-info","focused"])]),_:1},8,["title"]),(0,a.createVNode)((0,a.unref)(l.default),{show:!!n.value,onBlur:u[5]||(u[5]=e=>n.value=null),onInput:p,onDelete:m},null,8,["show"])],64)}}})},15580:function(e,t,r){"use strict";r.r(t),r.d(t,{useTouch:function(){return l}});var a=r("38613"),o=r("96040");function l(){var e=(0,a.ref)(0),t=(0,a.ref)(0),r=(0,a.ref)(0),l=(0,a.ref)(0),u=(0,a.ref)(0),n=(0,a.ref)(0),s=(0,a.ref)(""),i=(0,a.ref)(!0),c=()=>{r.value=0,l.value=0,u.value=0,n.value=0,s.value="",i.value=!0};return{move:a=>{var c,d,f=a.touches[0];r.value=(f.clientX<0?0:f.clientX)-e.value,l.value=f.clientY-t.value,u.value=Math.abs(r.value),n.value=Math.abs(l.value);if(!s.value||u.value<10&&n.value<10){;s.value=(c=u.value,c>(d=n.value)?"horizontal":d>c?"vertical":"")}i.value&&(u.value>o.TAP_OFFSET||n.value>o.TAP_OFFSET)&&(i.value=!1)},start:r=>{c(),e.value=r.touches[0].clientX,t.value=r.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:r,deltaY:l,offsetX:u,offsetY:n,direction:s,isVertical:()=>"vertical"===s.value,isHorizontal:()=>"horizontal"===s.value,isTap:i}}},77956:function(e,t,r){"use strict";r.r(t),r.d(t,{Loading:function(){return l},default:function(){return u}});var a=r("96040"),o=r("27395"),l=(0,a.withInstall)(o.default),u=l},54827:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r("96040"),o=r("99773"),l=(0,a.withInstall)(o.default)},33186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r("96040"),o=r("95918"),l=(0,a.withInstall)(o.default)},27395:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}}),r("97381"),r("8781"),r("90517"),r("54368");var a=r("38613"),o=r("96040"),[l,u]=(0,o.createNamespace)("loading"),n=Array(12).fill(null).map((e,t)=>(0,a.createVNode)("i",{class:u("line",String(t+1))},null)),s=(0,a.createVNode)("svg",{class:u("circular"),viewBox:"25 25 50 50"},[(0,a.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),i={size:o.numericProp,type:(0,o.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:o.numericProp,textColor:String},c=(0,a.defineComponent)({name:l,props:i,setup(e,t){var{slots:r}=t,l=(0,a.computed)(()=>(0,o.extend)({color:e.color},(0,o.getSizeStyle)(e.size))),i=()=>{var t="spinner"===e.type?n:s;return(0,a.createVNode)("span",{class:u("spinner",e.type),style:l.value},[r.icon?r.icon():t])},c=()=>{if(r.default){var t;return(0,a.createVNode)("span",{class:u("text"),style:{fontSize:(0,o.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[r.default()])}};return()=>{var{type:t,vertical:r}=e;return(0,a.createVNode)("div",{class:u([t,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[i(),c()])}}})},99773:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}}),r("97381"),r("8781"),r("90517"),r("54368"),r("82623");var a=r("38613"),o=r("96040"),l=r("25111"),u=r("83677"),[n,s]=(0,o.createNamespace)("number-keyboard"),i={show:Boolean,title:String,theme:(0,o.makeStringProp)("default"),zIndex:o.numericProp,teleport:[String,Object],maxlength:(0,o.makeNumericProp)(1/0),modelValue:(0,o.makeStringProp)(""),transition:o.truthProp,blurOnClose:o.truthProp,showDeleteKey:o.truthProp,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:o.truthProp,safeAreaInsetBottom:o.truthProp,extraKey:{type:[String,Array],default:""}},c=(0,a.defineComponent)({name:n,inheritAttrs:!1,props:i,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,t){var{emit:r,slots:n,attrs:i}=t,c=(0,a.ref)(),d=()=>{var t=Array(9).fill("").map((e,t)=>({text:t+1}));return e.randomKeyOrder&&!function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[r],e[r]=a};}(t),t},f=()=>[...d(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],v=()=>{var t=d(),{extraKey:r}=e,a=Array.isArray(r)?r:[r];return 1===a.length?t.push({text:0,wider:!0},{text:a[0],type:"extra"}):2===a.length&&t.push({text:a[0],type:"extra"},{text:0},{text:a[1],type:"extra"}),t},h=(0,a.computed)(()=>"custom"===e.theme?v():f()),p=()=>{e.show&&r("blur")},m=()=>{r("close"),e.blurOnClose&&p()},g=()=>r(e.show?"show":"hide"),V=(t,a)=>{if(""===t){"extra"===a&&p();return}var o=e.modelValue;"delete"===a?(r("delete"),r("update:modelValue",o.slice(0,o.length-1))):"close"===a?m():o.length<+e.maxlength&&(r("input",t),r("update:modelValue",o+t))},w=()=>{var{title:t,theme:r,closeButtonText:l}=e,u=n["title-left"],i=l&&"default"===r;if(t||i||u)return(0,a.createVNode)("div",{class:s("header")},[u&&(0,a.createVNode)("span",{class:s("title-left")},[u()]),t&&(0,a.createVNode)("h2",{class:s("title")},[t]),i&&(0,a.createVNode)("button",{type:"button",class:[s("close"),o.HAPTICS_FEEDBACK],onClick:m},[l])])},y=()=>h.value.map(e=>{var t={};return"delete"===e.type&&(t.default=n.delete),"extra"===e.type&&(t.default=n["extra-key"]),(0,a.createVNode)(u.default,{key:e.text,text:e.text,type:e.type,wider:e.wider,color:e.color,onPress:V},t)}),x=()=>{if("custom"===e.theme)return(0,a.createVNode)("div",{class:s("sidebar")},[e.showDeleteKey&&(0,a.createVNode)(u.default,{large:!0,text:e.deleteButtonText,type:"delete",onPress:V},{delete:n.delete}),(0,a.createVNode)(u.default,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:V},null)])};return(0,a.watch)(()=>e.show,t=>{!e.transition&&r(t?"show":"hide")}),e.hideOnClickOutside&&(0,l.useClickAway)(c,p,{eventName:"touchstart"}),()=>{var t,r=w(),l=(0,a.createVNode)(a.Transition,{name:e.transition?"van-slide-up":""},{default:()=>[(0,a.withDirectives)((0,a.createVNode)("div",(0,a.mergeProps)({ref:c,style:(0,o.getZIndexStyle)(e.zIndex),class:s({unfit:!e.safeAreaInsetBottom,"with-title":!!r}),onAnimationend:g,onTouchstartPassive:o.stopPropagation},i),[r,(0,a.createVNode)("div",{class:s("body")},[(0,a.createVNode)("div",{class:s("keys")},[y()]),x()])]),[[a.vShow,e.show]])]});if(e.teleport){;return(0,a.createVNode)(a.Teleport,{to:e.teleport},"function"!=typeof(t=l)&&("[object Object]"!==Object.prototype.toString.call(t)||(0,a.isVNode)(t))?{default:()=>[l]}:l)}return l}}})},83677:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r("97381"),r("8781");var a=r("38613"),o=r("96040"),l=r("15580"),u=r("77956"),[n,s]=(0,o.createNamespace)("key"),i=(0,a.createVNode)("svg",{class:s("collapse-icon"),viewBox:"0 0 30 24"},[(0,a.createVNode)("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),c=(0,a.createVNode)("svg",{class:s("delete-icon"),viewBox:"0 0 32 22"},[(0,a.createVNode)("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]),d=(0,a.defineComponent)({name:n,props:{type:String,text:o.numericProp,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,t){var{emit:r,slots:n}=t,d=(0,a.ref)(!1),f=(0,l.useTouch)(),v=e=>{f.start(e),d.value=!0},h=e=>{f.move(e),f.direction.value&&(d.value=!1)},p=t=>{d.value&&(!n.default&&(0,o.preventDefault)(t),d.value=!1,r("press",e.text,e.type))},m=()=>{if(e.loading)return(0,a.createVNode)(u.Loading,{class:s("loading-icon")},null);var t=n.default?n.default():e.text;switch(e.type){case"delete":return t||c;case"extra":return t||i;default:return t}};return()=>(0,a.createVNode)("div",{class:s("wrapper",{wider:e.wider}),onTouchstartPassive:v,onTouchmovePassive:h,onTouchend:p,onTouchcancel:p},[(0,a.createVNode)("div",{role:"button",tabindex:0,class:s([e.color,{large:e.large,active:d.value,delete:"delete"===e.type}])},[m()])])}})},95918:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("97381"),r("8781"),r("82623");var a=r("38613"),o=r("96040"),[l,u]=(0,o.createNamespace)("password-input"),n={info:String,mask:o.truthProp,value:(0,o.makeStringProp)(""),gutter:o.numericProp,length:(0,o.makeNumericProp)(6),focused:Boolean,errorInfo:String},s=(0,a.defineComponent)({name:l,props:n,emits:["focus"],setup(e,t){var{emit:r}=t,l=e=>{e.stopPropagation(),r("focus",e)},n=()=>{for(var t=[],{mask:r,value:l,gutter:n,focused:s}=e,i=+e.length,c=0;c<i;c++){var d=l[c],f=0!==c&&!n,v=s&&c===l.length,h=void 0;0!==c&&n&&(h={marginLeft:(0,o.addUnit)(n)}),t.push((0,a.createVNode)("li",{class:[{[o.BORDER_LEFT]:f},u("item",{focus:v})],style:h},[r?(0,a.createVNode)("i",{style:{visibility:d?"visible":"hidden"}},null):d,v&&(0,a.createVNode)("div",{class:u("cursor")},null)]))}return t};return()=>{var t=e.errorInfo||e.info;return(0,a.createVNode)("div",{class:u()},[(0,a.createVNode)("ul",{class:[u("security"),{[o.BORDER_SURROUND]:!e.gutter}],onTouchstartPassive:l},[n()]),t&&(0,a.createVNode)("div",{class:u(e.errorInfo?"error-info":"info")},[t])])}}})},53293:function(e,t,r){},71241:function(e,t,r){}}]);