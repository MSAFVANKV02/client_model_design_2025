import{aD as h,aE as p,aF as E}from"./index-COQYuSpk.js";import{r as f,R as v}from"./react-rGsIzOq1.js";const w=typeof window<"u"?f.useLayoutEffect:f.useEffect;function y(n,r,e,s,c){const[t,m]=f.useState(()=>c&&e?e(n).matches:s?s(n).matches:r);return w(()=>{if(!e)return;const o=e(n),a=()=>{m(o.matches)};return a(),o.addEventListener("change",a),()=>{o.removeEventListener("change",a)}},[n,e]),t}const Q={...v},l=Q.useSyncExternalStore;function S(n,r,e,s,c){const t=f.useCallback(()=>r,[r]),m=f.useMemo(()=>{if(c&&e)return()=>e(n).matches;if(s!==null){const{matches:u}=s(n);return()=>u}return t},[t,n,s,c,e]),[o,a]=f.useMemo(()=>{if(e===null)return[t,()=>()=>{}];const u=e(n);return[()=>u.matches,i=>(u.addEventListener("change",i),()=>{u.removeEventListener("change",i)})]},[t,e,n]);return l(a,o,m)}function g(n={}){const{themeId:r}=n;return function(s,c={}){let t=h();t&&r&&(t=t[r]||t);const m=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:a=m?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:u=!1}=p({name:"MuiUseMediaQuery",props:c,theme:t});let i=typeof s=="function"?s(t):s;return i=i.replace(/^@media( ?)/m,""),(l!==void 0?S:y)(i,o,a,d,u)}}const R=g({themeId:E});export{R as u};
