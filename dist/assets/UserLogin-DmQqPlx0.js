import{j as e,a as v}from"./vendor-Dyml7b79.js";import{z as b,d as O,l as R,f as P,t as k,F as T,g as C,h as F,i as I,j as V,m as u,B as A,x as _,w as N,s as M,y as U,k as x,R as z,L as S,n as G,o as $,A as q}from"./index-Cxq544gj.js";import{_ as L}from"./ClipLoader-D-FKsc_Y.js";import{r as f}from"./react-rGsIzOq1.js";import{I as B,a as D,b as Y,O as H}from"./otp-timer--g66q9DK.js";import{A as E}from"./arrow-left-DSrZCQXP.js";import"./createLucideIcon-cTz5pK2-.js";const K=b.object({otp:b.string().min(6,{message:"OTP is required."})});function W({setShowOtpLogin:p,setMessage:h}){const i=O(),n=R(),[j,d]=f.useState(!1),c=P({resolver:k(K),defaultValues:{otp:""}}),g=new URLSearchParams(window.location.search).get("auth"),y=async l=>{var r,t,o,a;try{const s=await _({otp:l.otp,mobile:g??""});s.status===200&&s.data.success&&s.data.user&&(localStorage.setItem("otp-timer","0"),s.data.user.kycApproved&&s.data.user.kycsubmitted?(u("Otp Verified Successfully."),i("/"),window.location.reload(),n(N())):s.data.user.isVerified&&s.data.user.isRegistered&&!s.data.user.kycsubmitted?(u("Complete Kyc registration.."),i("/kyc"),n(M(s.data.user)),n(U(s.data.kyc))):s.data.user.isVerified&&!s.data.user.isRegistered?(u("Register your account..."),i(`/register/user-details?auth=${g}`),p(!1)):(u("Your account is under Processing...."),h("Your account is under Processing"),i("/kyc"),n(N())))}catch(s){d(!1),console.log(s),v.isAxiosError(s)&&(((r=s.response)==null?void 0:r.status)===500?x((t=s.response)==null?void 0:t.data.message):(o=s.response)!=null&&o.data?x((a=s.response)==null?void 0:a.data.message):x("An error occurred."))}},m=async()=>{var l,r;try{d(!0),(await z({mobile:g})).status===200&&u("OTP Resent Successfully")}catch(t){d(!1),v.isAxiosError(t)?((l=t.response)==null?void 0:l.data.success)===!1&&x((r=t.response)==null?void 0:r.data.message):console.log("Unexpected error:",t)}finally{d(!1)}};return e.jsxs("div",{className:"w-full lg:w-1/2 p-8 relative bg-[#F5E9FF] flex flex-col justify-center items-center",children:[e.jsx(E,{onClick:()=>{p(!1),localStorage.removeItem("otp-timer"),localStorage.removeItem("otp-finished"),i("/login")},className:"absolute top-4 left-4 cursor-pointer text-textMain",fontSize:20}),e.jsx("img",{src:"/img/Background Images/Group 1117.png",alt:"logo",className:"w-36 mb-4"}),e.jsx("p",{className:"font-extrabold text-2xl mb-2",children:"Verify Mobile Number"}),e.jsxs("p",{className:"text-gray-500 text-center sm:px-11 px-5 mb-6",children:["Enter 6 digit verification code sent to"," ",e.jsx("b",{className:"text-black",children:"Mobile Number"})]}),e.jsx(T,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(y),className:"space-y-4",children:[e.jsx(C,{control:c.control,name:"otp",render:({field:l})=>e.jsxs(F,{children:[e.jsx(I,{children:e.jsx(B,{maxLength:6,value:l.value,onChange:l.onChange,children:e.jsx(D,{className:"space-x-2 rounded-xl",children:[...Array(6)].map((r,t)=>e.jsx(Y,{index:t,className:"border text-center text-xl rounded-xl bg-white border-gray-300",onChange:o=>{const s=o.target.value;l.onChange(s)}},t))})})}),e.jsx(V,{})]})}),e.jsx(H,{resendOtp:m,initialTime:60,onTimerFinish:()=>u("You can resend OTP now.")}),e.jsx(A,{type:"submit",disabled:j,variant:"b2bStyle",size:"b2b",className:"w-full",children:j?e.jsx(L,{color:"#ffff",size:20}):"Get Verification Code"})]})})]})}const J=b.object({mobile:b.string().min(13,{message:"Phone number must be exactly 10 digits."}),mobile4OTP:b.string().min(1,{message:"Mobile number is required."})});function re(){const p=O(),[h,i]=f.useState(!1),[n,j]=f.useState(""),[d,c]=f.useState(!1),w=new URLSearchParams(window.location.search),g=w.get("auth"),y=w.get("page");f.useEffect(()=>{y==="otp-log"&&g&&c(!0)},[g,y]),f.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const m=P({resolver:k(J),defaultValues:{mobile:"",mobile4OTP:""}}),l=async r=>{var t,o;try{i(!0),(await q({mobile:r.mobile4OTP})).status===200&&(u(`Otp Send to ${r.mobile4OTP}`),c(!0),p(`/login?page=otp-log&auth=${r.mobile4OTP}`),localStorage.setItem("otp-timer","60"),localStorage.removeItem("otp-finished"))}catch(a){i(!1),v.isAxiosError(a)?((t=a.response)==null?void 0:t.data.success)===!1&&x((o=a.response)==null?void 0:o.data.message):console.log("Unexpected error:",a)}finally{i(!1)}};return e.jsxs("div",{className:"h-screen w-screen flex items-center justify-center relative",children:[e.jsx("img",{src:"/img/Background Images/Group 1109.svg",alt:"",draggable:!1,className:"absolute w-full h-full object-cover"}),e.jsxs("div",{className:"flex flex-col mx-3 lg:flex-row w-full lg:max-w-4xl sm:max-w-[60%] max-w-[90%] h-auto bg-white shadow-lg rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"hidden lg:block lg:w-3/4 relative",children:e.jsx("img",{src:"/img/Hero Images/login_main.png",alt:"login",draggable:!1,className:"w-full h-full object-cover"})}),d?e.jsx(W,{setShowOtpLogin:c,setMessage:j}):e.jsxs("div",{className:"w-full lg:w-1/2 p-8 relative bg-[#F5E9FF] flex flex-col justify-center items-center",children:[e.jsx(E,{onClick:()=>p("/"),className:"absolute top-4 left-4 cursor-pointer"}),e.jsx("img",{src:"/img/Background Images/Group 1107.png",alt:"logo",className:"w-28 h-28 mb-4"}),e.jsx("p",{className:"font-bold text-xl mb-2",children:"Enter Mobile Number"}),n?e.jsxs("div",{className:"text-xs bg-green-100 p-2 rounded-md w-full my-3",children:[n," ",e.jsx(S,{to:"/",className:"text-blue-500 underline",children:"Visit Our Home"})]}):e.jsx("p",{className:"text-gray-500 text-center mb-6",children:"Enter your 10-digit mobile number to receive the verification code."}),e.jsx(T,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(l),className:"w-full space-y-6",children:[e.jsx(C,{control:m.control,name:"mobile",render:({field:r})=>e.jsxs(F,{children:[e.jsx(G,{className:"mb-2",children:"Mobile Number"}),e.jsx(I,{children:e.jsx($,{country:"in",preferredCountries:["in","us","sa","ae"],enableSearch:!0,placeholder:"Valid mobile number",value:r.value,inputStyle:{width:"100%"},buttonStyle:{backgroundColor:"transparent",border:"none"},onChange:(t,o)=>{const a=(o==null?void 0:o.dialCode)||"";let s=t;s.startsWith(a)&&(s=s.slice(a.length)),m.setValue("mobile",`${a}-${s}`),m.setValue("mobile4OTP",s)},inputClass:"w-full p-6 border border-gray-300  rounded"})}),e.jsx(V,{})]})}),e.jsx(A,{type:"submit",disabled:h,variant:"b2bStyle",className:"w-full",size:"b2b",children:h?e.jsx(L,{color:"#ffff",size:20}):" Get Verification Code"}),e.jsxs("div",{className:"text-sm text-gray-500 md:block hidden",children:["If you don't have an account,"," ",e.jsx(S,{to:"/register",className:"text-textMain ",children:"register here"})]})]})})]})]})]})}export{re as default};
