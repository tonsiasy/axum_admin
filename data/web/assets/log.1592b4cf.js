var he=Object.defineProperty;var M=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var O=(c,n,m)=>n in c?he(c,n,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[n]=m,W=(c,n)=>{for(var m in n||(n={}))je.call(n,m)&&O(c,m,n[m]);if(M)for(var m of M(n))we.call(n,m)&&O(c,m,n[m]);return c};import{a0 as ye,g as b,C as ke,a9 as Ve,a3 as xe,r as u,aa as A,o as g,i as $,V as y,W as G,j as e,w as l,k as t,c as w,P as Ce,a7 as ze,y as H,B as X,m as P,t as v,z as p,l as De}from"./vendor.8d886737.js";import{g as Se}from"./job.a610bcea.js";import{s as R}from"./index.c83df884.js";function Le(c){return R({url:"/system/job_log/list",method:"get",params:c})}function Ue(c){return R({url:"/system/job_log/delete",method:"delete",data:c})}function $e(c){return R({url:"/system/job_log/clean",method:"delete",data:c})}const Pe={class:"app-container"},Re=p("\u641C\u7D22"),qe=p("\u91CD\u7F6E"),Be=p("\u5220\u9664"),Ie=p("\u6E05\u7A7A"),Je=p("\u5BFC\u51FA"),Te=p("\u5173\u95ED"),Ne=p("\u8BE6\u7EC6"),Ye={class:"dialog-footer"},Ke=p("\u5173 \u95ED"),Qe=ye({name:"JobLog"}),Ge=Object.assign(Qe,{setup(c){const{proxy:n}=Ce(),{sys_common_status:m,sys_job_group:z,sys_task_is_once:q}=n.useDict("sys_common_status","sys_job_group","sys_task_is_once"),B=b([]),V=b(!1),I=b(""),D=b(!0),S=b(!0),J=b([]),T=b(!0),L=b(0),x=b([]),N=ke(),Y=b(!1),Z=b(null),ee=Ve({form:{},queryParams:{page_num:1,page_size:10,job_name:void 0,job_group:void 0,status:void 0}}),{queryParams:i,form:_,rules:Ee}=xe(ee);function h(){D.value=!0,Le(n.addDateRange(i.value,x.value)).then(s=>{B.value=s.list,L.value=s.total,D.value=!1})}function le(){n.$router.back(),n.$tab.closeOpenPage()}function U(){i.value.page_num=1,h()}function oe(){x.value=[],n.resetForm("queryRef"),U()}function te(s){J.value=s.map(a=>a.job_log_id),T.value=!s.length}function ae(s){V.value=!0,_.value=s}function ne(s){let a=s.job_log_id?[s.job_log_id]:J.value;n.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5220\u9664\u8C03\u5EA6\u65E5\u5FD7\u7F16\u53F7\u4E3A"'+a+'"\u7684\u6570\u636E\u9879?').then(function(){return Ue({job_log_ids:a})}).then(()=>{h(),n.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}function se(){let s=I.value;n.$modal.confirm("\u662F\u5426\u786E\u8BA4\u6E05\u7A7A\u5F53\u524D\u4EFB\u52A1\u8C03\u5EA6\u65E5\u5FD7\u6570\u636E\u9879?").then(function(){return $e({job_id:s})}).then(()=>{h(),n.$modal.msgSuccess("\u6E05\u7A7A\u6210\u529F")}).catch(()=>{})}function ue(s){s?n.timer=setInterval(()=>{setTimeout(h,0)},1e3*5):(clearInterval(n.timer),Z.value=null)}function ie(){n.download("monitor/jobLog/export",W({},i.value),`job_log_${new Date().getTime()}.xlsx`)}function re(){const s=N.params&&N.params.job_id;s!==void 0?Se({job_id:s}).then(a=>{I.value=s,i.value.job_name=a.job_name,i.value.job_group=a.job_group,h()}):h()}return re(),(s,a)=>{const de=u("el-input"),r=u("el-form-item"),K=u("el-option"),Q=u("el-select"),_e=u("el-date-picker"),j=u("el-button"),E=u("el-form"),d=u("el-col"),pe=u("el-checkbox"),ce=u("right-toolbar"),F=u("el-row"),f=u("el-table-column"),k=u("dict-tag"),me=u("el-table"),fe=u("pagination"),be=u("el-tooltip"),ge=u("el-dialog"),C=A("hasPermi"),ve=A("loading");return g(),$("div",Pe,[y(e(E,{model:t(i),ref:"queryRef",inline:!0,"label-width":"68px"},{default:l(()=>[e(r,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"job_name"},{default:l(()=>[e(de,{modelValue:t(i).job_name,"onUpdate:modelValue":a[0]||(a[0]=o=>t(i).job_name=o),placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",clearable:"",size:"small",style:{width:"240px"},onKeyup:ze(U,["enter"]),disabled:""},null,8,["modelValue","onKeyup"])]),_:1}),e(r,{label:"\u4EFB\u52A1\u7EC4\u540D",prop:"job_group"},{default:l(()=>[e(Q,{modelValue:t(i).job_group,"onUpdate:modelValue":a[1]||(a[1]=o=>t(i).job_group=o),placeholder:"\u8BF7\u4EFB\u52A1\u7EC4\u540D",clearable:"",size:"small",style:{width:"240px"}},{default:l(()=>[(g(!0),$(H,null,X(t(z),o=>(g(),w(K,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u6267\u884C\u72B6\u6001",prop:"status"},{default:l(()=>[e(Q,{modelValue:t(i).status,"onUpdate:modelValue":a[2]||(a[2]=o=>t(i).status=o),placeholder:"\u8BF7\u9009\u62E9\u6267\u884C\u72B6\u6001",clearable:"",size:"small",style:{width:"240px"}},{default:l(()=>[(g(!0),$(H,null,X(t(m),o=>(g(),w(K,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u6267\u884C\u65F6\u95F4"},{default:l(()=>[e(_e,{modelValue:x.value,"onUpdate:modelValue":a[3]||(a[3]=o=>x.value=o),size:"small",style:{width:"240px"},"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(j,{type:"primary",icon:"Search",size:"mini",onClick:U},{default:l(()=>[Re]),_:1}),e(j,{icon:"Refresh",size:"mini",onClick:oe},{default:l(()=>[qe]),_:1})]),_:1})]),_:1},8,["model"]),[[G,S.value]]),e(F,{gutter:10,class:"mb8"},{default:l(()=>[e(d,{span:1.5},{default:l(()=>[y((g(),w(j,{type:"danger",plain:"",icon:"Delete",size:"mini",disabled:T.value,onClick:ne},{default:l(()=>[Be]),_:1},8,["disabled"])),[[C,["monitor:job:remove"]]])]),_:1},8,["span"]),e(d,{span:1.5},{default:l(()=>[y((g(),w(j,{type:"danger",plain:"",icon:"Delete",size:"mini",onClick:se},{default:l(()=>[Ie]),_:1})),[[C,["monitor:job:remove"]]])]),_:1},8,["span"]),e(d,{span:1.5},{default:l(()=>[y((g(),w(j,{type:"warning",plain:"",icon:"Download",size:"mini",onClick:ie},{default:l(()=>[Je]),_:1})),[[C,["monitor:job:export"]]])]),_:1},8,["span"]),e(d,{span:1.5},{default:l(()=>[e(j,{type:"warning",plain:"",icon:"Close",size:"mini",onClick:le},{default:l(()=>[Te]),_:1})]),_:1},8,["span"]),e(d,{span:1.5},{default:l(()=>[e(pe,{border:"",modelValue:Y.value,"onUpdate:modelValue":a[4]||(a[4]=o=>Y.value=o),label:"\u81EA\u52A8\u5237\u65B0",size:"mini",onChange:ue},null,8,["modelValue"])]),_:1},8,["span"]),e(ce,{showSearch:S.value,"onUpdate:showSearch":a[5]||(a[5]=o=>S.value=o),onQueryTable:h},null,8,["showSearch"])]),_:1}),y((g(),w(me,{data:B.value,onSelectionChange:te},{default:l(()=>[e(f,{type:"selection",width:"55",align:"center"}),e(f,{label:"\u65E5\u5FD7\u7F16\u53F7",width:"80",align:"center",prop:"job_log_id","show-overflow-tooltip":""}),e(f,{label:"\u4EFB\u52A1\u540D\u79F0",align:"center",prop:"job_name","show-overflow-tooltip":!0}),e(f,{label:"\u4EFB\u52A1\u7EC4\u540D",align:"center",prop:"job_group","show-overflow-tooltip":!0},{default:l(o=>[e(k,{options:t(z),value:o.row.job_group},null,8,["options","value"])]),_:1}),e(f,{label:"\u6279ID",align:"center",prop:"lot_id","show-overflow-tooltip":!0}),e(f,{label:"\u6279\u5185\u5E8F",align:"center",prop:"lot_order","show-overflow-tooltip":!0}),e(f,{label:"\u8C03\u7528\u76EE\u6807\u5B57\u7B26\u4E32",align:"center",prop:"invoke_target","show-overflow-tooltip":!0}),e(f,{label:"\u65E5\u5FD7\u4FE1\u606F",align:"center",prop:"job_message","show-overflow-tooltip":!0}),e(f,{label:"\u6267\u884C\u72B6\u6001",align:"center",prop:"status"},{default:l(o=>[e(k,{options:t(m),value:o.row.status},null,8,["options","value"])]),_:1}),e(f,{label:"\u4EFB\u52A1\u5C5E\u6027",align:"center",prop:"is_once"},{default:l(o=>[e(k,{options:t(q),value:o.row.is_once},null,8,["options","value"])]),_:1}),e(f,{label:"\u6267\u884C\u65F6\u95F4",align:"center",prop:"created_at",width:"180"},{default:l(o=>[P("span",null,v(s.parseTime(o.row.created_at)),1)]),_:1}),e(f,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:l(o=>[y((g(),w(j,{size:"mini",type:"text",icon:"View",onClick:Fe=>ae(o.row)},{default:l(()=>[Ne]),_:2},1032,["onClick"])),[[C,["monitor:job:query"]]])]),_:1})]),_:1},8,["data"])),[[ve,D.value]]),y(e(fe,{total:L.value,page:t(i).page_num,"onUpdate:page":a[6]||(a[6]=o=>t(i).page_num=o),limit:t(i).page_size,"onUpdate:limit":a[7]||(a[7]=o=>t(i).page_size=o),onPagination:h},null,8,["total","page","limit"]),[[G,L.value>0]]),e(ge,{title:"\u8C03\u5EA6\u65E5\u5FD7\u8BE6\u7EC6",modelValue:V.value,"onUpdate:modelValue":a[9]||(a[9]=o=>V.value=o),width:"700px","append-to-body":""},{footer:l(()=>[P("div",Ye,[e(j,{onClick:a[8]||(a[8]=o=>V.value=!1)},{default:l(()=>[Ke]),_:1})])]),default:l(()=>[e(E,{model:t(_),"label-width":"100px",size:"mini"},{default:l(()=>[e(F,null,{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"\u65E5\u5FD7\u5E8F\u53F7\uFF1A"},{default:l(()=>[e(be,{class:"box-item",effect:"dark",content:t(_).job_log_id,placement:"top-start"},{default:l(()=>[P("span",null,v(t(_).job_log_id.slice(0,10)+" ..."),1)]),_:1},8,["content"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u4EFB\u52A1\u5206\u7EC4\uFF1A"},{default:l(()=>[e(k,{options:t(z),value:t(_).job_group},null,8,["options","value"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u4EFB\u52A1\u540D\u79F0\uFF1A"},{default:l(()=>[p(v(t(_).job_name),1)]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u6267\u884C\u65F6\u95F4\uFF1A"},{default:l(()=>[p(v(t(_).created_at),1)]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u6267\u884C\u72B6\u6001\uFF1A"},{default:l(()=>[e(k,{options:t(m),value:t(_).status},null,8,["options","value"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u4EFB\u52A1\u5C5E\u6027\uFF1A"},{default:l(()=>[e(k,{options:t(q),value:t(_).is_once},null,8,["options","value"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u8C03\u7528\u65B9\u6CD5\uFF1A"},{default:l(()=>[p(v(t(_).invoke_target),1)]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"\u6D88\u8017\u65F6\u95F4\uFF1A"},{default:l(()=>[p(v(t(_).elapsed_time+" ms"),1)]),_:1})]),_:1}),e(d,{span:24},{default:l(()=>[e(r,{label:"\u8C03\u7528\u53C2\u6570\uFF1A"},{default:l(()=>[p(v(t(_).job_params),1)]),_:1})]),_:1}),e(d,{span:24},{default:l(()=>[e(r,{label:"\u65E5\u5FD7\u4FE1\u606F\uFF1A"},{default:l(()=>[p(v(t(_).job_message),1)]),_:1})]),_:1}),e(d,{span:24},{default:l(()=>[t(_).status==1?(g(),w(r,{key:0,label:"\u5F02\u5E38\u4FE1\u606F\uFF1A"},{default:l(()=>[p(v(t(_).exception_info),1)]),_:1})):De("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{Ge as default};
