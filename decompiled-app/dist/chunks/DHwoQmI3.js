import{d as Es,r as Rd,t as Q1,l as Mr,f as av,i as J1,p as eA,e as Kn,S as En,a as tA,T as rA,b as Js,c as nA,g as en,h as cn,s as sv,j as yt,k as dn,m as uv,n as lv,E as iA,o as mi,P as go,q as oA,u as Fa,v as aA,w as Zc,x as sA,y as cv,z as Ul,A as uA,B as fv,C as lA,I as xr,D as Ft,F as cA,G as dc,H as bd,J as p,K as eu,L as pc,M as Xi,N as Wn,O as fA,Q as hv,R as hA,U as dA,V as pA,W as _A,X as mA,Y as Cd,Z as vA,_ as gA,$ as dv,a0 as _c,a1 as Ws,a2 as lr,a3 as tu,a4 as ln,a5 as Od,a6 as EA,a7 as pv,a8 as io,a9 as yA,aa as oo,ab as mc,ac as jr,ad as eo,ae as ru,af as Id,ag as vc,ah as kl,ai as _v,aj as AA,ak as ys,al as Md,am as TA,an as vi,ao as SA,ap as nu,aq as xA,ar as Bd,as as RA,at as bA,au as CA,av as OA,aw as IA,ax as Kc,ay as mv,az as MA,aA as co,aB as di,aC as Nd,aD as BA,aE as NA}from"./BhxK-czY.js";import{aZ as jL,aL as GL,aX as $L,aY as YL,aF as ZL,aH as KL,a_ as qL,aM as QL,aN as JL,aO as eD,aP as tD,aQ as rD,aI as nD,bj as iD,bm as oD,aR as aD,aT as sD,aJ as uD,aS as lD,aK as cD,bl as fD,aV as hD,aU as dD,bn as pD,aW as _D,b6 as mD,b7 as vD,b8 as gD,b9 as ED,a$ as yD,ba as AD,bb as TD,b2 as SD,bo as xD,bp as RD,b0 as bD,b3 as CD,b1 as OD,bk as ID,b4 as MD,b5 as BD,bc as ND,bd as PD,be as LD,bq as DD,br as FD,aG as wD,bf as UD,bg as kD,bh as zD,bi as VD}from"./BhxK-czY.js";import{W as Io,a as vv,bm as v,bn as le,bo as ee,bp as gi}from"./DcHvO0tL.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"DeskPro@6.1.0"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="98ce7097-6e86-4d22-910d-5ff70cb0a573",t._sentryDebugIdIdentifier="sentry-dbid-98ce7097-6e86-4d22-910d-5ff70cb0a573")})()}catch{}var gv={},Ev={},Pd=t=>Ev[t],Gr=(t,e)=>{Ev[t]=e},PA=t=>gv[t],Mo=(t,e)=>{gv[t]=e},Ld={},zl={},Vl=34,qo=10,Wl=13;function yv(t){return new Function("d","return {"+t.map(function(e,r){return JSON.stringify(e)+": d["+r+'] || ""'}).join(",")+"}")}function LA(t,e){var r=yv(t);return function(n,i){return e(r(n),i,t)}}function Dd(t){var e=Object.create(null),r=[];return t.forEach(function(n){for(var i in n)i in e||r.push(e[i]=i)}),r}function wr(t,e){var r=t+"",n=r.length;return n<e?new Array(e-n+1).join(0)+r:r}function DA(t){return t<0?"-"+wr(-t,6):t>9999?"+"+wr(t,6):wr(t,4)}function FA(t){var e=t.getUTCHours(),r=t.getUTCMinutes(),n=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":DA(t.getUTCFullYear())+"-"+wr(t.getUTCMonth()+1,2)+"-"+wr(t.getUTCDate(),2)+(i?"T"+wr(e,2)+":"+wr(r,2)+":"+wr(n,2)+"."+wr(i,3)+"Z":n?"T"+wr(e,2)+":"+wr(r,2)+":"+wr(n,2)+"Z":r||e?"T"+wr(e,2)+":"+wr(r,2)+"Z":"")}function wA(t){var e=new RegExp('["'+t+`
\r]`),r=t.charCodeAt(0);function n(c,h){var _,m,E=i(c,function(S,M){if(_)return _(S,M-1);m=S,_=h?LA(S,h):yv(S)});return E.columns=m||[],E}function i(c,h){var _=[],m=c.length,E=0,S=0,M,P=m<=0,F=!1;c.charCodeAt(m-1)===qo&&--m,c.charCodeAt(m-1)===Wl&&--m;function V(){if(P)return zl;if(F)return F=!1,Ld;var ce,j=E,fe;if(c.charCodeAt(j)===Vl){for(;E++<m&&c.charCodeAt(E)!==Vl||c.charCodeAt(++E)===Vl;);return(ce=E)>=m?P=!0:(fe=c.charCodeAt(E++))===qo?F=!0:fe===Wl&&(F=!0,c.charCodeAt(E)===qo&&++E),c.slice(j+1,ce-1).replace(/""/g,'"')}for(;E<m;){if((fe=c.charCodeAt(ce=E++))===qo)F=!0;else if(fe===Wl)F=!0,c.charCodeAt(E)===qo&&++E;else if(fe!==r)continue;return c.slice(j,ce)}return P=!0,c.slice(j,m)}for(;(M=V())!==zl;){for(var pe=[];M!==Ld&&M!==zl;)pe.push(M),M=V();h&&(pe=h(pe,S++))==null||_.push(pe)}return _}function o(c,h){return c.map(function(_){return h.map(function(m){return f(_[m])}).join(t)})}function a(c,h){return h==null&&(h=Dd(c)),[h.map(f).join(t)].concat(o(c,h)).join(`
`)}function s(c,h){return h==null&&(h=Dd(c)),o(c,h).join(`
`)}function u(c){return c.map(l).join(`
`)}function l(c){return c.map(f).join(t)}function f(c){return c==null?"":c instanceof Date?FA(c):e.test(c+="")?'"'+c.replace(/"/g,'""')+'"':c}return{parse:n,parseRows:i,format:a,formatBody:s,formatRows:u,formatRow:l,formatValue:f}}var UA=wA(","),kA=UA.parse;function Av(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Fd(t){return t.type==="Feature"?t.geometry:t}var Hs={REGISTERED_PROTOCOLS:{}},zA=Object.defineProperty,VA=Object.defineProperties,WA=Object.getOwnPropertyDescriptors,wd=Object.getOwnPropertySymbols,HA=Object.prototype.hasOwnProperty,XA=Object.prototype.propertyIsEnumerable,Ud=(t,e,r)=>e in t?zA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Bu=(t,e)=>{for(var r in e||(e={}))HA.call(e,r)&&Ud(t,r,e[r]);if(wd)for(var r of wd(e))XA.call(e,r)&&Ud(t,r,e[r]);return t},Nu=(t,e)=>VA(t,WA(e)),qc=t=>Hs.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))],jA=class extends Error{constructor(t,e,r,n){super(`AJAXError: ${e} (${t}): ${r}`),this.status=t,this.statusText=e,this.url=r,this.body=n}};function Tv(t,e){const r=new XMLHttpRequest,n=Array.isArray(t.url)?t.url[0]:t.url;r.open(t.method||"GET",n,!0),t.type==="arrayBuffer"&&(r.responseType="arraybuffer");for(const i in t.headers)t.headers.hasOwnProperty(i)&&r.setRequestHeader(i,t.headers[i]);return t.type==="json"&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials=t.credentials==="include",r.onerror=()=>{e(new Error(r.statusText))},r.onload=()=>{if((r.status>=200&&r.status<300||r.status===0)&&r.response!==null){let i=r.response;if(t.type==="json")try{i=JSON.parse(r.response)}catch(o){return e(o)}e(null,i,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"),r)}else{const i=new Blob([r.response],{type:r.getResponseHeader("Content-Type")});e(new jA(r.status,r.statusText,n.toString(),i))}},r.cancel=r.abort,r.send(t.body),r}function GA(t){return new Promise((e,r)=>{Tv(t,(n,i,o,a,s)=>{n?r({err:n,data:null,xhr:s}):e({err:null,data:i,cacheControl:o,expires:a,xhr:s})})})}function Pu(t,e){return Tv(t,e)}var $A=(t,e)=>(qc(t.url)||Pu)(Nu(Bu({},t),{type:"json"}),e),Qc=(t,e)=>(qc(t.url)||Pu)(Nu(Bu({},t),{type:"arrayBuffer"}),e),uL=(t,e)=>Pu(Nu(Bu({},t),{method:"POST"}),e),YA=(t,e)=>Pu(Nu(Bu({},t),{method:"GET"}),e);function lL(t){const e=window.document.createElement("a");return e.href=t,e.protocol===window.document.location.protocol&&e.host===window.document.location.host}var kd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";function Sv(t,e){const r=new window.Image,n=window.URL||window.webkitURL;r.crossOrigin="anonymous",r.onload=()=>{e(null,r),n.revokeObjectURL(r.src),r.onload=null,window.requestAnimationFrame(()=>{r.src=kd})},r.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));const i=new Blob([new Uint8Array(t)],{type:"image/png"});r.src=t.byteLength?n.createObjectURL(i):kd}function xv(t,e){const r=new Blob([new Uint8Array(t)],{type:"image/png"});createImageBitmap(r).then(n=>{e(null,n)}).catch(n=>{e(new Error(`Could not load image because of ${n.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`))})}var gc=(t,e,r)=>{const n=(i,o)=>{if(i)e(i);else if(o){const a=typeof createImageBitmap=="function",s=r?r(o):o;a?xv(s,e):Sv(s,e)}};return t.type==="json"?$A(t,n):Qc(t,n)},ZA=(t,e)=>{typeof createImageBitmap=="function"?xv(t,e):Sv(t,e)},Jc=(t=>(t.CENTER="center",t.TOP="top",t["TOP-LEFT"]="top-left",t["TOP-RIGHT"]="top-right",t.BOTTOM="bottom",t["BOTTOM-LEFT"]="bottom-left",t["BOTTOM-RIGHT"]="bottom-right",t.LEFT="left",t.RIGHT="right",t))(Jc||{}),iu={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"};function Rv(t,e,r){const n=t.classList;for(const i in iu)iu.hasOwnProperty(i)&&n.remove(`l7-${r}-anchor-${i}`);n.add(`l7-${r}-anchor-${e}`)}function bv(t,e){t.forEach(r=>{e[r]&&(e[r]=e[r].bind(e))})}var KA=class{constructor(t=16){this.duration=16,this.timestamp=new Date().getTime(),this.duration=t}run(t){const e=new Date().getTime(),r=e-this.timestamp;this.timestamp=e,r>=this.duration&&t()}};function zd(t,e,r,n,i=30,o){let a=r;return o&&(a=Math.round(r*(i-1))/(i-1)),n?Wd(t,e,a,n):Wd(t,e,a,.314)}function Vd(t,e){const r=1-e;return(t[0]*r+t[1]*e)*r+(t[1]*r+t[2]*e)*e}function qA(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function QA(t,e,r){const n=[e[0]-t[0],e[1]-t[1]],i=qA(n,[0,0]),o=Math.atan2(n[1],n[0]),a=i/2/Math.cos(r),s=o+r;return[a*Math.cos(s)+t[0],a*Math.sin(s)+t[1]]}function Wd(t,e,r,n){const i=QA(t,e,n),o=[t[0],i[0],e[0]],a=[t[1],i[1],e[1]];return[Vd(o,r),Vd(a,r),0]}function JA(t,e,r,n,i=30,o){let a=r;return o&&(a=Math.round(r*29)/29),tT(t,e,a)}function eT(t,e){const r=[t[0]-e[0],t[1]-e[1]],n=[Math.sin(r[0]/2),Math.sin(r[1]/2)],i=n[1]*n[1]+Math.cos(t[1])*Math.cos(e[1])*n[0]*n[0];return 2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function tT(t,e,r){const n=[Es(t[0]),Es(t[1])],i=[Es(e[0]),Es(e[1])],o=eT(n,i);if(Math.abs(o-Math.PI)<.001)return[(1-r)*n[0]+r*i[0],(1-r)*n[1]+r*i[1]];const a=Math.sin((1-r)*o)/Math.sin(o),s=Math.sin(r*o)/Math.sin(o),u=[Math.sin(n[0]),Math.sin(n[1])],l=[Math.cos(n[0]),Math.cos(n[1])],f=[Math.sin(i[0]),Math.sin(i[1])],c=[Math.cos(i[0]),Math.cos(i[1])],h=a*l[1]*l[0]+s*c[1]*c[0],_=a*l[1]*u[0]+s*c[1]*f[0],m=a*u[1]+s*f[1];return[Rd(Math.atan2(_,h)),Rd(Math.atan2(m,Math.sqrt(h*h+_*_)))]}function rT(t,e){let r=0;const n=[];for(let s=0;s<t.length-1;s++){const u=t[s],l=t[s+1],f=iT(u,l),c=r;r+=f,n.push({p1:u,p2:l,totalDistance:r,distance:f,lastTotalDistance:c})}const i=r*e;let o,a;for(const s of n)if(s.totalDistance>i){const l=s.p1,f=s.p2,c=(i-s.lastTotalDistance)/s.distance,h=nT(f,l,c);o=h[0],a=h[1];break}return{lng:o,lat:a,height:0}}function nT(t,e,r){return[t[0]*r+e[0]*(1-r),t[1]*r+e[1]*(1-r)]}function iT(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}var oT=Object.defineProperty,Hd=Object.getOwnPropertySymbols,aT=Object.prototype.hasOwnProperty,sT=Object.prototype.propertyIsEnumerable,Xd=(t,e,r)=>e in t?oT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,jd=(t,e)=>{for(var r in e||(e={}))aT.call(e,r)&&Xd(t,r,e[r]);if(Hd)for(var r of Hd(e))sT.call(e,r)&&Xd(t,r,e[r]);return t};function Gd(t,e){const{featureId:r}=e;let n=t.data.dataArray;return typeof r=="number"&&(n=n.filter(({id:i})=>i===r)),n.map(i=>{const o=uT(i,e);return jd(jd({},i),o)})}function cL(t,e){return new Promise(r=>{t.inited?r(Gd(t,e)):t.once("update",()=>{r(Gd(t,e))})})}function uT(t,e){const{offset:r,shape:n,thetaOffset:i,segmentNumber:o=30,autoFit:a=!0}=e,{coordinates:s}=t;if(n==="line")return rT(s,r);const u=s[0],l=s[1],f=typeof i=="string"?t[i]||0:i;let c;switch(n){case"arc":c=zd;break;case"greatcircle":c=JA;break;default:c=zd}const[h,_,m]=c(u,l,r,f,o,a);return{lng:h,lat:_,height:m}}function Cv(t){if(t.length===0)throw new Error("max requires at least one data point");let e=t[0];for(let r=1;r<t.length;r++)t[r]>e&&(e=t[r]);return e*1}function Ov(t){if(t.length===0)throw new Error("min requires at least one data point");let e=t[0];for(let r=1;r<t.length;r++)t[r]<e&&(e=t[r]);return e*1}function ef(t){if(t.length===0)return 0;let e=t[0]*1;for(let r=1;r<t.length;r++)e+=t[r]*1;return e}function Iv(t){if(t.length===0)throw new Error("mean requires at least one data point");return ef(t)/t.length}function Mv(t){if(t.length===0)throw new Error("mean requires at least one data point");if(t.length<3)return t[0];t.sort();let e=t[0],r=NaN,n=0,i=1;for(let o=1;o<t.length+1;o++)t[o]!==e?(i>n&&(n=i,r=e),i=1,e=t[o]):i++;return r*1}var Lu={min:Ov,max:Cv,mean:Iv,sum:ef,mode:Mv};function Du(t,e){return t.map(r=>r[e])}function Bv(t,e){return Lu[t](e)}const fL=Object.freeze(Object.defineProperty({__proto__:null,getColumn:Du,getSatByColumn:Bv,max:Cv,mean:Iv,min:Ov,mode:Mv,statMap:Lu,sum:ef},Symbol.toStringTag,{value:"Module"}));function hL(t){return/(?=.*{box})(?=.*{z})(?=.*{x})(?=.*({y}|{-y}))/.test(t)}function Nv(t){const e=[];let r=/\{([a-z])-([a-z])\}/.exec(t);if(r){const n=r[1].charCodeAt(0),i=r[2].charCodeAt(0);let o;for(o=n;o<=i;++o)e.push(t.replace(r[0],String.fromCharCode(o)));return e}if(r=/\{(\d+)-(\d+)\}/.exec(t),r){const n=parseInt(r[2],10);for(let i=parseInt(r[1],10);i<=n;i++)e.push(t.replace(r[0],i.toString()));return e}return e.push(t),e}function fo(t,e){if(!t||!t.length)throw new Error("url is not allowed to be empty");const{x:r,y:n,z:i}=e,o=Nv(t),a=Math.abs(r+n)%o.length;return(qc(o[a])?`${o[a]}/{z}/{x}/{y}`:o[a]).replace(/\{x\}/g,r.toString()).replace(/\{y\}/g,n.toString()).replace(/\{z\}/g,i.toString()).replace(/\{bbox\}/g,Q1(r,n,i).join(",")).replace(/\{-y\}/g,(Math.pow(2,i)-n-1).toString())}function lT(t,e){const{x:r,y:n,z:i,layer:o,version:a="1.0.0",style:s="default",format:u,service:l="WMTS",tileMatrixset:f}=e,c=Nv(t),h=Math.abs(r+n)%c.length;return`${c[h]}&SERVICE=${l}&REQUEST=GetTile&VERSION=${a}&LAYER=${o}&STYLE=${s}&TILEMATRIXSET=${f}&FORMAT=${u}&TILECOL=${r}&TILEROW=${n}&TILEMATRIX=${i}`}function Qo(t,e){return t??e}var cT=Xs;function Xs(t,e){var r=t&&t.type,n;if(r==="FeatureCollection")for(n=0;n<t.features.length;n++)Xs(t.features[n],e);else if(r==="GeometryCollection")for(n=0;n<t.geometries.length;n++)Xs(t.geometries[n],e);else if(r==="Feature")Xs(t.geometry,e);else if(r==="Polygon")$d(t.coordinates,e);else if(r==="MultiPolygon")for(n=0;n<t.coordinates.length;n++)$d(t.coordinates[n],e);return t}function $d(t,e){if(t.length!==0){Yd(t[0],e);for(var r=1;r<t.length;r++)Yd(t[r],!e)}}function Yd(t,e){for(var r=0,n=0,i=0,o=t.length,a=o-1;i<o;a=i++){var s=(t[i][0]-t[a][0])*(t[a][1]+t[i][1]),u=r+s;n+=Math.abs(r)>=Math.abs(s)?r-u+s:s-u+r,r=u}r+n>=0!=!!e&&t.reverse()}const fT=Io(cT);function hT(t,e){return t.map(r=>r[e]*1)}function Pv(t){return Array.isArray(t)?t.length===0||typeof t[0]=="number":!1}function Ec(t){const e=Object.isFrozen(t)?Mr.cloneDeep(t):t;return fT(e,!0),e}function Bo(t,e){return t||[[e[0],e[3]],[e[2],e[3]],[e[2],e[1]],[e[0],e[1]]]}var dT=Object.defineProperty,pT=Object.defineProperties,_T=Object.getOwnPropertyDescriptors,Zd=Object.getOwnPropertySymbols,mT=Object.prototype.hasOwnProperty,vT=Object.prototype.propertyIsEnumerable,Kd=(t,e,r)=>e in t?dT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,qd=(t,e)=>{for(var r in e||(e={}))mT.call(e,r)&&Kd(t,r,e[r]);if(Zd)for(var r of Zd(e))vT.call(e,r)&&Kd(t,r,e[r]);return t},Qd=(t,e)=>pT(t,_T(e));function Lv(t,e){const{x:r,y:n,x1:i,y1:o,coordinates:a,geometry:s}=e,u=[];if(!Array.isArray(t))return{dataArray:[]};if(s)return t.filter(l=>l[s]&&l[s].type&&l[s].coordinates&&l[s].coordinates.length>0).forEach((l,f)=>{const c=Ec(l[s]);av(c,h=>{const _=Av(h),m=Qd(qd({},l),{_id:f,coordinates:_});u.push(m)})}),{dataArray:u};for(let l=0;l<t.length;l++){const f=t[l];let c=[];if(a){let _="Polygon";Array.isArray(a[0])||(_="Point"),Array.isArray(a[0])&&!Array.isArray(a[0][0])&&(_="LineString"),c=Ec({type:_,coordinates:f[a]}).coordinates}else if(r&&n&&i&&o){const _=[parseFloat(f[r]),parseFloat(f[n])],m=[parseFloat(f[i]),parseFloat(f[o])];c=[_,m]}else r&&n&&(c=[parseFloat(f[r]),parseFloat(f[n])]);const h=Qd(qd({},f),{_id:l,coordinates:c});u.push(h)}return{dataArray:u}}function gT(t,e){const r=kA(t);return Lv(r,e)}var ET=Object.defineProperty,yT=Object.defineProperties,AT=Object.getOwnPropertyDescriptors,Jd=Object.getOwnPropertySymbols,TT=Object.prototype.hasOwnProperty,ST=Object.prototype.propertyIsEnumerable,ep=(t,e,r)=>e in t?ET(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,xT=(t,e)=>{for(var r in e||(e={}))TT.call(e,r)&&ep(t,r,e[r]);if(Jd)for(var r of Jd(e))ST.call(e,r)&&ep(t,r,e[r]);return t},RT=(t,e)=>yT(t,AT(e));function bT(t){const e=t.toString();let r=5381,n=e.length;for(;n;)r=r*33^e.charCodeAt(--n);return r>>>0}function CT(t,e){return e===void 0?null:isNaN(t.properties[e]*1)?t.properties&&t.properties[e]?bT(t.properties[e]+"")%1000019:null:t.properties[e]*1}function OT(t,e){const r=[],n={};return t.features?(t.features=t.features.filter(i=>{const o=i.geometry;return i!=null&&o&&o.type&&o.coordinates&&o.coordinates.length>0}),t=Ec(t),t.features.length===0?{dataArray:[],featureKeys:n}:(av(t,(i,o)=>{let a=CT(i,e?.featureId);a===null&&(a=o);const s=a,u=Av(i),l=RT(xT({},i.properties),{coordinates:u,_id:s});r.push(l)}),{dataArray:r,featureKeys:n})):(t.features=[],{dataArray:[]})}function yc(t,e,r,n){for(var i=n,o=r-e>>1,a=r-e,s,u=t[e],l=t[e+1],f=t[r],c=t[r+1],h=e+3;h<r;h+=3){var _=IT(t[h],t[h+1],u,l,f,c);if(_>i)s=h,i=_;else if(_===i){var m=Math.abs(h-o);m<a&&(s=h,a=m)}}i>n&&(s-e>3&&yc(t,e,s,n),t[s+2]=i,r-s>3&&yc(t,s,r,n))}function IT(t,e,r,n,i,o){var a=i-r,s=o-n;if(a!==0||s!==0){var u=((t-r)*a+(e-n)*s)/(a*a+s*s);u>1?(r=i,n=o):u>0&&(r+=a*u,n+=s*u)}return a=t-r,s=e-n,a*a+s*s}function ba(t,e,r,n){var i={id:typeof t>"u"?null:t,type:e,geometry:r,tags:n,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return MT(i),i}function MT(t){var e=t.geometry,r=t.type;if(r==="Point"||r==="MultiPoint"||r==="LineString")Hl(t,e);else if(r==="Polygon"||r==="MultiLineString")for(var n=0;n<e.length;n++)Hl(t,e[n]);else if(r==="MultiPolygon")for(n=0;n<e.length;n++)for(var i=0;i<e[n].length;i++)Hl(t,e[n][i])}function Hl(t,e){for(var r=0;r<e.length;r+=3)t.minX=Math.min(t.minX,e[r]),t.minY=Math.min(t.minY,e[r+1]),t.maxX=Math.max(t.maxX,e[r]),t.maxY=Math.max(t.maxY,e[r+1])}function BT(t,e){var r=[];if(t.type==="FeatureCollection")for(var n=0;n<t.features.length;n++)js(r,t.features[n],e,n);else t.type==="Feature"?js(r,t,e):js(r,{geometry:t},e);return r}function js(t,e,r,n){if(e.geometry){var i=e.geometry.coordinates,o=e.geometry.type,a=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),s=[],u=e.id;if(r.promoteId?u=e.properties[r.promoteId]:r.generateId&&(u=n||0),o==="Point")tp(i,s);else if(o==="MultiPoint")for(var l=0;l<i.length;l++)tp(i[l],s);else if(o==="LineString")Ac(i,s,a,!1);else if(o==="MultiLineString")if(r.lineMetrics){for(l=0;l<i.length;l++)s=[],Ac(i[l],s,a,!1),t.push(ba(u,"LineString",s,e.properties));return}else Xl(i,s,a,!1);else if(o==="Polygon")Xl(i,s,a,!0);else if(o==="MultiPolygon")for(l=0;l<i.length;l++){var f=[];Xl(i[l],f,a,!0),s.push(f)}else if(o==="GeometryCollection"){for(l=0;l<e.geometry.geometries.length;l++)js(t,{id:u,geometry:e.geometry.geometries[l],properties:e.properties},r,n);return}else throw new Error("Input data is not a valid GeoJSON object.");t.push(ba(u,o,s,e.properties))}}function tp(t,e){e.push(Dv(t[0])),e.push(Fv(t[1])),e.push(0)}function Ac(t,e,r,n){for(var i,o,a=0,s=0;s<t.length;s++){var u=Dv(t[s][0]),l=Fv(t[s][1]);e.push(u),e.push(l),e.push(0),s>0&&(n?a+=(i*l-u*o)/2:a+=Math.sqrt(Math.pow(u-i,2)+Math.pow(l-o,2))),i=u,o=l}var f=e.length-3;e[2]=1,yc(e,0,f,r),e[f+2]=1,e.size=Math.abs(a),e.start=0,e.end=e.size}function Xl(t,e,r,n){for(var i=0;i<t.length;i++){var o=[];Ac(t[i],o,r,n),e.push(o)}}function Dv(t){return t/360+.5}function Fv(t){var e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return r<0?0:r>1?1:r}function On(t,e,r,n,i,o,a,s){if(r/=e,n/=e,o>=r&&a<n)return t;if(a<r||o>=n)return null;for(var u=[],l=0;l<t.length;l++){var f=t[l],c=f.geometry,h=f.type,_=i===0?f.minX:f.minY,m=i===0?f.maxX:f.maxY;if(_>=r&&m<n){u.push(f);continue}else if(m<r||_>=n)continue;var E=[];if(h==="Point"||h==="MultiPoint")NT(c,E,r,n,i);else if(h==="LineString")wv(c,E,r,n,i,!1,s.lineMetrics);else if(h==="MultiLineString")jl(c,E,r,n,i,!1);else if(h==="Polygon")jl(c,E,r,n,i,!0);else if(h==="MultiPolygon")for(var S=0;S<c.length;S++){var M=[];jl(c[S],M,r,n,i,!0),M.length&&E.push(M)}if(E.length){if(s.lineMetrics&&h==="LineString"){for(S=0;S<E.length;S++)u.push(ba(f.id,h,E[S],f.tags));continue}(h==="LineString"||h==="MultiLineString")&&(E.length===1?(h="LineString",E=E[0]):h="MultiLineString"),(h==="Point"||h==="MultiPoint")&&(h=E.length===3?"Point":"MultiPoint"),u.push(ba(f.id,h,E,f.tags))}}return u.length?u:null}function NT(t,e,r,n,i){for(var o=0;o<t.length;o+=3){var a=t[o+i];a>=r&&a<=n&&(e.push(t[o]),e.push(t[o+1]),e.push(t[o+2]))}}function wv(t,e,r,n,i,o,a){for(var s=rp(t),u=i===0?PT:LT,l=t.start,f,c,h=0;h<t.length-3;h+=3){var _=t[h],m=t[h+1],E=t[h+2],S=t[h+3],M=t[h+4],P=i===0?_:m,F=i===0?S:M,V=!1;a&&(f=Math.sqrt(Math.pow(_-S,2)+Math.pow(m-M,2))),P<r?F>r&&(c=u(s,_,m,S,M,r),a&&(s.start=l+f*c)):P>n?F<n&&(c=u(s,_,m,S,M,n),a&&(s.start=l+f*c)):Gl(s,_,m,E),F<r&&P>=r&&(c=u(s,_,m,S,M,r),V=!0),F>n&&P<=n&&(c=u(s,_,m,S,M,n),V=!0),!o&&V&&(a&&(s.end=l+f*c),e.push(s),s=rp(t)),a&&(l+=f)}var pe=t.length-3;_=t[pe],m=t[pe+1],E=t[pe+2],P=i===0?_:m,P>=r&&P<=n&&Gl(s,_,m,E),pe=s.length-3,o&&pe>=3&&(s[pe]!==s[0]||s[pe+1]!==s[1])&&Gl(s,s[0],s[1],s[2]),s.length&&e.push(s)}function rp(t){var e=[];return e.size=t.size,e.start=t.start,e.end=t.end,e}function jl(t,e,r,n,i,o){for(var a=0;a<t.length;a++)wv(t[a],e,r,n,i,o,!1)}function Gl(t,e,r,n){t.push(e),t.push(r),t.push(n)}function PT(t,e,r,n,i,o){var a=(o-e)/(n-e);return t.push(o),t.push(r+(i-r)*a),t.push(1),a}function LT(t,e,r,n,i,o){var a=(o-r)/(i-r);return t.push(e+(n-e)*a),t.push(o),t.push(1),a}function DT(t,e){var r=e.buffer/e.extent,n=t,i=On(t,1,-1-r,r,0,-1,2,e),o=On(t,1,1-r,2+r,0,-1,2,e);return(i||o)&&(n=On(t,1,-r,1+r,0,-1,2,e)||[],i&&(n=np(i,1).concat(n)),o&&(n=n.concat(np(o,-1)))),n}function np(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n],o=i.type,a;if(o==="Point"||o==="MultiPoint"||o==="LineString")a=$l(i.geometry,e);else if(o==="MultiLineString"||o==="Polygon"){a=[];for(var s=0;s<i.geometry.length;s++)a.push($l(i.geometry[s],e))}else if(o==="MultiPolygon")for(a=[],s=0;s<i.geometry.length;s++){for(var u=[],l=0;l<i.geometry[s].length;l++)u.push($l(i.geometry[s][l],e));a.push(u)}r.push(ba(i.id,o,a,i.tags))}return r}function $l(t,e){var r=[];r.size=t.size,t.start!==void 0&&(r.start=t.start,r.end=t.end);for(var n=0;n<t.length;n+=3)r.push(t[n]+e,t[n+1],t[n+2]);return r}function ip(t,e){if(t.transformed)return t;var r=1<<t.z,n=t.x,i=t.y,o,a,s;for(o=0;o<t.features.length;o++){var u=t.features[o],l=u.geometry,f=u.type;if(u.geometry=[],f===1)for(a=0;a<l.length;a+=2)u.geometry.push(op(l[a],l[a+1],e,r,n,i));else for(a=0;a<l.length;a++){var c=[];for(s=0;s<l[a].length;s+=2)c.push(op(l[a][s],l[a][s+1],e,r,n,i));u.geometry.push(c)}}return t.transformed=!0,t}function op(t,e,r,n,i,o){return[Math.round(r*(t*n-i)),Math.round(r*(e*n-o))]}function FT(t,e,r,n,i){for(var o=e===i.maxZoom?0:i.tolerance/((1<<e)*i.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:n,z:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<t.length;s++){a.numFeatures++,wT(a,t[s],o,i);var u=t[s].minX,l=t[s].minY,f=t[s].maxX,c=t[s].maxY;u<a.minX&&(a.minX=u),l<a.minY&&(a.minY=l),f>a.maxX&&(a.maxX=f),c>a.maxY&&(a.maxY=c)}return a}function wT(t,e,r,n){var i=e.geometry,o=e.type,a=[];if(o==="Point"||o==="MultiPoint")for(var s=0;s<i.length;s+=3)a.push(i[s]),a.push(i[s+1]),t.numPoints++,t.numSimplified++;else if(o==="LineString")Yl(a,i,t,r,!1,!1);else if(o==="MultiLineString"||o==="Polygon")for(s=0;s<i.length;s++)Yl(a,i[s],t,r,o==="Polygon",s===0);else if(o==="MultiPolygon")for(var u=0;u<i.length;u++){var l=i[u];for(s=0;s<l.length;s++)Yl(a,l[s],t,r,!0,s===0)}if(a.length){var f=e.tags||null;if(o==="LineString"&&n.lineMetrics){f={};for(var c in e.tags)f[c]=e.tags[c];f.mapbox_clip_start=i.start/i.size,f.mapbox_clip_end=i.end/i.size}var h={geometry:a,type:o==="Polygon"||o==="MultiPolygon"?3:o==="LineString"||o==="MultiLineString"?2:1,tags:f};e.id!==null&&(h.id=e.id),t.features.push(h)}}function Yl(t,e,r,n,i,o){var a=n*n;if(n>0&&e.size<(i?a:n)){r.numPoints+=e.length/3;return}for(var s=[],u=0;u<e.length;u+=3)(n===0||e[u+2]>a)&&(r.numSimplified++,s.push(e[u]),s.push(e[u+1])),r.numPoints++;i&&UT(s,o),t.push(s)}function UT(t,e){for(var r=0,n=0,i=t.length,o=i-2;n<i;o=n,n+=2)r+=(t[n]-t[o])*(t[n+1]+t[o+1]);if(r>0===e)for(n=0,i=t.length;n<i/2;n+=2){var a=t[n],s=t[n+1];t[n]=t[i-2-n],t[n+1]=t[i-1-n],t[i-2-n]=a,t[i-1-n]=s}}function kT(t,e){return new Fu(t,e)}function Fu(t,e){e=this.options=zT(Object.create(this.options),e);var r=e.debug;if(r&&console.time("preprocess data"),e.maxZoom<0||e.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(e.promoteId&&e.generateId)throw new Error("promoteId and generateId cannot be used together.");var n=BT(t,e);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),n=DT(n,e),n.length&&this.splitTile(n,0,0,0),r&&(n.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}Fu.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0};Fu.prototype.splitTile=function(t,e,r,n,i,o,a){for(var s=[t,e,r,n],u=this.options,l=u.debug;s.length;){n=s.pop(),r=s.pop(),e=s.pop(),t=s.pop();var f=1<<e,c=Tc(e,r,n),h=this.tiles[c];if(!h&&(l>1&&console.time("creation"),h=this.tiles[c]=FT(t,e,r,n,u),this.tileCoords.push({z:e,x:r,y:n}),l)){l>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,r,n,h.numFeatures,h.numPoints,h.numSimplified),console.timeEnd("creation"));var _="z"+e;this.stats[_]=(this.stats[_]||0)+1,this.total++}if(h.source=t,i){if(e===u.maxZoom||e===i)continue;var m=1<<i-e;if(r!==Math.floor(o/m)||n!==Math.floor(a/m))continue}else if(e===u.indexMaxZoom||h.numPoints<=u.indexMaxPoints)continue;if(h.source=null,t.length!==0){l>1&&console.time("clipping");var E=.5*u.buffer/u.extent,S=.5-E,M=.5+E,P=1+E,F,V,pe,ce,j,fe;F=V=pe=ce=null,j=On(t,f,r-E,r+M,0,h.minX,h.maxX,u),fe=On(t,f,r+S,r+P,0,h.minX,h.maxX,u),t=null,j&&(F=On(j,f,n-E,n+M,1,h.minY,h.maxY,u),V=On(j,f,n+S,n+P,1,h.minY,h.maxY,u),j=null),fe&&(pe=On(fe,f,n-E,n+M,1,h.minY,h.maxY,u),ce=On(fe,f,n+S,n+P,1,h.minY,h.maxY,u),fe=null),l>1&&console.timeEnd("clipping"),s.push(F||[],e+1,r*2,n*2),s.push(V||[],e+1,r*2,n*2+1),s.push(pe||[],e+1,r*2+1,n*2),s.push(ce||[],e+1,r*2+1,n*2+1)}}};Fu.prototype.getTile=function(t,e,r){var n=this.options,i=n.extent,o=n.debug;if(t<0||t>24)return null;var a=1<<t;e=(e%a+a)%a;var s=Tc(t,e,r);if(this.tiles[s])return ip(this.tiles[s],i);o>1&&console.log("drilling down to z%d-%d-%d",t,e,r);for(var u=t,l=e,f=r,c;!c&&u>0;)u--,l=Math.floor(l/2),f=Math.floor(f/2),c=this.tiles[Tc(u,l,f)];return!c||!c.source?null:(o>1&&console.log("found parent tile z%d-%d-%d",u,l,f),o>1&&console.time("drilling down"),this.splitTile(c.source,u,l,f,t,e,r),o>1&&console.timeEnd("drilling down"),this.tiles[s]?ip(this.tiles[s],i):null)};function Tc(t,e,r){return((1<<t)*r+e)*32+t}function zT(t,e){for(var r in e)t[r]=e[r];return t}var ga=class{constructor(e,r,n,i){this.vectorLayerCache={},this.x=r,this.y=n,this.z=i,this.vectorTile=e}getTileData(e){return!e||!this.vectorTile.layers[e]?[]:this.vectorLayerCache[e]?this.vectorLayerCache[e]:this.vectorTile.layers[e].features}getFeatureById(){throw new Error("Method not implemented.")}},VT=Object.defineProperty,WT=Object.defineProperties,HT=Object.getOwnPropertyDescriptors,ap=Object.getOwnPropertySymbols,XT=Object.prototype.hasOwnProperty,jT=Object.prototype.propertyIsEnumerable,sp=(t,e,r)=>e in t?VT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ou=(t,e)=>{for(var r in e||(e={}))XT.call(e,r)&&sp(t,r,e[r]);if(ap)for(var r of ap(e))jT.call(e,r)&&sp(t,r,e[r]);return t},GT=(t,e)=>WT(t,HT(e)),$T=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),YT={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0};function ZT(t){let e=0;for(let r=0,n=t.length,i=n-1,o,a;r<n;i=r++)o=t[r],a=t[i],e+=(a.x-o.x)*(o.y+a.y);return e}function KT(t){const e=t.length;if(e<=1)return[t];const r=[];let n,i;for(let o=0;o<e;o++){const a=ZT(t[o]);a!==0&&(i===void 0&&(i=a<0),i===a<0?(n&&r.push(n),n=[t[o]]):n.push(t[o]))}return n&&r.push(n),r}var qT=["Unknown","Point","LineString","Polygon"];function QT(t,e,r,n,i){let o=i.geometry;const a=i.type,s=i.tags,u=i.id,l=t*Math.pow(2,n),f=t*e,c=t*r;let h=qT[a],_,m;function E(M){for(let P=0;P<M.length;P++){const F=M[P];if(F[3])break;const V=180-(F[1]+c)*360/l,pe=(F[0]+f)*360/l-180,ce=360/Math.PI*Math.atan(Math.exp(V*Math.PI/180))-90;M[P]=[pe,ce,0,1]}}switch(a){case 1:const M=[];for(_=0;_<o.length;_++)M[_]=o[_][0];o=M,E(o);break;case 2:for(_=0;_<o.length;_++)E(o[_]);break;case 3:for(o=KT(o),_=0;_<o.length;_++)for(m=0;m<o[_].length;m++)E(o[_][m]);break}return o.length===1?o=o[0]:h="Multi"+h,{type:"Feature",geometry:{type:h,coordinates:o},properties:s,id:u,relativeOrigin:[0,0],coord:""}}var JT=(t,e,r,n)=>$T(void 0,null,function*(){return new Promise(i=>{const o=e.getTile(t.z,t.x,t.y),s={layers:{defaultLayer:{features:o?o.features.map(l=>QT(n,r.x,r.y,r.z,l)):[]}}},u=new ga(s,t.x,t.y,t.z);i(u)})});function eS(t){const e={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!0,debug:0};return t===void 0||typeof t.geojsonvtOptions>"u"?e:ou(ou({},e),t.geojsonvtOptions)}function tS(t,e){const r=eS(e),n=r.extent||4096,i=kT(t,r),o=(s,u)=>JT(u,i,s,n),a=GT(ou(ou({},YT),e),{getTileData:o});return{data:t,dataArray:[],tilesetOptions:a,isTile:!0}}var rS=Object.defineProperty,nS=Object.defineProperties,iS=Object.getOwnPropertyDescriptors,up=Object.getOwnPropertySymbols,oS=Object.prototype.hasOwnProperty,aS=Object.prototype.propertyIsEnumerable,lp=(t,e,r)=>e in t?rS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,cp=(t,e)=>{for(var r in e||(e={}))oS.call(e,r)&&lp(t,r,e[r]);if(up)for(var r of up(e))aS.call(e,r)&&lp(t,r,e[r]);return t},fp=(t,e)=>nS(t,iS(e));function Uv(t,e){const{extent:r=[121.168,30.2828,121.384,30.4219],coordinates:n,requestParameters:i={}}=e,o=new Promise(u=>{t instanceof HTMLImageElement||J1(t)?u([t]):sS(t,i,l=>{u(l)})}),a=Bo(n,r);return{originData:t,images:o,_id:1,dataArray:[{_id:0,coordinates:a}]}}function sS(t,e,r){const n=[];if(typeof t=="string")gc(fp(cp({},e),{url:t}),(i,o)=>{o&&(n.push(o),r(n))});else{const i=t.length;let o=0;t.forEach(a=>{gc(fp(cp({},e),{url:a}),(s,u)=>{o++,u&&n.push(u),o===i&&r(n)})})}return Uv}var uS=Object.defineProperty,lS=Object.defineProperties,cS=Object.getOwnPropertyDescriptors,hp=Object.getOwnPropertySymbols,fS=Object.prototype.hasOwnProperty,hS=Object.prototype.propertyIsEnumerable,dp=(t,e,r)=>e in t?uS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,kv=(t,e)=>{for(var r in e||(e={}))fS.call(e,r)&&dp(t,r,e[r]);if(hp)for(var r of hp(e))hS.call(e,r)&&dp(t,r,e[r]);return t},zv=(t,e)=>lS(t,cS(e)),dS=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),pS=(t,e,r,n)=>dS(void 0,null,function*(){const i={x:e.x,y:e.y,z:e.z},o=fo(t,i);return new Promise(a=>{n?n(i,(s,u)=>{if(s||!u){const l={layers:{defaultLayer:{features:[]}}},f=new ga(l,e.x,e.y,e.z);a(f)}else{const l={layers:{defaultLayer:{features:u.features}}},f=new ga(l,e.x,e.y,e.z);a(f)}}):YA(zv(kv({},r),{url:o}),(s,u)=>{if(s||!u){const l={layers:{defaultLayer:{features:[]}}},f=new ga(l,e.x,e.y,e.z);a(f)}else{const f={layers:{defaultLayer:{features:JSON.parse(u)}}},c=new ga(f,e.x,e.y,e.z);a(c)}})})});function _S(t,e){const r=(i,o)=>pS(t,o,e?.requestParameters,e.getCustomData),n=zv(kv({},e),{getTileData:r});return{dataArray:[],tilesetOptions:n,isTile:!0}}var mS=eA,vS=Eo;function Eo(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(gS,this,e)}function gS(t,e,r){t==1?e.id=r.readVarint():t==2?ES(r,e):t==3?e.type=r.readVarint():t==4&&(e._geometry=r.pos)}function ES(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i}}Eo.types=["Unknown","Point","LineString","Polygon"];Eo.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,o=0,a=[],s;t.pos<e;){if(n<=0){var u=t.readVarint();r=u&7,n=u>>3}if(n--,r===1||r===2)i+=t.readSVarint(),o+=t.readSVarint(),r===1&&(s&&a.push(s),s=[]),s.push(new mS(i,o));else if(r===7)s&&s.push(s[0].clone());else throw new Error("unknown command "+r)}return s&&a.push(s),a};Eo.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,o=0,a=1/0,s=-1/0,u=1/0,l=-1/0;t.pos<e;){if(n<=0){var f=t.readVarint();r=f&7,n=f>>3}if(n--,r===1||r===2)i+=t.readSVarint(),o+=t.readSVarint(),i<a&&(a=i),i>s&&(s=i),o<u&&(u=o),o>l&&(l=o);else if(r!==7)throw new Error("unknown command "+r)}return[a,u,s,l]};Eo.prototype.toGeoJSON=function(t,e,r){var n=this.extent*Math.pow(2,r),i=this.extent*t,o=this.extent*e,a=this.loadGeometry(),s=Eo.types[this.type],u,l;function f(_){for(var m=0;m<_.length;m++){var E=_[m],S=180-(E.y+o)*360/n;_[m]=[(E.x+i)*360/n-180,360/Math.PI*Math.atan(Math.exp(S*Math.PI/180))-90]}}switch(this.type){case 1:var c=[];for(u=0;u<a.length;u++)c[u]=a[u][0];a=c,f(a);break;case 2:for(u=0;u<a.length;u++)f(a[u]);break;case 3:for(a=yS(a),u=0;u<a.length;u++)for(l=0;l<a[u].length;l++)f(a[u][l]);break}a.length===1?a=a[0]:s="Multi"+s;var h={type:"Feature",geometry:{type:s,coordinates:a},properties:this.properties};return"id"in this&&(h.id=this.id),h};function yS(t){var e=t.length;if(e<=1)return[t];for(var r=[],n,i,o=0;o<e;o++){var a=AS(t[o]);a!==0&&(i===void 0&&(i=a<0),i===a<0?(n&&r.push(n),n=[t[o]]):n.push(t[o]))}return n&&r.push(n),r}function AS(t){for(var e=0,r=0,n=t.length,i=n-1,o,a;r<n;i=r++)o=t[r],a=t[i],e+=(a.x-o.x)*(o.y+a.y);return e}var TS=vS,SS=Vv;function Vv(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(xS,this,e),this.length=this._features.length}function xS(t,e,r){t===15?e.version=r.readVarint():t===1?e.name=r.readString():t===5?e.extent=r.readVarint():t===2?e._features.push(r.pos):t===3?e._keys.push(r.readString()):t===4&&e._values.push(RS(r))}function RS(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var n=t.readVarint()>>3;e=n===1?t.readString():n===2?t.readFloat():n===3?t.readDouble():n===4?t.readVarint64():n===5?t.readVarint():n===6?t.readSVarint():n===7?t.readBoolean():null}return e}Vv.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new TS(this._pbf,e,this.extent,this._keys,this._values)};var bS=SS,CS=OS;function OS(t,e){this.layers=t.readFields(IS,{},e)}function IS(t,e,r){if(t===3){var n=new bS(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n)}}var MS=CS,tf={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */tf.read=function(t,e,r,n,i){var o,a,s=i*8-n-1,u=(1<<s)-1,l=u>>1,f=-7,c=r?i-1:0,h=r?-1:1,_=t[e+c];for(c+=h,o=_&(1<<-f)-1,_>>=-f,f+=s;f>0;o=o*256+t[e+c],c+=h,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=n;f>0;a=a*256+t[e+c],c+=h,f-=8);if(o===0)o=1-l;else{if(o===u)return a?NaN:(_?-1:1)*(1/0);a=a+Math.pow(2,n),o=o-l}return(_?-1:1)*a*Math.pow(2,o-n)};tf.write=function(t,e,r,n,i,o){var a,s,u,l=o*8-i-1,f=(1<<l)-1,c=f>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:o-1,m=n?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(a++,u/=2),a+c>=f?(s=0,a=f):a+c>=1?(s=(e*u-1)*Math.pow(2,i),a=a+c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[r+_]=s&255,_+=m,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;t[r+_]=a&255,_+=m,a/=256,l-=8);t[r+_-m]|=E*128};var BS=Pt,As=tf;function Pt(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}Pt.Varint=0;Pt.Fixed64=1;Pt.Bytes=2;Pt.Fixed32=5;var Sc=65536*65536,pp=1/Sc,NS=12,Wv=typeof TextDecoder>"u"?null:new TextDecoder("utf-8");Pt.prototype={destroy:function(){this.buf=null},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,o=this.pos;this.type=n&7,t(i,e,this),this.pos===o&&this.skip(n)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Ts(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=mp(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Ts(this.buf,this.pos)+Ts(this.buf,this.pos+4)*Sc;return this.pos+=8,t},readSFixed64:function(){var t=Ts(this.buf,this.pos)+mp(this.buf,this.pos+4)*Sc;return this.pos+=8,t},readFloat:function(){var t=As.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=As.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e=this.buf,r,n;return n=e[this.pos++],r=n&127,n<128||(n=e[this.pos++],r|=(n&127)<<7,n<128)||(n=e[this.pos++],r|=(n&127)<<14,n<128)||(n=e[this.pos++],r|=(n&127)<<21,n<128)?r:(n=e[this.pos],r|=(n&15)<<28,PS(r,t,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2===1?(t+1)/-2:t/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=NS&&Wv?$S(this.buf,e,t):GS(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Pt.Bytes)return t.push(this.readVarint(e));var r=bn(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Pt.Bytes)return t.push(this.readSVarint());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Pt.Bytes)return t.push(this.readBoolean());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Pt.Bytes)return t.push(this.readFloat());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Pt.Bytes)return t.push(this.readDouble());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Pt.Bytes)return t.push(this.readFixed32());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Pt.Bytes)return t.push(this.readSFixed32());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Pt.Bytes)return t.push(this.readFixed64());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Pt.Bytes)return t.push(this.readSFixed64());var e=bn(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=t&7;if(e===Pt.Varint)for(;this.buf[this.pos++]>127;);else if(e===Pt.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Pt.Fixed32)this.pos+=4;else if(e===Pt.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+e)},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Gi(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),Gi(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),Gi(this.buf,t&-1,this.pos),Gi(this.buf,Math.floor(t*pp),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),Gi(this.buf,t&-1,this.pos),Gi(this.buf,Math.floor(t*pp),this.pos+4),this.pos+=8},writeVarint:function(t){if(t=+t||0,t>268435455||t<0){LS(t,this);return}this.realloc(4),this.buf[this.pos++]=t&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=t>>>7&127)))},writeSVarint:function(t){this.writeVarint(t<0?-t*2-1:t*2)},writeBoolean:function(t){this.writeVarint(!!t)},writeString:function(t){t=String(t),this.realloc(t.length*4),this.pos++;var e=this.pos;this.pos=YS(this.buf,t,this.pos);var r=this.pos-e;r>=128&&_p(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeFloat:function(t){this.realloc(4),As.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),As.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r]},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&_p(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n},writeMessage:function(t,e,r){this.writeTag(t,Pt.Bytes),this.writeRawMessage(e,r)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,wS,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,US,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,VS,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,kS,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,zS,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,WS,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,HS,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,XS,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,jS,e)},writeBytesField:function(t,e){this.writeTag(t,Pt.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,Pt.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,Pt.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,Pt.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,Pt.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,Pt.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,Pt.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,Pt.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,Pt.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,Pt.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,!!e)}};function PS(t,e,r){var n=r.buf,i,o;if(o=n[r.pos++],i=(o&112)>>4,o<128||(o=n[r.pos++],i|=(o&127)<<3,o<128)||(o=n[r.pos++],i|=(o&127)<<10,o<128)||(o=n[r.pos++],i|=(o&127)<<17,o<128)||(o=n[r.pos++],i|=(o&127)<<24,o<128)||(o=n[r.pos++],i|=(o&1)<<31,o<128))return ji(t,i,e);throw new Error("Expected varint not more than 10 bytes")}function bn(t){return t.type===Pt.Bytes?t.readVarint()+t.pos:t.pos+1}function ji(t,e,r){return r?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function LS(t,e){var r,n;if(t>=0?(r=t%4294967296|0,n=t/4294967296|0):(r=~(-t%4294967296),n=~(-t/4294967296),r^4294967295?r=r+1|0:(r=0,n=n+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),DS(r,n,e),FS(n,e)}function DS(t,e,r){r.buf[r.pos++]=t&127|128,t>>>=7,r.buf[r.pos++]=t&127|128,t>>>=7,r.buf[r.pos++]=t&127|128,t>>>=7,r.buf[r.pos++]=t&127|128,t>>>=7,r.buf[r.pos]=t&127}function FS(t,e){var r=(t&7)<<4;e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function _p(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i]}function wS(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r])}function US(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r])}function kS(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r])}function zS(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r])}function VS(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r])}function WS(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r])}function HS(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r])}function XS(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r])}function jS(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r])}function Ts(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+t[e+3]*16777216}function Gi(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24}function mp(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function GS(t,e,r){for(var n="",i=e;i<r;){var o=t[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s>r)break;var u,l,f;s===1?o<128&&(a=o):s===2?(u=t[i+1],(u&192)===128&&(a=(o&31)<<6|u&63,a<=127&&(a=null))):s===3?(u=t[i+1],l=t[i+2],(u&192)===128&&(l&192)===128&&(a=(o&15)<<12|(u&63)<<6|l&63,(a<=2047||a>=55296&&a<=57343)&&(a=null))):s===4&&(u=t[i+1],l=t[i+2],f=t[i+3],(u&192)===128&&(l&192)===128&&(f&192)===128&&(a=(o&15)<<18|(u&63)<<12|(l&63)<<6|f&63,(a<=65535||a>=1114112)&&(a=null))),a===null?(a=65533,s=1):a>65535&&(a-=65536,n+=String.fromCharCode(a>>>10&1023|55296),a=56320|a&1023),n+=String.fromCharCode(a),i+=s}return n}function $S(t,e,r){return Wv.decode(t.subarray(e,r))}function YS(t,e,r){for(var n=0,i,o;n<e.length;n++){if(i=e.charCodeAt(n),i>55295&&i<57344)if(o)if(i<56320){t[r++]=239,t[r++]=191,t[r++]=189,o=i;continue}else i=o-55296<<10|i-56320|65536,o=null;else{i>56319||n+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):o=i;continue}else o&&(t[r++]=239,t[r++]=191,t[r++]=189,o=null);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=i&63|128)}return r}const ZS=Io(BS);var KS=Object.defineProperty,qS=Object.defineProperties,QS=Object.getOwnPropertyDescriptors,vp=Object.getOwnPropertySymbols,JS=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,gp=(t,e,r)=>e in t?KS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ep=(t,e)=>{for(var r in e||(e={}))JS.call(e,r)&&gp(t,r,e[r]);if(vp)for(var r of vp(e))ex.call(e,r)&&gp(t,r,e[r]);return t},tx=(t,e)=>qS(t,QS(e)),yp=class{constructor(t,e,r,n){this.vectorLayerCache={},this.x=e,this.y=r,this.z=n,this.vectorTile=new MS(new ZS(t))}getTileData(t){if(!t||!this.vectorTile.layers[t])return[];if(this.vectorLayerCache[t])return this.vectorLayerCache[t];const e=this.vectorTile.layers[t];if(Array.isArray(e.features))return this.vectorLayerCache[t]=e.features,e.features;const r=[];for(let n=0;n<e.length;n++){const o=e.feature(n).toGeoJSON(this.x,this.y,this.z);r.push(tx(Ep({},o),{properties:Ep({id:o.id},o.properties)}))}return this.vectorLayerCache[t]=r,r}getFeatureById(){throw new Error("Method not implemented.")}},rx=Object.defineProperty,nx=Object.defineProperties,ix=Object.getOwnPropertyDescriptors,Ap=Object.getOwnPropertySymbols,ox=Object.prototype.hasOwnProperty,ax=Object.prototype.propertyIsEnumerable,Tp=(t,e,r)=>e in t?rx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,xc=(t,e)=>{for(var r in e||(e={}))ox.call(e,r)&&Tp(t,r,e[r]);if(Ap)for(var r of Ap(e))ax.call(e,r)&&Tp(t,r,e[r]);return t},Hv=(t,e)=>nx(t,ix(e)),sx=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),ux={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0},lx=(t,e,r,n,i)=>sx(void 0,null,function*(){const o=fo(t,e);return new Promise(a=>{if(i)i({x:r.x,y:r.y,z:r.z},(s,u)=>{if(s||!u)a(void 0);else{const l=new yp(u,r.x,r.y,r.z);a(l)}});else{const s=Qc(Hv(xc({},n),{url:o}),(u,l)=>{if(u||!l)a(void 0);else{const f=new yp(l,r.x,r.y,r.z);a(f)}});r.xhrCancel=()=>s.cancel()}})});function cx(t,e){const r=Array.isArray(t)?t[0]:t,n=(o,a)=>lx(r,o,a,e?.requestParameters,e?.getCustomData),i=Hv(xc(xc({},ux),e),{getTileData:n});return{data:r,dataArray:[],tilesetOptions:i,isTile:!0}}function fx(t,e,r){switch(t){case"+":return e+r;case"-":return e-r;case"*":return e*r;case"/":return e/r;case"%":return e%r;case"^":return Math.pow(e,r);case"abs":return Math.abs(e);case"floor":return Math.floor(e);case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"sin":return Math.sin(e);case"cos":return Math.cos(e);case"atan":return r===-1?Math.atan(e):Math.atan2(e,r);case"min":return Math.min(e,r);case"max":return Math.max(e,r);case"log10":return Math.log(e);case"log2":return Math.log2(e);default:return console.warn("Calculate symbol err! Return default 0"),0}}function xa(t,e){const{width:r,height:n}=e[0],i=e.map(u=>u.rasterData),o=r*n,a=[],s=JSON.stringify(t);for(let u=0;u<o;u++){const l=JSON.parse(s),f=Xv(l,i,u);if(typeof f=="number")a.push(f);else{const c=Rc(l);a.push(c)}}return a}function Xv(t,e,r){if(t.length===2&&t[0]==="band"&&typeof t[1]=="number")try{return e[t[1]][r]}catch{return console.warn("Raster Data err!"),0}t.map((n,i)=>{if(Array.isArray(n)&&n.length>0)switch(n[0]){case"band":try{t[i]=e[n[1]][r]}catch{console.warn("Raster Data err!"),t[i]=0}break;default:Xv(n,e,r)}})}function hx(t){const[e,r=-1,n=-1]=t;return e===void 0?(console.warn("Express err!"),["+",0,0]):[e.replace(/\s+/g,""),r,n]}function Rc(t){const e=hx(t),r=e[0];let n=e[1],i=e[2];return Array.isArray(n)&&(n=Rc(t[1])),Array.isArray(i)&&(i=Rc(t[2])),fx(r,n,i)}var dx={nd:{type:"operation",expression:["/",["-",["band",1],["band",0]],["+",["band",1],["band",0]]]},rgb:{type:"function",method:px}};function px(t,e){const r=t[0].rasterData,n=t[1].rasterData,i=t[2].rasterData,o=[],[a,s]=e?.countCut||[2,98],u=e?.RMinMax||ho(r,a,s),l=e?.GMinMax||ho(n,a,s),f=e?.BMinMax||ho(i,a,s);for(let c=0;c<r.length;c++)o.push(Math.max(0,r[c]-u[0])),o.push(Math.max(0,n[c]-l[0])),o.push(Math.max(0,i[c]-f[0]));return{rasterData:o,rMinMax:u,gMinMax:l,bMinMax:f}}function ho(t,e,r){const n=t.slice().sort((s,u)=>s-u),i=n.length,o=n[Math.ceil(i*e/100)],a=n[Math.ceil(i*r/100)];return[o,a]}var _x=Object.defineProperty,mx=Object.defineProperties,vx=Object.getOwnPropertyDescriptors,Sp=Object.getOwnPropertySymbols,gx=Object.prototype.hasOwnProperty,Ex=Object.prototype.propertyIsEnumerable,xp=(t,e,r)=>e in t?_x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,yx=(t,e)=>{for(var r in e||(e={}))gx.call(e,r)&&xp(t,r,e[r]);if(Sp)for(var r of Sp(e))Ex.call(e,r)&&xp(t,r,e[r]);return t},Ax=(t,e)=>mx(t,vx(e)),jv=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())});function rf(t,e,r){return jv(this,null,function*(){if(t.length===0)return{rasterData:[0],width:1,heigh:1};const n=yield Promise.all(t.map(({data:u,bands:l=[0]})=>e(u,l))),i=[];n.forEach(u=>{Array.isArray(u)?i.push(...u):i.push(u)});const{width:o,height:a}=i[0];let s;switch(typeof r){case"function":s=r(i);break;case"object":Array.isArray(r)?s={rasterData:xa(r,i)}:s=Tx(r,i);break;default:s={rasterData:i[0].rasterData}}return Ax(yx({},s),{width:o,height:a})})}function Tx(t,e){const r=dx[t.type];if(r.type==="function")return r.method(e,t?.options);if(r.type==="operation")return t.type==="rgb"?Sx(r.expression,e):{rasterData:xa(r.expression,e)}}function Sx(t,e){t.r===void 0&&console.warn("Channel R lost in Operation! Use band[0] to fill!"),t.g===void 0&&console.warn("Channel G lost in Operation! Use band[0] to fill!"),t.b===void 0&&console.warn("Channel B lost in Operation! Use band[0] to fill!");const r=xa(t.r||["band",0],e),n=xa(t.g||["band",0],e),i=xa(t.b||["band",0],e);return[r,n,i]}function bc(t,e,r,n){return jv(this,null,function*(){const i=yield rf(t,e,r);n(null,{data:i})})}function xx(t,e){const{extent:r=[121.168,30.2828,121.384,30.4219],coordinates:n,width:i,height:o,min:a,max:s,format:u,operation:l}=e;let f,c,h;if(u===void 0||Pv(t))f=Array.from(t),c=i,h=o;else{const E=Array.isArray(t)?t:[t];f=rf(E,u,l)}const _=Bo(n,r);return{_id:1,dataArray:[{_id:1,data:f,width:c,height:h,min:a,max:s,coordinates:_}]}}const li={ProjectionMatrix:"u_ProjectionMatrix",ViewMatrix:"u_ViewMatrix",ViewProjectionMatrix:"u_ViewProjectionMatrix",Zoom:"u_Zoom",ZoomScale:"u_ZoomScale",FocalDistance:"u_FocalDistance",CameraPosition:"u_CameraPosition"};var _r={MapInitStart:"mapInitStart",LayerInitStart:"layerInitStart",LayerInitEnd:"layerInitEnd",SourceInitStart:"sourceInitStart",SourceInitEnd:"sourceInitEnd",ScaleInitStart:"scaleInitStart",ScaleInitEnd:"scaleInitEnd",MappingStart:"mappingStart",MappingEnd:"mappingEnd",BuildModelStart:"buildModelStart",BuildModelEnd:"buildModelEnd"};let Lt=function(t){return t.LINEAR="linear",t.SEQUENTIAL="sequential",t.POWER="power",t.LOG="log",t.IDENTITY="identity",t.TIME="time",t.QUANTILE="quantile",t.QUANTIZE="quantize",t.THRESHOLD="threshold",t.CAT="cat",t.DIVERGING="diverging",t.CUSTOM="threshold",t}({}),$i=function(t){return t.CONSTANT="constant",t.VARIABLE="variable",t}({}),Be=function(t){return t[t.Attribute=0]="Attribute",t[t.InstancedAttribute=1]="InstancedAttribute",t[t.Uniform=2]="Uniform",t}({});const Ss=["loaded","fontloaded","maploaded","resize","destroy","dragstart","dragging","dragend","dragcancel"];let Sr=function(t){return t.IMAGE="image",t.CUSTOMIMAGE="customImage",t.ARRAYBUFFER="arraybuffer",t.RGB="rgb",t.TERRAINRGB="terrainRGB",t.CUSTOMRGB="customRGB",t.CUSTOMARRAYBUFFER="customArrayBuffer",t.CUSTOMTERRAINRGB="customTerrainRGB",t}({});var Gv=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),Rx=(t,e,r,n)=>Gv(void 0,null,function*(){return new Promise((i,o)=>{e({x:t.x,y:t.y,z:t.z},(a,s)=>{if(a||s.length===0){o(a);return}s&&bc([{data:s,bands:[0]}],r,n,(u,l)=>{u?o(u):l&&i(l)})})})}),bx=(t,e)=>Gv(void 0,null,function*(){return new Promise((r,n)=>{e({x:t.x,y:t.y,z:t.z},(i,o)=>{if(i||!o){n(i);return}o instanceof ArrayBuffer?ZA(o,(a,s)=>{a&&n(a),r(s)}):o instanceof HTMLImageElement?r(o):n(i)})})});function Cx(t,e){return Array.isArray(t)?typeof t[0]=="string"?t.map(r=>fo(r,e)):t.map(r=>({url:fo(r.url,e),bands:r.bands||[0]})):fo(t,e)}function Ox(t){return typeof t=="string"?[{url:t,bands:[0]}]:typeof t[0]=="string"?t.map(e=>({url:e,bands:[0]})):t}function Rp(t,e){t.xhrCancel=()=>{e.map(r=>{r.abort()})}}var Ix=Object.defineProperty,Mx=Object.defineProperties,Bx=Object.getOwnPropertyDescriptors,bp=Object.getOwnPropertySymbols,Nx=Object.prototype.hasOwnProperty,Px=Object.prototype.propertyIsEnumerable,Cp=(t,e,r)=>e in t?Ix(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Op=(t,e)=>{for(var r in e||(e={}))Nx.call(e,r)&&Cp(t,r,e[r]);if(bp)for(var r of bp(e))Px.call(e,r)&&Cp(t,r,e[r]);return t},Ip=(t,e)=>Mx(t,Bx(e)),$v=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),Lx=(t,e,r,n,i)=>$v(void 0,null,function*(){const o=Ox(e.url);if(o.length>1){const{rasterFiles:a,xhrList:s,errList:u}=yield Dx(o,e);if(Rp(t,s),u.length>0){r(u,null);return}bc(a,n,i,r)}else{const a=Qc(e,(s,u)=>{if(s)r(s);else if(u){const l=[{data:u,bands:o[0].bands}];bc(l,n,i,r)}});Rp(t,[a])}});function Dx(t,e){return $v(this,null,function*(){const r=[],n=[],i=[];for(let o=0;o<t.length;o++){const a=t[o],s=Ip(Op({},e),{url:a.url}),u=a.bands,{err:l,data:f,xhr:c}=yield GA(Ip(Op({},s),{type:"arrayBuffer"}));l&&i.push(l),n.push(c),r.push({data:f,bands:u})}return{rasterFiles:r,xhrList:n,errList:i}})}var Fx=Object.defineProperty,Ux=Object.defineProperties,kx=Object.getOwnPropertyDescriptors,Mp=Object.getOwnPropertySymbols,zx=Object.prototype.hasOwnProperty,Vx=Object.prototype.propertyIsEnumerable,Bp=(t,e,r)=>e in t?Fx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Gs=(t,e)=>{for(var r in e||(e={}))zx.call(e,r)&&Bp(t,r,e[r]);if(Mp)for(var r of Mp(e))Vx.call(e,r)&&Bp(t,r,e[r]);return t},Yv=(t,e)=>Ux(t,kx(e)),Zv=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),Wx=(t,e,r,n)=>Zv(void 0,null,function*(){const{format:i=Kv,operation:o,requestParameters:a={}}=n,s=Yv(Gs({},a),{url:Cx(t,e)});return new Promise((u,l)=>{Lx(r,s,(f,c)=>{f?l(f):c&&u(c)},i,o)})}),Np=(t,e,r,n)=>Zv(void 0,null,function*(){let i;const o=Array.isArray(t)?t[0]:t;return n.wmtsOptions?i=(n?.getURLFromTemplate||lT)(o,Gs(Gs({},e),n.wmtsOptions)):i=(n?.getURLFromTemplate||fo)(o,e),new Promise((a,s)=>{var u;const l=gc(Yv(Gs({},n?.requestParameters),{url:i,type:((u=n?.requestParameters)==null?void 0:u.type)||"arrayBuffer"}),(f,c)=>{f?s(f):c&&a(c)},n.transformResponse);r.xhrCancel=()=>l.cancel()})}),Kv=()=>({rasterData:new Uint8Array([0]),width:1,height:1}),Hx=Object.defineProperty,Xx=Object.defineProperties,jx=Object.getOwnPropertyDescriptors,Pp=Object.getOwnPropertySymbols,Gx=Object.prototype.hasOwnProperty,$x=Object.prototype.propertyIsEnumerable,Lp=(t,e,r)=>e in t?Hx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Dp=(t,e)=>{for(var r in e||(e={}))Gx.call(e,r)&&Lp(t,r,e[r]);if(Pp)for(var r of Pp(e))$x.call(e,r)&&Lp(t,r,e[r]);return t},Yx=(t,e)=>Xx(t,jx(e)),Zx={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0,warp:!0};Sr.ARRAYBUFFER,Sr.RGB;function Kx(t){return!!(Array.isArray(t)&&t.length===0||!Array.isArray(t)&&typeof t!="string")}function qx(t,e={}){if(Kx(t))throw new Error("tile server url is error");const{extent:r=[1/0,1/0,-1/0,-1/0],coordinates:n}=e;let i=e?.dataType||Sr.IMAGE;i===Sr.RGB&&(i=Sr.ARRAYBUFFER);const o=(u,l)=>{switch(i){case Sr.IMAGE:return Np(t,u,l,e);case Sr.CUSTOMIMAGE:case Sr.CUSTOMTERRAINRGB:return bx(l,e?.getCustomData);case Sr.ARRAYBUFFER:return Wx(t,u,l,e);case Sr.CUSTOMARRAYBUFFER:case Sr.CUSTOMRGB:return Rx(l,e?.getCustomData,e?.format||Kv,e?.operation);default:return Np(t,u,l,e)}},a=Yx(Dp(Dp({},Zx),e),{getTileData:o}),s=Bo(n,r);return{data:t,dataArray:[{_id:1,coordinates:s}],tilesetOptions:a,isTile:!0}}var Qx=Object.defineProperty,Jx=Object.defineProperties,eR=Object.getOwnPropertyDescriptors,au=Object.getOwnPropertySymbols,qv=Object.prototype.hasOwnProperty,Qv=Object.prototype.propertyIsEnumerable,Fp=(t,e,r)=>e in t?Qx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tR=(t,e)=>{for(var r in e||(e={}))qv.call(e,r)&&Fp(t,r,e[r]);if(au)for(var r of au(e))Qv.call(e,r)&&Fp(t,r,e[r]);return t},rR=(t,e)=>Jx(t,eR(e)),nR=(t,e)=>{var r={};for(var n in t)qv.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&au)for(var n of au(t))e.indexOf(n)<0&&Qv.call(t,n)&&(r[n]=t[n]);return r};function iR(t,e){const r=e,{extent:n=[121.168,30.2828,121.384,30.4219],coordinates:i,width:o,height:a}=r,s=nR(r,["extent","coordinates","width","height"]);t.length<2&&console.warn("RGB解析需要2个波段的数据");const[u,l]=s.bands||[0,1],f=[t[u],t[l]],c=[];for(let m=0;m<f[0].length;m++)c.push((f[1][m]-f[0][m])/(f[1][m]+f[0][m]));const h=Bo(i,n);return{_id:1,dataArray:[rR(tR({_id:1,data:c,width:o,height:a},s),{coordinates:h})]}}var oR=Object.defineProperty,aR=Object.defineProperties,sR=Object.getOwnPropertyDescriptors,su=Object.getOwnPropertySymbols,Jv=Object.prototype.hasOwnProperty,e0=Object.prototype.propertyIsEnumerable,wp=(t,e,r)=>e in t?oR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,uR=(t,e)=>{for(var r in e||(e={}))Jv.call(e,r)&&wp(t,r,e[r]);if(su)for(var r of su(e))e0.call(e,r)&&wp(t,r,e[r]);return t},lR=(t,e)=>aR(t,sR(e)),cR=(t,e)=>{var r={};for(var n in t)Jv.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&su)for(var n of su(t))e.indexOf(n)<0&&e0.call(t,n)&&(r[n]=t[n]);return r};function fR(t,e){const r=e,{extent:n,coordinates:i,width:o,height:a}=r,s=cR(r,["extent","coordinates","width","height"]);t.length<3&&console.warn("RGB解析需要三个波段的数据");const[u,l,f]=s.bands||[0,1,2],c=[t[u],t[l],t[f]],h=[],[_,m]=s?.countCut||[2,98],E=s?.RMinMax||ho(c[0],_,m),S=s?.GMinMax||ho(c[1],_,m),M=s?.BMinMax||ho(c[2],_,m);for(let V=0;V<c[0].length;V++)h.push(Math.max(0,c[0][V]-E[0])),h.push(Math.max(0,c[1][V]-S[0])),h.push(Math.max(0,c[2][V]-M[0]));const P=Bo(i,n);return{_id:1,dataArray:[lR(uR({_id:1,data:h,width:o,height:a,rMinMax:E,gMinMax:S,bMinMax:M},s),{coordinates:P})]}}var hR=Object.defineProperty,dR=Object.defineProperties,pR=Object.getOwnPropertyDescriptors,uu=Object.getOwnPropertySymbols,t0=Object.prototype.hasOwnProperty,r0=Object.prototype.propertyIsEnumerable,Up=(t,e,r)=>e in t?hR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_R=(t,e)=>{for(var r in e||(e={}))t0.call(e,r)&&Up(t,r,e[r]);if(uu)for(var r of uu(e))r0.call(e,r)&&Up(t,r,e[r]);return t},mR=(t,e)=>dR(t,pR(e)),vR=(t,e)=>{var r={};for(var n in t)t0.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&uu)for(var n of uu(t))e.indexOf(n)<0&&r0.call(t,n)&&(r[n]=t[n]);return r};function gR(t,e){const r=e,{extent:n,coordinates:i,min:o,max:a,width:s,height:u,format:l,operation:f}=r,c=vR(r,["extent","coordinates","min","max","width","height","format","operation"]);let h;if(l===void 0||Pv(t))h=Array.from(t);else{const E=Array.isArray(t)?t:[t];h=rf(E,l,f)}const _=Bo(i,n);return{_id:1,dataArray:[mR(_R({_id:1,data:h,width:s,height:u},c),{min:o,max:a,coordinates:_})]}}var ER=Object.defineProperty,yR=Object.defineProperties,AR=Object.getOwnPropertyDescriptors,kp=Object.getOwnPropertySymbols,TR=Object.prototype.hasOwnProperty,SR=Object.prototype.propertyIsEnumerable,zp=(t,e,r)=>e in t?ER(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Vp=(t,e)=>{for(var r in e||(e={}))TR.call(e,r)&&zp(t,r,e[r]);if(kp)for(var r of kp(e))SR.call(e,r)&&zp(t,r,e[r]);return t},xR=(t,e)=>yR(t,AR(e)),RR=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),bR={tileSize:256,minZoom:0,maxZoom:1/0,zoomOffset:0},CR=t=>RR(void 0,null,function*(){return new Promise(e=>{const[r,n,i,o]=t.bounds,a={layers:{testTile:{features:[{type:"Feature",properties:{key:t.x+"/"+t.y+"/"+t.z,x:(r+i)/2,y:(n+o)/2},geometry:{type:"LineString",coordinates:[[i,o],[i,n],[r,n],[r,n]]}}]}}};e(a)})});function OR(t,e){const r=i=>CR(i),n=xR(Vp(Vp({},bR),e),{getTileData:r});return{data:t,dataArray:[],tilesetOptions:n,isTile:!0}}var n0={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(vv,function(){function r(te,k,q,ne,xe,Fe){if(!(xe-ne<=q)){var $e=ne+xe>>1;n(te,k,$e,ne,xe,Fe%2),r(te,k,q,ne,$e-1,Fe+1),r(te,k,q,$e+1,xe,Fe+1)}}function n(te,k,q,ne,xe,Fe){for(;xe>ne;){if(xe-ne>600){var $e=xe-ne+1,qe=q-ne+1,ut=Math.log($e),He=.5*Math.exp(2*ut/3),Ye=.5*Math.sqrt(ut*He*($e-He)/$e)*(qe-$e/2<0?-1:1),pt=Math.max(ne,Math.floor(q-qe*He/$e+Ye)),St=Math.min(xe,Math.floor(q+($e-qe)*He/$e+Ye));n(te,k,q,pt,St,Fe)}var Ct=k[2*q+Fe],Nt=ne,_t=xe;for(i(te,k,ne,q),k[2*xe+Fe]>Ct&&i(te,k,ne,xe);Nt<_t;){for(i(te,k,Nt,_t),Nt++,_t--;k[2*Nt+Fe]<Ct;)Nt++;for(;k[2*_t+Fe]>Ct;)_t--}k[2*ne+Fe]===Ct?i(te,k,ne,_t):(_t++,i(te,k,_t,xe)),_t<=q&&(ne=_t+1),q<=_t&&(xe=_t-1)}}function i(te,k,q,ne){o(te,q,ne),o(k,2*q,2*ne),o(k,2*q+1,2*ne+1)}function o(te,k,q){var ne=te[k];te[k]=te[q],te[q]=ne}function a(te,k,q,ne,xe,Fe,$e){for(var qe=[0,te.length-1,0],ut=[],He,Ye;qe.length;){var pt=qe.pop(),St=qe.pop(),Ct=qe.pop();if(St-Ct<=$e){for(var Nt=Ct;Nt<=St;Nt++)He=k[2*Nt],Ye=k[2*Nt+1],He>=q&&He<=xe&&Ye>=ne&&Ye<=Fe&&ut.push(te[Nt]);continue}var _t=Math.floor((Ct+St)/2);He=k[2*_t],Ye=k[2*_t+1],He>=q&&He<=xe&&Ye>=ne&&Ye<=Fe&&ut.push(te[_t]);var Rr=(pt+1)%2;(pt===0?q<=He:ne<=Ye)&&(qe.push(Ct),qe.push(_t-1),qe.push(Rr)),(pt===0?xe>=He:Fe>=Ye)&&(qe.push(_t+1),qe.push(St),qe.push(Rr))}return ut}function s(te,k,q,ne,xe,Fe){for(var $e=[0,te.length-1,0],qe=[],ut=xe*xe;$e.length;){var He=$e.pop(),Ye=$e.pop(),pt=$e.pop();if(Ye-pt<=Fe){for(var St=pt;St<=Ye;St++)u(k[2*St],k[2*St+1],q,ne)<=ut&&qe.push(te[St]);continue}var Ct=Math.floor((pt+Ye)/2),Nt=k[2*Ct],_t=k[2*Ct+1];u(Nt,_t,q,ne)<=ut&&qe.push(te[Ct]);var Rr=(He+1)%2;(He===0?q-xe<=Nt:ne-xe<=_t)&&($e.push(pt),$e.push(Ct-1),$e.push(Rr)),(He===0?q+xe>=Nt:ne+xe>=_t)&&($e.push(Ct+1),$e.push(Ye),$e.push(Rr))}return qe}function u(te,k,q,ne){var xe=te-q,Fe=k-ne;return xe*xe+Fe*Fe}var l=function(te){return te[0]},f=function(te){return te[1]},c=function(k,q,ne,xe,Fe){q===void 0&&(q=l),ne===void 0&&(ne=f),xe===void 0&&(xe=64),Fe===void 0&&(Fe=Float64Array),this.nodeSize=xe,this.points=k;for(var $e=k.length<65536?Uint16Array:Uint32Array,qe=this.ids=new $e(k.length),ut=this.coords=new Fe(k.length*2),He=0;He<k.length;He++)qe[He]=He,ut[2*He]=q(k[He]),ut[2*He+1]=ne(k[He]);r(qe,ut,xe,0,qe.length-1,0)};c.prototype.range=function(k,q,ne,xe){return a(this.ids,this.coords,k,q,ne,xe,this.nodeSize)},c.prototype.within=function(k,q,ne){return s(this.ids,this.coords,k,q,ne,this.nodeSize)};var h={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(te){return te}},_=Math.fround||function(te){return function(k){return te[0]=+k,te[0]}}(new Float32Array(1)),m=function(k){this.options=j(Object.create(h),k),this.trees=new Array(this.options.maxZoom+1)};m.prototype.load=function(k){var q=this.options,ne=q.log,xe=q.minZoom,Fe=q.maxZoom,$e=q.nodeSize;ne&&console.time("total time");var qe="prepare "+k.length+" points";ne&&console.time(qe),this.points=k;for(var ut=[],He=0;He<k.length;He++)k[He].geometry&&ut.push(S(k[He],He));this.trees[Fe+1]=new c(ut,fe,ze,$e,Float32Array),ne&&console.timeEnd(qe);for(var Ye=Fe;Ye>=xe;Ye--){var pt=+Date.now();ut=this._cluster(ut,Ye),this.trees[Ye]=new c(ut,fe,ze,$e,Float32Array),ne&&console.log("z%d: %d clusters in %dms",Ye,ut.length,+Date.now()-pt)}return ne&&console.timeEnd("total time"),this},m.prototype.getClusters=function(k,q){var ne=((k[0]+180)%360+360)%360-180,xe=Math.max(-90,Math.min(90,k[1])),Fe=k[2]===180?180:((k[2]+180)%360+360)%360-180,$e=Math.max(-90,Math.min(90,k[3]));if(k[2]-k[0]>=360)ne=-180,Fe=180;else if(ne>Fe){var qe=this.getClusters([ne,xe,180,$e],q),ut=this.getClusters([-180,xe,Fe,$e],q);return qe.concat(ut)}for(var He=this.trees[this._limitZoom(q)],Ye=He.range(F(ne),V($e),F(Fe),V(xe)),pt=[],St=0,Ct=Ye;St<Ct.length;St+=1){var Nt=Ct[St],_t=He.points[Nt];pt.push(_t.numPoints?M(_t):this.points[_t.index])}return pt},m.prototype.getChildren=function(k){var q=this._getOriginId(k),ne=this._getOriginZoom(k),xe="No cluster with the specified id.",Fe=this.trees[ne];if(!Fe)throw new Error(xe);var $e=Fe.points[q];if(!$e)throw new Error(xe);for(var qe=this.options.radius/(this.options.extent*Math.pow(2,ne-1)),ut=Fe.within($e.x,$e.y,qe),He=[],Ye=0,pt=ut;Ye<pt.length;Ye+=1){var St=pt[Ye],Ct=Fe.points[St];Ct.parentId===k&&He.push(Ct.numPoints?M(Ct):this.points[Ct.index])}if(He.length===0)throw new Error(xe);return He},m.prototype.getLeaves=function(k,q,ne){q=q||10,ne=ne||0;var xe=[];return this._appendLeaves(xe,k,q,ne,0),xe},m.prototype.getTile=function(k,q,ne){var xe=this.trees[this._limitZoom(k)],Fe=Math.pow(2,k),$e=this.options,qe=$e.extent,ut=$e.radius,He=ut/qe,Ye=(ne-He)/Fe,pt=(ne+1+He)/Fe,St={features:[]};return this._addTileFeatures(xe.range((q-He)/Fe,Ye,(q+1+He)/Fe,pt),xe.points,q,ne,Fe,St),q===0&&this._addTileFeatures(xe.range(1-He/Fe,Ye,1,pt),xe.points,Fe,ne,Fe,St),q===Fe-1&&this._addTileFeatures(xe.range(0,Ye,He/Fe,pt),xe.points,-1,ne,Fe,St),St.features.length?St:null},m.prototype.getClusterExpansionZoom=function(k){for(var q=this._getOriginZoom(k)-1;q<=this.options.maxZoom;){var ne=this.getChildren(k);if(q++,ne.length!==1)break;k=ne[0].properties.cluster_id}return q},m.prototype._appendLeaves=function(k,q,ne,xe,Fe){for(var $e=this.getChildren(q),qe=0,ut=$e;qe<ut.length;qe+=1){var He=ut[qe],Ye=He.properties;if(Ye&&Ye.cluster?Fe+Ye.point_count<=xe?Fe+=Ye.point_count:Fe=this._appendLeaves(k,Ye.cluster_id,ne,xe,Fe):Fe<xe?Fe++:k.push(He),k.length===ne)break}return Fe},m.prototype._addTileFeatures=function(k,q,ne,xe,Fe,$e){for(var qe=0,ut=k;qe<ut.length;qe+=1){var He=ut[qe],Ye=q[He],pt=Ye.numPoints,St=void 0,Ct=void 0,Nt=void 0;if(pt)St=P(Ye),Ct=Ye.x,Nt=Ye.y;else{var _t=this.points[Ye.index];St=_t.properties,Ct=F(_t.geometry.coordinates[0]),Nt=V(_t.geometry.coordinates[1])}var Rr={type:1,geometry:[[Math.round(this.options.extent*(Ct*Fe-ne)),Math.round(this.options.extent*(Nt*Fe-xe))]],tags:St},Yr=void 0;pt?Yr=Ye.id:this.options.generateId?Yr=Ye.index:this.points[Ye.index].id&&(Yr=this.points[Ye.index].id),Yr!==void 0&&(Rr.id=Yr),$e.features.push(Rr)}},m.prototype._limitZoom=function(k){return Math.max(this.options.minZoom,Math.min(Math.floor(+k),this.options.maxZoom+1))},m.prototype._cluster=function(k,q){for(var ne=[],xe=this.options,Fe=xe.radius,$e=xe.extent,qe=xe.reduce,ut=xe.minPoints,He=Fe/($e*Math.pow(2,q)),Ye=0;Ye<k.length;Ye++){var pt=k[Ye];if(!(pt.zoom<=q)){pt.zoom=q;for(var St=this.trees[q+1],Ct=St.within(pt.x,pt.y,He),Nt=pt.numPoints||1,_t=Nt,Rr=0,Yr=Ct;Rr<Yr.length;Rr+=1){var No=Yr[Rr],je=St.points[No];je.zoom>q&&(_t+=je.numPoints||1)}if(_t>Nt&&_t>=ut){for(var vt=pt.x*Nt,xt=pt.y*Nt,Ce=qe&&Nt>1?this._map(pt,!0):null,tr=(Ye<<5)+(q+1)+this.points.length,Mt=0,cr=Ct;Mt<cr.length;Mt+=1){var mr=cr[Mt],yr=St.points[mr];if(!(yr.zoom<=q)){yr.zoom=q;var fr=yr.numPoints||1;vt+=yr.x*fr,xt+=yr.y*fr,yr.parentId=tr,qe&&(Ce||(Ce=this._map(pt,!0)),qe(Ce,this._map(yr)))}}pt.parentId=tr,ne.push(E(vt/_t,xt/_t,tr,_t,Ce))}else if(ne.push(pt),_t>1)for(var Ci=0,Qn=Ct;Ci<Qn.length;Ci+=1){var ju=Qn[Ci],Po=St.points[ju];Po.zoom<=q||(Po.zoom=q,ne.push(Po))}}}return ne},m.prototype._getOriginId=function(k){return k-this.points.length>>5},m.prototype._getOriginZoom=function(k){return(k-this.points.length)%32},m.prototype._map=function(k,q){if(k.numPoints)return q?j({},k.properties):k.properties;var ne=this.points[k.index].properties,xe=this.options.map(ne);return q&&xe===ne?j({},xe):xe};function E(te,k,q,ne,xe){return{x:_(te),y:_(k),zoom:1/0,id:q,parentId:-1,numPoints:ne,properties:xe}}function S(te,k){var q=te.geometry.coordinates,ne=q[0],xe=q[1];return{x:_(F(ne)),y:_(V(xe)),zoom:1/0,index:k,parentId:-1}}function M(te){return{type:"Feature",id:te.id,properties:P(te),geometry:{type:"Point",coordinates:[pe(te.x),ce(te.y)]}}}function P(te){var k=te.numPoints,q=k>=1e4?Math.round(k/1e3)+"k":k>=1e3?Math.round(k/100)/10+"k":k;return j(j({},te.properties),{cluster:!0,cluster_id:te.id,point_count:k,point_count_abbreviated:q})}function F(te){return te/360+.5}function V(te){var k=Math.sin(te*Math.PI/180),q=.5-.25*Math.log((1+k)/(1-k))/Math.PI;return q<0?0:q>1?1:q}function pe(te){return(te-.5)*360}function ce(te){var k=(180-te*360)*Math.PI/180;return 360*Math.atan(Math.exp(k))/Math.PI-90}function j(te,k){for(var q in k)te[q]=k[q];return te}function fe(te){return te.x}function ze(te){return te.y}return m})})(n0);var IR=n0.exports;const i0=Io(IR);var MR=Object.defineProperty,Wp=Object.getOwnPropertySymbols,BR=Object.prototype.hasOwnProperty,NR=Object.prototype.propertyIsEnumerable,Hp=(t,e,r)=>e in t?MR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o0=(t,e)=>{for(var r in e||(e={}))BR.call(e,r)&&Hp(t,r,e[r]);if(Wp)for(var r of Wp(e))NR.call(e,r)&&Hp(t,r,e[r]);return t};function a0(t,e){const{radius:r=40,maxZoom:n=18,minZoom:i=0,zoom:o=2}=e;if(t.pointIndex){const u=t.pointIndex.getClusters(t.extent,Math.floor(o));return t.dataArray=PR(u),t}const a=new i0({radius:r,minZoom:i,maxZoom:n}),s={features:[]};return s.features=t.dataArray.map(u=>({type:"Feature",geometry:{type:"Point",coordinates:u.coordinates},properties:o0({},u)})),a.load(s.features),a}function PR(t){return t.map((e,r)=>o0({coordinates:e.geometry.coordinates,_id:r+1},e.properties))}function LR(t){if(t.length===0)throw new Error("max requires at least one data point");let e=t[0];for(let r=1;r<t.length;r++)t[r]>e&&(e=t[r]);return e}function DR(t){if(t.length===0)throw new Error("min requires at least one data point");let e=t[0];for(let r=1;r<t.length;r++)t[r]<e&&(e=t[r]);return e}function s0(t){if(t.length===0)return 0;let e=t[0],r=0,n;for(let i=1;i<t.length;i++)n=e+t[i]*1,Math.abs(e)>=Math.abs(t[i])?r+=e-n+t[i]:r+=t[i]-n+e,e=n;return e+r*1}function FR(t){if(t.length===0)throw new Error("mean requires at least one data point");return s0(t)/t.length}var wR={min:DR,max:LR,mean:FR,sum:s0},UR=Object.defineProperty,Xp=Object.getOwnPropertySymbols,kR=Object.prototype.hasOwnProperty,zR=Object.prototype.propertyIsEnumerable,jp=(t,e,r)=>e in t?UR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Jo=(t,e)=>{for(var r in e||(e={}))kR.call(e,r)&&jp(t,r,e[r]);if(Xp)for(var r of Xp(e))zR.call(e,r)&&jp(t,r,e[r]);return t},Gp=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),{cloneDeep:VR,isFunction:$p,isString:WR,mergeWith:HR}=Mr;function XR(t,e){if(Array.isArray(e))return e}var jR=class extends Kn.EventEmitter{constructor(t,e){super(),this.type="source",this.isTile=!1,this.inited=!1,this.hooks={init:new En},this.parser={type:"geojson"},this.transforms=[],this.cluster=!1,this.clusterOptions={enable:!1,radius:40,maxZoom:20,zoom:-99,method:"count"},this.invalidExtent=!1,this.dataArrayChanged=!1,this.cfg={autoRender:!0},this.originData=t,this.initCfg(e),this.init().then(()=>{this.inited=!0,this.emit("update",{type:"inited"})})}getSourceCfg(){return this.cfg}getClusters(t){return this.clusterIndex.getClusters(this.caculClusterExtent(2),t)}getClustersLeaves(t){return this.clusterIndex.getLeaves(t,1/0)}getParserType(){return this.parser.type}updateClusterData(t){const{method:e="sum",field:r}=this.clusterOptions;let n=this.clusterIndex.getClusters(this.caculClusterExtent(2),Math.floor(t));this.clusterOptions.zoom=t,n.forEach(i=>{i.id||(i.properties.point_count=1)}),(r||$p(e))&&(n=n.map(i=>{const o=i.id;if(o){const s=this.clusterIndex.getLeaves(o,1/0).map(l=>l.properties);let u;if(WR(e)&&r){const l=hT(s,r);u=wR[e](l)}$p(e)&&(u=e(s)),i.properties.stat=u}else i.properties.point_count=1;return i})),this.data=Pd("geojson")({type:"FeatureCollection",features:n}),this.executeTrans()}getFeatureById(t){const{type:e="geojson",geometry:r}=this.parser;if(e==="geojson"&&!this.cluster){const n=t<this.originData.features.length?this.originData.features[t]:"null",i=VR(n);if(i?.properties&&(this.transforms.length!==0||this.dataArrayChanged)){const o=this.data.dataArray.find(a=>a._id===t);i.properties=o}return i}else return e==="json"&&r?this.data.dataArray.find(n=>n._id===t):t<this.data.dataArray.length?this.data.dataArray[t]:"null"}updateFeaturePropertiesById(t,e){this.data.dataArray=this.data.dataArray.map(r=>r._id===t?Jo(Jo({},r),e):r),this.dataArrayChanged=!0,this.emit("update",{type:"update"})}getFeatureId(t,e){const r=this.data.dataArray.find(n=>n[t]===e);return r?._id}setData(t,e){this.originData=t,this.dataArrayChanged=!1,this.initCfg(e),this.init().then(()=>{this.emit("update",{type:"update"})})}reloadAllTile(){var t;(t=this.tileset)==null||t.reloadAll()}reloadTilebyId(t,e,r){var n;(n=this.tileset)==null||n.reloadTileById(t,e,r)}reloadTileByLnglat(t,e,r){var n;(n=this.tileset)==null||n.reloadTileByLnglat(t,e,r)}getTileExtent(t,e){var r;return(r=this.tileset)==null?void 0:r.getTileExtent(t,e)}getTileByZXY(t,e,r){var n;return(n=this.tileset)==null?void 0:n.getTileByZXY(t,e,r)}reloadTileByExtent(t,e){var r;(r=this.tileset)==null||r.reloadTileByExtent(t,e)}destroy(){var t;this.removeAllListeners(),this.originData=null,this.clusterIndex=null,this.data=null,(t=this.tileset)==null||t.destroy()}processData(){return Gp(this,null,function*(){return new Promise((t,e)=>{try{this.excuteParser(),this.initCluster(),this.executeTrans(),t({})}catch(r){e(r)}})})}initCfg(t){this.cfg=HR(this.cfg,t,XR);const e=this.cfg;e&&(e.parser&&(this.parser=e.parser),e.transforms&&(this.transforms=e.transforms),this.cluster=e.cluster||!1,e.clusterOptions&&(this.cluster=!0,this.clusterOptions=Jo(Jo({},this.clusterOptions),e.clusterOptions)))}init(){return Gp(this,null,function*(){this.inited=!1,yield this.processData(),this.inited=!0})}excuteParser(){const t=this.parser,e=t.type||"geojson",r=Pd(e);this.data=r(this.originData,t),this.tileset=this.initTileset(),!t.cancelExtent&&(this.extent=tA(this.data.dataArray),this.setCenter(this.extent),this.invalidExtent=this.extent[0]===this.extent[2]||this.extent[1]===this.extent[3])}setCenter(t){this.center=[(t[0]+t[2])/2,(t[1]+t[3])/2],(isNaN(this.center[0])||isNaN(this.center[1]))&&(this.center=[108.92361111111111,34.54083333333333])}initTileset(){const{tilesetOptions:t}=this.data;return t?(this.isTile=!0,this.tileset?(this.tileset.updateOptions(t),this.tileset):new rA(Jo({},t))):void 0}executeTrans(){this.transforms.forEach(e=>{const{type:r}=e,n=PA(r)(this.data,e);Object.assign(this.data,n)})}initCluster(){if(!this.cluster)return;const t=this.clusterOptions||{};this.clusterIndex=a0(this.data,t)}caculClusterExtent(t){let e=[[-1/0,-1/0],[1/0,1/0]];return this.invalidExtent||(e=Js(nA(this.extent),t)),e[0].concat(e[1])}};function GR(t,e){const{callback:r}=e;return r&&(t.dataArray=t.dataArray.filter(r)),t}var nf=6378e3;function $R(t,e){const r=t.dataArray,{size:n=10}=e,i=n/(2*Math.PI*nf)*(256<<20)/2,{gridHash:o,gridOffset:a}=YR(r,n),s=QR(o,a,e);return{yOffset:i,xOffset:i,radius:i,type:"grid",dataArray:s}}function YR(t,e){let r=1/0,n=-1/0,i;for(const u of t)i=u.coordinates[1],Number.isFinite(i)&&(r=i<r?i:r,n=i>n?i:n);const o=(r+n)/2,a=ZR(e,o);if(a.xOffset<=0||a.yOffset<=0)return{gridHash:{},gridOffset:a};const s={};for(const u of t){const l=u.coordinates[1],f=u.coordinates[0];if(Number.isFinite(l)&&Number.isFinite(f)){const c=Math.floor((l+90)/a.yOffset),h=Math.floor((f+180)/a.xOffset),_=`${c}-${h}`;s[_]=s[_]||{count:0,points:[]},s[_].count+=1,s[_].points.push(u)}}return{gridHash:s,gridOffset:a}}function ZR(t,e){const r=KR(t),n=qR(e,t);return{yOffset:r,xOffset:n}}function KR(t){return t/nf*(180/Math.PI)}function qR(t,e){return e/nf*(180/Math.PI)/Math.cos(t*Math.PI/180)}function QR(t,e,r){return Object.keys(t).reduce((n,i,o)=>{const a=i.split("-"),s=parseInt(a[0],10),u=parseInt(a[1],10),l={};if(r.field&&r.method){const f=Du(t[i].points,r.field);l[r.method]=Lu[r.method](f)}return Object.assign(l,{_id:o,coordinates:en([-180+e.xOffset*(u+.5),-90+e.yOffset*(s+.5)]),rawData:t[i].points,count:t[i].count}),n.push(l),n},[])}var to=Math.PI/3,JR=[0,to,2*to,3*to,4*to,5*to];function eb(t){return t[0]}function tb(t){return t[1]}function rb(){var t=0,e=0,r=1,n=1,i=eb,o=tb,a,s,u;function l(c){var h={},_=[],m,E=c.length;for(m=0;m<E;++m)if(!(isNaN(M=+i.call(null,S=c[m],m,c))||isNaN(P=+o.call(null,S,m,c)))){var S,M,P,F=Math.round(P=P/u),V=Math.round(M=M/s-(F&1)/2),pe=P-F;if(Math.abs(pe)*3>1){var ce=M-V,j=V+(M<V?-1:1)/2,fe=F+(P<F?-1:1),ze=M-j,te=P-fe;ce*ce+pe*pe>ze*ze+te*te&&(V=j+(F&1?1:-1)/2,F=fe)}var k=V+"-"+F,q=h[k];q?q.push(S):(_.push(q=h[k]=[S]),q.x=(V+(F&1)/2)*s,q.y=F*u)}return _}function f(c){var h=0,_=0;return JR.map(function(m){var E=Math.sin(m)*c,S=-Math.cos(m)*c,M=E-h,P=S-_;return h=E,_=S,[M,P]})}return l.hexagon=function(c){return"m"+f(c==null?a:+c).join("l")+"z"},l.centers=function(){for(var c=[],h=Math.round(e/u),_=Math.round(t/s),m=h*u;m<n+a;m+=u,++h)for(var E=_*s+(h&1)*s/2;E<r+s/2;E+=s)c.push([E,m]);return c},l.mesh=function(){var c=f(a).slice(0,4).join("l");return l.centers().map(function(h){return"M"+h+"m"+c}).join("")},l.x=function(c){return arguments.length?(i=c,l):i},l.y=function(c){return arguments.length?(o=c,l):o},l.radius=function(c){return arguments.length?(a=+c,s=a*2*Math.sin(to),u=a*1.5,l):a},l.size=function(c){return arguments.length?(t=e=0,r=+c[0],n=+c[1],l):[r-t,n-e]},l.extent=function(c){return arguments.length?(t=+c[0][0],e=+c[0][1],r=+c[1][0],n=+c[1][1],l):[[t,e],[r,n]]},l.radius(1)}var nb=Object.defineProperty,ib=Object.defineProperties,ob=Object.getOwnPropertyDescriptors,Yp=Object.getOwnPropertySymbols,ab=Object.prototype.hasOwnProperty,sb=Object.prototype.propertyIsEnumerable,Zp=(t,e,r)=>e in t?nb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ub=(t,e)=>{for(var r in e||(e={}))ab.call(e,r)&&Zp(t,r,e[r]);if(Yp)for(var r of Yp(e))sb.call(e,r)&&Zp(t,r,e[r]);return t},lb=(t,e)=>ib(t,ob(e)),cb=6378e3;function fb(t,e){const r=t.dataArray,{size:n=10,method:i="sum"}=e,o=n/(2*Math.PI*cb)*(256<<20)/2,a=r.map(f=>{const[c,h]=en(f.coordinates);return lb(ub({},f),{coordinates:[c,h]})});return{dataArray:rb().radius(o).x(f=>f.coordinates[0]).y(f=>f.coordinates[1])(a).map((f,c)=>{if(e.field&&i){const h=Du(f,e.field);f[i]=Lu[i](h)}return{[e.method]:f[i],count:f.length,rawData:f,coordinates:[f.x,f.y],_id:c}}),radius:o,xOffset:o,yOffset:o,type:"hexagon"}}var hb=Object.defineProperty,Kp=Object.getOwnPropertySymbols,db=Object.prototype.hasOwnProperty,pb=Object.prototype.propertyIsEnumerable,qp=(t,e,r)=>e in t?hb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Qp=(t,e)=>{for(var r in e||(e={}))db.call(e,r)&&qp(t,r,e[r]);if(Kp)for(var r of Kp(e))pb.call(e,r)&&qp(t,r,e[r]);return t};function _b(t,e){const{sourceField:r,targetField:n,data:i}=e,o={};return i.forEach(a=>{o[a[r]]=a}),t.dataArray=t.dataArray.map(a=>{const s=a[n];return Qp(Qp({},a),o[s])}),t}function mb(t,e){const{callback:r}=e;return r&&(t.dataArray=t.dataArray.map(r)),t}var vb=Object.defineProperty,gb=Object.defineProperties,Eb=Object.getOwnPropertyDescriptors,Jp=Object.getOwnPropertySymbols,yb=Object.prototype.hasOwnProperty,Ab=Object.prototype.propertyIsEnumerable,e_=(t,e,r)=>e in t?vb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Tb=(t,e)=>{for(var r in e||(e={}))yb.call(e,r)&&e_(t,r,e[r]);if(Jp)for(var r of Jp(e))Ab.call(e,r)&&e_(t,r,e[r]);return t},Sb=(t,e)=>gb(t,Eb(e));function xb(t){let e=1/0,r=-1/0,n=1/0,i=-1/0;t.forEach(s=>{const u=s.coordinates;if(!u)return;const l=f=>{if(typeof f[0]=="number"&&typeof f[1]=="number"){const[c,h]=f;e=Math.min(e,c),r=Math.max(r,c),n=Math.min(n,h),i=Math.max(i,h)}else Array.isArray(f[0])&&f.forEach(l)};l(u)});const o=(e+r)/2,a=(n+i)/2;return[o,a]}function Rb(t,e){const[r,n]=e;return t.map(i=>{if(!i.coordinates)return i;const o=a=>{if(typeof a[0]=="number"&&typeof a[1]=="number"){const s=Number((a[0]-r).toPrecision(15)),u=Number((a[1]-n).toPrecision(15));return[s,u,...a.slice(2)||[]]}else if(Array.isArray(a[0]))return a.map(o);return a};return Sb(Tb({},i),{coordinates:o(i.coordinates)})})}function bb(t,e={}){const{enableRelativeCoordinates:r=!1,relativeOrigin:n}=e;if(!r)return{dataArray:t,relativeOrigin:[0,0],originalExtent:[0,0,0,0]};let i=1/0,o=-1/0,a=1/0,s=-1/0;t.forEach(c=>{const h=c.coordinates;if(!h)return;const _=m=>{if(typeof m[0]=="number"&&typeof m[1]=="number"){const[E,S]=m;i=Math.min(i,E),o=Math.max(o,E),a=Math.min(a,S),s=Math.max(s,S)}else Array.isArray(m[0])&&m.forEach(_)};_(h)});const u=[i,a,o,s],l=n||xb(t);return{dataArray:Rb(t,l),relativeOrigin:l,originalExtent:u}}Gr("rasterTile",qx);Gr("mvt",cx);Gr("geojsonvt",tS);Gr("testTile",OR);Gr("geojson",OT);Gr("jsonTile",_S);Gr("image",Uv);Gr("csv",gT);Gr("json",Lv);Gr("raster",xx);Gr("rasterRgb",gR);Gr("rgb",fR);Gr("ndi",iR);Mo("cluster",a0);Mo("filter",GR);Mo("join",_b);Mo("map",mb);Mo("grid",$R);Mo("hexagon",fb);var Cb=jR;class Ob extends Kn.EventEmitter{getMarkerLayerContainerSize(){}constructor(e){super(),v(this,"markerOption",void 0),v(this,"popup",void 0),v(this,"mapsService",void 0),v(this,"lngLat",void 0),v(this,"scene",void 0),v(this,"added",!1),v(this,"preLngLat",{lng:0,lat:0}),v(this,"onMarkerDragStart",r=>{const n=this.mapsService.getContainer();if(!n)return;this.mapsService.setMapStatus({dragEnable:!1,zoomEnable:!1});const{left:i,top:o}=n.getClientRects()[0],{x:a,y:s}=r;this.preLngLat=this.mapsService.containerToLngLat([a-i,s-o]),this.mapsService.on("mousemove",this.onMarkerDragMove),document.addEventListener("mouseup",this.onMarkerDragEnd),this.emit("dragstart",this.lngLat)}),v(this,"onMarkerDragMove",r=>{const n=r.lngLat||r.lnglat,{lng:i,lat:o}=this.preLngLat,{lng:a,lat:s}=n,u={lng:this.lngLat.lng+a-i,lat:this.lngLat.lat+s-o};this.setLnglat(u),this.preLngLat=n,this.emit("dragging",u)}),v(this,"onMarkerDragEnd",()=>{this.mapsService.setMapStatus({dragEnable:!0,zoomEnable:!0}),this.mapsService.off("mousemove",this.onMarkerDragMove),document.removeEventListener("mouseup",this.onMarkerDragEnd),this.emit("dragend",this.lngLat)}),v(this,"eventHandle",r=>{this.polyfillEvent(r),this.emit(r.type,{target:r,data:this.markerOption.extData,lngLat:this.lngLat})}),v(this,"touchStartTime",void 0),this.markerOption=le(le({},this.getDefault()),e),bv(["update","onMove","onMapClick","updatePositionWhenZoom"],this),this.init()}getDefault(){return{element:void 0,anchor:Jc.BOTTOM,offsets:[0,0],color:"#5B8FF9",draggable:!1,overflowHide:!0}}addTo(e){this.scene=e,this.mapsService=e.mapService;const{element:r}=this.markerOption;return this.mapsService.getMarkerContainer().appendChild(r),this.registerMarkerEvent(r),this.mapsService.on("camerachange",this.update),this.update(),this.updateDraggable(),this.added=!0,this.emit("added"),this}remove(){this.mapsService&&(this.mapsService.off("click",this.onMapClick),this.mapsService.off("move",this.update),this.mapsService.off("moveend",this.update),this.mapsService.off("camerachange",this.update)),this.unRegisterMarkerEvent(),this.removeAllListeners();const{element:e}=this.markerOption;return e&&cn(e),this.popup&&this.popup.remove(),this}setLnglat(e){return this.lngLat=e,Array.isArray(e)&&(this.lngLat={lng:e[0],lat:e[1]}),this.popup&&this.popup.setLnglat(this.lngLat),this.update(),this}getLnglat(){return this.lngLat}getElement(){return this.markerOption.element}setElement(e){if(!this.added)return this.once("added",()=>{this.setElement(e)}),this;const{element:r}=this.markerOption;return r&&cn(r),this.markerOption.element=e,this.init(),this.mapsService.getMarkerContainer().appendChild(e),this.registerMarkerEvent(e),this.updateDraggable(),this.update(),this}openPopup(){if(!this.added)return this.once("added",()=>{this.openPopup()}),this;const e=this.popup;return e?(e.isOpen()||e.addTo(this.scene),this):this}closePopup(){this.added||this.once("added",()=>{this.closePopup()});const e=this.popup;return e&&e.remove(),this}setPopup(e){return this.popup=e,this.lngLat&&this.popup.setLnglat(this.lngLat),this}togglePopup(){const e=this.popup;if(e)e.isOpen()?e.remove():e.addTo(this.scene);else return this;return this}getPopup(){return this.popup}getOffset(){return this.markerOption.offsets}setDraggable(e){this.markerOption.draggable=e,this.updateDraggable()}getDraggable(){return this.markerOption.draggable}getExtData(){return this.markerOption.extData}setExtData(e){this.markerOption.extData=e}update(){if(!this.mapsService)return;const{element:e,anchor:r}=this.markerOption;this.updatePosition(),sv(e,`${iu[r]}`)}updatePositionWhenZoom(e){if(!this.mapsService)return;const{element:r,offsets:n}=this.markerOption,{lng:i,lat:o}=this.lngLat;if(r){r.style.display="block",r.style.whiteSpace="nowrap";const{containerHeight:a,containerWidth:s,bounds:u}=this.getMarkerLayerContainerSize()||this.getCurrentContainerSize();if(!u)return;const l=e.map,f=e.center,c=e.zoom,h=l.DE(this.lngLat,c,f);if(h.x=Math.round(h.x+n[0]),h.y=Math.round(h.y-n[1]),Math.abs(u[0][0])>180||Math.abs(u[1][0])>180){if(h.x>s){const _=this.mapsService.lngLatToContainer([i-360,o]);h.x=_.x}if(h.x<0){const _=this.mapsService.lngLatToContainer([i+360,o]);h.x=_.x}}(h.x>s||h.x<0||h.y>a||h.y<0)&&(r.style.display="none"),r.style.left=h.x+"px",r.style.top=h.y+"px",r.style.transition="left 0.25s cubic-bezier(0,0,0.25,1), top 0.25s cubic-bezier(0,0,0.25,1)"}}onMapClick(e){const{element:r}=this.markerOption;this.popup&&r&&this.togglePopup()}getCurrentContainerSize(){const e=this.mapsService.getContainer();return{containerHeight:e?.scrollHeight||0,containerWidth:e?.scrollWidth||0,bounds:this.mapsService.getBounds()}}updateDraggable(){const{element:e}=this.markerOption;e?.removeEventListener("mousedown",this.onMarkerDragStart),this.mapsService.off("mousemove",this.onMarkerDragMove),document.removeEventListener("mouseup",this.onMarkerDragEnd),this.markerOption.draggable&&e?.addEventListener("mousedown",this.onMarkerDragStart)}updatePosition(){if(!this.mapsService)return;const{element:e,offsets:r}=this.markerOption,{lng:n,lat:i}=this.lngLat,o=this.mapsService.lngLatToContainer([n,i]);if(e){e.style.display="block",e.style.whiteSpace="nowrap";const{containerHeight:a,containerWidth:s,bounds:u}=this.getMarkerLayerContainerSize()||this.getCurrentContainerSize();if(!u)return;if(Math.abs(u[0][0])>180||Math.abs(u[1][0])>180){if(o.x>s){const l=this.mapsService.lngLatToContainer([n-360,i]);o.x=l.x}if(o.x<0){const l=this.mapsService.lngLatToContainer([n+360,i]);o.x=l.x}}this.markerOption.overflowHide&&(o.x>s||o.x<0||o.y>a||o.y<0)&&(e.style.display="none"),e.style.left=o.x+r[0]+"px",e.style.top=o.y-r[1]+"px"}}init(){let{element:e}=this.markerOption;const{color:r,anchor:n}=this.markerOption;if(!e){e=yt("div"),this.markerOption.element=e;const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS(null,"display","block"),i.setAttributeNS(null,"height","48px"),i.setAttributeNS(null,"width","48px"),i.setAttributeNS(null,"viewBox","0 0 1024 1024");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttributeNS(null,"d","M512 490.666667C453.12 490.666667 405.333333 442.88 405.333333 384 405.333333 325.12 453.12 277.333333 512 277.333333 570.88 277.333333 618.666667 325.12 618.666667 384 618.666667 442.88 570.88 490.666667 512 490.666667M512 85.333333C346.88 85.333333 213.333333 218.88 213.333333 384 213.333333 608 512 938.666667 512 938.666667 512 938.666667 810.666667 608 810.666667 384 810.666667 218.88 677.12 85.333333 512 85.333333Z"),o.setAttributeNS(null,"fill",r),i.appendChild(o),e.appendChild(i)}dn(e,"l7-marker"),Object.keys(this.markerOption.style||{}).forEach(i=>{var o,a;const s=((o=this.markerOption)===null||o===void 0?void 0:o.style)&&((a=this.markerOption)===null||a===void 0?void 0:a.style[i]);e&&(e.style[i]=s)}),Rv(e,n,"marker")}registerMarkerEvent(e){e.addEventListener("click",this.onMapClick),e.addEventListener("mousemove",this.eventHandle),e.addEventListener("click",this.eventHandle),e.addEventListener("mousedown",this.eventHandle),e.addEventListener("mouseup",this.eventHandle),e.addEventListener("dblclick",this.eventHandle),e.addEventListener("contextmenu",this.eventHandle),e.addEventListener("mouseover",this.eventHandle),e.addEventListener("mouseout",this.eventHandle),e.addEventListener("touchstart",this.eventHandle),e.addEventListener("touchend",this.eventHandle)}unRegisterMarkerEvent(){const e=this.getElement();e.removeEventListener("click",this.onMapClick),e.removeEventListener("mousemove",this.eventHandle),e.removeEventListener("click",this.eventHandle),e.removeEventListener("mousedown",this.eventHandle),e.removeEventListener("mouseup",this.eventHandle),e.removeEventListener("dblclick",this.eventHandle),e.removeEventListener("contextmenu",this.eventHandle),e.removeEventListener("mouseover",this.eventHandle),e.removeEventListener("mouseout",this.eventHandle),e.removeEventListener("touchstart",this.eventHandle),e.removeEventListener("touchend",this.eventHandle)}polyfillEvent(e){!this.mapsService||this.mapsService.getType()!=="amap"||uv()||(e.type==="touchstart"&&(this.touchStartTime=Date.now()),e.type==="touchend"&&Date.now()-this.touchStartTime<300&&this.emit("click",{target:e,data:this.markerOption.extData,lngLat:this.lngLat}))}addDragHandler(e){return null}onUp(e){throw new Error("Method not implemented.")}}const{merge:Ib}=Mr;class pL extends Kn.EventEmitter{constructor(e){var r;super(),v(this,"markers",[]),v(this,"markerLayerOption",void 0),v(this,"clusterIndex",void 0),v(this,"points",[]),v(this,"clusterMarkers",[]),v(this,"mapsService",void 0),v(this,"scene",void 0),v(this,"zoom",void 0),v(this,"bbox",void 0),v(this,"inited",void 0),v(this,"containerSize",void 0),this.markerLayerOption=Ib(this.getDefault(),e),bv(["update"],this),this.zoom=((r=this.markerLayerOption.clusterOption)===null||r===void 0?void 0:r.zoom)||-99}getDefault(){return{cluster:!1,clusterOption:{radius:80,maxZoom:20,minZoom:0,zoom:-99,style:{},className:""}}}addTo(e){return this.scene=e,this.mapsService=e.mapService,this.markerLayerOption.cluster&&(this.initCluster(),this.update(),this.mapsService.on("camerachange",this.update),this.mapsService.on("viewchange",this.update)),this.mapsService.on("camerachange",this.setContainerSize.bind(this)),this.mapsService.on("viewchange",this.setContainerSize.bind(this)),this.addMarkers(),this.inited=!0,this}setContainerSize(){if(!this.mapsService)return;const e=this.mapsService.getContainer();this.containerSize={containerWidth:e?.scrollWidth||0,containerHeight:e?.scrollHeight||0,bounds:this.mapsService.getBounds()}}getContainerSize(){return this.containerSize}addMarker(e){const r=this.markerLayerOption.cluster;if(e.getMarkerLayerContainerSize=this.getContainerSize.bind(this),r&&(this.addPoint(e,this.markers.length),this.mapsService)){const n=this.mapsService.getZoom(),i=this.mapsService.getBounds();this.bbox=Js(i,.5),this.zoom=Math.floor(n),this.getClusterMarker(this.bbox,this.zoom)}this.markers.push(e)}removeMarker(e){this.markers.indexOf(e);const r=this.markers.indexOf(e);r>-1&&(this.markers.splice(r,1),this.markerLayerOption.cluster&&(this.removePoint(r),this.mapsService&&this.getClusterMarker(this.bbox,this.zoom)))}hide(){this.markers.map(e=>{e.getElement().style.opacity="0"}),this.clusterMarkers.map(e=>{e.getElement().style.opacity="0"})}show(){this.markers.map(e=>{e.getElement().style.opacity="1"}),this.clusterMarkers.map(e=>{e.getElement().style.opacity="1"})}getMarkers(){return this.markerLayerOption.cluster?this.clusterMarkers:this.markers}getOriginMarkers(){return this.markers}addMarkers(){this.getMarkers().forEach(e=>{e.addTo(this.scene)})}clear(){this.markers.forEach(e=>{e.remove()}),this.clusterMarkers.forEach(e=>{e.remove()}),this.markers=[],this.points=[],this.clusterMarkers=[]}destroy(){this.clear(),this.removeAllListeners(),this.mapsService.off("camerachange",this.update),this.mapsService.off("viewchange",this.update),this.mapsService.off("camerachange",this.setContainerSize.bind(this)),this.mapsService.off("viewchange",this.setContainerSize.bind(this))}addPoint(e,r){const{lng:n,lat:i}=e.getLnglat(),o={geometry:{type:"Point",coordinates:[n,i]},properties:le(le({},e.getExtData()),{},{marker_id:r})};this.points.push(o),this.clusterIndex&&this.clusterIndex.load(this.points)}removePoint(e){const r=this.points.findIndex(n=>n.properties.marker_id===e);r>-1&&this.points.splice(r,1),this.clusterIndex&&this.clusterIndex.load(this.points)}initCluster(){if(!this.markerLayerOption.cluster)return;const{radius:e,minZoom:r=0,maxZoom:n}=this.markerLayerOption.clusterOption;this.clusterIndex=new i0({radius:e,minZoom:r,maxZoom:n}),this.clusterIndex.load(this.points)}getClusterMarker(e,r){const n=e[0].concat(e[1]),i=this.clusterIndex.getClusters(n,r);this.clusterMarkers.forEach(o=>{o.remove()}),this.clusterMarkers=[],i.forEach(o=>{var a;const{field:s,method:u}=this.markerLayerOption.clusterOption;if((a=o.properties)!==null&&a!==void 0&&a.cluster_id){var l;const c=this.getLeaves((l=o.properties)===null||l===void 0?void 0:l.cluster_id);if(o.properties.clusterData=c,s&&u){const h=c?.map(S=>({[s]:S.properties[s]})),_=Du(h,s),m=Bv(u,_),E="point_"+u;o.properties[E]=m.toFixed(2)}}const f=this.clusterMarker(o);this.clusterMarkers.push(f),f.addTo(this.scene)})}getLeaves(e,r=1/0,n=0){return e?this.clusterIndex.getLeaves(e,r,n):null}clusterMarker(e){const r=this.markerLayerOption.clusterOption,{element:n=this.generateElement.bind(this)}=r;return new Ob({element:n(e)}).setLnglat({lng:e.geometry.coordinates[0],lat:e.geometry.coordinates[1]})}normalMarker(e){const r=e.properties.marker_id;return this.markers[r]}update(){if(!this.mapsService||this.markers.length===0)return;const e=this.mapsService.getZoom(),r=this.mapsService.getBounds();(!this.bbox||Math.abs(e-this.zoom)>=1||!lv(this.bbox,r))&&(this.bbox=Js(r,.5),this.zoom=Math.floor(e),this.getClusterMarker(this.bbox,this.zoom))}generateElement(e){const r=yt("div","l7-marker-cluster"),n=yt("div","",r),i=yt("span","",n),{field:o,method:a}=this.markerLayerOption.clusterOption;e.properties.point_count=e.properties.point_count||1;const s=o&&a?e.properties["point_"+a]||e.properties[o]:e.properties.point_count;return i.textContent=s,r}}window._iconfont_svg_string_3580659='<svg><symbol id="l7-icon-area1" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.064889 219.136l38.798223 466.261333a113.777778 113.777778 0 1 1-133.518223 145.237334H279.210667a113.777778 113.777778 0 1 1-60.302223-137.272889L697.856 227.555556A113.777778 113.777778 0 0 1 796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m577.592889-534.072889L269.198222 796.444444c4.152889 7.168 7.509333 14.791111 10.012445 22.812445h465.578666a114.119111 114.119111 0 0 1 65.479111-71.224889l-38.798222-466.261333a112.924444 112.924444 0 0 1-23.210666-7.964445zM796.444444 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-area" viewBox="0 0 1024 1024"><path d="M796.444444 56.888889a113.777778 113.777778 0 0 1 43.008 219.136l38.855112 466.261333a113.777778 113.777778 0 0 1-16.497778 224.540445L853.333333 967.111111a113.777778 113.777778 0 0 1-108.544-79.644444H279.210667a113.834667 113.834667 0 0 1-100.067556 79.36L170.666667 967.111111a113.777778 113.777778 0 0 1-17.066667-226.304l30.492444-351.175111a113.777778 113.777778 0 0 1 34.986667-218.680889L227.555556 170.666667a113.777778 113.777778 0 0 1 99.896888 59.221333l355.84-71.395556a113.777778 113.777778 0 0 1 104.675556-101.262222L796.444444 56.888889z m56.888889 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-682.666666 0a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m526.051555-582.314666L340.650667 296.903111a113.891556 113.891556 0 0 1-88.462223 98.645333l-30.947555 355.84c27.477333 13.653333 48.64 38.115556 58.026667 67.754667h465.521777a114.119111 114.119111 0 0 1 65.536-71.168l-38.855111-466.261333a113.948444 113.948444 0 0 1-74.752-56.206222zM227.555556 238.933333a45.511111 45.511111 0 1 0 0 91.022223 45.511111 45.511111 0 0 0 0-91.022223z m568.888888-113.777777a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-delete" viewBox="0 0 1024 1024"><path d="M705.422222 85.333333a34.133333 34.133333 0 0 1 34.133334 34.133334V227.555556h136.533333a34.133333 34.133333 0 0 1 0 68.266666h-25.543111l-24.348445 610.076445a34.133333 34.133333 0 0 1-34.133333 32.768H231.936a34.133333 34.133333 0 0 1-34.076444-32.768L173.340444 295.822222H147.911111a34.133333 34.133333 0 1 1 0-68.266666H284.444444V119.466667a34.133333 34.133333 0 0 1 34.133334-34.133334h386.844444zM241.720889 295.822222l22.983111 574.577778h494.535111l23.04-574.577778H241.720889zM671.288889 153.6H352.711111V227.555556h318.577778V153.6z"  ></path></symbol><symbol id="l7-icon-color" viewBox="0 0 1024 1024"><path d="M512 56.888889c9.841778 0 19.626667 0.341333 29.354667 0.910222 69.176889 4.437333 119.068444 62.577778 124.302222 131.072l0.455111 9.386667c0.739556 44.600889 15.303111 84.935111 44.999111 114.631111 27.022222 27.022222 62.805333 41.528889 102.570667 44.430222l12.060444 0.568889c72.476444 1.194667 135.793778 52.451556 140.458667 124.757333 1.137778 18.261333 1.251556 36.807111 0.170667 55.637334-13.198222 233.585778-211.399111 424.220444-445.326223 428.714666L512 967.111111a455.111111 455.111111 0 0 1-455.054222-464.156444c4.551111-233.927111 195.185778-432.128 428.771555-445.326223C494.535111 57.116444 503.296 56.888889 512 56.888889z m0 68.266667a385.706667 385.706667 0 0 0-22.414222 0.625777C291.726222 136.988444 129.080889 305.948444 125.155556 504.263111c-4.152889 212.366222 163.100444 387.185778 372.508444 394.353778l13.425778 0.227555 8.533333-0.113777c198.371556-3.811556 367.331556-166.456889 378.538667-364.373334a396.174222 396.174222 0 0 0-0.170667-47.331555c-1.991111-31.232-29.127111-56.604444-67.128889-60.472889l-8.248889-0.455111-14.051555-0.682667c-56.547556-4.209778-107.406222-25.884444-145.806222-64.284444-38.855111-38.798222-60.416-90.225778-64.284445-145.749334l-0.910222-21.333333c-2.901333-38.001778-28.785778-66.048-60.302222-68.096A433.891556 433.891556 0 0 0 512 125.155556zM438.044444 682.666667a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m-170.666666-227.555556a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z m142.222222-227.555555a68.266667 68.266667 0 1 1 0 136.533333 68.266667 68.266667 0 0 1 0-136.533333z"  ></path></symbol><symbol id="l7-icon-base-map" viewBox="0 0 1024 1024"><path d="M923.761778 115.029333A34.133333 34.133333 0 0 1 967.111111 147.911111v624.128a34.133333 34.133333 0 0 1-22.186667 32.028445l-278.755555 103.992888a34.133333 34.133333 0 0 1-23.665778 0.056889L381.724444 812.714667a34.133333 34.133333 0 0 0-23.665777 0.113777L102.968889 908.060444a34.133333 34.133333 0 0 1-45.738667-26.965333L56.888889 876.088889V251.960889a34.133333 34.133333 0 0 1 22.186667-32.028445l278.755555-103.992888a34.133333 34.133333 0 0 1 20.992-0.967112l266.183111 72.988445a34.133333 34.133333 0 0 0 18.204445 0zM403.911111 192.625778v555.576889l216.177778 79.075555V251.960889l-216.177778-59.335111z m-68.266667 4.380444L125.155556 275.569778v551.310222l210.432-78.506667V197.006222zM898.844444 192.853333l-210.545777 58.936889v575.089778l210.545777-78.563556V192.853333z"  ></path></symbol><symbol id="l7-icon-dot" viewBox="0 0 1024 1024"><path d="M341.333333 739.555556a113.777778 113.777778 0 0 1 8.533334 227.271111L341.333333 967.111111a113.777778 113.777778 0 0 1-8.533333-227.271111L341.333333 739.555556z m0 68.266666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM910.222222 341.333333a113.777778 113.777778 0 0 1 8.533334 227.271111L910.222222 568.888889a113.777778 113.777778 0 0 1-8.533333-227.271111L910.222222 341.333333z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM227.555556 56.888889a113.777778 113.777778 0 0 1 8.533333 227.271111L227.555556 284.444444a113.777778 113.777778 0 0 1-8.533334-227.271111L227.555556 56.888889z m0 68.266667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-display" viewBox="0 0 1024 1024"><path d="M512 170.666667c284.444444 0 455.111111 227.555556 455.111111 341.333333s-170.666667 341.333333-455.111111 341.333333-455.111111-227.555556-455.111111-341.333333 170.666667-341.333333 455.111111-341.333333z m0 68.266666C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 110.762667 178.574222 273.066667 386.844444 273.066667s386.844444-162.304 386.844444-273.066667c0-110.762667-178.574222-273.066667-386.844444-273.066667zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-enlarge" viewBox="0 0 1024 1024"><path d="M546.133333 147.911111l-0.056889 329.955556H876.088889a34.133333 34.133333 0 0 1 0 68.266666H546.076444v329.955556a34.133333 34.133333 0 0 1-68.266666 0V546.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h329.898667V147.911111a34.133333 34.133333 0 0 1 68.266666 0z"  ></path></symbol><symbol id="l7-icon-export-picture" viewBox="0 0 1024 1024"><path d="M883.873684 161.684211a32.336842 32.336842 0 0 1 32.336842 32.336842v582.063158a32.336842 32.336842 0 0 1-32.336842 32.336842H86.231579a32.336842 32.336842 0 0 1-32.336842-32.336842V194.021053a32.336842 32.336842 0 0 1 32.336842-32.336842h797.642105z m-32.336842 64.673684H118.568421v517.389473h170.792421a32.175158 32.175158 0 0 1 0.431158-0.646736l3.772632-4.473264 330.320842-330.374736a32.336842 32.336842 0 0 1 38.588631-5.389474l4.473263 3.018105 184.589474 147.725474V226.357895z m-202.428631 248.131368L379.850105 743.747368H851.536842v-107.304421l-202.428631-161.953684zM323.368421 323.368421a107.789474 107.789474 0 1 1 0 215.578947 107.789474 107.789474 0 0 1 0-215.578947z m0 64.673684a43.115789 43.115789 0 1 0 0 86.231579 43.115789 43.115789 0 0 0 0-86.231579z"  ></path></symbol><symbol id="l7-icon-exit-fullscreen" viewBox="0 0 1024 1024"><path d="M841.955556 591.644444a34.133333 34.133333 0 0 1 5.518222 67.811556l-5.518222 0.455111h-133.745778l192 192.056889a34.133333 34.133333 0 0 1-38.343111 55.182222l-5.176889-2.958222-4.721778-3.982222L659.911111 708.266667V841.955556a34.133333 34.133333 0 0 1-28.615111 33.678222L625.777778 876.088889a34.133333 34.133333 0 0 1-33.678222-28.615111L591.644444 841.955556V625.777778a34.133333 34.133333 0 0 1 28.615112-33.678222L625.777778 591.644444h216.177778z m-443.733334 0a34.133333 34.133333 0 0 1 33.678222 28.615112L432.355556 625.777778v216.177778a34.133333 34.133333 0 0 1-67.811556 5.518222L364.088889 841.955556v-133.745778l-192.056889 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L315.847111 659.911111H182.044444a34.133333 34.133333 0 0 1-33.678222-28.615111L147.911111 625.777778a34.133333 34.133333 0 0 1 28.615111-33.678222L182.044444 591.644444H398.222222zM167.310222 119.808l4.721778 3.982222L364.088889 315.847111V182.044444a34.133333 34.133333 0 0 1 28.615111-33.678222L398.222222 147.911111a34.133333 34.133333 0 0 1 33.678222 28.615111L432.355556 182.044444V398.222222a34.133333 34.133333 0 0 1-28.615112 33.678222L398.222222 432.355556H182.044444a34.133333 34.133333 0 0 1-5.518222-67.811556L182.044444 364.088889h133.802667L123.790222 172.032a34.133333 34.133333 0 0 1 43.52-52.224z m732.899556 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L708.266667 364.088889H841.955556a34.133333 34.133333 0 0 1 33.678222 28.615111L876.088889 398.222222a34.133333 34.133333 0 0 1-28.615111 33.678222L841.955556 432.355556H625.777778a34.133333 34.133333 0 0 1-33.678222-28.615112L591.644444 398.222222V182.044444a34.133333 34.133333 0 0 1 67.811556-5.518222l0.455111 5.518222v133.802667l192.056889-192.056889a34.133333 34.133333 0 0 1 48.241778 0z"  ></path></symbol><symbol id="l7-icon-line" viewBox="0 0 1024 1024"><path d="M853.333333 56.888889a113.777778 113.777778 0 0 1 8.533334 227.271111L853.333333 284.444444c-19.000889 0-36.864-4.664889-52.622222-12.856888l-529.123555 529.066666a113.777778 113.777778 0 0 1-92.387556 166.115556L170.666667 967.111111a113.777778 113.777778 0 0 1-8.533334-227.271111L170.666667 739.555556c19.000889 0 36.864 4.664889 52.622222 12.856888l529.123555-529.066666a113.777778 113.777778 0 0 1 92.387556-166.115556L853.333333 56.888889zM170.666667 807.822222a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m682.666666-682.666666a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-layer" viewBox="0 0 1024 1024"><path d="M767.089778 625.777778l180.167111 82.773333a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730667-420.977778 193.422222a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422222a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730667L256.853333 625.777778l81.749334 37.546666L172.771556 739.555556 512 895.374222 851.171556 739.555556l-165.831112-76.231112 81.749334-37.546666z m0-227.555556l180.167111 82.773334a34.133333 34.133333 0 0 1 4.892444 59.278222l-4.892444 2.730666-420.977778 193.422223a34.133333 34.133333 0 0 1-22.983111 1.991111l-5.575111-1.991111-420.977778-193.422223a34.133333 34.133333 0 0 1-4.892444-59.278222l4.892444-2.730666L256.853333 398.222222l81.749334 37.546667-165.831111 76.174222L512 667.818667l339.171556-155.875556-165.831112-76.174222L767.089778 398.222222zM497.720889 60.017778a34.133333 34.133333 0 0 1 28.558222 0l420.977778 193.422222a34.133333 34.133333 0 0 1 0 62.008889l-420.977778 193.422222a34.133333 34.133333 0 0 1-28.558222 0l-420.977778-193.422222a34.133333 34.133333 0 0 1 0-62.008889zM512 128.568889L172.771556 284.387556 512 440.263111l339.171556-155.875555L512 128.568889z"  ></path></symbol><symbol id="l7-icon-narrow" viewBox="0 0 1024 1024"><path d="M910.222222 512a34.133333 34.133333 0 0 1-34.133333 34.133333H147.911111a34.133333 34.133333 0 1 1 0-68.266666h728.177778a34.133333 34.133333 0 0 1 34.133333 34.133333z"  ></path></symbol><symbol id="l7-icon-fullscreen" viewBox="0 0 1024 1024"><path d="M645.176889 597.674667l4.721778 3.982222L841.955556 793.6l0.056888-133.688889a34.133333 34.133333 0 0 1 28.615112-33.678222L876.088889 625.777778a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 659.911111v216.177778a34.133333 34.133333 0 0 1-28.615111 33.678222L876.088889 910.222222h-216.177778a34.133333 34.133333 0 0 1-5.518222-67.811555l5.518222-0.455111h133.745778l-192-192.056889a34.133333 34.133333 0 0 1 43.52-52.224z m-222.833778 3.982222a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778L230.286222 841.955556H364.088889a34.133333 34.133333 0 0 1 33.678222 28.615111L398.222222 876.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L364.088889 910.222222H147.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 876.088889v-216.177778a34.133333 34.133333 0 0 1 67.811555-5.518222l0.455111 5.518222-0.056888 133.745778 192.113777-192a34.133333 34.133333 0 0 1 48.241778 0zM364.088889 113.777778a34.133333 34.133333 0 0 1 5.518222 67.811555L364.088889 182.044444H230.343111l192 192.056889a34.133333 34.133333 0 0 1-43.52 52.224l-4.721778-3.982222-192.113777-192.056889L182.044444 364.088889a34.133333 34.133333 0 0 1-28.615111 33.678222L147.911111 398.222222a34.133333 34.133333 0 0 1-33.678222-28.615111L113.777778 364.088889V147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L147.911111 113.777778h216.177778z m512 0a34.133333 34.133333 0 0 1 33.678222 28.615111L910.222222 147.911111v216.177778a34.133333 34.133333 0 0 1-67.811555 5.518222L841.955556 364.088889l-0.056889-133.745778-192 192a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L793.6 182.044444H659.911111a34.133333 34.133333 0 0 1-33.678222-28.615111L625.777778 147.911111a34.133333 34.133333 0 0 1 28.615111-33.678222L659.911111 113.777778h216.177778z"  ></path></symbol><symbol id="l7-icon-hide" viewBox="0 0 1024 1024"><path d="M875.52 87.836444a34.133333 34.133333 0 0 1 7.281778 43.121778l-3.527111 5.006222-682.666667 796.444445a34.133333 34.133333 0 0 1-55.409778-39.367111l3.527111-5.006222 97.166223-113.379556C123.164444 697.969778 56.888889 582.940444 56.888889 512c0-113.777778 170.666667-341.333333 455.111111-341.333333a496.64 496.64 0 0 1 208.952889 45.112889l106.439111-124.188445a34.133333 34.133333 0 0 1 48.128-3.754667z m-38.684444 202.524445C921.031111 362.951111 967.111111 452.835556 967.111111 512c0 113.777778-170.666667 341.333333-455.111111 341.333333-50.631111 0-97.678222-7.224889-140.8-19.740444l50.232889-58.595556A417.393778 417.393778 0 0 0 512 785.066667c208.270222 0 386.844444-162.304 386.844444-273.066667 0-52.849778-40.675556-117.418667-105.813333-170.496l43.804445-51.2zM512 238.933333C303.729778 238.933333 125.155556 401.237333 125.155556 512c0 66.787556 64.853333 152.291556 162.133333 209.692444L377.173333 616.675556a170.666667 170.666667 0 0 1 217.713778-253.895112l78.620445-91.704888A432.924444 432.924444 0 0 0 512 238.933333z m166.684444 236.088889a170.666667 170.666667 0 0 1-177.664 207.303111l177.607112-207.303111zM512 409.6a102.4 102.4 0 0 0-88.746667 153.486222L548.864 416.426667A102.172444 102.172444 0 0 0 512 409.6z"  ></path></symbol><symbol id="l7-icon-rectangle" viewBox="0 0 1024 1024"><path d="M170.666667 56.888889a113.777778 113.777778 0 0 1 108.544 79.644444H853.333333a34.133333 34.133333 0 0 1 33.678223 28.615111L887.466667 170.666667v574.122666a113.777778 113.777778 0 1 1-142.677334 142.734223L170.666667 887.466667a34.133333 34.133333 0 0 1-33.678223-28.615111L136.533333 853.333333V279.210667A113.777778 113.777778 0 0 1 170.666667 56.888889z m682.666666 750.933333a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z m-34.133333-603.022222H279.210667a114.062222 114.062222 0 0 1-74.353778 74.410667L204.8 819.2h539.989333a114.062222 114.062222 0 0 1 74.410667-74.410667V204.8zM170.666667 125.155556a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-ranging" viewBox="0 0 1024 1024"><path d="M723.171556 50.403556l250.424888 250.424888a31.061333 31.061333 0 0 1 0 43.918223L344.746667 973.596444a31.061333 31.061333 0 0 1-43.918223 0L50.403556 723.171556a31.061333 31.061333 0 0 1 0-43.918223L679.253333 50.403556a31.061333 31.061333 0 0 1 43.918223 0z m-21.959112 74.524444l-39.765333 39.822222 98.986667 98.872889a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222 62.179556 62.122667a34.133333 34.133333 0 0 1-44.088889 51.882667L563.2 387.242667 501.077333 325.063111 437.191111 388.949333l98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-63.886222 63.886222L387.242667 563.2a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.584-62.122667-62.179556-63.886222 63.886222 98.986667 98.929778a34.133333 34.133333 0 0 1-44.088889 51.882667l-4.209778-3.640889-98.929778-98.929778-39.765333 39.822222 197.802667 197.745778 576.284444-576.284444-197.802667-197.745778z"  ></path></symbol><symbol id="l7-icon-reposition" viewBox="0 0 1024 1024"><path d="M512 56.888889a34.133333 34.133333 0 0 1 34.133333 34.133333v24.177778A398.336 398.336 0 0 1 908.856889 477.866667h24.177778a34.133333 34.133333 0 0 1 0 68.266666h-24.177778A398.336 398.336 0 0 1 546.133333 908.856889L546.133333 932.977778a34.133333 34.133333 0 0 1-68.266666 0v-24.177778A398.336 398.336 0 0 1 115.2 546.133333L91.022222 546.133333a34.133333 34.133333 0 1 1 0-68.266666h24.177778A398.336 398.336 0 0 1 477.866667 115.2V91.022222A34.133333 34.133333 0 0 1 512 56.888889z m34.190222 126.862222L546.133333 193.422222a34.133333 34.133333 0 1 1-68.266666 0v-9.671111A330.069333 330.069333 0 0 0 183.751111 477.866667h9.671111a34.133333 34.133333 0 1 1 0 68.266666l-9.671111 0.056889A330.069333 330.069333 0 0 0 477.866667 840.248889V830.577778a34.133333 34.133333 0 0 1 68.266666 0l0.056889 9.671111A330.069333 330.069333 0 0 0 840.248889 546.133333L830.577778 546.133333a34.133333 34.133333 0 0 1 0-68.266666h9.671111A330.069333 330.069333 0 0 0 546.133333 183.751111zM512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 68.266667a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"  ></path></symbol><symbol id="l7-icon-round" viewBox="0 0 1024 1024"><path d="M512 56.888889a455.111111 455.111111 0 0 1 391.395556 687.502222 113.777778 113.777778 0 0 1-159.061334 158.890667A455.111111 455.111111 0 0 1 120.604444 279.608889 113.777778 113.777778 0 0 1 279.608889 120.604444 452.835556 452.835556 0 0 1 512 56.888889z m0 68.266667a384.910222 384.910222 0 0 0-191.715556 50.744888A113.777778 113.777778 0 0 1 175.957333 320.284444a386.844444 386.844444 0 0 0 527.815111 527.758223 113.777778 113.777778 0 0 1 144.270223-144.440889A386.844444 386.844444 0 0 0 512 125.155556z m299.406222 640.739555a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222zM212.593778 167.082667a45.511111 45.511111 0 1 0 0 91.022222 45.511111 45.511111 0 0 0 0-91.022222z"  ></path></symbol><symbol id="l7-icon-guanbi" viewBox="0 0 1024 1024"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  ></path></symbol></svg>',function(t){try{let l=function(){s||(s=!0,o())},f=function(){try{a.documentElement.doScroll("left")}catch{return void setTimeout(f,50)}l()};var r=(r=document.getElementsByTagName("script"))[r.length-1],e=r.getAttribute("data-injectcss"),r=r.getAttribute("data-disable-injectsvg");if(!r){var n,i,o,a,s,u=function(c,h){h.parentNode.insertBefore(c,h)};if(e&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}n=function(){var c,h=document.createElement("div");h.innerHTML=t._iconfont_svg_string_3580659,(h=h.getElementsByTagName("svg")[0])&&(h.setAttribute("aria-hidden","true"),h.style.position="absolute",h.style.width=0,h.style.height=0,h.style.overflow="hidden",h=h,(c=document.body).firstChild?u(h,c.firstChild):c.appendChild(h))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(i=function(){document.removeEventListener("DOMContentLoaded",i,!1),n()},document.addEventListener("DOMContentLoaded",i,!1)):document.attachEvent&&(o=n,a=t.document,s=!1,f(),a.onreadystatechange=function(){a.readyState=="complete"&&(a.onreadystatechange=null,l())})}}catch{}}(window);class yn extends iA{constructor(e){super(),v(this,"controlOption",void 0),v(this,"container",void 0),v(this,"isShow",void 0),v(this,"sceneContainer",void 0),v(this,"scene",void 0),v(this,"mapsService",void 0),v(this,"renderService",void 0),v(this,"layerService",void 0),v(this,"controlService",void 0),v(this,"configService",void 0),yn.controlCount++,this.controlOption=le(le({},this.getDefault(e)),e||{})}getOptions(){return this.controlOption}setOptions(e){const r=this.getDefault(e);Object.entries(e).forEach(([n,i])=>{i===void 0&&(e[n]=r[n])}),"position"in e&&this.setPosition(e.position),"className"in e&&this.setClassName(e.className),"style"in e&&this.setStyle(e.style),this.controlOption=le(le({},this.controlOption),e)}addTo(e){this.mapsService=e.mapService,this.renderService=e.rendererService,this.layerService=e.layerService,this.controlService=e.controlService,this.configService=e.globalConfigService,this.scene=e.sceneService,this.sceneContainer=e,this.isShow=!0,this.container=this.onAdd(),dn(this.container,"l7-control");const{className:r,style:n}=this.controlOption;return r&&this.setClassName(r),n&&this.setStyle(n),this.insertContainer(),this.emit("add",this),this}remove(){if(!this.mapsService)return this;cn(this.container),this.onRemove(),this.emit("remove",this)}onAdd(){return yt("div")}onRemove(){}show(){const e=this.container;mi(e,"l7-control--hide"),this.isShow=!0,this.emit("show",this)}hide(){const e=this.container;dn(e,"l7-control--hide"),this.isShow=!1,this.emit("hide",this)}getDefault(e){return{position:go.TOPRIGHT,name:`${yn.controlCount}`}}getContainer(){return this.container}getIsShow(){return this.isShow}_refocusOnMap(e){if(this.mapsService&&e&&e.screenX>0&&e.screenY>0){const r=this.mapsService.getContainer();r!==null&&r.focus()}}setPosition(e=go.TOPLEFT){const r=this.controlService;return r&&r.removeControl(this),this.controlOption.position=e,r&&r.addControl(this,this.sceneContainer),this}setClassName(e){const r=this.container,{className:n}=this.controlOption;n&&mi(r,n),e&&dn(r,e)}setStyle(e){const r=this.container;e?r.setAttribute("style",e):r.removeAttribute("style")}insertContainer(){const e=this.controlOption.position,r=this.container;if(e instanceof Element)e.appendChild(r);else{const n=this.controlService.controlCorners[e];["bottomleft","bottomright","righttop","rightbottom"].includes(e)?n.insertBefore(r,n.firstChild):n.appendChild(r)}}checkUpdateOption(e,r){return r.some(n=>n in e)}}v(yn,"controlCount",0);class wu extends yn{constructor(...e){super(...e),v(this,"isDisable",!1),v(this,"button",void 0),v(this,"buttonText",void 0),v(this,"buttonIcon",void 0)}setIsDisable(e){if(this.isDisable=e,e){var r;(r=this.button)===null||r===void 0||r.setAttribute("disabled","true")}else{var n;(n=this.button)===null||n===void 0||n.removeAttribute("disabled")}}createButton(e=""){return yt("button",`l7-button-control ${e}`)}onAdd(){this.button=this.createButton(),this.isDisable=!1;const{title:e,btnText:r,btnIcon:n}=this.controlOption;return this.setBtnTitle(e),this.setBtnText(r),this.setBtnIcon(n),this.button}onRemove(){this.button=this.buttonIcon=this.buttonText=void 0,this.isDisable=!1}setOptions(e){const{title:r,btnText:n,btnIcon:i}=e;this.checkUpdateOption(e,["title"])&&this.setBtnTitle(r),this.checkUpdateOption(e,["btnIcon"])&&this.setBtnIcon(i),this.checkUpdateOption(e,["btnText"])&&this.setBtnText(n),super.setOptions(e)}setBtnTitle(e){var r;(r=this.button)===null||r===void 0||r.setAttribute("title",e??"")}setBtnIcon(e){if(this.buttonIcon&&cn(this.buttonIcon),e){var r;const o=(r=this.button)===null||r===void 0?void 0:r.firstChild;if(o){var n;(n=this.button)===null||n===void 0||n.insertBefore(e,o)}else{var i;(i=this.button)===null||i===void 0||i.appendChild(e)}this.buttonIcon=e}}setBtnText(e){if(this.button)if(mi(this.button,"l7-button-control--row"),mi(this.button,"l7-button-control--column"),e){let n=this.buttonText;if(!n){var r;n=yt("div","l7-button-control__text"),(r=this.button)===null||r===void 0||r.appendChild(n),this.buttonText=n}n.innerText=e,dn(this.button,this.controlOption.vertical?"l7-button-control--column":"l7-button-control--row")}else!e&&this.buttonText&&(cn(this.buttonText),this.buttonText=void 0)}}class Ca extends Kn.EventEmitter{get buttonRect(){return this.button.getBoundingClientRect()}constructor(e,r){super(),v(this,"popperDOM",void 0),v(this,"contentDOM",void 0),v(this,"button",void 0),v(this,"option",void 0),v(this,"isShow",!1),v(this,"content",void 0),v(this,"timeout",null),v(this,"show",()=>this.isShow||!this.contentDOM.innerHTML?this:(this.resetPopperPosition(),mi(this.popperDOM,"l7-popper-hide"),this.isShow=!0,this.option.unique&&Ca.conflictPopperList.forEach(n=>{n!==this&&n.isShow&&n.hide()}),this.emit("show"),window.addEventListener("pointerdown",this.onPopperUnClick),this)),v(this,"hide",()=>this.isShow?(dn(this.popperDOM,"l7-popper-hide"),this.isShow=!1,this.emit("hide"),window.removeEventListener("pointerdown",this.onPopperUnClick),this):this),v(this,"setHideTimeout",()=>{this.timeout||(this.timeout=window.setTimeout(()=>{this.isShow&&(this.hide(),this.timeout=null)},300))}),v(this,"clearHideTimeout",()=>{this.timeout&&(window.clearTimeout(this.timeout),this.timeout=null)}),v(this,"onBtnClick",()=>{this.isShow?this.hide():this.show()}),v(this,"onPopperUnClick",n=>{oA(n.target,[".l7-button-control",".l7-popper-content"])||this.hide()}),v(this,"onBtnMouseLeave",()=>{this.setHideTimeout()}),v(this,"onBtnMouseMove",()=>{this.clearHideTimeout(),!this.isShow&&this.show()}),this.button=e,this.option=r,this.init(),r.unique&&Ca.conflictPopperList.push(this)}getPopperDOM(){return this.popperDOM}getIsShow(){return this.isShow}getContent(){return this.content}setContent(e){typeof e=="string"?this.contentDOM.innerHTML=e:e instanceof HTMLElement&&(Fa(this.contentDOM),this.contentDOM.appendChild(e)),this.content=e}init(){const{trigger:e}=this.option;this.popperDOM=this.createPopper(),e==="click"?this.button.addEventListener("click",this.onBtnClick):(this.button.addEventListener("mousemove",this.onBtnMouseMove),this.button.addEventListener("mouseleave",this.onBtnMouseLeave),this.popperDOM.addEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.addEventListener("mouseleave",this.onBtnMouseLeave))}destroy(){this.button.removeEventListener("click",this.onBtnClick),this.button.removeEventListener("mousemove",this.onBtnMouseMove),this.button.removeEventListener("mousemove",this.onBtnMouseLeave),this.popperDOM.removeEventListener("mousemove",this.onBtnMouseMove),this.popperDOM.removeEventListener("mouseleave",this.onBtnMouseLeave),cn(this.popperDOM)}resetPopperPosition(){const e={},{container:r,offset:n=[0,0],placement:i}=this.option,[o,a]=n,s=this.button.getBoundingClientRect(),u=r.getBoundingClientRect(),{left:l,right:f,top:c,bottom:h}=aA(s,u);let _=!1,m=!1;/^(left|right)/.test(i)?(i.includes("left")?e.right=`${s.width+f}px`:i.includes("right")&&(e.left=`${s.width+l}px`),i.includes("start")?e.top=`${c}px`:i.includes("end")?e.bottom=`${h}px`:(e.top=`${c+s.height/2}px`,m=!0,e.transform=`translate(${o}px, calc(${a}px - 50%))`)):/^(top|bottom)/.test(i)&&(i.includes("top")?e.bottom=`${s.height+h}px`:i.includes("bottom")&&(e.top=`${s.height+c}px`),i.includes("start")?e.left=`${l}px`:i.includes("end")?e.right=`${f}px`:(e.left=`${l+s.width/2}px`,_=!0,e.transform=`translate(calc(${o}px - 50%), ${a}px)`)),e.transform=`translate(calc(${o}px - ${_?"50%":"0%"}), calc(${a}px - ${m?"50%":"0%"})`;const E=i.split("-");E.length&&dn(this.popperDOM,E.map(S=>`l7-popper-${S}`).join(" ")),Zc(this.popperDOM,sA(e))}createPopper(){const{container:e,className:r="",content:n}=this.option,i=yt("div",`l7-popper l7-popper-hide ${r}`),o=yt("div","l7-popper-content"),a=yt("div","l7-popper-arrow");return i.appendChild(o),i.appendChild(a),e.appendChild(i),this.popperDOM=i,this.contentDOM=o,n&&this.setContent(n),i}}v(Ca,"conflictPopperList",[]);const Mb={topleft:"right-start",topcenter:"bottom",topright:"left-start",bottomleft:"right-end",bottomcenter:"top",bottomright:"left-end",lefttop:"bottom-start",leftcenter:"right",leftbottom:"top-start",righttop:"bottom-end",rightcenter:"left",rightbottom:"top-end"};class Bb extends wu{constructor(...e){super(...e),v(this,"popper",void 0)}getPopper(){return this.popper}hide(){this.popper.hide(),super.hide()}getDefault(e){var r;const n=super.getDefault(e),i=(r=e?.position)!==null&&r!==void 0?r:n.position;return le(le({},super.getDefault(e)),{},{popperPlacement:i instanceof Element?"bottom":Mb[i],popperTrigger:"click"})}onAdd(){const e=super.onAdd();return this.initPopper(),e}onRemove(){this.popper.destroy()}initPopper(){const{popperClassName:e,popperPlacement:r,popperTrigger:n}=this.controlOption,i=this.mapsService.getMapContainer();return this.popper=new Ca(this.button,{className:e,placement:r,trigger:n,container:i,unique:!0}),this.popper.on("show",()=>{this.emit("popperShow",this)}).on("hide",()=>{this.emit("popperHide",this)}),this.popper}setOptions(e){if(super.setOptions(e),this.checkUpdateOption(e,["popperPlacement","popperTrigger","popperClassName"])){const r=this.popper.getContent();this.popper.destroy(),this.initPopper(),this.popper.setContent(r)}}}var hi=function(t){return t.ActiveOptionClassName="l7-select-control-item-active",t.OptionValueAttrKey="data-option-value",t.OptionIndexAttrKey="data-option-index",t}(hi||{});class u0 extends Bb{constructor(...e){super(...e),v(this,"selectValue",[]),v(this,"optionDOMList",void 0),v(this,"createNormalOption",r=>{const n=this.selectValue.includes(r.value),i=yt("div",`l7-select-control-item ${n?hi.ActiveOptionClassName:""}`);this.getIsMultiple()?i.appendChild(this.createCheckbox(n)):i.appendChild(this.createRadio(n)),r.icon&&i.appendChild(r.icon);const o=yt("span");return o.innerText=r.text,i.appendChild(o),i}),v(this,"onItemClick",r=>{if(this.getIsMultiple()){const n=this.selectValue.findIndex(i=>i===r.value);n>-1?this.selectValue.splice(n,1):this.selectValue=[...this.selectValue,r.value]}else this.selectValue=[r.value];this.setSelectValue(this.selectValue)})}setOptions(e){super.setOptions(e);const{options:r}=e;r&&this.popper.setContent(this.getPopperContent(r))}onAdd(){const e=super.onAdd(),{defaultValue:r}=this.controlOption;return r&&(this.selectValue=this.transSelectValue(r)),this.popper.setContent(this.getPopperContent(this.controlOption.options)),e}getSelectValue(){return this.getIsMultiple()?this.selectValue:this.selectValue[0]}setSelectValue(e,r=!0){const n=this.transSelectValue(e);this.optionDOMList.forEach(i=>{const o=i.getAttribute(hi.OptionValueAttrKey),a=i.querySelector("input[type=checkbox]"),s=i.querySelector("input[type=radio]"),u=n.includes(o),l=(f,c)=>{uA(i,hi.ActiveOptionClassName,c),f&&Ul(f,c)};l(a,u),l(s,u)}),this.selectValue=n,r&&this.emit("selectChange",this.getIsMultiple()?n:n[0])}getIsMultiple(){return!1}getPopperContent(e){const r=this.isImageOptions(),n=yt("div",r?"l7-select-control--image":"l7-select-control--normal");this.getIsMultiple()&&dn(n,"l7-select-control--multiple");const i=e.map((o,a)=>{const s=r?this.createImageOption(o):this.createNormalOption(o);return s.setAttribute(hi.OptionValueAttrKey,o.value),s.setAttribute(hi.OptionIndexAttrKey,window.String(a)),s.addEventListener("click",this.onItemClick.bind(this,o)),s});return n.append(...i),this.optionDOMList=i,n}createImageOption(e){const r=this.selectValue.includes(e.value),n=yt("div",`l7-select-control-item ${r?hi.ActiveOptionClassName:""}`),i=yt("img");i.setAttribute("src",e.img),cv(i),n.appendChild(i);const o=yt("div","l7-select-control-item-row");this.getIsMultiple()&&n.appendChild(this.createCheckbox(r));const a=yt("span");return a.innerText=e.text,o.appendChild(a),n.appendChild(o),n}createCheckbox(e){const r=yt("input");return r.setAttribute("type","checkbox"),e&&Ul(r,!0),r}createRadio(e){const r=yt("input");return r.setAttribute("type","radio"),e&&Ul(r,!0),r}isImageOptions(){return!!this.controlOption.options.find(e=>e.img)}transSelectValue(e){return Array.isArray(e)?e:[e]}}const Nn=t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.classList.add("l7-iconfont"),e.setAttribute("aria-hidden","true");const r=document.createElementNS("http://www.w3.org/2000/svg","use");return r.setAttributeNS("http://www.w3.org/1999/xlink","href",`#${t}`),e.appendChild(r),e};class _L extends wu{constructor(...e){var r;super(...e),r=this,v(this,"onClick",ee(function*(){const{onExport:n}=r.controlOption;n?.(yield r.getImage())})),v(this,"mergeImage",ee(function*(...n){var i,o;const{imageType:a}=r.controlOption,{width:s=0,height:u=0}=(i=(o=r.mapsService.getContainer())===null||o===void 0?void 0:o.getBoundingClientRect())!==null&&i!==void 0?i:{},l=document.createElement("canvas");l.width=s,l.height=u;const f=l.getContext("2d");return(yield Promise.all(n.map(h=>new Promise(_=>{const m=new Image;m.onload=()=>{_(m)},m.src=h})))).forEach(h=>{f?.drawImage(h,0,0,s,u)}),l.toDataURL(`image/${a}`)}))}onAdd(){const e=super.onAdd();return e.addEventListener("click",this.onClick),e}getDefault(e){return le(le({},super.getDefault(e)),{},{title:"导出图片",btnIcon:Nn("l7-icon-export-picture"),imageType:"png"})}getImage(){var e=this;return ee(function*(){const r=yield e.mapsService.exportMap("png"),n=yield e.scene.exportPng("png");return e.mergeImage(...[r,n].filter(i=>i))})()}}const t_=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Mn=(()=>{if(typeof document>"u")return!1;const t=t_[0],e={};for(const r of t_)if(r?.[1]in document){for(const[i,o]of r.entries())e[t[i]]=o;return e}return!1})(),r_={change:Mn.fullscreenchange,error:Mn.fullscreenerror};let Pr={request(t=document.documentElement,e){return new Promise((r,n)=>{const i=()=>{Pr.off("change",i),r()};Pr.on("change",i);const o=t[Mn.requestFullscreen](e);o instanceof Promise&&o.then(i).catch(n)})},exit(){return new Promise((t,e)=>{if(!Pr.isFullscreen){t();return}const r=()=>{Pr.off("change",r),t()};Pr.on("change",r);const n=document[Mn.exitFullscreen]();n instanceof Promise&&n.then(r).catch(e)})},toggle(t,e){return Pr.isFullscreen?Pr.exit():Pr.request(t,e)},onchange(t){Pr.on("change",t)},onerror(t){Pr.on("error",t)},on(t,e){const r=r_[t];r&&document.addEventListener(r,e,!1)},off(t,e){const r=r_[t];r&&document.removeEventListener(r,e,!1)},raw:Mn};Object.defineProperties(Pr,{isFullscreen:{get:()=>!!document[Mn.fullscreenElement]},element:{enumerable:!0,get:()=>{var t;return(t=document[Mn.fullscreenElement])!==null&&t!==void 0?t:void 0}},isEnabled:{enumerable:!0,get:()=>!!document[Mn.fullscreenEnabled]}});Mn||(Pr={isEnabled:!1});class mL extends wu{constructor(e){var r;super(e),r=this,v(this,"isFullscreen",!1),v(this,"mapContainer",void 0),v(this,"toggleFullscreen",ee(function*(){Pr.isEnabled&&(yield Pr.toggle(r.mapContainer))})),v(this,"onClick",()=>{this.toggleFullscreen()}),v(this,"onFullscreenChange",()=>{this.isFullscreen=!!document.fullscreenElement;const{btnText:n,btnIcon:i,title:o,exitBtnText:a,exitBtnIcon:s,exitTitle:u}=this.controlOption;this.isFullscreen?(this.setBtnTitle(u),this.setBtnText(a),this.setBtnIcon(s)):(this.setBtnTitle(o),this.setBtnText(n),this.setBtnIcon(i)),this.emit("fullscreenChange",this.isFullscreen)}),Pr.isEnabled||console.warn("当前浏览器环境不支持对地图全屏化")}setOptions(e){const{exitBtnText:r,exitBtnIcon:n,exitTitle:i}=e;this.isFullscreen&&(this.checkUpdateOption(e,["exitBtnIcon"])&&this.setBtnIcon(n),this.checkUpdateOption(e,["exitBtnText"])&&this.setBtnText(r),this.checkUpdateOption(e,["exitTitle"])&&this.setBtnTitle(i)),super.setOptions(e)}onAdd(){const e=super.onAdd();return e.addEventListener("click",this.onClick),this.mapContainer=fv(this.scene.getSceneConfig().id),this.mapContainer.addEventListener("fullscreenchange",this.onFullscreenChange),e}onRemove(){super.onRemove(),this.mapContainer.removeEventListener("fullscreenchange",this.onFullscreenChange)}getDefault(e){return le(le({},super.getDefault(e)),{},{title:"全屏",btnIcon:Nn("l7-icon-fullscreen"),exitTitle:"退出全屏",exitBtnIcon:Nn("l7-icon-exit-fullscreen")})}}class vL extends wu{constructor(e){var r;super(e),r=this,v(this,"getGeoLocation",()=>new Promise((n,i)=>{window.navigator.geolocation.getCurrentPosition(({coords:o})=>{const{longitude:a,latitude:s}=o??{};!isNaN(a)&&!isNaN(s)?n([a,s]):i()},o=>{i(o)})})),v(this,"onClick",ee(function*(){if(!window.navigator.geolocation)return;const{transform:n}=r.controlOption,i=yield r.getGeoLocation(),o=r.mapsService.getZoom();r.mapsService.setZoomAndCenter(o>15?o:15,n?yield n(i):i)})),window.navigator.geolocation||console.warn("当前浏览器环境不支持获取地理定位")}getDefault(e){return le(le({},super.getDefault(e)),{},{title:"定位",btnIcon:Nn("l7-icon-reposition")})}onAdd(){const e=super.onAdd();return e.addEventListener("click",this.onClick),e}}function n_(t){return Object.keys(t??{}).every(e=>["layer","name","img"].includes(e))}class gL extends u0{constructor(...e){super(...e),v(this,"onLayerChange",()=>{var r;(r=this.controlOption.layers)!==null&&r!==void 0&&r.length||(this.selectValue=this.getLayerVisible(),this.setOptions({options:this.getLayerOptions()}))}),v(this,"onLayerVisibleChane",()=>{this.setSelectValue(this.getLayerVisible())}),v(this,"onSelectChange",()=>{this.layers.forEach(r=>{const n=this.selectValue.includes(r.name),i=r.isVisible();n&&!i&&r.show(),!n&&i&&r.hide()})})}get layers(){const e=this.layerService,{layers:r}=this.controlOption;if(Array.isArray(r)&&r.length){const n=[];return r.forEach(i=>{if(i instanceof Object&&(n_(i)?n.push(i.layer):n.push(i)),typeof i=="string"){const o=e.getLayer(i)||e.getLayerByName(i);o&&n.push(o)}}),n}return e.getLayers()||[]}getDefault(e){var r;return le(le({},super.getDefault(e)),{},{title:"图层控制",btnIcon:Nn("l7-icon-layer"),options:[],multiple:(r=e?.multiple)!==null&&r!==void 0?r:!0})}getLayerVisible(){return this.layers.filter(e=>e.isVisible()).map(e=>e.name)}getLayerOptions(){const{layers:e}=this.controlOption,r=e?.every(n=>n.img);return e?e?.map(n=>{if(n_(n))return{text:n.name||n.layer.name,value:n.layer.name,img:r?n.img:void 0};if(typeof n=="string"){const i=this.layerService.getLayer(n)||this.layerService.getLayerByName(n);return{text:i?.name,value:i?.name}}return{text:n.name,value:n.name}}):this.layers.map(n=>({text:n.name,value:n.name}))}setOptions(e){const r=this.checkUpdateOption(e,["layers","multiple"]);super.setOptions(e),r&&(this.controlOption.multiple===!1&&this.handleSingleSelection(),this.selectValue=this.getLayerVisible(),this.controlOption.options=this.getLayerOptions(),this.popper.setContent(this.getPopperContent(this.controlOption.options)))}handleSingleSelection(){this.layers.forEach((e,r)=>{r===0?e.show():e.hide()})}onAdd(){var e;return this.controlOption.multiple===!1&&this.handleSingleSelection(),(e=this.controlOption.options)!==null&&e!==void 0&&e.length||(this.controlOption.options=this.getLayerOptions()),this.controlOption.defaultValue||(this.controlOption.defaultValue=this.getLayerVisible()),this.on("selectChange",this.onSelectChange),this.layerService.on("layerChange",this.onLayerChange),super.onAdd()}onRemove(){this.off("selectChange",this.onSelectChange),this.layerService.off("layerChange",this.onLayerChange)}getIsMultiple(){return this.controlOption.multiple}}class Nb extends yn{getDefault(){return{position:go.BOTTOMLEFT,name:"logo",href:"https://l7.antv.antgroup.com/",img:"https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*GRb1TKp4HcMAAAAAAAAAAAAAARQnAQ"}}onAdd(){const e=yt("div","l7-control-logo");return this.setLogoContent(e),e}onRemove(){return null}setOptions(e){super.setOptions(e),this.checkUpdateOption(e,["img","href"])&&(Fa(this.container),this.setLogoContent(this.container))}setLogoContent(e){const{href:r,img:n}=this.controlOption,i=yt("img");if(i.setAttribute("src",n),i.setAttribute("aria-label","AntV logo"),cv(i),r){const o=yt("a","l7-control-logo-link");o.target="_blank",o.href=r,o.rel="noopener nofollow",o.setAttribute("rel","noopener nofollow"),o.appendChild(i),e.appendChild(o)}else e.appendChild(i)}}const Pb={normal:{text:"标准",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qdFDSbvIalgAAAAAAAAAAAAADmJ7AQ/original"},light:{text:"月光银",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*d-vcRLzu8WIAAAAAAAAAAAAADmJ7AQ/original"},dark:{text:"幻影黑",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*HMbRTI3XnpIAAAAAAAAAAAAADmJ7AQ/original"},fresh:{text:"草色青",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kqaGQ5kjSiAAAAAAAAAAAAAADmJ7AQ/original"},grey:{text:"雅士灰",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*XegrTpZIbqAAAAAAAAAAAAAADmJ7AQ/original"},graffiti:{text:"涂鸦",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*G5g9SZ_Jg4cAAAAAAAAAAAAADmJ7AQ/original"},macaron:{text:"马卡龙",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*irVvQbDpQMwAAAAAAAAAAAAADmJ7AQ/original"},darkblue:{text:"极夜蓝",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*lKRzQYB4iR0AAAAAAAAAAAAADmJ7AQ/original"},wine:{text:"酱籽",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*orY0T7QL-lwAAAAAAAAAAAAADmJ7AQ/original"}},Lb={normal:{text:"标准",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kIyZTok4Uk0AAAAAAAAAAAAADmJ7AQ/original"},light:{text:"亮",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Z3JRQKDI-cIAAAAAAAAAAAAADmJ7AQ/original"},dark:{text:"暗",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*d7HCQbfmyaoAAAAAAAAAAAAADmJ7AQ/original"},satellite:{text:"卫星",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TytUT6pS9okAAAAAAAAAAAAADmJ7AQ/original"},outdoors:{text:"户外",img:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*hWwFSYJEFWsAAAAAAAAAAAAADmJ7AQ/original"}};class EL extends u0{constructor(...e){super(...e),v(this,"onMapThemeChange",()=>{this.mapsService.setMapStyle(this.selectValue[0])})}getDefault(e){return le(le({},super.getDefault(e)),{},{title:"地图样式",btnIcon:Nn("l7-icon-color"),options:[]})}getStyleOptions(){const e=this.mapsService.getType()==="mapbox"?Lb:Pb;return Object.entries(this.mapsService.getMapStyleConfig()).filter(([r,n])=>typeof n=="string"&&r!=="blank").map(([r,n])=>{var i;const{text:o,img:a}=(i=e[r])!==null&&i!==void 0?i:{};return{text:o??r,value:n,img:a,key:r}})}getMapStyle(){return this.mapsService.getMapStyle()}onAdd(){var e;if((e=this.controlOption.options)!==null&&e!==void 0&&e.length||(this.controlOption.options=this.getStyleOptions()),this.controlOption.defaultValue){var r,n;const i=this.controlOption.defaultValue;this.controlOption.defaultValue=(r=(n=this.controlOption.options.find(o=>o.key===i))===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:i}else{const i=this.getMapStyle();i?this.controlOption.defaultValue=i:this.mapsService.map.once("styledata",()=>{const o=this.mapsService.getMapStyle();this.controlOption.defaultValue=o,this.setSelectValue(o,!1)})}return this.on("selectChange",this.onMapThemeChange),super.onAdd()}getIsMultiple(){return!1}}class yL extends yn{constructor(...e){super(...e),v(this,"location",[0,0]),v(this,"onMouseMove",r=>{let n=this.location;const i=r.lngLat||r.lnglat,{transform:o}=this.controlOption;i&&(n=[i.lng,i.lat]),this.location=n,o&&(n=o(n)),this.insertLocation2HTML(n),this.emit("locationChange",n)})}getLocation(){return this.location}getDefault(e){return le(le({},super.getDefault(e)),{},{position:go.BOTTOMLEFT,transform:([r,n])=>[+(+r).toFixed(6),+(+n).toFixed(6)]})}onAdd(){const e=yt("div","l7-control-mouse-location");return e.innerHTML="&nbsp;",this.mapsService.on("mousemove",this.onMouseMove),e}onRemove(){this.mapsService.off("mousemove",this.onMouseMove)}insertLocation2HTML(e){this.container.innerText=e.join(", ")}}class AL extends yn{constructor(...e){super(...e),v(this,"mScale",void 0),v(this,"iScale",void 0),v(this,"update",()=>{const r=this.mapsService,{maxWidth:n}=this.controlOption,i=r.getSize()[1]/2,o=r.containerToLngLat([0,i]),a=r.containerToLngLat([n,i]),s=lA([o.lng,o.lat],[a.lng,a.lat]);this.updateScales(s)})}getDefault(e){return le(le({},super.getDefault(e)),{},{name:"scale",position:go.BOTTOMLEFT,maxWidth:100,metric:!0,updateWhenIdle:!1,imperial:!1,lockWidth:!0})}onAdd(){const r=yt("div","l7-control-scale");this.resetScaleLines(r);const{updateWhenIdle:n}=this.controlOption;return this.mapsService.on(n?"moveend":"mapmove",this.update),this.mapsService.on(n?"zoomend":"zoomchange",this.update),r}onRemove(){const{updateWhenIdle:e}=this.controlOption;this.mapsService.off(e?"zoomend":"zoomchange",this.update),this.mapsService.off(e?"moveend":"mapmove",this.update)}setOptions(e){super.setOptions(e),this.checkUpdateOption(e,["lockWidth","maxWidth","metric","updateWhenIdle","imperial"])&&this.resetScaleLines(this.container)}updateScales(e){const{metric:r,imperial:n}=this.controlOption;r&&e&&this.updateMetric(e),n&&e&&this.updateImperial(e)}resetScaleLines(e){Fa(e);const{metric:r,imperial:n,maxWidth:i,lockWidth:o}=this.controlOption;o&&Zc(e,`width: ${i}px`),r&&(this.mScale=yt("div","l7-control-scale-line",e)),n&&(this.iScale=yt("div","l7-control-scale-line",e)),this.update()}updateScale(e,r,n){const{maxWidth:i}=this.controlOption;e.style.width=Math.round(i*n)+"px",e.innerHTML=r}getRoundNum(e){const r=Math.pow(10,(Math.floor(e)+"").length-1);let n=e/r;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,r*n}updateMetric(e){const r=this.getRoundNum(e),n=r<1e3?r+" m":r/1e3+" km";this.updateScale(this.mScale,n,r/e)}updateImperial(e){const r=e*3.2808399;let n,i,o;r>5280?(n=r/5280,i=this.getRoundNum(n),this.updateScale(this.iScale,i+" mi",i/n)):(o=this.getRoundNum(r),this.updateScale(this.iScale,o+" ft",o/r))}}class Db{constructor(){v(this,"mapService",void 0),v(this,"fontService",void 0)}apply(e,{styleAttributeService:r,mapService:n,fontService:i}){var o=this;this.mapService=n,this.fontService=i,e.hooks.init.tapPromise("DataMappingPlugin",ee(function*(){e.log(_r.MappingStart,xr.INIT),o.generateMaping(e,{styleAttributeService:r}),e.log(_r.MappingEnd,xr.INIT)})),e.hooks.beforeRenderData.tapPromise("DataMappingPlugin",function(){var a=ee(function*(s){if(!s)return s;e.dataState.dataMappingNeedUpdate=!1,e.log(_r.MappingStart,xr.UPDATE);const u=o.generateMaping(e,{styleAttributeService:r});return e.log(_r.MappingEnd,xr.UPDATE),u});return function(s){return a.apply(this,arguments)}}()),e.hooks.beforeRender.tap("DataMappingPlugin",()=>{const a=e.getSource();if(e.layerModelNeedUpdate||!a||!a.inited)return;const s=r.getLayerStyleAttributes()||[],u=r.getLayerStyleAttribute("filter"),{dataArray:l}=a.data;if(Array.isArray(l)&&l.length===0)return;const f=s.filter(h=>h.needRemapping);let c=l;if(u!=null&&u.needRemapping&&u!==null&&u!==void 0&&u.scale&&(c=l.filter(h=>this.applyAttributeMapping(u,h)[0])),f.length){const h=this.mapping(e,f,c,e.getEncodedData());e.setEncodedData(h)}})}generateMaping(e,{styleAttributeService:r}){const n=r.getLayerStyleAttributes()||[],i=r.getLayerStyleAttribute("filter"),{dataArray:o}=e.getSource().data;let a=o;i!=null&&i.scale&&(a=o.filter(u=>this.applyAttributeMapping(i,u)[0])),a=e.processData(a);const s=this.mapping(e,n,a,void 0);return e.setEncodedData(s),e.emit("dataUpdate",null),!0}mapping(e,r,n,i){const o=r.filter(s=>s.scale!==void 0).filter(s=>s.name!=="filter"),a=n.map((s,u)=>{const l=i?i[u]:{},f=le({id:s._id,coordinates:s.coordinates},l);return o.forEach(c=>{let h=this.applyAttributeMapping(c,s);(c.name==="color"||c.name==="stroke")&&(h=h.map(_=>Ft(_))),f[c.name]=Array.isArray(h)&&h.length===1?h[0]:h,c.name==="shape"&&(f.shape=this.fontService.getIconFontKey(f[c.name]))}),f});return r.forEach(s=>{s.needRemapping=!1}),this.adjustData2SimpleCoordinates(a),a}adjustData2SimpleCoordinates(e){e.length>0&&this.mapService.version==="SIMPLE"&&e.map(r=>{r.simpleCoordinate||(r.coordinates=this.unProjectCoordinates(r.coordinates),r.simpleCoordinate=!0)})}unProjectCoordinates(e){if(typeof e[0]=="number")return this.mapService.simpleMapCoord.unproject(e);if(e[0]&&e[0][0]instanceof Array){const r=[];return e.map(n=>{const i=[];n.map(o=>{i.push(this.mapService.simpleMapCoord.unproject(o))}),r.push(i)}),r}else{const r=[];return e.map(n=>{r.push(this.mapService.simpleMapCoord.unproject(n))}),r}}applyAttributeMapping(e,r){var n;if(!e.scale)return[];const i=(e==null||(n=e.scale)===null||n===void 0?void 0:n.scalers)||[],o=[];return i.forEach(({field:s})=>{var u;(r.hasOwnProperty(s)||((u=e.scale)===null||u===void 0?void 0:u.type)==="variable")&&o.push(r[s])}),e.mapping?e.mapping(o):[]}getArrowPoints(e,r){const n=[r[0]-e[0],r[1]-e[1]],i=cA(n);return[e[0]+i[0]*1e-4,e[1]+i[1]*1e-4]}}class Fb{constructor(){v(this,"mapService",void 0)}apply(e){var r=this;this.mapService=e.getContainer().mapService,e.hooks.init.tapPromise("DataSourcePlugin",ee(function*(){e.log(_r.SourceInitStart,xr.INIT);let n=e.getSource();if(!n){const{data:i,options:o}=e.sourceOption||e.defaultSourceConfig;n=new Cb(i,o),e.setSource(n)}n.inited?(r.updateClusterData(e),e.log(_r.SourceInitEnd,xr.INIT)):yield new Promise(i=>{n.on("update",o=>{o.type==="inited"&&(r.updateClusterData(e),e.log(_r.SourceInitEnd,xr.INIT)),i(null)})})})),e.hooks.beforeRenderData.tapPromise("DataSourcePlugin",ee(function*(){const n=r.updateClusterData(e),i=e.dataState.dataSourceNeedUpdate;return e.dataState.dataSourceNeedUpdate=!1,n||i}))}updateClusterData(e){if(e.isTileLayer||e.tileLayer||!e.getSource())return!1;const r=e.getSource(),n=r.cluster,{zoom:i=0}=r.clusterOptions,o=this.mapService.getZoom()-1,a=e.dataState.dataSourceNeedUpdate;return n&&a&&r.updateClusterData(Math.floor(o)),n&&Math.abs(e.clusterZoom-o)>=1?(i!==Math.floor(o)&&r.updateClusterData(Math.floor(o)),e.clusterZoom=o,!0):!1}}function i_(t,e){let r,n;for(const i of t)i!=null&&(r===void 0?i>=i&&(r=n=i):(r>i&&(r=i),n<i&&(n=i)));return[r,n]}function wb(t,e,r,n,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*e+(4-6*o+3*a)*r+(1+3*t+3*o-3*a)*n+a*i)/6}function Ub(t){var e=t.length-1;return function(r){var n=r<=0?r=0:r>=1?(r=1,e-1):Math.floor(r*e),i=t[n],o=t[n+1],a=n>0?t[n-1]:2*i-o,s=n<e-1?t[n+2]:2*o-i;return wb((r-n/e)*e,a,i,o,s)}}function of(t){return function(){return t}}function kb(t,e){return function(r){return t+r*e}}function zb(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}function Vb(t){return(t=+t)==1?l0:function(e,r){return r-e?zb(e,r,t):of(isNaN(e)?r:e)}}function l0(t,e){var r=e-t;return r?kb(t,r):of(isNaN(t)?e:t)}const o_=function t(e){var r=Vb(e);function n(i,o){var a=r((i=dc(i)).r,(o=dc(o)).r),s=r(i.g,o.g),u=r(i.b,o.b),l=l0(i.opacity,o.opacity);return function(f){return i.r=a(f),i.g=s(f),i.b=u(f),i.opacity=l(f),i+""}}return n.gamma=t,n}(1);function Wb(t){return function(e){var r=e.length,n=new Array(r),i=new Array(r),o=new Array(r),a,s;for(a=0;a<r;++a)s=dc(e[a]),n[a]=s.r||0,i[a]=s.g||0,o[a]=s.b||0;return n=t(n),i=t(i),o=t(o),s.opacity=1,function(u){return s.r=n(u),s.g=i(u),s.b=o(u),s+""}}}var Hb=Wb(Ub);function Xb(t,e){e||(e=[]);var r=t?Math.min(e.length,t.length):0,n=e.slice(),i;return function(o){for(i=0;i<r;++i)n[i]=t[i]*(1-o)+e[i]*o;return n}}function jb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Gb(t,e){var r=e?e.length:0,n=t?Math.min(r,t.length):0,i=new Array(n),o=new Array(r),a;for(a=0;a<n;++a)i[a]=af(t[a],e[a]);for(;a<r;++a)o[a]=e[a];return function(s){for(a=0;a<n;++a)o[a]=i[a](s);return o}}function $b(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function lu(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function Yb(t,e){var r={},n={},i;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(i in e)i in t?r[i]=af(t[i],e[i]):n[i]=e[i];return function(o){for(i in r)n[i]=r[i](o);return n}}var Cc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Zl=new RegExp(Cc.source,"g");function Zb(t){return function(){return t}}function Kb(t){return function(e){return t(e)+""}}function qb(t,e){var r=Cc.lastIndex=Zl.lastIndex=0,n,i,o,a=-1,s=[],u=[];for(t=t+"",e=e+"";(n=Cc.exec(t))&&(i=Zl.exec(e));)(o=i.index)>r&&(o=e.slice(r,o),s[a]?s[a]+=o:s[++a]=o),(n=n[0])===(i=i[0])?s[a]?s[a]+=i:s[++a]=i:(s[++a]=null,u.push({i:a,x:lu(n,i)})),r=Zl.lastIndex;return r<e.length&&(o=e.slice(r),s[a]?s[a]+=o:s[++a]=o),s.length<2?u[0]?Kb(u[0].x):Zb(e):(e=u.length,function(l){for(var f=0,c;f<e;++f)s[(c=u[f]).i]=c.x(l);return s.join("")})}function af(t,e){var r=typeof e,n;return e==null||r==="boolean"?of(e):(r==="number"?lu:r==="string"?(n=bd(e))?(e=n,o_):qb:e instanceof bd?o_:e instanceof Date?$b:jb(e)?Xb:Array.isArray(e)?Gb:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Yb:lu)(t,e)}function Qb(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}function sf(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function c0(t){return t.length===1&&(t=Jb(t)),{left:function(e,r,n,i){for(n==null&&(n=0),i==null&&(i=e.length);n<i;){var o=n+i>>>1;t(e[o],r)<0?n=o+1:i=o}return n},right:function(e,r,n,i){for(n==null&&(n=0),i==null&&(i=e.length);n<i;){var o=n+i>>>1;t(e[o],r)>0?i=o:n=o+1}return n}}}function Jb(t){return function(e,r){return sf(t(e),r)}}var e3=c0(sf),Uu=e3.right;function t3(t){return t===null?NaN:+t}var Oc=Math.sqrt(50),Ic=Math.sqrt(10),Mc=Math.sqrt(2);function f0(t,e,r){var n,i=-1,o,a,s;if(e=+e,t=+t,r=+r,t===e&&r>0)return[t];if((n=e<t)&&(o=t,t=e,e=o),(s=$s(t,e,r))===0||!isFinite(s))return[];if(s>0)for(t=Math.ceil(t/s),e=Math.floor(e/s),a=new Array(o=Math.ceil(e-t+1));++i<o;)a[i]=(t+i)*s;else for(t=Math.floor(t*s),e=Math.ceil(e*s),a=new Array(o=Math.ceil(t-e+1));++i<o;)a[i]=(t-i)/s;return n&&a.reverse(),a}function $s(t,e,r){var n=(e-t)/Math.max(0,r),i=Math.floor(Math.log(n)/Math.LN10),o=n/Math.pow(10,i);return i>=0?(o>=Oc?10:o>=Ic?5:o>=Mc?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=Oc?10:o>=Ic?5:o>=Mc?2:1)}function Bc(t,e,r){var n=Math.abs(e-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(n)/Math.LN10)),o=n/i;return o>=Oc?i*=10:o>=Ic?i*=5:o>=Mc&&(i*=2),e<t?-i:i}function r3(t,e,r){if(r==null&&(r=t3),!!(n=t.length)){if((e=+e)<=0||n<2)return+r(t[0],0,t);if(e>=1)return+r(t[n-1],n-1,t);var n,i=(n-1)*e,o=Math.floor(i),a=+r(t[o],o,t),s=+r(t[o+1],o+1,t);return a+(s-a)*(i-o)}}function qn(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function h0(t,e){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(e).domain(t);break}return this}var Qr="$";function cu(){}cu.prototype=fu.prototype={constructor:cu,has:function(t){return Qr+t in this},get:function(t){return this[Qr+t]},set:function(t,e){return this[Qr+t]=e,this},remove:function(t){var e=Qr+t;return e in this&&delete this[e]},clear:function(){for(var t in this)t[0]===Qr&&delete this[t]},keys:function(){var t=[];for(var e in this)e[0]===Qr&&t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)e[0]===Qr&&t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)e[0]===Qr&&t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)e[0]===Qr&&++t;return t},empty:function(){for(var t in this)if(t[0]===Qr)return!1;return!0},each:function(t){for(var e in this)e[0]===Qr&&t(this[e],e.slice(1),this)}};function fu(t,e){var r=new cu;if(t instanceof cu)t.each(function(s,u){r.set(u,s)});else if(Array.isArray(t)){var n=-1,i=t.length,o;if(e==null)for(;++n<i;)r.set(n,t[n]);else for(;++n<i;)r.set(e(o=t[n],n,t),o)}else if(t)for(var a in t)r.set(a,t[a]);return r}function a_(){}var ci=fu.prototype;a_.prototype={constructor:a_,has:ci.has,add:function(t){return t+="",this[Qr+t]=t,this},remove:ci.remove,clear:ci.clear,values:ci.keys,size:ci.size,empty:ci.empty,each:ci.each};var d0=Array.prototype,p0=d0.map,Ei=d0.slice,s_={name:"implicit"};function hu(){var t=fu(),e=[],r=[],n=s_;function i(o){var a=o+"",s=t.get(a);if(!s){if(n!==s_)return n;t.set(a,s=e.push(o))}return r[(s-1)%r.length]}return i.domain=function(o){if(!arguments.length)return e.slice();e=[],t=fu();for(var a=-1,s=o.length,u,l;++a<s;)t.has(l=(u=o[a])+"")||t.set(l,e.push(u));return i},i.range=function(o){return arguments.length?(r=Ei.call(o),i):r.slice()},i.unknown=function(o){return arguments.length?(n=o,i):n},i.copy=function(){return hu(e,r).unknown(n)},qn.apply(i,arguments),i}function n3(t){return function(){return t}}function i3(t){return+t}var u_=[0,1];function Or(t){return t}function Nc(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:n3(isNaN(e)?NaN:.5)}function l_(t){var e=t[0],r=t[t.length-1],n;return e>r&&(n=e,e=r,r=n),function(i){return Math.max(e,Math.min(r,i))}}function o3(t,e,r){var n=t[0],i=t[1],o=e[0],a=e[1];return i<n?(n=Nc(i,n),o=r(a,o)):(n=Nc(n,i),o=r(o,a)),function(s){return o(n(s))}}function a3(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),o=new Array(n),a=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<n;)i[a]=Nc(t[a],t[a+1]),o[a]=r(e[a],e[a+1]);return function(s){var u=Uu(t,s,1,n)-1;return o[u](i[u](s))}}function ku(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function uf(){var t=u_,e=u_,r=af,n,i,o,a=Or,s,u,l;function f(){return s=Math.min(t.length,e.length)>2?a3:o3,u=l=null,c}function c(h){return isNaN(h=+h)?o:(u||(u=s(t.map(n),e,r)))(n(a(h)))}return c.invert=function(h){return a(i((l||(l=s(e,t.map(n),lu)))(h)))},c.domain=function(h){return arguments.length?(t=p0.call(h,i3),a===Or||(a=l_(t)),f()):t.slice()},c.range=function(h){return arguments.length?(e=Ei.call(h),f()):e.slice()},c.rangeRound=function(h){return e=Ei.call(h),r=Qb,f()},c.clamp=function(h){return arguments.length?(a=h?l_(t):Or,c):a!==Or},c.interpolate=function(h){return arguments.length?(r=h,f()):r},c.unknown=function(h){return arguments.length?(o=h,c):o},function(h,_){return n=h,i=_,f()}}function _0(t,e){return uf()(t,e)}function s3(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function du(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function yo(t){return t=du(Math.abs(t)),t?t[1]:NaN}function u3(t,e){return function(r,n){for(var i=r.length,o=[],a=0,s=t[0],u=0;i>0&&s>0&&(u+s+1>n&&(s=Math.max(1,n-u)),o.push(r.substring(i-=s,i+s)),!((u+=s+1)>n));)s=t[a=(a+1)%t.length];return o.reverse().join(e)}}function l3(t){return function(e){return e.replace(/[0-9]/g,function(r){return t[+r]})}}var c3=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function pu(t){if(!(e=c3.exec(t)))throw new Error("invalid format: "+t);var e;return new lf({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}pu.prototype=lf.prototype;function lf(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}lf.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function f3(t){e:for(var e=t.length,r=1,n=-1,i;r<e;++r)switch(t[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+t[r])break e;n>0&&(n=0);break}return n>0?t.slice(0,n)+t.slice(i+1):t}var m0;function h3(t,e){var r=du(t,e);if(!r)return t+"";var n=r[0],i=r[1],o=i-(m0=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=n.length;return o===a?n:o>a?n+new Array(o-a+1).join("0"):o>0?n.slice(0,o)+"."+n.slice(o):"0."+new Array(1-o).join("0")+du(t,Math.max(0,e+o-1))[0]}function c_(t,e){var r=du(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const f_={"%":function(t,e){return(t*100).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:s3,e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return c_(t*100,e)},r:c_,s:h3,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function h_(t){return t}var d_=Array.prototype.map,p_=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function d3(t){var e=t.grouping===void 0||t.thousands===void 0?h_:u3(d_.call(t.grouping,Number),t.thousands+""),r=t.currency===void 0?"":t.currency[0]+"",n=t.currency===void 0?"":t.currency[1]+"",i=t.decimal+"",o=t.numerals===void 0?h_:l3(d_.call(t.numerals,String)),a=t.percent===void 0?"%":t.percent+"",s=t.minus+"",u=t.nan===void 0?"NaN":t.nan+"";function l(c){c=pu(c);var h=c.fill,_=c.align,m=c.sign,E=c.symbol,S=c.zero,M=c.width,P=c.comma,F=c.precision,V=c.trim,pe=c.type;pe==="n"?(P=!0,pe="g"):f_[pe]||(F===void 0&&(F=12),V=!0,pe="g"),(S||h==="0"&&_==="=")&&(S=!0,h="0",_="=");var ce=E==="$"?r:E==="#"&&/[boxX]/.test(pe)?"0"+pe.toLowerCase():"",j=E==="$"?n:/[%p]/.test(pe)?a:"",fe=f_[pe],ze=/[defgprs%]/.test(pe);F=F===void 0?6:/[gprs]/.test(pe)?Math.max(1,Math.min(21,F)):Math.max(0,Math.min(20,F));function te(k){var q=ce,ne=j,xe,Fe,$e;if(pe==="c")ne=fe(k)+ne,k="";else{k=+k;var qe=k<0||1/k<0;if(k=isNaN(k)?u:fe(Math.abs(k),F),V&&(k=f3(k)),qe&&+k==0&&m!=="+"&&(qe=!1),q=(qe?m==="("?m:s:m==="-"||m==="("?"":m)+q,ne=(pe==="s"?p_[8+m0/3]:"")+ne+(qe&&m==="("?")":""),ze){for(xe=-1,Fe=k.length;++xe<Fe;)if($e=k.charCodeAt(xe),48>$e||$e>57){ne=($e===46?i+k.slice(xe+1):k.slice(xe))+ne,k=k.slice(0,xe);break}}}P&&!S&&(k=e(k,1/0));var ut=q.length+k.length+ne.length,He=ut<M?new Array(M-ut+1).join(h):"";switch(P&&S&&(k=e(He+k,He.length?M-ne.length:1/0),He=""),_){case"<":k=q+k+ne+He;break;case"=":k=q+He+k+ne;break;case"^":k=He.slice(0,ut=He.length>>1)+q+k+ne+He.slice(ut);break;default:k=He+q+k+ne;break}return o(k)}return te.toString=function(){return c+""},te}function f(c,h){var _=l((c=pu(c),c.type="f",c)),m=Math.max(-8,Math.min(8,Math.floor(yo(h)/3)))*3,E=Math.pow(10,-m),S=p_[8+m/3];return function(M){return _(E*M)+S}}return{format:l,formatPrefix:f}}var xs,cf,v0;p3({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function p3(t){return xs=d3(t),cf=xs.format,v0=xs.formatPrefix,xs}function _3(t){return Math.max(0,-yo(Math.abs(t)))}function m3(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(yo(e)/3)))*3-yo(Math.abs(t)))}function v3(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,yo(e)-yo(t))+1}function g3(t,e,r,n){var i=Bc(t,e,r),o;switch(n=pu(n??",f"),n.type){case"s":{var a=Math.max(Math.abs(t),Math.abs(e));return n.precision==null&&!isNaN(o=m3(i,a))&&(n.precision=o),v0(n,a)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(o=v3(i,Math.max(Math.abs(t),Math.abs(e))))&&(n.precision=o-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(o=_3(i))&&(n.precision=o-(n.type==="%")*2);break}}return cf(n)}function wa(t){var e=t.domain;return t.ticks=function(r){var n=e();return f0(n[0],n[n.length-1],r??10)},t.tickFormat=function(r,n){var i=e();return g3(i[0],i[i.length-1],r??10,n)},t.nice=function(r){r==null&&(r=10);var n=e(),i=0,o=n.length-1,a=n[i],s=n[o],u;return s<a&&(u=a,a=s,s=u,u=i,i=o,o=u),u=$s(a,s,r),u>0?(a=Math.floor(a/u)*u,s=Math.ceil(s/u)*u,u=$s(a,s,r)):u<0&&(a=Math.ceil(a*u)/u,s=Math.floor(s*u)/u,u=$s(a,s,r)),u>0?(n[i]=Math.floor(a/u)*u,n[o]=Math.ceil(s/u)*u,e(n)):u<0&&(n[i]=Math.ceil(a*u)/u,n[o]=Math.floor(s*u)/u,e(n)),t},t}function g0(){var t=_0(Or,Or);return t.copy=function(){return ku(t,g0())},qn.apply(t,arguments),wa(t)}function E0(t,e){t=t.slice();var r=0,n=t.length-1,i=t[r],o=t[n],a;return o<i&&(a=r,r=n,n=a,a=i,i=o,o=a),t[r]=e.floor(i),t[n]=e.ceil(o),t}function __(t){return Math.log(t)}function m_(t){return Math.exp(t)}function E3(t){return-Math.log(-t)}function y3(t){return-Math.exp(-t)}function A3(t){return isFinite(t)?+("1e"+t):t<0?0:t}function T3(t){return t===10?A3:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}}function S3(t){return t===Math.E?Math.log:t===10&&Math.log10||t===2&&Math.log2||(t=Math.log(t),function(e){return Math.log(e)/t})}function v_(t){return function(e){return-t(-e)}}function x3(t){var e=t(__,m_),r=e.domain,n=10,i,o;function a(){return i=S3(n),o=T3(n),r()[0]<0?(i=v_(i),o=v_(o),t(E3,y3)):t(__,m_),e}return e.base=function(s){return arguments.length?(n=+s,a()):n},e.domain=function(s){return arguments.length?(r(s),a()):r()},e.ticks=function(s){var u=r(),l=u[0],f=u[u.length-1],c;(c=f<l)&&(h=l,l=f,f=h);var h=i(l),_=i(f),m,E,S,M=s==null?10:+s,P=[];if(!(n%1)&&_-h<M){if(h=Math.round(h)-1,_=Math.round(_)+1,l>0){for(;h<_;++h)for(E=1,m=o(h);E<n;++E)if(S=m*E,!(S<l)){if(S>f)break;P.push(S)}}else for(;h<_;++h)for(E=n-1,m=o(h);E>=1;--E)if(S=m*E,!(S<l)){if(S>f)break;P.push(S)}}else P=f0(h,_,Math.min(_-h,M)).map(o);return c?P.reverse():P},e.tickFormat=function(s,u){if(u==null&&(u=n===10?".0e":","),typeof u!="function"&&(u=cf(u)),s===1/0)return u;s==null&&(s=10);var l=Math.max(1,n*s/e.ticks().length);return function(f){var c=f/o(Math.round(i(f)));return c*n<n-.5&&(c*=n),c<=l?u(f):""}},e.nice=function(){return r(E0(r(),{floor:function(s){return o(Math.floor(i(s)))},ceil:function(s){return o(Math.ceil(i(s)))}}))},e}function y0(){var t=x3(uf()).domain([1,10]);return t.copy=function(){return ku(t,y0()).base(t.base())},qn.apply(t,arguments),t}function g_(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function R3(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function b3(t){return t<0?-t*t:t*t}function C3(t){var e=t(Or,Or),r=1;function n(){return r===1?t(Or,Or):r===.5?t(R3,b3):t(g_(r),g_(1/r))}return e.exponent=function(i){return arguments.length?(r=+i,n()):r},wa(e)}function A0(){var t=C3(uf());return t.copy=function(){return ku(t,A0()).exponent(t.exponent())},qn.apply(t,arguments),t}function T0(){var t=[],e=[],r=[],n;function i(){var a=0,s=Math.max(1,e.length);for(r=new Array(s-1);++a<s;)r[a-1]=r3(t,a/s);return o}function o(a){return isNaN(a=+a)?n:e[Uu(r,a)]}return o.invertExtent=function(a){var s=e.indexOf(a);return s<0?[NaN,NaN]:[s>0?r[s-1]:t[0],s<r.length?r[s]:t[t.length-1]]},o.domain=function(a){if(!arguments.length)return t.slice();t=[];for(var s=0,u=a.length,l;s<u;++s)l=a[s],l!=null&&!isNaN(l=+l)&&t.push(l);return t.sort(sf),i()},o.range=function(a){return arguments.length?(e=Ei.call(a),i()):e.slice()},o.unknown=function(a){return arguments.length?(n=a,o):n},o.quantiles=function(){return r.slice()},o.copy=function(){return T0().domain(t).range(e).unknown(n)},qn.apply(o,arguments)}function S0(){var t=0,e=1,r=1,n=[.5],i=[0,1],o;function a(u){return u<=u?i[Uu(n,u,0,r)]:o}function s(){var u=-1;for(n=new Array(r);++u<r;)n[u]=((u+1)*e-(u-r)*t)/(r+1);return a}return a.domain=function(u){return arguments.length?(t=+u[0],e=+u[1],s()):[t,e]},a.range=function(u){return arguments.length?(r=(i=Ei.call(u)).length-1,s()):i.slice()},a.invertExtent=function(u){var l=i.indexOf(u);return l<0?[NaN,NaN]:l<1?[t,n[0]]:l>=r?[n[r-1],e]:[n[l-1],n[l]]},a.unknown=function(u){return arguments.length&&(o=u),a},a.thresholds=function(){return n.slice()},a.copy=function(){return S0().domain([t,e]).range(i).unknown(o)},qn.apply(wa(a),arguments)}function x0(){var t=[.5],e=[0,1],r,n=1;function i(o){return o<=o?e[Uu(t,o,0,n)]:r}return i.domain=function(o){return arguments.length?(t=Ei.call(o),n=Math.min(t.length,e.length-1),i):t.slice()},i.range=function(o){return arguments.length?(e=Ei.call(o),n=Math.min(t.length,e.length-1),i):e.slice()},i.invertExtent=function(o){var a=e.indexOf(o);return[t[a-1],t[a]]},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return x0().domain(t).range(e).unknown(r)},qn.apply(i,arguments)}var Kl=new Date,ql=new Date;function Dr(t,e,r,n){function i(o){return t(o=arguments.length===0?new Date:new Date(+o)),o}return i.floor=function(o){return t(o=new Date(+o)),o},i.ceil=function(o){return t(o=new Date(o-1)),e(o,1),t(o),o},i.round=function(o){var a=i(o),s=i.ceil(o);return o-a<s-o?a:s},i.offset=function(o,a){return e(o=new Date(+o),a==null?1:Math.floor(a)),o},i.range=function(o,a,s){var u=[],l;if(o=i.ceil(o),s=s==null?1:Math.floor(s),!(o<a)||!(s>0))return u;do u.push(l=new Date(+o)),e(o,s),t(o);while(l<o&&o<a);return u},i.filter=function(o){return Dr(function(a){if(a>=a)for(;t(a),!o(a);)a.setTime(a-1)},function(a,s){if(a>=a)if(s<0)for(;++s<=0;)for(;e(a,-1),!o(a););else for(;--s>=0;)for(;e(a,1),!o(a););})},r&&(i.count=function(o,a){return Kl.setTime(+o),ql.setTime(+a),t(Kl),t(ql),Math.floor(r(Kl,ql))},i.every=function(o){return o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?i.filter(n?function(a){return n(a)%o===0}:function(a){return i.count(0,a)%o===0}):i}),i}var _u=Dr(function(){},function(t,e){t.setTime(+t+e)},function(t,e){return e-t});_u.every=function(t){return t=Math.floor(t),!isFinite(t)||!(t>0)?null:t>1?Dr(function(e){e.setTime(Math.floor(e/t)*t)},function(e,r){e.setTime(+e+r*t)},function(e,r){return(r-e)/t}):_u};_u.range;var mu=1e3,Oa=6e4,E_=36e5,R0=864e5,b0=6048e5,C0=Dr(function(t){t.setTime(t-t.getMilliseconds())},function(t,e){t.setTime(+t+e*mu)},function(t,e){return(e-t)/mu},function(t){return t.getUTCSeconds()});C0.range;var O0=Dr(function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*mu)},function(t,e){t.setTime(+t+e*Oa)},function(t,e){return(e-t)/Oa},function(t){return t.getMinutes()});O0.range;var I0=Dr(function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*mu-t.getMinutes()*Oa)},function(t,e){t.setTime(+t+e*E_)},function(t,e){return(e-t)/E_},function(t){return t.getHours()});I0.range;var zu=Dr(function(t){t.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*Oa)/R0},function(t){return t.getDate()-1});zu.range;function xi(t){return Dr(function(e){e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)},function(e,r){e.setDate(e.getDate()+r*7)},function(e,r){return(r-e-(r.getTimezoneOffset()-e.getTimezoneOffset())*Oa)/b0})}var ff=xi(0),vu=xi(1),O3=xi(2),I3=xi(3),Ao=xi(4),M3=xi(5),B3=xi(6);ff.range;vu.range;O3.range;I3.range;Ao.range;M3.range;B3.range;var M0=Dr(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,e){t.setMonth(t.getMonth()+e)},function(t,e){return e.getMonth()-t.getMonth()+(e.getFullYear()-t.getFullYear())*12},function(t){return t.getMonth()});M0.range;var Yn=Dr(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,e){t.setFullYear(t.getFullYear()+e)},function(t,e){return e.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Yn.every=function(t){return!isFinite(t=Math.floor(t))||!(t>0)?null:Dr(function(e){e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,r){e.setFullYear(e.getFullYear()+r*t)})};Yn.range;var hf=Dr(function(t){t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+e)},function(t,e){return(e-t)/R0},function(t){return t.getUTCDate()-1});hf.range;function Ri(t){return Dr(function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)},function(e,r){e.setUTCDate(e.getUTCDate()+r*7)},function(e,r){return(r-e)/b0})}var B0=Ri(0),gu=Ri(1),N3=Ri(2),P3=Ri(3),To=Ri(4),L3=Ri(5),D3=Ri(6);B0.range;gu.range;N3.range;P3.range;To.range;L3.range;D3.range;var yi=Dr(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e)},function(t,e){return e.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});yi.every=function(t){return!isFinite(t=Math.floor(t))||!(t>0)?null:Dr(function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,r){e.setUTCFullYear(e.getUTCFullYear()+r*t)})};yi.range;function Ql(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Jl(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function ea(t,e,r){return{y:t,m:e,d:r,H:0,M:0,S:0,L:0}}function F3(t){var e=t.dateTime,r=t.date,n=t.time,i=t.periods,o=t.days,a=t.shortDays,s=t.months,u=t.shortMonths,l=ta(i),f=ra(i),c=ta(o),h=ra(o),_=ta(a),m=ra(a),E=ta(s),S=ra(s),M=ta(u),P=ra(u),F={a:qe,A:ut,b:He,B:Ye,c:null,d:R_,e:R_,f:oC,g:_C,G:vC,H:rC,I:nC,j:iC,L:N0,m:aC,M:sC,p:pt,q:St,Q:O_,s:I_,S:uC,u:lC,U:cC,V:fC,w:hC,W:dC,x:null,X:null,y:pC,Y:mC,Z:gC,"%":C_},V={a:Ct,A:Nt,b:_t,B:Rr,c:null,d:b_,e:b_,f:TC,g:NC,G:LC,H:EC,I:yC,j:AC,L:L0,m:SC,M:xC,p:Yr,q:No,Q:O_,s:I_,S:RC,u:bC,U:CC,V:OC,w:IC,W:MC,x:null,X:null,y:BC,Y:PC,Z:DC,"%":C_},pe={a:te,A:k,b:q,B:ne,c:xe,d:S_,e:S_,f:Q3,g:T_,G:A_,H:x_,I:x_,j:Y3,L:q3,m:$3,M:Z3,p:ze,q:G3,Q:eC,s:tC,S:K3,u:V3,U:W3,V:H3,w:z3,W:X3,x:Fe,X:$e,y:T_,Y:A_,Z:j3,"%":J3};F.x=ce(r,F),F.X=ce(n,F),F.c=ce(e,F),V.x=ce(r,V),V.X=ce(n,V),V.c=ce(e,V);function ce(je,vt){return function(xt){var Ce=[],tr=-1,Mt=0,cr=je.length,mr,yr,fr;for(xt instanceof Date||(xt=new Date(+xt));++tr<cr;)je.charCodeAt(tr)===37&&(Ce.push(je.slice(Mt,tr)),(yr=y_[mr=je.charAt(++tr)])!=null?mr=je.charAt(++tr):yr=mr==="e"?" ":"0",(fr=vt[mr])&&(mr=fr(xt,yr)),Ce.push(mr),Mt=tr+1);return Ce.push(je.slice(Mt,tr)),Ce.join("")}}function j(je,vt){return function(xt){var Ce=ea(1900,void 0,1),tr=fe(Ce,je,xt+="",0),Mt,cr;if(tr!=xt.length)return null;if("Q"in Ce)return new Date(Ce.Q);if("s"in Ce)return new Date(Ce.s*1e3+("L"in Ce?Ce.L:0));if(vt&&!("Z"in Ce)&&(Ce.Z=0),"p"in Ce&&(Ce.H=Ce.H%12+Ce.p*12),Ce.m===void 0&&(Ce.m="q"in Ce?Ce.q:0),"V"in Ce){if(Ce.V<1||Ce.V>53)return null;"w"in Ce||(Ce.w=1),"Z"in Ce?(Mt=Jl(ea(Ce.y,0,1)),cr=Mt.getUTCDay(),Mt=cr>4||cr===0?gu.ceil(Mt):gu(Mt),Mt=hf.offset(Mt,(Ce.V-1)*7),Ce.y=Mt.getUTCFullYear(),Ce.m=Mt.getUTCMonth(),Ce.d=Mt.getUTCDate()+(Ce.w+6)%7):(Mt=Ql(ea(Ce.y,0,1)),cr=Mt.getDay(),Mt=cr>4||cr===0?vu.ceil(Mt):vu(Mt),Mt=zu.offset(Mt,(Ce.V-1)*7),Ce.y=Mt.getFullYear(),Ce.m=Mt.getMonth(),Ce.d=Mt.getDate()+(Ce.w+6)%7)}else("W"in Ce||"U"in Ce)&&("w"in Ce||(Ce.w="u"in Ce?Ce.u%7:"W"in Ce?1:0),cr="Z"in Ce?Jl(ea(Ce.y,0,1)).getUTCDay():Ql(ea(Ce.y,0,1)).getDay(),Ce.m=0,Ce.d="W"in Ce?(Ce.w+6)%7+Ce.W*7-(cr+5)%7:Ce.w+Ce.U*7-(cr+6)%7);return"Z"in Ce?(Ce.H+=Ce.Z/100|0,Ce.M+=Ce.Z%100,Jl(Ce)):Ql(Ce)}}function fe(je,vt,xt,Ce){for(var tr=0,Mt=vt.length,cr=xt.length,mr,yr;tr<Mt;){if(Ce>=cr)return-1;if(mr=vt.charCodeAt(tr++),mr===37){if(mr=vt.charAt(tr++),yr=pe[mr in y_?vt.charAt(tr++):mr],!yr||(Ce=yr(je,xt,Ce))<0)return-1}else if(mr!=xt.charCodeAt(Ce++))return-1}return Ce}function ze(je,vt,xt){var Ce=l.exec(vt.slice(xt));return Ce?(je.p=f[Ce[0].toLowerCase()],xt+Ce[0].length):-1}function te(je,vt,xt){var Ce=_.exec(vt.slice(xt));return Ce?(je.w=m[Ce[0].toLowerCase()],xt+Ce[0].length):-1}function k(je,vt,xt){var Ce=c.exec(vt.slice(xt));return Ce?(je.w=h[Ce[0].toLowerCase()],xt+Ce[0].length):-1}function q(je,vt,xt){var Ce=M.exec(vt.slice(xt));return Ce?(je.m=P[Ce[0].toLowerCase()],xt+Ce[0].length):-1}function ne(je,vt,xt){var Ce=E.exec(vt.slice(xt));return Ce?(je.m=S[Ce[0].toLowerCase()],xt+Ce[0].length):-1}function xe(je,vt,xt){return fe(je,e,vt,xt)}function Fe(je,vt,xt){return fe(je,r,vt,xt)}function $e(je,vt,xt){return fe(je,n,vt,xt)}function qe(je){return a[je.getDay()]}function ut(je){return o[je.getDay()]}function He(je){return u[je.getMonth()]}function Ye(je){return s[je.getMonth()]}function pt(je){return i[+(je.getHours()>=12)]}function St(je){return 1+~~(je.getMonth()/3)}function Ct(je){return a[je.getUTCDay()]}function Nt(je){return o[je.getUTCDay()]}function _t(je){return u[je.getUTCMonth()]}function Rr(je){return s[je.getUTCMonth()]}function Yr(je){return i[+(je.getUTCHours()>=12)]}function No(je){return 1+~~(je.getUTCMonth()/3)}return{format:function(je){var vt=ce(je+="",F);return vt.toString=function(){return je},vt},parse:function(je){var vt=j(je+="",!1);return vt.toString=function(){return je},vt},utcFormat:function(je){var vt=ce(je+="",V);return vt.toString=function(){return je},vt},utcParse:function(je){var vt=j(je+="",!0);return vt.toString=function(){return je},vt}}}var y_={"-":"",_:" ",0:"0"},Er=/^\s*\d+/,w3=/^%/,U3=/[\\^$*+?|[\]().{}]/g;function Bt(t,e,r){var n=t<0?"-":"",i=(n?-t:t)+"",o=i.length;return n+(o<r?new Array(r-o+1).join(e)+i:i)}function k3(t){return t.replace(U3,"\\$&")}function ta(t){return new RegExp("^(?:"+t.map(k3).join("|")+")","i")}function ra(t){for(var e={},r=-1,n=t.length;++r<n;)e[t[r].toLowerCase()]=r;return e}function z3(t,e,r){var n=Er.exec(e.slice(r,r+1));return n?(t.w=+n[0],r+n[0].length):-1}function V3(t,e,r){var n=Er.exec(e.slice(r,r+1));return n?(t.u=+n[0],r+n[0].length):-1}function W3(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.U=+n[0],r+n[0].length):-1}function H3(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.V=+n[0],r+n[0].length):-1}function X3(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.W=+n[0],r+n[0].length):-1}function A_(t,e,r){var n=Er.exec(e.slice(r,r+4));return n?(t.y=+n[0],r+n[0].length):-1}function T_(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function j3(t,e,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r,r+6));return n?(t.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function G3(t,e,r){var n=Er.exec(e.slice(r,r+1));return n?(t.q=n[0]*3-3,r+n[0].length):-1}function $3(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.m=n[0]-1,r+n[0].length):-1}function S_(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.d=+n[0],r+n[0].length):-1}function Y3(t,e,r){var n=Er.exec(e.slice(r,r+3));return n?(t.m=0,t.d=+n[0],r+n[0].length):-1}function x_(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.H=+n[0],r+n[0].length):-1}function Z3(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.M=+n[0],r+n[0].length):-1}function K3(t,e,r){var n=Er.exec(e.slice(r,r+2));return n?(t.S=+n[0],r+n[0].length):-1}function q3(t,e,r){var n=Er.exec(e.slice(r,r+3));return n?(t.L=+n[0],r+n[0].length):-1}function Q3(t,e,r){var n=Er.exec(e.slice(r,r+6));return n?(t.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function J3(t,e,r){var n=w3.exec(e.slice(r,r+1));return n?r+n[0].length:-1}function eC(t,e,r){var n=Er.exec(e.slice(r));return n?(t.Q=+n[0],r+n[0].length):-1}function tC(t,e,r){var n=Er.exec(e.slice(r));return n?(t.s=+n[0],r+n[0].length):-1}function R_(t,e){return Bt(t.getDate(),e,2)}function rC(t,e){return Bt(t.getHours(),e,2)}function nC(t,e){return Bt(t.getHours()%12||12,e,2)}function iC(t,e){return Bt(1+zu.count(Yn(t),t),e,3)}function N0(t,e){return Bt(t.getMilliseconds(),e,3)}function oC(t,e){return N0(t,e)+"000"}function aC(t,e){return Bt(t.getMonth()+1,e,2)}function sC(t,e){return Bt(t.getMinutes(),e,2)}function uC(t,e){return Bt(t.getSeconds(),e,2)}function lC(t){var e=t.getDay();return e===0?7:e}function cC(t,e){return Bt(ff.count(Yn(t)-1,t),e,2)}function P0(t){var e=t.getDay();return e>=4||e===0?Ao(t):Ao.ceil(t)}function fC(t,e){return t=P0(t),Bt(Ao.count(Yn(t),t)+(Yn(t).getDay()===4),e,2)}function hC(t){return t.getDay()}function dC(t,e){return Bt(vu.count(Yn(t)-1,t),e,2)}function pC(t,e){return Bt(t.getFullYear()%100,e,2)}function _C(t,e){return t=P0(t),Bt(t.getFullYear()%100,e,2)}function mC(t,e){return Bt(t.getFullYear()%1e4,e,4)}function vC(t,e){var r=t.getDay();return t=r>=4||r===0?Ao(t):Ao.ceil(t),Bt(t.getFullYear()%1e4,e,4)}function gC(t){var e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+Bt(e/60|0,"0",2)+Bt(e%60,"0",2)}function b_(t,e){return Bt(t.getUTCDate(),e,2)}function EC(t,e){return Bt(t.getUTCHours(),e,2)}function yC(t,e){return Bt(t.getUTCHours()%12||12,e,2)}function AC(t,e){return Bt(1+hf.count(yi(t),t),e,3)}function L0(t,e){return Bt(t.getUTCMilliseconds(),e,3)}function TC(t,e){return L0(t,e)+"000"}function SC(t,e){return Bt(t.getUTCMonth()+1,e,2)}function xC(t,e){return Bt(t.getUTCMinutes(),e,2)}function RC(t,e){return Bt(t.getUTCSeconds(),e,2)}function bC(t){var e=t.getUTCDay();return e===0?7:e}function CC(t,e){return Bt(B0.count(yi(t)-1,t),e,2)}function D0(t){var e=t.getUTCDay();return e>=4||e===0?To(t):To.ceil(t)}function OC(t,e){return t=D0(t),Bt(To.count(yi(t),t)+(yi(t).getUTCDay()===4),e,2)}function IC(t){return t.getUTCDay()}function MC(t,e){return Bt(gu.count(yi(t)-1,t),e,2)}function BC(t,e){return Bt(t.getUTCFullYear()%100,e,2)}function NC(t,e){return t=D0(t),Bt(t.getUTCFullYear()%100,e,2)}function PC(t,e){return Bt(t.getUTCFullYear()%1e4,e,4)}function LC(t,e){var r=t.getUTCDay();return t=r>=4||r===0?To(t):To.ceil(t),Bt(t.getUTCFullYear()%1e4,e,4)}function DC(){return"+0000"}function C_(){return"%"}function O_(t){return+t}function I_(t){return Math.floor(+t/1e3)}var Yi,F0;FC({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function FC(t){return Yi=F3(t),F0=Yi.format,Yi.parse,Yi.utcFormat,Yi.utcParse,Yi}var Ea=1e3,ya=Ea*60,Aa=ya*60,Ia=Aa*24,wC=Ia*7,M_=Ia*30,ec=Ia*365;function UC(t){return new Date(t)}function kC(t){return t instanceof Date?+t:+new Date(+t)}function w0(t,e,r,n,i,o,a,s,u){var l=_0(Or,Or),f=l.invert,c=l.domain,h=u(".%L"),_=u(":%S"),m=u("%I:%M"),E=u("%I %p"),S=u("%a %d"),M=u("%b %d"),P=u("%B"),F=u("%Y"),V=[[a,1,Ea],[a,5,5*Ea],[a,15,15*Ea],[a,30,30*Ea],[o,1,ya],[o,5,5*ya],[o,15,15*ya],[o,30,30*ya],[i,1,Aa],[i,3,3*Aa],[i,6,6*Aa],[i,12,12*Aa],[n,1,Ia],[n,2,2*Ia],[r,1,wC],[e,1,M_],[e,3,3*M_],[t,1,ec]];function pe(j){return(a(j)<j?h:o(j)<j?_:i(j)<j?m:n(j)<j?E:e(j)<j?r(j)<j?S:M:t(j)<j?P:F)(j)}function ce(j,fe,ze,te){if(j==null&&(j=10),typeof j=="number"){var k=Math.abs(ze-fe)/j,q=c0(function(ne){return ne[2]}).right(V,k);q===V.length?(te=Bc(fe/ec,ze/ec,j),j=t):q?(q=V[k/V[q-1][2]<V[q][2]/k?q-1:q],te=q[1],j=q[0]):(te=Math.max(Bc(fe,ze,j),1),j=s)}return te==null?j:j.every(te)}return l.invert=function(j){return new Date(f(j))},l.domain=function(j){return arguments.length?c(p0.call(j,kC)):c().map(UC)},l.ticks=function(j,fe){var ze=c(),te=ze[0],k=ze[ze.length-1],q=k<te,ne;return q&&(ne=te,te=k,k=ne),ne=ce(j,te,k,fe),ne=ne?ne.range(te,k+1):[],q?ne.reverse():ne},l.tickFormat=function(j,fe){return fe==null?pe:u(fe)},l.nice=function(j,fe){var ze=c();return(j=ce(j,ze[0],ze[ze.length-1],fe))?c(E0(ze,j)):l},l.copy=function(){return ku(l,w0(t,e,r,n,i,o,a,s,u))},l}function zC(){return qn.apply(w0(Yn,M0,ff,zu,I0,O0,C0,_u,F0).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function VC(){var t=0,e=1,r,n,i,o,a=Or,s=!1,u;function l(f){return isNaN(f=+f)?u:a(i===0?.5:(f=(o(f)-r)*i,s?Math.max(0,Math.min(1,f)):f))}return l.domain=function(f){return arguments.length?(r=o(t=+f[0]),n=o(e=+f[1]),i=r===n?0:1/(n-r),l):[t,e]},l.clamp=function(f){return arguments.length?(s=!!f,l):s},l.interpolator=function(f){return arguments.length?(a=f,l):a},l.unknown=function(f){return arguments.length?(u=f,l):u},function(f){return o=f,r=f(t),n=f(e),i=r===n?0:1/(n-r),l}}function U0(t,e){return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function k0(){var t=wa(VC()(Or));return t.copy=function(){return U0(t,k0())},h0.apply(t,arguments)}function WC(){var t=0,e=.5,r=1,n,i,o,a,s,u=Or,l,f=!1,c;function h(_){return isNaN(_=+_)?c:(_=.5+((_=+l(_))-i)*(_<i?a:s),u(f?Math.max(0,Math.min(1,_)):_))}return h.domain=function(_){return arguments.length?(n=l(t=+_[0]),i=l(e=+_[1]),o=l(r=+_[2]),a=n===i?0:.5/(i-n),s=i===o?0:.5/(o-i),h):[t,e,r]},h.clamp=function(_){return arguments.length?(f=!!_,h):f},h.interpolator=function(_){return arguments.length?(u=_,h):u},h.unknown=function(_){return arguments.length?(c=_,h):c},function(_){return l=_,n=_(t),i=_(e),o=_(r),a=n===i?0:.5/(i-n),s=i===o?0:.5/(o-i),h}}function z0(){var t=wa(WC()(Or));return t.copy=function(){return U0(t,z0())},h0.apply(t,arguments)}function V0(t){let e,r=[];function n(i){return i??e}return n.invert=n,n.domain=n.range=i=>i?(r=i,i):r,n.unknown=i=>i?(e=i,i):e,n.copy=()=>V0().unknown(e),n}const{isNil:tc,isString:HC,uniq:XC}=Mr,jC=/^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,GC={[Lt.LINEAR]:g0,[Lt.POWER]:A0,[Lt.LOG]:y0,[Lt.IDENTITY]:V0,[Lt.SEQUENTIAL]:k0,[Lt.TIME]:zC,[Lt.QUANTILE]:T0,[Lt.QUANTIZE]:S0,[Lt.THRESHOLD]:x0,[Lt.CAT]:hu,[Lt.DIVERGING]:z0};class $C{constructor(){v(this,"scaleOptions",{})}apply(e,{styleAttributeService:r}){var n=this;e.hooks.init.tapPromise("FeatureScalePlugin",ee(function*(){var i;e.log(_r.ScaleInitStart,xr.INIT),n.scaleOptions=e.getScaleOptions();const o=r.getLayerStyleAttributes(),a=(i=e.getSource())===null||i===void 0?void 0:i.data.dataArray;Array.isArray(a)&&a.length===0||(n.caculateScalesForAttributes(o||[],a),e.log(_r.ScaleInitEnd,xr.INIT))})),e.hooks.beforeRenderData.tapPromise("FeatureScalePlugin",function(){var i=ee(function*(o){if(!o)return o;e.log(_r.ScaleInitStart,xr.UPDATE),n.scaleOptions=e.getScaleOptions();const a=r.getLayerStyleAttributes(),s=e.getSource().data.dataArray;return Array.isArray(s)&&s.length===0||(n.caculateScalesForAttributes(a||[],s),e.log(_r.ScaleInitEnd,xr.UPDATE),e.layerModelNeedUpdate=!0),!0});return function(o){return i.apply(this,arguments)}}()),e.hooks.beforeRender.tap("FeatureScalePlugin",()=>{if(e.layerModelNeedUpdate)return;this.scaleOptions=e.getScaleOptions();const i=r.getLayerStyleAttributes(),o=e.getSource().data.dataArray;if(!(Array.isArray(o)&&o.length===0)&&i){const a=i.filter(s=>s.needRescale);a.length&&this.caculateScalesForAttributes(a,o)}})}isNumber(e){return!isNaN(parseFloat(e))&&isFinite(e)}caculateScalesForAttributes(e,r){e.forEach(n=>{if(n.scale){const i=n.scale,o=n.scale.field;i.names=this.parseFields(tc(o)?[]:o);const a=[];i.names.forEach(s=>{var u;a.push(this.createScale(s,n.name,(u=n.scale)===null||u===void 0?void 0:u.values,r))}),a.some(s=>s.type===$i.VARIABLE)?(i.type=$i.VARIABLE,a.forEach(s=>{if(!i.callback&&i.values!=="text"){var u;switch((u=s.option)===null||u===void 0?void 0:u.type){case Lt.LOG:case Lt.LINEAR:case Lt.POWER:if(i.values&&i.values.length>2){const f=s.scale.ticks(i.values.length);s.scale.domain(f)}i.values?s.scale.range(i.values):s.scale.range(s.option.domain);break;case Lt.QUANTILE:case Lt.QUANTIZE:case Lt.THRESHOLD:s.scale.range(i.values);break;case Lt.IDENTITY:break;case Lt.CAT:i.values?s.scale.range(i.values):s.scale.range(s.option.domain);break;case Lt.DIVERGING:case Lt.SEQUENTIAL:s.scale.interpolator(Hb(i.values));break}}if(i.values==="text"){var l;s.scale.range((l=s.option)===null||l===void 0?void 0:l.domain)}})):(i.type=$i.CONSTANT,i.defaultValues=a.map((s,u)=>s.scale(i.names[u]))),i.scalers=a.map(s=>({field:s.field,func:s.scale,option:s.option})),n.needRescale=!1}})}parseFields(e){return Array.isArray(e)?e:HC(e)?e.split("*"):[e]}createScale(e,r,n,i){var o,a;const s=this.scaleOptions[r]&&((o=this.scaleOptions[r])===null||o===void 0?void 0:o.field)===e?this.scaleOptions[r]:this.scaleOptions[e],u={field:e,scale:void 0,type:$i.VARIABLE,option:s};if(!i||!i.length)return s&&s.type?u.scale=this.createDefaultScale(s):(u.scale=hu([e]),u.type=$i.CONSTANT),u;const l=(a=i.find(f=>!tc(f[e])))===null||a===void 0?void 0:a[e];if(this.isNumber(e)||tc(l)&&!s)u.scale=hu([e]),u.type=$i.CONSTANT;else{let f=s&&s.type||this.getDefaultType(l);n==="text"&&(f=Lt.CAT),n===void 0&&(f=Lt.IDENTITY);const c=this.createScaleConfig(f,e,s,i);u.scale=this.createDefaultScale(c),u.option=c}return u}getDefaultType(e){let r=Lt.LINEAR;return typeof e=="string"&&(r=jC.test(e)?Lt.TIME:Lt.CAT),r}createScaleConfig(e,r,n,i){const o=le(le({},n),{},{type:e});if(o!=null&&o.domain)return o;let a=[];if(e===Lt.QUANTILE){const s=new Map;i?.forEach(u=>{s.set(u._id,u[r])}),a=Array.from(s.values())}else a=i?.map(s=>s[r])||[];if(e===Lt.CAT||e===Lt.IDENTITY)o.domain=XC(a);else if(e===Lt.QUANTILE)o.domain=a;else if(e===Lt.DIVERGING){const s=i_(a),u=n?.neutral!==void 0?n?.neutral:(s[0]+s[1])/2;o.domain=[s[0],u,s[1]]}else o.domain=i_(a);return o}createDefaultScale({type:e,domain:r,unknown:n,clamp:i,nice:o}){const a=GC[e]();return r&&a.domain&&a.domain(r),n&&a.unknown(n),i!==void 0&&a.clamp&&a.clamp(i),o!==void 0&&a.nice&&a.nice(o),a}}class YC{apply(e){e.hooks.beforeRender.tap("LayerAnimateStylePlugin",()=>{e.animateStatus&&e.models.forEach(n=>{n.addUniforms(le({},e.layerModel.getAnimateUniforms()))})})}}let ZC=class{apply(e){e.hooks.afterInit.tap("LayerMaskPlugin",()=>{const{maskLayers:r,enableMask:n}=e.getLayerConfig();!e.tileLayer&&r&&r.length>0&&e.updateLayerConfig({mask:n})})}};class KC{build(e){return ee(function*(){e.prepareBuildModel(),yield e.buildModels()})()}initLayerModel(e){var r=this;return ee(function*(){yield r.build(e),e.styleNeedUpdate=!1})()}prepareLayerModel(e){var r=this;return ee(function*(){yield r.build(e),e.styleNeedUpdate=!1})()}apply(e){var r=this;e.hooks.init.tapPromise("LayerModelPlugin",ee(function*(){if(e.getSource().isTile){e.prepareBuildModel();return}e.log(_r.BuildModelStart,xr.INIT),yield r.initLayerModel(e),e.log(_r.BuildModelEnd,xr.INIT)})),e.hooks.beforeRenderData.tapPromise("LayerModelPlugin",function(){var n=ee(function*(i){return!i||e.getSource().isTile?!1:(e.log(_r.BuildModelStart,xr.UPDATE),yield r.prepareLayerModel(e),e.log(_r.BuildModelEnd,xr.UPDATE),!0)});return function(i){return n.apply(this,arguments)}}())}}class qC{apply(e){e.hooks.afterInit.tap("LayerStylePlugin",()=>{const{autoFit:r,fitBoundsOptions:n}=e.getLayerConfig();r&&e.fitBounds(n),e.styleNeedUpdate=!1})}}const QC=["type"],B_={directional:{lights:"u_DirectionalLights",num:"u_NumOfDirectionalLights"},spot:{lights:"u_SpotLights",num:"u_NumOfSpotLights"}},JC={type:"directional",direction:[1,10.5,12],ambient:[.2,.2,.2],diffuse:[.6,.6,.6],specular:[.1,.1,.1]},e2={direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0]},t2={position:[0,0,0],direction:[0,0,0],ambient:[0,0,0],diffuse:[0,0,0],specular:[0,0,0],constant:1,linear:0,quadratic:0,angle:14,exponent:40,blur:5};function r2(t){const e={u_DirectionalLights:new Array(3).fill(le({},e2)),u_NumOfDirectionalLights:0,u_SpotLights:new Array(3).fill(le({},t2)),u_NumOfSpotLights:0};return(!t||!t.length)&&(t=[JC]),t.forEach(r=>{let{type:n="directional"}=r,i=gi(r,QC);const o=B_[n].lights,a=B_[n].num,s=e[a];e[o][s]=le(le({},e[o][s]),i),e[a]++}),e}class n2{apply(e){e.hooks.beforeRender.tap("LightingPlugin",()=>{const{enableLighting:r}=e.getLayerConfig();r&&e.models.forEach(n=>n.addUniforms(le({},r2())))})}}function W0(t){return t.map(e=>(typeof e=="string"&&(e=[e,{}]),e))}function H0(t,e,r,n){const i=t.multiPassRenderer;return i.add(n("render")),W0(e).forEach(o=>{const[a,s]=o;i.add(r(a),s)}),i.add(r("copy")),i}class i2{constructor(){v(this,"enabled",void 0)}apply(e,{rendererService:r,postProcessingPassFactory:n,normalPassFactory:i}){e.hooks.init.tapPromise("MultiPassRendererPlugin",()=>{const{enableMultiPassRenderer:o,passes:a=[]}=e.getLayerConfig();this.enabled=!!o&&e.getLayerConfig().enableMultiPassRenderer!==!1,this.enabled&&(e.multiPassRenderer=H0(e,a,n,i),e.multiPassRenderer.setRenderFlag(!0))}),e.hooks.beforeRender.tap("MultiPassRendererPlugin",()=>{if(this.enabled){const{width:o,height:a}=r.getViewportSize();e.multiPassRenderer.resize(o,a)}})}}const Xn={POSITION:0,POSITION_64LOW:1,COLOR:2,PICKING_COLOR:3,STROKE:4,OPACITY:5,OFFSETS:6,ROTATION:7,MAX:8};function o2(t){switch(t){case"rotation":return{name:"Rotation",type:Be.Attribute,descriptor:{name:"a_Rotation",shaderLocation:Xn.ROTATION,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{rotation:r=0}=e;return Array.isArray(r)?[r[0]]:[r]}}};case"stroke":return{name:"stroke",type:Be.Attribute,descriptor:{name:"a_Stroke",shaderLocation:Xn.STROKE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:4,update:e=>{const{stroke:r=[1,1,1,1]}=e;return r}}};case"opacity":return{name:"opacity",type:Be.Attribute,descriptor:{name:"a_Opacity",shaderLocation:Xn.OPACITY,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{opacity:r=1}=e;return[r]}}};case"offsets":return{name:"offsets",type:Be.Attribute,descriptor:{name:"a_Offsets",shaderLocation:Xn.OFFSETS,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const{offsets:r}=e;return r}}};default:return}}const{isNumber:a2}=Mr,Zi={ENCODE:1,HIGHLIGHT:2};class s2{constructor(){v(this,"pickingUniformMap",void 0)}pickOption2Array(){const e=[];return this.pickingUniformMap.forEach(r=>{a2(r)?e.push(r):e.push(...r)}),e}updatePickOption(e,r){Object.keys(e).forEach(a=>{this.pickingUniformMap.set(a,e[a])});const n=r.getLayerConfig().pickingBuffer||0,i=Number(r.getShaderPickStat());this.pickingUniformMap.set("u_PickingBuffer",n),this.pickingUniformMap.set("u_shaderPick",i),r.getPickingUniformBuffer().subData({offset:0,data:this.pickOption2Array()})}apply(e,{styleAttributeService:r}){this.pickingUniformMap=new Map([["u_HighlightColor",[1,0,0,1]],["u_SelectColor",[1,0,0,1]],["u_PickingColor",[0,0,0]],["u_PickingStage",0],["u_CurrentSelectedId",[0,0,0]],["u_PickingThreshold",10],["u_PickingBuffer",0],["u_shaderPick",0],["u_activeMix",0]]),e.hooks.init.tapPromise("PixelPickingPlugin",()=>{const{enablePicking:n}=e.getLayerConfig();r.registerStyleAttribute({name:"pickingColor",type:Be.Attribute,descriptor:{name:"a_PickingColor",shaderLocation:Xn.PICKING_COLOR,buffer:{data:[],type:p.FLOAT},size:3,update:i=>{const{id:o}=i;return n?eu(o):[0,0,0]}}})}),e.hooks.beforePickingEncode.tap("PixelPickingPlugin",()=>{const{enablePicking:n}=e.getLayerConfig();n&&e.isVisible()&&(this.updatePickOption({u_PickingStage:Zi.ENCODE},e),e.models.forEach(i=>i.addUniforms({u_PickingStage:Zi.ENCODE})))}),e.hooks.afterPickingEncode.tap("PixelPickingPlugin",()=>{const{enablePicking:n}=e.getLayerConfig();n&&e.isVisible()&&(this.updatePickOption({u_PickingStage:Zi.HIGHLIGHT},e),e.models.forEach(i=>i.addUniforms({u_PickingStage:Zi.HIGHLIGHT})))}),e.hooks.beforeHighlight.tap("PixelPickingPlugin",n=>{const{highlightColor:i,activeMix:o=0}=e.getLayerConfig(),a=typeof i=="string"?Ft(i):i||[1,0,0,1];e.updateLayerConfig({pickedFeatureID:pc(new Uint8Array(n))});const s={u_PickingStage:Zi.HIGHLIGHT,u_PickingColor:n,u_HighlightColor:a.map(u=>u*255),u_activeMix:o};this.updatePickOption(s,e),e.models.forEach(u=>u.addUniforms(s))}),e.hooks.beforeSelect.tap("PixelPickingPlugin",n=>{const{selectColor:i,selectMix:o=0}=e.getLayerConfig(),a=typeof i=="string"?Ft(i):i||[1,0,0,1];e.updateLayerConfig({pickedFeatureID:pc(new Uint8Array(n))});const s={u_PickingStage:Zi.HIGHLIGHT,u_PickingColor:n,u_HighlightColor:a.map(u=>u*255),u_activeMix:o,u_CurrentSelectedId:n,u_SelectColor:a.map(u=>u*255)};this.updatePickOption(s,e),e.models.forEach(u=>u.addUniforms(s))})}}const u2=["mvt","geojsonvt","testTile"];function l2(t){const e=t.getSource();return u2.includes(e.parser.type)}class c2{apply(e,{styleAttributeService:r}){e.hooks.init.tapPromise("RegisterStyleAttributePlugin",()=>{l2(e)||this.registerBuiltinAttributes(r,e)})}registerBuiltinAttributes(e,r){if(r.type==="MaskLayer"){this.registerPositionAttribute(e);return}this.registerPositionAttribute(e),this.registerColorAttribute(e)}registerPositionAttribute(e){e.registerStyleAttribute({name:"position",type:Be.Attribute,descriptor:{name:"a_Position",shaderLocation:Xn.POSITION,buffer:{data:[],type:p.FLOAT},size:3,update:(r,n,i)=>i.length===2?[i[0],i[1],0]:[i[0],i[1],i[2]]}})}registerColorAttribute(e){e.registerStyleAttribute({name:"color",type:Be.Attribute,descriptor:{name:"a_Color",shaderLocation:Xn.COLOR,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:4,update:r=>{const{color:n}=r;return!n||!n.length?[1,1,1,1]:n}}})}}class f2{constructor(){v(this,"cameraService",void 0),v(this,"coordinateSystemService",void 0),v(this,"rendererService",void 0),v(this,"mapService",void 0),v(this,"layerService",void 0)}apply(e,{rendererService:r,mapService:n,layerService:i,coordinateSystemService:o,cameraService:a}){this.rendererService=r,this.mapService=n,this.layerService=i,this.coordinateSystemService=o,this.cameraService=a;let s;this.rendererService.uniformBuffers[0]||(s=this.rendererService.createBuffer({data:new Float32Array(96),isUBO:!0,label:"renderUniformBuffer"}),this.rendererService.uniformBuffers[0]=s),e.hooks.beforeRender.tap("ShaderUniformPlugin",()=>{const l=e.getRelativeOrigin&&e.getRelativeOrigin()||[0,0];this.coordinateSystemService.refresh(),l&&(Math.abs(l[0])>1e-4||Math.abs(l[1])>1e-4)&&this.coordinateSystemService.getCoordinateSystem()===2&&this.coordinateSystemService.setViewportCenter(l);const{width:c,height:h}=this.rendererService.getViewportSize(),{data:_,uniforms:m}=this.generateUBO(c,h,l);this.layerService.alreadyInRendering&&this.rendererService.uniformBuffers[0]&&this.rendererService.uniformBuffers[0].subData({offset:0,data:_}),this.rendererService.queryVerdorInfo()==="WebGL1"&&e.models.forEach(S=>{S.addUniforms(le(le({},m),{},{u_PickingBuffer:e.getLayerConfig().pickingBuffer||0,u_shaderPick:Number(e.getShaderPickStat())}))})})}generateUBO(e,r,n){const i=this.cameraService.getProjectionMatrix(),o=this.cameraService.getViewMatrix(),a=this.cameraService.getViewProjectionMatrix(),s=this.cameraService.getModelMatrix(),u=this.coordinateSystemService.getViewportCenterProjection(),l=this.coordinateSystemService.getPixelsPerDegree(),f=this.cameraService.getZoom(),c=this.coordinateSystemService.getPixelsPerDegree2(),h=this.cameraService.getZoomScale(),_=this.coordinateSystemService.getPixelsPerMeter(),m=this.coordinateSystemService.getCoordinateSystem(),E=this.cameraService.getCameraPosition(),S=window.devicePixelRatio,M=this.coordinateSystemService.getViewportCenter(),P=[e,r],F=this.cameraService.getFocalDistance(),V=n&&n.length>=2?[n[0],n[1]]:[0,0];return{data:[...o,...i,...a,...s,...u,...l,f,...c,h,..._,m,...E,S,...M,...P,F,...V,0],uniforms:{[li.ProjectionMatrix]:i,[li.ViewMatrix]:o,[li.ViewProjectionMatrix]:a,[li.Zoom]:f,[li.ZoomScale]:h,[li.FocalDistance]:F,[li.CameraPosition]:E,[Xi.CoordinateSystem]:m,[Xi.ViewportCenter]:M,[Xi.ViewportCenterProjection]:u,[Xi.PixelsPerDegree]:l,[Xi.PixelsPerDegree2]:c,[Xi.PixelsPerMeter]:_,u_ViewportSize:P,u_ModelMatrix:s,u_DevicePixelRatio:S,u_RelativeOrigin:V}}}}class h2{apply(e){e.hooks.beforeRender.tap("UpdateModelPlugin",()=>{e.layerModel&&e.layerModel.needUpdate().then(r=>{r&&e.renderLayers()})}),e.hooks.afterRender.tap("UpdateModelPlugin",()=>{e.layerModelNeedUpdate=!1})}}class d2{apply(e,{styleAttributeService:r}){e.hooks.init.tapPromise("UpdateStyleAttributePlugin",()=>{this.initStyleAttribute(e,{styleAttributeService:r})}),e.hooks.beforeRender.tap("UpdateStyleAttributePlugin",()=>{e.layerModelNeedUpdate||e.inited&&this.updateStyleAttribute(e,{styleAttributeService:r})})}updateStyleAttribute(e,{styleAttributeService:r}){const n=r.getLayerStyleAttributes()||[],i=r.getLayerStyleAttribute("filter");if(i&&i.needRegenerateVertices){e.layerModelNeedUpdate=!0,n.forEach(o=>o.needRegenerateVertices=!1);return}n.filter(o=>o.needRegenerateVertices).forEach(o=>{r.updateAttributeByFeatureRange(o.name,e.getEncodedData(),o.featureRange.startIndex,o.featureRange.endIndex,e),o.needRegenerateVertices=!1})}initStyleAttribute(e,{styleAttributeService:r}){(r.getLayerStyleAttributes()||[]).filter(i=>i.needRegenerateVertices).forEach(i=>{r.updateAttributeByFeatureRange(i.name,e.getEncodedData(),i.featureRange.startIndex,i.featureRange.endIndex),i.needRegenerateVertices=!1})}}function p2(){return[new Fb,new c2,new $C,new Db,new qC,new ZC,new d2,new h2,new i2,new f2,new YC,new n2,new s2,new KC]}const X0={[Wn.additive]:{enable:!0,func:{srcRGB:p.ONE,dstRGB:p.ONE,srcAlpha:1,dstAlpha:1}},[Wn.none]:{enable:!1},[Wn.normal]:{enable:!0,func:{srcRGB:p.SRC_ALPHA,dstRGB:p.ONE_MINUS_SRC_ALPHA,srcAlpha:1,dstAlpha:1}},[Wn.subtractive]:{enable:!0,func:{srcRGB:p.ONE,dstRGB:p.ONE,srcAlpha:p.ZERO,dstAlpha:p.ONE_MINUS_SRC_COLOR},equation:{rgb:p.FUNC_SUBTRACT,alpha:p.FUNC_SUBTRACT}},[Wn.max]:{enable:!0,func:{srcRGB:p.ONE,dstRGB:p.ONE},equation:{rgb:p.MAX_EXT}},[Wn.min]:{enable:!0,func:{srcRGB:p.ONE,dstRGB:p.ONE},equation:{rgb:p.MIN_EXT}}};class _2{constructor(e){v(this,"layer",void 0),this.layer=e}pickRender(e){const n=this.layer.getContainer().layerService,i=this.layer;if(i.tileLayer)return i.tileLayer.pickRender(e);i.hooks.beforePickingEncode.call(),n.renderTileLayerMask(i),i.renderModels({ispick:!0}),i.hooks.afterPickingEncode.call()}pick(e,r){var n=this;return ee(function*(){const o=n.layer.getContainer().pickingService;return e.type==="RasterLayer"?n.pickRasterLayer(e,r):(n.pickRender(r),o.pickFromPickingFBO(e,r))})()}pickRasterLayer(e,r,n){const i=this.layer.getContainer(),o=i.pickingService,a=i.mapService,s=this.layer.getSource().extent,u=fA(r.lngLat,s),l={x:r.x,y:r.y,type:r.type,lngLat:r.lngLat,target:r,rasterValue:null},f=n||e;if(u){const c=this.readRasterValue(e,s,a,r.x,r.y);return l.rasterValue=c,o.triggerHoverOnLayer(f,l),!0}else return l.type=r.type==="mousemove"?"mouseout":"un"+r.type,o.triggerHoverOnLayer(f,le(le({},l),{},{type:"unpick"})),o.triggerHoverOnLayer(f,l),!1}readRasterValue(e,r,n,i,o){const a=e.getSource().data.dataArray[0],[s=0,u=0,l=10,f=-10]=r,c=n.lngLatToContainer([s,u]),h=n.lngLatToContainer([l,f]),_=h.x-c.x,m=c.y-h.y,E=[(i-c.x)/_,(o-h.y)/m],S=a.width||1,M=a.height||1,P=Math.floor(E[0]*S),F=Math.floor(E[1]*M),V=Math.max(0,F-1)*S+P;return a.data[V]}selectFeature(e){const r=this.layer,[n,i,o]=e;r.hooks.beforeSelect.call([n,i,o])}highlightPickedFeature(e){const[r,n,i]=e;this.layer.hooks.beforeHighlight.call([r,n,i])}getFeatureById(e){return this.layer.getSource().getFeatureById(e)}}class m2{constructor(e){v(this,"layer",void 0),v(this,"rendererService",void 0),v(this,"colorTexture",void 0),v(this,"key",void 0),this.layer=e;const r=this.layer.getContainer();this.rendererService=r.rendererService}getColorTexture(e,r){const n=this.getTextureKey(e,r);return this.key===n?this.colorTexture:(this.createColorTexture(e,r),this.key=n,this.colorTexture)}createColorTexture(e,r){const{createTexture2D:n}=this.rendererService,i=this.getColorRampBar(e,r),o=n({data:new Uint8Array(i.data),width:i.width,height:i.height,flipY:!1,unorm:!0});return this.colorTexture=o,o}setColorTexture(e,r,n){this.key=this.getTextureKey(r,n),this.colorTexture=e}destroy(){var e;(e=this.colorTexture)===null||e===void 0||e.destroy()}getColorRampBar(e,r){switch(e.type){case"cat":return _A(e);case"quantize":return pA(e);case"custom":return dA(e,r);case"linear":return hA(e,r);default:return hv(e)}}getTextureKey(e,r){var n;return`${e.colors.join("_")}_${e==null||(n=e.positions)===null||n===void 0?void 0:n.join("_")}_${e.type}_${r?.join("_")}`}}const v2=["passes"],g2=["moduleName","vertexShader","fragmentShader","defines","inject","triangulation","styleOption","pickingEnabled"],{isEqual:rc,isFunction:N_,isNumber:P_,isObject:Tr,isPlainObject:E2,isUndefined:y2}=Mr;let L_=0;class $r extends Kn.EventEmitter{get shaderModuleService(){return this.container.shaderModuleService}get cameraService(){return this.container.cameraService}get coordinateService(){return this.container.coordinateSystemService}get iconService(){return this.container.iconService}get fontService(){return this.container.fontService}get pickingService(){return this.container.pickingService}get rendererService(){return this.container.rendererService}get layerService(){return this.container.layerService}get debugService(){return this.container.debugService}get interactionService(){return this.container.interactionService}get mapService(){var e;return(e=this.container)===null||e===void 0?void 0:e.mapService}get normalPassFactory(){return this.container.normalPassFactory}constructor(e={}){super(),v(this,"id",`${L_++}`),v(this,"name",`${L_}`),v(this,"parent",void 0),v(this,"coordCenter",void 0),v(this,"type",void 0),v(this,"visible",!0),v(this,"zIndex",0),v(this,"minZoom",void 0),v(this,"maxZoom",void 0),v(this,"inited",!1),v(this,"layerModelNeedUpdate",!1),v(this,"pickedFeatureID",null),v(this,"selectedFeatureID",null),v(this,"styleNeedUpdate",!1),v(this,"rendering",void 0),v(this,"forceRender",!1),v(this,"clusterZoom",0),v(this,"layerType",void 0),v(this,"triangulation",void 0),v(this,"layerPickService",void 0),v(this,"textureService",void 0),v(this,"defaultSourceConfig",{data:[],options:{parser:{type:"json"}}}),v(this,"dataState",{dataSourceNeedUpdate:!1,dataMappingNeedUpdate:!1,filterNeedUpdate:!1,featureScaleNeedUpdate:!1,StyleAttrNeedUpdate:!1}),v(this,"hooks",{init:new vA,afterInit:new Cd,beforeRender:new Cd,beforeRenderData:new mA,afterRender:new En,beforePickingEncode:new En,afterPickingEncode:new En,beforeHighlight:new En(["pickedColor"]),afterHighlight:new En,beforeSelect:new En(["pickedColor"]),afterSelect:new En,beforeDestroy:new En,afterDestroy:new En}),v(this,"models",[]),v(this,"multiPassRenderer",void 0),v(this,"plugins",void 0),v(this,"startInit",!1),v(this,"sourceOption",void 0),v(this,"layerModel",void 0),v(this,"shapeOption",void 0),v(this,"tileLayer",void 0),v(this,"layerChildren",[]),v(this,"masks",[]),v(this,"configService",gA),v(this,"styleAttributeService",void 0),v(this,"layerSource",void 0),v(this,"postProcessingPassFactory",void 0),v(this,"animateOptions",{enable:!1}),v(this,"relativeOrigin",[0,0]),v(this,"originalExtent",[0,0,0,0]),v(this,"absoluteDataArray",[]),v(this,"container",void 0),v(this,"encodedData",void 0),v(this,"currentPickId",null),v(this,"rawConfig",void 0),v(this,"needUpdateConfig",void 0),v(this,"encodeStyleAttribute",{}),v(this,"enableShaderEncodeStyles",[]),v(this,"enableDataEncodeStyles",[]),v(this,"pendingStyleAttributes",[]),v(this,"scaleOptions",{}),v(this,"animateStartTime",void 0),v(this,"animateStatus",!1),v(this,"isDestroyed",!1),v(this,"uniformBuffers",[]),v(this,"encodeDataLength",0),v(this,"sourceEvent",()=>{this.dataState.dataSourceNeedUpdate=!0,this.processRelativeCoordinates();const r=this.getLayerConfig();r&&r.autoFit&&this.fitBounds(r.fitBoundsOptions),this.layerSource.getSourceCfg().autoRender&&setTimeout(()=>{this.reRender()},10)}),this.name=e.name||this.id,this.zIndex=e.zIndex||0,this.rawConfig=e,this.masks=e.maskLayers||[]}addMask(e){this.masks.push(e),this.updateLayerConfig({maskLayers:this.masks}),this.enableMask()}removeMask(e){const r=this.masks.indexOf(e);r>-1&&this.masks.splice(r,1),this.updateLayerConfig({maskLayers:this.masks})}disableMask(){this.updateLayerConfig({enableMask:!1})}enableMask(){this.updateLayerConfig({enableMask:!0})}addMaskLayer(e){this.masks.push(e)}removeMaskLayer(e){const r=this.masks.indexOf(e);r>-1&&this.masks.splice(r,1),e.destroy()}getAttribute(e){return this.styleAttributeService.getLayerStyleAttribute(e)}getLayerConfig(){return this.configService.getLayerConfig(this.id)}updateLayerConfig(e){if(Object.keys(e).map(r=>{r in this.rawConfig&&(this.rawConfig[r]=e[r])}),!this.startInit)this.needUpdateConfig=le(le({},this.needUpdateConfig),e);else{const r=this.container.id;this.configService.setLayerConfig(r,this.id,le(le(le({},this.configService.getLayerConfig(this.id)),this.needUpdateConfig),e)),this.needUpdateConfig={}}}setContainer(e){this.container=e}getContainer(){return this.container}addPlugin(e){return this.plugins.push(e),this}init(){var e=this;return ee(function*(){const r=e.container.id;e.startInit=!0,e.configService.setLayerConfig(r,e.id,e.rawConfig),e.layerType=e.rawConfig.layerType;const{enableMultiPassRenderer:n,passes:i}=e.getLayerConfig();n&&i!==null&&i!==void 0&&i.length&&i.length>0&&e.mapService.on("mapAfterFrameChange",()=>{e.renderLayers()}),e.postProcessingPassFactory=e.container.postProcessingPassFactory,e.styleAttributeService=e.container.styleAttributeService,n&&(e.multiPassRenderer=e.container.multiPassRenderer,e.multiPassRenderer.setLayer(e)),e.pendingStyleAttributes.forEach(({attributeName:o,attributeField:a,attributeValues:s,updateOptions:u})=>{e.styleAttributeService.updateStyleAttribute(o,{scale:le({field:a},e.splitValuesAndCallbackInAttribute(s,a?void 0:e.getLayerConfig()[o]))},u)}),e.pendingStyleAttributes=[],e.plugins=p2();for(const o of e.plugins)o.apply(e,e.container);e.layerPickService=new _2(e),e.textureService=new m2(e),e.log(_r.LayerInitStart),yield e.hooks.init.promise(),e.log(_r.LayerInitEnd),e.inited=!0,e.emit("inited",{target:e,type:"inited"}),e.emit("add",{target:e,type:"add"}),e.hooks.afterInit.call()})()}log(e,r="init"){var n;if(this.tileLayer||this.isTileLayer)return;const i=`${this.id}.${r}.${e}`,o={id:this.id,type:this.type};(n=this.debugService)===null||n===void 0||n.log(i,o)}updateModelData(e){e.attributes&&e.elements?this.models.map(r=>{r.updateAttributesAndElements(e.attributes,e.elements)}):console.warn("data error")}setLayerPickService(e){this.layerPickService=e}prepareBuildModel(){Object.keys(this.needUpdateConfig||{}).length!==0&&this.updateLayerConfig({});const{animateOption:e}=this.getLayerConfig();e!=null&&e.enable&&(this.layerService.startAnimate(),this.animateStatus=!0)}color(e,r,n){return this.updateStyleAttribute("color",e,r,n),this}texture(e,r,n){return this.updateStyleAttribute("texture",e,r,n),this}rotate(e,r,n){return this.updateStyleAttribute("rotate",e,r,n),this}size(e,r,n){return this.updateStyleAttribute("size",e,r,n),this}filter(e,r,n){const i=this.updateStyleAttribute("filter",e,r,n);return this.dataState.dataSourceNeedUpdate=i&&this.inited,this}shape(e,r,n){this.shapeOption={field:e,values:r};const i=this.updateStyleAttribute("shape",e,r,n);return this.dataState.dataSourceNeedUpdate=i&&this.inited,this}label(e,r,n){return this.pendingStyleAttributes.push({attributeName:"label",attributeField:e,attributeValues:r,updateOptions:n}),this}animate(e){let r={};return Tr(e)?(r.enable=!0,r=le(le({},r),e)):r.enable=e,this.updateLayerConfig({animateOption:r}),this}source(e,r){return e?.type==="source"?(this.setSource(e),this):(this.sourceOption={data:e,options:r},this.clusterZoom=0,this)}setData(e,r){return this.inited?(this.dataUpdatelog(),this.layerSource.setData(e,r)):this.on("inited",()=>{this.dataUpdatelog(),this.layerSource.setData(e,r)}),this}dataUpdatelog(){this.log(_r.SourceInitStart,xr.UPDATE),this.layerSource.once("update",()=>{this.log(_r.SourceInitEnd,xr.UPDATE)})}style(e){const{passes:r}=e,n=gi(e,v2);r&&W0(r).forEach(o=>{const a=this.multiPassRenderer.getPostProcessor().getPostProcessingPassByName(o[0]);a&&a.updateOptions(o[1])}),n.borderColor&&(n.stroke=n.borderColor),n.borderWidth&&(n.strokeWidth=n.borderWidth);const i=n;return Object.keys(n).forEach(o=>{const a=n[o];Array.isArray(a)&&a.length===2&&!P_(a[0])&&!P_(a[1])&&(i[o]={field:a[0],value:a[1]})}),this.encodeStyle(i),this.updateLayerConfig(i),this}encodeStyle(e){Object.keys(e).forEach(r=>{[...this.enableShaderEncodeStyles,...this.enableDataEncodeStyles].includes(r)&&E2(e[r])&&(e[r].field||e[r].value)&&!rc(this.encodeStyleAttribute[r],e[r])?(this.encodeStyleAttribute[r]=e[r],this.updateStyleAttribute(r,e[r].field,e[r].value),this.inited&&(this.dataState.dataMappingNeedUpdate=!0)):this.encodeStyleAttribute[r]&&(delete this.encodeStyleAttribute[r],this.dataState.dataSourceNeedUpdate=!0)})}scale(e,r){const n=le({},this.scaleOptions);if(Tr(e)?this.scaleOptions=le(le({},this.scaleOptions),e):this.scaleOptions[e]=r,this.styleAttributeService&&!rc(n,this.scaleOptions)){const i=Tr(e)?e:{[e]:r};this.styleAttributeService.updateScaleAttribute(i)}return this}renderLayers(){this.rendering=!0,this.layerService.reRender(),this.rendering=!1}prerender(){}render(e={}){return this.tileLayer?(this.tileLayer.render(),this):(this.layerService.beforeRenderData(this),this.encodeDataLength<=0&&!this.forceRender?this:(this.renderModels(e),this))}renderMultiPass(){var e=this;return ee(function*(){e.encodeDataLength<=0&&!e.forceRender||(e.multiPassRenderer&&e.multiPassRenderer.getRenderFlag()?yield e.multiPassRenderer.render():e.renderModels())})()}active(e){const r={};return r.enableHighlight=Tr(e)?!0:e,Tr(e)?(r.enableHighlight=!0,e.color&&(r.highlightColor=e.color),e.mix&&(r.activeMix=e.mix)):r.enableHighlight=!!e,this.updateLayerConfig(r),this}setActive(e,r){if(Tr(e)){const{x:n=0,y:i=0}=e;this.updateLayerConfig({highlightColor:Tr(r)?r.color:this.getLayerConfig().highlightColor,activeMix:Tr(r)?r.mix:this.getLayerConfig().activeMix}),this.pick({x:n,y:i})}else this.updateLayerConfig({pickedFeatureID:e,highlightColor:Tr(r)?r.color:this.getLayerConfig().highlightColor,activeMix:Tr(r)?r.mix:this.getLayerConfig().activeMix}),this.hooks.beforeHighlight.call(eu(e)).then(()=>{setTimeout(()=>{this.reRender()},1)})}select(e){const r={};return r.enableSelect=Tr(e)?!0:e,Tr(e)?(r.enableSelect=!0,e.color&&(r.selectColor=e.color),e.mix&&(r.selectMix=e.mix)):r.enableSelect=!!e,this.updateLayerConfig(r),this}setSelect(e,r){if(Tr(e)){const{x:n=0,y:i=0}=e;this.updateLayerConfig({selectColor:Tr(r)?r.color:this.getLayerConfig().selectColor,selectMix:Tr(r)?r.mix:this.getLayerConfig().selectMix}),this.pick({x:n,y:i})}else this.updateLayerConfig({pickedFeatureID:e,selectColor:Tr(r)?r.color:this.getLayerConfig().selectColor,selectMix:Tr(r)?r.mix:this.getLayerConfig().selectMix}),this.hooks.beforeSelect.call(eu(e)).then(()=>{setTimeout(()=>{this.reRender()},1)})}setBlend(e){return this.updateLayerConfig({blend:e}),this.reRender(),this}show(){return this.updateLayerConfig({visible:!0}),this.reRender(),this.emit("show"),this}hide(){return this.updateLayerConfig({visible:!1}),this.reRender(),this.emit("hide"),this}setIndex(e){return this.zIndex=e,this.layerService.updateLayerRenderList(),this.layerService.renderLayers(),this}setCurrentPickId(e){this.currentPickId=e}getCurrentPickId(){return this.currentPickId}setCurrentSelectedId(e){this.selectedFeatureID=e}getCurrentSelectedId(){return this.selectedFeatureID}isVisible(){const e=this.mapService.getZoom(),{visible:r,minZoom:n=-1/0,maxZoom:i=1/0}=this.getLayerConfig();return!!r&&e>=n&&e<i}setMultiPass(e,r){if(this.updateLayerConfig({enableMultiPassRenderer:e}),r&&this.updateLayerConfig({passes:r}),e){const{passes:n=[]}=this.getLayerConfig();this.multiPassRenderer=H0(this,n,this.postProcessingPassFactory,this.normalPassFactory),this.multiPassRenderer.setRenderFlag(!0);const{width:i,height:o}=this.rendererService.getViewportSize();this.multiPassRenderer.resize(i,o)}return this}setMinZoom(e){return this.updateLayerConfig({minZoom:e}),this}getMinZoom(){const{minZoom:e}=this.getLayerConfig();return e}getMaxZoom(){const{maxZoom:e}=this.getLayerConfig();return e}get(e){return this.getLayerConfig()[e]}setMaxZoom(e){return this.updateLayerConfig({maxZoom:e}),this}setAutoFit(e){return this.updateLayerConfig({autoFit:e}),this}fitBounds(e){if(!this.inited)return this.updateLayerConfig({autoFit:!0}),this;const n=this.getSource().extent;return n.some(o=>Math.abs(o)===1/0)?this:(this.mapService.fitBounds([[n[0],n[1]],[n[2],n[3]]],e),this)}destroy(e=!0){var r,n,i,o,a;if(this.isDestroyed)return;(r=this.layerModel)===null||r===void 0||r.uniformBuffers.forEach(u=>{u.destroy()}),this.layerChildren.map(u=>u.destroy(!1)),this.layerChildren=[];const{maskfence:s}=this.getLayerConfig();s&&(this.masks.map(u=>u.destroy(!1)),this.masks=[]),this.hooks.beforeDestroy.call(),this.layerSource.off("update",this.sourceEvent),(n=this.multiPassRenderer)===null||n===void 0||n.destroy(),this.textureService.destroy(),this.styleAttributeService.clearAllAttributes(),this.hooks.afterDestroy.call(),(i=this.layerModel)===null||i===void 0||i.clearModels(e),(o=this.tileLayer)===null||o===void 0||o.destroy(),this.models=[],(a=this.debugService)===null||a===void 0||a.removeLog(this.id),this.emit("remove",{target:this,type:"remove"}),this.emit("destroy",{target:this,type:"destroy"}),this.removeAllListeners(),this.isDestroyed=!0}clear(){this.styleAttributeService.clearAllAttributes()}clearModels(){var e;this.models.forEach(r=>r.destroy()),(e=this.layerModel)===null||e===void 0||e.clearModels(),this.models=[]}isDirty(){return!!(this.styleAttributeService.getLayerStyleAttributes()||[]).filter(e=>e.needRescale||e.needRemapping||e.needRegenerateVertices).length}setSource(e){if(this.layerSource&&this.layerSource.off("update",this.sourceEvent),this.layerSource=e,this.clusterZoom=0,this.inited&&this.layerSource.cluster){const r=this.mapService.getZoom();this.layerSource.updateClusterData(r)}this.layerSource.inited&&this.sourceEvent(),this.layerSource.on("update",({type:r})=>{if(this.coordCenter===void 0){const n=this.layerSource.center;this.coordCenter=n}if(r==="update"){if(this.tileLayer){this.tileLayer.reload();return}this.sourceEvent()}r==="inited"&&this.processRelativeCoordinates()})}getSource(){return this.layerSource}getScaleOptions(){return this.scaleOptions}setEncodedData(e){this.encodedData=e,this.encodeDataLength=e.length}getEncodedData(){return this.encodedData}getScale(e){return this.styleAttributeService.getLayerAttributeScale(e)}getLegend(e){var r,n,i;const o=this.styleAttributeService.getLayerStyleAttribute(e);return{type:(n=((o==null||(r=o.scale)===null||r===void 0?void 0:r.scalers)||[])[0])===null||n===void 0||(n=n.option)===null||n===void 0?void 0:n.type,field:o==null||(i=o.scale)===null||i===void 0?void 0:i.field,items:this.getLegendItems(e)}}getLegendItems(e){const r=this.styleAttributeService.getLayerAttributeScale(e);return r?r.invertExtent?r.range().map(i=>({value:r.invertExtent(i),[e]:i})):r.ticks?r.ticks().map(i=>({value:i,[e]:r(i)})):r!=null&&r.domain?r.domain().filter(i=>!y2(i)).map(i=>({value:i,[e]:r(i)})):[]:[]}pick({x:e,y:r}){this.interactionService.triggerHover({x:e,y:r})}boxSelect(e,r){this.pickingService.boxPickLayer(this,e,r)}buildLayerModel(e){var r=this;return ee(function*(){const{moduleName:n,vertexShader:i,fragmentShader:o,defines:a,inject:s,triangulation:u,styleOption:l,pickingEnabled:f=!0}=e,c=gi(e,g2);r.shaderModuleService.registerModule(n,{vs:i,fs:o,defines:a,inject:s});const{vs:h,fs:_,uniforms:m}=r.shaderModuleService.getModule(n),{createModel:E}=r.rendererService;return new Promise(S=>{const{attributes:M,elements:P,count:F}=r.styleAttributeService.createAttributesAndIndices(r.encodedData,u,l,r),V=[...r.layerModel.uniformBuffers,...r.rendererService.uniformBuffers];f&&V.push(r.getPickingUniformBuffer());const pe=le({attributes:M,uniforms:m,fs:_,vs:h,elements:P,blend:X0[Wn.normal],uniformBuffers:V,textures:r.layerModel.textures},c);F&&(pe.count=F);const ce=E(pe);S(ce)})})()}createAttributes(e){const{triangulation:r}=e,{attributes:n}=this.styleAttributeService.createAttributes(this.encodedData,r);return n}getTime(){return this.layerService.clock.getDelta()}setAnimateStartTime(){this.animateStartTime=this.layerService.clock.getElapsedTime()}stopAnimate(){this.animateStatus&&(this.layerService.stopAnimate(),this.animateStatus=!1,this.updateLayerConfig({animateOption:{enable:!1}}))}getLayerAnimateTime(){return this.layerService.clock.getElapsedTime()-this.animateStartTime}needPick(e){const{enableHighlight:r=!0,enableSelect:n=!0}=this.getLayerConfig();let i=this.eventNames().indexOf(e)!==-1||this.eventNames().indexOf("un"+e)!==-1;return(e==="click"||e==="dblclick")&&n&&(i=!0),e==="mousemove"&&(r||this.eventNames().indexOf("mouseenter")!==-1||this.eventNames().indexOf("unmousemove")!==-1||this.eventNames().indexOf("mouseout")!==-1)&&(i=!0),this.isVisible()&&i}buildModels(){return ee(function*(){throw new Error("Method not implemented.")})()}rebuildModels(){var e=this;return ee(function*(){yield e.buildModels()})()}renderMulPass(e){return ee(function*(){yield e.render()})()}renderModels(e={}){return this.encodeDataLength<=0&&!this.forceRender?(this.clearModels(),this):(this.hooks.beforeRender.call(),this.models.forEach(r=>{r.draw({uniforms:this.layerModel.getUninforms(),blend:this.layerModel.getBlend(),stencil:this.layerModel.getStencil(e),textures:this.layerModel.textures},e?.ispick||!1)}),this.hooks.afterRender.call(),this)}updateStyleAttribute(e,r,n,i){const o=this.configService.getAttributeConfig(this.id)||{};return rc(o[e],{field:r,values:n})?!1:(["color","size","texture","rotate","filter","label","shape"].indexOf(e)!==-1&&this.configService.setAttributeConfig(this.id,{[e]:{field:r,values:n}}),this.startInit?this.styleAttributeService.updateStyleAttribute(e,{scale:le({field:r},this.splitValuesAndCallbackInAttribute(n,this.getLayerConfig()[r]))},i):this.pendingStyleAttributes.push({attributeName:e,attributeField:r,attributeValues:n,updateOptions:i}),!0)}getLayerAttributeConfig(){return this.configService.getAttributeConfig(this.id)}getShaderPickStat(){return this.layerService.getShaderPickStat()}setEarthTime(e){console.warn("empty fn")}processData(e){return e}getModelType(){throw new Error("Method not implemented.")}getDefaultConfig(){return{}}processRelativeCoordinates(){if(!this.getLayerConfig().enableRelativeCoordinates||!this.layerSource||!this.layerSource.data)return;this.absoluteDataArray=[...this.layerSource.data.dataArray];const n=bb(this.layerSource.data.dataArray,{enableRelativeCoordinates:!0});this.layerSource.data.dataArray=n.dataArray,this.relativeOrigin=n.relativeOrigin,this.originalExtent=n.originalExtent}getAbsoluteData(){return this.absoluteDataArray}getRelativeOrigin(){return this.relativeOrigin}getOriginalExtent(){return this.originalExtent}initLayerModels(){var e=this;return ee(function*(){e.models.forEach(n=>n.destroy()),e.models=[],e.uniformBuffers.forEach(n=>{n.destroy()}),e.uniformBuffers=[];const r=e.rendererService.createBuffer({data:new Float32Array(20).fill(0),isUBO:!0,label:"pickingUniforms"});e.uniformBuffers.push(r),e.models=yield e.layerModel.initModels()})()}getPickingUniformBuffer(){return this.uniformBuffers[0]}reRender(){this.inited&&this.layerService.reRender()}splitValuesAndCallbackInAttribute(e){return{values:N_(e)?void 0:e,callback:N_(e)?e:void 0}}}function A2(t,e){return{enable:t,mask:255,func:{cmp:p.EQUAL,ref:e?1:0,mask:1}}}function D_(t){return t.maskOperation===dv.OR?{enable:!0,mask:255,func:{cmp:p.ALWAYS,ref:1,mask:255},opFront:{fail:p.KEEP,zfail:p.REPLACE,zpass:p.REPLACE}}:{enable:!0,mask:255,func:{cmp:t.stencilType===_c.SINGLE?p.ALWAYS:t.stencilIndex===0?p.ALWAYS:p.LESS,ref:t.stencilType===_c.SINGLE?1:t.stencilIndex===0?2:1,mask:255},opFront:{fail:p.KEEP,zfail:p.REPLACE,zpass:p.REPLACE}}}const T2={opacity:1,stroke:[1,0,0,1],offsets:[0,0],rotation:0,extrusionBase:0,strokeOpacity:1,thetaOffset:.314},Rs={opacity:"float",stroke:"vec4",offsets:"vec2",textOffset:"vec2",rotation:"float",extrusionBase:"float",strokeOpacity:"float",thetaOffset:"float"};var df={exports:{}};df.exports=Vu;df.exports.default=Vu;function Vu(t,e,r){r=r||2;var n=e&&e.length,i=n?e[0]*r:t.length,o=j0(t,0,i,r,!0),a=[];if(!o||o.next===o.prev)return a;var s,u,l,f,c,h,_;if(n&&(o=C2(t,e,o,r)),t.length>80*r){s=l=t[0],u=f=t[1];for(var m=r;m<i;m+=r)c=t[m],h=t[m+1],c<s&&(s=c),h<u&&(u=h),c>l&&(l=c),h>f&&(f=h);_=Math.max(l-s,f-u),_=_!==0?32767/_:0}return Ma(o,a,r,s,u,_,0),a}function j0(t,e,r,n,i){var o,a;if(i===Dc(t,e,r,n)>0)for(o=e;o<r;o+=n)a=F_(o,t[o],t[o+1],a);else for(o=r-n;o>=e;o-=n)a=F_(o,t[o],t[o+1],a);return a&&Wu(a,a.next)&&(Na(a),a=a.next),a}function Ai(t,e){if(!t)return t;e||(e=t);var r=t,n;do if(n=!1,!r.steiner&&(Wu(r,r.next)||Yt(r.prev,r,r.next)===0)){if(Na(r),r=e=r.prev,r===r.next)break;n=!0}else r=r.next;while(n||r!==e);return e}function Ma(t,e,r,n,i,o,a){if(t){!a&&o&&N2(t,n,i,o);for(var s=t,u,l;t.prev!==t.next;){if(u=t.prev,l=t.next,o?x2(t,n,i,o):S2(t)){e.push(u.i/r|0),e.push(t.i/r|0),e.push(l.i/r|0),Na(t),t=l.next,s=l.next;continue}if(t=l,t===s){a?a===1?(t=R2(Ai(t),e,r),Ma(t,e,r,n,i,o,2)):a===2&&b2(t,e,r,n,i,o):Ma(Ai(t),e,r,n,i,o,1);break}}}}function S2(t){var e=t.prev,r=t,n=t.next;if(Yt(e,r,n)>=0)return!1;for(var i=e.x,o=r.x,a=n.x,s=e.y,u=r.y,l=n.y,f=i<o?i<a?i:a:o<a?o:a,c=s<u?s<l?s:l:u<l?u:l,h=i>o?i>a?i:a:o>a?o:a,_=s>u?s>l?s:l:u>l?u:l,m=n.next;m!==e;){if(m.x>=f&&m.x<=h&&m.y>=c&&m.y<=_&&ao(i,s,o,u,a,l,m.x,m.y)&&Yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function x2(t,e,r,n){var i=t.prev,o=t,a=t.next;if(Yt(i,o,a)>=0)return!1;for(var s=i.x,u=o.x,l=a.x,f=i.y,c=o.y,h=a.y,_=s<u?s<l?s:l:u<l?u:l,m=f<c?f<h?f:h:c<h?c:h,E=s>u?s>l?s:l:u>l?u:l,S=f>c?f>h?f:h:c>h?c:h,M=Pc(_,m,e,r,n),P=Pc(E,S,e,r,n),F=t.prevZ,V=t.nextZ;F&&F.z>=M&&V&&V.z<=P;){if(F.x>=_&&F.x<=E&&F.y>=m&&F.y<=S&&F!==i&&F!==a&&ao(s,f,u,c,l,h,F.x,F.y)&&Yt(F.prev,F,F.next)>=0||(F=F.prevZ,V.x>=_&&V.x<=E&&V.y>=m&&V.y<=S&&V!==i&&V!==a&&ao(s,f,u,c,l,h,V.x,V.y)&&Yt(V.prev,V,V.next)>=0))return!1;V=V.nextZ}for(;F&&F.z>=M;){if(F.x>=_&&F.x<=E&&F.y>=m&&F.y<=S&&F!==i&&F!==a&&ao(s,f,u,c,l,h,F.x,F.y)&&Yt(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;V&&V.z<=P;){if(V.x>=_&&V.x<=E&&V.y>=m&&V.y<=S&&V!==i&&V!==a&&ao(s,f,u,c,l,h,V.x,V.y)&&Yt(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function R2(t,e,r){var n=t;do{var i=n.prev,o=n.next.next;!Wu(i,o)&&G0(i,n,n.next,o)&&Ba(i,o)&&Ba(o,i)&&(e.push(i.i/r|0),e.push(n.i/r|0),e.push(o.i/r|0),Na(n),Na(n.next),n=t=o),n=n.next}while(n!==t);return Ai(n)}function b2(t,e,r,n,i,o){var a=t;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&D2(a,s)){var u=$0(a,s);a=Ai(a,a.next),u=Ai(u,u.next),Ma(a,e,r,n,i,o,0),Ma(u,e,r,n,i,o,0);return}s=s.next}a=a.next}while(a!==t)}function C2(t,e,r,n){var i=[],o,a,s,u,l;for(o=0,a=e.length;o<a;o++)s=e[o]*n,u=o<a-1?e[o+1]*n:t.length,l=j0(t,s,u,n,!1),l===l.next&&(l.steiner=!0),i.push(L2(l));for(i.sort(O2),o=0;o<i.length;o++)r=I2(i[o],r);return r}function O2(t,e){return t.x-e.x}function I2(t,e){var r=M2(t,e);if(!r)return e;var n=$0(r,t);return Ai(n,n.next),Ai(r,r.next)}function M2(t,e){var r=e,n=t.x,i=t.y,o=-1/0,a;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var s=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=n&&s>o&&(o=s,a=r.x<r.next.x?r:r.next,s===n))return a}r=r.next}while(r!==e);if(!a)return null;var u=a,l=a.x,f=a.y,c=1/0,h;r=a;do n>=r.x&&r.x>=l&&n!==r.x&&ao(i<f?n:o,i,l,f,i<f?o:n,i,r.x,r.y)&&(h=Math.abs(i-r.y)/(n-r.x),Ba(r,t)&&(h<c||h===c&&(r.x>a.x||r.x===a.x&&B2(a,r)))&&(a=r,c=h)),r=r.next;while(r!==u);return a}function B2(t,e){return Yt(t.prev,t,e.prev)<0&&Yt(e.next,t,t.next)<0}function N2(t,e,r,n){var i=t;do i.z===0&&(i.z=Pc(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,P2(i)}function P2(t){var e,r,n,i,o,a,s,u,l=1;do{for(r=t,t=null,o=null,a=0;r;){for(a++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ,!!n);e++);for(u=l;s>0||u>0&&n;)s!==0&&(u===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,l*=2}while(a>1);return t}function Pc(t,e,r,n,i){return t=(t-r)*i|0,e=(e-n)*i|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function L2(t){var e=t,r=t;do(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;while(e!==t);return r}function ao(t,e,r,n,i,o,a,s){return(i-a)*(e-s)>=(t-a)*(o-s)&&(t-a)*(n-s)>=(r-a)*(e-s)&&(r-a)*(o-s)>=(i-a)*(n-s)}function D2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!F2(t,e)&&(Ba(t,e)&&Ba(e,t)&&w2(t,e)&&(Yt(t.prev,t,e.prev)||Yt(t,e.prev,e))||Wu(t,e)&&Yt(t.prev,t,t.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Wu(t,e){return t.x===e.x&&t.y===e.y}function G0(t,e,r,n){var i=Cs(Yt(t,e,r)),o=Cs(Yt(t,e,n)),a=Cs(Yt(r,n,t)),s=Cs(Yt(r,n,e));return!!(i!==o&&a!==s||i===0&&bs(t,r,e)||o===0&&bs(t,n,e)||a===0&&bs(r,t,n)||s===0&&bs(r,e,n))}function bs(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function Cs(t){return t>0?1:t<0?-1:0}function F2(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&G0(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function Ba(t,e){return Yt(t.prev,t,t.next)<0?Yt(t,e,t.next)>=0&&Yt(t,t.prev,e)>=0:Yt(t,e,t.prev)<0||Yt(t,t.next,e)<0}function w2(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==t);return n}function $0(t,e){var r=new Lc(t.i,t.x,t.y),n=new Lc(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function F_(t,e,r,n){var i=new Lc(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Na(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Lc(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Vu.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,a=Math.abs(Dc(t,0,o,r));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*r,f=s<u-1?e[s+1]*r:t.length;a-=Math.abs(Dc(t,l,f,r))}var c=0;for(s=0;s<n.length;s+=3){var h=n[s]*r,_=n[s+1]*r,m=n[s+2]*r;c+=Math.abs((t[h]-t[m])*(t[_+1]-t[h+1])-(t[h]-t[_])*(t[m+1]-t[h+1]))}return a===0&&c===0?0:Math.abs((c-a)/a)};function Dc(t,e,r,n){for(var i=0,o=e,a=r-n;o<r;o+=n)i+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o;return i}Vu.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var a=0;a<e;a++)r.vertices.push(t[i][o][a]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r};var U2=df.exports;const Pn=Io(U2);function w_(t){return Math.max(Math.ceil(t/4)*4,4)}function Y0(t,e,r,n=!0){const i=r===3;if(n){t=t.slice();const a=[];for(let s=0;s<t.length;s+=r){a[0]=t[s],a[1]=t[s+1],i&&(a[2]=t[s+2]);const u=Ws(a,!0,{enable:!1,decimal:1});t[s]=u[0],t[s+1]=u[1],i&&(t[s+2]=u[2])}}return Pn(t,e,r)}const Z0="ATTRIBUTE_LOCATION_";class Et{get attributeLocation(){return le({},Xn)}constructor(e){v(this,"triangulation",void 0),v(this,"uniformBuffers",[]),v(this,"textures",[]),v(this,"createTexture2D",void 0),v(this,"preStyleAttribute",{}),v(this,"encodeStyleAttribute",{}),v(this,"layer",void 0),v(this,"dataTexture",void 0),v(this,"DATA_TEXTURE_WIDTH",void 0),v(this,"dataTextureTest",void 0),v(this,"configService",void 0),v(this,"shaderModuleService",void 0),v(this,"rendererService",void 0),v(this,"iconService",void 0),v(this,"fontService",void 0),v(this,"styleAttributeService",void 0),v(this,"mapService",void 0),v(this,"cameraService",void 0),v(this,"layerService",void 0),v(this,"pickingService",void 0),v(this,"attributeUnifoms",void 0),v(this,"commonUnifoms",void 0),this.layer=e,this.configService=e.getContainer().globalConfigService,this.rendererService=e.getContainer().rendererService,this.pickingService=e.getContainer().pickingService,this.shaderModuleService=e.getContainer().shaderModuleService,this.styleAttributeService=e.getContainer().styleAttributeService,this.mapService=e.getContainer().mapService,this.iconService=e.getContainer().iconService,this.fontService=e.getContainer().fontService,this.cameraService=e.getContainer().cameraService,this.layerService=e.getContainer().layerService,this.registerStyleAttribute(),this.registerBuiltinAttributes(),this.startModelAnimate();const{createTexture2D:r}=this.rendererService;this.createTexture2D=r}getBlend(){const{blend:e="normal"}=this.layer.getLayerConfig();return X0[Wn[e]]}getStencil(e){const{mask:r=!1,maskInside:n=!0,enableMask:i,maskOperation:o=dv.AND}=this.layer.getLayerConfig();if(this.layer.type==="MaskLayer")return D_({stencilType:_c.SINGLE});if(e.isStencil)return D_(le(le({},e),{},{maskOperation:o}));const a=r||i&&this.layer.masks.length!==0||this.layer.tileMask!==void 0;return A2(a,n)}getDefaultStyle(){return{}}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());this.updateStyleUnifoms();const n=le(le({},r.uniformsOption),e.uniformsOption);return Object.keys(n).forEach(i=>{typeof n[i]=="boolean"&&(n[i]=n[i]?1:0)}),!this.rendererService.hasOwnProperty("device")&&this.textures&&this.textures.length===1&&(n.u_texture=this.textures[0]),n}getAnimateUniforms(){return{}}needUpdate(){return ee(function*(){return!1})()}buildModels(){return ee(function*(){throw new Error("Method not implemented.")})()}initModels(){return ee(function*(){throw new Error("Method not implemented.")})()}clearModels(e=!0){}getAttribute(){throw new Error("Method not implemented.")}prerender(){}render(e){throw new Error("Method not implemented.")}registerBuiltinAttributes(){throw new Error("Method not implemented.")}animateOption2Array(e){return[e.enable?0:1,e.duration||4,e.interval||.2,e.trailLength||.1]}startModelAnimate(){const{animateOption:e}=this.layer.getLayerConfig();e.enable&&this.layer.setAnimateStartTime()}getInject(){return k2(this.layer.enableShaderEncodeStyles,this.layer.encodeStyleAttribute)}getDefines(){const e=Object.keys(this.attributeLocation).reduce((r,n)=>{const i=Z0+n;return r[i]=this.attributeLocation[n],r},{});return le({},e)}getStyleAttribute(){const e={};return this.layer.enableShaderEncodeStyles.forEach(r=>{if(!this.layer.encodeStyleAttribute[r]){const n=this.layer.getLayerConfig()[r];let i=typeof n>"u"?T2[r]:n;r==="stroke"&&(i=Ft(i)),e["u_"+r]=i}}),e}registerStyleAttribute(){Object.keys(this.layer.encodeStyleAttribute).forEach(e=>{const r=o2(e);r&&this.styleAttributeService.registerStyleAttribute(r)})}registerPosition64LowAttribute(e=!0){this.styleAttributeService.registerStyleAttribute({name:"position64Low",type:Be.Attribute,descriptor:{name:"a_Position64Low",shaderLocation:this.attributeLocation.POSITION_64LOW,buffer:{data:[],type:p.FLOAT},size:2,update:(r,n,i)=>e?[lr(i[0]),lr(i[1])]:[0,0]}})}updateEncodeAttribute(e,r){this.encodeStyleAttribute[e]=r}initUniformsBuffer(){const e=this.getUniformsBufferInfo(this.getStyleAttribute()),r=this.getCommonUniformsInfo();e.uniformsLength!==0&&(this.attributeUnifoms=this.rendererService.createBuffer({data:new Float32Array(w_(e.uniformsLength)).fill(0),isUBO:!0,label:"layerModelAttributeUnifoms"}),this.uniformBuffers.push(this.attributeUnifoms)),r.uniformsLength!==0&&(this.commonUnifoms=this.rendererService.createBuffer({data:new Float32Array(w_(r.uniformsLength)).fill(0),isUBO:!0,label:"layerModelCommonUnifoms"}),this.uniformBuffers.push(this.commonUnifoms))}getUniformsBufferInfo(e){let r=0;const n=[];return Object.values(e).forEach(i=>{Array.isArray(i)?(n.push(...i),r+=i.length):typeof i=="number"?(n.push(i),r+=1):typeof i=="boolean"&&(n.push(Number(i)),r+=1)}),{uniformsOption:e,uniformsLength:r,uniformsArray:n}}getCommonUniformsInfo(){return{uniformsLength:0,uniformsArray:[],uniformsOption:{}}}updateStyleUnifoms(){var e,r;const{uniformsArray:n}=this.getUniformsBufferInfo(this.getStyleAttribute()),{uniformsArray:i}=this.getCommonUniformsInfo();(e=this.attributeUnifoms)===null||e===void 0||e.subData({offset:0,data:new Uint8Array(new Float32Array(n).buffer)}),(r=this.commonUnifoms)===null||r===void 0||r.subData({offset:0,data:new Uint8Array(new Float32Array(i).buffer)})}}function k2(t,e){const r=[];let n="";t.forEach(a=>{const s=a.replace(/([a-z])([A-Z])/g,"$1_$2").toUpperCase(),u=Z0+s;e[a]?n+=`#define USE_ATTRIBUTE_${s} 0.0 
`:r.push(`  ${Rs[a]} u_${a};`),n+=`
#ifdef USE_ATTRIBUTE_${s}
layout(location = ${u}) in ${Rs[a]} a_${a.charAt(0).toUpperCase()+a.slice(1)};
#endif 
`});const i=r.length?`
layout(std140) uniform AttributeUniforms {
  ${r.join(`
`)}
};
`:"";n+=i;let o="";return t.forEach(a=>{const s=a.replace(/([a-z])([A-Z])/g,"$1_$2").toUpperCase();o+=`
  #ifdef USE_ATTRIBUTE_${s}
    ${Rs[a]} ${a} = a_${a.charAt(0).toUpperCase()+a.slice(1)};
  #else
    ${Rs[a]} ${a} = u_${a};
  #endif
  `}),{"vs:#decl":n,"fs:#decl":i,"vs:#main-start":o}}let SL=function(t){return t[t.solid=0]="solid",t[t.dash=1]="dash",t}({}),U_=function(t){return t.VERTICAL="vertical",t.HORIZONTAL="horizontal",t}({}),z2=function(t){return t.NORMAL="normal",t.REPLACE="replace",t}({}),pf=function(t){return t[t.pixel=0]="pixel",t[t.meter=1]="meter",t}({}),V2=function(t){return t.ALWAYS="always",t.DRAGEND="dragend",t}({});const W2={canvas2d:"2d",webgl:"webgl",webgl2:"webgl2",webgpu:"webgpu"};class H2 extends Et{constructor(...e){super(...e),v(this,"canvas",null),v(this,"ctx",void 0),v(this,"ctxType",void 0),v(this,"viewportSize",void 0),v(this,"initCanvas",()=>{var r,n,i,o,a;const{zIndex:s,getContext:u}=this.layerConfig,l=document.createElement("canvas"),f=this.layer.getModelType();this.canvas=l,l.classList.add("l7-canvas-layer"),l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.zIndex=String(s),this.resetCanvasSize();const c=(r=(n=(i=this.mapService).getCanvasOverlays)===null||n===void 0?void 0:n.call(i))!==null&&r!==void 0?r:(o=(a=this.mapService).getMapCanvasContainer)===null||o===void 0?void 0:o.call(a);c?.appendChild(l),this.ctx=u?u(l):l.getContext(W2[f]),this.ctx||console.error("Failed to get rendering context for canvas"),this.bindListeners()}),v(this,"resetViewportSize",()=>{const{width:r,height:n}=this.rendererService.getViewportSize();this.viewportSize=[r,n]}),v(this,"resetCanvasSize",()=>{const r=this.canvas;if(!r)return;this.resetViewportSize();const[n,i]=this.mapService.getSize(),[o,a]=this.viewportSize;r.width=o,r.height=a,r.style.width=n+"px",r.style.height=i+"px"}),v(this,"renderCanvas",()=>{var r;this.canvas||this.initCanvas();const{draw:n,drawingOnCanvas:i}=this.layerConfig,[o,a]=this.viewportSize,s=this.mapService.getBounds();(r=n??i)===null||r===void 0||r({canvas:this.canvas,ctx:this.ctx,container:{width:o,height:a,bounds:s},size:[o,a],utils:{lngLatToContainer:this.lngLatToContainer},mapService:this.mapService})}),v(this,"removeCanvas",()=>{if(this.canvas){var r;(r=this.canvas.parentElement)===null||r===void 0||r.removeChild(this.canvas),this.canvas=null}this.unbindListeners()}),v(this,"onMapResize",()=>{requestAnimationFrame(()=>{this.resetCanvasSize(),this.renderCanvas()})}),v(this,"lngLatToContainer",r=>{const{x:n,y:i}=this.mapService.lngLatToContainer(r);return{x:n*window.devicePixelRatio,y:i*window.devicePixelRatio}})}get layerConfig(){return this.layer.getLayerConfig()}initModels(){var e=this;return ee(function*(){return e.renderCanvas(),[]})()}bindListeners(){this.mapService.on("resize",this.onMapResize);const{trigger:e,update:r}=this.layerConfig;r===V2.ALWAYS||e==="change"?this.mapService.on("mapchange",this.renderCanvas):(this.mapService.on("zoomstart",this.removeCanvas),this.mapService.on("zoomend",this.renderCanvas),this.mapService.on("movestart",this.removeCanvas),this.mapService.on("moveend",this.renderCanvas))}unbindListeners(){this.mapService.off("resize",this.onMapResize),this.mapService.off("mapchange",this.renderCanvas),this.mapService.off("zoomstart",this.removeCanvas),this.mapService.off("zoomend",this.renderCanvas),this.mapService.off("movestart",this.removeCanvas),this.mapService.off("moveend",this.renderCanvas)}registerBuiltinAttributes(){}}class xL extends $r{constructor(...e){super(...e),v(this,"type","CanvasLayer")}getDefaultConfig(){return{zIndex:3,contextType:"canvas2d",trigger:"change"}}buildModels(){var e=this;return ee(function*(){e.layerModel=new H2(e),yield e.initLayerModels()})()}getModelType(){return this.getLayerConfig().contextType||"canvas2d"}draw(e){return this.updateLayerConfig({draw:e}),this.render(),this}getLayerConfig(){const e=le(le({},this.getDefaultConfig()),super.getLayerConfig());return e.zIndex<3&&(e.zIndex=3),e}render(){var e;return(e=this.layerModel)===null||e===void 0||e.renderCanvas(),this}getCanvas(){var e;return(e=this.layerModel)===null||e===void 0?void 0:e.canvas}show(){const e=this.getCanvas();return e&&(e.style.display="unset"),this}hide(){const e=this.getCanvas();return e&&(e.style.display="none"),this}destroy(){this.layerModel.removeCanvas(),super.destroy()}}const Hu=100,K0=36,X2=40;function k_(t){return t/180*Math.acos(-1)}function q0(t){const e=k_(t[0])+Math.PI/2,r=k_(t[1]),n=Hu+Math.random()*.4,i=n*Math.cos(r)*Math.cos(e),o=n*Math.cos(r)*Math.sin(e),a=n*Math.sin(r);return[o,a,i]}function Q0(t,e){const r=tu(),n=tu(),i=ln(0,1,0),o=ln(0,0,0);e=e||{},t=typeof t<"u"?t:1;const s=2+(typeof e.segments<"u"?e.segments:32),u=2*s,l=[],f=[],c=[],h=[],_=[],m=[];for(let E=0;E<=s;E++){const S=E/s,M=S*Math.PI;for(let P=0;P<=u;P++){const F=P/u,V=F*Math.PI*2;Od(n),EA(n,n,-M),Od(r),pv(r,r,V),io(o,i,n),io(o,o,r),yA(o,o,-t),c.push(o.slice()),h.push(...o.slice()),oo(o,o),_.push(...o.slice()),m.push([F,1-S]),h.push(F,1-S)}if(E>0){const P=c.length;let F=P-2*(u+1);for(;F+u+2<P;F++)l.push([F,F+1,F+u+1]),f.push(F,F+1,F+u+1),l.push([F+u+1,F+1,F+u+2]),f.push(F+u+1,F+1,F+u+2)}}return{cells:l,positions:c,uvs:m,positionsArr:h,indicesArr:f,normalArr:_}}const z_=jr();jr();const qr=jr(),na=jr(),Os=jr();function V_(t,e,r,n,i){eo(t,r,n),ru(t,t),e=mc(-t[1],t[0]);const o=mc(-r[1],r[0]);return[i/vc(e,o),e]}function ia(t,e){return AA(t,-e[1],e[0])}function Is(t,e,r){return _v(t,e,r),ru(t,t),t}function W_(t,e){return t[0]===e[0]&&t[1]===e[1]}class j2{constructor(e={}){v(this,"complex",void 0),v(this,"join",void 0),v(this,"cap",void 0),v(this,"miterLimit",void 0),v(this,"thickness",void 0),v(this,"normal",void 0),v(this,"lastFlip",-1),v(this,"miter",mc(0,0)),v(this,"started",!1),v(this,"dash",!1),v(this,"totalDistance",0),v(this,"currentIndex",0),this.join=e.join||"miter",this.cap=e.cap||"butt",this.miterLimit=e.miterLimit||10,this.thickness=e.thickness||1,this.dash=e.dash||!1,this.complex={positions:[],indices:[],normals:[],startIndex:0,indexes:[]}}simpleExtrude(e){const r=this.complex;if(e.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;const n=e.length;let i=r.startIndex;for(let o=1;o<n;o++){const a=e[o-1],s=e[o],u=o<e.length-1?e[o+1]:null,l=this.simpleSegment(r,i,a,s,u);i+=l}if(this.dash)for(let o=0;o<r.positions.length/6;o++)r.positions[o*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}extrude(e){const r=this.complex;if(e.length<=1)return r;this.lastFlip=-1,this.started=!1,this.normal=null,this.totalDistance=0;const n=e.length;let i=r.startIndex;for(let o=1;o<n;o++){const a=e[o-1],s=e[o],u=o<e.length-1?e[o+1]:null,l=this.segment(r,i,a,s,u);i+=l}if(this.dash)for(let o=0;o<r.positions.length/6;o++)r.positions[o*6+5]=this.totalDistance;return r.startIndex=r.positions.length/6,r}simpleSegment(e,r,n,i,o){let a=0;const s=e.indices,u=e.positions,l=e.normals,f=en([i[0],i[1]]),c=en([n[0],n[1]]);Is(qr,f,c);let h=0;if(this.dash&&(h=this.lineSegmentDistance(f,c),this.totalDistance+=h),this.normal||(this.normal=jr(),ia(this.normal,qr)),this.started||(this.started=!0,this.extrusions(u,l,n,this.normal,this.thickness,this.totalDistance-h)),s.push(r+0,r+1,r+2),!o)ia(this.normal,qr),this.extrusions(u,l,i,this.normal,this.thickness,this.totalDistance),s.push(...this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3]),a+=2;else{const _=en([o[0],o[1]]);W_(f,_)&&eo(_,f,ru(_,Id(_,f,c))),Is(na,_,f);const[m,E]=V_(Os,jr(),qr,na,this.thickness);let S=vc(Os,this.normal)<0?-1:1;this.extrusions(u,l,i,E,m,this.totalDistance),s.push(...this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3]),S=-1,kl(this.normal,E),a+=2,this.lastFlip=S}return a}segment(e,r,n,i,o){let a=0;const s=e.indices,u=e.positions,l=e.normals,f=this.cap==="square",c=this.join==="bevel",h=en([i[0],i[1]]),_=en([n[0],n[1]]);Is(qr,h,_);let m=0;if(this.dash&&(m=this.lineSegmentDistance(h,_),this.totalDistance+=m),this.normal||(this.normal=jr(),ia(this.normal,qr)),!this.started)if(this.started=!0,f){const E=jr(),S=jr();eo(E,this.normal,qr),eo(S,this.normal,qr),l.push(S[0],S[1],0),l.push(E[0],E[1],0),u.push(n[0],n[1],n[2]|0,this.totalDistance-m,-this.thickness,n[2]|0),this.complex.indexes.push(this.currentIndex),u.push(n[0],n[1],n[2]|0,this.totalDistance-m,this.thickness,n[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(u,l,n,this.normal,this.thickness,this.totalDistance-m);if(s.push(r+0,r+1,r+2),o){const E=en([o[0],o[1]]);W_(h,E)&&eo(E,h,ru(E,Id(E,h,_))),Is(na,E,h);const[S,M]=V_(Os,jr(),qr,na,this.thickness);let P=vc(Os,this.normal)<0?-1:1,F=c;!F&&this.join==="miter"&&S>this.miterLimit&&(F=!0),F?(l.push(this.normal[0],this.normal[1],0),l.push(M[0],M[1],0),u.push(i[0],i[1],i[2]|0,this.totalDistance,-this.thickness*P,i[2]|0),this.complex.indexes.push(this.currentIndex),u.push(i[0],i[1],i[2]|0,this.totalDistance,this.thickness*P,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,s.push(...this.lastFlip!==-P?[r,r+2,r+3]:[r+2,r+1,r+3]),s.push(r+2,r+3,r+4),ia(z_,na),kl(this.normal,z_),l.push(this.normal[0],this.normal[1],0),u.push(i[0],i[1],i[2]|0,this.totalDistance,-this.thickness*P,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++,a+=3):(this.extrusions(u,l,i,M,S,this.totalDistance),s.push(...this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3]),P=-1,kl(this.normal,M),a+=2),this.lastFlip=P}else{if(ia(this.normal,qr),f){const E=jr(),S=jr();_v(S,qr,this.normal),eo(E,qr,this.normal),l.push(S[0],S[1],0),l.push(E[0],E[1],0),u.push(i[0],i[1],i[2]|0,this.totalDistance,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),u.push(i[0],i[1],i[2]|0,this.totalDistance,this.thickness,i[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}else this.extrusions(u,l,i,this.normal,this.thickness,this.totalDistance);s.push(...this.lastFlip===1?[r,r+2,r+3]:[r+2,r+1,r+3]),a+=2}return a}extrusions(e,r,n,i,o,a){r.push(i[0],i[1],0),r.push(i[0],i[1],0),e.push(n[0],n[1],n[2]|0,a,-o,n[2]|0),this.complex.indexes.push(this.currentIndex),e.push(n[0],n[1],n[2]|0,a,o,n[2]|0),this.complex.indexes.push(this.currentIndex),this.currentIndex++}lineSegmentDistance(e,r){const n=r[0]-e[0],i=r[1]-e[1];return Math.sqrt(n*n+i*i)}}let oa=function(t){return t.CYLINDER="cylinder",t.SQUARECOLUMN="squareColumn",t.TRIANGLECOLUMN="triangleColumn",t.HEXAGONCOLUMN="hexagonColumn",t.PENTAGONCOLUMN="pentagonColumn",t}({}),aa=function(t){return t.CIRCLE="circle",t.SQUARE="square",t.TRIANGLE="triangle",t.HEXAGON="hexagon",t.PENTAGON="pentagon",t}({});function Ua(t,e=0){const r=Math.PI*2/t,n=[];for(let o=0;o<t;o++)n.push(r*o+e*Math.PI/12);return n.map(o=>{const a=Math.sin(o+Math.PI/4),s=Math.cos(o+Math.PI/4);return[a,s,0]})}function Fc(){return Ua(30)}function H_(){return Ua(4)}function X_(){return Ua(3)}function j_(){return Ua(6,1)}function G_(){return Ua(5)}const po={[aa.CIRCLE]:Fc,[aa.HEXAGON]:j_,[aa.TRIANGLE]:X_,[aa.SQUARE]:H_,[aa.PENTAGON]:G_,[oa.CYLINDER]:Fc,[oa.HEXAGONCOLUMN]:j_,[oa.TRIANGLECOLUMN]:X_,[oa.SQUARECOLUMN]:H_,[oa.PENTAGONCOLUMN]:G_};function G2(t){const e=t[0][0],r=t[0][t[0].length-1];e[0]===r[0]&&e[1]===r[1]&&(t[0]=t[0].slice(0,t[0].length-1));const n=t[0].length,i=Pn.flatten(t),{vertices:o,dimensions:a}=i,s=[],u=[];for(let f=0;f<o.length/a;f++)a===2?s.push(o[f*2],o[f*2+1],1):s.push(o[f*3],o[f*3+1],1);const l=Pn(i.vertices,i.holes,i.dimensions);u.push(...l);for(let f=0;f<n;f++){const c=i.vertices.slice(f*a,(f+1)*a);let h=i.vertices.slice((f+1)*a,(f+2)*a);h.length===0&&(h=i.vertices.slice(0,a));const _=s.length/3;s.push(c[0],c[1],1,h[0],h[1],1,c[0],c[1],0,h[0],h[1],0),u.push(...[0,2,1,2,3,1].map(m=>m+_))}return{positions:s,index:u}}function $2(t){const e=Pn.flatten(t),r=Pn(e.vertices,e.holes,e.dimensions);return{positions:e.vertices,index:r}}function J0(t,e=!1){const r=t[0][0],n=t[0][t[0].length-1];r[0]===n[0]&&r[1]===n[1]&&(t[0]=t[0].slice(0,t[0].length-1));const i=t[0].length,o=Pn.flatten(t),{vertices:a,dimensions:s,holes:u}=o,l=[],f=[],c=[];for(let _=0;_<a.length/s;_++)l.push(a[_*s],a[_*s+1],1,-1,-1),c.push(0,0,1);const h=Y0(a,u,s,e);f.push(...h);for(let _=0;_<i;_++){const m=o.vertices.slice(_*s,(_+1)*s);let E=o.vertices.slice((_+1)*s,(_+2)*s);E.length===0&&(E=o.vertices.slice(0,s));const S=l.length/5;l.push(m[0],m[1],1,0,0,E[0],E[1],1,.1,0,m[0],m[1],0,0,.8,E[0],E[1],0,.1,.8);const M=Y2([E[0],E[1],1],[m[0],m[1],0],[m[0],m[1],1],e);c.push(...M,...M,...M,...M),f.push(...[1,2,0,3,2,1].map(P=>P+S))}return{positions:l,index:f,normals:c}}function Y2(t,e,r,n=!1){const i=ys(),o=ys(),a=ys();n&&(t=Ws(t),e=Ws(e),r=Ws(r));const s=ln(...t),u=ln(...e),l=ln(...r);Md(i,l,u),Md(o,s,u),TA(a,i,o);const f=ys();return oo(f,a),f}const Ms={};function _i(t){const e=vi(t.coordinates);return{vertices:[...e,...e,...e,...e],indices:[0,1,2,2,3,0],size:e.length}}function $_(t){const e=vi(t.coordinates),r=q0(e);return{vertices:[...r,...r,...r,...r],indices:[0,1,2,2,3,0],size:r.length}}function _f(t){const{shape:e}=t,{positions:r,index:n,normals:i}=eO(e,!1);return{vertices:r,indices:n,normals:i,size:5}}function Z2(t){const e=vi(t.coordinates);return{vertices:[...e],indices:[0],size:e.length}}function wc(t){const{coordinates:e}=t,r=new j2({dash:!0,join:"bevel"});let n=e;n[0]&&!Array.isArray(n[0][0])&&(n=[e]),n.forEach(o=>{r.extrude(o)});const i=r.complex;return{vertices:i.positions,indices:i.indices,normals:i.normals,indexes:i.indexes,size:6}}function K2(t){const{coordinates:e}=t,r=[];if(!Array.isArray(e[0]))return{vertices:[],indices:[],normals:[],size:6,count:0};const{results:n,totalDistance:i}=q2(e);return n.map(o=>{r.push(o[0],o[1],o[2],o[3],0,i)}),{vertices:r,indices:[],normals:[],size:6,count:n.length}}function Y_(t,e){const r=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(r*r+n*n)}function nc(t,e){return t.length<3&&t.push(0),e!==void 0&&t.push(e),t}function q2(t){let e=t;Array.isArray(e)&&Array.isArray(e[0])&&Array.isArray(e[0][0])&&(e=t.flat());let r=0;if(e.length<2)return{results:e,totalDistance:0};{const n=[],i=nc(e[0],r);n.push(i);for(let a=1;a<e.length-1;a++){const s=Y_(en(e[a-1]),en(e[a]));r+=s;const u=nc(e[a],r);n.push(u),n.push(u)}const o=Y_(en(e[e.length-2]),en(e[e.length-1]));return r+=o,n.push(nc(e[e.length-1],r)),{results:n,totalDistance:r}}}function ka(t){const{coordinates:e}=t,r=Pn.flatten(e),{vertices:n,dimensions:i,holes:o}=r;return{indices:Y0(n,o,i),vertices:n,size:i}}function Q2(t){const{indices:e,vertices:r,size:n}=ka(t);return{indices:e,vertices:J2(r),size:n+4}}function J2(t){const e=[],{center:r,radius:n}=SA(t);for(let i=0;i<t.length;i+=2){const o=t[i],a=t[i+1];e.push(o,a,0,...r,n)}return e}function mf(t){const e=t.coordinates,{positions:r,index:n,normals:i}=J0(e,!0);return{vertices:r,indices:n,normals:i,size:5}}function eg(t){const{shape:e}=t,{positions:r,index:n}=tO(e);return{vertices:r,indices:n,size:3}}function za(t){const e=t.coordinates;return{vertices:[...e[0],0,0,0,...e[1],0,1,0,...e[2],0,1,1,...e[3],0,0,1],indices:[0,1,2,0,2,3],size:5}}function vf(t,e){const{segmentNumber:r=30}=e,n=t.coordinates,i=[],o=[];for(let a=0;a<r;a++)i.push(a,1,a,n[0][0],n[0][1],n[1][0],n[1][1],a,-1,a,n[0][0],n[0][1],n[1][0],n[1][1]),a!==r-1&&o.push(...[0,1,2,1,3,2].map(s=>a*2+s));return{vertices:i,indices:o,size:7}}function Z_(t){const e=t.coordinates;e.length===2&&e.push(0);const r=Bs(-1,1),n=Bs(1,1),i=Bs(-1,-1),o=Bs(1,-1);return{vertices:[...e,...r,...e,...i,...e,...o,...e,...n],indices:[0,1,2,3,0,2],size:5}}function eO(t,e=!1){if(Ms&&Ms[t])return Ms[t];const r=po[t]?po[t]():po.cylinder(),n=J0([r],e);return Ms[t]=n,n}function tO(t){const e=["cylinder","triangleColumn","hexagonColumn","squareColumn"],r=po[t]?po[t]():po.circle();return e.indexOf(t)===-1?$2([r]):G2([r])}function Bs(t,e){const r=(t+1)/2,n=(e+1)/2;return[r,n]}function tg(){const t=Q0(Hu,{segments:K0}),{positionsArr:e,indicesArr:r,normalArr:n}=t;return{vertices:e,indices:r,size:5,normals:n}}function rO(){const t=Q0(Hu+X2,{segments:K0}),{positionsArr:e,indicesArr:r,normalArr:n}=t;return{vertices:e,indices:r,size:5,normals:n}}const nO=`precision highp float;
layout(std140) uniform commonUniforms {
  vec4 u_baseColor: [ 1.0, 0, 0, 1.0 ];
  vec4 u_brightColor: [ 1.0, 0, 0, 1.0 ];
  vec4 u_windowColor: [ 1.0, 0, 0, 1.0 ];
  vec4 u_circleSweepColor;
  vec2 u_cityCenter;
  float u_circleSweep;
  float u_cityMinSize;
  float u_circleSweepSpeed;
  float u_opacity: 1.0;
  float u_near: 0;
  float u_far: 1;
  float u_time;
};
in vec4 v_Color;
in vec2 v_texCoord;
in float v_worldDis;
out vec4 outputColor;

#pragma include "picking"
#pragma include "scene_uniforms"

vec3 getWindowColor(float n, float hot, vec3 brightColor, vec3 darkColor) {
    float s = step(hot, n);
    vec3 color = mix(brightColor,vec3(0.9,0.9,1.0),n);

    return mix(darkColor, color, s);
}
float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

float LinearizeDepth()
{
    float z = gl_FragCoord.z * 2.0 - 1.0;
    return (2.0 * u_near * u_far) / (u_far + u_near - z * (u_far - u_near));
}

vec3 fog(vec3 color, vec3 fogColor, float depth){
    float fogFactor=clamp(depth,0.0,1.0);
    vec3 output_color=mix(fogColor,color,fogFactor);
    return output_color;
}

float sdRect(vec2 p, vec2 sz) {
  vec2 d = abs(p) - sz;
  float outside = length(max(d, 0.));
  float inside = min(max(d.x, d.y), 0.);
  return outside + inside;
}

void main() {
  outputColor = v_Color;
  vec3 baseColor = u_baseColor.xyz;
  vec3 brightColor = u_brightColor.xyz;
  vec3 windowColor = u_windowColor.xyz;
  float targetColId = 5.;
  float depth = 1.0 - LinearizeDepth() / u_far * u_Zoom;
  vec3 fogColor = vec3(23.0/255.0,31.0/255.0,51.0/255.0);
  if(v_texCoord.x < 0.) { //顶部颜色
       vec3 foggedColor = fog(baseColor.xyz + vec3(0.12*0.9,0.2*0.9,0.3*0.9),fogColor,depth);
       outputColor = vec4( foggedColor, v_Color.w);
  }else { // 侧面颜色
        vec2 st = v_texCoord;
        vec2  UvScale = v_texCoord;
        float tStep = min(0.08,max(0.05* (18.0-u_Zoom),0.02));
        float tStart = 0.25 * tStep;
        float tEnd = 0.75 * tStep;
        float u = mod(UvScale.x, tStep);
        float v = mod(UvScale.y, tStep);
        float ux = floor(UvScale.x/tStep);
        float uy = floor(UvScale.y/tStep);
        float n = random(vec2(ux,uy));
        float lightP = u_time;
        float head = 1.0- step(0.005,st.y);
        /*step3*/
        // 将窗户颜色和墙面颜色区别开来
        float sU = step(tStart, u) - step(tEnd, u);
        float sV = step(tStart, v) - step(tEnd, v);
        vec2 windowSize = vec2(abs(tEnd-tStart),abs(tEnd-tStart));
        float dist = sdRect(vec2(u,v), windowSize);
        float s = sU * sV;

        float curColId = floor(UvScale.x / tStep);
        float sCol = step(targetColId - 0.2, curColId) - step(targetColId + 0.2, curColId);

        float mLightP = mod(lightP, 2.);
        float sRow = step(mLightP - 0.2, st.y) - step(mLightP, st.y);
        if(ux == targetColId){
            n =0.;
        }
        float timeP = min(0.75, abs ( sin(u_time/3.0) ) );
        float hot = smoothstep(1.0,0.0,timeP);
        vec3 color = mix(baseColor, getWindowColor(n,hot,brightColor,windowColor), s);
        //vec3 color = mix(baseColor, getWindowColor(n,hot,brightColor,windowColor), 1.0);
        float sFinal = s * sCol * sRow;
        color += mix(baseColor, brightColor, sFinal*n);
        if (st.y<0.01){
        color = baseColor;
         }
        if(head ==1.0) { // 顶部亮线
            color = brightColor;
        }
        color = color * v_Color.rgb;

        vec3 foggedColor = fog(color,fogColor,depth);

        outputColor = vec4(foggedColor,1.0);
  }


  if(u_circleSweep > 0.0 && v_worldDis < u_cityMinSize) {
    float r = fract(((v_worldDis/u_cityMinSize) - u_time * u_circleSweepSpeed) * 2.0);
    outputColor.rgb += r * r * u_circleSweepColor.rgb;
  }

  outputColor.a *= u_opacity;
  outputColor = filterColor(outputColor);
}
`,iO=`precision highp float;

#define ambientRatio 0.5
#define diffuseRatio 0.3
#define specularRatio 0.2

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

out vec2 v_texCoord;
out vec4 v_Color;
out float v_worldDis;

layout(std140) uniform commonUniforms {
  vec4 u_baseColor : [ 1.0, 0, 0, 1.0 ];
  vec4 u_brightColor : [ 1.0, 0, 0, 1.0 ];
  vec4 u_windowColor : [ 1.0, 0, 0, 1.0 ];
  vec4 u_circleSweepColor;
  vec2 u_cityCenter;
  float u_circleSweep;
  float u_cityMinSize;
  float u_circleSweepSpeed;
  float u_opacity: 1.0;
  float u_near : 0;
  float u_far : 1;
  float u_time;
};
#pragma include "projection"
#pragma include "light"
#pragma include "picking"


void main() {
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  vec4 project_pos = project_position(pos);

   v_texCoord = a_Uv;

  if(u_circleSweep > 0.0) {
     vec2 lnglatscale = vec2(0.0);
    lnglatscale = (a_Position.xy - u_cityCenter) * vec2(0.0, 0.135);
    v_worldDis = length(a_Position.xy + lnglatscale - u_cityCenter);
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  float lightWeight = calc_lighting(pos);
  // v_Color = a_Color;
  v_Color = vec4(a_Color.rgb * lightWeight, a_Color.w);

  setPickingColor(a_PickingColor);
}
`;class oO extends Et{constructor(...e){super(...e),v(this,"cityCenter",void 0),v(this,"cityMinSize",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:10,UV:11})}getCommonUniformsInfo(){const{opacity:e=1,baseColor:r="rgb(16,16,16)",brightColor:n="rgb(255,176,38)",windowColor:i="rgb(30,60,89)",time:o=0,sweep:a={enable:!1,sweepRadius:1,sweepColor:"rgb(255, 255, 255)",sweepSpeed:.4,sweepCenter:this.cityCenter}}=this.layer.getLayerConfig(),s={u_baseColor:Ft(r),u_brightColor:Ft(n),u_windowColor:Ft(i),u_circleSweepColor:[...Ft(a.sweepColor).slice(0,3),1],u_cityCenter:a.sweepCenter||this.cityCenter,u_circleSweep:a.enable?1:0,u_cityMinSize:this.cityMinSize*a.sweepRadius,u_circleSweepSpeed:a.sweepSpeed,u_opacity:e,u_near:0,u_far:1,u_time:this.layer.getLayerAnimateTime()||o};return this.getUniformsBufferInfo(s)}calCityGeo(){const[e,r,n,i]=this.layer.getSource().extent,o=n-e,a=i-r;this.cityCenter=[(n+e)/2,(i+r)/2],this.cityMinSize=Math.sqrt(Math.pow(o,2)+Math.pow(a,2))/4}initModels(){var e=this;return ee(function*(){return e.calCityGeo(),e.initUniformsBuffer(),e.startModelAnimate(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return[yield e.layer.buildLayerModel({moduleName:"cityBuilding",vertexShader:iO,fragmentShader:nO,triangulation:mf,depth:{enable:!0},defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:p.BACK}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=10}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}class RL extends $r{constructor(...e){super(...e),v(this,"type","CityBuildingLayer")}buildModels(){var e=this;return ee(function*(){e.layerModel=new oO(e),yield e.initLayerModels()})()}setLight(e){this.updateLayerConfig({time:e})}getModelType(){return"citybuilding"}}const aO=`layout(std140) uniform commonUniforms {
  vec2 u_size;
  float u_raisingHeight;
  float u_rotation;
  float u_opacity;
};

uniform sampler2D u_texture;

in vec2 v_uv;
out vec4 outputColor;

#pragma include "picking"
void main() {
  outputColor = texture(SAMPLER_2D(u_texture), vec2(v_uv.x, 1.0 - v_uv.y));
  outputColor.a *= u_opacity;
  outputColor = filterColor(outputColor);
}
`,sO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_size;
  float u_raisingHeight;
  float u_rotation;
  float u_opacity;
};

out vec2 v_uv;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"
void main() {
  vec3 extrude = a_Extrude;
  v_uv = a_Uv;
  float raiseHeight = u_raisingHeight;
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    raiseHeight = u_raisingHeight * mapboxZoomScale;
  }

  // 计算经纬度点位坐标
  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0));

  // 计算绕 z 轴旋转后的偏移
  vec2 offsetXY = project_pixel(rotate_matrix(vec2(extrude.x * u_size.x, 0.0), u_rotation));
  // 绕 z 轴旋转
  float x = project_pos.x + offsetXY.x;
  float y = project_pos.y + offsetXY.y;
  // z 轴不参与旋转
  float z = project_pixel(extrude.y * u_size.y + raiseHeight);

  gl_Position = project_common_position_to_clipspace(vec4(x, y, z, 1.0));

  setPickingColor(a_PickingColor);
}
`;class uO extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"radian",0),v(this,"planeGeometryTriangulation",()=>{const{center:r=[120,30]}=this.layer.getLayerConfig();return{size:4,indices:[0,1,2,2,3,0],vertices:[...r,1,1,...r,0,1,...r,0,0,...r,1,0]}})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,EXTRUDE:9,UV:10})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,width:r=1,height:n=1,raisingHeight:i=0}=this.layer.getLayerConfig();let o=1;this.mapService.getType()==="amap"&&(o=-1),this.radian=o*Math.PI*(this.mapService.getRotation()%360)/180;const a={u_size:[r,n],u_raisingHeight:Number(i),u_rotation:this.radian,u_opacity:e||1,u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(a)}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}initModels(){var e=this;return ee(function*(){const{drawCanvas:r}=e.layer.getLayerConfig(),{createTexture2D:n}=e.rendererService;return e.texture=n({height:0,width:0}),r&&e.updateTexture(r),e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"geometryBillboard",vertexShader:sO,fragmentShader:aO,triangulation:e.planeGeometryTriangulation,defines:e.getDefines(),inject:e.getInject(),primitive:p.TRIANGLES,depth:{enable:!0}})]})()}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}updateTexture(e){const{createTexture2D:r}=this.rendererService,{canvasWidth:n=1,canvasHeight:i=1}=this.layer.getLayerConfig(),o=document.createElement("canvas");o.width=n,o.height=i,o.getContext("2d")&&(e(o),this.texture=r({data:o,width:o.width,height:o.height,wrapS:p.CLAMP_TO_EDGE,wrapT:p.CLAMP_TO_EDGE}),this.layerService.reRender())}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Be.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i)=>{const o=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],a=i%4*3;return[o[a],o[a+1],o[a+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[2],n[3]]}})}}const lO=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_mapFlag;
  float u_terrainClipHeight;
};

in vec3 v_Color;
in vec2 v_uv;
in float v_clip;
out vec4 outputColor;

#pragma include "picking"
void main() {
  if (u_mapFlag > 0.0) {
    outputColor = texture(SAMPLER_2D(u_texture), vec2(v_uv.x, 1.0 - v_uv.y));
    outputColor.a *= u_opacity;
  } else {
    outputColor = vec4(v_Color, u_opacity);
  }
  outputColor.a *= v_clip;
  outputColor = filterColor(outputColor);
}
`,cO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec3 a_Color;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_mapFlag;
  float u_terrainClipHeight;
};

out vec3 v_Color;
out vec2 v_uv;
out float v_clip;

#pragma include "projection"
#pragma include "picking"
void main() {
  v_Color = a_Color;
  v_uv = a_Uv;

  vec4 project_pos = project_position(vec4(a_Position, 1.0));

  v_clip = 1.0;
  if (a_Position.z < u_terrainClipHeight) {
    v_clip = 0.0;
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, a_Position.z, 1.0));

  setPickingColor(a_PickingColor);
}
`;class fO extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"terrainImage",void 0),v(this,"terrainImageLoaded",!1),v(this,"mapTexture",void 0),v(this,"planeGeometryTriangulation",()=>{const{width:r=1,height:n=1,widthSegments:i=1,heightSegments:o=1,center:a=[120,30],terrainTexture:s,rgb2height:u=(c,h,_)=>c+h+_}=this.layer.getLayerConfig(),{indices:l,positions:f}=this.initPlane(r,n,i,o,...a);return s?this.translateVertex(f,l,this.terrainImage,i,o,u):{vertices:f,indices:l,size:5}})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:10})}initPlane(e=1,r=1,n=1,i=1,o=120,a=30){const s=e/2,u=r/2,l=Math.floor(n),f=Math.floor(i),c=l+1,h=f+1,_=e/l,m=r/f,E=[],S=[];for(let M=0;M<h;M++){const P=M*m-u;for(let F=0;F<c;F++){const V=F*_-s;S.push(V+o,-P+a,0),S.push(F/l),S.push(1-M/f)}}for(let M=0;M<f;M++)for(let P=0;P<l;P++){const F=P+c*M,V=P+c*(M+1),pe=P+1+c*(M+1),ce=P+1+c*M;E.push(F,V,ce),E.push(V,pe,ce)}return{indices:E,positions:S}}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,mapTexture:r,terrainClipHeight:n=0,terrainTexture:i}=this.layer.getLayerConfig();if(this.mapTexture!==r){var o;this.mapTexture=r,(o=this.texture)===null||o===void 0||o.destroy(),this.updateTexture(r)}const a={u_opacity:e||1,u_mapFlag:r?1:0,u_terrainClipHeight:i?n:-1,u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(a)}clearModels(){var e;this.terrainImage=null,(e=this.texture)===null||e===void 0||e.destroy(),this.textures=[]}initModels(){var e=this;return ee(function*(){const{mapTexture:r,terrainTexture:n}=e.layer.getLayerConfig();e.mapTexture=r;const{createTexture2D:i}=e.rendererService;return e.texture=i({height:0,width:0}),e.updateTexture(r),e.initUniformsBuffer(),n&&(e.terrainImage=yield e.loadTerrainImage(n)),[yield e.layer.buildLayerModel({moduleName:"geometryPlane",vertexShader:cO,fragmentShader:lO,triangulation:e.planeGeometryTriangulation,defines:e.getDefines(),inject:e.getInject(),primitive:p.TRIANGLES,depth:{enable:!0},cull:{enable:!0,face:p.BACK}})]})()}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}createModelData(e){if(e){const{widthSegments:i,heightSegments:o,width:a,height:s}=this.layer.getLayerConfig(),{widthSegments:u,heightSegments:l,width:f,height:c}=e;this.layer.style({widthSegments:u!==void 0?u:i,heightSegments:l!==void 0?l:o,width:f!==void 0?f:a,height:c!==void 0?c:s})}const r=this.layer.getEncodedData();return this.styleAttributeService.createAttributesAndIndices(r,this.planeGeometryTriangulation)}updateTexture(e){const{createTexture2D:r}=this.rendererService;if(e){const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{this.texture=r({data:n,width:n.width,height:n.height,wrapS:p.CLAMP_TO_EDGE,wrapT:p.CLAMP_TO_EDGE}),this.layerService.reRender()},n.src=e}else this.texture=r({width:0,height:0})}getImageData(e){const r=document.createElement("canvas"),n=r.getContext("2d"),{width:i,height:o}=e;return r.width=i,r.height=o,n.drawImage(e,0,0,i,o),n.getImageData(0,0,i,o)}translateVertex(e,r,n,i,o,a){const s=n.width,u=n.height,l=this.getImageData(n).data,f=Math.floor(i),c=Math.floor(o),h=f+1,_=c+1,m=s/f,E=u/c;for(let S=0;S<_;S++){const P=Math.floor(S*E)*s;for(let F=0;F<h;F++){const V=Math.floor(F*m),pe=(P+V)*4,ce=l[pe],j=l[pe+1],fe=l[pe+2],ze=(S*h+F)*5+2;e[ze]=a(ce,j,fe)}}return{vertices:e,indices:r,size:5}}loadTerrainImage(e){var r=this;return ee(function*(){if(r.terrainImage)return r.terrainImageLoaded?r.terrainImage:new Promise(n=>{r.terrainImage.onload=()=>{n(r.terrainImage)}});{const n=new Image;return n.crossOrigin="anonymous",new Promise(i=>{n.onload=()=>{r.terrainImageLoaded=!0,i(n),setTimeout(()=>r.layer.emit("terrainImageLoaded",null))},n.src=e})}})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}const hO=`layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_mapFlag;
  float u_Scale;
};
uniform sampler2D u_texture;

in vec3 v_Color;
in float v_d;
out vec4 outputColor;

void main() {
  if (v_d < 0.0) {
    discard;
  }

  if (u_mapFlag > 0.0) {
    outputColor = texture(SAMPLER_2D(u_texture), gl_PointCoord);
    outputColor.a *= u_opacity;
  } else {
    outputColor = vec4(v_Color, u_opacity);
  }
}
`,dO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec3 a_Color;

layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_mapFlag;
  float u_Scale;
};

out vec3 v_Color;
out float v_d;

#pragma include "projection"
void main() {
  v_Color = a_Color.xyz;
  v_d = a_Position.z;

  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, a_Position.z, 1.0));
  gl_PointSize = pow(u_Zoom - 1.0, 2.0) * u_Scale;
}
`;var ro=function(t){return t.UP="up",t.DOWN="down",t}(ro||{});class pO extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"mapTexture",void 0),v(this,"positions",void 0),v(this,"indices",void 0),v(this,"timer",void 0),v(this,"spriteTop",void 0),v(this,"spriteUpdate",void 0),v(this,"spriteAnimate",void 0),v(this,"planeGeometryUpdateTriangulation",()=>{const{spriteBottom:r=-10}=this.layer.getLayerConfig(),n=this.spriteUpdate,i=r,o=this.spriteTop;for(let a=0;a<this.positions.length;a+=5)this.spriteAnimate===ro.UP?(this.positions[a+2]+=n,this.positions[a+2]>o&&(this.positions[a+2]=i)):(this.positions[a+2]-=n,this.positions[a+2]<i&&(this.positions[a+2]=o));return{vertices:this.positions,indices:this.indices,size:5}}),v(this,"updatePosition",()=>{var r;this.planeGeometryUpdateTriangulation();const n=(r=this.styleAttributeService.getLayerStyleAttribute("position"))===null||r===void 0?void 0:r.vertexAttribute;if(n){const i=[];for(let o=0;o<this.positions.length;o+=5)i.push(this.positions[o],this.positions[o+1],this.positions[o+2]);n.updateBuffer({data:i,offset:0})}this.layerService.throttleRenderLayers(),this.timer=requestAnimationFrame(this.updatePosition)}),v(this,"planeGeometryTriangulation",()=>{const{center:r=[120,30],spriteCount:n=100,spriteRadius:i=10}=this.layer.getLayerConfig(),{indices:o,positions:a}=this.initSprite(i,n,...r);return this.positions=a,this.indices=o,{vertices:a,indices:o,size:5}})}initSprite(e=10,r=100,n=120,i=30){const o=[],a=[],s=this.spriteAnimate===ro.UP?-this.spriteTop:this.spriteTop;for(let l=0;l<r;l++){const f=Math.random()*s;a.push(...u(f))}for(let l=0;l<r;l++)o.push(l);function u(l){const f=e*Math.random(),c=e*Math.random(),h=-e/2+f,_=-e/2+c;return[h+n,-_+i,l,0,0]}return{indices:o,positions:a}}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,mapTexture:r,spriteScale:n=1}=this.layer.getLayerConfig();if(this.mapTexture!==r){var i;this.mapTexture=r,(i=this.texture)===null||i===void 0||i.destroy(),this.textures=[],this.updateTexture(r)}const o={u_opacity:e||1,u_mapFlag:r?1:0,u_Scale:n,u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(o)}clearModels(){var e;cancelAnimationFrame(this.timer),(e=this.texture)===null||e===void 0||e.destroy(),this.textures=[]}initModels(){var e=this;return ee(function*(){const{mapTexture:r,spriteTop:n=300,spriteUpdate:i=10,spriteAnimate:o=ro.DOWN}=e.layer.getLayerConfig();e.initUniformsBuffer(),e.mapTexture=r,e.spriteTop=n,e.spriteUpdate=i,o==="up"?e.spriteAnimate=ro.UP:e.spriteAnimate=ro.DOWN;const{createTexture2D:a}=e.rendererService;return e.texture=a({height:0,width:0}),e.updateTexture(r),setTimeout(()=>{e.updatePosition()},100),[yield e.layer.buildLayerModel({moduleName:"geometrySprite",vertexShader:dO,fragmentShader:hO,triangulation:e.planeGeometryTriangulation,defines:e.getDefines(),inject:e.getInject(),primitive:p.POINTS,depth:{enable:!1},blend:e.getBlend()})]})()}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}updateTexture(e){const{createTexture2D:r}=this.rendererService;if(e){const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{this.texture=r({data:n,width:n.width,height:n.height,wrapS:p.CLAMP_TO_EDGE,wrapT:p.CLAMP_TO_EDGE}),this.layerService.reRender()},n.src=e}else this.texture=r({width:1,height:1})}registerBuiltinAttributes(){return""}}const _O={plane:fO,sprite:pO,billboard:uO};class bL extends $r{constructor(...e){super(...e),v(this,"type","GeometryLayer"),v(this,"defaultSourceConfig",{data:[{x:0,y:0}],options:{parser:{type:"json",x:"x",y:"y"}}})}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new _O[r](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{plane:{},sprite:{},billboard:{}}[e]}getModelType(){var e;const r=this.styleAttributeService.getLayerStyleAttribute("shape"),n=r==null||(e=r.scale)===null||e===void 0?void 0:e.field;return n==="plane"?"plane":n==="sprite"?"sprite":n==="billboard"?"billboard":"plane"}}function rg(t,e){return{type:t.type,field:"value",items:t.positions.map((r,n)=>({[e]:n>=t.colors.length?null:t.colors[n],value:r}))}}const mO=`in vec4 v_color;

#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,vO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location =  ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;

layout(std140) uniform commonUniforms {
    vec2 u_radius;
    float u_opacity;
    float u_coverage;
    float u_angle;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

void main() {
  v_color = a_Color;
  v_color.a *= u_opacity;

  mat2 rotationMatrix = mat2(cos(u_angle), sin(u_angle), -sin(u_angle), cos(u_angle));
  vec2 offset = a_Position.xy * u_radius * rotationMatrix * u_coverage;

  vec2 lnglat = unProjectFlat(a_Pos.xy + offset);
  vec4 project_pos = project_position(vec4(lnglat, 0, 1.0));
  gl_Position = project_common_position_to_clipspace(project_pos);

  setPickingColor(a_PickingColor);
}
`;class gO extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,POS:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,coverage:r,angle:n}=this.layer.getLayerConfig(),i={u_radius:[this.layer.getSource().data.xOffset,this.layer.getSource().data.yOffset],u_opacity:e||1,u_coverage:r||.9,u_angle:n||0};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"heatmapGrid",vertexShader:vO,fragmentShader:mO,defines:e.getDefines(),triangulation:eg,primitive:p.TRIANGLES,depth:{enable:!1}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"pos",type:Be.Attribute,descriptor:{shaderLocation:this.attributeLocation.POS,name:"a_Pos",buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:e=>{const r=e.coordinates;return[r[0],r[1],0]}}})}}const EO=`in vec4 v_color;

layout(std140) uniform commonUniforms {
  vec2 u_radius;
  float u_opacity;
  float u_coverage;
  float u_angle;
};

#pragma include "scene_uniforms"
#pragma include "picking"

out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,yO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniforms {
  vec2 u_radius;
  float u_opacity;
  float u_coverage;
  float u_angle;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"
#pragma include "light"
#pragma include "picking"

void main() {
  mat2 rotationMatrix = mat2(cos(u_angle), sin(u_angle), -sin(u_angle), cos(u_angle));
  vec2 offset = vec2(a_Position.xy * u_radius * rotationMatrix * u_coverage);

  vec2 lnglat = unProjectFlat(a_Pos.xy + offset); // 实际的经纬度
  vec4 project_pos = project_position(vec4(lnglat, a_Position.z * a_Size, 1.0));

  float lightWeight = calc_lighting(project_pos);
  v_color = vec4(a_Color.rgb * lightWeight, a_Color.w);

  gl_Position = project_common_position_to_clipspace(project_pos);

  setPickingColor(a_PickingColor);
}
`;class AO extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,POS:10,NORMAL:11})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,coverage:r,angle:n}=this.layer.getLayerConfig(),i={u_radius:[this.layer.getSource().data.xOffset,this.layer.getSource().data.yOffset],u_opacity:e||1,u_coverage:r||.9,u_angle:n||0};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"heatmapGrid3d",vertexShader:yO,fragmentShader:EO,defines:e.getDefines(),triangulation:_f,primitive:p.TRIANGLES,depth:{enable:!0}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{shaderLocation:this.attributeLocation.SIZE,name:"a_Size",buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:Be.Attribute,descriptor:{name:"a_Pos",shaderLocation:this.attributeLocation.POS,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:e=>{const r=e.coordinates;return[r[0],r[1],0]}}})}}function TO(t,e){const r=[],n=[],i=[],o=t+1,a=e+1,s=t/2,u=e/2;for(let l=0;l<a;l++){const f=l-u;for(let c=0;c<o;c++){const h=c-s;n.push(h/s,-f/u,0),i.push(c/t),i.push(1-l/e)}}for(let l=0;l<e;l++)for(let f=0;f<t;f++){const c=f+o*l,h=f+o*(l+1),_=f+1+o*(l+1),m=f+1+o*l;r.push(c,h,m),r.push(h,_,m)}return{vertices:n,indices:r,uvs:i}}const SO=`layout(std140) uniform commonUniforms {
  mat4 u_ViewProjectionMatrixUncentered;
  mat4 u_InverseViewProjectionMatrix;
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};

uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

in vec2 v_texCoord;
in float v_intensity;
out vec4 outputColor;

void main() {
  float intensity = texture(SAMPLER_2D(u_texture), v_texCoord).r;
  vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(intensity, 0));
  outputColor = color;
  // gl_FragColor.a = color.a * smoothstep(0.1,0.2,intensity)* u_opacity;
  outputColor.a = color.a * smoothstep(0.0, 0.1, intensity) * u_opacity;
}
`,xO=`layout(location = 0) in vec3 a_Position;
layout(location = 10) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  mat4 u_ViewProjectionMatrixUncentered;
  mat4 u_InverseViewProjectionMatrix;
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};

uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

out vec2 v_texCoord;
out float v_intensity;

vec2 toBezier(float t, vec2 P0, vec2 P1, vec2 P2, vec2 P3) {
  float t2 = t * t;
  float one_minus_t = 1.0 - t;
  float one_minus_t2 = one_minus_t * one_minus_t;
  return P0 * one_minus_t2 * one_minus_t +
  P1 * 3.0 * t * one_minus_t2 +
  P2 * 3.0 * t2 * one_minus_t +
  P3 * t2 * t;
}
vec2 toBezier(float t, vec4 p) {
  return toBezier(t, vec2(0.0, 0.0), vec2(p.x, p.y), vec2(p.z, p.w), vec2(1.0, 1.0));
}

#pragma include "projection"
#pragma include "project"

void main() {
  v_texCoord = a_Uv;

  vec2 pos = a_Uv * vec2(2.0) - vec2(1.0); // 将原本 0 -> 1 的 uv 转换为 -1 -> 1 的标准坐标空间（NDC）

  vec4 p1 = vec4(pos, 0.0, 1.0); // x/y 平面上的点（z == 0）可以认为是三维上的点被投影到平面后的点
  vec4 p2 = vec4(pos, 1.0, 1.0); // 平行于x/y平面、z==1 的平面上的点

  vec4 inverseP1 = u_InverseViewProjectionMatrix * p1; // 根据视图投影矩阵的逆矩阵平面上的反算出三维空间中的点（p1平面上的点）
  vec4 inverseP2 = u_InverseViewProjectionMatrix * p2;

  inverseP1 = inverseP1 / inverseP1.w; // 归一化操作（归一化后为世界坐标）
  inverseP2 = inverseP2 / inverseP2.w;

  float zPos = (0.0 - inverseP1.z) / (inverseP2.z - inverseP1.z); // ??
  vec4 position = inverseP1 + zPos * (inverseP2 - inverseP1);

  vec4 b = vec4(0.5, 0.0, 1.0, 0.5);
  float fh;

  v_intensity = texture(SAMPLER_2D(u_texture), v_texCoord).r;
  fh = toBezier(v_intensity, b).y;
  gl_Position = u_ViewProjectionMatrixUncentered * vec4(position.xy, fh * project_pixel(50.0), 1.0);

}
`,RO=`uniform sampler2D u_texture; // 热力强度图
uniform sampler2D u_colorTexture; // 根据强度分布的色带

layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};
in vec2 v_texCoord;
out vec4 outputColor;

#pragma include "scene_uniforms"

float getBlurIndusty() {
  float vW = 2.0 / u_ViewportSize.x;
  float vH = 2.0 / u_ViewportSize.y;
  vec2 vUv = v_texCoord;
  float i11 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 1.0 * vW, vUv.y + 1.0 * vH)).r;
  float i12 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 0.0 * vW, vUv.y + 1.0 * vH)).r;
  float i13 = texture(SAMPLER_2D(u_texture), vec2(vUv.x + 1.0 * vW, vUv.y + 1.0 * vH)).r;

  float i21 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 1.0 * vW, vUv.y)).r;
  float i22 = texture(SAMPLER_2D(u_texture), vec2(vUv.x, vUv.y)).r;
  float i23 = texture(SAMPLER_2D(u_texture), vec2(vUv.x + 1.0 * vW, vUv.y)).r;

  float i31 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 1.0 * vW, vUv.y - 1.0 * vH)).r;
  float i32 = texture(SAMPLER_2D(u_texture), vec2(vUv.x - 0.0 * vW, vUv.y - 1.0 * vH)).r;
  float i33 = texture(SAMPLER_2D(u_texture), vec2(vUv.x + 1.0 * vW, vUv.y - 1.0 * vH)).r;

  return (i11 + i12 + i13 + i21 + i21 + i22 + i23 + i31 + i32 + i33) / 9.0;
}

void main() {
  // float intensity = texture(u_texture, v_texCoord).r;
  float intensity = getBlurIndusty();
  vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(intensity, 0.0));
  outputColor = color;
  outputColor.a = color.a * smoothstep(0.0, 0.1, intensity) * u_opacity;
}
`,bO=`layout(location = 0) in vec3 a_Position;
layout(location = 10) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  float u_opacity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
  float u_common_uniforms_padding3;
};

#pragma include "scene_uniforms"

out vec2 v_texCoord;
void main() {
  v_texCoord = a_Uv;
  #ifdef VIEWPORT_ORIGIN_TL
  v_texCoord.y = 1.0 - v_texCoord.y;
  #endif

  gl_Position = vec4(a_Position.xy, 0, 1.0);
}
`,CO=`layout(std140) uniform commonUniforms {
  float u_radius;
  float u_intensity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
};

in vec2 v_extrude;
in float v_weight;
out vec4 outputColor;
#define GAUSS_COEF (0.3989422804014327)

void main() {
  float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);
  float val = v_weight * u_intensity * GAUSS_COEF * exp(d);
  outputColor = vec4(val, 1.0, 1.0, 1.0);
}
`,OO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_DIR) in vec2 a_Dir;

layout(std140) uniform commonUniforms {
  float u_radius;
  float u_intensity;
  float u_common_uniforms_padding1;
  float u_common_uniforms_padding2;
};

out vec2 v_extrude;
out float v_weight;

#define GAUSS_COEF (0.3989422804014327)

#pragma include "projection"
#pragma include "picking"

void main() {
  vec3 picking_color_placeholder = u_PickingColor;

  v_weight = a_Size;
  float ZERO = 1.0 / 255.0 / 16.0;
  float extrude_x = a_Dir.x * 2.0 - 1.0;
  float extrude_y = a_Dir.y * 2.0 - 1.0;
  vec2 extrude_dir = normalize(vec2(extrude_x, extrude_y));
  float S = sqrt(-2.0 * log(ZERO / a_Size / u_intensity / GAUSS_COEF)) / 2.5;
  v_extrude = extrude_dir * S;

  vec2 offset = project_pixel(v_extrude * u_radius);
  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0));

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, 0.0, 1.0));

}
`,{isEqual:IO}=Mr;class K_ extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"colorTexture",void 0),v(this,"heatmapFramerBuffer",void 0),v(this,"heatmapTexture",void 0),v(this,"intensityModel",void 0),v(this,"colorModel",void 0),v(this,"shapeType",void 0),v(this,"preRampColors",void 0),v(this,"colorModelUniformBuffer",[]),v(this,"heat3DModelUniformBuffer",[])}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,UV:10,DIR:11})}prerender(){const{clear:e,useFramebuffer:r}=this.rendererService;r(this.heatmapFramerBuffer,()=>{e({color:[0,0,0,0],depth:1,stencil:0,framebuffer:this.heatmapFramerBuffer}),this.drawIntensityMode()})}render(e){const{rampColors:r}=this.layer.getLayerConfig();IO(this.preRampColors,r)||this.updateColorTexture(),this.shapeType==="heatmap"?this.drawHeatMap(e):this.draw3DHeatMap(e)}getUninforms(){throw new Error("Method not implemented.")}initModels(){var e=this;return ee(function*(){var r;const{createFramebuffer:n,getViewportSize:i,createTexture2D:o}=e.rendererService,a=e.styleAttributeService.getLayerStyleAttribute("shape"),s=(a==null||(r=a.scale)===null||r===void 0?void 0:r.field)||"heatmap";e.shapeType=s,e.intensityModel=yield e.buildHeatMapIntensity(),e.colorModel=s==="heatmap"?e.buildHeatmap():e.build3dHeatMap();const{width:u,height:l}=i();return e.heatmapTexture=o({width:Math.floor(u/4),height:Math.floor(l/4),wrapS:p.CLAMP_TO_EDGE,wrapT:p.CLAMP_TO_EDGE,min:p.LINEAR,mag:p.LINEAR,usage:nu.RENDER_TARGET}),e.heatmapFramerBuffer=n({color:e.heatmapTexture,depth:!0,width:Math.floor(u/4),height:Math.floor(l/4)}),e.updateColorTexture(),[e.intensityModel,e.colorModel]})()}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"dir",type:Be.Attribute,descriptor:{name:"a_Dir",shaderLocation:this.attributeLocation.DIR,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=1}=e;return[r]}}})}buildHeatMapIntensity(){var e=this;return ee(function*(){return e.uniformBuffers=[e.rendererService.createBuffer({data:new Float32Array(4).fill(0),isUBO:!0})],e.layer.triangulation=Z_,yield e.layer.buildLayerModel({moduleName:"heatmapIntensity",vertexShader:OO,fragmentShader:CO,triangulation:Z_,defines:e.getDefines(),depth:{enable:!1},cull:{enable:!0,face:p.FRONT}})})()}buildHeatmap(){this.shaderModuleService.registerModule("heatmapColor",{vs:bO,fs:RO}),this.colorModelUniformBuffer=[this.rendererService.createBuffer({data:new Float32Array(4).fill(0),isUBO:!0})];const{vs:e,fs:r,uniforms:n}=this.shaderModuleService.getModule("heatmapColor"),{createAttribute:i,createElements:o,createBuffer:a,createModel:s}=this.rendererService;return s({vs:e,fs:r,uniformBuffers:[...this.colorModelUniformBuffer,...this.rendererService.uniformBuffers],attributes:{a_Position:i({shaderLocation:this.attributeLocation.POSITION,buffer:a({data:[-1,1,0,1,1,0,-1,-1,0,1,-1,0],type:p.FLOAT}),size:3}),a_Uv:i({shaderLocation:this.attributeLocation.UV,buffer:a({data:[0,1,1,1,0,0,1,0],type:p.FLOAT}),size:2})},uniforms:le({},n),depth:{enable:!1},elements:o({data:[0,2,1,2,3,1],type:p.UNSIGNED_INT,count:6})})}build3dHeatMap(){const{getViewportSize:e}=this.rendererService,{width:r,height:n}=e(),i=TO(r/4,n/4);this.shaderModuleService.registerModule("heatmap3dColor",{vs:xO,fs:SO}),this.heat3DModelUniformBuffer=[this.rendererService.createBuffer({data:new Float32Array(16*2+4).fill(0),isUBO:!0})];const{vs:o,fs:a,uniforms:s}=this.shaderModuleService.getModule("heatmap3dColor"),{createAttribute:u,createElements:l,createBuffer:f,createModel:c}=this.rendererService;return c({vs:o,fs:a,attributes:{a_Position:u({shaderLocation:this.attributeLocation.POSITION,buffer:f({data:i.vertices,type:p.FLOAT}),size:3}),a_Uv:u({shaderLocation:this.attributeLocation.UV,buffer:f({data:i.uvs,type:p.FLOAT}),size:2})},primitive:p.TRIANGLES,uniformBuffers:[...this.heat3DModelUniformBuffer,...this.rendererService.uniformBuffers],uniforms:le({},s),depth:{enable:!0},blend:{enable:!0,func:{srcRGB:p.SRC_ALPHA,srcAlpha:1,dstRGB:p.ONE_MINUS_SRC_ALPHA,dstAlpha:1}},elements:l({data:i.indices,type:p.UNSIGNED_INT,count:i.indices.length})})}drawIntensityMode(){var e;const{intensity:r=10,radius:n=5}=this.layer.getLayerConfig(),i={u_radius:n,u_intensity:r};this.uniformBuffers[0].subData({offset:0,data:[n,r]}),this.layerService.beforeRenderData(this.layer),this.layer.hooks.beforeRender.call(),(e=this.intensityModel)===null||e===void 0||e.draw({uniforms:i,blend:{enable:!0,func:{srcRGB:p.ONE,srcAlpha:1,dstRGB:p.ONE,dstAlpha:1}},stencil:{enable:!1,mask:255,func:{cmp:514,ref:1,mask:255}}}),this.layer.hooks.afterRender.call()}drawHeatMap(e){var r;const{opacity:n=1}=this.layer.getLayerConfig(),i={u_opacity:n,u_colorTexture:this.colorTexture,u_texture:this.heatmapFramerBuffer},o=[this.heatmapTexture,this.colorTexture];this.colorModelUniformBuffer[0].subData({offset:0,data:[n]}),(r=this.colorModel)===null||r===void 0||r.draw({uniforms:i,textures:o,blend:this.getBlend(),stencil:this.getStencil(e)})}draw3DHeatMap(e){var r;const{opacity:n=1}=this.layer.getLayerConfig(),i=tu();xA(i,this.cameraService.getViewProjectionMatrixUncentered());const o={u_opacity:n,u_colorTexture:this.colorTexture,u_texture:this.heatmapFramerBuffer,u_ViewProjectionMatrixUncentered:this.cameraService.getViewProjectionMatrixUncentered(),u_InverseViewProjectionMatrix:[...i]};this.heat3DModelUniformBuffer[0].subData({offset:0,data:[...o.u_ViewProjectionMatrixUncentered,...o.u_InverseViewProjectionMatrix,n]});const a=[this.heatmapTexture,this.colorTexture];(r=this.colorModel)===null||r===void 0||r.draw({uniforms:o,textures:a,blend:{enable:!0,func:{srcRGB:p.SRC_ALPHA,srcAlpha:1,dstRGB:p.ONE_MINUS_SRC_ALPHA,dstAlpha:1}},stencil:this.getStencil(e)})}updateColorTexture(){const{createTexture2D:e}=this.rendererService;this.texture&&this.texture.destroy();const{rampColors:r}=this.layer.getLayerConfig(),n=hv(r);this.colorTexture=e({data:n.data,usage:nu.SAMPLED,width:n.width,height:n.height,wrapS:p.CLAMP_TO_EDGE,wrapT:p.CLAMP_TO_EDGE,min:p.NEAREST,mag:p.NEAREST,flipY:!1,unorm:!0}),this.preRampColors=r}}const MO=`in vec4 v_color;

#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,BO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;

layout(std140) uniform commonUniforms {
  vec2 u_radius;
  float u_opacity;
  float u_coverage;
  float u_angle;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

void main() {
  v_color = a_Color;
  v_color.a *= u_opacity;

  mat2 rotationMatrix = mat2(cos(u_angle), sin(u_angle), -sin(u_angle), cos(u_angle));
  vec2 offset = vec2(a_Position.xy * u_radius * rotationMatrix * u_coverage);
  vec2 lnglat = unProjectFlat(a_Pos.xy + offset);

  vec4 project_pos = project_position(vec4(lnglat, 0, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));

  setPickingColor(a_PickingColor);
}
`;class NO extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,POS:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e,coverage:r,angle:n}=this.layer.getLayerConfig(),i={u_radius:[this.layer.getSource().data.xOffset,this.layer.getSource().data.yOffset],u_opacity:e||1,u_coverage:r||.9,u_angle:n||0};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"heatmapHexagon",vertexShader:BO,fragmentShader:MO,defines:e.getDefines(),triangulation:eg,depth:{enable:!1},primitive:p.TRIANGLES})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"pos",type:Be.Attribute,descriptor:{name:"a_Pos",shaderLocation:this.attributeLocation.POS,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:e=>{const r=e.coordinates;return[r[0],r[1],0]}}})}}const PO={heatmap:K_,heatmap3d:K_,grid:gO,grid3d:AO,hexagon:NO};class CL extends $r{constructor(...e){super(...e),v(this,"type","HeatMapLayer")}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new PO[r](e),yield e.initLayerModels()})()}prerender(){this.getModelType()==="heatmap"&&this.layerModel&&this.layerModel.prerender()}renderModels(e={}){return this.getModelType()==="heatmap"?(this.layerModel&&this.layerModel.render(e),this):this.encodeDataLength<=0&&!this.forceRender?this:(this.hooks.beforeRender.call(),this.models.forEach(n=>n.draw({uniforms:this.layerModel.getUninforms(),blend:this.layerModel.getBlend(),stencil:this.layerModel.getStencil(e)})),this.hooks.afterRender.call(),this)}updateModelData(e){e.attributes&&e.elements?this.models[0].updateAttributesAndElements(e.attributes,e.elements):console.warn("data error")}getModelType(){var e;const r=this.styleAttributeService.getLayerStyleAttribute("shape"),{shape3d:n}=this.getLayerConfig(),o=this.getSource().data.type,a=(r==null||(e=r.scale)===null||e===void 0?void 0:e.field)||"heatmap";return a==="heatmap"||a==="heatmap3d"?"heatmap":o==="hexagon"?n?.indexOf(a)===-1?"hexagon":"grid3d":o==="grid"?n?.indexOf(a)===-1?"grid":"grid3d":"heatmap"}getLegend(e){if(this.getModelType()==="heatmap"){if(e!=="color")return{type:void 0,field:void 0,items:[]};const r=this.getLayerConfig().rampColors;return rg(r,e)}else return super.getLegend(e)}}const LO=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
    float u_opacity:1.0;
    float u_brightness:1.0;
    float u_contrast:1.0;
    float u_saturation:1.0;
    float u_gamma:1.0;
};

in vec2 v_texCoord;
out vec4 outputColor;
vec3 setContrast(vec3 rgb, float contrast) {
  vec3 color = mix(vec3(0.5), rgb, contrast);
  color = clamp(color, 0.0, 1.0);
  return color;
}
vec3 setSaturation(vec3 rgb, float adjustment) {
  const vec3 grayVector = vec3(0.2125, 0.7154, 0.0721);
  vec3 intensity = vec3(dot(rgb, grayVector));
  vec3 color = mix(intensity, rgb, adjustment);
  color = clamp(color, 0.0, 1.0);
  return color;
}
void main() {
  vec4 color = texture(SAMPLER_2D(u_texture),vec2(v_texCoord.x,v_texCoord.y));
  //brightness
  color.rgb = mix(vec3(0.0, 0.0, 0.0), color.rgb, u_brightness);
  //contrast
  color.rgb = setContrast(color.rgb, u_contrast);
  // saturation
  color.rgb = setSaturation(color.rgb, u_saturation);
  // gamma
  color.rgb = pow(color.rgb, vec3(u_gamma));
  outputColor = color;
  outputColor.a *= u_opacity;
  if(outputColor.a < 0.01)
    discard;
}
`,DO=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
    float u_opacity:1.0;
    float u_brightness:1.0;
    float u_contrast:1.0;
    float u_saturation:1.0;
    float u_gamma:1.0;
};

out vec2 v_texCoord;
#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;let FO=class extends Et{constructor(...e){super(...e),v(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getCommonUniformsInfo(){const{opacity:e,brightness:r,contrast:n,saturation:i,gamma:o}=this.layer.getLayerConfig(),a={u_opacity:Qo(e,1),u_brightness:Qo(r,1),u_contrast:Qo(n,1),u_saturation:Qo(i,1),u_gamma:Qo(o,1)};return this.textures=[this.texture],this.getUniformsBufferInfo(a)}initModels(){var e=this;return ee(function*(){return yield e.loadTexture(),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}loadTexture(){var e=this;return ee(function*(){const{createTexture2D:r}=e.rendererService,i=yield e.layer.getSource().data.images;e.texture=r({data:i[0],width:i[0].width,height:i[0].height,mag:p.LINEAR,min:p.LINEAR})})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"rasterImage",vertexShader:DO,fragmentShader:LO,defines:e.getDefines(),triangulation:za,primitive:p.TRIANGLES,blend:{enable:!0},depth:{enable:!1},pickingEnabled:!1})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}};const wO={image:FO};class UO extends $r{constructor(...e){super(...e),v(this,"type","ImageLayer")}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new wO[r](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{image:{}}[e]}getModelType(){return"image"}}const kO=`
#define Animate 0.0
#define LineTexture 1.0
uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_lineDir: 1.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_blur : 0.9;
  float u_line_type: 0.0;
  float u_time;
  float u_linearColor: 0.0;
};

in vec4 v_color;
in vec2 v_iconMapUV;
in vec4 v_lineData;
//dash
in vec4 v_dash_array;
in float v_distance_ratio;

out vec4 outputColor;
#pragma include "picking"

void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      discard;
    };
  }
  float animateSpeed = 0.0; // 运动速度
  outputColor = v_color;
  if(u_animate.x == Animate && u_line_texture != LineTexture) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- v_lineData.b, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      // alpha = smoothstep(0., 1., alpha);
      alpha = clamp(alpha, 0.0, 1.0);
      outputColor.a *= alpha;
  }

  // 当存在贴图时在底色上贴上贴图
  if(u_line_texture == LineTexture) { // while load texture
    float arcRadio = smoothstep( 0.0, 1.0, (v_lineData.r / segmentNumber));
    // float arcRadio = smoothstep( 0.0, 1.0, d_distance_ratio);

    float count = v_lineData.g; // 贴图在弧线上重复的数量

    float time = 0.0;
    if(u_animate.x == Animate) {
      time = u_time / u_animate.y;
    }
    float redioCount = arcRadio * count;

    float u = fract(redioCount - time);
    float v = v_lineData.a; // 横向 v
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;

    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_animate.x == Animate) {
      float currentPlane = floor(redioCount - time);
      float textureStep = floor(count * u_animate.z);
      float a = mod(currentPlane, textureStep);
      if(a < textureStep - 1.0) {
        pattern = vec4(0.0);
      }
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
    
  } else {
     outputColor = filterColor(outputColor);
  }
}`,zO=`#define Animate (0.0)
#define LineTexture (1.0)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_lineDir: 1.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_blur : 0.9;
  float u_line_type: 0.0;
  float u_time;
  float u_linearColor: 0.0;
};

out vec4 v_color;
out vec2 v_iconMapUV;
out vec4 v_lineData;
//dash
out vec4 v_dash_array;
out float v_distance_ratio;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float bezier3(vec3 arr, float t) {
  float ut = 1.0 - t;
  return (arr.x * ut + arr.y * t) * ut + (arr.y * ut + arr.z * t) * t;
}
vec2 midPoint(vec2 source, vec2 target, float arcThetaOffset) {
  vec2 center = target - source;
  float r = length(center);
  float theta = atan(center.y, center.x);
  float thetaOffset = arcThetaOffset;
  float r2 = r / 2.0 / cos(thetaOffset);
  float theta2 = theta + thetaOffset;
  vec2 mid = vec2(r2 * cos(theta2) + source.x, r2 * sin(theta2) + source.y);
  if (u_lineDir == 1.0) {
    // 正向
    return mid;
  } else {
    // 逆向
    // (mid + vmin)/2 = (s + t)/2
    vec2 vmid = source + target - mid;
    return vmid;
  }
  // return mid;
}
float getSegmentRatio(float index) {
  // dash: index / (segmentNumber - 1.);
  // normal: smoothstep(0.0, 1.0, index / (segmentNumber - 1.));
  return smoothstep(0.0, 1.0, index / (segmentNumber - 1.0));
  //  return index / (segmentNumber - 1.);
}
vec2 interpolate(vec2 source, vec2 target, float t, float arcThetaOffset) {
  // if the angularDist is PI, linear interpolation is applied. otherwise, use spherical interpolation
  vec2 mid = midPoint(source, target, arcThetaOffset);
  vec3 x = vec3(source.x, mid.x, target.x);
  vec3 y = vec3(source.y, mid.y, target.y);
  return vec2(bezier3(x, t), bezier3(y, t));
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;
  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
   dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
   return dir_screenspace.xy * sign(offset_direction);
}

void main() {
  //vs中计算渐变色
  if (u_linearColor == 1.0) {
    float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
    v_color = mix(u_sourceColor, u_targetColor, d_segmentIndex / segmentNumber);
  } else {
    v_color = a_Color;
  }
  v_color.a = v_color.a * opacity;

  vec2 source_world = a_Instance.rg; // 起始点
  vec2 target_world = a_Instance.ba; // 终点

  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);

  // 计算 dashArray 和 distanceRatio 输出到片元
  float total_Distance = pixelDistance(source_world, target_world) / 2.0 * PI;
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / total_Distance;
  v_distance_ratio = segmentIndex / segmentNumber;

  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  float d_distance_ratio;

  if(u_animate.x == Animate) {
      d_distance_ratio = segmentIndex / segmentNumber;
      if(u_lineDir != 1.0) {
        d_distance_ratio = 1.0 - d_distance_ratio;
      }
  }

  v_lineData.b = d_distance_ratio;

  vec4 source = project_position(vec4(source_world, 0, 1.), a_Instance64Low.xy);
  vec4 target = project_position(vec4(target_world, 0, 1.), a_Instance64Low.zw);

  vec2 currPos = interpolate(source.xy, target.xy, segmentRatio, thetaOffset);
  vec2 nextPos = interpolate(source.xy, target.xy, nextSegmentRatio, thetaOffset);

  vec2 offset = project_pixel(
    getExtrusionOffset((nextPos.xy - currPos.xy) * indexDir, a_Position.y)
  );

  float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
  v_lineData.r = d_segmentIndex;

  if(LineTexture == u_line_texture) { // 开启贴图模式
    float arcDistrance = length(source - target); // 起始点和终点的距离
    arcDistrance = project_pixel(arcDistrance);

    v_iconMapUV = a_iconMapUV;

    float pixelLen = project_pixel_texture(u_icon_step); // 贴图沿弧线方向的长度 - 随地图缩放改变
    float texCount = floor(arcDistrance / pixelLen); // 贴图在弧线上重复的数量
    v_lineData.g = texCount;

    float lineOffsetWidth = length(offset + offset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size); // 定点位置偏移
    v_lineData.a = lineOffsetWidth / linePixelSize; // 线图层贴图部分的 v 坐标值
  }

  gl_Position = project_common_position_to_clipspace(vec4(currPos.xy + offset, 0, 1.0));

  setPickingColor(a_PickingColor);
}
`,VO={solid:0,dash:1};class WO extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=r({data:this.iconService.getCanvas(),mag:p.NEAREST,min:p.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,UV:12,THETA_OFFSET:13})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:r,textureBlend:n="normal",lineType:i="solid",dashArray:o=[10,5],forward:a=!0,lineTexture:s=!1,iconStep:u=100,segmentNumber:l=30}=this.layer.getLayerConfig(),{animateOption:f}=this.layer.getLayerConfig();let c=o;i!=="dash"&&(c=[0,0]),c.length===2&&c.push(0,0);let h=0,_=[0,0,0,0],m=[0,0,0,0];if(e&&r&&(_=Ft(e),m=Ft(r),h=1),this.rendererService.getDirty()){var E;(E=this.texture)===null||E===void 0||E.bind()}const S={u_animate:this.animateOption2Array(f),u_dash_array:c,u_sourceColor:_,u_targetColor:m,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:l,u_lineDir:a?1:-1,u_icon_step:u,u_line_texture:s?1:0,u_textureBlend:n==="normal"?0:1,u_blur:.9,u_line_type:VO[i||"solid"],u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:h};return this.getUniformsBufferInfo(S)}initModels(){var e=this;return ee(function*(){return e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}getShaders(){return{frag:kO,vert:zO,type:""}}buildModels(){var e=this;return ee(function*(){e.initUniformsBuffer();const{segmentNumber:r=30}=e.layer.getLayerConfig(),{frag:n,vert:i,type:o}=e.getShaders();return[yield e.layer.buildLayerModel({moduleName:"lineArc2d"+o,vertexShader:i,fragmentShader:n,defines:e.getDefines(),inject:e.getInject(),triangulation:vf,depth:{enable:!1},styleOption:{segmentNumber:r}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Be.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[n[3],n[4],n[5],n[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:Be.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[lr(n[3]),lr(n[4]),lr(n[5]),lr(n[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{texture:n}=e,{x:i,y:o}=r[n]||{x:0,y:0};return[i,o]}}}),this.styleAttributeService.registerStyleAttribute({name:"thetaOffset",type:Be.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:this.attributeLocation.THETA_OFFSET,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{thetaOffset:r=1}=e;return[r]}}})}}const HO=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_globel;
  float u_globel_radius;
  float u_global_height: 10;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0.0;
};

in vec4 v_color;
in vec4 v_dash_array;
in float v_segmentIndex;
in vec2 v_iconMapUV;
in vec4 v_line_data;

out vec4 outputColor;

#pragma include "picking"

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_line_data.g; // 当前点位距离占线总长的比例
  outputColor = v_color;

  if(u_line_type == LineTypeDash) {
    float flag = 0.;
    float dashLength = mod(d_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z)) {
      flag = 1.;
    }
    outputColor.a *=flag;
  }

  if(u_animate.x == Animate && u_line_texture != LineTexture) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);

      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      // alpha = smoothstep(0., 1., alpha);
      alpha = clamp(alpha, 0.0, 1.0);
      outputColor.a *= alpha;

      // u_animate
      // x enable
      // y duration
      // z interval
      // w trailLength
  }

  if(u_line_texture == LineTexture && u_line_type != LineTypeDash) { // while load texture
    // float arcRadio = smoothstep( 0.0, 1.0, (v_segmentIndex / segmentNumber));
    float arcRadio = v_segmentIndex / (segmentNumber - 1.0);
    float count = v_line_data.b; // // 贴图在弧线上重复的数量

    float time = 0.0;
    if(u_animate.x == Animate) {
      time = u_time / u_animate.y;
    }
    float redioCount = arcRadio * count;

    float u = fract(redioCount - time);

    float v = v_line_data.a;  // 线图层贴图部分的 v 坐标值
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_animate.x == Animate) {
      float currentPlane = floor(redioCount - time);
      float textureStep = floor(count * u_animate.z);
      float a = mod(currentPlane, textureStep);
      if(a < textureStep - 1.0) {
        pattern = vec4(0.0);
      }
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
          discard;
        } else {
          outputColor = filterColor(pattern);
        }
    }

  } else {
    outputColor = filterColor(outputColor);
  }
}
`,XO=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;


layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_globel;
  float u_globel_radius;
  float u_global_height: 10;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0.0;
};
out vec4 v_color;
out vec4 v_dash_array;
out float v_segmentIndex;
out vec2 v_iconMapUV;
out vec4 v_line_data;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float maps (float value, float start1, float stop1, float start2, float stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

float getSegmentRatio(float index) {
  return smoothstep(0.0, 1.0, index / (segmentNumber - 1.0));
}

float paraboloid(vec2 source, vec2 target, float ratio) {
  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);
  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertex_height = paraboloid(source, target, segmentRatio);

  return vec3(
    mix(source, target, segmentRatio),
    sqrt(max(0.0, vertex_height))
  );
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;

  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  return dir_screenspace.xy * sign(offset_direction);
}

float torad(float deg) {
  return (deg / 180.0) * acos(-1.0);
}

vec3 lglt2xyz(vec2 lnglat) {
  float pi = 3.1415926;
  // + Math.PI/2 是为了对齐坐标
  float lng = torad(lnglat.x) + pi / 2.0;
  float lat = torad(lnglat.y);

  // 手动增加一些偏移，减轻面的冲突
  float radius = u_globel_radius;

  float z = radius * cos(lat) * cos(lng);
  float x = radius * cos(lat) * sin(lng);
  float y = radius * sin(lat);
  return vec3(x, y, z);
}

void main() {
  //vs中计算渐变色
  if(u_linearColor==1.0){
    float d_segmentIndex = a_Position.x + 1.0; // 当前顶点在弧线中所处的分段位置
    v_color = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
  }
  else{
    v_color = a_Color;
  }
  v_color.a = v_color.a * opacity;
  vec2 source = project_position(vec4(a_Instance.rg, 0, 0), a_Instance64Low.xy).xy;
  vec2 target = project_position(vec4(a_Instance.ba, 0, 0), a_Instance64Low.zw).xy;
  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));

  float d_distance_ratio;
   if(u_line_type == LineTypeDash) {
    d_distance_ratio = segmentIndex / segmentNumber;
    float total_Distance = pixelDistance(source, target) / 2.0 * PI;
    v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / (total_Distance / segmentNumber * segmentIndex);
  }
    if(u_animate.x == Animate) {
      d_distance_ratio = segmentIndex / segmentNumber;
  }
  v_line_data.g = d_distance_ratio; // 当前点位距离占线总长的比例

  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  vec3 curr = getPos(source, target, segmentRatio);
  vec3 next = getPos(source, target, nextSegmentRatio);
  vec2 offset = getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y);
  // v_normal = getNormal((next.xy - curr.xy) * indexDir, a_Position.y);


  v_segmentIndex = a_Position.x;
  if(LineTexture == u_line_texture && u_line_type != LineTypeDash) { // 开启贴图模式

    float arcDistrance = length(source - target);
    float pixelLen =  project_pixel_texture(u_icon_step);
    v_line_data.b = floor(arcDistrance/pixelLen); // 贴图在弧线上重复的数量

    vec2 projectOffset = project_pixel(offset);
    float lineOffsetWidth = length(projectOffset + projectOffset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size);  // 定点位置偏移，按地图等级缩放后的距离
    v_line_data.a = lineOffsetWidth/linePixelSize;  // 线图层贴图部分的 v 坐标值

    v_iconMapUV = a_iconMapUV;
  }


  gl_Position = project_common_position_to_clipspace(vec4(curr.xy + project_pixel(offset), curr.z * thetaOffset, 1.0));

  // 地球模式
  if(u_globel > 0.0) {
    vec3 startLngLat = lglt2xyz(a_Instance.rg);
    vec3 endLngLat = lglt2xyz(a_Instance.ba);
    float globalRadius = length(startLngLat);

    vec3 lineDir = normalize(endLngLat - startLngLat);
    vec3 midPointDir = normalize((startLngLat + endLngLat)/2.0);

    // 线的偏移
    vec3 lnglatOffset = cross(lineDir, midPointDir) * a_Position.y;
    // 计算起始点和终止点的距离
    float lnglatLength = length(a_Instance.rg - a_Instance.ba)/50.0;
    // 计算飞线各个节点相应的高度
    float lineHeight = u_global_height * (-4.0*segmentRatio*segmentRatio + 4.0 * segmentRatio) * lnglatLength;
    // 地球点位
    vec3 globalPoint = normalize(mix(startLngLat, endLngLat, segmentRatio)) * (globalRadius + lineHeight) + lnglatOffset * a_Size;

    gl_Position = u_ViewProjectionMatrix * vec4(globalPoint, 1.0);
  }


  setPickingColor(a_PickingColor);
}
`,jO={solid:0,dash:1};class q_ extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=r({data:this.iconService.getCanvas(),mag:p.NEAREST,min:p.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,UV:12,THETA_OFFSET:13})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:r,textureBlend:n="normal",lineType:i="solid",dashArray:o=[10,5],lineTexture:a=!1,iconStep:s=100,segmentNumber:u=30,globalArcHeight:l=10}=this.layer.getLayerConfig(),{animateOption:f}=this.layer.getLayerConfig();o.length===2&&o.push(0,0);let c=0,h=[0,0,0,0],_=[0,0,0,0];if(e&&r&&(h=Ft(e),_=Ft(r),c=1),this.rendererService.getDirty()){var m;(m=this.texture)===null||m===void 0||m.bind()}const E={u_animate:this.animateOption2Array(f),u_dash_array:o,u_sourceColor:h,u_targetColor:_,u_textSize:[1024,this.iconService.canvasHeight||128],u_globel:this.mapService.version==="GLOBEL"?1:0,u_globel_radius:Hu,u_global_height:l,segmentNumber:u,u_line_type:jO[i]||0,u_icon_step:s,u_line_texture:a?1:0,u_textureBlend:n==="normal"?0:1,u_time:this.layer.getLayerAnimateTime()||0,u_linearColor:c};return this.getUniformsBufferInfo(E)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}getShaders(){return{frag:HO,vert:XO,type:""}}buildModels(){var e=this;return ee(function*(){const{segmentNumber:r=30}=e.layer.getLayerConfig(),{frag:n,vert:i,type:o}=e.getShaders();return[yield e.layer.buildLayerModel({moduleName:"lineArc3d"+o,vertexShader:i,fragmentShader:n,defines:e.getDefines(),inject:e.getInject(),triangulation:vf,styleOption:{segmentNumber:r}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Be.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[n[3],n[4],n[5],n[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:Be.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[lr(n[3]),lr(n[4]),lr(n[5]),lr(n[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{texture:n}=e,{x:i,y:o}=r[n]||{x:0,y:0};return[i,o]}}}),this.styleAttributeService.registerStyleAttribute({name:"thetaOffset",type:Be.Attribute,descriptor:{name:"a_ThetaOffset",shaderLocation:this.attributeLocation.THETA_OFFSET,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{thetaOffset:r=1}=e;return[r]}}})}}const Q_={circle:2,triangle:2,diamond:4,rect:2,classic:3,halfTriangle:2,none:0},kr=1/2;function GO(t,e){const{width:r=2,height:n=1}=e;return{vertices:[0,kr*t,1*t*r,-(n+kr)*t,1*t*r,(n-kr)*t,0,kr*t,1*t*r,-(n+kr)*t,1*t*r,(n-kr)*t],indices:[3,4,5],outLineIndices:[0,1,2],normals:[1*t,-2*t,1,-2*t,1.5*t,1,1*t,1.5*t,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function $O(t,e){const{width:r=2,height:n=3}=e;return{vertices:[0,0,1*t*r,1*n,1*t*r,-1*n,0,0,1*t*r,1*n,1*t*r,-1*n],outLineIndices:[0,1,2],indices:[3,4,5],normals:[0,-1.5*t,1,2,1*t,1,-2,1*t,1,0,0,0,0,0,0,0,0,0],dimensions:2}}function YO(t,e){const{width:r=2,height:n=2}=e;return{vertices:[0,n/2,t*r*1,n/2,t*r*1,-n/2,0,-n/2,0,n/2,t*r*1,n/2,t*r*1,-n/2,0,-n/2],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-t,1,1,0,1,0,-t,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function ZO(t,e){const{width:r=2,height:n=3}=e;return{vertices:[0,0,1*r*t,.5*n,2*r*t,0,1*r*t,-.5*n,0,0,1*r*t,.5*n,2*r*t,0,1*r*t,-.5*n],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-t,1,1,0,1,0,-t,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function KO(t,e){const{width:r=2,height:n=3}=e;return{vertices:[0,0,2*t*r,1*n,1.5*t*r,0,2*t*r,-1*n,0,0,2*t*r,1*n,1.5*t*r,0,2*t*r,-1*n],dimensions:2,indices:[4,5,6,4,6,7],outLineIndices:[0,1,2,0,2,3],normals:[0,-t,1,1,0,1,0,-t,1,-1,-0,1,0,0,0,0,0,0,0,0,0,0,0,0]}}function qO(t,e){const{width:r=2,height:n=2}=e,i=Fc(),o=Pn.flatten([i]),a=Pn(o.vertices,o.holes,o.dimensions),s=i.map(u=>[u[0]*r*t,u[1]*n]).flat();return{vertices:[...s,...s],dimensions:2,indices:a.map(u=>u+i.length),outLineIndices:a,normals:[...i.map(u=>[u[1]*n,u[0]*r*t,1]).flat(),...new Array(i.length*3).fill(0)]}}function QO(t,e=0,r){const n=typeof r.source=="object"?r.source.type:r.source,i=typeof r.target=="object"?r.target.type:r.target,{width:o=n?Q_[n]:0}=typeof r.source=="object"?r.source:{},{width:a=i?Q_[i]:0}=typeof r.target=="object"?r.target:{};return{vertices:[0,kr,1*o,...t,1,kr,-1*a,...t,1,-kr,-1*a,...t,0,-kr,1*o,...t,0,kr,1*o,...t,1,kr,-1*a,...t,1,-kr,-1*a,...t,0,-kr,1*o,...t],outLineIndices:[0,1,2,0,2,3].map(s=>s+e),indices:[4,5,6,4,6,7].map(s=>s+e),normals:[1,-1,1,1,1,1,-1,0,1,-1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],dimensions:2}}function J_(t,e){const r=typeof t=="object"?t.type:t,n=e==="source"?1:-1,i=typeof t=="object"?t:{};switch(r){case"circle":return qO(n,i);case"triangle":return $O(n,i);case"diamond":return ZO(n,i);case"rect":return YO(n,i);case"classic":return KO(n,i);case"halfTriangle":return GO(n,i);default:return{vertices:[],indices:[],normals:[],dimensions:2,outLineIndices:[],outLineNormals:[]}}}function JO(t){const e=t.coordinates.flat(),r=1;return{vertices:[1,0,0,...e,1,2,-3,...e,1,1,-3,...e,0,1,0,...e,0,0,0,...e,1,0,0,...e,1,2,-3,...e,1,1,-3,...e,0,1,0,...e,0,0,0,...e],normals:[-1,2*r,1,2*r,-r,1,r,-r,1,r,-r,1,-1,-r,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],indices:[0,1,2,0,2,3,0,3,4,5,6,7,5,7,8,5,8,9],size:7}}function eI(t,e){return e?tI(t,e):JO(t)}function tI(t,e){const r=t.coordinates.flat(),{target:n="classic",source:i="circle"}=e,o=em(J_(i,"source"),r,0,0),a=QO(r,o.vertices.length/7,e),s=em(J_(n,"target"),r,1,o.vertices.length/7+a.vertices.length/7);return{vertices:[...o.vertices,...a.vertices,...s.vertices],indices:[...o.outLineIndices,...a.outLineIndices,...s.outLineIndices,...o.indices,...a.indices,...s.indices],normals:[...o.normals,...a.normals,...s.normals],size:7}}function em(t,e,r=1,n=0){const i=[],{vertices:o,indices:a,dimensions:s,outLineIndices:u}=t;for(let l=0;l<o.length;l+=s)i.push(r,o[l+1],o[l],...e);return le(le({},t),{},{vertices:i,indices:a.map(l=>l+n),outLineIndices:u.map(l=>l+n)})}const rI=`// #extension GL_OES_standard_derivatives : enable

in vec4 v_color;
out vec4 outputColor;

// line texture

#pragma include "picking"

void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,nI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec2 a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniorm {
  float u_gap_width: 1.0;
  float u_stroke_width: 1.0;
  float u_stroke_opacity: 1.0;
};

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

out vec4 v_color;

vec2 project_pixel_offset(vec2 offsets) {
  vec2 data = project_pixel(offsets);

  return vec2(data.x, -data.y);
}

vec2 line_dir(vec2 target, vec2 source) {
  return normalize(ProjectFlat(target) - ProjectFlat(source));
}


void main() {
  // 透明度计算
  vec2 source_world = a_Instance.rg; // 起点
  vec2 target_world = a_Instance.ba; // 终点
  vec2 flowlineDir = line_dir(target_world, source_world);
  vec2 perpendicularDir = vec2(-flowlineDir.y, flowlineDir.x);

  vec2 position = mix(source_world, target_world, a_Position.x);
  vec2 position64Low = mix(a_Instance64Low.rg, a_Instance64Low.ba, a_Position.x);

  float lengthCommon = length(
    project_position(vec4(target_world, 0, 1)) - project_position(vec4(source_world, 0, 1))
  );
  vec2 offsetDistances = a_Size.x * project_pixel_offset(vec2(a_Position.y, a_Position.z)); // Mapbox || 高德
  vec2 limitedOffsetDistances = clamp(
    offsetDistances,
    project_pixel(-lengthCommon * 0.2),
    project_pixel(lengthCommon * 0.2)
  );

  float startOffsetCommon = project_pixel(offsets[0]);
  float endOffsetCommon = project_pixel(offsets[1]);
  float endpointOffset = mix(
    clamp(startOffsetCommon, 0.0, lengthCommon * 0.2),
    -clamp(endOffsetCommon, 0.0, lengthCommon * 0.2),
    a_Position.x
  );

  vec2 normalsCommon = u_stroke_width * project_pixel_offset(vec2(a_Normal.x, a_Normal.y));

  float gapCommon = -1. * project_pixel(u_gap_width);
  vec3 offsetCommon = vec3(
    flowlineDir * (limitedOffsetDistances[1] + normalsCommon.y + endpointOffset * 1.05) -
      perpendicularDir * (limitedOffsetDistances[0] + gapCommon + normalsCommon.x),
    0.0
  );

  vec4 project_pos = project_position(vec4(position.xy, 0, 1.0), position64Low);

  vec4 fillColor = vec4(a_Color.rgb, a_Color.a * opacity);
  v_color = mix(fillColor, vec4(u_stroke.xyz, u_stroke.w * fillColor.w * u_stroke_opacity), a_Normal.z);

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy +  offsetCommon.xy, 0., 1.0));

  setPickingColor(a_PickingColor);
}
`;class iI extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,NORMAL:12})}getCommonUniformsInfo(){const{gapWidth:e=2,strokeWidth:r=1,strokeOpacity:n=1}=this.layer.getLayerConfig(),i={u_gap_width:e,u_stroke_width:r,u_stroke_opacity:n};return this.getUniformsBufferInfo(i)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return[yield e.layer.buildLayerModel({moduleName:"flow_line",vertexShader:nI,fragmentShader:rI,defines:e.getDefines(),inject:e.getInject(),triangulation:eI,styleOption:e.layer.getLayerConfig().symbol,primitive:p.TRIANGLES,depth:{enable:!1},pick:!1})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0],r[1]]:[r,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Be.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[n[3],n[4],n[5],n[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:Be.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[lr(n[3]),lr(n[4]),lr(n[5]),lr(n[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}})}}const oI=`#define LineTypeSolid 0.0
#define LineTypeDash 1.0
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0;
};

in vec4 v_dash_array;
in vec4 v_color;
in vec2 v_iconMapUV;
in vec4 v_line_data;
in float v_distance_ratio;

out vec4 outputColor;
#pragma include "picking"
#pragma include "project"
#pragma include "projection"

void main() {

  float animateSpeed = 0.0;
  float d_segmentIndex = v_line_data.g;

  // 设置弧线的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, d_segmentIndex/segmentNumber);
    outputColor.a *= v_color.a;
  } else { // 使用 color 方法传入的颜色
    outputColor = v_color;
  }

  // float blur = 1.- smoothstep(u_blur, 1., length(v_normal.xy));
  // float blur = smoothstep(1.0, u_blur, length(v_normal.xy));
  if(u_line_type == LineTypeDash) {
    float dashLength = mod(v_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z)) {
      // 实线部分
    } else {
      // 虚线部分
      discard;
    };
  }

  // 设置弧线的动画模式
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
      float alpha =1.0 - fract( mod(1.0- v_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + u_time / u_animate.y);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  // 设置弧线的贴图
  if(LineTexture == u_line_texture && u_line_type != LineTypeDash) {
    float arcRadio = smoothstep( 0.0, 1.0, (d_segmentIndex / (segmentNumber - 1.0)));
    // float arcRadio = d_segmentIndex / (segmentNumber - 1.0);
    float count = v_line_data.b; // 贴图在弧线上重复的数量
    float u = fract(arcRadio * count - animateSpeed * count);
    // float u = fract(arcRadio * count - animateSpeed);
    if(u_animate.x == Animate) {
      u = outputColor.a/v_color.a;
    }

    float v = v_line_data.a; // 线图层贴图部分的 v 坐标值

    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    // 设置贴图和底色的叠加模式
    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
  } else {
    outputColor = filterColor(outputColor);
  }

  // gl_FragColor = filterColor(gl_FragColor);
}
`,aI=`#define LineTypeSolid (0.0)
#define LineTypeDash (1.0)
#define Animate (0.0)
#define LineTexture (1.0)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_INSTANCE) in vec4 a_Instance;
layout(location = ATTRIBUTE_LOCATION_INSTANCE_64LOW) in vec4 a_Instance64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array: [10.0, 5., 0, 0];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float segmentNumber;
  float u_line_type: 0.0;
  float u_icon_step: 100;
  float u_line_texture: 0.0;
  float u_textureBlend;
  float u_time;
  float u_linearColor: 0;
};

out vec4 v_dash_array;
out vec4 v_color;
out vec2 v_iconMapUV;
out vec4 v_line_data;
out float v_distance_ratio;

#pragma include "projection"
#pragma include "project"
#pragma include "picking"

float maps(float value, float start1, float stop1, float start2, float stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

float getSegmentRatio(float index) {
  return index / (segmentNumber - 1.0);
}

float paraboloid(vec2 source, vec2 target, float ratio) {
  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);
  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertex_height = paraboloid(source, target, segmentRatio);

  return vec3(mix(source, target, segmentRatio), sqrt(max(0.0, vertex_height)));
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  vec2 offset = dir_screenspace * offset_direction * setPickingSize(a_Size) / 2.0;
  return offset;
}
vec2 getNormal(vec2 line_clipspace, float offset_direction) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
  return dir_screenspace.xy * sign(offset_direction);
}
float getAngularDist(vec2 source, vec2 target) {
  vec2 delta = source - target;
  vec2 sin_half_delta = sin(delta / 2.0);
  float a =
    sin_half_delta.y * sin_half_delta.y +
    cos(source.y) * cos(target.y) * sin_half_delta.x * sin_half_delta.x;
  return 2.0 * atan(sqrt(a), sqrt(1.0 - a));
}

vec2 midPoint(vec2 source, vec2 target) {
  vec2 center = target - source;
  float r = length(center);
  float theta = atan(center.y, center.x);
  float thetaOffset = 0.314;
  float r2 = r / 2.0 / cos(thetaOffset);
  float theta2 = theta + thetaOffset;
  vec2 mid = vec2(r2 * cos(theta2) + source.x, r2 * sin(theta2) + source.y);
  return mid;
}
float bezier3(vec3 arr, float t) {
  float ut = 1.0 - t;
  return (arr.x * ut + arr.y * t) * ut + (arr.y * ut + arr.z * t) * t;
}

vec2 interpolate(vec2 source, vec2 target, float angularDist, float t) {
  if (abs(angularDist - PI) < 0.001) {
    return (1.0 - t) * source + t * target;
  }
  float a = sin((1.0 - t) * angularDist) / sin(angularDist);
  float b = sin(t * angularDist) / sin(angularDist);
  vec2 sin_source = sin(source);
  vec2 cos_source = cos(source);
  vec2 sin_target = sin(target);
  vec2 cos_target = cos(target);
  float x = a * cos_source.y * cos_source.x + b * cos_target.y * cos_target.x;
  float y = a * cos_source.y * sin_source.x + b * cos_target.y * sin_target.x;
  float z = a * sin_source.y + b * sin_target.y;
  return vec2(atan(y, x), atan(z, sqrt(x * x + y * y)));

}

void main() {
  v_color = a_Color;
  v_color.a = v_color.a * opacity;
  vec2 source = radians(a_Instance.rg);
  vec2 target = radians(a_Instance.ba);
  float angularDist = getAngularDist(source, target);
  float segmentIndex = a_Position.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));

  if (u_line_type == LineTypeDash) {
    v_distance_ratio = segmentIndex / segmentNumber;
    float total_Distance = pixelDistance(source, target) / 2.0 * PI;
    total_Distance = total_Distance * 16.0; // total_Distance*16.0 调整默认的效果
    v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / total_Distance;
  }

  if (u_animate.x == Animate) {
    v_distance_ratio = segmentIndex / segmentNumber;
  }

  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);
  v_distance_ratio = segmentIndex / segmentNumber;

  vec4 curr = project_position(vec4(degrees(interpolate(source, target, angularDist, segmentRatio)), 0.0, 1.0), a_Instance64Low.xy);
  vec4 next = project_position(vec4(degrees(interpolate(source, target, angularDist, nextSegmentRatio)), 0.0, 1.0), a_Instance64Low.zw);

  // v_normal = getNormal((next.xy - curr.xy) * indexDir, a_Position.y);
  vec2 offset = project_pixel(getExtrusionOffset((next.xy - curr.xy) * indexDir, a_Position.y));
  //  vec4 project_pos = project_position(vec4(curr.xy, 0, 1.0));
  // gl_Position = project_common_position_to_clipspace(vec4(curr.xy + offset, curr.z, 1.0));

  v_line_data.g = a_Position.x; // 该顶点在弧线上的分段排序
  if (LineTexture == u_line_texture) {
    float d_arcDistrance = length(source - target);
    d_arcDistrance = project_pixel(d_arcDistrance);

    float d_pixelLen = project_pixel(u_icon_step) / 8.0;
    v_line_data.b = floor(d_arcDistrance / d_pixelLen); // 贴图在弧线上重复的数量

    float lineOffsetWidth = length(offset + offset * sign(a_Position.y)); // 线横向偏移的距离
    float linePixelSize = project_pixel(a_Size); // 定点位置偏移，按地图等级缩放后的距离
    v_line_data.a = lineOffsetWidth / linePixelSize; // 线图层贴图部分的 v 坐标值

    v_iconMapUV = a_iconMapUV;
  }

  gl_Position = project_common_position_to_clipspace(vec4(curr.xy + offset, 0, 1.0));
  setPickingColor(a_PickingColor);
}

`,sI={solid:0,dash:1};class uI extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=r({data:this.iconService.getCanvas(),mag:p.NEAREST,min:p.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,INSTANCE:10,INSTANCE_64LOW:11,UV:12})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:r,textureBlend:n="normal",lineType:i="solid",dashArray:o=[10,5],lineTexture:a=!1,iconStep:s=100,segmentNumber:u=30}=this.layer.getLayerConfig(),{animateOption:l}=this.layer.getLayerConfig();if(o.length===2&&o.push(0,0),this.rendererService.getDirty()){var f;(f=this.texture)===null||f===void 0||f.bind()}let c=0,h=[0,0,0,0],_=[0,0,0,0];e&&r&&(h=Ft(e),_=Ft(r),c=1);let m=this.layer.getLayerAnimateTime();isNaN(m)&&(m=0);const E={u_animate:this.animateOption2Array(l),u_dash_array:o,u_sourceColor:h,u_targetColor:_,u_textSize:[1024,this.iconService.canvasHeight||128],segmentNumber:u,u_line_type:sI[i]||0,u_icon_step:s,u_line_texture:a?1:0,u_textureBlend:n==="normal"?0:1,u_time:m,u_linearColor:c};return this.getUniformsBufferInfo(E)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return ee(function*(){const{segmentNumber:r=30}=e.layer.getLayerConfig();return[yield e.layer.buildLayerModel({moduleName:"lineGreatCircle",vertexShader:aI,fragmentShader:oI,triangulation:vf,styleOption:{segmentNumber:r},defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"instance",type:Be.Attribute,descriptor:{name:"a_Instance",shaderLocation:this.attributeLocation.INSTANCE,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[n[3],n[4],n[5],n[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"instance64Low",type:Be.Attribute,descriptor:{name:"a_Instance64Low",shaderLocation:this.attributeLocation.INSTANCE_64LOW,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>[lr(n[3]),lr(n[4]),lr(n[5]),lr(n[6])]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{texture:n}=e,{x:i,y:o}=r[n]||{x:0,y:0};return[i,o]}}})}}const lI=`// #extension GL_OES_standard_derivatives : enable
#define Animate 0.0
#define LineTexture 1.0

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_blur;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed: 0.0;
  float u_vertexScale: 1.0;
  float u_raisingHeight: 0.0;
  float u_strokeWidth: 0.0;
  float u_textureBlend;
  float u_line_texture;
  float u_linearDir: 1.0;
  float u_linearColor: 0;
  float u_time;
};

in vec4 v_color;
in vec4 v_stroke;
// dash
in vec4 v_dash_array;
in float v_d_distance_ratio;
in vec2 v_iconMapUV;
in vec4 v_texture_data;

out vec4 outputColor;
#pragma include "picking"

// [animate, duration, interval, trailLength],
void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_d_distance_ratio, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      // 虚线部分
      discard;
    };
  }
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_texture_data.r; // 当前点位距离占线总长的比例
  if(u_linearDir < 1.0) {
    d_distance_ratio = v_texture_data.a;
  }
  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, d_distance_ratio);
    outputColor.a *= v_color.a;
  } else { // 使用 color 方法传入的颜色
     outputColor = v_color;
  }
  // anti-alias
  // float blur = 1.0 - smoothstep(u_blur, 1., length(v_normal.xy));
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_texture_data.g;      // 当前顶点的距离
    float d_texPixelLen = v_texture_data.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_texture_data.a;  // 线图层贴图部分的 v 坐标值

    // v = max(smoothstep(0.95, 1.0, v), v);
    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
     vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor += pattern;
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = pattern;
    }
  } 

  float v = v_texture_data.a;
  float strokeWidth = min(0.5, u_strokeWidth);
  // 绘制 border
  if(strokeWidth > 0.01) {
    float borderOuterWidth = strokeWidth / 2.0;


    if(v >= 1.0 - strokeWidth || v <= strokeWidth) {
      if(v > strokeWidth) { // 外侧
        float linear = smoothstep(0.0, 1.0, (v - (1.0 - strokeWidth))/strokeWidth);
        //  float linear = step(0.0, (v - (1.0 - borderWidth))/borderWidth);
        outputColor.rgb = mix(outputColor.rgb, v_stroke.rgb, linear);
      } else if(v <= strokeWidth) {
        float linear = smoothstep(0.0, 1.0, v/strokeWidth);
        outputColor.rgb = mix(v_stroke.rgb, outputColor.rgb, linear);
      }
    }

    if(v < borderOuterWidth) {
      outputColor.a = mix(0.0, outputColor.a, v/borderOuterWidth);
    } else if(v > 1.0 - borderOuterWidth) {
      outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - borderOuterWidth))/borderOuterWidth);
    }
  }

  // blur
  float blurV = v_texture_data.a;
  if(blurV < 0.5) {
    outputColor.a *= mix(u_blur.r, u_blur.g, blurV/0.5);
  } else {
    outputColor.a *= mix(u_blur.g, u_blur.b, (blurV - 0.5)/0.5);
  }
  
  outputColor = filterColor(outputColor);
}
`,cI=`#define Animate (0.0)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec2 a_Size;
layout(location = ATTRIBUTE_LOCATION_DISTANCE_INDEX) in vec3 a_DistanceAndIndexAndMiter;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec4 a_Normal_Total_Distance;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_dash_array;
  vec4 u_blur;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed: 0.0;
  float u_vertexScale: 1.0;
  float u_raisingHeight: 0.0;
  float u_strokeWidth: 0.0;
  float u_textureBlend;
  float u_line_texture;
  float u_linearDir: 1.0;
  float u_linearColor: 0;
  float u_time;
};

out vec4 v_color;
out vec4 v_stroke;
//dash
out vec4 v_dash_array;
out float v_d_distance_ratio;
// texV 线图层 - 贴图部分的 v 坐标（线的宽度方向）
out vec2 v_iconMapUV;
out vec4 v_texture_data;

#pragma include "projection"
#pragma include "picking"

void main() {
  vec2 a_DistanceAndIndex = a_DistanceAndIndexAndMiter.xy;
  float a_Miter = a_DistanceAndIndexAndMiter.z;
  vec3 a_Normal = a_Normal_Total_Distance.xyz;
  float a_Total_Distance = a_Normal_Total_Distance.w;
  //dash输出
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / a_Total_Distance;
  v_d_distance_ratio = a_DistanceAndIndex.x / a_Total_Distance;

  // cal style mapping - 数据纹理映射部分的计算
  float d_texPixelLen; // 贴图的像素长度，根据地图层级缩放
  v_iconMapUV = a_iconMapUV;
  d_texPixelLen = project_float_pixel(u_icon_step);

  v_color = a_Color;
  v_color.a *= opacity;
  v_stroke = stroke;

  vec3 size = a_Miter * setPickingSize(a_Size.x) * a_Normal;

  vec2 offset = project_pixel(size.xy);

  float lineDistance = a_DistanceAndIndex.x;
  float currentLinePointRatio = lineDistance / a_Total_Distance;

  float lineOffsetWidth = length(offset + offset * sign(a_Miter)); // 线横向偏移的距离（向两侧偏移的和）
  float linePixelSize = project_pixel(a_Size.x) * 2.0; // 定点位置偏移，按地图等级缩放后的距离 单侧 * 2
  float texV = lineOffsetWidth / linePixelSize; // 线图层贴图部分的 v 坐标值

  v_texture_data = vec4(currentLinePointRatio, lineDistance, d_texPixelLen, texV);
  // 设置数据集的参数

  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0), a_Position64Low);

  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, a_Size.y, 1.0));

  float h = float(a_Position.z) * u_vertexScale; // 线顶点的高度 - 兼容不存在第三个数值的情况 vertex height
  float lineHeight = a_Size.y; // size 第二个参数代表的高度 [linewidth, lineheight]

  // 兼容 mapbox 在线高度上的效果表现基本一致
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // mapbox
    // 保持高度相对不变
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    h *= mapboxZoomScale;
    h += u_raisingHeight * mapboxZoomScale;
    if (u_heightfixed > 0.0) {
      lineHeight *= mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(
    vec4(project_pos.xy + offset, lineHeight + h, 1.0)
  );

  setPickingColor(a_PickingColor);
}
`;class ng extends Et{constructor(...e){super(...e),v(this,"textureEventFlag",!1),v(this,"texture",this.createTexture2D({data:new Uint8Array([0,0,0,0]),width:1,height:1})),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.textures.length===0&&(this.textures=[this.texture]),this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=r({data:this.iconService.getCanvas(),mag:p.NEAREST,min:p.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128})})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,DISTANCE_INDEX:10,NORMAL:11,UV:12})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:r,textureBlend:n="normal",lineType:i="solid",dashArray:o=[10,5,0,0],lineTexture:a=!1,iconStep:s=100,vertexHeightScale:u=20,strokeWidth:l=0,raisingHeight:f=0,heightfixed:c=!1,linearDir:h=U_.VERTICAL,blur:_=[1,1,1,0]}=this.layer.getLayerConfig();let m=o;if(i!=="dash"&&(m=[0,0,0,0]),m.length===2&&m.push(0,0),this.rendererService.getDirty()&&this.texture){var E;(E=this.texture)===null||E===void 0||E.bind()}const{animateOption:S}=this.layer.getLayerConfig();let M=0,P=[0,0,0,0],F=[0,0,0,0];e&&r&&(P=Ft(e),F=Ft(r),M=1);const V={u_animate:this.animateOption2Array(S),u_dash_array:m,u_blur:_,u_sourceColor:P,u_targetColor:F,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:s,u_heightfixed:Number(c),u_vertexScale:u,u_raisingHeight:Number(f),u_strokeWidth:l,u_textureBlend:n===z2.NORMAL?0:1,u_line_texture:a?1:0,u_linearDir:h===U_.VERTICAL?1:0,u_linearColor:M,u_time:this.layer.getLayerAnimateTime()||0};return this.getUniformsBufferInfo(V)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.textureEventFlag||(e.textureEventFlag=!0,e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture)),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return ee(function*(){const{depth:r=!1}=e.layer.getLayerConfig(),{frag:n,vert:i,type:o}=e.getShaders();return e.layer.triangulation=wc,[yield e.layer.buildLayerModel({moduleName:"line"+o,vertexShader:i,fragmentShader:n,triangulation:wc,defines:e.getDefines(),inject:e.getInject(),depth:{enable:r}})]})()}getShaders(){return{frag:lI,vert:cI,type:""}}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"distanceAndIndex",type:Be.Attribute,descriptor:{name:"a_DistanceAndIndexAndMiter",shaderLocation:this.attributeLocation.DISTANCE_INDEX,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o,a)=>a===void 0?[n[3],10,n[4]]:[n[3],a,n[4]]}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0],r[1]]:[r,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal_total_distance",type:Be.Attribute,descriptor:{name:"a_Normal_Total_Distance",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n,i,o)=>[...o,n[5]]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{texture:n}=e,{x:i,y:o}=r[n]||{x:0,y:0};return[i,o]}}})}}const fI=`
layout(std140) uniform commonUniorm {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  float u_vertexScale: 1.0;
  float u_linearColor: 0;
};
in float v_distanceScale;
in vec4 v_color;
//dash
in vec4 v_dash_array;

out vec4 outputColor;
void main() {
  if(u_dash_array!=vec4(0.0)){
    float dashLength = mod(v_distanceScale, v_dash_array.x + v_dash_array.y + v_dash_array.z + v_dash_array.w);
    if(!(dashLength < v_dash_array.x || (dashLength > (v_dash_array.x + v_dash_array.y) && dashLength <  v_dash_array.x + v_dash_array.y + v_dash_array.z))) {
      // 虚线部分
      discard;
    };
  }
  if(u_linearColor==1.0){
    outputColor = mix(u_sourceColor, u_targetColor, v_distanceScale);
    outputColor.a *= v_color.a; // 全局透明度
  }
  else{
    outputColor = v_color;
  }
}
`,hI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec4 a_SizeDistanceAndTotalDistance;

layout(std140) uniform commonUniorm {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec4 u_dash_array;
  float u_vertexScale: 1.0;
  float u_linearColor: 0;
};

#pragma include "projection"
#pragma include "picking"

out vec4 v_color;
out float v_distanceScale;
out vec4 v_dash_array;

void main() {
  //dash输出
  v_dash_array = pow(2.0, 20.0 - u_Zoom) * u_dash_array / a_SizeDistanceAndTotalDistance.a;

  v_color = a_Color;
  v_distanceScale = a_SizeDistanceAndTotalDistance.b / a_SizeDistanceAndTotalDistance.a;
  v_color.a = v_color.a * opacity;
  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0), a_Position64Low);

  float h = float(a_Position.z) * u_vertexScale; // 线顶点的高度 - 兼容不存在第三个数值的情况

  float lineHeight = a_SizeDistanceAndTotalDistance.y;
  // 兼容 mapbox 在线高度上的效果表现基本一致
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // 保持高度相对不变
    h *= 2.0 / pow(2.0, 20.0 - u_Zoom);
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, lineHeight + h, 1.0));
  gl_PointSize = 10.0;

}
`;class dI extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:r,lineType:n="solid",dashArray:i=[10,5,0,0],vertexHeightScale:o=20}=this.layer.getLayerConfig();let a=i;n!=="dash"&&(a=[0,0,0,0]),a.length===2&&a.push(0,0);let s=0,u=[0,0,0,0],l=[0,0,0,0];e&&r&&(u=Ft(e),l=Ft(r),s=1);const f={u_sourceColor:u,u_targetColor:l,u_dash_array:a,u_vertexScale:o,u_linearColor:s};return this.getUniformsBufferInfo(f)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}getShaders(){return{frag:fI,vert:hI,type:"lineSimpleNormal"}}buildModels(){var e=this;return ee(function*(){e.initUniformsBuffer();const{frag:r,vert:n,type:i}=e.getShaders();return[yield e.layer.buildLayerModel({moduleName:i,vertexShader:n,fragmentShader:r,triangulation:K2,defines:e.getDefines(),inject:e.getInject(),primitive:p.LINES,depth:{enable:!1},pick:!1})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"sizeDistanceAndTotalDistance",type:Be.Attribute,descriptor:{name:"a_SizeDistanceAndTotalDistance",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:4,update:(e,r,n)=>{const{size:i=1}=e,o=Array.isArray(i)?[i[0],i[1]]:[i,0];return[o[0],o[1],n[3],n[5]]}}})}}const pI=`#define Animate 0.0
#define LineTexture 1.0

// line texture

uniform sampler2D u_texture;
layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed;
  float u_linearColor: 0;
  float u_line_texture;
  float u_textureBlend;
  float u_iconStepCount;
  float u_time;
};


in vec2 v_iconMapUV;
in vec4 v_color;
in float v_blur;
in vec4 v_dataset;

out vec4 outputColor;

#pragma include "picking"

void main() {
  float animateSpeed = 0.0; // 运动速度
  float d_distance_ratio = v_dataset.r; // 当前点位距离占线总长的比例
  float v = v_dataset.a;

  if(u_linearColor == 1.0) { // 使用渐变颜色
    outputColor = mix(u_sourceColor, u_targetColor, v);
  } else { // 使用 color 方法传入的颜色
     outputColor = v_color;
  }

  outputColor.a *= v_color.a; // 全局透明度
  if(u_animate.x == Animate) {
      animateSpeed = u_time / u_animate.y;
       float alpha =1.0 - fract( mod(1.0- d_distance_ratio, u_animate.z)* (1.0/ u_animate.z) + animateSpeed);
      alpha = (alpha + u_animate.w -1.0) / u_animate.w;
      alpha = smoothstep(0., 1., alpha);
      outputColor.a *= alpha;
  }

  if(u_line_texture == LineTexture) { // while load texture
    float aDistance = v_dataset.g;      // 当前顶点的距离
    float d_texPixelLen = v_dataset.b;  // 贴图的像素长度，根据地图层级缩放
    float u = fract(mod(aDistance, d_texPixelLen)/d_texPixelLen - animateSpeed);
    float v = v_dataset.a;  // 线图层贴图部分的 v 坐标值

    // 计算纹理间隔 start
    float flag = 0.0;
    if(u > 1.0/u_iconStepCount) {
      flag = 1.0;
    }
    u = fract(u*u_iconStepCount);
    // 计算纹理间隔 end

    vec2 uv= v_iconMapUV / u_textSize + vec2(u, v) / u_textSize * 64.;
    vec4 pattern = texture(SAMPLER_2D(u_texture), uv);

    // Tip: 判断纹理间隔
    if(flag > 0.0) {
      pattern = vec4(0.0);
    }

    if(u_textureBlend == 0.0) { // normal
      pattern.a = 0.0;
      outputColor = filterColor(outputColor + pattern);
    } else { // replace
        pattern.a *= v_color.a;
        if(outputColor.a <= 0.0) {
          pattern.a = 0.0;
        }
        outputColor = filterColor(pattern);
    }
  }


  // blur - AA
  if(v < v_blur) {
    outputColor.a = mix(0.0, outputColor.a, v/v_blur);
  } else if(v > 1.0 - v_blur) {
    outputColor.a = mix(outputColor.a, 0.0, (v - (1.0 - v_blur))/v_blur);
  }

  outputColor = filterColor(outputColor);
}
`,_I=`#define Animate 0.0
layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec2 a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_iconMapUV;
layout(location = ATTRIBUTE_LOCATION_DISTANCE_MITER_TOTAL) in vec3 a_Distance_Total_Miter;

layout(std140) uniform commonUniorm {
  vec4 u_animate: [ 1., 2., 1.0, 0.2 ];
  vec4 u_sourceColor;
  vec4 u_targetColor;
  vec2 u_textSize;
  float u_icon_step: 100;
  float u_heightfixed;
  float u_linearColor: 0;
  float u_line_texture;
  float u_textureBlend;
  float u_iconStepCount;
  float u_time;
};

// texV 线图层 - 贴图部分的 v 坐标（线的宽度方向）
out vec2 v_iconMapUV;
out vec4 v_color;
out float v_blur;
out vec4 v_dataset;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  float a_Distance = a_Distance_Total_Miter.x;
  float a_Miter = a_Distance_Total_Miter.y;
  float a_Total_Distance = a_Distance_Total_Miter.z;

  float d_distance_ratio; // 当前点位距离占线总长的比例
  float d_texPixelLen; // 贴图的像素长度，根据地图层级缩放

  v_iconMapUV = a_iconMapUV;
  if (u_heightfixed < 1.0) {
    // 高度随 zoom 调整
    d_texPixelLen = project_pixel(u_icon_step);
  } else {
    d_texPixelLen = u_icon_step;
  }

  if (u_animate.x == Animate || u_linearColor == 1.0) {
    d_distance_ratio = a_Distance / a_Total_Distance;
  }

  float miter = (a_Miter + 1.0) / 2.0;
  // 设置数据集的参数
  v_dataset[0] = d_distance_ratio; // 当前点位距离占线总长的比例
  v_dataset[1] = a_Distance; // 当前顶点的距离
  v_dataset[2] = d_texPixelLen; // 贴图的像素长度，根据地图层级缩放
  v_dataset[3] = miter; // 线图层贴图部分的 v 坐标值 0 - 1

  vec4 project_pos = project_position(vec4(a_Position.xy, 0, 1.0), a_Position64Low);

  float originSize = a_Size.x; // 固定高度
  if (u_heightfixed < 1.0) {
    originSize = project_float_meter(a_Size.x); // 高度随 zoom 调整
  }

  float wallHeight = originSize * miter;
  float lightWeight = calc_lighting(vec4(project_pos.xy, wallHeight, 1.0));

  v_blur = min(project_float_pixel(2.0) / originSize, 0.05);
  v_color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);

  // 兼容 mapbox 在线高度上的效果表现基本一致
  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    // mapbox
    // 保持高度相对不变
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    if (u_heightfixed > 0.0) {
      wallHeight *= mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, wallHeight, 1.0));

  setPickingColor(a_PickingColor);
}
`;class mI extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas()}),this.layer.render();return}this.texture=r({data:this.iconService.getCanvas(),mag:p.NEAREST,min:p.NEAREST,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:12,UV:13,DISTANCE_MITER_TOTAL:15})}getCommonUniformsInfo(){const{sourceColor:e,targetColor:r,textureBlend:n="normal",heightfixed:i=!1,lineTexture:o=!1,iconStep:a=100,iconStepCount:s=1}=this.layer.getLayerConfig(),{animateOption:u}=this.layer.getLayerConfig();if(this.rendererService.getDirty()){var l;(l=this.texture)===null||l===void 0||l.bind()}let f=0,c=[0,0,0,0],h=[0,0,0,0];e&&r&&(c=Ft(e),h=Ft(r),f=1);const _={u_animate:this.animateOption2Array(u),u_sourceColor:c,u_targetColor:h,u_textSize:[1024,this.iconService.canvasHeight||128],u_icon_step:a,u_heightfixed:Number(i),u_linearColor:f,u_line_texture:o?1:0,u_textureBlend:n==="normal"?0:1,u_iconStepCount:s,u_time:this.layer.getLayerAnimateTime()||0};return this.getUniformsBufferInfo(_)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.updateTexture(),e.iconService.on("imageUpdate",e.updateTexture),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return ee(function*(){return[yield e.layer.buildLayerModel({moduleName:"lineWall",vertexShader:_I,fragmentShader:pI,triangulation:wc,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0],r[1]]:[r,0]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"distanceAndTotalAndMiter",type:Be.Attribute,descriptor:{name:"a_Distance_Total_Miter",shaderLocation:this.attributeLocation.DISTANCE_MITER_TOTAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n)=>[n[3],n[4],n[5]]}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_iconMapUV",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{texture:n}=e,{x:i,y:o}=r[n]||{x:0,y:0};return[i,o]}}})}}const vI={arc:WO,arc3d:q_,greatcircle:uI,wall:mI,line:ng,simple:dI,flowline:iI,earthArc3d:q_};class ig extends $r{constructor(...e){super(...e),v(this,"type","LineLayer"),v(this,"enableShaderEncodeStyles",["stroke","offsets","opacity","thetaOffset"]),v(this,"arrowInsertCount",0),v(this,"defaultSourceConfig",{data:[{lng1:100,lat1:30,lng2:130,lat2:30}],options:{parser:{type:"json",x:"lng1",y:"lat1",x1:"lng2",y1:"lat2"}}})}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new vI[r](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{line:{},linearline:{},simple:{},wall:{},arc3d:{blend:"additive"},arc:{blend:"additive"},greatcircle:{blend:"additive"},tileLine:{},earthArc3d:{},flowline:{},arrow:{}}[e]}getModelType(){var e;if(this.layerType)return this.layerType;const r=this.styleAttributeService.getLayerStyleAttribute("shape");return(r==null||(e=r.scale)===null||e===void 0?void 0:e.field)||"line"}processData(e){if(this.getModelType()!=="simple")return e;const r=[];return e.map(n=>{if(Array.isArray(n.coordinates)&&Array.isArray(n.coordinates[0])&&Array.isArray(n.coordinates[0][0])){const i=le({},n);n.coordinates.map(o=>{r.push(le(le({},i),{},{coordinates:o}))})}else r.push(n)}),r}}const gI=`layout(std140) uniform commonUniorm {
  vec4 u_stroke_color;
  float u_additive;
  float u_stroke_opacity;
  float u_stroke_width;
};

in vec4 v_color;
in float v_blur;
in float v_innerRadius;

out vec4 outputColor;

#pragma include "picking"
void main() {
  vec2 center = vec2(0.5);

  // Tip: 片元到中心点的距离 0 - 1
  float fragmengTocenter = distance(center, gl_PointCoord) * 2.0;
  // Tip: 片元的剪切成圆形
  float circleClipOpacity = 1.0 - smoothstep(v_blur, 1.0, fragmengTocenter);

  if (v_innerRadius < 0.99) {
    // 当存在 stroke 且 stroke > 0.01
    float blurWidth = (1.0 - v_blur) / 2.0;
    vec4 stroke = vec4(u_stroke_color.rgb, u_stroke_opacity);
    if (fragmengTocenter > v_innerRadius + blurWidth) {
      outputColor = stroke;
    } else if (fragmengTocenter > v_innerRadius - blurWidth) {
      float mixR = (fragmengTocenter - (v_innerRadius - blurWidth)) / (blurWidth * 2.0);
      outputColor = mix(v_color, stroke, mixR);
    } else {
      outputColor = v_color;
    }
  } else {
    // 当不存在 stroke 或 stroke <= 0.01
    outputColor = v_color;
  }

  outputColor = filterColor(outputColor);

  if (u_additive > 0.0) {
    outputColor *= circleClipOpacity;
  } else {
    outputColor.a *= circleClipOpacity;
  }

}
`,EI=`
layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;

layout(std140) uniform commonUniorm {
  vec4 u_stroke_color;
  float u_additive;
  float u_stroke_opacity;
  float u_stroke_width;
};

out vec4 v_color;
out float v_blur;
out float v_innerRadius;

#pragma include "projection"
#pragma include "picking"
#pragma include "project"
void main() {
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  v_blur = 1.0 - max(2.0 / a_Size, 0.05);
  v_innerRadius = max((a_Size - u_stroke_width) / a_Size, 0.0);

  vec2 offset = project_pixel(u_offsets);

  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(vec2(project_pos.xy+offset),project_pos.z,project_pos.w));

  gl_PointSize = a_Size * 2.0 * u_DevicePixelRatio;
  setPickingColor(a_PickingColor);
}
`;function tm(t){const e=t.coordinates;return{vertices:[...e],indices:[0],size:e.length}}class yI extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9})}getDefaultStyle(){return{blend:"additive"}}getCommonUniformsInfo(){const{blend:e,strokeOpacity:r=1,strokeWidth:n=0,stroke:i="#fff"}=this.layer.getLayerConfig(),o={u_stroke_color:Ft(i),u_additive:e==="additive"?1:0,u_stroke_opacity:r,u_stroke_width:n};return this.getUniformsBufferInfo(o)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.layer.triangulation=tm,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointSimple",vertexShader:EI,fragmentShader:gI,defines:e.getDefines(),inject:e.getInject(),triangulation:tm,depth:{enable:!1},primitive:p.POINTS})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0]]:[r]}}})}}const AI=`precision highp float;
in vec4 v_color;

#pragma include "picking"

layout(std140) uniform commonUniform {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor: 0;
  float u_heightfixed: 0.0; // 默认不固定
  float u_globel;
  float u_r;
  float u_pickLight: 0.0;
  float u_opacitylinear: 0.0;
  float u_opacitylinear_dir: 1.0;
  float u_lightEnable: 1.0;
};
in float v_lightWeight;
in float v_barLinearZ;
out vec4 outputColor;
void main() {

   outputColor = v_color;

  // 开启透明度渐变
  if(u_opacitylinear > 0.0) {
    outputColor.a *= u_opacitylinear_dir > 0.0 ? (1.0 - v_barLinearZ): v_barLinearZ;
  }

  // picking
  if(u_pickLight > 0.0) {
    outputColor = filterColorAlpha(outputColor, v_lightWeight);
  } else {
    outputColor = filterColor(outputColor);
  }
}
`,TI=`precision highp float;

#define pi 3.1415926535
#define ambientRatio 0.5
#define diffuseRatio 0.3
#define specularRatio 0.2

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec3 a_Size;
layout(location = ATTRIBUTE_LOCATION_POS) in vec3 a_Pos;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniform {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor: 0;
  float u_heightfixed: 0.0; // 默认不固定
  float u_globel;
  float u_r;
  float u_pickLight: 0.0;
  float u_opacitylinear: 0.0;
  float u_opacitylinear_dir: 1.0;
  float u_lightEnable: 1.0;
};

out vec4 v_color;
out float v_lightWeight;
out float v_barLinearZ;
// 用于将在顶点着色器中计算好的样式值传递给片元


#pragma include "projection"
#pragma include "light"
#pragma include "picking"

float getYRadian(float x, float z) {
  if(x > 0.0 && z > 0.0) {
    return atan(x/z);
  } else if(x > 0.0 && z <= 0.0){
    return atan(-z/x) + pi/2.0;
  } else if(x <= 0.0 && z <= 0.0) {
    return  pi + atan(x/z); //atan(x/z) +
  } else {
    return atan(z/-x) + pi*3.0/2.0;
  }
}

float getXRadian(float y, float r) {
  return atan(y/r);
}

void main() {

  // cal style mapping - 数据纹理映射部分的计算
  vec3 size = a_Size * a_Position;

  // a_Position.z 是在构建网格的时候传入的标准值 0 - 1，在插值器插值可以获取 0～1 线性渐变的值
  v_barLinearZ =  a_Position.z;

  vec3 offset = size; // 控制圆柱体的大小 - 从标准单位圆柱体进行偏移
  if(u_heightfixed < 1.0) { // 圆柱体不固定高度
    //
  } else {// 圆柱体固定高度 （ 处理 mapbox ）
    if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      offset *= 4.0/pow(2.0, 21.0 - u_Zoom);
    }
  }


  vec4 project_pos = project_position(vec4(a_Pos.xy, 0., 1.0));

  // u_r 控制圆柱的生长
  vec4 pos = vec4(project_pos.xy + offset.xy, offset.z * u_r, 1.0);

  // 圆柱光照效果
  float lightWeight = 1.0;
  if(u_lightEnable > 0.0) { // 取消三元表达式，增强健壮性
    lightWeight = calc_lighting(pos);
  }
  v_lightWeight = lightWeight;
  // 设置圆柱的底色
  if(u_linearColor == 1.0) { // 使用渐变颜色
    v_color = mix(u_sourceColor, u_targetColor, v_barLinearZ);
    v_color.rgb *= lightWeight;
  } else { // 使用 color 方法传入的颜色
     v_color = a_Color;
  }
  v_color.a *= u_opacity;


  // 在地球模式下，将原本垂直于 xy 平面的圆柱调整姿态到适应圆的角度
  //旋转矩阵mx，创建绕x轴旋转矩阵
  float r = sqrt(a_Pos.z*a_Pos.z + a_Pos.x*a_Pos.x);
  float xRadian = getXRadian(a_Pos.y, r);
  float xcos = cos(xRadian);//求解旋转角度余弦值
  float xsin = sin(xRadian);//求解旋转角度正弦值
  mat4 mx = mat4(
    1,0,0,0,
    0,xcos,-xsin,0,
    0,xsin,xcos,0,
    0,0,0,1);

  //旋转矩阵my，创建绕y轴旋转矩阵
  float yRadian = getYRadian(a_Pos.x, a_Pos.z);
  float ycos = cos(yRadian);//求解旋转角度余弦值
  float ysin = sin(yRadian);//求解旋转角度正弦值
  mat4 my = mat4(
    ycos,0,-ysin,0,
    0,1,0,0,
    ysin,0,ycos,0,
    0,0,0,1);

  gl_Position = u_ViewProjectionMatrix * vec4(( my * mx *  vec4(a_Position * a_Size, 1.0)).xyz + a_Pos, 1.0);


  setPickingColor(a_PickingColor);
}
`,{isNumber:SI}=Mr;let xI=class extends Et{constructor(...e){super(...e),v(this,"raiseCount",0),v(this,"raiseRepeat",0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,POS:10,NORMAL:11})}getCommonUniformsInfo(){const{animateOption:e={enable:!1,speed:.01,repeat:!1},opacity:r=1,sourceColor:n,targetColor:i,pickLight:o=!1,heightfixed:a=!0,opacityLinear:s={enable:!1,dir:"up"},lightEnable:u=!0}=this.layer.getLayerConfig();let l=0,f=[0,0,0,0],c=[0,0,0,0];if(n&&i&&(f=Ft(n),c=Ft(i),l=1),this.raiseCount<1&&this.raiseRepeat>0&&e.enable){const{speed:m=.01}=e;this.raiseCount+=m,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}const h={u_sourceColor:f,u_targetColor:c,u_linearColor:l,u_pickLight:Number(o),u_heightfixed:Number(a),u_r:e.enable&&this.raiseRepeat>0?this.raiseCount:1,u_opacity:SI(r)?r:1,u_opacitylinear:Number(s.enable),u_opacitylinear_dir:s.dir==="up"?1:0,u_lightEnable:Number(u)};return this.getUniformsBufferInfo(h)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{animateOption:{repeat:r=1}}=e.layer.getLayerConfig();return e.raiseRepeat=r,[yield e.layer.buildLayerModel({moduleName:"pointEarthExtrude",vertexShader:TI,fragmentShader:AI,triangulation:_f,depth:{enable:!0},defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:p.FRONT},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:e=>{const{size:r}=e;if(r){let n=[];return Array.isArray(r)&&(n=r.length===2?[r[0],r[0],r[1]]:r),Array.isArray(r)||(n=[r,r,r]),n}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"pos",type:Be.Attribute,descriptor:{name:"a_Pos",shaderLocation:this.attributeLocation.POS,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:e=>{const r=vi(e.coordinates);return q0([r[0],r[1]])}}})}};const RI=`in vec4 v_data;
in vec4 v_color;
in float v_radius;

layout(std140) uniform commonUniform {
  float u_additive;
  float u_stroke_opacity : 1;
  float u_stroke_width : 2;
  float u_blur : 0.0;
};
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {
  int shape = int(floor(v_data.w + 0.5));

  vec4 strokeColor = u_stroke == vec4(0.0) ? v_color : u_stroke;

  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius + u_stroke_width);

  float outer_df;
  float inner_df;
  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'
  if (shape == 0) {
    outer_df = sdCircle(v_data.xy, 1.0);
    inner_df = sdCircle(v_data.xy, r);
  } else if (shape == 1) {
    outer_df = sdEquilateralTriangle(1.1 * v_data.xy);
    inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);
  } else if (shape == 2) {
    outer_df = sdBox(v_data.xy, vec2(1.));
    inner_df = sdBox(v_data.xy, vec2(r));
  } else if (shape == 3) {
    outer_df = sdPentagon(v_data.xy, 0.8);
    inner_df = sdPentagon(v_data.xy, r * 0.8);
  } else if (shape == 4) {
    outer_df = sdHexagon(v_data.xy, 0.8);
    inner_df = sdHexagon(v_data.xy, r * 0.8);
  } else if (shape == 5) {
    outer_df = sdOctogon(v_data.xy, 1.0);
    inner_df = sdOctogon(v_data.xy, r);
  } else if (shape == 6) {
    outer_df = sdHexagram(v_data.xy, 0.52);
    inner_df = sdHexagram(v_data.xy, r * 0.52);
  } else if (shape == 7) {
    outer_df = sdRhombus(v_data.xy, vec2(1.0));
    inner_df = sdRhombus(v_data.xy, vec2(r));
  } else if (shape == 8) {
    outer_df = sdVesica(v_data.xy, 1.1, 0.8);
    inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);
  }

  if(outer_df > antialiasblur + 0.018) discard;

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(
    antialiasblur,
    0.0,
    inner_df
  );

  if(u_stroke_width < 0.01) {
    outputColor = vec4(v_color.rgb, v_color.a * u_opacity);
  } else {
    outputColor = mix(vec4(v_color.rgb, v_color.a * u_opacity), strokeColor * u_stroke_opacity, color_t);
  }

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
    outputColor = filterColorAlpha(outputColor, outputColor.a);
  } else {
    outputColor.a *= opacity_t;
    outputColor = filterColor(outputColor);
  }
}
`,bI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_SHAPE) in float a_Shape;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;

layout(std140) uniform commonUniform {
  float u_additive;
  float u_stroke_opacity : 1;
  float u_stroke_width : 2;
  float u_blur : 0.0;
};
out vec4 v_data;
out vec4 v_color;
out float v_radius;

#pragma include "projection"
#pragma include "picking"


void main() {
  vec3 extrude = a_Extrude;
  float shape_type = a_Shape;
  /*
  *  setPickingSize 设置拾取大小
  */
  float newSize = setPickingSize(a_Size);
  // float newSize = setPickingSize(a_Size) * 0.00001038445708445579;

  // unpack color(vec2)
  v_color = a_Color;

  // radius(16-bit)
  v_radius = newSize;

  // anti-alias
  //  float antialiased_blur = -max(u_blur, antialiasblur);
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / newSize, u_blur);

  // TODP: /abs(extrude.x) 是为了兼容地球模式
  v_data = vec4(extrude.x/abs(extrude.x), extrude.y/abs(extrude.y), antialiasblur,shape_type);

  gl_Position = u_ViewProjectionMatrix * vec4(a_Position + extrude * newSize * 0.1 + vec3(u_offsets,0.0), 1.0);

  setPickingColor(a_PickingColor);
}
`;let CI=class extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,SHAPE:10,EXTRUDE:11})}getCommonUniformsInfo(){const{strokeOpacity:e=1,strokeWidth:r=0,blend:n,blur:i=0}=this.layer.getLayerConfig();this.layer.getLayerConfig();const o={u_additive:n==="additive"?1:0,u_stroke_opacity:e,u_stroke_width:r,u_blur:i};return this.getUniformsBufferInfo(o)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.layer.triangulation=$_,[yield e.layer.buildLayerModel({moduleName:"pointEarthFill",vertexShader:bI,fragmentShader:RI,triangulation:$_,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!0},blend:e.getBlend()})]})()}animateOption2Array(e){return[e.enable?0:1,e.speed||1,e.rings||3,0]}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Be.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i)=>{const[o,a,s]=n,u=ln(0,0,1),l=ln(o,0,s),f=o>=0?Bd(u,l):Math.PI*2-Bd(u,l),c=Math.PI*2-Math.asin(a/100),h=tu();pv(h,h,f),RA(h,h,c);const _=ln(1,1,0);io(_,_,h),oo(_,_);const m=ln(-1,1,0);io(m,m,h),oo(m,m);const E=ln(-1,-1,0);io(E,E,h),oo(E,E);const S=ln(1,-1,0);io(S,S,h),oo(S,S);const M=[..._,...m,...E,...S],P=i%4*3;return[M[P],M[P+1],M[P+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=5}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:Be.Attribute,descriptor:{name:"a_Shape",shaderLocation:this.attributeLocation.SHAPE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{shape:r=2}=e;return[this.layer.getLayerConfig().shape2d.indexOf(r)]}}})}};const OI=`in vec4 v_color;
in float v_lightWeight;
out vec4 outputColor;

layout(std140) uniform commonUniforms {
  float u_pickLight;
  float u_heightfixed;
  float u_r;
  float u_linearColor;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_opacitylinear;
  float u_opacitylinear_dir;
  float u_lightEnable;
};

#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  outputColor = v_color;
  // 开启透明度渐变
  // picking
  if (u_pickLight > 0.0) {
    outputColor = filterColorAlpha(outputColor, v_lightWeight);
  } else {
    outputColor = filterColor(outputColor);
  }
}
`,II=`#define pi (3.1415926535)

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in vec3 a_Size;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec4 a_Extrude;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

layout(std140) uniform commonUniforms {
  float u_pickLight;
  float u_heightfixed;
  float u_r;
  float u_linearColor;
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_opacitylinear;
  float u_opacitylinear_dir;
  float u_lightEnable;
};
out vec4 v_color;
out float v_lightWeight;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

float getYRadian(float x, float z) {
  if (x > 0.0 && z > 0.0) {
    return atan(x / z);
  } else if (x > 0.0 && z <= 0.0) {
    return atan(-z / x) + pi / 2.0;
  } else if (x <= 0.0 && z <= 0.0) {
    return pi + atan(x / z); //atan(x/z) +
  } else {
    return atan(z / -x) + pi * 3.0 / 2.0;
  }
}

float getXRadian(float y, float r) {
  return atan(y / r);
}

void main() {
  vec3 size = a_Size * a_Position;

  vec3 offset = size; // 控制圆柱体的大小 - 从标准单位圆柱体进行偏移

  if (u_heightfixed < 1.0) {
    // 圆柱体不固定高度
  } else {
    // 圆柱体固定高度 （ 处理 mapbox ）
    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      offset *= 4.0 / pow(2.0, 21.0 - u_Zoom);
    }
  }

  vec2 positions = a_Extrude.xy;
  vec2 positions64Low = a_Extrude.zw;
  vec4 project_pos = project_position(vec4(positions, 0.0, 1.0), positions64Low);

  // u_r 控制圆柱的生长
  vec4 pos = vec4(project_pos.xy + offset.xy, offset.z * u_r, 1.0);

  // // 圆柱光照效果
  float lightWeight = 1.0;

  if (u_lightEnable > 0.0) {
    // 取消三元表达式，增强健壮性
    lightWeight = calc_lighting(pos);
  }

  v_lightWeight = lightWeight;

  v_color = a_Color;

  // 设置圆柱的底色
  if (u_linearColor == 1.0) {
    // 使用渐变颜色
    v_color = mix(u_sourceColor, u_targetColor, a_Position.z);
    v_color.a = v_color.a * opacity;
  } else {
    v_color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);
  }

  if (u_opacitylinear > 0.0) {
    v_color.a *= u_opacitylinear_dir > 0.0 ? 1.0 - a_Position.z : a_Position.z;
  }

  gl_Position = project_common_position_to_clipspace(pos);

  setPickingColor(a_PickingColor);
}
`;let og=class extends Et{constructor(...e){super(...e),v(this,"raiseCount",0),v(this,"raiseRepeat",0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,EXTRUDE:10,NORMAL:11})}getCommonUniformsInfo(){const{animateOption:e={enable:!1,speed:.01,repeat:!1},sourceColor:r,targetColor:n,pickLight:i=!1,heightfixed:o=!1,opacityLinear:a={enable:!1,dir:"up"},lightEnable:s=!0}=this.layer.getLayerConfig();let u=0,l=[0,0,0,0],f=[0,0,0,0];if(r&&n&&(l=Ft(r),f=Ft(n),u=1),this.raiseCount<1&&this.raiseRepeat>0&&e.enable){const{speed:_=.01}=e;this.raiseCount+=_,this.raiseCount>=1&&(this.raiseRepeat>1?(this.raiseCount=0,this.raiseRepeat--):this.raiseCount=1)}const c={u_pickLight:Number(i),u_heightfixed:Number(o),u_r:e.enable&&this.raiseRepeat>0?this.raiseCount:1,u_linearColor:u,u_sourceColor:l,u_targetColor:f,u_opacitylinear:Number(a.enable),u_opacitylinear_dir:a.dir==="up"?1:0,u_lightEnable:Number(s)};return this.getUniformsBufferInfo(c)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{depth:r=!0,animateOption:{repeat:n=1}}=e.layer.getLayerConfig();return e.raiseRepeat=n,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointExtrude",vertexShader:II,fragmentShader:OI,triangulation:_f,defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:p.FRONT},depth:{enable:r}})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:e=>{const{size:r}=e;if(r){let n=[];return Array.isArray(r)&&(n=r.length===2?[r[0],r[0],r[1]]:r),Array.isArray(r)||(n=[r,r,r]),n}else return[2,2,2]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Be.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:4,update:e=>{const r=vi(e.coordinates);return[r[0],r[1],lr(r[0]),lr(r[1])]}}})}};const MI=`layout(std140) uniform commonUniforms {
  vec3 u_blur_height_fixed;
  float u_stroke_width;
  float u_additive;
  float u_stroke_opacity;
  float u_size_unit;
  float u_time;
  vec4 u_animate;
};

in vec4 v_color;
in vec4 v_stroke;
in vec4 v_data;
in float v_radius;

#pragma include "scene_uniforms"
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {
  int shape = int(floor(v_data.w + 0.5));
  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius + u_stroke_width);

  float outer_df;
  float inner_df;
  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'
  if (shape == 0) {
    outer_df = sdCircle(v_data.xy, 1.0);
    inner_df = sdCircle(v_data.xy, r);
  } else if (shape == 1) {
    outer_df = sdEquilateralTriangle(1.1 * v_data.xy);
    inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);
  } else if (shape == 2) {
    outer_df = sdBox(v_data.xy, vec2(1.0));
    inner_df = sdBox(v_data.xy, vec2(r));
  } else if (shape == 3) {
    outer_df = sdPentagon(v_data.xy, 0.8);
    inner_df = sdPentagon(v_data.xy, r * 0.8);
  } else if (shape == 4) {
    outer_df = sdHexagon(v_data.xy, 0.8);
    inner_df = sdHexagon(v_data.xy, r * 0.8);
  } else if (shape == 5) {
    outer_df = sdOctogon(v_data.xy, 1.0);
    inner_df = sdOctogon(v_data.xy, r);
  } else if (shape == 6) {
    outer_df = sdHexagram(v_data.xy, 0.52);
    inner_df = sdHexagram(v_data.xy, r * 0.52);
  } else if (shape == 7) {
    outer_df = sdRhombus(v_data.xy, vec2(1.0));
    inner_df = sdRhombus(v_data.xy, vec2(r));
  } else if (shape == 8) {
    outer_df = sdVesica(v_data.xy, 1.1, 0.8);
    inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);
  }

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(antialiasblur, 0.0, inner_df);

  float PI = 3.14159;
  float N_RINGS = 3.0;
  float FREQ = 1.0;

  if (u_stroke_width < 0.01) {
    outputColor = v_color;
  } else {
    outputColor = mix(v_color, v_stroke * u_stroke_opacity, color_t);
  }
  float intensity = 1.0;
  if (u_time != -1.0) {
    //wave相关逻辑
    float d = length(v_data.xy);
    if (d > 0.5) {
      discard;
    }
    intensity =
      clamp(cos(d * PI), 0.0, 1.0) *
      clamp(cos(2.0 * PI * (d * 2.0 * u_animate.z - u_animate.y * u_time)), 0.0, 1.0);
  }

  if (u_additive > 0.0) {
    outputColor *= opacity_t;
    outputColor *= intensity; //wave
    outputColor = filterColorAlpha(outputColor, outputColor.a);
  } else {
    outputColor.a *= opacity_t;
    outputColor.a *= intensity; //wave
    outputColor = filterColor(outputColor);
  }
  // 作为 mask 模板时需要丢弃透明的像素
  if (outputColor.a < 0.01) {
    discard;
  }
}
`,BI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_SHAPE) in float a_Shape;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;

layout(std140) uniform commonUniforms {
  vec3 u_blur_height_fixed;
  float u_stroke_width;
  float u_additive;
  float u_stroke_opacity;
  float u_size_unit;
  float u_time;
  vec4 u_animate;
};

out vec4 v_color;
out vec4 v_stroke;
out vec4 v_data;
out float v_radius;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  // 透明度计算
   v_stroke = stroke;
  vec3 extrude = a_Extrude;
  float shape_type = a_Shape;
  /*
  *  setPickingSize 设置拾取大小
  *  u_meter2coord 在等面积大小的时候设置单位
  */
  float newSize = setPickingSize(a_Size);
  // float newSize = setPickingSize(a_Size) * 0.00001038445708445579;



  // unpack color(vec2)
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);

  if(u_size_unit == 1.0) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }

   v_radius = newSize;

  // anti-alias
  //  float antialiased_blur = -max(u_blur, antialiasblur);
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / newSize, u_blur_height_fixed.x);

  vec2 offset = (extrude.xy * (newSize + u_stroke_width) + u_offsets);

  offset = project_pixel(offset);
  offset = rotate_matrix(offset,rotation);

  // TODP: /abs(extrude.x) 是为了兼容地球模式
  v_data = vec4(extrude.x/abs(extrude.x), extrude.y/abs(extrude.y), antialiasblur,shape_type);

  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0), a_Position64Low);
  // gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, project_pixel(setPickingOrder(0.0)), 1.0));

  float raisingHeight = u_blur_height_fixed.y;

  if(u_blur_height_fixed.z < 1.0) { // false
    raisingHeight = project_pixel(u_blur_height_fixed.y);
  } else {
     if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
      float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_blur_height_fixed.y * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, raisingHeight, 1.0));

  setPickingColor(a_PickingColor);
}
`;let ag=class extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,SHAPE:10,EXTRUDE:11})}getCommonUniformsInfo(){const{strokeOpacity:e=1,strokeWidth:r=0,blend:n,blur:i=0,raisingHeight:o=0,heightfixed:a=!1,unit:s="pixel"}=this.layer.getLayerConfig();let u=this.getAnimateUniforms().u_time;isNaN(u)&&(u=-1);const l={u_blur_height_fixed:[i,Number(o),Number(a)],u_stroke_width:r,u_additive:n==="additive"?1:0,u_stroke_opacity:e,u_size_unit:pf[s],u_time:u,u_animate:this.getAnimateUniforms().u_animate};return this.getUniformsBufferInfo(l)}getAnimateUniforms(){const{animateOption:e={enable:!1}}=this.layer.getLayerConfig();return{u_animate:this.animateOption2Array(e),u_time:this.layer.getLayerAnimateTime()}}getAttribute(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),_i)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{frag:r,vert:n,type:i}=e.getShaders();return e.layer.triangulation=_i,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:i,vertexShader:n,fragmentShader:r,defines:e.getDefines(),inject:e.getInject(),triangulation:_i,depth:{enable:!1}})]})()}getShaders(){return{frag:MI,vert:BI,type:"pointFill"}}animateOption2Array(e){return[e.enable?0:1,e.speed||1,e.rings||3,0]}registerBuiltinAttributes(){const e=this.layer.getLayerConfig().shape2d;this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Be.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:(r,n,i,o)=>{const a=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],s=o%4*3;return[a[s],a[s+1],a[s+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:r=>{const{size:n=5}=r;return Array.isArray(n)?[n[0]]:[n]}}}),this.styleAttributeService.registerStyleAttribute({name:"shape",type:Be.Attribute,descriptor:{name:"a_Shape",shaderLocation:this.attributeLocation.SHAPE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:r=>{const{shape:n=2}=r;return[e.indexOf(n)]}}})}};const NI=`in vec2 v_uv;// 本身的 uv 坐标
in vec2 v_Iconuv;
in float v_opacity;
out vec4 outputColor;

uniform sampler2D u_texture;
layout(std140) uniform commonUniform {
  vec2 u_textSize;
  float u_heightfixed: 0.0;
  float u_raisingHeight: 0.0;
  float u_size_unit;
};

#pragma include "scene_uniforms"
#pragma include "sdf_2d"
#pragma include "picking"

void main() {
  vec2 pos = v_Iconuv / u_textSize + v_uv / u_textSize * 64.;
  outputColor = texture(SAMPLER_2D(u_texture), pos);
  outputColor.a *= v_opacity;
  outputColor = filterColor(outputColor);
}
`,PI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniform {
  vec2 u_textSize;
  float u_heightfixed;
  float u_raisingHeight;
  float u_size_unit;
};

out vec2 v_uv;
out vec2 v_Iconuv;
out float v_opacity;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  vec3 extrude = a_Extrude;
  v_uv = (a_Extrude.xy + 1.0) / 2.0;
  v_uv.x = 1.0 - v_uv.x;
  v_uv.y = 1.0 - v_uv.y;
  v_Iconuv = a_Uv;
  v_opacity = opacity;
  float newSize = a_Size;
  if (u_size_unit == 1.0) {
    newSize = newSize * u_PixelsPerMeter.z;
  }

  // vec2 offset = (u_RotateMatrix * extrude.xy * (a_Size) + textrueOffsets);
  vec2 offset = extrude.xy * newSize + offsets;

  offset = rotate_matrix(offset, rotation);

  offset = project_pixel(offset);

  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, 0.0, 1.0));

  setPickingColor(a_PickingColor);
}
`;class LI extends Et{constructor(...e){super(...e),v(this,"meter2coord",1),v(this,"texture",void 0),v(this,"isMeter",!1),v(this,"radian",0),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),this.layerService.throttleRenderLayers();return}this.texture=r({data:this.iconService.getCanvas(),mag:p.LINEAR,min:p.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128,mipmap:!0}),this.textures=[this.texture]})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,EXTRUDE:10,UV:11})}getCommonUniformsInfo(){const{raisingHeight:e=0,heightfixed:r=!1,unit:n="pixel"}=this.layer.getLayerConfig();if(this.rendererService.getDirty()){var i;(i=this.texture)===null||i===void 0||i.bind()}const o={u_textSize:[1024,this.iconService.canvasHeight||128],u_heightfixed:Number(r),u_raisingHeight:Number(e),u_size_unit:pf[n]};return this.getUniformsBufferInfo(o)}getAttribute(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),_i)}initModels(){var e=this;return ee(function*(){return e.iconService.on("imageUpdate",e.updateTexture),e.updateTexture(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointFillImage",vertexShader:PI,fragmentShader:NI,triangulation:_i,depth:{enable:!1},defines:e.getDefines(),inject:e.getInject(),cull:{enable:!0,face:p.FRONT}})]})()}clearModels(){var e;this.iconService.off("imageUpdate",this.updateTexture),(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{shape:n}=e,{x:i,y:o}=r[n]||{x:-64,y:-64};return[i,o]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Be.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i)=>{const o=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],a=i%4*3;return[o[a],o[a+1],o[a+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=5}=e;return Array.isArray(r)?[r[0]]:[r]}}})}}const DI=`layout(std140) uniform commonUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
};

uniform sampler2D u_texture;

in vec4 v_color;
in vec2 v_uv;
in float v_opacity;

#pragma include "picking"

out vec4 outputColor;

void main() {
  vec2 pos = v_uv / u_textSize + gl_PointCoord / u_textSize * 64.0;
  vec4 textureColor;

  // Y = 0.299R + 0.587G + 0.114B // 亮度提取

  textureColor = texture(SAMPLER_2D(u_texture), pos);

  // Tip: 去除边缘部分 mipmap 导致的混合变暗
  float fragmengTocenter = distance(vec2(0.5), gl_PointCoord);
  if (fragmengTocenter >= 0.5) {
    float luma = 0.299 * textureColor.r + 0.587 * textureColor.g + 0.114 * textureColor.b;
    textureColor.a *= luma;
  }

  if (
    all(lessThan(v_color, vec4(1.0 + 0.00001))) && all(greaterThan(v_color, vec4(1.0 - 0.00001))) ||
    v_color == vec4(1.0)
  ) {
    outputColor = textureColor;
  } else {
    outputColor = step(0.01, textureColor.z) * v_color;
  }
  outputColor.a *= v_opacity;
  if (outputColor.a < 0.01) {
    discard;
  }
  outputColor = filterColor(outputColor);
}
`,FI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_textSize;
  float u_raisingHeight;
  float u_heightfixed;
};

out vec4 v_color;
out vec2 v_uv;
out float v_opacity;

#pragma include "projection"
#pragma include "picking"

void main() {
  // cal style mapping - 数据纹理映射部分的计算
  v_color = a_Color;
  v_opacity = opacity;
  v_uv = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);

  vec2 offset = project_pixel(offsets);

  float raisingHeight = u_raisingHeight;
  if (u_heightfixed < 1.0) {
    // false
    raisingHeight = project_pixel(u_raisingHeight);
  } else {
    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      raisingHeight = u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, raisingHeight, 1.0));

  gl_PointSize = a_Size * 2.0 * u_DevicePixelRatio;
  setPickingColor(a_PickingColor);
}
`;class sg extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"updateTexture",()=>{const{createTexture2D:r}=this.rendererService;if(this.texture){this.texture.update({data:this.iconService.getCanvas(),mag:"linear",min:"linear mipmap nearest",mipmap:!0}),setTimeout(()=>{this.layerService.throttleRenderLayers()});return}this.texture=r({data:this.iconService.getCanvas(),mag:p.LINEAR,min:p.LINEAR_MIPMAP_LINEAR,premultiplyAlpha:!1,width:1024,height:this.iconService.canvasHeight||128,mipmap:!0})})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,UV:10})}getUninforms(){if(this.rendererService.getDirty()){var e;(e=this.texture)===null||e===void 0||e.bind()}const r=this.getCommonUniformsInfo(),n=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},r.uniformsOption),n.uniformsOption)}getCommonUniformsInfo(){const{raisingHeight:e=0,heightfixed:r=!1}=this.layer.getLayerConfig(),n={u_textSize:[1024,this.iconService.canvasHeight||128],u_raisingHeight:Number(e),u_heightfixed:Number(r),u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(n)}initModels(){var e=this;return ee(function*(){return e.iconService.on("imageUpdate",e.updateTexture),e.updateTexture(),e.buildModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.iconService.off("imageUpdate",this.updateTexture)}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointImage",vertexShader:FI,fragmentShader:DI,triangulation:Z2,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},primitive:p.POINTS})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=5}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:e=>{const r=this.iconService.getIconMap(),{shape:n}=e,{x:i,y:o}=r[n]||{x:-64,y:-64};return[i,o]}}})}}const wI=`in vec4 v_color;
out vec4 outputColor;
void main() {
  outputColor = v_color;
}
`,UI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;

layout(std140) uniform u_Common {
  float u_size_scale;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "project"

void main() {
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);

  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(project_pos);

  gl_PointSize = a_Size * u_size_scale * 2.0 * u_DevicePixelRatio;
}
`;function rm(t){const e=t.coordinates;return{vertices:[...e],indices:[0],size:e.length}}class ug extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9})}getDefaultStyle(){return{blend:"additive"}}getCommonUniformsInfo(){const e={u_size_scale:.5};return this.getUniformsBufferInfo(e)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.layer.triangulation=rm,e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointNormal",vertexShader:UI,fragmentShader:wI,triangulation:rm,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1},primitive:p.POINTS,pick:!1})]})()}clearModels(){}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=1}=e;return Array.isArray(r)?[r[0]]:[r]}}})}}const kI=`
layout(std140) uniform commonUniorm{
  float u_additive;
  float u_size_unit;
  float u_speed: 1.0;
  float u_time;
};
in vec4 v_data;
in vec4 v_color;
in float v_radius;
in vec2 v_extrude;
#pragma include "sdf_2d"
#pragma include "picking"

out vec4 outputColor;

void main() {

  lowp float antialiasblur = v_data.z;
  float r = v_radius / (v_radius);

  float outer_df = sdCircle(v_data.xy, 1.0);
  float inner_df = sdCircle(v_data.xy, r);

  float opacity_t = smoothstep(0.0, antialiasblur, outer_df);

  outputColor = vec4(v_color.rgb, v_color.a);

  if(u_additive > 0.0) {
    outputColor *= opacity_t;
  } else {
    outputColor.a *= opacity_t;
  }

  if(outputColor.a > 0.0) {
    outputColor = filterColor(outputColor);
  }

  vec2 extrude =  v_extrude;
  vec2 dir = normalize(extrude);
  vec2 baseDir = vec2(1.0, 0.0);
  float pi = 3.14159265359;
  float flag = sign(dir.y);
  float rades = dot(dir, baseDir);
  float radar_v = (flag - 1.0) * -0.5 * acos(rades)/pi;
  // simple AA
  if(radar_v > 0.99) {
    radar_v = 1.0 - (radar_v - 0.99)/0.01;
  }

  outputColor.a *= radar_v;
}
`,zI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_EXTRUDE) in vec3 a_Extrude;

layout(std140) uniform commonUniorm {
  float u_additive;
  float u_size_unit;
  float u_speed: 1.0;
  float u_time;
};

out vec4 v_data;
out vec4 v_color;
out float v_radius;
out vec2 v_extrude;

#pragma include "projection"
#pragma include "picking"

void main() {
  float newSize = setPickingSize(a_Size);

  float time = u_time * u_speed;
  mat2 rotateMatrix = mat2(
    cos(time), sin(time),
    -sin(time), cos(time)
  );
  v_extrude = rotateMatrix * a_Extrude.xy;

  v_color = a_Color;
  v_color.a *= opacity;

  float blur = 0.0;
  float antialiasblur = -max(2.0 / u_DevicePixelRatio / a_Size, blur);

  if(u_size_unit == 1.) {
    newSize = newSize  * u_PixelsPerMeter.z;
  }
  v_radius = newSize;

  vec2 offset = (a_Extrude.xy * (newSize));

  offset = project_pixel(offset);

  v_data = vec4(a_Extrude.x, a_Extrude.y, antialiasblur, -1.0);

  vec4 project_pos = project_position(vec4(a_Position.xy, 0.0, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy + offset, project_pixel(setPickingOrder(0.0)), 1.0));

  setPickingColor(a_PickingColor);
}
`;class VI extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,EXTRUDE:10})}getCommonUniformsInfo(){const{blend:e,speed:r=1,unit:n="pixel"}=this.layer.getLayerConfig(),i={u_additive:e==="additive"?1:0,u_size_unit:pf[n],u_speed:r,u_time:this.layer.getLayerAnimateTime()};return this.getUniformsBufferInfo(i)}getAnimateUniforms(){return{}}getAttribute(){return this.styleAttributeService.createAttributesAndIndices(this.layer.getEncodedData(),_i)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"pointRadar",vertexShader:zI,fragmentShader:kI,triangulation:_i,defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}})]})()}animateOption2Array(e){return[e.enable?0:1,e.speed||1,e.rings||3,0]}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"extrude",type:Be.Attribute,descriptor:{name:"a_Extrude",shaderLocation:this.attributeLocation.EXTRUDE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i)=>{const o=[1,1,0,-1,1,0,-1,-1,0,1,-1,0],a=i%4*3;return[o[a],o[a+1],o[a+2]]}}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{shaderLocation:this.attributeLocation.SIZE,name:"a_Size",buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=5}=e;return Array.isArray(r)?[r[0]]:[r]}}})}}class WI{constructor(e,r,n){v(this,"boxCells",[]),v(this,"xCellCount",void 0),v(this,"yCellCount",void 0),v(this,"boxKeys",void 0),v(this,"bboxes",void 0),v(this,"width",void 0),v(this,"height",void 0),v(this,"xScale",void 0),v(this,"yScale",void 0),v(this,"boxUid",void 0);const i=this.boxCells;this.xCellCount=Math.ceil(e/n),this.yCellCount=Math.ceil(r/n);for(let o=0;o<this.xCellCount*this.yCellCount;o++)i.push([]);this.boxKeys=[],this.bboxes=[],this.width=e,this.height=r,this.xScale=this.xCellCount/e,this.yScale=this.yCellCount/r,this.boxUid=0}insert(e,r,n,i,o){this.forEachCell(r,n,i,o,this.insertBoxCell,this.boxUid++),this.boxKeys.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i),this.bboxes.push(o)}query(e,r,n,i,o){return this.queryHitTest(e,r,n,i,!1,o)}hitTest(e,r,n,i,o){return this.queryHitTest(e,r,n,i,!0,o)}insertBoxCell(e,r,n,i,o,a){this.boxCells[o].push(a)}queryHitTest(e,r,n,i,o,a){if(n<0||e>this.width||i<0||r>this.height)return o?!1:[];const s=[];if(e<=0&&r<=0&&this.width<=n&&this.height<=i){if(o)return!0;for(let l=0;l<this.boxKeys.length;l++)s.push({key:this.boxKeys[l],x1:this.bboxes[l*4],y1:this.bboxes[l*4+1],x2:this.bboxes[l*4+2],y2:this.bboxes[l*4+3]});return a?s.filter(a):s}const u={hitTest:o,seenUids:{box:{},circle:{}}};return this.forEachCell(e,r,n,i,this.queryCell,s,u,a),o?s.length>0:s}queryCell(e,r,n,i,o,a,s,u){const l=s.seenUids,f=this.boxCells[o];if(f!==null){const c=this.bboxes;for(const h of f)if(!l.box[h]){l.box[h]=!0;const _=h*4;if(e<=c[_+2]&&r<=c[_+3]&&n>=c[_+0]&&i>=c[_+1]&&(!u||u(this.boxKeys[h]))){if(s.hitTest)return a.push(!0),!0;a.push({key:this.boxKeys[h],x1:c[_],y1:c[_+1],x2:c[_+2],y2:c[_+3]})}}}return!1}forEachCell(e,r,n,i,o,a,s,u){const l=this.convertToXCellCoord(e),f=this.convertToYCellCoord(r),c=this.convertToXCellCoord(n),h=this.convertToYCellCoord(i);for(let _=l;_<=c;_++)for(let m=f;m<=h;m++){const E=this.xCellCount*m+_;if(o.call(this,e,r,n,i,E,a,s,u))return}}convertToXCellCoord(e){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(e*this.xScale)))}convertToYCellCoord(e){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(e*this.yScale)))}}class HI{constructor(e,r){v(this,"width",void 0),v(this,"height",void 0),v(this,"grid",void 0),v(this,"viewportPadding",100),v(this,"screenRightBoundary",void 0),v(this,"screenBottomBoundary",void 0),v(this,"gridRightBoundary",void 0),v(this,"gridBottomBoundary",void 0),this.width=e,this.height=r,this.viewportPadding=Math.max(e,r),this.grid=new WI(e+this.viewportPadding,r+this.viewportPadding,25),this.screenRightBoundary=e+this.viewportPadding,this.screenBottomBoundary=r+this.viewportPadding,this.gridRightBoundary=e+2*this.viewportPadding,this.gridBottomBoundary=r+2*this.viewportPadding}placeCollisionBox(e){const r=e.x1+e.anchorPointX+this.viewportPadding,n=e.y1+e.anchorPointY+this.viewportPadding,i=e.x2+e.anchorPointX+this.viewportPadding,o=e.y2+e.anchorPointY+this.viewportPadding;return!this.isInsideGrid(r,n,i,o)||this.grid.hitTest(r,n,i,o)?{box:[]}:{box:[r,n,i,o]}}insertCollisionBox(e,r){const n={featureIndex:r};this.grid.insert(n,e[0],e[1],e[2],e[3])}project(e,r,n){const i=bA(r,n,0,1),o=CA(),a=OA(...e);return IA(o,i,a),{x:(o[0]/o[3]+1)/2*this.width+this.viewportPadding,y:(-o[1]/o[3]+1)/2*this.height+this.viewportPadding}}isInsideGrid(e,r,n,i){return n>=0&&e<this.gridRightBoundary&&i>=0&&r<this.gridBottomBoundary}}function lg(t){let e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;break;default:e=.5}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;break;default:r=.5}return{horizontalAlign:e,verticalAlign:r}}function cg(t,e,r,n,i,o,a){const s=(e-r)*i,u=(-n*a+.5)*o;for(const l of t)l.x+=s,l.y+=u}function XI(t,e,r,n,i,o,a){let u=0,l=-8,f=0;const c=t.positionedGlyphs,h=0,_=c.length;r.forEach(M=>{if(M.split("").forEach(P=>{const F=e[P];F&&(c.push({glyph:P,x:u,y:l+0,vertical:!1,scale:1,metrics:F}),u+=F.advance+a)}),c.length!==_){const P=u-a;f=Math.max(P,f),c.length-1}u=0,l-=n+5});const{horizontalAlign:m,verticalAlign:E}=lg(i);cg(c,h,m,E,f,n,r.length);const S=l- -8;t.top+=-E*S,t.bottom=t.top-S,t.left+=-m*f,t.right=t.left+f}function jI(t,e,r,n,i,o,a){let u=0,l=-8,f=0;const c=t.positionedGlyphs,h=0,_=c.length;r.forEach(M=>{const P=e[M];if(P&&(c.push({glyph:M,x:P.advance/2,y:l+0,vertical:!1,scale:1,metrics:P}),u+=P.advance+a),c.length!==_){const V=u-a;f=Math.max(V,f),c.length-1}u=0,l-=n+5});const{horizontalAlign:m,verticalAlign:E}=lg(i);cg(c,h,m,E,f,n,r.length);const S=l- -8;t.top+=-E*S,t.bottom=t.top-S,t.left+=-m*f,t.right=t.left+f}function GI(t,e,r,n,i,o,a=[0,0],s){const u=t.split(`
`),l=[],f={positionedGlyphs:l,top:a[1],bottom:a[1],left:a[0],right:a[0],lineCount:u.length,text:t};return s?jI(f,e,u,r,n,i,o):XI(f,e,u,r,n,i,o),l.length?f:!1}function $I(t,e=[0,0],r){const{positionedGlyphs:n=[]}=t,i=[];for(const o of n){const a=o.metrics,s=4,u=a.advance*o.scale/2,l=[0,0],f=[o.x+u+e[0],o.y+e[1]],c=(0-s)*o.scale-u+f[0],h=(0-s)*o.scale+f[1],_=c+a.width*o.scale,m=h+a.height*o.scale,E={x:c,y:h},S={x:_,y:h},M={x:c,y:m},P={x:_,y:m};i.push({tl:E,tr:S,bl:M,br:P,tex:a,glyphOffset:l})}return i}const nm=`#define SDF_PX 8.0
#define EDGE_GAMMA 0.105
#define FONT_SIZE 48.0

uniform sampler2D u_sdf_map;
layout(std140) uniform commonUniforms {
  vec4 u_stroke_color : [0.0, 0.0, 0.0, 0.0];
  vec2 u_sdf_map_size;
  float u_raisingHeight: 0.0;
  float u_stroke_width : 2;
  float u_gamma_scale : 0.5;
  float u_halo_blur : 0.5;
};

in vec2 v_uv;
in float v_gamma_scale;
in vec4 v_color;
in vec4 v_stroke_color;
in float v_fontScale;

out vec4 outputColor;

#pragma include "picking"
void main() {
  // get style data mapping

  // get sdf from atlas
  float dist = texture(SAMPLER_2D(u_sdf_map), v_uv).a;

  lowp float buff = (6.0 - u_stroke_width / v_fontScale) / SDF_PX;
  highp float gamma = (u_halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (v_fontScale * u_gamma_scale) / 1.0;

  highp float gamma_scaled = gamma * v_gamma_scale;

  highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist);

  outputColor = mix(v_color, v_stroke_color, smoothstep(0., 0.5, 1.- dist));

  outputColor.a *= alpha;
   // 作为 mask 模板时需要丢弃透明的像素
  if (outputColor.a < 0.01) {
    discard;
  }
  outputColor = filterColor(outputColor);
}
`,im=`#define SDF_PX 8.0
#define EDGE_GAMMA 0.105
#define FONT_SIZE 24.0

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_TEXT_OFFSETS) in vec2 a_textOffsets;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_tex;

layout(std140) uniform commonUniforms {
  vec4 u_stroke_color : [0.0, 0.0, 0.0, 0.0];
  vec2 u_sdf_map_size;
  float u_raisingHeight: 0.0;
  float u_stroke_width : 2;
  float u_gamma_scale : 0.5;
  float u_halo_blur : 0.5;
};

out vec2 v_uv;
out float v_gamma_scale;
out vec4 v_color;
out vec4 v_stroke_color;
out float v_fontScale;

#pragma include "projection"
#pragma include "picking"
#pragma include "rotation_2d"

void main() {
  // cal style mapping - 数据纹理映射部分的计算

  v_uv = a_tex / u_sdf_map_size;



  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  v_stroke_color = vec4(u_stroke_color.xyz, u_stroke_color.w * opacity);

  // 文本缩放比例
  float fontScale = a_Size / FONT_SIZE;
  v_fontScale = fontScale;

  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  // vec4 projected_position  = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  vec2 offset = rotate_matrix(a_textOffsets,rotation);

  // gl_Position = vec4(projected_position.xy / projected_position.w + rotation_matrix * a_textOffsets * fontScale / u_ViewportSize * 2.0 * u_DevicePixelRatio, 0.0, 1.0);

  float raiseHeight = u_raisingHeight;
  if(u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    raiseHeight = u_raisingHeight * mapboxZoomScale;
  }

  vec4 projected_position = project_common_position_to_clipspace(vec4(project_pos.xyz + vec3(0.0, 0.0, raiseHeight), 1.0));

  gl_Position = vec4(
    projected_position.xy / projected_position.w + offset * fontScale / u_ViewportSize * 2.0 * u_DevicePixelRatio, 0.0, 1.0);
  v_gamma_scale = gl_Position.w;
  setPickingColor(a_PickingColor);

}
`,{isEqual:sa}=Mr;function om(t){const e=this,r=t.id,n=[],i=[];if(!e.glyphInfoMap||!e.glyphInfoMap[r])return{vertices:[],indices:[],size:7};const o=e.glyphInfoMap[r].centroid,a=o.length===2?[o[0],o[1],0]:o;return e.glyphInfoMap[r].glyphQuads.forEach((s,u)=>{n.push(...a,s.tex.x,s.tex.y+s.tex.height,s.tl.x,s.tl.y,...a,s.tex.x+s.tex.width,s.tex.y+s.tex.height,s.tr.x,s.tr.y,...a,s.tex.x+s.tex.width,s.tex.y,s.br.x,s.br.y,...a,s.tex.x,s.tex.y,s.bl.x,s.bl.y),i.push(0+u*4,1+u*4,2+u*4,2+u*4,3+u*4,0+u*4)}),{vertices:n,indices:i,size:7}}class fg extends Et{constructor(...e){var r;super(...e),r=this,v(this,"glyphInfo",void 0),v(this,"glyphInfoMap",{}),v(this,"rawEncodeData",void 0),v(this,"texture",void 0),v(this,"currentZoom",-1),v(this,"extent",void 0),v(this,"textureHeight",0),v(this,"textCount",0),v(this,"preTextStyle",{}),v(this,"mapping",ee(function*(){r.initGlyph(),r.updateTexture(),yield r.reBuildModel()}))}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,TEXT_OFFSETS:10,UV:11})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le(le({},e.uniformsOption),r.uniformsOption),{u_sdf_map:this.textures[0]})}getCommonUniformsInfo(){const{stroke:e="#fff",strokeWidth:r=0,halo:n=.5,gamma:i=2,raisingHeight:o=0}=this.layer.getLayerConfig(),a=this.getFontServiceMapping(),s=this.getFontServiceCanvas();a&&Object.keys(a).length!==this.textCount&&s&&(this.updateTexture(),this.textCount=Object.keys(a).length),this.preTextStyle=this.getTextStyle();const u={u_stroke_color:Ft(e),u_sdf_map_size:[s?.width||1,s?.height||1],u_raisingHeight:Number(o),u_stroke_width:r,u_gamma_scale:i,u_halo_blur:n};return this.getUniformsBufferInfo(u)}initModels(){var e=this;return ee(function*(){return e.bindEvent(),e.extent=e.textExtent(),e.rawEncodeData=e.layer.getEncodedData(),e.preTextStyle=e.getTextStyle(),e.initUniformsBuffer(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{textAllowOverlap:r=!1}=e.layer.getLayerConfig();return e.initGlyph(),e.updateTexture(),r||e.filterGlyphs(),[yield e.layer.buildLayerModel({moduleName:"pointText",vertexShader:im,fragmentShader:nm,defines:e.getDefines(),inject:e.getInject(),triangulation:om.bind(e),depth:{enable:!1}})]})()}needUpdate(){var e=this;return ee(function*(){const{textAllowOverlap:r=!1,textAnchor:n="center",textOffset:i,padding:o,fontFamily:a,fontWeight:s}=e.getTextStyle();if(!sa(o,e.preTextStyle.padding)||!sa(i,e.preTextStyle.textOffset)||!sa(n,e.preTextStyle.textAnchor)||!sa(a,e.preTextStyle.fontFamily)||!sa(s,e.preTextStyle.fontWeight))return yield e.mapping(),!0;if(r)return!1;const u=e.mapService.getZoom(),l=e.mapService.getBounds(),f=lv(e.extent,l);return Math.abs(e.currentZoom-u)>.5||!f||r!==e.preTextStyle.textAllowOverlap?(yield e.reBuildModel(),!0):!1})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.layer.off("remapping",this.mapping)}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"textOffsets",type:Be.Attribute,descriptor:{shaderLocation:this.attributeLocation.TEXT_OFFSETS,name:"a_textOffsets",buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[5],n[6]]}}),this.styleAttributeService.registerStyleAttribute({name:"textUv",type:Be.Attribute,descriptor:{name:"a_tex",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=12}=e;return Array.isArray(r)?[r[0]]:[r]}}})}bindEvent(){this.layer.isTileLayer||this.layer.on("remapping",this.mapping)}textExtent(){const e=this.mapService.getBounds();return Js(e,.5)}initTextFont(){const{fontWeight:e,fontFamily:r}=this.getTextStyle(),n=this.rawEncodeData,i=[];n.forEach(o=>{let{shape:a=""}=o;a=a.toString();for(const s of a)i.indexOf(s)===-1&&i.push(s)}),this.fontService.setFontOptions({characterSet:i,fontWeight:e,fontFamily:r,iconfont:!1})}initIconFontTex(){const{fontWeight:e,fontFamily:r}=this.getTextStyle(),n=this.rawEncodeData,i=[];n.forEach(o=>{let{shape:a=""}=o;a=`${a}`,i.indexOf(a)===-1&&i.push(a)}),this.fontService.setFontOptions({characterSet:i,fontWeight:e,fontFamily:r,iconfont:!0})}getTextStyle(){const{fontWeight:e="400",fontFamily:r="sans-serif",textAllowOverlap:n=!1,padding:i=[0,0],textAnchor:o="center",textOffset:a=[0,0],opacity:s=1,strokeOpacity:u=1,strokeWidth:l=0,stroke:f="#000"}=this.layer.getLayerConfig();return{fontWeight:e,fontFamily:r,textAllowOverlap:n,padding:i,textAnchor:o,textOffset:a,opacity:s,strokeOpacity:u,strokeWidth:l,stroke:f}}generateGlyphLayout(e){const r=this.getFontServiceMapping(),{spacing:n=2,textAnchor:i="center",textOffset:o}=this.layer.getLayerConfig(),a=this.rawEncodeData;this.glyphInfo=a.map(s=>{const{shape:u="",id:l,size:f=1}=s,c=s.textOffset?s.textOffset:o||[0,0],h=s.textAnchor?s.textAnchor:i||"center",_=GI(u.toString(),r,f,h,"left",n,c,e),m=$I(_,c);return s.shaping=_,s.glyphQuads=m,s.centroid=vi(s.coordinates),this.glyphInfoMap[l]={shaping:_,glyphQuads:m,centroid:vi(s.coordinates)},s})}getFontServiceMapping(){const{fontWeight:e="400",fontFamily:r="sans-serif"}=this.layer.getLayerConfig();return this.fontService.getMappingByKey(`${r}_${e}`)}getFontServiceCanvas(){const{fontWeight:e="400",fontFamily:r="sans-serif"}=this.layer.getLayerConfig();return this.fontService.getCanvasByKey(`${r}_${e}`)}filterGlyphs(){const{padding:e=[0,0],textAllowOverlap:r=!1}=this.layer.getLayerConfig();if(r)return;this.glyphInfoMap={},this.currentZoom=this.mapService.getZoom(),this.extent=this.textExtent();const{width:n,height:i}=this.rendererService.getViewportSize(),o=new HI(n,i);this.glyphInfo.filter(s=>{const{shaping:u,id:l=0}=s,f=s.centroid,h=s.size/16,_=this.mapService.lngLatToContainer(f),{box:m}=o.placeCollisionBox({x1:u.left*h-e[0],x2:u.right*h+e[0],y1:u.top*h-e[1],y2:u.bottom*h+e[1],anchorPointX:_.x,anchorPointY:_.y});return m&&m.length?(o.insertCollisionBox(m,l),!0):!1}).forEach(s=>{this.glyphInfoMap[s.id]=s})}initGlyph(){const{iconfont:e=!1}=this.layer.getLayerConfig();e?this.initIconFontTex():this.initTextFont(),this.generateGlyphLayout(e)}updateTexture(){const{createTexture2D:e}=this.rendererService,r=this.getFontServiceCanvas();this.textureHeight=r.height,this.texture&&this.texture.destroy(),this.texture=e({data:r,mag:p.LINEAR,min:p.LINEAR,width:r.width,height:r.height}),this.textures=[this.texture]}reBuildModel(){var e=this;return ee(function*(){e.filterGlyphs();const r=yield e.layer.buildLayerModel({moduleName:"pointText",vertexShader:im,fragmentShader:nm,triangulation:om.bind(e),defines:e.getDefines(),inject:e.getInject(),depth:{enable:!1}});e.layer.models=[r]})()}}const YI={fillImage:LI,fill:ag,radar:VI,image:sg,normal:ug,simplePoint:yI,extrude:og,text:fg,earthFill:CI,earthExtrude:xI};class Uc extends $r{constructor(...e){super(...e),v(this,"type","PointLayer"),v(this,"enableShaderEncodeStyles",["stroke","offsets","opacity","rotation"]),v(this,"enableDataEncodeStyles",["textOffset","textAnchor"]),v(this,"defaultSourceConfig",{data:[],options:{parser:{type:"json",x:"lng",y:"lat"}}})}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel&&e.layerModel.clearModels(),e.layerModel=new YI[r](e),yield e.initLayerModels()})()}rebuildModels(){var e=this;return ee(function*(){yield e.buildModels()})()}getModelTypeWillEmptyData(){if(this.shapeOption){const{field:e,values:r}=this.shapeOption,{shape2d:n}=this.getLayerConfig(),i=this.iconService.getIconMap();if(e&&n?.indexOf(e)!==-1)return"fill";if(r==="text")return"text";if(r&&r instanceof Array){for(const o of r)if(typeof o=="string"&&i.hasOwnProperty(o))return"image"}}return"normal"}getDefaultConfig(){const e=this.getModelType();return{fillImage:{},normal:{blend:"additive"},radar:{},simplePoint:{},fill:{blend:"normal"},extrude:{},image:{},text:{blend:"normal"},tile:{},tileText:{},earthFill:{},earthExtrude:{}}[e]}getModelType(){const e=this.getEncodedData(),{shape2d:r,shape3d:n,billboard:i=!0}=this.getLayerConfig(),o=this.iconService.getIconMap(),a=e.find(s=>s.hasOwnProperty("shape"));if(a){const s=a.shape;return s==="dot"?"normal":s==="simple"?"simplePoint":s==="radar"?"radar":this.layerType==="fillImage"||i===!1?"fillImage":r?.indexOf(s)!==-1?this.mapService.version==="GLOBEL"?"earthFill":"fill":n?.indexOf(s)!==-1?this.mapService.version==="GLOBEL"?"earthExtrude":"extrude":o.hasOwnProperty(s)?"image":"text"}else return this.getModelTypeWillEmptyData()}}function ZI(t){return kc.apply(this,arguments)}function kc(){return kc=ee(function*(t){if(window.createImageBitmap){const e=yield fetch(t);return yield createImageBitmap(yield e.blob())}else{const e=new window.Image;return new Promise(r=>{e.onload=()=>r(e),e.src=t,e.crossOrigin="Anonymous"})}}),kc.apply(this,arguments)}const KI=`layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  // top face
  if (u_topsurface < 1.0) {
    discard;
  }

  outputColor = v_Color;

  outputColor = filterColor(outputColor);
}
`,qI=`layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
in vec3 v_uvs;
in vec2 v_texture_data;
out vec4 outputColor;

#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  float isSide = v_texture_data.x;
  float sidey = v_uvs[2];
  float lightWeight = v_texture_data.y;

  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {
    // side face
    if (u_sidesurface < 1.0) {
      discard;
    }

    if (u_linearColor == 1.0) {
      // side use linear
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      outputColor = linearColor;
    } else {
      // side notuse linear
      outputColor = v_Color;
    }
  } else {
    // top face
    if (u_topsurface < 1.0) {
      discard;
    }
    outputColor = v_Color;
  }

  outputColor = filterColorAlpha(outputColor, lightWeight);
}
`,QI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;
out vec3 v_uvs;
out vec2 v_texture_data;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  v_uvs = a_uvs;
  // cal style mapping - 数据纹理映射部分的计算
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  vec4 project_pos = project_position(pos, a_Position64Low);

  if (u_heightfixed > 0.0) {
    // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;
    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
  float lightWeight = calc_lighting(project_pos);
  v_texture_data = vec2(a_Position.z, lightWeight);

  v_Color = vec4(a_Color.rgb * lightWeight, a_Color.w * opacity);

  setPickingColor(a_PickingColor);
}
`,JI=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  float isSide = a_Position.z;
  float topU = a_uvs[0];
  float topV = 1.0 - a_uvs[1];
  float sidey = a_uvs[2];

  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);

  vec4 project_pos = project_position(pos, a_Position64Low);
  float lightWeight = calc_lighting(project_pos);

  if (u_heightfixed > 0.0) {
    // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;

    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

 gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {
    // side face
    // if(u_sidesurface < 1.0) {
    //   discard;
    // }

    if (u_linearColor == 1.0) {
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      v_Color = linearColor;
    } else {
      v_Color = a_Color;
    }

  } else {
    v_Color = a_Color;
  }

  v_Color = vec4(v_Color.rgb * lightWeight, v_Color.w * opacity);

  setPickingColor(a_PickingColor);
}
`,eM=`uniform sampler2D u_texture;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

in vec4 v_Color;
in vec3 v_uvs;
in vec2 v_texture_data;

#pragma include "scene_uniforms"
#pragma include "picking"

out vec4 outputColor;

void main() {
  float opacity = u_opacity;
  float isSide = v_texture_data.x;
  float lightWeight = v_texture_data.y;
  float topU = v_uvs[0];
  float topV = 1.0 - v_uvs[1];
  float sidey = v_uvs[2];

  outputColor = texture(SAMPLER_2D(u_texture), vec2(topU, topV));
  // Tip: 部分机型 GPU 计算精度兼容
  if (isSide < 0.999) {
    // 是否是边缘
    // side face
    if (u_sidesurface < 1.0) {
      discard;
    }

    if (u_linearColor == 1.0) {
      vec4 linearColor = mix(u_targetColor, u_sourceColor, sidey);
      linearColor.rgb *= lightWeight;
      outputColor = linearColor;
    } else {
      outputColor = v_Color;
    }
  } else {
    // top face
    if (u_topsurface < 1.0) {
      discard;
    }
  }

  outputColor.a *= opacity;
  outputColor = filterColor(outputColor);
}
`,tM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec3 a_uvs;

layout(std140) uniform commonUniforms {
  vec4 u_sourceColor;
  vec4 u_targetColor;
  float u_linearColor;
  float u_topsurface;
  float u_sidesurface;
  float u_heightfixed; // 默认不固定
  float u_raisingHeight;
};

out vec4 v_Color;
out vec3 v_uvs;
out vec2 v_texture_data;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size, 1.0);
  vec4 project_pos = project_position(pos, a_Position64Low);
  float lightWeight = calc_lighting(project_pos);
  v_uvs = a_uvs;
  v_Color = a_Color;
  v_Color.a *= opacity;

  v_texture_data = vec2(a_Position.z, lightWeight);

  if (u_heightfixed > 0.0) {
    // 判断几何体是否固定高度
    project_pos.z = a_Position.z * a_Size;
    project_pos.z += u_raisingHeight;

    if (
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
    ) {
      float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
      project_pos.z *= mapboxZoomScale;
      project_pos.z += u_raisingHeight * mapboxZoomScale;
    }
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}
`;class rM extends Et{constructor(...e){super(...e),v(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:10,UV:11})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{mapTexture:e,heightfixed:r=!1,raisingHeight:n=0,topsurface:i=!0,sidesurface:o=!0,sourceColor:a,targetColor:s}=this.layer.getLayerConfig();let u=0,l=[1,1,1,1],f=[1,1,1,1];a&&s&&(l=Ft(a),f=Ft(s),u=1);const c={u_sourceColor:l,u_targetColor:f,u_linearColor:u,u_topsurface:Number(i),u_sidesurface:Number(o),u_heightfixed:Number(r),u_raisingHeight:Number(n)};return e&&this.texture&&(c.u_texture=this.texture,this.textures=[this.texture]),this.getUniformsBufferInfo(c)}initModels(){var e=this;return ee(function*(){return yield e.loadTexture(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{frag:r,vert:n,type:i}=e.getShaders();return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:i,vertexShader:n,fragmentShader:r,depth:{enable:!0},defines:e.getDefines(),inject:e.getInject(),triangulation:mf})]})()}getShaders(){const{pickLight:e,mapTexture:r}=this.layer.getLayerConfig();return r?{frag:eM,vert:tM,type:"polygonExtrudeTexture"}:e?{frag:qI,vert:QI,type:"polygonExtrudePickLight"}:{frag:KI,vert:JI,type:"polygonExtrude"}}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy(),this.textures=[]}registerBuiltinAttributes(){const e=this.layer.getSource().extent,r=e[2]-e[0],n=e[3]-e[1];this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uvs",type:Be.Attribute,descriptor:{name:"a_uvs",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(i,o,a)=>{const s=a[0],u=a[1];return[(s-e[0])/r,(u-e[1])/n,a[4]]}}}),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(i,o,a,s,u)=>u}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:i=>{const{size:o=10}=i;return Array.isArray(o)?[o[0]]:[o]}}})}loadTexture(){var e=this;return ee(function*(){const{mapTexture:r}=e.layer.getLayerConfig(),{createTexture2D:n}=e.rendererService;if(e.texture=n({height:1,width:1}),r){const i=yield ZI(r);e.texture=n({data:i,width:i.width,height:i.height,wrapS:p.CLAMP_TO_EDGE,wrapT:p.CLAMP_TO_EDGE,min:p.LINEAR,mag:p.LINEAR})}})()}}const nM=`in vec4 v_Color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_Color;
  outputColor = filterColor(outputColor);
}
`,iM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_SIZE) in float a_Size;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;

out vec4 v_Color;

#pragma include "projection"
#pragma include "light"
#pragma include "picking"

void main() {
  vec4 pos = vec4(a_Position.xy, a_Position.z * a_Size + (1.0 - a_Position.z) * extrusionBase, 1.0);

  vec4 project_pos = project_position(pos, a_Position64Low);
  float lightWeight = calc_lighting(project_pos);
  v_Color = a_Color;
  v_Color = vec4(v_Color.rgb * lightWeight, v_Color.w * opacity);

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}
`;class oM extends Et{constructor(...e){super(...e),v(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,SIZE:9,NORMAL:10,EXTRUSION_BASE:11})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const e={};return this.getUniformsBufferInfo(e)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{frag:r,vert:n,type:i}=e.getShaders();return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:i,vertexShader:n,fragmentShader:r,defines:e.getDefines(),inject:e.getInject(),triangulation:mf,depth:{enable:!0}})]})()}getShaders(){return{frag:nM,vert:iM,type:"polygonExtrude"}}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"size",type:Be.Attribute,descriptor:{name:"a_Size",shaderLocation:this.attributeLocation.SIZE,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{size:r=10}=e;return Array.isArray(r)?[r[0]]:[r]}}}),this.styleAttributeService.registerStyleAttribute({name:"extrusionBase",type:Be.Attribute,descriptor:{name:"a_ExtrusionBase",shaderLocation:this.attributeLocation.EXTRUSION_BASE,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:1,update:e=>{const{extrusionBase:r=0}=e;return[r]}}})}}const aM=`in vec4 v_color;
#pragma include "scene_uniforms"
#pragma include "picking"
out vec4 outputColor;
void main() {
  outputColor = v_color;
  outputColor = filterColor(outputColor);
}
`,sM=`layout(std140) uniform commonUniforms {
  float u_raisingHeight;
  float u_opacitylinear;
  float u_dir;
};

in vec4 v_color;
in vec3 v_linear;
in vec2 v_pos;
out vec4 outputColor;
#pragma include "scene_uniforms"
#pragma include "picking"

void main() {
  outputColor = v_color;
  if (u_opacitylinear > 0.0) {
    outputColor.a *=
      u_dir == 1.0
        ? 1.0 - length(v_pos - v_linear.xy) / v_linear.z
        : length(v_pos - v_linear.xy) / v_linear.z;
  }
  outputColor = filterColor(outputColor);
}
`,uM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_LINEAR) in vec3 a_linear;

layout(std140) uniform commonUniforms {
  float u_raisingHeight;
  float u_opacitylinear;
  float u_dir;
};

out vec4 v_color;
out vec3 v_linear;
out vec2 v_pos;

#pragma include "projection"
#pragma include "picking"

void main() {
  if (u_opacitylinear > 0.0) {
    v_linear = a_linear;
    v_pos = a_Position.xy;
  }
  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  project_pos.z += u_raisingHeight;

  if (u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT || u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET) {
    float mapboxZoomScale = 4.0/pow(2.0, 21.0 - u_Zoom);
    project_pos.z *= mapboxZoomScale;
    project_pos.z += u_raisingHeight * mapboxZoomScale;
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
  setPickingColor(a_PickingColor);
}
`,lM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;

layout(std140) uniform commonUniforms {
  float u_raisingHeight;
};

out vec4 v_color;

#pragma include "projection"
#pragma include "picking"

void main() {
  // cal style mapping - 数据纹理映射部分的计算

  v_color = vec4(a_Color.xyz, a_Color.w * opacity);
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);

  project_pos.z += u_raisingHeight;

  if (
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    u_CoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSET
  ) {
    float mapboxZoomScale = 4.0 / pow(2.0, 21.0 - u_Zoom);
    project_pos.z *= mapboxZoomScale;
    project_pos.z += u_raisingHeight * mapboxZoomScale;
  }

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));

  setPickingColor(a_PickingColor);
}

`;class cM extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,LINEAR:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{raisingHeight:e=0,opacityLinear:r={enable:!1,dir:"in"}}=this.layer.getLayerConfig(),n={u_raisingHeight:Number(e),u_opacitylinear:Number(r.enable),u_dir:r.dir==="in"?1:0};return this.getUniformsBufferInfo(n)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){const{frag:r,vert:n,triangulation:i,type:o}=e.getModelParams();return e.initUniformsBuffer(),e.layer.triangulation=i,[yield e.layer.buildLayerModel({moduleName:o,vertexShader:n,fragmentShader:r,defines:e.getDefines(),inject:e.getInject(),triangulation:i,primitive:p.TRIANGLES,depth:{enable:!1}})]})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute();const{opacityLinear:e={enable:!1,dir:"in"}}=this.layer.getLayerConfig();e.enable&&this.styleAttributeService.registerStyleAttribute({name:"linear",type:Be.Attribute,descriptor:{name:"a_linear",shaderLocation:this.attributeLocation.LINEAR,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(r,n,i)=>[i[3],i[4],i[5]]}})}getModelParams(){const{opacityLinear:e={enable:!1}}=this.layer.getLayerConfig();return e.enable?{frag:sM,vert:uM,type:"polygonLinear",triangulation:Q2}:{frag:aM,vert:lM,type:"polygonFill",triangulation:ka}}}const fM=`layout(std140) uniform commonUniforms {
  vec4 u_watercolor;
  vec4 u_watercolor2;
  float u_time;
};

in vec2 v_uv;
in float v_opacity;
out vec4 outputColor;

float coast2water_fadedepth = 0.1;
float large_waveheight = 0.75; // change to adjust the "heavy" waves
float large_wavesize = 3.4; // factor to adjust the large wave size
float small_waveheight = 0.6; // change to adjust the small random waves
float small_wavesize = 0.5; // factor to ajust the small wave size
float water_softlight_fact = 15.0; // range [1..200] (should be << smaller than glossy-fact)
float water_glossylight_fact = 120.0; // range [1..200]
float particle_amount = 70.0;

vec3 water_specularcolor = vec3(1.3, 1.3, 0.9); // specular Color (RGB) of the water-highlights
#define light (vec3(-0.0, sin(u_time * 0.5) * 0.5 + 0.35, 2.8)) // position of the sun

uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform sampler2D u_texture3;

float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

// 2d noise function
float noise1(vec2 x) {
  vec2 p = floor(x);
  vec2 f = smoothstep(0.0, 1.0, fract(x));
  float n = p.x + p.y * 57.0;
  return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
}

float noise(vec2 p) {
  return texture(SAMPLER_2D(u_texture2), p * vec2(1.0 / 256.0)).x;
}

vec4 highness(vec2 p) {
  vec4 t = texture(SAMPLER_2D(u_texture1), fract(p));
  float clipped =
    -2.0 -
    smoothstep(3.0, 10.0, t.a) * 6.9 -
    smoothstep(10.0, 100.0, t.a) * 89.9 -
    smoothstep(0.0, 10000.0, t.a) * 10000.0;
  return clamp(t, 0.0, 3.0) + clamp(t / 3.0 - 1.0, 0.0, 1.0) + clamp(t / 16.0 - 1.0, 0.0, 1.0);
}

float height_map(vec2 p) {
  vec4 height = highness(p);
  /*
    height = -0.5+
        0.5*smoothstep(-100.,0.,-height)+
        2.75*smoothstep(0.,2.,height)+
        1.75*smoothstep(2.,4.,height)+
        2.75*smoothstep(4.,16.,height)+
        1.5*smoothstep(16.,1000.,height);
    */

  mat2 m = mat2(0.9563 * 1.4, -0.2924 * 1.4, 0.2924 * 1.4, 0.9563 * 1.4);
  //p = p*6.;
  float f = 0.6 * noise1(p);
  p = m * p * 1.1 * 6.0;
  f += 0.25 * noise(p);
  p = m * p * 1.32;
  f += 0.1666 * noise(p);
  p = m * p * 1.11;
  f += 0.0834 * noise(p);
  p = m * p * 1.12;
  f += 0.0634 * noise(p);
  p = m * p * 1.13;
  f += 0.0444 * noise(p);
  p = m * p * 1.14;
  f += 0.0274 * noise(p);
  p = m * p * 1.15;
  f += 0.0134 * noise(p);
  p = m * p * 1.16;
  f += 0.0104 * noise(p);
  p = m * p * 1.17;
  f += 0.0084 * noise(p);
  f = 0.25 * f + dot(height, vec4(-0.03125, -0.125, 0.25, 0.25)) * 0.5;
  const float FLAT_LEVEL = 0.92525;
  //f = f*0.25+height*0.75;
  if (f < FLAT_LEVEL) f = f;
  else f = pow((f - FLAT_LEVEL) / (1.0 - FLAT_LEVEL), 2.0) * (1.0 - FLAT_LEVEL) * 2.0 + FLAT_LEVEL; // makes a smooth coast-increase
  return clamp(f, 0.0, 10.0);
}

vec3 plasma_quintic(float x) {
  x = clamp(x, 0.0, 1.0);
  vec4 x1 = vec4(1.0, x, x * x, x * x * x); // 1 x x2 x3
  vec4 x2 = x1 * x1.w * x; // x4 x5 x6 x7
  return vec3(
    dot(x1.xyzw, vec4(+0.063861086, +1.992659096, -1.023901152, -0.490832805)) +
      dot(x2.xy, vec2(+1.308442123, -0.914547012)),
    dot(x1.xyzw, vec4(+0.04971859, -0.791144343, +2.892305078, +0.811726816)) +
      dot(x2.xy, vec2(-4.686502417, +2.717794514)),
    dot(x1.xyzw, vec4(+0.513275779, +1.58025506, -5.164414457, +4.559573646)) +
      dot(x2.xy, vec2(-1.916810682, +0.570638854))
  );
}

vec4 color(vec2 p) {
  vec4 c1 = vec4(1.7, 1.6, 0.9, 1);
  vec4 c2 = vec4(0.2, 0.94, 0.1, 1);
  vec4 c3 = vec4(0.3, 0.2, 0.0, 1);
  vec4 c4 = vec4(0.99, 0.99, 1.6, 1);
  vec4 v = highness(p);
  float los = smoothstep(0.1, 1.1, v.b);
  float his = smoothstep(3.5, 6.5, v.b);
  float ces = smoothstep(1.0, 5.0, v.a);
  vec4 lo = mix(c1, c2, los);
  vec4 hi = mix(c3, c4, his);
  vec4 ce = mix(lo, hi, ces);

  return vec4(plasma_quintic(ces), 1).ragb;
}

vec3 terrain_map(vec2 p) {
  return color(p).rgb * 0.75 +
  0.25 * vec3(0.7, 0.55, 0.4) +
  texture(SAMPLER_2D(u_texture3), fract(p * 5.0)).rgb * 0.5; // test-terrain is simply 'sandstone'
}

const mat2 m = mat2(
   0.72, -1.6 ,
   1.6 ,  0.72
);

float water_map(vec2 p, float height) {
  vec2 p2 = p * large_wavesize;
  vec2 shift1 = 0.001 * vec2(u_time * 160.0 * 2.0, u_time * 120.0 * 2.0);
  vec2 shift2 = 0.001 * vec2(u_time * 190.0 * 2.0, -u_time * 130.0 * 2.0);

  // coarse crossing 'ocean' waves...
  float f = 0.6 * noise(p);
  f += 0.25 * noise(p * m);
  f += 0.1666 * noise(p * m * m);
  float wave =
    sin(p2.x * 0.622 + p2.y * 0.622 + shift2.x * 4.269) * large_waveheight * f * height * height;

  p *= small_wavesize;
  f = 0.0;
  float amp = 1.0,
    s = 0.5;
  for (int i = 0; i < 9; i++) {
    p = m * p * 0.947;
    f -= amp * abs(sin((noise(p + shift1 * s) - 0.5) * 2.0));
    amp = amp * 0.59;
    s *= -1.329;
  }

  return wave + f * small_waveheight;
}

float nautic(vec2 p) {
  p *= 18.0;
  float f = 0.0;
  float amp = 1.0,
    s = 0.5;
  for (int i = 0; i < 3; i++) {
    p = m * p * 1.2;
    f += amp * abs(smoothstep(0.0, 1.0, noise(p + u_time * s)) - 0.5);
    amp = amp * 0.5;
    s *= -1.227;
  }
  return pow(1.0 - f, 5.0);
}

float particles(vec2 p) {
  p *= 200.0;
  float f = 0.0;
  float amp = 1.0,
    s = 1.5;
  for (int i = 0; i < 3; i++) {
    p = m * p * 1.2;
    f += amp * noise(p + u_time * s);
    amp = amp * 0.5;
    s *= -1.227;
  }
  return pow(f * 0.35, 7.0) * particle_amount;
}

float test_shadow(vec2 xy, float height) {
  vec3 r0 = vec3(xy, height);
  vec3 rd = normalize(light - r0);

  float hit = 1.0;
  float t = 0.001;
  for (int j = 1; j < 25; j++) {
    vec3 p = r0 + t * rd;
    float h = height_map(p.xy);
    float height_diff = p.z - h;
    if (height_diff < 0.0) {
      return 0.0;
    }
    t += 0.01 + height_diff * 0.02;
    hit = min(hit, 2.0 * height_diff / t); // soft shaddow
  }
  return hit;
}

vec3 CalcTerrain(vec2 uv, float height) {
  vec3 col = terrain_map(uv);
  vec2 iResolution = vec2(512.0);
  float h1 = height_map(uv - vec2(0.0, 0.5) / iResolution.xy);
  float h2 = height_map(uv + vec2(0.0, 0.5) / iResolution.xy);
  float h3 = height_map(uv - vec2(0.5, 0.0) / iResolution.xy);
  float h4 = height_map(uv + vec2(0.5, 0.0) / iResolution.xy);
  vec3 norm = normalize(vec3(h3 - h4, h1 - h2, 1.0));
  vec3 r0 = vec3(uv, height);
  vec3 rd = normalize(light - r0);
  float grad = dot(norm, rd);
  col *= grad + pow(grad, 8.0);
  float terrainshade = test_shadow(uv, height);
  col = mix(col * 0.25, col, terrainshade);
  return col;
}

void main() {
  vec3 watercolor = u_watercolor.rgb;
  vec3 watercolor2 = u_watercolor2.rgb;
  vec2 uv = v_uv;
  float WATER_LEVEL = 0.84; // Water level (range: 0.0 - 2.0)
  float deepwater_fadedepth = 0.4 + coast2water_fadedepth;
  float height = height_map(uv);
  vec3 col;

  float waveheight = clamp(WATER_LEVEL * 3.0 - 1.5, 0.0, 1.0);
  float level = WATER_LEVEL + 0.2 * water_map(uv * 15.0 + vec2(u_time * 0.1), waveheight);
  if (height > level) {
    col = CalcTerrain(uv, height);
  }
  if (height <= level) {
    vec2 dif = vec2(0.0, 0.01);
    vec2 pos = uv * 15.0 + vec2(u_time * 0.01);
    float h1 = water_map(pos - dif, waveheight);
    float h2 = water_map(pos + dif, waveheight);
    float h3 = water_map(pos - dif.yx, waveheight);
    float h4 = water_map(pos + dif.yx, waveheight);
    vec3 normwater = normalize(vec3(h3 - h4, h1 - h2, 0.125)); // norm-vector of the 'bumpy' water-plane
    uv += normwater.xy * 0.002 * (level - height);

    col = CalcTerrain(uv, height);

    float coastfade = clamp((level - height) / coast2water_fadedepth, 0.0, 1.0);
    float coastfade2 = clamp((level - height) / deepwater_fadedepth, 0.0, 1.0);
    float intensity = col.r * 0.2126 + col.g * 0.7152 + col.b * 0.0722;
    watercolor = mix(watercolor * intensity, watercolor2, smoothstep(0.0, 1.0, coastfade2));

    vec3 r0 = vec3(uv, WATER_LEVEL);
    vec3 rd = normalize(light - r0); // ray-direction to the light from water-position
    float grad = dot(normwater, rd); // dot-product of norm-vector and light-direction
    float specular = pow(grad, water_softlight_fact); // used for soft highlights
    float specular2 = pow(grad, water_glossylight_fact); // used for glossy highlights
    float gradpos = dot(vec3(0.0, 0.0, 1.0), rd);
    float specular1 = smoothstep(0.0, 1.0, pow(gradpos, 5.0)); // used for diffusity (some darker corona around light's specular reflections...)
    float watershade = test_shadow(uv, level);
    watercolor *= 2.2 + watershade;
    watercolor += (0.2 + 0.8 * watershade) * ((grad - 1.0) * 0.5 + specular) * 0.25;
    watercolor /= 1.0 + specular1 * 1.25;
    watercolor += watershade * specular2 * water_specularcolor;
    watercolor +=
      watershade *
      coastfade *
      (1.0 - coastfade2) *
      (vec3(0.5, 0.6, 0.7) * nautic(uv) + vec3(1.0, 1.0, 1.0) * particles(uv));

    col = mix(col, watercolor, coastfade);
  }

  outputColor = vec4(col, v_opacity);
}
`,hM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_uv;

layout(std140) uniform commonUniforms {
  vec4 u_watercolor;
  vec4 u_watercolor2;
  float u_time;
};

out vec2 v_uv;
out float v_opacity;

#pragma include "projection"

void main() {
  v_uv = a_uv;
  v_opacity = opacity;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
}

`;class dM extends Et{constructor(...e){super(...e),v(this,"texture1",void 0),v(this,"texture2",void 0),v(this,"texture3",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{watercolor:e="#6D99A8",watercolor2:r="#0F121C"}=this.layer.getLayerConfig(),n={u_watercolor:Ft(e),u_watercolor2:Ft(r),u_time:this.layer.getLayerAnimateTime(),u_texture1:this.texture1,u_texture2:this.texture2,u_texture3:this.texture3};return this.textures=[this.texture1,this.texture2,this.texture3],this.getUniformsBufferInfo(n)}getAnimateUniforms(){return{u_time:this.layer.getLayerAnimateTime()}}initModels(){var e=this;return ee(function*(){return e.loadTexture(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"polygonOcean",vertexShader:hM,fragmentShader:fM,defines:e.getDefines(),inject:e.getInject(),triangulation:ka,primitive:p.TRIANGLES,depth:{enable:!1}})]})()}clearModels(){var e,r,n;(e=this.texture1)===null||e===void 0||e.destroy(),(r=this.texture2)===null||r===void 0||r.destroy(),(n=this.texture3)===null||n===void 0||n.destroy()}registerBuiltinAttributes(){const e=this.layer.getSource().extent,[r,n,i,o]=e,a=i-r,s=o-n;this.styleAttributeService.registerStyleAttribute({name:"oceanUv",type:Be.Attribute,descriptor:{name:"a_uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:2,update:(u,l,f)=>{const[c,h]=f;return[(c-r)/a,(h-n)/s]}}})}loadTexture(){const{createTexture2D:e}=this.rendererService,r={height:0,width:0};this.texture1=e(r),this.texture2=e(r),this.texture3=e(r),n(o=>{this.texture1=i(o[0]),this.texture2=i(o[1]),this.texture3=i(o[2]),this.layerService.reRender()});function n(o){let a=0;const s=[];["https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*MJ22QbpuCzIAAAAAAAAAAAAAARQnAQ","https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*-z2HSIVDsHIAAAAAAAAAAAAAARQnAQ"].map(l=>{const f=new Image;f.crossOrigin="",f.src=l,s.push(f),f.onload=()=>{a++,a===3&&o(s)}})}function i(o){return e({data:o,width:o.width,height:o.height,wrapS:p.MIRRORED_REPEAT,wrapT:p.MIRRORED_REPEAT,min:p.LINEAR,mag:p.LINEAR})}}}const pM=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
  float u_speed;
  float u_time;
};

out vec4 outputColor;

in vec4 v_Color;
in vec2 v_uv;

float rand(vec2 n) {
  return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float water(vec3 p) {
  float t = u_time * u_speed;
  p.z += t * 2.0;
  p.x += t * 2.0;
  vec3 c1 = texture(SAMPLER_2D(u_texture), p.xz / 30.0).xyz;
  p.z += t * 3.0;
  p.x += t * 0.52;
  vec3 c2 = texture(SAMPLER_2D(u_texture), p.xz / 30.0).xyz;
  p.z += t * 4.0;
  p.x += t * 0.8;
  vec3 c3 = texture(SAMPLER_2D(u_texture), p.xz / 30.0).xyz;
  c1 += c2 - c3;
  float z = (c1.x + c1.y + c1.z) / 3.0;
  return p.y + z / 4.0;
}

float map(vec3 p) {
  float d = 100.0;
  d = water(p);
  return d;
}

float intersect(vec3 ro, vec3 rd) {
  float d = 0.0;
  for (int i = 0; i <= 100; i++) {
    float h = map(ro + rd * d);
    if (h < 0.1) return d;
    d += h;
  }
  return 0.0;
}

vec3 norm(vec3 p) {
  float eps = 0.1;
  return normalize(
    vec3(
      map(p + vec3(eps, 0, 0)) - map(p + vec3(-eps, 0, 0)),
      map(p + vec3(0, eps, 0)) - map(p + vec3(0, -eps, 0)),
      map(p + vec3(0, 0, eps)) - map(p + vec3(0, 0, -eps))
    )
  );
}

float calSpc() {
  vec3 l1 = normalize(vec3(1, 1, 1));
  vec3 ro = vec3(-3, 20, -8);
  vec3 rc = vec3(0, 0, 0);
  vec3 ww = normalize(rc - ro);
  vec3 uu = normalize(cross(vec3(0, 1, 0), ww));
  vec3 vv = normalize(cross(rc - ro, uu));
  vec3 rd = normalize(uu * v_uv.x + vv * v_uv.y + ww);
  float d = intersect(ro, rd);
  vec3 p = ro + rd * d;
  vec3 n = norm(p);
  float spc = pow(max(0.0, dot(reflect(l1, n), rd)), 30.0);
  return spc;
}

void main() {
  outputColor = v_Color;
  float spc = calSpc();
  outputColor += spc * 0.4;
}
`,_M=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) in vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_uv;

layout(std140) uniform commonUniforms {
  float u_speed;
  float u_time;
};
out vec4 v_Color;
out vec2 v_uv;

#pragma include "projection"

void main() {
  v_uv = a_uv;
  v_Color = a_Color;
  v_Color.a *= opacity;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
}

`;class mM extends Et{constructor(...e){super(...e),v(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{speed:e=.5}=this.layer.getLayerConfig(),r={u_speed:e,u_time:this.layer.getLayerAnimateTime(),u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(r)}getAnimateUniforms(){return{u_time:this.layer.getLayerAnimateTime()}}initModels(){var e=this;return ee(function*(){return e.loadTexture(),e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"polygonWater",vertexShader:_M,fragmentShader:pM,triangulation:ka,defines:e.getDefines(),inject:e.getInject(),primitive:p.TRIANGLES,depth:{enable:!1},pickingEnabled:!1,diagnosticDerivativeUniformityEnabled:!1})]})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){const e=this.layer.getSource().extent,[r,n,i,o]=e,a=i-r,s=o-n;this.styleAttributeService.registerStyleAttribute({name:"waterUv",type:Be.Attribute,descriptor:{name:"a_uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:2,update:(u,l,f)=>{const[c,h]=f;return[(c-r)/a,(h-n)/s]}}})}loadTexture(){const{waterTexture:e}=this.layer.getLayerConfig(),{createTexture2D:r}=this.rendererService;this.texture=r({height:1,width:1});const n=new Image;n.crossOrigin="",e?(console.warn("L7 recommend：https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ"),n.src=e):n.src="https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ",n.onload=()=>{this.texture=r({data:n,width:n.width,height:n.height,wrapS:p.MIRRORED_REPEAT,wrapT:p.MIRRORED_REPEAT,min:p.LINEAR,mag:p.LINEAR}),this.layerService.reRender()}}}const vM={fill:cM,line:ng,extrude:rM,text:fg,point_fill:ag,point_image:sg,point_normal:ug,point_extrude:og,water:mM,ocean:dM,extrusion:oM};class gf extends $r{constructor(...e){super(...e),v(this,"type","PolygonLayer"),v(this,"enableShaderEncodeStyles",["opacity","extrusionBase","rotation","offsets","stroke"])}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new vM[r](e),yield e.initLayerModels()})()}getModelType(){var e;const r=this.styleAttributeService.getLayerStyleAttribute("shape"),n=r==null||(e=r.scale)===null||e===void 0?void 0:e.field;return n==="fill"||!n?"fill":n==="extrude"?"extrude":n==="extrusion"?"extrusion":n==="water"?"water":n==="ocean"?"ocean":n==="line"?"line":this.getPointModelType()}getPointModelType(){const e=this.getEncodedData(),{shape2d:r,shape3d:n}=this.getLayerConfig(),i=this.iconService.getIconMap(),o=e.find(a=>a.hasOwnProperty("shape"));if(o){const a=o.shape;return a==="dot"?"point_normal":r?.indexOf(a)!==-1?"point_fill":n?.indexOf(a)!==-1?"point_extrude":i.hasOwnProperty(a)?"point_image":"text"}else return"fill"}}const gM=`layout(std140) uniform commonUniforms {
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

uniform sampler2D u_rasterTexture;
uniform sampler2D u_colorTexture;

in vec2 v_texCoord;

bool isnan_emu(float x) {
  return x > 0.0 || x < 0.0
    ? x != x
    : x != 0.0;
}

out vec4 outputColor;

void main() {
  // Can use any component here since u_rasterTexture is under luminance format.
  float value = texture(SAMPLER_2D(u_rasterTexture), vec2(v_texCoord.x, v_texCoord.y)).r;
  if (value == u_noDataValue || isnan_emu(value)) {
    discard;
  } else if (u_clampLow < 0.5 && value < u_domain[0] || u_clampHigh < 0.5 && value > u_domain[1]) {
    discard;
  } else {
    float normalisedValue = (value - u_domain[0]) / (u_domain[1] - u_domain[0]);
    vec4 color = texture(SAMPLER_2D(u_colorTexture), vec2(normalisedValue, 0));

    outputColor = color;
    outputColor.a = outputColor.a * u_opacity;
    if (outputColor.a < 0.01) discard;
  }
}
`,EM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

out vec2 v_texCoord;

#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;let am=class extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"colorTexture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e=1,clampLow:r=!0,clampHigh:n=!0,noDataValue:i=-9999999,domain:o,rampColors:a}=this.layer.getLayerConfig(),s=o||Kc(a);this.colorTexture=this.layer.textureService.getColorTexture(a,s);const u={u_domain:s,u_opacity:e||1,u_noDataValue:i,u_clampLow:r?1:0,u_clampHigh:(typeof n<"u"?n:r)?1:0,u_rasterTexture:this.texture,u_colorTexture:this.colorTexture};return this.textures=[this.texture,this.colorTexture],this.getUniformsBufferInfo(u)}getRasterData(e){return ee(function*(){if(Array.isArray(e.data))return{data:e.data,width:e.width,height:e.height};{const{rasterData:r,width:n,height:i}=yield e.data;return{data:Array.from(r),width:n,height:i}}})()}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){e.initUniformsBuffer();const r=e.layer.getSource(),{createTexture2D:n,queryVerdorInfo:i}=e.rendererService,o=r.data.dataArray[0],{data:a,width:s,height:u}=yield e.getRasterData(o);return e.texture=n({data:new Float32Array(a),width:s,height:u,format:i()==="WebGL1"?p.LUMINANCE:p.RED,type:p.FLOAT,alignment:1}),[yield e.layer.buildLayerModel({moduleName:"rasterImageData",vertexShader:EM,fragmentShader:gM,defines:e.getDefines(),triangulation:za,primitive:p.TRIANGLES,depth:{enable:!1},pickingEnabled:!1})]})()}clearModels(){var e,r;(e=this.texture)===null||e===void 0||e.destroy(),(r=this.colorTexture)===null||r===void 0||r.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{shaderLocation:this.attributeLocation.UV,name:"a_Uv",buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}};const yM=["data"],AM=["rasterData"],TM=`uniform sampler2D u_texture;
layout(std140) uniform commonUniforms {
  vec2 u_rminmax;
  vec2 u_gminmax;
  vec2 u_bminmax;
  float u_opacity;
  float u_noDataValue;
};

in vec2 v_texCoord;

out vec4 outputColor;

void main() {
  vec3 rgb = texture(SAMPLER_2D(u_texture), vec2(v_texCoord.x, v_texCoord.y)).rgb;

  if (rgb == vec3(u_noDataValue)) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else {
    outputColor = vec4(
      rgb.r / (u_rminmax.y - u_rminmax.x),
      rgb.g / (u_gminmax.y - u_gminmax.x),
      rgb.b / (u_bminmax.y - u_bminmax.x),
      u_opacity
    );
  }

  if (outputColor.a < 0.01) discard;

}
`,SM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_POSITION_64LOW) in vec2 a_Position64Low;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec2 u_rminmax;
  vec2 u_gminmax;
  vec2 u_bminmax;
  float u_opacity;
  float u_noDataValue;
};

out vec2 v_texCoord;

#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0), a_Position64Low);
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;class xM extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"dataOption",{})}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e=1,noDataValue:r=0}=this.layer.getLayerConfig(),{rMinMax:n=[0,255],gMinMax:i=[0,255],bMinMax:o=[0,255]}=this.dataOption,a={u_rminmax:n,u_gminmax:i,u_bminmax:o,u_opacity:e||1,u_noDataValue:r,u_texture:this.texture};return this.textures=[this.texture],this.getUniformsBufferInfo(a)}getRasterData(e){var r=this;return ee(function*(){if(Array.isArray(e.data)){const{data:a}=e,s=gi(e,yM);return r.dataOption=s,le({data:a},s)}const n=yield e.data,{rasterData:i}=n,o=gi(n,AM);return r.dataOption=o,Array.isArray(i)?le({data:i},o):le({data:Array.from(i)},o)})()}initModels(){var e=this;return ee(function*(){e.initUniformsBuffer();const r=e.layer.getSource(),{createTexture2D:n}=e.rendererService,i=r.data.dataArray[0],{data:o,width:a,height:s}=yield e.getRasterData(i);return e.texture=n({data:new Float32Array(o),width:a,height:s,format:p.RGB,type:p.FLOAT}),[yield e.layer.buildLayerModel({moduleName:"rasterImageDataRGBA",vertexShader:SM,fragmentShader:TM,defines:e.getDefines(),triangulation:za,primitive:p.TRIANGLES,depth:{enable:!1},pickingEnabled:!1})]})()}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}const RM=`uniform sampler2D u_texture;
uniform sampler2D u_colorTexture;

layout(std140) uniform commonUniforms {
  vec4 u_unpack;
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};

in vec2 v_texCoord;
out vec4 outputColor;

float getElevation(vec2 coord, float bias) {
  // Convert encoded elevation value to meters
  vec4 data = texture(SAMPLER_2D(u_texture), coord, bias) * 255.0;
  data.a = -1.0;
  return dot(data, u_unpack);
}

vec4 getColor(float value) {
  float normalisedValue = (value - u_domain[0]) / (u_domain[1] - u_domain[0]);
  vec2 coord = vec2(normalisedValue, 0);
  return texture(SAMPLER_2D(u_colorTexture), coord);
}

void main() {
  float value = getElevation(v_texCoord, 0.0);
  if (value == u_noDataValue) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else if (u_clampLow < 0.5 && value < u_domain[0] || u_clampHigh < 0.5 && value > u_domain[1]) {
    outputColor = vec4(0.0, 0, 0, 0.0);
  } else {
    outputColor = getColor(value);
    outputColor.a = outputColor.a * u_opacity;
    if (outputColor.a < 0.01) discard;
  }
}
`,bM=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
  vec4 u_unpack;
  vec2 u_domain;
  float u_opacity;
  float u_noDataValue;
  float u_clampLow;
  float u_clampHigh;
};
out vec2 v_texCoord;
#pragma include "projection"

void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`;class CM extends Et{constructor(...e){super(...e),v(this,"texture",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}getCommonUniformsInfo(){const{opacity:e,clampLow:r=!0,clampHigh:n=!0,noDataValue:i=-9999999,domain:o,rampColors:a,colorTexture:s,rScaler:u=6553.6,gScaler:l=25.6,bScaler:f=.1,offset:c=1e4}=this.layer.getLayerConfig(),h=o||Kc(a);let _=s;s?this.layer.textureService.setColorTexture(s,a,h):_=this.layer.textureService.getColorTexture(a,h);const m={u_unpack:[u,l,f,c],u_domain:h,u_opacity:e||1,u_noDataValue:i,u_clampLow:r,u_clampHigh:typeof n<"u"?n:r,u_texture:this.texture,u_colorTexture:_};return this.textures=[this.texture,_],this.getUniformsBufferInfo(m)}initModels(){var e=this;return ee(function*(){e.initUniformsBuffer();const r=e.layer.getSource(),{createTexture2D:n}=e.rendererService,i=yield r.data.images;return e.texture=n({data:i[0],width:i[0].width,height:i[0].height,min:p.LINEAR,mag:p.LINEAR}),[yield e.layer.buildLayerModel({moduleName:"RasterTileDataImage",vertexShader:bM,fragmentShader:RM,defines:e.getDefines(),triangulation:za,primitive:p.TRIANGLES,depth:{enable:!1}})]})()}clearModels(){var e;(e=this.texture)===null||e===void 0||e.destroy()}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}registerBuiltinAttributes(){this.registerPosition64LowAttribute(),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}const OM={raster:am,rasterRgb:xM,raster3d:am,rasterTerrainRgb:CM};class Ef extends $r{constructor(...e){super(...e),v(this,"type","RasterLayer")}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new OM[r](e),yield e.initLayerModels()})()}getDefaultConfig(){const e=this.getModelType();return{raster:{},rasterRgb:{},raster3d:{},rasterTerrainRgb:{}}[e]}getModelType(){switch(this.layerSource.getParserType()){case"raster":case"ndi":return"raster";case"rasterRgb":return"rasterRgb";case"rgb":return"rasterRgb";case"image":return"rasterTerrainRgb";default:return"raster"}}getLegend(e){if(e!=="color")return{type:void 0,field:void 0,items:[]};const r=this.getLayerConfig().rampColors;return rg(r,e)}}class IM{constructor({rendererService:e,layerService:r,parent:n}){v(this,"tileResource",new Map),v(this,"rendererService",void 0),v(this,"layerService",void 0),v(this,"parent",void 0),v(this,"layerTiles",[]),this.rendererService=e,this.layerService=r,this.parent=n}get tiles(){return this.layerTiles}hasTile(e){return this.layerTiles.some(r=>r.key===e)}addTile(e){this.layerTiles.push(e)}getTile(e){return this.layerTiles.find(r=>r.key===e)}getVisibleTileBylngLat(e){return this.layerTiles.find(r=>r.isLoaded&&r.visible&&r.lnglatInBounds(e))}removeTile(e){const r=this.layerTiles.findIndex(i=>i.key===e),n=this.layerTiles.splice(r,1);n[0]&&n[0].destroy()}updateTileVisible(e){const r=this.getTile(e.key);if(e.isVisible)if(e.parent){const n=this.isChildrenLoaded(e.parent);r?.updateVisible(n)}else r?.updateVisible(!0);else if(e.parent){const n=this.isChildrenLoaded(e.parent);r?.updateVisible(!n)}else r?.updateVisible(!1)}isParentLoaded(e){const r=e.parent;if(!r)return!0;const n=this.getTile(r?.key);return!!(n!=null&&n.isLoaded)}isChildrenLoaded(e){const r=e?.children;return r.length===0?!0:r.every(n=>{const i=this.getTile(n?.key);return i?i?.isLoaded===!0:!0})}render(){var e=this;return ee(function*(){const n=e.getRenderLayers().map(function(){var i=ee(function*(o){yield e.layerService.renderTileLayer(o)});return function(o){return i.apply(this,arguments)}}());yield Promise.all(n)})()}getRenderLayers(){const e=this.layerTiles.filter(n=>n.visible&&n.isLoaded),r=[];return e.map(n=>r.push(...n.getLayers())),r}getLayers(){const e=this.layerTiles.filter(n=>n.isLoaded),r=[];return e.map(n=>r.push(...n.getLayers())),r}getTiles(){return this.layerTiles}destroy(){this.layerTiles.forEach(e=>e.destroy()),this.tileResource.clear()}}/**
 * splaytree v3.1.2
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function MM(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(f){return u([l,f])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(f){l=[6,f],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Zn=function(){function t(e,r){this.next=null,this.key=e,this.data=r,this.left=null,this.right=null}return t}();function BM(t,e){return t>e?1:t<e?-1:0}function Hn(t,e,r){for(var n=new Zn(null,null),i=n,o=n;;){var a=r(t,e.key);if(a<0){if(e.left===null)break;if(r(t,e.left.key)<0){var s=e.left;if(e.left=s.right,s.right=e,e=s,e.left===null)break}o.left=e,o=e,e=e.left}else if(a>0){if(e.right===null)break;if(r(t,e.right.key)>0){var s=e.right;if(e.right=s.left,s.left=e,e=s,e.right===null)break}i.right=e,i=e,e=e.right}else break}return i.right=e.left,o.left=e.right,e.left=n.right,e.right=n.left,e}function ic(t,e,r,n){var i=new Zn(t,e);if(r===null)return i.left=i.right=null,i;r=Hn(t,r,n);var o=n(t,r.key);return o<0?(i.left=r.left,i.right=r,r.left=null):o>=0&&(i.right=r.right,i.left=r,r.right=null),i}function sm(t,e,r){var n=null,i=null;if(e){e=Hn(t,e,r);var o=r(e.key,t);o===0?(n=e.left,i=e.right):o<0?(i=e.right,e.right=null,n=e):(n=e.left,e.left=null,i=e)}return{left:n,right:i}}function NM(t,e,r){return e===null?t:(t===null||(e=Hn(t.key,e,r),e.left=t),e)}function zc(t,e,r,n,i){if(t){n(""+e+(r?"└── ":"├── ")+i(t)+`
`);var o=e+(r?"    ":"│   ");t.left&&zc(t.left,o,!1,n,i),t.right&&zc(t.right,o,!0,n,i)}}var yf=function(){function t(e){e===void 0&&(e=BM),this._root=null,this._size=0,this._comparator=e}return t.prototype.insert=function(e,r){return this._size++,this._root=ic(e,r,this._root,this._comparator)},t.prototype.add=function(e,r){var n=new Zn(e,r);this._root===null&&(n.left=n.right=null,this._size++,this._root=n);var i=this._comparator,o=Hn(e,this._root,i),a=i(e,o.key);return a===0?this._root=o:(a<0?(n.left=o.left,n.right=o,o.left=null):a>0&&(n.right=o.right,n.left=o,o.right=null),this._size++,this._root=n),this._root},t.prototype.remove=function(e){this._root=this._remove(e,this._root,this._comparator)},t.prototype._remove=function(e,r,n){var i;if(r===null)return null;r=Hn(e,r,n);var o=n(e,r.key);return o===0?(r.left===null?i=r.right:(i=Hn(e,r.left,n),i.right=r.right),this._size--,i):r},t.prototype.pop=function(){var e=this._root;if(e){for(;e.left;)e=e.left;return this._root=Hn(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null},t.prototype.findStatic=function(e){for(var r=this._root,n=this._comparator;r;){var i=n(e,r.key);if(i===0)return r;i<0?r=r.left:r=r.right}return null},t.prototype.find=function(e){return this._root&&(this._root=Hn(e,this._root,this._comparator),this._comparator(e,this._root.key)!==0)?null:this._root},t.prototype.contains=function(e){for(var r=this._root,n=this._comparator;r;){var i=n(e,r.key);if(i===0)return!0;i<0?r=r.left:r=r.right}return!1},t.prototype.forEach=function(e,r){for(var n=this._root,i=[],o=!1;!o;)n!==null?(i.push(n),n=n.left):i.length!==0?(n=i.pop(),e.call(r,n),n=n.right):o=!0;return this},t.prototype.range=function(e,r,n,i){for(var o=[],a=this._comparator,s=this._root,u;o.length!==0||s;)if(s)o.push(s),s=s.left;else{if(s=o.pop(),u=a(s.key,r),u>0)break;if(a(s.key,e)>=0&&n.call(i,s))return this;s=s.right}return this},t.prototype.keys=function(){var e=[];return this.forEach(function(r){var n=r.key;return e.push(n)}),e},t.prototype.values=function(){var e=[];return this.forEach(function(r){var n=r.data;return e.push(n)}),e},t.prototype.min=function(){return this._root?this.minNode(this._root).key:null},t.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},t.prototype.minNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.left;)e=e.left;return e},t.prototype.maxNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.right;)e=e.right;return e},t.prototype.at=function(e){for(var r=this._root,n=!1,i=0,o=[];!n;)if(r)o.push(r),r=r.left;else if(o.length>0){if(r=o.pop(),i===e)return r;i++,r=r.right}else n=!0;return null},t.prototype.next=function(e){var r=this._root,n=null;if(e.right){for(n=e.right;n.left;)n=n.left;return n}for(var i=this._comparator;r;){var o=i(e.key,r.key);if(o===0)break;o<0?(n=r,r=r.left):r=r.right}return n},t.prototype.prev=function(e){var r=this._root,n=null;if(e.left!==null){for(n=e.left;n.right;)n=n.right;return n}for(var i=this._comparator;r;){var o=i(e.key,r.key);if(o===0)break;o<0?r=r.left:(n=r,r=r.right)}return n},t.prototype.clear=function(){return this._root=null,this._size=0,this},t.prototype.toList=function(){return LM(this._root)},t.prototype.load=function(e,r,n){r===void 0&&(r=[]),n===void 0&&(n=!1);var i=e.length,o=this._comparator;if(n&&Hc(e,r,0,i-1,o),this._root===null)this._root=Vc(e,r,0,i),this._size=i;else{var a=DM(this.toList(),PM(e,r),o);i=this._size+i,this._root=Wc({head:a},0,i)}return this},t.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),t.prototype.toString=function(e){e===void 0&&(e=function(n){return String(n.key)});var r=[];return zc(this._root,"",!0,function(n){return r.push(n)},e),r.join("")},t.prototype.update=function(e,r,n){var i=this._comparator,o=sm(e,this._root,i),a=o.left,s=o.right;i(e,r)<0?s=ic(r,n,s,i):a=ic(r,n,a,i),this._root=NM(a,s,i)},t.prototype.split=function(e){return sm(e,this._root,this._comparator)},t.prototype[Symbol.iterator]=function(){var e,r,n;return MM(this,function(i){switch(i.label){case 0:e=this._root,r=[],n=!1,i.label=1;case 1:return n?[3,6]:e===null?[3,2]:(r.push(e),e=e.left,[3,5]);case 2:return r.length===0?[3,4]:(e=r.pop(),[4,e]);case 3:return i.sent(),e=e.right,[3,5];case 4:n=!0,i.label=5;case 5:return[3,1];case 6:return[2]}})},t}();function Vc(t,e,r,n){var i=n-r;if(i>0){var o=r+Math.floor(i/2),a=t[o],s=e[o],u=new Zn(a,s);return u.left=Vc(t,e,r,o),u.right=Vc(t,e,o+1,n),u}return null}function PM(t,e){for(var r=new Zn(null,null),n=r,i=0;i<t.length;i++)n=n.next=new Zn(t[i],e[i]);return n.next=null,r.next}function LM(t){for(var e=t,r=[],n=!1,i=new Zn(null,null),o=i;!n;)e?(r.push(e),e=e.left):r.length>0?(e=o=o.next=r.pop(),e=e.right):n=!0;return o.next=null,i.next}function Wc(t,e,r){var n=r-e;if(n>0){var i=e+Math.floor(n/2),o=Wc(t,e,i),a=t.head;return a.left=o,t.head=t.head.next,a.right=Wc(t,i+1,r),a}return null}function DM(t,e,r){for(var n=new Zn(null,null),i=n,o=t,a=e;o!==null&&a!==null;)r(o.key,a.key)<0?(i.next=o,o=o.next):(i.next=a,a=a.next),i=i.next;return o!==null?i.next=o:a!==null&&(i.next=a),n.next}function Hc(t,e,r,n,i){if(!(r>=n)){for(var o=t[r+n>>1],a=r-1,s=n+1;;){do a++;while(i(t[a],o)<0);do s--;while(i(t[s],o)>0);if(a>=s)break;var u=t[a];t[a]=t[s],t[s]=u,u=e[a],e[a]=e[s],e[s]=u}Hc(t,e,r,s,i),Hc(t,e,s+1,n,i)}}const Bn=11102230246251565e-32,br=134217729,FM=(3+8*Bn)*Bn;function oc(t,e,r,n,i){let o,a,s,u,l=e[0],f=n[0],c=0,h=0;f>l==f>-l?(o=l,l=e[++c]):(o=f,f=n[++h]);let _=0;if(c<t&&h<r)for(f>l==f>-l?(a=l+o,s=o-(a-l),l=e[++c]):(a=f+o,s=o-(a-f),f=n[++h]),o=a,s!==0&&(i[_++]=s);c<t&&h<r;)f>l==f>-l?(a=o+l,u=a-o,s=o-(a-u)+(l-u),l=e[++c]):(a=o+f,u=a-o,s=o-(a-u)+(f-u),f=n[++h]),o=a,s!==0&&(i[_++]=s);for(;c<t;)a=o+l,u=a-o,s=o-(a-u)+(l-u),l=e[++c],o=a,s!==0&&(i[_++]=s);for(;h<r;)a=o+f,u=a-o,s=o-(a-u)+(f-u),f=n[++h],o=a,s!==0&&(i[_++]=s);return(o!==0||_===0)&&(i[_++]=o),_}function wM(t,e){let r=e[0];for(let n=1;n<t;n++)r+=e[n];return r}function Va(t){return new Float64Array(t)}const UM=(3+16*Bn)*Bn,kM=(2+12*Bn)*Bn,zM=(9+64*Bn)*Bn*Bn,Ki=Va(4),um=Va(8),lm=Va(12),cm=Va(16),Br=Va(4);function VM(t,e,r,n,i,o,a){let s,u,l,f,c,h,_,m,E,S,M,P,F,V,pe,ce,j,fe;const ze=t-i,te=r-i,k=e-o,q=n-o;V=ze*q,h=br*ze,_=h-(h-ze),m=ze-_,h=br*q,E=h-(h-q),S=q-E,pe=m*S-(V-_*E-m*E-_*S),ce=k*te,h=br*k,_=h-(h-k),m=k-_,h=br*te,E=h-(h-te),S=te-E,j=m*S-(ce-_*E-m*E-_*S),M=pe-j,c=pe-M,Ki[0]=pe-(M+c)+(c-j),P=V+M,c=P-V,F=V-(P-c)+(M-c),M=F-ce,c=F-M,Ki[1]=F-(M+c)+(c-ce),fe=P+M,c=fe-P,Ki[2]=P-(fe-c)+(M-c),Ki[3]=fe;let ne=wM(4,Ki),xe=kM*a;if(ne>=xe||-ne>=xe||(c=t-ze,s=t-(ze+c)+(c-i),c=r-te,l=r-(te+c)+(c-i),c=e-k,u=e-(k+c)+(c-o),c=n-q,f=n-(q+c)+(c-o),s===0&&u===0&&l===0&&f===0)||(xe=zM*a+FM*Math.abs(ne),ne+=ze*f+q*s-(k*l+te*u),ne>=xe||-ne>=xe))return ne;V=s*q,h=br*s,_=h-(h-s),m=s-_,h=br*q,E=h-(h-q),S=q-E,pe=m*S-(V-_*E-m*E-_*S),ce=u*te,h=br*u,_=h-(h-u),m=u-_,h=br*te,E=h-(h-te),S=te-E,j=m*S-(ce-_*E-m*E-_*S),M=pe-j,c=pe-M,Br[0]=pe-(M+c)+(c-j),P=V+M,c=P-V,F=V-(P-c)+(M-c),M=F-ce,c=F-M,Br[1]=F-(M+c)+(c-ce),fe=P+M,c=fe-P,Br[2]=P-(fe-c)+(M-c),Br[3]=fe;const Fe=oc(4,Ki,4,Br,um);V=ze*f,h=br*ze,_=h-(h-ze),m=ze-_,h=br*f,E=h-(h-f),S=f-E,pe=m*S-(V-_*E-m*E-_*S),ce=k*l,h=br*k,_=h-(h-k),m=k-_,h=br*l,E=h-(h-l),S=l-E,j=m*S-(ce-_*E-m*E-_*S),M=pe-j,c=pe-M,Br[0]=pe-(M+c)+(c-j),P=V+M,c=P-V,F=V-(P-c)+(M-c),M=F-ce,c=F-M,Br[1]=F-(M+c)+(c-ce),fe=P+M,c=fe-P,Br[2]=P-(fe-c)+(M-c),Br[3]=fe;const $e=oc(Fe,um,4,Br,lm);V=s*f,h=br*s,_=h-(h-s),m=s-_,h=br*f,E=h-(h-f),S=f-E,pe=m*S-(V-_*E-m*E-_*S),ce=u*l,h=br*u,_=h-(h-u),m=u-_,h=br*l,E=h-(h-l),S=l-E,j=m*S-(ce-_*E-m*E-_*S),M=pe-j,c=pe-M,Br[0]=pe-(M+c)+(c-j),P=V+M,c=P-V,F=V-(P-c)+(M-c),M=F-ce,c=F-M,Br[1]=F-(M+c)+(c-ce),fe=P+M,c=fe-P,Br[2]=P-(fe-c)+(M-c),Br[3]=fe;const qe=oc($e,lm,4,Br,cm);return cm[qe-1]}function WM(t,e,r,n,i,o){const a=(e-o)*(r-i),s=(t-i)*(n-o),u=a-s,l=Math.abs(a+s);return Math.abs(u)>=UM*l?u:-VM(t,e,r,n,i,o,l)}var hg={};const ua=(t,e)=>t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y,Xc=(t,e)=>{if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;const r=t.ll.x<e.ll.x?e.ll.x:t.ll.x,n=t.ur.x<e.ur.x?t.ur.x:e.ur.x,i=t.ll.y<e.ll.y?e.ll.y:t.ll.y,o=t.ur.y<e.ur.y?t.ur.y:e.ur.y;return{ll:{x:r,y:i},ur:{x:n,y:o}}};let jn=Number.EPSILON;jn===void 0&&(jn=Math.pow(2,-52));const HM=jn*jn,fm=(t,e)=>{if(-jn<t&&t<jn&&-jn<e&&e<jn)return 0;const r=t-e;return r*r<HM*t*e?0:t<e?-1:1};class XM{constructor(){this.reset()}reset(){this.xRounder=new hm,this.yRounder=new hm}round(e,r){return{x:this.xRounder.round(e),y:this.yRounder.round(r)}}}class hm{constructor(){this.tree=new yf,this.round(0)}round(e){const r=this.tree.add(e),n=this.tree.prev(r);if(n!==null&&fm(r.key,n.key)===0)return this.tree.remove(e),n.key;const i=this.tree.next(r);return i!==null&&fm(r.key,i.key)===0?(this.tree.remove(e),i.key):e}}const Pa=new XM,Ys=(t,e)=>t.x*e.y-t.y*e.x,dg=(t,e)=>t.x*e.x+t.y*e.y,dm=(t,e,r)=>{const n=WM(t.x,t.y,e.x,e.y,r.x,r.y);return n>0?-1:n<0?1:0},Eu=t=>Math.sqrt(dg(t,t)),jM=(t,e,r)=>{const n={x:e.x-t.x,y:e.y-t.y},i={x:r.x-t.x,y:r.y-t.y};return Ys(i,n)/Eu(i)/Eu(n)},GM=(t,e,r)=>{const n={x:e.x-t.x,y:e.y-t.y},i={x:r.x-t.x,y:r.y-t.y};return dg(i,n)/Eu(i)/Eu(n)},pm=(t,e,r)=>e.y===0?null:{x:t.x+e.x/e.y*(r-t.y),y:r},_m=(t,e,r)=>e.x===0?null:{x:r,y:t.y+e.y/e.x*(r-t.x)},$M=(t,e,r,n)=>{if(e.x===0)return _m(r,n,t.x);if(n.x===0)return _m(t,e,r.x);if(e.y===0)return pm(r,n,t.y);if(n.y===0)return pm(t,e,r.y);const i=Ys(e,n);if(i==0)return null;const o={x:r.x-t.x,y:r.y-t.y},a=Ys(o,e)/i,s=Ys(o,n)/i,u=t.x+s*e.x,l=r.x+a*n.x,f=t.y+s*e.y,c=r.y+a*n.y,h=(u+l)/2,_=(f+c)/2;return{x:h,y:_}};class Jr{static compare(e,r){const n=Jr.comparePoints(e.point,r.point);return n!==0?n:(e.point!==r.point&&e.link(r),e.isLeft!==r.isLeft?e.isLeft?1:-1:$n.compare(e.segment,r.segment))}static comparePoints(e,r){return e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0}constructor(e,r){e.events===void 0?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=r}link(e){if(e.point===this.point)throw new Error("Tried to link already linked events");const r=e.point.events;for(let n=0,i=r.length;n<i;n++){const o=r[n];this.point.events.push(o),o.point=this.point}this.checkForConsuming()}checkForConsuming(){const e=this.point.events.length;for(let r=0;r<e;r++){const n=this.point.events[r];if(n.segment.consumedBy===void 0)for(let i=r+1;i<e;i++){const o=this.point.events[i];o.consumedBy===void 0&&n.otherSE.point.events===o.otherSE.point.events&&n.segment.consume(o.segment)}}}getAvailableLinkedEvents(){const e=[];for(let r=0,n=this.point.events.length;r<n;r++){const i=this.point.events[r];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&e.push(i)}return e}getLeftmostComparator(e){const r=new Map,n=i=>{const o=i.otherSE;r.set(i,{sine:jM(this.point,e.point,o.point),cosine:GM(this.point,e.point,o.point)})};return(i,o)=>{r.has(i)||n(i),r.has(o)||n(o);const{sine:a,cosine:s}=r.get(i),{sine:u,cosine:l}=r.get(o);return a>=0&&u>=0?s<l?1:s>l?-1:0:a<0&&u<0?s<l?-1:s>l?1:0:u<a?-1:u>a?1:0}}}let YM=0;class $n{static compare(e,r){const n=e.leftSE.point.x,i=r.leftSE.point.x,o=e.rightSE.point.x,a=r.rightSE.point.x;if(a<n)return 1;if(o<i)return-1;const s=e.leftSE.point.y,u=r.leftSE.point.y,l=e.rightSE.point.y,f=r.rightSE.point.y;if(n<i){if(u<s&&u<l)return 1;if(u>s&&u>l)return-1;const c=e.comparePoint(r.leftSE.point);if(c<0)return 1;if(c>0)return-1;const h=r.comparePoint(e.rightSE.point);return h!==0?h:-1}if(n>i){if(s<u&&s<f)return-1;if(s>u&&s>f)return 1;const c=r.comparePoint(e.leftSE.point);if(c!==0)return c;const h=e.comparePoint(r.rightSE.point);return h<0?1:h>0?-1:1}if(s<u)return-1;if(s>u)return 1;if(o<a){const c=r.comparePoint(e.rightSE.point);if(c!==0)return c}if(o>a){const c=e.comparePoint(r.rightSE.point);if(c<0)return 1;if(c>0)return-1}if(o!==a){const c=l-s,h=o-n,_=f-u,m=a-i;if(c>h&&_<m)return 1;if(c<h&&_>m)return-1}return o>a?1:o<a||l<f?-1:l>f?1:e.id<r.id?-1:e.id>r.id?1:0}constructor(e,r,n,i){this.id=++YM,this.leftSE=e,e.segment=this,e.otherSE=r,this.rightSE=r,r.segment=this,r.otherSE=e,this.rings=n,this.windings=i}static fromRing(e,r,n){let i,o,a;const s=Jr.comparePoints(e,r);if(s<0)i=e,o=r,a=1;else if(s>0)i=r,o=e,a=-1;else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);const u=new Jr(i,!0),l=new Jr(o,!1);return new $n(u,l,[n],[a])}replaceRightSE(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const e=this.leftSE.point.y,r=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<r?e:r},ur:{x:this.rightSE.point.x,y:e>r?e:r}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}comparePoint(e){if(this.isAnEndpoint(e))return 0;const r=this.leftSE.point,n=this.rightSE.point,i=this.vector();if(r.x===n.x)return e.x===r.x?0:e.x<r.x?1:-1;const o=(e.y-r.y)/i.y,a=r.x+o*i.x;if(e.x===a)return 0;const s=(e.x-r.x)/i.x,u=r.y+s*i.y;return e.y===u?0:e.y<u?-1:1}getIntersection(e){const r=this.bbox(),n=e.bbox(),i=Xc(r,n);if(i===null)return null;const o=this.leftSE.point,a=this.rightSE.point,s=e.leftSE.point,u=e.rightSE.point,l=ua(r,s)&&this.comparePoint(s)===0,f=ua(n,o)&&e.comparePoint(o)===0,c=ua(r,u)&&this.comparePoint(u)===0,h=ua(n,a)&&e.comparePoint(a)===0;if(f&&l)return h&&!c?a:!h&&c?u:null;if(f)return c&&o.x===u.x&&o.y===u.y?null:o;if(l)return h&&a.x===s.x&&a.y===s.y?null:s;if(h&&c)return null;if(h)return a;if(c)return u;const _=$M(o,this.vector(),s,e.vector());return _===null||!ua(i,_)?null:Pa.round(_.x,_.y)}split(e){const r=[],n=e.events!==void 0,i=new Jr(e,!0),o=new Jr(e,!1),a=this.rightSE;this.replaceRightSE(o),r.push(o),r.push(i);const s=new $n(i,a,this.rings.slice(),this.windings.slice());return Jr.comparePoints(s.leftSE.point,s.rightSE.point)>0&&s.swapEvents(),Jr.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(i.checkForConsuming(),o.checkForConsuming()),r}swapEvents(){const e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let r=0,n=this.windings.length;r<n;r++)this.windings[r]*=-1}consume(e){let r=this,n=e;for(;r.consumedBy;)r=r.consumedBy;for(;n.consumedBy;)n=n.consumedBy;const i=$n.compare(r,n);if(i!==0){if(i>0){const o=r;r=n,n=o}if(r.prev===n){const o=r;r=n,n=o}for(let o=0,a=n.rings.length;o<a;o++){const s=n.rings[o],u=n.windings[o],l=r.rings.indexOf(s);l===-1?(r.rings.push(s),r.windings.push(u)):r.windings[l]+=u}n.rings=null,n.windings=null,n.consumedBy=r,n.leftSE.consumedBy=r.leftSE,n.rightSE.consumedBy=r.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{const e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;const e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};const r=this._afterState.rings,n=this._afterState.windings,i=this._afterState.multiPolys;for(let s=0,u=this.rings.length;s<u;s++){const l=this.rings[s],f=this.windings[s],c=r.indexOf(l);c===-1?(r.push(l),n.push(f)):n[c]+=f}const o=[],a=[];for(let s=0,u=r.length;s<u;s++){if(n[s]===0)continue;const l=r[s],f=l.poly;if(a.indexOf(f)===-1)if(l.isExterior)o.push(f);else{a.indexOf(f)===-1&&a.push(f);const c=o.indexOf(l.poly);c!==-1&&o.splice(c,1)}}for(let s=0,u=o.length;s<u;s++){const l=o[s].multiPoly;i.indexOf(l)===-1&&i.push(l)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;const e=this.beforeState().multiPolys,r=this.afterState().multiPolys;switch(fn.type){case"union":{const n=e.length===0,i=r.length===0;this._isInResult=n!==i;break}case"intersection":{let n,i;e.length<r.length?(n=e.length,i=r.length):(n=r.length,i=e.length),this._isInResult=i===fn.numMultiPolys&&n<i;break}case"xor":{const n=Math.abs(e.length-r.length);this._isInResult=n%2===1;break}case"difference":{const n=i=>i.length===1&&i[0].isSubject;this._isInResult=n(e)!==n(r);break}default:throw new Error(`Unrecognized operation type found ${fn.type}`)}return this._isInResult}}class mm{constructor(e,r,n){if(!Array.isArray(e)||e.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=r,this.isExterior=n,this.segments=[],typeof e[0][0]!="number"||typeof e[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const i=Pa.round(e[0][0],e[0][1]);this.bbox={ll:{x:i.x,y:i.y},ur:{x:i.x,y:i.y}};let o=i;for(let a=1,s=e.length;a<s;a++){if(typeof e[a][0]!="number"||typeof e[a][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let u=Pa.round(e[a][0],e[a][1]);u.x===o.x&&u.y===o.y||(this.segments.push($n.fromRing(o,u,this)),u.x<this.bbox.ll.x&&(this.bbox.ll.x=u.x),u.y<this.bbox.ll.y&&(this.bbox.ll.y=u.y),u.x>this.bbox.ur.x&&(this.bbox.ur.x=u.x),u.y>this.bbox.ur.y&&(this.bbox.ur.y=u.y),o=u)}(i.x!==o.x||i.y!==o.y)&&this.segments.push($n.fromRing(o,i,this))}getSweepEvents(){const e=[];for(let r=0,n=this.segments.length;r<n;r++){const i=this.segments[r];e.push(i.leftSE),e.push(i.rightSE)}return e}}class ZM{constructor(e,r){if(!Array.isArray(e))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new mm(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let n=1,i=e.length;n<i;n++){const o=new mm(e[n],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=r}getSweepEvents(){const e=this.exteriorRing.getSweepEvents();for(let r=0,n=this.interiorRings.length;r<n;r++){const i=this.interiorRings[r].getSweepEvents();for(let o=0,a=i.length;o<a;o++)e.push(i[o])}return e}}class vm{constructor(e,r){if(!Array.isArray(e))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof e[0][0][0]=="number"&&(e=[e])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let n=0,i=e.length;n<i;n++){const o=new ZM(e[n],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=r}getSweepEvents(){const e=[];for(let r=0,n=this.polys.length;r<n;r++){const i=this.polys[r].getSweepEvents();for(let o=0,a=i.length;o<a;o++)e.push(i[o])}return e}}class yu{static factory(e){const r=[];for(let n=0,i=e.length;n<i;n++){const o=e[n];if(!o.isInResult()||o.ringOut)continue;let a=null,s=o.leftSE,u=o.rightSE;const l=[s],f=s.point,c=[];for(;a=s,s=u,l.push(s),s.point!==f;)for(;;){const h=s.getAvailableLinkedEvents();if(h.length===0){const E=l[0].point,S=l[l.length-1].point;throw new Error(`Unable to complete output ring starting at [${E.x}, ${E.y}]. Last matching segment found ends at [${S.x}, ${S.y}].`)}if(h.length===1){u=h[0].otherSE;break}let _=null;for(let E=0,S=c.length;E<S;E++)if(c[E].point===s.point){_=E;break}if(_!==null){const E=c.splice(_)[0],S=l.splice(E.index);S.unshift(S[0].otherSE),r.push(new yu(S.reverse()));continue}c.push({index:l.length,point:s.point});const m=s.getLeftmostComparator(a);u=h.sort(m)[0].otherSE;break}r.push(new yu(l))}return r}constructor(e){this.events=e;for(let r=0,n=e.length;r<n;r++)e[r].segment.ringOut=this;this.poly=null}getGeom(){let e=this.events[0].point;const r=[e];for(let l=1,f=this.events.length-1;l<f;l++){const c=this.events[l].point,h=this.events[l+1].point;dm(c,e,h)!==0&&(r.push(c),e=c)}if(r.length===1)return null;const n=r[0],i=r[1];dm(n,e,i)===0&&r.shift(),r.push(r[0]);const o=this.isExteriorRing()?1:-1,a=this.isExteriorRing()?0:r.length-1,s=this.isExteriorRing()?r.length:-1,u=[];for(let l=a;l!=s;l+=o)u.push([r[l].x,r[l].y]);return u}isExteriorRing(){if(this._isExteriorRing===void 0){const e=this.enclosingRing();this._isExteriorRing=e?!e.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let e=this.events[0];for(let i=1,o=this.events.length;i<o;i++){const a=this.events[i];Jr.compare(e,a)>0&&(e=a)}let r=e.segment.prevInResult(),n=r?r.prevInResult():null;for(;;){if(!r)return null;if(!n)return r.ringOut;if(n.ringOut!==r.ringOut)return n.ringOut.enclosingRing()!==r.ringOut?r.ringOut:r.ringOut.enclosingRing();r=n.prevInResult(),n=r?r.prevInResult():null}}}class gm{constructor(e){this.exteriorRing=e,e.poly=this,this.interiorRings=[]}addInterior(e){this.interiorRings.push(e),e.poly=this}getGeom(){const e=[this.exteriorRing.getGeom()];if(e[0]===null)return null;for(let r=0,n=this.interiorRings.length;r<n;r++){const i=this.interiorRings[r].getGeom();i!==null&&e.push(i)}return e}}class KM{constructor(e){this.rings=e,this.polys=this._composePolys(e)}getGeom(){const e=[];for(let r=0,n=this.polys.length;r<n;r++){const i=this.polys[r].getGeom();i!==null&&e.push(i)}return e}_composePolys(e){const r=[];for(let n=0,i=e.length;n<i;n++){const o=e[n];if(!o.poly)if(o.isExteriorRing())r.push(new gm(o));else{const a=o.enclosingRing();a.poly||r.push(new gm(a)),a.poly.addInterior(o)}}return r}}class qM{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$n.compare;this.queue=e,this.tree=new yf(r),this.segments=[]}process(e){const r=e.segment,n=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(r),n;const i=e.isLeft?this.tree.add(r):this.tree.find(r);if(!i)throw new Error(`Unable to find segment #${r.id} [${r.leftSE.point.x}, ${r.leftSE.point.y}] -> [${r.rightSE.point.x}, ${r.rightSE.point.y}] in SweepLine tree.`);let o=i,a=i,s,u;for(;s===void 0;)o=this.tree.prev(o),o===null?s=null:o.key.consumedBy===void 0&&(s=o.key);for(;u===void 0;)a=this.tree.next(a),a===null?u=null:a.key.consumedBy===void 0&&(u=a.key);if(e.isLeft){let l=null;if(s){const c=s.getIntersection(r);if(c!==null&&(r.isAnEndpoint(c)||(l=c),!s.isAnEndpoint(c))){const h=this._splitSafely(s,c);for(let _=0,m=h.length;_<m;_++)n.push(h[_])}}let f=null;if(u){const c=u.getIntersection(r);if(c!==null&&(r.isAnEndpoint(c)||(f=c),!u.isAnEndpoint(c))){const h=this._splitSafely(u,c);for(let _=0,m=h.length;_<m;_++)n.push(h[_])}}if(l!==null||f!==null){let c=null;l===null?c=f:f===null?c=l:c=Jr.comparePoints(l,f)<=0?l:f,this.queue.remove(r.rightSE),n.push(r.rightSE);const h=r.split(c);for(let _=0,m=h.length;_<m;_++)n.push(h[_])}n.length>0?(this.tree.remove(r),n.push(e)):(this.segments.push(r),r.prev=s)}else{if(s&&u){const l=s.getIntersection(u);if(l!==null){if(!s.isAnEndpoint(l)){const f=this._splitSafely(s,l);for(let c=0,h=f.length;c<h;c++)n.push(f[c])}if(!u.isAnEndpoint(l)){const f=this._splitSafely(u,l);for(let c=0,h=f.length;c<h;c++)n.push(f[c])}}}this.tree.remove(r)}return n}_splitSafely(e,r){this.tree.remove(e);const n=e.rightSE;this.queue.remove(n);const i=e.split(r);return i.push(n),e.consumedBy===void 0&&this.tree.add(e),i}}const Em=typeof process<"u"&&hg.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,QM=typeof process<"u"&&hg.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class JM{run(e,r,n){fn.type=e,Pa.reset();const i=[new vm(r,!0)];for(let c=0,h=n.length;c<h;c++)i.push(new vm(n[c],!1));if(fn.numMultiPolys=i.length,fn.type==="difference"){const c=i[0];let h=1;for(;h<i.length;)Xc(i[h].bbox,c.bbox)!==null?h++:i.splice(h,1)}if(fn.type==="intersection")for(let c=0,h=i.length;c<h;c++){const _=i[c];for(let m=c+1,E=i.length;m<E;m++)if(Xc(_.bbox,i[m].bbox)===null)return[]}const o=new yf(Jr.compare);for(let c=0,h=i.length;c<h;c++){const _=i[c].getSweepEvents();for(let m=0,E=_.length;m<E;m++)if(o.insert(_[m]),o.size>Em)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const a=new qM(o);let s=o.size,u=o.pop();for(;u;){const c=u.key;if(o.size===s){const _=c.segment;throw new Error(`Unable to pop() ${c.isLeft?"left":"right"} SweepEvent [${c.point.x}, ${c.point.y}] from segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] from queue.`)}if(o.size>Em)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(a.segments.length>QM)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const h=a.process(c);for(let _=0,m=h.length;_<m;_++){const E=h[_];E.consumedBy===void 0&&o.insert(E)}s=o.size,u=o.pop()}Pa.reset();const l=yu.factory(a.segments);return new KM(l).getGeom()}}const fn=new JM,e4=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return fn.run("union",t,r)},t4=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return fn.run("intersection",t,r)},r4=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return fn.run("xor",t,r)},n4=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return fn.run("difference",t,r)};var i4={union:e4,intersection:t4,xor:r4,difference:n4};function o4(t,e,r){r===void 0&&(r={});var n=Fd(t),i=Fd(e),o=i4.union(n.coordinates,i.coordinates);return o.length===0?null:o.length===1?mv(o[0],r.properties):MA(o,r.properties)}class a4{getCombineFeature(e){let r=null;const n=e[0];return e.map(i=>{const o=mv(i.coordinates);r===null?r=o:r=o4(r,o)}),n&&(r.properties=le({},n)),r}}const la="select",ca="active";class s4{constructor({layerService:e,tileLayerService:r,parent:n}){v(this,"layerService",void 0),v(this,"tileLayerService",void 0),v(this,"tileSourceService",void 0),v(this,"parent",void 0),v(this,"tilePickID",new Map),this.layerService=e,this.tileLayerService=r,this.parent=n,this.tileSourceService=new a4}pickRender(e){const r=this.tileLayerService.getVisibleTileBylngLat(e.lngLat);if(r){const n=r.getMainLayer();n?.layerPickService.pickRender(e)}}pick(e,r){var n=this;return ee(function*(){const o=n.parent.getContainer().pickingService;if(e.type==="RasterLayer"){const a=n.tileLayerService.getVisibleTileBylngLat(r.lngLat);if(a&&a.getMainLayer()!==void 0){const s=a.getMainLayer();return s.layerPickService.pickRasterLayer(s,r,n.parent)}return!1}return n.pickRender(r),o.pickFromPickingFBO(e,r)})()}selectFeature(e){const[r,n,i]=e,o=this.color2PickId(r,n,i);this.tilePickID.set(la,o),this.updateHighLight(r,n,i,la)}highlightPickedFeature(e){const[r,n,i]=e,o=this.color2PickId(r,n,i);this.tilePickID.set(ca,o),this.updateHighLight(r,n,i,ca)}updateHighLight(e,r,n,i){this.tileLayerService.tiles.map(o=>{const a=o.getMainLayer();switch(i){case la:a?.hooks.beforeSelect.call([e,r,n]);break;case ca:a?.hooks.beforeHighlight.call([e,r,n]);break}})}setPickState(){const e=this.tilePickID.get(la),r=this.tilePickID.get(ca);if(e){const[n,i,o]=this.pickId2Color(e);this.updateHighLight(n,i,o,la);return}if(r){const[n,i,o]=this.pickId2Color(r);this.updateHighLight(n,i,o,ca);return}}color2PickId(e,r,n){return pc(new Uint8Array([e,r,n]))}pickId2Color(e){return eu(e)}getFeatureById(e){const r=this.tileLayerService.getTiles().filter(i=>i.visible),n=[];return r.forEach(i=>{n.push(...i.getFeatureById(e))}),n}pickRasterLayer(){return!1}}function u4(t){return t==="PolygonLayer"?gf:t==="LineLayer"?ig:Uc}function l4(t){return["PolygonLayer","LineLayer"].indexOf(t)!==-1}class bi extends Kn.EventEmitter{constructor(e,r){super(),v(this,"x",void 0),v(this,"y",void 0),v(this,"z",void 0),v(this,"key",void 0),v(this,"parent",void 0),v(this,"sourceTile",void 0),v(this,"visible",!0),v(this,"layers",[]),v(this,"isLoaded",!1),v(this,"tileMaskLayers",[]),v(this,"tileMask",void 0),this.parent=r,this.sourceTile=e,this.x=e.x,this.y=e.y,this.z=e.z,this.key=`${this.x}_${this.y}_${this.z}`}getLayers(){return this.layers}styleUpdate(...e){}lnglatInBounds(e){const[r,n,i,o]=this.sourceTile.bounds,{lng:a,lat:s}=e;return a>=r&&a<=i&&s>=n&&s<=o}getLayerOptions(){var e;const r=this.parent.getLayerConfig();return le(le({},r),{},{textAllowOverlap:!0,autoFit:!1,maskLayers:this.getMaskLayer(),tileMask:l4(this.parent.type),mask:r.mask||((e=r.maskLayers)===null||e===void 0?void 0:e.length)!==0&&r.enableMask})}getMaskLayer(){const{maskLayers:e}=this.parent.getLayerConfig(),r=[];return e?.forEach(n=>{if(!n.tileLayer)return r.push(n),n;const o=n.tileLayer.getTile(this.sourceTile.key),a=o?.getLayers()[0];a&&r.push(a)}),r}addTileMask(){var e=this;return ee(function*(){const r=new gf({name:"mask",visible:!0,enablePicking:!1}).source({type:"FeatureCollection",features:[e.sourceTile.bboxPolygon]},{parser:{type:"geojson",featureId:"id"}}).shape("fill").color("#0f0").style({opacity:.5}),n=co(e.parent.container);r.setContainer(n),yield r.init(),e.tileMask=r;const i=e.getMainLayer();return i!==void 0&&(i.tileMask=r),r})()}addMask(e,r){var n=this;return ee(function*(){const i=co(n.parent.container);r.setContainer(i),yield r.init(),e.addMask(r),n.tileMaskLayers.push(r)})()}addLayer(e){var r=this;return ee(function*(){e.isTileLayer=!0;const n=co(r.parent.container);e.setContainer(n),r.layers.push(e),yield e.init()})()}updateVisible(e){this.visible=e,this.updateOptions("visible",e)}updateOptions(e,r){this.layers.forEach(n=>{n.updateLayerConfig({[e]:r})})}getMainLayer(){return this.layers[0]}getFeatures(e){return[]}getFeatureById(e){return[]}destroy(){var e;(e=this.tileMask)===null||e===void 0||e.destroy(),this.layers.forEach(r=>r.destroy())}}class c4 extends bi{initTileLayer(){var e=this;return ee(function*(){const r=e.getSourceOption(),n=r.data.features[0].properties,i=new ig().source(r.data,r.options).size(1).shape("line").color("red"),o=new Uc({minZoom:e.z-1,maxZoom:e.z+1,textAllowOverlap:!0}).source([n],{parser:{type:"json",x:"x",y:"y"}}).size(20).color("red").shape(e.key).style({stroke:"#fff",strokeWidth:2});yield e.addLayer(i),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource();return{data:{type:"FeatureCollection",features:this.sourceTile.data.layers.testTile.features},options:{parser:{type:"geojson"},transforms:e.transforms}}}}class f4 extends bi{initTileLayer(){var e=this;return ee(function*(){const r=e.parent.getLayerAttributeConfig(),n=e.getLayerOptions(),i=e.getSourceOption(),o=new UO(le({},n)).source(i.data,i.options);r&&Object.keys(r).forEach(a=>{var s,u;const l=a;o[l]((s=r[l])===null||s===void 0?void 0:s.field,(u=r[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:e.transforms}}}}const h4=`layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

out vec4 outputColor;

void main() {
  outputColor = u_color;
  outputColor.a *= u_opacity;
}
`,d4=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;

layout(std140) uniform commonUniorm {
  vec4 u_color;
  float u_opacity;
};

#pragma include "projection"

void main() {
  vec4 project_pos = project_position(vec4(a_Position, 1.0));
  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xyz, 1.0));
}

`;class p4 extends Et{getUninforms(){const e=this.getCommonUniformsInfo(),r=this.getUniformsBufferInfo(this.getStyleAttribute());return this.updateStyleUnifoms(),le(le({},e.uniformsOption),r.uniformsOption)}getCommonUniformsInfo(){const{opacity:e=1,color:r="#000"}=this.layer.getLayerConfig(),n={u_color:Ft(r),u_opacity:e||1};return this.getUniformsBufferInfo(n)}initModels(){var e=this;return ee(function*(){return e.buildModels()})()}buildModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),[yield e.layer.buildLayerModel({moduleName:"mask",vertexShader:d4,fragmentShader:h4,defines:e.getDefines(),triangulation:ka,depth:{enable:!1},pick:!1})]})()}clearModels(e=!0){e&&this.layerService.clear()}registerBuiltinAttributes(){return""}}const _4={fill:p4};class pg extends $r{constructor(...e){super(...e),v(this,"type","MaskLayer")}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new _4[r](e),yield e.initLayerModels()})()}getModelType(){return"fill"}}class m4 extends bi{initTileLayer(){var e=this;return ee(function*(){const r=e.parent.getLayerAttributeConfig(),n=e.getLayerOptions(),i=e.getSourceOption(),o=new pg(le({},n)).source(i.data,i.options);r&&Object.keys(r).forEach(a=>{var s,u;const l=a;o[l]((s=r[l])===null||s===void 0?void 0:s.field,(u=r[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getFeatures(e){return e?this.sourceTile.data.getTileData(e):[]}getSourceOption(){const e=this.parent.getSource(),{sourceLayer:r,featureId:n}=this.parent.getLayerConfig();return{data:{type:"FeatureCollection",features:this.getFeatures(r)},options:{parser:{type:"geojson",featureId:n},transforms:e.transforms}}}}const v4=["rasterData"];let g4=class extends bi{initTileLayer(){var e=this;return ee(function*(){const r=e.parent.getLayerAttributeConfig(),n=e.getLayerOptions(),i=e.getSourceOption(),o=new Ef(le({},n)).source(i.data,i.options);r&&Object.keys(r).forEach(a=>{var s,u;const l=a;o[l]((s=r[l])===null||s===void 0?void 0:s.field,(u=r[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource(),r=this.sourceTile.data.data,{rasterData:n}=r,i=gi(r,v4);return{data:n,options:{parser:le({type:"rasterRgb",extent:this.sourceTile.bounds},i),transforms:e.transforms}}}};class E4 extends bi{initTileLayer(){var e=this;return ee(function*(){const r=e.parent.getLayerAttributeConfig(),n=e.getLayerOptions(),i=e.getSourceOption(),o=new Ef(le({},n)).source(i.data,i.options);r&&Object.keys(r).forEach(a=>{var s,u;const l=a;o[l]((s=r[l])===null||s===void 0?void 0:s.field,(u=r[l])===null||u===void 0?void 0:u.values)}),yield e.addLayer(o),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource();return{data:this.sourceTile.data,options:{parser:{type:"image",extent:this.sourceTile.bounds},transforms:e.transforms}}}}const y4=["rasterData"],A4={positions:[0,1],colors:["#000","#fff"]};class T4 extends bi{constructor(...e){super(...e),v(this,"colorTexture",void 0)}initTileLayer(){var e=this;return ee(function*(){const r=e.parent.getLayerAttributeConfig(),n=e.getLayerOptions(),i=e.getSourceOption(),{rampColors:o,domain:a}=e.getLayerOptions();e.colorTexture=e.parent.textureService.getColorTexture(o,a);const s=new Ef(le(le({},n),{},{colorTexture:e.colorTexture})).source(i.data,i.options);r&&Object.keys(r).forEach(u=>{var l,f;const c=u;s[c]((l=r[c])===null||l===void 0?void 0:l.field,(f=r[c])===null||f===void 0?void 0:f.values)}),yield e.addLayer(s),e.isLoaded=!0})()}getSourceOption(){const e=this.parent.getSource(),r=this.sourceTile.data.data,{rasterData:n}=r,i=gi(r,y4);return{data:n,options:{parser:le({type:"raster",extent:this.sourceTile.bounds},i),transforms:e.transforms}}}styleUpdate(...e){const{rampColors:r=A4,domain:n}=e;this.colorTexture=this.parent.textureService.getColorTexture(r,n||Kc(r)),this.layers.forEach(i=>i.style({colorTexture:this.colorTexture}))}destroy(){this.layers.forEach(e=>e.destroy())}}class Ns extends bi{initTileLayer(){var e=this;return ee(function*(){const r=e.parent.getLayerAttributeConfig(),n=e.getLayerOptions(),i=u4(e.parent.type),o=e.getSourceOption();if(!o){e.isLoaded=!0,e.emit("loaded");return}const a=new i(le({},n)).source(o.data,o.options);Object.keys(r).forEach(s=>{var u,l;const f=s;a[f]((u=r[f])===null||u===void 0?void 0:u.field,(l=r[f])===null||l===void 0?void 0:l.values)}),yield e.addLayer(a),n.tileMask&&(yield e.addTileMask()),e.setLayerMinMaxZoom(a),e.isLoaded=!0,e.emit("loaded")})()}getSourceOption(){const e=this.parent.getSource(),{sourceLayer:r="defaultLayer",featureId:n="id"}=this.parent.getLayerConfig();return{data:{type:"FeatureCollection",features:this.getFeatures(r)},options:{parser:{type:"geojson",featureId:n},transforms:e.transforms}}}setLayerMinMaxZoom(e){e.getModelType()==="text"&&e.updateLayerConfig({maxZoom:this.z+1,minZoom:this.z-1})}getFeatures(e){return this.sourceTile.data.getTileData(e)}getFeatureById(e){const r=this.getMainLayer();return r?r.getSource().data.dataArray.filter(i=>i._id===e):[]}}function S4(t){switch(t.type){case"PolygonLayer":return Ns;case"LineLayer":return Ns;case"PointLayer":return Ns;case"TileDebugLayer":return c4;case"MaskLayer":return m4;case"RasterLayer":const{dataType:r}=t.getSource().parser;switch(r){case Sr.RGB:case Sr.CUSTOMRGB:return g4;case Sr.ARRAYBUFFER:case Sr.CUSTOMARRAYBUFFER:return T4;case Sr.TERRAINRGB:case Sr.CUSTOMTERRAINRGB:return E4;default:return f4}default:return Ns}}const x4=["shape","color","size","style","animate","filter","rotate","scale","setBlend","setSelect","setActive","disableMask","enableMask","addMask","removeMask"],{debounce:R4}=Mr;class b4{constructor(e){v(this,"parent",void 0),v(this,"tileLayerService",void 0),v(this,"mapService",void 0),v(this,"layerService",void 0),v(this,"rendererService",void 0),v(this,"pickingService",void 0),v(this,"tilePickService",void 0),v(this,"tilesetManager",void 0),v(this,"initedTileset",!1),v(this,"lastViewStates",void 0),v(this,"mapchange",()=>{var n;if(this.parent.isVisible()===!1)return;const{latLonBounds:i,zoom:o}=this.getCurrentView();this.lastViewStates&&this.lastViewStates.zoom===o&&this.lastViewStates.latLonBounds.toString()===i.toString()||(this.lastViewStates={zoom:o,latLonBounds:i},(n=this.tilesetManager)===null||n===void 0||n.throttleUpdate(o,i))}),v(this,"viewchange",R4(this.mapchange,24)),this.parent=e;const r=this.parent.getContainer();this.rendererService=r.rendererService,this.layerService=r.layerService,this.mapService=r.mapService,this.pickingService=r.pickingService,this.tileLayerService=new IM({rendererService:this.rendererService,layerService:this.layerService,parent:e}),this.tilePickService=new s4({tileLayerService:this.tileLayerService,layerService:this.layerService,parent:e}),this.parent.setLayerPickService(this.tilePickService),this.proxy(e),this.initTileSetManager()}initTileSetManager(){var e;const r=this.parent.getSource();if(this.tilesetManager=r.tileset,this.initedTileset||(this.bindTilesetEvent(),this.initedTileset=!0),this.parent.isVisible()===!1)return;const{latLonBounds:n,zoom:i}=this.getCurrentView();(e=this.tilesetManager)===null||e===void 0||e.update(i,n)}getCurrentView(){const e=this.mapService.getBounds(),r=[e[0][0],e[0][1],e[1][0],e[1][1]],n=this.mapService.getZoom();return{latLonBounds:r,zoom:n}}bindTilesetEvent(){this.tilesetManager.on("tile-loaded",e=>{}),this.tilesetManager.on("tile-unload",e=>{this.tileUnLoad(e)}),this.tilesetManager.on("tile-error",(e,r)=>{this.tileError(e)}),this.tilesetManager.on("tile-update",()=>{this.tileUpdate()}),this.mapService.on("zoomend",this.mapchange),this.mapService.on("moveend",this.viewchange)}render(){this.tileLayerService.render()}getLayers(){return this.tileLayerService.getLayers()}getTiles(){return this.tileLayerService.getTiles()}getTile(e){return this.tileLayerService.getTile(e)}tileLoaded(e){}tileError(e){console.warn("error:",e)}destroy(){var e;this.mapService.off("zoomend",this.mapchange),this.mapService.off("moveend",this.viewchange),(e=this.tilesetManager)===null||e===void 0||e.destroy(),this.tileLayerService.destroy()}reload(){var e;this.tilesetManager.clear();const{latLonBounds:r,zoom:n}=this.getCurrentView();(e=this.tilesetManager)===null||e===void 0||e.update(n,r)}tileUnLoad(e){this.tileLayerService.removeTile(e.key)}tileUpdate(){var e=this;return ee(function*(){if(!e.tilesetManager)return;const r=e.parent.getMinZoom(),n=e.parent.getMaxZoom(),i=e.tilesetManager.tiles.filter(o=>o.isLoaded).filter(o=>o.isVisibleChange).filter(o=>o.data).filter(o=>o.z>=r&&o.z<n);yield Promise.all(i.map(function(){var o=ee(function*(a){if(e.tileLayerService.hasTile(a.key))e.tileLayerService.updateTileVisible(a),e.tilePickService.setPickState(),e.layerService.reRender();else{const s=S4(e.parent),u=new s(a,e.parent);yield u.initTileLayer(),e.tilePickService.setPickState(),u.getLayers().length!==0&&(e.tileLayerService.addTile(u),e.tileLayerService.updateTileVisible(a),e.layerService.reRender())}});return function(a){return o.apply(this,arguments)}}())),e.tilesetManager.isLoaded&&e.parent.emit("tiles-loaded",e.tilesetManager.currentTiles)})()}setPickState(e){}pickRender(e){this.tilePickService.pickRender(e)}selectFeature(e){this.tilePickService.selectFeature(e)}highlightPickedFeature(e){this.tilePickService.highlightPickedFeature(e)}proxy(e){x4.forEach(r=>{const n=e[r].bind(e);e[r]=(...i)=>(n(...i),this.getLayers().map(o=>{o[r](...i)}),r==="style"&&this.getTiles().forEach(o=>o.styleUpdate(...i)),e)})}}class DL extends $r{constructor(...e){super(...e),v(this,"type","TileDebugLayer"),v(this,"zIndex",1e4),v(this,"defaultSourceConfig",{data:[],options:{parser:{type:"testTile"}}})}buildModels(){return ee(function*(){})()}}const C4=`layout(std140) uniform commonUniforms {
  float u_opacity;
};
in vec3 vVertexNormal;
in float v_offset;
in vec4 v_Color;

#pragma include "scene_uniforms"
out vec4 outputColor;
void main() {
  // float intensity = pow(0.5 + dot(normalize(vVertexNormal), normalize(u_CameraPosition)), 3.0);
  float intensity = pow(v_offset + dot(normalize(vVertexNormal), normalize(u_CameraPosition)), 3.0);
  // 去除背面
  if (intensity > 1.0) intensity = 0.0;

  outputColor = vec4(v_Color.rgb, v_Color.a * intensity * u_opacity);
}
`,O4=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
 float u_opacity;
};

#pragma include "scene_uniforms"
out vec3 vVertexNormal;
out vec4 v_Color;
out float v_offset;

void main() {
    float EARTH_RADIUS = 100.0;

    v_Color = a_Color;

    v_offset = min(((length(u_CameraPosition) - EARTH_RADIUS)/600.0) * 0.5 + 0.4, 1.0);
    vVertexNormal = a_Normal;

    gl_Position = u_ViewProjectionMatrix * u_ModelMatrix * vec4(a_Position, 1.0);
}
`,{isNumber:I4}=Mr;class M4 extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,NORMAL:9,UV:10})}getCommonUniformsInfo(){const{opacity:e=1}=this.layer.getLayerConfig(),r={u_opacity:I4(e)?e:1};return this.getUniformsBufferInfo(r)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.buildModels()})()}clearModels(){return""}buildModels(){var e=this;return ee(function*(){return e.layer.zIndex=-997,[yield e.layer.buildLayerModel({moduleName:"earthAtmoSphere",vertexShader:O4,fragmentShader:C4,defines:e.getDefines(),triangulation:tg,depth:{enable:!1},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}const B4=`uniform sampler2D u_texture;

in vec2 v_texCoord;
in float v_lightWeight;
out vec4 outputColor;

void main() {
  vec4 color = texture(SAMPLER_2D(u_texture), vec2(v_texCoord.x, v_texCoord.y));
  color.xyz = color.xyz * v_lightWeight;
  outputColor = color;
}
`,N4=`// attribute vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

// attribute vec2 a_Extrude;
// attribute float a_Size;
// attribute float a_Shape;

layout(std140) uniform commonUniforms {
	vec4 u_sunLight: [1.0, -10.5, 12.0,0.0];
	float u_ambientRatio : 0.5;
	float u_diffuseRatio : 0.3;
	float u_specularRatio : 0.2;
};

#pragma include "scene_uniforms"

out vec2 v_texCoord;
out float v_lightWeight;

float calc_lighting(vec4 pos) {

	vec3 worldPos = vec3(pos * u_ModelMatrix);

	vec3 worldNormal = a_Normal;

	// cal light weight
	vec3 viewDir = normalize(u_CameraPosition - worldPos);

	vec3 lightDir = normalize(u_sunLight.xyz);

	vec3 halfDir = normalize(viewDir+lightDir);
	// lambert
	float lambert = dot(worldNormal, lightDir);
	// specular
	float specular = pow(max(0.0, dot(worldNormal, halfDir)), 32.0);
	//sum to light weight
	float lightWeight = u_ambientRatio + u_diffuseRatio * lambert + u_specularRatio * specular;

	return lightWeight;
}

void main() {

	v_texCoord = a_Uv;

	float lightWeight = calc_lighting(vec4(a_Position, 1.0));
	v_lightWeight = lightWeight;

	gl_Position = u_ViewProjectionMatrix * u_ModelMatrix * vec4(a_Position, 1.0);
}
`;class P4 extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"earthTime",3.4),v(this,"sunX",1e3),v(this,"sunY",1e3),v(this,"sunZ",1e3),v(this,"sunRadius",Math.sqrt(this.sunX*this.sunX+this.sunY*this.sunY+this.sunZ*this.sunZ))}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,NORMAL:9,UV:10})}getCommonUniformsInfo(){const{animateOption:e,globalOptions:r}=this.layer.getLayerConfig();e!=null&&e.enable&&(this.mapService.rotateY({reg:.002}),this.earthTime+=.02,this.sunY=10,this.sunX=Math.cos(this.earthTime)*(this.sunRadius-this.sunY),this.sunZ=Math.sin(this.earthTime)*(this.sunRadius-this.sunY));const n={u_sunLight:[this.sunX,this.sunY,this.sunZ,0],u_ambientRatio:r?.ambientRatio||.6,u_diffuseRatio:r?.diffuseRatio||.4,u_specularRatio:r?.specularRatio||.1};return this.textures=[this.texture],this.getUniformsBufferInfo(n)}setEarthTime(e){this.earthTime=e,this.sunY=10,this.sunX=Math.cos(this.earthTime)*(this.sunRadius-this.sunY),this.sunZ=Math.sin(this.earthTime)*(this.sunRadius-this.sunY),this.layerService.throttleRenderLayers()}initModels(){var e=this;return ee(function*(){const{globalOptions:r}=e.layer.getLayerConfig();r?.earthTime!==void 0&&e.setEarthTime(r.earthTime);const n=e.layer.getSource(),{createTexture2D:i}=e.rendererService;return e.texture=i({height:0,width:0}),n.data.images.then(o=>{e.texture=i({data:o[0],width:o[0].width,height:o[0].height}),e.textures=[e.texture],e.layerService.reRender()}),e.initUniformsBuffer(),e.buildModels()})()}clearModels(){return""}buildModels(){var e=this;return ee(function*(){return e.layer.zIndex=-998,[yield e.layer.buildLayerModel({moduleName:"earthBase",vertexShader:N4,fragmentShader:B4,defines:e.getDefines(),triangulation:tg,depth:{enable:!0},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}const L4=`in vec3 vVertexNormal;
in vec4 v_Color;

layout(std140) uniform commonUniforms {
  float u_opacity;
};
out vec4 outputColor;
#pragma include "scene_uniforms"
void main() {
  float intensity = -dot(normalize(vVertexNormal), normalize(u_CameraPosition));
  // 去除背面
  if (intensity > 1.0) intensity = 0.0;

  outputColor = vec4(v_Color.rgb, v_Color.a * intensity * u_opacity);
}
`,D4=`layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_COLOR) vec4 a_Color;
layout(location = ATTRIBUTE_LOCATION_NORMAL) in vec3 a_Normal;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

layout(std140) uniform commonUniforms {
 float u_opacity;
};
#pragma include "scene_uniforms"

out vec3 vVertexNormal;
out vec4 v_Color;

void main() {
    v_Color = a_Color;

    vVertexNormal = a_Normal;

    gl_Position = u_ViewProjectionMatrix * u_ModelMatrix * vec4(a_Position, 1.0);
}
`,{isNumber:F4}=Mr;class w4 extends Et{get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,NORMAL:9,UV:10})}getCommonUniformsInfo(){const{opacity:e=1}=this.layer.getLayerConfig(),r={u_opacity:F4(e)?e:1};return this.getUniformsBufferInfo(r)}initModels(){var e=this;return ee(function*(){return e.initUniformsBuffer(),e.buildModels()})()}clearModels(){return""}buildModels(){var e=this;return ee(function*(){return e.layer.zIndex=-999,[yield e.layer.buildLayerModel({moduleName:"earthBloom",vertexShader:D4,fragmentShader:L4,defines:e.getDefines(),triangulation:rO,depth:{enable:!1},blend:e.getBlend()})]})()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"normal",type:Be.Attribute,descriptor:{name:"a_Normal",shaderLocation:this.attributeLocation.NORMAL,buffer:{usage:p.STATIC_DRAW,data:[],type:p.FLOAT},size:3,update:(e,r,n,i,o)=>o}}),this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}}const U4={base:P4,atomSphere:M4,bloomSphere:w4},k4=["base","atomSphere","bloomSphere"];class FL extends $r{constructor(...e){super(...e),v(this,"type","EarthLayer"),v(this,"defaultSourceConfig",{data:[],options:{parser:{type:"json"}}})}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new U4[r](e),yield e.initLayerModels()})()}setEarthTime(e){this.layerModel&&this.layerModel.setEarthTime?this.layerModel.setEarthTime(e):console.warn("请在 scene loaded 之后执行该方法！")}getModelType(){var e;const r=this.styleAttributeService.getLayerStyleAttribute("shape");let n=(r==null||(e=r.scale)===null||e===void 0?void 0:e.field)||"base";return k4.indexOf(n)<0&&(n="base"),n}}function ac(t,e,r){const n=ym(t,t.VERTEX_SHADER,e),i=ym(t,t.FRAGMENT_SHADER,r);if(!n||!i)return null;const o=t.createProgram();if(!o)return null;if(t.attachShader(o,n),t.attachShader(o,i),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS)){const l=t.getProgramInfoLog(o);return console.warn("Failed to link program: "+l),t.deleteProgram(o),t.deleteShader(i),t.deleteShader(n),null}const s=t.getProgramParameter(o,t.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=t.getActiveAttrib(o,l);o[f.name]=t.getAttribLocation(o,f.name)}const u=t.getProgramParameter(o,t.ACTIVE_UNIFORMS);for(let l=0;l<u;l++){const f=t.getActiveUniform(o,l);o[f.name]=t.getUniformLocation(o,f.name)}return o.vertexShader=n,o.fragmentShader=i,o}function ym(t,e,r){const n=t.createShader(e);if(n==null)return console.warn("unable to create shader"),null;if(t.shaderSource(n,r),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(n);return console.warn("Failed to compile shader: "+o),t.deleteShader(n),null}return n}function gn(t,e,r,n,i){const o=t.createTexture();return t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n,i,0,t.RGBA,t.UNSIGNED_BYTE,r),t.bindTexture(t.TEXTURE_2D,null),o}function z4(t,e,r){const n=t.createTexture();if(t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e),r instanceof HTMLImageElement)t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r);else{const i=Math.sqrt(r.length/4),o=i;t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,o,0,t.RGBA,t.UNSIGNED_BYTE,r)}return t.bindTexture(t.TEXTURE_2D,null),n}function Ps(t,e,r){t.activeTexture(t.TEXTURE0+r),t.bindTexture(t.TEXTURE_2D,e)}function sc(t,e){const r=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),r}const V4=`
 precision mediump float;

 attribute float a_index;

 uniform sampler2D u_particles;
 uniform float u_particles_res;

 varying vec2 v_particle_pos;

 void main() {
     vec4 color = texture2D(u_particles, vec2(
         fract(a_index / u_particles_res),
         floor(a_index / u_particles_res) / u_particles_res)
     );

     // decode current particle position from the pixel's RGBA value
     v_particle_pos = vec2( color.r / 255.0 + color.b, color.g / 255.0 + color.a);

     gl_PointSize = 1.0;
     gl_Position = vec4(2.0 * v_particle_pos.x - 1.0, 1.0 - 2.0 * v_particle_pos.y, 0, 1);
 }`,W4=`
 precision mediump float;

 uniform sampler2D u_wind;
 uniform vec2 u_wind_min;
 uniform vec2 u_wind_max;
 uniform sampler2D u_color_ramp;

 varying vec2 v_particle_pos;

 void main() {
     vec2 velocity = mix(u_wind_min, u_wind_max, texture2D(u_wind, v_particle_pos).rg);
     float speed_t = length(velocity) / length(u_wind_max);

     // color ramp is encoded in a 16x16 texture
     vec2 ramp_pos = vec2( fract(16.0 * speed_t), floor(16.0 * speed_t) / 16.0);

     gl_FragColor = texture2D(u_color_ramp, ramp_pos);
 }`,H4=`
 precision mediump float;

 attribute vec2 a_pos;

 varying vec2 v_tex_pos;

 void main() {
     v_tex_pos = a_pos;
     gl_Position = vec4(1.0 - 2.0 * a_pos, 0, 1);
     // framebuffer 始终用铺满屏幕的 texture
 }`,X4=`
 precision highp float;

 uniform sampler2D u_particles;
 uniform sampler2D u_wind;
 uniform vec2 u_wind_res;
 uniform vec2 u_wind_min;
 uniform vec2 u_wind_max;
 uniform float u_rand_seed;
 uniform float u_speed_factor;
 uniform float u_drop_rate;
 uniform float u_drop_rate_bump;

 varying vec2 v_tex_pos;

 // pseudo-random generator
 const vec3 rand_constants = vec3(12.9898, 78.233, 4375.85453);
 float rand(const vec2 co) {
 float t = dot(rand_constants.xy, co);
     return fract(sin(t) * (rand_constants.z + t));
 }

 // wind speed lookup; use manual bilinear filtering based on 4 adjacent pixels for smooth interpolation
 vec2 lookup_wind(const vec2 uv) {
     // return texture2D(u_wind, uv).rg; // lower-res hardware filtering
     vec2 px = 1.0 / u_wind_res;
     vec2 vc = (floor(uv * u_wind_res)) * px;
     vec2 f = fract(uv * u_wind_res);
     vec2 tl = texture2D(u_wind, vc).rg;
     vec2 tr = texture2D(u_wind, vc + vec2(px.x, 0)).rg;
     vec2 bl = texture2D(u_wind, vc + vec2(0, px.y)).rg;
     vec2 br = texture2D(u_wind, vc + px).rg;
     return mix(mix(tl, tr, f.x), mix(bl, br, f.x), f.y);
 }

 void main() {
     vec4 color = texture2D(u_particles, v_tex_pos);
     vec2 pos = vec2(
         color.r / 255.0 + color.b,
         color.g / 255.0 + color.a); // decode particle position from pixel RGBA
     vec2 velocity = mix(u_wind_min, u_wind_max, lookup_wind(pos));
     float speed_t = length(velocity) / length(u_wind_max);

     // take EPSG:4236 distortion into account for calculating where the particle moved
     float distortion = cos(radians(pos.y * 180.0 - 90.0));
     vec2 offset = vec2(velocity.x / distortion, -velocity.y) * 0.0001 * u_speed_factor;

     // update particle position, wrapping around the date line
     pos = fract(1.0 + pos + offset);

     // a random seed to use for the particle drop
     vec2 seed = (pos + v_tex_pos) * u_rand_seed;

     // drop rate is a chance a particle will restart at random position, to avoid degeneration
     float drop_rate = u_drop_rate + speed_t * u_drop_rate_bump;
     float drop = step(1.0 - drop_rate, rand(seed));

     vec2 random_pos = vec2(
         rand(seed + 1.3),
         rand(seed + 2.1));
         pos = mix(pos, random_pos, drop);

     // encode the new particle position back into RGBA
     gl_FragColor = vec4(
         fract(pos * 255.0),
         floor(pos * 255.0) / 255.0);
 }`,j4=`
     precision mediump float;

     attribute vec2 a_pos;

     varying vec2 v_tex_pos;

     void main() {
         v_tex_pos = a_pos;
         gl_Position = vec4(1.0 - 2.0 * a_pos, 0.0, 1.0);
         gl_PointSize = 100.0;
 }`,G4=`
 precision mediump float;

 uniform sampler2D u_screen;
 uniform float u_opacity;
 varying vec2 v_tex_pos;

 void main() {
     vec4 color = texture2D(u_screen, 1.0 - v_tex_pos);

     // a hack to guarantee opacity fade out even with a value close to 1.0
     gl_FragColor = vec4(floor(255.0 * color * u_opacity) / 255.0);
 }`;function Am(t){let e=document.createElement("canvas");const r=e.getContext("2d");e.width=256,e.height=1;const n=r.createLinearGradient(0,0,256,0);for(const i of Object.keys(t))n.addColorStop(+i,t[+i]);return r.fillStyle=n,r.fillRect(0,0,256,1),e=null,new Uint8Array(r.getImageData(0,0,256,1).data)}function Tm(t,e,r,n){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(r),t.vertexAttribPointer(r,n,t.FLOAT,!1,0,0)}function Ls(t,e,r){t.bindFramebuffer(t.FRAMEBUFFER,e),r&&t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0)}class $4{constructor(e){v(this,"width",512),v(this,"height",512),v(this,"pixels",void 0),v(this,"fadeOpacity",void 0),v(this,"speedFactor",void 0),v(this,"dropRate",void 0),v(this,"dropRateBump",void 0),v(this,"gl",void 0),v(this,"drawProgram",void 0),v(this,"fullScreenProgram",void 0),v(this,"updateProgram",void 0),v(this,"rampColors",void 0),v(this,"numParticles",65536),v(this,"numParticlesSize",void 0),v(this,"particleStateResolution",void 0),v(this,"quadBuffer",void 0),v(this,"particleIndexBuffer",void 0),v(this,"framebuffer",void 0),v(this,"colorRampTexture",void 0),v(this,"backgroundTexture",void 0),v(this,"screenTexture",void 0),v(this,"particleStateTexture0",void 0),v(this,"particleStateTexture1",void 0),v(this,"windTexture",void 0),v(this,"windData",void 0),this.gl=e.glContext,this.width=e.imageWidth,this.height=e.imageHeight,this.fadeOpacity=e.fadeOpacity,this.speedFactor=e.speedFactor,this.dropRate=e.dropRate,this.dropRateBump=e.dropRateBump,this.rampColors=e.rampColors,this.init()}init(){const e=this.gl;this.fadeOpacity=.996,this.speedFactor=.25,this.dropRate=.003,this.dropRateBump=.01,this.drawProgram=ac(e,V4,W4),this.fullScreenProgram=ac(e,j4,G4),this.updateProgram=ac(e,H4,X4),this.quadBuffer=sc(e,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1])),this.framebuffer=e.createFramebuffer(),this.colorRampTexture=gn(this.gl,this.gl.LINEAR,Am(this.rampColors),16,16);const r=new Uint8Array(this.width*this.height*4);this.backgroundTexture=gn(e,e.NEAREST,r,this.width,this.height),this.screenTexture=gn(e,e.NEAREST,r,this.width,this.height);const n=this.particleStateResolution=Math.ceil(Math.sqrt(this.numParticles));this.numParticlesSize=n*n;const i=new Uint8Array(this.numParticlesSize*4);for(let a=0;a<i.length;a++)i[a]=Math.floor(Math.random()*256);this.particleStateTexture0=gn(e,e.NEAREST,i,n,n),this.particleStateTexture1=gn(e,e.NEAREST,i,n,n);const o=new Float32Array(this.numParticlesSize);for(let a=0;a<this.numParticlesSize;a++)o[a]=a;this.particleIndexBuffer=sc(e,o)}setWind(e){this.windData=e,this.windTexture=z4(this.gl,this.gl.LINEAR,e.image)}updateParticelNum(e){const r=this.gl;if(e!==this.numParticles){this.numParticles=e;const n=this.particleStateResolution=Math.ceil(Math.sqrt(this.numParticles));this.numParticlesSize=n*n;const i=new Uint8Array(this.numParticlesSize*4);for(let a=0;a<i.length;a++)i[a]=Math.floor(Math.random()*256);this.particleStateTexture0=gn(r,r.NEAREST,i,n,n),this.particleStateTexture1=gn(r,r.NEAREST,i,n,n);const o=new Float32Array(this.numParticlesSize);for(let a=0;a<this.numParticlesSize;a++)o[a]=a;this.particleIndexBuffer=sc(r,o)}}updateWindDir(e,r,n,i){this.windData.uMin=e,this.windData.uMax=r,this.windData.vMin=n,this.windData.vMax=i}updateColorRampTexture(e){if(this.isColorChanged(e)){this.rampColors=e;const r=this.gl;r.deleteTexture(this.colorRampTexture),this.colorRampTexture=gn(r,r.LINEAR,Am(e),16,16)}}isColorChanged(e){const r=Object.keys(e);for(const n of r){const i=Number(n);if(!this.rampColors[i]||this.rampColors[i]&&this.rampColors[i]!==e[i])return!0}return!1}reSize(e,r){if(e!==this.width||r!==this.height){const n=this.gl;n.deleteTexture(this.backgroundTexture),n.deleteTexture(this.screenTexture),this.width=e,this.height=r;const i=new Uint8Array(e*r*4);this.backgroundTexture=gn(n,n.NEAREST,i,e,r),this.screenTexture=gn(n,n.NEAREST,i,e,r)}}draw(){var e;if((e=this.windData)!==null&&e!==void 0&&e.image){const r=this.gl;return Ps(r,this.windTexture,0),Ps(r,this.particleStateTexture0,1),this.drawScreen(),this.updateParticles(),{d:this.pixels,w:this.width,h:this.height}}else return{d:new Uint8Array([0,0,0,0]),w:1,h:1}}drawScreen(){const e=this.gl;Ls(e,this.framebuffer,this.screenTexture),e.viewport(0,0,this.width,this.height),e.disable(e.BLEND),this.drawFullTexture(this.backgroundTexture,this.fadeOpacity),this.drawParticles(),this.pixels=new Uint8Array(4*this.width*this.height),e.readPixels(0,0,this.width,this.height,e.RGBA,e.UNSIGNED_BYTE,this.pixels),Ls(e,null,null),e.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height);const r=this.backgroundTexture;this.backgroundTexture=this.screenTexture,this.screenTexture=r}drawFullTexture(e,r){const n=this.gl,i=this.fullScreenProgram;n.useProgram(i),n.bindBuffer(n.ARRAY_BUFFER,this.quadBuffer),n.vertexAttribPointer(i.a_pos,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i.a_pos),n.bindBuffer(n.ARRAY_BUFFER,null),Ps(n,e,2),n.uniform1i(i.u_screen,2),n.uniform1f(i.u_opacity,r),n.drawArrays(n.TRIANGLES,0,6)}drawParticles(){const e=this.gl,r=this.drawProgram;e.useProgram(r),Tm(e,this.particleIndexBuffer,r.a_index,1),Ps(e,this.colorRampTexture,2),e.uniform1i(r.u_wind,0),e.uniform1i(r.u_particles,1),e.uniform1i(r.u_color_ramp,2),e.uniform1f(r.u_particles_res,this.particleStateResolution),e.uniform2f(r.u_wind_min,this.windData.uMin,this.windData.vMin),e.uniform2f(r.u_wind_max,this.windData.uMax,this.windData.vMax),e.drawArrays(e.POINTS,0,this.numParticlesSize)}updateParticles(){const e=this.gl;Ls(e,this.framebuffer,this.particleStateTexture1),e.viewport(0,0,this.particleStateResolution,this.particleStateResolution);const r=this.updateProgram;e.useProgram(r),Tm(e,this.quadBuffer,r.a_pos,2),e.uniform1i(r.u_wind,0),e.uniform1i(r.u_particles,1),e.uniform1f(r.u_rand_seed,Math.random()),e.uniform2f(r.u_wind_res,this.windData.image.width*2,this.windData.image.height*2),e.uniform2f(r.u_wind_min,this.windData.uMin,this.windData.vMin),e.uniform2f(r.u_wind_max,this.windData.uMax,this.windData.vMax),e.uniform1f(r.u_speed_factor,this.speedFactor),e.uniform1f(r.u_drop_rate,this.dropRate),e.uniform1f(r.u_drop_rate_bump,this.dropRateBump),e.drawArrays(e.TRIANGLES,0,6);const n=this.particleStateTexture0;this.particleStateTexture0=this.particleStateTexture1,this.particleStateTexture1=n,Ls(e,null,null)}destroy(){this.gl.deleteBuffer(this.quadBuffer),this.gl.deleteBuffer(this.particleIndexBuffer),this.gl.deleteFramebuffer(this.framebuffer),this.gl.deleteShader(this.drawProgram.vertexShader),this.gl.deleteShader(this.drawProgram.fragmentShader),this.gl.deleteProgram(this.drawProgram),this.gl.deleteShader(this.fullScreenProgram.vertexShader),this.gl.deleteShader(this.fullScreenProgram.fragmentShader),this.gl.deleteProgram(this.fullScreenProgram),this.gl.deleteShader(this.updateProgram.vertexShader),this.gl.deleteShader(this.updateProgram.fragmentShader),this.gl.deleteProgram(this.updateProgram),this.gl.deleteTexture(this.colorRampTexture),this.gl.deleteTexture(this.backgroundTexture),this.gl.deleteTexture(this.screenTexture),this.gl.deleteTexture(this.particleStateTexture0),this.gl.deleteTexture(this.particleStateTexture1),this.gl.deleteTexture(this.windTexture)}}const Y4=`precision mediump float;
uniform float u_opacity: 1.0;
uniform sampler2D u_texture;
varying vec2 v_texCoord;
void main() {
  vec4 color = texture2D(u_texture,vec2(v_texCoord.x,v_texCoord.y));
  gl_FragColor = color;
  gl_FragColor.a *= u_opacity;
}
`,Z4=`precision highp float;
uniform mat4 u_ModelMatrix;

layout(location = ATTRIBUTE_LOCATION_POSITION) in vec3 a_Position;
layout(location = ATTRIBUTE_LOCATION_UV) in vec2 a_Uv;

varying vec2 v_texCoord;
#pragma include "projection"
void main() {
  v_texCoord = a_Uv;
  vec4 project_pos = project_position(vec4(a_Position, 1.0));

  gl_Position = project_common_position_to_clipspace(vec4(project_pos.xy, 0.0, 1.0));
}
`,Sm={0:"#3288bd",.1:"#66c2a5",.2:"#abdda4",.3:"#e6f598",.4:"#fee08b",.5:"#fdae61",.6:"#f46d43",1:"#d53e4f"};class K4 extends Et{constructor(...e){super(...e),v(this,"texture",void 0),v(this,"colorModel",void 0),v(this,"wind",void 0),v(this,"imageCoords",void 0),v(this,"sizeScale",.5),v(this,"frequency",new KA(7.2)),v(this,"cacheZoom",void 0)}get attributeLocation(){return Object.assign(super.attributeLocation,{MAX:super.attributeLocation.MAX,UV:9})}render(e){this.drawColorMode(e),this.frequency.run(()=>{this.drawWind()})}getUninforms(){throw new Error("Method not implemented.")}initModels(){var e=this;return ee(function*(){var r,n;const{uMin:i=-21.32,uMax:o=26.8,vMin:a=-21.57,vMax:s=21.42,fadeOpacity:u=.996,speedFactor:l=.25,dropRate:f=.003,dropRateBump:c=.01,rampColors:h=Sm,sizeScale:_=.5}=e.layer.getLayerConfig(),{createTexture2D:m}=e.rendererService,E=e.layer.getSource();e.texture=m({height:0,width:0}),e.cacheZoom=Math.floor(e.mapService.getZoom());const S=e.rendererService.getGLContext();e.imageCoords=(r=E.data)===null||r===void 0?void 0:r.dataArray[0].coordinates,(n=E.data)===null||n===void 0||(n=n.images)===null||n===void 0||n.then(P=>{var F;e.sizeScale=_*e.getZoomScale();const{imageWidth:V,imageHeight:pe}=e.getWindSize(),ce={glContext:S,imageWidth:V,imageHeight:pe,fadeOpacity:u,speedFactor:l,dropRate:f,dropRateBump:c,rampColors:h};e.wind=new $4(ce),e.wind.setWind({uMin:i,uMax:o,vMin:a,vMax:s,image:P[0]}),(F=e.texture)===null||F===void 0||F.destroy(),e.texture=m({width:V,height:pe}),e.layerService.reRender()});const M=yield e.layer.buildLayerModel({moduleName:"wind",vertexShader:Z4,fragmentShader:Y4,defines:e.getDefines(),triangulation:za,primitive:p.TRIANGLES,depth:{enable:!1}});return e.colorModel=M,[M]})()}getWindSize(){const e=this.mapService.lngLatToPixel(this.imageCoords[0]),r=this.mapService.lngLatToPixel(this.imageCoords[1]),n=Math.min(Math.floor((r.x-e.x)*this.sizeScale),2048),i=Math.min(Math.floor((e.y-r.y)*this.sizeScale),2048);return{imageWidth:n,imageHeight:i}}buildModels(){var e=this;return ee(function*(){return e.initModels()})()}clearModels(){var e,r;(e=this.texture)===null||e===void 0||e.destroy(),(r=this.wind)===null||r===void 0||r.destroy()}registerBuiltinAttributes(){this.styleAttributeService.registerStyleAttribute({name:"uv",type:Be.Attribute,descriptor:{name:"a_Uv",shaderLocation:this.attributeLocation.UV,buffer:{usage:p.DYNAMIC_DRAW,data:[],type:p.FLOAT},size:2,update:(e,r,n)=>[n[3],n[4]]}})}getZoomScale(){return Math.min((this.cacheZoom+4)/30*2,2)}drawWind(){if(this.wind){const{uMin:e=-21.32,uMax:r=26.8,vMin:n=-21.57,vMax:i=21.42,numParticles:o=65535,fadeOpacity:a=.996,speedFactor:s=.25,dropRate:u=.003,dropRateBump:l=.01,rampColors:f=Sm,sizeScale:c=.5}=this.layer.getLayerConfig();let h=o;const _=Math.floor(this.mapService.getZoom());if(typeof c=="number"&&c!==this.sizeScale||_!==this.cacheZoom){const M=this.getZoomScale();this.sizeScale=c,h*=M;const{imageWidth:P,imageHeight:F}=this.getWindSize();this.wind.reSize(P,F),this.cacheZoom=_}this.wind.updateWindDir(e,r,n,i),this.wind.updateParticelNum(h),this.wind.updateColorRampTexture(f),this.wind.fadeOpacity=a,this.wind.speedFactor=s,this.wind.dropRate=u,this.wind.dropRateBump=l;const{d:m,w:E,h:S}=this.wind.draw();this.rendererService.setBaseState(),this.texture.update({data:m,width:E,height:S})}}drawColorMode(e={}){var r;const{opacity:n}=this.layer.getLayerConfig();this.layerService.beforeRenderData(this.layer),this.layer.hooks.beforeRender.call(),this.layerService.renderMask(this.layer.masks),(r=this.colorModel)===null||r===void 0||r.draw({uniforms:{u_opacity:n||1,u_texture:this.texture},blend:this.getBlend(),stencil:this.getStencil(e)}),this.layer.hooks.afterRender.call()}}const q4={wind:K4};class wL extends $r{constructor(...e){super(...e),v(this,"type","WindLayer")}buildModels(){var e=this;return ee(function*(){const r=e.getModelType();e.layerModel=new q4[r](e),yield e.initLayerModels()})()}renderModels(e={}){return this.layerModel&&this.layerModel.render(e),this}getDefaultConfig(){const e=this.getModelType();return{wind:{}}[e]}getModelType(){return"wind"}}class UL extends yn{constructor(...e){super(...e),v(this,"isMoving",!1),v(this,"maskLayer",void 0),v(this,"move",r=>{switch(r.stopPropagation(),r.type){case"touchcancel":case"touchend":case"mouseup":{var n;this.isMoving=!1,["mouseup","mousemove","touchend","touchcancel","touchmove"].forEach(i=>{document.removeEventListener(i,this.move)}),(n=this.scene)===null||n===void 0||n.render();break}case"mousedown":case"touchstart":this.isMoving=!0,["mouseup","mousemove","touchend","touchcancel","touchmove"].forEach(i=>{document.addEventListener(i,this.move)});case"mousemove":case"touchmove":{if(this.isMoving)if(this.controlOption.orientation==="vertical"){let i;if("pageX"in r?i=r.pageX:r.touches&&r.touches.length&&r.touches[0].pageX?i=r.touches[0].pageX:r.changedTouches&&r.changedTouches.length&&(i=r.changedTouches[0].pageX),!i)break;const o=this.getContainerDOMRect(),a=this.getContainerSize(),s=a[0],u=o?.left||0,l=i-u+window.scrollX-document.documentElement.clientLeft,f=s-Math.min(Math.max(0,s-l),s),c=f/s;this.setOptions({ratio:c}),this.emit("moving",{size:[f,a[1]],ratio:[c,0]})}else{let i;if("pageY"in r?i=r.pageY:r.touches&&r.touches.length&&r.touches[0].pageY?i=r.touches[0].pageY:r.changedTouches&&r.changedTouches.length&&(i=r.changedTouches[0].pageY),!i)break;const o=this.getContainerDOMRect(),a=this.getContainerSize(),s=a[1],u=o?.top||0,l=i-u+window.scrollY-document.documentElement.clientTop,f=s-Math.min(Math.max(0,s-l),s),c=f/s;this.setOptions({ratio:c}),this.emit("moving",{size:[a[0],f],ratio:[0,c]})}break}}}),v(this,"getMaskLayer",()=>(console.log(this.getMaskGeoData()),new gf({visible:!1}).source(this.getMaskGeoData()).shape("fill").color("red").style({opacity:.1}))),v(this,"updateMask",()=>{var r;if(!this.mapsService)return;const n=this.getMaskGeoData();(r=this.maskLayer)===null||r===void 0||r.setData(n)})}getDefault(){return le(le({},super.getDefault()),{},{layers:[],rightLayers:[],ratio:.5,orientation:"vertical"})}onAdd(){const e=yt("div","l7-control-swipe");yt("button","l7-control-swipe__button",e);const{orientation:r="vertical",ratio:n=.5}=this.controlOption;return r==="horizontal"?(e.style.top=n*100+"%",e.style.left=""):(e.style.left=n*100+"%",e.style.top=""),e.classList.add(r),e}addTo(e){this.mapsService=e.mapService,this.renderService=e.rendererService,this.layerService=e.layerService,this.controlService=e.controlService,this.configService=e.globalConfigService,this.scene=e.sceneService,this.sceneContainer=e,this.isShow=!0,this.container=this.onAdd();const{className:r,style:n,layers:i,rightLayers:o}=this.controlOption;r&&this.setClassName(r),n&&this.setStyle(n),this.mapsService.getMarkerContainer().appendChild(this.container),this.maskLayer=this.getMaskLayer(),this.registerEvent();const a=co(e);return this.maskLayer.setContainer(a),this.scene.addLayer(this.maskLayer),this.addMaskToLayers(i,!1),this.addMaskToLayers(o,!0),this.emit("add",this),this}onRemove(){if(this.maskLayer){var e;const{layers:r,rightLayers:n}=this.controlOption;this.removeMaskFromLayers(r),this.removeMaskFromLayers(n),(e=this.layerService)===null||e===void 0||e.remove(this.maskLayer)}this.unRegisterEvent(),this.removeAllListeners()}show(){var e;const r=this.container;mi(r,"l7-control-swipe_hide");const{layers:n,rightLayers:i}=this.controlOption;n.forEach(o=>o.enableMask()),i.forEach(o=>o.enableMask()),(e=this.scene)===null||e===void 0||e.render(),this.isShow=!0,this.emit("show",this)}hide(){var e;const r=this.container;dn(r,"l7-control-swipe_hide");const{layers:n,rightLayers:i}=this.controlOption;n.forEach(o=>o.disableMask()),i.forEach(o=>o.disableMask()),(e=this.scene)===null||e===void 0||e.render(),this.isShow=!1,this.emit("hide",this)}setOptions(e){const r=le(le({},this.controlOption),e);if(e.className&&this.setClassName(e.className),e.style&&this.setStyle(e.style),(e.orientation||e.ratio!==void 0)&&this.setOrientationAndRatio(r.orientation,r.ratio),e.layers){const n=e.layers,i=this.controlOption.layers;this.setLayers(n,i,!1)}if(e.rightLayers){const n=e.rightLayers,i=this.controlOption.rightLayers;this.setLayers(n,i,!0)}this.controlOption=r,this.updateMask()}registerEvent(){this.container.addEventListener("mousedown",this.move),this.container.addEventListener("touchstart",this.move),this.mapsService.on("camerachange",this.updateMask)}unRegisterEvent(){var e;this.container.removeEventListener("mousedown",this.move),this.container.removeEventListener("touchstart",this.move),(e=this.mapsService)===null||e===void 0||e.off("camerachange",this.updateMask)}setOrientationAndRatio(e="vertical",r=.5){this.container.classList.remove("horizontal","vertical"),this.container.classList.add(e),e==="horizontal"?(this.container.style.top=r*100+"%",this.container.style.left=""):(this.container.style.left=r*100+"%",this.container.style.top="")}setLayers(e,r,n=!1){const i=e.filter(a=>r.includes(a)===!1),o=r.filter(a=>e.includes(a)===!1);this.addMaskToLayers(i,n),this.removeMaskFromLayers(o)}addMaskToLayers(e,r){e.forEach(n=>{n.updateLayerConfig({maskInside:!r}),n.addMask(this.maskLayer)})}removeMaskFromLayers(e){e.forEach(r=>{r.updateLayerConfig({maskInside:!0}),r.removeMask(this.maskLayer)})}getMaskGeoData(){const{ratio:e=.5,orientation:r="vertical"}=this.controlOption,n=r==="vertical",[i,o]=this.getBounds(),[a,s]=i,[u,l]=o;let f;if(n){const h=a+(u-a)*e;f=[[a,l],[h,l],[h,s],i,[a,l]]}else{const h=this.getContainerSize(),m=this.mapsService.containerToLngLat([h[0],h[1]*e]).lat;f=[[a,l],o,[u,m],[a,m],[a,l]]}return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[f]}}]}}getContainerDOMRect(){var e;return(e=this.mapsService.getContainer())===null||e===void 0?void 0:e.getBoundingClientRect()}getContainerSize(){return this.mapsService.getSize()}getBounds(){return this.mapsService.getBounds()}addLayer(e,r=!1){const n=Array.isArray(e)?e:[e];if(r){const i=this.controlOption.rightLayers.concat(...n);this.setOptions({rightLayers:i})}else{const i=this.controlOption.layers.concat(...n);this.setOptions({layers:i})}}removeLayer(e){const r=Array.isArray(e)?e:[e],n=this.controlOption.layers.filter(o=>r.includes(o)),i=this.controlOption.rightLayers.filter(o=>r.includes(o));this.setOptions({layers:n,rightLayers:i})}removeLayers(){this.setOptions({layers:[],rightLayers:[]})}}class kL extends yn{constructor(...e){super(...e),v(this,"disabled",void 0),v(this,"zoomInButton",void 0),v(this,"zoomOutButton",void 0),v(this,"zoomNumDiv",void 0),v(this,"zoomIn",()=>{!this.disabled&&this.mapsService.getZoom()<this.mapsService.getMaxZoom()&&this.mapsService.zoomIn()}),v(this,"zoomOut",()=>{!this.disabled&&this.mapsService.getZoom()>this.mapsService.getMinZoom()&&this.mapsService.zoomOut()}),v(this,"updateDisabled",()=>{const r=this.mapsService;this.zoomInButton.removeAttribute("disabled"),this.zoomOutButton.removeAttribute("disabled"),(this.disabled||r.getZoom()<=r.getMinZoom())&&this.zoomOutButton.setAttribute("disabled","true"),this.controlOption.showZoom&&this.zoomNumDiv&&(this.zoomNumDiv.innerText=String(Math.floor(r.getZoom()))),(this.disabled||r.getZoom()>=r.getMaxZoom())&&this.zoomInButton.setAttribute("disabled","true")})}getDefault(e){return le(le({},super.getDefault(e)),{},{position:go.BOTTOMRIGHT,name:"zoom",zoomInText:Nn("l7-icon-enlarge"),zoomInTitle:"Zoom in",zoomOutText:Nn("l7-icon-narrow"),zoomOutTitle:"Zoom out",showZoom:!1})}setOptions(e){super.setOptions(e),this.checkUpdateOption(e,["zoomInText","zoomInTitle","zoomOutText","zoomOutTitle","showZoom"])&&this.resetButtonGroup(this.container)}onAdd(){const e=yt("div","l7-control-zoom");return this.resetButtonGroup(e),this.mapsService.on("zoomend",this.updateDisabled),this.mapsService.on("zoomchange",this.updateDisabled),e}onRemove(){this.mapsService.off("zoomend",this.updateDisabled),this.mapsService.off("zoomchange",this.updateDisabled)}disable(){return this.disabled=!0,this.updateDisabled(),this}enable(){return this.disabled=!1,this.updateDisabled(),this}resetButtonGroup(e){Fa(e),this.zoomInButton=this.createButton(this.controlOption.zoomInText,this.controlOption.zoomInTitle,"l7-button-control",e,this.zoomIn),this.controlOption.showZoom&&(this.zoomNumDiv=this.createButton("0","","l7-button-control l7-control-zoom__number",e)),this.zoomOutButton=this.createButton(this.controlOption.zoomOutText,this.controlOption.zoomOutTitle,"l7-button-control",e,this.zoomOut),this.updateDisabled()}createButton(e,r,n,i,o){const a=yt("button",n,i);return typeof e=="string"?a.innerHTML=e:a.append(e),a.title=r,o&&a.addEventListener("click",o),a}}class Q4 extends Kn.EventEmitter{get lngLat(){var e;return(e=this.popupOption.lngLat)!==null&&e!==void 0?e:{lng:0,lat:0}}set lngLat(e){this.popupOption.lngLat=e}constructor(e){super(),v(this,"popupOption",void 0),v(this,"mapsService",void 0),v(this,"sceneService",void 0),v(this,"layerService",void 0),v(this,"scene",void 0),v(this,"closeButton",void 0),v(this,"container",void 0),v(this,"content",void 0),v(this,"contentTitle",void 0),v(this,"contentPanel",void 0),v(this,"tip",void 0),v(this,"isShow",!0),v(this,"onMouseMove",n=>{var i;const o=this.mapsService.getMapContainer(),{left:a=0,top:s=0}=(i=o?.getBoundingClientRect())!==null&&i!==void 0?i:{};this.setPopupPosition(n.clientX-a,n.clientY-s)}),v(this,"updateLngLatPosition",()=>{if(!this.mapsService||this.popupOption.followCursor)return;const{lng:n,lat:i}=this.lngLat,{x:o,y:a}=this.mapsService.lngLatToContainer([n,i]);this.setPopupPosition(o,a)}),v(this,"updateLngLatPositionWhenZoom",n=>{if(!this.mapsService||this.popupOption.followCursor)return;const i=n.map,o=i.getSize();o.x=o.x/2,o.y=o.y/2;const a=n.center,s=n.zoom,u=i.DE(this.lngLat,s,a);u.x=Math.round(u.x),u.y=Math.round(u.y),this.setPopupPosition(u.x,u.y,!0)}),v(this,"onKeyDown",n=>{n.keyCode===27&&this.remove()}),v(this,"onCloseButtonClick",n=>{n.stopPropagation&&n.stopPropagation(),this.hide()}),v(this,"updatePosition",(n,i=!0)=>{const o=!!this.lngLat,{className:a,style:s,maxWidth:u,anchor:l,stopPropagation:f}=this.popupOption;if(!this.mapsService||!o||!this.content)return;const c=this.mapsService.getMarkerContainer();if(!this.container&&c&&(this.container=yt("div",`l7-popup ${a??""} ${this.isShow?"":"l7-popup-hide"}`,c),s&&this.container.setAttribute("style",s),this.tip=yt("div","l7-popup-tip",this.container),this.container.appendChild(this.content),f&&["mousemove","mousedown","mouseup","click","dblclick"].forEach(h=>{this.container.addEventListener(h,_=>{_.stopPropagation()})}),this.container.style.whiteSpace="nowrap"),i?this.updateLngLatPositionWhenZoom(n):this.updateLngLatPosition(),sv(this.container,`${iu[l]}`),Rv(this.container,l,"popup"),u){const{width:h}=this.container.getBoundingClientRect();h>parseFloat(u)&&(this.container.style.width=u)}else this.container.style.removeProperty("width")}),v(this,"updateWhenZoom",n=>{this.updatePosition(n,!0)}),v(this,"update",()=>{this.updatePosition(null,!1)}),this.popupOption=le(le({},this.getDefault(e??{})),e);const{lngLat:r}=this.popupOption;r&&(this.lngLat=r)}getIsShow(){return this.isShow}addTo(e){this.mapsService=e.mapService,this.sceneService=e.sceneService,this.layerService=e.layerService,this.mapsService.on("camerachange",this.update),this.mapsService.on("viewchange",this.update),this.scene=e,this.update(),this.updateCloseOnClick(),this.updateCloseOnEsc(),this.updateFollowCursor();const{html:r,text:n,title:i}=this.popupOption;return r?this.setHTML(r):n&&this.setText(n),i&&this.setTitle(i),this.emit("open"),this}remove(){if(this!==null&&this!==void 0&&this.isOpen())return this.content&&cn(this.content),this.container&&(cn(this.container),delete this.container),this.mapsService&&(this.mapsService.off("camerachange",this.update),this.mapsService.off("viewchange",this.update),this.updateCloseOnClick(!0),this.updateCloseOnEsc(!0),this.updateFollowCursor(!0),delete this.mapsService),this.emit("close"),this}getOptions(){return this.popupOption}setOptions(e){this.show();const{className:r}=this.popupOption;if(this.popupOption=le(le({},this.popupOption),e),this.checkUpdateOption(e,["html","text","title","closeButton","closeButtonOffsets","maxWidth","anchor","stopPropagation","lngLat","offsets"])&&(this.container&&(cn(this.container),this.container=void 0),this.popupOption.html?this.setHTML(this.popupOption.html):this.popupOption.text&&this.setText(this.popupOption.text),this.popupOption.title&&this.setTitle(this.popupOption.title)),this.checkUpdateOption(e,["closeOnEsc"])&&this.updateCloseOnEsc(),this.checkUpdateOption(e,["closeOnClick"])&&this.updateCloseOnClick(),this.checkUpdateOption(e,["followCursor"])&&this.updateFollowCursor(),this.checkUpdateOption(e,["html"])&&e.html?this.setHTML(e.html):this.checkUpdateOption(e,["text"])&&e.text&&this.setText(e.text),this.checkUpdateOption(e,["className"])){var n;r&&this.container.classList.remove(r??""),this.container.classList.add((n=e.className)!==null&&n!==void 0?n:"")}if(this.checkUpdateOption(e,["style"])){var i;Zc(this.container,(i=e.style)!==null&&i!==void 0?i:"")}return this.checkUpdateOption(e,["lngLat"])&&e.lngLat&&this.setLnglat(e.lngLat),this}open(){return this.addTo(this.scene),this}close(){return this.remove(),this}show(){if(!this.isShow)return this.container&&mi(this.container,"l7-popup-hide"),this.isShow=!0,this.emit("show"),this}hide(){if(this.isShow)return this.container&&dn(this.container,"l7-popup-hide"),this.isShow=!1,this.emit("hide"),this}setHTML(e){return this.popupOption.html=e,this.setDOMContent(e)}setText(e){return this.popupOption.text=e,this.setDOMContent(window.document.createTextNode(e))}setTitle(e){this.show(),this.popupOption.title=e,e?(this.contentTitle||(this.contentTitle=yt("div","l7-popup-content__title"),this.content.firstChild?this.content.insertBefore(this.contentTitle,this.content.firstChild):this.content.append(this.contentTitle)),Fa(this.contentTitle),di(this.contentTitle,e)):this.contentTitle&&(cn(this.contentTitle),this.contentTitle=void 0)}panToPopup(){const{lng:e,lat:r}=this.lngLat;return this.popupOption.autoPan&&this.mapsService.panTo([e,r]),this}setLngLat(e){return this.setLnglat(e)}setLnglat(e){return this.show(),this.lngLat=e,Array.isArray(e)&&(this.lngLat={lng:e[0],lat:e[1]}),this.mapsService&&(this.mapsService.off("camerachange",this.update),this.mapsService.off("viewchange",this.update),this.mapsService.on("camerachange",this.update),this.mapsService.on("viewchange",this.update)),this.update(),this.popupOption.autoPan&&setTimeout(()=>{this.panToPopup()},0),this}getLnglat(){return this.lngLat}setMaxWidth(e){return this.popupOption.maxWidth=e,this.update(),this}isOpen(){return!!this.mapsService}getDefault(e){return{closeButton:!0,closeOnClick:!1,maxWidth:"240px",offsets:[0,0],anchor:Jc.BOTTOM,stopPropagation:!0,autoPan:!1,autoClose:!0,closeOnEsc:!1,followCursor:!1}}setDOMContent(e){return this.show(),this.createContent(),di(this.contentPanel,e),this.update(),this}updateCloseOnClick(e){const r=this.mapsService;r&&(r?.off("click",this.onCloseButtonClick),this.popupOption.closeOnClick&&!e&&requestAnimationFrame(()=>{r?.on("click",this.onCloseButtonClick)}))}updateCloseOnEsc(e){window.removeEventListener("keydown",this.onKeyDown),this.popupOption.closeOnEsc&&!e&&window.addEventListener("keydown",this.onKeyDown)}updateFollowCursor(e){var r;const n=(r=this.mapsService)===null||r===void 0?void 0:r.getContainer();n&&(n?.removeEventListener("mousemove",this.onMouseMove),this.popupOption.followCursor&&!e&&n?.addEventListener("mousemove",this.onMouseMove))}createContent(){if(this.content&&cn(this.content),this.contentTitle=void 0,this.content=yt("div","l7-popup-content",this.container),this.setTitle(this.popupOption.title),this.popupOption.closeButton){const e=Nn("l7-icon-guanbi");dn(e,"l7-popup-close-button"),this.content.appendChild(e),this.popupOption.closeButtonOffsets&&(e.style.right=this.popupOption.closeButtonOffsets[0]+"px",e.style.top=this.popupOption.closeButtonOffsets[1]+"px"),e.setAttribute("aria-label","Close popup"),e.addEventListener("click",()=>{this.hide()}),e.addEventListener("pointerup",r=>{r.stopPropagation()}),e.addEventListener("pointerdown",r=>{r.stopPropagation()}),this.closeButton=e}else this.closeButton=void 0;this.contentPanel=yt("div","l7-popup-content__panel",this.content)}setPopupPosition(e,r,n=!1){if(this.container){const{offsets:i}=this.popupOption;this.container.style.left=e+i[0]+"px",this.container.style.top=r-i[1]+"px",n?this.container.style.transition="left 0.25s cubic-bezier(0,0,0.25,1), top 0.25s cubic-bezier(0,0,0.25,1)":this.container.style.transition=""}}checkUpdateOption(e,r){return r.some(n=>n in e)}}const{get:J4}=Mr;class zL extends Q4{constructor(...e){super(...e),v(this,"layerClickCountByFrame",0),v(this,"layerConfigMap",new WeakMap),v(this,"displayFeatureInfo",void 0),v(this,"onLayerClick",(r,n)=>{requestAnimationFrame(()=>{if(this.popupOption.closeOnClick&&this.layerClickCountByFrame++,this.isShow&&this.isSameFeature(r,n.featureId))this.hide();else{const{title:i,content:o}=this.getLayerInfoFrag(r,n);this.setDOMContent(o),this.setLnglat(n.lngLat),this.setTitle(i),this.setDisplayFeatureInfo({layer:r,featureId:n.featureId}),this.show()}})}),v(this,"onSceneClick",()=>{this.layerClickCountByFrame=0,requestAnimationFrame(()=>{this.layerClickCountByFrame||this.hide()})}),v(this,"onLayerHide",()=>{this.hide(),this.setDisplayFeatureInfo(void 0)}),v(this,"updateCloseOnClick",()=>{})}get layerConfigItems(){var e;const{config:r,items:n}=this.popupOption;return(e=r??n)!==null&&e!==void 0?e:[]}getActualTriggerEvent(){const{trigger:e}=this.popupOption;return e==="click"?uv()?"click":"touchend":e}addTo(e){return super.addTo(e),this.bindLayerEvent(),this.hide(),this}remove(){return super.remove(),this.unbindLayerEvent(),this}setOptions(e){this.unbindLayerEvent();const r=le({},e),n=r.trigger||this.popupOption.trigger,i=r.items||this.popupOption.items,o=i?.length===0;r.followCursor=n==="hover"&&!o;const a=this.isShow;return super.setOptions(r),this.bindLayerEvent(),(o||!a)&&this.hide(),this}getDefault(e){const r=e.trigger==="hover";return le(le({},super.getDefault(e)),{},{trigger:"hover",followCursor:r,lngLat:{lng:0,lat:0},offsets:[0,10],closeButton:!1,closeOnClick:!0,autoClose:!1,closeOnEsc:!1})}bindLayerEvent(){const{trigger:e,closeOnClick:r}=this.popupOption,n=this.getActualTriggerEvent();this.layerConfigItems.forEach(i=>{var o;const a=this.getLayerByConfig(i);if(!a)return;const s=le({},i);if(e==="hover"){const c=this.onLayerMouseMove.bind(this,a),h=this.onLayerMouseOut.bind(this,a);s.onMouseMove=c,s.onMouseOut=h,a?.on("mousemove",c),a?.on("mouseout",h)}else{var u;const c=this.onLayerClick.bind(this,a);s.onClick=c,a?.on(n,c);const h=(u=this.mapsService)===null||u===void 0?void 0:u.getMapContainer();h&&r&&h.addEventListener(n,this.onSceneClick)}const l=a==null||(o=a.getSource)===null||o===void 0?void 0:o.call(a),f=this.onSourceUpdate.bind(this);l?.on("update",f),s.onSourceUpdate=f,this.layerConfigMap.set(a,s)})}unbindLayerEvent(){const e=this.getActualTriggerEvent();this.layerConfigItems.forEach(r=>{var n;const i=this.getLayerByConfig(r),o=i&&this.layerConfigMap.get(i);if(!o)return;const{onMouseMove:a,onMouseOut:s,onClick:u,onSourceUpdate:l}=o;if(a&&i.off("mousemove",a),s&&i.off("mouseout",s),u&&i.off(e,u),l){var f;i==null||(f=i.getSource())===null||f===void 0||f.off("update",l)}const c=(n=this.mapsService)===null||n===void 0?void 0:n.getMapContainer();c&&c.removeEventListener(e,this.onSceneClick)})}onLayerMouseMove(e,r){if(!this.isSameFeature(e,r.featureId)){const{title:n,content:i}=this.getLayerInfoFrag(e,r);this.setDOMContent(i),this.setTitle(n),this.setDisplayFeatureInfo({layer:e,featureId:r.featureId}),this.show()}}onLayerMouseOut(e){this.setDisplayFeatureInfo(void 0),this.isShow&&this.hide()}onSourceUpdate(){this.hide(),this.setDisplayFeatureInfo(void 0)}getLayerInfoFrag(e,r){const n=this.layerConfigMap.get(e);let i;const o=document.createDocumentFragment();if(n){let a=r.feature;a.type==="Feature"&&"properties"in a&&"geometry"in a&&(a=a.properties);const{title:s,fields:u,customContent:l}=n;if(s){i=document.createDocumentFragment();const f=s instanceof Function?s(a):s;di(i,f)}if(l){const f=l instanceof Function?l(a):l;di(o,f)}else u!=null&&u.length&&u?.forEach(f=>{var c,h;const{field:_,formatField:m,formatValue:E,getValue:S}=typeof f=="string"?{field:f}:f,M=yt("div","l7-layer-popup__row"),P=S?S(r.feature):J4(a,_),F=(c=m instanceof Function?m(_,a):m)!==null&&c!==void 0?c:_;let V=(h=E instanceof Function?E(P,a):E)!==null&&h!==void 0?h:P;const pe=yt("span","l7-layer-popup__key",M);di(pe,F),di(pe,document.createTextNode("："));const ce=yt("span","l7-layer-popup__value",M);Array.isArray(V)&&V.every(j=>!(j instanceof Object))&&(V=V.map(j=>String(j)).join(",")),di(ce,V),o.appendChild(M)})}return{title:i,content:o}}getLayerByConfig(e){const r=e.layer;if(r instanceof Object)return r;if(typeof r=="string")return this.layerService.getLayer(r)||this.layerService.getLayerByName(r)}isSameFeature(e,r){const n=this.displayFeatureInfo;return n&&e===n.layer&&r===n.featureId}setDisplayFeatureInfo(e){const r=this.displayFeatureInfo;r&&r.layer.off("hide",this.onLayerHide),e&&e.layer.on("hide",this.onLayerHide),this.displayFeatureInfo=e}}function eB(t,e){var r=typeof my<"u"&&!!my&&typeof my.showToast=="function"&&my.isFRM!==!0,n=typeof wx<"u"&&wx!==null&&(typeof wx.request<"u"||typeof wx.miniProgram<"u");if(!(r||n)&&(e||(e=document),!!e)){var i=e.head||e.getElementsByTagName("head")[0];if(!i){i=e.createElement("head");var o=e.body||e.getElementsByTagName("body")[0];o?o.parentNode.insertBefore(i,o):e.documentElement.appendChild(i)}var a=e.createElement("style");return a.type="text/css",a.styleSheet?a.styleSheet.cssText=t:a.appendChild(e.createTextNode(t)),i.appendChild(a),a}}eB(`.l7-marker-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.l7-marker {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 5;
  cursor: pointer;
}

.l7-marker-cluster {
  width: 40px;
  height: 40px;
  background-color: rgb(181 226 140 / 60%);
  background-clip: padding-box;
  border-radius: 20px;
}

.l7-marker-cluster div {
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
  font:
    12px 'Helvetica Neue',
    Arial,
    Helvetica,
    sans-serif;
  text-align: center;
  background-color: rgb(110 204 57 / 60%);
  border-radius: 15px;
}

.l7-marker-cluster span {
  line-height: 30px;
}

.l7-touch .l7-control-attribution,
.l7-touch .l7-control-layers,
.l7-touch .l7-bar {
  box-shadow: none;
}

.l7-touch .l7-control-layers,
.l7-touch .l7-bar {
  background-clip: padding-box;
  border: 2px solid rgb(0 0 0 / 20%);
}

.mapboxgl-ctrl-logo,
.amap-logo {
  display: none !important;
}

.l7-select-box {
  border: 3px dashed gray;
  border-radius: 2px;
  position: absolute;
  z-index: 999;
  box-sizing: border-box;
}

.l7-control-container {
  font:
    12px/1.5 'Helvetica Neue',
    Arial,
    Helvetica,
    sans-serif;
}

.l7-control-container .l7-control {
  position: relative;
  z-index: 999;
  float: left;
  clear: both;
  color: #595959;
  font-size: 12px;
  pointer-events: visiblepainted;

  /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}

.l7-control-container .l7-control.l7-control--hide {
  display: none;
}

.l7-control-container .l7-top {
  top: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}

.l7-control-container .l7-top .l7-control:not(.l7-control--hide) {
  margin-top: 8px;
}

.l7-control-container .l7-right {
  right: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}

.l7-control-container .l7-right .l7-control:not(.l7-control--hide) {
  margin-right: 8px;
}

.l7-control-container .l7-bottom {
  bottom: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}

.l7-control-container .l7-bottom .l7-control:not(.l7-control--hide) {
  margin-bottom: 8px;
}

.l7-control-container .l7-left {
  left: 0;
  display: flex;
  position: absolute;
  z-index: 999;
  pointer-events: none;
}

.l7-control-container .l7-left .l7-control:not(.l7-control--hide) {
  margin-left: 8px;
}

.l7-control-container .l7-center {
  position: absolute;
  display: flex;
  justify-content: center;
}

.l7-control-container .l7-center.l7-top,
.l7-control-container .l7-center.l7-bottom {
  width: 100%;
}

.l7-control-container .l7-center.l7-left,
.l7-control-container .l7-center.l7-right {
  height: 100%;
}

.l7-control-container .l7-center .l7-control {
  margin-right: 8px;
  margin-bottom: 8px;
}

.l7-control-container .l7-row {
  flex-direction: row;
}

.l7-control-container .l7-row.l7-top {
  align-items: flex-start;
}

.l7-control-container .l7-row.l7-bottom {
  align-items: flex-end;
}

.l7-control-container .l7-column {
  flex-direction: column;
}

.l7-control-container .l7-column.l7-left {
  align-items: flex-start;
}

.l7-control-container .l7-column.l7-right {
  align-items: flex-end;
}

.l7-button-control {
  min-width: 28px;
  height: 28px;
  background-color: #fff;
  border-width: 0;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
  line-height: 16px;
}

.l7-button-control .l7-iconfont {
  fill: #595959;
  color: #595959;
  width: 16px;
  height: 16px;
}

.l7-button-control.l7-button-control--row {
  padding: 0 16px 0 13px;
}

.l7-button-control.l7-button-control--row * + .l7-button-control__text {
  margin-left: 8px;
}

.l7-button-control.l7-button-control--column {
  height: 44px;
  flex-direction: column;
}

.l7-button-control.l7-button-control--column .l7-iconfont {
  margin-top: 3px;
}

.l7-button-control.l7-button-control--column .l7-button-control__text {
  margin-top: 3px;
  font-size: 10px;
  -webkit-transform: scale(0.83333);
          transform: scale(0.83333);
}

.l7-button-control:not(:disabled):hover {
  background-color: #f3f3f3;
}

.l7-button-control:not(:disabled):active {
  background-color: #f3f3f3;
}

.l7-button-control:disabled {
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: not-allowed;
}

.l7-button-control:disabled .l7-iconfont {
  fill: #bdbdbd;
  color: #bdbdbd;
}

.l7-button-control:disabled:hover {
  background-color: #fafafa;
}

.l7-button-control:disabled:active {
  background-color: #fafafa;
}

.l7-popper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  color: #595959;
}

.l7-popper.l7-popper-hide {
  display: none;
}

.l7-popper .l7-popper-content {
  min-height: 28px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
}

.l7-popper .l7-popper-arrow {
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
}

.l7-popper.l7-popper-left {
  flex-direction: row;
}

.l7-popper.l7-popper-left .l7-popper-arrow {
  border-left-color: #fff;
  margin: 10px 0;
}

.l7-popper.l7-popper-right {
  flex-direction: row-reverse;
}

.l7-popper.l7-popper-right .l7-popper-arrow {
  border-right-color: #fff;
  margin: 10px 0;
}

.l7-popper.l7-popper-top {
  flex-direction: column;
}

.l7-popper.l7-popper-top .l7-popper-arrow {
  border-top-color: #fff;
  margin: 0 10px;
}

.l7-popper.l7-popper-bottom {
  flex-direction: column-reverse;
}

.l7-popper.l7-popper-bottom .l7-popper-arrow {
  border-bottom-color: #fff;
  margin: 0 10px;
}

.l7-popper.l7-popper-start {
  align-items: flex-start;
}

.l7-popper.l7-popper-end {
  align-items: flex-end;
}

.l7-select-control--normal {
  padding: 4px 0;
}

.l7-select-control--normal .l7-select-control-item {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 16px;
  font-size: 12px;
  line-height: 24px;
}

.l7-select-control--normal .l7-select-control-item > * + * {
  margin-left: 6px;
}

.l7-select-control--normal .l7-select-control-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}

.l7-select-control--normal .l7-select-control-item:hover {
  background-color: #f3f3f3;
}

.l7-select-control--image {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: content-box;
  max-width: 460px;
  max-height: 400px;
  margin: 12px 0 0 12px;
  overflow: hidden auto;
}

.l7-select-control--image .l7-select-control-item {
  position: relative;
  display: flex;
  flex: 0 0 calc((100% - (12px + 9px) * 2) / 3);
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  margin-right: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  font-size: 12px;
  border: 1px solid #fff;
  border-radius: 2px;
}

.l7-select-control--image .l7-select-control-item img {
  width: 100%;
  height: 80px;
}

.l7-select-control--image .l7-select-control-item input[type='checkbox'] {
  position: absolute;
  top: 0;
  right: 0;
}

.l7-select-control--image .l7-select-control-item .l7-select-control-item-row {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 26px;
}

.l7-select-control--image .l7-select-control-item .l7-select-control-item-row > * + * {
  margin-left: 8px;
}

.l7-select-control--image .l7-select-control-item.l7-select-control-item-active {
  border-color: #0370fe;
}

.l7-select-control-item {
  cursor: pointer;
}

.l7-select-control-item input[type='checkbox'] {
  margin: 0;
  cursor: pointer;
}

.l7-select-control--multiple .l7-select-control-item:hover {
  background-color: transparent;
}

.l7-control-logo {
  width: 89px;
  height: 16px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.l7-control-logo img {
  height: 100%;
  width: 100%;
}

.l7-control-logo .l7-control-logo-link {
  display: block;
  cursor: pointer;
}

.l7-control-logo .l7-control-logo-link img {
  cursor: pointer;
}

.l7-control-mouse-location {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
  padding: 2px 4px;
  min-width: 130px;
}

.l7-control-zoom {
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
}

.l7-control-zoom .l7-button-control {
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  box-shadow: 0 0 0;
}

.l7-control-zoom .l7-button-control .l7-iconfont {
  width: 14px;
  height: 14px;
}

.l7-control-zoom .l7-button-control:last-child {
  border-bottom: 0;
}

.l7-control-zoom .l7-control-zoom__number {
  color: #595959;
  padding: 0;
}

.l7-control-zoom .l7-control-zoom__number:hover {
  background-color: #fff;
}

.l7-control-scale {
  display: flex;
  flex-direction: column;
}

.l7-control-scale .l7-control-scale-line {
  box-sizing: border-box;
  padding: 2px 5px 1px;
  overflow: hidden;
  color: #595959;
  font-size: 10px;
  line-height: 1.1;
  white-space: nowrap;
  background: #fff;
  border: 2px solid #000;
  border-top: 0;
  transition: width 0.1s;
}

.l7-control-scale .l7-control-scale-line + .l7-control-scale .l7-control-scale-line {
  margin-top: -2px;
  border-top: 2px solid #777;
  border-bottom: none;
}

.l7-right .l7-control-scale {
  display: flex;
  align-items: flex-end;
}

.l7-right .l7-control-scale .l7-control-scale-line {
  text-align: right;
}

.l7-popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  will-change: transform;
  pointer-events: none;
}

.l7-popup.l7-popup-hide {
  display: none;
}

.l7-popup .l7-popup-content {
  position: relative;
  padding: 16px;
  font-size: 14px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
}

.l7-popup .l7-popup-content .l7-popup-content__title {
  margin-bottom: 8px;
  font-weight: bold;
}

.l7-popup .l7-popup-content .l7-popup-close-button,
.l7-popup .l7-popup-content .l7-popup-content__title,
.l7-popup .l7-popup-content .l7-popup-content__panel {
  white-space: normal;
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  pointer-events: initial;
}

.l7-popup .l7-popup-content .l7-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 0 3px 0 0;
  cursor: pointer;
}

.l7-popup .l7-popup-tip {
  position: relative;
  z-index: 1;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}

.l7-popup.l7-popup-anchor-bottom,
.l7-popup.l7-popup-anchor-bottom-left,
.l7-popup.l7-popup-anchor-bottom-right {
  flex-direction: column-reverse;
}

.l7-popup.l7-popup-anchor-bottom .l7-popup-tip,
.l7-popup.l7-popup-anchor-bottom-left .l7-popup-tip,
.l7-popup.l7-popup-anchor-bottom-right .l7-popup-tip {
  bottom: 1px;
}

.l7-popup.l7-popup-anchor-top,
.l7-popup.l7-popup-anchor-top-left,
.l7-popup.l7-popup-anchor-top-right {
  flex-direction: column;
}

.l7-popup.l7-popup-anchor-top .l7-popup-tip,
.l7-popup.l7-popup-anchor-top-left .l7-popup-tip,
.l7-popup.l7-popup-anchor-top-right .l7-popup-tip {
  top: 1px;
}

.l7-popup.l7-popup-anchor-left {
  flex-direction: row;
}

.l7-popup.l7-popup-anchor-right {
  flex-direction: row-reverse;
}

.l7-popup-anchor-top .l7-popup-tip {
  position: relative;
  align-self: center;
  border-top: none;
  border-bottom-color: #fff;
}

.l7-popup-anchor-top-left .l7-popup-tip {
  align-self: flex-start;
  border-top: none;
  border-bottom-color: #fff;
  border-left: none;
}

.l7-popup-anchor-top-right .l7-popup-tip {
  align-self: flex-end;
  border-top: none;
  border-right: none;
  border-bottom-color: #fff;
}

.l7-popup-anchor-bottom .l7-popup-tip {
  align-self: center;
  border-top-color: #fff;
  border-bottom: none;
}

.l7-popup-anchor-bottom-left .l7-popup-tip {
  align-self: flex-start;
  border-top-color: #fff;
  border-bottom: none;
  border-left: none;
}

.l7-popup-anchor-bottom-right .l7-popup-tip {
  align-self: flex-end;
  border-top-color: #fff;
  border-right: none;
  border-bottom: none;
}

.l7-popup-anchor-left .l7-popup-tip {
  align-self: center;
  border-right-color: #fff;
  border-left: none;
}

.l7-popup-anchor-right .l7-popup-tip {
  right: 1px;
  align-self: center;
  border-right: none;
  border-left-color: #fff;
}

.l7-popup-anchor-top-left .l7-popup-content {
  border-top-left-radius: 0;
}

.l7-popup-anchor-top-right .l7-popup-content {
  border-top-right-radius: 0;
}

.l7-popup-anchor-bottom-left .l7-popup-content {
  border-bottom-left-radius: 0;
}

.l7-popup-anchor-bottom-right .l7-popup-content {
  border-bottom-right-radius: 0;
}

.l7-popup-track-pointer {
  display: none;
}

.l7-popup-track-pointer * {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
}

.l7-map:hover .l7-popup-track-pointer {
  display: flex;
}

.l7-map:active .l7-popup-track-pointer {
  display: none;
}

.l7-layer-popup__row {
  font-size: 12px;
}

.l7-layer-popup__row + .l7-layer-popup__row {
  margin-top: 4px;
}

.l7-control-swipe {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 6;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  touch-action: none;
}

.l7-control-swipe_hide {
  display: none;
}

.l7-control-swipe::before {
  position: absolute;
  top: -5000px;
  bottom: -5000px;
  left: 50%;
  z-index: -1;
  width: 4px;
  background: #fff;
  -webkit-transform: translate(-2px, 0);
          transform: translate(-2px, 0);
  content: '';
}

.l7-control-swipe.horizontal::before {
  inset: 50% -5000px auto;
  width: auto;
  height: 4px;
}

.l7-control-swipe__button {
  display: block;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  color: #595959;
  font-weight: bold;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  border: none;
  border-radius: 2px;
  outline: none;
}

.l7-control-swipe,
.l7-control-swipe__button {
  cursor: ew-resize;
}

.l7-control-swipe.horizontal,
.l7-control-swipe.horizontal button {
  cursor: ns-resize;
}

.l7-control-swipe::after,
.l7-control-swipe__button::before,
.l7-control-swipe__button::after {
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 50%;
  width: 2px;
  background: currentcolor;
  -webkit-transform: translate(-1px, 0);
          transform: translate(-1px, 0);
  content: '';
}

.l7-control-swipe__button::after {
  -webkit-transform: translateX(4px);
          transform: translateX(4px);
}

.l7-control-swipe__button::before {
  -webkit-transform: translateX(-6px);
          transform: translateX(-6px);
}
`);function tn(t){return t==null}var tB=function(t,e,r){return t<e?e:t>r?r:t};function so(t){return typeof t=="number"}var jc=function(t,e){return jc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},jc(t,e)};function Xt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");jc(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var zt=function(){return zt=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},zt.apply(this,arguments)};function rB(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function _o(t,e,r,n){function i(o){return o instanceof r?o:new r(function(a){a(o)})}return new(r||(r=Promise))(function(o,a){function s(f){try{l(n.next(f))}catch(c){a(c)}}function u(f){try{l(n.throw(f))}catch(c){a(c)}}function l(f){f.done?o(f.value):i(f.value).then(s,u)}l((n=n.apply(t,e||[])).next())})}function mo(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(f){return u([l,f])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(r=0)),r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(f){l=[6,f],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ti(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function un(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),i,o=[],a;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return o}function fa(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var _g={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(u,l,f){this.fn=u,this.context=l,this.once=f||!1}function o(u,l,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var _=new i(f,c||u,h),m=r?r+l:l;return u._events[m]?u._events[m].fn?u._events[m]=[u._events[m],_]:u._events[m].push(_):(u._events[m]=_,u._eventsCount++),u}function a(u,l){--u._eventsCount===0?u._events=new n:delete u._events[l]}function s(){this._events=new n,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],f,c;if(this._eventsCount===0)return l;for(c in f=this._events)e.call(f,c)&&l.push(r?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(f)):l},s.prototype.listeners=function(l){var f=r?r+l:l,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,_=c.length,m=new Array(_);h<_;h++)m[h]=c[h].fn;return m},s.prototype.listenerCount=function(l){var f=r?r+l:l,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(l,f,c,h,_,m){var E=r?r+l:l;if(!this._events[E])return!1;var S=this._events[E],M=arguments.length,P,F;if(S.fn){switch(S.once&&this.removeListener(l,S.fn,void 0,!0),M){case 1:return S.fn.call(S.context),!0;case 2:return S.fn.call(S.context,f),!0;case 3:return S.fn.call(S.context,f,c),!0;case 4:return S.fn.call(S.context,f,c,h),!0;case 5:return S.fn.call(S.context,f,c,h,_),!0;case 6:return S.fn.call(S.context,f,c,h,_,m),!0}for(F=1,P=new Array(M-1);F<M;F++)P[F-1]=arguments[F];S.fn.apply(S.context,P)}else{var V=S.length,pe;for(F=0;F<V;F++)switch(S[F].once&&this.removeListener(l,S[F].fn,void 0,!0),M){case 1:S[F].fn.call(S[F].context);break;case 2:S[F].fn.call(S[F].context,f);break;case 3:S[F].fn.call(S[F].context,f,c);break;case 4:S[F].fn.call(S[F].context,f,c,h);break;default:if(!P)for(pe=1,P=new Array(M-1);pe<M;pe++)P[pe-1]=arguments[pe];S[F].fn.apply(S[F].context,P)}}return!0},s.prototype.on=function(l,f,c){return o(this,l,f,c,!1)},s.prototype.once=function(l,f,c){return o(this,l,f,c,!0)},s.prototype.removeListener=function(l,f,c,h){var _=r?r+l:l;if(!this._events[_])return this;if(!f)return a(this,_),this;var m=this._events[_];if(m.fn)m.fn===f&&(!h||m.once)&&(!c||m.context===c)&&a(this,_);else{for(var E=0,S=[],M=m.length;E<M;E++)(m[E].fn!==f||h&&!m[E].once||c&&m[E].context!==c)&&S.push(m[E]);S.length?this._events[_]=S.length===1?S[0]:S:a(this,_)}return this},s.prototype.removeAllListeners=function(l){var f;return l?(f=r?r+l:l,this._events[f]&&a(this,f)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,t.exports=s})(_g);var nB=_g.exports;const mg=Io(nB);var C;(function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",t[t.FUNC_ADD=32774]="FUNC_ADD",t[t.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",t[t.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",t[t.BLEND_EQUATION=32777]="BLEND_EQUATION",t[t.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",t[t.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",t[t.BLEND_DST_RGB=32968]="BLEND_DST_RGB",t[t.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",t[t.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",t[t.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",t[t.BLEND_COLOR=32773]="BLEND_COLOR",t[t.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",t[t.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",t[t.LINE_WIDTH=2849]="LINE_WIDTH",t[t.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",t[t.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",t[t.CULL_FACE_MODE=2885]="CULL_FACE_MODE",t[t.FRONT_FACE=2886]="FRONT_FACE",t[t.DEPTH_RANGE=2928]="DEPTH_RANGE",t[t.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",t[t.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",t[t.DEPTH_FUNC=2932]="DEPTH_FUNC",t[t.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",t[t.STENCIL_FUNC=2962]="STENCIL_FUNC",t[t.STENCIL_FAIL=2964]="STENCIL_FAIL",t[t.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",t[t.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",t[t.STENCIL_REF=2967]="STENCIL_REF",t[t.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",t[t.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",t[t.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",t[t.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",t[t.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",t[t.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",t[t.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",t[t.VIEWPORT=2978]="VIEWPORT",t[t.SCISSOR_BOX=3088]="SCISSOR_BOX",t[t.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",t[t.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",t[t.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",t[t.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",t[t.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",t[t.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",t[t.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",t[t.RED_BITS=3410]="RED_BITS",t[t.GREEN_BITS=3411]="GREEN_BITS",t[t.BLUE_BITS=3412]="BLUE_BITS",t[t.ALPHA_BITS=3413]="ALPHA_BITS",t[t.DEPTH_BITS=3414]="DEPTH_BITS",t[t.STENCIL_BITS=3415]="STENCIL_BITS",t[t.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",t[t.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",t[t.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",t[t.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",t[t.SAMPLES=32937]="SAMPLES",t[t.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",t[t.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",t[t.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",t[t.VENDOR=7936]="VENDOR",t[t.RENDERER=7937]="RENDERER",t[t.VERSION=7938]="VERSION",t[t.IMPLEMENTATION_COLOR_READ_TYPE=35738]="IMPLEMENTATION_COLOR_READ_TYPE",t[t.IMPLEMENTATION_COLOR_READ_FORMAT=35739]="IMPLEMENTATION_COLOR_READ_FORMAT",t[t.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.BUFFER_SIZE=34660]="BUFFER_SIZE",t[t.BUFFER_USAGE=34661]="BUFFER_USAGE",t[t.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",t[t.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",t[t.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",t[t.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",t[t.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",t[t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",t[t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",t[t.CULL_FACE=2884]="CULL_FACE",t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK",t[t.BLEND=3042]="BLEND",t[t.DEPTH_TEST=2929]="DEPTH_TEST",t[t.DITHER=3024]="DITHER",t[t.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",t[t.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",t[t.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",t[t.SCISSOR_TEST=3089]="SCISSOR_TEST",t[t.STENCIL_TEST=2960]="STENCIL_TEST",t[t.NO_ERROR=0]="NO_ERROR",t[t.INVALID_ENUM=1280]="INVALID_ENUM",t[t.INVALID_VALUE=1281]="INVALID_VALUE",t[t.INVALID_OPERATION=1282]="INVALID_OPERATION",t[t.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",t[t.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",t[t.CW=2304]="CW",t[t.CCW=2305]="CCW",t[t.DONT_CARE=4352]="DONT_CARE",t[t.FASTEST=4353]="FASTEST",t[t.NICEST=4354]="NICEST",t[t.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT",t[t.DOUBLE=5130]="DOUBLE",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER",t[t.COMPILE_STATUS=35713]="COMPILE_STATUS",t[t.DELETE_STATUS=35712]="DELETE_STATUS",t[t.LINK_STATUS=35714]="LINK_STATUS",t[t.VALIDATE_STATUS=35715]="VALIDATE_STATUS",t[t.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",t[t.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",t[t.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",t[t.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",t[t.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",t[t.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",t[t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",t[t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",t[t.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",t[t.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",t[t.SHADER_TYPE=35663]="SHADER_TYPE",t[t.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",t[t.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",t[t.NEVER=512]="NEVER",t[t.ALWAYS=519]="ALWAYS",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.GEQUAL=518]="GEQUAL",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP",t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",t[t.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",t[t.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",t[t.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",t[t.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE=5890]="TEXTURE",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",t[t.TEXTURE0=33984]="TEXTURE0",t[t.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",t[t.REPEAT=10497]="REPEAT",t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t[t.TEXTURE_WIDTH=4096]="TEXTURE_WIDTH",t[t.TEXTURE_HEIGHT=4097]="TEXTURE_HEIGHT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.LOW_FLOAT=36336]="LOW_FLOAT",t[t.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",t[t.HIGH_FLOAT=36338]="HIGH_FLOAT",t[t.LOW_INT=36339]="LOW_INT",t[t.MEDIUM_INT=36340]="MEDIUM_INT",t[t.HIGH_INT=36341]="HIGH_INT",t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.RENDERBUFFER=36161]="RENDERBUFFER",t[t.RGBA4=32854]="RGBA4",t[t.RGB5_A1=32855]="RGB5_A1",t[t.RGB565=36194]="RGB565",t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX=6401]="STENCIL_INDEX",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",t[t.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",t[t.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",t[t.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",t[t.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",t[t.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",t[t.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",t[t.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",t[t.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",t[t.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",t[t.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",t[t.NONE=0]="NONE",t[t.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",t[t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",t[t.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",t[t.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER",t[t.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",t[t.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",t[t.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",t[t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",t[t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",t[t.READ_BUFFER=3074]="READ_BUFFER",t[t.UNPACK_ROW_LENGTH=3314]="UNPACK_ROW_LENGTH",t[t.UNPACK_SKIP_ROWS=3315]="UNPACK_SKIP_ROWS",t[t.UNPACK_SKIP_PIXELS=3316]="UNPACK_SKIP_PIXELS",t[t.PACK_ROW_LENGTH=3330]="PACK_ROW_LENGTH",t[t.PACK_SKIP_ROWS=3331]="PACK_SKIP_ROWS",t[t.PACK_SKIP_PIXELS=3332]="PACK_SKIP_PIXELS",t[t.TEXTURE_BINDING_3D=32874]="TEXTURE_BINDING_3D",t[t.UNPACK_SKIP_IMAGES=32877]="UNPACK_SKIP_IMAGES",t[t.UNPACK_IMAGE_HEIGHT=32878]="UNPACK_IMAGE_HEIGHT",t[t.MAX_3D_TEXTURE_SIZE=32883]="MAX_3D_TEXTURE_SIZE",t[t.MAX_ELEMENTS_VERTICES=33e3]="MAX_ELEMENTS_VERTICES",t[t.MAX_ELEMENTS_INDICES=33001]="MAX_ELEMENTS_INDICES",t[t.MAX_TEXTURE_LOD_BIAS=34045]="MAX_TEXTURE_LOD_BIAS",t[t.MAX_FRAGMENT_UNIFORM_COMPONENTS=35657]="MAX_FRAGMENT_UNIFORM_COMPONENTS",t[t.MAX_VERTEX_UNIFORM_COMPONENTS=35658]="MAX_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_ARRAY_TEXTURE_LAYERS=35071]="MAX_ARRAY_TEXTURE_LAYERS",t[t.MIN_PROGRAM_TEXEL_OFFSET=35076]="MIN_PROGRAM_TEXEL_OFFSET",t[t.MAX_PROGRAM_TEXEL_OFFSET=35077]="MAX_PROGRAM_TEXEL_OFFSET",t[t.MAX_VARYING_COMPONENTS=35659]="MAX_VARYING_COMPONENTS",t[t.FRAGMENT_SHADER_DERIVATIVE_HINT=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT",t[t.RASTERIZER_DISCARD=35977]="RASTERIZER_DISCARD",t[t.VERTEX_ARRAY_BINDING=34229]="VERTEX_ARRAY_BINDING",t[t.MAX_VERTEX_OUTPUT_COMPONENTS=37154]="MAX_VERTEX_OUTPUT_COMPONENTS",t[t.MAX_FRAGMENT_INPUT_COMPONENTS=37157]="MAX_FRAGMENT_INPUT_COMPONENTS",t[t.MAX_SERVER_WAIT_TIMEOUT=37137]="MAX_SERVER_WAIT_TIMEOUT",t[t.MAX_ELEMENT_INDEX=36203]="MAX_ELEMENT_INDEX",t[t.RED=6403]="RED",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB10_A2=32857]="RGB10_A2",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_WRAP_R=32882]="TEXTURE_WRAP_R",t[t.TEXTURE_MIN_LOD=33082]="TEXTURE_MIN_LOD",t[t.TEXTURE_MAX_LOD=33083]="TEXTURE_MAX_LOD",t[t.TEXTURE_BASE_LEVEL=33084]="TEXTURE_BASE_LEVEL",t[t.TEXTURE_MAX_LEVEL=33085]="TEXTURE_MAX_LEVEL",t[t.TEXTURE_COMPARE_MODE=34892]="TEXTURE_COMPARE_MODE",t[t.TEXTURE_COMPARE_FUNC=34893]="TEXTURE_COMPARE_FUNC",t[t.SRGB=35904]="SRGB",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.COMPARE_REF_TO_TEXTURE=34894]="COMPARE_REF_TO_TEXTURE",t[t.RGBA32F=34836]="RGBA32F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.RGB16F=34843]="RGB16F",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_BINDING_2D_ARRAY=35869]="TEXTURE_BINDING_2D_ARRAY",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R16F=33325]="R16F",t[t.R32F=33326]="R32F",t[t.RG16F=33327]="RG16F",t[t.RG32F=33328]="RG32F",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2UI=36975]="RGB10_A2UI",t[t.TEXTURE_IMMUTABLE_FORMAT=37167]="TEXTURE_IMMUTABLE_FORMAT",t[t.TEXTURE_IMMUTABLE_LEVELS=33503]="TEXTURE_IMMUTABLE_LEVELS",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.RG=33319]="RG",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.INT_2_10_10_10_REV=36255]="INT_2_10_10_10_REV",t[t.CURRENT_QUERY=34917]="CURRENT_QUERY",t[t.QUERY_RESULT=34918]="QUERY_RESULT",t[t.QUERY_RESULT_AVAILABLE=34919]="QUERY_RESULT_AVAILABLE",t[t.ANY_SAMPLES_PASSED=35887]="ANY_SAMPLES_PASSED",t[t.ANY_SAMPLES_PASSED_CONSERVATIVE=36202]="ANY_SAMPLES_PASSED_CONSERVATIVE",t[t.MAX_DRAW_BUFFERS=34852]="MAX_DRAW_BUFFERS",t[t.DRAW_BUFFER0=34853]="DRAW_BUFFER0",t[t.DRAW_BUFFER1=34854]="DRAW_BUFFER1",t[t.DRAW_BUFFER2=34855]="DRAW_BUFFER2",t[t.DRAW_BUFFER3=34856]="DRAW_BUFFER3",t[t.DRAW_BUFFER4=34857]="DRAW_BUFFER4",t[t.DRAW_BUFFER5=34858]="DRAW_BUFFER5",t[t.DRAW_BUFFER6=34859]="DRAW_BUFFER6",t[t.DRAW_BUFFER7=34860]="DRAW_BUFFER7",t[t.DRAW_BUFFER8=34861]="DRAW_BUFFER8",t[t.DRAW_BUFFER9=34862]="DRAW_BUFFER9",t[t.DRAW_BUFFER10=34863]="DRAW_BUFFER10",t[t.DRAW_BUFFER11=34864]="DRAW_BUFFER11",t[t.DRAW_BUFFER12=34865]="DRAW_BUFFER12",t[t.DRAW_BUFFER13=34866]="DRAW_BUFFER13",t[t.DRAW_BUFFER14=34867]="DRAW_BUFFER14",t[t.DRAW_BUFFER15=34868]="DRAW_BUFFER15",t[t.MAX_COLOR_ATTACHMENTS=36063]="MAX_COLOR_ATTACHMENTS",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",t[t.MAX_SAMPLES=36183]="MAX_SAMPLES",t[t.SAMPLER_BINDING=35097]="SAMPLER_BINDING",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.PIXEL_PACK_BUFFER_BINDING=35053]="PIXEL_PACK_BUFFER_BINDING",t[t.PIXEL_UNPACK_BUFFER_BINDING=35055]="PIXEL_UNPACK_BUFFER_BINDING",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.COPY_READ_BUFFER_BINDING=36662]="COPY_READ_BUFFER_BINDING",t[t.COPY_WRITE_BUFFER_BINDING=36663]="COPY_WRITE_BUFFER_BINDING",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.UNSIGNED_NORMALIZED=35863]="UNSIGNED_NORMALIZED",t[t.SIGNED_NORMALIZED=36764]="SIGNED_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_INTEGER=35069]="VERTEX_ATTRIB_ARRAY_INTEGER",t[t.VERTEX_ATTRIB_ARRAY_DIVISOR=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR",t[t.TRANSFORM_FEEDBACK_BUFFER_MODE=35967]="TRANSFORM_FEEDBACK_BUFFER_MODE",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS=35968]="MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",t[t.TRANSFORM_FEEDBACK_VARYINGS=35971]="TRANSFORM_FEEDBACK_VARYINGS",t[t.TRANSFORM_FEEDBACK_BUFFER_START=35972]="TRANSFORM_FEEDBACK_BUFFER_START",t[t.TRANSFORM_FEEDBACK_BUFFER_SIZE=35973]="TRANSFORM_FEEDBACK_BUFFER_SIZE",t[t.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN=35976]="TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",t[t.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS=35978]="MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS=35979]="MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",t[t.INTERLEAVED_ATTRIBS=35980]="INTERLEAVED_ATTRIBS",t[t.SEPARATE_ATTRIBS=35981]="SEPARATE_ATTRIBS",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER_BINDING=35983]="TRANSFORM_FEEDBACK_BUFFER_BINDING",t[t.TRANSFORM_FEEDBACK=36386]="TRANSFORM_FEEDBACK",t[t.TRANSFORM_FEEDBACK_PAUSED=36387]="TRANSFORM_FEEDBACK_PAUSED",t[t.TRANSFORM_FEEDBACK_ACTIVE=36388]="TRANSFORM_FEEDBACK_ACTIVE",t[t.TRANSFORM_FEEDBACK_BINDING=36389]="TRANSFORM_FEEDBACK_BINDING",t[t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",t[t.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_RED_SIZE=33298]="FRAMEBUFFER_ATTACHMENT_RED_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE=33299]="FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE=33300]="FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE=33301]="FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE=33302]="FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE=33303]="FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",t[t.FRAMEBUFFER_DEFAULT=33304]="FRAMEBUFFER_DEFAULT",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DRAW_FRAMEBUFFER_BINDING=36006]="DRAW_FRAMEBUFFER_BINDING",t[t.READ_FRAMEBUFFER_BINDING=36010]="READ_FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_SAMPLES=36011]="RENDERBUFFER_SAMPLES",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER=36052]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",t[t.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE=36182]="FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.UNIFORM_BUFFER_BINDING=35368]="UNIFORM_BUFFER_BINDING",t[t.UNIFORM_BUFFER_START=35369]="UNIFORM_BUFFER_START",t[t.UNIFORM_BUFFER_SIZE=35370]="UNIFORM_BUFFER_SIZE",t[t.MAX_VERTEX_UNIFORM_BLOCKS=35371]="MAX_VERTEX_UNIFORM_BLOCKS",t[t.MAX_FRAGMENT_UNIFORM_BLOCKS=35373]="MAX_FRAGMENT_UNIFORM_BLOCKS",t[t.MAX_COMBINED_UNIFORM_BLOCKS=35374]="MAX_COMBINED_UNIFORM_BLOCKS",t[t.MAX_UNIFORM_BUFFER_BINDINGS=35375]="MAX_UNIFORM_BUFFER_BINDINGS",t[t.MAX_UNIFORM_BLOCK_SIZE=35376]="MAX_UNIFORM_BLOCK_SIZE",t[t.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS=35377]="MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS=35379]="MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",t[t.UNIFORM_BUFFER_OFFSET_ALIGNMENT=35380]="UNIFORM_BUFFER_OFFSET_ALIGNMENT",t[t.ACTIVE_UNIFORM_BLOCKS=35382]="ACTIVE_UNIFORM_BLOCKS",t[t.UNIFORM_TYPE=35383]="UNIFORM_TYPE",t[t.UNIFORM_SIZE=35384]="UNIFORM_SIZE",t[t.UNIFORM_BLOCK_INDEX=35386]="UNIFORM_BLOCK_INDEX",t[t.UNIFORM_OFFSET=35387]="UNIFORM_OFFSET",t[t.UNIFORM_ARRAY_STRIDE=35388]="UNIFORM_ARRAY_STRIDE",t[t.UNIFORM_MATRIX_STRIDE=35389]="UNIFORM_MATRIX_STRIDE",t[t.UNIFORM_IS_ROW_MAJOR=35390]="UNIFORM_IS_ROW_MAJOR",t[t.UNIFORM_BLOCK_BINDING=35391]="UNIFORM_BLOCK_BINDING",t[t.UNIFORM_BLOCK_DATA_SIZE=35392]="UNIFORM_BLOCK_DATA_SIZE",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORMS=35394]="UNIFORM_BLOCK_ACTIVE_UNIFORMS",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES=35395]="UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",t[t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER=35396]="UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",t[t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER=35398]="UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS",t[t.SYNC_FENCE=37142]="SYNC_FENCE",t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED",t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED",t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",t[t.COLOR=6144]="COLOR",t[t.DEPTH=6145]="DEPTH",t[t.STENCIL=6146]="STENCIL",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STREAM_COPY=35042]="STREAM_COPY",t[t.STATIC_READ=35045]="STATIC_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",t[t.INVALID_INDEX=4294967295]="INVALID_INDEX",t[t.TIMEOUT_IGNORED=-1]="TIMEOUT_IGNORED",t[t.MAX_CLIENT_WAIT_TIMEOUT_WEBGL=37447]="MAX_CLIENT_WAIT_TIMEOUT_WEBGL",t[t.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE",t[t.UNMASKED_VENDOR_WEBGL=37445]="UNMASKED_VENDOR_WEBGL",t[t.UNMASKED_RENDERER_WEBGL=37446]="UNMASKED_RENDERER_WEBGL",t[t.MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047]="MAX_TEXTURE_MAX_ANISOTROPY_EXT",t[t.TEXTURE_MAX_ANISOTROPY_EXT=34046]="TEXTURE_MAX_ANISOTROPY_EXT",t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37493]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37494]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37495]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37496]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37497]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",t[t.UNSIGNED_INT_24_8_WEBGL=34042]="UNSIGNED_INT_24_8_WEBGL",t[t.HALF_FLOAT_OES=36193]="HALF_FLOAT_OES",t[t.RGBA32F_EXT=34836]="RGBA32F_EXT",t[t.RGB32F_EXT=34837]="RGB32F_EXT",t[t.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT",t[t.UNSIGNED_NORMALIZED_EXT=35863]="UNSIGNED_NORMALIZED_EXT",t[t.MIN_EXT=32775]="MIN_EXT",t[t.MAX_EXT=32776]="MAX_EXT",t[t.SRGB_EXT=35904]="SRGB_EXT",t[t.SRGB_ALPHA_EXT=35906]="SRGB_ALPHA_EXT",t[t.SRGB8_ALPHA8_EXT=35907]="SRGB8_ALPHA8_EXT",t[t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT",t[t.FRAGMENT_SHADER_DERIVATIVE_HINT_OES=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT_OES",t[t.COLOR_ATTACHMENT0_WEBGL=36064]="COLOR_ATTACHMENT0_WEBGL",t[t.COLOR_ATTACHMENT1_WEBGL=36065]="COLOR_ATTACHMENT1_WEBGL",t[t.COLOR_ATTACHMENT2_WEBGL=36066]="COLOR_ATTACHMENT2_WEBGL",t[t.COLOR_ATTACHMENT3_WEBGL=36067]="COLOR_ATTACHMENT3_WEBGL",t[t.COLOR_ATTACHMENT4_WEBGL=36068]="COLOR_ATTACHMENT4_WEBGL",t[t.COLOR_ATTACHMENT5_WEBGL=36069]="COLOR_ATTACHMENT5_WEBGL",t[t.COLOR_ATTACHMENT6_WEBGL=36070]="COLOR_ATTACHMENT6_WEBGL",t[t.COLOR_ATTACHMENT7_WEBGL=36071]="COLOR_ATTACHMENT7_WEBGL",t[t.COLOR_ATTACHMENT8_WEBGL=36072]="COLOR_ATTACHMENT8_WEBGL",t[t.COLOR_ATTACHMENT9_WEBGL=36073]="COLOR_ATTACHMENT9_WEBGL",t[t.COLOR_ATTACHMENT10_WEBGL=36074]="COLOR_ATTACHMENT10_WEBGL",t[t.COLOR_ATTACHMENT11_WEBGL=36075]="COLOR_ATTACHMENT11_WEBGL",t[t.COLOR_ATTACHMENT12_WEBGL=36076]="COLOR_ATTACHMENT12_WEBGL",t[t.COLOR_ATTACHMENT13_WEBGL=36077]="COLOR_ATTACHMENT13_WEBGL",t[t.COLOR_ATTACHMENT14_WEBGL=36078]="COLOR_ATTACHMENT14_WEBGL",t[t.COLOR_ATTACHMENT15_WEBGL=36079]="COLOR_ATTACHMENT15_WEBGL",t[t.DRAW_BUFFER0_WEBGL=34853]="DRAW_BUFFER0_WEBGL",t[t.DRAW_BUFFER1_WEBGL=34854]="DRAW_BUFFER1_WEBGL",t[t.DRAW_BUFFER2_WEBGL=34855]="DRAW_BUFFER2_WEBGL",t[t.DRAW_BUFFER3_WEBGL=34856]="DRAW_BUFFER3_WEBGL",t[t.DRAW_BUFFER4_WEBGL=34857]="DRAW_BUFFER4_WEBGL",t[t.DRAW_BUFFER5_WEBGL=34858]="DRAW_BUFFER5_WEBGL",t[t.DRAW_BUFFER6_WEBGL=34859]="DRAW_BUFFER6_WEBGL",t[t.DRAW_BUFFER7_WEBGL=34860]="DRAW_BUFFER7_WEBGL",t[t.DRAW_BUFFER8_WEBGL=34861]="DRAW_BUFFER8_WEBGL",t[t.DRAW_BUFFER9_WEBGL=34862]="DRAW_BUFFER9_WEBGL",t[t.DRAW_BUFFER10_WEBGL=34863]="DRAW_BUFFER10_WEBGL",t[t.DRAW_BUFFER11_WEBGL=34864]="DRAW_BUFFER11_WEBGL",t[t.DRAW_BUFFER12_WEBGL=34865]="DRAW_BUFFER12_WEBGL",t[t.DRAW_BUFFER13_WEBGL=34866]="DRAW_BUFFER13_WEBGL",t[t.DRAW_BUFFER14_WEBGL=34867]="DRAW_BUFFER14_WEBGL",t[t.DRAW_BUFFER15_WEBGL=34868]="DRAW_BUFFER15_WEBGL",t[t.MAX_COLOR_ATTACHMENTS_WEBGL=36063]="MAX_COLOR_ATTACHMENTS_WEBGL",t[t.MAX_DRAW_BUFFERS_WEBGL=34852]="MAX_DRAW_BUFFERS_WEBGL",t[t.VERTEX_ARRAY_BINDING_OES=34229]="VERTEX_ARRAY_BINDING_OES",t[t.QUERY_COUNTER_BITS_EXT=34916]="QUERY_COUNTER_BITS_EXT",t[t.CURRENT_QUERY_EXT=34917]="CURRENT_QUERY_EXT",t[t.QUERY_RESULT_EXT=34918]="QUERY_RESULT_EXT",t[t.QUERY_RESULT_AVAILABLE_EXT=34919]="QUERY_RESULT_AVAILABLE_EXT",t[t.TIME_ELAPSED_EXT=35007]="TIME_ELAPSED_EXT",t[t.TIMESTAMP_EXT=36392]="TIMESTAMP_EXT",t[t.GPU_DISJOINT_EXT=36795]="GPU_DISJOINT_EXT"})(C||(C={}));var Tt;(function(t){t[t.Buffer=0]="Buffer",t[t.Texture=1]="Texture",t[t.RenderTarget=2]="RenderTarget",t[t.Sampler=3]="Sampler",t[t.Program=4]="Program",t[t.Bindings=5]="Bindings",t[t.InputLayout=6]="InputLayout",t[t.RenderPipeline=7]="RenderPipeline",t[t.ComputePipeline=8]="ComputePipeline",t[t.Readback=9]="Readback",t[t.QueryPool=10]="QueryPool",t[t.RenderBundle=11]="RenderBundle"})(Tt||(Tt={}));var Ot;(function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"})(Ot||(Ot={}));var La;(function(t){t[t.CCW=2305]="CCW",t[t.CW=2304]="CW"})(La||(La={}));var zr;(function(t){t[t.NONE=0]="NONE",t[t.FRONT=1]="FRONT",t[t.BACK=2]="BACK",t[t.FRONT_AND_BACK=3]="FRONT_AND_BACK"})(zr||(zr={}));var ft;(function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC=768]="SRC",t[t.ONE_MINUS_SRC=769]="ONE_MINUS_SRC",t[t.DST=774]="DST",t[t.ONE_MINUS_DST=775]="ONE_MINUS_DST",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.CONST=32769]="CONST",t[t.ONE_MINUS_CONSTANT=32770]="ONE_MINUS_CONSTANT",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE"})(ft||(ft={}));var pr;(function(t){t[t.ADD=32774]="ADD",t[t.SUBSTRACT=32778]="SUBSTRACT",t[t.REVERSE_SUBSTRACT=32779]="REVERSE_SUBSTRACT",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX"})(pr||(pr={}));var Lr;(function(t){t[t.CLAMP_TO_EDGE=0]="CLAMP_TO_EDGE",t[t.REPEAT=1]="REPEAT",t[t.MIRRORED_REPEAT=2]="MIRRORED_REPEAT"})(Lr||(Lr={}));var jt;(function(t){t[t.POINT=0]="POINT",t[t.BILINEAR=1]="BILINEAR"})(jt||(jt={}));var ur;(function(t){t[t.NO_MIP=0]="NO_MIP",t[t.NEAREST=1]="NEAREST",t[t.LINEAR=2]="LINEAR"})(ur||(ur={}));var er;(function(t){t[t.POINTS=0]="POINTS",t[t.TRIANGLES=1]="TRIANGLES",t[t.TRIANGLE_STRIP=2]="TRIANGLE_STRIP",t[t.LINES=3]="LINES",t[t.LINE_STRIP=4]="LINE_STRIP"})(er||(er={}));var Dt;(function(t){t[t.MAP_READ=1]="MAP_READ",t[t.MAP_WRITE=2]="MAP_WRITE",t[t.COPY_SRC=4]="COPY_SRC",t[t.COPY_DST=8]="COPY_DST",t[t.INDEX=16]="INDEX",t[t.VERTEX=32]="VERTEX",t[t.UNIFORM=64]="UNIFORM",t[t.STORAGE=128]="STORAGE",t[t.INDIRECT=256]="INDIRECT",t[t.QUERY_RESOLVE=512]="QUERY_RESOLVE"})(Dt||(Dt={}));var pn;(function(t){t[t.STATIC=1]="STATIC",t[t.DYNAMIC=2]="DYNAMIC"})(pn||(pn={}));var Si;(function(t){t[t.VERTEX=1]="VERTEX",t[t.INSTANCE=2]="INSTANCE"})(Si||(Si={}));var xm;(function(t){t.LOADED="loaded"})(xm||(xm={}));var ht;(function(t){t[t.TEXTURE_2D=0]="TEXTURE_2D",t[t.TEXTURE_2D_ARRAY=1]="TEXTURE_2D_ARRAY",t[t.TEXTURE_3D=2]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP=3]="TEXTURE_CUBE_MAP"})(ht||(ht={}));var Ir;(function(t){t[t.SAMPLED=1]="SAMPLED",t[t.RENDER_TARGET=2]="RENDER_TARGET",t[t.STORAGE=4]="STORAGE"})(Ir||(Ir={}));var dr;(function(t){t[t.NONE=0]="NONE",t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA",t[t.RGB=7]="RGB",t[t.ALL=15]="ALL"})(dr||(dr={}));var Ht;(function(t){t[t.KEEP=7680]="KEEP",t[t.ZERO=0]="ZERO",t[t.REPLACE=7681]="REPLACE",t[t.INVERT=5386]="INVERT",t[t.INCREMENT_CLAMP=7682]="INCREMENT_CLAMP",t[t.DECREMENT_CLAMP=7683]="DECREMENT_CLAMP",t[t.INCREMENT_WRAP=34055]="INCREMENT_WRAP",t[t.DECREMENT_WRAP=34056]="DECREMENT_WRAP"})(Ht||(Ht={}));var Wt;(function(t){t[t.Float=0]="Float",t[t.UnfilterableFloat=1]="UnfilterableFloat",t[t.Uint=2]="Uint",t[t.Sint=3]="Sint",t[t.Depth=4]="Depth"})(Wt||(Wt={}));var hn;(function(t){t[t.LOWER_LEFT=0]="LOWER_LEFT",t[t.UPPER_LEFT=1]="UPPER_LEFT"})(hn||(hn={}));var So;(function(t){t[t.NEGATIVE_ONE=0]="NEGATIVE_ONE",t[t.ZERO=1]="ZERO"})(So||(So={}));var Au;(function(t){t[t.OcclusionConservative=0]="OcclusionConservative"})(Au||(Au={}));var ie;(function(t){t[t.U8=1]="U8",t[t.U16=2]="U16",t[t.U32=3]="U32",t[t.S8=4]="S8",t[t.S16=5]="S16",t[t.S32=6]="S32",t[t.F16=7]="F16",t[t.F32=8]="F32",t[t.BC1=65]="BC1",t[t.BC2=66]="BC2",t[t.BC3=67]="BC3",t[t.BC4_UNORM=68]="BC4_UNORM",t[t.BC4_SNORM=69]="BC4_SNORM",t[t.BC5_UNORM=70]="BC5_UNORM",t[t.BC5_SNORM=71]="BC5_SNORM",t[t.U16_PACKED_5551=97]="U16_PACKED_5551",t[t.U16_PACKED_565=98]="U16_PACKED_565",t[t.D24=129]="D24",t[t.D32F=130]="D32F",t[t.D24S8=131]="D24S8",t[t.D32FS8=132]="D32FS8"})(ie||(ie={}));var Ue;(function(t){t[t.R=1]="R",t[t.RG=2]="RG",t[t.RGB=3]="RGB",t[t.RGBA=4]="RGBA",t[t.A=5]="A"})(Ue||(Ue={}));var Pe;(function(t){t[t.None=0]="None",t[t.Normalized=1]="Normalized",t[t.sRGB=2]="sRGB",t[t.Depth=4]="Depth",t[t.Stencil=8]="Stencil",t[t.RenderTarget=16]="RenderTarget",t[t.Luminance=32]="Luminance"})(Pe||(Pe={}));function Ge(t,e,r){return t<<16|e<<8|r}var w;(function(t){t[t.ALPHA=Ge(ie.U8,Ue.A,Pe.None)]="ALPHA",t[t.U8_LUMINANCE=Ge(ie.U8,Ue.A,Pe.Luminance)]="U8_LUMINANCE",t[t.F16_LUMINANCE=Ge(ie.F16,Ue.A,Pe.Luminance)]="F16_LUMINANCE",t[t.F32_LUMINANCE=Ge(ie.F32,Ue.A,Pe.Luminance)]="F32_LUMINANCE",t[t.F16_R=Ge(ie.F16,Ue.R,Pe.None)]="F16_R",t[t.F16_RG=Ge(ie.F16,Ue.RG,Pe.None)]="F16_RG",t[t.F16_RGB=Ge(ie.F16,Ue.RGB,Pe.None)]="F16_RGB",t[t.F16_RGBA=Ge(ie.F16,Ue.RGBA,Pe.None)]="F16_RGBA",t[t.F32_R=Ge(ie.F32,Ue.R,Pe.None)]="F32_R",t[t.F32_RG=Ge(ie.F32,Ue.RG,Pe.None)]="F32_RG",t[t.F32_RGB=Ge(ie.F32,Ue.RGB,Pe.None)]="F32_RGB",t[t.F32_RGBA=Ge(ie.F32,Ue.RGBA,Pe.None)]="F32_RGBA",t[t.U8_R=Ge(ie.U8,Ue.R,Pe.None)]="U8_R",t[t.U8_R_NORM=Ge(ie.U8,Ue.R,Pe.Normalized)]="U8_R_NORM",t[t.U8_RG=Ge(ie.U8,Ue.RG,Pe.None)]="U8_RG",t[t.U8_RG_NORM=Ge(ie.U8,Ue.RG,Pe.Normalized)]="U8_RG_NORM",t[t.U8_RGB=Ge(ie.U8,Ue.RGB,Pe.None)]="U8_RGB",t[t.U8_RGB_NORM=Ge(ie.U8,Ue.RGB,Pe.Normalized)]="U8_RGB_NORM",t[t.U8_RGB_SRGB=Ge(ie.U8,Ue.RGB,Pe.sRGB|Pe.Normalized)]="U8_RGB_SRGB",t[t.U8_RGBA=Ge(ie.U8,Ue.RGBA,Pe.None)]="U8_RGBA",t[t.U8_RGBA_NORM=Ge(ie.U8,Ue.RGBA,Pe.Normalized)]="U8_RGBA_NORM",t[t.U8_RGBA_SRGB=Ge(ie.U8,Ue.RGBA,Pe.sRGB|Pe.Normalized)]="U8_RGBA_SRGB",t[t.U16_R=Ge(ie.U16,Ue.R,Pe.None)]="U16_R",t[t.U16_R_NORM=Ge(ie.U16,Ue.R,Pe.Normalized)]="U16_R_NORM",t[t.U16_RG_NORM=Ge(ie.U16,Ue.RG,Pe.Normalized)]="U16_RG_NORM",t[t.U16_RGBA_NORM=Ge(ie.U16,Ue.RGBA,Pe.Normalized)]="U16_RGBA_NORM",t[t.U16_RGBA=Ge(ie.U16,Ue.RGBA,Pe.None)]="U16_RGBA",t[t.U16_RGB=Ge(ie.U16,Ue.RGB,Pe.None)]="U16_RGB",t[t.U16_RG=Ge(ie.U16,Ue.RG,Pe.None)]="U16_RG",t[t.U32_R=Ge(ie.U32,Ue.R,Pe.None)]="U32_R",t[t.U32_RG=Ge(ie.U32,Ue.RG,Pe.None)]="U32_RG",t[t.U32_RGB=Ge(ie.U32,Ue.RGB,Pe.None)]="U32_RGB",t[t.U32_RGBA=Ge(ie.U32,Ue.RGBA,Pe.None)]="U32_RGBA",t[t.S8_R=Ge(ie.S8,Ue.R,Pe.None)]="S8_R",t[t.S8_R_NORM=Ge(ie.S8,Ue.R,Pe.Normalized)]="S8_R_NORM",t[t.S8_RG_NORM=Ge(ie.S8,Ue.RG,Pe.Normalized)]="S8_RG_NORM",t[t.S8_RGB_NORM=Ge(ie.S8,Ue.RGB,Pe.Normalized)]="S8_RGB_NORM",t[t.S8_RGBA_NORM=Ge(ie.S8,Ue.RGBA,Pe.Normalized)]="S8_RGBA_NORM",t[t.S16_R=Ge(ie.S16,Ue.R,Pe.None)]="S16_R",t[t.S16_RG=Ge(ie.S16,Ue.RG,Pe.None)]="S16_RG",t[t.S16_RG_NORM=Ge(ie.S16,Ue.RG,Pe.Normalized)]="S16_RG_NORM",t[t.S16_RGB_NORM=Ge(ie.S16,Ue.RGB,Pe.Normalized)]="S16_RGB_NORM",t[t.S16_RGBA=Ge(ie.S16,Ue.RGBA,Pe.None)]="S16_RGBA",t[t.S16_RGBA_NORM=Ge(ie.S16,Ue.RGBA,Pe.Normalized)]="S16_RGBA_NORM",t[t.S32_R=Ge(ie.S32,Ue.R,Pe.None)]="S32_R",t[t.S32_RG=Ge(ie.S32,Ue.RG,Pe.None)]="S32_RG",t[t.S32_RGB=Ge(ie.S32,Ue.RGB,Pe.None)]="S32_RGB",t[t.S32_RGBA=Ge(ie.S32,Ue.RGBA,Pe.None)]="S32_RGBA",t[t.U16_RGBA_5551=Ge(ie.U16_PACKED_5551,Ue.RGBA,Pe.Normalized)]="U16_RGBA_5551",t[t.U16_RGB_565=Ge(ie.U16_PACKED_565,Ue.RGB,Pe.Normalized)]="U16_RGB_565",t[t.BC1=Ge(ie.BC1,Ue.RGBA,Pe.Normalized)]="BC1",t[t.BC1_SRGB=Ge(ie.BC1,Ue.RGBA,Pe.Normalized|Pe.sRGB)]="BC1_SRGB",t[t.BC2=Ge(ie.BC2,Ue.RGBA,Pe.Normalized)]="BC2",t[t.BC2_SRGB=Ge(ie.BC2,Ue.RGBA,Pe.Normalized|Pe.sRGB)]="BC2_SRGB",t[t.BC3=Ge(ie.BC3,Ue.RGBA,Pe.Normalized)]="BC3",t[t.BC3_SRGB=Ge(ie.BC3,Ue.RGBA,Pe.Normalized|Pe.sRGB)]="BC3_SRGB",t[t.BC4_UNORM=Ge(ie.BC4_UNORM,Ue.R,Pe.Normalized)]="BC4_UNORM",t[t.BC4_SNORM=Ge(ie.BC4_SNORM,Ue.R,Pe.Normalized)]="BC4_SNORM",t[t.BC5_UNORM=Ge(ie.BC5_UNORM,Ue.RG,Pe.Normalized)]="BC5_UNORM",t[t.BC5_SNORM=Ge(ie.BC5_SNORM,Ue.RG,Pe.Normalized)]="BC5_SNORM",t[t.D24=Ge(ie.D24,Ue.R,Pe.Depth)]="D24",t[t.D24_S8=Ge(ie.D24S8,Ue.RG,Pe.Depth|Pe.Stencil)]="D24_S8",t[t.D32F=Ge(ie.D32F,Ue.R,Pe.Depth)]="D32F",t[t.D32F_S8=Ge(ie.D32FS8,Ue.RG,Pe.Depth|Pe.Stencil)]="D32F_S8",t[t.U8_RGB_RT=Ge(ie.U8,Ue.RGB,Pe.RenderTarget|Pe.Normalized)]="U8_RGB_RT",t[t.U8_RGBA_RT=Ge(ie.U8,Ue.RGBA,Pe.RenderTarget|Pe.Normalized)]="U8_RGBA_RT",t[t.U8_RGBA_RT_SRGB=Ge(ie.U8,Ue.RGBA,Pe.RenderTarget|Pe.Normalized|Pe.sRGB)]="U8_RGBA_RT_SRGB"})(w||(w={}));function Af(t){return t>>>8&255}function An(t){return t>>>16&255}function xo(t){return t&255}function vg(t){switch(t){case ie.F32:case ie.U32:case ie.S32:return 4;case ie.U16:case ie.S16:case ie.F16:return 2;case ie.U8:case ie.S8:return 1;default:throw new Error("whoops")}}function gg(t){return vg(An(t))}function iB(t){var e=vg(An(t)),r=Af(t);return e*r}function Eg(t){var e=xo(t);if(e&Pe.Depth)return Wt.Depth;if(e&Pe.Normalized)return Wt.Float;var r=An(t);if(r===ie.F16||r===ie.F32)return Wt.Float;if(r===ie.U8||r===ie.U16||r===ie.U32)return Wt.Uint;if(r===ie.S8||r===ie.S16||r===ie.S32)return Wt.Sint;throw new Error("whoops")}function rt(t,e){if(e===void 0&&(e=""),!t)throw new Error("Assert fail: ".concat(e))}function pi(t){if(t!=null)return t;throw new Error("Missing object")}function yg(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a}function Ag(t,e){t.r=e.r,t.g=e.g,t.b=e.b,t.a=e.a}function Tg(t){var e=t.r,r=t.g,n=t.b,i=t.a;return{r:e,g:r,b:n,a:i}}function Wa(t,e,r,n){return n===void 0&&(n=1),{r:t,g:e,b:r,a:n}}var Xu=Wa(0,0,0,0);Wa(0,0,0,1);var oB=Wa(1,1,1,0);Wa(1,1,1,1);function Tu(t){return!!(t&&!(t&t-1))}function kn(t,e){return t??e}function aB(t){return t===void 0?null:t}function Su(t,e){var r=e-1;return t+r&~r}function sB(t,e){for(var r=new Array(t),n=0;n<t;n++)r[n]=e();return r}function uB(t,e){e===void 0&&(e=1);var r=t.split(`
`);return r.map(function(n,i){return"".concat(lB(""+(e+i),4," "),"  ").concat(n)}).join(`
`)}function lB(t,e,r){for(;t.length<e;)t="".concat(r).concat(t);return t}function Rm(t,e){t.blendDstFactor=e.blendDstFactor,t.blendSrcFactor=e.blendSrcFactor,t.blendMode=e.blendMode}function xu(t,e){return t===void 0&&(t={}),t.compare=e.compare,t.depthFailOp=e.depthFailOp,t.passOp=e.passOp,t.failOp=e.failOp,t.mask=e.mask,t}function Sg(t,e){return t===void 0&&(t={rgbBlendState:{},alphaBlendState:{},channelWriteMask:0}),Rm(t.rgbBlendState,e.rgbBlendState),Rm(t.alphaBlendState,e.alphaBlendState),t.channelWriteMask=e.channelWriteMask,t}function xg(t,e){t.length!==e.length&&(t.length=e.length);for(var r=0;r<e.length;r++)t[r]=Sg(t[r],e[r])}function cB(t,e){e.attachmentsState!==void 0&&xg(t.attachmentsState,e.attachmentsState),t.blendConstant&&e.blendConstant&&Ag(t.blendConstant,e.blendConstant),t.depthCompare=kn(e.depthCompare,t.depthCompare),t.depthWrite=kn(e.depthWrite,t.depthWrite),t.stencilWrite=kn(e.stencilWrite,t.stencilWrite),t.stencilFront&&e.stencilFront&&xu(t.stencilFront,e.stencilFront),t.stencilBack&&e.stencilBack&&xu(t.stencilBack,e.stencilBack),t.cullMode=kn(e.cullMode,t.cullMode),t.frontFace=kn(e.frontFace,t.frontFace),t.polygonOffset=kn(e.polygonOffset,t.polygonOffset),t.polygonOffsetFactor=kn(e.polygonOffsetFactor,t.polygonOffsetFactor),t.polygonOffsetUnits=kn(e.polygonOffsetUnits,t.polygonOffsetUnits)}function Ro(t){var e=Object.assign({},t);return e.attachmentsState=[],xg(e.attachmentsState,t.attachmentsState),e.blendConstant=e.blendConstant&&Tg(e.blendConstant),e.stencilFront=xu(void 0,t.stencilFront),e.stencilBack=xu(void 0,t.stencilBack),e}var bm={blendMode:pr.ADD,blendSrcFactor:ft.ONE,blendDstFactor:ft.ZERO},bo={attachmentsState:[{channelWriteMask:dr.ALL,rgbBlendState:bm,alphaBlendState:bm}],blendConstant:Tg(Xu),depthWrite:!0,depthCompare:Ot.LEQUAL,stencilWrite:!1,stencilFront:{compare:Ot.ALWAYS,passOp:Ht.KEEP,depthFailOp:Ht.KEEP,failOp:Ht.KEEP},stencilBack:{compare:Ot.ALWAYS,passOp:Ht.KEEP,depthFailOp:Ht.KEEP,failOp:Ht.KEEP},cullMode:zr.NONE,frontFace:La.CCW,polygonOffset:!1,polygonOffsetFactor:0,polygonOffsetUnits:0};function fB(t,e){t===void 0&&(t=null),e===void 0&&(e=bo);var r=Ro(e);return t!==null&&cB(r,t),r}fB({depthCompare:Ot.ALWAYS,depthWrite:!1},bo);var Rg={texture:null,sampler:null,formatKind:Wt.Float,dimension:ht.TEXTURE_2D};function Gn(t,e,r){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!r(t[n],e[n]))return!1;return!0}function uo(t,e){for(var r=Array(t.length),n=0;n<t.length;n++)r[n]=e(t[n]);return r}function hB(t,e){return t.texture===e.texture&&t.binding===e.binding}function Cm(t,e){return t.buffer===e.buffer&&t.size===e.size&&t.binding===e.binding&&t.offset===e.offset}function dB(t,e){return t===null?e===null:e===null?!1:t.sampler===e.sampler&&t.texture===e.texture&&t.dimension===e.dimension&&t.formatKind===e.formatKind&&t.comparison===e.comparison}function pB(t,e){return t.samplerBindings=t.samplerBindings||[],t.uniformBufferBindings=t.uniformBufferBindings||[],t.storageBufferBindings=t.storageBufferBindings||[],t.storageTextureBindings=t.storageTextureBindings||[],e.samplerBindings=e.samplerBindings||[],e.uniformBufferBindings=e.uniformBufferBindings||[],e.storageBufferBindings=e.storageBufferBindings||[],e.storageTextureBindings=e.storageTextureBindings||[],!(t.samplerBindings.length!==e.samplerBindings.length||!Gn(t.samplerBindings,e.samplerBindings,dB)||!Gn(t.uniformBufferBindings,e.uniformBufferBindings,Cm)||!Gn(t.storageBufferBindings,e.storageBufferBindings,Cm)||!Gn(t.storageTextureBindings,e.storageTextureBindings,hB))}function Om(t,e){return t.blendMode==e.blendMode&&t.blendSrcFactor===e.blendSrcFactor&&t.blendDstFactor===e.blendDstFactor}function _B(t,e){return!(!Om(t.rgbBlendState,e.rgbBlendState)||!Om(t.alphaBlendState,e.alphaBlendState)||t.channelWriteMask!==e.channelWriteMask)}function Ru(t,e){return t.compare==e.compare&&t.depthFailOp===e.depthFailOp&&t.failOp===e.failOp&&t.passOp===e.passOp&&t.mask===e.mask}function mB(t,e){return!Gn(t.attachmentsState,e.attachmentsState,_B)||t.blendConstant&&e.blendConstant&&!yg(t.blendConstant,e.blendConstant)||t.stencilFront&&e.stencilFront&&!Ru(t.stencilFront,e.stencilFront)||t.stencilBack&&e.stencilBack&&!Ru(t.stencilBack,e.stencilBack)?!1:t.depthCompare===e.depthCompare&&t.depthWrite===e.depthWrite&&t.stencilWrite===e.stencilWrite&&t.cullMode===e.cullMode&&t.frontFace===e.frontFace&&t.polygonOffset===e.polygonOffset&&t.polygonOffsetFactor===e.polygonOffsetFactor&&t.polygonOffsetUnits===e.polygonOffsetUnits}function bg(t,e){return t.id===e.id}function vB(t,e){return t===e}function gB(t,e){return!(t.topology!==e.topology||t.inputLayout!==e.inputLayout||t.sampleCount!==e.sampleCount||t.megaStateDescriptor&&e.megaStateDescriptor&&!mB(t.megaStateDescriptor,e.megaStateDescriptor)||!bg(t.program,e.program)||!Gn(t.colorAttachmentFormats,e.colorAttachmentFormats,vB)||t.depthStencilAttachmentFormat!==e.depthStencilAttachmentFormat)}function EB(t,e){return t.offset===e.offset&&t.shaderLocation===e.shaderLocation&&t.format===e.format&&t.divisor===e.divisor}function yB(t,e){return tn(t)?tn(e):tn(e)?!1:t.arrayStride===e.arrayStride&&t.stepMode===e.stepMode&&Gn(t.attributes,e.attributes,EB)}function AB(t,e){return!(t.indexBufferFormat!==e.indexBufferFormat||!Gn(t.vertexBufferDescriptors,e.vertexBufferDescriptors,yB)||!bg(t.program,e.program))}function TB(t){var e=t.sampler,r=t.texture,n=t.dimension,i=t.formatKind,o=t.comparison;return{sampler:e,texture:r,dimension:n,formatKind:i,comparison:o}}function Im(t){var e=t.buffer,r=t.size,n=t.binding,i=t.offset;return{binding:n,buffer:e,offset:i,size:r}}function SB(t){var e=t.binding,r=t.texture;return{binding:e,texture:r}}function xB(t){var e=t.samplerBindings&&uo(t.samplerBindings,TB),r=t.uniformBufferBindings&&uo(t.uniformBufferBindings,Im),n=t.storageBufferBindings&&uo(t.storageBufferBindings,Im),i=t.storageTextureBindings&&uo(t.storageTextureBindings,SB);return{samplerBindings:e,uniformBufferBindings:r,storageBufferBindings:n,storageTextureBindings:i,pipeline:t.pipeline}}function RB(t){var e=t.inputLayout,r=t.program,n=t.topology,i=t.megaStateDescriptor&&Ro(t.megaStateDescriptor),o=t.colorAttachmentFormats.slice(),a=t.depthStencilAttachmentFormat,s=t.sampleCount;return{inputLayout:e,megaStateDescriptor:i,program:r,topology:n,colorAttachmentFormats:o,depthStencilAttachmentFormat:a,sampleCount:s}}function bB(t){var e=t.shaderLocation,r=t.format,n=t.offset,i=t.divisor;return{shaderLocation:e,format:r,offset:n,divisor:i}}function CB(t){if(tn(t))return t;var e=t.arrayStride,r=t.stepMode,n=uo(t.attributes,bB);return{arrayStride:e,stepMode:r,attributes:n}}function OB(t){var e=uo(t.vertexBufferDescriptors,CB),r=t.indexBufferFormat,n=t.program;return{vertexBufferDescriptors:e,indexBufferFormat:r,program:n}}var mt,IB=/([^[]*)(\[[0-9]+\])?/;function MB(t){if(t[t.length-1]!=="]")return{name:t,length:1,isArray:!1};var e=t.match(IB);if(!e||e.length<2)throw new Error("Failed to parse GLSL uniform name ".concat(t));return{name:e[1],length:Number(e[2])||1,isArray:!!e[2]}}function Nr(){var t=null;return function(e,r,n){var i=t!==n;return i&&(e.uniform1i(r,n),t=n),i}}function kt(t,e,r,n){var i=null,o=null;return function(a,s,u){var l=e(u,r),f=l.length,c=!1;if(i===null)i=new Float32Array(f),o=f,c=!0;else{rt(o===f,"Uniform length cannot change.");for(var h=0;h<f;++h)if(l[h]!==i[h]){c=!0;break}}return c&&(n(a,t,s,l),i.set(l)),c}}function Cr(t,e,r,n){t[e](r,n)}function Cn(t,e,r,n){t[e](r,!1,n)}var BB={},NB={},PB={},Mm=[0];function Tf(t,e,r,n){e===1&&typeof t=="boolean"&&(t=t?1:0),Number.isFinite(t)&&(Mm[0]=t,t=Mm);var i=t.length;if(t instanceof r)return t;var o=n[i];o||(o=new r(i),n[i]=o);for(var a=0;a<i;a++)o[a]=t[a];return o}function Xr(t,e){return Tf(t,e,Float32Array,BB)}function zn(t,e){return Tf(t,e,Int32Array,NB)}function Ds(t,e){return Tf(t,e,Uint32Array,PB)}var LB=(mt={},mt[C.FLOAT]=kt.bind(null,"uniform1fv",Xr,1,Cr),mt[C.FLOAT_VEC2]=kt.bind(null,"uniform2fv",Xr,2,Cr),mt[C.FLOAT_VEC3]=kt.bind(null,"uniform3fv",Xr,3,Cr),mt[C.FLOAT_VEC4]=kt.bind(null,"uniform4fv",Xr,4,Cr),mt[C.INT]=kt.bind(null,"uniform1iv",zn,1,Cr),mt[C.INT_VEC2]=kt.bind(null,"uniform2iv",zn,2,Cr),mt[C.INT_VEC3]=kt.bind(null,"uniform3iv",zn,3,Cr),mt[C.INT_VEC4]=kt.bind(null,"uniform4iv",zn,4,Cr),mt[C.BOOL]=kt.bind(null,"uniform1iv",zn,1,Cr),mt[C.BOOL_VEC2]=kt.bind(null,"uniform2iv",zn,2,Cr),mt[C.BOOL_VEC3]=kt.bind(null,"uniform3iv",zn,3,Cr),mt[C.BOOL_VEC4]=kt.bind(null,"uniform4iv",zn,4,Cr),mt[C.FLOAT_MAT2]=kt.bind(null,"uniformMatrix2fv",Xr,4,Cn),mt[C.FLOAT_MAT3]=kt.bind(null,"uniformMatrix3fv",Xr,9,Cn),mt[C.FLOAT_MAT4]=kt.bind(null,"uniformMatrix4fv",Xr,16,Cn),mt[C.UNSIGNED_INT]=kt.bind(null,"uniform1uiv",Ds,1,Cr),mt[C.UNSIGNED_INT_VEC2]=kt.bind(null,"uniform2uiv",Ds,2,Cr),mt[C.UNSIGNED_INT_VEC3]=kt.bind(null,"uniform3uiv",Ds,3,Cr),mt[C.UNSIGNED_INT_VEC4]=kt.bind(null,"uniform4uiv",Ds,4,Cr),mt[C.FLOAT_MAT2x3]=kt.bind(null,"uniformMatrix2x3fv",Xr,6,Cn),mt[C.FLOAT_MAT2x4]=kt.bind(null,"uniformMatrix2x4fv",Xr,8,Cn),mt[C.FLOAT_MAT3x2]=kt.bind(null,"uniformMatrix3x2fv",Xr,6,Cn),mt[C.FLOAT_MAT3x4]=kt.bind(null,"uniformMatrix3x4fv",Xr,12,Cn),mt[C.FLOAT_MAT4x2]=kt.bind(null,"uniformMatrix4x2fv",Xr,8,Cn),mt[C.FLOAT_MAT4x3]=kt.bind(null,"uniformMatrix4x3fv",Xr,12,Cn),mt[C.SAMPLER_2D]=Nr,mt[C.SAMPLER_CUBE]=Nr,mt[C.SAMPLER_3D]=Nr,mt[C.SAMPLER_2D_SHADOW]=Nr,mt[C.SAMPLER_2D_ARRAY]=Nr,mt[C.SAMPLER_2D_ARRAY_SHADOW]=Nr,mt[C.SAMPLER_CUBE_SHADOW]=Nr,mt[C.INT_SAMPLER_2D]=Nr,mt[C.INT_SAMPLER_3D]=Nr,mt[C.INT_SAMPLER_CUBE]=Nr,mt[C.INT_SAMPLER_2D_ARRAY]=Nr,mt[C.UNSIGNED_INT_SAMPLER_2D]=Nr,mt[C.UNSIGNED_INT_SAMPLER_3D]=Nr,mt[C.UNSIGNED_INT_SAMPLER_CUBE]=Nr,mt[C.UNSIGNED_INT_SAMPLER_2D_ARRAY]=Nr,mt);function Bm(t,e,r){var n=LB[r.type];if(!n)throw new Error("Unknown GLSL uniform type ".concat(r.type));return n().bind(null,t,e)}var DB={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121};function FB(t){return Object.prototype.toString.call(t)in DB}function ha(t,e){return"#define ".concat(t," ").concat(e)}function wB(t){var e={};return t.replace(/^\s*#define\s*(\S*)\s*(\S*)\s*$/gm,function(r,n,i){var o=Number(i);return e[n]=isNaN(o)?i:o,""}),e}function UB(t,e){var r=[];return t.replace(/^\s*layout\(location\s*=\s*(\S*)\)\s*in\s+\S+\s*(.*);$/gm,function(n,i,o){var a=Number(i);return r.push({location:isNaN(a)?e[i]:a,name:o}),""}),r}function Nm(t){if(t===void 0)return null;var e=/binding\s*=\s*(\d+)/.exec(t);if(e!==null){var r=parseInt(e[1],10);if(!Number.isNaN(r))return r}return null}function Pm(t){var e="",r=t;return[r,e]}function Co(t,e,r,n,i){var o;n===void 0&&(n=null),i===void 0&&(i=!0);var a=t.glslVersion==="#version 100",s=e==="frag"&&((o=r.match(/^\s*layout\(location\s*=\s*\d*\)\s*out\s+vec4\s*(.*);$/gm))===null||o===void 0?void 0:o.length)>1,u=r.replace(`\r
`,`
`).split(`
`).map(function(ce){return ce.replace(/[/][/].*$/,"")}).filter(function(ce){var j=!ce||/^\s+$/.test(ce);return!j}),l="";n!==null&&(l=Object.keys(n).map(function(ce){return ha(ce,n[ce])}).join(`
`));var f=u.find(function(ce){return ce.startsWith("precision")})||"precision mediump float;",c=i?u.filter(function(ce){return!ce.startsWith("precision")}).join(`
`):u.join(`
`),h="";if(t.viewportOrigin===hn.UPPER_LEFT&&(h+="".concat(ha("VIEWPORT_ORIGIN_TL","1"),`
`)),t.clipSpaceNearZ===So.ZERO&&(h+="".concat(ha("CLIPSPACE_NEAR_ZERO","1"),`
`)),t.explicitBindingLocations){var _=0,m=0,E=0;c=c.replace(/^\s*(layout\((.*)\))?\s*uniform(.+{)$/gm,function(ce,j,fe,ze){var te=fe?"".concat(fe,", "):"";return"layout(".concat(te,"set = ").concat(_,", binding = ").concat(m++,") uniform ").concat(ze)}),_++,m=0,rt(t.separateSamplerTextures),c=c.replace(/^\s*(layout\((.*)\))?\s*uniform sampler(\w+) (.*);/gm,function(ce,j,fe,ze,te){var k=Nm(fe);k===null&&(k=m++);var q=un(Pm(ze),2),ne=q[0],xe=q[1];return e==="frag"?`
layout(set = `.concat(_,", binding = ").concat(k*2+0,") uniform texture").concat(ne," T_").concat(te,`;
layout(set = `).concat(_,", binding = ").concat(k*2+1,") uniform sampler").concat(xe," S_").concat(te,";").trim():""}),c=c.replace(e==="frag"?/^\s*\b(varying|in)\b/gm:/^\s*\b(varying|out)\b/gm,function(ce,j){return"layout(location = ".concat(E++,") ").concat(j)}),h+="".concat(ha("gl_VertexID","gl_VertexIndex"),`
`),h+="".concat(ha("gl_InstanceID","gl_InstanceIndex"),`
`),f=f.replace(/^precision (.*) sampler(.*);$/gm,"")}else{var S=0;c=c.replace(/^\s*(layout\((.*)\))?\s*uniform sampler(\w+) (.*);/gm,function(ce,j,fe,ze,te){var k=Nm(fe);return k===null&&(k=S++),"uniform sampler".concat(ze," ").concat(te,"; // BINDING=").concat(k)})}if(c=c.replace(/\bPU_SAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return"SAMPLER_".concat(j,"(P_").concat(fe,")")}),c=c.replace(/\bPF_SAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return"PP_SAMPLER_".concat(j,"(P_").concat(fe,")")}),c=c.replace(/\bPU_TEXTURE\((.*?)\)/g,function(ce,j){return"TEXTURE(P_".concat(j,")")}),t.separateSamplerTextures)c=c.replace(/\bPD_SAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){var ze=un(Pm(j),2),te=ze[0],k=ze[1];return"texture".concat(te," T_P_").concat(fe,", sampler").concat(k," S_P_").concat(fe)}),c=c.replace(/\bPP_SAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return"T_".concat(fe,", S_").concat(fe)}),c=c.replace(/\bSAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return"sampler".concat(j,"(T_").concat(fe,", S_").concat(fe,")")}),c=c.replace(/\bTEXTURE\((.*?)\)/g,function(ce,j){return"T_".concat(j)});else{var M=[];c=c.replace(/\bPD_SAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return"sampler".concat(j," P_").concat(fe)}),c=c.replace(/\bPP_SAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return fe}),c=c.replace(/\bSAMPLER_(\w+)\((.*?)\)/g,function(ce,j,fe){return M.push([fe,j]),fe}),a&&M.forEach(function(ce){var j=un(ce,2),fe=j[0],ze=j[1];c=c.replace(new RegExp("texture\\(".concat(fe),"g"),function(){return"texture".concat(ze,"(").concat(fe)})}),c=c.replace(/\bTEXTURE\((.*?)\)/g,function(ce,j){return j})}var P="".concat(a?"":t.glslVersion,`
`).concat(a&&s?`#extension GL_EXT_draw_buffers : require
`:"",`
`).concat(a&&e==="frag"?`#extension GL_OES_standard_derivatives : enable
`:"").concat(i?f:"",`
`).concat(h||"").concat(l?l+`
`:"",`
`).concat(c,`
`).trim();if(t.explicitBindingLocations&&e==="frag"&&(P=P.replace(/^\b(out)\b/g,function(ce,j){return"layout(location = 0) ".concat(j)})),a){if(e==="frag"&&(P=P.replace(/^\s*in\s+(\S+)\s*(.*);$/gm,function(ce,j,fe){return"varying ".concat(j," ").concat(fe,`;
`)})),e==="vert"&&(P=P.replace(/^\s*out\s+(\S+)\s*(.*);$/gm,function(ce,j,fe){return"varying ".concat(j," ").concat(fe,`;
`)}),P=P.replace(/^\s*layout\(location\s*=\s*\S*\)\s*in\s+(\S+)\s*(.*);$/gm,function(ce,j,fe){return"attribute ".concat(j," ").concat(fe,`;
`)})),P=P.replace(/\s*uniform\s*.*\s*{((?:\s*.*\s*)*?)};/g,function(ce,j){return j.trim().replace(/^.*$/gm,function(fe){var ze=fe.trim();return ze.startsWith("#")?ze:fe?"uniform ".concat(ze):""})}),e==="frag")if(s){var F=[];P=P.replace(/^\s*layout\(location\s*=\s*\d*\)\s*out\s+vec4\s*(.*);$/gm,function(ce,j){return F.push(j),"vec4 ".concat(j,`;
`)});var V=P.lastIndexOf("}");P=P.substring(0,V)+`
    `.concat(F.map(function(ce,j){return"gl_FragData[".concat(j,"] = ").concat(ce,`;
    `)}).join(`
`))+P.substring(V)}else{var pe;if(P=P.replace(/^\s*out\s+(\S+)\s*(.*);$/gm,function(ce,j,fe){return pe=fe,"".concat(j," ").concat(fe,`;
`)}),pe){var V=P.lastIndexOf("}");P=P.substring(0,V)+`
  gl_FragColor = vec4(`.concat(pe,`);
`)+P.substring(V)}}P=P.replace(/^\s*layout\((.*)\)/gm,"")}return P}var rn=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=t.call(this)||this;return o.id=n,o.device=i,o.device.resourceCreationTracker!==null&&o.device.resourceCreationTracker.trackResourceCreated(o),o}return e.prototype.destroy=function(){this.device.resourceCreationTracker!==null&&this.device.resourceCreationTracker.trackResourceDestroyed(this)},e}(mg),kB=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.Bindings;var s=o.uniformBufferBindings,u=o.samplerBindings;return a.uniformBufferBindings=s||[],a.samplerBindings=u||[],a.bindingLayouts=a.createBindingLayouts(),a}return e.prototype.createBindingLayouts=function(){var r=0,n=0,i=[],o=this.uniformBufferBindings.length,a=this.samplerBindings.length;return i.push({firstUniformBuffer:r,numUniformBuffers:o,firstSampler:n,numSamplers:a}),r+=o,n+=a,{numUniformBuffers:r,numSamplers:n,bindingLayoutTables:i}},e}(rn),da;function ke(t){return da!==void 0?da:typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?(da=!0,!0):(da=!!(t&&t._version===2),da)}function Cg(t){var e=An(t);switch(e){case ie.BC1:case ie.BC2:case ie.BC3:case ie.BC4_UNORM:case ie.BC4_SNORM:case ie.BC5_UNORM:case ie.BC5_SNORM:return!0;default:return!1}}function Og(t){var e=xo(t);if(e&Pe.Normalized)return!1;var r=An(t);return r===ie.S8||r===ie.S16||r===ie.S32||r===ie.U8||r===ie.U16||r===ie.U32}function zB(t){switch(t){case pn.STATIC:return C.STATIC_DRAW;case pn.DYNAMIC:return C.DYNAMIC_DRAW}}function Lm(t){if(t&Dt.INDEX)return C.ELEMENT_ARRAY_BUFFER;if(t&Dt.VERTEX)return C.ARRAY_BUFFER;if(t&Dt.UNIFORM)return C.UNIFORM_BUFFER}function VB(t){switch(t){case er.TRIANGLES:return C.TRIANGLES;case er.POINTS:return C.POINTS;case er.TRIANGLE_STRIP:return C.TRIANGLE_STRIP;case er.LINES:return C.LINES;case er.LINE_STRIP:return C.LINE_STRIP;default:throw new Error("Unknown primitive topology mode")}}function WB(t){switch(t){case ie.U8:return C.UNSIGNED_BYTE;case ie.U16:return C.UNSIGNED_SHORT;case ie.U32:return C.UNSIGNED_INT;case ie.S8:return C.BYTE;case ie.S16:return C.SHORT;case ie.S32:return C.INT;case ie.F16:return C.HALF_FLOAT;case ie.F32:return C.FLOAT;default:throw new Error("whoops")}}function HB(t){switch(t){case Ue.R:return 1;case Ue.RG:return 2;case Ue.RGB:return 3;case Ue.RGBA:return 4;default:return 1}}function XB(t){var e=An(t),r=Af(t),n=xo(t),i=WB(e),o=HB(r),a=!!(n&Pe.Normalized);return{size:o,type:i,normalized:a}}function jB(t){switch(t){case w.U8_R:return C.UNSIGNED_BYTE;case w.U16_R:return C.UNSIGNED_SHORT;case w.U32_R:return C.UNSIGNED_INT;default:throw new Error("whoops")}}function pa(t){switch(t){case Lr.CLAMP_TO_EDGE:return C.CLAMP_TO_EDGE;case Lr.REPEAT:return C.REPEAT;case Lr.MIRRORED_REPEAT:return C.MIRRORED_REPEAT;default:throw new Error("whoops")}}function Fs(t,e){if(e===ur.LINEAR&&t===jt.BILINEAR)return C.LINEAR_MIPMAP_LINEAR;if(e===ur.LINEAR&&t===jt.POINT)return C.NEAREST_MIPMAP_LINEAR;if(e===ur.NEAREST&&t===jt.BILINEAR)return C.LINEAR_MIPMAP_NEAREST;if(e===ur.NEAREST&&t===jt.POINT)return C.NEAREST_MIPMAP_NEAREST;if(e===ur.NO_MIP&&t===jt.BILINEAR)return C.LINEAR;if(e===ur.NO_MIP&&t===jt.POINT)return C.NEAREST;throw new Error("Unknown texture filter mode")}function vo(t,e){e===void 0&&(e=0);var r=t;return r.gl_buffer_pages[e/r.pageByteSize|0]}function no(t){var e=t;return e.gl_texture}function Gc(t){var e=t;return e.gl_sampler}function _a(t,e){t.name=e,t.__SPECTOR_Metadata={name:e}}function Dm(t,e){for(var r=[];;){var n=e.exec(t);if(!n)break;r.push(n)}return r}function Vn(t){return t.blendMode==pr.ADD&&t.blendSrcFactor==ft.ONE&&t.blendDstFactor===ft.ZERO}function GB(t){switch(t){case Au.OcclusionConservative:return C.ANY_SAMPLES_PASSED_CONSERVATIVE;default:throw new Error("whoops")}}function $B(t){if(t===ht.TEXTURE_2D)return C.TEXTURE_2D;if(t===ht.TEXTURE_2D_ARRAY)return C.TEXTURE_2D_ARRAY;if(t===ht.TEXTURE_CUBE_MAP)return C.TEXTURE_CUBE_MAP;if(t===ht.TEXTURE_3D)return C.TEXTURE_3D;throw new Error("whoops")}function uc(t,e,r,n){return!(t%r!==0||e%n!==0)}var YB=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.Buffer;var s=o.viewOrSize,u=o.usage,l=o.hint,f=l===void 0?pn.STATIC:l,c=i.uniformBufferMaxPageByteSize,h=i.gl,_=u&Dt.UNIFORM;_||(ke(h)?h.bindVertexArray(null):i.OES_vertex_array_object.bindVertexArrayOES(null));var m=so(s)?Su(s,4):Su(s.byteLength,4);a.gl_buffer_pages=[];var E;if(_){for(var S=m;S>0;)a.gl_buffer_pages.push(a.createBufferPage(Math.min(S,c),u,f)),S-=c;E=c}else a.gl_buffer_pages.push(a.createBufferPage(m,u,f)),E=m;return a.pageByteSize=E,a.byteSize=m,a.usage=u,a.gl_target=Lm(u),so(s)||a.setSubData(0,new Uint8Array(s.buffer)),_||(ke(h)?h.bindVertexArray(a.device.currentBoundVAO):i.OES_vertex_array_object.bindVertexArrayOES(a.device.currentBoundVAO)),a}return e.prototype.setSubData=function(r,n,i,o){i===void 0&&(i=0),o===void 0&&(o=n.byteLength-i);for(var a=this.device.gl,s=this.pageByteSize,u=r+o,l=r,f=r%s;l<u;){var c=ke(a)?a.COPY_WRITE_BUFFER:this.gl_target,h=vo(this,l);if(h.ubo)return;a.bindBuffer(c,h),ke(a)?a.bufferSubData(c,f,n,i,Math.min(u-l,s)):a.bufferSubData(c,f,n),l+=s,f=0,i+=s,this.device.debugGroupStatisticsBufferUpload()}},e.prototype.destroy=function(){t.prototype.destroy.call(this);for(var r=0;r<this.gl_buffer_pages.length;r++)this.gl_buffer_pages[r].ubo||this.device.gl.deleteBuffer(this.gl_buffer_pages[r]);this.gl_buffer_pages=[]},e.prototype.createBufferPage=function(r,n,i){var o=this.device.gl,a=n&Dt.UNIFORM;if(!ke(o)&&a)return{ubo:!0};var s=this.device.ensureResourceExists(o.createBuffer()),u=Lm(n),l=zB(i);return o.bindBuffer(u,s),o.bufferData(u,r,l),s},e}(rn),ZB=function(t){Xt(e,t);function e(r){var n,i,o,a,s=r.id,u=r.device,l=r.descriptor,f,c=t.call(this,{id:s,device:u})||this;c.type=Tt.InputLayout;var h=l.vertexBufferDescriptors,_=l.indexBufferFormat,m=l.program;rt(_===w.U16_R||_===w.U32_R||_===null);var E=_!==null?jB(_):null,S=_!==null?gg(_):null,M=c.device.gl,P=c.device.ensureResourceExists(ke(M)?M.createVertexArray():u.OES_vertex_array_object.createVertexArrayOES());ke(M)?M.bindVertexArray(P):u.OES_vertex_array_object.bindVertexArrayOES(P),M.bindBuffer(M.ARRAY_BUFFER,vo(c.device.fallbackVertexBuffer));try{for(var F=Ti(l.vertexBufferDescriptors),V=F.next();!V.done;V=F.next()){var pe=V.value,ce=pe.stepMode,j=pe.attributes;try{for(var fe=(o=void 0,Ti(j)),ze=fe.next();!ze.done;ze=fe.next()){var te=ze.value,k=te.shaderLocation,q=te.format,ne=te.divisor,xe=ne===void 0?1:ne,Fe=ke(M)?k:(f=m.attributes[k])===null||f===void 0?void 0:f.location,$e=XB(q);if(te.vertexFormat=$e,!tn(Fe)){Og(q);var qe=$e.size,ut=$e.type,He=$e.normalized;M.vertexAttribPointer(Fe,qe,ut,He,0,0),ce===Si.INSTANCE&&(ke(M)?M.vertexAttribDivisor(Fe,xe):u.ANGLE_instanced_arrays.vertexAttribDivisorANGLE(Fe,xe)),M.enableVertexAttribArray(Fe)}}}catch(Ye){o={error:Ye}}finally{try{ze&&!ze.done&&(a=fe.return)&&a.call(fe)}finally{if(o)throw o.error}}}}catch(Ye){n={error:Ye}}finally{try{V&&!V.done&&(i=F.return)&&i.call(F)}finally{if(n)throw n.error}}return ke(M)?M.bindVertexArray(null):u.OES_vertex_array_object.bindVertexArrayOES(null),c.vertexBufferDescriptors=h,c.vao=P,c.indexBufferFormat=_,c.indexBufferType=E,c.indexBufferCompByteSize=S,c.program=m,c}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.device.currentBoundVAO===this.vao&&(ke(this.device.gl)?(this.device.gl.bindVertexArray(null),this.device.gl.deleteVertexArray(this.vao)):(this.device.OES_vertex_array_object.bindVertexArrayOES(null),this.device.OES_vertex_array_object.deleteVertexArrayOES(this.vao)),this.device.currentBoundVAO=null)},e}(rn),$c=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=r.fake,s=t.call(this,{id:n,device:i})||this;s.type=Tt.Texture,o=zt({dimension:ht.TEXTURE_2D,depthOrArrayLayers:1,mipLevelCount:1},o);var u=s.device.gl,l,f,c=s.clampmipLevelCount(o);if(s.immutable=o.usage===Ir.RENDER_TARGET,s.pixelStore=o.pixelStore,s.format=o.format,s.dimension=o.dimension,s.formatKind=Eg(o.format),s.width=o.width,s.height=o.height,s.depthOrArrayLayers=o.depthOrArrayLayers,s.mipmaps=c>=1,!a){f=s.device.ensureResourceExists(u.createTexture());var h=s.device.translateTextureType(o.format),_=s.device.translateTextureInternalFormat(o.format);if(s.device.setActiveTexture(u.TEXTURE0),s.device.currentTextures[0]=null,s.preprocessImage(),o.dimension===ht.TEXTURE_2D){if(l=C.TEXTURE_2D,u.bindTexture(l,f),s.immutable)if(ke(u))u.texStorage2D(l,c,_,o.width,o.height);else{var m=(_===C.DEPTH_COMPONENT||s.isNPOT(),0);(s.format===w.D32F||s.format===w.D24_S8)&&!ke(u)&&!i.WEBGL_depth_texture||(u.texImage2D(l,m,_,o.width,o.height,0,_,h,null),s.mipmaps&&(s.mipmaps=!1,u.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,C.LINEAR),u.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),u.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE)))}rt(o.depthOrArrayLayers===1)}else if(o.dimension===ht.TEXTURE_2D_ARRAY)l=C.TEXTURE_2D_ARRAY,u.bindTexture(l,f),s.immutable&&ke(u)&&u.texStorage3D(l,c,_,o.width,o.height,o.depthOrArrayLayers);else if(o.dimension===ht.TEXTURE_3D)l=C.TEXTURE_3D,u.bindTexture(l,f),s.immutable&&ke(u)&&u.texStorage3D(l,c,_,o.width,o.height,o.depthOrArrayLayers);else if(o.dimension===ht.TEXTURE_CUBE_MAP)l=C.TEXTURE_CUBE_MAP,u.bindTexture(l,f),s.immutable&&ke(u)&&u.texStorage2D(l,c,_,o.width,o.height),rt(o.depthOrArrayLayers===6);else throw new Error("whoops")}return s.gl_texture=f,s.gl_target=l,s.mipLevelCount=c,s}return e.prototype.setImageData=function(r,n){n===void 0&&(n=0);var i=this.device.gl;Cg(this.format);var o=this.gl_target===C.TEXTURE_3D||this.gl_target===C.TEXTURE_2D_ARRAY,a=this.gl_target===C.TEXTURE_CUBE_MAP,s=FB(r[0]);this.device.setActiveTexture(i.TEXTURE0),this.device.currentTextures[0]=null;var u=r[0],l,f;s?(l=this.width,f=this.height):(l=u.width,f=u.height,this.width=l,this.height=f),i.bindTexture(this.gl_target,this.gl_texture);var c=this.device.translateTextureFormat(this.format),h=ke(i)?this.device.translateInternalTextureFormat(this.format):c,_=this.device.translateTextureType(this.format);this.preprocessImage();for(var m=0;m<this.depthOrArrayLayers;m++){var E=r[m],S=this.gl_target;a&&(S=C.TEXTURE_CUBE_MAP_POSITIVE_X+m%6),this.immutable?i.texSubImage2D(S,n,0,0,l,f,c,_,E):ke(i)?o?i.texImage3D(S,n,h,l,f,this.depthOrArrayLayers,0,c,_,E):i.texImage2D(S,n,h,l,f,0,c,_,E):s?i.texImage2D(S,n,c,l,f,0,c,_,E):i.texImage2D(S,n,c,c,_,E)}this.mipmaps&&this.generateMipmap(o)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.device.gl.deleteTexture(no(this))},e.prototype.clampmipLevelCount=function(r){if(r.dimension===ht.TEXTURE_2D_ARRAY&&r.depthOrArrayLayers>1){var n=An(r.format);if(n===ie.BC1)for(var i=r.width,o=r.height,a=0;a<r.mipLevelCount;a++){if(i<=2||o<=2)return a-1;i=Math.max(i/2|0,1),o=Math.max(o/2|0,1)}}return r.mipLevelCount},e.prototype.preprocessImage=function(){var r=this.device.gl;this.pixelStore&&(this.pixelStore.unpackFlipY&&r.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,!0),this.pixelStore.packAlignment&&r.pixelStorei(C.PACK_ALIGNMENT,this.pixelStore.packAlignment),this.pixelStore.unpackAlignment&&r.pixelStorei(C.UNPACK_ALIGNMENT,this.pixelStore.unpackAlignment))},e.prototype.generateMipmap=function(r){r===void 0&&(r=!1);var n=this.device.gl;return!ke(n)&&this.isNPOT()?this:(this.gl_texture&&this.gl_target&&(n.bindTexture(this.gl_target,this.gl_texture),r?(n.texParameteri(this.gl_target,C.TEXTURE_BASE_LEVEL,0),n.texParameteri(this.gl_target,C.TEXTURE_MAX_LEVEL,Math.log2(this.width)),n.texParameteri(this.gl_target,C.TEXTURE_MIN_FILTER,C.LINEAR_MIPMAP_LINEAR),n.texParameteri(this.gl_target,C.TEXTURE_MAG_FILTER,C.LINEAR)):n.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,C.NEAREST_MIPMAP_LINEAR),n.generateMipmap(this.gl_target),n.bindTexture(this.gl_target,null)),this)},e.prototype.isNPOT=function(){var r=this.device.gl;return ke(r)?!1:!Tu(this.width)||!Tu(this.height)},e}(rn),KB=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.RenderTarget,a.gl_renderbuffer=null,a.texture=null;var s=a.device.gl,u=o.format,l=o.width,f=o.height,c=o.sampleCount,h=c===void 0?1:c,_=o.texture,m=!1;if((u===w.D32F||u===w.D24_S8)&&_&&!ke(s)&&!i.WEBGL_depth_texture&&(_.destroy(),a.texture=null,m=!0),!m&&_)a.texture=_;else{a.gl_renderbuffer=a.device.ensureResourceExists(s.createRenderbuffer()),s.bindRenderbuffer(s.RENDERBUFFER,a.gl_renderbuffer);var E=a.device.translateTextureInternalFormat(u,!0);ke(s)&&h>1?s.renderbufferStorageMultisample(C.RENDERBUFFER,h,E,l,f):s.renderbufferStorage(C.RENDERBUFFER,E,l,f)}return a.format=u,a.width=l,a.height=f,a.sampleCount=h,a}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.gl_renderbuffer!==null&&this.device.gl.deleteRenderbuffer(this.gl_renderbuffer),this.texture&&this.texture.destroy()},e}(rn),Ur;(function(t){t[t.NeedsCompile=0]="NeedsCompile",t[t.Compiling=1]="Compiling",t[t.NeedsBind=2]="NeedsBind",t[t.ReadyToUse=3]="ReadyToUse"})(Ur||(Ur={}));var qB=function(t){Xt(e,t);function e(r,n){var i=r.id,o=r.device,a=r.descriptor,s=t.call(this,{id:i,device:o})||this;s.rawVertexGLSL=n,s.type=Tt.Program,s.uniformSetters={},s.attributes=[];var u=s.device.gl;return s.descriptor=a,s.gl_program=s.device.ensureResourceExists(u.createProgram()),s.gl_shader_vert=null,s.gl_shader_frag=null,s.compileState=Ur.NeedsCompile,s.tryCompileProgram(),s}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.device.gl.deleteProgram(this.gl_program),this.device.gl.deleteShader(this.gl_shader_vert),this.device.gl.deleteShader(this.gl_shader_frag)},e.prototype.tryCompileProgram=function(){rt(this.compileState===Ur.NeedsCompile);var r=this.descriptor,n=r.vertex,i=r.fragment,o=this.device.gl;n?.glsl&&i?.glsl&&(this.gl_shader_vert=this.compileShader(n.postprocess?n.postprocess(n.glsl):n.glsl,o.VERTEX_SHADER),this.gl_shader_frag=this.compileShader(i.postprocess?i.postprocess(i.glsl):i.glsl,o.FRAGMENT_SHADER),o.attachShader(this.gl_program,this.gl_shader_vert),o.attachShader(this.gl_program,this.gl_shader_frag),o.linkProgram(this.gl_program),this.compileState=Ur.Compiling,ke(o)||(this.readUniformLocationsFromLinkedProgram(),this.readAttributesFromLinkedProgram()))},e.prototype.readAttributesFromLinkedProgram=function(){for(var r,n=this.device.gl,i=n.getProgramParameter(this.gl_program,n.ACTIVE_ATTRIBUTES),o=wB(this.descriptor.vertex.glsl),a=UB(this.rawVertexGLSL,o),s=function(f){var c=n.getActiveAttrib(u.gl_program,f),h=c.name,_=c.type,m=c.size,E=n.getAttribLocation(u.gl_program,h),S=(r=a.find(function(M){return M.name===h}))===null||r===void 0?void 0:r.location;E>=0&&!tn(S)&&(u.attributes[S]={name:h,location:E,type:_,size:m})},u=this,l=0;l<i;l++)s(l)},e.prototype.readUniformLocationsFromLinkedProgram=function(){for(var r=this.device.gl,n=r.getProgramParameter(this.gl_program,r.ACTIVE_UNIFORMS),i=0;i<n;i++){var o=r.getActiveUniform(this.gl_program,i),a=MB(o.name).name,s=r.getUniformLocation(this.gl_program,a);if(this.uniformSetters[a]=Bm(r,s,o),o&&o.size>1)for(var u=0;u<o.size;u++)s=r.getUniformLocation(this.gl_program,"".concat(a,"[").concat(u,"]")),this.uniformSetters["".concat(a,"[").concat(u,"]")]=Bm(r,s,o)}},e.prototype.compileShader=function(r,n){var i=this.device.gl,o=this.device.ensureResourceExists(i.createShader(n));return i.shaderSource(o,r),i.compileShader(o),o},e.prototype.setUniformsLegacy=function(r){r===void 0&&(r={});var n=this.device.gl;if(!ke(n)){var i=!1;for(var o in r){i||(n.useProgram(this.gl_program),i=!0);var a=r[o],s=this.uniformSetters[o];if(s){var u=a;u instanceof $c&&(u=u.textureIndex),s(u)}}}return this},e}(rn),QB=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.QueryPool;var s=a.device.gl;if(ke(s)){var u=o.elemCount,l=o.type;a.gl_query=sB(u,function(){return a.device.ensureResourceExists(s.createQuery())}),a.gl_query_type=GB(l)}return a}return e.prototype.queryResultOcclusion=function(r){var n=this.device.gl;if(ke(n)){var i=this.gl_query[r];return n.getQueryParameter(i,n.QUERY_RESULT_AVAILABLE)?!!n.getQueryParameter(i,n.QUERY_RESULT):null}return null},e.prototype.destroy=function(){t.prototype.destroy.call(this);var r=this.device.gl;if(ke(r))for(var n=0;n<this.gl_query.length;n++)r.deleteQuery(this.gl_query[n])},e}(rn),JB=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=t.call(this,{id:n,device:i})||this;return o.type=Tt.Readback,o.gl_pbo=null,o.gl_sync=null,o}return e.prototype.clientWaitAsync=function(r,n,i){n===void 0&&(n=0),i===void 0&&(i=10);var o=this.device.gl;return new Promise(function(a,s){function u(){var l=o.clientWaitSync(r,n,0);if(l==o.WAIT_FAILED){s();return}if(l==o.TIMEOUT_EXPIRED){setTimeout(u,tB(i,0,o.MAX_CLIENT_WAIT_TIMEOUT_WEBGL));return}a()}u()})},e.prototype.getBufferSubDataAsync=function(r,n,i,o,a,s){return _o(this,void 0,void 0,function(){var u;return mo(this,function(l){switch(l.label){case 0:return u=this.device.gl,ke(u)?(this.gl_sync=u.fenceSync(u.SYNC_GPU_COMMANDS_COMPLETE,0),u.flush(),[4,this.clientWaitAsync(this.gl_sync,0,10)]):[3,2];case 1:return l.sent(),u.bindBuffer(r,n),u.getBufferSubData(r,i,o,a,s),u.bindBuffer(r,null),[2,o];case 2:return[2]}})})},e.prototype.readTexture=function(r,n,i,o,a,s,u,l){return u===void 0&&(u=0),l===void 0&&(l=s.byteLength||0),_o(this,void 0,void 0,function(){var f,c,h,_,m;return mo(this,function(E){return f=this.device.gl,c=r,h=this.device.translateTextureFormat(c.format),_=this.device.translateTextureType(c.format),m=iB(c.format),ke(f)?(this.gl_pbo=this.device.ensureResourceExists(f.createBuffer()),f.bindBuffer(f.PIXEL_PACK_BUFFER,this.gl_pbo),f.bufferData(f.PIXEL_PACK_BUFFER,l,f.STREAM_READ),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),f.bindFramebuffer(C.READ_FRAMEBUFFER,this.device.readbackFramebuffer),f.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,c.gl_texture,0),f.bindBuffer(f.PIXEL_PACK_BUFFER,this.gl_pbo),f.readPixels(n,i,o,a,h,_,u*m),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),[2,this.getBufferSubDataAsync(f.PIXEL_PACK_BUFFER,this.gl_pbo,0,s,u,0)]):[2,this.readTextureSync(r,n,i,o,a,s,u,l)]})})},e.prototype.readTextureSync=function(r,n,i,o,a,s,u,l){l===void 0&&(l=s.byteLength||0);var f=this.device.gl,c=r,h=this.device.translateTextureType(c.format);return f.bindFramebuffer(C.FRAMEBUFFER,this.device.readbackFramebuffer),f.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,c.gl_texture,0),f.pixelStorei(f.PACK_ALIGNMENT,4),f.readPixels(n,i,o,a,f.RGBA,h,s),s},e.prototype.readBuffer=function(r,n,i,o,a){return _o(this,void 0,void 0,function(){var s;return mo(this,function(u){return s=this.device.gl,ke(s)?[2,this.getBufferSubDataAsync(s.ARRAY_BUFFER,vo(r,n),n,i,o,a)]:[2,Promise.reject()]})})},e.prototype.destroy=function(){t.prototype.destroy.call(this),ke(this.device.gl)&&(this.gl_sync!==null&&this.device.gl.deleteSync(this.gl_sync),this.gl_pbo!==null&&this.device.gl.deleteBuffer(this.gl_pbo))},e}(rn),eN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a,s,u=t.call(this,{id:n,device:i})||this;return u.type=Tt.RenderPipeline,u.drawMode=VB((a=o.topology)!==null&&a!==void 0?a:er.TRIANGLES),u.program=o.program,u.inputLayout=o.inputLayout,u.megaState=zt(zt({},Ro(bo)),o.megaStateDescriptor),u.colorAttachmentFormats=o.colorAttachmentFormats.slice(),u.depthStencilAttachmentFormat=o.depthStencilAttachmentFormat,u.sampleCount=(s=o.sampleCount)!==null&&s!==void 0?s:1,u}return e}(rn),tN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;return a.type=Tt.ComputePipeline,a.descriptor=o,a}return e}(rn),rN=function(){function t(){this.liveObjects=new Set,this.creationStacks=new Map,this.deletionStacks=new Map}return t.prototype.trackResourceCreated=function(e){this.creationStacks.set(e,new Error().stack),this.liveObjects.add(e)},t.prototype.trackResourceDestroyed=function(e){this.deletionStacks.has(e)&&console.warn("Object double freed:",e,`

Creation stack: `,this.creationStacks.get(e),`

Deletion stack: `,this.deletionStacks.get(e),`

This stack: `,new Error().stack),this.deletionStacks.set(e,new Error().stack),this.liveObjects.delete(e)},t.prototype.checkForLeaks=function(){var e,r;try{for(var n=Ti(this.liveObjects.values()),i=n.next();!i.done;i=n.next()){var o=i.value;console.warn("Object leaked:",o,"Creation stack:",this.creationStacks.get(o))}}catch(a){e={error:a}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},t.prototype.setResourceLeakCheck=function(e,r){r?this.liveObjects.add(e):this.liveObjects.delete(e)},t}(),nN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a,s,u=t.call(this,{id:n,device:i})||this;u.type=Tt.Sampler;var l=u.device.gl;if(ke(l)){var f=u.device.ensureResourceExists(l.createSampler());l.samplerParameteri(f,C.TEXTURE_WRAP_S,pa(o.addressModeU)),l.samplerParameteri(f,C.TEXTURE_WRAP_T,pa(o.addressModeV)),l.samplerParameteri(f,C.TEXTURE_WRAP_R,pa((a=o.addressModeW)!==null&&a!==void 0?a:o.addressModeU)),l.samplerParameteri(f,C.TEXTURE_MIN_FILTER,Fs(o.minFilter,o.mipmapFilter)),l.samplerParameteri(f,C.TEXTURE_MAG_FILTER,Fs(o.magFilter,ur.NO_MIP)),o.lodMinClamp!==void 0&&l.samplerParameterf(f,C.TEXTURE_MIN_LOD,o.lodMinClamp),o.lodMaxClamp!==void 0&&l.samplerParameterf(f,C.TEXTURE_MAX_LOD,o.lodMaxClamp),o.compareFunction!==void 0&&(l.samplerParameteri(f,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.samplerParameteri(f,l.TEXTURE_COMPARE_FUNC,o.compareFunction));var c=(s=o.maxAnisotropy)!==null&&s!==void 0?s:1;c>1&&u.device.EXT_texture_filter_anisotropic!==null&&(rt(o.minFilter===jt.BILINEAR&&o.magFilter===jt.BILINEAR&&o.mipmapFilter===ur.LINEAR),l.samplerParameterf(f,u.device.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,c)),u.gl_sampler=f}else u.descriptor=o;return u}return e.prototype.setTextureParameters=function(r,n,i){var o,a=this.device.gl,s=this.descriptor;this.isNPOT(n,i)?a.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,C.LINEAR):a.texParameteri(r,C.TEXTURE_MIN_FILTER,Fs(s.minFilter,s.mipmapFilter)),a.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,pa(s.addressModeU)),a.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,pa(s.addressModeV)),a.texParameteri(r,C.TEXTURE_MAG_FILTER,Fs(s.magFilter,ur.NO_MIP));var u=(o=s.maxAnisotropy)!==null&&o!==void 0?o:1;u>1&&this.device.EXT_texture_filter_anisotropic!==null&&(rt(s.minFilter===jt.BILINEAR&&s.magFilter===jt.BILINEAR&&s.mipmapFilter===ur.LINEAR),a.texParameteri(r,this.device.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,u))},e.prototype.destroy=function(){t.prototype.destroy.call(this),ke(this.device.gl)&&this.device.gl.deleteSampler(Gc(this))},e.prototype.isNPOT=function(r,n){return!Tu(r)||!Tu(n)},e}(rn),iN=function(){function t(){}return t.prototype.dispatchWorkgroups=function(e,r,n){},t.prototype.dispatchWorkgroupsIndirect=function(e,r){},t.prototype.setPipeline=function(e){},t.prototype.setBindings=function(e){},t.prototype.pushDebugGroup=function(e){},t.prototype.popDebugGroup=function(){},t.prototype.insertDebugMarker=function(e){},t}(),oN=function(t){Xt(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=Tt.RenderBundle,r.commands=[],r}return e.prototype.push=function(r){this.commands.push(r)},e.prototype.replay=function(){this.commands.forEach(function(r){return r()})},e}(rn),Fm=65536,aN=/uniform(?:\s+)(\w+)(?:\s?){([^]*?)}/g,sN=function(){function t(e,r){r===void 0&&(r={}),this.shaderDebug=!1,this.OES_vertex_array_object=null,this.ANGLE_instanced_arrays=null,this.OES_texture_float=null,this.OES_draw_buffers_indexed=null,this.WEBGL_draw_buffers=null,this.WEBGL_depth_texture=null,this.WEBGL_color_buffer_float=null,this.EXT_color_buffer_half_float=null,this.WEBGL_compressed_texture_s3tc=null,this.WEBGL_compressed_texture_s3tc_srgb=null,this.EXT_texture_compression_rgtc=null,this.EXT_texture_filter_anisotropic=null,this.KHR_parallel_shader_compile=null,this.EXT_texture_norm16=null,this.EXT_color_buffer_float=null,this.OES_texture_float_linear=null,this.OES_texture_half_float_linear=null,this.scTexture=null,this.scPlatformFramebuffer=null,this.currentActiveTexture=null,this.currentBoundVAO=null,this.currentProgram=null,this.resourceCreationTracker=null,this.resourceUniqueId=0,this.currentColorAttachments=[],this.currentColorAttachmentLevels=[],this.currentColorResolveTos=[],this.currentColorResolveToLevels=[],this.currentSampleCount=-1,this.currentIndexBufferByteOffset=null,this.currentMegaState=Ro(bo),this.currentSamplers=[],this.currentTextures=[],this.currentUniformBuffers=[],this.currentUniformBufferByteOffsets=[],this.currentUniformBufferByteSizes=[],this.currentScissorEnabled=!1,this.currentStencilRef=null,this.currentRenderPassDescriptor=null,this.currentRenderPassDescriptorStack=[],this.debugGroupStack=[],this.resolveColorAttachmentsChanged=!1,this.resolveDepthStencilAttachmentsChanged=!1,this.explicitBindingLocations=!1,this.separateSamplerTextures=!1,this.viewportOrigin=hn.LOWER_LEFT,this.clipSpaceNearZ=So.NEGATIVE_ONE,this.supportMRT=!1,this.inBlitRenderPass=!1,this.supportedSampleCounts=[],this.occlusionQueriesRecommended=!1,this.computeShadersSupported=!1,this.gl=e,this.contextAttributes=pi(e.getContextAttributes()),ke(e)?(this.EXT_texture_norm16=e.getExtension("EXT_texture_norm16"),this.EXT_color_buffer_float=e.getExtension("EXT_color_buffer_float")):(this.OES_vertex_array_object=e.getExtension("OES_vertex_array_object"),this.ANGLE_instanced_arrays=e.getExtension("ANGLE_instanced_arrays"),this.OES_texture_float=e.getExtension("OES_texture_float"),this.WEBGL_draw_buffers=e.getExtension("WEBGL_draw_buffers"),this.WEBGL_depth_texture=e.getExtension("WEBGL_depth_texture"),this.WEBGL_color_buffer_float=e.getExtension("WEBGL_color_buffer_float"),this.EXT_color_buffer_half_float=e.getExtension("EXT_color_buffer_half_float"),e.getExtension("EXT_frag_depth"),e.getExtension("OES_element_index_uint"),e.getExtension("OES_standard_derivatives")),this.WEBGL_compressed_texture_s3tc=e.getExtension("WEBGL_compressed_texture_s3tc"),this.WEBGL_compressed_texture_s3tc_srgb=e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),this.EXT_texture_compression_rgtc=e.getExtension("EXT_texture_compression_rgtc"),this.EXT_texture_filter_anisotropic=e.getExtension("EXT_texture_filter_anisotropic"),this.EXT_texture_norm16=e.getExtension("EXT_texture_norm16"),this.OES_texture_float_linear=e.getExtension("OES_texture_float_linear"),this.OES_texture_half_float_linear=e.getExtension("OES_texture_half_float_linear"),this.KHR_parallel_shader_compile=e.getExtension("KHR_parallel_shader_compile"),ke(e)?(this.platformString="WebGL2",this.glslVersion="#version 300 es"):(this.platformString="WebGL1",this.glslVersion="#version 100"),this.scTexture=new $c({id:this.getNextUniqueId(),device:this,descriptor:{width:0,height:0,depthOrArrayLayers:1,dimension:ht.TEXTURE_2D,mipLevelCount:1,usage:Ir.RENDER_TARGET,format:this.contextAttributes.alpha===!1?w.U8_RGB_RT:w.U8_RGBA_RT},fake:!0}),this.scTexture.formatKind=Wt.Float,this.scTexture.gl_target=null,this.scTexture.gl_texture=null,this.resolveColorReadFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.resolveColorDrawFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.resolveDepthStencilReadFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.resolveDepthStencilDrawFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.renderPassDrawFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.readbackFramebuffer=this.ensureResourceExists(e.createFramebuffer()),this.fallbackTexture2D=this.createFallbackTexture(ht.TEXTURE_2D,Wt.Float),this.fallbackTexture2DDepth=this.createFallbackTexture(ht.TEXTURE_2D,Wt.Depth),this.fallbackVertexBuffer=this.createBuffer({viewOrSize:1,usage:Dt.VERTEX,hint:pn.STATIC}),ke(e)&&(this.fallbackTexture2DArray=this.createFallbackTexture(ht.TEXTURE_2D_ARRAY,Wt.Float),this.fallbackTexture3D=this.createFallbackTexture(ht.TEXTURE_3D,Wt.Float),this.fallbackTextureCube=this.createFallbackTexture(ht.TEXTURE_CUBE_MAP,Wt.Float)),this.currentMegaState.depthCompare=Ot.LESS,this.currentMegaState.depthWrite=!1,this.currentMegaState.attachmentsState[0].channelWriteMask=dr.ALL,e.enable(e.DEPTH_TEST),e.enable(e.STENCIL_TEST),this.checkLimits(),r.shaderDebug&&(this.shaderDebug=!0),r.trackResources&&(this.resourceCreationTracker=new rN)}return t.prototype.destroy=function(){this.blitBindings&&this.blitBindings.destroy(),this.blitInputLayout&&this.blitInputLayout.destroy(),this.blitRenderPipeline&&this.blitRenderPipeline.destroy(),this.blitVertexBuffer&&this.blitVertexBuffer.destroy(),this.blitProgram&&this.blitProgram.destroy()},t.prototype.createFallbackTexture=function(e,r){var n=e===ht.TEXTURE_CUBE_MAP?6:1,i=r===Wt.Depth?w.D32F:w.U8_RGBA_NORM,o=this.createTexture({dimension:e,format:i,usage:Ir.SAMPLED,width:1,height:1,depthOrArrayLayers:n,mipLevelCount:1});return r===Wt.Float&&o.setImageData([new Uint8Array(4*n)]),no(o)},t.prototype.getNextUniqueId=function(){return++this.resourceUniqueId},t.prototype.checkLimits=function(){var e=this.gl;if(this.maxVertexAttribs=e.getParameter(C.MAX_VERTEX_ATTRIBS),ke(e)){this.uniformBufferMaxPageByteSize=Math.min(e.getParameter(C.MAX_UNIFORM_BLOCK_SIZE),Fm),this.uniformBufferWordAlignment=e.getParameter(e.UNIFORM_BUFFER_OFFSET_ALIGNMENT)/4;var r=e.getInternalformatParameter(e.RENDERBUFFER,e.DEPTH32F_STENCIL8,e.SAMPLES);this.supportedSampleCounts=r?fa([],un(r),!1):[],this.occlusionQueriesRecommended=!0}else this.uniformBufferWordAlignment=64,this.uniformBufferMaxPageByteSize=Fm;this.uniformBufferMaxPageWordSize=this.uniformBufferMaxPageByteSize/4,this.supportedSampleCounts.includes(1)||this.supportedSampleCounts.push(1),this.supportedSampleCounts.sort(function(n,i){return n-i})},t.prototype.configureSwapChain=function(e,r,n){var i=this.scTexture;i.width=e,i.height=r,this.scPlatformFramebuffer=aB(n)},t.prototype.getDevice=function(){return this},t.prototype.getCanvas=function(){return this.gl.canvas},t.prototype.getOnscreenTexture=function(){return this.scTexture},t.prototype.beginFrame=function(){},t.prototype.endFrame=function(){},t.prototype.translateTextureInternalFormat=function(e,r){switch(r===void 0&&(r=!1),e){case w.ALPHA:return C.ALPHA;case w.U8_LUMINANCE:case w.F16_LUMINANCE:case w.F32_LUMINANCE:return C.LUMINANCE;case w.F16_R:return C.R16F;case w.F16_RG:return C.RG16F;case w.F16_RGB:return C.RGB16F;case w.F16_RGBA:return C.RGBA16F;case w.F32_R:return C.R32F;case w.F32_RG:return C.RG32F;case w.F32_RGB:return C.RGB32F;case w.F32_RGBA:return ke(this.gl)?C.RGBA32F:r?this.WEBGL_color_buffer_float.RGBA32F_EXT:C.RGBA;case w.U8_R_NORM:return C.R8;case w.U8_RG_NORM:return C.RG8;case w.U8_RGB_NORM:case w.U8_RGB_RT:return C.RGB8;case w.U8_RGB_SRGB:return C.SRGB8;case w.U8_RGBA_NORM:case w.U8_RGBA_RT:return ke(this.gl)?C.RGBA8:r?C.RGBA4:C.RGBA;case w.U8_RGBA:return C.RGBA;case w.U8_RGBA_SRGB:case w.U8_RGBA_RT_SRGB:return C.SRGB8_ALPHA8;case w.U16_R:return C.R16UI;case w.U16_R_NORM:return this.EXT_texture_norm16.R16_EXT;case w.U16_RG_NORM:return this.EXT_texture_norm16.RG16_EXT;case w.U16_RGBA_NORM:return this.EXT_texture_norm16.RGBA16_EXT;case w.U16_RGBA_5551:return C.RGB5_A1;case w.U16_RGB_565:return C.RGB565;case w.U32_R:return C.R32UI;case w.S8_RGBA_NORM:return C.RGBA8_SNORM;case w.S8_RG_NORM:return C.RG8_SNORM;case w.BC1:return this.WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT;case w.BC1_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;case w.BC2:return this.WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT;case w.BC2_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;case w.BC3:return this.WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;case w.BC3_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;case w.BC4_UNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_RED_RGTC1_EXT;case w.BC4_SNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT;case w.BC5_UNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT;case w.BC5_SNORM:return this.EXT_texture_compression_rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;case w.D32F_S8:return ke(this.gl)?C.DEPTH32F_STENCIL8:this.WEBGL_depth_texture?C.DEPTH_STENCIL:C.DEPTH_COMPONENT16;case w.D24_S8:return ke(this.gl)?C.DEPTH24_STENCIL8:this.WEBGL_depth_texture?C.DEPTH_STENCIL:C.DEPTH_COMPONENT16;case w.D32F:return ke(this.gl)?C.DEPTH_COMPONENT32F:this.WEBGL_depth_texture?C.DEPTH_COMPONENT:C.DEPTH_COMPONENT16;case w.D24:return ke(this.gl)?C.DEPTH_COMPONENT24:this.WEBGL_depth_texture?C.DEPTH_COMPONENT:C.DEPTH_COMPONENT16;default:throw new Error("whoops")}},t.prototype.translateTextureType=function(e){var r=An(e);switch(r){case ie.U8:return C.UNSIGNED_BYTE;case ie.U16:return C.UNSIGNED_SHORT;case ie.U32:return C.UNSIGNED_INT;case ie.S8:return C.BYTE;case ie.F16:return C.HALF_FLOAT;case ie.F32:return C.FLOAT;case ie.U16_PACKED_5551:return C.UNSIGNED_SHORT_5_5_5_1;case ie.D32F:return ke(this.gl)?C.FLOAT:this.WEBGL_depth_texture?C.UNSIGNED_INT:C.UNSIGNED_BYTE;case ie.D24:return ke(this.gl)?C.UNSIGNED_INT_24_8:this.WEBGL_depth_texture?C.UNSIGNED_SHORT:C.UNSIGNED_BYTE;case ie.D24S8:return ke(this.gl)?C.UNSIGNED_INT_24_8:this.WEBGL_depth_texture?C.UNSIGNED_INT_24_8_WEBGL:C.UNSIGNED_BYTE;case ie.D32FS8:return C.FLOAT_32_UNSIGNED_INT_24_8_REV;default:throw new Error("whoops")}},t.prototype.translateInternalTextureFormat=function(e){switch(e){case w.F32_R:return C.R32F;case w.F32_RG:return C.RG32F;case w.F32_RGB:return C.RGB32F;case w.F32_RGBA:return C.RGBA32F;case w.F16_R:return C.R16F;case w.F16_RG:return C.RG16F;case w.F16_RGB:return C.RGB16F;case w.F16_RGBA:return C.RGBA16F}return this.translateTextureFormat(e)},t.prototype.translateTextureFormat=function(e){if(Cg(e)||e===w.F32_LUMINANCE||e===w.U8_LUMINANCE)return this.translateTextureInternalFormat(e);var r=ke(this.gl)||!ke(this.gl)&&!!this.WEBGL_depth_texture;switch(e){case w.D24_S8:case w.D32F_S8:return r?C.DEPTH_STENCIL:C.RGBA;case w.D24:case w.D32F:return r?C.DEPTH_COMPONENT:C.RGBA}var n=Og(e),i=Af(e);switch(i){case Ue.A:return C.ALPHA;case Ue.R:return n?C.RED_INTEGER:C.RED;case Ue.RG:return n?C.RG_INTEGER:C.RG;case Ue.RGB:return n?C.RGB_INTEGER:C.RGB;case Ue.RGBA:return C.RGBA}},t.prototype.setActiveTexture=function(e){this.currentActiveTexture!==e&&(this.gl.activeTexture(e),this.currentActiveTexture=e)},t.prototype.bindVAO=function(e){this.currentBoundVAO!==e&&(ke(this.gl)?this.gl.bindVertexArray(e):this.OES_vertex_array_object.bindVertexArrayOES(e),this.currentBoundVAO=e)},t.prototype.programCompiled=function(e){rt(e.compileState!==Ur.NeedsCompile),e.compileState===Ur.Compiling&&(e.compileState=Ur.NeedsBind,this.shaderDebug&&this.checkProgramCompilationForErrors(e))},t.prototype.useProgram=function(e){this.currentProgram!==e&&(this.programCompiled(e),this.gl.useProgram(e.gl_program),this.currentProgram=e)},t.prototype.ensureResourceExists=function(e){if(e===null){var r=this.gl.getError();throw new Error("Created resource is null; GL error encountered: ".concat(r))}else return e},t.prototype.createBuffer=function(e){return new YB({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createTexture=function(e){return new $c({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createSampler=function(e){return new nN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderTarget=function(e){return new KB({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderTargetFromTexture=function(e){var r=e,n=r.format,i=r.width,o=r.height,a=r.mipLevelCount;return rt(a===1),this.createRenderTarget({format:n,width:i,height:o,sampleCount:1,texture:e})},t.prototype.createProgram=function(e){var r,n,i,o=(r=e.vertex)===null||r===void 0?void 0:r.glsl;return!((n=e.vertex)===null||n===void 0)&&n.glsl&&(e.vertex.glsl=Co(this.queryVendorInfo(),"vert",e.vertex.glsl)),!((i=e.fragment)===null||i===void 0)&&i.glsl&&(e.fragment.glsl=Co(this.queryVendorInfo(),"frag",e.fragment.glsl)),this.createProgramSimple(e,o)},t.prototype.createProgramSimple=function(e,r){var n=new qB({id:this.getNextUniqueId(),device:this,descriptor:e},r);return n},t.prototype.createBindings=function(e){return new kB({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createInputLayout=function(e){return new ZB({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderPipeline=function(e){return new eN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createComputePass=function(){return new iN},t.prototype.createComputePipeline=function(e){return new tN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createReadback=function(){return new JB({id:this.getNextUniqueId(),device:this})},t.prototype.createQueryPool=function(e,r){return new QB({id:this.getNextUniqueId(),device:this,descriptor:{type:e,elemCount:r}})},t.prototype.formatRenderPassDescriptor=function(e){var r,n,i,o,a,s,u=e.colorAttachment;e.depthClearValue=(r=e.depthClearValue)!==null&&r!==void 0?r:"load",e.stencilClearValue=(n=e.stencilClearValue)!==null&&n!==void 0?n:"load";for(var l=0;l<u.length;l++)e.colorAttachmentLevel||(e.colorAttachmentLevel=[]),e.colorAttachmentLevel[l]=(i=e.colorAttachmentLevel[l])!==null&&i!==void 0?i:0,e.colorResolveToLevel||(e.colorResolveToLevel=[]),e.colorResolveToLevel[l]=(o=e.colorResolveToLevel[l])!==null&&o!==void 0?o:0,e.colorClearColor||(e.colorClearColor=[]),e.colorClearColor[l]=(a=e.colorClearColor[l])!==null&&a!==void 0?a:"load",e.colorStore||(e.colorStore=[]),e.colorStore[l]=(s=e.colorStore[l])!==null&&s!==void 0?s:!1},t.prototype.createRenderBundle=function(){return new oN({id:this.getNextUniqueId(),device:this})},t.prototype.beginBundle=function(e){this.renderBundle=e},t.prototype.endBundle=function(){this.renderBundle=void 0},t.prototype.executeBundles=function(e){e.forEach(function(r){r.replay()})},t.prototype.createRenderPass=function(e){this.currentRenderPassDescriptor!==null&&this.currentRenderPassDescriptorStack.push(this.currentRenderPassDescriptor),this.currentRenderPassDescriptor=e,this.formatRenderPassDescriptor(e);var r=e.colorAttachment,n=e.colorAttachmentLevel,i=e.colorClearColor,o=e.colorResolveTo,a=e.colorResolveToLevel,s=e.depthStencilAttachment,u=e.depthClearValue,l=e.stencilClearValue,f=e.depthStencilResolveTo,c=o&&o.length===1&&o[0]===this.scTexture;this.setRenderPassParametersBegin(r.length,c);for(var h=0;h<r.length;h++)this.setRenderPassParametersColor(h,r[h],n[h],o[h],a[h],c);this.setRenderPassParametersDepthStencil(s,f,c),this.validateCurrentAttachments();for(var h=0;h<r.length;h++){var _=i[h];_!=="load"&&this.setRenderPassParametersClearColor(h,_.r,_.g,_.b,_.a)}return this.setRenderPassParametersClearDepthStencil(u,l),this},t.prototype.submitPass=function(e){rt(this.currentRenderPassDescriptor!==null),this.endPass(),this.currentRenderPassDescriptorStack.length?this.currentRenderPassDescriptor=this.currentRenderPassDescriptorStack.pop():this.currentRenderPassDescriptor=null},t.prototype.copySubTexture2D=function(e,r,n,i,o,a){var s=this.gl,u=e,l=i;if(rt(l.mipLevelCount===1),rt(u.mipLevelCount===1),ke(s))u===this.scTexture?s.bindFramebuffer(s.DRAW_FRAMEBUFFER,this.scPlatformFramebuffer):(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,this.resolveColorDrawFramebuffer),this.bindFramebufferAttachment(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,u,0)),s.bindFramebuffer(s.READ_FRAMEBUFFER,this.resolveColorReadFramebuffer),this.bindFramebufferAttachment(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,l,0),s.blitFramebuffer(o,a,o+l.width,a+l.height,r,n,r+l.width,n+l.height,s.COLOR_BUFFER_BIT,s.LINEAR),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null);else if(u===this.scTexture){var f=this.createRenderTargetFromTexture(i);this.submitBlitRenderPass(f,u)}},t.prototype.queryLimits=function(){return this},t.prototype.queryTextureFormatSupported=function(e,r,n){switch(e){case w.BC1_SRGB:case w.BC2_SRGB:case w.BC3_SRGB:return this.WEBGL_compressed_texture_s3tc_srgb!==null?uc(r,n,4,4):!1;case w.BC1:case w.BC2:case w.BC3:return this.WEBGL_compressed_texture_s3tc!==null?uc(r,n,4,4):!1;case w.BC4_UNORM:case w.BC4_SNORM:case w.BC5_UNORM:case w.BC5_SNORM:return this.EXT_texture_compression_rgtc!==null?uc(r,n,4,4):!1;case w.U16_R_NORM:case w.U16_RG_NORM:case w.U16_RGBA_NORM:return this.EXT_texture_norm16!==null;case w.F32_R:case w.F32_RG:case w.F32_RGB:case w.F32_RGBA:return this.OES_texture_float_linear!==null;case w.F16_R:case w.F16_RG:case w.F16_RGB:case w.F16_RGBA:return this.OES_texture_half_float_linear!==null;default:return!0}},t.prototype.queryProgramReady=function(e){var r=this.gl;if(e.compileState===Ur.NeedsCompile)throw new Error("whoops");if(e.compileState===Ur.Compiling){var n=void 0;return this.KHR_parallel_shader_compile!==null?n=r.getProgramParameter(e.gl_program,this.KHR_parallel_shader_compile.COMPLETION_STATUS_KHR):n=!0,n&&this.programCompiled(e),n}return e.compileState===Ur.NeedsBind||e.compileState===Ur.ReadyToUse},t.prototype.queryPlatformAvailable=function(){return this.gl.isContextLost()},t.prototype.queryVendorInfo=function(){return this},t.prototype.queryRenderPass=function(e){return this.currentRenderPassDescriptor},t.prototype.queryRenderTarget=function(e){var r=e;return r},t.prototype.setResourceName=function(e,r){if(e.name=r,e.type===Tt.Buffer)for(var n=e.gl_buffer_pages,i=0;i<n.length;i++)_a(n[i],"".concat(r," Page ").concat(i));else if(e.type===Tt.Texture)_a(no(e),r);else if(e.type===Tt.Sampler)_a(Gc(e),r);else if(e.type===Tt.RenderTarget){var o=e.gl_renderbuffer;o!==null&&_a(o,r)}else e.type===Tt.InputLayout&&_a(e.vao,r)},t.prototype.setResourceLeakCheck=function(e,r){this.resourceCreationTracker!==null&&this.resourceCreationTracker.setResourceLeakCheck(e,r)},t.prototype.checkForLeaks=function(){this.resourceCreationTracker!==null&&this.resourceCreationTracker.checkForLeaks()},t.prototype.pushDebugGroup=function(e){},t.prototype.popDebugGroup=function(){},t.prototype.insertDebugMarker=function(e){},t.prototype.programPatched=function(e,r){rt(this.shaderDebug)},t.prototype.getBufferData=function(e,r,n){n===void 0&&(n=0);var i=this.gl;ke(i)&&(i.bindBuffer(i.COPY_READ_BUFFER,vo(e,n*4)),i.getBufferSubData(i.COPY_READ_BUFFER,n*4,r))},t.prototype.debugGroupStatisticsDrawCall=function(e){e===void 0&&(e=1);for(var r=this.debugGroupStack.length-1;r>=0;r--)this.debugGroupStack[r].drawCallCount+=e},t.prototype.debugGroupStatisticsBufferUpload=function(e){e===void 0&&(e=1);for(var r=this.debugGroupStack.length-1;r>=0;r--)this.debugGroupStack[r].bufferUploadCount+=e},t.prototype.debugGroupStatisticsTextureBind=function(e){e===void 0&&(e=1);for(var r=this.debugGroupStack.length-1;r>=0;r--)this.debugGroupStack[r].textureBindCount+=e},t.prototype.debugGroupStatisticsTriangles=function(e){for(var r=this.debugGroupStack.length-1;r>=0;r--)this.debugGroupStack[r].triangleCount+=e},t.prototype.reportShaderError=function(e,r){var n=this.gl,i=n.getShaderParameter(e,n.COMPILE_STATUS);if(!i){console.error(uB(r));var o=n.getExtension("WEBGL_debug_shaders");o&&console.error(o.getTranslatedShaderSource(e)),console.error(n.getShaderInfoLog(e))}return i},t.prototype.checkProgramCompilationForErrors=function(e){var r=this.gl,n=e.gl_program;if(!r.getProgramParameter(n,r.LINK_STATUS)){var i=e.descriptor;if(!this.reportShaderError(e.gl_shader_vert,i.vertex.glsl)||!this.reportShaderError(e.gl_shader_frag,i.fragment.glsl))return;console.error(r.getProgramInfoLog(e.gl_program))}},t.prototype.bindFramebufferAttachment=function(e,r,n,i){var o=this.gl;if(tn(n))o.framebufferRenderbuffer(e,r,o.RENDERBUFFER,null);else if(n.type===Tt.RenderTarget)n.gl_renderbuffer!==null?o.framebufferRenderbuffer(e,r,o.RENDERBUFFER,n.gl_renderbuffer):n.texture!==null&&o.framebufferTexture2D(e,r,C.TEXTURE_2D,no(n.texture),i);else if(n.type===Tt.Texture){var a=no(n);n.dimension===ht.TEXTURE_2D?o.framebufferTexture2D(e,r,C.TEXTURE_2D,a,i):ke(o)&&(n.dimension,ht.TEXTURE_2D_ARRAY)}},t.prototype.bindFramebufferDepthStencilAttachment=function(e,r){var n=this.gl,i=tn(r)?Pe.Depth|Pe.Stencil:xo(r.format),o=!!(i&Pe.Depth),a=!!(i&Pe.Stencil);if(o&&a){var s=ke(this.gl)||!ke(this.gl)&&!!this.WEBGL_depth_texture;s?this.bindFramebufferAttachment(e,n.DEPTH_STENCIL_ATTACHMENT,r,0):this.bindFramebufferAttachment(e,n.DEPTH_ATTACHMENT,r,0)}else o?(this.bindFramebufferAttachment(e,n.DEPTH_ATTACHMENT,r,0),this.bindFramebufferAttachment(e,n.STENCIL_ATTACHMENT,null,0)):a&&(this.bindFramebufferAttachment(e,n.STENCIL_ATTACHMENT,r,0),this.bindFramebufferAttachment(e,n.DEPTH_ATTACHMENT,null,0))},t.prototype.validateCurrentAttachments=function(){for(var e=-1,r=-1,n=-1,i=0;i<this.currentColorAttachments.length;i++){var o=this.currentColorAttachments[i];o!==null&&(e===-1?(e=o.sampleCount,r=o.width,n=o.height):(rt(e===o.sampleCount),rt(r===o.width),rt(n===o.height)))}this.currentDepthStencilAttachment&&(e===-1?e=this.currentDepthStencilAttachment.sampleCount:(rt(e===this.currentDepthStencilAttachment.sampleCount),rt(r===this.currentDepthStencilAttachment.width),rt(n===this.currentDepthStencilAttachment.height))),this.currentSampleCount=e},t.prototype.setRenderPassParametersBegin=function(e,r){r===void 0&&(r=!1);var n=this.gl;if(r)n.bindFramebuffer(C.FRAMEBUFFER,null);else if(ke(n)?n.bindFramebuffer(C.DRAW_FRAMEBUFFER,this.renderPassDrawFramebuffer):this.inBlitRenderPass||n.bindFramebuffer(C.FRAMEBUFFER,this.renderPassDrawFramebuffer),ke(n)?n.drawBuffers([C.COLOR_ATTACHMENT0,C.COLOR_ATTACHMENT1,C.COLOR_ATTACHMENT2,C.COLOR_ATTACHMENT3]):!this.inBlitRenderPass&&this.WEBGL_draw_buffers&&this.WEBGL_draw_buffers.drawBuffersWEBGL([C.COLOR_ATTACHMENT0_WEBGL,C.COLOR_ATTACHMENT1_WEBGL,C.COLOR_ATTACHMENT2_WEBGL,C.COLOR_ATTACHMENT3_WEBGL]),!this.inBlitRenderPass)for(var i=e;i<this.currentColorAttachments.length;i++){var o=ke(n)?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,a=ke(n)?C.COLOR_ATTACHMENT0:C.COLOR_ATTACHMENT0_WEBGL;n.framebufferRenderbuffer(o,a+i,C.RENDERBUFFER,null),n.framebufferTexture2D(o,a+i,C.TEXTURE_2D,null,0)}this.currentColorAttachments.length=e},t.prototype.setRenderPassParametersColor=function(e,r,n,i,o,a){a===void 0&&(a=!1);var s=this.gl,u=ke(s);(this.currentColorAttachments[e]!==r||this.currentColorAttachmentLevels[e]!==n)&&(this.currentColorAttachments[e]=r,this.currentColorAttachmentLevels[e]=n,!a&&(u||!u&&this.WEBGL_draw_buffers)&&this.bindFramebufferAttachment(u?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,(u?C.COLOR_ATTACHMENT0:C.COLOR_ATTACHMENT0_WEBGL)+e,r,n),this.resolveColorAttachmentsChanged=!0),(this.currentColorResolveTos[e]!==i||this.currentColorResolveToLevels[e]!==o)&&(this.currentColorResolveTos[e]=i,this.currentColorResolveToLevels[e]=o,i!==null&&(this.resolveColorAttachmentsChanged=!0))},t.prototype.setRenderPassParametersDepthStencil=function(e,r,n){n===void 0&&(n=!1);var i=this.gl;this.currentDepthStencilAttachment!==e&&(this.currentDepthStencilAttachment=e,!n&&!this.inBlitRenderPass&&this.bindFramebufferDepthStencilAttachment(ke(i)?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,this.currentDepthStencilAttachment),this.resolveDepthStencilAttachmentsChanged=!0),this.currentDepthStencilResolveTo!==r&&(this.currentDepthStencilResolveTo=r,r&&(this.resolveDepthStencilAttachmentsChanged=!0))},t.prototype.setRenderPassParametersClearColor=function(e,r,n,i,o){var a=this.gl;if(this.OES_draw_buffers_indexed!==null){var s=this.currentMegaState.attachmentsState[e];s&&s.channelWriteMask!==dr.ALL&&(this.OES_draw_buffers_indexed.colorMaskiOES(e,!0,!0,!0,!0),s.channelWriteMask=dr.ALL)}else{var s=this.currentMegaState.attachmentsState[0];s&&s.channelWriteMask!==dr.ALL&&(a.colorMask(!0,!0,!0,!0),s.channelWriteMask=dr.ALL)}this.setScissorRectEnabled(!1),ke(a)?a.clearBufferfv(a.COLOR,e,[r,n,i,o]):(a.clearColor(r,n,i,o),a.clear(a.COLOR_BUFFER_BIT))},t.prototype.setRenderPassParametersClearDepthStencil=function(e,r){e===void 0&&(e="load"),r===void 0&&(r="load");var n=this.gl;e!=="load"&&(rt(!!this.currentDepthStencilAttachment),this.currentMegaState.depthWrite||(n.depthMask(!0),this.currentMegaState.depthWrite=!0),ke(n)?n.clearBufferfv(n.DEPTH,0,[e]):(n.clearDepth(e),n.clear(n.DEPTH_BUFFER_BIT))),r!=="load"&&(rt(!!this.currentDepthStencilAttachment),this.currentMegaState.stencilWrite||(n.enable(n.STENCIL_TEST),n.stencilMask(255),this.currentMegaState.stencilWrite=!0),ke(n)?n.clearBufferiv(n.STENCIL,0,[r]):(n.clearStencil(r),n.clear(n.STENCIL_BUFFER_BIT)))},t.prototype.setBindings=function(e){var r=this,n;if(this.renderBundle){this.renderBundle.push(function(){return r.setBindings(e)});return}var i=this.gl,o=e,a=o.uniformBufferBindings,s=o.samplerBindings,u=o.bindingLayouts;rt(0<u.bindingLayoutTables.length);var l=u.bindingLayoutTables[0];rt(a.length>=l.numUniformBuffers),rt(s.length>=l.numSamplers);for(var f=0;f<a.length;f++){var c=a[f];if(c.size!==0){var h=l.firstUniformBuffer+f,_=c.buffer,m=c.offset||0,E=c.size||_.byteSize;if(_!==this.currentUniformBuffers[h]||m!==this.currentUniformBufferByteOffsets[h]||E!==this.currentUniformBufferByteSizes[h]){var S=m%_.pageByteSize,M=_.gl_buffer_pages[m/_.pageByteSize|0];rt(S+E<=_.pageByteSize),ke(i)&&i.bindBufferRange(i.UNIFORM_BUFFER,h,M,S,E),this.currentUniformBuffers[h]=_,this.currentUniformBufferByteOffsets[h]=m,this.currentUniformBufferByteSizes[h]=E}}}for(var f=0;f<l.numSamplers;f++){var c=s[f],P=l.firstSampler+f,F=c!==null&&c.sampler!==null?Gc(c.sampler):null,V=c!==null&&c.texture!==null?no(c.texture):null;if(this.currentSamplers[P]!==F&&(ke(i)&&i.bindSampler(P,F),this.currentSamplers[P]=F),this.currentTextures[P]!==V){if(this.setActiveTexture(i.TEXTURE0+P),V!==null){var pe=pi(c).texture,ce=pe.gl_target,j=pe.width,fe=pe.height;c.texture.textureIndex=P,i.bindTexture(ce,V),ke(i)||(n=c.sampler)===null||n===void 0||n.setTextureParameters(ce,j,fe),this.debugGroupStatisticsTextureBind()}else{var ze=zt(zt({},c),Rg),te=ze.dimension,k=ze.formatKind,ce=$B(te);i.bindTexture(ce,this.getFallbackTexture(zt({gl_target:ce,formatKind:k},ze)))}this.currentTextures[P]=V}}},t.prototype.setViewport=function(e,r,n,i){var o=this.gl;o.viewport(e,r,n,i)},t.prototype.setScissorRect=function(e,r,n,i){var o=this.gl;this.setScissorRectEnabled(!0),o.scissor(e,r,n,i)},t.prototype.applyAttachmentStateIndexed=function(e,r,n){var i=this.gl,o=this.OES_draw_buffers_indexed;r.channelWriteMask!==n.channelWriteMask&&(o.colorMaskiOES(e,!!(n.channelWriteMask&dr.RED),!!(n.channelWriteMask&dr.GREEN),!!(n.channelWriteMask&dr.BLUE),!!(n.channelWriteMask&dr.ALPHA)),r.channelWriteMask=n.channelWriteMask);var a=r.rgbBlendState.blendMode!==n.rgbBlendState.blendMode||r.alphaBlendState.blendMode!==n.alphaBlendState.blendMode,s=r.rgbBlendState.blendSrcFactor!==n.rgbBlendState.blendSrcFactor||r.alphaBlendState.blendSrcFactor!==n.alphaBlendState.blendSrcFactor||r.rgbBlendState.blendDstFactor!==n.rgbBlendState.blendDstFactor||r.alphaBlendState.blendDstFactor!==n.alphaBlendState.blendDstFactor;(s||a)&&(Vn(r.rgbBlendState)&&Vn(r.alphaBlendState)?o.enableiOES(e,i.BLEND):Vn(n.rgbBlendState)&&Vn(n.alphaBlendState)&&o.disableiOES(e,i.BLEND)),a&&(o.blendEquationSeparateiOES(e,n.rgbBlendState.blendMode,n.alphaBlendState.blendMode),r.rgbBlendState.blendMode=n.rgbBlendState.blendMode,r.alphaBlendState.blendMode=n.alphaBlendState.blendMode),s&&(o.blendFuncSeparateiOES(e,n.rgbBlendState.blendSrcFactor,n.rgbBlendState.blendDstFactor,n.alphaBlendState.blendSrcFactor,n.alphaBlendState.blendDstFactor),r.rgbBlendState.blendSrcFactor=n.rgbBlendState.blendSrcFactor,r.alphaBlendState.blendSrcFactor=n.alphaBlendState.blendSrcFactor,r.rgbBlendState.blendDstFactor=n.rgbBlendState.blendDstFactor,r.alphaBlendState.blendDstFactor=n.alphaBlendState.blendDstFactor)},t.prototype.applyAttachmentState=function(e,r){var n=this.gl;e.channelWriteMask!==r.channelWriteMask&&(n.colorMask(!!(r.channelWriteMask&dr.RED),!!(r.channelWriteMask&dr.GREEN),!!(r.channelWriteMask&dr.BLUE),!!(r.channelWriteMask&dr.ALPHA)),e.channelWriteMask=r.channelWriteMask);var i=e.rgbBlendState.blendMode!==r.rgbBlendState.blendMode||e.alphaBlendState.blendMode!==r.alphaBlendState.blendMode,o=e.rgbBlendState.blendSrcFactor!==r.rgbBlendState.blendSrcFactor||e.alphaBlendState.blendSrcFactor!==r.alphaBlendState.blendSrcFactor||e.rgbBlendState.blendDstFactor!==r.rgbBlendState.blendDstFactor||e.alphaBlendState.blendDstFactor!==r.alphaBlendState.blendDstFactor;(o||i)&&(Vn(e.rgbBlendState)&&Vn(e.alphaBlendState)?n.enable(n.BLEND):Vn(r.rgbBlendState)&&Vn(r.alphaBlendState)&&n.disable(n.BLEND)),i&&(n.blendEquationSeparate(r.rgbBlendState.blendMode,r.alphaBlendState.blendMode),e.rgbBlendState.blendMode=r.rgbBlendState.blendMode,e.alphaBlendState.blendMode=r.alphaBlendState.blendMode),o&&(n.blendFuncSeparate(r.rgbBlendState.blendSrcFactor,r.rgbBlendState.blendDstFactor,r.alphaBlendState.blendSrcFactor,r.alphaBlendState.blendDstFactor),e.rgbBlendState.blendSrcFactor=r.rgbBlendState.blendSrcFactor,e.alphaBlendState.blendSrcFactor=r.alphaBlendState.blendSrcFactor,e.rgbBlendState.blendDstFactor=r.rgbBlendState.blendDstFactor,e.alphaBlendState.blendDstFactor=r.alphaBlendState.blendDstFactor)},t.prototype.setMegaState=function(e){var r=this.gl,n=this.currentMegaState;if(this.OES_draw_buffers_indexed!==null)for(var i=0;i<e.attachmentsState.length;i++)this.applyAttachmentStateIndexed(i,n.attachmentsState[0],e.attachmentsState[0]);else rt(e.attachmentsState.length===1),this.applyAttachmentState(n.attachmentsState[0],e.attachmentsState[0]);yg(n.blendConstant,e.blendConstant)||(r.blendColor(e.blendConstant.r,e.blendConstant.g,e.blendConstant.b,e.blendConstant.a),Ag(n.blendConstant,e.blendConstant)),n.depthCompare!==e.depthCompare&&(r.depthFunc(e.depthCompare),n.depthCompare=e.depthCompare),!!n.depthWrite!=!!e.depthWrite&&(r.depthMask(e.depthWrite),n.depthWrite=e.depthWrite),!!n.stencilWrite!=!!e.stencilWrite&&(r.stencilMask(e.stencilWrite?255:0),n.stencilWrite=e.stencilWrite);var o=!1;if(!Ru(n.stencilFront,e.stencilFront)){o=!0;var a=e.stencilFront,s=a.passOp,u=a.failOp,l=a.depthFailOp,f=a.compare;(n.stencilFront.passOp!==s||n.stencilFront.failOp!==u||n.stencilFront.depthFailOp!==l)&&(r.stencilOpSeparate(r.FRONT,u,l,s),n.stencilFront.passOp=s,n.stencilFront.failOp=u,n.stencilFront.depthFailOp=l),n.stencilFront.compare!==f&&(this.setStencilReference(0),n.stencilFront.compare=f)}if(!Ru(n.stencilBack,e.stencilBack)){o=!0;var c=e.stencilBack,s=c.passOp,u=c.failOp,l=c.depthFailOp,f=c.compare;(n.stencilBack.passOp!==s||n.stencilBack.failOp!==u||n.stencilBack.depthFailOp!==l)&&(r.stencilOpSeparate(r.BACK,u,l,s),n.stencilBack.passOp=s,n.stencilBack.failOp=u,n.stencilBack.depthFailOp=l),n.stencilBack.compare!==f&&(this.setStencilReference(0),n.stencilBack.compare=f)}(n.stencilFront.mask!==e.stencilFront.mask||n.stencilBack.mask!==e.stencilBack.mask)&&(o=!0,n.stencilFront.mask=e.stencilFront.mask,n.stencilBack.mask=e.stencilBack.mask),o&&this.applyStencil(),n.cullMode!==e.cullMode&&(n.cullMode===zr.NONE?r.enable(r.CULL_FACE):e.cullMode===zr.NONE&&r.disable(r.CULL_FACE),e.cullMode===zr.BACK?r.cullFace(r.BACK):e.cullMode===zr.FRONT?r.cullFace(r.FRONT):e.cullMode===zr.FRONT_AND_BACK&&r.cullFace(r.FRONT_AND_BACK),n.cullMode=e.cullMode),n.frontFace!==e.frontFace&&(r.frontFace(e.frontFace),n.frontFace=e.frontFace),n.polygonOffset!==e.polygonOffset&&(e.polygonOffset?r.enable(r.POLYGON_OFFSET_FILL):r.disable(r.POLYGON_OFFSET_FILL),n.polygonOffset=e.polygonOffset),(n.polygonOffsetFactor!==e.polygonOffsetFactor||n.polygonOffsetUnits!==e.polygonOffsetUnits)&&(r.polygonOffset(e.polygonOffsetFactor,e.polygonOffsetUnits),n.polygonOffsetFactor=e.polygonOffsetFactor,n.polygonOffsetUnits=e.polygonOffsetUnits)},t.prototype.validatePipelineFormats=function(e){for(var r=0;r<this.currentColorAttachments.length;r++)var n=this.currentColorAttachments[r];this.currentDepthStencilAttachment&&rt(this.currentDepthStencilAttachment.format===e.depthStencilAttachmentFormat),this.currentSampleCount!==-1&&rt(this.currentSampleCount===e.sampleCount)},t.prototype.setPipeline=function(e){var r=this;if(this.renderBundle){this.renderBundle.push(function(){return r.setPipeline(e)});return}this.currentPipeline=e,this.validatePipelineFormats(this.currentPipeline),this.setMegaState(this.currentPipeline.megaState);var n=this.currentPipeline.program;if(this.useProgram(n),n.compileState===Ur.NeedsBind){var i=this.gl,o=n.gl_program,a=n.descriptor,s=Dm(a.vertex.glsl,aN);if(ke(i))for(var u=0;u<s.length;u++){var l=un(s[u],2),f=l[1],c=i.getUniformBlockIndex(o,f);c!==-1&&c!==4294967295&&i.uniformBlockBinding(o,c,u)}for(var h=Dm(a.fragment.glsl,/^uniform .*sampler\S+ (\w+);\s* \/\/ BINDING=(\d+)$/gm),u=0;u<h.length;u++){var _=un(h[u],3),m=_[1],E=_[2],S=i.getUniformLocation(o,m);i.uniform1i(S,parseInt(E))}n.compileState=Ur.ReadyToUse}},t.prototype.setVertexInput=function(e,r,n){var i,o,a=this,s;if(this.renderBundle){this.renderBundle.push(function(){return a.setVertexInput(e,r,n)});return}if(e!==null){rt(this.currentPipeline.inputLayout===e);var u=e;this.bindVAO(u.vao);for(var l=this.gl,f=0;f<u.vertexBufferDescriptors.length;f++){var c=u.vertexBufferDescriptors[f],h=c.arrayStride,_=c.attributes;try{for(var m=(i=void 0,Ti(_)),E=m.next();!E.done;E=m.next()){var S=E.value,M=S.shaderLocation,P=S.offset,F=ke(l)?M:(s=u.program.attributes[M])===null||s===void 0?void 0:s.location;if(!tn(F)){var V=r[f];if(V===null)continue;var pe=S.vertexFormat;l.bindBuffer(l.ARRAY_BUFFER,vo(V.buffer));var ce=(V.offset||0)+P;l.vertexAttribPointer(F,pe.size,pe.type,pe.normalized,h,ce)}}}catch(fe){i={error:fe}}finally{try{E&&!E.done&&(o=m.return)&&o.call(m)}finally{if(i)throw i.error}}}if(rt(n!==null==(u.indexBufferFormat!==null)),n!==null){var j=n.buffer;rt(j.usage===Dt.INDEX),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,vo(j)),this.currentIndexBufferByteOffset=n.offset||0}else this.currentIndexBufferByteOffset=null}else rt(this.currentPipeline.inputLayout===null),rt(n===null),this.bindVAO(null),this.currentIndexBufferByteOffset=0},t.prototype.setStencilReference=function(e){this.currentStencilRef!==e&&(this.currentStencilRef=e,this.applyStencil())},t.prototype.draw=function(e,r,n,i){var o,a=this;if(this.renderBundle){this.renderBundle.push(function(){return a.draw(e,r,n,i)});return}var s=this.gl,u=this.currentPipeline;if(r){var l=[u.drawMode,n||0,e,r];ke(s)?s.drawArraysInstanced.apply(s,fa([],un(l),!1)):(o=this.ANGLE_instanced_arrays).drawArraysInstancedANGLE.apply(o,fa([],un(l),!1))}else s.drawArrays(u.drawMode,n,e);this.debugGroupStatisticsDrawCall(),this.debugGroupStatisticsTriangles(e/3*Math.max(r,1))},t.prototype.drawIndexed=function(e,r,n,i,o){var a,s=this;if(this.renderBundle){this.renderBundle.push(function(){return s.drawIndexed(e,r,n,i,o)});return}var u=this.gl,l=this.currentPipeline,f=pi(l.inputLayout),c=pi(this.currentIndexBufferByteOffset)+n*f.indexBufferCompByteSize;if(r){var h=[l.drawMode,e,f.indexBufferType,c,r];ke(u)?u.drawElementsInstanced.apply(u,fa([],un(h),!1)):(a=this.ANGLE_instanced_arrays).drawElementsInstancedANGLE.apply(a,fa([],un(h),!1))}else u.drawElements(l.drawMode,e,f.indexBufferType,c);this.debugGroupStatisticsDrawCall(),this.debugGroupStatisticsTriangles(e/3*Math.max(r,1))},t.prototype.drawIndirect=function(e,r){},t.prototype.drawIndexedIndirect=function(e,r){},t.prototype.beginOcclusionQuery=function(e){var r=this.gl;if(ke(r)){var n=this.currentRenderPassDescriptor.occlusionQueryPool;r.beginQuery(n.gl_query_type,n.gl_query[e])}},t.prototype.endOcclusionQuery=function(){var e=this.gl;if(ke(e)){var r=this.currentRenderPassDescriptor.occlusionQueryPool;e.endQuery(r.gl_query_type)}},t.prototype.pipelineQueryReady=function(e){var r=e;return this.queryProgramReady(r.program)},t.prototype.pipelineForceReady=function(e){},t.prototype.endPass=function(){for(var e=this.gl,r=ke(e),n=this.currentColorResolveTos.length===1&&this.currentColorResolveTos[0]===this.scTexture,i=!1,o=0;o<this.currentColorAttachments.length;o++){var a=this.currentColorAttachments[o];if(a!==null){var s=this.currentColorResolveTos[o],u=!1;s!==null&&(rt(a.width===s.width&&a.height===s.height),this.setScissorRectEnabled(!1),n||(r&&e.bindFramebuffer(e.READ_FRAMEBUFFER,this.resolveColorReadFramebuffer),this.resolveColorAttachmentsChanged&&r&&this.bindFramebufferAttachment(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,a,this.currentColorAttachmentLevels[o])),u=!0,n||(s===this.scTexture?e.bindFramebuffer(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,this.scPlatformFramebuffer):(e.bindFramebuffer(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,this.resolveColorDrawFramebuffer),this.resolveColorAttachmentsChanged&&e.framebufferTexture2D(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s.gl_texture,this.currentColorResolveToLevels[o]))),n||(r?(e.blitFramebuffer(0,0,a.width,a.height,0,0,s.width,s.height,e.COLOR_BUFFER_BIT,e.LINEAR),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null)):this.submitBlitRenderPass(a,s)),i=!0),this.currentRenderPassDescriptor.colorStore[o]||!n&&!u&&(e.bindFramebuffer(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,this.resolveColorReadFramebuffer),this.resolveColorAttachmentsChanged&&this.bindFramebufferAttachment(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,e.COLOR_ATTACHMENT0,a,this.currentColorAttachmentLevels[o])),n||e.bindFramebuffer(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,null)}}this.resolveColorAttachmentsChanged=!1;var l=this.currentDepthStencilAttachment;if(l){var f=this.currentDepthStencilResolveTo,u=!1;f&&(rt(l.width===f.width&&l.height===f.height),this.setScissorRectEnabled(!1),n||(e.bindFramebuffer(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,this.resolveDepthStencilReadFramebuffer),e.bindFramebuffer(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,this.resolveDepthStencilDrawFramebuffer),this.resolveDepthStencilAttachmentsChanged&&(this.bindFramebufferDepthStencilAttachment(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,l),this.bindFramebufferDepthStencilAttachment(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,f))),u=!0,n||(r&&e.blitFramebuffer(0,0,l.width,l.height,0,0,f.width,f.height,e.DEPTH_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,null)),i=!0),!n&&!this.currentRenderPassDescriptor.depthStencilStore&&(u||(e.bindFramebuffer(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,this.resolveDepthStencilReadFramebuffer),this.resolveDepthStencilAttachmentsChanged&&this.bindFramebufferDepthStencilAttachment(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,l),u=!0),r&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[e.DEPTH_STENCIL_ATTACHMENT])),!n&&u&&e.bindFramebuffer(r?C.READ_FRAMEBUFFER:C.FRAMEBUFFER,null),this.resolveDepthStencilAttachmentsChanged=!1}!n&&!i&&e.bindFramebuffer(r?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,null)},t.prototype.setScissorRectEnabled=function(e){if(this.currentScissorEnabled!==e){var r=this.gl;e?r.enable(r.SCISSOR_TEST):r.disable(r.SCISSOR_TEST),this.currentScissorEnabled=e}},t.prototype.applyStencil=function(){tn(this.currentStencilRef)||(this.gl.stencilFuncSeparate(C.FRONT,this.currentMegaState.stencilFront.compare,this.currentStencilRef,this.currentMegaState.stencilFront.mask||255),this.gl.stencilFuncSeparate(C.BACK,this.currentMegaState.stencilBack.compare,this.currentStencilRef,this.currentMegaState.stencilBack.mask||255))},t.prototype.getFallbackTexture=function(e){var r=e.gl_target,n=e.formatKind;if(r===C.TEXTURE_2D)return n===Wt.Depth?this.fallbackTexture2DDepth:this.fallbackTexture2D;if(r===C.TEXTURE_2D_ARRAY)return this.fallbackTexture2DArray;if(r===C.TEXTURE_3D)return this.fallbackTexture3D;if(r===C.TEXTURE_CUBE_MAP)return this.fallbackTextureCube;throw new Error("whoops")},t.prototype.submitBlitRenderPass=function(e,r){this.blitRenderPipeline||(this.blitProgram=this.createProgram({vertex:{glsl:`layout(location = 0) in vec2 a_Position;
out vec2 v_TexCoord;
void main() {
  v_TexCoord = 0.5 * (a_Position + 1.0);
  gl_Position = vec4(a_Position, 0., 1.);

  #ifdef VIEWPORT_ORIGIN_TL
    v_TexCoord.y = 1.0 - v_TexCoord.y;
  #endif
}`},fragment:{glsl:`uniform sampler2D u_Texture;
in vec2 v_TexCoord;
out vec4 outputColor;
void main() {
  outputColor = texture(SAMPLER_2D(u_Texture), v_TexCoord);
}`}}),this.blitVertexBuffer=this.createBuffer({usage:Dt.VERTEX|Dt.COPY_DST,viewOrSize:new Float32Array([-4,-4,4,-4,0,4])}),this.blitInputLayout=this.createInputLayout({vertexBufferDescriptors:[{arrayStride:4*2,stepMode:Si.VERTEX,attributes:[{format:w.F32_RG,offset:4*0,shaderLocation:0}]}],indexBufferFormat:null,program:this.blitProgram}),this.blitRenderPipeline=this.createRenderPipeline({topology:er.TRIANGLES,sampleCount:1,program:this.blitProgram,colorAttachmentFormats:[w.U8_RGBA_RT],depthStencilAttachmentFormat:null,inputLayout:this.blitInputLayout,megaStateDescriptor:Ro(bo)}),this.blitBindings=this.createBindings({samplerBindings:[{sampler:null,texture:e.texture}],uniformBufferBindings:[]}),this.blitProgram.setUniformsLegacy({u_Texture:e}));var n=this.currentRenderPassDescriptor;this.currentRenderPassDescriptor=null,this.inBlitRenderPass=!0;var i=this.createRenderPass({colorAttachment:[e],colorResolveTo:[r],colorClearColor:[oB]}),o=this.getCanvas(),a=o.width,s=o.height;i.setPipeline(this.blitRenderPipeline),i.setBindings(this.blitBindings),i.setVertexInput(this.blitInputLayout,[{buffer:this.blitVertexBuffer}],null),i.setViewport(0,0,a,s),this.gl.disable(this.gl.BLEND),i.draw(3,0),this.gl.enable(this.gl.BLEND),this.currentRenderPassDescriptor=n,this.inBlitRenderPass=!1},t}(),uN=function(){function t(e){this.pluginOptions=e}return t.prototype.createSwapChain=function(e){return _o(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l,f,c,h,_,m;return mo(this,function(E){return r=this.pluginOptions,n=r.targets,i=r.xrCompatible,o=r.antialias,a=o===void 0?!1:o,s=r.preserveDrawingBuffer,u=s===void 0?!1:s,l=r.premultipliedAlpha,f=l===void 0?!0:l,c=r.shaderDebug,h=r.trackResources,_={antialias:a,preserveDrawingBuffer:u,stencil:!0,premultipliedAlpha:f,xrCompatible:i},this.handleContextEvents(e),n.includes("webgl2")&&(m=e.getContext("webgl2",_)||e.getContext("experimental-webgl2",_)),!m&&n.includes("webgl1")&&(m=e.getContext("webgl",_)||e.getContext("experimental-webgl",_)),[2,new sN(m,{shaderDebug:c,trackResources:h})]})})},t.prototype.handleContextEvents=function(e){var r=this.pluginOptions,n=r.onContextLost,i=r.onContextRestored,o=r.onContextCreationError;o&&e.addEventListener("webglcontextcreationerror",o,!1),n&&e.addEventListener("webglcontextlost",n,!1),i&&e.addEventListener("webglcontextrestored",i,!1)},t}();let Vt;const Ig=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Ig.decode();let Ta=null;function Zs(){return(Ta===null||Ta.byteLength===0)&&(Ta=new Uint8Array(Vt.memory.buffer)),Ta}function bu(t,e){return t=t>>>0,Ig.decode(Zs().subarray(t,t+e))}const In=new Array(128).fill(void 0);In.push(void 0,null,!0,!1);let Ra=In.length;function lN(t){Ra===In.length&&In.push(In.length+1);const e=Ra;return Ra=In[e],In[e]=t,e}function Ks(t){return In[t]}function cN(t){t<132||(In[t]=Ra,Ra=t)}function fN(t){const e=Ks(t);return cN(t),e}let Oo=0;const qs=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},hN=typeof qs.encodeInto=="function"?function(t,e){return qs.encodeInto(t,e)}:function(t,e){const r=qs.encode(t);return e.set(r),{read:t.length,written:r.length}};function Cu(t,e,r){if(r===void 0){const s=qs.encode(t),u=e(s.length,1)>>>0;return Zs().subarray(u,u+s.length).set(s),Oo=s.length,u}let n=t.length,i=e(n,1)>>>0;const o=Zs();let a=0;for(;a<n;a++){const s=t.charCodeAt(a);if(s>127)break;o[i+a]=s}if(a!==n){a!==0&&(t=t.slice(a)),i=r(i,n,n=a+t.length*3,1)>>>0;const s=Zs().subarray(i+a,i+n),u=hN(t,s);a+=u.written}return Oo=a,i}let Sa=null;function Ou(){return(Sa===null||Sa.byteLength===0)&&(Sa=new Int32Array(Vt.memory.buffer)),Sa}function dN(t,e,r){let n,i;try{const s=Vt.__wbindgen_add_to_stack_pointer(-16),u=Cu(t,Vt.__wbindgen_malloc,Vt.__wbindgen_realloc),l=Oo,f=Cu(e,Vt.__wbindgen_malloc,Vt.__wbindgen_realloc),c=Oo;Vt.glsl_compile(s,u,l,f,c,r);var o=Ou()[s/4+0],a=Ou()[s/4+1];return n=o,i=a,bu(o,a)}finally{Vt.__wbindgen_add_to_stack_pointer(16),Vt.__wbindgen_free(n,i,1)}}class Da{static __wrap(e){e=e>>>0;const r=Object.create(Da.prototype);return r.__wbg_ptr=e,r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();Vt.__wbg_wgslcomposer_free(e)}constructor(){const e=Vt.wgslcomposer_new();return Da.__wrap(e)}load_composable(e){const r=Cu(e,Vt.__wbindgen_malloc,Vt.__wbindgen_realloc),n=Oo;Vt.wgslcomposer_load_composable(this.__wbg_ptr,r,n)}wgsl_compile(e){let r,n;try{const a=Vt.__wbindgen_add_to_stack_pointer(-16),s=Cu(e,Vt.__wbindgen_malloc,Vt.__wbindgen_realloc),u=Oo;Vt.wgslcomposer_wgsl_compile(a,this.__wbg_ptr,s,u);var i=Ou()[a/4+0],o=Ou()[a/4+1];return r=i,n=o,bu(i,o)}finally{Vt.__wbindgen_add_to_stack_pointer(16),Vt.__wbindgen_free(r,n,1)}}}async function pN(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(n){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}}function _N(){const t={};return t.wbg={},t.wbg.__wbindgen_string_new=function(e,r){const n=bu(e,r);return lN(n)},t.wbg.__wbindgen_object_drop_ref=function(e){fN(e)},t.wbg.__wbg_log_1d3ae0273d8f4f8a=function(e){console.log(Ks(e))},t.wbg.__wbg_log_576ca876af0d4a77=function(e,r){console.log(Ks(e),Ks(r))},t.wbg.__wbindgen_throw=function(e,r){throw new Error(bu(e,r))},t}function mN(t,e){return Vt=t.exports,Mg.__wbindgen_wasm_module=e,Sa=null,Ta=null,Vt}async function Mg(t){if(Vt!==void 0)return Vt;const e=_N();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:r,module:n}=await pN(await t,e);return mN(r,n)}var sr;(function(t){t[t.COPY_SRC=1]="COPY_SRC",t[t.COPY_DST=2]="COPY_DST",t[t.TEXTURE_BINDING=4]="TEXTURE_BINDING",t[t.STORAGE_BINDING=8]="STORAGE_BINDING",t[t.STORAGE=8]="STORAGE",t[t.RENDER_ATTACHMENT=16]="RENDER_ATTACHMENT"})(sr||(sr={}));var Yc;(function(t){t[t.READ=1]="READ",t[t.WRITE=2]="WRITE"})(Yc||(Yc={}));function vN(t){var e=0;return t&Ir.SAMPLED&&(e|=sr.TEXTURE_BINDING|sr.COPY_DST|sr.COPY_SRC),t&Ir.STORAGE&&(e|=sr.TEXTURE_BINDING|sr.STORAGE_BINDING|sr.COPY_SRC|sr.COPY_DST),t&Ir.RENDER_TARGET&&(e|=sr.RENDER_ATTACHMENT|sr.TEXTURE_BINDING|sr.COPY_SRC|sr.COPY_DST),e}function Sf(t){if(t===w.U8_R_NORM)return"r8unorm";if(t===w.S8_R_NORM)return"r8snorm";if(t===w.U8_RG_NORM)return"rg8unorm";if(t===w.S8_RG_NORM)return"rg8snorm";if(t===w.U32_R)return"r32uint";if(t===w.S32_R)return"r32sint";if(t===w.F32_R)return"r32float";if(t===w.U16_RG)return"rg16uint";if(t===w.S16_RG)return"rg16sint";if(t===w.F16_RG)return"rg16float";if(t===w.U8_RGBA_RT)return"bgra8unorm";if(t===w.U8_RGBA_RT_SRGB)return"bgra8unorm-srgb";if(t===w.U8_RGBA_NORM)return"rgba8unorm";if(t===w.U8_RGBA_SRGB)return"rgba8unorm-srgb";if(t===w.S8_RGBA_NORM)return"rgba8snorm";if(t===w.U32_RG)return"rg32uint";if(t===w.S32_RG)return"rg32sint";if(t===w.F32_RG)return"rg32float";if(t===w.U16_RGBA)return"rgba16uint";if(t===w.S16_RGBA)return"rgba16sint";if(t===w.F16_RGBA)return"rgba16float";if(t===w.F32_RGBA)return"rgba32float";if(t===w.U32_RGBA)return"rgba32uint";if(t===w.S32_RGBA)return"rgba32sint";if(t===w.D24)return"depth24plus";if(t===w.D24_S8)return"depth24plus-stencil8";if(t===w.D32F)return"depth32float";if(t===w.D32F_S8)return"depth32float-stencil8";if(t===w.BC1)return"bc1-rgba-unorm";if(t===w.BC1_SRGB)return"bc1-rgba-unorm-srgb";if(t===w.BC2)return"bc2-rgba-unorm";if(t===w.BC2_SRGB)return"bc2-rgba-unorm-srgb";if(t===w.BC3)return"bc3-rgba-unorm";if(t===w.BC3_SRGB)return"bc3-rgba-unorm-srgb";if(t===w.BC4_SNORM)return"bc4-r-snorm";if(t===w.BC4_UNORM)return"bc4-r-unorm";if(t===w.BC5_SNORM)return"bc5-rg-snorm";if(t===w.BC5_UNORM)return"bc5-rg-unorm";throw"whoops"}function gN(t){if(t===ht.TEXTURE_2D)return"2d";if(t===ht.TEXTURE_CUBE_MAP)return"2d";if(t===ht.TEXTURE_2D_ARRAY)return"2d";if(t===ht.TEXTURE_3D)return"3d";throw new Error("whoops")}function EN(t){if(t===ht.TEXTURE_2D)return"2d";if(t===ht.TEXTURE_CUBE_MAP)return"cube";if(t===ht.TEXTURE_2D_ARRAY)return"2d-array";if(t===ht.TEXTURE_3D)return"3d";throw new Error("whoops")}function yN(t){var e=0;return t&Dt.INDEX&&(e|=GPUBufferUsage.INDEX),t&Dt.VERTEX&&(e|=GPUBufferUsage.VERTEX),t&Dt.UNIFORM&&(e|=GPUBufferUsage.UNIFORM),t&Dt.STORAGE&&(e|=GPUBufferUsage.STORAGE),t&Dt.COPY_SRC&&(e|=GPUBufferUsage.COPY_SRC),t&Dt.INDIRECT&&(e|=GPUBufferUsage.INDIRECT),e|=GPUBufferUsage.COPY_DST,e}function lc(t){if(t===Lr.CLAMP_TO_EDGE)return"clamp-to-edge";if(t===Lr.REPEAT)return"repeat";if(t===Lr.MIRRORED_REPEAT)return"mirror-repeat";throw new Error("whoops")}function wm(t){if(t===jt.BILINEAR)return"linear";if(t===jt.POINT)return"nearest";throw new Error("whoops")}function AN(t){if(t===ur.LINEAR)return"linear";if(t===ur.NEAREST)return"nearest";if(t===ur.NO_MIP)return"nearest";throw new Error("whoops")}function lo(t){var e=t;return e.gpuBuffer}function TN(t){var e=t;return e.gpuSampler}function SN(t){var e=t;return e.querySet}function xN(t){if(t===Au.OcclusionConservative)return"occlusion";throw new Error("whoops")}function RN(t){switch(t){case er.TRIANGLES:return"triangle-list";case er.POINTS:return"point-list";case er.TRIANGLE_STRIP:return"triangle-strip";case er.LINES:return"line-list";case er.LINE_STRIP:return"line-strip";default:throw new Error("Unknown primitive topology mode")}}function bN(t){if(t===zr.NONE)return"none";if(t===zr.FRONT)return"front";if(t===zr.BACK)return"back";throw new Error("whoops")}function CN(t){if(t===La.CCW)return"ccw";if(t===La.CW)return"cw";throw new Error("whoops")}function ON(t,e){return{topology:RN(t),cullMode:bN(e.cullMode),frontFace:CN(e.frontFace)}}function Um(t){if(t===ft.ZERO)return"zero";if(t===ft.ONE)return"one";if(t===ft.SRC)return"src";if(t===ft.ONE_MINUS_SRC)return"one-minus-src";if(t===ft.DST)return"dst";if(t===ft.ONE_MINUS_DST)return"one-minus-dst";if(t===ft.SRC_ALPHA)return"src-alpha";if(t===ft.ONE_MINUS_SRC_ALPHA)return"one-minus-src-alpha";if(t===ft.DST_ALPHA)return"dst-alpha";if(t===ft.ONE_MINUS_DST_ALPHA)return"one-minus-dst-alpha";if(t===ft.CONST)return"constant";if(t===ft.ONE_MINUS_CONSTANT)return"one-minus-constant";if(t===ft.SRC_ALPHA_SATURATE)return"src-alpha-saturated";throw new Error("whoops")}function IN(t){if(t===pr.ADD)return"add";if(t===pr.SUBSTRACT)return"subtract";if(t===pr.REVERSE_SUBSTRACT)return"reverse-subtract";if(t===pr.MIN)return"min";if(t===pr.MAX)return"max";throw new Error("whoops")}function km(t){return{operation:IN(t.blendMode),srcFactor:Um(t.blendSrcFactor),dstFactor:Um(t.blendDstFactor)}}function zm(t){return t.blendMode===pr.ADD&&t.blendSrcFactor===ft.ONE&&t.blendDstFactor===ft.ZERO}function MN(t){if(!(zm(t.rgbBlendState)&&zm(t.alphaBlendState)))return{color:km(t.rgbBlendState),alpha:km(t.alphaBlendState)}}function BN(t,e){return{format:Sf(e),blend:MN(t),writeMask:t.channelWriteMask}}function NN(t,e){return e.attachmentsState.map(function(r,n){return BN(r,t[n])})}function Qs(t){if(t===Ot.NEVER)return"never";if(t===Ot.LESS)return"less";if(t===Ot.EQUAL)return"equal";if(t===Ot.LEQUAL)return"less-equal";if(t===Ot.GREATER)return"greater";if(t===Ot.NOTEQUAL)return"not-equal";if(t===Ot.GEQUAL)return"greater-equal";if(t===Ot.ALWAYS)return"always";throw new Error("whoops")}function qi(t){if(t===Ht.KEEP)return"keep";if(t===Ht.REPLACE)return"replace";if(t===Ht.ZERO)return"zero";if(t===Ht.DECREMENT_CLAMP)return"decrement-clamp";if(t===Ht.DECREMENT_WRAP)return"decrement-wrap";if(t===Ht.INCREMENT_CLAMP)return"increment-clamp";if(t===Ht.INCREMENT_WRAP)return"increment-wrap";if(t===Ht.INVERT)return"invert";throw new Error("whoops")}function PN(t,e){if(!tn(t))return{format:Sf(t),depthWriteEnabled:!!e.depthWrite,depthCompare:Qs(e.depthCompare),depthBias:e.polygonOffset?e.polygonOffsetUnits:0,depthBiasSlopeScale:e.polygonOffset?e.polygonOffsetFactor:0,stencilFront:{compare:Qs(e.stencilFront.compare),passOp:qi(e.stencilFront.passOp),failOp:qi(e.stencilFront.failOp),depthFailOp:qi(e.stencilFront.depthFailOp)},stencilBack:{compare:Qs(e.stencilBack.compare),passOp:qi(e.stencilBack.passOp),failOp:qi(e.stencilBack.failOp),depthFailOp:qi(e.stencilBack.depthFailOp)},stencilReadMask:4294967295,stencilWriteMask:4294967295}}function LN(t){if(t!==null){if(t===w.U16_R)return"uint16";if(t===w.U32_R)return"uint32";throw new Error("whoops")}}function DN(t){if(t===Si.VERTEX)return"vertex";if(t===Si.INSTANCE)return"instance";throw new Error("whoops")}function FN(t){if(t===w.U8_R)return"uint8x2";if(t===w.U8_RG)return"uint8x2";if(t===w.U8_RGB)return"uint8x4";if(t===w.U8_RGBA)return"uint8x4";if(t===w.U8_RG_NORM)return"unorm8x2";if(t===w.U8_RGBA_NORM)return"unorm8x4";if(t===w.S8_RGB_NORM)return"snorm8x4";if(t===w.S8_RGBA_NORM)return"snorm8x4";if(t===w.U16_RG_NORM)return"unorm16x2";if(t===w.U16_RGBA_NORM)return"unorm16x4";if(t===w.S16_RG_NORM)return"snorm16x2";if(t===w.S16_RGBA_NORM)return"snorm16x4";if(t===w.S16_RG)return"uint16x2";if(t===w.F16_RG)return"float16x2";if(t===w.F16_RGBA)return"float16x4";if(t===w.F32_R)return"float32";if(t===w.F32_RG)return"float32x2";if(t===w.F32_RGB)return"float32x3";if(t===w.F32_RGBA)return"float32x4";throw"whoops"}function wN(t){var e=An(t);switch(e){case ie.BC1:case ie.BC2:case ie.BC3:case ie.BC4_SNORM:case ie.BC4_UNORM:case ie.BC5_SNORM:case ie.BC5_UNORM:return!0;default:return!1}}function UN(t){var e=An(t);switch(e){case ie.BC1:case ie.BC2:case ie.BC3:case ie.BC4_SNORM:case ie.BC4_UNORM:case ie.BC5_SNORM:case ie.BC5_UNORM:return 4;default:return 1}}function Vm(t,e,r,n){switch(r===void 0&&(r=!1),t){case w.S8_R:case w.S8_R_NORM:case w.S8_RG_NORM:case w.S8_RGB_NORM:case w.S8_RGBA_NORM:{var i=e instanceof ArrayBuffer?new Int8Array(e):new Int8Array(e);return n&&i.set(new Int8Array(n)),i}case w.U8_R:case w.U8_R_NORM:case w.U8_RG:case w.U8_RG_NORM:case w.U8_RGB:case w.U8_RGB_NORM:case w.U8_RGB_SRGB:case w.U8_RGBA:case w.U8_RGBA_NORM:case w.U8_RGBA_SRGB:{var o=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e);return n&&o.set(new Uint8Array(n)),o}case w.S16_R:case w.S16_RG:case w.S16_RG_NORM:case w.S16_RGB_NORM:case w.S16_RGBA:case w.S16_RGBA_NORM:{var a=e instanceof ArrayBuffer?new Int16Array(e):new Int16Array(r?e/2:e);return n&&a.set(new Int16Array(n)),a}case w.U16_R:case w.U16_RGB:case w.U16_RGBA_5551:case w.U16_RGBA_NORM:case w.U16_RG_NORM:case w.U16_R_NORM:{var s=e instanceof ArrayBuffer?new Uint16Array(e):new Uint16Array(r?e/2:e);return n&&s.set(new Uint16Array(n)),s}case w.S32_R:{var u=e instanceof ArrayBuffer?new Int32Array(e):new Int32Array(r?e/4:e);return n&&u.set(new Int32Array(n)),u}case w.U32_R:case w.U32_RG:{var l=e instanceof ArrayBuffer?new Uint32Array(e):new Uint32Array(r?e/4:e);return n&&l.set(new Uint32Array(n)),l}case w.F32_R:case w.F32_RG:case w.F32_RGB:case w.F32_RGBA:{var f=e instanceof ArrayBuffer?new Float32Array(e):new Float32Array(r?e/4:e);return n&&f.set(new Float32Array(n)),f}}var c=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e);return n&&c.set(new Uint8Array(n)),c}function kN(t){var e=(t&32768)>>15,r=(t&31744)>>10,n=t&1023;return r===0?(e?-1:1)*Math.pow(2,-14)*(n/Math.pow(2,10)):r==31?n?NaN:(e?-1:1)*(1/0):(e?-1:1)*Math.pow(2,r-15)*(1+n/Math.pow(2,10))}function Bg(t){switch(t){case"r8unorm":case"r8snorm":case"r8uint":case"r8sint":return{width:1,height:1,length:1};case"r16uint":case"r16sint":case"r16float":case"rg8unorm":case"rg8snorm":case"rg8uint":case"rg8sint":return{width:1,height:1,length:2};case"r32uint":case"r32sint":case"r32float":case"rg16uint":case"rg16sint":case"rg16float":case"rgba8unorm":case"rgba8unorm-srgb":case"rgba8snorm":case"rgba8uint":case"rgba8sint":case"bgra8unorm":case"bgra8unorm-srgb":case"rgb9e5ufloat":case"rgb10a2unorm":case"rg11b10ufloat":return{width:1,height:1,length:4};case"rg32uint":case"rg32sint":case"rg32float":case"rgba16uint":case"rgba16sint":case"rgba16float":return{width:1,height:1,length:8};case"rgba32uint":case"rgba32sint":case"rgba32float":return{width:1,height:1,length:16};case"stencil8":throw new Error("No fixed size for Stencil8 format!");case"depth16unorm":return{width:1,height:1,length:2};case"depth24plus":throw new Error("No fixed size for Depth24Plus format!");case"depth24plus-stencil8":throw new Error("No fixed size for Depth24PlusStencil8 format!");case"depth32float":return{width:1,height:1,length:4};case"depth32float-stencil8":return{width:1,height:1,length:5};case"bc7-rgba-unorm":case"bc7-rgba-unorm-srgb":case"bc6h-rgb-ufloat":case"bc6h-rgb-float":case"bc2-rgba-unorm":case"bc2-rgba-unorm-srgb":case"bc3-rgba-unorm":case"bc3-rgba-unorm-srgb":case"bc5-rg-unorm":case"bc5-rg-snorm":return{width:4,height:4,length:16};case"bc4-r-unorm":case"bc4-r-snorm":case"bc1-rgba-unorm":case"bc1-rgba-unorm-srgb":return{width:4,height:4,length:8};default:return{width:1,height:1,length:4}}}var _n=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=t.call(this)||this;return o.id=n,o.device=i,o}return e.prototype.destroy=function(){},e}(mg),zN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a,s,u=t.call(this,{id:n,device:i})||this;u.type=Tt.Bindings;var l=o.pipeline;rt(!!l);var f=o.uniformBufferBindings,c=o.storageBufferBindings,h=o.samplerBindings,_=o.storageTextureBindings;u.numUniformBuffers=f?.length||0;var m=[[],[],[],[]],E=0;if(f&&f.length)for(var S=0;S<f.length;S++){var M=o.uniformBufferBindings[S],P=M.binding,F=M.size,V=M.offset,pe=M.buffer,ce={buffer:lo(pe),offset:V??0,size:F};m[0].push({binding:P??E++,resource:ce})}if(h&&h.length){E=0;for(var S=0;S<h.length;S++){var j=zt(zt({},h[S]),Rg),P=o.samplerBindings[S],fe=P.texture!==null?P.texture:u.device.getFallbackTexture(j);j.dimension=fe.dimension,j.formatKind=Eg(fe.format);var ze=fe.gpuTextureView;if(m[1].push({binding:(a=P.textureBinding)!==null&&a!==void 0?a:E++,resource:ze}),P.samplerBinding!==-1){var te=P.sampler!==null?P.sampler:u.device.getFallbackSampler(j),k=TN(te);m[1].push({binding:(s=P.samplerBinding)!==null&&s!==void 0?s:E++,resource:k})}}}if(c&&c.length){E=0;for(var S=0;S<c.length;S++){var q=o.storageBufferBindings[S],P=q.binding,F=q.size,V=q.offset,pe=q.buffer,ce={buffer:lo(pe),offset:V??0,size:F};m[2].push({binding:P??E++,resource:ce})}}if(_&&_.length){E=0;for(var S=0;S<_.length;S++){var ne=o.storageTextureBindings[S],P=ne.binding,fe=ne.texture,ze=fe.gpuTextureView;m[3].push({binding:P??E++,resource:ze})}}var xe=m.findLastIndex(function(Fe){return!!Fe.length});return u.gpuBindGroup=m.map(function(Fe,$e){return $e<=xe&&u.device.device.createBindGroup({layout:l.getBindGroupLayout($e),entries:Fe})}),u}return e}(_n),VN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.Buffer;var s=o.usage,u=o.viewOrSize,l=!!(s&Dt.MAP_READ);a.usage=yN(s),l&&(a.usage=Dt.MAP_READ|Dt.COPY_DST);var f=!so(u);if(a.view=so(u)?null:u,a.size=so(u)?Su(u,4):Su(u.byteLength,4),so(u))a.gpuBuffer=a.device.device.createBuffer({usage:a.usage,size:a.size,mappedAtCreation:l?f:!1});else{a.gpuBuffer=a.device.device.createBuffer({usage:a.usage,size:a.size,mappedAtCreation:!0});var c=u&&u.constructor||Float32Array;new c(a.gpuBuffer.getMappedRange()).set(u),a.gpuBuffer.unmap()}return a}return e.prototype.setSubData=function(r,n,i,o){i===void 0&&(i=0),o===void 0&&(o=0);var a=this.gpuBuffer;o=o||n.byteLength,o=Math.min(o,this.size-r);var s=n.byteOffset+i,u=s+o,l=o+3&-4;if(l!==o){var f=new Uint8Array(n.buffer.slice(s,u));n=new Uint8Array(l),n.set(f),i=0,s=0,u=l,o=l}for(var c=1024*1024*15,h=0;u-(s+h)>c;)this.device.device.queue.writeBuffer(a,r+h,n.buffer,s+h,c),h+=c;this.device.device.queue.writeBuffer(a,r+h,n.buffer,s+h,o-h)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.gpuBuffer.destroy()},e}(_n),Wm=function(){function t(){this.gpuComputePassEncoder=null}return t.prototype.dispatchWorkgroups=function(e,r,n){this.gpuComputePassEncoder.dispatchWorkgroups(e,r,n)},t.prototype.dispatchWorkgroupsIndirect=function(e,r){this.gpuComputePassEncoder.dispatchWorkgroupsIndirect(e.gpuBuffer,r)},t.prototype.finish=function(){this.gpuComputePassEncoder.end(),this.gpuComputePassEncoder=null,this.frameCommandEncoder=null},t.prototype.beginComputePass=function(e){rt(this.gpuComputePassEncoder===null),this.frameCommandEncoder=e,this.gpuComputePassEncoder=this.frameCommandEncoder.beginComputePass(this.gpuComputePassDescriptor)},t.prototype.setPipeline=function(e){var r=e,n=pi(r.gpuComputePipeline);this.gpuComputePassEncoder.setPipeline(n)},t.prototype.setBindings=function(e){var r=this,n=e;n.gpuBindGroup.forEach(function(i,o){i&&r.gpuComputePassEncoder.setBindGroup(o,n.gpuBindGroup[o])})},t.prototype.pushDebugGroup=function(e){this.gpuComputePassEncoder.pushDebugGroup(e)},t.prototype.popDebugGroup=function(){this.gpuComputePassEncoder.popDebugGroup()},t.prototype.insertDebugMarker=function(e){this.gpuComputePassEncoder.insertDebugMarker(e)},t}(),WN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.ComputePipeline,a.gpuComputePipeline=null,a.descriptor=o;var s=o.program,u=s.computeStage;if(u===null)return a;var l={layout:"auto",compute:zt({},u)};return a.gpuComputePipeline=a.device.device.createComputePipeline(l),a.name!==void 0&&(a.gpuComputePipeline.label=a.name),a}return e.prototype.getBindGroupLayout=function(r){return this.gpuComputePipeline.getBindGroupLayout(r)},e}(_n),HN=function(t){Xt(e,t);function e(r){var n,i,o,a,s=r.id,u=r.device,l=r.descriptor,f=t.call(this,{id:s,device:u})||this;f.type=Tt.InputLayout;var c=[];try{for(var h=Ti(l.vertexBufferDescriptors),_=h.next();!_.done;_=h.next()){var m=_.value,E=m.arrayStride,S=m.stepMode,M=m.attributes;c.push({arrayStride:E,stepMode:DN(S),attributes:[]});try{for(var P=(o=void 0,Ti(M)),F=P.next();!F.done;F=P.next()){var V=F.value,pe=V.shaderLocation,ce=V.format,j=V.offset;c[c.length-1].attributes.push({shaderLocation:pe,format:FN(ce),offset:j})}}catch(fe){o={error:fe}}finally{try{F&&!F.done&&(a=P.return)&&a.call(P)}finally{if(o)throw o.error}}}}catch(fe){n={error:fe}}finally{try{_&&!_.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}return f.indexFormat=LN(l.indexBufferFormat),f.buffers=c,f}return e}(_n),Hm=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;return a.type=Tt.Program,a.vertexStage=null,a.fragmentStage=null,a.computeStage=null,a.descriptor=o,o.vertex&&(a.vertexStage=a.createShaderStage(o.vertex,"vertex")),o.fragment&&(a.fragmentStage=a.createShaderStage(o.fragment,"fragment")),o.compute&&(a.computeStage=a.createShaderStage(o.compute,"compute")),a}return e.prototype.setUniformsLegacy=function(r){},e.prototype.createShaderStage=function(r,n){var i,o,a=r.glsl,s=r.wgsl,u=r.entryPoint,l=r.postprocess,f=!1,c=s;if(!c)try{c=this.device.glsl_compile(a,n,f)}catch(M){throw console.error(M,a),new Error("whoops")}var h=function(M){if(!c.includes(M))return"continue";c=c.replace("var T_".concat(M,": texture_2d<f32>;"),"var T_".concat(M,": texture_depth_2d;")),c=c.replace(new RegExp("textureSample\\(T_".concat(M,"(.*)\\);$"),"gm"),function(P,F){return"vec4<f32>(textureSample(T_".concat(M).concat(F,"), 0.0, 0.0, 0.0);")})};try{for(var _=Ti(["u_TextureFramebufferDepth"]),m=_.next();!m.done;m=_.next()){var E=m.value;h(E)}}catch(M){i={error:M}}finally{try{m&&!m.done&&(o=_.return)&&o.call(_)}finally{if(i)throw i.error}}l&&(c=l(c));var S=this.device.device.createShaderModule({code:c});return{module:S,entryPoint:u||"main"}},e}(_n),XN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;a.type=Tt.QueryPool;var s=o.elemCount,u=o.type;return a.querySet=a.device.device.createQuerySet({type:xN(u),count:s}),a.resolveBuffer=a.device.device.createBuffer({size:s*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),a.cpuBuffer=a.device.device.createBuffer({size:s*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a.results=null,a}return e.prototype.queryResultOcclusion=function(r){return this.results===null?null:this.results[r]!==BigInt(0)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.querySet.destroy(),this.resolveBuffer.destroy(),this.cpuBuffer.destroy()},e}(_n),jN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=t.call(this,{id:n,device:i})||this;return o.type=Tt.Readback,o}return e.prototype.readTexture=function(r,n,i,o,a,s,u,l){return u===void 0&&(u=0),_o(this,void 0,void 0,function(){var f,c,h,_,m,E,S,M;return mo(this,function(P){return f=r,c=0,h=Bg(f.gpuTextureformat),_=Math.ceil(o/h.width)*h.length,m=Math.ceil(_/256)*256,E=m*a,S=this.device.createBuffer({usage:Dt.STORAGE|Dt.MAP_READ|Dt.COPY_DST,hint:pn.STATIC,viewOrSize:E}),M=this.device.device.createCommandEncoder(),M.copyTextureToBuffer({texture:f.gpuTexture,mipLevel:0,origin:{x:n,y:i,z:Math.max(c,0)}},{buffer:S.gpuBuffer,offset:0,bytesPerRow:m},{width:o,height:a,depthOrArrayLayers:1}),this.device.device.queue.submit([M.finish()]),[2,this.readBuffer(S,0,s.byteLength===E?s:null,u,E,f.format,!0,!1,_,m,a)]})})},e.prototype.readTextureSync=function(r,n,i,o,a,s,u,l){throw new Error("ERROR_MSG_METHOD_NOT_IMPLEMENTED")},e.prototype.readBuffer=function(r,n,i,o,a,s,u,l,f,c,h){var _=this;n===void 0&&(n=0),i===void 0&&(i=null),a===void 0&&(a=0),s===void 0&&(s=w.U8_RGB),u===void 0&&(u=!1),f===void 0&&(f=0),c===void 0&&(c=0),h===void 0&&(h=0);var m=r,E=a||m.size,S=i||m.view,M=S&&S.constructor&&S.constructor.BYTES_PER_ELEMENT||gg(s),P=m;if(!(m.usage&Dt.MAP_READ&&m.usage&Dt.COPY_DST)){var F=this.device.device.createCommandEncoder();P=this.device.createBuffer({usage:Dt.STORAGE|Dt.MAP_READ|Dt.COPY_DST,hint:pn.STATIC,viewOrSize:E}),F.copyBufferToBuffer(m.gpuBuffer,n,P.gpuBuffer,0,E),this.device.device.queue.submit([F.finish()])}return new Promise(function(V,pe){P.gpuBuffer.mapAsync(Yc.READ,n,E).then(function(){var ce=P.gpuBuffer.getMappedRange(n,E),j=S;if(u)j===null?j=Vm(s,E,!0,ce):j=Vm(s,j.buffer,void 0,ce);else if(j===null)switch(M){case 1:j=new Uint8Array(E),j.set(new Uint8Array(ce));break;case 2:j=_.getHalfFloatAsFloatRGBAArrayBuffer(E/2,ce);break;case 4:j=new Float32Array(E/4),j.set(new Float32Array(ce));break}else switch(M){case 1:j=new Uint8Array(j.buffer),j.set(new Uint8Array(ce));break;case 2:j=_.getHalfFloatAsFloatRGBAArrayBuffer(E/2,ce,S);break;case 4:var fe=S&&S.constructor||Float32Array;j=new fe(j.buffer),j.set(new fe(ce));break}if(f!==c){M===1&&!u&&(f*=2,c*=2);for(var ze=new Uint8Array(j.buffer),te=f,k=0,q=1;q<h;++q){k=q*c;for(var ne=0;ne<f;++ne)ze[te++]=ze[k++]}M!==0&&!u?j=new Float32Array(ze.buffer,0,te/4):j=new Uint8Array(ze.buffer,0,te)}P.gpuBuffer.unmap(),V(j)},function(ce){return pe(ce)})})},e.prototype.getHalfFloatAsFloatRGBAArrayBuffer=function(r,n,i){i||(i=new Float32Array(r));for(var o=new Uint16Array(n);r--;)i[r]=kN(o[r]);return i},e}(_n),Xm=function(){function t(e){this.device=e,this.gpuRenderPassEncoder=null,this.gfxColorAttachment=[],this.gfxColorAttachmentLevel=[],this.gfxColorResolveTo=[],this.gfxColorResolveToLevel=[],this.gfxDepthStencilAttachment=null,this.gfxDepthStencilResolveTo=null,this.gpuColorAttachments=[],this.gpuDepthStencilAttachment={view:null,depthLoadOp:"load",depthStoreOp:"store",stencilLoadOp:"load",stencilStoreOp:"store"},this.gpuRenderPassDescriptor={colorAttachments:this.gpuColorAttachments,depthStencilAttachment:this.gpuDepthStencilAttachment}}return t.prototype.getEncoder=function(){var e;return((e=this.renderBundle)===null||e===void 0?void 0:e.renderBundleEncoder)||this.gpuRenderPassEncoder},t.prototype.getTextureView=function(e,r){return rt(r<e.mipLevelCount),e.mipLevelCount===1?e.gpuTextureView:e.gpuTexture.createView({baseMipLevel:r,mipLevelCount:1})},t.prototype.setRenderPassDescriptor=function(e){var r,n,i,o,a,s;this.descriptor=e,this.gpuRenderPassDescriptor.colorAttachments=this.gpuColorAttachments;var u=e.colorAttachment.length;this.gfxColorAttachment.length=u,this.gfxColorResolveTo.length=u;for(var l=0;l<e.colorAttachment.length;l++){var f=e.colorAttachment[l],c=e.colorResolveTo[l];if(f===null&&c!==null&&(f=c,c=null),this.gfxColorAttachment[l]=f,this.gfxColorResolveTo[l]=c,this.gfxColorAttachmentLevel[l]=((r=e.colorAttachmentLevel)===null||r===void 0?void 0:r[l])||0,this.gfxColorResolveToLevel[l]=((n=e.colorResolveToLevel)===null||n===void 0?void 0:n[l])||0,f!==null){this.gpuColorAttachments[l]===void 0&&(this.gpuColorAttachments[l]={});var h=this.gpuColorAttachments[l];h.view=this.getTextureView(f,((i=this.gfxColorAttachmentLevel)===null||i===void 0?void 0:i[l])||0);var _=(a=(o=e.colorClearColor)===null||o===void 0?void 0:o[l])!==null&&a!==void 0?a:"load";_==="load"?h.loadOp="load":(h.loadOp="clear",h.clearValue=_),h.storeOp=!((s=e.colorStore)===null||s===void 0)&&s[l]?"store":"discard",h.resolveTarget=void 0,c!==null&&(f.sampleCount>1?h.resolveTarget=this.getTextureView(c,this.gfxColorResolveToLevel[l]):h.storeOp="store")}else{this.gpuColorAttachments.length=l,this.gfxColorAttachment.length=l,this.gfxColorResolveTo.length=l;break}}if(this.gfxDepthStencilAttachment=e.depthStencilAttachment,this.gfxDepthStencilResolveTo=e.depthStencilResolveTo,e.depthStencilAttachment){var m=e.depthStencilAttachment,h=this.gpuDepthStencilAttachment;h.view=m.gpuTextureView;var E=!!(xo(m.format)&Pe.Depth);E?(e.depthClearValue==="load"?h.depthLoadOp="load":(h.depthLoadOp="clear",h.depthClearValue=e.depthClearValue),e.depthStencilStore||this.gfxDepthStencilResolveTo!==null?h.depthStoreOp="store":h.depthStoreOp="discard"):(h.depthLoadOp=void 0,h.depthStoreOp=void 0);var S=!!(xo(m.format)&Pe.Stencil);S?(e.stencilClearValue==="load"?h.stencilLoadOp="load":(h.stencilLoadOp="clear",h.stencilClearValue=e.stencilClearValue),e.depthStencilStore||this.gfxDepthStencilResolveTo!==null?h.stencilStoreOp="store":h.stencilStoreOp="discard"):(h.stencilLoadOp=void 0,h.stencilStoreOp=void 0),this.gpuRenderPassDescriptor.depthStencilAttachment=this.gpuDepthStencilAttachment}else this.gpuRenderPassDescriptor.depthStencilAttachment=void 0;this.gpuRenderPassDescriptor.occlusionQuerySet=tn(e.occlusionQueryPool)?void 0:SN(e.occlusionQueryPool)},t.prototype.beginRenderPass=function(e,r){rt(this.gpuRenderPassEncoder===null),this.setRenderPassDescriptor(r),this.frameCommandEncoder=e,this.gpuRenderPassEncoder=this.frameCommandEncoder.beginRenderPass(this.gpuRenderPassDescriptor)},t.prototype.flipY=function(e,r){var n=this.device.swapChainHeight;return n-e-r},t.prototype.setViewport=function(e,r,n,i,o,a){o===void 0&&(o=0),a===void 0&&(a=1),this.gpuRenderPassEncoder.setViewport(e,this.flipY(r,i),n,i,o,a)},t.prototype.setScissorRect=function(e,r,n,i){this.gpuRenderPassEncoder.setScissorRect(e,this.flipY(r,i),n,i)},t.prototype.setPipeline=function(e){var r=e,n=pi(r.gpuRenderPipeline);this.getEncoder().setPipeline(n)},t.prototype.setVertexInput=function(e,r,n){if(e!==null){var i=this.getEncoder(),o=e;n!==null&&i.setIndexBuffer(lo(n.buffer),pi(o.indexFormat),n.offset);for(var a=0;a<r.length;a++){var s=r[a];s!==null&&i.setVertexBuffer(a,lo(s.buffer),s.offset)}}},t.prototype.setBindings=function(e){var r=e,n=this.getEncoder();r.gpuBindGroup.forEach(function(i,o){i&&n.setBindGroup(o,r.gpuBindGroup[o])})},t.prototype.setStencilReference=function(e){this.gpuRenderPassEncoder.setStencilReference(e)},t.prototype.draw=function(e,r,n,i){this.getEncoder().draw(e,r,n,i)},t.prototype.drawIndexed=function(e,r,n,i,o){this.getEncoder().drawIndexed(e,r,n,i,o)},t.prototype.drawIndirect=function(e,r){this.getEncoder().drawIndirect(lo(e),r)},t.prototype.drawIndexedIndirect=function(e,r){this.getEncoder().drawIndexedIndirect(lo(e),r)},t.prototype.beginOcclusionQuery=function(e){this.gpuRenderPassEncoder.beginOcclusionQuery(e)},t.prototype.endOcclusionQuery=function(){this.gpuRenderPassEncoder.endOcclusionQuery()},t.prototype.pushDebugGroup=function(e){this.gpuRenderPassEncoder.pushDebugGroup(e)},t.prototype.popDebugGroup=function(){this.gpuRenderPassEncoder.popDebugGroup()},t.prototype.insertDebugMarker=function(e){this.gpuRenderPassEncoder.insertDebugMarker(e)},t.prototype.beginBundle=function(e){this.renderBundle=e},t.prototype.endBundle=function(){this.renderBundle.finish()},t.prototype.executeBundles=function(e){this.gpuRenderPassEncoder.executeBundles(e.map(function(r){return r.renderBundle}))},t.prototype.finish=function(){var e;(e=this.gpuRenderPassEncoder)===null||e===void 0||e.end(),this.gpuRenderPassEncoder=null;for(var r=0;r<this.gfxColorAttachment.length;r++){var n=this.gfxColorAttachment[r],i=this.gfxColorResolveTo[r];n!==null&&i!==null&&n.sampleCount===1&&this.copyAttachment(i,this.gfxColorAttachmentLevel[r],n,this.gfxColorResolveToLevel[r])}this.gfxDepthStencilAttachment&&this.gfxDepthStencilResolveTo&&(this.gfxDepthStencilAttachment.sampleCount>1||this.copyAttachment(this.gfxDepthStencilResolveTo,0,this.gfxDepthStencilAttachment,0)),this.frameCommandEncoder=null},t.prototype.copyAttachment=function(e,r,n,i){rt(n.sampleCount===1);var o={texture:n.gpuTexture,mipLevel:i},a={texture:e.gpuTexture,mipLevel:r};rt(n.width>>>i===e.width>>>r),rt(n.height>>>i===e.height>>>r),rt(!!(n.usage&sr.COPY_SRC)),rt(!!(e.usage&sr.COPY_DST)),this.frameCommandEncoder.copyTextureToTexture(o,a,[e.width,e.height,1])},t}(),GN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=t.call(this,{id:n,device:i})||this;return a.type=Tt.RenderPipeline,a.isCreatingAsync=!1,a.gpuRenderPipeline=null,a.descriptor=o,a.device.createRenderPipelineInternal(a,!1),a}return e.prototype.getBindGroupLayout=function(r){return this.gpuRenderPipeline.getBindGroupLayout(r)},e}(_n),$N=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a,s,u=t.call(this,{id:n,device:i})||this;u.type=Tt.Sampler;var l=o.lodMinClamp,f=o.mipmapFilter===ur.NO_MIP?o.lodMinClamp:o.lodMaxClamp,c=(a=o.maxAnisotropy)!==null&&a!==void 0?a:1;return c>1&&rt(o.minFilter===jt.BILINEAR&&o.magFilter===jt.BILINEAR&&o.mipmapFilter===ur.LINEAR),u.gpuSampler=u.device.device.createSampler({addressModeU:lc(o.addressModeU),addressModeV:lc(o.addressModeV),addressModeW:lc((s=o.addressModeW)!==null&&s!==void 0?s:o.addressModeU),lodMinClamp:l,lodMaxClamp:f,minFilter:wm(o.minFilter),magFilter:wm(o.magFilter),mipmapFilter:AN(o.mipmapFilter),compare:o.compareFunction!==void 0?Qs(o.compareFunction):void 0,maxAnisotropy:c}),u}return e}(_n),ws=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=r.descriptor,a=r.skipCreate,s=r.sampleCount,u=t.call(this,{id:n,device:i})||this;u.type=Tt.Texture,u.flipY=!1;var l=o.format,f=o.dimension,c=o.width,h=o.height,_=o.depthOrArrayLayers,m=o.mipLevelCount,E=o.usage,S=o.pixelStore;return u.flipY=!!S?.unpackFlipY,u.device.createTextureShared({format:l,dimension:f??ht.TEXTURE_2D,width:c,height:h,depthOrArrayLayers:_??1,mipLevelCount:m??1,usage:E,sampleCount:s??1},u,a),u}return e.prototype.textureFromImageBitmapOrCanvas=function(r,n,i){for(var o=n[0].width,a=n[0].height,s={size:{width:o,height:a,depthOrArrayLayers:i},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT},u=r.createTexture(s),l=0;l<n.length;l++)r.queue.copyExternalImageToTexture({source:n[l],flipY:this.flipY},{texture:u,origin:[0,0,l]},[o,a]);return[u,o,a]},e.prototype.isImageBitmapOrCanvases=function(r){var n=r[0];return n instanceof ImageBitmap||n instanceof HTMLCanvasElement||n instanceof OffscreenCanvas},e.prototype.isVideo=function(r){var n=r[0];return n instanceof HTMLVideoElement},e.prototype.setImageData=function(r,n){var i,o=this,a=this.device.device,s,u,l;if(this.isImageBitmapOrCanvases(r))i=un(this.textureFromImageBitmapOrCanvas(a,r,this.depthOrArrayLayers),3),s=i[0],u=i[1],l=i[2];else if(this.isVideo(r))s=a.importExternalTexture({source:r[0]});else{var f=Bg(this.gpuTextureformat),c=Math.ceil(this.width/f.width)*f.length;r.forEach(function(h){a.queue.writeTexture({texture:o.gpuTexture},h,{bytesPerRow:c},{width:o.width,height:o.height})})}this.width=u,this.height=l,s&&(this.gpuTexture=s),this.gpuTextureView=this.gpuTexture.createView({dimension:EN(this.dimension)})},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.gpuTexture.destroy()},e}(_n),YN=function(t){Xt(e,t);function e(r){var n=r.id,i=r.device,o=t.call(this,{id:n,device:i})||this;return o.type=Tt.RenderBundle,o.renderBundleEncoder=o.device.device.createRenderBundleEncoder({colorFormats:[o.device.swapChainFormat]}),o}return e.prototype.finish=function(){this.renderBundle=this.renderBundleEncoder.finish()},e}(_n),ZN=function(){function t(e,r,n,i,o,a){this.swapChainWidth=0,this.swapChainHeight=0,this.swapChainTextureUsage=sr.RENDER_ATTACHMENT|sr.COPY_DST,this._resourceUniqueId=0,this.renderPassPool=[],this.computePassPool=[],this.frameCommandEncoderPool=[],this.featureTextureCompressionBC=!1,this.platformString="WebGPU",this.glslVersion="#version 440",this.explicitBindingLocations=!0,this.separateSamplerTextures=!0,this.viewportOrigin=hn.UPPER_LEFT,this.clipSpaceNearZ=So.ZERO,this.supportsSyncPipelineCompilation=!1,this.supportMRT=!0,this.device=r,this.canvas=n,this.canvasContext=i,this.glsl_compile=o,this.WGSLComposer=a,this.fallbackTexture2D=this.createFallbackTexture(ht.TEXTURE_2D,Wt.Float),this.setResourceName(this.fallbackTexture2D,"Fallback Texture2D"),this.fallbackTexture2DDepth=this.createFallbackTexture(ht.TEXTURE_2D,Wt.Depth),this.setResourceName(this.fallbackTexture2DDepth,"Fallback Depth Texture2D"),this.fallbackTexture2DArray=this.createFallbackTexture(ht.TEXTURE_2D_ARRAY,Wt.Float),this.setResourceName(this.fallbackTexture2DArray,"Fallback Texture2DArray"),this.fallbackTexture3D=this.createFallbackTexture(ht.TEXTURE_3D,Wt.Float),this.setResourceName(this.fallbackTexture3D,"Fallback Texture3D"),this.fallbackTextureCube=this.createFallbackTexture(ht.TEXTURE_CUBE_MAP,Wt.Float),this.setResourceName(this.fallbackTextureCube,"Fallback TextureCube"),this.fallbackSamplerFiltering=this.createSampler({addressModeU:Lr.REPEAT,addressModeV:Lr.REPEAT,minFilter:jt.POINT,magFilter:jt.POINT,mipmapFilter:ur.NEAREST}),this.setResourceName(this.fallbackSamplerFiltering,"Fallback Sampler Filtering"),this.fallbackSamplerComparison=this.createSampler({addressModeU:Lr.REPEAT,addressModeV:Lr.REPEAT,minFilter:jt.POINT,magFilter:jt.POINT,mipmapFilter:ur.NEAREST,compareFunction:Ot.ALWAYS}),this.setResourceName(this.fallbackSamplerComparison,"Fallback Sampler Comparison Filtering"),this.device.features&&(this.featureTextureCompressionBC=this.device.features.has("texture-compression-bc")),this.device.onuncapturederror=function(s){console.error(s.error)},this.swapChainFormat=navigator.gpu.getPreferredCanvasFormat(),this.canvasContext.configure({device:this.device,format:this.swapChainFormat,usage:this.swapChainTextureUsage,alphaMode:"premultiplied"})}return t.prototype.destroy=function(){},t.prototype.configureSwapChain=function(e,r){this.swapChainWidth===e&&this.swapChainHeight===r||(this.swapChainWidth=e,this.swapChainHeight=r)},t.prototype.getOnscreenTexture=function(){var e=this.canvasContext.getCurrentTexture(),r=e.createView(),n=new ws({id:0,device:this,descriptor:{format:w.U8_RGBA_RT,width:this.swapChainWidth,height:this.swapChainHeight,depthOrArrayLayers:0,dimension:ht.TEXTURE_2D,mipLevelCount:1,usage:this.swapChainTextureUsage},skipCreate:!0});return n.depthOrArrayLayers=1,n.sampleCount=1,n.gpuTexture=e,n.gpuTextureView=r,n.name="Onscreen",this.setResourceName(n,"Onscreen Texture"),n},t.prototype.getDevice=function(){return this},t.prototype.getCanvas=function(){return this.canvas},t.prototype.beginFrame=function(){rt(this.frameCommandEncoderPool.length===0)},t.prototype.endFrame=function(){rt(this.frameCommandEncoderPool.every(function(e){return e!==null})),this.device.queue.submit(this.frameCommandEncoderPool.map(function(e){return e.finish()})),this.frameCommandEncoderPool=[]},t.prototype.getNextUniqueId=function(){return++this._resourceUniqueId},t.prototype.createBuffer=function(e){return new VN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createTexture=function(e){return new ws({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createSampler=function(e){return new $N({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderTarget=function(e){var r=new ws({id:this.getNextUniqueId(),device:this,descriptor:zt(zt({},e),{dimension:ht.TEXTURE_2D,mipLevelCount:1,depthOrArrayLayers:1,usage:Ir.RENDER_TARGET}),sampleCount:e.sampleCount});return r.depthOrArrayLayers=1,r.type=Tt.RenderTarget,r},t.prototype.createRenderTargetFromTexture=function(e){var r=e,n=r.format,i=r.width,o=r.height,a=r.depthOrArrayLayers,s=r.sampleCount,u=r.mipLevelCount,l=r.gpuTexture,f=r.gpuTextureView,c=r.usage;rt(!!(c&sr.RENDER_ATTACHMENT));var h=new ws({id:this.getNextUniqueId(),device:this,descriptor:{format:n,width:i,height:o,depthOrArrayLayers:a,dimension:ht.TEXTURE_2D,mipLevelCount:u,usage:c},skipCreate:!0});return h.depthOrArrayLayers=a,h.sampleCount=s,h.gpuTexture=l,h.gpuTextureView=f,h},t.prototype.createProgram=function(e){var r,n;return!((r=e.vertex)===null||r===void 0)&&r.glsl&&(e.vertex.glsl=Co(this.queryVendorInfo(),"vert",e.vertex.glsl)),!((n=e.fragment)===null||n===void 0)&&n.glsl&&(e.fragment.glsl=Co(this.queryVendorInfo(),"frag",e.fragment.glsl)),new Hm({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createProgramSimple=function(e){return new Hm({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createTextureShared=function(e,r,n){var i={width:e.width,height:e.height,depthOrArrayLayers:e.depthOrArrayLayers},o=e.mipLevelCount,a=Sf(e.format),s=gN(e.dimension),u=vN(e.usage);if(r.gpuTextureformat=a,r.dimension=e.dimension,r.format=e.format,r.width=e.width,r.height=e.height,r.depthOrArrayLayers=e.depthOrArrayLayers,r.mipLevelCount=o,r.usage=u,r.sampleCount=e.sampleCount,!n){var l=this.device.createTexture({size:i,mipLevelCount:o,format:a,dimension:s,sampleCount:e.sampleCount,usage:u}),f=l.createView();r.gpuTexture=l,r.gpuTextureView=f}},t.prototype.getFallbackSampler=function(e){var r=e.formatKind;return r===Wt.Depth&&e.comparison?this.fallbackSamplerComparison:this.fallbackSamplerFiltering},t.prototype.getFallbackTexture=function(e){var r=e.dimension,n=e.formatKind;if(r===ht.TEXTURE_2D)return n===Wt.Depth?this.fallbackTexture2DDepth:this.fallbackTexture2D;if(r===ht.TEXTURE_2D_ARRAY)return this.fallbackTexture2DArray;if(r===ht.TEXTURE_3D)return this.fallbackTexture3D;if(r===ht.TEXTURE_CUBE_MAP)return this.fallbackTextureCube;throw new Error("whoops")},t.prototype.createFallbackTexture=function(e,r){var n=e===ht.TEXTURE_CUBE_MAP?6:1,i=r===Wt.Float?w.U8_RGBA_NORM:w.D24;return this.createTexture({dimension:e,format:i,usage:Ir.SAMPLED,width:1,height:1,depthOrArrayLayers:n,mipLevelCount:1})},t.prototype.createBindings=function(e){return new zN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createInputLayout=function(e){return new HN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createComputePipeline=function(e){return new WN({id:this.getNextUniqueId(),device:this,descriptor:e})},t.prototype.createRenderPipeline=function(e){return new GN({id:this.getNextUniqueId(),device:this,descriptor:zt({},e)})},t.prototype.createQueryPool=function(e,r){return new XN({id:this.getNextUniqueId(),device:this,descriptor:{type:e,elemCount:r}})},t.prototype.createRenderPipelineInternal=function(e,r){var n;if(e.gpuRenderPipeline===null){var i=e.descriptor,o=i.program,a=o.vertexStage,s=o.fragmentStage;if(!(a===null||s===null)){var u=i.megaStateDescriptor||{},l=u.stencilBack,f=u.stencilFront,c=rB(u,["stencilBack","stencilFront"]),h=Ro(bo);i.megaStateDescriptor=zt(zt(zt({},h),{stencilBack:zt(zt({},h.stencilBack),l),stencilFront:zt(zt({},h.stencilFront),f)}),c);var _=i.megaStateDescriptor.attachmentsState[0];i.colorAttachmentFormats.forEach(function(V,pe){i.megaStateDescriptor.attachmentsState[pe]||(i.megaStateDescriptor.attachmentsState[pe]=Sg(void 0,_))});var m=ON((n=i.topology)!==null&&n!==void 0?n:er.TRIANGLES,i.megaStateDescriptor),E=NN(i.colorAttachmentFormats,i.megaStateDescriptor),S=PN(i.depthStencilAttachmentFormat,i.megaStateDescriptor),M=void 0;i.inputLayout!==null&&(M=i.inputLayout.buffers);var P=i.sampleCount,F={layout:"auto",vertex:zt(zt({},a),{buffers:M}),primitive:m,depthStencil:S,multisample:{count:P},fragment:zt(zt({},s),{targets:E})};e.gpuRenderPipeline=this.device.createRenderPipeline(F)}}},t.prototype.createReadback=function(){return new jN({id:this.getNextUniqueId(),device:this})},t.prototype.createRenderBundle=function(){return new YN({id:this.getNextUniqueId(),device:this})},t.prototype.createRenderPass=function(e){var r=this.renderPassPool.pop();r===void 0&&(r=new Xm(this));var n=this.frameCommandEncoderPool.pop();return n===void 0&&(n=this.device.createCommandEncoder()),r.beginRenderPass(n,e),r},t.prototype.createComputePass=function(){var e=this.computePassPool.pop();e===void 0&&(e=new Wm);var r=this.frameCommandEncoderPool.pop();return r===void 0&&(r=this.device.createCommandEncoder()),e.beginComputePass(r),e},t.prototype.submitPass=function(e){var r=e;r instanceof Xm?(this.frameCommandEncoderPool.push(r.frameCommandEncoder),r.finish(),this.renderPassPool.push(r)):r instanceof Wm&&(this.frameCommandEncoderPool.push(r.frameCommandEncoder),r.finish(),this.computePassPool.push(r))},t.prototype.copySubTexture2D=function(e,r,n,i,o,a,s){var u=this.device.createCommandEncoder(),l=e,f=i,c={texture:f.gpuTexture,origin:[o,a,0],mipLevel:0,aspect:"all"},h={texture:l.gpuTexture,origin:[r,n,0],mipLevel:0,aspect:"all"};rt(!!(f.usage&sr.COPY_SRC)),rt(!!(l.usage&sr.COPY_DST)),u.copyTextureToTexture(c,h,[f.width,f.height,s||1]),this.device.queue.submit([u.finish()])},t.prototype.queryLimits=function(){return{uniformBufferMaxPageWordSize:this.device.limits.maxUniformBufferBindingSize>>>2,uniformBufferWordAlignment:this.device.limits.minUniformBufferOffsetAlignment>>>2,supportedSampleCounts:[1],occlusionQueriesRecommended:!0,computeShadersSupported:!0}},t.prototype.queryTextureFormatSupported=function(e,r,n){if(wN(e)){if(!this.featureTextureCompressionBC)return!1;var i=UN(e);return r%i!==0||n%i!==0?!1:this.featureTextureCompressionBC}switch(e){case w.U16_RGBA_NORM:return!1;case w.F32_RGBA:return!1}return!0},t.prototype.queryPlatformAvailable=function(){return!0},t.prototype.queryVendorInfo=function(){return this},t.prototype.queryRenderPass=function(e){var r=e;return r.descriptor},t.prototype.queryRenderTarget=function(e){var r=e;return r},t.prototype.setResourceName=function(e,r){if(e.name=r,e.type===Tt.Buffer){var n=e;n.gpuBuffer.label=r}else if(e.type===Tt.Texture){var n=e;n.gpuTexture.label=r,n.gpuTextureView.label=r}else if(e.type===Tt.RenderTarget){var n=e;n.gpuTexture.label=r,n.gpuTextureView.label=r}else if(e.type===Tt.Sampler){var n=e;n.gpuSampler.label=r}else if(e.type===Tt.RenderPipeline){var n=e;n.gpuRenderPipeline!==null&&(n.gpuRenderPipeline.label=r)}},t.prototype.setResourceLeakCheck=function(e,r){},t.prototype.checkForLeaks=function(){},t.prototype.programPatched=function(e){},t.prototype.pipelineQueryReady=function(e){var r=e;return r.gpuRenderPipeline!==null},t.prototype.pipelineForceReady=function(e){var r=e;this.createRenderPipelineInternal(r,!1)},t}(),KN=function(){function t(e){this.pluginOptions=e}return t.prototype.createSwapChain=function(e){return _o(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l;return mo(this,function(f){switch(f.label){case 0:if(globalThis.navigator.gpu===void 0)return[2,null];r=null,f.label=1;case 1:return f.trys.push([1,3,,4]),n=this.pluginOptions.xrCompatible,[4,globalThis.navigator.gpu.requestAdapter({xrCompatible:n})];case 2:return r=f.sent(),[3,4];case 3:return i=f.sent(),console.log(i),[3,4];case 4:return r===null?[2,null]:(o=["depth32float-stencil8","texture-compression-bc","float32-filterable"],a=o.filter(function(c){return r.features.has(c)}),[4,r.requestDevice({requiredFeatures:a})]);case 5:if(s=f.sent(),s&&(u=this.pluginOptions.onContextLost,s.lost.then(function(){u&&u()})),s===null)return[2,null];if(l=e.getContext("webgpu"),!l)return[2,null];f.label=6;case 6:return f.trys.push([6,8,,9]),[4,Mg(this.pluginOptions.shaderCompilerPath)];case 7:return f.sent(),[3,9];case 8:return f.sent(),[3,9];case 9:return[2,new ZN(r,s,e,l,dN,Da&&new Da)]}})})},t}(),qN=class{constructor(t,e){const{buffer:r,offset:n,stride:i,normalized:o,size:a,divisor:s,shaderLocation:u}=e;this.buffer=r,this.attribute={shaderLocation:u,buffer:r.get(),offset:n||0,stride:i||0,normalized:o||!1,divisor:s||0},a&&(this.attribute.size=a)}get(){return this.buffer}updateBuffer(t){this.buffer.subData(t)}destroy(){this.buffer.destroy()}},Iu={[p.FLOAT]:Float32Array,[p.UNSIGNED_BYTE]:Uint8Array,[p.SHORT]:Int16Array,[p.UNSIGNED_SHORT]:Uint16Array,[p.INT]:Int32Array,[p.UNSIGNED_INT]:Uint32Array},QN={[p.POINTS]:er.POINTS,[p.LINES]:er.LINES,[p.LINE_LOOP]:er.LINES,[p.LINE_STRIP]:er.LINE_STRIP,[p.TRIANGLES]:er.TRIANGLES,[p.TRIANGLE_FAN]:er.TRIANGLES,[p.TRIANGLE_STRIP]:er.TRIANGLE_STRIP},JN={1:w.F32_R,2:w.F32_RG,3:w.F32_RGB,4:w.F32_RGBA},eP={[p.STATIC_DRAW]:pn.STATIC,[p.DYNAMIC_DRAW]:pn.DYNAMIC,[p.STREAM_DRAW]:pn.DYNAMIC},jm={[p.REPEAT]:Lr.REPEAT,[p.CLAMP_TO_EDGE]:Lr.CLAMP_TO_EDGE,[p.MIRRORED_REPEAT]:Lr.MIRRORED_REPEAT},tP={[p.NEVER]:Ot.NEVER,[p.ALWAYS]:Ot.ALWAYS,[p.LESS]:Ot.LESS,[p.LEQUAL]:Ot.LEQUAL,[p.GREATER]:Ot.GREATER,[p.GEQUAL]:Ot.GEQUAL,[p.EQUAL]:Ot.EQUAL,[p.NOTEQUAL]:Ot.NOTEQUAL},rP={[p.FRONT]:zr.FRONT,[p.BACK]:zr.BACK},Gm={[p.FUNC_ADD]:pr.ADD,[p.MIN_EXT]:pr.MIN,[p.MAX_EXT]:pr.MAX,[p.FUNC_SUBTRACT]:pr.SUBSTRACT,[p.FUNC_REVERSE_SUBTRACT]:pr.REVERSE_SUBSTRACT},Us={[p.ZERO]:ft.ZERO,[p.ONE]:ft.ONE,[p.SRC_COLOR]:ft.SRC,[p.ONE_MINUS_SRC_COLOR]:ft.ONE_MINUS_SRC,[p.SRC_ALPHA]:ft.SRC_ALPHA,[p.ONE_MINUS_SRC_ALPHA]:ft.ONE_MINUS_SRC_ALPHA,[p.DST_COLOR]:ft.DST,[p.ONE_MINUS_DST_COLOR]:ft.ONE_MINUS_DST,[p.DST_ALPHA]:ft.DST_ALPHA,[p.ONE_MINUS_DST_ALPHA]:ft.ONE_MINUS_DST_ALPHA,[p.CONSTANT_COLOR]:ft.CONST,[p.ONE_MINUS_CONSTANT_COLOR]:ft.ONE_MINUS_CONSTANT,[p.CONSTANT_ALPHA]:ft.CONST,[p.ONE_MINUS_CONSTANT_ALPHA]:ft.ONE_MINUS_CONSTANT,[p.SRC_ALPHA_SATURATE]:ft.SRC_ALPHA_SATURATE},Qi={[p.REPLACE]:Ht.REPLACE,[p.KEEP]:Ht.KEEP,[p.ZERO]:Ht.ZERO,[p.INVERT]:Ht.INVERT,[p.INCR]:Ht.INCREMENT_CLAMP,[p.DECR]:Ht.DECREMENT_CLAMP,[p.INCR_WRAP]:Ht.INCREMENT_WRAP,[p.DECR_WRAP]:Ht.DECREMENT_WRAP},nP={[p.ALWAYS]:Ot.ALWAYS,[p.EQUAL]:Ot.EQUAL,[p.GEQUAL]:Ot.GEQUAL,[p.GREATER]:Ot.GREATER,[p.LEQUAL]:Ot.LEQUAL,[p.LESS]:Ot.LESS,[p.NEVER]:Ot.NEVER,[p.NOTEQUAL]:Ot.NOTEQUAL},iP={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121};function Mu(t){return Object.prototype.toString.call(t)in iP}function oP(t,e){const r=t.length,n=Math.ceil(r/3),i=r+n,o=new Float32Array(i);for(let a=0;a<i;a+=4)o[a]=t[a/4*3],o[a+1]=t[a/4*3+1],o[a+2]=t[a/4*3+2],o[a+3]=e;return o}var aP=class{constructor(t,e){this.isDestroyed=!1;const{data:r,usage:n,type:i,isUBO:o,label:a}=e;let s;Mu(r)?s=r:s=new Iu[this.type||p.FLOAT](r),this.type=i,this.size=s.byteLength,this.buffer=t.createBuffer({viewOrSize:s,usage:o?Dt.UNIFORM:Dt.VERTEX,hint:eP[n||p.STATIC_DRAW]}),a&&t.setResourceName(this.buffer,a)}get(){return this.buffer}destroy(){this.isDestroyed||this.buffer.destroy(),this.isDestroyed=!0}subData({data:t,offset:e}){let r;Mu(t)?r=t:r=new Iu[this.type||p.FLOAT](t),this.buffer.setSubData(e,new Uint8Array(r.buffer))}};function It(t,e=0){return t+=e,t+=t<<10,t+=t>>>6,t>>>0}function Ng(t){return t+=t<<3,t^=t>>>11,t+=t<<15,t>>>0}function $m(){return 0}var sP=class{constructor(){this.keys=[],this.values=[]}},ks=class{constructor(t,e){this.keyEqualFunc=t,this.keyHashFunc=e,this.buckets=new Map}findBucketIndex(t,e){for(let r=0;r<t.keys.length;r++)if(this.keyEqualFunc(e,t.keys[r]))return r;return-1}findBucket(t){const e=this.keyHashFunc(t);return this.buckets.get(e)}get(t){const e=this.findBucket(t);if(e===void 0)return null;const r=this.findBucketIndex(e,t);return r<0?null:e.values[r]}add(t,e){const r=this.keyHashFunc(t);this.buckets.get(r)===void 0&&this.buckets.set(r,new sP);const n=this.buckets.get(r);n.keys.push(t),n.values.push(e)}delete(t){const e=this.findBucket(t);if(e===void 0)return;const r=this.findBucketIndex(e,t);r!==-1&&(e.keys.splice(r,1),e.values.splice(r,1))}clear(){this.buckets.clear()}size(){let t=0;for(const e of this.buckets.values())t+=e.values.length;return t}*values(){for(const t of this.buckets.values())for(let e=t.values.length-1;e>=0;e--)yield t.values[e]}};function Ym(t,e){return t=It(t,e.blendMode),t=It(t,e.blendSrcFactor),t=It(t,e.blendDstFactor),t}function uP(t,e){return t=Ym(t,e.rgbBlendState),t=Ym(t,e.alphaBlendState),t=It(t,e.channelWriteMask),t}function lP(t,e){return t=It(t,e.r<<24|e.g<<16|e.b<<8|e.a),t}function cP(t,e){var r,n,i,o,a,s,u,l;for(let f=0;f<e.attachmentsState.length;f++)t=uP(t,e.attachmentsState[f]);return t=lP(t,e.blendConstant||Xu),t=It(t,e.depthCompare),t=It(t,e.depthWrite?1:0),t=It(t,(r=e.stencilFront)==null?void 0:r.compare),t=It(t,(n=e.stencilFront)==null?void 0:n.passOp),t=It(t,(i=e.stencilFront)==null?void 0:i.failOp),t=It(t,(o=e.stencilFront)==null?void 0:o.depthFailOp),t=It(t,(a=e.stencilBack)==null?void 0:a.compare),t=It(t,(s=e.stencilBack)==null?void 0:s.passOp),t=It(t,(u=e.stencilBack)==null?void 0:u.failOp),t=It(t,(l=e.stencilBack)==null?void 0:l.depthFailOp),t=It(t,e.stencilWrite?1:0),t=It(t,e.cullMode),t=It(t,e.frontFace?1:0),t=It(t,e.polygonOffset?1:0),t}function fP(t){let e=0;e=It(e,t.program.id),t.inputLayout!==null&&(e=It(e,t.inputLayout.id)),e=cP(e,t.megaStateDescriptor);for(let r=0;r<t.colorAttachmentFormats.length;r++)e=It(e,t.colorAttachmentFormats[r]||0);return e=It(e,t.depthStencilAttachmentFormat||0),Ng(e)}function hP(t){let e=0;if(t.samplerBindings)for(let r=0;r<t.samplerBindings.length;r++){const n=t.samplerBindings[r];n!==null&&n.texture!==null&&(e=It(e,n.texture.id))}if(t.uniformBufferBindings)for(let r=0;r<t.uniformBufferBindings.length;r++){const n=t.uniformBufferBindings[r];n!==null&&n.buffer!==null&&(e=It(e,n.buffer.id),e=It(e,n.binding),e=It(e,n.offset),e=It(e,n.size))}if(t.storageBufferBindings)for(let r=0;r<t.storageBufferBindings.length;r++){const n=t.storageBufferBindings[r];n!==null&&n.buffer!==null&&(e=It(e,n.buffer.id),e=It(e,n.binding),e=It(e,n.offset),e=It(e,n.size))}if(t.storageTextureBindings)for(let r=0;r<t.storageTextureBindings.length;r++){const n=t.storageTextureBindings[r];n!==null&&n.texture!==null&&(e=It(e,n.texture.id),e=It(e,n.binding))}return Ng(e)}function dP(t,e){var r,n,i,o;return((r=t.vertex)==null?void 0:r.glsl)===((n=e.vertex)==null?void 0:n.glsl)&&((i=t.fragment)==null?void 0:i.glsl)===((o=e.fragment)==null?void 0:o.glsl)}function pP(t){var e,r;return{vertex:{glsl:(e=t.vertex)==null?void 0:e.glsl},fragment:{glsl:(r=t.fragment)==null?void 0:r.glsl}}}var _P=class{constructor(t){this.device=t,this.bindingsCache=new ks(pB,hP),this.renderPipelinesCache=new ks(gB,fP),this.inputLayoutsCache=new ks(AB,$m),this.programCache=new ks(dP,$m)}createBindings(t){var e;let r=this.bindingsCache.get(t);if(r===null){const n=xB(t);n.uniformBufferBindings=(e=n.uniformBufferBindings)==null?void 0:e.filter(({size:i})=>i&&i>0),r=this.device.createBindings(n),this.bindingsCache.add(n,r)}return r}createRenderPipeline(t){let e=this.renderPipelinesCache.get(t);if(e===null){const r=RB(t);r.colorAttachmentFormats=r.colorAttachmentFormats.filter(n=>n),e=this.device.createRenderPipeline(r),this.renderPipelinesCache.add(r,e)}return e}createInputLayout(t){t.vertexBufferDescriptors=t.vertexBufferDescriptors.filter(r=>!!r);let e=this.inputLayoutsCache.get(t);if(e===null){const r=OB(t);e=this.device.createInputLayout(r),this.inputLayoutsCache.add(r,e)}return e}createProgram(t){let e=this.programCache.get(t);if(e===null){const r=pP(t);e=this.device.createProgram(t),this.programCache.add(r,e)}return e}destroy(){for(const t of this.bindingsCache.values())t.destroy();for(const t of this.renderPipelinesCache.values())t.destroy();for(const t of this.inputLayoutsCache.values())t.destroy();for(const t of this.programCache.values())t.destroy();this.bindingsCache.clear(),this.renderPipelinesCache.clear(),this.inputLayoutsCache.clear(),this.programCache.clear()}},mP=class{constructor(t,e){const{data:r,type:n,count:i=0}=e;let o;Mu(r)?o=r:o=new Iu[this.type||p.UNSIGNED_INT](r),this.type=n,this.count=i,this.indexBuffer=t.createBuffer({viewOrSize:o,usage:Dt.INDEX})}get(){return this.indexBuffer}subData({data:t}){let e;Mu(t)?e=t:e=new Iu[this.type||p.UNSIGNED_INT](t),this.indexBuffer.setSubData(0,new Uint8Array(e.buffer))}destroy(){this.indexBuffer.destroy()}};function Zm(t){return!!(t&&t.texture)}var Pg=class{constructor(t,e){this.device=t,this.options=e,this.isDestroy=!1;const{wrapS:r=p.CLAMP_TO_EDGE,wrapT:n=p.CLAMP_TO_EDGE,aniso:i,mag:o=p.NEAREST,min:a=p.NEAREST}=e;this.createTexture(e),this.sampler=t.createSampler({addressModeU:jm[r],addressModeV:jm[n],minFilter:a===p.NEAREST?jt.POINT:jt.BILINEAR,magFilter:o===p.NEAREST?jt.POINT:jt.BILINEAR,mipmapFilter:ur.NO_MIP,maxAnisotropy:i})}createTexture(t){const{type:e=p.UNSIGNED_BYTE,width:r,height:n,flipY:i=!1,format:o=p.RGBA,alignment:a=1,usage:s=nu.SAMPLED,unorm:u=!1,label:l}=t;let{data:f}=t;this.width=r,this.height=n;let c=w.U8_RGBA_RT;if(e===p.UNSIGNED_BYTE&&o===p.RGBA)c=u?w.U8_RGBA_NORM:w.U8_RGBA_RT;else if(e===p.UNSIGNED_BYTE&&o===p.LUMINANCE)c=w.U8_LUMINANCE;else if(e===p.FLOAT&&o===p.LUMINANCE)c=w.F32_LUMINANCE;else if(e===p.FLOAT&&o===p.RGB)this.device.queryVendorInfo().platformString==="WebGPU"?(f&&(f=oP(f,0)),c=w.F32_RGBA):c=w.F32_RGB;else if(e===p.FLOAT&&o===p.RGBA)c=w.F32_RGBA;else if(e===p.FLOAT&&o===p.RED)c=w.F32_R;else throw new Error(`create texture error, type: ${e}, format: ${o}`);this.texture=this.device.createTexture({format:c,width:r,height:n,usage:s===nu.SAMPLED?Ir.SAMPLED:Ir.RENDER_TARGET,pixelStore:{unpackFlipY:i,packAlignment:a},mipLevelCount:1}),l&&this.device.setResourceName(this.texture,l),f&&this.texture.setImageData([f])}get(){return this.texture}update(t){const{data:e}=t;this.texture.setImageData([e])}bind(){}resize({width:t,height:e}){(this.width!==t||this.height!==e)&&this.destroy(),this.options.width=t,this.options.height=e,this.createTexture(this.options),this.isDestroy=!1}getSize(){return[this.width,this.height]}destroy(){var t;!this.isDestroy&&!this.texture.destroyed&&((t=this.texture)==null||t.destroy()),this.isDestroy=!0}},Lg=class{constructor(t,e){this.device=t,this.options=e,this.createColorRenderTarget(),this.createDepthRenderTarget()}createColorRenderTarget(t=!1){const{width:e,height:r,color:n}=this.options;n&&(Zm(n)?(t&&n.resize({width:e,height:r}),this.colorTexture=n.get(),this.colorRenderTarget=this.device.createRenderTargetFromTexture(this.colorTexture),this.width=n.width,this.height=n.height):e&&r&&(this.colorTexture=this.device.createTexture({format:w.U8_RGBA_RT,usage:Ir.RENDER_TARGET,width:e,height:r}),this.colorRenderTarget=this.device.createRenderTargetFromTexture(this.colorTexture),this.width=e,this.height=r))}createDepthRenderTarget(t=!1){const{width:e,height:r,depth:n}=this.options;n&&(Zm(n)?(t&&n.resize({width:e,height:r}),this.depthTexture=n.get(),this.depthRenderTarget=this.device.createRenderTargetFromTexture(this.depthTexture),this.width=n.width,this.height=n.height):e&&r&&(this.depthTexture=this.device.createTexture({format:w.D24_S8,usage:Ir.RENDER_TARGET,width:e,height:r}),this.depthRenderTarget=this.device.createRenderTargetFromTexture(this.depthTexture),this.width=e,this.height=r))}get(){return this.colorRenderTarget}destroy(){var t,e;(t=this.colorRenderTarget)==null||t.destroy(),(e=this.depthRenderTarget)==null||e.destroy()}resize({width:t,height:e}){(this.width!==t||this.height!==e)&&(this.destroy(),this.colorTexture.destroyed=!0,this.depthTexture.destroyed=!0,this.options.width=t,this.options.height=e,this.createColorRenderTarget(!0),this.createDepthRenderTarget(!0))}},vP=Object.defineProperty,gP=Object.defineProperties,EP=Object.getOwnPropertyDescriptors,Km=Object.getOwnPropertySymbols,yP=Object.prototype.hasOwnProperty,AP=Object.prototype.propertyIsEnumerable,qm=(t,e,r)=>e in t?vP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fi=(t,e)=>{for(var r in e||(e={}))yP.call(e,r)&&qm(t,r,e[r]);if(Km)for(var r of Km(e))AP.call(e,r)&&qm(t,r,e[r]);return t},TP=(t,e)=>gP(t,EP(e)),{isPlainObject:SP,isTypedArray:xP,isNil:Qm}=Mr,RP=class{constructor(t,e,r){this.device=t,this.options=e,this.service=r,this.destroyed=!1,this.uniforms={},this.vertexBuffers=[];const{vs:n,fs:i,attributes:o,uniforms:a,count:s,elements:u,diagnosticDerivativeUniformityEnabled:l}=e;this.options=e;const f=l?"":this.service.viewportOrigin===hn.UPPER_LEFT?"diagnostic(off,derivative_uniformity);":"";this.program=r.renderCache.createProgram({vertex:{glsl:n},fragment:{glsl:i,postprocess:m=>f+m}}),a&&(this.uniforms=this.extractUniforms(a));const c=[];let h=0;Object.keys(o).forEach(m=>{const E=o[m],S=E.get();this.vertexBuffers.push(S.get());const{offset:M=0,stride:P=0,size:F=1,divisor:V=0,shaderLocation:pe=0}=E.attribute;c.push({arrayStride:P||F*4,stepMode:Si.VERTEX,attributes:[{format:JN[F],shaderLocation:pe,offset:M,divisor:V}]}),h=S.size/F}),s||(this.options.count=h),u&&(this.indexBuffer=u.get());const _=r.renderCache.createInputLayout({vertexBufferDescriptors:c,indexBufferFormat:u?w.U32_R:null,program:this.program});this.inputLayout=_,this.pipeline=this.createPipeline(e)}createPipeline(t,e){var r;const{primitive:n=p.TRIANGLES,depth:i,cull:o,blend:a,stencil:s}=t,u=this.initDepthDrawParams({depth:i}),l=!!(u&&u.enable),f=this.initCullDrawParams({cull:o}),c=!!(f&&f.enable),h=this.getBlendDrawParams({blend:a}),_=!!(h&&h.enable),m=this.getStencilDrawParams({stencil:s}),E=!!(m&&m.enable),S=this.device.createRenderPipeline({inputLayout:this.inputLayout,program:this.program,topology:QN[n],colorAttachmentFormats:[w.U8_RGBA_RT],depthStencilAttachmentFormat:w.D24_S8,megaStateDescriptor:{attachmentsState:[e?{channelWriteMask:dr.ALL,rgbBlendState:{blendMode:pr.ADD,blendSrcFactor:ft.ONE,blendDstFactor:ft.ZERO},alphaBlendState:{blendMode:pr.ADD,blendSrcFactor:ft.ONE,blendDstFactor:ft.ZERO}}:{channelWriteMask:E&&m.opFront.zpass===Ht.REPLACE?dr.NONE:dr.ALL,rgbBlendState:{blendMode:_&&h.equation.rgb||pr.ADD,blendSrcFactor:_&&h.func.srcRGB||ft.SRC_ALPHA,blendDstFactor:_&&h.func.dstRGB||ft.ONE_MINUS_SRC_ALPHA},alphaBlendState:{blendMode:_&&h.equation.alpha||pr.ADD,blendSrcFactor:_&&h.func.srcAlpha||ft.ONE,blendDstFactor:_&&h.func.dstAlpha||ft.ONE}}],blendConstant:_?Xu:void 0,depthWrite:l,depthCompare:l&&u.func||Ot.LESS,cullMode:c&&f.face||zr.NONE,stencilWrite:E,stencilFront:{compare:E?m.func.cmp:Ot.ALWAYS,passOp:m.opFront.zpass,failOp:m.opFront.fail,depthFailOp:m.opFront.zfail,mask:m.opFront.mask},stencilBack:{compare:E?m.func.cmp:Ot.ALWAYS,passOp:m.opBack.zpass,failOp:m.opBack.fail,depthFailOp:m.opBack.zfail,mask:m.opBack.mask}}});return E&&!Qm((r=s?.func)==null?void 0:r.ref)&&(S.stencilFuncReference=s.func.ref),S}updateAttributesAndElements(){}updateAttributes(){}addUniforms(t){this.uniforms=fi(fi({},this.uniforms),this.extractUniforms(t))}draw(t,e){const r=fi(fi({},this.options),t),{count:n=0,instances:i,elements:o,uniforms:a={},uniformBuffers:s,textures:u}=r;this.uniforms=fi(fi({},this.uniforms),this.extractUniforms(a));const{renderPass:l,currentFramebuffer:f,width:c,height:h}=this.service;this.pipeline=this.createPipeline(r,e);const _=this.service.device,m=_.swapChainHeight;if(_.swapChainHeight=f?.height||h,l.setViewport(0,0,f?.width||c,f?.height||h),_.swapChainHeight=m,l.setPipeline(this.pipeline),Qm(this.pipeline.stencilFuncReference)||l.setStencilReference(this.pipeline.stencilFuncReference),l.setVertexInput(this.inputLayout,this.vertexBuffers.map(E=>({buffer:E})),o?{buffer:this.indexBuffer,offset:0}:null),s&&(this.bindings=_.createBindings({pipeline:this.pipeline,uniformBufferBindings:s.map((E,S)=>{const M=E;return{binding:S,buffer:M.get(),size:M.size}}),samplerBindings:u?.map(E=>({texture:E.texture,sampler:E.sampler}))})),this.bindings&&(l.setBindings(this.bindings),Object.keys(this.uniforms).forEach(E=>{const S=this.uniforms[E];S instanceof Pg?this.uniforms[E]=S.get():S instanceof Lg&&(this.uniforms[E]=S.get().texture)}),this.program.setUniformsLegacy(this.uniforms)),o){const E=o.count;E===0?l.draw(n,i):l.drawIndexed(E,i)}else l.draw(n,i)}destroy(){var t,e,r;(t=this.vertexBuffers)==null||t.forEach(n=>n.destroy()),(e=this.indexBuffer)==null||e.destroy(),(r=this.bindings)==null||r.destroy(),this.pipeline.destroy(),this.destroyed=!0}initDepthDrawParams({depth:t}){if(t)return{enable:t.enable===void 0?!0:!!t.enable,mask:t.mask===void 0?!0:!!t.mask,func:tP[t.func||p.LESS],range:t.range||[0,1]}}getBlendDrawParams({blend:t}){const{enable:e,func:r,equation:n,color:i=[0,0,0,0]}=t||{};return{enable:!!e,func:{srcRGB:Us[r&&r.srcRGB||p.SRC_ALPHA],srcAlpha:Us[r&&r.srcAlpha||p.SRC_ALPHA],dstRGB:Us[r&&r.dstRGB||p.ONE_MINUS_SRC_ALPHA],dstAlpha:Us[r&&r.dstAlpha||p.ONE_MINUS_SRC_ALPHA]},equation:{rgb:Gm[n&&n.rgb||p.FUNC_ADD],alpha:Gm[n&&n.alpha||p.FUNC_ADD]},color:i}}getStencilDrawParams({stencil:t}){const{enable:e,mask:r=4294967295,func:n={cmp:p.ALWAYS,ref:0,mask:4294967295},opFront:i={fail:p.KEEP,zfail:p.KEEP,zpass:p.KEEP},opBack:o={fail:p.KEEP,zfail:p.KEEP,zpass:p.KEEP}}=t||{};return{enable:!!e,mask:r,func:TP(fi({},n),{cmp:nP[n.cmp]}),opFront:{fail:Qi[i.fail],zfail:Qi[i.zfail],zpass:Qi[i.zpass],mask:n.mask},opBack:{fail:Qi[o.fail],zfail:Qi[o.zfail],zpass:Qi[o.zpass],mask:n.mask}}}initCullDrawParams({cull:t}){if(t){const{enable:e,face:r=p.BACK}=t;return{enable:!!e,face:rP[r]}}}extractUniforms(t){const e={};return Object.keys(t).forEach(r=>{this.extractUniformsRecursively(r,t[r],e,"")}),e}extractUniformsRecursively(t,e,r,n){if(e===null||typeof e=="number"||typeof e=="boolean"||Array.isArray(e)&&typeof e[0]=="number"||xP(e)||e===""||"resize"in e){r[`${n&&n+"."}${t}`]=e;return}SP(e)&&Object.keys(e).forEach(i=>{this.extractUniformsRecursively(i,e[i],r,`${n&&n+"."}${t}`)}),Array.isArray(e)&&e.forEach((i,o)=>{Object.keys(i).forEach(a=>{this.extractUniformsRecursively(a,i[a],r,`${n&&n+"."}${t}[${o}]`)})})}};function bP(t){return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?!0:!!(t&&t._version===2)}var cc=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),{isUndefined:zs}=Mr,CP=class{constructor(){this.uniformBuffers=[],this.queryVerdorInfo=()=>this.device.queryVendorInfo().platformString,this.createModel=t=>new RP(this.device,t,this),this.createAttribute=t=>new qN(this.device,t),this.createBuffer=t=>new aP(this.device,t),this.createElements=t=>new mP(this.device,t),this.createTexture2D=t=>new Pg(this.device,t),this.createFramebuffer=t=>new Lg(this.device,t),this.useFramebuffer=(t,e)=>{this.currentFramebuffer=t,this.beginFrame(),e(),this.endFrame(),this.currentFramebuffer=null},this.useFramebufferAsync=(t,e)=>cc(this,null,function*(){this.currentFramebuffer=t,this.preRenderPass=this.renderPass,this.beginFrame(),yield e(),this.endFrame(),this.currentFramebuffer=null,this.renderPass=this.preRenderPass}),this.clear=t=>{const{color:e,depth:r,stencil:n,framebuffer:i=null}=t;if(i)i.clearOptions={color:e,depth:r,stencil:n};else{const o=this.queryVerdorInfo();if(o==="WebGL1"){const a=this.getGLContext();zs(n)?zs(r)||(a.clearDepth(r),a.clear(a.DEPTH_BUFFER_BIT)):(a.clearStencil(n),a.clear(a.STENCIL_BUFFER_BIT))}else if(o==="WebGL2"){const a=this.getGLContext();zs(n)?zs(r)||a.clearBufferfv(a.DEPTH,0,[r]):a.clearBufferiv(a.STENCIL,0,[n])}}},this.viewport=({width:t,height:e})=>{this.swapChain.configureSwapChain(t,e),this.createMainColorDepthRT(t,e),this.width=t,this.height=e},this.readPixels=t=>{const{framebuffer:e,x:r,y:n,width:i,height:o}=t,a=this.device.createReadback(),s=e.colorTexture,u=a.readTextureSync(s,r,this.viewportOrigin===hn.LOWER_LEFT?n:this.height-n,i,o,new Uint8Array(i*o*4));if(this.viewportOrigin!==hn.LOWER_LEFT)for(let l=0;l<u.length;l+=4){const f=u[l];u[l]=u[l+2],u[l+2]=f}return a.destroy(),u},this.readPixelsAsync=t=>cc(this,null,function*(){const{framebuffer:e,x:r,y:n,width:i,height:o}=t,a=this.device.createReadback(),s=e.colorTexture,u=yield a.readTexture(s,r,this.viewportOrigin===hn.LOWER_LEFT?n:this.height-n,i,o,new Uint8Array(i*o*4));if(this.viewportOrigin!==hn.LOWER_LEFT)for(let l=0;l<u.length;l+=4){const f=u[l];u[l]=u[l+2],u[l+2]=f}return a.destroy(),u}),this.getViewportSize=()=>({width:this.width,height:this.height}),this.getContainer=()=>{var t;return(t=this.canvas)==null?void 0:t.parentElement},this.getCanvas=()=>this.canvas,this.getGLContext=()=>this.device.gl,this.destroy=()=>{var t;this.canvas=null,(t=this.uniformBuffers)==null||t.forEach(e=>{e.destroy()}),this.device.destroy(),this.renderCache.destroy()}}init(t,e){return cc(this,null,function*(){const{enableWebGPU:r,shaderCompilerPath:n,antialias:i}=e;this.canvas=t;const a=yield(r?new KN({shaderCompilerPath:n}):new uN({targets:["webgl2","webgl1"],antialias:i,onContextLost(u){console.warn("context lost",u)},onContextCreationError(u){console.warn("context creation error",u)},onContextRestored(u){console.warn("context restored",u)}})).createSwapChain(t);a.configureSwapChain(t.width,t.height),this.device=a.getDevice(),this.swapChain=a,this.renderCache=new _P(this.device),this.currentFramebuffer=null,this.viewportOrigin=this.device.queryVendorInfo().viewportOrigin;const s=this.device.gl;this.extensionObject={OES_texture_float:!bP(s)&&this.device.OES_texture_float},this.createMainColorDepthRT(t.width,t.height)})}createMainColorDepthRT(t,e){this.mainColorRT&&this.mainColorRT.destroy(),this.mainDepthRT&&this.mainDepthRT.destroy(),this.mainColorRT=this.device.createRenderTargetFromTexture(this.device.createTexture({format:w.U8_RGBA_RT,width:t,height:e,usage:Ir.RENDER_TARGET})),this.mainDepthRT=this.device.createRenderTargetFromTexture(this.device.createTexture({format:w.D24_S8,width:t,height:e,usage:Ir.RENDER_TARGET}))}beginFrame(){this.device.beginFrame();const{currentFramebuffer:t,swapChain:e,mainColorRT:r,mainDepthRT:n}=this,i=t?t.colorRenderTarget:r,o=t?null:e.getOnscreenTexture(),a=t?t.depthRenderTarget:n,{color:s=[0,0,0,0],depth:u=1,stencil:l=0}=t?.clearOptions||{},f=i?Wa(s[0]*255,s[1]*255,s[2]*255,s[3]):Xu,c=a?u:void 0,h=a?l:void 0,_=this.device.createRenderPass({colorAttachment:[i],colorResolveTo:[o],colorClearColor:[f],colorStore:[!0],depthStencilAttachment:a,depthClearValue:c,stencilClearValue:h});this.renderPass=_}endFrame(){this.device.submitPass(this.renderPass),this.device.endFrame()}getPointSizeRange(){const t=this.device.gl;return t.getParameter(t.ALIASED_POINT_SIZE_RANGE)}testExtension(t){return!!this.getGLContext().getExtension(t)}setState(){}setBaseState(){}setCustomLayerDefaults(){}setDirty(t){this.isDirty=t}getDirty(){return this.isDirty}},Dg={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(vv,function(){var r=function(d){return d instanceof Uint8Array||d instanceof Uint16Array||d instanceof Uint32Array||d instanceof Int8Array||d instanceof Int16Array||d instanceof Int32Array||d instanceof Float32Array||d instanceof Float64Array||d instanceof Uint8ClampedArray},n=function(d,y){for(var I=Object.keys(y),G=0;G<I.length;++G)d[I[G]]=y[I[G]];return d},i=`
`;function o(d){return typeof atob<"u"?atob(d):"base64:"+d}function a(d){var y=new Error("(regl) "+d);throw console.error(y),y}function s(d,y){d||a(y)}function u(d){return d?": "+d:""}function l(d,y,I){d in y||a("unknown parameter ("+d+")"+u(I)+". possible values: "+Object.keys(y).join())}function f(d,y){r(d)||a("invalid parameter type"+u(y)+". must be a typed array")}function c(d,y){switch(y){case"number":return typeof d=="number";case"object":return typeof d=="object";case"string":return typeof d=="string";case"boolean":return typeof d=="boolean";case"function":return typeof d=="function";case"undefined":return typeof d>"u";case"symbol":return typeof d=="symbol"}}function h(d,y,I){c(d,y)||a("invalid parameter type"+u(I)+". expected "+y+", got "+typeof d)}function _(d,y){d>=0&&(d|0)===d||a("invalid parameter type, ("+d+")"+u(y)+". must be a nonnegative integer")}function m(d,y,I){y.indexOf(d)<0&&a("invalid value"+u(I)+". must be one of: "+y)}var E=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function S(d){Object.keys(d).forEach(function(y){E.indexOf(y)<0&&a('invalid regl constructor argument "'+y+'". must be one of '+E)})}function M(d,y){for(d=d+"";d.length<y;)d=" "+d;return d}function P(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function F(d,y){this.number=d,this.line=y,this.errors=[]}function V(d,y,I){this.file=d,this.line=y,this.message=I}function pe(){var d=new Error,y=(d.stack||d).toString(),I=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(y);if(I)return I[1];var G=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(y);return G?G[1]:"unknown"}function ce(){var d=new Error,y=(d.stack||d).toString(),I=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(y);if(I)return I[1];var G=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(y);return G?G[1]:"unknown"}function j(d,y){var I=d.split(`
`),G=1,re=0,$={unknown:new P,0:new P};$.unknown.name=$[0].name=y||pe(),$.unknown.lines.push(new F(0,""));for(var Q=0;Q<I.length;++Q){var me=I[Q],ge=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(me);if(ge)switch(ge[1]){case"line":var Re=/(\d+)(\s+\d+)?/.exec(ge[2]);Re&&(G=Re[1]|0,Re[2]&&(re=Re[2]|0,re in $||($[re]=new P)));break;case"define":var Ae=/SHADER_NAME(_B64)?\s+(.*)$/.exec(ge[2]);Ae&&($[re].name=Ae[1]?o(Ae[2]):Ae[2]);break}$[re].lines.push(new F(G++,me))}return Object.keys($).forEach(function(Te){var be=$[Te];be.lines.forEach(function(de){be.index[de.number]=de})}),$}function fe(d){var y=[];return d.split(`
`).forEach(function(I){if(!(I.length<5)){var G=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(I);G?y.push(new V(G[1]|0,G[2]|0,G[3].trim())):I.length>0&&y.push(new V("unknown",0,I))}}),y}function ze(d,y){y.forEach(function(I){var G=d[I.file];if(G){var re=G.index[I.line];if(re){re.errors.push(I),G.hasErrors=!0;return}}d.unknown.hasErrors=!0,d.unknown.lines[0].errors.push(I)})}function te(d,y,I,G,re){if(!d.getShaderParameter(y,d.COMPILE_STATUS)){var $=d.getShaderInfoLog(y),Q=G===d.FRAGMENT_SHADER?"fragment":"vertex";qe(I,"string",Q+" shader source must be a string",re);var me=j(I,re),ge=fe($);ze(me,ge),Object.keys(me).forEach(function(Re){var Ae=me[Re];if(!Ae.hasErrors)return;var Te=[""],be=[""];function de(Se,z){Te.push(Se),be.push(z||"")}de("file number "+Re+": "+Ae.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ae.lines.forEach(function(Se){if(Se.errors.length>0){de(M(Se.number,4)+"|  ","background-color:yellow; font-weight:bold"),de(Se.line+i,"color:red; background-color:yellow; font-weight:bold");var z=0;Se.errors.forEach(function(K){var ve=K.message,Ie=/^\s*'(.*)'\s*:\s*(.*)$/.exec(ve);if(Ie){var se=Ie[1];switch(ve=Ie[2],se){case"assign":se="=";break}z=Math.max(Se.line.indexOf(se,z),0)}else z=0;de(M("| ",6)),de(M("^^^",z+3)+i,"font-weight:bold"),de(M("| ",6)),de(ve+i,"font-weight:bold")}),de(M("| ",6)+i)}else de(M(Se.number,4)+"|  "),de(Se.line+i,"color:red")}),typeof document<"u"&&!window.chrome?(be[0]=Te.join("%c"),console.log.apply(console,be)):console.log(Te.join(""))}),s.raise("Error compiling "+Q+" shader, "+me[0].name)}}function k(d,y,I,G,re){if(!d.getProgramParameter(y,d.LINK_STATUS)){var $=d.getProgramInfoLog(y),Q=j(I,re),me=j(G,re),ge='Error linking program with vertex shader, "'+me[0].name+'", and fragment shader "'+Q[0].name+'"';typeof document<"u"?console.log("%c"+ge+i+"%c"+$,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(ge+i+$),s.raise(ge)}}function q(d){d._commandRef=pe()}function ne(d,y,I,G){q(d);function re(ge){return ge?G.id(ge):0}d._fragId=re(d.static.frag),d._vertId=re(d.static.vert);function $(ge,Re){Object.keys(Re).forEach(function(Ae){ge[G.id(Ae)]=!0})}var Q=d._uniformSet={};$(Q,y.static),$(Q,y.dynamic);var me=d._attributeSet={};$(me,I.static),$(me,I.dynamic),d._hasCount="count"in d.static||"count"in d.dynamic||"elements"in d.static||"elements"in d.dynamic}function xe(d,y){var I=ce();a(d+" in command "+(y||pe())+(I==="unknown"?"":" called from "+I))}function Fe(d,y,I){d||xe(y,I||pe())}function $e(d,y,I,G){d in y||xe("unknown parameter ("+d+")"+u(I)+". possible values: "+Object.keys(y).join(),G||pe())}function qe(d,y,I,G){c(d,y)||xe("invalid parameter type"+u(I)+". expected "+y+", got "+typeof d,G||pe())}function ut(d){d()}function He(d,y,I){d.texture?m(d.texture._texture.internalformat,y,"unsupported texture format for attachment"):m(d.renderbuffer._renderbuffer.format,I,"unsupported renderbuffer format for attachment")}var Ye=33071,pt=9728,St=9984,Ct=9985,Nt=9986,_t=9987,Rr=5120,Yr=5121,No=5122,je=5123,vt=5124,xt=5125,Ce=5126,tr=32819,Mt=32820,cr=33635,mr=34042,yr=36193,fr={};fr[Rr]=fr[Yr]=1,fr[No]=fr[je]=fr[yr]=fr[cr]=fr[tr]=fr[Mt]=2,fr[vt]=fr[xt]=fr[Ce]=fr[mr]=4;function Ci(d,y){return d===Mt||d===tr||d===cr?2:d===mr?4:fr[d]*y}function Qn(d){return!(d&d-1)&&!!d}function ju(d,y,I){var G,re=y.width,$=y.height,Q=y.channels;s(re>0&&re<=I.maxTextureSize&&$>0&&$<=I.maxTextureSize,"invalid texture shape"),(d.wrapS!==Ye||d.wrapT!==Ye)&&s(Qn(re)&&Qn($),"incompatible wrap mode for texture, both width and height must be power of 2"),y.mipmask===1?re!==1&&$!==1&&s(d.minFilter!==St&&d.minFilter!==Nt&&d.minFilter!==Ct&&d.minFilter!==_t,"min filter requires mipmap"):(s(Qn(re)&&Qn($),"texture must be a square power of 2 to support mipmapping"),s(y.mipmask===(re<<1)-1,"missing or incomplete mipmap data")),y.type===Ce&&(I.extensions.indexOf("oes_texture_float_linear")<0&&s(d.minFilter===pt&&d.magFilter===pt,"filter not supported, must enable oes_texture_float_linear"),s(!d.genMipmaps,"mipmap generation not supported with float textures"));var me=y.images;for(G=0;G<16;++G)if(me[G]){var ge=re>>G,Re=$>>G;s(y.mipmask&1<<G,"missing mipmap data");var Ae=me[G];if(s(Ae.width===ge&&Ae.height===Re,"invalid shape for mip images"),s(Ae.format===y.format&&Ae.internalformat===y.internalformat&&Ae.type===y.type,"incompatible type for mip image"),!Ae.compressed)if(Ae.data){var Te=Math.ceil(Ci(Ae.type,Q)*ge/Ae.unpackAlignment)*Ae.unpackAlignment;s(Ae.data.byteLength===Te*Re,"invalid data for image, buffer size is inconsistent with image format")}else Ae.element||Ae.copy}else d.genMipmaps||s((y.mipmask&1<<G)===0,"extra mipmap data");y.compressed&&s(!d.genMipmaps,"mipmap generation for compressed images not supported")}function Po(d,y,I,G){var re=d.width,$=d.height,Q=d.channels;s(re>0&&re<=G.maxTextureSize&&$>0&&$<=G.maxTextureSize,"invalid texture shape"),s(re===$,"cube map must be square"),s(y.wrapS===Ye&&y.wrapT===Ye,"wrap mode not supported by cube map");for(var me=0;me<I.length;++me){var ge=I[me];s(ge.width===re&&ge.height===$,"inconsistent cube map face shape"),y.genMipmaps&&(s(!ge.compressed,"can not generate mipmap for compressed textures"),s(ge.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Re=ge.images,Ae=0;Ae<16;++Ae){var Te=Re[Ae];if(Te){var be=re>>Ae,de=$>>Ae;s(ge.mipmask&1<<Ae,"missing mipmap data"),s(Te.width===be&&Te.height===de,"invalid shape for mip images"),s(Te.format===d.format&&Te.internalformat===d.internalformat&&Te.type===d.type,"incompatible type for mip image"),Te.compressed||(Te.data?s(Te.data.byteLength===be*de*Math.max(Ci(Te.type,Q),Te.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Te.element||Te.copy)}}}}var x=n(s,{optional:ut,raise:a,commandRaise:xe,command:Fe,parameter:l,commandParameter:$e,constructor:S,type:h,commandType:qe,isTypedArray:f,nni:_,oneOf:m,shaderError:te,linkError:k,callSite:ce,saveCommandRef:q,saveDrawInfo:ne,framebufferFormat:He,guessCommand:pe,texture2D:ju,textureCube:Po}),wg=0,Ug=0;function Ha(d,y){this.id=wg++,this.type=d,this.data=y}function Rf(d){return d.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Lo(d){if(d.length===0)return[];var y=d.charAt(0),I=d.charAt(d.length-1);if(d.length>1&&y===I&&(y==='"'||y==="'"))return['"'+Rf(d.substr(1,d.length-2))+'"'];var G=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(d);if(G)return Lo(d.substr(0,G.index)).concat(Lo(G[1])).concat(Lo(d.substr(G.index+G[0].length)));var re=d.split(".");if(re.length===1)return['"'+Rf(d)+'"'];for(var $=[],Q=0;Q<re.length;++Q)$=$.concat(Lo(re[Q]));return $}function bf(d){return"["+Lo(d).join("][")+"]"}function kg(d,y){return new Ha(d,bf(y+""))}function zg(d){return typeof d=="function"&&!d._reglType||d instanceof Ha}function Vg(d,y){return typeof d=="function"?new Ha(Ug,d):d}var nn={DynamicVariable:Ha,define:kg,isDynamic:zg,unbox:Vg,accessor:bf},Gu={next:typeof requestAnimationFrame=="function"?function(d){return requestAnimationFrame(d)}:function(d){return setTimeout(d,16)},cancel:typeof cancelAnimationFrame=="function"?function(d){return cancelAnimationFrame(d)}:clearTimeout},Cf=typeof performance<"u"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Wg(){var d={"":0},y=[""];return{id:function(I){var G=d[I];return G||(G=d[I]=y.length,y.push(I),G)},str:function(I){return y[I]}}}function Hg(d,y,I){var G=document.createElement("canvas");n(G.style,{border:0,margin:0,padding:0,top:0,left:0}),d.appendChild(G),d===document.body&&(G.style.position="absolute",n(d.style,{margin:0,padding:0}));function re(){var me=window.innerWidth,ge=window.innerHeight;if(d!==document.body){var Re=d.getBoundingClientRect();me=Re.right-Re.left,ge=Re.bottom-Re.top}G.width=I*me,G.height=I*ge,n(G.style,{width:me+"px",height:ge+"px"})}var $;d!==document.body&&typeof ResizeObserver=="function"?($=new ResizeObserver(function(){setTimeout(re)}),$.observe(d)):window.addEventListener("resize",re,!1);function Q(){$?$.disconnect():window.removeEventListener("resize",re),d.removeChild(G)}return re(),{canvas:G,onDestroy:Q}}function Xg(d,y){function I(G){try{return d.getContext(G,y)}catch{return null}}return I("webgl")||I("experimental-webgl")||I("webgl-experimental")}function jg(d){return typeof d.nodeName=="string"&&typeof d.appendChild=="function"&&typeof d.getBoundingClientRect=="function"}function Gg(d){return typeof d.drawArrays=="function"||typeof d.drawElements=="function"}function Of(d){return typeof d=="string"?d.split():(x(Array.isArray(d),"invalid extension array"),d)}function If(d){return typeof d=="string"?(x(typeof document<"u","not supported outside of DOM"),document.querySelector(d)):d}function $g(d){var y=d||{},I,G,re,$,Q={},me=[],ge=[],Re=typeof window>"u"?1:window.devicePixelRatio,Ae=!1,Te=function(Se){Se&&x.raise(Se)},be=function(){};if(typeof y=="string"?(x(typeof document<"u","selector queries only supported in DOM enviroments"),I=document.querySelector(y),x(I,"invalid query string for element")):typeof y=="object"?jg(y)?I=y:Gg(y)?($=y,re=$.canvas):(x.constructor(y),"gl"in y?$=y.gl:"canvas"in y?re=If(y.canvas):"container"in y&&(G=If(y.container)),"attributes"in y&&(Q=y.attributes,x.type(Q,"object","invalid context attributes")),"extensions"in y&&(me=Of(y.extensions)),"optionalExtensions"in y&&(ge=Of(y.optionalExtensions)),"onDone"in y&&(x.type(y.onDone,"function","invalid or missing onDone callback"),Te=y.onDone),"profile"in y&&(Ae=!!y.profile),"pixelRatio"in y&&(Re=+y.pixelRatio,x(Re>0,"invalid pixel ratio"))):x.raise("invalid arguments to regl"),I&&(I.nodeName.toLowerCase()==="canvas"?re=I:G=I),!$){if(!re){x(typeof document<"u","must manually specify webgl context outside of DOM environments");var de=Hg(G||document.body,Te,Re);if(!de)return null;re=de.canvas,be=de.onDestroy}Q.premultipliedAlpha===void 0&&(Q.premultipliedAlpha=!0),$=Xg(re,Q)}return $?{gl:$,canvas:re,container:G,extensions:me,optionalExtensions:ge,pixelRatio:Re,profile:Ae,onDone:Te,onDestroy:be}:(be(),Te("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Yg(d,y){var I={};function G(Q){x.type(Q,"string","extension name must be string");var me=Q.toLowerCase(),ge;try{ge=I[me]=d.getExtension(me)}catch{}return!!ge}for(var re=0;re<y.extensions.length;++re){var $=y.extensions[re];if(!G($))return y.onDestroy(),y.onDone('"'+$+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return y.optionalExtensions.forEach(G),{extensions:I,restore:function(){Object.keys(I).forEach(function(Q){if(I[Q]&&!G(Q))throw new Error("(regl): error restoring extension "+Q)})}}}function Vr(d,y){for(var I=Array(d),G=0;G<d;++G)I[G]=y(G);return I}var Zg=5120,Kg=5121,qg=5122,Qg=5123,Jg=5124,eE=5125,tE=5126;function rE(d){for(var y=16;y<=1<<28;y*=16)if(d<=y)return y;return 0}function Mf(d){var y,I;return y=(d>65535)<<4,d>>>=y,I=(d>255)<<3,d>>>=I,y|=I,I=(d>15)<<2,d>>>=I,y|=I,I=(d>3)<<1,d>>>=I,y|=I,y|d>>1}function Bf(){var d=Vr(8,function(){return[]});function y($){var Q=rE($),me=d[Mf(Q)>>2];return me.length>0?me.pop():new ArrayBuffer(Q)}function I($){d[Mf($.byteLength)>>2].push($)}function G($,Q){var me=null;switch($){case Zg:me=new Int8Array(y(Q),0,Q);break;case Kg:me=new Uint8Array(y(Q),0,Q);break;case qg:me=new Int16Array(y(2*Q),0,Q);break;case Qg:me=new Uint16Array(y(2*Q),0,Q);break;case Jg:me=new Int32Array(y(4*Q),0,Q);break;case eE:me=new Uint32Array(y(4*Q),0,Q);break;case tE:me=new Float32Array(y(4*Q),0,Q);break;default:return null}return me.length!==Q?me.subarray(0,Q):me}function re($){I($.buffer)}return{alloc:y,free:I,allocType:G,freeType:re}}var Zt=Bf();Zt.zero=Bf();var nE=3408,iE=3410,oE=3411,aE=3412,sE=3413,uE=3414,lE=3415,cE=33901,fE=33902,hE=3379,dE=3386,pE=34921,_E=36347,mE=36348,vE=35661,gE=35660,EE=34930,yE=36349,AE=34076,TE=34024,SE=7936,xE=7937,RE=7938,bE=35724,CE=34047,OE=36063,IE=34852,Xa=3553,Nf=34067,ME=34069,BE=33984,Do=6408,$u=5126,Pf=5121,Yu=36160,NE=36053,PE=36064,LE=16384,DE=function(d,y){var I=1;y.ext_texture_filter_anisotropic&&(I=d.getParameter(CE));var G=1,re=1;y.webgl_draw_buffers&&(G=d.getParameter(IE),re=d.getParameter(OE));var $=!!y.oes_texture_float;if($){var Q=d.createTexture();d.bindTexture(Xa,Q),d.texImage2D(Xa,0,Do,1,1,0,Do,$u,null);var me=d.createFramebuffer();if(d.bindFramebuffer(Yu,me),d.framebufferTexture2D(Yu,PE,Xa,Q,0),d.bindTexture(Xa,null),d.checkFramebufferStatus(Yu)!==NE)$=!1;else{d.viewport(0,0,1,1),d.clearColor(1,0,0,1),d.clear(LE);var ge=Zt.allocType($u,4);d.readPixels(0,0,1,1,Do,$u,ge),d.getError()?$=!1:(d.deleteFramebuffer(me),d.deleteTexture(Q),$=ge[0]===1),Zt.freeType(ge)}}var Re=typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ae=!0;if(!Re){var Te=d.createTexture(),be=Zt.allocType(Pf,36);d.activeTexture(BE),d.bindTexture(Nf,Te),d.texImage2D(ME,0,Do,3,3,0,Do,Pf,be),Zt.freeType(be),d.bindTexture(Nf,null),d.deleteTexture(Te),Ae=!d.getError()}return{colorBits:[d.getParameter(iE),d.getParameter(oE),d.getParameter(aE),d.getParameter(sE)],depthBits:d.getParameter(uE),stencilBits:d.getParameter(lE),subpixelBits:d.getParameter(nE),extensions:Object.keys(y).filter(function(de){return!!y[de]}),maxAnisotropic:I,maxDrawbuffers:G,maxColorAttachments:re,pointSizeDims:d.getParameter(cE),lineWidthDims:d.getParameter(fE),maxViewportDims:d.getParameter(dE),maxCombinedTextureUnits:d.getParameter(vE),maxCubeMapSize:d.getParameter(AE),maxRenderbufferSize:d.getParameter(TE),maxTextureUnits:d.getParameter(EE),maxTextureSize:d.getParameter(hE),maxAttributes:d.getParameter(pE),maxVertexUniforms:d.getParameter(_E),maxVertexTextureUnits:d.getParameter(gE),maxVaryingVectors:d.getParameter(mE),maxFragmentUniforms:d.getParameter(yE),glsl:d.getParameter(bE),renderer:d.getParameter(xE),vendor:d.getParameter(SE),version:d.getParameter(RE),readFloat:$,npotTextureCube:Ae}};function on(d){return!!d&&typeof d=="object"&&Array.isArray(d.shape)&&Array.isArray(d.stride)&&typeof d.offset=="number"&&d.shape.length===d.stride.length&&(Array.isArray(d.data)||r(d.data))}var Wr=function(d){return Object.keys(d).map(function(y){return d[y]})},ja={shape:kE,flatten:UE};function FE(d,y,I){for(var G=0;G<y;++G)I[G]=d[G]}function wE(d,y,I,G){for(var re=0,$=0;$<y;++$)for(var Q=d[$],me=0;me<I;++me)G[re++]=Q[me]}function Lf(d,y,I,G,re,$){for(var Q=$,me=0;me<y;++me)for(var ge=d[me],Re=0;Re<I;++Re)for(var Ae=ge[Re],Te=0;Te<G;++Te)re[Q++]=Ae[Te]}function Df(d,y,I,G,re){for(var $=1,Q=I+1;Q<y.length;++Q)$*=y[Q];var me=y[I];if(y.length-I===4){var ge=y[I+1],Re=y[I+2],Ae=y[I+3];for(Q=0;Q<me;++Q)Lf(d[Q],ge,Re,Ae,G,re),re+=$}else for(Q=0;Q<me;++Q)Df(d[Q],y,I+1,G,re),re+=$}function UE(d,y,I,G){var re=1;if(y.length)for(var $=0;$<y.length;++$)re*=y[$];else re=0;var Q=G||Zt.allocType(I,re);switch(y.length){case 0:break;case 1:FE(d,y[0],Q);break;case 2:wE(d,y[0],y[1],Q);break;case 3:Lf(d,y[0],y[1],y[2],Q,0);break;default:Df(d,y,0,Q,0)}return Q}function kE(d){for(var y=[],I=d;I.length;I=I[0])y.push(I.length);return y}var Zu={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},zE=5120,VE=5122,WE=5124,HE=5121,XE=5123,jE=5125,GE=5126,$E=5126,Jn={int8:zE,int16:VE,int32:WE,uint8:HE,uint16:XE,uint32:jE,float:GE,float32:$E},YE=35048,ZE=35040,Ga={dynamic:YE,stream:ZE,static:35044},Ku=ja.flatten,Ff=ja.shape,wf=35044,KE=35040,qu=5121,Qu=5126,Ln=[];Ln[5120]=1,Ln[5122]=2,Ln[5124]=4,Ln[5121]=1,Ln[5123]=2,Ln[5125]=4,Ln[5126]=4;function $a(d){return Zu[Object.prototype.toString.call(d)]|0}function Uf(d,y){for(var I=0;I<y.length;++I)d[I]=y[I]}function kf(d,y,I,G,re,$,Q){for(var me=0,ge=0;ge<I;++ge)for(var Re=0;Re<G;++Re)d[me++]=y[re*ge+$*Re+Q]}function qE(d,y,I,G){var re=0,$={};function Q(z){this.id=re++,this.buffer=d.createBuffer(),this.type=z,this.usage=wf,this.byteLength=0,this.dimension=1,this.dtype=qu,this.persistentData=null,I.profile&&(this.stats={size:0})}Q.prototype.bind=function(){d.bindBuffer(this.type,this.buffer)},Q.prototype.destroy=function(){be(this)};var me=[];function ge(z,K){var ve=me.pop();return ve||(ve=new Q(z)),ve.bind(),Te(ve,K,KE,0,1,!1),ve}function Re(z){me.push(z)}function Ae(z,K,ve){z.byteLength=K.byteLength,d.bufferData(z.type,K,ve)}function Te(z,K,ve,Ie,se,Le){var Ee;if(z.usage=ve,Array.isArray(K)){if(z.dtype=Ie||Qu,K.length>0){var Ne;if(Array.isArray(K[0])){Ee=Ff(K);for(var ue=1,Oe=1;Oe<Ee.length;++Oe)ue*=Ee[Oe];z.dimension=ue,Ne=Ku(K,Ee,z.dtype),Ae(z,Ne,ve),Le?z.persistentData=Ne:Zt.freeType(Ne)}else if(typeof K[0]=="number"){z.dimension=se;var Xe=Zt.allocType(z.dtype,K.length);Uf(Xe,K),Ae(z,Xe,ve),Le?z.persistentData=Xe:Zt.freeType(Xe)}else r(K[0])?(z.dimension=K[0].length,z.dtype=Ie||$a(K[0])||Qu,Ne=Ku(K,[K.length,K[0].length],z.dtype),Ae(z,Ne,ve),Le?z.persistentData=Ne:Zt.freeType(Ne)):x.raise("invalid buffer data")}}else if(r(K))z.dtype=Ie||$a(K),z.dimension=se,Ae(z,K,ve),Le&&(z.persistentData=new Uint8Array(new Uint8Array(K.buffer)));else if(on(K)){Ee=K.shape;var Qe=K.stride,Me=K.offset,ye=0,oe=0,Je=0,dt=0;Ee.length===1?(ye=Ee[0],oe=1,Je=Qe[0],dt=0):Ee.length===2?(ye=Ee[0],oe=Ee[1],Je=Qe[0],dt=Qe[1]):x.raise("invalid shape"),z.dtype=Ie||$a(K.data)||Qu,z.dimension=oe;var Ve=Zt.allocType(z.dtype,ye*oe);kf(Ve,K.data,ye,oe,Je,dt,Me),Ae(z,Ve,ve),Le?z.persistentData=Ve:Zt.freeType(Ve)}else K instanceof ArrayBuffer?(z.dtype=qu,z.dimension=se,Ae(z,K,ve),Le&&(z.persistentData=new Uint8Array(new Uint8Array(K)))):x.raise("invalid buffer data")}function be(z){y.bufferCount--,G(z);var K=z.buffer;x(K,"buffer must not be deleted already"),d.deleteBuffer(K),z.buffer=null,delete $[z.id]}function de(z,K,ve,Ie){y.bufferCount++;var se=new Q(K);$[se.id]=se;function Le(ue){var Oe=wf,Xe=null,Qe=0,Me=0,ye=1;return Array.isArray(ue)||r(ue)||on(ue)||ue instanceof ArrayBuffer?Xe=ue:typeof ue=="number"?Qe=ue|0:ue&&(x.type(ue,"object","buffer arguments must be an object, a number or an array"),"data"in ue&&(x(Xe===null||Array.isArray(Xe)||r(Xe)||on(Xe),"invalid data for buffer"),Xe=ue.data),"usage"in ue&&(x.parameter(ue.usage,Ga,"invalid buffer usage"),Oe=Ga[ue.usage]),"type"in ue&&(x.parameter(ue.type,Jn,"invalid buffer type"),Me=Jn[ue.type]),"dimension"in ue&&(x.type(ue.dimension,"number","invalid dimension"),ye=ue.dimension|0),"length"in ue&&(x.nni(Qe,"buffer length must be a nonnegative integer"),Qe=ue.length|0)),se.bind(),Xe?Te(se,Xe,Oe,Me,ye,Ie):(Qe&&d.bufferData(se.type,Qe,Oe),se.dtype=Me||qu,se.usage=Oe,se.dimension=ye,se.byteLength=Qe),I.profile&&(se.stats.size=se.byteLength*Ln[se.dtype]),Le}function Ee(ue,Oe){x(Oe+ue.byteLength<=se.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+ue.byteLength+" starting from offset "+Oe+" to a buffer of size "+se.byteLength),d.bufferSubData(se.type,Oe,ue)}function Ne(ue,Oe){var Xe=(Oe||0)|0,Qe;if(se.bind(),r(ue)||ue instanceof ArrayBuffer)Ee(ue,Xe);else if(Array.isArray(ue)){if(ue.length>0)if(typeof ue[0]=="number"){var Me=Zt.allocType(se.dtype,ue.length);Uf(Me,ue),Ee(Me,Xe),Zt.freeType(Me)}else if(Array.isArray(ue[0])||r(ue[0])){Qe=Ff(ue);var ye=Ku(ue,Qe,se.dtype);Ee(ye,Xe),Zt.freeType(ye)}else x.raise("invalid buffer data")}else if(on(ue)){Qe=ue.shape;var oe=ue.stride,Je=0,dt=0,Ve=0,at=0;Qe.length===1?(Je=Qe[0],dt=1,Ve=oe[0],at=0):Qe.length===2?(Je=Qe[0],dt=Qe[1],Ve=oe[0],at=oe[1]):x.raise("invalid shape");var et=Array.isArray(ue.data)?se.dtype:$a(ue.data),ot=Zt.allocType(et,Je*dt);kf(ot,ue.data,Je,dt,Ve,at,ue.offset),Ee(ot,Xe),Zt.freeType(ot)}else x.raise("invalid data for buffer subdata");return Le}return ve||Le(z),Le._reglType="buffer",Le._buffer=se,Le.subdata=Ne,I.profile&&(Le.stats=se.stats),Le.destroy=function(){be(se)},Le}function Se(){Wr($).forEach(function(z){z.buffer=d.createBuffer(),d.bindBuffer(z.type,z.buffer),d.bufferData(z.type,z.persistentData||z.byteLength,z.usage)})}return I.profile&&(y.getTotalBufferSize=function(){var z=0;return Object.keys($).forEach(function(K){z+=$[K].stats.size}),z}),{create:de,createStream:ge,destroyStream:Re,clear:function(){Wr($).forEach(be),me.forEach(be)},getBuffer:function(z){return z&&z._buffer instanceof Q?z._buffer:null},restore:Se,_initBuffer:Te}}var QE=0,JE=0,ey=1,ty=1,ry=4,ny=4,Oi={points:QE,point:JE,lines:ey,line:ty,triangles:ry,triangle:ny,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},iy=0,oy=1,Fo=4,ay=5120,Ii=5121,zf=5122,Mi=5123,Vf=5124,ei=5125,Ju=34963,sy=35040,uy=35044;function ly(d,y,I,G){var re={},$=0,Q={uint8:Ii,uint16:Mi};y.oes_element_index_uint&&(Q.uint32=ei);function me(Se){this.id=$++,re[this.id]=this,this.buffer=Se,this.primType=Fo,this.vertCount=0,this.type=0}me.prototype.bind=function(){this.buffer.bind()};var ge=[];function Re(Se){var z=ge.pop();return z||(z=new me(I.create(null,Ju,!0,!1)._buffer)),Te(z,Se,sy,-1,-1,0,0),z}function Ae(Se){ge.push(Se)}function Te(Se,z,K,ve,Ie,se,Le){Se.buffer.bind();var Ee;if(z){var Ne=Le;!Le&&(!r(z)||on(z)&&!r(z.data))&&(Ne=y.oes_element_index_uint?ei:Mi),I._initBuffer(Se.buffer,z,K,Ne,3)}else d.bufferData(Ju,se,K),Se.buffer.dtype=Ee||Ii,Se.buffer.usage=K,Se.buffer.dimension=3,Se.buffer.byteLength=se;if(Ee=Le,!Le){switch(Se.buffer.dtype){case Ii:case ay:Ee=Ii;break;case Mi:case zf:Ee=Mi;break;case ei:case Vf:Ee=ei;break;default:x.raise("unsupported type for element array")}Se.buffer.dtype=Ee}Se.type=Ee,x(Ee!==ei||!!y.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var ue=Ie;ue<0&&(ue=Se.buffer.byteLength,Ee===Mi?ue>>=1:Ee===ei&&(ue>>=2)),Se.vertCount=ue;var Oe=ve;if(ve<0){Oe=Fo;var Xe=Se.buffer.dimension;Xe===1&&(Oe=iy),Xe===2&&(Oe=oy),Xe===3&&(Oe=Fo)}Se.primType=Oe}function be(Se){G.elementsCount--,x(Se.buffer!==null,"must not double destroy elements"),delete re[Se.id],Se.buffer.destroy(),Se.buffer=null}function de(Se,z){var K=I.create(null,Ju,!0),ve=new me(K._buffer);G.elementsCount++;function Ie(se){if(!se)K(),ve.primType=Fo,ve.vertCount=0,ve.type=Ii;else if(typeof se=="number")K(se),ve.primType=Fo,ve.vertCount=se|0,ve.type=Ii;else{var Le=null,Ee=uy,Ne=-1,ue=-1,Oe=0,Xe=0;Array.isArray(se)||r(se)||on(se)?Le=se:(x.type(se,"object","invalid arguments for elements"),"data"in se&&(Le=se.data,x(Array.isArray(Le)||r(Le)||on(Le),"invalid data for element buffer")),"usage"in se&&(x.parameter(se.usage,Ga,"invalid element buffer usage"),Ee=Ga[se.usage]),"primitive"in se&&(x.parameter(se.primitive,Oi,"invalid element buffer primitive"),Ne=Oi[se.primitive]),"count"in se&&(x(typeof se.count=="number"&&se.count>=0,"invalid vertex count for elements"),ue=se.count|0),"type"in se&&(x.parameter(se.type,Q,"invalid buffer type"),Xe=Q[se.type]),"length"in se?Oe=se.length|0:(Oe=ue,Xe===Mi||Xe===zf?Oe*=2:(Xe===ei||Xe===Vf)&&(Oe*=4))),Te(ve,Le,Ee,Ne,ue,Oe,Xe)}return Ie}return Ie(Se),Ie._reglType="elements",Ie._elements=ve,Ie.subdata=function(se,Le){return K.subdata(se,Le),Ie},Ie.destroy=function(){be(ve)},Ie}return{create:de,createStream:Re,destroyStream:Ae,getElements:function(Se){return typeof Se=="function"&&Se._elements instanceof me?Se._elements:null},clear:function(){Wr(re).forEach(be)}}}var Wf=new Float32Array(1),cy=new Uint32Array(Wf.buffer),fy=5123;function Hf(d){for(var y=Zt.allocType(fy,d.length),I=0;I<d.length;++I)if(isNaN(d[I]))y[I]=65535;else if(d[I]===1/0)y[I]=31744;else if(d[I]===-1/0)y[I]=64512;else{Wf[0]=d[I];var G=cy[0],re=G>>>31<<15,$=(G<<1>>>24)-127,Q=G>>13&1023;if($<-24)y[I]=re;else if($<-14){var me=-14-$;y[I]=re+(Q+1024>>me)}else $>15?y[I]=re+31744:y[I]=re+($+15<<10)+Q}return y}function Gt(d){return Array.isArray(d)||r(d)}var Xf=function(d){return!(d&d-1)&&!!d},hy=34467,Tn=3553,jf=34067,Ya=34069,ti=6408,el=6406,Za=6407,wo=6409,Ka=6410,Gf=32854,tl=32855,$f=36194,dy=32819,py=32820,_y=33635,vy=34042,rl=6402,qa=34041,nl=35904,il=35906,Bi=36193,ol=33776,al=33777,sl=33778,ul=33779,Yf=35986,Zf=35987,Kf=34798,qf=35840,Qf=35841,Jf=35842,eh=35843,th=36196,Ni=5121,ll=5123,cl=5125,Uo=5126,gy=10242,Ey=10243,yy=10497,fl=33071,Ay=33648,Ty=10240,Sy=10241,hl=9728,xy=9729,dl=9984,rh=9985,nh=9986,pl=9987,Ry=33170,Qa=4352,by=4353,Cy=4354,Oy=34046,Iy=3317,My=37440,By=37441,Ny=37443,ih=37444,Ja=33984,Py=[dl,nh,rh,pl],es=[0,wo,Ka,Za,ti],Zr={};Zr[wo]=Zr[el]=Zr[rl]=1,Zr[qa]=Zr[Ka]=2,Zr[Za]=Zr[nl]=3,Zr[ti]=Zr[il]=4;function Pi(d){return"[object "+d+"]"}var oh=Pi("HTMLCanvasElement"),ah=Pi("OffscreenCanvas"),sh=Pi("CanvasRenderingContext2D"),uh=Pi("ImageBitmap"),lh=Pi("HTMLImageElement"),ch=Pi("HTMLVideoElement"),Ly=Object.keys(Zu).concat([oh,ah,sh,uh,lh,ch]),Li=[];Li[Ni]=1,Li[Uo]=4,Li[Bi]=2,Li[ll]=2,Li[cl]=4;var vr=[];vr[Gf]=2,vr[tl]=2,vr[$f]=2,vr[qa]=4,vr[ol]=.5,vr[al]=.5,vr[sl]=1,vr[ul]=1,vr[Yf]=.5,vr[Zf]=1,vr[Kf]=1,vr[qf]=.5,vr[Qf]=.25,vr[Jf]=.5,vr[eh]=.25,vr[th]=.5;function fh(d){return Array.isArray(d)&&(d.length===0||typeof d[0]=="number")}function hh(d){if(!Array.isArray(d))return!1;var y=d.length;return!(y===0||!Gt(d[0]))}function ri(d){return Object.prototype.toString.call(d)}function dh(d){return ri(d)===oh}function ph(d){return ri(d)===ah}function Dy(d){return ri(d)===sh}function Fy(d){return ri(d)===uh}function wy(d){return ri(d)===lh}function Uy(d){return ri(d)===ch}function _l(d){if(!d)return!1;var y=ri(d);return Ly.indexOf(y)>=0?!0:fh(d)||hh(d)||on(d)}function _h(d){return Zu[Object.prototype.toString.call(d)]|0}function ky(d,y){var I=y.length;switch(d.type){case Ni:case ll:case cl:case Uo:var G=Zt.allocType(d.type,I);G.set(y),d.data=G;break;case Bi:d.data=Hf(y);break;default:x.raise("unsupported texture type, must specify a typed array")}}function mh(d,y){return Zt.allocType(d.type===Bi?Uo:d.type,y)}function vh(d,y){d.type===Bi?(d.data=Hf(y),Zt.freeType(y)):d.data=y}function zy(d,y,I,G,re,$){for(var Q=d.width,me=d.height,ge=d.channels,Re=Q*me*ge,Ae=mh(d,Re),Te=0,be=0;be<me;++be)for(var de=0;de<Q;++de)for(var Se=0;Se<ge;++Se)Ae[Te++]=y[I*de+G*be+re*Se+$];vh(d,Ae)}function ts(d,y,I,G,re,$){var Q;if(typeof vr[d]<"u"?Q=vr[d]:Q=Zr[d]*Li[y],$&&(Q*=6),re){for(var me=0,ge=I;ge>=1;)me+=Q*ge*ge,ge/=2;return me}else return Q*I*G}function Vy(d,y,I,G,re,$,Q){var me={"don't care":Qa,"dont care":Qa,nice:Cy,fast:by},ge={repeat:yy,clamp:fl,mirror:Ay},Re={nearest:hl,linear:xy},Ae=n({mipmap:pl,"nearest mipmap nearest":dl,"linear mipmap nearest":rh,"nearest mipmap linear":nh,"linear mipmap linear":pl},Re),Te={none:0,browser:ih},be={uint8:Ni,rgba4:dy,rgb565:_y,"rgb5 a1":py},de={alpha:el,luminance:wo,"luminance alpha":Ka,rgb:Za,rgba:ti,rgba4:Gf,"rgb5 a1":tl,rgb565:$f},Se={};y.ext_srgb&&(de.srgb=nl,de.srgba=il),y.oes_texture_float&&(be.float32=be.float=Uo),y.oes_texture_half_float&&(be.float16=be["half float"]=Bi),y.webgl_depth_texture&&(n(de,{depth:rl,"depth stencil":qa}),n(be,{uint16:ll,uint32:cl,"depth stencil":vy})),y.webgl_compressed_texture_s3tc&&n(Se,{"rgb s3tc dxt1":ol,"rgba s3tc dxt1":al,"rgba s3tc dxt3":sl,"rgba s3tc dxt5":ul}),y.webgl_compressed_texture_atc&&n(Se,{"rgb atc":Yf,"rgba atc explicit alpha":Zf,"rgba atc interpolated alpha":Kf}),y.webgl_compressed_texture_pvrtc&&n(Se,{"rgb pvrtc 4bppv1":qf,"rgb pvrtc 2bppv1":Qf,"rgba pvrtc 4bppv1":Jf,"rgba pvrtc 2bppv1":eh}),y.webgl_compressed_texture_etc1&&(Se["rgb etc1"]=th);var z=Array.prototype.slice.call(d.getParameter(hy));Object.keys(Se).forEach(function(R){var Z=Se[R];z.indexOf(Z)>=0&&(de[R]=Z)});var K=Object.keys(de);I.textureFormats=K;var ve=[];Object.keys(de).forEach(function(R){var Z=de[R];ve[Z]=R});var Ie=[];Object.keys(be).forEach(function(R){var Z=be[R];Ie[Z]=R});var se=[];Object.keys(Re).forEach(function(R){var Z=Re[R];se[Z]=R});var Le=[];Object.keys(Ae).forEach(function(R){var Z=Ae[R];Le[Z]=R});var Ee=[];Object.keys(ge).forEach(function(R){var Z=ge[R];Ee[Z]=R});var Ne=K.reduce(function(R,Z){var W=de[Z];return W===wo||W===el||W===wo||W===Ka||W===rl||W===qa||y.ext_srgb&&(W===nl||W===il)?R[W]=W:W===tl||Z.indexOf("rgba")>=0?R[W]=ti:R[W]=Za,R},{});function ue(){this.internalformat=ti,this.format=ti,this.type=Ni,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=ih,this.width=0,this.height=0,this.channels=0}function Oe(R,Z){R.internalformat=Z.internalformat,R.format=Z.format,R.type=Z.type,R.compressed=Z.compressed,R.premultiplyAlpha=Z.premultiplyAlpha,R.flipY=Z.flipY,R.unpackAlignment=Z.unpackAlignment,R.colorSpace=Z.colorSpace,R.width=Z.width,R.height=Z.height,R.channels=Z.channels}function Xe(R,Z){if(!(typeof Z!="object"||!Z)){if("premultiplyAlpha"in Z&&(x.type(Z.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),R.premultiplyAlpha=Z.premultiplyAlpha),"flipY"in Z&&(x.type(Z.flipY,"boolean","invalid texture flip"),R.flipY=Z.flipY),"alignment"in Z&&(x.oneOf(Z.alignment,[1,2,4,8],"invalid texture unpack alignment"),R.unpackAlignment=Z.alignment),"colorSpace"in Z&&(x.parameter(Z.colorSpace,Te,"invalid colorSpace"),R.colorSpace=Te[Z.colorSpace]),"type"in Z){var W=Z.type;x(y.oes_texture_float||!(W==="float"||W==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),x(y.oes_texture_half_float||!(W==="half float"||W==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),x(y.webgl_depth_texture||!(W==="uint16"||W==="uint32"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),x.parameter(W,be,"invalid texture type"),R.type=be[W]}var De=R.width,st=R.height,wt=R.channels,g=!1;"shape"in Z?(x(Array.isArray(Z.shape)&&Z.shape.length>=2,"shape must be an array"),De=Z.shape[0],st=Z.shape[1],Z.shape.length===3&&(wt=Z.shape[2],x(wt>0&&wt<=4,"invalid number of channels"),g=!0),x(De>=0&&De<=I.maxTextureSize,"invalid width"),x(st>=0&&st<=I.maxTextureSize,"invalid height")):("radius"in Z&&(De=st=Z.radius,x(De>=0&&De<=I.maxTextureSize,"invalid radius")),"width"in Z&&(De=Z.width,x(De>=0&&De<=I.maxTextureSize,"invalid width")),"height"in Z&&(st=Z.height,x(st>=0&&st<=I.maxTextureSize,"invalid height")),"channels"in Z&&(wt=Z.channels,x(wt>0&&wt<=4,"invalid number of channels"),g=!0)),R.width=De|0,R.height=st|0,R.channels=wt|0;var T=!1;if("format"in Z){var O=Z.format;x(y.webgl_depth_texture||!(O==="depth"||O==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),x.parameter(O,de,"invalid texture format");var H=R.internalformat=de[O];R.format=Ne[H],O in be&&("type"in Z||(R.type=be[O])),O in Se&&(R.compressed=!0),T=!0}!g&&T?R.channels=Zr[R.format]:g&&!T?R.channels!==es[R.format]&&(R.format=R.internalformat=es[R.channels]):T&&g&&x(R.channels===Zr[R.format],"number of channels inconsistent with specified format")}}function Qe(R){d.pixelStorei(My,R.flipY),d.pixelStorei(By,R.premultiplyAlpha),d.pixelStorei(Ny,R.colorSpace),d.pixelStorei(Iy,R.unpackAlignment)}function Me(){ue.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ye(R,Z){var W=null;if(_l(Z)?W=Z:Z&&(x.type(Z,"object","invalid pixel data type"),Xe(R,Z),"x"in Z&&(R.xOffset=Z.x|0),"y"in Z&&(R.yOffset=Z.y|0),_l(Z.data)&&(W=Z.data)),x(!R.compressed||W instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),Z.copy){x(!W,"can not specify copy and data field for the same texture");var De=re.viewportWidth,st=re.viewportHeight;R.width=R.width||De-R.xOffset,R.height=R.height||st-R.yOffset,R.needsCopy=!0,x(R.xOffset>=0&&R.xOffset<De&&R.yOffset>=0&&R.yOffset<st&&R.width>0&&R.width<=De&&R.height>0&&R.height<=st,"copy texture read out of bounds")}else if(!W)R.width=R.width||1,R.height=R.height||1,R.channels=R.channels||4;else if(r(W))R.channels=R.channels||4,R.data=W,!("type"in Z)&&R.type===Ni&&(R.type=_h(W));else if(fh(W))R.channels=R.channels||4,ky(R,W),R.alignment=1,R.needsFree=!0;else if(on(W)){var wt=W.data;!Array.isArray(wt)&&R.type===Ni&&(R.type=_h(wt));var g=W.shape,T=W.stride,O,H,X,B,D,U;g.length===3?(X=g[2],U=T[2]):(x(g.length===2,"invalid ndarray pixel data, must be 2 or 3D"),X=1,U=1),O=g[0],H=g[1],B=T[0],D=T[1],R.alignment=1,R.width=O,R.height=H,R.channels=X,R.format=R.internalformat=es[X],R.needsFree=!0,zy(R,wt,B,D,U,W.offset)}else if(dh(W)||ph(W)||Dy(W))dh(W)||ph(W)?R.element=W:R.element=W.canvas,R.width=R.element.width,R.height=R.element.height,R.channels=4;else if(Fy(W))R.element=W,R.width=W.width,R.height=W.height,R.channels=4;else if(wy(W))R.element=W,R.width=W.naturalWidth,R.height=W.naturalHeight,R.channels=4;else if(Uy(W))R.element=W,R.width=W.videoWidth,R.height=W.videoHeight,R.channels=4;else if(hh(W)){var b=R.width||W[0].length,N=R.height||W.length,A=R.channels;Gt(W[0][0])?A=A||W[0][0].length:A=A||1;for(var L=ja.shape(W),Y=1,J=0;J<L.length;++J)Y*=L[J];var he=mh(R,Y);ja.flatten(W,L,"",he),vh(R,he),R.alignment=1,R.width=b,R.height=N,R.channels=A,R.format=R.internalformat=es[A],R.needsFree=!0}R.type===Uo?x(I.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):R.type===Bi&&x(I.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function oe(R,Z,W){var De=R.element,st=R.data,wt=R.internalformat,g=R.format,T=R.type,O=R.width,H=R.height;Qe(R),De?d.texImage2D(Z,W,g,g,T,De):R.compressed?d.compressedTexImage2D(Z,W,wt,O,H,0,st):R.needsCopy?(G(),d.copyTexImage2D(Z,W,g,R.xOffset,R.yOffset,O,H,0)):d.texImage2D(Z,W,g,O,H,0,g,T,st||null)}function Je(R,Z,W,De,st){var wt=R.element,g=R.data,T=R.internalformat,O=R.format,H=R.type,X=R.width,B=R.height;Qe(R),wt?d.texSubImage2D(Z,st,W,De,O,H,wt):R.compressed?d.compressedTexSubImage2D(Z,st,W,De,T,X,B,g):R.needsCopy?(G(),d.copyTexSubImage2D(Z,st,W,De,R.xOffset,R.yOffset,X,B)):d.texSubImage2D(Z,st,W,De,X,B,O,H,g)}var dt=[];function Ve(){return dt.pop()||new Me}function at(R){R.needsFree&&Zt.freeType(R.data),Me.call(R),dt.push(R)}function et(){ue.call(this),this.genMipmaps=!1,this.mipmapHint=Qa,this.mipmask=0,this.images=Array(16)}function ot(R,Z,W){var De=R.images[0]=Ve();R.mipmask=1,De.width=R.width=Z,De.height=R.height=W,De.channels=R.channels=4}function At(R,Z){var W=null;if(_l(Z))W=R.images[0]=Ve(),Oe(W,R),ye(W,Z),R.mipmask=1;else if(Xe(R,Z),Array.isArray(Z.mipmap))for(var De=Z.mipmap,st=0;st<De.length;++st)W=R.images[st]=Ve(),Oe(W,R),W.width>>=st,W.height>>=st,ye(W,De[st]),R.mipmask|=1<<st;else W=R.images[0]=Ve(),Oe(W,R),ye(W,Z),R.mipmask=1;Oe(R,R.images[0]),R.compressed&&(R.internalformat===ol||R.internalformat===al||R.internalformat===sl||R.internalformat===ul)&&x(R.width%4===0&&R.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function qt(R,Z){for(var W=R.images,De=0;De<W.length;++De){if(!W[De])return;oe(W[De],Z,De)}}var ar=[];function ct(){var R=ar.pop()||new et;ue.call(R),R.mipmask=0;for(var Z=0;Z<16;++Z)R.images[Z]=null;return R}function rr(R){for(var Z=R.images,W=0;W<Z.length;++W)Z[W]&&at(Z[W]),Z[W]=null;ar.push(R)}function Ut(){this.minFilter=hl,this.magFilter=hl,this.wrapS=fl,this.wrapT=fl,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Qa}function Qt(R,Z){if("min"in Z){var W=Z.min;x.parameter(W,Ae),R.minFilter=Ae[W],Py.indexOf(R.minFilter)>=0&&!("faces"in Z)&&(R.genMipmaps=!0)}if("mag"in Z){var De=Z.mag;x.parameter(De,Re),R.magFilter=Re[De]}var st=R.wrapS,wt=R.wrapT;if("wrap"in Z){var g=Z.wrap;typeof g=="string"?(x.parameter(g,ge),st=wt=ge[g]):Array.isArray(g)&&(x.parameter(g[0],ge),x.parameter(g[1],ge),st=ge[g[0]],wt=ge[g[1]])}else{if("wrapS"in Z){var T=Z.wrapS;x.parameter(T,ge),st=ge[T]}if("wrapT"in Z){var O=Z.wrapT;x.parameter(O,ge),wt=ge[O]}}if(R.wrapS=st,R.wrapT=wt,"anisotropic"in Z){var H=Z.anisotropic;x(typeof H=="number"&&H>=1&&H<=I.maxAnisotropic,"aniso samples must be between 1 and "),R.anisotropic=Z.anisotropic}if("mipmap"in Z){var X=!1;switch(typeof Z.mipmap){case"string":x.parameter(Z.mipmap,me,"invalid mipmap hint"),R.mipmapHint=me[Z.mipmap],R.genMipmaps=!0,X=!0;break;case"boolean":X=R.genMipmaps=Z.mipmap;break;case"object":x(Array.isArray(Z.mipmap),"invalid mipmap type"),R.genMipmaps=!1,X=!0;break;default:x.raise("invalid mipmap type")}X&&!("min"in Z)&&(R.minFilter=dl)}}function nr(R,Z){d.texParameteri(Z,Sy,R.minFilter),d.texParameteri(Z,Ty,R.magFilter),d.texParameteri(Z,gy,R.wrapS),d.texParameteri(Z,Ey,R.wrapT),y.ext_texture_filter_anisotropic&&d.texParameteri(Z,Oy,R.anisotropic),R.genMipmaps&&(d.hint(Ry,R.mipmapHint),d.generateMipmap(Z))}var ir=0,hr={},Ar=I.maxTextureUnits,or=Array(Ar).map(function(){return null});function nt(R){ue.call(this),this.mipmask=0,this.internalformat=ti,this.id=ir++,this.refCount=1,this.target=R,this.texture=d.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Ut,Q.profile&&(this.stats={size:0})}function gr(R){d.activeTexture(Ja),d.bindTexture(R.target,R.texture)}function bt(){var R=or[0];R?d.bindTexture(R.target,R.texture):d.bindTexture(Tn,null)}function Ze(R){var Z=R.texture;x(Z,"must not double destroy texture");var W=R.unit,De=R.target;W>=0&&(d.activeTexture(Ja+W),d.bindTexture(De,null),or[W]=null),d.deleteTexture(Z),R.texture=null,R.params=null,R.pixels=null,R.refCount=0,delete hr[R.id],$.textureCount--}n(nt.prototype,{bind:function(){var R=this;R.bindCount+=1;var Z=R.unit;if(Z<0){for(var W=0;W<Ar;++W){var De=or[W];if(De){if(De.bindCount>0)continue;De.unit=-1}or[W]=R,Z=W;break}Z>=Ar&&x.raise("insufficient number of texture units"),Q.profile&&$.maxTextureUnits<Z+1&&($.maxTextureUnits=Z+1),R.unit=Z,d.activeTexture(Ja+Z),d.bindTexture(R.target,R.texture)}return Z},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ze(this)}});function lt(R,Z){var W=new nt(Tn);hr[W.id]=W,$.textureCount++;function De(g,T){var O=W.texInfo;Ut.call(O);var H=ct();return typeof g=="number"?typeof T=="number"?ot(H,g|0,T|0):ot(H,g|0,g|0):g?(x.type(g,"object","invalid arguments to regl.texture"),Qt(O,g),At(H,g)):ot(H,1,1),O.genMipmaps&&(H.mipmask=(H.width<<1)-1),W.mipmask=H.mipmask,Oe(W,H),x.texture2D(O,H,I),W.internalformat=H.internalformat,De.width=H.width,De.height=H.height,gr(W),qt(H,Tn),nr(O,Tn),bt(),rr(H),Q.profile&&(W.stats.size=ts(W.internalformat,W.type,H.width,H.height,O.genMipmaps,!1)),De.format=ve[W.internalformat],De.type=Ie[W.type],De.mag=se[O.magFilter],De.min=Le[O.minFilter],De.wrapS=Ee[O.wrapS],De.wrapT=Ee[O.wrapT],De}function st(g,T,O,H){x(!!g,"must specify image data");var X=T|0,B=O|0,D=H|0,U=Ve();return Oe(U,W),U.width=0,U.height=0,ye(U,g),U.width=U.width||(W.width>>D)-X,U.height=U.height||(W.height>>D)-B,x(W.type===U.type&&W.format===U.format&&W.internalformat===U.internalformat,"incompatible format for texture.subimage"),x(X>=0&&B>=0&&X+U.width<=W.width&&B+U.height<=W.height,"texture.subimage write out of bounds"),x(W.mipmask&1<<D,"missing mipmap data"),x(U.data||U.element||U.needsCopy,"missing image data"),gr(W),Je(U,Tn,X,B,D),bt(),at(U),De}function wt(g,T){var O=g|0,H=T|0||O;if(O===W.width&&H===W.height)return De;De.width=W.width=O,De.height=W.height=H,gr(W);for(var X=0;W.mipmask>>X;++X){var B=O>>X,D=H>>X;if(!B||!D)break;d.texImage2D(Tn,X,W.format,B,D,0,W.format,W.type,null)}return bt(),Q.profile&&(W.stats.size=ts(W.internalformat,W.type,O,H,!1,!1)),De}return De(R,Z),De.subimage=st,De.resize=wt,De._reglType="texture2d",De._texture=W,Q.profile&&(De.stats=W.stats),De.destroy=function(){W.decRef()},De}function gt(R,Z,W,De,st,wt){var g=new nt(jf);hr[g.id]=g,$.cubeCount++;var T=new Array(6);function O(B,D,U,b,N,A){var L,Y=g.texInfo;for(Ut.call(Y),L=0;L<6;++L)T[L]=ct();if(typeof B=="number"||!B){var J=B|0||1;for(L=0;L<6;++L)ot(T[L],J,J)}else if(typeof B=="object")if(D)At(T[0],B),At(T[1],D),At(T[2],U),At(T[3],b),At(T[4],N),At(T[5],A);else if(Qt(Y,B),Xe(g,B),"faces"in B){var he=B.faces;for(x(Array.isArray(he)&&he.length===6,"cube faces must be a length 6 array"),L=0;L<6;++L)x(typeof he[L]=="object"&&!!he[L],"invalid input for cube map face"),Oe(T[L],g),At(T[L],he[L])}else for(L=0;L<6;++L)At(T[L],B);else x.raise("invalid arguments to cube map");for(Oe(g,T[0]),I.npotTextureCube||x(Xf(g.width)&&Xf(g.height),"your browser does not support non power or two texture dimensions"),Y.genMipmaps?g.mipmask=(T[0].width<<1)-1:g.mipmask=T[0].mipmask,x.textureCube(g,Y,T,I),g.internalformat=T[0].internalformat,O.width=T[0].width,O.height=T[0].height,gr(g),L=0;L<6;++L)qt(T[L],Ya+L);for(nr(Y,jf),bt(),Q.profile&&(g.stats.size=ts(g.internalformat,g.type,O.width,O.height,Y.genMipmaps,!0)),O.format=ve[g.internalformat],O.type=Ie[g.type],O.mag=se[Y.magFilter],O.min=Le[Y.minFilter],O.wrapS=Ee[Y.wrapS],O.wrapT=Ee[Y.wrapT],L=0;L<6;++L)rr(T[L]);return O}function H(B,D,U,b,N){x(!!D,"must specify image data"),x(typeof B=="number"&&B===(B|0)&&B>=0&&B<6,"invalid face");var A=U|0,L=b|0,Y=N|0,J=Ve();return Oe(J,g),J.width=0,J.height=0,ye(J,D),J.width=J.width||(g.width>>Y)-A,J.height=J.height||(g.height>>Y)-L,x(g.type===J.type&&g.format===J.format&&g.internalformat===J.internalformat,"incompatible format for texture.subimage"),x(A>=0&&L>=0&&A+J.width<=g.width&&L+J.height<=g.height,"texture.subimage write out of bounds"),x(g.mipmask&1<<Y,"missing mipmap data"),x(J.data||J.element||J.needsCopy,"missing image data"),gr(g),Je(J,Ya+B,A,L,Y),bt(),at(J),O}function X(B){var D=B|0;if(D!==g.width){O.width=g.width=D,O.height=g.height=D,gr(g);for(var U=0;U<6;++U)for(var b=0;g.mipmask>>b;++b)d.texImage2D(Ya+U,b,g.format,D>>b,D>>b,0,g.format,g.type,null);return bt(),Q.profile&&(g.stats.size=ts(g.internalformat,g.type,O.width,O.height,!1,!0)),O}}return O(R,Z,W,De,st,wt),O.subimage=H,O.resize=X,O._reglType="textureCube",O._texture=g,Q.profile&&(O.stats=g.stats),O.destroy=function(){g.decRef()},O}function $t(){for(var R=0;R<Ar;++R)d.activeTexture(Ja+R),d.bindTexture(Tn,null),or[R]=null;Wr(hr).forEach(Ze),$.cubeCount=0,$.textureCount=0}Q.profile&&($.getTotalTextureSize=function(){var R=0;return Object.keys(hr).forEach(function(Z){R+=hr[Z].stats.size}),R});function vn(){for(var R=0;R<Ar;++R){var Z=or[R];Z&&(Z.bindCount=0,Z.unit=-1,or[R]=null)}Wr(hr).forEach(function(W){W.texture=d.createTexture(),d.bindTexture(W.target,W.texture);for(var De=0;De<32;++De)if(W.mipmask&1<<De)if(W.target===Tn)d.texImage2D(Tn,De,W.internalformat,W.width>>De,W.height>>De,0,W.internalformat,W.type,null);else for(var st=0;st<6;++st)d.texImage2D(Ya+st,De,W.internalformat,W.width>>De,W.height>>De,0,W.internalformat,W.type,null);nr(W.texInfo,W.target)})}return{create2D:lt,createCube:gt,clear:$t,getTexture:function(R){return null},restore:vn}}var Dn=36161,rs=32854,gh=32855,Eh=36194,yh=33189,Ah=36168,Th=34041,Sh=35907,xh=34836,Rh=34842,bh=34843,an=[];an[rs]=2,an[gh]=2,an[Eh]=2,an[yh]=2,an[Ah]=1,an[Th]=4,an[Sh]=4,an[xh]=16,an[Rh]=8,an[bh]=6;function Ch(d,y,I){return an[d]*y*I}var Wy=function(d,y,I,G,re){var $={rgba4:rs,rgb565:Eh,"rgb5 a1":gh,depth:yh,stencil:Ah,"depth stencil":Th};y.ext_srgb&&($.srgba=Sh),y.ext_color_buffer_half_float&&($.rgba16f=Rh,$.rgb16f=bh),y.webgl_color_buffer_float&&($.rgba32f=xh);var Q=[];Object.keys($).forEach(function(de){var Se=$[de];Q[Se]=de});var me=0,ge={};function Re(de){this.id=me++,this.refCount=1,this.renderbuffer=de,this.format=rs,this.width=0,this.height=0,re.profile&&(this.stats={size:0})}Re.prototype.decRef=function(){--this.refCount<=0&&Ae(this)};function Ae(de){var Se=de.renderbuffer;x(Se,"must not double destroy renderbuffer"),d.bindRenderbuffer(Dn,null),d.deleteRenderbuffer(Se),de.renderbuffer=null,de.refCount=0,delete ge[de.id],G.renderbufferCount--}function Te(de,Se){var z=new Re(d.createRenderbuffer());ge[z.id]=z,G.renderbufferCount++;function K(Ie,se){var Le=0,Ee=0,Ne=rs;if(typeof Ie=="object"&&Ie){var ue=Ie;if("shape"in ue){var Oe=ue.shape;x(Array.isArray(Oe)&&Oe.length>=2,"invalid renderbuffer shape"),Le=Oe[0]|0,Ee=Oe[1]|0}else"radius"in ue&&(Le=Ee=ue.radius|0),"width"in ue&&(Le=ue.width|0),"height"in ue&&(Ee=ue.height|0);"format"in ue&&(x.parameter(ue.format,$,"invalid renderbuffer format"),Ne=$[ue.format])}else typeof Ie=="number"?(Le=Ie|0,typeof se=="number"?Ee=se|0:Ee=Le):Ie?x.raise("invalid arguments to renderbuffer constructor"):Le=Ee=1;if(x(Le>0&&Ee>0&&Le<=I.maxRenderbufferSize&&Ee<=I.maxRenderbufferSize,"invalid renderbuffer size"),!(Le===z.width&&Ee===z.height&&Ne===z.format))return K.width=z.width=Le,K.height=z.height=Ee,z.format=Ne,d.bindRenderbuffer(Dn,z.renderbuffer),d.renderbufferStorage(Dn,Ne,Le,Ee),x(d.getError()===0,"invalid render buffer format"),re.profile&&(z.stats.size=Ch(z.format,z.width,z.height)),K.format=Q[z.format],K}function ve(Ie,se){var Le=Ie|0,Ee=se|0||Le;return Le===z.width&&Ee===z.height||(x(Le>0&&Ee>0&&Le<=I.maxRenderbufferSize&&Ee<=I.maxRenderbufferSize,"invalid renderbuffer size"),K.width=z.width=Le,K.height=z.height=Ee,d.bindRenderbuffer(Dn,z.renderbuffer),d.renderbufferStorage(Dn,z.format,Le,Ee),x(d.getError()===0,"invalid render buffer format"),re.profile&&(z.stats.size=Ch(z.format,z.width,z.height))),K}return K(de,Se),K.resize=ve,K._reglType="renderbuffer",K._renderbuffer=z,re.profile&&(K.stats=z.stats),K.destroy=function(){z.decRef()},K}re.profile&&(G.getTotalRenderbufferSize=function(){var de=0;return Object.keys(ge).forEach(function(Se){de+=ge[Se].stats.size}),de});function be(){Wr(ge).forEach(function(de){de.renderbuffer=d.createRenderbuffer(),d.bindRenderbuffer(Dn,de.renderbuffer),d.renderbufferStorage(Dn,de.format,de.width,de.height)}),d.bindRenderbuffer(Dn,null)}return{create:Te,clear:function(){Wr(ge).forEach(Ae)},restore:be}},Sn=36160,ml=36161,ni=3553,ns=34069,Oh=36064,Ih=36096,Mh=36128,Bh=33306,Nh=36053,Hy=36054,Xy=36055,jy=36057,Gy=36061,$y=36193,Yy=5121,Zy=5126,Ph=6407,Lh=6408,Ky=6402,qy=[Ph,Lh],vl=[];vl[Lh]=4,vl[Ph]=3;var is=[];is[Yy]=1,is[Zy]=4,is[$y]=2;var Qy=32854,Jy=32855,e1=36194,t1=33189,r1=36168,Dh=34041,n1=35907,i1=34836,o1=34842,a1=34843,s1=[Qy,Jy,e1,n1,o1,a1,i1],Di={};Di[Nh]="complete",Di[Hy]="incomplete attachment",Di[jy]="incomplete dimensions",Di[Xy]="incomplete, missing attachment",Di[Gy]="unsupported";function u1(d,y,I,G,re,$){var Q={cur:null,next:null,dirty:!1,setFBO:null},me=["rgba"],ge=["rgba4","rgb565","rgb5 a1"];y.ext_srgb&&ge.push("srgba"),y.ext_color_buffer_half_float&&ge.push("rgba16f","rgb16f"),y.webgl_color_buffer_float&&ge.push("rgba32f");var Re=["uint8"];y.oes_texture_half_float&&Re.push("half float","float16"),y.oes_texture_float&&Re.push("float","float32");function Ae(Me,ye,oe){this.target=Me,this.texture=ye,this.renderbuffer=oe;var Je=0,dt=0;ye?(Je=ye.width,dt=ye.height):oe&&(Je=oe.width,dt=oe.height),this.width=Je,this.height=dt}function Te(Me){Me&&(Me.texture&&Me.texture._texture.decRef(),Me.renderbuffer&&Me.renderbuffer._renderbuffer.decRef())}function be(Me,ye,oe){if(Me)if(Me.texture){var Je=Me.texture._texture,dt=Math.max(1,Je.width),Ve=Math.max(1,Je.height);x(dt===ye&&Ve===oe,"inconsistent width/height for supplied texture"),Je.refCount+=1}else{var at=Me.renderbuffer._renderbuffer;x(at.width===ye&&at.height===oe,"inconsistent width/height for renderbuffer"),at.refCount+=1}}function de(Me,ye){ye&&(ye.texture?d.framebufferTexture2D(Sn,Me,ye.target,ye.texture._texture.texture,0):d.framebufferRenderbuffer(Sn,Me,ml,ye.renderbuffer._renderbuffer.renderbuffer))}function Se(Me){var ye=ni,oe=null,Je=null,dt=Me;typeof Me=="object"&&(dt=Me.data,"target"in Me&&(ye=Me.target|0)),x.type(dt,"function","invalid attachment data");var Ve=dt._reglType;return Ve==="texture2d"?(oe=dt,x(ye===ni)):Ve==="textureCube"?(oe=dt,x(ye>=ns&&ye<ns+6,"invalid cube map target")):Ve==="renderbuffer"?(Je=dt,ye=ml):x.raise("invalid regl object for attachment"),new Ae(ye,oe,Je)}function z(Me,ye,oe,Je,dt){if(oe){var Ve=G.create2D({width:Me,height:ye,format:Je,type:dt});return Ve._texture.refCount=0,new Ae(ni,Ve,null)}else{var at=re.create({width:Me,height:ye,format:Je});return at._renderbuffer.refCount=0,new Ae(ml,null,at)}}function K(Me){return Me&&(Me.texture||Me.renderbuffer)}function ve(Me,ye,oe){Me&&(Me.texture?Me.texture.resize(ye,oe):Me.renderbuffer&&Me.renderbuffer.resize(ye,oe),Me.width=ye,Me.height=oe)}var Ie=0,se={};function Le(){this.id=Ie++,se[this.id]=this,this.framebuffer=d.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ee(Me){Me.colorAttachments.forEach(Te),Te(Me.depthAttachment),Te(Me.stencilAttachment),Te(Me.depthStencilAttachment)}function Ne(Me){var ye=Me.framebuffer;x(ye,"must not double destroy framebuffer"),d.deleteFramebuffer(ye),Me.framebuffer=null,$.framebufferCount--,delete se[Me.id]}function ue(Me){var ye;d.bindFramebuffer(Sn,Me.framebuffer);var oe=Me.colorAttachments;for(ye=0;ye<oe.length;++ye)de(Oh+ye,oe[ye]);for(ye=oe.length;ye<I.maxColorAttachments;++ye)d.framebufferTexture2D(Sn,Oh+ye,ni,null,0);d.framebufferTexture2D(Sn,Bh,ni,null,0),d.framebufferTexture2D(Sn,Ih,ni,null,0),d.framebufferTexture2D(Sn,Mh,ni,null,0),de(Ih,Me.depthAttachment),de(Mh,Me.stencilAttachment),de(Bh,Me.depthStencilAttachment);var Je=d.checkFramebufferStatus(Sn);!d.isContextLost()&&Je!==Nh&&x.raise("framebuffer configuration not supported, status = "+Di[Je]),d.bindFramebuffer(Sn,Q.next?Q.next.framebuffer:null),Q.cur=Q.next,d.getError()}function Oe(Me,ye){var oe=new Le;$.framebufferCount++;function Je(Ve,at){var et;x(Q.next!==oe,"can not update framebuffer which is currently in use");var ot=0,At=0,qt=!0,ar=!0,ct=null,rr=!0,Ut="rgba",Qt="uint8",nr=1,ir=null,hr=null,Ar=null,or=!1;if(typeof Ve=="number")ot=Ve|0,At=at|0||ot;else if(!Ve)ot=At=1;else{x.type(Ve,"object","invalid arguments for framebuffer");var nt=Ve;if("shape"in nt){var gr=nt.shape;x(Array.isArray(gr)&&gr.length>=2,"invalid shape for framebuffer"),ot=gr[0],At=gr[1]}else"radius"in nt&&(ot=At=nt.radius),"width"in nt&&(ot=nt.width),"height"in nt&&(At=nt.height);("color"in nt||"colors"in nt)&&(ct=nt.color||nt.colors,Array.isArray(ct)&&x(ct.length===1||y.webgl_draw_buffers,"multiple render targets not supported")),ct||("colorCount"in nt&&(nr=nt.colorCount|0,x(nr>0,"invalid color buffer count")),"colorTexture"in nt&&(rr=!!nt.colorTexture,Ut="rgba4"),"colorType"in nt&&(Qt=nt.colorType,rr?(x(y.oes_texture_float||!(Qt==="float"||Qt==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),x(y.oes_texture_half_float||!(Qt==="half float"||Qt==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Qt==="half float"||Qt==="float16"?(x(y.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Ut="rgba16f"):(Qt==="float"||Qt==="float32")&&(x(y.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Ut="rgba32f"),x.oneOf(Qt,Re,"invalid color type")),"colorFormat"in nt&&(Ut=nt.colorFormat,me.indexOf(Ut)>=0?rr=!0:ge.indexOf(Ut)>=0?rr=!1:rr?x.oneOf(nt.colorFormat,me,"invalid color format for texture"):x.oneOf(nt.colorFormat,ge,"invalid color format for renderbuffer"))),("depthTexture"in nt||"depthStencilTexture"in nt)&&(or=!!(nt.depthTexture||nt.depthStencilTexture),x(!or||y.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in nt&&(typeof nt.depth=="boolean"?qt=nt.depth:(ir=nt.depth,ar=!1)),"stencil"in nt&&(typeof nt.stencil=="boolean"?ar=nt.stencil:(hr=nt.stencil,qt=!1)),"depthStencil"in nt&&(typeof nt.depthStencil=="boolean"?qt=ar=nt.depthStencil:(Ar=nt.depthStencil,qt=!1,ar=!1))}var bt=null,Ze=null,lt=null,gt=null;if(Array.isArray(ct))bt=ct.map(Se);else if(ct)bt=[Se(ct)];else for(bt=new Array(nr),et=0;et<nr;++et)bt[et]=z(ot,At,rr,Ut,Qt);x(y.webgl_draw_buffers||bt.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),x(bt.length<=I.maxColorAttachments,"too many color attachments, not supported"),ot=ot||bt[0].width,At=At||bt[0].height,ir?Ze=Se(ir):qt&&!ar&&(Ze=z(ot,At,or,"depth","uint32")),hr?lt=Se(hr):ar&&!qt&&(lt=z(ot,At,!1,"stencil","uint8")),Ar?gt=Se(Ar):!ir&&!hr&&ar&&qt&&(gt=z(ot,At,or,"depth stencil","depth stencil")),x(!!ir+!!hr+!!Ar<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var $t=null;for(et=0;et<bt.length;++et)if(be(bt[et],ot,At),x(!bt[et]||bt[et].texture&&qy.indexOf(bt[et].texture._texture.format)>=0||bt[et].renderbuffer&&s1.indexOf(bt[et].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+et+" is invalid"),bt[et]&&bt[et].texture){var vn=vl[bt[et].texture._texture.format]*is[bt[et].texture._texture.type];$t===null?$t=vn:x($t===vn,"all color attachments much have the same number of bits per pixel.")}return be(Ze,ot,At),x(!Ze||Ze.texture&&Ze.texture._texture.format===Ky||Ze.renderbuffer&&Ze.renderbuffer._renderbuffer.format===t1,"invalid depth attachment for framebuffer object"),be(lt,ot,At),x(!lt||lt.renderbuffer&&lt.renderbuffer._renderbuffer.format===r1,"invalid stencil attachment for framebuffer object"),be(gt,ot,At),x(!gt||gt.texture&&gt.texture._texture.format===Dh||gt.renderbuffer&&gt.renderbuffer._renderbuffer.format===Dh,"invalid depth-stencil attachment for framebuffer object"),Ee(oe),oe.width=ot,oe.height=At,oe.colorAttachments=bt,oe.depthAttachment=Ze,oe.stencilAttachment=lt,oe.depthStencilAttachment=gt,Je.color=bt.map(K),Je.depth=K(Ze),Je.stencil=K(lt),Je.depthStencil=K(gt),Je.width=oe.width,Je.height=oe.height,ue(oe),Je}function dt(Ve,at){x(Q.next!==oe,"can not resize a framebuffer which is currently in use");var et=Math.max(Ve|0,1),ot=Math.max(at|0||et,1);if(et===oe.width&&ot===oe.height)return Je;for(var At=oe.colorAttachments,qt=0;qt<At.length;++qt)ve(At[qt],et,ot);return ve(oe.depthAttachment,et,ot),ve(oe.stencilAttachment,et,ot),ve(oe.depthStencilAttachment,et,ot),oe.width=Je.width=et,oe.height=Je.height=ot,ue(oe),Je}return Je(Me,ye),n(Je,{resize:dt,_reglType:"framebuffer",_framebuffer:oe,destroy:function(){Ne(oe),Ee(oe)},use:function(Ve){Q.setFBO({framebuffer:Je},Ve)}})}function Xe(Me){var ye=Array(6);function oe(dt){var Ve;x(ye.indexOf(Q.next)<0,"can not update framebuffer which is currently in use");var at={color:null},et=0,ot=null,At="rgba",qt="uint8",ar=1;if(typeof dt=="number")et=dt|0;else if(!dt)et=1;else{x.type(dt,"object","invalid arguments for framebuffer");var ct=dt;if("shape"in ct){var rr=ct.shape;x(Array.isArray(rr)&&rr.length>=2,"invalid shape for framebuffer"),x(rr[0]===rr[1],"cube framebuffer must be square"),et=rr[0]}else"radius"in ct&&(et=ct.radius|0),"width"in ct?(et=ct.width|0,"height"in ct&&x(ct.height===et,"must be square")):"height"in ct&&(et=ct.height|0);("color"in ct||"colors"in ct)&&(ot=ct.color||ct.colors,Array.isArray(ot)&&x(ot.length===1||y.webgl_draw_buffers,"multiple render targets not supported")),ot||("colorCount"in ct&&(ar=ct.colorCount|0,x(ar>0,"invalid color buffer count")),"colorType"in ct&&(x.oneOf(ct.colorType,Re,"invalid color type"),qt=ct.colorType),"colorFormat"in ct&&(At=ct.colorFormat,x.oneOf(ct.colorFormat,me,"invalid color format for texture"))),"depth"in ct&&(at.depth=ct.depth),"stencil"in ct&&(at.stencil=ct.stencil),"depthStencil"in ct&&(at.depthStencil=ct.depthStencil)}var Ut;if(ot)if(Array.isArray(ot))for(Ut=[],Ve=0;Ve<ot.length;++Ve)Ut[Ve]=ot[Ve];else Ut=[ot];else{Ut=Array(ar);var Qt={radius:et,format:At,type:qt};for(Ve=0;Ve<ar;++Ve)Ut[Ve]=G.createCube(Qt)}for(at.color=Array(Ut.length),Ve=0;Ve<Ut.length;++Ve){var nr=Ut[Ve];x(typeof nr=="function"&&nr._reglType==="textureCube","invalid cube map"),et=et||nr.width,x(nr.width===et&&nr.height===et,"invalid cube map shape"),at.color[Ve]={target:ns,data:Ut[Ve]}}for(Ve=0;Ve<6;++Ve){for(var ir=0;ir<Ut.length;++ir)at.color[ir].target=ns+Ve;Ve>0&&(at.depth=ye[0].depth,at.stencil=ye[0].stencil,at.depthStencil=ye[0].depthStencil),ye[Ve]?ye[Ve](at):ye[Ve]=Oe(at)}return n(oe,{width:et,height:et,color:Ut})}function Je(dt){var Ve,at=dt|0;if(x(at>0&&at<=I.maxCubeMapSize,"invalid radius for cube fbo"),at===oe.width)return oe;var et=oe.color;for(Ve=0;Ve<et.length;++Ve)et[Ve].resize(at);for(Ve=0;Ve<6;++Ve)ye[Ve].resize(at);return oe.width=oe.height=at,oe}return oe(Me),n(oe,{faces:ye,resize:Je,_reglType:"framebufferCube",destroy:function(){ye.forEach(function(dt){dt.destroy()})}})}function Qe(){Q.cur=null,Q.next=null,Q.dirty=!0,Wr(se).forEach(function(Me){Me.framebuffer=d.createFramebuffer(),ue(Me)})}return n(Q,{getFramebuffer:function(Me){if(typeof Me=="function"&&Me._reglType==="framebuffer"){var ye=Me._framebuffer;if(ye instanceof Le)return ye}return null},create:Oe,createCube:Xe,clear:function(){Wr(se).forEach(Ne)},restore:Qe})}var l1=5126,Fh=34962;function gl(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=l1,this.offset=0,this.stride=0,this.divisor=0}function c1(d,y,I,G,re){for(var $=I.maxAttributes,Q=new Array($),me=0;me<$;++me)Q[me]=new gl;var ge=0,Re={},Ae={Record:gl,scope:{},state:Q,currentVAO:null,targetVAO:null,restore:be()?se:function(){},createVAO:Le,getVAO:Se,destroyBuffer:Te,setVAO:be()?z:K,clear:be()?ve:function(){}};function Te(Ee){for(var Ne=0;Ne<Q.length;++Ne){var ue=Q[Ne];ue.buffer===Ee&&(d.disableVertexAttribArray(Ne),ue.buffer=null)}}function be(){return y.oes_vertex_array_object}function de(){return y.angle_instanced_arrays}function Se(Ee){return typeof Ee=="function"&&Ee._vao?Ee._vao:null}function z(Ee){if(Ee!==Ae.currentVAO){var Ne=be();Ee?Ne.bindVertexArrayOES(Ee.vao):Ne.bindVertexArrayOES(null),Ae.currentVAO=Ee}}function K(Ee){if(Ee!==Ae.currentVAO){if(Ee)Ee.bindAttrs();else for(var Ne=de(),ue=0;ue<Q.length;++ue){var Oe=Q[ue];Oe.buffer?(d.enableVertexAttribArray(ue),d.vertexAttribPointer(ue,Oe.size,Oe.type,Oe.normalized,Oe.stride,Oe.offfset),Ne&&Ne.vertexAttribDivisorANGLE(ue,Oe.divisor)):(d.disableVertexAttribArray(ue),d.vertexAttrib4f(ue,Oe.x,Oe.y,Oe.z,Oe.w))}Ae.currentVAO=Ee}}function ve(){Wr(Re).forEach(function(Ee){Ee.destroy()})}function Ie(){this.id=++ge,this.attributes=[];var Ee=be();Ee?this.vao=Ee.createVertexArrayOES():this.vao=null,Re[this.id]=this,this.buffers=[]}Ie.prototype.bindAttrs=function(){for(var Ee=de(),Ne=this.attributes,ue=0;ue<Ne.length;++ue){var Oe=Ne[ue];Oe.buffer?(d.enableVertexAttribArray(ue),d.bindBuffer(Fh,Oe.buffer.buffer),d.vertexAttribPointer(ue,Oe.size,Oe.type,Oe.normalized,Oe.stride,Oe.offset),Ee&&Ee.vertexAttribDivisorANGLE(ue,Oe.divisor)):(d.disableVertexAttribArray(ue),d.vertexAttrib4f(ue,Oe.x,Oe.y,Oe.z,Oe.w))}for(var Xe=Ne.length;Xe<$;++Xe)d.disableVertexAttribArray(Xe)},Ie.prototype.refresh=function(){var Ee=be();Ee&&(Ee.bindVertexArrayOES(this.vao),this.bindAttrs(),Ae.currentVAO=this)},Ie.prototype.destroy=function(){if(this.vao){var Ee=be();this===Ae.currentVAO&&(Ae.currentVAO=null,Ee.bindVertexArrayOES(null)),Ee.deleteVertexArrayOES(this.vao),this.vao=null}Re[this.id]&&(delete Re[this.id],G.vaoCount-=1)};function se(){var Ee=be();Ee&&Wr(Re).forEach(function(Ne){Ne.refresh()})}function Le(Ee){var Ne=new Ie;G.vaoCount+=1;function ue(Oe){x(Array.isArray(Oe),"arguments to vertex array constructor must be an array"),x(Oe.length<$,"too many attributes"),x(Oe.length>0,"must specify at least one attribute");for(var Xe=0;Xe<Ne.buffers.length;++Xe)Ne.buffers[Xe].destroy();Ne.buffers.length=0;var Qe=Ne.attributes;Qe.length=Oe.length;for(var Me=0;Me<Oe.length;++Me){var ye=Oe[Me],oe=Qe[Me]=new gl;if(Array.isArray(ye)||r(ye)||on(ye)){var Je=re.create(ye,Fh,!1,!0);oe.buffer=re.getBuffer(Je),oe.size=oe.buffer.dimension|0,oe.normalized=!1,oe.type=oe.buffer.dtype,oe.offset=0,oe.stride=0,oe.divisor=0,oe.state=1,Ne.buffers.push(Je)}else re.getBuffer(ye)?(oe.buffer=re.getBuffer(ye),oe.size=oe.buffer.dimension|0,oe.normalized=!1,oe.type=oe.buffer.dtype,oe.offset=0,oe.stride=0,oe.divisor=0,oe.state=1):re.getBuffer(ye.buffer)?(oe.buffer=re.getBuffer(ye.buffer),oe.size=(+ye.size||oe.buffer.dimension)|0,oe.normalized=!!ye.normalized||!1,"type"in ye?(x.parameter(ye.type,Jn,"invalid buffer type"),oe.type=Jn[ye.type]):oe.type=oe.buffer.dtype,oe.offset=(ye.offset||0)|0,oe.stride=(ye.stride||0)|0,oe.divisor=(ye.divisor||0)|0,oe.state=1,x(oe.size>=1&&oe.size<=4,"size must be between 1 and 4"),x(oe.offset>=0,"invalid offset"),x(oe.stride>=0&&oe.stride<=255,"stride must be between 0 and 255"),x(oe.divisor>=0,"divisor must be positive"),x(!oe.divisor||!!y.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ye?(x(Me>0,"first attribute must not be a constant"),oe.x=+ye.x||0,oe.y=+ye.y||0,oe.z=+ye.z||0,oe.w=+ye.w||0,oe.state=2):x(!1,"invalid attribute spec for location "+Me)}return Ne.refresh(),ue}return ue.destroy=function(){Ne.destroy()},ue._vao=Ne,ue._reglType="vao",ue(Ee)}return Ae}var wh=35632,f1=35633,h1=35718,d1=35721;function p1(d,y,I,G){var re={},$={};function Q(z,K,ve,Ie){this.name=z,this.id=K,this.location=ve,this.info=Ie}function me(z,K){for(var ve=0;ve<z.length;++ve)if(z[ve].id===K.id){z[ve].location=K.location;return}z.push(K)}function ge(z,K,ve){var Ie=z===wh?re:$,se=Ie[K];if(!se){var Le=y.str(K);se=d.createShader(z),d.shaderSource(se,Le),d.compileShader(se),x.shaderError(d,se,Le,z,ve),Ie[K]=se}return se}var Re={},Ae=[],Te=0;function be(z,K){this.id=Te++,this.fragId=z,this.vertId=K,this.program=null,this.uniforms=[],this.attributes=[],G.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function de(z,K,ve){var Ie,se,Le=ge(wh,z.fragId),Ee=ge(f1,z.vertId),Ne=z.program=d.createProgram();if(d.attachShader(Ne,Le),d.attachShader(Ne,Ee),ve)for(Ie=0;Ie<ve.length;++Ie){var ue=ve[Ie];d.bindAttribLocation(Ne,ue[0],ue[1])}d.linkProgram(Ne),x.linkError(d,Ne,y.str(z.fragId),y.str(z.vertId),K);var Oe=d.getProgramParameter(Ne,h1);G.profile&&(z.stats.uniformsCount=Oe);var Xe=z.uniforms;for(Ie=0;Ie<Oe;++Ie)if(se=d.getActiveUniform(Ne,Ie),se)if(se.size>1)for(var Qe=0;Qe<se.size;++Qe){var Me=se.name.replace("[0]","["+Qe+"]");me(Xe,new Q(Me,y.id(Me),d.getUniformLocation(Ne,Me),se))}else me(Xe,new Q(se.name,y.id(se.name),d.getUniformLocation(Ne,se.name),se));var ye=d.getProgramParameter(Ne,d1);G.profile&&(z.stats.attributesCount=ye);var oe=z.attributes;for(Ie=0;Ie<ye;++Ie)se=d.getActiveAttrib(Ne,Ie),se&&me(oe,new Q(se.name,y.id(se.name),d.getAttribLocation(Ne,se.name),se))}G.profile&&(I.getMaxUniformsCount=function(){var z=0;return Ae.forEach(function(K){K.stats.uniformsCount>z&&(z=K.stats.uniformsCount)}),z},I.getMaxAttributesCount=function(){var z=0;return Ae.forEach(function(K){K.stats.attributesCount>z&&(z=K.stats.attributesCount)}),z});function Se(){re={},$={};for(var z=0;z<Ae.length;++z)de(Ae[z],null,Ae[z].attributes.map(function(K){return[K.location,K.name]}))}return{clear:function(){var z=d.deleteShader.bind(d);Wr(re).forEach(z),re={},Wr($).forEach(z),$={},Ae.forEach(function(K){d.deleteProgram(K.program)}),Ae.length=0,Re={},I.shaderCount=0},program:function(z,K,ve,Ie){x.command(z>=0,"missing vertex shader",ve),x.command(K>=0,"missing fragment shader",ve);var se=Re[K];se||(se=Re[K]={});var Le=se[z];if(Le&&!Ie)return Le;var Ee=new be(K,z);return I.shaderCount++,de(Ee,ve,Ie),Le||(se[z]=Ee),Ae.push(Ee),Ee},restore:Se,shader:ge,frag:-1,vert:-1}}var _1=6408,ko=5121,m1=3333,os=5126;function v1(d,y,I,G,re,$,Q){function me(Ae){var Te;y.next===null?(x(re.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Te=ko):(x(y.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Te=y.next.colorAttachments[0].texture._texture.type,$.oes_texture_float?(x(Te===ko||Te===os,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Te===os&&x(Q.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):x(Te===ko,"Reading from a framebuffer is only allowed for the type 'uint8'"));var be=0,de=0,Se=G.framebufferWidth,z=G.framebufferHeight,K=null;r(Ae)?K=Ae:Ae&&(x.type(Ae,"object","invalid arguments to regl.read()"),be=Ae.x|0,de=Ae.y|0,x(be>=0&&be<G.framebufferWidth,"invalid x offset for regl.read"),x(de>=0&&de<G.framebufferHeight,"invalid y offset for regl.read"),Se=(Ae.width||G.framebufferWidth-be)|0,z=(Ae.height||G.framebufferHeight-de)|0,K=Ae.data||null),K&&(Te===ko?x(K instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Te===os&&x(K instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),x(Se>0&&Se+be<=G.framebufferWidth,"invalid width for read pixels"),x(z>0&&z+de<=G.framebufferHeight,"invalid height for read pixels"),I();var ve=Se*z*4;return K||(Te===ko?K=new Uint8Array(ve):Te===os&&(K=K||new Float32Array(ve))),x.isTypedArray(K,"data buffer for regl.read() must be a typedarray"),x(K.byteLength>=ve,"data buffer for regl.read() too small"),d.pixelStorei(m1,4),d.readPixels(be,de,Se,z,_1,Te,K),K}function ge(Ae){var Te;return y.setFBO({framebuffer:Ae.framebuffer},function(){Te=me(Ae)}),Te}function Re(Ae){return!Ae||!("framebuffer"in Ae)?me(Ae):ge(Ae)}return Re}function Fi(d){return Array.prototype.slice.call(d)}function wi(d){return Fi(d).join("")}function g1(){var d=0,y=[],I=[];function G(Te){for(var be=0;be<I.length;++be)if(I[be]===Te)return y[be];var de="g"+d++;return y.push(de),I.push(Te),de}function re(){var Te=[];function be(){Te.push.apply(Te,Fi(arguments))}var de=[];function Se(){var z="v"+d++;return de.push(z),arguments.length>0&&(Te.push(z,"="),Te.push.apply(Te,Fi(arguments)),Te.push(";")),z}return n(be,{def:Se,toString:function(){return wi([de.length>0?"var "+de.join(",")+";":"",wi(Te)])}})}function $(){var Te=re(),be=re(),de=Te.toString,Se=be.toString;function z(K,ve){be(K,ve,"=",Te.def(K,ve),";")}return n(function(){Te.apply(Te,Fi(arguments))},{def:Te.def,entry:Te,exit:be,save:z,set:function(K,ve,Ie){z(K,ve),Te(K,ve,"=",Ie,";")},toString:function(){return de()+Se()}})}function Q(){var Te=wi(arguments),be=$(),de=$(),Se=be.toString,z=de.toString;return n(be,{then:function(){return be.apply(be,Fi(arguments)),this},else:function(){return de.apply(de,Fi(arguments)),this},toString:function(){var K=z();return K&&(K="else{"+K+"}"),wi(["if(",Te,"){",Se(),"}",K])}})}var me=re(),ge={};function Re(Te,be){var de=[];function Se(){var se="a"+de.length;return de.push(se),se}be=be||0;for(var z=0;z<be;++z)Se();var K=$(),ve=K.toString,Ie=ge[Te]=n(K,{arg:Se,toString:function(){return wi(["function(",de.join(),"){",ve(),"}"])}});return Ie}function Ae(){var Te=['"use strict";',me,"return {"];Object.keys(ge).forEach(function(Se){Te.push('"',Se,'":',ge[Se].toString(),",")}),Te.push("}");var be=wi(Te).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),de=Function.apply(null,y.concat(be));return de.apply(null,I)}return{global:me,link:G,block:re,proc:Re,scope:$,cond:Q,compile:Ae}}var Ui="xyzw".split(""),Uh=5121,ki=1,El=2,kh=0,zh=1,Vh=2,Wh=3,yl=4,Hh="dither",Xh="blend.enable",jh="blend.color",Al="blend.equation",Tl="blend.func",Gh="depth.enable",$h="depth.func",Yh="depth.range",Zh="depth.mask",Sl="colorMask",Kh="cull.enable",qh="cull.face",xl="frontFace",Rl="lineWidth",Qh="polygonOffset.enable",bl="polygonOffset.offset",Jh="sample.alpha",ed="sample.enable",Cl="sample.coverage",td="stencil.enable",rd="stencil.mask",Ol="stencil.func",Il="stencil.opFront",zo="stencil.opBack",nd="scissor.enable",as="scissor.box",xn="viewport",Vo="profile",ii="framebuffer",Wo="vert",Ho="frag",oi="elements",ai="primitive",si="count",ss="offset",us="instances",Xo="vao",Ml="Width",Bl="Height",zi=ii+Ml,Vi=ii+Bl,E1=xn+Ml,y1=xn+Bl,id="drawingBuffer",od=id+Ml,ad=id+Bl,A1=[Tl,Al,Ol,Il,zo,Cl,xn,as,bl],Wi=34962,T1=34963,S1=35632,x1=35633,sd=3553,R1=34067,b1=2884,C1=3042,O1=3024,I1=2960,M1=2929,B1=3089,N1=32823,P1=32926,L1=32928,Nl=5126,ls=35664,cs=35665,fs=35666,Pl=5124,hs=35667,ds=35668,ps=35669,Ll=35670,_s=35671,ms=35672,vs=35673,jo=35674,Go=35675,$o=35676,Yo=35678,Zo=35680,ud=4,Ko=1028,ui=1029,ld=2304,Dl=2305,D1=32775,F1=32776,w1=519,Fn=7680,cd=0,fd=1,hd=32774,U1=513,dd=36160,k1=36064,mn={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},pd=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Hi={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},wn={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},_d={frag:S1,vert:x1},Fl={cw:ld,ccw:Dl};function gs(d){return Array.isArray(d)||r(d)||on(d)}function md(d){return d.sort(function(y,I){return y===xn?-1:I===xn?1:y<I?-1:1})}function Hr(d,y,I,G){this.thisDep=d,this.contextDep=y,this.propDep=I,this.append=G}function Un(d){return d&&!(d.thisDep||d.contextDep||d.propDep)}function Kt(d){return new Hr(!1,!1,!1,d)}function Fr(d,y){var I=d.type;if(I===kh){var G=d.data.length;return new Hr(!0,G>=1,G>=2,y)}else if(I===yl){var re=d.data;return new Hr(re.thisDep,re.contextDep,re.propDep,y)}else return new Hr(I===Wh,I===Vh,I===zh,y)}var vd=new Hr(!1,!1,!1,function(){});function z1(d,y,I,G,re,$,Q,me,ge,Re,Ae,Te,be,de,Se){var z=Re.Record,K={add:32774,subtract:32778,"reverse subtract":32779};I.ext_blend_minmax&&(K.min=D1,K.max=F1);var ve=I.angle_instanced_arrays,Ie=I.webgl_draw_buffers,se={dirty:!0,profile:Se.profile},Le={},Ee=[],Ne={},ue={};function Oe(g){return g.replace(".","_")}function Xe(g,T,O){var H=Oe(g);Ee.push(g),Le[H]=se[H]=!!O,Ne[H]=T}function Qe(g,T,O){var H=Oe(g);Ee.push(g),Array.isArray(O)?(se[H]=O.slice(),Le[H]=O.slice()):se[H]=Le[H]=O,ue[H]=T}Xe(Hh,O1),Xe(Xh,C1),Qe(jh,"blendColor",[0,0,0,0]),Qe(Al,"blendEquationSeparate",[hd,hd]),Qe(Tl,"blendFuncSeparate",[fd,cd,fd,cd]),Xe(Gh,M1,!0),Qe($h,"depthFunc",U1),Qe(Yh,"depthRange",[0,1]),Qe(Zh,"depthMask",!0),Qe(Sl,Sl,[!0,!0,!0,!0]),Xe(Kh,b1),Qe(qh,"cullFace",ui),Qe(xl,xl,Dl),Qe(Rl,Rl,1),Xe(Qh,N1),Qe(bl,"polygonOffset",[0,0]),Xe(Jh,P1),Xe(ed,L1),Qe(Cl,"sampleCoverage",[1,!1]),Xe(td,I1),Qe(rd,"stencilMask",-1),Qe(Ol,"stencilFunc",[w1,0,-1]),Qe(Il,"stencilOpSeparate",[Ko,Fn,Fn,Fn]),Qe(zo,"stencilOpSeparate",[ui,Fn,Fn,Fn]),Xe(nd,B1),Qe(as,"scissor",[0,0,d.drawingBufferWidth,d.drawingBufferHeight]),Qe(xn,xn,[0,0,d.drawingBufferWidth,d.drawingBufferHeight]);var Me={gl:d,context:be,strings:y,next:Le,current:se,draw:Te,elements:$,buffer:re,shader:Ae,attributes:Re.state,vao:Re,uniforms:ge,framebuffer:me,extensions:I,timer:de,isBufferArgs:gs},ye={primTypes:Oi,compareFuncs:Hi,blendFuncs:mn,blendEquations:K,stencilOps:wn,glTypes:Jn,orientationType:Fl};x.optional(function(){Me.isArrayLike=Gt}),Ie&&(ye.backBuffer=[ui],ye.drawBuffer=Vr(G.maxDrawbuffers,function(g){return g===0?[0]:Vr(g,function(T){return k1+T})}));var oe=0;function Je(){var g=g1(),T=g.link,O=g.global;g.id=oe++,g.batchId="0";var H=T(Me),X=g.shared={props:"a0"};Object.keys(Me).forEach(function(N){X[N]=O.def(H,".",N)}),x.optional(function(){g.CHECK=T(x),g.commandStr=x.guessCommand(),g.command=T(g.commandStr),g.assert=function(N,A,L){N("if(!(",A,"))",this.CHECK,".commandRaise(",T(L),",",this.command,");")},ye.invalidBlendCombinations=pd});var B=g.next={},D=g.current={};Object.keys(ue).forEach(function(N){Array.isArray(se[N])&&(B[N]=O.def(X.next,".",N),D[N]=O.def(X.current,".",N))});var U=g.constants={};Object.keys(ye).forEach(function(N){U[N]=O.def(JSON.stringify(ye[N]))}),g.invoke=function(N,A){switch(A.type){case kh:var L=["this",X.context,X.props,g.batchId];return N.def(T(A.data),".call(",L.slice(0,Math.max(A.data.length+1,4)),")");case zh:return N.def(X.props,A.data);case Vh:return N.def(X.context,A.data);case Wh:return N.def("this",A.data);case yl:return A.data.append(g,N),A.data.ref}},g.attribCache={};var b={};return g.scopeAttrib=function(N){var A=y.id(N);if(A in b)return b[A];var L=Re.scope[A];L||(L=Re.scope[A]=new z);var Y=b[A]=T(L);return Y},g}function dt(g){var T=g.static,O=g.dynamic,H;if(Vo in T){var X=!!T[Vo];H=Kt(function(D,U){return X}),H.enable=X}else if(Vo in O){var B=O[Vo];H=Fr(B,function(D,U){return D.invoke(U,B)})}return H}function Ve(g,T){var O=g.static,H=g.dynamic;if(ii in O){var X=O[ii];return X?(X=me.getFramebuffer(X),x.command(X,"invalid framebuffer object"),Kt(function(D,U){var b=D.link(X),N=D.shared;U.set(N.framebuffer,".next",b);var A=N.context;return U.set(A,"."+zi,b+".width"),U.set(A,"."+Vi,b+".height"),b})):Kt(function(D,U){var b=D.shared;U.set(b.framebuffer,".next","null");var N=b.context;return U.set(N,"."+zi,N+"."+od),U.set(N,"."+Vi,N+"."+ad),"null"})}else if(ii in H){var B=H[ii];return Fr(B,function(D,U){var b=D.invoke(U,B),N=D.shared,A=N.framebuffer,L=U.def(A,".getFramebuffer(",b,")");x.optional(function(){D.assert(U,"!"+b+"||"+L,"invalid framebuffer object")}),U.set(A,".next",L);var Y=N.context;return U.set(Y,"."+zi,L+"?"+L+".width:"+Y+"."+od),U.set(Y,"."+Vi,L+"?"+L+".height:"+Y+"."+ad),L})}else return null}function at(g,T,O){var H=g.static,X=g.dynamic;function B(b){if(b in H){var N=H[b];x.commandType(N,"object","invalid "+b,O.commandStr);var A=!0,L=N.x|0,Y=N.y|0,J,he;return"width"in N?(J=N.width|0,x.command(J>=0,"invalid "+b,O.commandStr)):A=!1,"height"in N?(he=N.height|0,x.command(he>=0,"invalid "+b,O.commandStr)):A=!1,new Hr(!A&&T&&T.thisDep,!A&&T&&T.contextDep,!A&&T&&T.propDep,function(We,it){var we=We.shared.context,Ke=J;"width"in N||(Ke=it.def(we,".",zi,"-",L));var tt=he;return"height"in N||(tt=it.def(we,".",Vi,"-",Y)),[L,Y,Ke,tt]})}else if(b in X){var ae=X[b],_e=Fr(ae,function(We,it){var we=We.invoke(it,ae);x.optional(function(){We.assert(it,we+"&&typeof "+we+'==="object"',"invalid "+b)});var Ke=We.shared.context,tt=it.def(we,".x|0"),Rt=it.def(we,".y|0"),Jt=it.def('"width" in ',we,"?",we,".width|0:","(",Ke,".",zi,"-",tt,")"),sn=it.def('"height" in ',we,"?",we,".height|0:","(",Ke,".",Vi,"-",Rt,")");return x.optional(function(){We.assert(it,Jt+">=0&&"+sn+">=0","invalid "+b)}),[tt,Rt,Jt,sn]});return T&&(_e.thisDep=_e.thisDep||T.thisDep,_e.contextDep=_e.contextDep||T.contextDep,_e.propDep=_e.propDep||T.propDep),_e}else return T?new Hr(T.thisDep,T.contextDep,T.propDep,function(We,it){var we=We.shared.context;return[0,0,it.def(we,".",zi),it.def(we,".",Vi)]}):null}var D=B(xn);if(D){var U=D;D=new Hr(D.thisDep,D.contextDep,D.propDep,function(b,N){var A=U.append(b,N),L=b.shared.context;return N.set(L,"."+E1,A[2]),N.set(L,"."+y1,A[3]),A})}return{viewport:D,scissor_box:B(as)}}function et(g,T){var O=g.static,H=typeof O[Ho]=="string"&&typeof O[Wo]=="string";if(H){if(Object.keys(T.dynamic).length>0)return null;var X=T.static,B=Object.keys(X);if(B.length>0&&typeof X[B[0]]=="number"){for(var D=[],U=0;U<B.length;++U)x(typeof X[B[U]]=="number","must specify all vertex attribute locations when using vaos"),D.push([X[B[U]]|0,B[U]]);return D}}return null}function ot(g,T,O){var H=g.static,X=g.dynamic;function B(A){if(A in H){var L=y.id(H[A]);x.optional(function(){Ae.shader(_d[A],L,x.guessCommand())});var Y=Kt(function(){return L});return Y.id=L,Y}else if(A in X){var J=X[A];return Fr(J,function(he,ae){var _e=he.invoke(ae,J),We=ae.def(he.shared.strings,".id(",_e,")");return x.optional(function(){ae(he.shared.shader,".shader(",_d[A],",",We,",",he.command,");")}),We})}return null}var D=B(Ho),U=B(Wo),b=null,N;return Un(D)&&Un(U)?(b=Ae.program(U.id,D.id,null,O),N=Kt(function(A,L){return A.link(b)})):N=new Hr(D&&D.thisDep||U&&U.thisDep,D&&D.contextDep||U&&U.contextDep,D&&D.propDep||U&&U.propDep,function(A,L){var Y=A.shared.shader,J;D?J=D.append(A,L):J=L.def(Y,".",Ho);var he;U?he=U.append(A,L):he=L.def(Y,".",Wo);var ae=Y+".program("+he+","+J;return x.optional(function(){ae+=","+A.command}),L.def(ae+")")}),{frag:D,vert:U,progVar:N,program:b}}function At(g,T){var O=g.static,H=g.dynamic;function X(){if(oi in O){var A=O[oi];gs(A)?A=$.getElements($.create(A,!0)):A&&(A=$.getElements(A),x.command(A,"invalid elements",T.commandStr));var L=Kt(function(J,he){if(A){var ae=J.link(A);return J.ELEMENTS=ae,ae}return J.ELEMENTS=null,null});return L.value=A,L}else if(oi in H){var Y=H[oi];return Fr(Y,function(J,he){var ae=J.shared,_e=ae.isBufferArgs,We=ae.elements,it=J.invoke(he,Y),we=he.def("null"),Ke=he.def(_e,"(",it,")"),tt=J.cond(Ke).then(we,"=",We,".createStream(",it,");").else(we,"=",We,".getElements(",it,");");return x.optional(function(){J.assert(tt.else,"!"+it+"||"+we,"invalid elements")}),he.entry(tt),he.exit(J.cond(Ke).then(We,".destroyStream(",we,");")),J.ELEMENTS=we,we})}return null}var B=X();function D(){if(ai in O){var A=O[ai];return x.commandParameter(A,Oi,"invalid primitve",T.commandStr),Kt(function(Y,J){return Oi[A]})}else if(ai in H){var L=H[ai];return Fr(L,function(Y,J){var he=Y.constants.primTypes,ae=Y.invoke(J,L);return x.optional(function(){Y.assert(J,ae+" in "+he,"invalid primitive, must be one of "+Object.keys(Oi))}),J.def(he,"[",ae,"]")})}else if(B)return Un(B)?B.value?Kt(function(Y,J){return J.def(Y.ELEMENTS,".primType")}):Kt(function(){return ud}):new Hr(B.thisDep,B.contextDep,B.propDep,function(Y,J){var he=Y.ELEMENTS;return J.def(he,"?",he,".primType:",ud)});return null}function U(A,L){if(A in O){var Y=O[A]|0;return x.command(!L||Y>=0,"invalid "+A,T.commandStr),Kt(function(he,ae){return L&&(he.OFFSET=Y),Y})}else if(A in H){var J=H[A];return Fr(J,function(he,ae){var _e=he.invoke(ae,J);return L&&(he.OFFSET=_e,x.optional(function(){he.assert(ae,_e+">=0","invalid "+A)})),_e})}else if(L&&B)return Kt(function(he,ae){return he.OFFSET="0",0});return null}var b=U(ss,!0);function N(){if(si in O){var A=O[si]|0;return x.command(typeof A=="number"&&A>=0,"invalid vertex count",T.commandStr),Kt(function(){return A})}else if(si in H){var L=H[si];return Fr(L,function(he,ae){var _e=he.invoke(ae,L);return x.optional(function(){he.assert(ae,"typeof "+_e+'==="number"&&'+_e+">=0&&"+_e+"===("+_e+"|0)","invalid vertex count")}),_e})}else if(B)if(Un(B)){if(B)return b?new Hr(b.thisDep,b.contextDep,b.propDep,function(he,ae){var _e=ae.def(he.ELEMENTS,".vertCount-",he.OFFSET);return x.optional(function(){he.assert(ae,_e+">=0","invalid vertex offset/element buffer too small")}),_e}):Kt(function(he,ae){return ae.def(he.ELEMENTS,".vertCount")});var Y=Kt(function(){return-1});return x.optional(function(){Y.MISSING=!0}),Y}else{var J=new Hr(B.thisDep||b.thisDep,B.contextDep||b.contextDep,B.propDep||b.propDep,function(he,ae){var _e=he.ELEMENTS;return he.OFFSET?ae.def(_e,"?",_e,".vertCount-",he.OFFSET,":-1"):ae.def(_e,"?",_e,".vertCount:-1")});return x.optional(function(){J.DYNAMIC=!0}),J}return null}return{elements:B,primitive:D(),count:N(),instances:U(us,!1),offset:b}}function qt(g,T){var O=g.static,H=g.dynamic,X={};return Ee.forEach(function(B){var D=Oe(B);function U(b,N){if(B in O){var A=b(O[B]);X[D]=Kt(function(){return A})}else if(B in H){var L=H[B];X[D]=Fr(L,function(Y,J){return N(Y,J,Y.invoke(J,L))})}}switch(B){case Kh:case Xh:case Hh:case td:case Gh:case nd:case Qh:case Jh:case ed:case Zh:return U(function(b){return x.commandType(b,"boolean",B,T.commandStr),b},function(b,N,A){return x.optional(function(){b.assert(N,"typeof "+A+'==="boolean"',"invalid flag "+B,b.commandStr)}),A});case $h:return U(function(b){return x.commandParameter(b,Hi,"invalid "+B,T.commandStr),Hi[b]},function(b,N,A){var L=b.constants.compareFuncs;return x.optional(function(){b.assert(N,A+" in "+L,"invalid "+B+", must be one of "+Object.keys(Hi))}),N.def(L,"[",A,"]")});case Yh:return U(function(b){return x.command(Gt(b)&&b.length===2&&typeof b[0]=="number"&&typeof b[1]=="number"&&b[0]<=b[1],"depth range is 2d array",T.commandStr),b},function(b,N,A){x.optional(function(){b.assert(N,b.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var L=N.def("+",A,"[0]"),Y=N.def("+",A,"[1]");return[L,Y]});case Tl:return U(function(b){x.commandType(b,"object","blend.func",T.commandStr);var N="srcRGB"in b?b.srcRGB:b.src,A="srcAlpha"in b?b.srcAlpha:b.src,L="dstRGB"in b?b.dstRGB:b.dst,Y="dstAlpha"in b?b.dstAlpha:b.dst;return x.commandParameter(N,mn,D+".srcRGB",T.commandStr),x.commandParameter(A,mn,D+".srcAlpha",T.commandStr),x.commandParameter(L,mn,D+".dstRGB",T.commandStr),x.commandParameter(Y,mn,D+".dstAlpha",T.commandStr),x.command(pd.indexOf(N+", "+L)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+N+", "+L+")",T.commandStr),[mn[N],mn[L],mn[A],mn[Y]]},function(b,N,A){var L=b.constants.blendFuncs;x.optional(function(){b.assert(N,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Y(we,Ke){var tt=N.def('"',we,Ke,'" in ',A,"?",A,".",we,Ke,":",A,".",we);return x.optional(function(){b.assert(N,tt+" in "+L,"invalid "+B+"."+we+Ke+", must be one of "+Object.keys(mn))}),tt}var J=Y("src","RGB"),he=Y("dst","RGB");x.optional(function(){var we=b.constants.invalidBlendCombinations;b.assert(N,we+".indexOf("+J+'+", "+'+he+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ae=N.def(L,"[",J,"]"),_e=N.def(L,"[",Y("src","Alpha"),"]"),We=N.def(L,"[",he,"]"),it=N.def(L,"[",Y("dst","Alpha"),"]");return[ae,We,_e,it]});case Al:return U(function(b){if(typeof b=="string")return x.commandParameter(b,K,"invalid "+B,T.commandStr),[K[b],K[b]];if(typeof b=="object")return x.commandParameter(b.rgb,K,B+".rgb",T.commandStr),x.commandParameter(b.alpha,K,B+".alpha",T.commandStr),[K[b.rgb],K[b.alpha]];x.commandRaise("invalid blend.equation",T.commandStr)},function(b,N,A){var L=b.constants.blendEquations,Y=N.def(),J=N.def(),he=b.cond("typeof ",A,'==="string"');return x.optional(function(){function ae(_e,We,it){b.assert(_e,it+" in "+L,"invalid "+We+", must be one of "+Object.keys(K))}ae(he.then,B,A),b.assert(he.else,A+"&&typeof "+A+'==="object"',"invalid "+B),ae(he.else,B+".rgb",A+".rgb"),ae(he.else,B+".alpha",A+".alpha")}),he.then(Y,"=",J,"=",L,"[",A,"];"),he.else(Y,"=",L,"[",A,".rgb];",J,"=",L,"[",A,".alpha];"),N(he),[Y,J]});case jh:return U(function(b){return x.command(Gt(b)&&b.length===4,"blend.color must be a 4d array",T.commandStr),Vr(4,function(N){return+b[N]})},function(b,N,A){return x.optional(function(){b.assert(N,b.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),Vr(4,function(L){return N.def("+",A,"[",L,"]")})});case rd:return U(function(b){return x.commandType(b,"number",D,T.commandStr),b|0},function(b,N,A){return x.optional(function(){b.assert(N,"typeof "+A+'==="number"',"invalid stencil.mask")}),N.def(A,"|0")});case Ol:return U(function(b){x.commandType(b,"object",D,T.commandStr);var N=b.cmp||"keep",A=b.ref||0,L="mask"in b?b.mask:-1;return x.commandParameter(N,Hi,B+".cmp",T.commandStr),x.commandType(A,"number",B+".ref",T.commandStr),x.commandType(L,"number",B+".mask",T.commandStr),[Hi[N],A,L]},function(b,N,A){var L=b.constants.compareFuncs;x.optional(function(){function ae(){b.assert(N,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ae(A+"&&typeof ",A,'==="object"'),ae('!("cmp" in ',A,")||(",A,".cmp in ",L,")")});var Y=N.def('"cmp" in ',A,"?",L,"[",A,".cmp]",":",Fn),J=N.def(A,".ref|0"),he=N.def('"mask" in ',A,"?",A,".mask|0:-1");return[Y,J,he]});case Il:case zo:return U(function(b){x.commandType(b,"object",D,T.commandStr);var N=b.fail||"keep",A=b.zfail||"keep",L=b.zpass||"keep";return x.commandParameter(N,wn,B+".fail",T.commandStr),x.commandParameter(A,wn,B+".zfail",T.commandStr),x.commandParameter(L,wn,B+".zpass",T.commandStr),[B===zo?ui:Ko,wn[N],wn[A],wn[L]]},function(b,N,A){var L=b.constants.stencilOps;x.optional(function(){b.assert(N,A+"&&typeof "+A+'==="object"',"invalid "+B)});function Y(J){return x.optional(function(){b.assert(N,'!("'+J+'" in '+A+")||("+A+"."+J+" in "+L+")","invalid "+B+"."+J+", must be one of "+Object.keys(wn))}),N.def('"',J,'" in ',A,"?",L,"[",A,".",J,"]:",Fn)}return[B===zo?ui:Ko,Y("fail"),Y("zfail"),Y("zpass")]});case bl:return U(function(b){x.commandType(b,"object",D,T.commandStr);var N=b.factor|0,A=b.units|0;return x.commandType(N,"number",D+".factor",T.commandStr),x.commandType(A,"number",D+".units",T.commandStr),[N,A]},function(b,N,A){x.optional(function(){b.assert(N,A+"&&typeof "+A+'==="object"',"invalid "+B)});var L=N.def(A,".factor|0"),Y=N.def(A,".units|0");return[L,Y]});case qh:return U(function(b){var N=0;return b==="front"?N=Ko:b==="back"&&(N=ui),x.command(!!N,D,T.commandStr),N},function(b,N,A){return x.optional(function(){b.assert(N,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),N.def(A,'==="front"?',Ko,":",ui)});case Rl:return U(function(b){return x.command(typeof b=="number"&&b>=G.lineWidthDims[0]&&b<=G.lineWidthDims[1],"invalid line width, must be a positive number between "+G.lineWidthDims[0]+" and "+G.lineWidthDims[1],T.commandStr),b},function(b,N,A){return x.optional(function(){b.assert(N,"typeof "+A+'==="number"&&'+A+">="+G.lineWidthDims[0]+"&&"+A+"<="+G.lineWidthDims[1],"invalid line width")}),A});case xl:return U(function(b){return x.commandParameter(b,Fl,D,T.commandStr),Fl[b]},function(b,N,A){return x.optional(function(){b.assert(N,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),N.def(A+'==="cw"?'+ld+":"+Dl)});case Sl:return U(function(b){return x.command(Gt(b)&&b.length===4,"color.mask must be length 4 array",T.commandStr),b.map(function(N){return!!N})},function(b,N,A){return x.optional(function(){b.assert(N,b.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),Vr(4,function(L){return"!!"+A+"["+L+"]"})});case Cl:return U(function(b){x.command(typeof b=="object"&&b,D,T.commandStr);var N="value"in b?b.value:1,A=!!b.invert;return x.command(typeof N=="number"&&N>=0&&N<=1,"sample.coverage.value must be a number between 0 and 1",T.commandStr),[N,A]},function(b,N,A){x.optional(function(){b.assert(N,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var L=N.def('"value" in ',A,"?+",A,".value:1"),Y=N.def("!!",A,".invert");return[L,Y]})}}),X}function ar(g,T){var O=g.static,H=g.dynamic,X={};return Object.keys(O).forEach(function(B){var D=O[B],U;if(typeof D=="number"||typeof D=="boolean")U=Kt(function(){return D});else if(typeof D=="function"){var b=D._reglType;b==="texture2d"||b==="textureCube"?U=Kt(function(N){return N.link(D)}):b==="framebuffer"||b==="framebufferCube"?(x.command(D.color.length>0,'missing color attachment for framebuffer sent to uniform "'+B+'"',T.commandStr),U=Kt(function(N){return N.link(D.color[0])})):x.commandRaise('invalid data for uniform "'+B+'"',T.commandStr)}else Gt(D)?U=Kt(function(N){var A=N.global.def("[",Vr(D.length,function(L){return x.command(typeof D[L]=="number"||typeof D[L]=="boolean","invalid uniform "+B,N.commandStr),D[L]}),"]");return A}):x.commandRaise('invalid or missing data for uniform "'+B+'"',T.commandStr);U.value=D,X[B]=U}),Object.keys(H).forEach(function(B){var D=H[B];X[B]=Fr(D,function(U,b){return U.invoke(b,D)})}),X}function ct(g,T){var O=g.static,H=g.dynamic,X={};return Object.keys(O).forEach(function(B){var D=O[B],U=y.id(B),b=new z;if(gs(D))b.state=ki,b.buffer=re.getBuffer(re.create(D,Wi,!1,!0)),b.type=0;else{var N=re.getBuffer(D);if(N)b.state=ki,b.buffer=N,b.type=0;else if(x.command(typeof D=="object"&&D,"invalid data for attribute "+B,T.commandStr),"constant"in D){var A=D.constant;b.buffer="null",b.state=El,typeof A=="number"?b.x=A:(x.command(Gt(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+B,T.commandStr),Ui.forEach(function(We,it){it<A.length&&(b[We]=A[it])}))}else{gs(D.buffer)?N=re.getBuffer(re.create(D.buffer,Wi,!1,!0)):N=re.getBuffer(D.buffer),x.command(!!N,'missing buffer for attribute "'+B+'"',T.commandStr);var L=D.offset|0;x.command(L>=0,'invalid offset for attribute "'+B+'"',T.commandStr);var Y=D.stride|0;x.command(Y>=0&&Y<256,'invalid stride for attribute "'+B+'", must be integer betweeen [0, 255]',T.commandStr);var J=D.size|0;x.command(!("size"in D)||J>0&&J<=4,'invalid size for attribute "'+B+'", must be 1,2,3,4',T.commandStr);var he=!!D.normalized,ae=0;"type"in D&&(x.commandParameter(D.type,Jn,"invalid type for attribute "+B,T.commandStr),ae=Jn[D.type]);var _e=D.divisor|0;"divisor"in D&&(x.command(_e===0||ve,'cannot specify divisor for attribute "'+B+'", instancing not supported',T.commandStr),x.command(_e>=0,'invalid divisor for attribute "'+B+'"',T.commandStr)),x.optional(function(){var We=T.commandStr,it=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(D).forEach(function(we){x.command(it.indexOf(we)>=0,'unknown parameter "'+we+'" for attribute pointer "'+B+'" (valid parameters are '+it+")",We)})}),b.buffer=N,b.state=ki,b.size=J,b.normalized=he,b.type=ae||N.dtype,b.offset=L,b.stride=Y,b.divisor=_e}}X[B]=Kt(function(We,it){var we=We.attribCache;if(U in we)return we[U];var Ke={isStream:!1};return Object.keys(b).forEach(function(tt){Ke[tt]=b[tt]}),b.buffer&&(Ke.buffer=We.link(b.buffer),Ke.type=Ke.type||Ke.buffer+".dtype"),we[U]=Ke,Ke})}),Object.keys(H).forEach(function(B){var D=H[B];function U(b,N){var A=b.invoke(N,D),L=b.shared,Y=b.constants,J=L.isBufferArgs,he=L.buffer;x.optional(function(){b.assert(N,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+J+"("+A+")||"+he+".getBuffer("+A+")||"+he+".getBuffer("+A+".buffer)||"+J+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+L.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+B+'"')});var ae={isStream:N.def(!1)},_e=new z;_e.state=ki,Object.keys(_e).forEach(function(Ke){ae[Ke]=N.def(""+_e[Ke])});var We=ae.buffer,it=ae.type;N("if(",J,"(",A,")){",ae.isStream,"=true;",We,"=",he,".createStream(",Wi,",",A,");",it,"=",We,".dtype;","}else{",We,"=",he,".getBuffer(",A,");","if(",We,"){",it,"=",We,".dtype;",'}else if("constant" in ',A,"){",ae.state,"=",El,";","if(typeof "+A+'.constant === "number"){',ae[Ui[0]],"=",A,".constant;",Ui.slice(1).map(function(Ke){return ae[Ke]}).join("="),"=0;","}else{",Ui.map(function(Ke,tt){return ae[Ke]+"="+A+".constant.length>"+tt+"?"+A+".constant["+tt+"]:0;"}).join(""),"}}else{","if(",J,"(",A,".buffer)){",We,"=",he,".createStream(",Wi,",",A,".buffer);","}else{",We,"=",he,".getBuffer(",A,".buffer);","}",it,'="type" in ',A,"?",Y.glTypes,"[",A,".type]:",We,".dtype;",ae.normalized,"=!!",A,".normalized;");function we(Ke){N(ae[Ke],"=",A,".",Ke,"|0;")}return we("size"),we("offset"),we("stride"),we("divisor"),N("}}"),N.exit("if(",ae.isStream,"){",he,".destroyStream(",We,");","}"),ae}X[B]=Fr(D,U)}),X}function rr(g,T){var O=g.static,H=g.dynamic;if(Xo in O){var X=O[Xo];return X!==null&&Re.getVAO(X)===null&&(X=Re.createVAO(X)),Kt(function(D){return D.link(Re.getVAO(X))})}else if(Xo in H){var B=H[Xo];return Fr(B,function(D,U){var b=D.invoke(U,B);return U.def(D.shared.vao+".getVAO("+b+")")})}return null}function Ut(g){var T=g.static,O=g.dynamic,H={};return Object.keys(T).forEach(function(X){var B=T[X];H[X]=Kt(function(D,U){return typeof B=="number"||typeof B=="boolean"?""+B:D.link(B)})}),Object.keys(O).forEach(function(X){var B=O[X];H[X]=Fr(B,function(D,U){return D.invoke(U,B)})}),H}function Qt(g,T,O,H,X){var B=g.static,D=g.dynamic;x.optional(function(){var we=[ii,Wo,Ho,oi,ai,ss,si,us,Vo,Xo].concat(Ee);function Ke(tt){Object.keys(tt).forEach(function(Rt){x.command(we.indexOf(Rt)>=0,'unknown parameter "'+Rt+'"',X.commandStr)})}Ke(B),Ke(D)});var U=et(g,T),b=Ve(g),N=at(g,b,X),A=At(g,X),L=qt(g,X),Y=ot(g,X,U);function J(we){var Ke=N[we];Ke&&(L[we]=Ke)}J(xn),J(Oe(as));var he=Object.keys(L).length>0,ae={framebuffer:b,draw:A,shader:Y,state:L,dirty:he,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ae.profile=dt(g),ae.uniforms=ar(O,X),ae.drawVAO=ae.scopeVAO=rr(g),!ae.drawVAO&&Y.program&&!U&&I.angle_instanced_arrays){var _e=!0,We=Y.program.attributes.map(function(we){var Ke=T.static[we];return _e=_e&&!!Ke,Ke});if(_e&&We.length>0){var it=Re.getVAO(Re.createVAO(We));ae.drawVAO=new Hr(null,null,null,function(we,Ke){return we.link(it)}),ae.useVAO=!0}}return U?ae.useVAO=!0:ae.attributes=ct(T,X),ae.context=Ut(H),ae}function nr(g,T,O){var H=g.shared,X=H.context,B=g.scope();Object.keys(O).forEach(function(D){T.save(X,"."+D);var U=O[D];B(X,".",D,"=",U.append(g,T),";")}),T(B)}function ir(g,T,O,H){var X=g.shared,B=X.gl,D=X.framebuffer,U;Ie&&(U=T.def(X.extensions,".webgl_draw_buffers"));var b=g.constants,N=b.drawBuffer,A=b.backBuffer,L;O?L=O.append(g,T):L=T.def(D,".next"),H||T("if(",L,"!==",D,".cur){"),T("if(",L,"){",B,".bindFramebuffer(",dd,",",L,".framebuffer);"),Ie&&T(U,".drawBuffersWEBGL(",N,"[",L,".colorAttachments.length]);"),T("}else{",B,".bindFramebuffer(",dd,",null);"),Ie&&T(U,".drawBuffersWEBGL(",A,");"),T("}",D,".cur=",L,";"),H||T("}")}function hr(g,T,O){var H=g.shared,X=H.gl,B=g.current,D=g.next,U=H.current,b=H.next,N=g.cond(U,".dirty");Ee.forEach(function(A){var L=Oe(A);if(!(L in O.state)){var Y,J;if(L in D){Y=D[L],J=B[L];var he=Vr(se[L].length,function(_e){return N.def(Y,"[",_e,"]")});N(g.cond(he.map(function(_e,We){return _e+"!=="+J+"["+We+"]"}).join("||")).then(X,".",ue[L],"(",he,");",he.map(function(_e,We){return J+"["+We+"]="+_e}).join(";"),";"))}else{Y=N.def(b,".",L);var ae=g.cond(Y,"!==",U,".",L);N(ae),L in Ne?ae(g.cond(Y).then(X,".enable(",Ne[L],");").else(X,".disable(",Ne[L],");"),U,".",L,"=",Y,";"):ae(X,".",ue[L],"(",Y,");",U,".",L,"=",Y,";")}}}),Object.keys(O.state).length===0&&N(U,".dirty=false;"),T(N)}function Ar(g,T,O,H){var X=g.shared,B=g.current,D=X.current,U=X.gl;md(Object.keys(O)).forEach(function(b){var N=O[b];if(!(H&&!H(N))){var A=N.append(g,T);if(Ne[b]){var L=Ne[b];Un(N)?A?T(U,".enable(",L,");"):T(U,".disable(",L,");"):T(g.cond(A).then(U,".enable(",L,");").else(U,".disable(",L,");")),T(D,".",b,"=",A,";")}else if(Gt(A)){var Y=B[b];T(U,".",ue[b],"(",A,");",A.map(function(J,he){return Y+"["+he+"]="+J}).join(";"),";")}else T(U,".",ue[b],"(",A,");",D,".",b,"=",A,";")}})}function or(g,T){ve&&(g.instancing=T.def(g.shared.extensions,".angle_instanced_arrays"))}function nt(g,T,O,H,X){var B=g.shared,D=g.stats,U=B.current,b=B.timer,N=O.profile;function A(){return typeof performance>"u"?"Date.now()":"performance.now()"}var L,Y;function J(we){L=T.def(),we(L,"=",A(),";"),typeof X=="string"?we(D,".count+=",X,";"):we(D,".count++;"),de&&(H?(Y=T.def(),we(Y,"=",b,".getNumPendingQueries();")):we(b,".beginQuery(",D,");"))}function he(we){we(D,".cpuTime+=",A(),"-",L,";"),de&&(H?we(b,".pushScopeStats(",Y,",",b,".getNumPendingQueries(),",D,");"):we(b,".endQuery();"))}function ae(we){var Ke=T.def(U,".profile");T(U,".profile=",we,";"),T.exit(U,".profile=",Ke,";")}var _e;if(N){if(Un(N)){N.enable?(J(T),he(T.exit),ae("true")):ae("false");return}_e=N.append(g,T),ae(_e)}else _e=T.def(U,".profile");var We=g.block();J(We),T("if(",_e,"){",We,"}");var it=g.block();he(it),T.exit("if(",_e,"){",it,"}")}function gr(g,T,O,H,X){var B=g.shared;function D(b){switch(b){case ls:case hs:case _s:return 2;case cs:case ds:case ms:return 3;case fs:case ps:case vs:return 4;default:return 1}}function U(b,N,A){var L=B.gl,Y=T.def(b,".location"),J=T.def(B.attributes,"[",Y,"]"),he=A.state,ae=A.buffer,_e=[A.x,A.y,A.z,A.w],We=["buffer","normalized","offset","stride"];function it(){T("if(!",J,".buffer){",L,".enableVertexAttribArray(",Y,");}");var Ke=A.type,tt;if(A.size?tt=T.def(A.size,"||",N):tt=N,T("if(",J,".type!==",Ke,"||",J,".size!==",tt,"||",We.map(function(Jt){return J+"."+Jt+"!=="+A[Jt]}).join("||"),"){",L,".bindBuffer(",Wi,",",ae,".buffer);",L,".vertexAttribPointer(",[Y,tt,Ke,A.normalized,A.stride,A.offset],");",J,".type=",Ke,";",J,".size=",tt,";",We.map(function(Jt){return J+"."+Jt+"="+A[Jt]+";"}).join(""),"}"),ve){var Rt=A.divisor;T("if(",J,".divisor!==",Rt,"){",g.instancing,".vertexAttribDivisorANGLE(",[Y,Rt],");",J,".divisor=",Rt,";}")}}function we(){T("if(",J,".buffer){",L,".disableVertexAttribArray(",Y,");",J,".buffer=null;","}if(",Ui.map(function(Ke,tt){return J+"."+Ke+"!=="+_e[tt]}).join("||"),"){",L,".vertexAttrib4f(",Y,",",_e,");",Ui.map(function(Ke,tt){return J+"."+Ke+"="+_e[tt]+";"}).join(""),"}")}he===ki?it():he===El?we():(T("if(",he,"===",ki,"){"),it(),T("}else{"),we(),T("}"))}H.forEach(function(b){var N=b.name,A=O.attributes[N],L;if(A){if(!X(A))return;L=A.append(g,T)}else{if(!X(vd))return;var Y=g.scopeAttrib(N);x.optional(function(){g.assert(T,Y+".state","missing attribute "+N)}),L={},Object.keys(new z).forEach(function(J){L[J]=T.def(Y,".",J)})}U(g.link(b),D(b.info.type),L)})}function bt(g,T,O,H,X){for(var B=g.shared,D=B.gl,U,b=0;b<H.length;++b){var N=H[b],A=N.name,L=N.info.type,Y=O.uniforms[A],J=g.link(N),he=J+".location",ae;if(Y){if(!X(Y))continue;if(Un(Y)){var _e=Y.value;if(x.command(_e!==null&&typeof _e<"u",'missing uniform "'+A+'"',g.commandStr),L===Yo||L===Zo){x.command(typeof _e=="function"&&(L===Yo&&(_e._reglType==="texture2d"||_e._reglType==="framebuffer")||L===Zo&&(_e._reglType==="textureCube"||_e._reglType==="framebufferCube")),"invalid texture for uniform "+A,g.commandStr);var We=g.link(_e._texture||_e.color[0]._texture);T(D,".uniform1i(",he,",",We+".bind());"),T.exit(We,".unbind();")}else if(L===jo||L===Go||L===$o){x.optional(function(){x.command(Gt(_e),"invalid matrix for uniform "+A,g.commandStr),x.command(L===jo&&_e.length===4||L===Go&&_e.length===9||L===$o&&_e.length===16,"invalid length for matrix uniform "+A,g.commandStr)});var it=g.global.def("new Float32Array(["+Array.prototype.slice.call(_e)+"])"),we=2;L===Go?we=3:L===$o&&(we=4),T(D,".uniformMatrix",we,"fv(",he,",false,",it,");")}else{switch(L){case Nl:x.commandType(_e,"number","uniform "+A,g.commandStr),U="1f";break;case ls:x.command(Gt(_e)&&_e.length===2,"uniform "+A,g.commandStr),U="2f";break;case cs:x.command(Gt(_e)&&_e.length===3,"uniform "+A,g.commandStr),U="3f";break;case fs:x.command(Gt(_e)&&_e.length===4,"uniform "+A,g.commandStr),U="4f";break;case Ll:x.commandType(_e,"boolean","uniform "+A,g.commandStr),U="1i";break;case Pl:x.commandType(_e,"number","uniform "+A,g.commandStr),U="1i";break;case _s:x.command(Gt(_e)&&_e.length===2,"uniform "+A,g.commandStr),U="2i";break;case hs:x.command(Gt(_e)&&_e.length===2,"uniform "+A,g.commandStr),U="2i";break;case ms:x.command(Gt(_e)&&_e.length===3,"uniform "+A,g.commandStr),U="3i";break;case ds:x.command(Gt(_e)&&_e.length===3,"uniform "+A,g.commandStr),U="3i";break;case vs:x.command(Gt(_e)&&_e.length===4,"uniform "+A,g.commandStr),U="4i";break;case ps:x.command(Gt(_e)&&_e.length===4,"uniform "+A,g.commandStr),U="4i";break}T(D,".uniform",U,"(",he,",",Gt(_e)?Array.prototype.slice.call(_e):_e,");")}continue}else ae=Y.append(g,T)}else{if(!X(vd))continue;ae=T.def(B.uniforms,"[",y.id(A),"]")}L===Yo?T("if(",ae,"&&",ae,'._reglType==="framebuffer"){',ae,"=",ae,".color[0];","}"):L===Zo&&T("if(",ae,"&&",ae,'._reglType==="framebufferCube"){',ae,"=",ae,".color[0];","}"),x.optional(function(){function sn(Rn,xd){g.assert(T,Rn,'bad data or missing for uniform "'+A+'".  '+xd)}function wl(Rn){sn("typeof "+ae+'==="'+Rn+'"',"invalid type, expected "+Rn)}function Kr(Rn,xd){sn(B.isArrayLike+"("+ae+")&&"+ae+".length==="+Rn,"invalid vector, should have length "+Rn,g.commandStr)}function Sd(Rn){sn("typeof "+ae+'==="function"&&'+ae+'._reglType==="texture'+(Rn===sd?"2d":"Cube")+'"',"invalid texture type",g.commandStr)}switch(L){case Pl:wl("number");break;case hs:Kr(2);break;case ds:Kr(3);break;case ps:Kr(4);break;case Nl:wl("number");break;case ls:Kr(2);break;case cs:Kr(3);break;case fs:Kr(4);break;case Ll:wl("boolean");break;case _s:Kr(2);break;case ms:Kr(3);break;case vs:Kr(4);break;case jo:Kr(4);break;case Go:Kr(9);break;case $o:Kr(16);break;case Yo:Sd(sd);break;case Zo:Sd(R1);break}});var Ke=1;switch(L){case Yo:case Zo:var tt=T.def(ae,"._texture");T(D,".uniform1i(",he,",",tt,".bind());"),T.exit(tt,".unbind();");continue;case Pl:case Ll:U="1i";break;case hs:case _s:U="2i",Ke=2;break;case ds:case ms:U="3i",Ke=3;break;case ps:case vs:U="4i",Ke=4;break;case Nl:U="1f";break;case ls:U="2f",Ke=2;break;case cs:U="3f",Ke=3;break;case fs:U="4f",Ke=4;break;case jo:U="Matrix2fv";break;case Go:U="Matrix3fv";break;case $o:U="Matrix4fv";break}if(T(D,".uniform",U,"(",he,","),U.charAt(0)==="M"){var Rt=Math.pow(L-jo+2,2),Jt=g.global.def("new Float32Array(",Rt,")");T("false,(Array.isArray(",ae,")||",ae," instanceof Float32Array)?",ae,":(",Vr(Rt,function(sn){return Jt+"["+sn+"]="+ae+"["+sn+"]"}),",",Jt,")")}else Ke>1?T(Vr(Ke,function(sn){return ae+"["+sn+"]"})):T(ae);T(");")}}function Ze(g,T,O,H){var X=g.shared,B=X.gl,D=X.draw,U=H.draw;function b(){var tt=U.elements,Rt,Jt=T;return tt?((tt.contextDep&&H.contextDynamic||tt.propDep)&&(Jt=O),Rt=tt.append(g,Jt)):Rt=Jt.def(D,".",oi),Rt&&Jt("if("+Rt+")"+B+".bindBuffer("+T1+","+Rt+".buffer.buffer);"),Rt}function N(){var tt=U.count,Rt,Jt=T;return tt?((tt.contextDep&&H.contextDynamic||tt.propDep)&&(Jt=O),Rt=tt.append(g,Jt),x.optional(function(){tt.MISSING&&g.assert(T,"false","missing vertex count"),tt.DYNAMIC&&g.assert(Jt,Rt+">=0","missing vertex count")})):(Rt=Jt.def(D,".",si),x.optional(function(){g.assert(Jt,Rt+">=0","missing vertex count")})),Rt}var A=b();function L(tt){var Rt=U[tt];return Rt?Rt.contextDep&&H.contextDynamic||Rt.propDep?Rt.append(g,O):Rt.append(g,T):T.def(D,".",tt)}var Y=L(ai),J=L(ss),he=N();if(typeof he=="number"){if(he===0)return}else O("if(",he,"){"),O.exit("}");var ae,_e;ve&&(ae=L(us),_e=g.instancing);var We=A+".type",it=U.elements&&Un(U.elements);function we(){function tt(){O(_e,".drawElementsInstancedANGLE(",[Y,he,We,J+"<<(("+We+"-"+Uh+")>>1)",ae],");")}function Rt(){O(_e,".drawArraysInstancedANGLE(",[Y,J,he,ae],");")}A?it?tt():(O("if(",A,"){"),tt(),O("}else{"),Rt(),O("}")):Rt()}function Ke(){function tt(){O(B+".drawElements("+[Y,he,We,J+"<<(("+We+"-"+Uh+")>>1)"]+");")}function Rt(){O(B+".drawArrays("+[Y,J,he]+");")}A?it?tt():(O("if(",A,"){"),tt(),O("}else{"),Rt(),O("}")):Rt()}ve&&(typeof ae!="number"||ae>=0)?typeof ae=="string"?(O("if(",ae,">0){"),we(),O("}else if(",ae,"<0){"),Ke(),O("}")):we():Ke()}function lt(g,T,O,H,X){var B=Je(),D=B.proc("body",X);return x.optional(function(){B.commandStr=T.commandStr,B.command=B.link(T.commandStr)}),ve&&(B.instancing=D.def(B.shared.extensions,".angle_instanced_arrays")),g(B,D,O,H),B.compile().body}function gt(g,T,O,H){or(g,T),O.useVAO?O.drawVAO?T(g.shared.vao,".setVAO(",O.drawVAO.append(g,T),");"):T(g.shared.vao,".setVAO(",g.shared.vao,".targetVAO);"):(T(g.shared.vao,".setVAO(null);"),gr(g,T,O,H.attributes,function(){return!0})),bt(g,T,O,H.uniforms,function(){return!0}),Ze(g,T,T,O)}function $t(g,T){var O=g.proc("draw",1);or(g,O),nr(g,O,T.context),ir(g,O,T.framebuffer),hr(g,O,T),Ar(g,O,T.state),nt(g,O,T,!1,!0);var H=T.shader.progVar.append(g,O);if(O(g.shared.gl,".useProgram(",H,".program);"),T.shader.program)gt(g,O,T,T.shader.program);else{O(g.shared.vao,".setVAO(null);");var X=g.global.def("{}"),B=O.def(H,".id"),D=O.def(X,"[",B,"]");O(g.cond(D).then(D,".call(this,a0);").else(D,"=",X,"[",B,"]=",g.link(function(U){return lt(gt,g,T,U,1)}),"(",H,");",D,".call(this,a0);"))}Object.keys(T.state).length>0&&O(g.shared.current,".dirty=true;")}function vn(g,T,O,H){g.batchId="a1",or(g,T);function X(){return!0}gr(g,T,O,H.attributes,X),bt(g,T,O,H.uniforms,X),Ze(g,T,T,O)}function R(g,T,O,H){or(g,T);var X=O.contextDep,B=T.def(),D="a0",U="a1",b=T.def();g.shared.props=b,g.batchId=B;var N=g.scope(),A=g.scope();T(N.entry,"for(",B,"=0;",B,"<",U,";++",B,"){",b,"=",D,"[",B,"];",A,"}",N.exit);function L(We){return We.contextDep&&X||We.propDep}function Y(We){return!L(We)}if(O.needsContext&&nr(g,A,O.context),O.needsFramebuffer&&ir(g,A,O.framebuffer),Ar(g,A,O.state,L),O.profile&&L(O.profile)&&nt(g,A,O,!1,!0),H)O.useVAO?O.drawVAO?L(O.drawVAO)?A(g.shared.vao,".setVAO(",O.drawVAO.append(g,A),");"):N(g.shared.vao,".setVAO(",O.drawVAO.append(g,N),");"):N(g.shared.vao,".setVAO(",g.shared.vao,".targetVAO);"):(N(g.shared.vao,".setVAO(null);"),gr(g,N,O,H.attributes,Y),gr(g,A,O,H.attributes,L)),bt(g,N,O,H.uniforms,Y),bt(g,A,O,H.uniforms,L),Ze(g,N,A,O);else{var J=g.global.def("{}"),he=O.shader.progVar.append(g,A),ae=A.def(he,".id"),_e=A.def(J,"[",ae,"]");A(g.shared.gl,".useProgram(",he,".program);","if(!",_e,"){",_e,"=",J,"[",ae,"]=",g.link(function(We){return lt(vn,g,O,We,2)}),"(",he,");}",_e,".call(this,a0[",B,"],",B,");")}}function Z(g,T){var O=g.proc("batch",2);g.batchId="0",or(g,O);var H=!1,X=!0;Object.keys(T.context).forEach(function(J){H=H||T.context[J].propDep}),H||(nr(g,O,T.context),X=!1);var B=T.framebuffer,D=!1;B?(B.propDep?H=D=!0:B.contextDep&&H&&(D=!0),D||ir(g,O,B)):ir(g,O,null),T.state.viewport&&T.state.viewport.propDep&&(H=!0);function U(J){return J.contextDep&&H||J.propDep}hr(g,O,T),Ar(g,O,T.state,function(J){return!U(J)}),(!T.profile||!U(T.profile))&&nt(g,O,T,!1,"a1"),T.contextDep=H,T.needsContext=X,T.needsFramebuffer=D;var b=T.shader.progVar;if(b.contextDep&&H||b.propDep)R(g,O,T,null);else{var N=b.append(g,O);if(O(g.shared.gl,".useProgram(",N,".program);"),T.shader.program)R(g,O,T,T.shader.program);else{O(g.shared.vao,".setVAO(null);");var A=g.global.def("{}"),L=O.def(N,".id"),Y=O.def(A,"[",L,"]");O(g.cond(Y).then(Y,".call(this,a0,a1);").else(Y,"=",A,"[",L,"]=",g.link(function(J){return lt(R,g,T,J,2)}),"(",N,");",Y,".call(this,a0,a1);"))}}Object.keys(T.state).length>0&&O(g.shared.current,".dirty=true;")}function W(g,T){var O=g.proc("scope",3);g.batchId="a2";var H=g.shared,X=H.current;nr(g,O,T.context),T.framebuffer&&T.framebuffer.append(g,O),md(Object.keys(T.state)).forEach(function(D){var U=T.state[D],b=U.append(g,O);Gt(b)?b.forEach(function(N,A){O.set(g.next[D],"["+A+"]",N)}):O.set(H.next,"."+D,b)}),nt(g,O,T,!0,!0),[oi,ss,si,us,ai].forEach(function(D){var U=T.draw[D];U&&O.set(H.draw,"."+D,""+U.append(g,O))}),Object.keys(T.uniforms).forEach(function(D){O.set(H.uniforms,"["+y.id(D)+"]",T.uniforms[D].append(g,O))}),Object.keys(T.attributes).forEach(function(D){var U=T.attributes[D].append(g,O),b=g.scopeAttrib(D);Object.keys(new z).forEach(function(N){O.set(b,"."+N,U[N])})}),T.scopeVAO&&O.set(H.vao,".targetVAO",T.scopeVAO.append(g,O));function B(D){var U=T.shader[D];U&&O.set(H.shader,"."+D,U.append(g,O))}B(Wo),B(Ho),Object.keys(T.state).length>0&&(O(X,".dirty=true;"),O.exit(X,".dirty=true;")),O("a1(",g.shared.context,",a0,",g.batchId,");")}function De(g){if(!(typeof g!="object"||Gt(g))){for(var T=Object.keys(g),O=0;O<T.length;++O)if(nn.isDynamic(g[T[O]]))return!0;return!1}}function st(g,T,O){var H=T.static[O];if(!H||!De(H))return;var X=g.global,B=Object.keys(H),D=!1,U=!1,b=!1,N=g.global.def("{}");B.forEach(function(L){var Y=H[L];if(nn.isDynamic(Y)){typeof Y=="function"&&(Y=H[L]=nn.unbox(Y));var J=Fr(Y,null);D=D||J.thisDep,b=b||J.propDep,U=U||J.contextDep}else{switch(X(N,".",L,"="),typeof Y){case"number":X(Y);break;case"string":X('"',Y,'"');break;case"object":Array.isArray(Y)&&X("[",Y.join(),"]");break;default:X(g.link(Y));break}X(";")}});function A(L,Y){B.forEach(function(J){var he=H[J];if(nn.isDynamic(he)){var ae=L.invoke(Y,he);Y(N,".",J,"=",ae,";")}})}T.dynamic[O]=new nn.DynamicVariable(yl,{thisDep:D,contextDep:U,propDep:b,ref:N,append:A}),delete T.static[O]}function wt(g,T,O,H,X){var B=Je();B.stats=B.link(X),Object.keys(T.static).forEach(function(U){st(B,T,U)}),A1.forEach(function(U){st(B,g,U)});var D=Qt(g,T,O,H,B);return $t(B,D),W(B,D),Z(B,D),B.compile()}return{next:Le,current:se,procs:function(){var g=Je(),T=g.proc("poll"),O=g.proc("refresh"),H=g.block();T(H),O(H);var X=g.shared,B=X.gl,D=X.next,U=X.current;H(U,".dirty=false;"),ir(g,T),ir(g,O,null,!0);var b;ve&&(b=g.link(ve)),I.oes_vertex_array_object&&O(g.link(I.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var N=0;N<G.maxAttributes;++N){var A=O.def(X.attributes,"[",N,"]"),L=g.cond(A,".buffer");L.then(B,".enableVertexAttribArray(",N,");",B,".bindBuffer(",Wi,",",A,".buffer.buffer);",B,".vertexAttribPointer(",N,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(B,".disableVertexAttribArray(",N,");",B,".vertexAttrib4f(",N,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),O(L),ve&&O(b,".vertexAttribDivisorANGLE(",N,",",A,".divisor);")}return O(g.shared.vao,".currentVAO=null;",g.shared.vao,".setVAO(",g.shared.vao,".targetVAO);"),Object.keys(Ne).forEach(function(Y){var J=Ne[Y],he=H.def(D,".",Y),ae=g.block();ae("if(",he,"){",B,".enable(",J,")}else{",B,".disable(",J,")}",U,".",Y,"=",he,";"),O(ae),T("if(",he,"!==",U,".",Y,"){",ae,"}")}),Object.keys(ue).forEach(function(Y){var J=ue[Y],he=se[Y],ae,_e,We=g.block();if(We(B,".",J,"("),Gt(he)){var it=he.length;ae=g.global.def(D,".",Y),_e=g.global.def(U,".",Y),We(Vr(it,function(we){return ae+"["+we+"]"}),");",Vr(it,function(we){return _e+"["+we+"]="+ae+"["+we+"];"}).join("")),T("if(",Vr(it,function(we){return ae+"["+we+"]!=="+_e+"["+we+"]"}).join("||"),"){",We,"}")}else ae=H.def(D,".",Y),_e=H.def(U,".",Y),We(ae,");",U,".",Y,"=",ae,";"),T("if(",ae,"!==",_e,"){",We,"}");O(We)}),g.compile()}(),compile:wt}}function V1(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var W1=34918,H1=34919,gd=35007,X1=function(d,y){if(!y.ext_disjoint_timer_query)return null;var I=[];function G(){return I.pop()||y.ext_disjoint_timer_query.createQueryEXT()}function re(ve){I.push(ve)}var $=[];function Q(ve){var Ie=G();y.ext_disjoint_timer_query.beginQueryEXT(gd,Ie),$.push(Ie),de($.length-1,$.length,ve)}function me(){y.ext_disjoint_timer_query.endQueryEXT(gd)}function ge(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Re=[];function Ae(){return Re.pop()||new ge}function Te(ve){Re.push(ve)}var be=[];function de(ve,Ie,se){var Le=Ae();Le.startQueryIndex=ve,Le.endQueryIndex=Ie,Le.sum=0,Le.stats=se,be.push(Le)}var Se=[],z=[];function K(){var ve,Ie,se=$.length;if(se!==0){z.length=Math.max(z.length,se+1),Se.length=Math.max(Se.length,se+1),Se[0]=0,z[0]=0;var Le=0;for(ve=0,Ie=0;Ie<$.length;++Ie){var Ee=$[Ie];y.ext_disjoint_timer_query.getQueryObjectEXT(Ee,H1)?(Le+=y.ext_disjoint_timer_query.getQueryObjectEXT(Ee,W1),re(Ee)):$[ve++]=Ee,Se[Ie+1]=Le,z[Ie+1]=ve}for($.length=ve,ve=0,Ie=0;Ie<be.length;++Ie){var Ne=be[Ie],ue=Ne.startQueryIndex,Oe=Ne.endQueryIndex;Ne.sum+=Se[Oe]-Se[ue];var Xe=z[ue],Qe=z[Oe];Qe===Xe?(Ne.stats.gpuTime+=Ne.sum/1e6,Te(Ne)):(Ne.startQueryIndex=Xe,Ne.endQueryIndex=Qe,be[ve++]=Ne)}be.length=ve}}return{beginQuery:Q,endQuery:me,pushScopeStats:de,update:K,getNumPendingQueries:function(){return $.length},clear:function(){I.push.apply(I,$);for(var ve=0;ve<I.length;ve++)y.ext_disjoint_timer_query.deleteQueryEXT(I[ve]);$.length=0,I.length=0},restore:function(){$.length=0,I.length=0}}},j1=16384,G1=256,$1=1024,Y1=34962,Ed="webglcontextlost",yd="webglcontextrestored",Ad=1,Z1=2,K1=3;function Td(d,y){for(var I=0;I<d.length;++I)if(d[I]===y)return I;return-1}function q1(d){var y=$g(d);if(!y)return null;var I=y.gl,G=I.getContextAttributes(),re=I.isContextLost(),$=Yg(I,y);if(!$)return null;var Q=Wg(),me=V1(),ge=$.extensions,Re=X1(I,ge),Ae=Cf(),Te=I.drawingBufferWidth,be=I.drawingBufferHeight,de={tick:0,time:0,viewportWidth:Te,viewportHeight:be,framebufferWidth:Te,framebufferHeight:be,drawingBufferWidth:Te,drawingBufferHeight:be,pixelRatio:y.pixelRatio},Se={},z={elements:null,primitive:4,count:-1,offset:0,instances:-1},K=DE(I,ge),ve=qE(I,me,y,se),Ie=c1(I,ge,K,me,ve);function se(Ze){return Ie.destroyBuffer(Ze)}var Le=ly(I,ge,ve,me),Ee=p1(I,Q,me,y),Ne=Vy(I,ge,K,function(){Xe.procs.poll()},de,me,y),ue=Wy(I,ge,K,me,y),Oe=u1(I,ge,K,Ne,ue,me),Xe=z1(I,Q,ge,K,ve,Le,Ne,Oe,Se,Ie,Ee,z,de,Re,y),Qe=v1(I,Oe,Xe.procs.poll,de,G,ge,K),Me=Xe.next,ye=I.canvas,oe=[],Je=[],dt=[],Ve=[y.onDestroy],at=null;function et(){if(oe.length===0){Re&&Re.update(),at=null;return}at=Gu.next(et),Ar();for(var Ze=oe.length-1;Ze>=0;--Ze){var lt=oe[Ze];lt&&lt(de,null,0)}I.flush(),Re&&Re.update()}function ot(){!at&&oe.length>0&&(at=Gu.next(et))}function At(){at&&(Gu.cancel(et),at=null)}function qt(Ze){Ze.preventDefault(),re=!0,At(),Je.forEach(function(lt){lt()})}function ar(Ze){I.getError(),re=!1,$.restore(),Ee.restore(),ve.restore(),Ne.restore(),ue.restore(),Oe.restore(),Ie.restore(),Re&&Re.restore(),Xe.procs.refresh(),ot(),dt.forEach(function(lt){lt()})}ye&&(ye.addEventListener(Ed,qt,!1),ye.addEventListener(yd,ar,!1));function ct(){oe.length=0,At(),ye&&(ye.removeEventListener(Ed,qt),ye.removeEventListener(yd,ar)),Ee.clear(),Oe.clear(),ue.clear(),Ne.clear(),Le.clear(),ve.clear(),Ie.clear(),Re&&Re.clear(),Ve.forEach(function(Ze){Ze()})}function rr(Ze){x(!!Ze,"invalid args to regl({...})"),x.type(Ze,"object","invalid args to regl({...})");function lt(X){var B=n({},X);delete B.uniforms,delete B.attributes,delete B.context,delete B.vao,"stencil"in B&&B.stencil.op&&(B.stencil.opBack=B.stencil.opFront=B.stencil.op,delete B.stencil.op);function D(U){if(U in B){var b=B[U];delete B[U],Object.keys(b).forEach(function(N){B[U+"."+N]=b[N]})}}return D("blend"),D("depth"),D("cull"),D("stencil"),D("polygonOffset"),D("scissor"),D("sample"),"vao"in X&&(B.vao=X.vao),B}function gt(X){var B={},D={};return Object.keys(X).forEach(function(U){var b=X[U];nn.isDynamic(b)?D[U]=nn.unbox(b,U):B[U]=b}),{dynamic:D,static:B}}var $t=gt(Ze.context||{}),vn=gt(Ze.uniforms||{}),R=gt(Ze.attributes||{}),Z=gt(lt(Ze)),W={gpuTime:0,cpuTime:0,count:0},De=Xe.compile(Z,R,vn,$t,W),st=De.draw,wt=De.batch,g=De.scope,T=[];function O(X){for(;T.length<X;)T.push(null);return T}function H(X,B){var D;if(re&&x.raise("context lost"),typeof X=="function")return g.call(this,null,X,0);if(typeof B=="function")if(typeof X=="number")for(D=0;D<X;++D)g.call(this,null,B,D);else if(Array.isArray(X))for(D=0;D<X.length;++D)g.call(this,X[D],B,D);else return g.call(this,X,B,0);else if(typeof X=="number"){if(X>0)return wt.call(this,O(X|0),X|0)}else if(Array.isArray(X)){if(X.length)return wt.call(this,X,X.length)}else return st.call(this,X)}return n(H,{stats:W})}var Ut=Oe.setFBO=rr({framebuffer:nn.define.call(null,Ad,"framebuffer")});function Qt(Ze,lt){var gt=0;Xe.procs.poll();var $t=lt.color;$t&&(I.clearColor(+$t[0]||0,+$t[1]||0,+$t[2]||0,+$t[3]||0),gt|=j1),"depth"in lt&&(I.clearDepth(+lt.depth),gt|=G1),"stencil"in lt&&(I.clearStencil(lt.stencil|0),gt|=$1),x(!!gt,"called regl.clear with no buffer specified"),I.clear(gt)}function nr(Ze){if(x(typeof Ze=="object"&&Ze,"regl.clear() takes an object as input"),"framebuffer"in Ze)if(Ze.framebuffer&&Ze.framebuffer_reglType==="framebufferCube")for(var lt=0;lt<6;++lt)Ut(n({framebuffer:Ze.framebuffer.faces[lt]},Ze),Qt);else Ut(Ze,Qt);else Qt(null,Ze)}function ir(Ze){x.type(Ze,"function","regl.frame() callback must be a function"),oe.push(Ze);function lt(){var gt=Td(oe,Ze);x(gt>=0,"cannot cancel a frame twice");function $t(){var vn=Td(oe,$t);oe[vn]=oe[oe.length-1],oe.length-=1,oe.length<=0&&At()}oe[gt]=$t}return ot(),{cancel:lt}}function hr(){var Ze=Me.viewport,lt=Me.scissor_box;Ze[0]=Ze[1]=lt[0]=lt[1]=0,de.viewportWidth=de.framebufferWidth=de.drawingBufferWidth=Ze[2]=lt[2]=I.drawingBufferWidth,de.viewportHeight=de.framebufferHeight=de.drawingBufferHeight=Ze[3]=lt[3]=I.drawingBufferHeight}function Ar(){de.tick+=1,de.time=nt(),hr(),Xe.procs.poll()}function or(){hr(),Xe.procs.refresh(),Re&&Re.update()}function nt(){return(Cf()-Ae)/1e3}or();function gr(Ze,lt){x.type(lt,"function","listener callback must be a function");var gt;switch(Ze){case"frame":return ir(lt);case"lost":gt=Je;break;case"restore":gt=dt;break;case"destroy":gt=Ve;break;default:x.raise("invalid event, must be one of frame,lost,restore,destroy")}return gt.push(lt),{cancel:function(){for(var $t=0;$t<gt.length;++$t)if(gt[$t]===lt){gt[$t]=gt[gt.length-1],gt.pop();return}}}}var bt=n(rr,{clear:nr,prop:nn.define.bind(null,Ad),context:nn.define.bind(null,Z1),this:nn.define.bind(null,K1),draw:rr({}),buffer:function(Ze){return ve.create(Ze,Y1,!1,!1)},elements:function(Ze){return Le.create(Ze,!1)},texture:Ne.create2D,cube:Ne.createCube,renderbuffer:ue.create,framebuffer:Oe.create,framebufferCube:Oe.createCube,vao:Ie.createVAO,attributes:G,frame:ir,on:gr,limits:K,hasExtension:function(Ze){return K.extensions.indexOf(Ze.toLowerCase())>=0},read:Qe,destroy:ct,_gl:I,_refresh:or,poll:function(){Ar(),Re&&Re.update()},now:nt,stats:me});return y.onDone(null,bt),bt}return q1})})(Dg);var OP=Dg.exports;const IP=Io(OP);var MP=class{constructor(t,e){const{buffer:r,offset:n,stride:i,normalized:o,size:a,divisor:s}=e;this.buffer=r,this.attribute={buffer:r.get(),offset:n||0,stride:i||0,normalized:o||!1,divisor:s||0},a&&(this.attribute.size=a)}get(){return this.attribute}updateBuffer(t){this.buffer.subData(t)}destroy(){this.buffer.destroy()}},BP={[p.POINTS]:"points",[p.LINES]:"lines",[p.LINE_LOOP]:"line loop",[p.LINE_STRIP]:"line strip",[p.TRIANGLES]:"triangles",[p.TRIANGLE_FAN]:"triangle fan",[p.TRIANGLE_STRIP]:"triangle strip"},Fg={[p.STATIC_DRAW]:"static",[p.DYNAMIC_DRAW]:"dynamic",[p.STREAM_DRAW]:"stream"},xf={[p.BYTE]:"int8",[p.INT]:"int32",[p.UNSIGNED_BYTE]:"uint8",[p.UNSIGNED_SHORT]:"uint16",[p.UNSIGNED_INT]:"uint32",[p.FLOAT]:"float"},NP={[p.ALPHA]:"alpha",[p.LUMINANCE]:"luminance",[p.LUMINANCE_ALPHA]:"luminance alpha",[p.RGB]:"rgb",[p.RGBA]:"rgba",[p.RGBA4]:"rgba4",[p.RGB5_A1]:"rgb5 a1",[p.RGB565]:"rgb565",[p.DEPTH_COMPONENT]:"depth",[p.DEPTH_STENCIL]:"depth stencil"},PP={[p.DONT_CARE]:"dont care",[p.NICEST]:"nice",[p.FASTEST]:"fast"},Jm={[p.NEAREST]:"nearest",[p.LINEAR]:"linear",[p.LINEAR_MIPMAP_LINEAR]:"mipmap",[p.NEAREST_MIPMAP_LINEAR]:"nearest mipmap linear",[p.LINEAR_MIPMAP_NEAREST]:"linear mipmap nearest",[p.NEAREST_MIPMAP_NEAREST]:"nearest mipmap nearest"},ev={[p.REPEAT]:"repeat",[p.CLAMP_TO_EDGE]:"clamp",[p.MIRRORED_REPEAT]:"mirror"},LP={[p.NONE]:"none",[p.BROWSER_DEFAULT_WEBGL]:"browser"},DP={[p.NEVER]:"never",[p.ALWAYS]:"always",[p.LESS]:"less",[p.LEQUAL]:"lequal",[p.GREATER]:"greater",[p.GEQUAL]:"gequal",[p.EQUAL]:"equal",[p.NOTEQUAL]:"notequal"},tv={[p.FUNC_ADD]:"add",[p.MIN_EXT]:"min",[p.MAX_EXT]:"max",[p.FUNC_SUBTRACT]:"subtract",[p.FUNC_REVERSE_SUBTRACT]:"reverse subtract"},Vs={[p.ZERO]:"zero",[p.ONE]:"one",[p.SRC_COLOR]:"src color",[p.ONE_MINUS_SRC_COLOR]:"one minus src color",[p.SRC_ALPHA]:"src alpha",[p.ONE_MINUS_SRC_ALPHA]:"one minus src alpha",[p.DST_COLOR]:"dst color",[p.ONE_MINUS_DST_COLOR]:"one minus dst color",[p.DST_ALPHA]:"dst alpha",[p.ONE_MINUS_DST_ALPHA]:"one minus dst alpha",[p.CONSTANT_COLOR]:"constant color",[p.ONE_MINUS_CONSTANT_COLOR]:"one minus constant color",[p.CONSTANT_ALPHA]:"constant alpha",[p.ONE_MINUS_CONSTANT_ALPHA]:"one minus constant alpha",[p.SRC_ALPHA_SATURATE]:"src alpha saturate"},FP={[p.NEVER]:"never",[p.ALWAYS]:"always",[p.LESS]:"less",[p.LEQUAL]:"lequal",[p.GREATER]:"greater",[p.GEQUAL]:"gequal",[p.EQUAL]:"equal",[p.NOTEQUAL]:"notequal"},Ji={[p.ZERO]:"zero",[p.KEEP]:"keep",[p.REPLACE]:"replace",[p.INVERT]:"invert",[p.INCR]:"increment",[p.DECR]:"decrement",[p.INCR_WRAP]:"increment wrap",[p.DECR_WRAP]:"decrement wrap"},wP={[p.FRONT]:"front",[p.BACK]:"back"},UP=class{constructor(t,e){this.isDestroyed=!1;const{data:r,usage:n,type:i}=e;this.buffer=t.buffer({data:r,usage:Fg[n||p.STATIC_DRAW],type:xf[i||p.UNSIGNED_BYTE]})}get(){return this.buffer}destroy(){this.isDestroyed||this.buffer.destroy(),this.isDestroyed=!0}subData({data:t,offset:e}){this.buffer.subdata(t,e)}},kP=class{constructor(t,e){const{data:r,usage:n,type:i,count:o}=e;this.elements=t.elements({data:r,usage:Fg[n||p.STATIC_DRAW],type:xf[i||p.UNSIGNED_BYTE],count:o})}get(){return this.elements}subData({data:t}){this.elements.subdata(t)}destroy(){}},zP=class{constructor(t,e){const{width:r,height:n,color:i,colors:o}=e,a={width:r,height:n};Array.isArray(o)&&(a.colors=o.map(s=>s.get())),i&&typeof i!="boolean"&&(a.color=i.get()),this.framebuffer=t.framebuffer(a)}get(){return this.framebuffer}destroy(){this.framebuffer.destroy()}resize({width:t,height:e}){this.framebuffer.resize(t,e)}},VP=Object.defineProperty,WP=Object.defineProperties,HP=Object.getOwnPropertyDescriptors,rv=Object.getOwnPropertySymbols,XP=Object.prototype.hasOwnProperty,jP=Object.prototype.propertyIsEnumerable,nv=(t,e,r)=>e in t?VP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ma=(t,e)=>{for(var r in e||(e={}))XP.call(e,r)&&nv(t,r,e[r]);if(rv)for(var r of rv(e))jP.call(e,r)&&nv(t,r,e[r]);return t},GP=(t,e)=>WP(t,HP(e)),{isPlainObject:$P,isTypedArray:YP}=Mr,ZP=class{constructor(t,e){this.destroyed=!1,this.uniforms={},this.reGl=t;const{vs:r,fs:n,attributes:i,uniforms:o,primitive:a,count:s,elements:u,depth:l,cull:f,instances:c}=e,h={glslVersion:"#version 100",explicitBindingLocations:!1,separateSamplerTextures:!1,viewportOrigin:hn.LOWER_LEFT,clipSpaceNearZ:So.NEGATIVE_ONE},_={};this.options=e,o&&(this.uniforms=this.extractUniforms(o),Object.keys(o).forEach(P=>{_[P]=t.prop(P)}));const m={};Object.keys(i).forEach(P=>{m[P]=i[P].get()});const E=Nd(Co(h,"frag",n,null,!1)),S=Nd(Co(h,"vert",r,null,!1)),M={attributes:m,frag:E,uniforms:_,vert:S,colorMask:t.prop("colorMask"),lineWidth:1,blend:{enable:t.prop("blend.enable"),func:t.prop("blend.func"),equation:t.prop("blend.equation"),color:t.prop("blend.color")},stencil:{enable:t.prop("stencil.enable"),mask:t.prop("stencil.mask"),func:t.prop("stencil.func"),opFront:t.prop("stencil.opFront"),opBack:t.prop("stencil.opBack")},primitive:BP[a===void 0?p.TRIANGLES:a]};c&&(M.instances=c),s?M.count=s:u&&(M.elements=u.get()),this.initDepthDrawParams({depth:l},M),this.initCullDrawParams({cull:f},M),this.drawCommand=t(M),this.drawParams=M}updateAttributesAndElements(t,e){const r={};Object.keys(t).forEach(n=>{r[n]=t[n].get()}),this.drawParams.attributes=r,this.drawParams.elements=e.get(),this.drawCommand=this.reGl(this.drawParams)}updateAttributes(t){const e={};Object.keys(t).forEach(r=>{e[r]=t[r].get()}),this.drawParams.attributes=e,this.drawCommand=this.reGl(this.drawParams)}addUniforms(t){this.uniforms=ma(ma({},this.uniforms),this.extractUniforms(t))}draw(t,e){if(this.drawParams.attributes&&Object.keys(this.drawParams.attributes).length===0)return;const r=ma(ma({},this.uniforms),this.extractUniforms(t.uniforms||{})),n={};Object.keys(r).forEach(i=>{const o=typeof r[i];o==="boolean"||o==="number"||Array.isArray(r[i])||r[i].BYTES_PER_ELEMENT?n[i]=r[i]:n[i]=r[i].get()}),n.blend=e?this.getBlendDrawParams({blend:{enable:!1}}):this.getBlendDrawParams(t),n.stencil=this.getStencilDrawParams(t),n.colorMask=this.getColorMaskDrawParams(t,e),this.drawCommand(n)}destroy(){var t,e;(e=(t=this.drawParams)==null?void 0:t.elements)==null||e.destroy(),this.options.attributes&&Object.values(this.options.attributes).forEach(r=>{r?.destroy()}),this.destroyed=!0}initDepthDrawParams({depth:t},e){t&&(e.depth={enable:t.enable===void 0?!0:!!t.enable,mask:t.mask===void 0?!0:!!t.mask,func:DP[t.func||p.LESS],range:t.range||[0,1]})}getBlendDrawParams({blend:t}){const{enable:e,func:r,equation:n,color:i=[0,0,0,0]}=t||{};return{enable:!!e,func:{srcRGB:Vs[r&&r.srcRGB||p.SRC_ALPHA],srcAlpha:Vs[r&&r.srcAlpha||p.SRC_ALPHA],dstRGB:Vs[r&&r.dstRGB||p.ONE_MINUS_SRC_ALPHA],dstAlpha:Vs[r&&r.dstAlpha||p.ONE_MINUS_SRC_ALPHA]},equation:{rgb:tv[n&&n.rgb||p.FUNC_ADD],alpha:tv[n&&n.alpha||p.FUNC_ADD]},color:i}}getStencilDrawParams({stencil:t}){const{enable:e,mask:r=-1,func:n={cmp:p.ALWAYS,ref:0,mask:-1},opFront:i={fail:p.KEEP,zfail:p.KEEP,zpass:p.KEEP},opBack:o={fail:p.KEEP,zfail:p.KEEP,zpass:p.KEEP}}=t||{};return{enable:!!e,mask:r,func:GP(ma({},n),{cmp:FP[n.cmp]}),opFront:{fail:Ji[i.fail],zfail:Ji[i.zfail],zpass:Ji[i.zpass]},opBack:{fail:Ji[o.fail],zfail:Ji[o.zfail],zpass:Ji[o.zpass]}}}getColorMaskDrawParams({stencil:t},e){return t?.enable&&t.opFront&&!e?[!1,!1,!1,!1]:[!0,!0,!0,!0]}initCullDrawParams({cull:t},e){if(t){const{enable:r,face:n=p.BACK}=t;e.cull={enable:!!r,face:wP[n]}}}extractUniforms(t){const e={};return Object.keys(t).forEach(r=>{this.extractUniformsRecursively(r,t[r],e,"")}),e}extractUniformsRecursively(t,e,r,n){if(e===null||typeof e=="number"||typeof e=="boolean"||Array.isArray(e)&&typeof e[0]=="number"||YP(e)||e===""||"resize"in e){r[`${n&&n+"."}${t}`]=e;return}$P(e)&&Object.keys(e).forEach(i=>{this.extractUniformsRecursively(i,e[i],r,`${n&&n+"."}${t}`)}),Array.isArray(e)&&e.forEach((i,o)=>{Object.keys(i).forEach(a=>{this.extractUniformsRecursively(a,i[a],r,`${n&&n+"."}${t}[${o}]`)})})}},KP=class{constructor(t,e){this.isDestroy=!1;const{data:r,type:n=p.UNSIGNED_BYTE,width:i,height:o,flipY:a=!1,format:s=p.RGBA,mipmap:u=!1,wrapS:l=p.CLAMP_TO_EDGE,wrapT:f=p.CLAMP_TO_EDGE,aniso:c=0,alignment:h=1,premultiplyAlpha:_=!1,mag:m=p.NEAREST,min:E=p.NEAREST,colorSpace:S=p.BROWSER_DEFAULT_WEBGL,x:M=0,y:P=0,copy:F=!1}=e;this.width=i,this.height=o;const V={width:i,height:o,type:xf[n],format:NP[s],wrapS:ev[l],wrapT:ev[f],mag:Jm[m],min:Jm[E],alignment:h,flipY:a,colorSpace:LP[S],premultiplyAlpha:_,aniso:c,x:M,y:P,copy:F};r&&(V.data=r),typeof u=="number"?V.mipmap=PP[u]:typeof u=="boolean"&&(V.mipmap=u),this.texture=t.texture(V)}get(){return this.texture}update(t={}){this.texture(t)}bind(){this.texture._texture.bind()}resize({width:t,height:e}){this.texture.resize(t,e),this.width=t,this.height=e}getSize(){return[this.width,this.height]}destroy(){var t;this.isDestroy||(t=this.texture)==null||t.destroy(),this.isDestroy=!0}},fc=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),qP=class{constructor(){this.uniformBuffers=[],this.queryVerdorInfo=()=>"WebGL1",this.createModel=t=>new ZP(this.gl,t),this.createAttribute=t=>new MP(this.gl,t),this.createBuffer=t=>new UP(this.gl,t),this.createElements=t=>new kP(this.gl,t),this.createTexture2D=t=>new KP(this.gl,t),this.createFramebuffer=t=>new zP(this.gl,t),this.useFramebuffer=(t,e)=>{this.gl({framebuffer:t?t.get():null})(e)},this.useFramebufferAsync=(t,e)=>fc(this,null,function*(){this.gl({framebuffer:t?t.get():null})(e)}),this.clear=t=>{var e;const{color:r,depth:n,stencil:i,framebuffer:o=null}=t,a={color:r,depth:n,stencil:i};a.framebuffer=o===null?o:o.get(),(e=this.gl)==null||e.clear(a)},this.viewport=({x:t,y:e,width:r,height:n})=>{this.gl._gl.viewport(t,e,r,n),this.width=r,this.height=n,this.gl._refresh()},this.readPixels=t=>{const{framebuffer:e,x:r,y:n,width:i,height:o}=t,a={x:r,y:n,width:i,height:o};return e&&(a.framebuffer=e.get()),this.gl.read(a)},this.readPixelsAsync=t=>fc(this,null,function*(){return this.readPixels(t)}),this.getViewportSize=()=>({width:this.gl._gl.drawingBufferWidth,height:this.gl._gl.drawingBufferHeight}),this.getContainer=()=>{var t;return(t=this.canvas)==null?void 0:t.parentElement},this.getCanvas=()=>this.canvas,this.getGLContext=()=>this.gl._gl,this.destroy=()=>{var t,e,r;this.canvas=null,(r=(e=(t=this.gl)==null?void 0:t._gl)==null?void 0:e.getExtension("WEBGL_lose_context"))==null||r.loseContext(),this.gl.destroy(),this.gl=null}}init(t,e,r){return fc(this,null,function*(){this.canvas=t,r?this.gl=r:this.gl=yield new Promise((n,i)=>{IP({canvas:this.canvas,attributes:{alpha:!0,antialias:e.antialias,premultipliedAlpha:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,stencil:e.stencil},extensions:["OES_element_index_uint","OES_standard_derivatives","ANGLE_instanced_arrays"],optionalExtensions:["oes_texture_float_linear","OES_texture_float","EXT_texture_filter_anisotropic","EXT_blend_minmax","WEBGL_depth_texture","WEBGL_lose_context"],profile:!0,onDone:(o,a)=>{(o||!a)&&i(o),n(a)}})}),this.extensionObject={OES_texture_float:this.testExtension("OES_texture_float")}})}getPointSizeRange(){return this.gl._gl.getParameter(this.gl._gl.ALIASED_POINT_SIZE_RANGE)}testExtension(t){return!!this.getGLContext().getExtension(t)}setState(){this.gl({cull:{enable:!1,face:"back"},viewport:{x:0,y:0,height:this.width,width:this.height},blend:{enable:!0,equation:"add"},framebuffer:null}),this.gl._refresh()}setBaseState(){this.gl({cull:{enable:!1,face:"back"},viewport:{x:0,y:0,height:this.width,width:this.height},blend:{enable:!1,equation:"add"},framebuffer:null}),this.gl._refresh()}setCustomLayerDefaults(){const t=this.getGLContext();t.disable(t.CULL_FACE)}setDirty(t){this.isDirty=t}getDirty(){return this.isDirty}beginFrame(){}endFrame(){}},hc=["selectstart","selecting","selectend"],QP=class extends Kn.EventEmitter{constructor(t,e={}){super(),this.isEnable=!1,this.onDragStart=r=>{this.box.style.display="block",this.startEvent=this.endEvent=r,this.syncBoxBound(),this.emit("selectstart",this.getLngLatBox(),this.startEvent,this.endEvent)},this.onDragging=r=>{this.endEvent=r,this.syncBoxBound(),this.emit("selecting",this.getLngLatBox(),this.startEvent,this.endEvent)},this.onDragEnd=r=>{this.endEvent=r,this.box.style.display="none",this.emit("selectend",this.getLngLatBox(),this.startEvent,this.endEvent)},this.scene=t,this.options=e}get container(){return this.scene.getMapService().getMarkerContainer()}enable(){if(this.isEnable)return;const{className:t}=this.options;if(this.scene.setMapStatus({dragEnable:!1}),this.container.style.cursor="crosshair",!this.box){const e=yt("div",void 0,this.container);e.classList.add("l7-select-box"),t&&e.classList.add(t),e.style.display="none",this.box=e}this.scene.on("dragstart",this.onDragStart),this.scene.on("dragging",this.onDragging),this.scene.on("dragend",this.onDragEnd),this.isEnable=!0}disable(){this.isEnable&&(this.scene.setMapStatus({dragEnable:!0}),this.container.style.cursor="auto",this.scene.off("dragstart",this.onDragStart),this.scene.off("dragging",this.onDragging),this.scene.off("dragend",this.onDragEnd),this.isEnable=!1)}syncBoxBound(){const{x:t,y:e}=this.startEvent,{x:r,y:n}=this.endEvent,i=Math.min(t,r),o=Math.min(e,n),a=Math.abs(t-r),s=Math.abs(e-n);this.box.style.top=`${o}px`,this.box.style.left=`${i}px`,this.box.style.width=`${a}px`,this.box.style.height=`${s}px`}getLngLatBox(){const{lngLat:{lng:t,lat:e}}=this.startEvent,{lngLat:{lng:r,lat:n}}=this.endEvent;return BA([[t,e],[r,n]])}},JP=Object.defineProperty,eL=Object.defineProperties,tL=Object.getOwnPropertyDescriptors,iv=Object.getOwnPropertySymbols,rL=Object.prototype.hasOwnProperty,nL=Object.prototype.propertyIsEnumerable,ov=(t,e,r)=>e in t?JP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,iL=(t,e)=>{for(var r in e||(e={}))rL.call(e,r)&&ov(t,r,e[r]);if(iv)for(var r of iv(e))nL.call(e,r)&&ov(t,r,e[r]);return t},oL=(t,e)=>eL(t,tL(e)),va=(t,e,r)=>new Promise((n,i)=>{var o=u=>{try{s(r.next(u))}catch(l){i(l)}},a=u=>{try{s(r.throw(u))}catch(l){i(l)}},s=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,a);s((r=r.apply(t,e)).next())}),VL=class{constructor(t){const{id:e,map:r,renderer:n="device"}=t,i=NA();this.container=i,r.setContainer(i,e),n==="regl"?i.rendererService=new qP:i.rendererService=new CP,this.sceneService=i.sceneService,this.mapService=i.mapService,this.iconService=i.iconService,this.fontService=i.fontService,this.controlService=i.controlService,this.layerService=i.layerService,this.debugService=i.debugService,this.debugService.setEnable(t.debug),this.markerService=i.markerService,this.interactionService=i.interactionService,this.popupService=i.popupService,this.boxSelect=new QP(this,{}),this.initComponent(e),this.sceneService.init(t),this.initControl()}get map(){return this.mapService.map}get loaded(){return this.sceneService.loaded}getServiceContainer(){return this.container}getSize(){return this.mapService.getSize()}getMinZoom(){return this.mapService.getMinZoom()}getMaxZoom(){return this.mapService.getMaxZoom()}getType(){return this.mapService.getType()}getMapContainer(){return this.mapService.getMapContainer()}getMapCanvasContainer(){return this.mapService.getMapCanvasContainer()}getMapService(){return this.mapService}getDebugService(){return this.debugService}exportPng(t){return va(this,null,function*(){return this.sceneService.exportPng(t)})}exportMap(t){return va(this,null,function*(){return this.sceneService.exportPng(t)})}registerRenderService(t){this.sceneService.loaded?new t(this).init():this.on("loaded",()=>{new t(this).init()})}setBgColor(t){this.mapService.setBgColor(t)}addLayer(t){this.loaded?this.preAddLayer(t):this.once("loaded",()=>{this.preAddLayer(t)})}preAddLayer(t){const e=co(this.container);if(t.setContainer(e),this.sceneService.addLayer(t),t.inited){this.initTileLayer(t);const r=this.initMask(t);this.addMask(r,t.id)}else t.on("inited",()=>{this.initTileLayer(t);const r=this.initMask(t);this.addMask(r,t.id)})}initMask(t){const{mask:e,maskfence:r,maskColor:n="#000",maskOpacity:i=0}=t.getLayerConfig();return!e||!r?void 0:new pg().source(r).shape("fill").style({color:n,opacity:i})}addMask(t,e){if(!t)return;const r=this.getLayer(e);if(r){const n=co(this.container);t.setContainer(n),r.addMaskLayer(t),this.sceneService.addMask(t)}else console.warn("parent layer not find!")}getPickedLayer(){return this.layerService.pickedLayerId}getLayers(){return this.layerService.getLayers()}getLayer(t){return this.layerService.getLayer(t)}getLayerByName(t){return this.layerService.getLayerByName(t)}removeLayer(t,e){return va(this,null,function*(){yield this.layerService.remove(t,e)})}removeAllLayer(){return va(this,null,function*(){yield this.layerService.removeAllLayers()})}render(){this.sceneService.render()}setEnableRender(t){this.layerService.setEnableRender(t)}addIconFont(t,e){this.fontService.addIconFont(t,e)}addIconFonts(t){t.forEach(([e,r])=>{this.fontService.addIconFont(e,r)})}addFontFace(t,e){this.fontService.once("fontloaded",r=>{this.emit("fontloaded",r)}),this.fontService.addFontFace(t,e)}addImage(t,e){return va(this,null,function*(){yield this.iconService.addImage(t,e)})}hasImage(t){return this.iconService.hasImage(t)}removeImage(t){this.iconService.removeImage(t)}addIconFontGlyphs(t,e){this.fontService.addIconGlyphs(e)}addControl(t){this.controlService.addControl(t,this.container)}removeControl(t){this.controlService.removeControl(t)}getControlByName(t){return this.controlService.getControlByName(t)}addMarker(t){this.markerService.addMarker(t)}addMarkerLayer(t){this.markerService.addMarkerLayer(t)}removeMarkerLayer(t){this.markerService.removeMarkerLayer(t)}removeAllMarkers(){this.markerService.removeAllMarkers()}removeAllMakers(){console.warn("removeAllMakers 已废弃，请使用 removeAllMarkers"),this.markerService.removeAllMarkers()}addPopup(t){this.popupService.addPopup(t)}removePopup(t){this.popupService.removePopup(t)}on(t,e){var r;hc.includes(t)?(r=this.boxSelect)==null||r.on(t,e):Ss.includes(t)?this.sceneService.on(t,e):this.mapService.on(t,e)}once(t,e){var r;hc.includes(t)?(r=this.boxSelect)==null||r.once(t,e):Ss.includes(t)?this.sceneService.once(t,e):this.mapService.once(t,e)}emit(t,e){Ss.includes(t)?this.sceneService.emit(t,e):this.mapService.on(t,e)}off(t,e){var r;hc.includes(t)?(r=this.boxSelect)==null||r.off(t,e):Ss.includes(t)?this.sceneService.off(t,e):this.mapService.off(t,e)}getZoom(){return this.mapService.getZoom()}getCenter(t){return this.mapService.getCenter(t)}setCenter(t,e){return this.mapService.setCenter(t,e)}getPitch(){return this.mapService.getPitch()}setPitch(t){return this.mapService.setPitch(t)}getRotation(){return this.mapService.getRotation()}getBounds(){return this.mapService.getBounds()}setRotation(t){this.mapService.setRotation(t)}zoomIn(){this.mapService.zoomIn()}zoomOut(){this.mapService.zoomOut()}panTo(t){this.mapService.panTo(t)}panBy(t,e){this.mapService.panBy(t,e)}getContainer(){return this.mapService.getContainer()}setZoom(t){this.mapService.setZoom(t)}fitBounds(t,e){const{fitBoundsOptions:r,animate:n}=this.sceneService.getSceneConfig();this.mapService.fitBounds(t,e||oL(iL({},r),{animate:n}))}setZoomAndCenter(t,e){this.mapService.setZoomAndCenter(t,e)}setMapStyle(t){this.mapService.setMapStyle(t)}setMapStatus(t){this.mapService.setMapStatus(t)}pixelToLngLat(t){return this.mapService.pixelToLngLat(t)}lngLatToPixel(t){return this.mapService.lngLatToPixel(t)}containerToLngLat(t){return this.mapService.containerToLngLat(t)}lngLatToContainer(t){return this.mapService.lngLatToContainer(t)}destroy(){this.sceneService.destroy()}registerPostProcessingPass(t){this.container.postProcessingPass.name=new t}enableShaderPick(){this.layerService.enableShaderPick()}diasbleShaderPick(){this.layerService.disableShaderPick()}enableBoxSelect(t=!0){this.boxSelect.enable(),t&&this.boxSelect.once("selectend",()=>{this.disableBoxSelect()})}disableBoxSelect(){this.boxSelect.disable()}static addProtocol(t,e){Hs.REGISTERED_PROTOCOLS[t]=e}static removeProtocol(t){delete Hs.REGISTERED_PROTOCOLS[t]}getProtocol(t){return Hs.REGISTERED_PROTOCOLS[t]}startAnimate(){this.layerService.startAnimate()}stopAnimate(){this.layerService.stopAnimate()}getPointSizeRange(){return this.sceneService.getPointSizeRange()}initComponent(t){this.controlService.init({container:fv(t)},this.container),this.markerService.init(this.container),this.popupService.init(this.container)}initControl(){const{logoVisible:t,logoPosition:e}=this.sceneService.getSceneConfig();t&&this.addControl(new Nb({position:e}))}initTileLayer(t){t.getSource().isTile&&(t.tileLayer=new b4(t))}},WL="2.23.1";export{jA as AJAXError,Be as AttributeType,jL as BKDRHash,GL as BaiduMap,$r as BaseLayer,$L as BaseMapService,YL as BaseMapWrapper,Et as BaseModel,ZL as BasePostProcessingPass,Wn as BlendType,wu as ButtonControl,li as CameraUniform,xL as CanvasLayer,V2 as CanvasUpdateType,RL as CityBuildingLayer,yn as Control,KL as CoordinateSystem,Xi as CoordinateUniform,qL as DOM,QL as Earth,FL as EarthLayer,_L as ExportImage,KA as FrequencyController,mL as Fullscreen,JL as GaodeMap,eD as GaodeMapV1,tD as GaodeMapV2,vL as GeoLocate,bL as GeometryLayer,rD as GoogleMap,CL as HeatmapLayer,_r as IDebugLog,xr as ILayerStage,UO as ImageLayer,nD as InteractionEvent,iD as LRUCache,zL as LayerPopup,gL as LayerSwitch,ig as LineLayer,U_ as LinearDir,oD as LoadTileDataStatus,Nb as Logo,aD as Map,sD as MapLibre,uD as MapServiceEvent,EL as MapTheme,lD as Mapbox,Ob as Marker,pL as MarkerLayer,pg as MaskLayer,dv as MaskOperation,yL as MouseLocation,cD as PassType,Uc as PointLayer,gf as PolygonLayer,Bb as PopperControl,Q4 as Popup,go as PositionType,Ef as RasterLayer,Sr as RasterTileType,fL as Satistics,AL as Scale,Lt as ScaleTypes,VL as Scene,Hs as SceneConifg,Ss as SceneEventList,u0 as SelectControl,pf as SizeUnitType,Cb as Source,fD as SourceTile,_c as StencilType,$i as StyleScaleType,UL as Swipe,hD as TMap,dD as TencentMap,z2 as TextureBlend,nu as TextureUsage,DL as TileDebugLayer,b4 as TileLayer,rA as TilesetManager,pD as UpdateTileStrategy,_D as Viewport,wL as WindLayer,kL as Zoom,en as aProjectFlat,mD as amap2Project,vD as amap2UnProject,iu as anchorTranslate,Jc as anchorType,Rv as applyAnchorClass,nA as bBoxToBounds,bv as bindAll,lv as boundsContains,gD as calAngle,ED as calDistance,vi as calculateCentroid,SA as calculatePointsCenterAndRadius,co as createLayerContainer,NA as createSceneContainer,pc as decodePickingColor,Qo as defaultValue,yD as djb2hash,eu as encodePickingColor,Nv as expandUrl,tA as extent,AD as flow,ZA as formatImage,lr as fp64LowPart,_A as generateCatRamp,hv as generateColorRamp,dA as generateCustomRamp,hA as generateLinearRamp,pA as generateQuantizeRamp,TD as getAngle,Qc as getArrayBuffer,BA as getBBoxFromPoints,YA as getData,Kc as getDefaultDomain,gc as getImage,$A as getJSON,qc as getProtocolAction,SD as getReferrer,xD as getTileIndices,RD as getTileWarpXY,fo as getURLFromTemplate,lT as getWMTSURLFromTemplate,p as gl,gA as globalConfigService,bD as guid,CD as isAndroid,OD as isColor,J1 as isImageBitmap,ID as isNumber,uv as isPC,hL as isURLTemplate,MD as isWorker,BD as isiOS,ND as latitude,Gd as lineAtOffset,cL as lineAtOffsetAsyc,SL as lineStyleType,fA as lngLatInExtent,Ws as lngLatToMeters,lA as lnglatDistance,Mr as lodashUtil,PD as longitude,GA as makeXMLHttpRequestPromise,LD as metersToLngLat,cA as normalize,DD as osmLonLat2TileXY,FD as osmTileXY2LonLat,wD as packCircleVertex,Js as padBounds,uL as postData,UD as project,Nd as removeDuplicateUniforms,Ft as rgb2arr,lL as sameOrigin,Q1 as tileToBounds,kD as tranfrormCoord,zD as unProjectFlat,VD as validateLngLat,WL as version};
