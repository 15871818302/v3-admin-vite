import{b as e,l as a,a as l,r as s,f as r,h as o,y as d,w as i,a3 as t,a4 as n,e as u,G as p,H as m,o as c,j as f,a5 as g,a6 as _,a7 as v,a8 as x,a9 as h,p as w,z as b,C as y,_ as V}from"./index.84e69f38.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang.711d9b65.js";const k={class:"login-container"},C={class:"login-card"},j=(e=>(p("data-v-6f4945e9"),e=e(),m(),e))((()=>d("div",{class:"title"},[d("img",{src:"/v3-admin-vite/static/logo-text-2.eef467fb.png"})],-1))),q={class:"content"},M=V(e({__name:"index",setup(e){const p=a(),m=l(null),V=l(!1),M=l(""),U=s({username:"admin",password:"12345678",code:""}),K={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},F=()=>{var e;null==(e=m.value)||e.validate((e=>{if(!e)return!1;V.value=!0,y().login({username:U.username,password:U.password,code:U.code}).then((()=>{p.push({path:"/"})})).catch((()=>{G(),U.password=""})).finally((()=>{V.value=!1}))}))},G=()=>{U.code="",M.value="",n().then((e=>{M.value=e.data}))};return G(),(e,a)=>{const l=u("el-input"),s=u("el-form-item"),n=u("el-icon"),p=u("el-image"),y=u("el-button"),H=u("el-form");return c(),r("div",k,[o(z,{class:"theme-switch"}),d("div",C,[j,d("div",q,[o(H,{ref_key:"loginFormRef",ref:m,model:U,rules:K,onKeyup:t(F,["enter"])},{default:i((()=>[o(s,{prop:"username"},{default:i((()=>[o(l,{modelValue:U.username,"onUpdate:modelValue":a[0]||(a[0]=e=>U.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":f(g),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),o(s,{prop:"password"},{default:i((()=>[o(l,{modelValue:U.password,"onUpdate:modelValue":a[1]||(a[1]=e=>U.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":f(_),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),o(s,{prop:"code"},{default:i((()=>[o(l,{modelValue:U.code,"onUpdate:modelValue":a[2]||(a[2]=e=>U.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":f(v),maxlength:"7",size:"large"},{append:i((()=>[o(p,{src:M.value,onClick:G,draggable:"false"},{placeholder:i((()=>[o(n,null,{default:i((()=>[o(f(x))])),_:1})])),error:i((()=>[o(n,null,{default:i((()=>[o(f(h))])),_:1})])),_:1},8,["src"])])),_:1},8,["modelValue","prefix-icon"])])),_:1}),o(y,{loading:V.value,type:"primary",size:"large",onClick:w(F,["prevent"])},{default:i((()=>[b(" 登 录 ")])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-6f4945e9"]]);export{M as default};
