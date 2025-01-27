import{j as e,a as W}from"./vendor-Dyml7b79.js";import{r as I,e as R,W as C,B as _,I as S,X as O,Y as G,Z,$ as V,a0 as X,q as E,a1 as H,a2 as L,a3 as J,p as Q,a4 as ee,g as se,F as re,h as p,i as f,j as x,a5 as h,n as b,z as u,t as te,M as oe}from"./index-D_mLwM1k.js";import{_ as D}from"./ClipLoader-D-FKsc_Y.js";import{r as m}from"./react-rGsIzOq1.js";function ne(){const n=m.useRef(null),[a,o]=m.useState(0),s=[{id:1,src:"/img/banners/kyc_curosal1.webp"},{id:2,src:"/img/banners/kyc_curosal2.webp"},{id:3,src:"/img/banners/kyc_curosal2.webp"}],y=()=>{var r,c;const l=((r=n.current)==null?void 0:r.scrollLeft)||0,i=((c=n.current)==null?void 0:c.offsetWidth)||1,v=Math.round(l/i);o(v)},g=l=>{const i=n.current;if(i){const r=i.offsetWidth*l;i.scrollTo({left:r,behavior:"smooth"}),o(l)}};m.useEffect(()=>{const l=n.current;return l&&l.addEventListener("scroll",y),()=>{l&&l.removeEventListener("scroll",y)}},[]);const N=()=>{a>0&&g(a-1)},w=()=>{a<s.length-1&&g(a+1)};return e.jsxs("div",{className:"relative rounded-xl overflow-hidden",children:[e.jsx("div",{className:"flex overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-none",ref:n,children:s.map(l=>e.jsx("div",{className:"min-w-[100%] h-full relative snap-center",children:e.jsx("img",{src:l.src,alt:"",className:"w-full h-full object-cover rounded-xl"})},l.id))}),e.jsx("button",{className:`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-md md:h-10 h-6 md:w-10 w-6 flex justify-center items-center ${a===0?"cursor-not-allowed opacity-50":""}`,onClick:N,disabled:a===0,children:"<"}),e.jsx("button",{className:`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-md md:h-10 h-6 md:w-10 w-6 flex justify-center items-center ${a===s.length-1?"cursor-not-allowed opacity-50":""}`,onClick:w,disabled:a===s.length-1,children:">"}),e.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1",children:s.map((l,i)=>e.jsx("div",{className:` rounded-full cursor-pointer transition-all duration-300 ${a===i?"bg-white w-5 h-2":"bg-gray-300 w-2 h-2"}`,onClick:()=>g(i)},i))})]})}Z.workerSrc=`//unpkg.com/pdfjs-dist@${V}/build/pdf.worker.min.mjs`;const U=11*1024*1024;function ae(){const n=I(),a=R(),o=m.useRef(null),{userKyc:s}=C(d=>d.auth),{businessName:y,emailId:g,buildingName:N,street:w,pinCode:l,state:i,country:v,proofType:r,proof:c,gstNumber:q}=C(d=>d.kyc),j=C(d=>d.kyc),[Y,K]=m.useState(!1),[P,F]=m.useState(null),[T,z]=m.useState(()=>{if(j!=null&&j.proof){if(typeof j.proof=="string")return j.proof;if(j.proof instanceof Blob)return URL.createObjectURL(j.proof)}return(s==null?void 0:s.proof)||null}),A=()=>{o.current&&o.current.click()},B=d=>{var k;const t=(k=d.target.files)==null?void 0:k[0];if(t){if(t.size>U){F(`File size must be less than ${(U/(1024*1024)).toFixed(2)} MB`);return}if(t.type!=="application/pdf"){F("Only PDF files are allowed");return}F(null);const $=URL.createObjectURL(t);z($),n(X(t))}},M=async()=>{var d;if(!c&&!(s!=null&&s.proof)){E("Please upload a PDF file");return}if(!T){E("Please upload a PDF file");return}try{K(!0);const t=new FormData;t.append("businessName",y),t.append("emailId",g),t.append("buildingName",N),t.append("street",w),t.append("pinCode",l),t.append("state",i),t.append("country",v),t.append("proofType",r||""),c&&t.append("proof",c),t.append("gstNumber",q);const k=await H(t);n(L(!0)),k.status===200&&(n(J()),a("/",{replace:!0}),Q("KYC submitted successfully"))}catch(t){console.log("Unexpected error:",t),n(L(!1)),W.isAxiosError(t)?E(((d=t.response)==null?void 0:d.data.message)||"Failed to submit KYC"):console.log("Unexpected error:",t)}finally{K(!1),n(L(!1))}};return e.jsxs("div",{className:"md:p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Complete Shop's KYC"}),e.jsxs("div",{className:"flex sm:flex-row flex-col justify-between gap-3 items-center md:p-10 p-4 bg-gray-100 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex flex-col sm:items-start items-center gap-5",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:r}),e.jsxs("p",{children:[r," verifies in 10 mins."]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("small",{children:"Browse, Gallery or Files."}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:".pdf",ref:o,className:"hidden",onChange:B}),e.jsxs(_,{variant:"outline",className:"p-[10px] w-[205px] h-[48px] bg-white flex items-center gap-2 text-center text-black rounded-lg border",onClick:A,type:"button",children:[e.jsx(S,{icon:"material-symbols-light:upload",fontSize:20})," ",T?"Change":"Upload"]})]}),e.jsx("span",{className:"text-xs underline text-blue-500 cursor-pointer",onClick:()=>{n(O())},children:"Change Proof Type"})]})]}),e.jsx(_,{variant:"b2bStyle",className:"px-11",onClick:M,children:Y?e.jsx(D,{color:"#ffff",size:20}):" Submit"})]}),P&&e.jsx("p",{className:"text-red-600 mb-4",children:P}),e.jsxs("div",{className:"mt-6 flex sm:flex-row flex-col gap-4 justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Certificate must clearly show:"}),e.jsxs("ul",{className:"list-inside list-disc mt-2",children:[e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(S,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Registration Number"]}),e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(S,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Legal Name"]}),e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(S,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Trade Name"]})]})]}),T?e.jsx(e.Fragment,{children:e.jsx(G,{value:`${T}`})}):e.jsx("div",{className:"w-16 h-24 bg-black/20 flex items-center justify-center",children:e.jsx(S,{icon:"system-uicons:capture"})})]})]})}const le=[{id:1,proofType:"Udyam Aadhaar",proofTitle:"Udyam Aadhaar",proofSubText:"KYC in 10 mins."},{id:2,proofType:"GST Certificate",proofTitle:"GST Certificate",proofSubText:"KYC in 10 mins."},{id:3,proofType:"Current Account Cheque",proofTitle:"Current Account Cheque",proofSubText:"KYC in 48 hours."},{id:4,proofType:"Shop & Establishment License",proofTitle:"Shop & Establishment License",proofSubText:"KYC in 48 hours."},{id:5,proofType:"Trade Certificate/License",proofTitle:"Trade Certificate / License",proofSubText:"KYC in 48 hours."},{id:6,proofType:"Other Shop Documents",proofTitle:"Other Shop Documents",proofSubText:"KYC in 48 hours."}];function ie(){const{proofType:n}=C(s=>s.kyc),a=I(),o=s=>{a(ee(s))};return e.jsx("div",{className:"",children:n?e.jsx(e.Fragment,{children:e.jsx(ae,{})}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Upload Any 1 document"}),e.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:le.map(s=>e.jsx("li",{className:"border p-16 bg-gray-100  cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300",onClick:()=>o(s.proofType),children:e.jsxs("div",{className:"font-semibold  flex items-center justify-center gap-3",children:[e.jsxs("p",{children:[" ",s.proofTitle]}),e.jsx("p",{className:"text-sm text-textMain",children:s.proofSubText})]})},s.id))})]})})}const ce=u.object({businessName:u.string().min(1,{message:"Business name is required."}),emailId:u.string().email({message:"Invalid email address."}),buildingName:u.string().min(1,{message:"Building name is required."}),street:u.string().min(1,{message:"Street name is required."}),pinCode:u.string().min(1,{message:"Pincode is required."}),state:u.string().min(1,{message:"State is required."}),country:u.string().min(1,{message:"Country is required."}),gstNumber:u.string()});function fe(){const n=I(),a=C(r=>r.kyc),{userKyc:o}=C(r=>r.auth),s=se({resolver:te(ce),defaultValues:{businessName:"",emailId:"",buildingName:"",street:"",gstNumber:"",pinCode:"",state:"",country:""}}),{handleSubmit:y}=s,g=R(),[N,w]=m.useState(!1),i=new URLSearchParams(window.location.search).get("proofs"),v=async r=>{w(!0);try{n(oe(r));const c={...r};g(`/kyc/details?proofs=${c.buildingName}`)}catch(c){console.error("Error submitting form:",c)}finally{w(!1)}};return m.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),m.useEffect(()=>{o&&s.reset({businessName:o.businessName||"",emailId:o.emailId||"",buildingName:o.buildingName||"",street:o.street||"",gstNumber:o.gstNumber||"",pinCode:o.pinCode||"",state:o.state||"",country:o.country||""})},[a,o,s]),e.jsxs("div",{className:"section_container_dash  py-10 space-y-4 min-h-screen",children:[i?e.jsx(e.Fragment,{children:e.jsx(ie,{})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sm:text-xl text-lg",children:[e.jsx("span",{children:"Complete"})," ",e.jsx("span",{className:"text-textMain",children:"Shop’s KYC"})]}),e.jsx("div",{className:"",children:e.jsx(re,{...s,children:e.jsxs("form",{onSubmit:y(v),className:"w-full space-y-3",children:[e.jsx(p,{control:s.control,name:"businessName",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your business name",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})}),e.jsx(p,{control:s.control,name:"emailId",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"email",...r,placeholder:"Enter your email ID",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})}),e.jsx(p,{control:s.control,name:"buildingName",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your building name",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})}),e.jsx(p,{control:s.control,name:"street",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your street",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})}),e.jsxs("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-3",children:[e.jsx(p,{control:s.control,name:"gstNumber",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your Gst Number if have one",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})}),e.jsx(p,{control:s.control,name:"pinCode",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your pin code",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(p,{control:s.control,name:"state",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your state",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})}),e.jsx(p,{control:s.control,name:"country",render:({field:r})=>e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(h,{type:"text",...r,placeholder:"Enter your country",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(b,{})]})})]}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(_,{type:"submit",disabled:N,variant:"b2bStyle",className:"w-full sm:px-16 sm:w-auto",size:"b2b",children:N?e.jsx(D,{color:"#ffff",size:20}):e.jsx(e.Fragment,{children:a?"Edit ":"Submit"})})})]})})})]}),e.jsx(ne,{})]})}export{fe as default};
