import{b6 as h,b7 as p,b8 as E}from"./index-D_mLwM1k.js";import{r as f,R as v}from"./react-rGsIzOq1.js";const w=typeof window<"u"?f.useLayoutEffect:f.useEffect;function y(n,r,e,s,c){const[t,m]=f.useState(()=>c&&e?e(n).matches:s?s(n).matches:r);return w(()=>{if(!e)return;const o=e(n),u=()=>{m(o.matches)};return u(),o.addEventListener("change",u),()=>{o.removeEventListener("change",u)}},[n,e]),t}const Q={...v},l=Q.useSyncExternalStore;function S(n,r,e,s,c){const t=f.useCallback(()=>r,[r]),m=f.useMemo(()=>{if(c&&e)return()=>e(n).matches;if(s!==null){const{matches:a}=s(n);return()=>a}return t},[t,n,s,c,e]),[o,u]=f.useMemo(()=>{if(e===null)return[t,()=>()=>{}];const a=e(n);return[()=>a.matches,i=>(a.addEventListener("change",i),()=>{a.removeEventListener("change",i)})]},[t,e,n]);return l(u,o,m)}function b(n={}){const{themeId:r}=n;return function(s,c={}){let t=h();t&&r&&(t=t[r]||t);const m=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:u=m?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:a=!1}=p({name:"MuiUseMediaQuery",props:c,theme:t});let i=typeof s=="function"?s(t):s;return i=i.replace(/^@media( ?)/m,""),(l!==void 0?S:y)(i,o,u,d,a)}}const R=b({themeId:E});export{R as u};
