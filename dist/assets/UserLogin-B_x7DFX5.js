import{j as e,a as p}from"./vendor-Dyml7b79.js";import{z as d,d as w,e as v,t as y,L as N,F as S,f as O,g as k,h as P,i as F,m as b,B as C,j,k as V,l as E}from"./index-COQYuSpk.js";import{P as M}from"./style-CPrzcRgE.js";import{_ as T}from"./ClipLoader-D-FKsc_Y.js";import{r as c}from"./react-rGsIzOq1.js";import{I as _,a as z,b as G,O as q}from"./otp-timer-Ber26ucF.js";import{A as I}from"./arrow-left-DSrZCQXP.js";import"./createLucideIcon-cTz5pK2-.js";const B=d.object({otp:d.string().min(6,{message:"OTP is required."})});function R({setShowOtpLogin:x}){const m=w(),[g,o]=c.useState(!1),[u]=c.useState(""),n=v({resolver:y(B),defaultValues:{otp:""}}),r=new URLSearchParams(window.location.search).get("auth"),h=()=>{j.remove("us_b2b_kyc"),b("Otp Verified Successfully."),m("/"),j.set("us_b2b_tkn","b2bdevtokenwithdummy00data",{expires:1,secure:!0,sameSite:"strict"}),window.location.reload()},i=async()=>{var t,a;try{o(!0),(await p.post("/user/resendOtp",{mobile:r})).status===200&&b("OTP Resent Successfully")}catch(s){o(!1),p.isAxiosError(s)&&((t=s.response)==null?void 0:t.data.success)===!1&&V((a=s.response)==null?void 0:a.data.message)}finally{o(!1)}};return e.jsxs("div",{className:"w-full lg:w-1/2 p-8 relative bg-[#F5E9FF] flex flex-col justify-center items-center",children:[e.jsx(I,{onClick:()=>{x(!1),localStorage.removeItem("otp-timer"),localStorage.removeItem("otp-finished"),m("/login")},className:"absolute top-4 left-4 cursor-pointer text-textMain",fontSize:20}),e.jsx("img",{src:"/img/Background Images/Group 1117.png",alt:"logo",className:"w-36 mb-4"}),e.jsx("p",{className:"font-extrabold text-2xl mb-2",children:"Verify Mobile Number"}),e.jsxs("p",{className:"text-gray-500 text-center sm:px-11 px-5 mb-6",children:["Enter 6 digit verification code sent to"," ",e.jsx("b",{className:"text-black",children:"Mobile Number"})]}),u&&e.jsxs("p",{className:"text-xs bg-green-100 p-2 rounded-md",children:[u," ",e.jsx(N,{to:"/",className:"text-blue-500 underline",children:"Visit Our Home"})]}),e.jsx(S,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(h),className:"space-y-4",children:[e.jsx(O,{control:n.control,name:"otp",render:({field:t})=>e.jsxs(k,{children:[e.jsx(P,{children:e.jsx(_,{maxLength:6,value:t.value,onChange:t.onChange,children:e.jsx(z,{className:"space-x-2 rounded-xl",children:[...Array(6)].map((a,s)=>e.jsx(G,{index:s,className:"border text-center text-xl rounded-xl bg-white border-gray-300",onChange:l=>{const L=l.target.value;t.onChange(L)}},s))})})}),e.jsx(F,{})]})}),e.jsx(q,{resendOtp:i,initialTime:60,onTimerFinish:()=>b("You can resend OTP now.")}),e.jsx(C,{type:"submit",disabled:g,variant:"b2bStyle",size:"b2b",className:"w-full",children:g?e.jsx(T,{color:"#ffff",size:20}):"Get Verification Code"})]})})]})}const $=d.object({mobile:d.string().min(10,{message:"Phone number must be exactly 10 digits."}),mobile4OTP:d.string().min(1,{message:"Mobile number is required."})});function X(){const x=w(),[m]=c.useState(!1),[g,o]=c.useState(!1),u=new URLSearchParams(window.location.search),n=u.get("auth"),f=u.get("page");c.useEffect(()=>{f==="otp-log"&&n&&o(!0)},[n,f]),c.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const r=v({resolver:y($),defaultValues:{mobile:"",mobile4OTP:""}}),h=i=>{b(`Otp Sended to ${i.mobile}`),o(!0),x(`/login?page=otp-log&auth=${i.mobile}`)};return e.jsxs("div",{className:"h-screen w-screen flex items-center justify-center relative",children:[e.jsx("img",{src:"/img/Background Images/Group 1109.svg",alt:"",className:"absolute w-full h-full object-cover"}),e.jsxs("div",{className:"flex flex-col lg:flex-row w-full max-w-5xl h-auto bg-white shadow-lg rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"hidden lg:block lg:w-3/4 relative",children:e.jsx("img",{src:"/img/Hero Images/login_main.png",alt:"login",className:"w-full h-full object-cover"})}),g?e.jsx(R,{setShowOtpLogin:o}):e.jsxs("div",{className:"w-full lg:w-1/2 p-8 relative bg-[#F5E9FF] flex flex-col justify-center items-center",children:[e.jsx(I,{onClick:()=>x("/"),className:"absolute top-4 left-4 cursor-pointer"}),e.jsx("img",{src:"/img/Background Images/Group 1107.png",alt:"logo",className:"w-28 h-28 mb-4"}),e.jsx("p",{className:"font-bold text-xl mb-2",children:"Enter Mobile Number"}),e.jsx("p",{className:"text-gray-500 text-center mb-6",children:"Enter your 10-digit mobile number to receive the verification code."}),e.jsx(S,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(h),className:"w-full space-y-6",children:[e.jsx(O,{control:r.control,name:"mobile",render:({field:i})=>e.jsxs(k,{children:[e.jsx(E,{className:"mb-2",children:"Mobile Number"}),e.jsx(P,{children:e.jsx(M,{country:"in",preferredCountries:["in","us","sa","ae"],enableSearch:!0,placeholder:"Valid mobile number",value:i.value,inputStyle:{width:"100%"},buttonStyle:{backgroundColor:"transparent",border:"none"},onChange:(t,a)=>{const s=(a==null?void 0:a.dialCode)||"";let l=t;l.startsWith(s)&&(l=l.slice(s.length)),r.setValue("mobile",`${s}-${l}`),r.setValue("mobile4OTP",l)},inputClass:"w-full p-6 border border-gray-300  rounded"})}),e.jsx(F,{})]})}),e.jsx(C,{type:"submit",disabled:m,variant:"b2bStyle",className:"w-full",size:"b2b",children:m?e.jsx(T,{color:"#ffff",size:20}):" Get Verification Code"}),e.jsxs("div",{className:"text-sm text-gray-500",children:["If you don't have an account,"," ",e.jsx(N,{to:"/register",className:"text-textMain",children:"register here"})]})]})})]})]})]})}export{X as default};
