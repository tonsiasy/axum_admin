import{s as t}from"./index.c83df884.js";function n(e){return t({url:"/system/menu/list",method:"get",params:e})}function s(e){return console.log("query",e),t({url:"/system/menu/get_by_id",method:"get",params:e})}function r(){return t({url:"/system/menu/get_all_menu_tree",method:"get"})}function m(e){return t({url:"/system/menu/add",method:"post",data:e})}function d(e){return t({url:"/system/menu/edit",method:"put",data:e})}function a(e){return t({url:"/system/menu/delete",method:"delete",data:e})}export{m as a,a as d,s as g,n as l,r as t,d as u};
