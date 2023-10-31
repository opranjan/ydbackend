"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[32],{46627:function(e,n,r){var a=r(4942),t=(r(72791),r(38596)),i=r(26513),o=r(98008),s=r(67025),d=r(91523),l=r(80184),c=(0,t.Z)((function(e){var n,r;return{navbar:(0,a.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)"},e.breakpoints.between("999"),{flexDirection:"row",alignItems:"center",padding:"1rem"}),menuIcon:(0,a.Z)({display:"none"},e.breakpoints.down("999"),{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}),dashboardHead:(n={fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)"},(0,a.Z)(n,e.breakpoints.down("sm"),{fontSize:"1.5rem",marginBottom:"0.5rem"}),(0,a.Z)(n,e.breakpoints.down("999"),{fontSize:"1.8rem",marginBottom:0}),(0,a.Z)(n,e.breakpoints.down("xs"),{marginRight:"1.5rem",fontSize:"1.8rem"}),n),contactButton:(r={padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem"},(0,a.Z)(r,e.breakpoints.down("sm"),{fontSize:"14px",padding:"8px 14px"}),(0,a.Z)(r,e.breakpoints.between("sm","md"),{fontSize:"14px",padding:"7px 15px"}),(0,a.Z)(r,e.breakpoints.down("xs"),{display:"none"}),(0,a.Z)(r,"&:hover",{background:"#ed1c24"}),r),headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}}));n.Z=function(e){var n=e.toggleHandler,a=c();return(0,l.jsxs)("nav",{className:a.navbar,children:[(0,l.jsx)(s.Z,{className:a.menuIcon,onClick:n,children:(0,l.jsx)(o.Z,{fontSize:"2rem"})}),(0,l.jsx)("div",{className:a.dashboardHead,children:(0,l.jsx)(d.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,l.jsx)("img",{src:r(35756),alt:"logo",className:a.headerBottom__logo_main})})}),(0,l.jsx)(d.rU,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,l.jsx)(i.Z,{className:a.contactButton,children:"Contact Us"})})]})}},97736:function(e,n,r){r(72791);var a=r(64880),t=r(91523),i=r(60220),o=r(4567),s=r(5849),d=r(97235),l=r(32338),c=r(59140),m=r(42419),x=r(41992),h=r(15776),u=r(74865),p=r(37541),g=r(68535),f=r(59434),b=r(80184),j=(0,d.Z)((function(e){return{sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}}}));n.Z=function(){var e=j(),n=(0,f.v9)((function(e){return e.userData})),r=n.user,d=n.loading,v=(0,a.k6)();return(0,b.jsx)(b.Fragment,{children:!d&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:e.sidebar,children:[(0,b.jsx)(i.Z,{src:r&&r.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,b.jsx)(o.Z,{variant:"subtitle1",className:e.name,children:r&&r.name}),(0,b.jsx)(o.Z,{variant:"subtitle2",className:e.email,children:r&&r.email}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)("ul",{className:e.sideBarMenu,children:[(0,b.jsx)(t.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(l.Z,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,b.jsx)(t.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(p.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,b.jsx)(t.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(c.Z,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,b.jsx)(t.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(m.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,b.jsx)(t.rU,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(x.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,b.jsx)(t.rU,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(h.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,b.jsx)(t.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(g.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})})]}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)(s.Z,{className:e.button,onClick:function(){v.push("/account")},variant:"contained",children:[(0,b.jsx)(u.Z,{fontSize:"large",style:{marginRight:"10px"}}),"Account"]})]})})})}},32032:function(e,n,r){r.r(n);var a=r(29439),t=r(72791),i=(r(661),r(5151)),o=r(59434),s=r(91523),d=r(56534),l=r(26513),c=r(86549),m=r(21079),x=r(57407),h=r(97736),u=r(46627),p=r(89307),g=r(97979),f=r(50202),b=r(64880),j=r(80184);n.default=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.allUsers})),r=n.error,v=n.users,N=n.loading,w=(0,o.v9)((function(e){return e.profileData})),S=w.error,Z=w.isDeleted,k=w.message,z=(0,d.VY)(),B=(0,b.k6)(),C=(0,t.useState)(!1),y=(0,a.Z)(C,2),I=y[0],D=y[1];(0,t.useEffect)((function(){r&&(z.error(r),e((0,g.b9)())),S&&(z.error(S),e((0,g.b9)())),Z&&(z.success(k),B.push("/admin/users"),e({type:f.aG})),e((0,g.AW)())}),[e,z,r,S,B,Z,k]);var M=[{field:"name",headerName:"Name",minWidth:150,flex:.5,headerClassName:"column-header hide-on-mobile"},{field:"email",headerName:"Email",minWidth:150,flex:.7,headerClassName:"column-header hide-on-mobile"},{field:"role",headerName:"Role",type:"number",minWidth:150,flex:.3,headerClassName:"column-header hide-on-mobile",cellClassName:function(e){return"admin"===e.getValue(e.id,"role")?"greenColor":"redColor"}},{field:"actions",flex:.3,headerName:"Actions",minWidth:150,type:"number",headerClassName:"column-header hide-on-mobile",renderCell:function(n){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.rU,{to:"/admin/user/".concat(n.getValue(n.id,"id")),children:(0,j.jsx)(m.Z,{className:"icon-"})}),(0,j.jsx)(l.Z,{onClick:function(){return r=n.getValue(n.id,"id"),void e((0,g.h8)(r));var r},children:(0,j.jsx)(x.Z,{className:"iconbtn"})})]})}},{field:"id",headerName:"User ID",minWidth:180,flex:.8,sortable:!1,headerClassName:"column-header hide-on-mobile"}],U=[];return v&&v.forEach((function(e){U.push({id:e._id,role:e.role,email:e.email,name:e.name})})),(0,t.useEffect)((function(){var e=function(){window.innerWidth>999&&I&&D(!1)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[I]),(0,j.jsx)(j.Fragment,{children:N?(0,j.jsx)(p.Z,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.Z,{title:"ALL Users - Admin"}),(0,j.jsxs)("div",{className:"product-list",style:{marginTop:0},children:[(0,j.jsx)("div",{className:I?"toggleBox":"listSidebar",children:(0,j.jsx)(h.Z,{})}),(0,j.jsxs)("div",{className:"list-table",children:[(0,j.jsx)(u.Z,{toggleHandler:function(){console.log("toggle"),D(!I)}}),(0,j.jsxs)("div",{className:"productListContainer",children:[(0,j.jsx)("h4",{id:"productListHeading",children:"ALL USERS"}),(0,j.jsx)(i._$r,{rows:U,columns:M,pageSize:10,disableSelectionOnClick:!0,className:"productListTable",autoHeight:!0})]})]})]})]})})}},661:function(){},35756:function(e,n,r){e.exports=r.p+"static/media/logo.1263e68b0e4cb77606c2.png"}}]);
//# sourceMappingURL=32.052a0879.chunk.js.map