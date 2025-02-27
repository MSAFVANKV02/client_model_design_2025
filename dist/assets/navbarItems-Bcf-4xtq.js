import{j as e,a as p,Q as g,I as f,a1 as b,U as N,M as h,a2 as S,T as j,a3 as y,a4 as F,m as z}from"./mui-D-lFG_0o.js";import{e as D,w as k,Z as C,ad as A,ae as R,r as T,a4 as L,af as M,v as W,I as v,u as E,ag as O,ah as B,N as K,L as U,a6 as H}from"./index-CrOhDYs6.js";import{S as _,H as a}from"./Sidebar-Jipgr2-N.js";import{r as o}from"./vendor-BRM_wmTf.js";function P(){const[l,r]=o.useState(null),t=!!l,{handleClick:d}=D(),x=k(),{user:s}=C(n=>n.auth),u=o.useMemo(()=>A(),[]),m=o.useCallback(n=>{r(n.currentTarget)},[]),i=o.useCallback(()=>{r(null)},[]),c=o.useCallback(n=>{r(null),d(n)},[d]),I=o.useCallback(async()=>{try{const n=await R();n.status===200&&(T(n.data.message),x(L()),d("/"),x(M()))}catch(n){W("An error occurred while logging out."),console.error(n)}},[x]),w=o.useMemo(()=>s!=null&&s.name?s.name.slice(0,1):"",[s]);return e.jsxs(o.Fragment,{children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e.jsx(g,{title:"Account settings",children:e.jsx("div",{className:"",children:e.jsx(f,{onClick:m,size:"small",sx:{ml:2},"aria-controls":t?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":t?"true":void 0,children:e.jsx(b,{sx:{width:32,height:32,textTransform:"capitalize",bgcolor:"black",margin:"auto"},children:w})})})}),!u&&e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"My Notifications",children:e.jsx(f,{onClick:()=>c("/account/notification"),size:"small",sx:{ml:0},children:e.jsxs(b,{sx:{width:32,height:32,backgroundColor:"transparent"},children:[" ",e.jsx(v,{icon:"ph:bell-light",fontSize:25,className:"text-black"})]})})}),e.jsx(g,{title:"My Cart",children:e.jsx(f,{onClick:()=>c("/cart"),size:"small",sx:{ml:0},children:e.jsxs(b,{sx:{width:32,height:32,backgroundColor:"transparent"},children:[" ",e.jsx(v,{icon:"mynaui:cart",fontSize:25,className:"text-black"})]})})})]})]}),e.jsxs(N,{anchorEl:l,id:"account-menu",open:t,onClose:i,onClick:i,slotProps:{paper:{elevation:0,sx:{minWidth:"350px",overflow:"visible",mt:1.5,px:1.5,py:1,borderRadius:"12px",boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.3)","&::before":{content:'""',display:"block",position:"absolute",top:0,left:"50%",transform:"translateX(-50%) translateY(-50%) rotate(45deg)",width:10,height:10,bgcolor:"background.paper",zIndex:0}}}},transformOrigin:{horizontal:"center",vertical:"top"},anchorOrigin:{horizontal:"center",vertical:"bottom"},children:[e.jsxs(h,{disabled:!0,sx:{fontWeight:"bold",color:"#5F08B1",mb:1,userSelect:"none"},children:["Hi, ",s==null?void 0:s.name]}),e.jsxs(h,{onClick:()=>c("/my-account"),sx:{display:"flex",justifyContent:"space-between",alignItems:"center","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2,mb:1},children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(S,{sx:{color:"black",mr:1}}),e.jsx(j,{variant:"body2",fontWeight:"medium",children:"Account"})]}),e.jsx(y,{sx:{fontSize:16,color:"#6A0DAD"}})]}),e.jsxs(h,{onClick:()=>c("/my-account/my-orders"),sx:{display:"flex",justifyContent:"space-between",alignItems:"center","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2,mb:1},children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(F,{sx:{color:"black",mr:1}}),e.jsx(j,{variant:"body2",fontWeight:"medium",children:"Order"})]}),e.jsx(y,{sx:{fontSize:16,color:"#6A0DAD"}})]}),e.jsxs(h,{onClick:()=>c("/my-account/my-wishlist"),sx:{display:"flex",justifyContent:"space-between",alignItems:"center","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2,mb:3},children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(z,{sx:{color:"black",mr:1}}),e.jsx(j,{variant:"body2",fontWeight:"medium",children:"Wishlist"})]}),e.jsx(y,{sx:{fontSize:16,color:"#6A0DAD"}})]}),e.jsx(h,{onClick:()=>{I(),c("/")},sx:{justifyContent:"center",fontWeight:"bold",color:"#A9A9A9","&:hover":{bgcolor:"#F8F8F8"},border:"1px solid #ede6e6",padding:"10px",borderRadius:2},children:"Sign out"})]})]})}function Z({navItems:l}){const r=k(),{user:t,error:d}=C(i=>i.auth),x=E(),{handleLogout:s}=O(),u=A(),m=B();return o.useEffect(()=>{if((u||m)&&r(K()),u&&(t==null?void 0:t.kycStatus)==="approved"){s("/login");return}if((t==null?void 0:t.kycStatus)!=="approved"&&(t==null?void 0:t.isVerified)===!1||!t||(t==null?void 0:t.isRegistered)===!1||d){const i=setTimeout(()=>{},1e4);return()=>clearTimeout(i)}},[m,r,s,u]),e.jsx("nav",{className:`w-full  flex py-5 bg-transparent ${x.pathname==="/"&&" "} 2xl:px-24 xl:px-20 md:px-14 sm:px-10 px-5 mx-auto z-50`,children:e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx(U,{}),e.jsxs("div",{className:"lg:flex hidden items-center ",children:[e.jsxs("div",{className:"flex items-center border rounded-lg h-fit overflow-hidden",children:[e.jsx(H,{type:"text",placeholder:"Search",className:"border-none outline-none w-[300px] h-full"}),e.jsx(v,{icon:"mynaui:search",fontSize:25,className:"text-gray-400"})]}),e.jsx("div",{className:"",children:e.jsx(P,{})})]}),e.jsx("div",{className:"lg:hidden block  ",children:e.jsx(_,{navItems:l})})]})})}function $(){return{navItemsKyc:[{title:"Home",href:"/",icon:e.jsx(a,{}),current:!0},{title:"About",href:"/about",icon:e.jsx(a,{}),current:!0}],navItems:[{title:"Cart",href:"/cart",icon:e.jsx(a,{}),current:!0},{title:"Orders",href:"/my-account/my-orders",icon:e.jsx(a,{}),current:!0},{title:"Wishlist",href:"/my-account/my-wishlist",icon:e.jsx(a,{}),current:!0},{title:"Accounts",href:"/my-account",icon:e.jsx(a,{}),current:!0},{title:"Chat with us",href:"/my-account/chat",icon:e.jsx(a,{}),current:!0},{title:"Return or Replace",href:"/my-account/return",icon:e.jsx(a,{}),current:!0}]}}export{Z as N,$ as u};
