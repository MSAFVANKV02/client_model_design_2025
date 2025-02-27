import{u as D,a0 as O,j as a,a as w,a5 as A,Y as E,I as b,a6 as T,T as B,a7 as z,a8 as F,a9 as C,aa as c,ab as y,ac as d,ad as P,E as $,v as R,ae as G,J as u,af as W,ag as X,ah as H,ai as J,aj as Q,ak as V}from"./mui-D-lFG_0o.js";import{r as p}from"./vendor-BRM_wmTf.js";import{f as Y,u as _,a as q,I as K,O as U}from"./index-CrOhDYs6.js";const o=240,I=s=>({width:o,transition:s.transitions.create("width",{easing:s.transitions.easing.sharp,duration:s.transitions.duration.enteringScreen}),overflowX:"hidden"}),k=s=>({transition:s.transitions.create("width",{easing:s.transitions.easing.sharp,duration:s.transitions.duration.leavingScreen}),overflowX:"hidden",width:0,[s.breakpoints.up("sm")]:{width:`calc(${s.spacing(8)} + 1px)`}}),v=u("div")(({theme:s})=>({display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"1rem",paddingBottom:"1rem",padding:s.spacing(0,1),...s.mixins.toolbar})),Z=u(W,{shouldForwardProp:s=>s!=="open"})(({theme:s,open:n})=>({zIndex:s.zIndex.drawer+1,transition:s.transitions.create(["width","margin"],{easing:s.transitions.easing.sharp,duration:s.transitions.duration.leavingScreen}),boxShadow:"none",...n&&{marginLeft:o,width:`calc(100% - ${o}px)`,transition:s.transitions.create(["width","margin"],{easing:s.transitions.easing.sharp,duration:s.transitions.duration.enteringScreen})}})),aa=u(X,{shouldForwardProp:s=>s!=="open"})(({theme:s,open:n})=>({width:o,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...n&&{...I(s),"& .MuiDrawer-paper":{...I(s),backgroundColor:"#000",color:"#fff"},"& .MuiListItemIcon-root":{color:"#AF61CC"}},...!n&&{...k(s),"& .MuiDrawer-paper":{...k(s),backgroundColor:"#000",color:"#fff"},"& .MuiListItemIcon-root":{color:"#AF61CC"}}})),sa=[{kind:"page",segment:"dashboard",title:"Dashboard",icon:a.jsx(H,{})},{kind:"page",segment:"products",title:"Orders",icon:a.jsx(J,{}),isChild:!0,children:[{title:"Pending Orders",segment:"products/add"},{title:"All products",segment:"products/all"},{title:"Category",segment:"products/category"},{title:"Size Guide",segment:"products/size-guide"}]},{kind:"page",segment:"reports",title:"Reports",isChild:!0,icon:a.jsx(Q,{}),children:[{title:"Pending Orders",segment:"report/pending"},{title:"Completed Orders",segment:"report/completed"}]},{kind:"page",segment:"integrations",title:"Integrations",icon:a.jsx(V,{})}];function ta(){const s=D(),[n,t]=p.useState(!0),[g,x]=p.useState({}),S=Y(),h=_().pathname.replace("/admin/",""),m=O(s.breakpoints.up("sm")),L=()=>{t(!0)},N=()=>{t(!1),x({})},M=e=>{t(!0),x(r=>({...r,[e]:!r[e]}))},j=e=>{e&&S(e)};return a.jsxs(w,{sx:{display:"flex"},children:[a.jsx(A,{}),a.jsx(Z,{position:"fixed",color:"default",sx:{boxShadow:"none"},open:n,children:a.jsxs(E,{children:[a.jsx(b,{color:"inherit","aria-label":"open drawer",onClick:L,edge:"start",sx:{marginRight:5,...n&&{display:"none"}},children:a.jsx(T,{})}),a.jsx(B,{variant:"h6",noWrap:!0,component:"div"})]})}),a.jsxs(aa,{variant:"permanent",open:n,sx:{"& .MuiDrawer-paper":{backgroundColor:"#1E1E1E",color:"#fff"},"& .MuiListItemIcon-root":{color:"#AF61CC"}},children:[a.jsx(v,{className:"py-7",children:n&&a.jsxs(a.Fragment,{children:[a.jsxs(q,{className:"flex gap-2 group items-center select-none",to:"/",children:[a.jsxs("div",{className:"h-10 relative w-10  rounded-2xl bg-textMain flex items-center justify-center overflow-hidden",children:[a.jsx("img",{src:"img/logo/flower_ayaboo.png",alt:"navbar logo",className:"absolute w-[50%]  group-hover:w-0 group-hover:translate-x-[-150%] transition-all duration-300 ease-in"}),a.jsx(K,{icon:"fluent:home-28-filled",fontSize:20,color:"#ffff",className:"absolute translate-x-[150%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"})]}),a.jsx("h4",{className:"font-bold",children:"Ayaboo"})]}),a.jsx(b,{onClick:N,children:s.direction==="rtl"?a.jsx(z,{}):a.jsx(F,{className:"text-white"})})]})}),a.jsx(C,{children:sa.map((e,r)=>{var f;return e.isChild?a.jsxs(p.Fragment,{children:[a.jsxs(c,{onClick:()=>M(r),children:[a.jsx(y,{children:e.icon}),a.jsx(d,{primary:e.title}),g[r]?a.jsx(P,{}):a.jsx($,{})]}),a.jsx(R,{in:g[r],timeout:"auto",unmountOnExit:!0,children:a.jsx(C,{component:"div",disablePadding:!0,children:(f=e.children)==null?void 0:f.map((i,l)=>a.jsxs(c,{sx:{pl:4},onClick:()=>j(i.segment),children:[i.segment===h?a.jsxs("label",{className:"radio-button",children:[a.jsx("input",{id:`option-${l}`,name:"radio-group",type:"radio",checked:!0}),a.jsx("span",{className:"radio-checkmark"})]}):a.jsxs("label",{className:"radio-button",children:[a.jsx("input",{id:`option-${l}`,name:"radio-group",type:"radio"}),a.jsx("span",{className:"radio-checkmark"})]}),a.jsx(d,{primaryTypographyProps:{fontSize:"0.75rem"},primary:i.title})]},l))})})]},r):a.jsx(G,{disablePadding:!0,sx:{backgroundColor:e.segment===h?"#818080cc":void 0,opacity:.8},children:a.jsxs(c,{onClick:()=>j(e.segment),children:[a.jsx(y,{sx:{display:n||m?"block":"none"},children:e.icon}),a.jsx(d,{primary:e.title,sx:{display:n||m?"block":"none"}})]})},r)})})]}),a.jsxs(w,{component:"main",sx:{flexGrow:1,p:3},children:[a.jsx(v,{}),a.jsx(U,{})]})]})}export{ta as default};
