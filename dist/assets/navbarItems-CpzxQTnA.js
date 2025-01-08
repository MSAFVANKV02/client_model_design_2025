import{j as e}from"./vendor-Dyml7b79.js";import{N as b,b as A,q as N,Q as C,E as d,R as u,S as h,I as f,U as w,V as a,T as m,W as z,u as F,X as v,Y as O}from"./index-B5fs0UHr.js";import{A as p,L as M,S as R,H as s}from"./Logo-DC9jCXWe.js";import{r as g}from"./react-rGsIzOq1.js";import{a as k}from"./hook-Dzq5yq8o.js";const j=b(e.jsx("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"EastOutlined"),W=b([e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"},"0"),e.jsx("path",{d:"M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"},"1")],"AccountCircleOutlined"),E=b(e.jsx("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"}),"ShoppingBagOutlined");function B(){const[r,t]=g.useState(null),c=!!r,{handleClick:l}=A(),{handleLogout:x}=N(),{user:n}=k(i=>i.auth),I=C(),S=i=>{t(i.currentTarget)},y=()=>{t(null)},o=i=>{t(null),l(i)};return e.jsxs(g.Fragment,{children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e.jsx(u,{title:"Account settings",children:e.jsx("div",{className:"",children:e.jsx(h,{onClick:S,size:"small",sx:{ml:2},"aria-controls":c?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":c?"true":void 0,children:e.jsx(p,{sx:{width:32,height:32,textTransform:"capitalize",bgcolor:"black",margin:"auto"},children:n==null?void 0:n.name.slice(0,1)})})})}),!I&&e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"My Notifications",children:e.jsx(h,{onClick:()=>o("/account/notification"),size:"small",sx:{ml:0},children:e.jsxs(p,{sx:{width:32,height:32,backgroundColor:"transparent"},children:[" ",e.jsx(f,{icon:"ph:bell-light",fontSize:25,className:"text-black"})]})})}),e.jsx(u,{title:"My Cart",children:e.jsx(h,{onClick:()=>o("/cart"),size:"small",sx:{ml:0},children:e.jsxs(p,{sx:{width:32,height:32,backgroundColor:"transparent"},children:[" ",e.jsx(f,{icon:"mynaui:cart",fontSize:25,className:"text-black"})]})})})]})]}),e.jsxs(w,{anchorEl:r,id:"account-menu",open:c,onClose:y,onClick:y,slotProps:{paper:{elevation:0,sx:{minWidth:"350px",overflow:"visible",mt:1.5,px:1.5,py:1,borderRadius:"12px",boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.3)","&::before":{content:'""',display:"block",position:"absolute",top:0,left:"50%",transform:"translateX(-50%) translateY(-50%) rotate(45deg)",width:10,height:10,bgcolor:"background.paper",zIndex:0}}}},transformOrigin:{horizontal:"center",vertical:"top"},anchorOrigin:{horizontal:"center",vertical:"bottom"},children:[e.jsxs(a,{disabled:!0,sx:{fontWeight:"bold",color:"#5F08B1",mb:1,userSelect:"none"},children:["Hi, ",n==null?void 0:n.name.toUpperCase()]}),e.jsxs(a,{onClick:()=>o("/my-account"),sx:{display:"flex",justifyContent:"space-between",alignItems:"center","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2,mb:1},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(W,{sx:{color:"black",mr:1}}),e.jsx(m,{variant:"body2",fontWeight:"medium",children:"Account"})]}),e.jsx(j,{sx:{fontSize:16,color:"#6A0DAD"}})]}),e.jsxs(a,{onClick:()=>o("/my-account/my-orders"),sx:{display:"flex",justifyContent:"space-between",alignItems:"center","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2,mb:1},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(E,{sx:{color:"black",mr:1}}),e.jsx(m,{variant:"body2",fontWeight:"medium",children:"Order"})]}),e.jsx(j,{sx:{fontSize:16,color:"#6A0DAD"}})]}),e.jsxs(a,{onClick:()=>o("/my-account/my-wishlist"),sx:{display:"flex",justifyContent:"space-between",alignItems:"center","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2,mb:3},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(z,{sx:{color:"black",mr:1}}),e.jsx(m,{variant:"body2",fontWeight:"medium",children:"Wishlist"})]}),e.jsx(j,{sx:{fontSize:16,color:"#6A0DAD"}})]}),e.jsx(a,{onClick:()=>{x("/"),o("/")},sx:{justifyContent:"center",fontWeight:"bold",color:"#A9A9A9","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2},children:"Sign out"})]})]})}function V({navItems:r}){const{user:t}=k(x=>x.auth),c=F(),l=C();return g.useEffect(()=>{t&&!l&&localStorage.removeItem("userProfile"),t||(v.remove("us_tkn_kyc"),v.remove("us_b2b_tkn"))},[l,t]),e.jsx("nav",{className:`w-full flex py-5 bg-transparent ${c.pathname==="/"&&" "} 2xl:px-24 xl:px-20 md:px-14 sm:px-10 px-5 mx-auto z-50`,children:e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx(M,{}),e.jsxs("div",{className:"lg:flex hidden items-center ",children:[e.jsxs("div",{className:"flex items-center border rounded-lg h-fit overflow-hidden",children:[e.jsx(O,{type:"text",placeholder:"Search",className:"border-none outline-none w-[300px] h-full"}),e.jsx(f,{icon:"mynaui:search",fontSize:25,className:"text-gray-400"})]}),e.jsx("div",{className:"",children:t&&e.jsx(B,{})})]}),e.jsx("div",{className:"lg:hidden block  ",children:e.jsx(R,{navItems:r})})]})})}function K(){return{navItemsKyc:[{title:"Home",href:"/",icon:e.jsx(s,{}),current:!0},{title:"About",href:"/about",icon:e.jsx(s,{}),current:!0}],navItems:[{title:"Cart",href:"/cart",icon:e.jsx(s,{}),current:!0},{title:"Orders",href:"/my-account/my-orders",icon:e.jsx(s,{}),current:!0},{title:"Wishlist",href:"/my-account/my-wishlist",icon:e.jsx(s,{}),current:!0},{title:"Accounts",href:"/my-account",icon:e.jsx(s,{}),current:!0},{title:"Chat with us",href:"/my-account/chat",icon:e.jsx(s,{}),current:!0},{title:"Return or Replace",href:"/my-account/return",icon:e.jsx(s,{}),current:!0}]}}export{V as N,K as u};
