import{_ as a,f as e,h as t,e as s,o as n,b as o,C as i,a as r,aa as d,ab as c,i as l,k as p}from"./index.84e69f38.js";const m={class:"app-container center"};const u=a({},[["render",function(a,o){const i=s("el-empty");return n(),e("div",m,[t(i,{description:"Admin 权限可见"})])}],["__scopeId","data-v-5a78679f"]]),f={class:"app-container center"};const v=a({},[["render",function(a,o){const i=s("el-empty");return n(),e("div",f,[t(i,{description:"Editor 权限可见"})])}],["__scopeId","data-v-f3d24ef0"]]),_=o({__name:"index",setup(a){const e=i(),t=r("admin");return e.roles.includes("admin")||(t.value="editor"),d({title:"Hello",message:c("a",{style:"color: teal",target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},"小项目获取 star 不易，如果你喜欢这个项目的话，欢迎点击这里支持一个 star ！这是作者持续维护的唯一动力（小声：毕竟是免费的）"),duration:0,position:"bottom-right"}),(a,e)=>(n(),l(p("admin"===t.value?u:v)))}});export{_ as default};
