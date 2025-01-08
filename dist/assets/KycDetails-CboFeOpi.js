import{j as e,a as E}from"./vendor-Dyml7b79.js";import{d as I,q as B,B as T,I as y,r as M,v as O,w as W,x as $,y as G,j as L,m as V,A as Z,C as H,e as J,F as Q,f as u,g as x,h as f,i as h,z as m,t as X,D as ee}from"./index-B5fs0UHr.js";import{_ as D}from"./ClipLoader-D-FKsc_Y.js";import{r as p}from"./react-rGsIzOq1.js";import{u as k,a as F}from"./hook-Dzq5yq8o.js";import{c as se}from"./urlPath-CvEbXlwu.js";function re(){const i=p.useRef(null),[l,t]=p.useState(0),n=[{id:1,src:"/img/banners/kyc_curosal1.webp"},{id:2,src:"/img/banners/kyc_curosal2.webp"},{id:3,src:"/img/banners/kyc_curosal2.webp"}],j=()=>{var c,w;const o=((c=i.current)==null?void 0:c.scrollLeft)||0,a=((w=i.current)==null?void 0:w.offsetWidth)||1,s=Math.round(o/a);t(s)},d=o=>{const a=i.current;if(a){const c=a.offsetWidth*o;a.scrollTo({left:c,behavior:"smooth"}),t(o)}};p.useEffect(()=>{const o=i.current;return o&&o.addEventListener("scroll",j),()=>{o&&o.removeEventListener("scroll",j)}},[]);const b=()=>{l>0&&d(l-1)},N=()=>{l<n.length-1&&d(l+1)};return e.jsxs("div",{className:"relative rounded-xl overflow-hidden",children:[e.jsx("div",{className:"flex overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-none",ref:i,children:n.map(o=>e.jsx("div",{className:"min-w-[100%] h-full relative snap-center",children:e.jsx("img",{src:o.src,alt:"",className:"w-full h-full object-cover rounded-xl"})},o.id))}),e.jsx("button",{className:`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-md md:h-10 h-6 md:w-10 w-6 flex justify-center items-center ${l===0?"cursor-not-allowed opacity-50":""}`,onClick:b,disabled:l===0,children:"<"}),e.jsx("button",{className:`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-md md:h-10 h-6 md:w-10 w-6 flex justify-center items-center ${l===n.length-1?"cursor-not-allowed opacity-50":""}`,onClick:N,disabled:l===n.length-1,children:">"}),e.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1",children:n.map((o,a)=>e.jsx("div",{className:` rounded-full cursor-pointer transition-all duration-300 ${l===a?"bg-white w-5 h-2":"bg-gray-300 w-2 h-2"}`,onClick:()=>d(a)},a))})]})}W.workerSrc=`//unpkg.com/pdfjs-dist@${$}/build/pdf.worker.min.mjs`;const K=11*1024*1024;function te(){const i=k(),l=I(),t=p.useRef(null),{businessName:n,emailId:j,buildingName:d,street:b,pinCode:N,state:o,country:a,proofType:s,uploadedFile:c}=F(g=>g.kyc),[w,U]=p.useState(!1),[_,v]=p.useState(null),[S,P]=p.useState(null),{handleLogout:R}=B(),A=()=>{t.current&&t.current.click()},q=g=>{var C;const r=(C=g.target.files)==null?void 0:C[0];if(r){if(r.size>K){v(`File size must be less than ${(K/(1024*1024)).toFixed(2)} MB`);return}if(r.type!=="application/pdf"){v("Only PDF files are allowed");return}v(null);const Y=URL.createObjectURL(r);P(Y),i(G(r))}},z=async()=>{var g;if(!c){L("Please upload a PDF file");return}try{const r=new FormData;r.append("businessName",n),r.append("emailId",j),r.append("buildingName",d),r.append("street",b),r.append("pinCode",N),r.append("state",o),r.append("country",a),r.append("proofType",s||""),r.append("proof",c),(await E.post(se,r,{withCredentials:!0})).status===200&&(V("KYC submitted successfully"),i(Z()),R("/"),l("/"))}catch(r){console.log("Unexpected error:",r),E.isAxiosError(r)?L(((g=r.response)==null?void 0:g.data.message)||"Failed to submit KYC"):console.log("Unexpected error:",r)}finally{U(!1)}};return e.jsxs("div",{className:"md:p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Complete Shop's KYC"}),e.jsxs("div",{className:"flex sm:flex-row flex-col justify-between gap-3 items-center md:p-10 p-4 bg-gray-100 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex flex-col sm:items-start items-center gap-5",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:s}),e.jsxs("p",{children:[s," verifies in 10 mins."]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("small",{children:"Browse, Gallery or Files."}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:".pdf",ref:t,className:"hidden",onChange:q}),e.jsxs(T,{variant:"outline",className:"p-[10px] w-[205px] h-[48px] bg-white flex items-center gap-2 text-center text-black rounded-lg border",onClick:A,type:"button",children:[e.jsx(y,{icon:"material-symbols-light:upload",fontSize:20})," ","Upload"]})]}),e.jsx("span",{className:"text-xs underline text-blue-500 cursor-pointer",onClick:()=>{i(M())},children:"Change Proof Type"})]})]}),e.jsx(T,{variant:"b2bStyle",className:"px-11",onClick:z,children:w?e.jsx(D,{color:"#ffff",size:20}):" Submit"})]}),_&&e.jsx("p",{className:"text-red-600 mb-4",children:_}),e.jsxs("div",{className:"mt-6 flex sm:flex-row flex-col gap-4 justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Certificate must clearly show:"}),e.jsxs("ul",{className:"list-inside list-disc mt-2",children:[e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(y,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Registration Number"]}),e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(y,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Legal Name"]}),e.jsxs("li",{className:"text-sm flex items-center gap-1",children:[e.jsx(y,{icon:"bitcoin-icons:verify-filled",className:"text-green-600",fontSize:25}),"Trade Name"]})]})]}),S&&c?e.jsxs("div",{children:[e.jsx("p",{children:"See Sample:"}),e.jsx("div",{className:"mt-4 relative float-right",children:e.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(O,{fileURL:S}),e.jsx("div",{className:"absolute w-16 h-24 bg-black/10 top-0 rounded-md flex items-center justify-center ",children:e.jsx(y,{icon:"system-uicons:capture",fontSize:25,color:"#fff"})})]})})]}):e.jsx("div",{className:"w-16 h-24 bg-black/20 flex items-center justify-center",children:e.jsx(y,{icon:"system-uicons:capture"})})]})]})}const ne=[{id:1,proofType:"Udyam Aadhaar",proofTitle:"Udyam Aadhaar",proofSubText:"KYC in 10 mins."},{id:2,proofType:"GST Certificate",proofTitle:"GST Certificate",proofSubText:"KYC in 10 mins."},{id:3,proofType:"Current Account Cheque",proofTitle:"Current Account Cheque",proofSubText:"KYC in 48 hours."},{id:4,proofType:"Shop & Establishment License",proofTitle:"Shop & Establishment License",proofSubText:"KYC in 48 hours."},{id:5,proofType:"Trade Certificate/License",proofTitle:"Trade Certificate / License",proofSubText:"KYC in 48 hours."},{id:6,proofType:"Other Shop Documents",proofTitle:"Other Shop Documents",proofSubText:"KYC in 48 hours."}];function oe(){const{proofType:i}=F(n=>n.kyc),l=k(),t=n=>{l(H(n))};return e.jsx("div",{className:"",children:i?e.jsx(e.Fragment,{children:e.jsx(te,{})}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Upload Any 1 document"}),e.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:ne.map(n=>e.jsx("li",{className:"border p-16 bg-gray-100  cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300",onClick:()=>t(n.proofType),children:e.jsxs("div",{className:"font-semibold  flex items-center justify-center gap-3",children:[e.jsxs("p",{children:[" ",n.proofTitle]}),e.jsx("p",{className:"text-sm text-textMain",children:n.proofSubText})]})},n.id))})]})})}const le=m.object({businessName:m.string().min(1,{message:"Business name is required."}),emailId:m.string().email({message:"Invalid email address."}),buildingName:m.string().min(1,{message:"Building name is required."}),street:m.string().min(1,{message:"Street name is required."}),pinCode:m.string().min(1,{message:"Pincode is required."}),state:m.string().min(1,{message:"State is required."}),country:m.string().min(1,{message:"Country is required."})});function ue(){const i=k(),l=F(s=>s.kyc);console.log(l,"kycDetails");const t=J({resolver:X(le),defaultValues:{businessName:"",emailId:"",buildingName:"",street:"",pinCode:"",state:"",country:""}}),{handleSubmit:n}=t,j=I(),[d,b]=p.useState(!1),o=new URLSearchParams(window.location.search).get("proofs"),a=async s=>{b(!0);try{i(ee(s));const c={...s};j(`/kyc/details?proofs=${c.buildingName}`)}catch(c){console.error("Error submitting form:",c)}finally{b(!1)}};return e.jsxs("div",{className:"section_container_dash  py-10 space-y-4 min-h-screen",children:[o?e.jsx(e.Fragment,{children:e.jsx(oe,{})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sm:text-xl text-lg",children:[e.jsx("span",{children:"Complete"})," ",e.jsx("span",{className:"text-textMain",children:"Shop’s KYC"})]}),e.jsx("div",{className:"",children:e.jsx(Q,{...t,children:e.jsxs("form",{onSubmit:n(a),className:"w-full space-y-3",children:[e.jsx(u,{control:t.control,name:"businessName",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"text",...s,placeholder:"Enter your business name",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})}),e.jsx(u,{control:t.control,name:"emailId",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"email",...s,placeholder:"Enter your email ID",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})}),e.jsx(u,{control:t.control,name:"buildingName",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"text",...s,placeholder:"Enter your building name",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})}),e.jsx(u,{control:t.control,name:"street",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"text",...s,placeholder:"Enter your street",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})}),e.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.jsx(u,{control:t.control,name:"pinCode",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"text",...s,placeholder:"Enter your pin code",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(u,{control:t.control,name:"state",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"text",...s,placeholder:"Enter your state",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})}),e.jsx(u,{control:t.control,name:"country",render:({field:s})=>e.jsxs(x,{children:[e.jsx(f,{children:e.jsx("input",{type:"text",...s,placeholder:"Enter your country",className:"w-full p-2 border border-gray-300 rounded-lg"})}),e.jsx(h,{})]})})]}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(T,{type:"submit",disabled:d,variant:"b2bStyle",className:"w-full sm:px-16 sm:w-auto",size:"b2b",children:d?e.jsx(D,{color:"#ffff",size:20}):"Submit"})})]})})})]}),e.jsx(re,{})]})}export{ue as default};
