import{c as e,u as a,d as l,g as n}from"./table.7cd260bc.js";import{r,b as t,a as o,m as u,f as s,R as i,i as d,w as p,h as c,e as m,ac as g,o as f,j as v,ad as h,z as _,ae as y,y as w,af as b,ag as C,ah as z,ai as k,t as V,E as P,aj as S,_ as x}from"./index.84e69f38.js";const j={total:0,currentPage:1,pageSizes:[10,20,50],pageSize:10,layout:"total, sizes, prev, pager, next, jumper"},U={class:"app-container"},R={class:"toolbar-wrapper"},T={class:"table-wrapper"},q={class:"pager-wrapper"},B=x(t({__name:"index",setup(t){const x=o(!1),{paginationData:B,handleCurrentChange:D,handleSizeChange:F}=((e={})=>{const a=r(Object.assign({...j},e));return{paginationData:a,handleCurrentChange:e=>{a.currentPage=e},handleSizeChange:e=>{a.pageSize=e}}})(),E=o(!1),I=o(null),O=r({username:"",password:""}),$=r({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}),A=()=>{var l;null==(l=I.value)||l.validate((l=>{if(!l)return!1;void 0===H.value?e({username:O.username,password:O.password}).then((()=>{P.success("新增成功"),E.value=!1,M()})):a({id:H.value,username:O.username}).then((()=>{P.success("修改成功"),E.value=!1,M()}))}))},G=()=>{H.value=void 0,O.username="",O.password=""},H=o(void 0),J=o([]),K=o(null),L=r({username:"",phone:""}),M=()=>{x.value=!0,n({currentPage:B.currentPage,size:B.pageSize,username:L.username||void 0,phone:L.phone||void 0}).then((e=>{B.total=e.data.total,J.value=e.data.list})).catch((()=>{J.value=[]})).finally((()=>{x.value=!1}))},N=()=>{1===B.currentPage&&M(),B.currentPage=1},Q=()=>{var e;null==(e=K.value)||e.resetFields(),1===B.currentPage&&M(),B.currentPage=1},W=()=>{M()};return u([()=>B.currentPage,()=>B.pageSize],M,{immediate:!0}),(e,a)=>{const n=m("el-input"),r=m("el-form-item"),t=m("el-button"),o=m("el-form"),u=m("el-card"),j=m("el-tooltip"),X=m("el-table-column"),Y=m("el-tag"),Z=m("el-table"),ee=m("el-pagination"),ae=m("el-dialog"),le=g("loading");return f(),s("div",U,[i((f(),d(u,{shadow:"never",class:"search-wrapper"},{default:p((()=>[c(o,{ref_key:"searchFormRef",ref:K,inline:!0,model:L},{default:p((()=>[c(r,{prop:"username",label:"用户名"},{default:p((()=>[c(n,{modelValue:L.username,"onUpdate:modelValue":a[0]||(a[0]=e=>L.username=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),c(r,{prop:"phone",label:"手机号"},{default:p((()=>[c(n,{modelValue:L.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>L.phone=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),c(r,null,{default:p((()=>[c(t,{type:"primary",icon:v(h),onClick:N},{default:p((()=>[_("查询")])),_:1},8,["icon"]),c(t,{icon:v(y),onClick:Q},{default:p((()=>[_("重置")])),_:1},8,["icon"])])),_:1})])),_:1},8,["model"])])),_:1})),[[le,x.value]]),i((f(),d(u,{shadow:"never"},{default:p((()=>[w("div",R,[w("div",null,[c(t,{type:"primary",icon:v(b),onClick:a[2]||(a[2]=e=>E.value=!0)},{default:p((()=>[_("新增用户")])),_:1},8,["icon"]),c(t,{type:"danger",icon:v(C)},{default:p((()=>[_("批量删除")])),_:1},8,["icon"])]),w("div",null,[c(j,{content:"下载"},{default:p((()=>[c(t,{type:"primary",icon:v(z),circle:""},null,8,["icon"])])),_:1}),c(j,{content:"刷新表格"},{default:p((()=>[c(t,{type:"primary",icon:v(k),circle:"",onClick:W},null,8,["icon"])])),_:1})])]),w("div",T,[c(Z,{data:J.value},{default:p((()=>[c(X,{type:"selection",width:"50",align:"center"}),c(X,{prop:"username",label:"用户名",align:"center"}),c(X,{prop:"roles",label:"角色",align:"center"},{default:p((e=>["admin"===e.row.roles?(f(),d(Y,{key:0,effect:"plain"},{default:p((()=>[_("admin")])),_:1})):(f(),d(Y,{key:1,type:"warning",effect:"plain"},{default:p((()=>[_(V(e.row.roles),1)])),_:2},1024))])),_:1}),c(X,{prop:"phone",label:"手机号",align:"center"}),c(X,{prop:"email",label:"邮箱",align:"center"}),c(X,{prop:"status",label:"状态",align:"center"},{default:p((e=>[e.row.status?(f(),d(Y,{key:0,type:"success",effect:"plain"},{default:p((()=>[_("启用")])),_:1})):(f(),d(Y,{key:1,type:"danger",effect:"plain"},{default:p((()=>[_("禁用")])),_:1}))])),_:1}),c(X,{prop:"createTime",label:"创建时间",align:"center"}),c(X,{fixed:"right",label:"操作",width:"150",align:"center"},{default:p((e=>[c(t,{type:"primary",text:"",bg:"",size:"small",onClick:a=>{return l=e.row,H.value=l.id,O.username=l.username,O.password=l.password,void(E.value=!0);var l}},{default:p((()=>[_("修改")])),_:2},1032,["onClick"]),c(t,{type:"danger",text:"",bg:"",size:"small",onClick:a=>{return n=e.row,void S.confirm(`正在删除用户：${n.username}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{l(n.id).then((()=>{P.success("删除成功"),M()}))}));var n}},{default:p((()=>[_("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),w("div",q,[c(ee,{background:"",layout:v(B).layout,"page-sizes":v(B).pageSizes,total:v(B).total,"page-size":v(B).pageSize,currentPage:v(B).currentPage,onSizeChange:v(F),onCurrentChange:v(D)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[le,x.value]]),c(ae,{modelValue:E.value,"onUpdate:modelValue":a[6]||(a[6]=e=>E.value=e),title:void 0===H.value?"新增用户":"修改用户",onClose:G,width:"30%"},{footer:p((()=>[c(t,{onClick:a[5]||(a[5]=e=>E.value=!1)},{default:p((()=>[_("取消")])),_:1}),c(t,{type:"primary",onClick:A},{default:p((()=>[_("确认")])),_:1})])),default:p((()=>[c(o,{ref_key:"formRef",ref:I,model:O,rules:$,"label-width":"100px","label-position":"left"},{default:p((()=>[c(r,{prop:"username",label:"用户名"},{default:p((()=>[c(n,{modelValue:O.username,"onUpdate:modelValue":a[3]||(a[3]=e=>O.username=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),c(r,{prop:"password",label:"密码"},{default:p((()=>[c(n,{modelValue:O.password,"onUpdate:modelValue":a[4]||(a[4]=e=>O.password=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-515ac068"]]);export{B as default};
