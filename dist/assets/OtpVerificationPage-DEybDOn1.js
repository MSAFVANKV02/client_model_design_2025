const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ClipLoader-D-FKsc_Y.js","assets/react-rGsIzOq1.js"])))=>i.map(i=>d[i]);
import{_ as y,z as g,d as T,e as v,t as E,F as O,f as P,g as w,h as S,i as N,m as p,B as R,j as d}from"./index-B5fs0UHr.js";import{j as e,a as i}from"./vendor-Dyml7b79.js";import{I as _,a as F,b as I,O as V}from"./otp-timer-CdVMxnzl.js";import{b as C,r as c}from"./react-rGsIzOq1.js";import{V as k,R as A}from"./urlPath-CvEbXlwu.js";import{A as L}from"./arrow-left-DSrZCQXP.js";import"./createLucideIcon-cTz5pK2-.js";const z=C.lazy(()=>y(()=>import("./ClipLoader-D-FKsc_Y.js").then(r=>r.C),__vite__mapDeps([0,1]))),B=g.object({otp:g.string().length(6,{message:"OTP must be exactly 6 digits."}).regex(/^\d+$/,{message:"OTP must only contain digits."})});function J(){const r=T(),m=c.useRef(null),[x,n]=c.useState(!1),u=new URLSearchParams(window.location.search).get("auth");c.useEffect(()=>{m.current&&m.current.focus()},[]);const f=v({resolver:E(B),defaultValues:{otp:""}}),h=async t=>{var o,s,l;console.log(`OTP entered: ${t.otp}`);try{const a=await i.post(k,{otp:t.otp,mobile:u});console.log(a.data,"response.data otp verifying"),a.status===200&&a.data.success&&(p("Otp Verified Successfully."),r(`/register/user-details?auth=${u}`))}catch(a){n(!1),i.isAxiosError(a)&&(((o=a.response)==null?void 0:o.status)===500?d("Enter Valid Mobile"):((s=a.response)==null?void 0:s.data.success)===!1&&d((l=a.response)==null?void 0:l.data.message))}},b=async()=>{var t,o;try{n(!0),(await i.post(A,{mobile:u})).status===200&&p("OTP Resent Successfully")}catch(s){n(!1),i.isAxiosError(s)?((t=s.response)==null?void 0:t.data.success)===!1&&d((o=s.response)==null?void 0:o.data.message):console.log("Unexpected error:",s)}finally{n(!1)}};return c.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),e.jsxs("div",{className:"h-screen w-screen flex relative",children:[e.jsx("img",{src:"/img/Background Images/Group 1109.svg",alt:"",className:"absolute object-cover top-0 left-0 bottom-0 right-0 w-full h-full"}),e.jsxs("div",{className:"bg-[#F5E9FF] max-w-[350px] h-fit backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 m-auto",children:[e.jsx(L,{onClick:()=>{localStorage.removeItem("otp-timer"),localStorage.removeItem("otp-finished"),r("/register")},className:"cursor-pointer"}),e.jsxs("div",{className:"flex flex-col w-full justify-center items-center space-y-5",children:[e.jsx("img",{src:"/img/Background Images/Group 1117.png",alt:"login page b2b",className:"w-28 h-28"}),e.jsx("h4",{className:"font-bold",children:"Verify Mobile Number"}),e.jsx("p",{className:"text-gray-400 text-center",children:"Enter the 6-digit OTP sent to your mobile number."}),e.jsx(O,{...f,children:e.jsxs("form",{onSubmit:f.handleSubmit(h),className:"space-y-8",children:[e.jsx(P,{control:f.control,name:"otp",render:({field:t})=>e.jsxs(w,{children:[e.jsx(S,{children:e.jsx(_,{maxLength:6,value:t.value,onChange:t.onChange,children:e.jsx(F,{className:"space-x-2 rounded-none",children:[...Array(6)].map((o,s)=>e.jsx(I,{index:s,ref:m,className:"border text-center text-xl rounded-md bg-white border-black",onChange:l=>{const j=l.target.value;t.onChange(j)}},s))})})}),e.jsx(N,{})]})}),e.jsx(V,{resendOtp:b,initialTime:60,onTimerFinish:()=>p("You can resend OTP now.")}),e.jsx(R,{type:"submit",variant:"b2bStyle",className:"w-full",size:"b2b",children:x?e.jsx(z,{color:"#ffff",size:20}):" Verify OTP"})]})})]})]})]})}export{J as default};
