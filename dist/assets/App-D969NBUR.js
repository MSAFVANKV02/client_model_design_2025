import{j as e}from"./vendor-Dyml7b79.js";/* empty css            */import{u as c,L as n,B as r,I as d,P as x,c as m,O as u,a as f}from"./index-C2YncgUT.js";import{L as p,S as j,H as i,F as h}from"./Logo-BMxtwqve.js";import{r as l}from"./react-rGsIzOq1.js";import"./createLucideIcon-cTz5pK2-.js";import"./index-DPZzcHi0.js";function g(){const a=c(),t=[{title:"Home",href:"/",icon:e.jsx(i,{}),current:!0},{title:"About",href:"/about",icon:e.jsx(i,{}),current:!0}];return e.jsx("nav",{className:`w-full flex py-5 bg-transparent ${a.pathname==="/"&&" absolute top-0 left-0 right-0"} 2xl:px-24 xl:px-20 md:px-14 sm:px-10 px-5 mx-auto z-50`,children:e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx(p,{}),e.jsxs("div",{className:"md:flex hidden items-center gap-10",children:[e.jsx("ul",{className:"flex justify-around list-none",children:t.map((s,o)=>e.jsx("li",{className:"",children:e.jsx(n,{to:s.href,draggable:!1,className:`p-2 flex items-center gap-3 ${s.href===a.pathname?"text-textMain underline underline-offset-4":""}`,children:s.title})},o))}),e.jsx("div",{className:"",children:e.jsxs(r,{variant:"outline",className:"flex gap-2 items-center text-textMain uppercase ",children:[e.jsx(d,{icon:"material-symbols:download"})," Download App"]})}),e.jsx("div",{className:"",children:e.jsx(n,{to:"login",className:"",children:e.jsx(r,{variant:"white",className:"text-textMain",children:"login"})})})]}),e.jsx("div",{className:"md:hidden block",children:e.jsx(j,{navItems:t})})]})})}function I(){const[a,t]=l.useState(!1);return l.useEffect(()=>{const s=()=>{t(!0)};return window.addEventListener("beforeunload",s),()=>{window.removeEventListener("beforeunload",s)}},[]),a?e.jsx(x,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:m("",{"debug-screens":!1}),children:[e.jsx(g,{}),e.jsx("div",{className:"",children:e.jsx(u,{})}),e.jsx(h,{}),e.jsx(f,{position:"top-right",reverseOrder:!1})]})})}export{I as default};
