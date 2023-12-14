import{z as x,C as b,r as F,o as v,a as K,e as n,w as k,B as u,W as r,c as B,F as w}from"./vue-libs.b44bc779.js";import{V as m}from"./index.bbd81525.js";import{V}from"./index.ff359fc6.js";import{V as a}from"./index.f4ffd0c6.js";import{a as D}from"./use-translate.d2900b8c.js";import{T as y}from"./function-call.509e41a7.js";import"./with-install.19a35764.js";import"./use-route.82f2be69.js";import"./index.b70c9b40.js";import"./constant.80c6de18.js";import"./use-id.46df47b7.js";import"./use-expose.c942d5f8.js";import"./use-touch.04ca7093.js";import"./index.4e4daaac.js";import"./mount-component.f3744995.js";import"./index.e6e790ed.js";import"./interceptor.f0c85874.js";import"./use-lazy-render.f712e85e.js";import"./on-popup-reopen.138c77eb.js";import"./index.d46e53a8.js";const J=x({__name:"index",setup(f){const l=D({"zh-CN":{close:"\u5B8C\u6210",input:"\u8F93\u5165",title:"\u952E\u76D8\u6807\u9898",button1:"\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8",button2:"\u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8",button3:"\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8",button4:"\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8",button5:"\u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8",button6:"\u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8",bindValue:"\u53CC\u5411\u7ED1\u5B9A",clickToInput:"\u70B9\u6B64\u8F93\u5165",extraKey:"\u5DE6\u4E0B\u89D2\u6309\u952E\u5185\u5BB9",multiExtraKey:"\u914D\u7F6E\u591A\u4E2A\u6309\u952E",randomKeyOrder:"\u968F\u673A\u6570\u5B57\u952E\u76D8"},"en-US":{close:"Close",input:"Input",title:"Keyboard Title",button1:"Show Default Keyboard",button2:"Show Keyboard With Sidebar",button3:"Show IdNumber Keyboard",button4:"Show Keyboard With Title",button5:"Show Keyboard With Multiple ExtraKey",button6:"Show Keyboard With Random Key Order",bindValue:"Bind Value",clickToInput:"Click To Input",extraKey:"IdNumber Keyboard",multiExtraKey:"Multiple ExtraKey",randomKeyOrder:"Random Key Order"}}),d=b(""),e=b("default"),i=p=>y(`${l("input")}: ${p}`),s=()=>y(l("delete"));return(p,t)=>{const E=F("demo-block");return v(),K(w,null,[n(E,{card:""},{default:k(()=>[n(u(m),{"is-link":"",title:u(l)("button1"),onTouchstart:t[0]||(t[0]=r(o=>e.value="default",["stop"]))},null,8,["title"]),n(u(m),{"is-link":"",title:u(l)("button2"),onTouchstart:t[1]||(t[1]=r(o=>e.value="custom",["stop"]))},null,8,["title"]),n(u(m),{"is-link":"",title:u(l)("button3"),onTouchstart:t[2]||(t[2]=r(o=>e.value="extraKey",["stop"]))},null,8,["title"]),n(u(m),{"is-link":"",title:u(l)("button4"),onTouchstart:t[3]||(t[3]=r(o=>e.value="title",["stop"]))},null,8,["title"]),n(u(m),{"is-link":"",title:u(l)("button5"),onTouchstart:t[4]||(t[4]=r(o=>e.value="multiExtraKey",["stop"]))},null,8,["title"]),n(u(m),{"is-link":"",title:u(l)("button6"),onTouchstart:t[5]||(t[5]=r(o=>e.value="randomKeyOrder",["stop"]))},null,8,["title"]),n(u(V),{modelValue:d.value,"onUpdate:modelValue":t[6]||(t[6]=o=>d.value=o),readonly:"",clickable:"",label:u(l)("bindValue"),placeholder:u(l)("clickToInput"),onTouchstart:t[7]||(t[7]=r(o=>e.value="bindValue",["stop"]))},null,8,["modelValue","label","placeholder"])]),_:1}),n(u(a),{show:e.value==="default",onBlur:t[8]||(t[8]=o=>e.value=""),onInput:i,onDelete:s},null,8,["show"]),n(u(a),{show:e.value==="custom","close-button-text":u(l)("close"),theme:"custom","extra-key":".",onBlur:t[9]||(t[9]=o=>e.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text"]),n(u(a),{show:e.value==="extraKey","close-button-text":u(l)("close"),"extra-key":"X",onBlur:t[10]||(t[10]=o=>e.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text"]),n(u(a),{show:e.value==="title","close-button-text":u(l)("close"),title:u(l)("title"),"extra-key":".",onBlur:t[11]||(t[11]=o=>e.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text","title"]),n(u(a),{show:e.value==="multiExtraKey","close-button-text":u(l)("close"),theme:"custom","extra-key":["00","."],onBlur:t[12]||(t[12]=o=>e.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text","extra-key"]),(v(),B(u(a),{key:0,show:e.value==="randomKeyOrder","random-key-order":"",onBlur:t[13]||(t[13]=o=>e.value=""),onInput:i,onDelete:s},null,8,["show"])),n(u(a),{modelValue:d.value,"onUpdate:modelValue":t[14]||(t[14]=o=>d.value=o),show:e.value==="bindValue",maxlength:"6",onBlur:t[15]||(t[15]=o=>e.value="")},null,8,["modelValue","show"])],64)}}});export{J as default};
