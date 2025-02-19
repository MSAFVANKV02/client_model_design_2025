import{j as e}from"./mui-D-lFG_0o.js";import{z as b,e as y,s as v,g as N,t as P,F as T,h as w,i as O,v as S,j as k,w as F,n as C,B as E,S as V,p as u,x as A,r as x,q as $}from"./index-UipY65Mm.js";import{_ as I}from"./ClipLoader-BcYfubg_.js";import{r as f}from"./vendor-BRM_wmTf.js";import{A as M}from"./arrow-left-dUv5ABYj.js";const R=b.object({mobile:b.string().min(13,{message:"Phone number must be exactly 10 digits."}),mobile4OTP:b.string().min(10,{message:"Mobile number is required."})});function L(){const a=y(),h=v(),[d,p]=f.useState(!1),o=N({resolver:P(R),defaultValues:{mobile:"",mobile4OTP:""}}),j=async r=>{var c,n,m,t,g;p(!0);try{const i=await V({mobile:r.mobile4OTP});if(i.status===200){const{user:l}=i.data;localStorage.setItem("mobileNumber",r.mobile),l?l.isVerified&&l.isRegistered?l.kycApproved?(u(`OTP sent to ${r.mobile4OTP}`),a("/login")):l.kycsubmitted?(u(`OTP sent to ${r.mobile4OTP}`),a("/kyc")):(u(`OTP sent to ${r.mobile4OTP}`),a("/kyc"),h(A(l))):(u(`OTP sent to ${r.mobile4OTP}`),a(`/register/otp-verification?auth=${r.mobile4OTP}`)):x("Unexpected error occurred. Please try again.")}}catch(i){if($.isAxiosError(i)){const l=(c=i.response)==null?void 0:c.status,s=(n=i.response)==null?void 0:n.data;l===400&&((m=s==null?void 0:s.user)!=null&&m.isVerified)&&((t=s==null?void 0:s.user)!=null&&t.isRegistered)&&((g=s==null?void 0:s.user)!=null&&g.kycsubmitted)?a("/login"):(s==null?void 0:s.success)===!1?x(s.message||"An error occurred"):console.error("Unhandled Axios error:",s||i.message)}else console.error("Unexpected error:",i)}finally{p(!1)}};return f.useEffect(()=>{const r=localStorage.getItem("mobileNumber");r&&(o.setValue("mobile",r),o.setValue("mobile4OTP",r.split("-")[1]))},[o]),f.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),e.jsxs("div",{className:"h-screen w-screen flex relative",children:[e.jsx("img",{src:"/img/Background Images/Group 1109.svg",alt:"",className:"absolute object-cover top-0 left-0 bottom-0 right-0 w-full h-full"}),e.jsxs("div",{className:"bg-[#F5E9FF] sm:max-w-[350px] max-w-[90%] h-fit backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 m-auto",children:[e.jsx(M,{onClick:()=>a("/"),className:"cursor-pointer"}),e.jsxs("div",{className:"flex flex-col w-full justify-center items-center space-y-5",children:[e.jsx("img",{src:"/img/Background Images/Group 1107.png",alt:"login page b2b",className:"w-32 h-32"}),e.jsx("p",{className:"font-bold",children:"Enter Mobile Number"}),e.jsx("p",{className:"text-gray-400 text-center",children:"Enter your 10-digit mobile number to receive the verification code."}),e.jsx(T,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(j),className:"w-full space-y-8",children:[e.jsx(w,{control:o.control,name:"mobile",render:({field:r})=>e.jsxs(O,{children:[e.jsx(S,{className:"flex items-start my-2",children:"Mobile Number"}),e.jsx(k,{children:e.jsx(F,{country:"in",preferredCountries:["in","us","sa","ae"],enableSearch:!0,placeholder:"Valid mobile",value:r.value,inputStyle:{width:"100%"},buttonStyle:{backgroundColor:"transparent",border:"none"},onChange:(c,n)=>{const m=(n==null?void 0:n.dialCode)||"";let t=c;t.startsWith(m)&&(t=t.slice(m.length)),o.setValue("mobile",`${m}-${t}`),o.setValue("mobile4OTP",t)},inputClass:"w-full p-5 mt-1 rounded-xl border border-gray-300"})}),e.jsx(C,{})]})}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(E,{type:"submit",disabled:d,variant:"b2bStyle",className:"w-full ",size:"b2b",children:d?e.jsx(I,{color:"#ffff",size:20}):" Get Verification Code"})})]})})]})]})]})}export{L as default};
