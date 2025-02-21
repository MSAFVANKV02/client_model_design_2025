import{j as e}from"./mui-D-lFG_0o.js";import{w as U,f as D,Y as S,B as I,I as w,Z as O,$ as W,a0 as G,v as E,a1 as Z,a2 as L,N as V,a3 as H,r as J,s as Q,a4 as X,h as ee,F as se,i as x,j as h,k as b,a5 as g,p as j,z as p,t as re,a6 as te}from"./index-hu8C16Yd.js";import{_}from"./ClipLoader-BcYfubg_.js";import{r as u}from"./vendor-BRM_wmTf.js";function oe(){const l=u.useRef(null),[s,o]=u.useState(0),i=[{id:1,src:"/img/banners/kyc_curosal1.webp"},{id:2,src:"/img/banners/kyc_curosal2.webp"},{id:3,src:"/img/banners/kyc_curosal2.webp"}],n=()=>{var d,v;const a=((d=l.current)==null?void 0:d.scrollLeft)||0,c=((v=l.current)==null?void 0:v.offsetWidth)||1,r=Math.round(a/c);o(r)},f=a=>{const c=l.current;if(c){const d=c.offsetWidth*a;c.scrollTo({left:d,behavior:"smooth"}),o(a)}};u.useEffect(()=>{const a=l.current;return a&&a.addEventListener("scroll",n),()=>{a&&a.removeEventListener("scroll",n)}},[]);const N=()=>{s>0&&f(s-1)},T=()=>{s<i.length-1&&f(s+1)};return e.jsxs("div",{className:"relative rounded-xl overflow-hidden",children:[e.jsx("div",{className:"flex overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-none",ref:l,children:i.map(a=>e.jsx("div",{className:"min-w-[100%] h-full relative snap-center",children:e.jsx("img",{src:a.src,alt:"",className:"w-full h-full object-cover rounded-xl"})},a.id))}),e.jsx("button",{className:`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-md md:h-10 h-6 md:w-10 w-6 flex justify-center items-center ${s===0?"cursor-not-allowed opacity-50":""}`,onClick:N,disabled:s===0,children:"<"}),e.jsx("button",{className:`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-md md:h-10 h-6 md:w-10 w-6 flex justify-center items-center ${s===i.length-1?"cursor-not-allowed opacity-50":""}`,onClick:T,disabled:s===i.length-1,children:">"}),e.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1",children:i.map((a,c)=>e.jsx("div",{className:` rounded-full cursor-pointer transition-all duration-300 ${s===c?"bg-white w-5 h-2":"bg-gray-300 w-2 h-2"}`,onClick:()=>f(c)},c))})]})}const R=11*1024*1024;function ne(){const l=U(),s=D(),o=u.useRef(null),{userKyc:i}=S(m=>m.auth),{businessName:n,emailId:f,buildingName:N,street:T,pinCode:a,state:c,country:r,proofType:d,proof:v,gstNumber:z}=S(m=>m.kyc),y=S(m=>m.kyc),[A,P]=u.useState(!1),[K,k]=u.useState(null),[C,Y]=u.useState(()=>{if(y!=null&&y.proof){if(typeof y.proof=="string")return y.proof;if(y.proof instanceof Blob)return URL.createObjectURL(y.proof)}return(i==null?void 0:i.proof)||null}),q=()=>{o.current&&o.current.click()},B=m=>{var F;const t=(F=m.target.files)==null?void 0:F[0];if(t){if(t.size>R){k(`File size must be less than ${(R/(1024*1024)).toFixed(2)} MB`);return}if(t.type!=="application/pdf"){k("Only PDF files are allowed");return}k(null);const M=URL.createObjectURL(t);Y(M),l(G(t))}},$=async()=>{var m;if(!v&&!(i!=null&&i.proof)){E("Please upload a PDF file");return}if(!C){E("Please upload a PDF file");return}try{P(!0);const t=new FormData;t.append("businessName",n),t.append("emailId",f),t.append("buildingName",N),t.append("street",T),t.append("pinCode",a),t.append("state",c),t.append("country",r),t.append("proofType",d||""),v&&t.append("proof",v),t.append("gstNumber",z);const F=await Z(t);l(L(!0)),F.status===200&&(l(V()),l(H()),s("/",{replace:!0}),J("KYC submitted successfully"))}catch(t){console.log("Unexpected error:",t),l(L(!1)),Q.isAxiosError(t)?E(((m=t.response)==null?void 0:m.data.message)||"Failed to submit KYC"):console.log("Unexpected error:",t)}finally{P(!1),l(L(!1))}};return e.jsxs("div",{className:"md:p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Complete Shop's KYC"}),e.jsxs("div",{className:"flex sm:flex-row flex-col justify-between gap-3 items-center md:p-10 p-4 bg-gray-100 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex flex-col sm:items-start items-center gap-5",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:d}),e.jsxs("p",{children:[d," verifies in 10 mins."]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("small",{children:"Browse, Gallery or Files."}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:".pdf",ref:o,className:"hidden",onChange:B}),e.jsxs(I,{variant:"outline",className:"p-[10px] w-[205px] h-[48px] bg-white flex items-center gap-2 text-center text-black rounded-lg border",onClick:q,type:"button",children:[e.jsx(w,{icon:"material-symbols-light:upload",fontSize:20})," ",C?"Change":"Upload"]})]}),e.jsx("span",{className:"text-xs underline text-blue-500 cursor-pointer",onClick:()=>{l(O())},children:"Change Proof Type"})]})]}),e.jsx(I,{variant:"b2bStyle",className:"px-11",onClick:$,children:A?e.jsx(_,{color:"#ffff",size:20}):" Submit"})]}),K&&e.jsx("p",{className:"text-red-600 mb-4",children:K}),e.jsxs("div",{className:"mt-6 flex sm:flex-row flex-col gap-4 justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Certificate must clearly show:"}),e.jsxs("ul",{className:"list-inside list-disc mt-2",children:[e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(w,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Registration Number"]}),e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(w,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Legal Name"]}),e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(w,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Trade Name"]})]})]}),C?e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("p",{children:"See Sample:"}),e.jsx("div",{className:"mt-4 relative float-right",children:e.jsxs("a",{href:C,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(W,{fileURL:C}),e.jsx("div",{className:"absolute w-16 h-24 bg-black/10 top-0 rounded-md flex items-center justify-center ",children:e.jsx(w,{icon:"system-uicons:capture",fontSize:25,color:"#fff"})})]})})]})}):e.jsx("div",{className:"w-16 h-24 bg-black/20 flex items-center justify-center",children:e.jsx(w,{icon:"system-uicons:capture"})})]})]})}const le=[{id:1,proofType:"Udyam Aadhaar",proofTitle:"Udyam Aadhaar",proofSubText:"KYC in 10 mins."},{id:2,proofType:"GST Certificate",proofTitle:"GST Certificate",proofSubText:"KYC in 10 mins."},{id:3,proofType:"Current Account Cheque",proofTitle:"Current Account Cheque",proofSubText:"KYC in 48 hours."},{id:4,proofType:"Shop & Establishment License",proofTitle:"Shop & Establishment License",proofSubText:"KYC in 48 hours."},{id:5,proofType:"Trade Certificate/License",proofTitle:"Trade Certificate / License",proofSubText:"KYC in 48 hours."},{id:6,proofType:"Other Shop Documents",proofTitle:"Other Shop Documents",proofSubText:"KYC in 48 hours."}];function ae(){const{proofType:l}=S(n=>n.kyc),{userKyc:s}=S(n=>n.auth),o=U(),i=n=>{o(X(n))};return e.jsx("div",{className:"",children:l?e.jsx(e.Fragment,{children:e.jsx(ne,{})}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Upload Any 1 document"}),e.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:le.map(n=>e.jsx("li",{className:`border p-16  ${(s==null?void 0:s.proofType)===n.proofType?"bg-gray-200 shadow-lg border-black":"bg-gray-100"}  cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300`,onClick:()=>i(n.proofType),children:e.jsxs("div",{className:"font-semibold  flex items-center justify-center gap-3",children:[e.jsxs("p",{children:[" ",n.proofTitle]}),e.jsx("p",{className:"text-sm text-textMain",children:n.proofSubText})]})},n.id))})]})})}const ie=p.object({businessName:p.string().min(1,{message:"Business name is required."}),emailId:p.string().email({message:"Invalid email address."}),buildingName:p.string().min(1,{message:"Building name is required."}),street:p.string().min(1,{message:"Street name is required."}),pinCode:p.string().min(1,{message:"Pincode is required."}),state:p.string().min(1,{message:"State is required."}),country:p.string().min(1,{message:"Country is required."}),gstNumber:p.string()});function pe(){const l=U(),{userKyc:s}=S(r=>r.auth),o=ee({resolver:re(ie),defaultValues:{businessName:"",emailId:"",buildingName:"",street:"",gstNumber:"",pinCode:"",state:"",country:""}}),{handleSubmit:i}=o,n=D(),[f,N]=u.useState(!1),a=new URLSearchParams(window.location.search).get("proofs"),c=async r=>{N(!0);try{l(te(r));const d={...r};n(`/kyc/details?proofs=${d.buildingName}`)}catch(d){console.error("Error submitting form:",d)}finally{N(!1)}};return u.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),u.useEffect(()=>{s&&o.reset({businessName:s.businessName||"",emailId:s.emailId||"",buildingName:s.buildingName||"",street:s.street||"",gstNumber:s.gstNumber||"",pinCode:s.pinCode||"",state:s.state||"",country:s.country||""})},[s,o]),e.jsxs("div",{className:"section_container_dash  py-10 space-y-4 min-h-screen",children:[a?e.jsx(e.Fragment,{children:e.jsx(ae,{})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sm:text-xl text-lg",children:[e.jsx("span",{children:"Complete"})," ",e.jsx("span",{className:"text-textMain",children:"Shop’s KYC"})]}),e.jsx("div",{className:"",children:e.jsx(se,{...o,children:e.jsxs("form",{onSubmit:i(c),className:"w-full space-y-3",children:[e.jsx(x,{control:o.control,name:"businessName",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your business name",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})}),e.jsx(x,{control:o.control,name:"emailId",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"email",...r,placeholder:"Enter your email ID",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})}),e.jsx(x,{control:o.control,name:"buildingName",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your building name",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})}),e.jsx(x,{control:o.control,name:"street",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your street",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})}),e.jsxs("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-3",children:[e.jsx(x,{control:o.control,name:"gstNumber",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your Gst Number if have one",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})}),e.jsx(x,{control:o.control,name:"pinCode",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your pin code",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(x,{control:o.control,name:"state",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your state",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})}),e.jsx(x,{control:o.control,name:"country",render:({field:r})=>e.jsxs(h,{children:[e.jsx(b,{children:e.jsx(g,{type:"text",...r,placeholder:"Enter your country",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(j,{})]})})]}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(I,{type:"submit",disabled:f,variant:"b2bStyle",className:"w-full sm:px-16 sm:w-auto",size:"b2b",children:f?e.jsx(_,{color:"#ffff",size:20}):e.jsx(e.Fragment,{children:s?"Edit ":"Submit"})})})]})})})]}),e.jsx(oe,{})]})}export{pe as default};
