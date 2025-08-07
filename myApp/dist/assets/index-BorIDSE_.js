(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Pw=()=>{};var G_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Iw=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],u=n[t++],d=((o&7)<<18|(a&63)<<12|(c&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,u=c?n[o+1]:0,d=o+2<n.length,h=d?n[o+2]:0,p=a>>2,g=(a&3)<<4|u>>4;let v=(u&15)<<2|h>>6,x=h&63;d||(x=64,c||(v=64)),i.push(t[p],t[g],t[v],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bx(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Iw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],u=o<n.length?t[n.charAt(o)]:0;++o;const h=o<n.length?t[n.charAt(o)]:64;++o;const g=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||u==null||h==null||g==null)throw new Dw;const v=a<<2|u>>4;if(i.push(v),h!==64){const x=u<<4&240|h>>2;if(i.push(x),g!==64){const E=h<<6&192|g;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lw=function(n){const e=Bx(n);return pm.encodeByteArray(e,!0)},Vx=function(n){return Lw(n).replace(/\./g,"")},zx=function(n){try{return pm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=()=>Hx().__FIREBASE_DEFAULTS__,Uw=()=>{if(typeof process>"u"||typeof G_>"u")return;const n=G_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ow=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zx(n[1]);return e&&JSON.parse(e)},mm=()=>{try{return Pw()||Nw()||Uw()||Ow()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fw=n=>{var e,t;return(t=(e=mm())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Gx=()=>{var n;return(n=mm())==null?void 0:n.config},Wx=n=>{var e;return(e=mm())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kw(n){return(await fetch(n,{credentials:"include"})).ok}const il={};function Bw(){const n={prod:[],emulator:[]};for(const e of Object.keys(il))il[e]?n.emulator.push(e):n.prod.push(e);return n}function Vw(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let W_=!1;function zw(n,e){if(typeof window>"u"||typeof document>"u"||!Zu(window.location.host)||il[n]===e||il[n]||W_)return;il[n]=e;function t(v){return`__firebase__banner__${v}`}const i="__firebase__banner",a=Bw().prod.length>0;function c(){const v=document.getElementById(i);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function d(v,x){v.setAttribute("width","24"),v.setAttribute("id",x),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{W_=!0,c()},v}function p(v,x){v.setAttribute("id",x),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=Vw(i),x=t("text"),E=document.getElementById(x)||document.createElement("span"),M=t("learnmore"),S=document.getElementById(M)||document.createElement("a"),y=t("preprendIcon"),I=document.getElementById(y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const b=v.element;u(b),p(S,M);const C=h();d(I,y),b.append(I,E,S,C),document.body.appendChild(b)}a?(E.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(I.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Un())}function Gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ww(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){const n=Un();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function $w(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="FirebaseError";class fs extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=qw,Object.setPrototypeOf(this,fs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?Kw(a,i):"Error",u=`${this.serviceName}: ${c} (${o}).`;return new fs(o,u,i)}}function Kw(n,e){return n.replace(Yw,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const Yw=/\{\$([^}]+)}/g;function Zw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ta(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(j_(a)&&j_(c)){if(!ta(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function j_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Jw(n,e){const t=new Qw(n,e);return t.subscribe.bind(t)}class Qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");eA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Gd),o.error===void 0&&(o.error=Gd),o.complete===void 0&&(o.complete=Gd);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=1e3,nA=2,iA=14400*1e3,rA=.5;function sA(n,e=tA,t=nA){const i=e*Math.pow(t,n),o=Math.round(rA*i*(Math.random()-.5)*2);return Math.min(iA,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){return n&&n._delegate?n._delegate:n}class ss{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ul;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lA(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);i===u&&c.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:aA(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aA(n){return n===Os?void 0:n}function lA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ft||(Ft={}));const uA={debug:Ft.DEBUG,verbose:Ft.VERBOSE,info:Ft.INFO,warn:Ft.WARN,error:Ft.ERROR,silent:Ft.SILENT},fA=Ft.INFO,dA={[Ft.DEBUG]:"log",[Ft.VERBOSE]:"log",[Ft.INFO]:"info",[Ft.WARN]:"warn",[Ft.ERROR]:"error"},hA=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=dA[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vm{constructor(e){this.name=e,this._logLevel=fA,this._logHandler=hA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ft))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ft.DEBUG,...e),this._logHandler(this,Ft.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ft.VERBOSE,...e),this._logHandler(this,Ft.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ft.INFO,...e),this._logHandler(this,Ft.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ft.WARN,...e),this._logHandler(this,Ft.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ft.ERROR,...e),this._logHandler(this,Ft.ERROR,...e)}}const pA=(n,e)=>e.some(t=>n instanceof t);let X_,$_;function mA(){return X_||(X_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gA(){return $_||($_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jx=new WeakMap,Kh=new WeakMap,Xx=new WeakMap,Wd=new WeakMap,_m=new WeakMap;function vA(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(es(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&jx.set(t,n)}).catch(()=>{}),_m.set(e,n),e}function _A(n){if(Kh.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Kh.set(n,e)}let Yh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Kh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xx.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yA(n){Yh=n(Yh)}function xA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(jd(this),e,...t);return Xx.set(i,e.sort?e.sort():[e]),es(i)}:gA().includes(n)?function(...e){return n.apply(jd(this),e),es(jx.get(this))}:function(...e){return es(n.apply(jd(this),e))}}function SA(n){return typeof n=="function"?xA(n):(n instanceof IDBTransaction&&_A(n),pA(n,mA())?new Proxy(n,Yh):n)}function es(n){if(n instanceof IDBRequest)return vA(n);if(Wd.has(n))return Wd.get(n);const e=SA(n);return e!==n&&(Wd.set(n,e),_m.set(e,n)),e}const jd=n=>_m.get(n);function EA(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),u=es(c);return i&&c.addEventListener("upgradeneeded",d=>{i(es(c.result),d.oldVersion,d.newVersion,es(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{a&&d.addEventListener("close",()=>a()),o&&d.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const TA=["get","getKey","getAll","getAllKeys","count"],MA=["put","add","delete","clear"],Xd=new Map;function q_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=MA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||TA.includes(t)))return;const a=async function(c,...u){const d=this.transaction(c,o?"readwrite":"readonly");let h=d.store;return i&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),o&&d.done]))[0]};return Xd.set(e,a),a}yA(n=>({...n,get:(e,t,i)=>q_(e,t)||n.get(e,t,i),has:(e,t)=>!!q_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AA(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function AA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zh="@firebase/app",K_="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new vm("@firebase/app"),CA="@firebase/app-compat",RA="@firebase/analytics-compat",bA="@firebase/analytics",PA="@firebase/app-check-compat",IA="@firebase/app-check",DA="@firebase/auth",LA="@firebase/auth-compat",NA="@firebase/database",UA="@firebase/data-connect",OA="@firebase/database-compat",FA="@firebase/functions",kA="@firebase/functions-compat",BA="@firebase/installations",VA="@firebase/installations-compat",zA="@firebase/messaging",HA="@firebase/messaging-compat",GA="@firebase/performance",WA="@firebase/performance-compat",jA="@firebase/remote-config",XA="@firebase/remote-config-compat",$A="@firebase/storage",qA="@firebase/storage-compat",KA="@firebase/firestore",YA="@firebase/ai",ZA="@firebase/firestore-compat",JA="firebase",QA="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",e1={[Zh]:"fire-core",[CA]:"fire-core-compat",[bA]:"fire-analytics",[RA]:"fire-analytics-compat",[IA]:"fire-app-check",[PA]:"fire-app-check-compat",[DA]:"fire-auth",[LA]:"fire-auth-compat",[NA]:"fire-rtdb",[UA]:"fire-data-connect",[OA]:"fire-rtdb-compat",[FA]:"fire-fn",[kA]:"fire-fn-compat",[BA]:"fire-iid",[VA]:"fire-iid-compat",[zA]:"fire-fcm",[HA]:"fire-fcm-compat",[GA]:"fire-perf",[WA]:"fire-perf-compat",[jA]:"fire-rc",[XA]:"fire-rc-compat",[$A]:"fire-gcs",[qA]:"fire-gcs-compat",[KA]:"fire-fst",[ZA]:"fire-fst-compat",[YA]:"fire-vertex","fire-js":"fire-js",[JA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map,t1=new Map,Qh=new Map;function Y_(n,e){try{n.container.addComponent(e)}catch(t){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ys(n){const e=n.name;if(Qh.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,n);for(const t of Ou.values())Y_(t,n);for(const t of t1.values())Y_(t,n);return!0}function Ju(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ni(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new ca("app","Firebase",n1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=QA;function $x(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Jh,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw ts.create("bad-app-name",{appName:String(o)});if(t||(t=Gx()),!t)throw ts.create("no-options");const a=Ou.get(o);if(a){if(ta(t,a.options)&&ta(i,a.config))return a;throw ts.create("duplicate-app",{appName:o})}const c=new cA(o);for(const d of Qh.values())c.addComponent(d);const u=new i1(t,i,c);return Ou.set(o,u),u}function qx(n=Jh){const e=Ou.get(n);if(!e&&n===Jh&&Gx())return $x();if(!e)throw ts.create("no-app",{appName:n});return e}function $s(n,e,t){let i=e1[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(c.join(" "));return}Ys(new ss(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="firebase-heartbeat-database",s1=1,fl="firebase-heartbeat-store";let $d=null;function Kx(){return $d||($d=EA(r1,s1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fl)}catch(t){console.warn(t)}}}}).catch(n=>{throw ts.create("idb-open",{originalErrorMessage:n.message})})),$d}async function o1(n){try{const t=(await Kx()).transaction(fl),i=await t.objectStore(fl).get(Yx(n));return await t.done,i}catch(e){if(e instanceof fs)dr.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(t.message)}}}async function Z_(n,e){try{const i=(await Kx()).transaction(fl,"readwrite");await i.objectStore(fl).put(e,Yx(n)),await i.done}catch(t){if(t instanceof fs)dr.warn(t.message);else{const i=ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dr.warn(i.message)}}}function Yx(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=1024,l1=30;class c1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new f1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=J_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>l1){const c=d1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=J_(),{heartbeatsToSend:i,unsentEntries:o}=u1(this._heartbeatsCache.heartbeats),a=Vx(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return dr.warn(t),""}}}function J_(){return new Date().toISOString().substring(0,10)}function u1(n,e=a1){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Q_(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Q_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class f1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?$w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await o1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Z_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Z_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Q_(n){return Vx(JSON.stringify({version:2,heartbeats:n})).length}function d1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(n){Ys(new ss("platform-logger",e=>new wA(e),"PRIVATE")),Ys(new ss("heartbeat",e=>new c1(e),"PRIVATE")),$s(Zh,K_,n),$s(Zh,K_,"esm2020"),$s("fire-js","")}h1("");var p1="firebase",m1="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$s(p1,m1,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Map,Zx={activated:!1,tokenObservers:[]},g1={initialized:!1,enabled:!1};function cn(n){return ep.get(n)||{...Zx}}function v1(n,e){return ep.set(n,e),ep.get(n)}function Qu(){return g1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="https://content-firebaseappcheck.googleapis.com/v1",_1="exchangeRecaptchaEnterpriseToken",y1="exchangeDebugToken",e0={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},x1=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,t,i,o,a){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=o,this.upperBound=a,this.pending=null,this.nextErrorWaitInterval=o,o>a)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ul,this.pending.promise.catch(t=>{}),await E1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ul,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function E1(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Gn=new ca("appCheck","AppCheck",T1);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n=!1){var e;return n?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function ym(n){if(!cn(n).activated)throw Gn.create("use-before-activation",{appName:n.name})}function Qx(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),i=Math.floor((e-t*3600*24)/3600),o=Math.floor((e-t*3600*24-i*3600)/60),a=e-t*3600*24-i*3600-o*60;let c="";return t&&(c+=jc(t)+"d:"),i&&(c+=jc(i)+"h:"),c+=jc(o)+"m:"+jc(a)+"s",c}function jc(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm({url:n,body:e},t){const i={"Content-Type":"application/json"},o=t.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&(i["X-Firebase-Client"]=g)}const a={method:"POST",body:JSON.stringify(e),headers:i};let c;try{c=await fetch(n,a)}catch(g){throw Gn.create("fetch-network-error",{originalErrorMessage:g==null?void 0:g.message})}if(c.status!==200)throw Gn.create("fetch-status-error",{httpStatus:c.status});let u;try{u=await c.json()}catch(g){throw Gn.create("fetch-parse-error",{originalErrorMessage:g==null?void 0:g.message})}const d=u.ttl.match(/^([\d.]+)(s)$/);if(!d||!d[2]||isNaN(Number(d[1])))throw Gn.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const h=Number(d[1])*1e3,p=Date.now();return{token:u.token,expireTimeMillis:p+h,issuedAtTimeMillis:p}}function M1(n,e){const{projectId:t,appId:i,apiKey:o}=n.options;return{url:`${Jx}/projects/${t}/apps/${i}:${_1}?key=${o}`,body:{recaptcha_enterprise_token:e}}}function eS(n,e){const{projectId:t,appId:i,apiKey:o}=n.options;return{url:`${Jx}/projects/${t}/apps/${i}:${y1}?key=${o}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="firebase-app-check-database",A1=1,dl="firebase-app-check-store",tS="debug-token";let Xc=null;function nS(){return Xc||(Xc=new Promise((n,e)=>{try{const t=indexedDB.open(w1,A1);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var o;e(Gn.create("storage-open",{originalErrorMessage:(o=i.target.error)==null?void 0:o.message}))},t.onupgradeneeded=i=>{const o=i.target.result;switch(i.oldVersion){case 0:o.createObjectStore(dl,{keyPath:"compositeKey"})}}}catch(t){e(Gn.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Xc)}function C1(n){return rS(sS(n))}function R1(n,e){return iS(sS(n),e)}function b1(n){return iS(tS,n)}function P1(){return rS(tS)}async function iS(n,e){const i=(await nS()).transaction(dl,"readwrite"),a=i.objectStore(dl).put({compositeKey:n,value:e});return new Promise((c,u)=>{a.onsuccess=d=>{c()},i.onerror=d=>{var h;u(Gn.create("storage-set",{originalErrorMessage:(h=d.target.error)==null?void 0:h.message}))}})}async function rS(n){const t=(await nS()).transaction(dl,"readonly"),o=t.objectStore(dl).get(n);return new Promise((a,c)=>{o.onsuccess=u=>{const d=u.target.result;a(d?d.value:void 0)},t.onerror=u=>{var d;c(Gn.create("storage-get",{originalErrorMessage:(d=u.target.error)==null?void 0:d.message}))}})}function sS(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new vm("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(n){if(gm()){let e;try{e=await C1(n)}catch(t){Qr.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function qd(n,e){return gm()?R1(n,e).catch(t=>{Qr.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function D1(){let n;try{n=await P1()}catch{}if(n)return n;{const e=crypto.randomUUID();return b1(e).catch(t=>Qr.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){return Qu().enabled}async function Em(){const n=Qu();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function L1(){const n=Hx(),e=Qu();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new ul;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(D1())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={error:"UNKNOWN_ERROR"};function U1(n){return pm.encodeString(JSON.stringify(n),!1)}async function tp(n,e=!1,t=!1){const i=n.app;ym(i);const o=cn(i);let a=o.token,c;if(a&&!Vo(a)&&(o.token=void 0,a=void 0),!a){const h=await o.cachedTokenPromise;h&&(Vo(h)?a=h:await qd(i,void 0))}if(!e&&a&&Vo(a))return{token:a.token};let u=!1;if(Sm())try{o.exchangeTokenPromise||(o.exchangeTokenPromise=xm(eS(i,await Em()),n.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),u=!0);const h=await o.exchangeTokenPromise;return await qd(i,h),o.token=h,{token:h.token}}catch(h){return h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Qr.warn(h.message):t&&Qr.error(h),Kd(h)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),u=!0),a=await cn(i).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Qr.warn(h.message):t&&Qr.error(h),c=h}let d;return a?c?Vo(a)?d={token:a.token,internalError:c}:d=Kd(c):(d={token:a.token},o.token=a,await qd(i,a)):d=Kd(c),u&&lS(i,d),d}async function O1(n){const e=n.app;ym(e);const{provider:t}=cn(e);if(Sm()){const i=await Em(),{token:o}=await xm(eS(e,i),n.heartbeatServiceProvider);return{token:o}}else{const{token:i}=await t.getToken();return{token:i}}}function oS(n,e,t,i){const{app:o}=n,a=cn(o),c={next:t,error:i,type:e};if(a.tokenObservers=[...a.tokenObservers,c],a.token&&Vo(a.token)){const u=a.token;Promise.resolve().then(()=>{t({token:u.token}),n0(n)}).catch(()=>{})}a.cachedTokenPromise.then(()=>n0(n))}function aS(n,e){const t=cn(n),i=t.tokenObservers.filter(o=>o.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function n0(n){const{app:e}=n,t=cn(e);let i=t.tokenRefresher;i||(i=F1(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function F1(n){const{app:e}=n;return new S1(async()=>{const t=cn(e);let i;if(t.token?i=await tp(n,!0):i=await tp(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=cn(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const o=t.token.expireTimeMillis-300*1e3;return i=Math.min(i,o),Math.max(0,i-Date.now())}else return 0},e0.RETRIAL_MIN_WAIT,e0.RETRIAL_MAX_WAIT)}function lS(n,e){const t=cn(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Vo(n){return n.expireTimeMillis-Date.now()>0}function Kd(n){return{token:U1(N1),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=cn(this.app);for(const t of e)aS(this.app,t.next);return Promise.resolve()}}function B1(n,e){return new k1(n,e)}function V1(n){return{getToken:e=>tp(n,e),getLimitedUseToken:()=>O1(n),addTokenListener:e=>oS(n,"INTERNAL",e),removeTokenListener:e=>aS(n.app,e)}}const z1="@firebase/app-check",H1="0.11.0",G1="https://www.google.com/recaptcha/enterprise.js";function W1(n,e){const t=new ul,i=cn(n);i.reCAPTCHAState={initialized:t};const o=j1(n),a=t0(!0);return a?i0(n,e,a,o,t):q1(()=>{const c=t0(!0);if(!c)throw new Error("no recaptcha");i0(n,e,c,o,t)}),t.promise}function i0(n,e,t,i,o){t.ready(()=>{$1(n,e,t,i),o.resolve(t)})}function j1(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function X1(n){ym(n);const t=await cn(n).reCAPTCHAState.initialized.promise;return new Promise((i,o)=>{const a=cn(n).reCAPTCHAState;t.ready(()=>{i(t.execute(a.widgetId,{action:"fire_app_check"}))})})}function $1(n,e,t,i){const o=t.render(i,{sitekey:e,size:"invisible",callback:()=>{cn(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{cn(n).reCAPTCHAState.succeeded=!1}}),a=cn(n);a.reCAPTCHAState={...a.reCAPTCHAState,widgetId:o}}function q1(n){const e=document.createElement("script");e.src=G1,e.onload=n,document.head.appendChild(e)}class Tm{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var i,o,a;Y1(this._throttleData);const e=await X1(this._app).catch(c=>{throw Gn.create("recaptcha-error")});if(!((i=cn(this._app).reCAPTCHAState)!=null&&i.succeeded))throw Gn.create("recaptcha-error");let t;try{t=await xm(M1(this._app,e),this._heartbeatServiceProvider)}catch(c){throw(o=c.code)!=null&&o.includes("fetch-status-error")?(this._throttleData=K1(Number((a=c.customData)==null?void 0:a.httpStatus),this._throttleData),Gn.create("initial-throttle",{time:Qx(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):c}return this._throttleData=null,t}initialize(e){this._app=e,this._heartbeatServiceProvider=Ju(e,"heartbeat"),W1(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Tm?this._siteKey===e._siteKey:!1}}function K1(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+x1,httpStatus:n};{const t=e?e.backoffCount:0,i=sA(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+i,httpStatus:n}}}function Y1(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Gn.create("throttled",{time:Qx(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(n=qx(),e){n=ds(n);const t=Ju(n,"app-check");if(Qu().initialized||L1(),Sm()&&Em().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(a.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&a.provider.isEqual(e.provider))return o;throw Gn.create("already-initialized",{appName:n.name})}const i=t.initialize({options:e});return J1(n,e.provider,e.isTokenAutoRefreshEnabled),cn(n).isTokenAutoRefreshEnabled&&oS(i,"INTERNAL",()=>{}),i}function J1(n,e,t=!1){const i=v1(n,{...Zx});i.activated=!0,i.provider=e,i.cachedTokenPromise=I1(n).then(o=>(o&&Vo(o)&&(i.token=o,lS(n,{token:o.token})),o)),i.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&Qr.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),i.provider.initialize(n)}const Q1="app-check",r0="app-check-internal";function eC(){Ys(new ss(Q1,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return B1(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(r0).initialize()})),Ys(new ss(r0,n=>{const e=n.getProvider("app-check").getImmediate();return V1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),$s(z1,H1)}eC();function cS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tC=cS,uS=new ca("auth","Firebase",cS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new vm("@firebase/auth");function nC(n,...e){Fu.logLevel<=Ft.WARN&&Fu.warn(`Auth (${wl}): ${n}`,...e)}function Eu(n,...e){Fu.logLevel<=Ft.ERROR&&Fu.error(`Auth (${wl}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,...e){throw Mm(n,...e)}function ki(n,...e){return Mm(n,...e)}function fS(n,e,t){const i={...tC(),[e]:t};return new ca("auth","Firebase",i).create(e,{appName:n.name})}function ns(n){return fS(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return uS.create(n,...e)}function lt(n,e,...t){if(!n)throw Mm(e,...t)}function ar(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Eu(e),new Error(e)}function pr(n,e){n||ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function iC(){return s0()==="http:"||s0()==="https:"}function s0(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iC()||Ww()||"connection"in navigator)?navigator.onLine:!0}function sC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.shortDelay=e,this.longDelay=t,pr(t>e,"Short delay should be less than long delay!"),this.isMobile=Hw()||jw()}get(){return rC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){pr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lC=new Al(3e4,6e4);function ef(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ua(n,e,t,i,o={}){return hS(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const u=Ml({key:n.config.apiKey,...c}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:d,...a};return Gw()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Zu(n.emulatorConfig.host)&&(h.credentials="include"),dS.fetch()(await mS(n,n.config.apiHost,t,u),h)})}async function hS(n,e,t){n._canInitEmulator=!1;const i={...oC,...e};try{const o=new cC(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw $c(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const u=a.ok?c.errorMessage:c.error.message,[d,h]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw $c(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw $c(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw $c(n,"user-disabled",c);const p=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw fS(n,p,h);hr(n,p)}}catch(o){if(o instanceof fs)throw o;hr(n,"network-request-failed",{message:String(o)})}}async function pS(n,e,t,i,o={}){const a=await ua(n,e,t,i,o);return"mfaPendingCredential"in a&&hr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function mS(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?wm(n.config,o):`${n.config.apiScheme}://${o}`;return aC.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}class cC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ki(this.auth,"network-request-failed")),lC.get())})}}function $c(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ki(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(n,e){return ua(n,"POST","/v1/accounts:delete",e)}async function ku(n,e){return ua(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fC(n,e=!1){const t=ds(n),i=await t.getIdToken(e),o=Am(i);lt(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:rl(Yd(o.auth_time)),issuedAtTime:rl(Yd(o.iat)),expirationTime:rl(Yd(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Yd(n){return Number(n)*1e3}function Am(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const o=zx(t);return o?JSON.parse(o):(Eu("Failed to decode base64 JWT payload"),null)}catch(o){return Eu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function o0(n){const e=Am(n);return lt(e,"internal-error"),lt(typeof e.exp<"u","internal-error"),lt(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof fs&&dC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function dC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rl(this.lastLoginAt),this.creationTime=rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bu(n){var g;const e=n.auth,t=await n.getIdToken(),i=await hl(n,ku(e,{idToken:t}));lt(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=(g=o.providerUserInfo)!=null&&g.length?gS(o.providerUserInfo):[],c=mC(n.providerData,a),u=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),h=u?d:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ip(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function pC(n){const e=ds(n);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mC(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function gS(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(n,e){const t=await hS(n,{},async()=>{const i=Ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await mS(n,o,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:u,body:i};return n.emulatorConfig&&Zu(n.emulatorConfig.host)&&(d.credentials="include"),dS.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vC(n,e){return ua(n,"POST","/v2/accounts:revokeToken",ef(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){lt(e.idToken,"internal-error"),lt(typeof e.idToken<"u","internal-error"),lt(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):o0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){lt(e.length!==0,"internal-error");const t=o0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(lt(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await gC(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new qo;return i&&(lt(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(lt(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(lt(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n,e){lt(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ai{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new hC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ip(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await hl(this,this.stsTokenManager.getToken(this.auth,e));return lt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fC(this,e)}reload(){return pC(this)}_assign(e){this!==e&&(lt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){lt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ni(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await hl(this,uC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,u=t.tenantId??void 0,d=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:x,providerData:E,stsTokenManager:M}=t;lt(g&&M,e,"internal-error");const S=qo.fromJSON(this.name,M);lt(typeof g=="string",e,"internal-error"),Vr(i,e.name),Vr(o,e.name),lt(typeof v=="boolean",e,"internal-error"),lt(typeof x=="boolean",e,"internal-error"),Vr(a,e.name),Vr(c,e.name),Vr(u,e.name),Vr(d,e.name),Vr(h,e.name),Vr(p,e.name);const y=new Ai({uid:g,auth:e,email:o,emailVerified:v,displayName:i,isAnonymous:x,photoURL:c,phoneNumber:a,tenantId:u,stsTokenManager:S,createdAt:h,lastLoginAt:p});return E&&Array.isArray(E)&&(y.providerData=E.map(I=>({...I}))),d&&(y._redirectEventId=d),y}static async _fromIdTokenResponse(e,t,i=!1){const o=new qo;o.updateFromServerResponse(t);const a=new Ai({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Bu(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];lt(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?gS(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),u=new qo;u.updateFromIdToken(i);const d=new Ai({uid:o.localId,auth:e,stsTokenManager:u,isAnonymous:c}),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ip(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Map;function lr(n){pr(n instanceof Function,"Expected a class definition");let e=a0.get(n);return e?(pr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,a0.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vS.type="NONE";const l0=vS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n,e,t){return`firebase:${n}:${e}:${t}`}class Ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Tu(this.userKey,o.apiKey,a),this.fullPersistenceKey=Tu("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ku(this.auth,{idToken:e}).catch(()=>{});return t?Ai._fromGetAccountInfoResponse(this.auth,t,e):null}return Ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ko(lr(l0),e,i);const o=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let a=o[0]||lr(l0);const c=Tu(i,e.config.apiKey,e.name);let u=null;for(const h of t)try{const p=await h._get(c);if(p){let g;if(typeof p=="string"){const v=await ku(e,{idToken:p}).catch(()=>{});if(!v)break;g=await Ai._fromGetAccountInfoResponse(e,v,p)}else g=Ai._fromJSON(e,p);h!==a&&(u=g),a=h;break}}catch{}const d=o.filter(h=>h._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new Ko(a,e,i):(a=d[0],u&&await a._set(c,u.toJSON()),await Promise.all(t.map(async h=>{if(h!==a)try{await h._remove(c)}catch{}})),new Ko(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TS(e))return"Blackberry";if(MS(e))return"Webos";if(yS(e))return"Safari";if((e.includes("chrome/")||xS(e))&&!e.includes("edge/"))return"Chrome";if(ES(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _S(n=Un()){return/firefox\//i.test(n)}function yS(n=Un()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xS(n=Un()){return/crios\//i.test(n)}function SS(n=Un()){return/iemobile/i.test(n)}function ES(n=Un()){return/android/i.test(n)}function TS(n=Un()){return/blackberry/i.test(n)}function MS(n=Un()){return/webos/i.test(n)}function Cm(n=Un()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _C(n=Un()){var e;return Cm(n)&&!!((e=window.navigator)!=null&&e.standalone)}function yC(){return Xw()&&document.documentMode===10}function wS(n=Un()){return Cm(n)||ES(n)||MS(n)||TS(n)||/windows phone/i.test(n)||SS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(n,e=[]){let t;switch(n){case"Browser":t=c0(Un());break;case"Worker":t=`${c0(Un())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wl}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,u)=>{try{const d=e(a);c(d)}catch(d){u(d)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(n,e={}){return ua(n,"GET","/v2/passwordPolicy",ef(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=6;class TC{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??EC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new u0(this),this.idTokenSubscription=new u0(this),this.beforeStateQueue=new xC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await Ko.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ku(this,{idToken:e}),i=await Ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(Ni(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(a=this.redirectUser)==null?void 0:a._redirectEventId,u=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===u)&&(d!=null&&d.user)&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return lt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ni(this.app))return Promise.reject(ns(this));const t=e?ds(e):null;return t&&lt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&lt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ni(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ni(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SC(this),t=new TC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ca("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await vC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lr(e)||this._popupRedirectResolver;lt(t,this,"argument-error"),this.redirectPersistenceManager=await Ko.create(this,[lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(lt(u,this,"internal-error"),u.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,i,o);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return lt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ni(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&nC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tf(n){return ds(n)}class u0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jw(t=>this.observer=t)}get next(){return lt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wC(n){Rm=n}function AC(n){return Rm.loadJS(n)}function CC(){return Rm.gapiScript}function RC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(n,e){const t=Ju(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(ta(a,e??{}))return o;hr(o,"already-initialized")}return t.initialize({options:e})}function PC(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(lr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function IC(n,e,t){const i=tf(n);lt(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=CS(e),{host:c,port:u}=DC(e),d=u===null?"":`:${u}`,h={url:`${a}//${c}${d}/`},p=Object.freeze({host:c,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){lt(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),lt(ta(h,i.config.emulator)&&ta(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Zu(c)?(kw(`${a}//${c}${d}`),zw("Auth",!0)):LC()}function CS(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DC(n){const e=CS(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:f0(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:f0(c)}}}function f0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,t){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(n,e){return pS(n,"POST","/v1/accounts:signInWithIdp",ef(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="http://localhost";class Zs extends RS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...a}=t;if(!i||!o)return null;const c=new Zs(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Yo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Yo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yo(e,t)}buildRequest(){const e={requestUri:NC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends bS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Cl{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Kr.credential(t,i)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Cl{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Cl{constructor(){super("twitter.com")}static credential(e,t){return Zs._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Zr.credential(t,i)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(n,e){return pS(n,"POST","/v1/accounts:signUp",ef(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Ai._fromIdTokenResponse(e,i,o),c=d0(i);return new os({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=d0(i);return new os({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function d0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(n){var o;if(Ni(n.app))return Promise.reject(ns(n));const e=tf(n);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new os({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await UC(e,{returnSecureToken:!0}),i=await os._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends fs{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Vu(e,t,i,o)}}function PS(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(n,a,e,i):a})}async function FC(n,e,t=!1){const i=await hl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return os._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(n,e,t=!1){const{auth:i}=n;if(Ni(i.app))return Promise.reject(ns(i));const o="reauthenticate";try{const a=await hl(n,PS(i,o,e,n),t);lt(a.idToken,i,"internal-error");const c=Am(a.idToken);lt(c,i,"internal-error");const{sub:u}=c;return lt(n.uid===u,i,"user-mismatch"),os._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&hr(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(n,e,t=!1){if(Ni(n.app))return Promise.reject(ns(n));const i="signIn",o=await PS(n,i,e),a=await os._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}function VC(n,e,t,i){return ds(n).onIdTokenChanged(e,t,i)}function zC(n,e,t){return ds(n).beforeAuthStateChanged(e,t)}function HC(n,e,t,i){return ds(n).onAuthStateChanged(e,t,i)}const zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zu,"1"),this.storage.removeItem(zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=1e3,WC=10;class DS extends IS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,u,d)=>{this.notifyListeners(c,d)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);yC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,WC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}DS.type="LOCAL";const jC=DS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS extends IS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}LS.type="SESSION";const NS=LS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new nf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const u=Array.from(c).map(async h=>h(t.origin,a)),d=await XC(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((u,d)=>{const h=bm("",20);o.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(g){const v=g;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(p),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(v.data.response);break;default:clearTimeout(p),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){return window}function qC(n){Bi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof Bi().WorkerGlobalScope<"u"&&typeof Bi().importScripts=="function"}async function KC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ZC(){return US()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="firebaseLocalStorageDb",JC=1,Hu="firebaseLocalStorage",FS="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rf(n,e){return n.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function QC(){const n=indexedDB.deleteDatabase(OS);return new Rl(n).toPromise()}function rp(){const n=indexedDB.open(OS,JC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Hu,{keyPath:FS})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Hu)?e(i):(i.close(),await QC(),e(await rp()))})})}async function h0(n,e,t){const i=rf(n,!0).put({[FS]:e,value:t});return new Rl(i).toPromise()}async function eR(n,e){const t=rf(n,!1).get(e),i=await new Rl(t).toPromise();return i===void 0?null:i.value}function p0(n,e){const t=rf(n,!0).delete(e);return new Rl(t).toPromise()}const tR=800,nR=3;class kS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>nR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return US()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nf._getInstance(ZC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await KC(),!this.activeServiceWorker)return;this.sender=new $C(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rp();return await h0(e,zu,"1"),await p0(e,zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>h0(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>eR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>p0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=rf(o,!1).getAll();return new Rl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kS.type="LOCAL";const iR=kS;new Al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(n,e){return e?lr(e):(lt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends RS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sR(n){return BC(n.auth,new Pm(n),n.bypassAuthState)}function oR(n){const{auth:e,user:t}=n;return lt(t,e,"internal-error"),kC(t,new Pm(n),n.bypassAuthState)}async function aR(n){const{auth:e,user:t}=n;return lt(t,e,"internal-error"),FC(t,new Pm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:u}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return oR;default:hr(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new Al(2e3,1e4);class zo extends BS{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,zo.currentPopupAction&&zo.currentPopupAction.cancel(),zo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return lt(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ki(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ki(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ki(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}zo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="pendingRedirect",Mu=new Map;class uR extends BS{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const i=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(n,e){const t=pR(e),i=hR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function dR(n,e){Mu.set(n._key(),e)}function hR(n){return lr(n._redirectPersistence)}function pR(n){return Tu(cR,n.config.apiKey,n.name)}async function mR(n,e,t=!1){if(Ni(n.app))return Promise.reject(ns(n));const i=tf(n),o=rR(i,e),c=await new uR(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=600*1e3;class vR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_R(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!VS(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(ki(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has(m0(e))}saveEventToCache(e){this.cachedEventUids.add(m0(e)),this.lastProcessedEventTime=Date.now()}}function m0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function VS({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _R(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VS(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(n,e={}){return ua(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SR=/^https?/;async function ER(n){if(n.config.emulator)return;const{authorizedDomains:e}=await yR(n);for(const t of e)try{if(TR(t))return}catch{}hr(n,"unauthorized-domain")}function TR(n){const e=np(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!SR.test(t))return!1;if(xR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new Al(3e4,6e4);function g0(){const n=Bi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wR(n){return new Promise((e,t)=>{var o,a,c;function i(){g0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{g0(),t(ki(n,"network-request-failed"))},timeout:MR.get()})}if((a=(o=Bi().gapi)==null?void 0:o.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((c=Bi().gapi)!=null&&c.load)i();else{const u=RC("iframefcb");return Bi()[u]=()=>{gapi.load?i():t(ki(n,"network-request-failed"))},AC(`${CC()}?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw wu=null,e})}let wu=null;function AR(n){return wu=wu||wR(n),wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new Al(5e3,15e3),RR="__/auth/iframe",bR="emulator/auth/iframe",PR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DR(n){const e=n.config;lt(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wm(e,bR):`https://${n.config.authDomain}/${RR}`,i={apiKey:e.apiKey,appName:n.name,v:wl},o=IR.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Ml(i).slice(1)}`}async function LR(n){const e=await AR(n),t=Bi().gapi;return lt(t,n,"internal-error"),e.open({where:document.body,url:DR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PR,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=ki(n,"network-request-failed"),u=Bi().setTimeout(()=>{a(c)},CR.get());function d(){Bi().clearTimeout(u),o(i)}i.ping(d).then(d,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UR=500,OR=600,FR="_blank",kR="http://localhost";class v0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(n,e,t,i=UR,o=OR){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const d={...NR,width:i.toString(),height:o.toString(),top:a,left:c},h=Un().toLowerCase();t&&(u=xS(h)?FR:t),_S(h)&&(e=e||kR,d.scrollbars="yes");const p=Object.entries(d).reduce((v,[x,E])=>`${v}${x}=${E},`,"");if(_C(h)&&u!=="_self")return VR(e||"",u),new v0(null);const g=window.open(e||"",u,p);lt(g,n,"popup-blocked");try{g.focus()}catch{}return new v0(g)}function VR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="__/auth/handler",HR="emulator/auth/handler",GR=encodeURIComponent("fac");async function _0(n,e,t,i,o,a){lt(n.config.authDomain,n,"auth-domain-config-required"),lt(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:wl,eventId:o};if(e instanceof bS){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Zw(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))c[p]=g}if(e instanceof Cl){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(c.scopes=p.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const d=await n._getAppCheckToken(),h=d?`#${GR}=${encodeURIComponent(d)}`:"";return`${WR(n)}?${Ml(u).slice(1)}${h}`}function WR({config:n}){return n.emulator?wm(n,HR):`https://${n.authDomain}/${zR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="webStorageSupport";class jR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NS,this._completeRedirectFn=mR,this._overrideRedirectResult=dR}async _openPopup(e,t,i,o){var c;pr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const a=await _0(e,t,i,np(),o);return BR(e,a,bm())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await _0(e,t,i,np(),o);return qC(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(pr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await LR(e),i=new vR(e);return t.register("authEvent",o=>(lt(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zd,{type:Zd},o=>{var c;const a=(c=o==null?void 0:o[0])==null?void 0:c[Zd];a!==void 0&&t(!!a),hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ER(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wS()||yS()||Cm()}}const XR=jR;var y0="@firebase/auth",x0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){lt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KR(n){Ys(new ss("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=i.options;lt(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:c,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AS(n)},h=new MC(i,o,a,d);return PC(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ys(new ss("auth-internal",e=>{const t=tf(e.getProvider("auth").getImmediate());return(i=>new $R(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$s(y0,x0,qR(n)),$s(y0,x0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=300,ZR=Wx("authIdTokenMaxAge")||YR;let S0=null;const JR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ZR)return;const o=t==null?void 0:t.token;S0!==o&&(S0=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function QR(n=qx()){const e=Ju(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bC(n,{popupRedirectResolver:XR,persistence:[iR,jC,NS]}),i=Wx("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=JR(a.toString());zC(t,c,()=>c(t.currentUser)),VC(t,u=>c(u))}}const o=Fw("auth");return o&&IC(t,`http://${o}`),t}function eb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}wC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=ki("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",eb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KR("Browser");const tb={apiKey:"AIzaSyBwhy3ZWHvYf5r9c7TrabP7ONCG5CXftgk",authDomain:"ai-hub-8f387.firebaseapp.com",projectId:"ai-hub-8f387",storageBucket:"ai-hub-8f387.firebasestorage.app",messagingSenderId:"721658943205",appId:"1:721658943205:web:36e4e757a3f8b45f71a60c",measurementId:"G-6ESG13BJGF"},zS=$x(tb);Z1(zS,{provider:new Tm("6LeUEpErAAAAAHJn66FWfNdoc9QSsqxjeVpj6DPa"),isTokenAutoRefreshEnabled:!0});const Im=QR(zS);Im.useDeviceLanguage();OC(Im);HC(Im,n=>{n==null?console.log("user, not found"):console.log("user, logged in")});var Jd={exports:{}},qa={},Qd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function nb(){if(E0)return mt;E0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(U,te,Be){this.props=U,this.context=te,this.refs=M,this.updater=Be||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function I(U,te,Be){this.props=U,this.context=te,this.refs=M,this.updater=Be||x}var b=I.prototype=new y;b.constructor=I,E(b,S.prototype),b.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function H(U,te,Be){var ke,Y={},pe=null,he=null;if(te!=null)for(ke in te.ref!==void 0&&(he=te.ref),te.key!==void 0&&(pe=""+te.key),te)N.call(te,ke)&&!F.hasOwnProperty(ke)&&(Y[ke]=te[ke]);var Ae=arguments.length-2;if(Ae===1)Y.children=Be;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];Y.children=Ie}if(U&&U.defaultProps)for(ke in Ae=U.defaultProps,Ae)Y[ke]===void 0&&(Y[ke]=Ae[ke]);return{$$typeof:n,type:U,key:pe,ref:he,props:Y,_owner:k.current}}function P(U,te){return{$$typeof:n,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function O(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Be){return te[Be]})}var le=/\/+/g;function re(U,te){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):te.toString(36)}function ae(U,te,Be,ke,Y){var pe=typeof U;(pe==="undefined"||pe==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(pe){case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case n:case e:he=!0}}if(he)return he=U,Y=Y(he),U=ke===""?"."+re(he,0):ke,C(Y)?(Be="",U!=null&&(Be=U.replace(le,"$&/")+"/"),ae(Y,te,Be,"",function(Ze){return Ze})):Y!=null&&(R(Y)&&(Y=P(Y,Be+(!Y.key||he&&he.key===Y.key?"":(""+Y.key).replace(le,"$&/")+"/")+U)),te.push(Y)),1;if(he=0,ke=ke===""?".":ke+":",C(U))for(var Ae=0;Ae<U.length;Ae++){pe=U[Ae];var Ie=ke+re(pe,Ae);he+=ae(pe,te,Be,Ie,Y)}else if(Ie=v(U),typeof Ie=="function")for(U=Ie.call(U),Ae=0;!(pe=U.next()).done;)pe=pe.value,Ie=ke+re(pe,Ae++),he+=ae(pe,te,Be,Ie,Y);else if(pe==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return he}function fe(U,te,Be){if(U==null)return U;var ke=[],Y=0;return ae(U,ke,"","",function(pe){return te.call(Be,pe,Y++)}),ke}function ce(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(Be){(U._status===0||U._status===-1)&&(U._status=1,U._result=Be)},function(Be){(U._status===0||U._status===-1)&&(U._status=2,U._result=Be)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var ie={current:null},V={transition:null},se={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function ne(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:fe,forEach:function(U,te,Be){fe(U,function(){te.apply(this,arguments)},Be)},count:function(U){var te=0;return fe(U,function(){te++}),te},toArray:function(U){return fe(U,function(te){return te})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=S,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=I,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,mt.act=ne,mt.cloneElement=function(U,te,Be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ke=E({},U.props),Y=U.key,pe=U.ref,he=U._owner;if(te!=null){if(te.ref!==void 0&&(pe=te.ref,he=k.current),te.key!==void 0&&(Y=""+te.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Ie in te)N.call(te,Ie)&&!F.hasOwnProperty(Ie)&&(ke[Ie]=te[Ie]===void 0&&Ae!==void 0?Ae[Ie]:te[Ie])}var Ie=arguments.length-2;if(Ie===1)ke.children=Be;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];ke.children=Ae}return{$$typeof:n,type:U.type,key:Y,ref:pe,props:ke,_owner:he}},mt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},mt.createElement=H,mt.createFactory=function(U){var te=H.bind(null,U);return te.type=U,te},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:u,render:U}},mt.isValidElement=R,mt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:ce}},mt.memo=function(U,te){return{$$typeof:h,type:U,compare:te===void 0?null:te}},mt.startTransition=function(U){var te=V.transition;V.transition={};try{U()}finally{V.transition=te}},mt.unstable_act=ne,mt.useCallback=function(U,te){return ie.current.useCallback(U,te)},mt.useContext=function(U){return ie.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return ie.current.useDeferredValue(U)},mt.useEffect=function(U,te){return ie.current.useEffect(U,te)},mt.useId=function(){return ie.current.useId()},mt.useImperativeHandle=function(U,te,Be){return ie.current.useImperativeHandle(U,te,Be)},mt.useInsertionEffect=function(U,te){return ie.current.useInsertionEffect(U,te)},mt.useLayoutEffect=function(U,te){return ie.current.useLayoutEffect(U,te)},mt.useMemo=function(U,te){return ie.current.useMemo(U,te)},mt.useReducer=function(U,te,Be){return ie.current.useReducer(U,te,Be)},mt.useRef=function(U){return ie.current.useRef(U)},mt.useState=function(U){return ie.current.useState(U)},mt.useSyncExternalStore=function(U,te,Be){return ie.current.useSyncExternalStore(U,te,Be)},mt.useTransition=function(){return ie.current.useTransition()},mt.version="18.3.1",mt}var T0;function Dm(){return T0||(T0=1,Qd.exports=nb()),Qd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function ib(){if(M0)return qa;M0=1;var n=Dm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:v,ref:x,props:g,_owner:o.current}}return qa.Fragment=t,qa.jsx=c,qa.jsxs=c,qa}var w0;function rb(){return w0||(w0=1,Jd.exports=ib()),Jd.exports}var be=rb(),dt=Dm(),qc={},eh={exports:{}},zn={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function sb(){return A0||(A0=1,function(n){function e(V,se){var ne=V.length;V.push(se);e:for(;0<ne;){var U=ne-1>>>1,te=V[U];if(0<o(te,se))V[U]=se,V[ne]=te,ne=U;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var se=V[0],ne=V.pop();if(ne!==se){V[0]=ne;e:for(var U=0,te=V.length,Be=te>>>1;U<Be;){var ke=2*(U+1)-1,Y=V[ke],pe=ke+1,he=V[pe];if(0>o(Y,ne))pe<te&&0>o(he,Y)?(V[U]=he,V[pe]=ne,U=pe):(V[U]=Y,V[ke]=ne,U=ke);else if(pe<te&&0>o(he,ne))V[U]=he,V[pe]=ne,U=pe;else break e}}return se}function o(V,se){var ne=V.sortIndex-se.sortIndex;return ne!==0?ne:V.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,g=null,v=3,x=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var se=t(h);se!==null;){if(se.callback===null)i(h);else if(se.startTime<=V)i(h),se.sortIndex=se.expirationTime,e(d,se);else break;se=t(h)}}function C(V){if(M=!1,b(V),!E)if(t(d)!==null)E=!0,ce(N);else{var se=t(h);se!==null&&ie(C,se.startTime-V)}}function N(V,se){E=!1,M&&(M=!1,y(H),H=-1),x=!0;var ne=v;try{for(b(se),g=t(d);g!==null&&(!(g.expirationTime>se)||V&&!O());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var te=U(g.expirationTime<=se);se=n.unstable_now(),typeof te=="function"?g.callback=te:g===t(d)&&i(d),b(se)}else i(d);g=t(d)}if(g!==null)var Be=!0;else{var ke=t(h);ke!==null&&ie(C,ke.startTime-se),Be=!1}return Be}finally{g=null,v=ne,x=!1}}var k=!1,F=null,H=-1,P=5,R=-1;function O(){return!(n.unstable_now()-R<P)}function le(){if(F!==null){var V=n.unstable_now();R=V;var se=!0;try{se=F(!0,V)}finally{se?re():(k=!1,F=null)}}else k=!1}var re;if(typeof I=="function")re=function(){I(le)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,fe=ae.port2;ae.port1.onmessage=le,re=function(){fe.postMessage(null)}}else re=function(){S(le,0)};function ce(V){F=V,k||(k=!0,re())}function ie(V,se){H=S(function(){V(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,ce(N))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var se=3;break;default:se=v}var ne=v;v=se;try{return V()}finally{v=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,se){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ne=v;v=V;try{return se()}finally{v=ne}},n.unstable_scheduleCallback=function(V,se,ne){var U=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?U+ne:U):ne=U,V){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ne+te,V={id:p++,callback:se,priorityLevel:V,startTime:ne,expirationTime:te,sortIndex:-1},ne>U?(V.sortIndex=ne,e(h,V),t(d)===null&&V===t(h)&&(M?(y(H),H=-1):M=!0,ie(C,ne-U))):(V.sortIndex=te,e(d,V),E||x||(E=!0,ce(N))),V},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(V){var se=v;return function(){var ne=v;v=se;try{return V.apply(this,arguments)}finally{v=ne}}}}(nh)),nh}var C0;function ob(){return C0||(C0=1,th.exports=sb()),th.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function ab(){if(R0)return zn;R0=1;var n=Dm(),e=ob();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(r){return d.call(g,r)?!0:d.call(p,r)?!1:h.test(r)?g[r]=!0:(p[r]=!0,!1)}function x(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,s,l,f){if(s===null||typeof s>"u"||x(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,l,f,m,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];S[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(y,I);S[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(y,I);S[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(y,I);S[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function b(r,s,l,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,f)&&(l=null),f||m===null?v(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):m.mustUseProperty?r[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?r.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),O=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),V=Symbol.iterator;function se(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,U;function te(r){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+r}var Be=!1;function ke(r,s){if(!r||Be)return"";Be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Z){var f=Z}Reflect.construct(r,[],s)}else{try{s.call()}catch(Z){f=Z}r.call(s.prototype)}else{try{throw Error()}catch(Z){f=Z}r()}}catch(Z){if(Z&&f&&typeof Z.stack=="string"){for(var m=Z.stack.split(`
`),_=f.stack.split(`
`),T=m.length-1,L=_.length-1;1<=T&&0<=L&&m[T]!==_[L];)L--;for(;1<=T&&0<=L;T--,L--)if(m[T]!==_[L]){if(T!==1||L!==1)do if(T--,L--,0>L||m[T]!==_[L]){var z=`
`+m[T].replace(" at new "," at ");return r.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",r.displayName)),z}while(1<=T&&0<=L);break}}}finally{Be=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?te(r):""}function Y(r){switch(r.tag){case 5:return te(r.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return r=ke(r.type,!1),r;case 11:return r=ke(r.type.render,!1),r;case 1:return r=ke(r.type,!0),r;default:return""}}function pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case k:return"Portal";case P:return"Profiler";case H:return"StrictMode";case re:return"Suspense";case ae:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case le:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case fe:return s=r.displayName||null,s!==null?s:pe(r.type)||"Memo";case ce:s=r._payload,r=r._init;try{return pe(r(s))}catch{}}return null}function he(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(s);case 8:return s===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ie(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ze(r){var s=Ie(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function kt(r){r._valueTracker||(r._valueTracker=Ze(r))}function _t(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Ie(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function B(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function At(r,s){var l=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Je(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=Ae(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function xt(r,s){s=s.checked,s!=null&&b(r,"checked",s,!1)}function Ke(r,s){xt(r,s);var l=Ae(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Oe(r,s.type,l):s.hasOwnProperty("defaultValue")&&Oe(r,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Nt(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Oe(r,s,l){(s!=="number"||B(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var ut=Array.isArray;function Vt(r,s,l,f){if(r=r.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<r.length;l++)m=s.hasOwnProperty("$"+r[l].value),r[l].selected!==m&&(r[l].selected=m),m&&f&&(r[l].defaultSelected=!0)}else{for(l=""+Ae(l),s=null,m=0;m<r.length;m++){if(r[m].value===l){r[m].selected=!0,f&&(r[m].defaultSelected=!0);return}s!==null||r[m].disabled||(s=r[m])}s!==null&&(s.selected=!0)}}function zt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(ut(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Ae(l)}}function w(r,s){var l=Ae(s.value),f=Ae(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function q(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ue(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ue(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var oe,$e=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,m)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=oe.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Me(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(r){qe.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ve[s]=Ve[r]})});function Ee(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ve.hasOwnProperty(r)&&Ve[r]?(""+s).trim():s+"px"}function De(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Ee(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,m):r[l]=m}}var it=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(r,s){if(s){if(it[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ce(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xe=null,we=null,Le=null;function ye(r){if(r=La(r)){if(typeof xe!="function")throw Error(t(280));var s=r.stateNode;s&&(s=oc(s),xe(r.stateNode,r.type,s))}}function de(r){we?Le?Le.push(r):Le=[r]:we=r}function Ge(){if(we){var r=we,s=Le;if(Le=we=null,ye(r),s)for(r=0;r<s.length;r++)ye(s[r])}}function ct(r,s){return r(s)}function bt(){}var St=!1;function ti(r,s,l){if(St)return r(s,l);St=!0;try{return ct(r,s,l)}finally{St=!1,(we!==null||Le!==null)&&(bt(),Ge())}}function yn(r,s){var l=r.stateNode;if(l===null)return null;var f=oc(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var eo=!1;if(u)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){eo=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{eo=!1}function ga(r,s,l,f,m,_,T,L,z){var Z=Array.prototype.slice.call(arguments,3);try{s.apply(l,Z)}catch(ge){this.onError(ge)}}var xr=!1,ps=null,ji=!1,to=null,no={onError:function(r){xr=!0,ps=r}};function Bl(r,s,l,f,m,_,T,L,z){xr=!1,ps=null,ga.apply(no,arguments)}function Vl(r,s,l,f,m,_,T,L,z){if(Bl.apply(this,arguments),xr){if(xr){var Z=ps;xr=!1,ps=null}else throw Error(t(198));ji||(ji=!0,to=Z)}}function Xi(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function zl(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Hl(r){if(Xi(r)!==r)throw Error(t(188))}function df(r){var s=r.alternate;if(!s){if(s=Xi(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return Hl(m),r;if(_===f)return Hl(m),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=_;else{for(var T=!1,L=m.child;L;){if(L===l){T=!0,l=m,f=_;break}if(L===f){T=!0,f=m,l=_;break}L=L.sibling}if(!T){for(L=_.child;L;){if(L===l){T=!0,l=_,f=m;break}if(L===f){T=!0,f=_,l=m;break}L=L.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Gl(r){return r=df(r),r!==null?Wl(r):null}function Wl(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Wl(r);if(s!==null)return s;r=r.sibling}return null}var A=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,J=e.unstable_shouldYield,ee=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,ze=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,nt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ye=null,ot=null;function Ct(r){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ye,r,void 0,(r.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Qe,Ut=Math.log,Pt=Math.LN2;function Qe(r){return r>>>=0,r===0?32:31-(Ut(r)/Pt|0)|0}var It=64,gt=4194304;function on(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function pi(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,m=r.suspendedLanes,_=r.pingedLanes,T=l&268435455;if(T!==0){var L=T&~m;L!==0?f=on(L):(_&=T,_!==0&&(f=on(_)))}else T=l&~m,T!==0?f=on(T):_!==0&&(f=on(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-Et(s),m=1<<l,f|=r[l],s&=~m;return f}function bn(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ms(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,m=r.expirationTimes,_=r.pendingLanes;0<_;){var T=31-Et(_),L=1<<T,z=m[T];z===-1?((L&l)===0||(L&f)!==0)&&(m[T]=bn(L,s)):z<=s&&(r.expiredLanes|=L),_&=~L}}function Ot(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Pn(){var r=It;return It<<=1,(It&4194240)===0&&(It=64),r}function xn(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function Zt(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Et(s),r[s]=l}function Sn(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var m=31-Et(l),_=1<<m;s[m]=0,f[m]=-1,r[m]=-1,l&=~_}}function gs(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-Et(l),m=1<<f;m&s|r[f]&s&&(r[f]|=s),l&=~m}}var vt=0;function Sg(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Eg,hf,Tg,Mg,wg,pf=!1,jl=[],Sr=null,Er=null,Tr=null,va=new Map,_a=new Map,Mr=[],JT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ag(r,s){switch(r){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":va.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(s.pointerId)}}function ya(r,s,l,f,m,_){return r===null||r.nativeEvent!==_?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=La(s),s!==null&&hf(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),r)}function QT(r,s,l,f,m){switch(s){case"focusin":return Sr=ya(Sr,r,s,l,f,m),!0;case"dragenter":return Er=ya(Er,r,s,l,f,m),!0;case"mouseover":return Tr=ya(Tr,r,s,l,f,m),!0;case"pointerover":var _=m.pointerId;return va.set(_,ya(va.get(_)||null,r,s,l,f,m)),!0;case"gotpointercapture":return _=m.pointerId,_a.set(_,ya(_a.get(_)||null,r,s,l,f,m)),!0}return!1}function Cg(r){var s=vs(r.target);if(s!==null){var l=Xi(s);if(l!==null){if(s=l.tag,s===13){if(s=zl(l),s!==null){r.blockedOn=s,wg(r.priority,function(){Tg(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Xl(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=gf(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);ft=f,l.target.dispatchEvent(f),ft=null}else return s=La(l),s!==null&&hf(s),r.blockedOn=l,!1;s.shift()}return!0}function Rg(r,s,l){Xl(r)&&l.delete(s)}function eM(){pf=!1,Sr!==null&&Xl(Sr)&&(Sr=null),Er!==null&&Xl(Er)&&(Er=null),Tr!==null&&Xl(Tr)&&(Tr=null),va.forEach(Rg),_a.forEach(Rg)}function xa(r,s){r.blockedOn===s&&(r.blockedOn=null,pf||(pf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eM)))}function Sa(r){function s(m){return xa(m,r)}if(0<jl.length){xa(jl[0],r);for(var l=1;l<jl.length;l++){var f=jl[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Sr!==null&&xa(Sr,r),Er!==null&&xa(Er,r),Tr!==null&&xa(Tr,r),va.forEach(s),_a.forEach(s),l=0;l<Mr.length;l++)f=Mr[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Mr.length&&(l=Mr[0],l.blockedOn===null);)Cg(l),l.blockedOn===null&&Mr.shift()}var io=C.ReactCurrentBatchConfig,$l=!0;function tM(r,s,l,f){var m=vt,_=io.transition;io.transition=null;try{vt=1,mf(r,s,l,f)}finally{vt=m,io.transition=_}}function nM(r,s,l,f){var m=vt,_=io.transition;io.transition=null;try{vt=4,mf(r,s,l,f)}finally{vt=m,io.transition=_}}function mf(r,s,l,f){if($l){var m=gf(r,s,l,f);if(m===null)Lf(r,s,f,ql,l),Ag(r,f);else if(QT(m,r,s,l,f))f.stopPropagation();else if(Ag(r,f),s&4&&-1<JT.indexOf(r)){for(;m!==null;){var _=La(m);if(_!==null&&Eg(_),_=gf(r,s,l,f),_===null&&Lf(r,s,f,ql,l),_===m)break;m=_}m!==null&&f.stopPropagation()}else Lf(r,s,f,null,l)}}var ql=null;function gf(r,s,l,f){if(ql=null,r=G(f),r=vs(r),r!==null)if(s=Xi(r),s===null)r=null;else if(l=s.tag,l===13){if(r=zl(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ql=r,null}function bg(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case ze:return 4;case Ne:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var wr=null,vf=null,Kl=null;function Pg(){if(Kl)return Kl;var r,s=vf,l=s.length,f,m="value"in wr?wr.value:wr.textContent,_=m.length;for(r=0;r<l&&s[r]===m[r];r++);var T=l-r;for(f=1;f<=T&&s[l-f]===m[_-f];f++);return Kl=m.slice(r,1<f?1-f:void 0)}function Yl(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zl(){return!0}function Ig(){return!1}function Kn(r){function s(l,f,m,_,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var L in r)r.hasOwnProperty(L)&&(l=r[L],this[L]=l?l(_):_[L]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Zl:Ig,this.isPropagationStopped=Ig,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),s}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=Kn(ro),Ea=ne({},ro,{view:0,detail:0}),iM=Kn(Ea),yf,xf,Ta,Jl=ne({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ta&&(Ta&&r.type==="mousemove"?(yf=r.screenX-Ta.screenX,xf=r.screenY-Ta.screenY):xf=yf=0,Ta=r),yf)},movementY:function(r){return"movementY"in r?r.movementY:xf}}),Dg=Kn(Jl),rM=ne({},Jl,{dataTransfer:0}),sM=Kn(rM),oM=ne({},Ea,{relatedTarget:0}),Sf=Kn(oM),aM=ne({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),lM=Kn(aM),cM=ne({},ro,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),uM=Kn(cM),fM=ne({},ro,{data:0}),Lg=Kn(fM),dM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=pM[r])?!!s[r]:!1}function Ef(){return mM}var gM=ne({},Ea,{key:function(r){if(r.key){var s=dM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Yl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?hM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(r){return r.type==="keypress"?Yl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Yl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),vM=Kn(gM),_M=ne({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=Kn(_M),yM=ne({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),xM=Kn(yM),SM=ne({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),EM=Kn(SM),TM=ne({},Jl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),MM=Kn(TM),wM=[9,13,27,32],Tf=u&&"CompositionEvent"in window,Ma=null;u&&"documentMode"in document&&(Ma=document.documentMode);var AM=u&&"TextEvent"in window&&!Ma,Ug=u&&(!Tf||Ma&&8<Ma&&11>=Ma),Og=" ",Fg=!1;function kg(r,s){switch(r){case"keyup":return wM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var so=!1;function CM(r,s){switch(r){case"compositionend":return Bg(s);case"keypress":return s.which!==32?null:(Fg=!0,Og);case"textInput":return r=s.data,r===Og&&Fg?null:r;default:return null}}function RM(r,s){if(so)return r==="compositionend"||!Tf&&kg(r,s)?(r=Pg(),Kl=vf=wr=null,so=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ug&&s.locale!=="ko"?null:s.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!bM[r.type]:s==="textarea"}function zg(r,s,l,f){de(f),s=ic(s,"onChange"),0<s.length&&(l=new _f("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var wa=null,Aa=null;function PM(r){sv(r,0)}function Ql(r){var s=uo(r);if(_t(s))return r}function IM(r,s){if(r==="change")return s}var Hg=!1;if(u){var Mf;if(u){var wf="oninput"in document;if(!wf){var Gg=document.createElement("div");Gg.setAttribute("oninput","return;"),wf=typeof Gg.oninput=="function"}Mf=wf}else Mf=!1;Hg=Mf&&(!document.documentMode||9<document.documentMode)}function Wg(){wa&&(wa.detachEvent("onpropertychange",jg),Aa=wa=null)}function jg(r){if(r.propertyName==="value"&&Ql(Aa)){var s=[];zg(s,Aa,r,G(r)),ti(PM,s)}}function DM(r,s,l){r==="focusin"?(Wg(),wa=s,Aa=l,wa.attachEvent("onpropertychange",jg)):r==="focusout"&&Wg()}function LM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ql(Aa)}function NM(r,s){if(r==="click")return Ql(s)}function UM(r,s){if(r==="input"||r==="change")return Ql(s)}function OM(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var mi=typeof Object.is=="function"?Object.is:OM;function Ca(r,s){if(mi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!mi(r[m],s[m]))return!1}return!0}function Xg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function $g(r,s){var l=Xg(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Xg(l)}}function qg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?qg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Kg(){for(var r=window,s=B();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=B(r.document)}return s}function Af(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function FM(r){var s=Kg(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&qg(l.ownerDocument.documentElement,l)){if(f!==null&&Af(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var m=l.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!r.extend&&_>f&&(m=f,f=_,_=m),m=$g(l,_);var T=$g(l,f);m&&T&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),r.removeAllRanges(),_>f?(r.addRange(s),r.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var kM=u&&"documentMode"in document&&11>=document.documentMode,oo=null,Cf=null,Ra=null,Rf=!1;function Yg(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Rf||oo==null||oo!==B(f)||(f=oo,"selectionStart"in f&&Af(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ra&&Ca(Ra,f)||(Ra=f,f=ic(Cf,"onSelect"),0<f.length&&(s=new _f("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=oo)))}function ec(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var ao={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},bf={},Zg={};u&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function tc(r){if(bf[r])return bf[r];if(!ao[r])return r;var s=ao[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Zg)return bf[r]=s[l];return r}var Jg=tc("animationend"),Qg=tc("animationiteration"),ev=tc("animationstart"),tv=tc("transitionend"),nv=new Map,iv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(r,s){nv.set(r,s),a(s,[r])}for(var Pf=0;Pf<iv.length;Pf++){var If=iv[Pf],BM=If.toLowerCase(),VM=If[0].toUpperCase()+If.slice(1);Ar(BM,"on"+VM)}Ar(Jg,"onAnimationEnd"),Ar(Qg,"onAnimationIteration"),Ar(ev,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(tv,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function rv(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,Vl(f,s,void 0,r),r.currentTarget=null}function sv(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var L=f[T],z=L.instance,Z=L.currentTarget;if(L=L.listener,z!==_&&m.isPropagationStopped())break e;rv(m,L,Z),_=z}else for(T=0;T<f.length;T++){if(L=f[T],z=L.instance,Z=L.currentTarget,L=L.listener,z!==_&&m.isPropagationStopped())break e;rv(m,L,Z),_=z}}}if(ji)throw r=to,ji=!1,to=null,r}function Ht(r,s){var l=s[Bf];l===void 0&&(l=s[Bf]=new Set);var f=r+"__bubble";l.has(f)||(ov(s,r,2,!1),l.add(f))}function Df(r,s,l){var f=0;s&&(f|=4),ov(l,r,f,s)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Pa(r){if(!r[nc]){r[nc]=!0,i.forEach(function(l){l!=="selectionchange"&&(zM.has(l)||Df(l,!1,r),Df(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[nc]||(s[nc]=!0,Df("selectionchange",!1,s))}}function ov(r,s,l,f){switch(bg(s)){case 1:var m=tM;break;case 4:m=nM;break;default:m=mf}l=m.bind(null,s,l,r),m=void 0,!eo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?r.addEventListener(s,l,{capture:!0,passive:m}):r.addEventListener(s,l,!0):m!==void 0?r.addEventListener(s,l,{passive:m}):r.addEventListener(s,l,!1)}function Lf(r,s,l,f,m){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var L=f.stateNode.containerInfo;if(L===m||L.nodeType===8&&L.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;T=T.return}for(;L!==null;){if(T=vs(L),T===null)return;if(z=T.tag,z===5||z===6){f=_=T;continue e}L=L.parentNode}}f=f.return}ti(function(){var Z=_,ge=G(l),_e=[];e:{var me=nv.get(r);if(me!==void 0){var Ue=_f,He=r;switch(r){case"keypress":if(Yl(l)===0)break e;case"keydown":case"keyup":Ue=vM;break;case"focusin":He="focus",Ue=Sf;break;case"focusout":He="blur",Ue=Sf;break;case"beforeblur":case"afterblur":Ue=Sf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=sM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=xM;break;case Jg:case Qg:case ev:Ue=lM;break;case tv:Ue=EM;break;case"scroll":Ue=iM;break;case"wheel":Ue=MM;break;case"copy":case"cut":case"paste":Ue=uM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Ng}var We=(s&4)!==0,Jt=!We&&r==="scroll",$=We?me!==null?me+"Capture":null:me;We=[];for(var j=Z,K;j!==null;){K=j;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=yn(j,$),Te!=null&&We.push(Ia(j,Te,K)))),Jt)break;j=j.return}0<We.length&&(me=new Ue(me,He,null,l,ge),_e.push({event:me,listeners:We}))}}if((s&7)===0){e:{if(me=r==="mouseover"||r==="pointerover",Ue=r==="mouseout"||r==="pointerout",me&&l!==ft&&(He=l.relatedTarget||l.fromElement)&&(vs(He)||He[$i]))break e;if((Ue||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(He=l.relatedTarget||l.toElement,Ue=Z,He=He?vs(He):null,He!==null&&(Jt=Xi(He),He!==Jt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=Z),Ue!==He)){if(We=Dg,Te="onMouseLeave",$="onMouseEnter",j="mouse",(r==="pointerout"||r==="pointerover")&&(We=Ng,Te="onPointerLeave",$="onPointerEnter",j="pointer"),Jt=Ue==null?me:uo(Ue),K=He==null?me:uo(He),me=new We(Te,j+"leave",Ue,l,ge),me.target=Jt,me.relatedTarget=K,Te=null,vs(ge)===Z&&(We=new We($,j+"enter",He,l,ge),We.target=K,We.relatedTarget=Jt,Te=We),Jt=Te,Ue&&He)t:{for(We=Ue,$=He,j=0,K=We;K;K=lo(K))j++;for(K=0,Te=$;Te;Te=lo(Te))K++;for(;0<j-K;)We=lo(We),j--;for(;0<K-j;)$=lo($),K--;for(;j--;){if(We===$||$!==null&&We===$.alternate)break t;We=lo(We),$=lo($)}We=null}else We=null;Ue!==null&&av(_e,me,Ue,We,!1),He!==null&&Jt!==null&&av(_e,Jt,He,We,!0)}}e:{if(me=Z?uo(Z):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Xe=IM;else if(Vg(me))if(Hg)Xe=UM;else{Xe=LM;var et=DM}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=NM);if(Xe&&(Xe=Xe(r,Z))){zg(_e,Xe,l,ge);break e}et&&et(r,me,Z),r==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&Oe(me,"number",me.value)}switch(et=Z?uo(Z):window,r){case"focusin":(Vg(et)||et.contentEditable==="true")&&(oo=et,Cf=Z,Ra=null);break;case"focusout":Ra=Cf=oo=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,Yg(_e,l,ge);break;case"selectionchange":if(kM)break;case"keydown":case"keyup":Yg(_e,l,ge)}var tt;if(Tf)e:{switch(r){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else so?kg(r,l)&&(at="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Ug&&l.locale!=="ko"&&(so||at!=="onCompositionStart"?at==="onCompositionEnd"&&so&&(tt=Pg()):(wr=ge,vf="value"in wr?wr.value:wr.textContent,so=!0)),et=ic(Z,at),0<et.length&&(at=new Lg(at,r,null,l,ge),_e.push({event:at,listeners:et}),tt?at.data=tt:(tt=Bg(l),tt!==null&&(at.data=tt)))),(tt=AM?CM(r,l):RM(r,l))&&(Z=ic(Z,"onBeforeInput"),0<Z.length&&(ge=new Lg("onBeforeInput","beforeinput",null,l,ge),_e.push({event:ge,listeners:Z}),ge.data=tt))}sv(_e,s)})}function Ia(r,s,l){return{instance:r,listener:s,currentTarget:l}}function ic(r,s){for(var l=s+"Capture",f=[];r!==null;){var m=r,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=yn(r,l),_!=null&&f.unshift(Ia(r,_,m)),_=yn(r,s),_!=null&&f.push(Ia(r,_,m))),r=r.return}return f}function lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function av(r,s,l,f,m){for(var _=s._reactName,T=[];l!==null&&l!==f;){var L=l,z=L.alternate,Z=L.stateNode;if(z!==null&&z===f)break;L.tag===5&&Z!==null&&(L=Z,m?(z=yn(l,_),z!=null&&T.unshift(Ia(l,z,L))):m||(z=yn(l,_),z!=null&&T.push(Ia(l,z,L)))),l=l.return}T.length!==0&&r.push({event:s,listeners:T})}var HM=/\r\n?/g,GM=/\u0000|\uFFFD/g;function lv(r){return(typeof r=="string"?r:""+r).replace(HM,`
`).replace(GM,"")}function rc(r,s,l){if(s=lv(s),lv(r)!==s&&l)throw Error(t(425))}function sc(){}var Nf=null,Uf=null;function Of(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,WM=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,jM=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(r){return cv.resolve(null).then(r).catch(XM)}:Ff;function XM(r){setTimeout(function(){throw r})}function kf(r,s){var l=s,f=0;do{var m=l.nextSibling;if(r.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){r.removeChild(m),Sa(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Sa(s)}function Cr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function uv(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var co=Math.random().toString(36).slice(2),bi="__reactFiber$"+co,Da="__reactProps$"+co,$i="__reactContainer$"+co,Bf="__reactEvents$"+co,$M="__reactListeners$"+co,qM="__reactHandles$"+co;function vs(r){var s=r[bi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[$i]||l[bi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=uv(r);r!==null;){if(l=r[bi])return l;r=uv(r)}return s}r=l,l=r.parentNode}return null}function La(r){return r=r[bi]||r[$i],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function uo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function oc(r){return r[Da]||null}var Vf=[],fo=-1;function Rr(r){return{current:r}}function Gt(r){0>fo||(r.current=Vf[fo],Vf[fo]=null,fo--)}function Bt(r,s){fo++,Vf[fo]=r.current,r.current=s}var br={},En=Rr(br),On=Rr(!1),_s=br;function ho(r,s){var l=r.type.contextTypes;if(!l)return br;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=s[_];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=m),m}function Fn(r){return r=r.childContextTypes,r!=null}function ac(){Gt(On),Gt(En)}function fv(r,s,l){if(En.current!==br)throw Error(t(168));Bt(En,s),Bt(On,l)}function dv(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,he(r)||"Unknown",m));return ne({},l,f)}function lc(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||br,_s=En.current,Bt(En,r),Bt(On,On.current),!0}function hv(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=dv(r,s,_s),f.__reactInternalMemoizedMergedChildContext=r,Gt(On),Gt(En),Bt(En,r)):Gt(On),Bt(On,l)}var qi=null,cc=!1,zf=!1;function pv(r){qi===null?qi=[r]:qi.push(r)}function KM(r){cc=!0,pv(r)}function Pr(){if(!zf&&qi!==null){zf=!0;var r=0,s=vt;try{var l=qi;for(vt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}qi=null,cc=!1}catch(m){throw qi!==null&&(qi=qi.slice(r+1)),A(Re,Pr),m}finally{vt=s,zf=!1}}return null}var po=[],mo=0,uc=null,fc=0,ni=[],ii=0,ys=null,Ki=1,Yi="";function xs(r,s){po[mo++]=fc,po[mo++]=uc,uc=r,fc=s}function mv(r,s,l){ni[ii++]=Ki,ni[ii++]=Yi,ni[ii++]=ys,ys=r;var f=Ki;r=Yi;var m=32-Et(f)-1;f&=~(1<<m),l+=1;var _=32-Et(s)+m;if(30<_){var T=m-m%5;_=(f&(1<<T)-1).toString(32),f>>=T,m-=T,Ki=1<<32-Et(s)+m|l<<m|f,Yi=_+r}else Ki=1<<_|l<<m|f,Yi=r}function Hf(r){r.return!==null&&(xs(r,1),mv(r,1,0))}function Gf(r){for(;r===uc;)uc=po[--mo],po[mo]=null,fc=po[--mo],po[mo]=null;for(;r===ys;)ys=ni[--ii],ni[ii]=null,Yi=ni[--ii],ni[ii]=null,Ki=ni[--ii],ni[ii]=null}var Yn=null,Zn=null,Wt=!1,gi=null;function gv(r,s){var l=ai(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function vv(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Yn=r,Zn=Cr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Yn=r,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ys!==null?{id:Ki,overflow:Yi}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ai(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,Yn=r,Zn=null,!0):!1;default:return!1}}function Wf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function jf(r){if(Wt){var s=Zn;if(s){var l=s;if(!vv(r,s)){if(Wf(r))throw Error(t(418));s=Cr(l.nextSibling);var f=Yn;s&&vv(r,s)?gv(f,l):(r.flags=r.flags&-4097|2,Wt=!1,Yn=r)}}else{if(Wf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Wt=!1,Yn=r}}}function _v(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Yn=r}function dc(r){if(r!==Yn)return!1;if(!Wt)return _v(r),Wt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Of(r.type,r.memoizedProps)),s&&(s=Zn)){if(Wf(r))throw yv(),Error(t(418));for(;s;)gv(r,s),s=Cr(s.nextSibling)}if(_v(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){Zn=Cr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}Zn=null}}else Zn=Yn?Cr(r.stateNode.nextSibling):null;return!0}function yv(){for(var r=Zn;r;)r=Cr(r.nextSibling)}function go(){Zn=Yn=null,Wt=!1}function Xf(r){gi===null?gi=[r]:gi.push(r)}var YM=C.ReactCurrentBatchConfig;function Na(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var m=f,_=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var L=m.refs;T===null?delete L[_]:L[_]=T},s._stringRef=_,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function hc(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function xv(r){var s=r._init;return s(r._payload)}function Sv(r){function s($,j){if(r){var K=$.deletions;K===null?($.deletions=[j],$.flags|=16):K.push(j)}}function l($,j){if(!r)return null;for(;j!==null;)s($,j),j=j.sibling;return null}function f($,j){for($=new Map;j!==null;)j.key!==null?$.set(j.key,j):$.set(j.index,j),j=j.sibling;return $}function m($,j){return $=kr($,j),$.index=0,$.sibling=null,$}function _($,j,K){return $.index=K,r?(K=$.alternate,K!==null?(K=K.index,K<j?($.flags|=2,j):K):($.flags|=2,j)):($.flags|=1048576,j)}function T($){return r&&$.alternate===null&&($.flags|=2),$}function L($,j,K,Te){return j===null||j.tag!==6?(j=Fd(K,$.mode,Te),j.return=$,j):(j=m(j,K),j.return=$,j)}function z($,j,K,Te){var Xe=K.type;return Xe===F?ge($,j,K.props.children,Te,K.key):j!==null&&(j.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ce&&xv(Xe)===j.type)?(Te=m(j,K.props),Te.ref=Na($,j,K),Te.return=$,Te):(Te=Fc(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Na($,j,K),Te.return=$,Te)}function Z($,j,K,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=kd(K,$.mode,Te),j.return=$,j):(j=m(j,K.children||[]),j.return=$,j)}function ge($,j,K,Te,Xe){return j===null||j.tag!==7?(j=Rs(K,$.mode,Te,Xe),j.return=$,j):(j=m(j,K),j.return=$,j)}function _e($,j,K){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Fd(""+j,$.mode,K),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case N:return K=Fc(j.type,j.key,j.props,null,$.mode,K),K.ref=Na($,null,j),K.return=$,K;case k:return j=kd(j,$.mode,K),j.return=$,j;case ce:var Te=j._init;return _e($,Te(j._payload),K)}if(ut(j)||se(j))return j=Rs(j,$.mode,K,null),j.return=$,j;hc($,j)}return null}function me($,j,K,Te){var Xe=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:L($,j,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return K.key===Xe?z($,j,K,Te):null;case k:return K.key===Xe?Z($,j,K,Te):null;case ce:return Xe=K._init,me($,j,Xe(K._payload),Te)}if(ut(K)||se(K))return Xe!==null?null:ge($,j,K,Te,null);hc($,K)}return null}function Ue($,j,K,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,L(j,$,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return $=$.get(Te.key===null?K:Te.key)||null,z(j,$,Te,Xe);case k:return $=$.get(Te.key===null?K:Te.key)||null,Z(j,$,Te,Xe);case ce:var et=Te._init;return Ue($,j,K,et(Te._payload),Xe)}if(ut(Te)||se(Te))return $=$.get(K)||null,ge(j,$,Te,Xe,null);hc(j,Te)}return null}function He($,j,K,Te){for(var Xe=null,et=null,tt=j,at=j=0,pn=null;tt!==null&&at<K.length;at++){tt.index>at?(pn=tt,tt=null):pn=tt.sibling;var Mt=me($,tt,K[at],Te);if(Mt===null){tt===null&&(tt=pn);break}r&&tt&&Mt.alternate===null&&s($,tt),j=_(Mt,j,at),et===null?Xe=Mt:et.sibling=Mt,et=Mt,tt=pn}if(at===K.length)return l($,tt),Wt&&xs($,at),Xe;if(tt===null){for(;at<K.length;at++)tt=_e($,K[at],Te),tt!==null&&(j=_(tt,j,at),et===null?Xe=tt:et.sibling=tt,et=tt);return Wt&&xs($,at),Xe}for(tt=f($,tt);at<K.length;at++)pn=Ue(tt,$,at,K[at],Te),pn!==null&&(r&&pn.alternate!==null&&tt.delete(pn.key===null?at:pn.key),j=_(pn,j,at),et===null?Xe=pn:et.sibling=pn,et=pn);return r&&tt.forEach(function(Br){return s($,Br)}),Wt&&xs($,at),Xe}function We($,j,K,Te){var Xe=se(K);if(typeof Xe!="function")throw Error(t(150));if(K=Xe.call(K),K==null)throw Error(t(151));for(var et=Xe=null,tt=j,at=j=0,pn=null,Mt=K.next();tt!==null&&!Mt.done;at++,Mt=K.next()){tt.index>at?(pn=tt,tt=null):pn=tt.sibling;var Br=me($,tt,Mt.value,Te);if(Br===null){tt===null&&(tt=pn);break}r&&tt&&Br.alternate===null&&s($,tt),j=_(Br,j,at),et===null?Xe=Br:et.sibling=Br,et=Br,tt=pn}if(Mt.done)return l($,tt),Wt&&xs($,at),Xe;if(tt===null){for(;!Mt.done;at++,Mt=K.next())Mt=_e($,Mt.value,Te),Mt!==null&&(j=_(Mt,j,at),et===null?Xe=Mt:et.sibling=Mt,et=Mt);return Wt&&xs($,at),Xe}for(tt=f($,tt);!Mt.done;at++,Mt=K.next())Mt=Ue(tt,$,at,Mt.value,Te),Mt!==null&&(r&&Mt.alternate!==null&&tt.delete(Mt.key===null?at:Mt.key),j=_(Mt,j,at),et===null?Xe=Mt:et.sibling=Mt,et=Mt);return r&&tt.forEach(function(bw){return s($,bw)}),Wt&&xs($,at),Xe}function Jt($,j,K,Te){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case N:e:{for(var Xe=K.key,et=j;et!==null;){if(et.key===Xe){if(Xe=K.type,Xe===F){if(et.tag===7){l($,et.sibling),j=m(et,K.props.children),j.return=$,$=j;break e}}else if(et.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ce&&xv(Xe)===et.type){l($,et.sibling),j=m(et,K.props),j.ref=Na($,et,K),j.return=$,$=j;break e}l($,et);break}else s($,et);et=et.sibling}K.type===F?(j=Rs(K.props.children,$.mode,Te,K.key),j.return=$,$=j):(Te=Fc(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Na($,j,K),Te.return=$,$=Te)}return T($);case k:e:{for(et=K.key;j!==null;){if(j.key===et)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){l($,j.sibling),j=m(j,K.children||[]),j.return=$,$=j;break e}else{l($,j);break}else s($,j);j=j.sibling}j=kd(K,$.mode,Te),j.return=$,$=j}return T($);case ce:return et=K._init,Jt($,j,et(K._payload),Te)}if(ut(K))return He($,j,K,Te);if(se(K))return We($,j,K,Te);hc($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,j!==null&&j.tag===6?(l($,j.sibling),j=m(j,K),j.return=$,$=j):(l($,j),j=Fd(K,$.mode,Te),j.return=$,$=j),T($)):l($,j)}return Jt}var vo=Sv(!0),Ev=Sv(!1),pc=Rr(null),mc=null,_o=null,$f=null;function qf(){$f=_o=mc=null}function Kf(r){var s=pc.current;Gt(pc),r._currentValue=s}function Yf(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function yo(r,s){mc=r,$f=_o=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(kn=!0),r.firstContext=null)}function ri(r){var s=r._currentValue;if($f!==r)if(r={context:r,memoizedValue:s,next:null},_o===null){if(mc===null)throw Error(t(308));_o=r,mc.dependencies={lanes:0,firstContext:r}}else _o=_o.next=r;return s}var Ss=null;function Zf(r){Ss===null?Ss=[r]:Ss.push(r)}function Tv(r,s,l,f){var m=s.interleaved;return m===null?(l.next=l,Zf(s)):(l.next=m.next,m.next=l),s.interleaved=l,Zi(r,f)}function Zi(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Ir=!1;function Jf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ji(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Dr(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Tt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Zi(r,l)}return m=f.interleaved,m===null?(s.next=s,Zf(f)):(s.next=m.next,m.next=s),f.interleaved=s,Zi(r,l)}function gc(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,gs(r,l)}}function wv(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?m=_=s:_=_.next=s}else m=_=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function vc(r,s,l,f){var m=r.updateQueue;Ir=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,L=m.shared.pending;if(L!==null){m.shared.pending=null;var z=L,Z=z.next;z.next=null,T===null?_=Z:T.next=Z,T=z;var ge=r.alternate;ge!==null&&(ge=ge.updateQueue,L=ge.lastBaseUpdate,L!==T&&(L===null?ge.firstBaseUpdate=Z:L.next=Z,ge.lastBaseUpdate=z))}if(_!==null){var _e=m.baseState;T=0,ge=Z=z=null,L=_;do{var me=L.lane,Ue=L.eventTime;if((f&me)===me){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=r,We=L;switch(me=s,Ue=l,We.tag){case 1:if(He=We.payload,typeof He=="function"){_e=He.call(Ue,_e,me);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,me=typeof He=="function"?He.call(Ue,_e,me):He,me==null)break e;_e=ne({},_e,me);break e;case 2:Ir=!0}}L.callback!==null&&L.lane!==0&&(r.flags|=64,me=m.effects,me===null?m.effects=[L]:me.push(L))}else Ue={eventTime:Ue,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ge===null?(Z=ge=Ue,z=_e):ge=ge.next=Ue,T|=me;if(L=L.next,L===null){if(L=m.shared.pending,L===null)break;me=L,L=me.next,me.next=null,m.lastBaseUpdate=me,m.shared.pending=null}}while(!0);if(ge===null&&(z=_e),m.baseState=z,m.firstBaseUpdate=Z,m.lastBaseUpdate=ge,s=m.shared.interleaved,s!==null){m=s;do T|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);Ms|=T,r.lanes=T,r.memoizedState=_e}}function Av(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ua={},Pi=Rr(Ua),Oa=Rr(Ua),Fa=Rr(Ua);function Es(r){if(r===Ua)throw Error(t(174));return r}function Qf(r,s){switch(Bt(Fa,s),Bt(Oa,r),Bt(Pi,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ve(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ve(s,r)}Gt(Pi),Bt(Pi,s)}function xo(){Gt(Pi),Gt(Oa),Gt(Fa)}function Cv(r){Es(Fa.current);var s=Es(Pi.current),l=ve(s,r.type);s!==l&&(Bt(Oa,r),Bt(Pi,l))}function ed(r){Oa.current===r&&(Gt(Pi),Gt(Oa))}var Xt=Rr(0);function _c(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var td=[];function nd(){for(var r=0;r<td.length;r++)td[r]._workInProgressVersionPrimary=null;td.length=0}var yc=C.ReactCurrentDispatcher,id=C.ReactCurrentBatchConfig,Ts=0,$t=null,an=null,dn=null,xc=!1,ka=!1,Ba=0,ZM=0;function Tn(){throw Error(t(321))}function rd(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!mi(r[l],s[l]))return!1;return!0}function sd(r,s,l,f,m,_){if(Ts=_,$t=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,yc.current=r===null||r.memoizedState===null?tw:nw,r=l(f,m),ka){_=0;do{if(ka=!1,Ba=0,25<=_)throw Error(t(301));_+=1,dn=an=null,s.updateQueue=null,yc.current=iw,r=l(f,m)}while(ka)}if(yc.current=Tc,s=an!==null&&an.next!==null,Ts=0,dn=an=$t=null,xc=!1,s)throw Error(t(300));return r}function od(){var r=Ba!==0;return Ba=0,r}function Ii(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?$t.memoizedState=dn=r:dn=dn.next=r,dn}function si(){if(an===null){var r=$t.alternate;r=r!==null?r.memoizedState:null}else r=an.next;var s=dn===null?$t.memoizedState:dn.next;if(s!==null)dn=s,an=r;else{if(r===null)throw Error(t(310));an=r,r={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},dn===null?$t.memoizedState=dn=r:dn=dn.next=r}return dn}function Va(r,s){return typeof s=="function"?s(r):s}function ad(r){var s=si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=an,m=f.baseQueue,_=l.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}f.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,f=f.baseState;var L=T=null,z=null,Z=_;do{var ge=Z.lane;if((Ts&ge)===ge)z!==null&&(z=z.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),f=Z.hasEagerState?Z.eagerState:r(f,Z.action);else{var _e={lane:ge,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};z===null?(L=z=_e,T=f):z=z.next=_e,$t.lanes|=ge,Ms|=ge}Z=Z.next}while(Z!==null&&Z!==_);z===null?T=f:z.next=L,mi(f,s.memoizedState)||(kn=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=z,l.lastRenderedState=f}if(r=l.interleaved,r!==null){m=r;do _=m.lane,$t.lanes|=_,Ms|=_,m=m.next;while(m!==r)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function ld(r){var s=si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,m=l.pending,_=s.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do _=r(_,T.action),T=T.next;while(T!==m);mi(_,s.memoizedState)||(kn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function Rv(){}function bv(r,s){var l=$t,f=si(),m=s(),_=!mi(f.memoizedState,m);if(_&&(f.memoizedState=m,kn=!0),f=f.queue,cd(Dv.bind(null,l,f,r),[r]),f.getSnapshot!==s||_||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,za(9,Iv.bind(null,l,f,m,s),void 0,null),hn===null)throw Error(t(349));(Ts&30)!==0||Pv(l,s,m)}return m}function Pv(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function Iv(r,s,l,f){s.value=l,s.getSnapshot=f,Lv(s)&&Nv(r)}function Dv(r,s,l){return l(function(){Lv(s)&&Nv(r)})}function Lv(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!mi(r,l)}catch{return!0}}function Nv(r){var s=Zi(r,1);s!==null&&xi(s,r,1,-1)}function Uv(r){var s=Ii();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:r},s.queue=r,r=r.dispatch=ew.bind(null,$t,r),[s.memoizedState,r]}function za(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function Ov(){return si().memoizedState}function Sc(r,s,l,f){var m=Ii();$t.flags|=r,m.memoizedState=za(1|s,l,void 0,f===void 0?null:f)}function Ec(r,s,l,f){var m=si();f=f===void 0?null:f;var _=void 0;if(an!==null){var T=an.memoizedState;if(_=T.destroy,f!==null&&rd(f,T.deps)){m.memoizedState=za(s,l,_,f);return}}$t.flags|=r,m.memoizedState=za(1|s,l,_,f)}function Fv(r,s){return Sc(8390656,8,r,s)}function cd(r,s){return Ec(2048,8,r,s)}function kv(r,s){return Ec(4,2,r,s)}function Bv(r,s){return Ec(4,4,r,s)}function Vv(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function zv(r,s,l){return l=l!=null?l.concat([r]):null,Ec(4,4,Vv.bind(null,s,r),l)}function ud(){}function Hv(r,s){var l=si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&rd(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function Gv(r,s){var l=si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&rd(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function Wv(r,s,l){return(Ts&21)===0?(r.baseState&&(r.baseState=!1,kn=!0),r.memoizedState=l):(mi(l,s)||(l=Pn(),$t.lanes|=l,Ms|=l,r.baseState=!0),s)}function JM(r,s){var l=vt;vt=l!==0&&4>l?l:4,r(!0);var f=id.transition;id.transition={};try{r(!1),s()}finally{vt=l,id.transition=f}}function jv(){return si().memoizedState}function QM(r,s,l){var f=Or(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Xv(r))$v(s,l);else if(l=Tv(r,s,l,f),l!==null){var m=Dn();xi(l,r,f,m),qv(l,s,f)}}function ew(r,s,l){var f=Or(r),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xv(r))$v(s,m);else{var _=r.alternate;if(r.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,L=_(T,l);if(m.hasEagerState=!0,m.eagerState=L,mi(L,T)){var z=s.interleaved;z===null?(m.next=m,Zf(s)):(m.next=z.next,z.next=m),s.interleaved=m;return}}catch{}finally{}l=Tv(r,s,m,f),l!==null&&(m=Dn(),xi(l,r,f,m),qv(l,s,f))}}function Xv(r){var s=r.alternate;return r===$t||s!==null&&s===$t}function $v(r,s){ka=xc=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function qv(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,gs(r,l)}}var Tc={readContext:ri,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},tw={readContext:ri,useCallback:function(r,s){return Ii().memoizedState=[r,s===void 0?null:s],r},useContext:ri,useEffect:Fv,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Sc(4194308,4,Vv.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Sc(4194308,4,r,s)},useInsertionEffect:function(r,s){return Sc(4,2,r,s)},useMemo:function(r,s){var l=Ii();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=Ii();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=QM.bind(null,$t,r),[f.memoizedState,r]},useRef:function(r){var s=Ii();return r={current:r},s.memoizedState=r},useState:Uv,useDebugValue:ud,useDeferredValue:function(r){return Ii().memoizedState=r},useTransition:function(){var r=Uv(!1),s=r[0];return r=JM.bind(null,r[1]),Ii().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=$t,m=Ii();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),hn===null)throw Error(t(349));(Ts&30)!==0||Pv(f,s,l)}m.memoizedState=l;var _={value:l,getSnapshot:s};return m.queue=_,Fv(Dv.bind(null,f,_,r),[r]),f.flags|=2048,za(9,Iv.bind(null,f,_,l,s),void 0,null),l},useId:function(){var r=Ii(),s=hn.identifierPrefix;if(Wt){var l=Yi,f=Ki;l=(f&~(1<<32-Et(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ba++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=ZM++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},nw={readContext:ri,useCallback:Hv,useContext:ri,useEffect:cd,useImperativeHandle:zv,useInsertionEffect:kv,useLayoutEffect:Bv,useMemo:Gv,useReducer:ad,useRef:Ov,useState:function(){return ad(Va)},useDebugValue:ud,useDeferredValue:function(r){var s=si();return Wv(s,an.memoizedState,r)},useTransition:function(){var r=ad(Va)[0],s=si().memoizedState;return[r,s]},useMutableSource:Rv,useSyncExternalStore:bv,useId:jv,unstable_isNewReconciler:!1},iw={readContext:ri,useCallback:Hv,useContext:ri,useEffect:cd,useImperativeHandle:zv,useInsertionEffect:kv,useLayoutEffect:Bv,useMemo:Gv,useReducer:ld,useRef:Ov,useState:function(){return ld(Va)},useDebugValue:ud,useDeferredValue:function(r){var s=si();return an===null?s.memoizedState=r:Wv(s,an.memoizedState,r)},useTransition:function(){var r=ld(Va)[0],s=si().memoizedState;return[r,s]},useMutableSource:Rv,useSyncExternalStore:bv,useId:jv,unstable_isNewReconciler:!1};function vi(r,s){if(r&&r.defaultProps){s=ne({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function fd(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:ne({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Mc={isMounted:function(r){return(r=r._reactInternals)?Xi(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=Dn(),m=Or(r),_=Ji(f,m);_.payload=s,l!=null&&(_.callback=l),s=Dr(r,_,m),s!==null&&(xi(s,r,m,f),gc(s,r,m))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=Dn(),m=Or(r),_=Ji(f,m);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Dr(r,_,m),s!==null&&(xi(s,r,m,f),gc(s,r,m))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Dn(),f=Or(r),m=Ji(l,f);m.tag=2,s!=null&&(m.callback=s),s=Dr(r,m,f),s!==null&&(xi(s,r,f,l),gc(s,r,f))}};function Kv(r,s,l,f,m,_,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!Ca(l,f)||!Ca(m,_):!0}function Yv(r,s,l){var f=!1,m=br,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(m=Fn(s)?_s:En.current,f=s.contextTypes,_=(f=f!=null)?ho(r,m):br),s=new s(l,_),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Mc,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=_),s}function Zv(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&Mc.enqueueReplaceState(s,s.state,null)}function dd(r,s,l,f){var m=r.stateNode;m.props=l,m.state=r.memoizedState,m.refs={},Jf(r);var _=s.contextType;typeof _=="object"&&_!==null?m.context=ri(_):(_=Fn(s)?_s:En.current,m.context=ho(r,_)),m.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(fd(r,s,_,l),m.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Mc.enqueueReplaceState(m,m.state,null),vc(r,l,m,f),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function So(r,s){try{var l="",f=s;do l+=Y(f),f=f.return;while(f);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:r,source:s,stack:m,digest:null}}function hd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function pd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var rw=typeof WeakMap=="function"?WeakMap:Map;function Jv(r,s,l){l=Ji(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Ic||(Ic=!0,bd=f),pd(r,s)},l}function Qv(r,s,l){l=Ji(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){pd(r,s)}}var _=r.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){pd(r,s),typeof f!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function e_(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new rw;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),r=_w.bind(null,r,s,l),s.then(r,r))}function t_(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function n_(r,s,l,f,m){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Ji(-1,1),s.tag=2,Dr(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=m,r)}var sw=C.ReactCurrentOwner,kn=!1;function In(r,s,l,f){s.child=r===null?Ev(s,null,l,f):vo(s,r.child,l,f)}function i_(r,s,l,f,m){l=l.render;var _=s.ref;return yo(s,m),f=sd(r,s,l,f,_,m),l=od(),r!==null&&!kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~m,Qi(r,s,m)):(Wt&&l&&Hf(s),s.flags|=1,In(r,s,f,m),s.child)}function r_(r,s,l,f,m){if(r===null){var _=l.type;return typeof _=="function"&&!Od(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,s_(r,s,_,f,m)):(r=Fc(l.type,null,f,s,s.mode,m),r.ref=s.ref,r.return=s,s.child=r)}if(_=r.child,(r.lanes&m)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ca,l(T,f)&&r.ref===s.ref)return Qi(r,s,m)}return s.flags|=1,r=kr(_,f),r.ref=s.ref,r.return=s,s.child=r}function s_(r,s,l,f,m){if(r!==null){var _=r.memoizedProps;if(Ca(_,f)&&r.ref===s.ref)if(kn=!1,s.pendingProps=f=_,(r.lanes&m)!==0)(r.flags&131072)!==0&&(kn=!0);else return s.lanes=r.lanes,Qi(r,s,m)}return md(r,s,l,f,m)}function o_(r,s,l){var f=s.pendingProps,m=f.children,_=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(To,Jn),Jn|=l;else{if((l&1073741824)===0)return r=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Bt(To,Jn),Jn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Bt(To,Jn),Jn|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Bt(To,Jn),Jn|=f;return In(r,s,m,l),s.child}function a_(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function md(r,s,l,f,m){var _=Fn(l)?_s:En.current;return _=ho(s,_),yo(s,m),l=sd(r,s,l,f,_,m),f=od(),r!==null&&!kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~m,Qi(r,s,m)):(Wt&&f&&Hf(s),s.flags|=1,In(r,s,l,m),s.child)}function l_(r,s,l,f,m){if(Fn(l)){var _=!0;lc(s)}else _=!1;if(yo(s,m),s.stateNode===null)Ac(r,s),Yv(s,l,f),dd(s,l,f,m),f=!0;else if(r===null){var T=s.stateNode,L=s.memoizedProps;T.props=L;var z=T.context,Z=l.contextType;typeof Z=="object"&&Z!==null?Z=ri(Z):(Z=Fn(l)?_s:En.current,Z=ho(s,Z));var ge=l.getDerivedStateFromProps,_e=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";_e||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(L!==f||z!==Z)&&Zv(s,T,f,Z),Ir=!1;var me=s.memoizedState;T.state=me,vc(s,f,T,m),z=s.memoizedState,L!==f||me!==z||On.current||Ir?(typeof ge=="function"&&(fd(s,l,ge,f),z=s.memoizedState),(L=Ir||Kv(s,l,L,f,me,z,Z))?(_e||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),T.props=f,T.state=z,T.context=Z,f=L):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Mv(r,s),L=s.memoizedProps,Z=s.type===s.elementType?L:vi(s.type,L),T.props=Z,_e=s.pendingProps,me=T.context,z=l.contextType,typeof z=="object"&&z!==null?z=ri(z):(z=Fn(l)?_s:En.current,z=ho(s,z));var Ue=l.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(L!==_e||me!==z)&&Zv(s,T,f,z),Ir=!1,me=s.memoizedState,T.state=me,vc(s,f,T,m);var He=s.memoizedState;L!==_e||me!==He||On.current||Ir?(typeof Ue=="function"&&(fd(s,l,Ue,f),He=s.memoizedState),(Z=Ir||Kv(s,l,Z,f,me,He,z)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,He,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,He,z)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||L===r.memoizedProps&&me===r.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||L===r.memoizedProps&&me===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=He),T.props=f,T.state=He,T.context=z,f=Z):(typeof T.componentDidUpdate!="function"||L===r.memoizedProps&&me===r.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||L===r.memoizedProps&&me===r.memoizedState||(s.flags|=1024),f=!1)}return gd(r,s,l,f,_,m)}function gd(r,s,l,f,m,_){a_(r,s);var T=(s.flags&128)!==0;if(!f&&!T)return m&&hv(s,l,!1),Qi(r,s,_);f=s.stateNode,sw.current=s;var L=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&T?(s.child=vo(s,r.child,null,_),s.child=vo(s,null,L,_)):In(r,s,L,_),s.memoizedState=f.state,m&&hv(s,l,!0),s.child}function c_(r){var s=r.stateNode;s.pendingContext?fv(r,s.pendingContext,s.pendingContext!==s.context):s.context&&fv(r,s.context,!1),Qf(r,s.containerInfo)}function u_(r,s,l,f,m){return go(),Xf(m),s.flags|=256,In(r,s,l,f),s.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(r){return{baseLanes:r,cachePool:null,transitions:null}}function f_(r,s,l){var f=s.pendingProps,m=Xt.current,_=!1,T=(s.flags&128)!==0,L;if((L=T)||(L=r!==null&&r.memoizedState===null?!1:(m&2)!==0),L?(_=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),Bt(Xt,m&1),r===null)return jf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=f.children,r=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=kc(T,f,0,null),r=Rs(r,f,l,null),_.return=s,r.return=s,_.sibling=r,s.child=_,s.child.memoizedState=_d(l),s.memoizedState=vd,r):yd(s,T));if(m=r.memoizedState,m!==null&&(L=m.dehydrated,L!==null))return ow(r,s,T,f,L,m,l);if(_){_=f.fallback,T=s.mode,m=r.child,L=m.sibling;var z={mode:"hidden",children:f.children};return(T&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=kr(m,z),f.subtreeFlags=m.subtreeFlags&14680064),L!==null?_=kr(L,_):(_=Rs(_,T,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=r.child.memoizedState,T=T===null?_d(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=r.childLanes&~l,s.memoizedState=vd,f}return _=r.child,r=_.sibling,f=kr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function yd(r,s){return s=kc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function wc(r,s,l,f){return f!==null&&Xf(f),vo(s,r.child,null,l),r=yd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function ow(r,s,l,f,m,_,T){if(l)return s.flags&256?(s.flags&=-257,f=hd(Error(t(422))),wc(r,s,T,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=kc({mode:"visible",children:f.children},m,0,null),_=Rs(_,m,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&vo(s,r.child,null,T),s.child.memoizedState=_d(T),s.memoizedState=vd,_);if((s.mode&1)===0)return wc(r,s,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var L=f.dgst;return f=L,_=Error(t(419)),f=hd(_,f,void 0),wc(r,s,T,f)}if(L=(T&r.childLanes)!==0,kn||L){if(f=hn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Zi(r,m),xi(f,r,m,-1))}return Ud(),f=hd(Error(t(421))),wc(r,s,T,f)}return m.data==="$?"?(s.flags|=128,s.child=r.child,s=yw.bind(null,r),m._reactRetry=s,null):(r=_.treeContext,Zn=Cr(m.nextSibling),Yn=s,Wt=!0,gi=null,r!==null&&(ni[ii++]=Ki,ni[ii++]=Yi,ni[ii++]=ys,Ki=r.id,Yi=r.overflow,ys=s),s=yd(s,f.children),s.flags|=4096,s)}function d_(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),Yf(r.return,s,l)}function xd(r,s,l,f,m){var _=r.memoizedState;_===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=m)}function h_(r,s,l){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(In(r,s,f.children,l),f=Xt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&d_(r,l,s);else if(r.tag===19)d_(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Bt(Xt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)r=l.alternate,r!==null&&_c(r)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),xd(s,!1,m,l,_);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(r=m.alternate,r!==null&&_c(r)===null){s.child=m;break}r=m.sibling,m.sibling=l,l=m,m=r}xd(s,!0,l,null,_);break;case"together":xd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ac(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Qi(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=kr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=kr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function aw(r,s,l){switch(s.tag){case 3:c_(s),go();break;case 5:Cv(s);break;case 1:Fn(s.type)&&lc(s);break;case 4:Qf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Bt(pc,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Bt(Xt,Xt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?f_(r,s,l):(Bt(Xt,Xt.current&1),r=Qi(r,s,l),r!==null?r.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return h_(r,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Bt(Xt,Xt.current),f)break;return null;case 22:case 23:return s.lanes=0,o_(r,s,l)}return Qi(r,s,l)}var p_,Sd,m_,g_;p_=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sd=function(){},m_=function(r,s,l,f){var m=r.memoizedProps;if(m!==f){r=s.stateNode,Es(Pi.current);var _=null;switch(l){case"input":m=At(r,m),f=At(r,f),_=[];break;case"select":m=ne({},m,{value:void 0}),f=ne({},f,{value:void 0}),_=[];break;case"textarea":m=zt(r,m),f=zt(r,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=sc)}je(l,f);var T;l=null;for(Z in m)if(!f.hasOwnProperty(Z)&&m.hasOwnProperty(Z)&&m[Z]!=null)if(Z==="style"){var L=m[Z];for(T in L)L.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?_||(_=[]):(_=_||[]).push(Z,null));for(Z in f){var z=f[Z];if(L=m!=null?m[Z]:void 0,f.hasOwnProperty(Z)&&z!==L&&(z!=null||L!=null))if(Z==="style")if(L){for(T in L)!L.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in z)z.hasOwnProperty(T)&&L[T]!==z[T]&&(l||(l={}),l[T]=z[T])}else l||(_||(_=[]),_.push(Z,l)),l=z;else Z==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,L=L?L.__html:void 0,z!=null&&L!==z&&(_=_||[]).push(Z,z)):Z==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(Z,""+z):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(z!=null&&Z==="onScroll"&&Ht("scroll",r),_||L===z||(_=[])):(_=_||[]).push(Z,z))}l&&(_=_||[]).push("style",l);var Z=_;(s.updateQueue=Z)&&(s.flags|=4)}},g_=function(r,s,l,f){l!==f&&(s.flags|=4)};function Ha(r,s){if(!Wt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Mn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function lw(r,s,l){var f=s.pendingProps;switch(Gf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(s),null;case 1:return Fn(s.type)&&ac(),Mn(s),null;case 3:return f=s.stateNode,xo(),Gt(On),Gt(En),nd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(dc(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,gi!==null&&(Dd(gi),gi=null))),Sd(r,s),Mn(s),null;case 5:ed(s);var m=Es(Fa.current);if(l=s.type,r!==null&&s.stateNode!=null)m_(r,s,l,f,m),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Mn(s),null}if(r=Es(Pi.current),dc(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[bi]=s,f[Da]=_,r=(s.mode&1)!==0,l){case"dialog":Ht("cancel",f),Ht("close",f);break;case"iframe":case"object":case"embed":Ht("load",f);break;case"video":case"audio":for(m=0;m<ba.length;m++)Ht(ba[m],f);break;case"source":Ht("error",f);break;case"img":case"image":case"link":Ht("error",f),Ht("load",f);break;case"details":Ht("toggle",f);break;case"input":Je(f,_),Ht("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ht("invalid",f);break;case"textarea":D(f,_),Ht("invalid",f)}je(l,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var L=_[T];T==="children"?typeof L=="string"?f.textContent!==L&&(_.suppressHydrationWarning!==!0&&rc(f.textContent,L,r),m=["children",L]):typeof L=="number"&&f.textContent!==""+L&&(_.suppressHydrationWarning!==!0&&rc(f.textContent,L,r),m=["children",""+L]):o.hasOwnProperty(T)&&L!=null&&T==="onScroll"&&Ht("scroll",f)}switch(l){case"input":kt(f),Nt(f,_,!0);break;case"textarea":kt(f),q(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=sc)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ue(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=T.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=T.createElement(l,{is:f.is}):(r=T.createElement(l),l==="select"&&(T=r,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):r=T.createElementNS(r,l),r[bi]=s,r[Da]=f,p_(r,s,!1,!1),s.stateNode=r;e:{switch(T=Ce(l,f),l){case"dialog":Ht("cancel",r),Ht("close",r),m=f;break;case"iframe":case"object":case"embed":Ht("load",r),m=f;break;case"video":case"audio":for(m=0;m<ba.length;m++)Ht(ba[m],r);m=f;break;case"source":Ht("error",r),m=f;break;case"img":case"image":case"link":Ht("error",r),Ht("load",r),m=f;break;case"details":Ht("toggle",r),m=f;break;case"input":Je(r,f),m=At(r,f),Ht("invalid",r);break;case"option":m=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},m=ne({},f,{value:void 0}),Ht("invalid",r);break;case"textarea":D(r,f),m=zt(r,f),Ht("invalid",r);break;default:m=f}je(l,m),L=m;for(_ in L)if(L.hasOwnProperty(_)){var z=L[_];_==="style"?De(r,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&$e(r,z)):_==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Me(r,z):typeof z=="number"&&Me(r,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Ht("scroll",r):z!=null&&b(r,_,z,T))}switch(l){case"input":kt(r),Nt(r,f,!1);break;case"textarea":kt(r),q(r);break;case"option":f.value!=null&&r.setAttribute("value",""+Ae(f.value));break;case"select":r.multiple=!!f.multiple,_=f.value,_!=null?Vt(r,!!f.multiple,_,!1):f.defaultValue!=null&&Vt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=sc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mn(s),null;case 6:if(r&&s.stateNode!=null)g_(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Es(Fa.current),Es(Pi.current),dc(s)){if(f=s.stateNode,l=s.memoizedProps,f[bi]=s,(_=f.nodeValue!==l)&&(r=Yn,r!==null))switch(r.tag){case 3:rc(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&rc(f.nodeValue,l,(r.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[bi]=s,s.stateNode=f}return Mn(s),null;case 13:if(Gt(Xt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Wt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)yv(),go(),s.flags|=98560,_=!1;else if(_=dc(s),f!==null&&f.dehydrated!==null){if(r===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=s}else go(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mn(s),_=!1}else gi!==null&&(Dd(gi),gi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Xt.current&1)!==0?ln===0&&(ln=3):Ud())),s.updateQueue!==null&&(s.flags|=4),Mn(s),null);case 4:return xo(),Sd(r,s),r===null&&Pa(s.stateNode.containerInfo),Mn(s),null;case 10:return Kf(s.type._context),Mn(s),null;case 17:return Fn(s.type)&&ac(),Mn(s),null;case 19:if(Gt(Xt),_=s.memoizedState,_===null)return Mn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)Ha(_,!1);else{if(ln!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(T=_c(r),T!==null){for(s.flags|=128,Ha(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,r=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=r,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,r=T.dependencies,_.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Bt(Xt,Xt.current&1|2),s.child}r=r.sibling}_.tail!==null&&W()>Mo&&(s.flags|=128,f=!0,Ha(_,!1),s.lanes=4194304)}else{if(!f)if(r=_c(T),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ha(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Wt)return Mn(s),null}else 2*W()-_.renderingStartTime>Mo&&l!==1073741824&&(s.flags|=128,f=!0,Ha(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(l=_.last,l!==null?l.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=W(),s.sibling=null,l=Xt.current,Bt(Xt,f?l&1|2:l&1),s):(Mn(s),null);case 22:case 23:return Nd(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Jn&1073741824)!==0&&(Mn(s),s.subtreeFlags&6&&(s.flags|=8192)):Mn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function cw(r,s){switch(Gf(s),s.tag){case 1:return Fn(s.type)&&ac(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return xo(),Gt(On),Gt(En),nd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return ed(s),null;case 13:if(Gt(Xt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));go()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Gt(Xt),null;case 4:return xo(),null;case 10:return Kf(s.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Cc=!1,wn=!1,uw=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Eo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Kt(r,s,f)}else l.current=null}function Ed(r,s,l){try{l()}catch(f){Kt(r,s,f)}}var v_=!1;function fw(r,s){if(Nf=$l,r=Kg(),Af(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,L=-1,z=-1,Z=0,ge=0,_e=r,me=null;t:for(;;){for(var Ue;_e!==l||m!==0&&_e.nodeType!==3||(L=T+m),_e!==_||f!==0&&_e.nodeType!==3||(z=T+f),_e.nodeType===3&&(T+=_e.nodeValue.length),(Ue=_e.firstChild)!==null;)me=_e,_e=Ue;for(;;){if(_e===r)break t;if(me===l&&++Z===m&&(L=T),me===_&&++ge===f&&(z=T),(Ue=_e.nextSibling)!==null)break;_e=me,me=_e.parentNode}_e=Ue}l=L===-1||z===-1?null:{start:L,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uf={focusedElem:r,selectionRange:l},$l=!1,Fe=s;Fe!==null;)if(s=Fe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Fe=r;else for(;Fe!==null;){s=Fe;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Jt=He.memoizedState,$=s.stateNode,j=$.getSnapshotBeforeUpdate(s.elementType===s.type?We:vi(s.type,We),Jt);$.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Kt(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,Fe=r;break}Fe=s.return}return He=v_,v_=!1,He}function Ga(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&r)===r){var _=m.destroy;m.destroy=void 0,_!==void 0&&Ed(s,l,_)}m=m.next}while(m!==f)}}function Rc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Td(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function __(r){var s=r.alternate;s!==null&&(r.alternate=null,__(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[bi],delete s[Da],delete s[Bf],delete s[$M],delete s[qM])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function y_(r){return r.tag===5||r.tag===3||r.tag===4}function x_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||y_(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Md(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=sc));else if(f!==4&&(r=r.child,r!==null))for(Md(r,s,l),r=r.sibling;r!==null;)Md(r,s,l),r=r.sibling}function wd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(wd(r,s,l),r=r.sibling;r!==null;)wd(r,s,l),r=r.sibling}var gn=null,_i=!1;function Lr(r,s,l){for(l=l.child;l!==null;)S_(r,s,l),l=l.sibling}function S_(r,s,l){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ye,l)}catch{}switch(l.tag){case 5:wn||Eo(l,s);case 6:var f=gn,m=_i;gn=null,Lr(r,s,l),gn=f,_i=m,gn!==null&&(_i?(r=gn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):gn.removeChild(l.stateNode));break;case 18:gn!==null&&(_i?(r=gn,l=l.stateNode,r.nodeType===8?kf(r.parentNode,l):r.nodeType===1&&kf(r,l),Sa(r)):kf(gn,l.stateNode));break;case 4:f=gn,m=_i,gn=l.stateNode.containerInfo,_i=!0,Lr(r,s,l),gn=f,_i=m;break;case 0:case 11:case 14:case 15:if(!wn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Ed(l,s,T),m=m.next}while(m!==f)}Lr(r,s,l);break;case 1:if(!wn&&(Eo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(L){Kt(l,s,L)}Lr(r,s,l);break;case 21:Lr(r,s,l);break;case 22:l.mode&1?(wn=(f=wn)||l.memoizedState!==null,Lr(r,s,l),wn=f):Lr(r,s,l);break;default:Lr(r,s,l)}}function E_(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new uw),s.forEach(function(f){var m=xw.bind(null,r,f);l.has(f)||(l.add(f),f.then(m,m))})}}function yi(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var _=r,T=s,L=T;e:for(;L!==null;){switch(L.tag){case 5:gn=L.stateNode,_i=!1;break e;case 3:gn=L.stateNode.containerInfo,_i=!0;break e;case 4:gn=L.stateNode.containerInfo,_i=!0;break e}L=L.return}if(gn===null)throw Error(t(160));S_(_,T,m),gn=null,_i=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(Z){Kt(m,s,Z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)T_(s,r),s=s.sibling}function T_(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(yi(s,r),Di(r),f&4){try{Ga(3,r,r.return),Rc(3,r)}catch(We){Kt(r,r.return,We)}try{Ga(5,r,r.return)}catch(We){Kt(r,r.return,We)}}break;case 1:yi(s,r),Di(r),f&512&&l!==null&&Eo(l,l.return);break;case 5:if(yi(s,r),Di(r),f&512&&l!==null&&Eo(l,l.return),r.flags&32){var m=r.stateNode;try{Me(m,"")}catch(We){Kt(r,r.return,We)}}if(f&4&&(m=r.stateNode,m!=null)){var _=r.memoizedProps,T=l!==null?l.memoizedProps:_,L=r.type,z=r.updateQueue;if(r.updateQueue=null,z!==null)try{L==="input"&&_.type==="radio"&&_.name!=null&&xt(m,_),Ce(L,T);var Z=Ce(L,_);for(T=0;T<z.length;T+=2){var ge=z[T],_e=z[T+1];ge==="style"?De(m,_e):ge==="dangerouslySetInnerHTML"?$e(m,_e):ge==="children"?Me(m,_e):b(m,ge,_e,Z)}switch(L){case"input":Ke(m,_);break;case"textarea":w(m,_);break;case"select":var me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?Vt(m,!!_.multiple,Ue,!1):me!==!!_.multiple&&(_.defaultValue!=null?Vt(m,!!_.multiple,_.defaultValue,!0):Vt(m,!!_.multiple,_.multiple?[]:"",!1))}m[Da]=_}catch(We){Kt(r,r.return,We)}}break;case 6:if(yi(s,r),Di(r),f&4){if(r.stateNode===null)throw Error(t(162));m=r.stateNode,_=r.memoizedProps;try{m.nodeValue=_}catch(We){Kt(r,r.return,We)}}break;case 3:if(yi(s,r),Di(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Sa(s.containerInfo)}catch(We){Kt(r,r.return,We)}break;case 4:yi(s,r),Di(r);break;case 13:yi(s,r),Di(r),m=r.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Rd=W())),f&4&&E_(r);break;case 22:if(ge=l!==null&&l.memoizedState!==null,r.mode&1?(wn=(Z=wn)||ge,yi(s,r),wn=Z):yi(s,r),Di(r),f&8192){if(Z=r.memoizedState!==null,(r.stateNode.isHidden=Z)&&!ge&&(r.mode&1)!==0)for(Fe=r,ge=r.child;ge!==null;){for(_e=Fe=ge;Fe!==null;){switch(me=Fe,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Ga(4,me,me.return);break;case 1:Eo(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){f=me,l=me.return;try{s=f,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(We){Kt(f,l,We)}}break;case 5:Eo(me,me.return);break;case 22:if(me.memoizedState!==null){A_(_e);continue}}Ue!==null?(Ue.return=me,Fe=Ue):A_(_e)}ge=ge.sibling}e:for(ge=null,_e=r;;){if(_e.tag===5){if(ge===null){ge=_e;try{m=_e.stateNode,Z?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(L=_e.stateNode,z=_e.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,L.style.display=Ee("display",T))}catch(We){Kt(r,r.return,We)}}}else if(_e.tag===6){if(ge===null)try{_e.stateNode.nodeValue=Z?"":_e.memoizedProps}catch(We){Kt(r,r.return,We)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===r)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===r)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===r)break e;ge===_e&&(ge=null),_e=_e.return}ge===_e&&(ge=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:yi(s,r),Di(r),f&4&&E_(r);break;case 21:break;default:yi(s,r),Di(r)}}function Di(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(y_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Me(m,""),f.flags&=-33);var _=x_(r);wd(r,_,m);break;case 3:case 4:var T=f.stateNode.containerInfo,L=x_(r);Md(r,L,T);break;default:throw Error(t(161))}}catch(z){Kt(r,r.return,z)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function dw(r,s,l){Fe=r,M_(r)}function M_(r,s,l){for(var f=(r.mode&1)!==0;Fe!==null;){var m=Fe,_=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||Cc;if(!T){var L=m.alternate,z=L!==null&&L.memoizedState!==null||wn;L=Cc;var Z=wn;if(Cc=T,(wn=z)&&!Z)for(Fe=m;Fe!==null;)T=Fe,z=T.child,T.tag===22&&T.memoizedState!==null?C_(m):z!==null?(z.return=T,Fe=z):C_(m);for(;_!==null;)Fe=_,M_(_),_=_.sibling;Fe=m,Cc=L,wn=Z}w_(r)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,Fe=_):w_(r)}}function w_(r){for(;Fe!==null;){var s=Fe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:wn||Rc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!wn)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:vi(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Av(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Av(s,T,l)}break;case 5:var L=s.stateNode;if(l===null&&s.flags&4){l=L;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Z=s.alternate;if(Z!==null){var ge=Z.memoizedState;if(ge!==null){var _e=ge.dehydrated;_e!==null&&Sa(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||s.flags&512&&Td(s)}catch(me){Kt(s,s.return,me)}}if(s===r){Fe=null;break}if(l=s.sibling,l!==null){l.return=s.return,Fe=l;break}Fe=s.return}}function A_(r){for(;Fe!==null;){var s=Fe;if(s===r){Fe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Fe=l;break}Fe=s.return}}function C_(r){for(;Fe!==null;){var s=Fe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Rc(4,s)}catch(z){Kt(s,l,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(z){Kt(s,m,z)}}var _=s.return;try{Td(s)}catch(z){Kt(s,_,z)}break;case 5:var T=s.return;try{Td(s)}catch(z){Kt(s,T,z)}}}catch(z){Kt(s,s.return,z)}if(s===r){Fe=null;break}var L=s.sibling;if(L!==null){L.return=s.return,Fe=L;break}Fe=s.return}}var hw=Math.ceil,bc=C.ReactCurrentDispatcher,Ad=C.ReactCurrentOwner,oi=C.ReactCurrentBatchConfig,Tt=0,hn=null,tn=null,vn=0,Jn=0,To=Rr(0),ln=0,Wa=null,Ms=0,Pc=0,Cd=0,ja=null,Bn=null,Rd=0,Mo=1/0,er=null,Ic=!1,bd=null,Nr=null,Dc=!1,Ur=null,Lc=0,Xa=0,Pd=null,Nc=-1,Uc=0;function Dn(){return(Tt&6)!==0?W():Nc!==-1?Nc:Nc=W()}function Or(r){return(r.mode&1)===0?1:(Tt&2)!==0&&vn!==0?vn&-vn:YM.transition!==null?(Uc===0&&(Uc=Pn()),Uc):(r=vt,r!==0||(r=window.event,r=r===void 0?16:bg(r.type)),r)}function xi(r,s,l,f){if(50<Xa)throw Xa=0,Pd=null,Error(t(185));Zt(r,l,f),((Tt&2)===0||r!==hn)&&(r===hn&&((Tt&2)===0&&(Pc|=l),ln===4&&Fr(r,vn)),Vn(r,f),l===1&&Tt===0&&(s.mode&1)===0&&(Mo=W()+500,cc&&Pr()))}function Vn(r,s){var l=r.callbackNode;ms(r,s);var f=pi(r,r===hn?vn:0);if(f===0)l!==null&&X(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&X(l),s===1)r.tag===0?KM(b_.bind(null,r)):pv(b_.bind(null,r)),jM(function(){(Tt&6)===0&&Pr()}),l=null;else{switch(Sg(f)){case 1:l=Re;break;case 4:l=ze;break;case 16:l=Ne;break;case 536870912:l=rt;break;default:l=Ne}l=F_(l,R_.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function R_(r,s){if(Nc=-1,Uc=0,(Tt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(wo()&&r.callbackNode!==l)return null;var f=pi(r,r===hn?vn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=Oc(r,f);else{s=f;var m=Tt;Tt|=2;var _=I_();(hn!==r||vn!==s)&&(er=null,Mo=W()+500,As(r,s));do try{gw();break}catch(L){P_(r,L)}while(!0);qf(),bc.current=_,Tt=m,tn!==null?s=0:(hn=null,vn=0,s=ln)}if(s!==0){if(s===2&&(m=Ot(r),m!==0&&(f=m,s=Id(r,m))),s===1)throw l=Wa,As(r,0),Fr(r,f),Vn(r,W()),l;if(s===6)Fr(r,f);else{if(m=r.current.alternate,(f&30)===0&&!pw(m)&&(s=Oc(r,f),s===2&&(_=Ot(r),_!==0&&(f=_,s=Id(r,_))),s===1))throw l=Wa,As(r,0),Fr(r,f),Vn(r,W()),l;switch(r.finishedWork=m,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Cs(r,Bn,er);break;case 3:if(Fr(r,f),(f&130023424)===f&&(s=Rd+500-W(),10<s)){if(pi(r,0)!==0)break;if(m=r.suspendedLanes,(m&f)!==f){Dn(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=Ff(Cs.bind(null,r,Bn,er),s);break}Cs(r,Bn,er);break;case 4:if(Fr(r,f),(f&4194240)===f)break;for(s=r.eventTimes,m=-1;0<f;){var T=31-Et(f);_=1<<T,T=s[T],T>m&&(m=T),f&=~_}if(f=m,f=W()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*hw(f/1960))-f,10<f){r.timeoutHandle=Ff(Cs.bind(null,r,Bn,er),f);break}Cs(r,Bn,er);break;case 5:Cs(r,Bn,er);break;default:throw Error(t(329))}}}return Vn(r,W()),r.callbackNode===l?R_.bind(null,r):null}function Id(r,s){var l=ja;return r.current.memoizedState.isDehydrated&&(As(r,s).flags|=256),r=Oc(r,s),r!==2&&(s=Bn,Bn=l,s!==null&&Dd(s)),r}function Dd(r){Bn===null?Bn=r:Bn.push.apply(Bn,r)}function pw(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],_=m.getSnapshot;m=m.value;try{if(!mi(_(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fr(r,s){for(s&=~Cd,s&=~Pc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Et(s),f=1<<l;r[l]=-1,s&=~f}}function b_(r){if((Tt&6)!==0)throw Error(t(327));wo();var s=pi(r,0);if((s&1)===0)return Vn(r,W()),null;var l=Oc(r,s);if(r.tag!==0&&l===2){var f=Ot(r);f!==0&&(s=f,l=Id(r,f))}if(l===1)throw l=Wa,As(r,0),Fr(r,s),Vn(r,W()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Cs(r,Bn,er),Vn(r,W()),null}function Ld(r,s){var l=Tt;Tt|=1;try{return r(s)}finally{Tt=l,Tt===0&&(Mo=W()+500,cc&&Pr())}}function ws(r){Ur!==null&&Ur.tag===0&&(Tt&6)===0&&wo();var s=Tt;Tt|=1;var l=oi.transition,f=vt;try{if(oi.transition=null,vt=1,r)return r()}finally{vt=f,oi.transition=l,Tt=s,(Tt&6)===0&&Pr()}}function Nd(){Jn=To.current,Gt(To)}function As(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,WM(l)),tn!==null)for(l=tn.return;l!==null;){var f=l;switch(Gf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ac();break;case 3:xo(),Gt(On),Gt(En),nd();break;case 5:ed(f);break;case 4:xo();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:Kf(f.type._context);break;case 22:case 23:Nd()}l=l.return}if(hn=r,tn=r=kr(r.current,null),vn=Jn=s,ln=0,Wa=null,Cd=Pc=Ms=0,Bn=ja=null,Ss!==null){for(s=0;s<Ss.length;s++)if(l=Ss[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,_=l.pending;if(_!==null){var T=_.next;_.next=m,f.next=T}l.pending=f}Ss=null}return r}function P_(r,s){do{var l=tn;try{if(qf(),yc.current=Tc,xc){for(var f=$t.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}xc=!1}if(Ts=0,dn=an=$t=null,ka=!1,Ba=0,Ad.current=null,l===null||l.return===null){ln=1,Wa=s,tn=null;break}e:{var _=r,T=l.return,L=l,z=s;if(s=vn,L.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var Z=z,ge=L,_e=ge.tag;if((ge.mode&1)===0&&(_e===0||_e===11||_e===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=t_(T);if(Ue!==null){Ue.flags&=-257,n_(Ue,T,L,_,s),Ue.mode&1&&e_(_,Z,s),s=Ue,z=Z;var He=s.updateQueue;if(He===null){var We=new Set;We.add(z),s.updateQueue=We}else He.add(z);break e}else{if((s&1)===0){e_(_,Z,s),Ud();break e}z=Error(t(426))}}else if(Wt&&L.mode&1){var Jt=t_(T);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),n_(Jt,T,L,_,s),Xf(So(z,L));break e}}_=z=So(z,L),ln!==4&&(ln=2),ja===null?ja=[_]:ja.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var $=Jv(_,z,s);wv(_,$);break e;case 1:L=z;var j=_.type,K=_.stateNode;if((_.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Nr===null||!Nr.has(K)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=Qv(_,L,s);wv(_,Te);break e}}_=_.return}while(_!==null)}L_(l)}catch(Xe){s=Xe,tn===l&&l!==null&&(tn=l=l.return);continue}break}while(!0)}function I_(){var r=bc.current;return bc.current=Tc,r===null?Tc:r}function Ud(){(ln===0||ln===3||ln===2)&&(ln=4),hn===null||(Ms&268435455)===0&&(Pc&268435455)===0||Fr(hn,vn)}function Oc(r,s){var l=Tt;Tt|=2;var f=I_();(hn!==r||vn!==s)&&(er=null,As(r,s));do try{mw();break}catch(m){P_(r,m)}while(!0);if(qf(),Tt=l,bc.current=f,tn!==null)throw Error(t(261));return hn=null,vn=0,ln}function mw(){for(;tn!==null;)D_(tn)}function gw(){for(;tn!==null&&!J();)D_(tn)}function D_(r){var s=O_(r.alternate,r,Jn);r.memoizedProps=r.pendingProps,s===null?L_(r):tn=s,Ad.current=null}function L_(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=lw(l,s,Jn),l!==null){tn=l;return}}else{if(l=cw(l,s),l!==null){l.flags&=32767,tn=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{ln=6,tn=null;return}}if(s=s.sibling,s!==null){tn=s;return}tn=s=r}while(s!==null);ln===0&&(ln=5)}function Cs(r,s,l){var f=vt,m=oi.transition;try{oi.transition=null,vt=1,vw(r,s,l,f)}finally{oi.transition=m,vt=f}return null}function vw(r,s,l,f){do wo();while(Ur!==null);if((Tt&6)!==0)throw Error(t(327));l=r.finishedWork;var m=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(r,_),r===hn&&(tn=hn=null,vn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Dc||(Dc=!0,F_(Ne,function(){return wo(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var T=vt;vt=1;var L=Tt;Tt|=4,Ad.current=null,fw(r,l),T_(l,r),FM(Uf),$l=!!Nf,Uf=Nf=null,r.current=l,dw(l),ee(),Tt=L,vt=T,oi.transition=_}else r.current=l;if(Dc&&(Dc=!1,Ur=r,Lc=m),_=r.pendingLanes,_===0&&(Nr=null),Ct(l.stateNode),Vn(r,W()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Ic)throw Ic=!1,r=bd,bd=null,r;return(Lc&1)!==0&&r.tag!==0&&wo(),_=r.pendingLanes,(_&1)!==0?r===Pd?Xa++:(Xa=0,Pd=r):Xa=0,Pr(),null}function wo(){if(Ur!==null){var r=Sg(Lc),s=oi.transition,l=vt;try{if(oi.transition=null,vt=16>r?16:r,Ur===null)var f=!1;else{if(r=Ur,Ur=null,Lc=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,Fe=r.current;Fe!==null;){var _=Fe,T=_.child;if((Fe.flags&16)!==0){var L=_.deletions;if(L!==null){for(var z=0;z<L.length;z++){var Z=L[z];for(Fe=Z;Fe!==null;){var ge=Fe;switch(ge.tag){case 0:case 11:case 15:Ga(8,ge,_)}var _e=ge.child;if(_e!==null)_e.return=ge,Fe=_e;else for(;Fe!==null;){ge=Fe;var me=ge.sibling,Ue=ge.return;if(__(ge),ge===Z){Fe=null;break}if(me!==null){me.return=Ue,Fe=me;break}Fe=Ue}}}var He=_.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Jt=We.sibling;We.sibling=null,We=Jt}while(We!==null)}}Fe=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Fe=T;else e:for(;Fe!==null;){if(_=Fe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ga(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Fe=$;break e}Fe=_.return}}var j=r.current;for(Fe=j;Fe!==null;){T=Fe;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,Fe=K;else e:for(T=j;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Rc(9,L)}}catch(Xe){Kt(L,L.return,Xe)}if(L===T){Fe=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Fe=Te;break e}Fe=L.return}}if(Tt=m,Pr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ye,r)}catch{}f=!0}return f}finally{vt=l,oi.transition=s}}return!1}function N_(r,s,l){s=So(l,s),s=Jv(r,s,1),r=Dr(r,s,1),s=Dn(),r!==null&&(Zt(r,1,s),Vn(r,s))}function Kt(r,s,l){if(r.tag===3)N_(r,r,l);else for(;s!==null;){if(s.tag===3){N_(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Nr===null||!Nr.has(f))){r=So(l,r),r=Qv(s,r,1),s=Dr(s,r,1),r=Dn(),s!==null&&(Zt(s,1,r),Vn(s,r));break}}s=s.return}}function _w(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=Dn(),r.pingedLanes|=r.suspendedLanes&l,hn===r&&(vn&l)===l&&(ln===4||ln===3&&(vn&130023424)===vn&&500>W()-Rd?As(r,0):Cd|=l),Vn(r,s)}function U_(r,s){s===0&&((r.mode&1)===0?s=1:(s=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var l=Dn();r=Zi(r,s),r!==null&&(Zt(r,s,l),Vn(r,l))}function yw(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),U_(r,l)}function xw(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,m=r.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),U_(r,l)}var O_;O_=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||On.current)kn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return kn=!1,aw(r,s,l);kn=(r.flags&131072)!==0}else kn=!1,Wt&&(s.flags&1048576)!==0&&mv(s,fc,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Ac(r,s),r=s.pendingProps;var m=ho(s,En.current);yo(s,l),m=sd(null,s,f,r,m,l);var _=od();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Fn(f)?(_=!0,lc(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Jf(s),m.updater=Mc,s.stateNode=m,m._reactInternals=s,dd(s,f,r,l),s=gd(null,s,f,!0,_,l)):(s.tag=0,Wt&&_&&Hf(s),In(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Ac(r,s),r=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=Ew(f),r=vi(f,r),m){case 0:s=md(null,s,f,r,l);break e;case 1:s=l_(null,s,f,r,l);break e;case 11:s=i_(null,s,f,r,l);break e;case 14:s=r_(null,s,f,vi(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),md(r,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),l_(r,s,f,m,l);case 3:e:{if(c_(s),r===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,Mv(r,s),vc(s,f,null,l);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=So(Error(t(423)),s),s=u_(r,s,f,l,m);break e}else if(f!==m){m=So(Error(t(424)),s),s=u_(r,s,f,l,m);break e}else for(Zn=Cr(s.stateNode.containerInfo.firstChild),Yn=s,Wt=!0,gi=null,l=Ev(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(go(),f===m){s=Qi(r,s,l);break e}In(r,s,f,l)}s=s.child}return s;case 5:return Cv(s),r===null&&jf(s),f=s.type,m=s.pendingProps,_=r!==null?r.memoizedProps:null,T=m.children,Of(f,m)?T=null:_!==null&&Of(f,_)&&(s.flags|=32),a_(r,s),In(r,s,T,l),s.child;case 6:return r===null&&jf(s),null;case 13:return f_(r,s,l);case 4:return Qf(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=vo(s,null,f,l):In(r,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),i_(r,s,f,m,l);case 7:return In(r,s,s.pendingProps,l),s.child;case 8:return In(r,s,s.pendingProps.children,l),s.child;case 12:return In(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,T=m.value,Bt(pc,f._currentValue),f._currentValue=T,_!==null)if(mi(_.value,T)){if(_.children===m.children&&!On.current){s=Qi(r,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var L=_.dependencies;if(L!==null){T=_.child;for(var z=L.firstContext;z!==null;){if(z.context===f){if(_.tag===1){z=Ji(-1,l&-l),z.tag=2;var Z=_.updateQueue;if(Z!==null){Z=Z.shared;var ge=Z.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),Z.pending=z}}_.lanes|=l,z=_.alternate,z!==null&&(z.lanes|=l),Yf(_.return,l,s),L.lanes|=l;break}z=z.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,L=T.alternate,L!==null&&(L.lanes|=l),Yf(T,l,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}In(r,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,yo(s,l),m=ri(m),f=f(m),s.flags|=1,In(r,s,f,l),s.child;case 14:return f=s.type,m=vi(f,s.pendingProps),m=vi(f.type,m),r_(r,s,f,m,l);case 15:return s_(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:vi(f,m),Ac(r,s),s.tag=1,Fn(f)?(r=!0,lc(s)):r=!1,yo(s,l),Yv(s,f,m),dd(s,f,m,l),gd(null,s,f,!0,r,l);case 19:return h_(r,s,l);case 22:return o_(r,s,l)}throw Error(t(156,s.tag))};function F_(r,s){return A(r,s)}function Sw(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(r,s,l,f){return new Sw(r,s,l,f)}function Od(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ew(r){if(typeof r=="function")return Od(r)?1:0;if(r!=null){if(r=r.$$typeof,r===le)return 11;if(r===fe)return 14}return 2}function kr(r,s){var l=r.alternate;return l===null?(l=ai(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Fc(r,s,l,f,m,_){var T=2;if(f=r,typeof r=="function")Od(r)&&(T=1);else if(typeof r=="string")T=5;else e:switch(r){case F:return Rs(l.children,m,_,s);case H:T=8,m|=8;break;case P:return r=ai(12,l,s,m|2),r.elementType=P,r.lanes=_,r;case re:return r=ai(13,l,s,m),r.elementType=re,r.lanes=_,r;case ae:return r=ai(19,l,s,m),r.elementType=ae,r.lanes=_,r;case ie:return kc(l,m,_,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:T=10;break e;case O:T=9;break e;case le:T=11;break e;case fe:T=14;break e;case ce:T=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=ai(T,l,s,m),s.elementType=r,s.type=f,s.lanes=_,s}function Rs(r,s,l,f){return r=ai(7,r,f,s),r.lanes=l,r}function kc(r,s,l,f){return r=ai(22,r,f,s),r.elementType=ie,r.lanes=l,r.stateNode={isHidden:!1},r}function Fd(r,s,l){return r=ai(6,r,null,s),r.lanes=l,r}function kd(r,s,l){return s=ai(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Tw(r,s,l,f,m){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Bd(r,s,l,f,m,_,T,L,z){return r=new Tw(r,s,l,L,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),r.current=_,_.stateNode=r,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(_),r}function Mw(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function k_(r){if(!r)return br;r=r._reactInternals;e:{if(Xi(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Fn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Fn(l))return dv(r,l,s)}return s}function B_(r,s,l,f,m,_,T,L,z){return r=Bd(l,f,!0,r,m,_,T,L,z),r.context=k_(null),l=r.current,f=Dn(),m=Or(l),_=Ji(f,m),_.callback=s??null,Dr(l,_,m),r.current.lanes=m,Zt(r,m,f),Vn(r,f),r}function Bc(r,s,l,f){var m=s.current,_=Dn(),T=Or(m);return l=k_(l),s.context===null?s.context=l:s.pendingContext=l,s=Ji(_,T),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Dr(m,s,T),r!==null&&(xi(r,m,T,_),gc(r,m,T)),T}function Vc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function V_(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Vd(r,s){V_(r,s),(r=r.alternate)&&V_(r,s)}function ww(){return null}var z_=typeof reportError=="function"?reportError:function(r){console.error(r)};function zd(r){this._internalRoot=r}zc.prototype.render=zd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bc(r,s,null,null)},zc.prototype.unmount=zd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ws(function(){Bc(null,r,null,null)}),s[$i]=null}};function zc(r){this._internalRoot=r}zc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Mg();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Mr.length&&s!==0&&s<Mr[l].priority;l++);Mr.splice(l,0,r),l===0&&Cg(r)}};function Hd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Hc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function H_(){}function Aw(r,s,l,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var Z=Vc(T);_.call(Z)}}var T=B_(s,f,r,0,null,!1,!1,"",H_);return r._reactRootContainer=T,r[$i]=T.current,Pa(r.nodeType===8?r.parentNode:r),ws(),T}for(;m=r.lastChild;)r.removeChild(m);if(typeof f=="function"){var L=f;f=function(){var Z=Vc(z);L.call(Z)}}var z=Bd(r,0,!1,null,null,!1,!1,"",H_);return r._reactRootContainer=z,r[$i]=z.current,Pa(r.nodeType===8?r.parentNode:r),ws(function(){Bc(s,z,l,f)}),z}function Gc(r,s,l,f,m){var _=l._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var L=m;m=function(){var z=Vc(T);L.call(z)}}Bc(s,T,r,m)}else T=Aw(l,s,r,m,f);return Vc(T)}Eg=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=on(s.pendingLanes);l!==0&&(gs(s,l|1),Vn(s,W()),(Tt&6)===0&&(Mo=W()+500,Pr()))}break;case 13:ws(function(){var f=Zi(r,1);if(f!==null){var m=Dn();xi(f,r,1,m)}}),Vd(r,1)}},hf=function(r){if(r.tag===13){var s=Zi(r,134217728);if(s!==null){var l=Dn();xi(s,r,134217728,l)}Vd(r,134217728)}},Tg=function(r){if(r.tag===13){var s=Or(r),l=Zi(r,s);if(l!==null){var f=Dn();xi(l,r,s,f)}Vd(r,s)}},Mg=function(){return vt},wg=function(r,s){var l=vt;try{return vt=r,s()}finally{vt=l}},xe=function(r,s,l){switch(s){case"input":if(Ke(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var m=oc(f);if(!m)throw Error(t(90));_t(f),Ke(f,m)}}}break;case"textarea":w(r,l);break;case"select":s=l.value,s!=null&&Vt(r,!!l.multiple,s,!1)}},ct=Ld,bt=ws;var Cw={usingClientEntryPoint:!1,Events:[La,uo,oc,de,Ge,Ld]},$a={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rw={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Gl(r),r===null?null:r.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{Ye=Wc.inject(Rw),ot=Wc}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw,zn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(s))throw Error(t(200));return Mw(r,s,null,l)},zn.createRoot=function(r,s){if(!Hd(r))throw Error(t(299));var l=!1,f="",m=z_;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Bd(r,1,!1,null,null,l,!1,f,m),r[$i]=s.current,Pa(r.nodeType===8?r.parentNode:r),new zd(s)},zn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Gl(s),r=r===null?null:r.stateNode,r},zn.flushSync=function(r){return ws(r)},zn.hydrate=function(r,s,l){if(!Hc(s))throw Error(t(200));return Gc(null,r,s,!0,l)},zn.hydrateRoot=function(r,s,l){if(!Hd(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,_="",T=z_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=B_(s,null,r,1,l??null,m,!1,_,T),r[$i]=s.current,Pa(r),f)for(r=0;r<f.length;r++)l=f[r],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new zc(s)},zn.render=function(r,s,l){if(!Hc(s))throw Error(t(200));return Gc(null,r,s,!1,l)},zn.unmountComponentAtNode=function(r){if(!Hc(r))throw Error(t(40));return r._reactRootContainer?(ws(function(){Gc(null,null,r,!1,function(){r._reactRootContainer=null,r[$i]=null})}),!0):!1},zn.unstable_batchedUpdates=Ld,zn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!Hc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Gc(r,s,l,!1,f)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var b0;function lb(){if(b0)return eh.exports;b0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),eh.exports=ab(),eh.exports}var P0;function cb(){if(P0)return qc;P0=1;var n=lb();return qc.createRoot=n.createRoot,qc.hydrateRoot=n.hydrateRoot,qc}var ub=cb();const HS=dt.createContext({});function fb(n){const e=dt.useRef(null);return e.current===null&&(e.current=n()),e.current}const Lm=typeof window<"u",db=Lm?dt.useLayoutEffect:dt.useEffect,Nm=dt.createContext(null);function Um(n,e){n.indexOf(e)===-1&&n.push(e)}function Om(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const mr=(n,e,t)=>t>e?e:t<n?n:t;let Fm=()=>{};const gr={},GS=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function WS(n){return typeof n=="object"&&n!==null}const jS=n=>/^0[^.\s]+$/u.test(n);function km(n){let e;return()=>(e===void 0&&(e=n()),e)}const hi=n=>n,hb=(n,e)=>t=>e(n(t)),bl=(...n)=>n.reduce(hb),pl=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i};class Bm{constructor(){this.subscriptions=[]}add(e){return Um(this.subscriptions,e),()=>Om(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vi=n=>n*1e3,zi=n=>n/1e3;function XS(n,e){return e?n*(1e3/e):0}const $S=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,pb=1e-7,mb=12;function gb(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=$S(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>pb&&++u<mb);return c}function Pl(n,e,t,i){if(n===e&&t===i)return hi;const o=a=>gb(a,0,1,n,t);return a=>a===0||a===1?a:$S(o(a),e,i)}const qS=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,KS=n=>e=>1-n(1-e),YS=Pl(.33,1.53,.69,.99),Vm=KS(YS),ZS=qS(Vm),JS=n=>(n*=2)<1?.5*Vm(n):.5*(2-Math.pow(2,-10*(n-1))),zm=n=>1-Math.sin(Math.acos(n)),QS=KS(zm),eE=qS(zm),vb=Pl(.42,0,1,1),_b=Pl(0,0,.58,1),tE=Pl(.42,0,.58,1),yb=n=>Array.isArray(n)&&typeof n[0]!="number",nE=n=>Array.isArray(n)&&typeof n[0]=="number",xb={linear:hi,easeIn:vb,easeInOut:tE,easeOut:_b,circIn:zm,circInOut:eE,circOut:QS,backIn:Vm,backInOut:ZS,backOut:YS,anticipate:JS},Sb=n=>typeof n=="string",I0=n=>{if(nE(n)){Fm(n.length===4);const[e,t,i,o]=n;return Pl(e,t,i,o)}else if(Sb(n))return xb[n];return n},Kc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Eb(n,e){let t=new Set,i=new Set,o=!1,a=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function d(p){c.has(p)&&(h.schedule(p),n()),p(u)}const h={schedule:(p,g=!1,v=!1)=>{const E=v&&o?t:i;return g&&c.add(p),E.has(p)||E.add(p),p},cancel:p=>{i.delete(p),c.delete(p)},process:p=>{if(u=p,o){a=!0;return}o=!0,[t,i]=[i,t],t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(p))}};return h}const Tb=40;function iE(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Kc.reduce((b,C)=>(b[C]=Eb(a),b),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:g,preRender:v,render:x,postRender:E}=c,M=()=>{const b=gr.useManualTiming?o.timestamp:performance.now();t=!1,gr.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(b-o.timestamp,Tb),1)),o.timestamp=b,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),g.process(o),v.process(o),x.process(o),E.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(M))},S=()=>{t=!0,i=!0,o.isProcessing||n(M)};return{schedule:Kc.reduce((b,C)=>{const N=c[C];return b[C]=(k,F=!1,H=!1)=>(t||S(),N.schedule(k,F,H)),b},{}),cancel:b=>{for(let C=0;C<Kc.length;C++)c[Kc[C]].cancel(b)},state:o,steps:c}}const{schedule:jt,cancel:as,state:_n,steps:ih}=iE(typeof requestAnimationFrame<"u"?requestAnimationFrame:hi,!0);let Au;function Mb(){Au=void 0}const Wn={now:()=>(Au===void 0&&Wn.set(_n.isProcessing||gr.useManualTiming?_n.timestamp:performance.now()),Au),set:n=>{Au=n,queueMicrotask(Mb)}},rE=n=>e=>typeof e=="string"&&e.startsWith(n),Hm=rE("--"),wb=rE("var(--"),Gm=n=>wb(n)?Ab.test(n.split("/*")[0].trim()):!1,Ab=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,fa={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ml={...fa,transform:n=>mr(0,1,n)},Yc={...fa,default:1},sl=n=>Math.round(n*1e5)/1e5,Wm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Cb(n){return n==null}const Rb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jm=(n,e)=>t=>!!(typeof t=="string"&&Rb.test(t)&&t.startsWith(n)||e&&!Cb(t)&&Object.prototype.hasOwnProperty.call(t,e)),sE=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(Wm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},bb=n=>mr(0,255,n),rh={...fa,transform:n=>Math.round(bb(n))},Hs={test:jm("rgb","red"),parse:sE("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+rh.transform(n)+", "+rh.transform(e)+", "+rh.transform(t)+", "+sl(ml.transform(i))+")"};function Pb(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const sp={test:jm("#"),parse:Pb,transform:Hs.transform},Il=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),$r=Il("deg"),Hi=Il("%"),st=Il("px"),Ib=Il("vh"),Db=Il("vw"),D0={...Hi,parse:n=>Hi.parse(n)/100,transform:n=>Hi.transform(n*100)},Ho={test:jm("hsl","hue"),parse:sE("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Hi.transform(sl(e))+", "+Hi.transform(sl(t))+", "+sl(ml.transform(i))+")"},rn={test:n=>Hs.test(n)||sp.test(n)||Ho.test(n),parse:n=>Hs.test(n)?Hs.parse(n):Ho.test(n)?Ho.parse(n):sp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Hs.transform(n):Ho.transform(n),getAnimatableNone:n=>{const e=rn.parse(n);return e.alpha=0,rn.transform(e)}},Lb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Nb(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Wm))==null?void 0:e.length)||0)+(((t=n.match(Lb))==null?void 0:t.length)||0)>0}const oE="number",aE="color",Ub="var",Ob="var(",L0="${}",Fb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function gl(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(Fb,d=>(rn.test(d)?(i.color.push(a),o.push(aE),t.push(rn.parse(d))):d.startsWith(Ob)?(i.var.push(a),o.push(Ub),t.push(d)):(i.number.push(a),o.push(oE),t.push(parseFloat(d))),++a,L0)).split(L0);return{values:t,split:u,indexes:i,types:o}}function lE(n){return gl(n).values}function cE(n){const{split:e,types:t}=gl(n),i=e.length;return o=>{let a="";for(let c=0;c<i;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===oE?a+=sl(o[c]):u===aE?a+=rn.transform(o[c]):a+=o[c]}return a}}const kb=n=>typeof n=="number"?0:rn.test(n)?rn.getAnimatableNone(n):n;function Bb(n){const e=lE(n);return cE(n)(e.map(kb))}const ls={test:Nb,parse:lE,createTransformer:cE,getAnimatableNone:Bb};function sh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Vb({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=sh(d,u,n+1/3),a=sh(d,u,n),c=sh(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function Gu(n,e){return t=>t>0?e:n}const qt=(n,e,t)=>n+(e-n)*t,oh=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},zb=[sp,Hs,Ho],Hb=n=>zb.find(e=>e.test(n));function N0(n){const e=Hb(n);if(!e)return!1;let t=e.parse(n);return e===Ho&&(t=Vb(t)),t}const U0=(n,e)=>{const t=N0(n),i=N0(e);if(!t||!i)return Gu(n,e);const o={...t};return a=>(o.red=oh(t.red,i.red,a),o.green=oh(t.green,i.green,a),o.blue=oh(t.blue,i.blue,a),o.alpha=qt(t.alpha,i.alpha,a),Hs.transform(o))},op=new Set(["none","hidden"]);function Gb(n,e){return op.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function Wb(n,e){return t=>qt(n,e,t)}function Xm(n){return typeof n=="number"?Wb:typeof n=="string"?Gm(n)?Gu:rn.test(n)?U0:$b:Array.isArray(n)?uE:typeof n=="object"?rn.test(n)?U0:jb:Gu}function uE(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>Xm(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function jb(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Xm(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function Xb(n,e){const t=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][i[a]],u=n.values[c]??0;t[o]=u,i[a]++}return t}const $b=(n,e)=>{const t=ls.createTransformer(e),i=gl(n),o=gl(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?op.has(n)&&!o.values.length||op.has(e)&&!i.values.length?Gb(n,e):bl(uE(Xb(i,o),o.values),t):Gu(n,e)};function fE(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?qt(n,e,t):Xm(n)(n,e)}const qb=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>jt.update(e,t),stop:()=>as(e),now:()=>_n.isProcessing?_n.timestamp:Wn.now()}},dE=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Wu=2e4;function $m(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Wu;)e+=t,i=n.next(e);return e>=Wu?1/0:e}function Kb(n,e=100,t){const i=t({...n,keyframes:[0,e]}),o=Math.min($m(i),Wu);return{type:"keyframes",ease:a=>i.next(o*a).value/e,duration:zi(o)}}const Yb=5;function hE(n,e,t){const i=Math.max(e-Yb,0);return XS(t-n(i),e-i)}const Yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ah=.001;function Zb({duration:n=Yt.duration,bounce:e=Yt.bounce,velocity:t=Yt.velocity,mass:i=Yt.mass}){let o,a,c=1-e;c=mr(Yt.minDamping,Yt.maxDamping,c),n=mr(Yt.minDuration,Yt.maxDuration,zi(n)),c<1?(o=h=>{const p=h*c,g=p*n,v=p-t,x=ap(h,c),E=Math.exp(-g);return ah-v/x*E},a=h=>{const g=h*c*n,v=g*t+t,x=Math.pow(c,2)*Math.pow(h,2)*n,E=Math.exp(-g),M=ap(Math.pow(h,2),c);return(-o(h)+ah>0?-1:1)*((v-x)*E)/M}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-ah+p*g},a=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const u=5/n,d=Qb(o,a,u);if(n=Vi(n),isNaN(d))return{stiffness:Yt.stiffness,damping:Yt.damping,duration:n};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const Jb=12;function Qb(n,e,t){let i=t;for(let o=1;o<Jb;o++)i=i-n(i)/e(i);return i}function ap(n,e){return n*Math.sqrt(1-e*e)}const eP=["duration","bounce"],tP=["stiffness","damping","mass"];function O0(n,e){return e.some(t=>n[t]!==void 0)}function nP(n){let e={velocity:Yt.velocity,stiffness:Yt.stiffness,damping:Yt.damping,mass:Yt.mass,isResolvedFromDuration:!1,...n};if(!O0(n,tP)&&O0(n,eP))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*mr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Yt.mass,stiffness:o,damping:a}}else{const t=Zb(n);e={...e,...t,mass:Yt.mass},e.isResolvedFromDuration=!0}return e}function ju(n=Yt.visualDuration,e=Yt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:x}=nP({...t,velocity:-zi(t.velocity||0)}),E=v||0,M=h/(2*Math.sqrt(d*p)),S=c-a,y=zi(Math.sqrt(d/p)),I=Math.abs(S)<5;i||(i=I?Yt.restSpeed.granular:Yt.restSpeed.default),o||(o=I?Yt.restDelta.granular:Yt.restDelta.default);let b;if(M<1){const N=ap(y,M);b=k=>{const F=Math.exp(-M*y*k);return c-F*((E+M*y*S)/N*Math.sin(N*k)+S*Math.cos(N*k))}}else if(M===1)b=N=>c-Math.exp(-y*N)*(S+(E+y*S)*N);else{const N=y*Math.sqrt(M*M-1);b=k=>{const F=Math.exp(-M*y*k),H=Math.min(N*k,300);return c-F*((E+M*y*S)*Math.sinh(H)+N*S*Math.cosh(H))/N}}const C={calculatedDuration:x&&g||null,next:N=>{const k=b(N);if(x)u.done=N>=g;else{let F=N===0?E:0;M<1&&(F=N===0?Vi(E):hE(b,N,k));const H=Math.abs(F)<=i,P=Math.abs(c-k)<=o;u.done=H&&P}return u.value=u.done?c:k,u},toString:()=>{const N=Math.min($m(C),Wu),k=dE(F=>C.next(N*F).value,N,30);return N+"ms "+k},toTransition:()=>{}};return C}ju.applyToOptions=n=>{const e=Kb(n,100,ju);return n.ease=e.ease,n.duration=Vi(e.duration),n.type="keyframes",n};function lp({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},x=H=>u!==void 0&&H<u||d!==void 0&&H>d,E=H=>u===void 0?d:d===void 0||Math.abs(u-H)<Math.abs(d-H)?u:d;let M=t*e;const S=g+M,y=c===void 0?S:c(S);y!==S&&(M=y-g);const I=H=>-M*Math.exp(-H/i),b=H=>y+I(H),C=H=>{const P=I(H),R=b(H);v.done=Math.abs(P)<=h,v.value=v.done?y:R};let N,k;const F=H=>{x(v.value)&&(N=H,k=ju({keyframes:[v.value,E(v.value)],velocity:hE(b,H,v.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:H=>{let P=!1;return!k&&N===void 0&&(P=!0,C(H),F(H)),N!==void 0&&H>=N?k.next(H-N):(!P&&C(H),v)}}}function iP(n,e,t){const i=[],o=t||gr.mix||fE,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||hi:e;u=bl(d,u)}i.push(u)}return i}function rP(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(Fm(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=iP(e,i,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=pl(n[g],n[g+1],p);return u[g](v)};return t?p=>h(mr(n[0],n[a-1],p)):h}function sP(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=pl(0,e,i);n.push(qt(t,1,o))}}function oP(n){const e=[0];return sP(e,n.length-1),e}function aP(n,e){return n.map(t=>t*e)}function lP(n,e){return n.map(()=>e||tE).splice(0,n.length-1)}function ol({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=yb(i)?i.map(I0):I0(i),a={done:!1,value:e[0]},c=aP(t&&t.length===e.length?t:oP(e),n),u=rP(c,e,{ease:Array.isArray(o)?o:lP(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const cP=n=>n!==null;function qm(n,{repeat:e,repeatType:t="loop"},i,o=1){const a=n.filter(cP),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||i===void 0?a[u]:i}const uP={decay:lp,inertia:lp,tween:ol,keyframes:ol,spring:ju};function pE(n){typeof n.type=="string"&&(n.type=uP[n.type])}class Km{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const fP=n=>n/100;class Ym extends Km{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Wn.now()&&this.tick(Wn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;pE(e);const{type:t=ol,repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||ol;d!==ol&&typeof u[0]!="number"&&(this.mixKeyframes=bl(fP,fE(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=$m(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return i.next(0);const{delay:h=0,keyframes:p,repeat:g,repeatType:v,repeatDelay:x,type:E,onUpdate:M,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,C=i;if(g){const H=Math.min(this.currentTime,o)/u;let P=Math.floor(H),R=H%1;!R&&H>=1&&(R=1),R===1&&P--,P=Math.min(P,g+1),!!(P%2)&&(v==="reverse"?(R=1-R,x&&(R-=x/u)):v==="mirror"&&(C=c)),b=mr(0,1,R)*u}const N=I?{done:!1,value:p[0]}:C.next(b);a&&(N.value=a(N.value));let{done:k}=N;!I&&d!==null&&(k=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return F&&E!==lp&&(N.value=qm(p,this.options,S,this.speed)),M&&M(N.value),F&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return zi(this.calculatedDuration)}get time(){return zi(this.currentTime)}set time(e){var t;e=Vi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Wn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=zi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=qb,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Wn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function dP(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Gs=n=>n*180/Math.PI,cp=n=>{const e=Gs(Math.atan2(n[1],n[0]));return up(e)},hP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:cp,rotateZ:cp,skewX:n=>Gs(Math.atan(n[1])),skewY:n=>Gs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},up=n=>(n=n%360,n<0&&(n+=360),n),F0=cp,k0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),B0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),pP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:k0,scaleY:B0,scale:n=>(k0(n)+B0(n))/2,rotateX:n=>up(Gs(Math.atan2(n[6],n[5]))),rotateY:n=>up(Gs(Math.atan2(-n[2],n[0]))),rotateZ:F0,rotate:F0,skewX:n=>Gs(Math.atan(n[4])),skewY:n=>Gs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function fp(n){return n.includes("scale")?1:0}function dp(n,e){if(!n||n==="none")return fp(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(t)i=pP,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=hP,o=u}if(!o)return fp(e);const a=i[e],c=o[1].split(",").map(gP);return typeof a=="function"?a(c):c[a]}const mP=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return dp(t,e)};function gP(n){return parseFloat(n.trim())}const da=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ha=new Set(da),V0=n=>n===fa||n===st,vP=new Set(["x","y","z"]),_P=da.filter(n=>!vP.has(n));function yP(n){const e=[];return _P.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const qs={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>dp(e,"x"),y:(n,{transform:e})=>dp(e,"y")};qs.translateX=qs.x;qs.translateY=qs.y;const Ks=new Set;let hp=!1,pp=!1,mp=!1;function mE(){if(pp){const n=Array.from(Ks).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=yP(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))==null||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}pp=!1,hp=!1,Ks.forEach(n=>n.complete(mp)),Ks.clear()}function gE(){Ks.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(pp=!0)})}function xP(){mp=!0,gE(),mE(),mp=!1}class Zm{constructor(e,t,i,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Ks.add(this),hp||(hp=!0,jt.read(gE),jt.resolveKeyframes(mE))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const u=i.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}dP(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ks.delete(this)}cancel(){this.state==="scheduled"&&(Ks.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const SP=n=>n.startsWith("--");function EP(n,e,t){SP(e)?n.style.setProperty(e,t):n.style[e]=t}const TP=km(()=>window.ScrollTimeline!==void 0),MP={};function wP(n,e){const t=km(n);return()=>MP[e]??t()}const vE=wP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),tl=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,z0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:tl([0,.65,.55,1]),circOut:tl([.55,0,1,.45]),backIn:tl([.31,.01,.66,-.59]),backOut:tl([.33,1.53,.69,.99])};function _E(n,e){if(n)return typeof n=="function"?vE()?dE(n,e):"ease-out":nE(n)?tl(n):Array.isArray(n)?n.map(t=>_E(t,e)||z0.easeOut):z0[n]}function AP(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const g=_E(u,o);Array.isArray(g)&&(p.easing=g);const v={delay:i,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),n.animate(p,v)}function yE(n){return typeof n=="function"&&"applyToOptions"in n}function CP({type:n,...e}){return yE(n)&&vE()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class RP extends Km{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:i,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Fm(typeof e.type!="string");const h=CP(e);this.animation=AP(t,i,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=qm(o,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(p):EP(t,i,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,t;this.isPseudoElement||(t=(e=this.animation).commitStyles)==null||t.call(e)}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return zi(Number(e))}get time(){return zi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Vi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&TP()?(this.animation.timeline=e,hi):t(this)}}const xE={anticipate:JS,backInOut:ZS,circInOut:eE};function bP(n){return n in xE}function PP(n){typeof n.ease=="string"&&bP(n.ease)&&(n.ease=xE[n.ease])}const H0=10;class IP extends RP{constructor(e){PP(e),pE(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new Ym({...c,autoplay:!1}),d=Vi(this.finishedTime??this.time);t.setWithVelocity(u.sample(d-H0).value,u.sample(d).value,H0),u.stop()}}const G0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ls.test(n)||n==="0")&&!n.startsWith("url("));function DP(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function LP(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=G0(o,e),u=G0(a,e);return!c||!u?!1:DP(n)||(t==="spring"||yE(t))&&i}function gp(n){n.duration=0,n.type}const NP=new Set(["opacity","clipPath","filter","transform"]),UP=km(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function OP(n){var p;const{motionValue:e,name:t,repeatDelay:i,repeatType:o,damping:a,type:c}=n;if(!(((p=e==null?void 0:e.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return UP()&&t&&NP.has(t)&&(t!=="transform"||!h)&&!d&&!i&&o!=="mirror"&&a!==0&&c!=="inertia"}const FP=40;class kP extends Km{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...g}){var E;super(),this.stop=()=>{var M,S;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Wn.now();const v={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...g},x=(p==null?void 0:p.KeyframeResolver)||Zm;this.keyframeResolver=new x(u,(M,S,y)=>this.onKeyframesResolved(M,S,v,!y),d,h,p),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(e,t,i,o){this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=i;this.resolvedAt=Wn.now(),LP(e,a,c,u)||((gr.instantAnimations||!d)&&(p==null||p(qm(e,i,t))),e[0]=e[e.length-1],gp(i),i.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>FP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},x=!h&&OP(v)?new IP({...v,element:v.motionValue.owner.current}):new Ym(v);x.finished.then(()=>this.notifyFinished()).catch(hi),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),xP()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const BP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function VP(n){const e=BP.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function SE(n,e,t=1){const[i,o]=VP(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return GS(c)?parseFloat(c):c}return Gm(o)?SE(o,e,t+1):o}function Jm(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const EE=new Set(["width","height","top","left","right","bottom",...da]),zP={test:n=>n==="auto",parse:n=>n},TE=n=>e=>e.test(n),ME=[fa,st,Hi,$r,Db,Ib,zP],W0=n=>ME.find(TE(n));function HP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||jS(n):!0}const GP=new Set(["brightness","contrast","saturate","opacity"]);function WP(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Wm)||[];if(!i)return n;const o=t.replace(i,"");let a=GP.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const jP=/\b([a-z-]*)\(.*?\)/gu,vp={...ls,getAnimatableNone:n=>{const e=n.match(jP);return e?e.map(WP).join(" "):n}},j0={...fa,transform:Math.round},XP={rotate:$r,rotateX:$r,rotateY:$r,rotateZ:$r,scale:Yc,scaleX:Yc,scaleY:Yc,scaleZ:Yc,skew:$r,skewX:$r,skewY:$r,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:ml,originX:D0,originY:D0,originZ:st},Qm={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st,...XP,zIndex:j0,fillOpacity:ml,strokeOpacity:ml,numOctaves:j0},$P={...Qm,color:rn,backgroundColor:rn,outlineColor:rn,fill:rn,stroke:rn,borderColor:rn,borderTopColor:rn,borderRightColor:rn,borderBottomColor:rn,borderLeftColor:rn,filter:vp,WebkitFilter:vp},wE=n=>$P[n];function AE(n,e){let t=wE(n);return t!==vp&&(t=ls),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const qP=new Set(["auto","none","0"]);function KP(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!qP.has(a)&&gl(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=AE(t,o)}class YP extends Zm{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Gm(h))){const p=SE(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!EE.has(i)||e.length!==2)return;const[o,a]=e,c=W0(o),u=W0(a);if(c!==u)if(V0(c)&&V0(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else qs[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||HP(e[o]))&&i.push(o);i.length&&KP(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qs[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,c=i[a];i[a]=qs[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function ZP(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const o=(t==null?void 0:t[n])??i.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const CE=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function JP(n){return WS(n)&&"offsetHeight"in n}const X0=30,QP=n=>!isNaN(parseFloat(n));class eI{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var a;const o=Wn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Wn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=QP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Bm);const i=this.events[e].add(t);return e==="change"?()=>{i(),jt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Wn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>X0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,X0);return XS(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function na(n,e){return new eI(n,e)}const{schedule:eg}=iE(queueMicrotask,!1),Mi={x:!1,y:!1};function RE(){return Mi.x||Mi.y}function tI(n){return n==="x"||n==="y"?Mi[n]?null:(Mi[n]=!0,()=>{Mi[n]=!1}):Mi.x||Mi.y?null:(Mi.x=Mi.y=!0,()=>{Mi.x=Mi.y=!1})}function bE(n,e){const t=ZP(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function $0(n){return!(n.pointerType==="touch"||RE())}function nI(n,e,t={}){const[i,o,a]=bE(n,t),c=u=>{if(!$0(u))return;const{target:d}=u,h=e(d,u);if(typeof h!="function"||!d)return;const p=g=>{$0(g)&&(h(g),d.removeEventListener("pointerleave",p))};d.addEventListener("pointerleave",p,o)};return i.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const PE=(n,e)=>e?n===e?!0:PE(n,e.parentElement):!1,tg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,iI=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rI(n){return iI.has(n.tagName)||n.tabIndex!==-1}const Cu=new WeakSet;function q0(n){return e=>{e.key==="Enter"&&n(e)}}function lh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const sI=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=q0(()=>{if(Cu.has(t))return;lh(t,"down");const o=q0(()=>{lh(t,"up")}),a=()=>lh(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function K0(n){return tg(n)&&!RE()}function oI(n,e,t={}){const[i,o,a]=bE(n,t),c=u=>{const d=u.currentTarget;if(!K0(u))return;Cu.add(d);const h=e(d,u),p=(x,E)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),Cu.has(d)&&Cu.delete(d),K0(x)&&typeof h=="function"&&h(x,{success:E})},g=x=>{p(x,d===window||d===document||t.useGlobalTarget||PE(d,x.target))},v=x=>{p(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),JP(u)&&(u.addEventListener("focus",h=>sI(h,o)),!rI(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function IE(n){return WS(n)&&"ownerSVGElement"in n}function aI(n){return IE(n)&&n.tagName==="svg"}const Rn=n=>!!(n&&n.getVelocity),lI=[...ME,rn,ls],cI=n=>lI.find(TE(n)),DE=dt.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function uI(n=!0){const e=dt.useContext(Nm);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=dt.useId();dt.useEffect(()=>{if(n)return o(a)},[n]);const c=dt.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const LE=dt.createContext({strict:!1}),Y0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ia={};for(const n in Y0)ia[n]={isEnabled:e=>Y0[n].some(t=>!!e[t])};function fI(n){for(const e in n)ia[e]={...ia[e],...n[e]}}const dI=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Xu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||dI.has(n)}let NE=n=>!Xu(n);function hI(n){typeof n=="function"&&(NE=e=>e.startsWith("on")?!Xu(e):n(e))}try{hI(require("@emotion/is-prop-valid").default)}catch{}function pI(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||(NE(o)||t===!0&&Xu(o)||!e&&!Xu(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}const sf=dt.createContext({});function of(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function vl(n){return typeof n=="string"||Array.isArray(n)}const ng=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ig=["initial",...ng];function af(n){return of(n.animate)||ig.some(e=>vl(n[e]))}function UE(n){return!!(af(n)||n.variants)}function mI(n,e){if(af(n)){const{initial:t,animate:i}=n;return{initial:t===!1||vl(t)?t:void 0,animate:vl(i)?i:void 0}}return n.inherit!==!1?e:{}}function gI(n){const{initial:e,animate:t}=mI(n,dt.useContext(sf));return dt.useMemo(()=>({initial:e,animate:t}),[Z0(e),Z0(t)])}function Z0(n){return Array.isArray(n)?n.join(" "):n}const _l={};function vI(n){for(const e in n)_l[e]=n[e],Hm(e)&&(_l[e].isCSSVariable=!0)}function OE(n,{layout:e,layoutId:t}){return ha.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!_l[n]||n==="opacity")}const _I={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yI=da.length;function xI(n,e,t){let i="",o=!0;for(let a=0;a<yI;a++){const c=da[a],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(c.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||t){const h=CE(u,Qm[c]);if(!d){o=!1;const p=_I[c]||c;i+=`${p}(${h}) `}t&&(e[c]=h)}}return i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function rg(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(ha.has(d)){c=!0;continue}else if(Hm(d)){o[d]=h;continue}else{const p=CE(h,Qm[d]);d.startsWith("origin")?(u=!0,a[d]=p):i[d]=p}}if(e.transform||(c||t?i.transform=xI(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${d} ${h} ${p}`}}const sg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function FE(n,e,t){for(const i in e)!Rn(e[i])&&!OE(i,t)&&(n[i]=e[i])}function SI({transformTemplate:n},e){return dt.useMemo(()=>{const t=sg();return rg(t,e,n),Object.assign({},t.vars,t.style)},[e])}function EI(n,e){const t=n.style||{},i={};return FE(i,t,n),Object.assign(i,SI(n,e)),i}function TI(n,e){const t={},i=EI(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const MI={offset:"stroke-dashoffset",array:"stroke-dasharray"},wI={offset:"strokeDashoffset",array:"strokeDasharray"};function AI(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?MI:wI;n[a.offset]=st.transform(-i);const c=st.transform(e),u=st.transform(t);n[a.array]=`${c} ${u}`}function kE(n,{attrX:e,attrY:t,attrScale:i,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(rg(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:v}=n;g.transform&&(v.transform=g.transform,delete g.transform),(v.transform||g.transformOrigin)&&(v.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),v.transform&&(v.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete g.transformBox),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),i!==void 0&&(g.scale=i),o!==void 0&&AI(g,o,a,c,!1)}const BE=()=>({...sg(),attrs:{}}),VE=n=>typeof n=="string"&&n.toLowerCase()==="svg";function CI(n,e,t,i){const o=dt.useMemo(()=>{const a=BE();return kE(a,e,VE(i),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};FE(a,n.style,n),o.style={...a,...o.style}}return o}const RI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function og(n){return typeof n!="string"||n.includes("-")?!1:!!(RI.indexOf(n)>-1||/[A-Z]/u.test(n))}function bI(n,e,t,{latestValues:i},o,a=!1){const u=(og(n)?CI:TI)(e,i,o,n),d=pI(e,typeof n=="string",a),h=n!==dt.Fragment?{...d,...u,ref:t}:{},{children:p}=e,g=dt.useMemo(()=>Rn(p)?p.get():p,[p]);return dt.createElement(n,{...h,children:g})}function J0(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function ag(n,e,t,i){if(typeof e=="function"){const[o,a]=J0(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=J0(i);e=e(t!==void 0?t:n.custom,o,a)}return e}function Ru(n){return Rn(n)?n.get():n}function PI({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,o){return{latestValues:II(t,i,o,n),renderState:e()}}function II(n,e,t,i){const o={},a=i(n,{});for(const v in a)o[v]=Ru(a[v]);let{initial:c,animate:u}=n;const d=af(n),h=UE(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const g=p?u:c;if(g&&typeof g!="boolean"&&!of(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const E=ag(n,v[x]);if(E){const{transitionEnd:M,transition:S,...y}=E;for(const I in y){let b=y[I];if(Array.isArray(b)){const C=p?b.length-1:0;b=b[C]}b!==null&&(o[I]=b)}for(const I in M)o[I]=M[I]}}}return o}const zE=n=>(e,t)=>{const i=dt.useContext(sf),o=dt.useContext(Nm),a=()=>PI(n,e,i,o);return t?a():fb(a)};function lg(n,e,t){var a;const{style:i}=n,o={};for(const c in i)(Rn(i[c])||e.style&&Rn(e.style[c])||OE(c,n)||((a=t==null?void 0:t.getValue(c))==null?void 0:a.liveStyle)!==void 0)&&(o[c]=i[c]);return o}const DI=zE({scrapeMotionValuesFromProps:lg,createRenderState:sg});function HE(n,e,t){const i=lg(n,e,t);for(const o in n)if(Rn(n[o])||Rn(e[o])){const a=da.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}const LI=zE({scrapeMotionValuesFromProps:HE,createRenderState:BE}),NI=Symbol.for("motionComponentSymbol");function Go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function UI(n,e,t){return dt.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Go(t)&&(t.current=i))},[e])}const cg=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),OI="framerAppearId",GE="data-"+cg(OI),WE=dt.createContext({});function FI(n,e,t,i,o){var M,S;const{visualElement:a}=dt.useContext(sf),c=dt.useContext(LE),u=dt.useContext(Nm),d=dt.useContext(DE).reducedMotion,h=dt.useRef(null);i=i||c.renderer,!h.current&&i&&(h.current=i(n,{visualState:e,parent:a,props:t,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=h.current,g=dt.useContext(WE);p&&!p.projection&&o&&(p.type==="html"||p.type==="svg")&&kI(h.current,t,o,g);const v=dt.useRef(!1);dt.useInsertionEffect(()=>{p&&v.current&&p.update(t,u)});const x=t[GE],E=dt.useRef(!!x&&!((M=window.MotionHandoffIsComplete)!=null&&M.call(window,x))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,x)));return db(()=>{p&&(v.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),E.current&&p.animationState&&p.animationState.animateChanges())}),dt.useEffect(()=>{p&&(!E.current&&p.animationState&&p.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,x)}),E.current=!1),p.enteringChildren=void 0)}),p}function kI(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:jE(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Go(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:p,layoutScroll:d,layoutRoot:h})}function jE(n){if(n)return n.options.allowProjection!==!1?n.projection:jE(n.parent)}function ch(n,{forwardMotionProps:e=!1}={},t,i){t&&fI(t);const o=og(n)?LI:DI;function a(u,d){let h;const p={...dt.useContext(DE),...u,layoutId:BI(u)},{isStatic:g}=p,v=gI(u),x=o(u,g);if(!g&&Lm){VI();const E=zI(p);h=E.MeasureLayout,v.visualElement=FI(n,x,p,i,E.ProjectionNode)}return be.jsxs(sf.Provider,{value:v,children:[h&&v.visualElement?be.jsx(h,{visualElement:v.visualElement,...p}):null,bI(n,u,UI(x,v.visualElement,d),x,g,e)]})}a.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=dt.forwardRef(a);return c[NI]=n,c}function BI({layoutId:n}){const e=dt.useContext(HS).id;return e&&n!==void 0?e+"-"+n:n}function VI(n,e){dt.useContext(LE).strict}function zI(n){const{drag:e,layout:t}=ia;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function HI(n,e){if(typeof Proxy>"u")return ch;const t=new Map,i=(a,c)=>ch(a,c,n,e),o=(a,c)=>i(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?i:(t.has(c)||t.set(c,ch(c,void 0,n,e)),t.get(c))})}function XE({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function GI({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function WI(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function uh(n){return n===void 0||n===1}function _p({scale:n,scaleX:e,scaleY:t}){return!uh(n)||!uh(e)||!uh(t)}function Fs(n){return _p(n)||$E(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function $E(n){return Q0(n.x)||Q0(n.y)}function Q0(n){return n&&n!=="0%"}function $u(n,e,t){const i=n-t,o=e*i;return t+o}function ey(n,e,t,i,o){return o!==void 0&&(n=$u(n,o,i)),$u(n,t,i)+e}function yp(n,e=0,t=1,i,o){n.min=ey(n.min,e,t,i,o),n.max=ey(n.max,e,t,i,o)}function qE(n,{x:e,y:t}){yp(n.x,e.translate,e.scale,e.originPoint),yp(n.y,t.translate,t.scale,t.originPoint)}const ty=.999999999999,ny=1.0000000000001;function jI(n,e,t,i=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&jo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,qE(n,c)),i&&Fs(a.latestValues)&&jo(n,a.latestValues))}e.x<ny&&e.x>ty&&(e.x=1),e.y<ny&&e.y>ty&&(e.y=1)}function Wo(n,e){n.min=n.min+e,n.max=n.max+e}function iy(n,e,t,i,o=.5){const a=qt(n.min,n.max,o);yp(n,e,t,a,i)}function jo(n,e){iy(n.x,e.x,e.scaleX,e.scale,e.originX),iy(n.y,e.y,e.scaleY,e.scale,e.originY)}function KE(n,e){return XE(WI(n.getBoundingClientRect(),e))}function XI(n,e,t){const i=KE(n,t),{scroll:o}=e;return o&&(Wo(i.x,o.offset.x),Wo(i.y,o.offset.y)),i}const ry=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xo=()=>({x:ry(),y:ry()}),sy=()=>({min:0,max:0}),Qt=()=>({x:sy(),y:sy()}),xp={current:null},YE={current:!1};function $I(){if(YE.current=!0,!!Lm)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>xp.current=n.matches;n.addEventListener("change",e),e()}else xp.current=!1}const qI=new WeakMap;function KI(n,e,t){for(const i in e){const o=e[i],a=t[i];if(Rn(o))n.addValue(i,o);else if(Rn(a))n.addValue(i,na(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,na(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const oy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class YI{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Wn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,jt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=c;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=af(t),this.isVariantNode=UE(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in g){const x=g[v];d[v]!==void 0&&Rn(x)&&x.set(d[v])}}mount(e){var t;this.current=e,qI.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),YE.current||$I(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:xp.current,(t=this.parent)==null||t.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),as(this.notifyUpdate),as(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ha.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&jt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ia){const t=ia[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<oy.length;i++){const o=oy[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=KI(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=na(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(GS(i)||jS(i))?i=parseFloat(i):!cI(i)&&ls.test(t)&&(i=AE(e,t)),this.setBaseTarget(e,Rn(i)?i.get():i)),Rn(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const c=ag(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(i=c[e])}if(t&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Rn(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Bm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){eg.render(this.render)}}class ZE extends YI{constructor(){super(...arguments),this.KeyframeResolver=YP}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Rn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function JE(n,{style:e,vars:t},i,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,i);for(c in t)a.setProperty(c,t[c])}function ZI(n){return window.getComputedStyle(n)}class JI extends ZE{constructor(){super(...arguments),this.type="html",this.renderInstance=JE}readValueFromInstance(e,t){var i;if(ha.has(t))return(i=this.projection)!=null&&i.isProjecting?fp(t):mP(e,t);{const o=ZI(e),a=(Hm(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return KE(e,t)}build(e,t,i){rg(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return lg(e,t,i)}}const QE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function QI(n,e,t,i){JE(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(QE.has(o)?o:cg(o),e.attrs[o])}class eD extends ZE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ha.has(t)){const i=wE(t);return i&&i.default||0}return t=QE.has(t)?t:cg(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return HE(e,t,i)}build(e,t,i){kE(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,o){QI(e,t,i,o)}mount(e){this.isSVGTag=VE(e.tagName),super.mount(e)}}const tD=(n,e)=>og(n)?new eD(e):new JI(e,{allowProjection:n!==dt.Fragment});function Zo(n,e,t){const i=n.getProps();return ag(i,e,t!==void 0?t:i.custom,n)}const Sp=n=>Array.isArray(n);function nD(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,na(t))}function iD(n){return Sp(n)?n[n.length-1]||0:n}function rD(n,e){const t=Zo(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=iD(a[c]);nD(n,c,u)}}function sD(n){return!!(Rn(n)&&n.add)}function Ep(n,e){const t=n.getValue("willChange");if(sD(t))return t.add(e);if(!t&&gr.WillChange){const i=new gr.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function eT(n){return n.props[GE]}const oD=n=>n!==null;function aD(n,{repeat:e,repeatType:t="loop"},i){const o=n.filter(oD),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[a]}const lD={type:"spring",stiffness:500,damping:25,restSpeed:10},cD=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),uD={type:"keyframes",duration:.8},fD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dD=(n,{keyframes:e})=>e.length>2?uD:ha.has(n)?n.startsWith("scale")?cD(e[1]):lD:fD;function hD({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const ug=(n,e,t,i={},o,a)=>c=>{const u=Jm(i,n)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-Vi(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:v=>{e.set(v),u.onUpdate&&u.onUpdate(v)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};hD(u)||Object.assign(p,dD(n,p)),p.duration&&(p.duration=Vi(p.duration)),p.repeatDelay&&(p.repeatDelay=Vi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(gp(p),p.delay===0&&(g=!0)),(gr.instantAnimations||gr.skipAnimations)&&(g=!0,gp(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,g&&!a&&e.get()!==void 0){const v=aD(p.keyframes,u);if(v!==void 0){jt.update(()=>{p.onUpdate(v),p.onComplete()});return}}return u.isSync?new Ym(p):new kP(p)};function pD({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function tT(n,e,{delay:t=0,transitionOverride:i,type:o}={}){let{transition:a=n.getDefaultTransition(),transitionEnd:c,...u}=e;i&&(a=i);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const p in u){const g=n.getValue(p,n.latestValues[p]??null),v=u[p];if(v===void 0||h&&pD(h,p))continue;const x={delay:t,...Jm(a||{},p)},E=g.get();if(E!==void 0&&!g.isAnimating&&!Array.isArray(v)&&v===E&&!x.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const y=eT(n);if(y){const I=window.MotionHandoffAnimation(y,p,jt);I!==null&&(x.startTime=I,M=!0)}}Ep(n,p),g.start(ug(p,g,v,n.shouldReduceMotion&&EE.has(p)?{type:!1}:x,n,M));const S=g.animation;S&&d.push(S)}return c&&Promise.all(d).then(()=>{jt.update(()=>{c&&rD(n,c)})}),d}function nT(n,e,t,i=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*i;return typeof t=="function"?t(a,c):o===1?a*i:u-a*i}function Tp(n,e,t={}){var d;const i=Zo(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(o=t.transitionOverride);const a=i?()=>Promise.all(tT(n,i,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=o;return mD(n,e,h,p,g,v,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,p]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function mD(n,e,t=0,i=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(Tp(d,e,{...c,delay:t+(typeof i=="function"?0:i)+nT(n.variantChildren,d,i,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function gD(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>Tp(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=Tp(n,e,t);else{const o=typeof e=="function"?Zo(n,e,t.custom):e;i=Promise.all(tT(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}function iT(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const vD=ig.length;function rT(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?rT(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<vD;t++){const i=ig[t],o=n.props[i];(vl(o)||o===!1)&&(e[i]=o)}return e}const _D=[...ng].reverse(),yD=ng.length;function xD(n){return e=>Promise.all(e.map(({animation:t,options:i})=>gD(n,t,i)))}function SD(n){let e=xD(n),t=ay(),i=!0;const o=d=>(h,p)=>{var v;const g=Zo(n,p,d==="exit"?(v=n.presenceContext)==null?void 0:v.custom:void 0);if(g){const{transition:x,transitionEnd:E,...M}=g;h={...h,...M,...E}}return h};function a(d){e=d(n)}function c(d){const{props:h}=n,p=rT(n.parent)||{},g=[],v=new Set;let x={},E=1/0;for(let S=0;S<yD;S++){const y=_D[S],I=t[y],b=h[y]!==void 0?h[y]:p[y],C=vl(b),N=y===d?I.isActive:null;N===!1&&(E=S);let k=b===p[y]&&b!==h[y]&&C;if(k&&i&&n.manuallyAnimateOnMount&&(k=!1),I.protectedKeys={...x},!I.isActive&&N===null||!b&&!I.prevProp||of(b)||typeof b=="boolean")continue;const F=ED(I.prevProp,b);let H=F||y===d&&I.isActive&&!k&&C||S>E&&C,P=!1;const R=Array.isArray(b)?b:[b];let O=R.reduce(o(y),{});N===!1&&(O={});const{prevResolvedValues:le={}}=I,re={...le,...O},ae=ie=>{H=!0,v.has(ie)&&(P=!0,v.delete(ie)),I.needsAnimating[ie]=!0;const V=n.getValue(ie);V&&(V.liveStyle=!1)};for(const ie in re){const V=O[ie],se=le[ie];if(x.hasOwnProperty(ie))continue;let ne=!1;Sp(V)&&Sp(se)?ne=!iT(V,se):ne=V!==se,ne?V!=null?ae(ie):v.add(ie):V!==void 0&&v.has(ie)?ae(ie):I.protectedKeys[ie]=!0}I.prevProp=b,I.prevResolvedValues=O,I.isActive&&(x={...x,...O}),i&&n.blockInitialAnimation&&(H=!1);const fe=k&&F;H&&(!fe||P)&&g.push(...R.map(ie=>{const V={type:y};if(typeof ie=="string"&&i&&!fe&&n.manuallyAnimateOnMount&&n.parent){const{parent:se}=n,ne=Zo(se,ie);if(se.enteringChildren&&ne){const{delayChildren:U}=ne.transition||{};V.delay=nT(se.enteringChildren,n,U)}}return{animation:ie,options:V}}))}if(v.size){const S={};if(typeof h.initial!="boolean"){const y=Zo(n,Array.isArray(h.initial)?h.initial[0]:h.initial);y&&y.transition&&(S.transition=y.transition)}v.forEach(y=>{const I=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=I??null}),g.push({animation:S})}let M=!!g.length;return i&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(M=!1),i=!1,M?e(g):Promise.resolve()}function u(d,h){var g;if(t[d].isActive===h)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(v=>{var x;return(x=v.animationState)==null?void 0:x.setActive(d,h)}),t[d].isActive=h;const p=c(d);for(const v in t)t[v].protectedKeys={};return p}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=ay(),i=!0}}}function ED(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!iT(e,n):!1}function bs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ay(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}class hs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class TD extends hs{constructor(e){super(e),e.animationState||(e.animationState=SD(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();of(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let MD=0;class wD extends hs{constructor(){super(...arguments),this.id=MD++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const AD={animation:{Feature:TD},exit:{Feature:wD}};function yl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function Dl(n){return{point:{x:n.pageX,y:n.pageY}}}const CD=n=>e=>tg(e)&&n(e,Dl(e));function al(n,e,t,i){return yl(n,e,CD(t),i)}const sT=1e-4,RD=1-sT,bD=1+sT,oT=.01,PD=0-oT,ID=0+oT;function Nn(n){return n.max-n.min}function DD(n,e,t){return Math.abs(n-e)<=t}function ly(n,e,t,i=.5){n.origin=i,n.originPoint=qt(e.min,e.max,n.origin),n.scale=Nn(t)/Nn(e),n.translate=qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=RD&&n.scale<=bD||isNaN(n.scale))&&(n.scale=1),(n.translate>=PD&&n.translate<=ID||isNaN(n.translate))&&(n.translate=0)}function ll(n,e,t,i){ly(n.x,e.x,t.x,i?i.originX:void 0),ly(n.y,e.y,t.y,i?i.originY:void 0)}function cy(n,e,t){n.min=t.min+e.min,n.max=n.min+Nn(e)}function LD(n,e,t){cy(n.x,e.x,t.x),cy(n.y,e.y,t.y)}function uy(n,e,t){n.min=e.min-t.min,n.max=n.min+Nn(e)}function cl(n,e,t){uy(n.x,e.x,t.x),uy(n.y,e.y,t.y)}function ui(n){return[n("x"),n("y")]}const aT=({current:n})=>n?n.ownerDocument.defaultView:null,fy=(n,e)=>Math.abs(n-e);function ND(n,e){const t=fy(n.x,e.x),i=fy(n.y,e.y);return Math.sqrt(t**2+i**2)}class lT{constructor(e,t,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=dh(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=ND(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!E)return;const{point:M}=v,{timestamp:S}=_n;this.history.push({...M,timestamp:S});const{onStart:y,onMove:I}=this.handlers;x||(y&&y(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=fh(x,this.transformPagePoint),jt.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:E,onSessionEnd:M,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=dh(v.type==="pointercancel"?this.lastMoveEventInfo:fh(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,y),M&&M(v,y)},!tg(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=c,this.contextWindow=o||window;const u=Dl(e),d=fh(u,this.transformPagePoint),{point:h}=d,{timestamp:p}=_n;this.history=[{...h,timestamp:p}];const{onSessionStart:g}=t;g&&g(e,dh(d,this.history)),this.removeListeners=bl(al(this.contextWindow,"pointermove",this.handlePointerMove),al(this.contextWindow,"pointerup",this.handlePointerUp),al(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),as(this.updatePoint)}}function fh(n,e){return e?{point:e(n.point)}:n}function dy(n,e){return{x:n.x-e.x,y:n.y-e.y}}function dh({point:n},e){return{point:n,delta:dy(n,cT(e)),offset:dy(n,UD(e)),velocity:OD(e,.1)}}function UD(n){return n[0]}function cT(n){return n[n.length-1]}function OD(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=cT(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>Vi(e)));)t--;if(!i)return{x:0,y:0};const a=zi(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function FD(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?qt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?qt(t,n,i.max):Math.min(n,t)),n}function hy(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function kD(n,{top:e,left:t,bottom:i,right:o}){return{x:hy(n.x,t,o),y:hy(n.y,e,i)}}function py(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function BD(n,e){return{x:py(n.x,e.x),y:py(n.y,e.y)}}function VD(n,e){let t=.5;const i=Nn(n),o=Nn(e);return o>i?t=pl(e.min,e.max-i,n.min):i>o&&(t=pl(n.min,n.max-o,e.min)),mr(0,1,t)}function zD(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Mp=.35;function HD(n=Mp){return n===!1?n=0:n===!0&&(n=Mp),{x:my(n,"left","right"),y:my(n,"top","bottom")}}function my(n,e,t){return{min:gy(n,e),max:gy(n,t)}}function gy(n,e){return typeof n=="number"?n:n[e]||0}const GD=new WeakMap;class WD{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Dl(g).point)},c=(g,v)=>{const{drag:x,dragPropagation:E,onDragStart:M}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tI(x),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ui(y=>{let I=this.getAxisMotionValue(y).get()||0;if(Hi.test(I)){const{projection:b}=this.visualElement;if(b&&b.layout){const C=b.layout.layoutBox[y];C&&(I=Nn(C)*(parseFloat(I)/100))}}this.originPoint[y]=I}),M&&jt.postRender(()=>M(g,v)),Ep(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:M,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(E&&this.currentDirection===null){this.currentDirection=jD(y),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&S(g,v)},d=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v,this.stop(g,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>ui(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)==null?void 0:v.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new lT(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:i,contextWindow:aT(this.visualElement)})}stop(e,t){const i=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!i)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&jt.postRender(()=>u(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!Zc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=FD(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Go(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=kD(i.layoutBox,e):this.constraints=!1,this.elastic=HD(t),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ui(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=zD(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Go(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=XI(i,o.root,this.visualElement.getTransformPagePoint());let c=BD(o.layout.layoutBox,a);if(t){const u=t(GI(c));this.hasMutatedConstraints=!!u,u&&(c=XE(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=ui(p=>{if(!Zc(p,t,this.currentDirection))return;let g=d&&d[p]||{};c&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,E={type:"inertia",velocity:i?e[p]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...a,...g};return this.startAxisValueAnimation(p,E)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Ep(this.visualElement,e),i.start(ug(e,i,0,t,this.visualElement,!1))}stopAnimation(){ui(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ui(e=>{var t;return(t=this.getAxisMotionValue(e).animation)==null?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)==null?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),o=i[t];return o||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ui(t=>{const{drag:i}=this.getProps();if(!Zc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-qt(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Go(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ui(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=VD({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ui(c=>{if(!Zc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(qt(d,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;GD.set(this.visualElement,this);const e=this.visualElement.current,t=al(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();Go(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),jt.read(i);const c=yl(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ui(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())});return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Mp,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function Zc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function jD(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class XD extends hs{constructor(e){super(e),this.removeGroupControls=hi,this.removeListeners=hi,this.controls=new WD(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||hi}unmount(){this.removeGroupControls(),this.removeListeners()}}const vy=n=>(e,t)=>{n&&jt.postRender(()=>n(e,t))};class $D extends hs{constructor(){super(...arguments),this.removePointerDownListener=hi}onPointerDown(e){this.session=new lT(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:aT(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:vy(e),onStart:vy(t),onMove:i,onEnd:(a,c)=>{delete this.session,o&&jt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=al(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _y(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ka={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const t=_y(n,e.target.x),i=_y(n,e.target.y);return`${t}% ${i}%`}},qD={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=ls.parse(n);if(o.length>5)return i;const a=ls.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=qt(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};let hh=!1;class KD extends dt.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;vI(YD),a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),hh&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,{projection:c}=i;return c&&(c.isPresent=a,hh=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||jt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),eg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;hh=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function uT(n){const[e,t]=uI(),i=dt.useContext(HS);return be.jsx(KD,{...n,layoutGroup:i,switchLayoutGroup:dt.useContext(WE),isPresent:e,safeToRemove:t})}const YD={borderRadius:{...Ka,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ka,borderTopRightRadius:Ka,borderBottomLeftRadius:Ka,borderBottomRightRadius:Ka,boxShadow:qD};function ZD(n,e,t){const i=Rn(n)?n:na(n);return i.start(ug("",i,e,t)),i.animation}const JD=(n,e)=>n.depth-e.depth;class QD{constructor(){this.children=[],this.isDirty=!1}add(e){Um(this.children,e),this.isDirty=!0}remove(e){Om(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JD),this.isDirty=!1,this.children.forEach(e)}}function eL(n,e){const t=Wn.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(as(i),n(a-e))};return jt.setup(i,!0),()=>as(i)}const fT=["TopLeft","TopRight","BottomLeft","BottomRight"],tL=fT.length,yy=n=>typeof n=="string"?parseFloat(n):n,xy=n=>typeof n=="number"||st.test(n);function nL(n,e,t,i,o,a){o?(n.opacity=qt(0,t.opacity??1,iL(i)),n.opacityExit=qt(e.opacity??1,0,rL(i))):a&&(n.opacity=qt(e.opacity??1,t.opacity??1,i));for(let c=0;c<tL;c++){const u=`border${fT[c]}Radius`;let d=Sy(e,u),h=Sy(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||xy(d)===xy(h)?(n[u]=Math.max(qt(yy(d),yy(h),i),0),(Hi.test(h)||Hi.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=qt(e.rotate||0,t.rotate||0,i))}function Sy(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const iL=dT(0,.5,QS),rL=dT(.5,.95,hi);function dT(n,e,t){return i=>i<n?0:i>e?1:t(pl(n,e,i))}function Ey(n,e){n.min=e.min,n.max=e.max}function li(n,e){Ey(n.x,e.x),Ey(n.y,e.y)}function Ty(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function My(n,e,t,i,o){return n-=e,n=$u(n,1/t,i),o!==void 0&&(n=$u(n,1/o,i)),n}function sL(n,e=0,t=1,i=.5,o,a=n,c=n){if(Hi.test(e)&&(e=parseFloat(e),e=qt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=qt(a.min,a.max,i);n===a&&(u-=e),n.min=My(n.min,e,t,u,o),n.max=My(n.max,e,t,u,o)}function wy(n,e,[t,i,o],a,c){sL(n,e[t],e[i],e[o],e.scale,a,c)}const oL=["x","scaleX","originX"],aL=["y","scaleY","originY"];function Ay(n,e,t,i){wy(n.x,e,oL,t?t.x:void 0,i?i.x:void 0),wy(n.y,e,aL,t?t.y:void 0,i?i.y:void 0)}function Cy(n){return n.translate===0&&n.scale===1}function hT(n){return Cy(n.x)&&Cy(n.y)}function Ry(n,e){return n.min===e.min&&n.max===e.max}function lL(n,e){return Ry(n.x,e.x)&&Ry(n.y,e.y)}function by(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function pT(n,e){return by(n.x,e.x)&&by(n.y,e.y)}function Py(n){return Nn(n.x)/Nn(n.y)}function Iy(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class cL{constructor(){this.members=[]}add(e){Um(this.members,e),e.scheduleRender()}remove(e){if(Om(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let i;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function uL(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:x,skewY:E}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),g&&(i+=`rotateX(${g}deg) `),v&&(i+=`rotateY(${v}deg) `),x&&(i+=`skewX(${x}deg) `),E&&(i+=`skewY(${E}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const ph=["","X","Y","Z"],fL=1e3;let dL=0;function mh(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function mT(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=eT(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",jt,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&mT(i)}function gT({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=dL++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(mL),this.nodes.forEach(yL),this.nodes.forEach(xL),this.nodes.forEach(gL)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new QD)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Bm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=IE(c)&&!aI(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,g=0;const v=()=>this.root.updateBlockedByResize=!1;jt.read(()=>{g=window.innerWidth}),n(c,()=>{const x=window.innerWidth;x!==g&&(g=x,this.root.updateBlockedByResize=!0,p&&p(),p=eL(v,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(Ny)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||wL,{onLayoutAnimationStart:M,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!pT(this.targetLayout,x),I=!g&&v;if(this.options.layoutRoot||this.resumeFrom||I||g&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...Jm(E,"layout"),onPlay:M,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(p,I)}else g||Ny(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),as(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SL),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&mT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ly);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(_L),this.nodes.forEach(hL),this.nodes.forEach(pL)):this.nodes.forEach(Ly),this.clearAllSnapshots();const u=Wn.now();_n.delta=mr(0,1e3/60,u-_n.timestamp),_n.timestamp=u,_n.isProcessing=!0,ih.update.process(_n),ih.preRender.process(_n),ih.render.process(_n),_n.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,eg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vL),this.sharedNodes.forEach(EL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,jt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){jt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Nn(this.snapshot.measuredBox.x)&&!Nn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!hT(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Fs(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),AL(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return Qt();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(CL))){const{scroll:p}=this.root;p&&(Wo(u.x,p.offset.x),Wo(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=Qt();if(li(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&li(u,c),Wo(u.x,g.offset.x),Wo(u.y,g.offset.y))}return u}applyTransform(c,u=!1){const d=Qt();li(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&jo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Fs(p.latestValues)&&jo(d,p.latestValues)}return Fs(this.latestValues)&&jo(d,this.latestValues),d}removeTransform(c){const u=Qt();li(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Fs(h.latestValues))continue;_p(h.latestValues)&&h.updateSnapshot();const p=Qt(),g=h.measurePageBox();li(p,g),Ay(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Fs(this.latestValues)&&Ay(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_n.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var v;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:g}=this.options;if(!(!this.layout||!(p||g))){if(this.resolvedRelativeTargetAt=_n.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),cl(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),LD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),qE(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),cl(this.relativeTargetOrigin,this.target,x.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||_p(this.parent.latestValues)||$E(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var E;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===_n.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;li(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,v=this.treeScale.y;jI(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Qt());const{target:x}=c;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ty(this.prevProjectionDelta.x,this.projectionDelta.x),Ty(this.prevProjectionDelta.y,this.projectionDelta.y)),ll(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==v||!Iy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Iy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xo(),this.projectionDelta=Xo(),this.projectionDeltaWithTransform=Xo()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=Xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const v=Qt(),x=d?d.source:void 0,E=this.layout?this.layout.source:void 0,M=x!==E,S=this.getStack(),y=!S||S.members.length<=1,I=!!(M&&!y&&this.options.crossfade===!0&&!this.path.some(ML));this.animationProgress=0;let b;this.mixTargetDelta=C=>{const N=C/1e3;Uy(g.x,c.x,N),Uy(g.y,c.y,N),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(cl(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TL(this.relativeTarget,this.relativeTargetOrigin,v,N),b&&lL(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Qt()),li(b,this.relativeTarget)),M&&(this.animationValues=p,nL(p,h,this.latestValues,N,I,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(as(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=jt.update(()=>{bu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=na(0)),this.currentAnimation=ZD(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&vT(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Qt();const g=Nn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+g;const v=Nn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+v}li(u,d),jo(u,p),ll(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new cL),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&mh("z",c,h,this.animationValues);for(let p=0;p<ph.length;p++)mh(`rotate${ph[p]}`,c,h,this.animationValues),mh(`skew${ph[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=Ru(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=Ru(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Fs(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let g=uL(this.projectionDeltaWithTransform,this.treeScale,p);d&&(g=d(p,g)),c.transform=g;const{x:v,y:x}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const E in _l){if(p[E]===void 0)continue;const{correct:M,applyTo:S,isCSSVariable:y}=_l[E],I=g==="none"?p[E]:M(p[E],h);if(S){const b=S.length;for(let C=0;C<b;C++)c[S[C]]=I}else y?this.options.visualElement.renderState.vars[E]=I:c[E]=I}this.options.layoutId&&(c.pointerEvents=h===this?Ru(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(Dy),this.root.sharedNodes.clear()}}}function hL(n){n.updateLayout()}function pL(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;a==="size"?ui(g=>{const v=c?e.measuredBox[g]:e.layoutBox[g],x=Nn(v);v.min=i[g].min,v.max=v.min+x}):vT(a,e.layoutBox,i)&&ui(g=>{const v=c?e.measuredBox[g]:e.layoutBox[g],x=Nn(i[g]);v.max=v.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const u=Xo();ll(u,i,e.layoutBox);const d=Xo();c?ll(d,n.applyTransform(o,!0),e.measuredBox):ll(d,i,e.layoutBox);const h=!hT(u);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const E=Qt();cl(E,e.layoutBox,v.layoutBox);const M=Qt();cl(M,i,x.layoutBox),pT(E,M)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=E,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function mL(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function gL(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function vL(n){n.clearSnapshot()}function Dy(n){n.clearMeasurements()}function Ly(n){n.isLayoutDirty=!1}function _L(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ny(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function yL(n){n.resolveTargetDelta()}function xL(n){n.calcProjection()}function SL(n){n.resetSkewAndRotation()}function EL(n){n.removeLeadSnapshot()}function Uy(n,e,t){n.translate=qt(e.translate,0,t),n.scale=qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Oy(n,e,t,i){n.min=qt(e.min,t.min,i),n.max=qt(e.max,t.max,i)}function TL(n,e,t,i){Oy(n.x,e.x,t.x,i),Oy(n.y,e.y,t.y,i)}function ML(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const wL={duration:.45,ease:[.4,0,.1,1]},Fy=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ky=Fy("applewebkit/")&&!Fy("chrome/")?Math.round:hi;function By(n){n.min=ky(n.min),n.max=ky(n.max)}function AL(n){By(n.x),By(n.y)}function vT(n,e,t){return n==="position"||n==="preserve-aspect"&&!DD(Py(e),Py(t),.2)}function CL(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const RL=gT({attachResizeListener:(n,e)=>yl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gh={current:void 0},_T=gT({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!gh.current){const n=new RL({});n.mount(window),n.setOptions({layoutScroll:!0}),gh.current=n}return gh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),bL={pan:{Feature:$D},drag:{Feature:XD,ProjectionNode:_T,MeasureLayout:uT}};function Vy(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&jt.postRender(()=>a(e,Dl(e)))}class PL extends hs{mount(){const{current:e}=this.node;e&&(this.unmount=nI(e,(t,i)=>(Vy(this.node,i,"Start"),o=>Vy(this.node,o,"End"))))}unmount(){}}class IL extends hs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bl(yl(this.node.current,"focus",()=>this.onFocus()),yl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zy(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&jt.postRender(()=>a(e,Dl(e)))}class DL extends hs{mount(){const{current:e}=this.node;e&&(this.unmount=oI(e,(t,i)=>(zy(this.node,i,"Start"),(o,{success:a})=>zy(this.node,o,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const wp=new WeakMap,vh=new WeakMap,LL=n=>{const e=wp.get(n.target);e&&e(n)},NL=n=>{n.forEach(LL)};function UL({root:n,...e}){const t=n||document;vh.has(t)||vh.set(t,{});const i=vh.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(NL,{root:n,...e})),i[o]}function OL(n,e,t){const i=UL(e);return wp.set(n,t),i.observe(n),()=>{wp.delete(n),i.unobserve(n)}}const FL={some:0,all:1};class kL extends hs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:FL[o]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(d)};return OL(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(BL(e,t))&&this.startObserver()}unmount(){}}function BL({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const VL={inView:{Feature:kL},tap:{Feature:DL},focus:{Feature:IL},hover:{Feature:PL}},zL={layout:{ProjectionNode:_T,MeasureLayout:uT}},HL={...AD,...VL,...bL,...zL},Ws=HI(HL,tD);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fg="179",GL=0,Hy=1,WL=2,yT=1,xT=2,or=3,cs=0,jn=1,Ui=2,is=0,Jo=1,Gy=2,Wy=3,jy=4,jL=5,Vs=100,XL=101,$L=102,qL=103,KL=104,YL=200,ZL=201,JL=202,QL=203,Ap=204,Cp=205,e2=206,t2=207,n2=208,i2=209,r2=210,s2=211,o2=212,a2=213,l2=214,Rp=0,bp=1,Pp=2,ra=3,Ip=4,Dp=5,Lp=6,Np=7,ST=0,c2=1,u2=2,rs=0,f2=1,d2=2,h2=3,p2=4,m2=5,g2=6,v2=7,ET=300,sa=301,oa=302,Up=303,Op=304,lf=306,Fp=1e3,js=1001,kp=1002,Ri=1003,_2=1004,Jc=1005,Oi=1006,_h=1007,Xs=1008,vr=1009,TT=1010,MT=1011,xl=1012,dg=1013,Js=1014,cr=1015,Ll=1016,hg=1017,pg=1018,Sl=1020,wT=35902,AT=1021,CT=1022,Ci=1023,El=1026,Tl=1027,RT=1028,mg=1029,bT=1030,gg=1031,vg=1033,Pu=33776,Iu=33777,Du=33778,Lu=33779,Bp=35840,Vp=35841,zp=35842,Hp=35843,Gp=36196,Wp=37492,jp=37496,Xp=37808,$p=37809,qp=37810,Kp=37811,Yp=37812,Zp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,Nu=36492,om=36494,am=36495,PT=36283,lm=36284,cm=36285,um=36286,y2=3200,x2=3201,S2=0,E2=1,Jr="",fi="srgb",aa="srgb-linear",qu="linear",Dt="srgb",Ao=7680,Xy=519,T2=512,M2=513,w2=514,IT=515,A2=516,C2=517,R2=518,b2=519,$y=35044,qy="300 es",Fi=2e3,Ku=2001;class pa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,fm=180/Math.PI;function Nl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function P2(n,e){return(n%e+e)%e}function xh(n,e,t){return(1-t)*n+t*e}function Ya(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ul{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],h=i[o+1],p=i[o+2],g=i[o+3];const v=a[c+0],x=a[c+1],E=a[c+2],M=a[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==v||h!==x||p!==E){let S=1-u;const y=d*v+h*x+p*E+g*M,I=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const N=Math.sqrt(b),k=Math.atan2(N,y*I);S=Math.sin(S*k)/N,u=Math.sin(u*k)/N}const C=u*I;if(d=d*S+v*C,h=h*S+x*C,p=p*S+E*C,g=g*S+M*C,S===1-u){const N=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=N,h*=N,p*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],h=i[o+2],p=i[o+3],g=a[c],v=a[c+1],x=a[c+2],E=a[c+3];return e[t]=u*E+p*g+d*x-h*v,e[t+1]=d*E+p*v+h*g-u*x,e[t+2]=h*E+p*x+u*v-d*g,e[t+3]=p*E-u*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(o/2),g=u(a/2),v=d(i/2),x=d(o/2),E=d(a/2);switch(c){case"XYZ":this._x=v*p*g+h*x*E,this._y=h*x*g-v*p*E,this._z=h*p*E+v*x*g,this._w=h*p*g-v*x*E;break;case"YXZ":this._x=v*p*g+h*x*E,this._y=h*x*g-v*p*E,this._z=h*p*E-v*x*g,this._w=h*p*g+v*x*E;break;case"ZXY":this._x=v*p*g-h*x*E,this._y=h*x*g+v*p*E,this._z=h*p*E+v*x*g,this._w=h*p*g-v*x*E;break;case"ZYX":this._x=v*p*g-h*x*E,this._y=h*x*g+v*p*E,this._z=h*p*E-v*x*g,this._w=h*p*g+v*x*E;break;case"YZX":this._x=v*p*g+h*x*E,this._y=h*x*g+v*p*E,this._z=h*p*E-v*x*g,this._w=h*p*g-v*x*E;break;case"XZY":this._x=v*p*g-h*x*E,this._y=h*x*g-v*p*E,this._z=h*p*E+v*x*g,this._w=h*p*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=i+u+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-d)*x,this._y=(a-h)*x,this._z=(c-o)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(p-d)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+h)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-h)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(c-o)/x,this._x=(a+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-i*h,this._z=a*p+c*h+i*d-o*u,this._w=c*p-i*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ky.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ky.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),g=2*(a*i-c*t);return this.x=t+d*h+c*g-u*p,this.y=i+d*p+u*h-a*g,this.z=o+d*g+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new Q,Ky=new Ul;class ht{constructor(e,t,i,o,a,c,u,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h)}set(e,t,i,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],g=i[7],v=i[2],x=i[5],E=i[8],M=o[0],S=o[3],y=o[6],I=o[1],b=o[4],C=o[7],N=o[2],k=o[5],F=o[8];return a[0]=c*M+u*I+d*N,a[3]=c*S+u*b+d*k,a[6]=c*y+u*C+d*F,a[1]=h*M+p*I+g*N,a[4]=h*S+p*b+g*k,a[7]=h*y+p*C+g*F,a[2]=v*M+x*I+E*N,a[5]=v*S+x*b+E*k,a[8]=v*y+x*C+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=p*c-u*h,v=u*d-p*a,x=h*a-c*d,E=t*g+i*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*h-p*i)*M,e[2]=(u*i-o*c)*M,e[3]=v*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-u*t)*M,e[6]=x*M,e[7]=(i*d-h*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new ht;function DT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function I2(){const n=Yu("canvas");return n.style.display="block",n}const Yy={};function Qo(n){n in Yy||(Yy[n]=!0,console.warn(n))}function D2(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Zy=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jy=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L2(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Dt&&(o.r=fr(o.r),o.g=fr(o.g),o.b=fr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=ea(o.r),o.g=ea(o.g),o.b=ea(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?qu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:qu,toXYZ:Zy,fromXYZ:Jy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Zy,fromXYZ:Jy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const wt=L2();function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Co;class N2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Co===void 0&&(Co=Yu("canvas")),Co.width=e.width,Co.height=e.height;const o=Co.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Co}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=fr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U2=0;class _g{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=Nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Th(o[c].image)):a.push(Th(o[c]))}else a=Th(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?N2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O2=0;const Mh=new Q;class Xn extends pa{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,i=js,o=js,a=Oi,c=Xs,u=Ci,d=vr,h=Xn.DEFAULT_ANISOTROPY,p=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Nl(),this.name="",this.source=new _g(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ET)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fp:e.x=e.x-Math.floor(e.x);break;case js:e.x=e.x<0?0:1;break;case kp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fp:e.y=e.y-Math.floor(e.y);break;case js:e.y=e.y<0?0:1;break;case kp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=ET;Xn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,i=0,o=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],x=d[5],E=d[9],M=d[2],S=d[6],y=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(x+1)/2,N=(y+1)/2,k=(p+v)/4,F=(g+M)/4,H=(E+S)/4;return b>C&&b>N?b<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(b),o=k/i,a=F/i):C>N?C<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(C),i=k/o,a=H/o):N<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),i=F/a,o=H/a),this.set(i,o,a,t),this}let I=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-p)*(v-p));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(g-M)/I,this.z=(v-p)/I,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F2 extends pa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const o={width:e,height:t,depth:i.depth},a=new Xn(o);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new _g(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qs extends F2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class LT extends Xn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k2 extends Xn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(a,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qc.copy(i.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),eu.subVectors(this.max,Za),Ro.subVectors(e.a,Za),bo.subVectors(e.b,Za),Po.subVectors(e.c,Za),zr.subVectors(bo,Ro),Hr.subVectors(Po,bo),Ps.subVectors(Ro,Po);let t=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-Ps.z,Ps.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,Ps.z,0,-Ps.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-Ps.y,Ps.x,0];return!wh(t,Ro,bo,Po,eu)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,Ro,bo,Po,eu))?!1:(tu.crossVectors(zr,Hr),t=[tu.x,tu.y,tu.z],wh(t,Ro,bo,Po,eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Si=new Q,Qc=new Ol,Ro=new Q,bo=new Q,Po=new Q,zr=new Q,Hr=new Q,Ps=new Q,Za=new Q,eu=new Q,tu=new Q,Is=new Q;function wh(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){Is.fromArray(n,a);const u=o.x*Math.abs(Is.x)+o.y*Math.abs(Is.y)+o.z*Math.abs(Is.z),d=e.dot(Is),h=t.dot(Is),p=i.dot(Is);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const B2=new Ol,Ja=new Q,Ah=new Q;class cf{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):B2.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Ja,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Ah)),this.expandByPoint(Ja.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nr=new Q,Ch=new Q,nu=new Q,Gr=new Q,Rh=new Q,iu=new Q,bh=new Q;class NT{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Ch.copy(e).add(t).multiplyScalar(.5),nu.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(Ch);const a=e.distanceTo(t)*.5,c=-this.direction.dot(nu),u=Gr.dot(this.direction),d=-Gr.dot(nu),h=Gr.lengthSq(),p=Math.abs(1-c*c);let g,v,x,E;if(p>0)if(g=c*d-u,v=c*u-d,E=a*p,g>=0)if(v>=-E)if(v<=E){const M=1/p;g*=M,v*=M,x=g*(g+c*v+2*u)+v*(c*g+v+2*d)+h}else v=a,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*d)+h;else v=-a,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-d),a),x=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-a,-d),a),x=v*(v+2*d)+h):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-d),a),x=-g*g+v*(v+2*d)+h);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Ch).addScaledVector(nu,v),x}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const i=nr.dot(this.direction),o=nr.dot(nr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,i,o,a){Rh.subVectors(t,e),iu.subVectors(i,e),bh.crossVectors(Rh,iu);let c=this.direction.dot(bh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Gr.subVectors(this.origin,e);const d=u*this.direction.dot(iu.crossVectors(Gr,iu));if(d<0)return null;const h=u*this.direction.dot(Rh.cross(Gr));if(h<0||d+h>c)return null;const p=-u*Gr.dot(bh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,i,o,a,c,u,d,h,p,g,v,x,E,M,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h,p,g,v,x,E,M,S)}set(e,t,i,o,a,c,u,d,h,p,g,v,x,E,M,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Io.setFromMatrixColumn(e,0).length(),a=1/Io.setFromMatrixColumn(e,1).length(),c=1/Io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*p,x=c*g,E=u*p,M=u*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=x+E*h,t[5]=v-M*h,t[9]=-u*d,t[2]=M-v*h,t[6]=E+x*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*p,x=d*g,E=h*p,M=h*g;t[0]=v+M*u,t[4]=E*u-x,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=x*u-E,t[6]=M+v*u,t[10]=c*d}else if(e.order==="ZXY"){const v=d*p,x=d*g,E=h*p,M=h*g;t[0]=v-M*u,t[4]=-c*g,t[8]=E+x*u,t[1]=x+E*u,t[5]=c*p,t[9]=M-v*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const v=c*p,x=c*g,E=u*p,M=u*g;t[0]=d*p,t[4]=E*h-x,t[8]=v*h+M,t[1]=d*g,t[5]=M*h+v,t[9]=x*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,x=c*h,E=u*d,M=u*h;t[0]=d*p,t[4]=M-v*g,t[8]=E*g+x,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=c*d,x=c*h,E=u*d,M=u*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+M,t[5]=c*p,t[9]=x*g-E,t[2]=E*g-x,t[6]=u*p,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V2,e,z2)}lookAt(e,t,i){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Wr.crossVectors(i,Qn),Wr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Wr.crossVectors(i,Qn)),Wr.normalize(),ru.crossVectors(Qn,Wr),o[0]=Wr.x,o[4]=ru.x,o[8]=Qn.x,o[1]=Wr.y,o[5]=ru.y,o[9]=Qn.y,o[2]=Wr.z,o[6]=ru.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],g=i[5],v=i[9],x=i[13],E=i[2],M=i[6],S=i[10],y=i[14],I=i[3],b=i[7],C=i[11],N=i[15],k=o[0],F=o[4],H=o[8],P=o[12],R=o[1],O=o[5],le=o[9],re=o[13],ae=o[2],fe=o[6],ce=o[10],ie=o[14],V=o[3],se=o[7],ne=o[11],U=o[15];return a[0]=c*k+u*R+d*ae+h*V,a[4]=c*F+u*O+d*fe+h*se,a[8]=c*H+u*le+d*ce+h*ne,a[12]=c*P+u*re+d*ie+h*U,a[1]=p*k+g*R+v*ae+x*V,a[5]=p*F+g*O+v*fe+x*se,a[9]=p*H+g*le+v*ce+x*ne,a[13]=p*P+g*re+v*ie+x*U,a[2]=E*k+M*R+S*ae+y*V,a[6]=E*F+M*O+S*fe+y*se,a[10]=E*H+M*le+S*ce+y*ne,a[14]=E*P+M*re+S*ie+y*U,a[3]=I*k+b*R+C*ae+N*V,a[7]=I*F+b*O+C*fe+N*se,a[11]=I*H+b*le+C*ce+N*ne,a[15]=I*P+b*re+C*ie+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],x=e[14],E=e[3],M=e[7],S=e[11],y=e[15];return E*(+a*d*g-o*h*g-a*u*v+i*h*v+o*u*x-i*d*x)+M*(+t*d*x-t*h*v+a*c*v-o*c*x+o*h*p-a*d*p)+S*(+t*h*g-t*u*x-a*c*g+i*c*x+a*u*p-i*h*p)+y*(-o*u*p-t*d*g+t*u*v+o*c*g-i*c*v+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],x=e[11],E=e[12],M=e[13],S=e[14],y=e[15],I=g*S*h-M*v*h+M*d*x-u*S*x-g*d*y+u*v*y,b=E*v*h-p*S*h-E*d*x+c*S*x+p*d*y-c*v*y,C=p*M*h-E*g*h+E*u*x-c*M*x-p*u*y+c*g*y,N=E*g*d-p*M*d-E*u*v+c*M*v+p*u*S-c*g*S,k=t*I+i*b+o*C+a*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=I*F,e[1]=(M*v*a-g*S*a-M*o*x+i*S*x+g*o*y-i*v*y)*F,e[2]=(u*S*a-M*d*a+M*o*h-i*S*h-u*o*y+i*d*y)*F,e[3]=(g*d*a-u*v*a-g*o*h+i*v*h+u*o*x-i*d*x)*F,e[4]=b*F,e[5]=(p*S*a-E*v*a+E*o*x-t*S*x-p*o*y+t*v*y)*F,e[6]=(E*d*a-c*S*a-E*o*h+t*S*h+c*o*y-t*d*y)*F,e[7]=(c*v*a-p*d*a+p*o*h-t*v*h-c*o*x+t*d*x)*F,e[8]=C*F,e[9]=(E*g*a-p*M*a-E*i*x+t*M*x+p*i*y-t*g*y)*F,e[10]=(c*M*a-E*u*a+E*i*h-t*M*h-c*i*y+t*u*y)*F,e[11]=(p*u*a-c*g*a-p*i*h+t*g*h+c*i*x-t*u*x)*F,e[12]=N*F,e[13]=(p*M*o-E*g*o+E*i*v-t*M*v-p*i*S+t*g*S)*F,e[14]=(E*u*o-c*M*o-E*i*d+t*M*d+c*i*S-t*u*S)*F,e[15]=(c*g*o-p*u*o+p*i*d-t*g*d-c*i*v+t*u*v)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+i,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,g=u+u,v=a*h,x=a*p,E=a*g,M=c*p,S=c*g,y=u*g,I=d*h,b=d*p,C=d*g,N=i.x,k=i.y,F=i.z;return o[0]=(1-(M+y))*N,o[1]=(x+C)*N,o[2]=(E-b)*N,o[3]=0,o[4]=(x-C)*k,o[5]=(1-(v+y))*k,o[6]=(S+I)*k,o[7]=0,o[8]=(E+b)*F,o[9]=(S-I)*F,o[10]=(1-(v+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Io.set(o[0],o[1],o[2]).length();const c=Io.set(o[4],o[5],o[6]).length(),u=Io.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const h=1/a,p=1/c,g=1/u;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=p,Ei.elements[5]*=p,Ei.elements[6]*=p,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=Fi,d=!1){const h=this.elements,p=2*a/(t-e),g=2*a/(i-o),v=(t+e)/(t-e),x=(i+o)/(i-o);let E,M;if(d)E=a/(c-a),M=c*a/(c-a);else if(u===Fi)E=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Ku)E=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Fi,d=!1){const h=this.elements,p=2/(t-e),g=2/(i-o),v=-(t+e)/(t-e),x=-(i+o)/(i-o);let E,M;if(d)E=1/(c-a),M=c/(c-a);else if(u===Fi)E=-2/(c-a),M=-(c+a)/(c-a);else if(u===Ku)E=-1/(c-a),M=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Io=new Q,Ei=new sn,V2=new Q(0,0,0),z2=new Q(1,1,1),Wr=new Q,ru=new Q,Qn=new Q,Qy=new sn,ex=new Ul;class _r{constructor(e=0,t=0,i=0,o=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ex.setFromEuler(this),this.setFromQuaternion(ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class UT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H2=0;const tx=new Q,Do=new Ul,ir=new sn,su=new Q,Qa=new Q,G2=new Q,W2=new Ul,nx=new Q(1,0,0),ix=new Q(0,1,0),rx=new Q(0,0,1),sx={type:"added"},j2={type:"removed"},Lo={type:"childadded",child:null},Ph={type:"childremoved",child:null};class $n extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new Q,t=new _r,i=new Ul,o=new Q(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ht}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new UT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(nx,e)}rotateY(e){return this.rotateOnAxis(ix,e)}rotateZ(e){return this.rotateOnAxis(rx,e)}translateOnAxis(e,t){return tx.copy(e).applyQuaternion(this.quaternion),this.position.add(tx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nx,e)}translateY(e){return this.translateOnAxis(ix,e)}translateZ(e){return this.translateOnAxis(rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?su.copy(e):su.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Qa,su,this.up):ir.lookAt(su,Qa,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),Do.setFromRotationMatrix(ir),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sx),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j2),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sx),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,G2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,W2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),x=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}$n.DEFAULT_UP=new Q(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new Q,rr=new Q,Ih=new Q,sr=new Q,No=new Q,Uo=new Q,ox=new Q,Dh=new Q,Lh=new Q,Nh=new Q,Uh=new en,Oh=new en,Fh=new en;class wi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ti.subVectors(e,t),o.cross(Ti);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ti.subVectors(o,t),rr.subVectors(i,t),Ih.subVectors(e,t);const c=Ti.dot(Ti),u=Ti.dot(rr),d=Ti.dot(Ih),h=rr.dot(rr),p=rr.dot(Ih),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,x=(h*d-u*p)*v,E=(c*p-u*d)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,sr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,sr.x),d.addScaledVector(c,sr.y),d.addScaledVector(u,sr.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return Uh.setScalar(0),Oh.setScalar(0),Fh.setScalar(0),Uh.fromBufferAttribute(e,t),Oh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Uh,a.x),c.addScaledVector(Oh,a.y),c.addScaledVector(Fh,a.z),c}static isFrontFacing(e,t,i,o){return Ti.subVectors(i,t),rr.subVectors(e,t),Ti.cross(rr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ti.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;No.subVectors(o,i),Uo.subVectors(a,i),Dh.subVectors(e,i);const d=No.dot(Dh),h=Uo.dot(Dh);if(d<=0&&h<=0)return t.copy(i);Lh.subVectors(e,o);const p=No.dot(Lh),g=Uo.dot(Lh);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(No,c);Nh.subVectors(e,a);const x=No.dot(Nh),E=Uo.dot(Nh);if(E>=0&&x<=E)return t.copy(a);const M=x*h-d*E;if(M<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(i).addScaledVector(Uo,u);const S=p*E-x*g;if(S<=0&&g-p>=0&&x-E>=0)return ox.subVectors(a,o),u=(g-p)/(g-p+(x-E)),t.copy(o).addScaledVector(ox,u);const y=1/(S+M+v);return c=M*y,u=v*y,t.copy(i).addScaledVector(No,c).addScaledVector(Uo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const OT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},ou={h:0,s:0,l:0};function kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=wt.workingColorSpace){if(e=P2(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=kh(c,a,e+1/3),this.g=kh(c,a,e),this.b=kh(c,a,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const i=OT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(yt(Cn.r*255,0,255))*65536+Math.round(yt(Cn.g*255,0,255))*256+Math.round(yt(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,o=Cn.g,a=Cn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const g=c-u;switch(h=p<=.5?g/(c+u):g/(2-c-u),c){case i:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-i)/g+2;break;case a:d=(i-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){wt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,o=Cn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(ou);const i=xh(jr.h,ou.h,t),o=xh(jr.s,ou.s,t),a=xh(jr.l,ou.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Rt;Rt.NAMES=OT;let X2=0;class Fl extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=Jo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Cp,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jo&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ap&&(i.blendSrc=this.blendSrc),this.blendDst!==Cp&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class FT extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=ST,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new Q,au=new Lt;let $2=0;class Gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$y,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)au.fromBufferAttribute(this,t),au.applyMatrix3(e),this.setXY(t,au.x,au.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ya(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),o=Hn(o,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$y&&(e.usage=this.usage),e}}class kT extends Gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class BT extends Gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wi extends Gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let q2=0;const ci=new sn,Bh=new $n,Oo=new Q,ei=new Ol,el=new Ol,mn=new Q;class yr extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DT(e)?BT:kT)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ht().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wi(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];el.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(ei.min,el.min),ei.expandByPoint(mn),mn.addVectors(ei.max,el.max),ei.expandByPoint(mn)):(ei.expandByPoint(el.min),ei.expandByPoint(el.max))}ei.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)mn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(mn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)mn.fromBufferAttribute(u,h),d&&(Oo.fromBufferAttribute(e,h),mn.add(Oo)),o=Math.max(o,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let H=0;H<i.count;H++)u[H]=new Q,d[H]=new Q;const h=new Q,p=new Q,g=new Q,v=new Lt,x=new Lt,E=new Lt,M=new Q,S=new Q;function y(H,P,R){h.fromBufferAttribute(i,H),p.fromBufferAttribute(i,P),g.fromBufferAttribute(i,R),v.fromBufferAttribute(a,H),x.fromBufferAttribute(a,P),E.fromBufferAttribute(a,R),p.sub(h),g.sub(h),x.sub(v),E.sub(v);const O=1/(x.x*E.y-E.x*x.y);isFinite(O)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(O),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(O),u[H].add(M),u[P].add(M),u[R].add(M),d[H].add(S),d[P].add(S),d[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let H=0,P=I.length;H<P;++H){const R=I[H],O=R.start,le=R.count;for(let re=O,ae=O+le;re<ae;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const b=new Q,C=new Q,N=new Q,k=new Q;function F(H){N.fromBufferAttribute(o,H),k.copy(N);const P=u[H];b.copy(P),b.sub(N.multiplyScalar(N.dot(P))).normalize(),C.crossVectors(k,P);const O=C.dot(d[H])<0?-1:1;c.setXYZW(H,b.x,b.y,b.z,O)}for(let H=0,P=I.length;H<P;++H){const R=I[H],O=R.start,le=R.count;for(let re=O,ae=O+le;re<ae;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new Q,a=new Q,c=new Q,u=new Q,d=new Q,h=new Q,p=new Q,g=new Q;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,S),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),u.add(p),d.add(p),h.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,g=u.normalized,v=new h.constructor(d.length*p);let x=0,E=0;for(let M=0,S=d.length;M<S;M++){u.isInterleavedBufferAttribute?x=d[M]*u.data.stride+u.offset:x=d[M]*p;for(let y=0;y<p;y++)v[E++]=h[x++]}return new Gi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yr,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,g=h.length;p<g;p++){const v=h[p],x=e(v,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];p.push(x.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ax=new sn,Ds=new NT,lu=new cf,lx=new Q,cu=new Q,uu=new Q,fu=new Q,Vh=new Q,du=new Q,cx=new Q,hu=new Q;class ur extends $n{constructor(e=new yr,t=new FT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){du.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],g=a[d];p!==0&&(Vh.fromBufferAttribute(g,e),c?du.addScaledVector(Vh,p):du.addScaledVector(Vh.sub(t),p))}t.add(du)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(a),Ds.copy(e.ray).recast(e.near),!(lu.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(lu,lx)===null||Ds.origin.distanceToSquared(lx)>(e.far-e.near)**2))&&(ax.copy(a).invert(),Ds.copy(e.ray).applyMatrix4(ax),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=c[S.materialIndex],I=Math.max(S.start,x.start),b=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=I,N=b;C<N;C+=3){const k=u.getX(C),F=u.getX(C+1),H=u.getX(C+2);o=pu(this,y,e,i,h,p,g,k,F,H),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(u.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const I=u.getX(S),b=u.getX(S+1),C=u.getX(S+2);o=pu(this,c,e,i,h,p,g,I,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=c[S.materialIndex],I=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=I,N=b;C<N;C+=3){const k=C,F=C+1,H=C+2;o=pu(this,y,e,i,h,p,g,k,F,H),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const I=S,b=S+1,C=S+2;o=pu(this,c,e,i,h,p,g,I,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function K2(n,e,t,i,o,a,c,u){let d;if(e.side===jn?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===cs,u),d===null)return null;hu.copy(u),hu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(hu);return h<t.near||h>t.far?null:{distance:h,point:hu.clone(),object:n}}function pu(n,e,t,i,o,a,c,u,d,h){n.getVertexPosition(u,cu),n.getVertexPosition(d,uu),n.getVertexPosition(h,fu);const p=K2(n,e,t,i,cu,uu,fu,cx);if(p){const g=new Q;wi.getBarycoord(cx,cu,uu,fu,g),o&&(p.uv=wi.getInterpolatedAttribute(o,u,d,h,g,new Lt)),a&&(p.uv1=wi.getInterpolatedAttribute(a,u,d,h,g,new Lt)),c&&(p.normal=wi.getInterpolatedAttribute(c,u,d,h,g,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:d,c:h,normal:new Q,materialIndex:0};wi.getNormal(cu,uu,fu,v.normal),p.face=v,p.barycoord=g}return p}class kl extends yr{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new Wi(h,3)),this.setAttribute("normal",new Wi(p,3)),this.setAttribute("uv",new Wi(g,2));function E(M,S,y,I,b,C,N,k,F,H,P){const R=C/F,O=N/H,le=C/2,re=N/2,ae=k/2,fe=F+1,ce=H+1;let ie=0,V=0;const se=new Q;for(let ne=0;ne<ce;ne++){const U=ne*O-re;for(let te=0;te<fe;te++){const Be=te*R-le;se[M]=Be*I,se[S]=U*b,se[y]=ae,h.push(se.x,se.y,se.z),se[M]=0,se[S]=0,se[y]=k>0?1:-1,p.push(se.x,se.y,se.z),g.push(te/F),g.push(1-ne/H),ie+=1}}for(let ne=0;ne<H;ne++)for(let U=0;U<F;U++){const te=v+U+fe*ne,Be=v+U+fe*(ne+1),ke=v+(U+1)+fe*(ne+1),Y=v+(U+1)+fe*ne;d.push(te,Be,Y),d.push(Be,ke,Y),V+=6}u.addGroup(x,V,P),x+=V,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Ln(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const o in i)e[o]=i[o]}return e}function Y2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VT(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Z2={clone:la,merge:Ln};var J2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J2,this.fragmentShader=Q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=Y2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zT extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new Q,ux=new Lt,fx=new Lt;class di extends zT{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fm*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,ux,fx),t.subVectors(fx,ux)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yh*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/h,o*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fo=-90,ko=1;class eN extends $n{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(Fo,ko,e,t);o.layers=this.layers,this.add(o);const a=new di(Fo,ko,e,t);a.layers=this.layers,this.add(a);const c=new di(Fo,ko,e,t);c.layers=this.layers,this.add(c);const u=new di(Fo,ko,e,t);u.layers=this.layers,this.add(u);const d=new di(Fo,ko,e,t);d.layers=this.layers,this.add(d);const h=new di(Fo,ko,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,d),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(g,v,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class HT extends Xn{constructor(e=[],t=sa,i,o,a,c,u,d,h,p){super(e,t,i,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tN extends Qs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new HT(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new kl(5,5,5),a=new us({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:is});a.uniforms.tEquirect.value=t;const c=new ur(o,a),u=t.minFilter;return t.minFilter===Xs&&(t.minFilter=Oi),new eN(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}class mu extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nN={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),y=this._getHandJoint(h,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(nN)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class iN extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hh=new Q,rN=new Q,sN=new ht;class ks{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Hh.subVectors(i,t).cross(rN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sN.getNormalMatrix(e),o=this.coplanarPoint(Hh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new cf,oN=new Lt(.5,.5),gu=new Q;class GT{constructor(e=new ks,t=new ks,i=new ks,o=new ks,a=new ks,c=new ks){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],g=a[5],v=a[6],x=a[7],E=a[8],M=a[9],S=a[10],y=a[11],I=a[12],b=a[13],C=a[14],N=a[15];if(o[0].setComponents(h-c,x-p,y-E,N-I).normalize(),o[1].setComponents(h+c,x+p,y+E,N+I).normalize(),o[2].setComponents(h+u,x+g,y+M,N+b).normalize(),o[3].setComponents(h-u,x-g,y-M,N-b).normalize(),i)o[4].setComponents(d,v,S,C).normalize(),o[5].setComponents(h-d,x-v,y-S,N-C).normalize();else if(o[4].setComponents(h-d,x-v,y-S,N-C).normalize(),t===Fi)o[5].setComponents(h+d,x+v,y+S,N+C).normalize();else if(t===Ku)o[5].setComponents(d,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=oN.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class WT extends Fl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dx=new sn,dm=new NT,vu=new cf,_u=new Q;class aN extends $n{constructor(e=new yr,t=new WT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vu.copy(i.boundingSphere),vu.applyMatrix4(o),vu.radius+=a,e.ray.intersectsSphere(vu)===!1)return;dx.copy(o).invert(),dm.copy(e.ray).applyMatrix4(dx);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,g=i.attributes.position;if(h!==null){const v=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let E=v,M=x;E<M;E++){const S=h.getX(E);_u.fromBufferAttribute(g,S),hx(_u,S,d,o,e,t,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let E=v,M=x;E<M;E++)_u.fromBufferAttribute(g,E),hx(_u,E,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function hx(n,e,t,i,o,a,c){const u=dm.distanceSqToPoint(n);if(u<t){const d=new Q;dm.closestPointToPoint(n,d),d.applyMatrix4(i);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class jT extends Xn{constructor(e,t,i=Js,o,a,c,u=Ri,d=Ri,h,p=El,g=1){if(p!==El&&p!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,a,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _g(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uf extends yr{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),h=u+1,p=d+1,g=e/u,v=t/d,x=[],E=[],M=[],S=[];for(let y=0;y<p;y++){const I=y*v-c;for(let b=0;b<h;b++){const C=b*g-a;E.push(C,-I,0),M.push(0,0,1),S.push(b/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let I=0;I<u;I++){const b=I+h*y,C=I+h*(y+1),N=I+1+h*(y+1),k=I+1+h*y;x.push(b,C,k),x.push(C,N,k)}this.setIndex(x),this.setAttribute("position",new Wi(E,3)),this.setAttribute("normal",new Wi(M,3)),this.setAttribute("uv",new Wi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.width,e.height,e.widthSegments,e.heightSegments)}}class yg extends yr{constructor(e=1,t=.4,i=12,o=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:a},i=Math.floor(i),o=Math.floor(o);const c=[],u=[],d=[],h=[],p=new Q,g=new Q,v=new Q;for(let x=0;x<=i;x++)for(let E=0;E<=o;E++){const M=E/o*a,S=x/i*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(M),g.y=(e+t*Math.cos(S))*Math.sin(M),g.z=t*Math.sin(S),u.push(g.x,g.y,g.z),p.x=e*Math.cos(M),p.y=e*Math.sin(M),v.subVectors(g,p).normalize(),d.push(v.x,v.y,v.z),h.push(E/o),h.push(x/i)}for(let x=1;x<=i;x++)for(let E=1;E<=o;E++){const M=(o+1)*x+E-1,S=(o+1)*(x-1)+E-1,y=(o+1)*(x-1)+E,I=(o+1)*x+E;c.push(M,S,I),c.push(S,y,I)}this.setIndex(c),this.setAttribute("position",new Wi(u,3)),this.setAttribute("normal",new Wi(d,3)),this.setAttribute("uv",new Wi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yg(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lN extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cN extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uN extends zT{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fN extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function px(n,e,t,i){const o=dN(i);switch(t){case AT:return n*e;case RT:return n*e/o.components*o.byteLength;case mg:return n*e/o.components*o.byteLength;case bT:return n*e*2/o.components*o.byteLength;case gg:return n*e*2/o.components*o.byteLength;case CT:return n*e*3/o.components*o.byteLength;case Ci:return n*e*4/o.components*o.byteLength;case vg:return n*e*4/o.components*o.byteLength;case Pu:case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Du:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vp:case Hp:return Math.max(n,16)*Math.max(e,8)/4;case Bp:case zp:return Math.max(n,8)*Math.max(e,8)/2;case Gp:case Wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nu:case om:case am:return Math.ceil(n/4)*Math.ceil(e/4)*16;case PT:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cm:case um:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dN(n){switch(n){case vr:case TT:return{byteLength:1,components:1};case xl:case MT:case Ll:return{byteLength:2,components:1};case hg:case pg:return{byteLength:2,components:4};case Js:case dg:case cr:return{byteLength:4,components:1};case wT:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function XT(){let n=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function hN(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,h){const p=d.array,g=d.updateRanges;if(n.bindBuffer(h,u),g.length===0)n.bufferSubData(h,0,p);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];n.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var pN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_N=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EN=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ON=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WN="gl_FragColor = linearToOutputTexel( gl_FragColor );",jN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$N=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gU=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vU=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_U=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yU=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TU=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bU=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$U=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,S3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:pN,alphahash_pars_fragment:mN,alphamap_fragment:gN,alphamap_pars_fragment:vN,alphatest_fragment:_N,alphatest_pars_fragment:yN,aomap_fragment:xN,aomap_pars_fragment:SN,batching_pars_vertex:EN,batching_vertex:TN,begin_vertex:MN,beginnormal_vertex:wN,bsdfs:AN,iridescence_fragment:CN,bumpmap_pars_fragment:RN,clipping_planes_fragment:bN,clipping_planes_pars_fragment:PN,clipping_planes_pars_vertex:IN,clipping_planes_vertex:DN,color_fragment:LN,color_pars_fragment:NN,color_pars_vertex:UN,color_vertex:ON,common:FN,cube_uv_reflection_fragment:kN,defaultnormal_vertex:BN,displacementmap_pars_vertex:VN,displacementmap_vertex:zN,emissivemap_fragment:HN,emissivemap_pars_fragment:GN,colorspace_fragment:WN,colorspace_pars_fragment:jN,envmap_fragment:XN,envmap_common_pars_fragment:$N,envmap_pars_fragment:qN,envmap_pars_vertex:KN,envmap_physical_pars_fragment:oU,envmap_vertex:YN,fog_vertex:ZN,fog_pars_vertex:JN,fog_fragment:QN,fog_pars_fragment:eU,gradientmap_pars_fragment:tU,lightmap_pars_fragment:nU,lights_lambert_fragment:iU,lights_lambert_pars_fragment:rU,lights_pars_begin:sU,lights_toon_fragment:aU,lights_toon_pars_fragment:lU,lights_phong_fragment:cU,lights_phong_pars_fragment:uU,lights_physical_fragment:fU,lights_physical_pars_fragment:dU,lights_fragment_begin:hU,lights_fragment_maps:pU,lights_fragment_end:mU,logdepthbuf_fragment:gU,logdepthbuf_pars_fragment:vU,logdepthbuf_pars_vertex:_U,logdepthbuf_vertex:yU,map_fragment:xU,map_pars_fragment:SU,map_particle_fragment:EU,map_particle_pars_fragment:TU,metalnessmap_fragment:MU,metalnessmap_pars_fragment:wU,morphinstance_vertex:AU,morphcolor_vertex:CU,morphnormal_vertex:RU,morphtarget_pars_vertex:bU,morphtarget_vertex:PU,normal_fragment_begin:IU,normal_fragment_maps:DU,normal_pars_fragment:LU,normal_pars_vertex:NU,normal_vertex:UU,normalmap_pars_fragment:OU,clearcoat_normal_fragment_begin:FU,clearcoat_normal_fragment_maps:kU,clearcoat_pars_fragment:BU,iridescence_pars_fragment:VU,opaque_fragment:zU,packing:HU,premultiplied_alpha_fragment:GU,project_vertex:WU,dithering_fragment:jU,dithering_pars_fragment:XU,roughnessmap_fragment:$U,roughnessmap_pars_fragment:qU,shadowmap_pars_fragment:KU,shadowmap_pars_vertex:YU,shadowmap_vertex:ZU,shadowmask_pars_fragment:JU,skinbase_vertex:QU,skinning_pars_vertex:e3,skinning_vertex:t3,skinnormal_vertex:n3,specularmap_fragment:i3,specularmap_pars_fragment:r3,tonemapping_fragment:s3,tonemapping_pars_fragment:o3,transmission_fragment:a3,transmission_pars_fragment:l3,uv_pars_fragment:c3,uv_pars_vertex:u3,uv_vertex:f3,worldpos_vertex:d3,background_vert:h3,background_frag:p3,backgroundCube_vert:m3,backgroundCube_frag:g3,cube_vert:v3,cube_frag:_3,depth_vert:y3,depth_frag:x3,distanceRGBA_vert:S3,distanceRGBA_frag:E3,equirect_vert:T3,equirect_frag:M3,linedashed_vert:w3,linedashed_frag:A3,meshbasic_vert:C3,meshbasic_frag:R3,meshlambert_vert:b3,meshlambert_frag:P3,meshmatcap_vert:I3,meshmatcap_frag:D3,meshnormal_vert:L3,meshnormal_frag:N3,meshphong_vert:U3,meshphong_frag:O3,meshphysical_vert:F3,meshphysical_frag:k3,meshtoon_vert:B3,meshtoon_frag:V3,points_vert:z3,points_frag:H3,shadow_vert:G3,shadow_frag:W3,sprite_vert:j3,sprite_frag:X3},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Ln([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Ln([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Li.physical={uniforms:Ln([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const yu={r:0,b:0,g:0},Ns=new _r,$3=new sn;function q3(n,e,t,i,o,a,c){const u=new Rt(0);let d=a===!0?0:1,h,p,g=null,v=0,x=null;function E(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function M(b){let C=!1;const N=E(b);N===null?y(u,d):N&&N.isColor&&(y(N,1),C=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,C){const N=E(C);N&&(N.isCubeTexture||N.mapping===lf)?(p===void 0&&(p=new ur(new kl(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:la(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Ns.copy(C.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($3.makeRotationFromEuler(Ns)),p.material.toneMapped=wt.getTransfer(N.colorSpace)!==Dt,(g!==N||v!==N.version||x!==n.toneMapping)&&(p.material.needsUpdate=!0,g=N,v=N.version,x=n.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new ur(new uf(2,2),new us({name:"BackgroundMaterial",uniforms:la(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=wt.getTransfer(N.colorSpace)!==Dt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=N,v=N.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,C){b.getRGB(yu,VT(n)),i.buffers.color.setClear(yu.r,yu.g,yu.b,C,c)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,C=1){u.set(b),d=C,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(u,d)},render:M,addToRenderList:S,dispose:I}}function K3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=v(null);let a=o,c=!1;function u(R,O,le,re,ae){let fe=!1;const ce=g(re,le,O);a!==ce&&(a=ce,h(a.object)),fe=x(R,re,le,ae),fe&&E(R,re,le,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,C(R,O,le,re),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function p(R){return n.deleteVertexArray(R)}function g(R,O,le){const re=le.wireframe===!0;let ae=i[R.id];ae===void 0&&(ae={},i[R.id]=ae);let fe=ae[O.id];fe===void 0&&(fe={},ae[O.id]=fe);let ce=fe[re];return ce===void 0&&(ce=v(d()),fe[re]=ce),ce}function v(R){const O=[],le=[],re=[];for(let ae=0;ae<t;ae++)O[ae]=0,le[ae]=0,re[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:le,attributeDivisors:re,object:R,attributes:{},index:null}}function x(R,O,le,re){const ae=a.attributes,fe=O.attributes;let ce=0;const ie=le.getAttributes();for(const V in ie)if(ie[V].location>=0){const ne=ae[V];let U=fe[V];if(U===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ne===void 0||ne.attribute!==U||U&&ne.data!==U.data)return!0;ce++}return a.attributesNum!==ce||a.index!==re}function E(R,O,le,re){const ae={},fe=O.attributes;let ce=0;const ie=le.getAttributes();for(const V in ie)if(ie[V].location>=0){let ne=fe[V];ne===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const U={};U.attribute=ne,ne&&ne.data&&(U.data=ne.data),ae[V]=U,ce++}a.attributes=ae,a.attributesNum=ce,a.index=re}function M(){const R=a.newAttributes;for(let O=0,le=R.length;O<le;O++)R[O]=0}function S(R){y(R,0)}function y(R,O){const le=a.newAttributes,re=a.enabledAttributes,ae=a.attributeDivisors;le[R]=1,re[R]===0&&(n.enableVertexAttribArray(R),re[R]=1),ae[R]!==O&&(n.vertexAttribDivisor(R,O),ae[R]=O)}function I(){const R=a.newAttributes,O=a.enabledAttributes;for(let le=0,re=O.length;le<re;le++)O[le]!==R[le]&&(n.disableVertexAttribArray(le),O[le]=0)}function b(R,O,le,re,ae,fe,ce){ce===!0?n.vertexAttribIPointer(R,O,le,ae,fe):n.vertexAttribPointer(R,O,le,re,ae,fe)}function C(R,O,le,re){M();const ae=re.attributes,fe=le.getAttributes(),ce=O.defaultAttributeValues;for(const ie in fe){const V=fe[ie];if(V.location>=0){let se=ae[ie];if(se===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),se!==void 0){const ne=se.normalized,U=se.itemSize,te=e.get(se);if(te===void 0)continue;const Be=te.buffer,ke=te.type,Y=te.bytesPerElement,pe=ke===n.INT||ke===n.UNSIGNED_INT||se.gpuType===dg;if(se.isInterleavedBufferAttribute){const he=se.data,Ae=he.stride,Ie=se.offset;if(he.isInstancedInterleavedBuffer){for(let Ze=0;Ze<V.locationSize;Ze++)y(V.location+Ze,he.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ze=0;Ze<V.locationSize;Ze++)S(V.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Ze=0;Ze<V.locationSize;Ze++)b(V.location+Ze,U/V.locationSize,ke,ne,Ae*Y,(Ie+U/V.locationSize*Ze)*Y,pe)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)y(V.location+he,se.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<V.locationSize;he++)S(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let he=0;he<V.locationSize;he++)b(V.location+he,U/V.locationSize,ke,ne,U*Y,U/V.locationSize*he*Y,pe)}}else if(ce!==void 0){const ne=ce[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(V.location,ne);break;case 3:n.vertexAttrib3fv(V.location,ne);break;case 4:n.vertexAttrib4fv(V.location,ne);break;default:n.vertexAttrib1fv(V.location,ne)}}}}I()}function N(){H();for(const R in i){const O=i[R];for(const le in O){const re=O[le];for(const ae in re)p(re[ae].object),delete re[ae];delete O[le]}delete i[R]}}function k(R){if(i[R.id]===void 0)return;const O=i[R.id];for(const le in O){const re=O[le];for(const ae in re)p(re[ae].object),delete re[ae];delete O[le]}delete i[R.id]}function F(R){for(const O in i){const le=i[O];if(le[R.id]===void 0)continue;const re=le[R.id];for(const ae in re)p(re[ae].object),delete re[ae];delete le[R.id]}}function H(){P(),c=!0,a!==o&&(a=o,h(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:H,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:I}}function Y3(n,e,t){let i;function o(h){i=h}function a(h,p){n.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawArraysInstanced(i,h,p,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,g);let x=0;for(let E=0;E<g;E++)x+=p[E];t.update(x,i,1)}function d(h,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)c(h[E],p[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,p,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M]*v[M];t.update(E,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Z3(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ci&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const H=F===Ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==vr&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==cr&&!H)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,k=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:N,maxSamples:k}}function J3(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new ks,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||o;return o=v,i=g.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||E===null||E.length===0||a&&!S)a?p(null):h();else{const I=a?0:i,b=I*4;let C=y.clippingState||null;d.value=C,C=p(E,v,b,x);for(let N=0;N!==b;++N)C[N]=t[N];y.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const y=x+M*4,I=v.matrixWorldInverse;u.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,C=x;b!==M;++b,C+=4)c.copy(g[b]).applyMatrix4(I,u),c.normal.toArray(S,C),S[C+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function Q3(n){let e=new WeakMap;function t(c,u){return u===Up?c.mapping=sa:u===Op&&(c.mapping=oa),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Up||u===Op)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new tN(d.height);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const $o=4,mx=[.125,.215,.35,.446,.526,.582],zs=20,Gh=new uN,gx=new Rt;let Wh=null,jh=0,Xh=0,$h=!1;const Bs=(1+Math.sqrt(5))/2,Bo=1/Bs,vx=[new Q(-Bs,Bo,0),new Q(Bs,Bo,0),new Q(-Bo,0,Bs),new Q(Bo,0,Bs),new Q(0,Bs,-Bo),new Q(0,Bs,Bo),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],eO=new Q;class _x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=eO}=a;Wh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,jh,Xh),this._renderer.xr.enabled=$h,e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Ll,format:Ci,colorSpace:aa,depthBuffer:!1},o=yx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yx(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tO(a)),this._blurMaterial=nO(a,e,t)}return o}_compileMaterial(e){const t=new ur(this._lodPlanes[0],e);this._renderer.compile(t,Gh)}_sceneToCubeUV(e,t,i,o,a){const d=new di(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(gx),g.toneMapping=rs,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const M=new FT({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),S=new ur(new kl,M);let y=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,y=!0):(M.color.copy(gx),y=!0);for(let b=0;b<6;b++){const C=b%3;C===0?(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[b],a.y,a.z)):C===1?(d.up.set(0,0,h[b]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[b],a.z)):(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[b]));const N=this._cubeSize;xu(o,C*N,b>2?N:0,N,N),g.setRenderTarget(o),y&&g.render(S,d),g.render(e,d)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=I}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===sa||e.mapping===oa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new ur(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;xu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Gh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=vx[(o-a-1)%vx.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new ur(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*zs-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):zs;S>zs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zs}`);const y=[];let I=0;for(let F=0;F<zs;++F){const H=F/M,P=Math.exp(-H*H/2);y.push(P),F===0?I+=P:F<S&&(I+=2*P)}for(let F=0;F<y.length;F++)y[F]=y[F]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:b}=this;v.dTheta.value=E,v.mipInt.value=b-i;const C=this._sizeLods[o],N=3*C*(o>b-$o?o-b+$o:0),k=4*(this._cubeSize-C);xu(t,N,k,3*C,2*C),d.setRenderTarget(t),d.render(g,Gh)}}function tO(n){const e=[],t=[],i=[];let o=n;const a=n-$o+1+mx.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let d=1/u;c>n-$o?d=mx[c-n+$o-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,E=6,M=3,S=2,y=1,I=new Float32Array(M*E*x),b=new Float32Array(S*E*x),C=new Float32Array(y*E*x);for(let k=0;k<x;k++){const F=k%3*2/3-1,H=k>2?0:-1,P=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];I.set(P,M*E*k),b.set(v,S*E*k);const R=[k,k,k,k,k,k];C.set(R,y*E*k)}const N=new yr;N.setAttribute("position",new Gi(I,M)),N.setAttribute("uv",new Gi(b,S)),N.setAttribute("faceIndex",new Gi(C,y)),e.push(N),o>$o&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yx(n,e,t){const i=new Qs(n,e,t);return i.texture.mapping=lf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xu(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function nO(n,e,t){const i=new Float32Array(zs),o=new Q(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function xx(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Sx(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function xg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iO(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===Up||d===Op,p=d===sa||d===oa;if(h||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new _x(n)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return h&&x&&x.height>0||p&&x&&o(x)?(t===null&&(t=new _x(n)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function o(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function rO(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function sO(n,e,t,i){const o={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const I=x.array;M=x.version;for(let b=0,C=I.length;b<C;b+=3){const N=I[b+0],k=I[b+1],F=I[b+2];v.push(N,k,k,F,F,N)}}else if(E!==void 0){const I=E.array;M=E.version;for(let b=0,C=I.length/3-1;b<C;b+=3){const N=b+0,k=b+1,F=b+2;v.push(N,k,k,F,F,N)}}else return;const S=new(DT(v)?BT:kT)(v,1);S.version=M;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function p(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function oO(n,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,x){n.drawElements(i,x,a,v*c),t.update(x,i,1)}function h(v,x,E){E!==0&&(n.drawElementsInstanced(i,x,a,v*c,E),t.update(x,i,E))}function p(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,i,1)}function g(v,x,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/c,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,v,0,M,0,E);let y=0;for(let I=0;I<E;I++)y+=x[I]*M[I];t.update(y,i,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function aO(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function lO(n,e,t){const i=new WeakMap,o=new en;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let R=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let N=u.attributes.position.count*C,k=1;N>e.maxTextureSize&&(k=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*k*4*g),H=new LT(F,N,k,g);H.type=cr,H.needsUpdate=!0;const P=C*4;for(let O=0;O<g;O++){const le=y[O],re=I[O],ae=b[O],fe=N*k*4*O;for(let ce=0;ce<le.count;ce++){const ie=ce*P;E===!0&&(o.fromBufferAttribute(le,ce),F[fe+ie+0]=o.x,F[fe+ie+1]=o.y,F[fe+ie+2]=o.z,F[fe+ie+3]=0),M===!0&&(o.fromBufferAttribute(re,ce),F[fe+ie+4]=o.x,F[fe+ie+5]=o.y,F[fe+ie+6]=o.z,F[fe+ie+7]=0),S===!0&&(o.fromBufferAttribute(ae,ce),F[fe+ie+8]=o.x,F[fe+ie+9]=o.y,F[fe+ie+10]=o.z,F[fe+ie+11]=ae.itemSize===4?o.w:1)}}v={count:g,texture:H,size:new Lt(N,k)},i.set(u,v),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:a}}function cO(n,e,t,i){let o=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function c(){o=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}const $T=new Xn,Ex=new jT(1,1),qT=new LT,KT=new k2,YT=new HT,Tx=[],Mx=[],wx=new Float32Array(16),Ax=new Float32Array(9),Cx=new Float32Array(4);function ma(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=Tx[o];if(a===void 0&&(a=new Float32Array(o),Tx[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ff(n,e){let t=Mx[e];t===void 0&&(t=new Int32Array(e),Mx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function dO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function hO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function pO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Cx.set(i),n.uniformMatrix2fv(this.addr,!1,Cx),fn(t,i)}}function mO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Ax.set(i),n.uniformMatrix3fv(this.addr,!1,Ax),fn(t,i)}}function gO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;wx.set(i),n.uniformMatrix4fv(this.addr,!1,wx),fn(t,i)}}function vO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _O(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function yO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function xO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function SO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function TO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function MO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function wO(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Ex.compareFunction=IT,a=Ex):a=$T,t.setTexture2D(e||a,o)}function AO(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||KT,o)}function CO(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||YT,o)}function RO(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||qT,o)}function bO(n){switch(n){case 5126:return uO;case 35664:return fO;case 35665:return dO;case 35666:return hO;case 35674:return pO;case 35675:return mO;case 35676:return gO;case 5124:case 35670:return vO;case 35667:case 35671:return _O;case 35668:case 35672:return yO;case 35669:case 35673:return xO;case 5125:return SO;case 36294:return EO;case 36295:return TO;case 36296:return MO;case 35678:case 36198:case 36298:case 36306:case 35682:return wO;case 35679:case 36299:case 36307:return AO;case 35680:case 36300:case 36308:case 36293:return CO;case 36289:case 36303:case 36311:case 36292:return RO}}function PO(n,e){n.uniform1fv(this.addr,e)}function IO(n,e){const t=ma(e,this.size,2);n.uniform2fv(this.addr,t)}function DO(n,e){const t=ma(e,this.size,3);n.uniform3fv(this.addr,t)}function LO(n,e){const t=ma(e,this.size,4);n.uniform4fv(this.addr,t)}function NO(n,e){const t=ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UO(n,e){const t=ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OO(n,e){const t=ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FO(n,e){n.uniform1iv(this.addr,e)}function kO(n,e){n.uniform2iv(this.addr,e)}function BO(n,e){n.uniform3iv(this.addr,e)}function VO(n,e){n.uniform4iv(this.addr,e)}function zO(n,e){n.uniform1uiv(this.addr,e)}function HO(n,e){n.uniform2uiv(this.addr,e)}function GO(n,e){n.uniform3uiv(this.addr,e)}function WO(n,e){n.uniform4uiv(this.addr,e)}function jO(n,e,t){const i=this.cache,o=e.length,a=ff(t,o);un(i,a)||(n.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||$T,a[c])}function XO(n,e,t){const i=this.cache,o=e.length,a=ff(t,o);un(i,a)||(n.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||KT,a[c])}function $O(n,e,t){const i=this.cache,o=e.length,a=ff(t,o);un(i,a)||(n.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||YT,a[c])}function qO(n,e,t){const i=this.cache,o=e.length,a=ff(t,o);un(i,a)||(n.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||qT,a[c])}function KO(n){switch(n){case 5126:return PO;case 35664:return IO;case 35665:return DO;case 35666:return LO;case 35674:return NO;case 35675:return UO;case 35676:return OO;case 5124:case 35670:return FO;case 35667:case 35671:return kO;case 35668:case 35672:return BO;case 35669:case 35673:return VO;case 5125:return zO;case 36294:return HO;case 36295:return GO;case 36296:return WO;case 35678:case 36198:case 36298:case 36306:case 35682:return jO;case 35679:case 36299:case 36307:return XO;case 35680:case 36300:case 36308:case 36293:return $O;case 36289:case 36303:case 36311:case 36292:return qO}}class YO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bO(t.type)}}class ZO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KO(t.type)}}class JO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function Rx(n,e){n.seq.push(e),n.map[e.id]=e}function QO(n,e,t){const i=n.name,o=i.length;for(qh.lastIndex=0;;){const a=qh.exec(i),c=qh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){Rx(t,h===void 0?new YO(u,n,e):new ZO(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new JO(u),Rx(t,g)),t=g}}}class Uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);QO(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function bx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eF=37297;let tF=0;function nF(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Px=new ht;function iF(n){wt._getMatrix(Px,wt.workingColorSpace,n);const e=`mat3( ${Px.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case qu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ix(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+nF(n.getShaderSource(e),u)}else return a}function rF(n,e){const t=iF(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sF(n,e){let t;switch(e){case f2:t="Linear";break;case d2:t="Reinhard";break;case h2:t="Cineon";break;case p2:t="ACESFilmic";break;case g2:t="AgX";break;case v2:t="Neutral";break;case m2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Su=new Q;function oF(){wt.getLuminanceCoefficients(Su);const n=Su.x.toFixed(4),e=Su.y.toFixed(4),t=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aF(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function lF(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cF(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function nl(n){return n!==""}function Dx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uF=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(n){return n.replace(uF,dF)}const fF=new Map;function dF(n,e){let t=pt[e];if(t===void 0){const i=fF.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hm(t)}const hF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(n){return n.replace(hF,pF)}function pF(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Ux(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mF(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yT?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function gF(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sa:case oa:e="ENVMAP_TYPE_CUBE";break;case lf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vF(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oa:e="ENVMAP_MODE_REFRACTION";break}return e}function _F(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ST:e="ENVMAP_BLENDING_MULTIPLY";break;case c2:e="ENVMAP_BLENDING_MIX";break;case u2:e="ENVMAP_BLENDING_ADD";break}return e}function yF(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xF(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=mF(t),h=gF(t),p=vF(t),g=_F(t),v=yF(t),x=aF(t),E=lF(a),M=o.createProgram();let S,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(nl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(S=[Ux(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[Ux(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?pt.tonemapping_pars_fragment:"",t.toneMapping!==rs?sF("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,rF("linearToOutputTexel",t.outputColorSpace),oF(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),c=hm(c),c=Dx(c,t),c=Lx(c,t),u=hm(u),u=Dx(u,t),u=Lx(u,t),c=Nx(c),u=Nx(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===qy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=I+S+c,C=I+y+u,N=bx(o,o.VERTEX_SHADER,b),k=bx(o,o.FRAGMENT_SHADER,C);o.attachShader(M,N),o.attachShader(M,k),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(O){if(n.debug.checkShaderErrors){const le=o.getProgramInfoLog(M)||"",re=o.getShaderInfoLog(N)||"",ae=o.getShaderInfoLog(k)||"",fe=le.trim(),ce=re.trim(),ie=ae.trim();let V=!0,se=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,N,k);else{const ne=Ix(o,N,"vertex"),U=Ix(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+fe+`
`+ne+`
`+U)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(ce===""||ie==="")&&(se=!1);se&&(O.diagnostics={runnable:V,programLog:fe,vertexShader:{log:ce,prefix:S},fragmentShader:{log:ie,prefix:y}})}o.deleteShader(N),o.deleteShader(k),H=new Uu(o,M),P=cF(o,M)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(M,eF)),R},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tF++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=k,this}let SF=0;class EF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TF(e),t.set(e,i)),i}}class TF{constructor(e){this.id=SF++,this.code=e,this.usedTimes=0}}function MF(n,e,t,i,o,a,c){const u=new UT,d=new EF,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,R,O,le,re){const ae=le.fog,fe=re.geometry,ce=P.isMeshStandardMaterial?le.environment:null,ie=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),V=ie&&ie.mapping===lf?ie.image.height:null,se=E[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const ne=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=ne!==void 0?ne.length:0;let te=0;fe.morphAttributes.position!==void 0&&(te=1),fe.morphAttributes.normal!==void 0&&(te=2),fe.morphAttributes.color!==void 0&&(te=3);let Be,ke,Y,pe;if(se){const St=Li[se];Be=St.vertexShader,ke=St.fragmentShader}else Be=P.vertexShader,ke=P.fragmentShader,d.update(P),Y=d.getVertexShaderID(P),pe=d.getFragmentShaderID(P);const he=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ie=re.isInstancedMesh===!0,Ze=re.isBatchedMesh===!0,kt=!!P.map,_t=!!P.matcap,B=!!ie,At=!!P.aoMap,Je=!!P.lightMap,xt=!!P.bumpMap,Ke=!!P.normalMap,Nt=!!P.displacementMap,Oe=!!P.emissiveMap,ut=!!P.metalnessMap,Vt=!!P.roughnessMap,zt=P.anisotropy>0,D=P.clearcoat>0,w=P.dispersion>0,q=P.iridescence>0,ue=P.sheen>0,ve=P.transmission>0,oe=zt&&!!P.anisotropyMap,$e=D&&!!P.clearcoatMap,Me=D&&!!P.clearcoatNormalMap,Ve=D&&!!P.clearcoatRoughnessMap,qe=q&&!!P.iridescenceMap,Ee=q&&!!P.iridescenceThicknessMap,De=ue&&!!P.sheenColorMap,it=ue&&!!P.sheenRoughnessMap,je=!!P.specularMap,Ce=!!P.specularColorMap,ft=!!P.specularIntensityMap,G=ve&&!!P.transmissionMap,xe=ve&&!!P.thicknessMap,we=!!P.gradientMap,Le=!!P.alphaMap,ye=P.alphaTest>0,de=!!P.alphaHash,Ge=!!P.extensions;let ct=rs;P.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ct=n.toneMapping);const bt={shaderID:se,shaderType:P.type,shaderName:P.name,vertexShader:Be,fragmentShader:ke,defines:P.defines,customVertexShaderID:Y,customFragmentShaderID:pe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&re._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&re.instanceColor!==null,instancingMorph:Ie&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:aa,alphaToCoverage:!!P.alphaToCoverage,map:kt,matcap:_t,envMap:B,envMapMode:B&&ie.mapping,envMapCubeUVHeight:V,aoMap:At,lightMap:Je,bumpMap:xt,normalMap:Ke,displacementMap:v&&Nt,emissiveMap:Oe,normalMapObjectSpace:Ke&&P.normalMapType===E2,normalMapTangentSpace:Ke&&P.normalMapType===S2,metalnessMap:ut,roughnessMap:Vt,anisotropy:zt,anisotropyMap:oe,clearcoat:D,clearcoatMap:$e,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:q,iridescenceMap:qe,iridescenceThicknessMap:Ee,sheen:ue,sheenColorMap:De,sheenRoughnessMap:it,specularMap:je,specularColorMap:Ce,specularIntensityMap:ft,transmission:ve,transmissionMap:G,thicknessMap:xe,gradientMap:we,opaque:P.transparent===!1&&P.blending===Jo&&P.alphaToCoverage===!1,alphaMap:Le,alphaTest:ye,alphaHash:de,combine:P.combine,mapUv:kt&&M(P.map.channel),aoMapUv:At&&M(P.aoMap.channel),lightMapUv:Je&&M(P.lightMap.channel),bumpMapUv:xt&&M(P.bumpMap.channel),normalMapUv:Ke&&M(P.normalMap.channel),displacementMapUv:Nt&&M(P.displacementMap.channel),emissiveMapUv:Oe&&M(P.emissiveMap.channel),metalnessMapUv:ut&&M(P.metalnessMap.channel),roughnessMapUv:Vt&&M(P.roughnessMap.channel),anisotropyMapUv:oe&&M(P.anisotropyMap.channel),clearcoatMapUv:$e&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:it&&M(P.sheenRoughnessMap.channel),specularMapUv:je&&M(P.specularMap.channel),specularColorMapUv:Ce&&M(P.specularColorMap.channel),specularIntensityMapUv:ft&&M(P.specularIntensityMap.channel),transmissionMapUv:G&&M(P.transmissionMap.channel),thicknessMapUv:xe&&M(P.thicknessMap.channel),alphaMapUv:Le&&M(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ke||zt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!fe.attributes.uv&&(kt||Le),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ae,skinning:re.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:kt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Oe&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ui,flipSided:P.side===jn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ge&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&P.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function y(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const O in P.defines)R.push(O),R.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(I(R,P),b(R,P),R.push(n.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function I(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),R.gradientMap&&u.enable(22),P.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),P.push(u.mask)}function C(P){const R=E[P.type];let O;if(R){const le=Li[R];O=Z2.clone(le.uniforms)}else O=P.uniforms;return O}function N(P,R){let O;for(let le=0,re=p.length;le<re;le++){const ae=p[le];if(ae.cacheKey===R){O=ae,++O.usedTimes;break}}return O===void 0&&(O=new xF(n,R,P,a),p.push(O)),O}function k(P){if(--P.usedTimes===0){const R=p.indexOf(P);p[R]=p[p.length-1],p.pop(),P.destroy()}}function F(P){d.remove(P)}function H(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:N,releaseProgram:k,releaseShaderCache:F,programs:p,dispose:H}}function wF(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function AF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fx(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(g,v,x,E,M,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),e++,y}function u(g,v,x,E,M,S){const y=c(g,v,x,E,M,S);x.transmission>0?i.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,E,M,S){const y=c(g,v,x,E,M,S);x.transmission>0?i.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||AF),i.length>1&&i.sort(v||Ox),o.length>1&&o.sort(v||Ox)}function p(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:d,finish:p,sort:h}}function CF(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new Fx,n.set(i,[c])):o>=a.length?(c=new Fx,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function RF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Rt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function bF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PF=0;function IF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DF(n){const e=new RF,t=bF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Q);const o=new Q,a=new sn,c=new sn;function u(h){let p=0,g=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,I=0,b=0,C=0,N=0,k=0,F=0;h.sort(IF);for(let P=0,R=h.length;P<R;P++){const O=h[P],le=O.color,re=O.intensity,ae=O.distance,fe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=le.r*re,g+=le.g*re,v+=le.b*re;else if(O.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(O.sh.coefficients[ce],re);F++}else if(O.isDirectionalLight){const ce=e.get(O);if(ce.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ie=O.shadow,V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[x]=V,i.directionalShadowMap[x]=fe,i.directionalShadowMatrix[x]=O.shadow.matrix,I++}i.directional[x]=ce,x++}else if(O.isSpotLight){const ce=e.get(O);ce.position.setFromMatrixPosition(O.matrixWorld),ce.color.copy(le).multiplyScalar(re),ce.distance=ae,ce.coneCos=Math.cos(O.angle),ce.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ce.decay=O.decay,i.spot[M]=ce;const ie=O.shadow;if(O.map&&(i.spotLightMap[N]=O.map,N++,ie.updateMatrices(O),O.castShadow&&k++),i.spotLightMatrix[M]=ie.matrix,O.castShadow){const V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=fe,C++}M++}else if(O.isRectAreaLight){const ce=e.get(O);ce.color.copy(le).multiplyScalar(re),ce.halfWidth.set(O.width*.5,0,0),ce.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=ce,S++}else if(O.isPointLight){const ce=e.get(O);if(ce.color.copy(O.color).multiplyScalar(O.intensity),ce.distance=O.distance,ce.decay=O.decay,O.castShadow){const ie=O.shadow,V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[E]=V,i.pointShadowMap[E]=fe,i.pointShadowMatrix[E]=O.shadow.matrix,b++}i.point[E]=ce,E++}else if(O.isHemisphereLight){const ce=e.get(O);ce.skyColor.copy(O.color).multiplyScalar(re),ce.groundColor.copy(O.groundColor).multiplyScalar(re),i.hemi[y]=ce,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=v;const H=i.hash;(H.directionalLength!==x||H.pointLength!==E||H.spotLength!==M||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==I||H.numPointShadows!==b||H.numSpotShadows!==C||H.numSpotMaps!==N||H.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=y,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+N-k,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=F,H.directionalLength=x,H.pointLength=E,H.spotLength=M,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=I,H.numPointShadows=b,H.numSpotShadows=C,H.numSpotMaps=N,H.numLightProbes=F,i.version=PF++)}function d(h,p){let g=0,v=0,x=0,E=0,M=0;const S=p.matrixWorldInverse;for(let y=0,I=h.length;y<I;y++){const b=h[y];if(b.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),g++}else if(b.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const C=i.rectArea[E];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),c.identity(),a.copy(b.matrixWorld),a.premultiply(S),c.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(b.isPointLight){const C=i.point[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),v++}else if(b.isHemisphereLight){const C=i.hemi[M];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(S),M++}}}return{setup:u,setupView:d,state:i}}function kx(n){const e=new DF(n),t=[],i=[];function o(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function LF(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new kx(n),e.set(o,[u])):a>=c.length?(u=new kx(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const NF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OF(n,e,t){let i=new GT;const o=new Lt,a=new Lt,c=new en,u=new lN({depthPacking:x2}),d=new cN,h={},p=t.maxTextureSize,g={[cs]:jn,[jn]:cs,[Ui]:Ui},v=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:NF,fragmentShader:UF}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new yr;E.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ur(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yT;let y=this.type;this.render=function(k,F,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const P=n.getRenderTarget(),R=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),le=n.state;le.setBlending(is),le.buffers.depth.getReversed()?le.buffers.color.setClear(0,0,0,0):le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const re=y!==or&&this.type===or,ae=y===or&&this.type!==or;for(let fe=0,ce=k.length;fe<ce;fe++){const ie=k[fe],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const se=V.getFrameExtents();if(o.multiply(se),a.copy(V.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/se.x),o.x=a.x*se.x,V.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/se.y),o.y=a.y*se.y,V.mapSize.y=a.y)),V.map===null||re===!0||ae===!0){const U=this.type!==or?{minFilter:Ri,magFilter:Ri}:{};V.map!==null&&V.map.dispose(),V.map=new Qs(o.x,o.y,U),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ne=V.getViewportCount();for(let U=0;U<ne;U++){const te=V.getViewport(U);c.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),le.viewport(c),V.updateMatrices(ie,U),i=V.getFrustum(),C(F,H,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===or&&I(V,H),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,R,O)};function I(k,F){const H=e.update(M);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Qs(o.x,o.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,n.setRenderTarget(k.mapPass),n.clear(),n.renderBufferDirect(F,null,H,v,M,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,n.setRenderTarget(k.map),n.clear(),n.renderBufferDirect(F,null,H,x,M,null)}function b(k,F,H,P){let R=null;const O=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(O!==void 0)R=O;else if(R=H.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const le=R.uuid,re=F.uuid;let ae=h[le];ae===void 0&&(ae={},h[le]=ae);let fe=ae[re];fe===void 0&&(fe=R.clone(),ae[re]=fe,F.addEventListener("dispose",N)),R=fe}if(R.visible=F.visible,R.wireframe=F.wireframe,P===or?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=n.properties.get(R);le.light=H}return R}function C(k,F,H,P,R){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===or)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const re=e.update(k),ae=k.material;if(Array.isArray(ae)){const fe=re.groups;for(let ce=0,ie=fe.length;ce<ie;ce++){const V=fe[ce],se=ae[V.materialIndex];if(se&&se.visible){const ne=b(k,se,P,R);k.onBeforeShadow(n,k,F,H,re,ne,V),n.renderBufferDirect(H,null,re,ne,k,V),k.onAfterShadow(n,k,F,H,re,ne,V)}}}else if(ae.visible){const fe=b(k,ae,P,R);k.onBeforeShadow(n,k,F,H,re,fe,null),n.renderBufferDirect(H,null,re,fe,k,null),k.onAfterShadow(n,k,F,H,re,fe,null)}}const le=k.children;for(let re=0,ae=le.length;re<ae;re++)C(le[re],F,H,P,R)}function N(k){k.target.removeEventListener("dispose",N);for(const H in h){const P=h[H],R=k.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const FF={[Rp]:bp,[Pp]:Lp,[Ip]:Np,[ra]:Dp,[bp]:Rp,[Lp]:Pp,[Np]:Ip,[Dp]:ra};function kF(n,e){function t(){let G=!1;const xe=new en;let we=null;const Le=new en(0,0,0,0);return{setMask:function(ye){we!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),we=ye)},setLocked:function(ye){G=ye},setClear:function(ye,de,Ge,ct,bt){bt===!0&&(ye*=ct,de*=ct,Ge*=ct),xe.set(ye,de,Ge,ct),Le.equals(xe)===!1&&(n.clearColor(ye,de,Ge,ct),Le.copy(xe))},reset:function(){G=!1,we=null,Le.set(-1,0,0,0)}}}function i(){let G=!1,xe=!1,we=null,Le=null,ye=null;return{setReversed:function(de){if(xe!==de){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),xe=de;const ct=ye;ye=null,this.setClear(ct)}},getReversed:function(){return xe},setTest:function(de){de?he(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(de){we!==de&&!G&&(n.depthMask(de),we=de)},setFunc:function(de){if(xe&&(de=FF[de]),Le!==de){switch(de){case Rp:n.depthFunc(n.NEVER);break;case bp:n.depthFunc(n.ALWAYS);break;case Pp:n.depthFunc(n.LESS);break;case ra:n.depthFunc(n.LEQUAL);break;case Ip:n.depthFunc(n.EQUAL);break;case Dp:n.depthFunc(n.GEQUAL);break;case Lp:n.depthFunc(n.GREATER);break;case Np:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=de}},setLocked:function(de){G=de},setClear:function(de){ye!==de&&(xe&&(de=1-de),n.clearDepth(de),ye=de)},reset:function(){G=!1,we=null,Le=null,ye=null,xe=!1}}}function o(){let G=!1,xe=null,we=null,Le=null,ye=null,de=null,Ge=null,ct=null,bt=null;return{setTest:function(St){G||(St?he(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(St){xe!==St&&!G&&(n.stencilMask(St),xe=St)},setFunc:function(St,ti,yn){(we!==St||Le!==ti||ye!==yn)&&(n.stencilFunc(St,ti,yn),we=St,Le=ti,ye=yn)},setOp:function(St,ti,yn){(de!==St||Ge!==ti||ct!==yn)&&(n.stencilOp(St,ti,yn),de=St,Ge=ti,ct=yn)},setLocked:function(St){G=St},setClear:function(St){bt!==St&&(n.clearStencil(St),bt=St)},reset:function(){G=!1,xe=null,we=null,Le=null,ye=null,de=null,Ge=null,ct=null,bt=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,h=new WeakMap;let p={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,I=null,b=null,C=null,N=null,k=null,F=new Rt(0,0,0),H=0,P=!1,R=null,O=null,le=null,re=null,ae=null;const fe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ie=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),ce=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ce=ie>=2);let se=null,ne={};const U=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Be=new en().fromArray(U),ke=new en().fromArray(te);function Y(G,xe,we,Le){const ye=new Uint8Array(4),de=n.createTexture();n.bindTexture(G,de),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<we;Ge++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(xe+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return de}const pe={};pe[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),he(n.DEPTH_TEST),c.setFunc(ra),xt(!1),Ke(Hy),he(n.CULL_FACE),At(is);function he(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function Ae(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function Ie(G,xe){return g[G]!==xe?(n.bindFramebuffer(G,xe),g[G]=xe,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=xe),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ze(G,xe){let we=x,Le=!1;if(G){we=v.get(xe),we===void 0&&(we=[],v.set(xe,we));const ye=G.textures;if(we.length!==ye.length||we[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ge=ye.length;de<Ge;de++)we[de]=n.COLOR_ATTACHMENT0+de;we.length=ye.length,Le=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Le=!0);Le&&n.drawBuffers(we)}function kt(G){return E!==G?(n.useProgram(G),E=G,!0):!1}const _t={[Vs]:n.FUNC_ADD,[XL]:n.FUNC_SUBTRACT,[$L]:n.FUNC_REVERSE_SUBTRACT};_t[qL]=n.MIN,_t[KL]=n.MAX;const B={[YL]:n.ZERO,[ZL]:n.ONE,[JL]:n.SRC_COLOR,[Ap]:n.SRC_ALPHA,[r2]:n.SRC_ALPHA_SATURATE,[n2]:n.DST_COLOR,[e2]:n.DST_ALPHA,[QL]:n.ONE_MINUS_SRC_COLOR,[Cp]:n.ONE_MINUS_SRC_ALPHA,[i2]:n.ONE_MINUS_DST_COLOR,[t2]:n.ONE_MINUS_DST_ALPHA,[s2]:n.CONSTANT_COLOR,[o2]:n.ONE_MINUS_CONSTANT_COLOR,[a2]:n.CONSTANT_ALPHA,[l2]:n.ONE_MINUS_CONSTANT_ALPHA};function At(G,xe,we,Le,ye,de,Ge,ct,bt,St){if(G===is){M===!0&&(Ae(n.BLEND),M=!1);return}if(M===!1&&(he(n.BLEND),M=!0),G!==jL){if(G!==S||St!==P){if((y!==Vs||C!==Vs)&&(n.blendEquation(n.FUNC_ADD),y=Vs,C=Vs),St)switch(G){case Jo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gy:n.blendFunc(n.ONE,n.ONE);break;case Wy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jy:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gy:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,b=null,N=null,k=null,F.set(0,0,0),H=0,S=G,P=St}return}ye=ye||xe,de=de||we,Ge=Ge||Le,(xe!==y||ye!==C)&&(n.blendEquationSeparate(_t[xe],_t[ye]),y=xe,C=ye),(we!==I||Le!==b||de!==N||Ge!==k)&&(n.blendFuncSeparate(B[we],B[Le],B[de],B[Ge]),I=we,b=Le,N=de,k=Ge),(ct.equals(F)===!1||bt!==H)&&(n.blendColor(ct.r,ct.g,ct.b,bt),F.copy(ct),H=bt),S=G,P=!1}function Je(G,xe){G.side===Ui?Ae(n.CULL_FACE):he(n.CULL_FACE);let we=G.side===jn;xe&&(we=!we),xt(we),G.blending===Jo&&G.transparent===!1?At(is):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Le=G.stencilWrite;u.setTest(Le),Le&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Oe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function Ke(G){G!==GL?(he(n.CULL_FACE),G!==O&&(G===Hy?n.cullFace(n.BACK):G===WL?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),O=G}function Nt(G){G!==le&&(ce&&n.lineWidth(G),le=G)}function Oe(G,xe,we){G?(he(n.POLYGON_OFFSET_FILL),(re!==xe||ae!==we)&&(n.polygonOffset(xe,we),re=xe,ae=we)):Ae(n.POLYGON_OFFSET_FILL)}function ut(G){G?he(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function Vt(G){G===void 0&&(G=n.TEXTURE0+fe-1),se!==G&&(n.activeTexture(G),se=G)}function zt(G,xe,we){we===void 0&&(se===null?we=n.TEXTURE0+fe-1:we=se);let Le=ne[we];Le===void 0&&(Le={type:void 0,texture:void 0},ne[we]=Le),(Le.type!==G||Le.texture!==xe)&&(se!==we&&(n.activeTexture(we),se=we),n.bindTexture(G,xe||pe[G]),Le.type=G,Le.texture=xe)}function D(){const G=ne[se];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(G){Be.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Be.copy(G))}function it(G){ke.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ke.copy(G))}function je(G,xe){let we=h.get(xe);we===void 0&&(we=new WeakMap,h.set(xe,we));let Le=we.get(G);Le===void 0&&(Le=n.getUniformBlockIndex(xe,G.name),we.set(G,Le))}function Ce(G,xe){const Le=h.get(xe).get(G);d.get(xe)!==Le&&(n.uniformBlockBinding(xe,Le,G.__bindingPointIndex),d.set(xe,Le))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},se=null,ne={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,I=null,b=null,C=null,N=null,k=null,F=new Rt(0,0,0),H=0,P=!1,R=null,O=null,le=null,re=null,ae=null,Be.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:he,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:kt,setBlending:At,setMaterial:Je,setFlipSided:xt,setCullFace:Ke,setLineWidth:Nt,setPolygonOffset:Oe,setScissorTest:ut,activeTexture:Vt,bindTexture:zt,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:qe,texImage3D:Ee,updateUBOMapping:je,uniformBlockBinding:Ce,texStorage2D:Me,texStorage3D:Ve,texSubImage2D:ue,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:$e,scissor:De,viewport:it,reset:ft}}function BF(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return x?new OffscreenCanvas(D,w):Yu("canvas")}function M(D,w,q){let ue=1;const ve=zt(D);if((ve.width>q||ve.height>q)&&(ue=q/Math.max(ve.width,ve.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(ue*ve.width),$e=Math.floor(ue*ve.height);g===void 0&&(g=E(oe,$e));const Me=w?E(oe,$e):g;return Me.width=oe,Me.height=$e,Me.getContext("2d").drawImage(D,0,0,oe,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+oe+"x"+$e+")."),Me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,w,q,ue,ve=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=w;if(w===n.RED&&(q===n.FLOAT&&(oe=n.R32F),q===n.HALF_FLOAT&&(oe=n.R16F),q===n.UNSIGNED_BYTE&&(oe=n.R8)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.R8UI),q===n.UNSIGNED_SHORT&&(oe=n.R16UI),q===n.UNSIGNED_INT&&(oe=n.R32UI),q===n.BYTE&&(oe=n.R8I),q===n.SHORT&&(oe=n.R16I),q===n.INT&&(oe=n.R32I)),w===n.RG&&(q===n.FLOAT&&(oe=n.RG32F),q===n.HALF_FLOAT&&(oe=n.RG16F),q===n.UNSIGNED_BYTE&&(oe=n.RG8)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.RG8UI),q===n.UNSIGNED_SHORT&&(oe=n.RG16UI),q===n.UNSIGNED_INT&&(oe=n.RG32UI),q===n.BYTE&&(oe=n.RG8I),q===n.SHORT&&(oe=n.RG16I),q===n.INT&&(oe=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),q===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),q===n.UNSIGNED_INT&&(oe=n.RGB32UI),q===n.BYTE&&(oe=n.RGB8I),q===n.SHORT&&(oe=n.RGB16I),q===n.INT&&(oe=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),q===n.UNSIGNED_INT&&(oe=n.RGBA32UI),q===n.BYTE&&(oe=n.RGBA8I),q===n.SHORT&&(oe=n.RGBA16I),q===n.INT&&(oe=n.RGBA32I)),w===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),w===n.RGBA){const $e=ve?qu:wt.getTransfer(ue);q===n.FLOAT&&(oe=n.RGBA32F),q===n.HALF_FLOAT&&(oe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(oe=$e===Dt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(D,w){let q;return D?w===null||w===Js||w===Sl?q=n.DEPTH24_STENCIL8:w===cr?q=n.DEPTH32F_STENCIL8:w===xl&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Js||w===Sl?q=n.DEPTH_COMPONENT24:w===cr?q=n.DEPTH_COMPONENT32F:w===xl&&(q=n.DEPTH_COMPONENT16),q}function N(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ri&&D.minFilter!==Oi?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function k(D){const w=D.target;w.removeEventListener("dispose",k),H(w),w.isVideoTexture&&p.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),R(w)}function H(D){const w=i.get(D);if(w.__webglInit===void 0)return;const q=D.source,ue=v.get(q);if(ue){const ve=ue[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(ue).length===0&&v.delete(q)}i.remove(D)}function P(D){const w=i.get(D);n.deleteTexture(w.__webglTexture);const q=D.source,ue=v.get(q);delete ue[w.__cacheKey],c.memory.textures--}function R(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let ve=0;ve<w.__webglFramebuffer[ue].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[ue][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)n.deleteFramebuffer(w.__webglFramebuffer[ue]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=D.textures;for(let ue=0,ve=q.length;ue<ve;ue++){const oe=i.get(q[ue]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),c.memory.textures--),i.remove(q[ue])}i.remove(D)}let O=0;function le(){O=0}function re(){const D=O;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),O+=1,D}function ae(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function fe(D,w){const q=i.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(q,D,w);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function ce(D,w){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){pe(q,D,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function ie(D,w){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){pe(q,D,w);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function V(D,w){const q=i.get(D);if(D.version>0&&q.__version!==D.version){he(q,D,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}const se={[Fp]:n.REPEAT,[js]:n.CLAMP_TO_EDGE,[kp]:n.MIRRORED_REPEAT},ne={[Ri]:n.NEAREST,[_2]:n.NEAREST_MIPMAP_NEAREST,[Jc]:n.NEAREST_MIPMAP_LINEAR,[Oi]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},U={[T2]:n.NEVER,[b2]:n.ALWAYS,[M2]:n.LESS,[IT]:n.LEQUAL,[w2]:n.EQUAL,[R2]:n.GEQUAL,[A2]:n.GREATER,[C2]:n.NOTEQUAL};function te(D,w){if(w.type===cr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Oi||w.magFilter===_h||w.magFilter===Jc||w.magFilter===Xs||w.minFilter===Oi||w.minFilter===_h||w.minFilter===Jc||w.minFilter===Xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,se[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,se[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,se[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ne[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ri||w.minFilter!==Jc&&w.minFilter!==Xs||w.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Be(D,w){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",k));const ue=w.source;let ve=v.get(ue);ve===void 0&&(ve={},v.set(ue,ve));const oe=ae(w);if(oe!==D.__cacheKey){ve[oe]===void 0&&(ve[oe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ve[oe].usedTimes++;const $e=ve[D.__cacheKey];$e!==void 0&&(ve[D.__cacheKey].usedTimes--,$e.usedTimes===0&&P(w)),D.__cacheKey=oe,D.__webglTexture=ve[oe].texture}return q}function ke(D,w,q){return Math.floor(Math.floor(D/q)/w)}function Y(D,w,q,ue){const oe=D.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,ue,w.data);else{oe.sort((Ee,De)=>Ee.start-De.start);let $e=0;for(let Ee=1;Ee<oe.length;Ee++){const De=oe[$e],it=oe[Ee],je=De.start+De.count,Ce=ke(it.start,w.width,4),ft=ke(De.start,w.width,4);it.start<=je+1&&Ce===ft&&ke(it.start+it.count-1,w.width,4)===Ce?De.count=Math.max(De.count,it.start+it.count-De.start):(++$e,oe[$e]=it)}oe.length=$e+1;const Me=n.getParameter(n.UNPACK_ROW_LENGTH),Ve=n.getParameter(n.UNPACK_SKIP_PIXELS),qe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ee=0,De=oe.length;Ee<De;Ee++){const it=oe[Ee],je=Math.floor(it.start/4),Ce=Math.ceil(it.count/4),ft=je%w.width,G=Math.floor(je/w.width),xe=Ce,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ft,G,xe,we,q,ue,w.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,qe)}}function pe(D,w,q){let ue=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=n.TEXTURE_3D);const ve=Be(D,w),oe=w.source;t.bindTexture(ue,D.__webglTexture,n.TEXTURE0+q);const $e=i.get(oe);if(oe.version!==$e.__version||ve===!0){t.activeTexture(n.TEXTURE0+q);const Me=wt.getPrimaries(wt.workingColorSpace),Ve=w.colorSpace===Jr?null:wt.getPrimaries(w.colorSpace),qe=w.colorSpace===Jr||Me===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ee=M(w.image,!1,o.maxTextureSize);Ee=Vt(w,Ee);const De=a.convert(w.format,w.colorSpace),it=a.convert(w.type);let je=b(w.internalFormat,De,it,w.colorSpace,w.isVideoTexture);te(ue,w);let Ce;const ft=w.mipmaps,G=w.isVideoTexture!==!0,xe=$e.__version===void 0||ve===!0,we=oe.dataReady,Le=N(w,Ee);if(w.isDepthTexture)je=C(w.format===Tl,w.type),xe&&(G?t.texStorage2D(n.TEXTURE_2D,1,je,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,je,Ee.width,Ee.height,0,De,it,null));else if(w.isDataTexture)if(ft.length>0){G&&xe&&t.texStorage2D(n.TEXTURE_2D,Le,je,ft[0].width,ft[0].height);for(let ye=0,de=ft.length;ye<de;ye++)Ce=ft[ye],G?we&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,De,it,Ce.data):t.texImage2D(n.TEXTURE_2D,ye,je,Ce.width,Ce.height,0,De,it,Ce.data);w.generateMipmaps=!1}else G?(xe&&t.texStorage2D(n.TEXTURE_2D,Le,je,Ee.width,Ee.height),we&&Y(w,Ee,De,it)):t.texImage2D(n.TEXTURE_2D,0,je,Ee.width,Ee.height,0,De,it,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,je,ft[0].width,ft[0].height,Ee.depth);for(let ye=0,de=ft.length;ye<de;ye++)if(Ce=ft[ye],w.format!==Ci)if(De!==null)if(G){if(we)if(w.layerUpdates.size>0){const Ge=px(Ce.width,Ce.height,w.format,w.type);for(const ct of w.layerUpdates){const bt=Ce.data.subarray(ct*Ge/Ce.data.BYTES_PER_ELEMENT,(ct+1)*Ge/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,ct,Ce.width,Ce.height,1,De,bt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,Ee.depth,De,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,je,Ce.width,Ce.height,Ee.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,Ee.depth,De,it,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,je,Ce.width,Ce.height,Ee.depth,0,De,it,Ce.data)}else{G&&xe&&t.texStorage2D(n.TEXTURE_2D,Le,je,ft[0].width,ft[0].height);for(let ye=0,de=ft.length;ye<de;ye++)Ce=ft[ye],w.format!==Ci?De!==null?G?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,De,it,Ce.data):t.texImage2D(n.TEXTURE_2D,ye,je,Ce.width,Ce.height,0,De,it,Ce.data)}else if(w.isDataArrayTexture)if(G){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,je,Ee.width,Ee.height,Ee.depth),we)if(w.layerUpdates.size>0){const ye=px(Ee.width,Ee.height,w.format,w.type);for(const de of w.layerUpdates){const Ge=Ee.data.subarray(de*ye/Ee.data.BYTES_PER_ELEMENT,(de+1)*ye/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Ee.width,Ee.height,1,De,it,Ge)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,it,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,je,Ee.width,Ee.height,Ee.depth,0,De,it,Ee.data);else if(w.isData3DTexture)G?(xe&&t.texStorage3D(n.TEXTURE_3D,Le,je,Ee.width,Ee.height,Ee.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,it,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,je,Ee.width,Ee.height,Ee.depth,0,De,it,Ee.data);else if(w.isFramebufferTexture){if(xe)if(G)t.texStorage2D(n.TEXTURE_2D,Le,je,Ee.width,Ee.height);else{let ye=Ee.width,de=Ee.height;for(let Ge=0;Ge<Le;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,je,ye,de,0,De,it,null),ye>>=1,de>>=1}}else if(ft.length>0){if(G&&xe){const ye=zt(ft[0]);t.texStorage2D(n.TEXTURE_2D,Le,je,ye.width,ye.height)}for(let ye=0,de=ft.length;ye<de;ye++)Ce=ft[ye],G?we&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,De,it,Ce):t.texImage2D(n.TEXTURE_2D,ye,je,De,it,Ce);w.generateMipmaps=!1}else if(G){if(xe){const ye=zt(Ee);t.texStorage2D(n.TEXTURE_2D,Le,je,ye.width,ye.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,it,Ee)}else t.texImage2D(n.TEXTURE_2D,0,je,De,it,Ee);S(w)&&y(ue),$e.__version=oe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function he(D,w,q){if(w.image.length!==6)return;const ue=Be(D,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+q);const oe=i.get(ve);if(ve.version!==oe.__version||ue===!0){t.activeTexture(n.TEXTURE0+q);const $e=wt.getPrimaries(wt.workingColorSpace),Me=w.colorSpace===Jr?null:wt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Jr||$e===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,De=[];for(let de=0;de<6;de++)!qe&&!Ee?De[de]=M(w.image[de],!0,o.maxCubemapSize):De[de]=Ee?w.image[de].image:w.image[de],De[de]=Vt(w,De[de]);const it=De[0],je=a.convert(w.format,w.colorSpace),Ce=a.convert(w.type),ft=b(w.internalFormat,je,Ce,w.colorSpace),G=w.isVideoTexture!==!0,xe=oe.__version===void 0||ue===!0,we=ve.dataReady;let Le=N(w,it);te(n.TEXTURE_CUBE_MAP,w);let ye;if(qe){G&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ft,it.width,it.height);for(let de=0;de<6;de++){ye=De[de].mipmaps;for(let Ge=0;Ge<ye.length;Ge++){const ct=ye[Ge];w.format!==Ci?je!==null?G?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,ct.width,ct.height,je,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,ct.width,ct.height,je,Ce,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,ft,ct.width,ct.height,0,je,Ce,ct.data)}}}else{if(ye=w.mipmaps,G&&xe){ye.length>0&&Le++;const de=zt(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ft,de.width,de.height)}for(let de=0;de<6;de++)if(Ee){G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,De[de].width,De[de].height,je,Ce,De[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,De[de].width,De[de].height,0,je,Ce,De[de].data);for(let Ge=0;Ge<ye.length;Ge++){const bt=ye[Ge].image[de].image;G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,bt.width,bt.height,je,Ce,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,ft,bt.width,bt.height,0,je,Ce,bt.data)}}else{G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,Ce,De[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,je,Ce,De[de]);for(let Ge=0;Ge<ye.length;Ge++){const ct=ye[Ge];G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,je,Ce,ct.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,ft,je,Ce,ct.image[de])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),oe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ae(D,w,q,ue,ve,oe){const $e=a.convert(q.format,q.colorSpace),Me=a.convert(q.type),Ve=b(q.internalFormat,$e,Me,q.colorSpace),qe=i.get(w),Ee=i.get(q);if(Ee.__renderTarget=w,!qe.__hasExternalTextures){const De=Math.max(1,w.width>>oe),it=Math.max(1,w.height>>oe);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,oe,Ve,De,it,w.depth,0,$e,Me,null):t.texImage2D(ve,oe,Ve,De,it,0,$e,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Oe(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ve,Ee.__webglTexture,0,Nt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ve,Ee.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(D,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const ue=w.depthTexture,ve=ue&&ue.isDepthTexture?ue.type:null,oe=C(w.stencilBuffer,ve),$e=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=Nt(w);Oe(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,oe,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$e,n.RENDERBUFFER,D)}else{const ue=w.textures;for(let ve=0;ve<ue.length;ve++){const oe=ue[ve],$e=a.convert(oe.format,oe.colorSpace),Me=a.convert(oe.type),Ve=b(oe.internalFormat,$e,Me,oe.colorSpace),qe=Nt(w);q&&Oe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ve,w.width,w.height):Oe(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,Ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(w.depthTexture);ue.__renderTarget=w,(!ue.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ve=ue.__webglTexture,oe=Nt(w);if(w.depthTexture.format===El)Oe(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Tl)Oe(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function kt(D){const w=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",ve)};ue.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=ue}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ue=D.texture.mipmaps;ue&&ue.length>0?Ze(w.__webglFramebuffer[0],D):Ze(w.__webglFramebuffer,D)}else if(q){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=n.createRenderbuffer(),Ie(w.__webglDepthbuffer[ue],D,!1);else{const ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,oe)}}else{const ue=D.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ie(w.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(D,w,q){const ue=i.get(D);w!==void 0&&Ae(ue.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&kt(D)}function B(D){const w=D.texture,q=i.get(D),ue=i.get(w);D.addEventListener("dispose",F);const ve=D.textures,oe=D.isWebGLCubeRenderTarget===!0,$e=ve.length>1;if($e||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=w.version,c.memory.textures++),oe){q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Me]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)q.__webglFramebuffer[Me][Ve]=n.createFramebuffer()}else q.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)q.__webglFramebuffer[Me]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if($e)for(let Me=0,Ve=ve.length;Me<Ve;Me++){const qe=i.get(ve[Me]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),c.memory.textures++)}if(D.samples>0&&Oe(D)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Me=0;Me<ve.length;Me++){const Ve=ve[Me];q.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Me]);const qe=a.convert(Ve.format,Ve.colorSpace),Ee=a.convert(Ve.type),De=b(Ve.internalFormat,qe,Ee,Ve.colorSpace,D.isXRRenderTarget===!0),it=Nt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,De,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,q.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),te(n.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Ae(q.__webglFramebuffer[Me][Ve],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve);else Ae(q.__webglFramebuffer[Me],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Me=0,Ve=ve.length;Me<Ve;Me++){const qe=ve[Me],Ee=i.get(qe);let De=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ee.__webglTexture),te(De,qe),Ae(q.__webglFramebuffer,D,qe,n.COLOR_ATTACHMENT0+Me,De,0),S(qe)&&y(De)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ue.__webglTexture),te(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Ae(q.__webglFramebuffer[Ve],D,w,n.COLOR_ATTACHMENT0,Me,Ve);else Ae(q.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,Me,0);S(w)&&y(Me),t.unbindTexture()}D.depthBuffer&&kt(D)}function At(D){const w=D.textures;for(let q=0,ue=w.length;q<ue;q++){const ve=w[q];if(S(ve)){const oe=I(D),$e=i.get(ve).__webglTexture;t.bindTexture(oe,$e),y(oe),t.unbindTexture()}}}const Je=[],xt=[];function Ke(D){if(D.samples>0){if(Oe(D)===!1){const w=D.textures,q=D.width,ue=D.height;let ve=n.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$e=i.get(D),Me=w.length>1;if(Me)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=D.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$e.__webglColorRenderbuffer[qe]);const Ee=i.get(w[qe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,q,ue,0,0,q,ue,ve,n.NEAREST),d===!0&&(Je.length=0,xt.length=0,Je.push(n.COLOR_ATTACHMENT0+qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Je.push(oe),xt.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,$e.__webglColorRenderbuffer[qe]);const Ee=i.get(w[qe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Nt(D){return Math.min(o.maxSamples,D.samples)}function Oe(D){const w=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(D){const w=c.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function Vt(D,w){const q=D.colorSpace,ue=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==aa&&q!==Jr&&(wt.getTransfer(q)===Dt?(ue!==Ci||ve!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function zt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=re,this.resetTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=ce,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=_t,this.setupRenderTarget=B,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Oe}function VF(n,e){function t(i,o=Jr){let a;const c=wt.getTransfer(o);if(i===vr)return n.UNSIGNED_BYTE;if(i===hg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wT)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===TT)return n.BYTE;if(i===MT)return n.SHORT;if(i===xl)return n.UNSIGNED_SHORT;if(i===dg)return n.INT;if(i===Js)return n.UNSIGNED_INT;if(i===cr)return n.FLOAT;if(i===Ll)return n.HALF_FLOAT;if(i===AT)return n.ALPHA;if(i===CT)return n.RGB;if(i===Ci)return n.RGBA;if(i===El)return n.DEPTH_COMPONENT;if(i===Tl)return n.DEPTH_STENCIL;if(i===RT)return n.RED;if(i===mg)return n.RED_INTEGER;if(i===bT)return n.RG;if(i===gg)return n.RG_INTEGER;if(i===vg)return n.RGBA_INTEGER;if(i===Pu||i===Iu||i===Du||i===Lu)if(c===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Iu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Du)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bp||i===Vp||i===zp||i===Hp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===Wp||i===jp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gp||i===Wp)return c===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===jp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xp||i===$p||i===qp||i===Kp||i===Yp||i===Zp||i===Jp||i===Qp||i===em||i===tm||i===nm||i===im||i===rm||i===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Xp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$p)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qp)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===em)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tm)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nm)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===im)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sm)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nu||i===om||i===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Nu)return c===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===PT||i===lm||i===cm||i===um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Nu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ZT extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const zF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ZT(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new us({vertexShader:zF,fragmentShader:HF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ur(new uf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WF extends pa{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,g=null,v=null,x=null,E=null;const M=new GF,S={},y=t.getContextAttributes();let I=null,b=null;const C=[],N=[],k=new Lt;let F=null;const H=new di;H.viewport=new en;const P=new di;P.viewport=new en;const R=[H,P],O=new fN;let le=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pe=C[Y];return pe===void 0&&(pe=new zh,C[Y]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Y){let pe=C[Y];return pe===void 0&&(pe=new zh,C[Y]=pe),pe.getGripSpace()},this.getHand=function(Y){let pe=C[Y];return pe===void 0&&(pe=new zh,C[Y]=pe),pe.getHandSpace()};function ae(Y){const pe=N.indexOf(Y.inputSource);if(pe===-1)return;const he=C[pe];he!==void 0&&(he.update(Y.inputSource,Y.frame,h||c),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function fe(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",ce);for(let Y=0;Y<C.length;Y++){const pe=N[Y];pe!==null&&(N[Y]=null,C[Y].disconnect(pe))}le=null,re=null,M.reset();for(const Y in S)delete S[Y];e.setRenderTarget(I),x=null,v=null,g=null,o=null,b=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){u=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(o,t)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ae=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?Tl:El,Ae=y.stencil?Sl:Js);const Ze={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:a};v=g.createProjectionLayer(Ze),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new Qs(v.textureWidth,v.textureHeight,{format:Ci,type:vr,depthTexture:new jT(v.textureWidth,v.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Qs(x.framebufferWidth,x.framebufferHeight,{format:Ci,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),ke.setContext(o),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(Y){for(let pe=0;pe<Y.removed.length;pe++){const he=Y.removed[pe],Ae=N.indexOf(he);Ae>=0&&(N[Ae]=null,C[Ae].disconnect(he))}for(let pe=0;pe<Y.added.length;pe++){const he=Y.added[pe];let Ae=N.indexOf(he);if(Ae===-1){for(let Ze=0;Ze<C.length;Ze++)if(Ze>=N.length){N.push(he),Ae=Ze;break}else if(N[Ze]===null){N[Ze]=he,Ae=Ze;break}if(Ae===-1)break}const Ie=C[Ae];Ie&&Ie.connect(he)}}const ie=new Q,V=new Q;function se(Y,pe,he){ie.setFromMatrixPosition(pe.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const Ae=ie.distanceTo(V),Ie=pe.projectionMatrix.elements,Ze=he.projectionMatrix.elements,kt=Ie[14]/(Ie[10]-1),_t=Ie[14]/(Ie[10]+1),B=(Ie[9]+1)/Ie[5],At=(Ie[9]-1)/Ie[5],Je=(Ie[8]-1)/Ie[0],xt=(Ze[8]+1)/Ze[0],Ke=kt*Je,Nt=kt*xt,Oe=Ae/(-Je+xt),ut=Oe*-Je;if(pe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ut),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Vt=kt+Oe,zt=_t+Oe,D=Ke-ut,w=Nt+(Ae-ut),q=B*_t/zt*Vt,ue=At*_t/zt*Vt;Y.projectionMatrix.makePerspective(D,w,q,ue,Vt,zt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,pe){pe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let pe=Y.near,he=Y.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(he=M.depthFar)),O.near=P.near=H.near=pe,O.far=P.far=H.far=he,(le!==O.near||re!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),le=O.near,re=O.far),O.layers.mask=Y.layers.mask|6,H.layers.mask=O.layers.mask&3,P.layers.mask=O.layers.mask&5;const Ae=Y.parent,Ie=O.cameras;ne(O,Ae);for(let Ze=0;Ze<Ie.length;Ze++)ne(Ie[Ze],Ae);Ie.length===2?se(O,H,P):O.projectionMatrix.copy(H.projectionMatrix),U(Y,O,Ae)};function U(Y,pe,he){he===null?Y.matrix.copy(pe.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fm*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Y){d=Y,v!==null&&(v.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(O)},this.getCameraTexture=function(Y){return S[Y]};let te=null;function Be(Y,pe){if(p=pe.getViewerPose(h||c),E=pe,p!==null){const he=p.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let Ae=!1;he.length!==O.cameras.length&&(O.cameras.length=0,Ae=!0);for(let _t=0;_t<he.length;_t++){const B=he[_t];let At=null;if(x!==null)At=x.getViewport(B);else{const xt=g.getViewSubImage(v,B);At=xt.viewport,_t===0&&(e.setRenderTargetTextures(b,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(b))}let Je=R[_t];Je===void 0&&(Je=new di,Je.layers.enable(_t),Je.viewport=new en,R[_t]=Je),Je.matrix.fromArray(B.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(B.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(At.x,At.y,At.width,At.height),_t===0&&(O.matrix.copy(Je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ae===!0&&O.cameras.push(Je)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const _t=g.getDepthInformation(he[0]);_t&&_t.isValid&&_t.texture&&M.init(_t,o.renderState)}if(Ie&&Ie.includes("camera-access")&&(e.state.unbindTexture(),g))for(let _t=0;_t<he.length;_t++){const B=he[_t].camera;if(B){let At=S[B];At||(At=new ZT,S[B]=At);const Je=g.getCameraImage(B);At.sourceTexture=Je}}}for(let he=0;he<C.length;he++){const Ae=N[he],Ie=C[he];Ae!==null&&Ie!==void 0&&Ie.update(Ae,pe,h||c)}te&&te(Y,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),E=null}const ke=new XT;ke.setAnimationLoop(Be),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}}const Us=new _r,jF=new sn;function XF(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,VT(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,I,b,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y)):y.isMeshStandardMaterial?(a(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(a(S,y),E(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),M(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,I,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),b=I.envMap,C=I.envMapRotation;b&&(S.envMap.value=b,Us.copy(C),Us.x*=-1,Us.y*=-1,Us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),S.envMapRotation.value.setFromMatrix4(jF.makeRotationFromEuler(Us)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,I,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function $F(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(I,b){const C=b.program;i.uniformBlockBinding(I,C)}function h(I,b){let C=o[I.id];C===void 0&&(E(I),C=p(I),o[I.id]=C,I.addEventListener("dispose",S));const N=b.program;i.updateUBOMapping(I,N);const k=e.render.frame;a[I.id]!==k&&(v(I),a[I.id]=k)}function p(I){const b=g();I.__bindingPointIndex=b;const C=n.createBuffer(),N=I.__size,k=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,k),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,C),C}function g(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const b=o[I.id],C=I.uniforms,N=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let k=0,F=C.length;k<F;k++){const H=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,R=H.length;P<R;P++){const O=H[P];if(x(O,k,P,N)===!0){const le=O.__offset,re=Array.isArray(O.value)?O.value:[O.value];let ae=0;for(let fe=0;fe<re.length;fe++){const ce=re[fe],ie=M(ce);typeof ce=="number"||typeof ce=="boolean"?(O.__data[0]=ce,n.bufferSubData(n.UNIFORM_BUFFER,le+ae,O.__data)):ce.isMatrix3?(O.__data[0]=ce.elements[0],O.__data[1]=ce.elements[1],O.__data[2]=ce.elements[2],O.__data[3]=0,O.__data[4]=ce.elements[3],O.__data[5]=ce.elements[4],O.__data[6]=ce.elements[5],O.__data[7]=0,O.__data[8]=ce.elements[6],O.__data[9]=ce.elements[7],O.__data[10]=ce.elements[8],O.__data[11]=0):(ce.toArray(O.__data,ae),ae+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(I,b,C,N){const k=I.value,F=b+"_"+C;if(N[F]===void 0)return typeof k=="number"||typeof k=="boolean"?N[F]=k:N[F]=k.clone(),!0;{const H=N[F];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return N[F]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function E(I){const b=I.uniforms;let C=0;const N=16;for(let F=0,H=b.length;F<H;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let R=0,O=P.length;R<O;R++){const le=P[R],re=Array.isArray(le.value)?le.value:[le.value];for(let ae=0,fe=re.length;ae<fe;ae++){const ce=re[ae],ie=M(ce),V=C%N,se=V%ie.boundary,ne=V+se;C+=se,ne!==0&&N-ne<ie.storage&&(C+=N-ne),le.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=ie.storage}}}const k=C%N;return k>0&&(C+=N-k),I.__size=C,I.__cache={},this}function M(I){const b={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(b.boundary=4,b.storage=4):I.isVector2?(b.boundary=8,b.storage=8):I.isVector3||I.isColor?(b.boundary=16,b.storage=12):I.isVector4?(b.boundary=16,b.storage=16):I.isMatrix3?(b.boundary=48,b.storage=48):I.isMatrix4?(b.boundary=64,b.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),b}function S(I){const b=I.target;b.removeEventListener("dispose",S);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function y(){for(const I in o)n.deleteBuffer(o[I]);c=[],o={},a={}}return{bind:d,update:h,dispose:y}}class qF{constructor(e={}){const{canvas:t=I2(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const I=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=fi;let k=0,F=0,H=null,P=-1,R=null;const O=new en,le=new en;let re=null;const ae=new Rt(0);let fe=0,ce=t.width,ie=t.height,V=1,se=null,ne=null;const U=new en(0,0,ce,ie),te=new en(0,0,ce,ie);let Be=!1;const ke=new GT;let Y=!1,pe=!1;const he=new sn,Ae=new Q,Ie=new en,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function _t(){return H===null?V:1}let B=i;function At(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fg}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ye,!1),B===null){const X="webgl2";if(B=At(X,A),B===null)throw At(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Je,xt,Ke,Nt,Oe,ut,Vt,zt,D,w,q,ue,ve,oe,$e,Me,Ve,qe,Ee,De,it,je,Ce,ft;function G(){Je=new rO(B),Je.init(),je=new VF(B,Je),xt=new Z3(B,Je,e,je),Ke=new kF(B,Je),xt.reversedDepthBuffer&&v&&Ke.buffers.depth.setReversed(!0),Nt=new aO(B),Oe=new wF,ut=new BF(B,Je,Ke,Oe,xt,je,Nt),Vt=new Q3(C),zt=new iO(C),D=new hN(B),Ce=new K3(B,D),w=new sO(B,D,Nt,Ce),q=new cO(B,w,D,Nt),Ee=new lO(B,xt,ut),Me=new J3(Oe),ue=new MF(C,Vt,zt,Je,xt,Ce,Me),ve=new XF(C,Oe),oe=new CF,$e=new LF(Je),qe=new q3(C,Vt,zt,Ke,q,x,d),Ve=new OF(C,q,xt),ft=new $F(B,Nt,xt,Ke),De=new Y3(B,Je,Nt),it=new oO(B,Je,Nt),Nt.programs=ue.programs,C.capabilities=xt,C.extensions=Je,C.properties=Oe,C.renderLists=oe,C.shadowMap=Ve,C.state=Ke,C.info=Nt}G();const xe=new WF(C,B);this.xr=xe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(ce,ie,!1))},this.getSize=function(A){return A.set(ce,ie)},this.setSize=function(A,X,J=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,ie=X,t.width=Math.floor(A*V),t.height=Math.floor(X*V),J===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ce*V,ie*V).floor()},this.setDrawingBufferSize=function(A,X,J){ce=A,ie=X,V=J,t.width=Math.floor(A*J),t.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,J,ee){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,J,ee),Ke.viewport(O.copy(U).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,X,J,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,X,J,ee),Ke.scissor(le.copy(te).multiplyScalar(V).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){Ke.setScissorTest(Be=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,J=!0){let ee=0;if(A){let W=!1;if(H!==null){const Se=H.texture.format;W=Se===vg||Se===gg||Se===mg}if(W){const Se=H.texture.type,Re=Se===vr||Se===Js||Se===xl||Se===Sl||Se===hg||Se===pg,ze=qe.getClearColor(),Ne=qe.getClearAlpha(),nt=ze.r,rt=ze.g,Ye=ze.b;Re?(E[0]=nt,E[1]=rt,E[2]=Ye,E[3]=Ne,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=nt,M[1]=rt,M[2]=Ye,M[3]=Ne,B.clearBufferiv(B.COLOR,0,M))}else ee|=B.COLOR_BUFFER_BIT}X&&(ee|=B.DEPTH_BUFFER_BIT),J&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),qe.dispose(),oe.dispose(),$e.dispose(),Oe.dispose(),Vt.dispose(),zt.dispose(),q.dispose(),Ce.dispose(),ft.dispose(),ue.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",yn),xe.removeEventListener("sessionend",eo),qn.stop()};function we(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=Nt.autoReset,X=Ve.enabled,J=Ve.autoUpdate,ee=Ve.needsUpdate,W=Ve.type;G(),Nt.autoReset=A,Ve.enabled=X,Ve.autoUpdate=J,Ve.needsUpdate=ee,Ve.type=W}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){const X=A.target;X.removeEventListener("dispose",de),Ge(X)}function Ge(A){ct(A),Oe.remove(A)}function ct(A){const X=Oe.get(A).programs;X!==void 0&&(X.forEach(function(J){ue.releaseProgram(J)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,ee,W,Se){X===null&&(X=Ze);const Re=W.isMesh&&W.matrixWorld.determinant()<0,ze=Xi(A,X,J,ee,W);Ke.setMaterial(ee,Re);let Ne=J.index,nt=1;if(ee.wireframe===!0){if(Ne=w.getWireframeAttribute(J),Ne===void 0)return;nt=2}const rt=J.drawRange,Ye=J.attributes.position;let ot=rt.start*nt,Ct=(rt.start+rt.count)*nt;Se!==null&&(ot=Math.max(ot,Se.start*nt),Ct=Math.min(Ct,(Se.start+Se.count)*nt)),Ne!==null?(ot=Math.max(ot,0),Ct=Math.min(Ct,Ne.count)):Ye!=null&&(ot=Math.max(ot,0),Ct=Math.min(Ct,Ye.count));const Et=Ct-ot;if(Et<0||Et===1/0)return;Ce.setup(W,ee,ze,J,Ne);let Ut,Pt=De;if(Ne!==null&&(Ut=D.get(Ne),Pt=it,Pt.setIndex(Ut)),W.isMesh)ee.wireframe===!0?(Ke.setLineWidth(ee.wireframeLinewidth*_t()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(W.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),Ke.setLineWidth(Qe*_t()),W.isLineSegments?Pt.setMode(B.LINES):W.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else W.isPoints?Pt.setMode(B.POINTS):W.isSprite&&Pt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qe=W._multiDrawStarts,It=W._multiDrawCounts,gt=W._multiDrawCount,on=Ne?D.get(Ne).bytesPerElement:1,pi=Oe.get(ee).currentProgram.getUniforms();for(let bn=0;bn<gt;bn++)pi.setValue(B,"_gl_DrawID",bn),Pt.render(Qe[bn]/on,It[bn])}else if(W.isInstancedMesh)Pt.renderInstances(ot,Et,W.count);else if(J.isInstancedBufferGeometry){const Qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,It=Math.min(J.instanceCount,Qe);Pt.renderInstances(ot,Et,It)}else Pt.render(ot,Et)};function bt(A,X,J){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,no(A,X,J),A.side=cs,A.needsUpdate=!0,no(A,X,J),A.side=Ui):no(A,X,J)}this.compile=function(A,X,J=null){J===null&&(J=A),y=$e.get(J),y.init(X),b.push(y),J.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),A!==J&&A.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const ee=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const ze=Se[Re];bt(ze,J,W),ee.add(ze)}else bt(Se,J,W),ee.add(Se)}),y=b.pop(),ee},this.compileAsync=function(A,X,J=null){const ee=this.compile(A,X,J);return new Promise(W=>{function Se(){if(ee.forEach(function(Re){Oe.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){W(A);return}setTimeout(Se,10)}Je.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let St=null;function ti(A){St&&St(A)}function yn(){qn.stop()}function eo(){qn.start()}const qn=new XT;qn.setAnimationLoop(ti),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){St=A,xe.setAnimationLoop(A),A===null?qn.stop():qn.start()},xe.addEventListener("sessionstart",yn),xe.addEventListener("sessionend",eo),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(X),X=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,H),y=$e.get(A,b.length),y.init(X),b.push(y),he.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(he,Fi,X.reversedDepth),pe=this.localClippingEnabled,Y=Me.init(this.clippingPlanes,pe),S=oe.get(A,I.length),S.init(),I.push(S),xe.enabled===!0&&xe.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&ga(Se,X,-1/0,C.sortObjects)}ga(A,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(se,ne),kt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,kt&&qe.addToRenderList(S,A),this.info.render.frame++,Y===!0&&Me.beginShadows();const J=y.state.shadowsArray;Ve.render(J,A,X),Y===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,W=S.transmissive;if(y.setupLights(),X.isArrayCamera){const Se=X.cameras;if(W.length>0)for(let Re=0,ze=Se.length;Re<ze;Re++){const Ne=Se[Re];ps(ee,W,A,Ne)}kt&&qe.render(A);for(let Re=0,ze=Se.length;Re<ze;Re++){const Ne=Se[Re];xr(S,A,Ne,Ne.viewport)}}else W.length>0&&ps(ee,W,A,X),kt&&qe.render(A),xr(S,A,X);H!==null&&F===0&&(ut.updateMultisampleRenderTarget(H),ut.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(C,A,X),Ce.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(y=b[b.length-1],Y===!0&&Me.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function ga(A,X,J,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ee&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const Re=q.update(A),ze=A.material;ze.visible&&S.push(A,Re,ze,J,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Re=q.update(A),ze=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ie.copy(Re.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(ze)){const Ne=Re.groups;for(let nt=0,rt=Ne.length;nt<rt;nt++){const Ye=Ne[nt],ot=ze[Ye.materialIndex];ot&&ot.visible&&S.push(A,Re,ot,J,Ie.z,Ye)}}else ze.visible&&S.push(A,Re,ze,J,Ie.z,null)}}const Se=A.children;for(let Re=0,ze=Se.length;Re<ze;Re++)ga(Se[Re],X,J,ee)}function xr(A,X,J,ee){const W=A.opaque,Se=A.transmissive,Re=A.transparent;y.setupLightsView(J),Y===!0&&Me.setGlobalState(C.clippingPlanes,J),ee&&Ke.viewport(O.copy(ee)),W.length>0&&ji(W,X,J),Se.length>0&&ji(Se,X,J),Re.length>0&&ji(Re,X,J),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function ps(A,X,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new Qs(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Ll:vr,minFilter:Xs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[ee.id],Re=ee.viewport||O;Se.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const ze=C.getRenderTarget(),Ne=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Se),C.getClearColor(ae),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),kt&&qe.render(J);const rt=C.toneMapping;C.toneMapping=rs;const Ye=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),Y===!0&&Me.setGlobalState(C.clippingPlanes,ee),ji(A,J,ee),ut.updateMultisampleRenderTarget(Se),ut.updateRenderTargetMipmap(Se),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ct=0,Et=X.length;Ct<Et;Ct++){const Ut=X[Ct],Pt=Ut.object,Qe=Ut.geometry,It=Ut.material,gt=Ut.group;if(It.side===Ui&&Pt.layers.test(ee.layers)){const on=It.side;It.side=jn,It.needsUpdate=!0,to(Pt,J,ee,Qe,It,gt),It.side=on,It.needsUpdate=!0,ot=!0}}ot===!0&&(ut.updateMultisampleRenderTarget(Se),ut.updateRenderTargetMipmap(Se))}C.setRenderTarget(ze,Ne,nt),C.setClearColor(ae,fe),Ye!==void 0&&(ee.viewport=Ye),C.toneMapping=rt}function ji(A,X,J){const ee=X.isScene===!0?X.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Re=A[W],ze=Re.object,Ne=Re.geometry,nt=Re.group;let rt=Re.material;rt.allowOverride===!0&&ee!==null&&(rt=ee),ze.layers.test(J.layers)&&to(ze,X,J,Ne,rt,nt)}}function to(A,X,J,ee,W,Se){A.onBeforeRender(C,X,J,ee,W,Se),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,X,J,ee,A,Se),W.transparent===!0&&W.side===Ui&&W.forceSinglePass===!1?(W.side=jn,W.needsUpdate=!0,C.renderBufferDirect(J,X,ee,W,A,Se),W.side=cs,W.needsUpdate=!0,C.renderBufferDirect(J,X,ee,W,A,Se),W.side=Ui):C.renderBufferDirect(J,X,ee,W,A,Se),A.onAfterRender(C,X,J,ee,W,Se)}function no(A,X,J){X.isScene!==!0&&(X=Ze);const ee=Oe.get(A),W=y.state.lights,Se=y.state.shadowsArray,Re=W.state.version,ze=ue.getParameters(A,W.state,Se,X,J),Ne=ue.getProgramCacheKey(ze);let nt=ee.programs;ee.environment=A.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(A.isMeshStandardMaterial?zt:Vt).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",de),nt=new Map,ee.programs=nt);let rt=nt.get(Ne);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===Re)return Vl(A,ze),rt}else ze.uniforms=ue.getUniforms(A),A.onBeforeCompile(ze,C),rt=ue.acquireProgram(ze,Ne),nt.set(Ne,rt),ee.uniforms=ze.uniforms;const Ye=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Me.uniform),Vl(A,ze),ee.needsLights=Hl(A),ee.lightsStateVersion=Re,ee.needsLights&&(Ye.ambientLightColor.value=W.state.ambient,Ye.lightProbe.value=W.state.probe,Ye.directionalLights.value=W.state.directional,Ye.directionalLightShadows.value=W.state.directionalShadow,Ye.spotLights.value=W.state.spot,Ye.spotLightShadows.value=W.state.spotShadow,Ye.rectAreaLights.value=W.state.rectArea,Ye.ltc_1.value=W.state.rectAreaLTC1,Ye.ltc_2.value=W.state.rectAreaLTC2,Ye.pointLights.value=W.state.point,Ye.pointLightShadows.value=W.state.pointShadow,Ye.hemisphereLights.value=W.state.hemi,Ye.directionalShadowMap.value=W.state.directionalShadowMap,Ye.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ye.spotShadowMap.value=W.state.spotShadowMap,Ye.spotLightMatrix.value=W.state.spotLightMatrix,Ye.spotLightMap.value=W.state.spotLightMap,Ye.pointShadowMap.value=W.state.pointShadowMap,Ye.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=rt,ee.uniformsList=null,rt}function Bl(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Uu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Vl(A,X){const J=Oe.get(A);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Xi(A,X,J,ee,W){X.isScene!==!0&&(X=Ze),ut.resetTextureUnits();const Se=X.fog,Re=ee.isMeshStandardMaterial?X.environment:null,ze=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:aa,Ne=(ee.isMeshStandardMaterial?zt:Vt).get(ee.envMap||Re),nt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,rt=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ye=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color;let Et=rs;ee.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Et=C.toneMapping);const Ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=Ut!==void 0?Ut.length:0,Qe=Oe.get(ee),It=y.state.lights;if(Y===!0&&(pe===!0||A!==R)){const Zt=A===R&&ee.id===P;Me.setState(ee,A,Zt)}let gt=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==It.state.version||Qe.outputColorSpace!==ze||W.isBatchedMesh&&Qe.batching===!1||!W.isBatchedMesh&&Qe.batching===!0||W.isBatchedMesh&&Qe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Qe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Qe.instancing===!1||!W.isInstancedMesh&&Qe.instancing===!0||W.isSkinnedMesh&&Qe.skinning===!1||!W.isSkinnedMesh&&Qe.skinning===!0||W.isInstancedMesh&&Qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Qe.instancingMorph===!1&&W.morphTexture!==null||Qe.envMap!==Ne||ee.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Me.numPlanes||Qe.numIntersection!==Me.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==rt||Qe.morphTargets!==Ye||Qe.morphNormals!==ot||Qe.morphColors!==Ct||Qe.toneMapping!==Et||Qe.morphTargetsCount!==Pt)&&(gt=!0):(gt=!0,Qe.__version=ee.version);let on=Qe.currentProgram;gt===!0&&(on=no(ee,X,W));let pi=!1,bn=!1,ms=!1;const Ot=on.getUniforms(),Pn=Qe.uniforms;if(Ke.useProgram(on.program)&&(pi=!0,bn=!0,ms=!0),ee.id!==P&&(P=ee.id,bn=!0),pi||R!==A){Ke.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",A.projectionMatrix),Ot.setValue(B,"viewMatrix",A.matrixWorldInverse);const Sn=Ot.map.cameraPosition;Sn!==void 0&&Sn.setValue(B,Ae.setFromMatrixPosition(A.matrixWorld)),xt.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,bn=!0,ms=!0)}if(W.isSkinnedMesh){Ot.setOptional(B,W,"bindMatrix"),Ot.setOptional(B,W,"bindMatrixInverse");const Zt=W.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ot.setValue(B,"boneTexture",Zt.boneTexture,ut))}W.isBatchedMesh&&(Ot.setOptional(B,W,"batchingTexture"),Ot.setValue(B,"batchingTexture",W._matricesTexture,ut),Ot.setOptional(B,W,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",W._indirectTexture,ut),Ot.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",W._colorsTexture,ut));const xn=J.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ee.update(W,J,on),(bn||Qe.receiveShadow!==W.receiveShadow)&&(Qe.receiveShadow=W.receiveShadow,Ot.setValue(B,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Pn.envMap.value=Ne,Pn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(Pn.envMapIntensity.value=X.environmentIntensity),bn&&(Ot.setValue(B,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&zl(Pn,ms),Se&&ee.fog===!0&&ve.refreshFogUniforms(Pn,Se),ve.refreshMaterialUniforms(Pn,ee,V,ie,y.state.transmissionRenderTarget[A.id]),Uu.upload(B,Bl(Qe),Pn,ut)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Uu.upload(B,Bl(Qe),Pn,ut),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ot.setValue(B,"center",W.center),Ot.setValue(B,"modelViewMatrix",W.modelViewMatrix),Ot.setValue(B,"normalMatrix",W.normalMatrix),Ot.setValue(B,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Zt=ee.uniformsGroups;for(let Sn=0,gs=Zt.length;Sn<gs;Sn++){const vt=Zt[Sn];ft.update(vt,on),ft.bind(vt,on)}}return on}function zl(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Hl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,X,J){const ee=Oe.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Oe.get(A.texture).__webglTexture=X,Oe.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const J=Oe.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const df=B.createFramebuffer();this.setRenderTarget=function(A,X=0,J=0){H=A,k=X,F=J;let ee=!0,W=null,Se=!1,Re=!1;if(A){const Ne=Oe.get(A);if(Ne.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1;else if(Ne.__webglFramebuffer===void 0)ut.setupRenderTarget(A);else if(Ne.__hasExternalTextures)ut.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(Ne.__boundDepthTexture!==Ye){if(Ye!==null&&Oe.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const rt=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?W=rt[X][J]:W=rt[X],Se=!0):A.samples>0&&ut.useMultisampledRTT(A)===!1?W=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?W=rt[J]:W=rt,O.copy(A.viewport),le.copy(A.scissor),re=A.scissorTest}else O.copy(U).multiplyScalar(V).floor(),le.copy(te).multiplyScalar(V).floor(),re=Be;if(J!==0&&(W=df),Ke.bindFramebuffer(B.FRAMEBUFFER,W)&&ee&&Ke.drawBuffers(A,W),Ke.viewport(O),Ke.scissor(le),Ke.setScissorTest(re),Se){const Ne=Oe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,J)}else if(Re){const Ne=X;for(let nt=0;nt<A.textures.length;nt++){const rt=Oe.get(A.textures[nt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+nt,rt.__webglTexture,J,Ne)}}else if(A!==null&&J!==0){const Ne=Oe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ne.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(A,X,J,ee,W,Se,Re,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){Ke.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const nt=A.textures[ze],rt=nt.format,Ye=nt.type;if(!xt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&J>=0&&J<=A.height-W&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ze),B.readPixels(X,J,ee,W,je.convert(rt),je.convert(Ye),Se))}finally{const nt=H!==null?Oe.get(H).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,X,J,ee,W,Se,Re,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(X>=0&&X<=A.width-ee&&J>=0&&J<=A.height-W){Ke.bindFramebuffer(B.FRAMEBUFFER,Ne);const nt=A.textures[ze],rt=nt.format,Ye=nt.type;if(!xt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ze),B.readPixels(X,J,ee,W,je.convert(rt),je.convert(Ye),0);const Ct=H!==null?Oe.get(H).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Ct);const Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await D2(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(ot),B.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,J=0){const ee=Math.pow(2,-J),W=Math.floor(A.image.width*ee),Se=Math.floor(A.image.height*ee),Re=X!==null?X.x:0,ze=X!==null?X.y:0;ut.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Re,ze,W,Se),Ke.unbindTexture()};const Gl=B.createFramebuffer(),Wl=B.createFramebuffer();this.copyTextureToTexture=function(A,X,J=null,ee=null,W=0,Se=null){Se===null&&(W!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Re,ze,Ne,nt,rt,Ye,ot,Ct,Et;const Ut=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(J!==null)Re=J.max.x-J.min.x,ze=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,nt=J.min.x,rt=J.min.y,Ye=J.isBox3?J.min.z:0;else{const xn=Math.pow(2,-W);Re=Math.floor(Ut.width*xn),ze=Math.floor(Ut.height*xn),A.isDataArrayTexture?Ne=Ut.depth:A.isData3DTexture?Ne=Math.floor(Ut.depth*xn):Ne=1,nt=0,rt=0,Ye=0}ee!==null?(ot=ee.x,Ct=ee.y,Et=ee.z):(ot=0,Ct=0,Et=0);const Pt=je.convert(X.format),Qe=je.convert(X.type);let It;X.isData3DTexture?(ut.setTexture3D(X,0),It=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ut.setTexture2DArray(X,0),It=B.TEXTURE_2D_ARRAY):(ut.setTexture2D(X,0),It=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),on=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pi=B.getParameter(B.UNPACK_SKIP_PIXELS),bn=B.getParameter(B.UNPACK_SKIP_ROWS),ms=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const Ot=A.isDataArrayTexture||A.isData3DTexture,Pn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const xn=Oe.get(A),Zt=Oe.get(X),Sn=Oe.get(xn.__renderTarget),gs=Oe.get(Zt.__renderTarget);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let vt=0;vt<Ne;vt++)Ot&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(A).__webglTexture,W,Ye+vt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(X).__webglTexture,Se,Et+vt)),B.blitFramebuffer(nt,rt,Re,ze,ot,Ct,Re,ze,B.DEPTH_BUFFER_BIT,B.NEAREST);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Oe.has(A)){const xn=Oe.get(A),Zt=Oe.get(X);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,Gl),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wl);for(let Sn=0;Sn<Ne;Sn++)Ot?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xn.__webglTexture,W,Ye+Sn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xn.__webglTexture,W),Pn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,Se,Et+Sn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,Se),W!==0?B.blitFramebuffer(nt,rt,Re,ze,ot,Ct,Re,ze,B.COLOR_BUFFER_BIT,B.NEAREST):Pn?B.copyTexSubImage3D(It,Se,ot,Ct,Et+Sn,nt,rt,Re,ze):B.copyTexSubImage2D(It,Se,ot,Ct,nt,rt,Re,ze);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(It,Se,ot,Ct,Et,Re,ze,Ne,Pt,Qe,Ut.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(It,Se,ot,Ct,Et,Re,ze,Ne,Pt,Ut.data):B.texSubImage3D(It,Se,ot,Ct,Et,Re,ze,Ne,Pt,Qe,Ut):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,ot,Ct,Re,ze,Pt,Qe,Ut.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,ot,Ct,Ut.width,Ut.height,Pt,Ut.data):B.texSubImage2D(B.TEXTURE_2D,Se,ot,Ct,Re,ze,Pt,Qe,Ut);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,on),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pi),B.pixelStorei(B.UNPACK_SKIP_ROWS,bn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ms),Se===0&&X.generateMipmaps&&B.generateMipmap(It),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J=null,ee=null,W=0){return Qo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,J,ee,W)},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&ut.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ut.setTextureCube(A,0):A.isData3DTexture?ut.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ut.setTexture2DArray(A,0):ut.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){k=0,F=0,H=null,Ke.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function KF(){return be.jsxs("nav",{className:"fixed z-[100] top-[2%] w-[100%] h-[4em] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ",children:[be.jsxs("ul",{className:"flex flex-row align-middle justify-evenly text-center min-w-[75%] min-h-[100%] ",children:[be.jsx("div",{className:"relative w-[30%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ",children:be.jsx(Ws.div,{initial:{scale:1},whileTap:{scale:1.1},whileHover:{scale:.9},transition:{type:"spring",duration:1},className:"relative w-[70%] h-[80%] m-auto p-[0] bg-sky-800 rounded-md flex flex-col align-middle justify-center text-center ",children:be.jsx("li",{className:"text-2xl text-white underline underline-offset-2 ",children:be.jsx("a",{href:"#home",children:"Homepage"})})})}),be.jsx("div",{className:"relative w-[30%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ",children:be.jsx(Ws.div,{initial:{scale:1},whileTap:{scale:1.1},whileHover:{scale:.9},transition:{type:"spring",duration:1},className:"relative w-[70%] h-[80%] m-auto p-[0] bg-sky-800 rounded-md flex flex-col align-middle justify-center text-center",children:be.jsx("li",{className:"text-2xl text-white underline underline-offset-2 ",children:be.jsx("a",{href:"#about",children:"About TwoPrompt"})})})}),be.jsx("div",{className:"relative w-[30%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center  ",children:be.jsx(Ws.div,{initial:{scale:1},whileTap:{scale:1.1},whileHover:{scale:.9},transition:{type:"spring",duration:1},className:"relative w-[70%] h-[80%] m-auto p-[0] bg-sky-800 rounded-md flex flex-col align-middle justify-center text-center",children:be.jsx("li",{className:"text-2xl text-white underline underline-offset-2 ",children:be.jsx("a",{href:"#models",children:"LLMs Models List"})})})})]}),be.jsx("ul",{className:"flex flex-row align-middle justify-evenly text-center min-w-[25%] min-h-[100%]",children:be.jsx("div",{className:"relative w-[12em] h-[3em] m-auto p-[0] rounded-md flex flex-col align-middle justify-center text-center bg-sky-950 ",children:be.jsx(Ws.button,{initial:{scale:1},whileHover:{scale:1.1},whileTap:{scale:.9},transition:{type:"spring",duration:1},className:"relative cursor-pointer underline underline-offset-2 w-[100%] h-[50%] m-auto p-[0] bg-transparent text-xl text-center text-white ",children:be.jsx("a",{href:"/chats.html",children:"Start Prompting"})})})})]})}function YF({id:n}){return dt.useEffect(()=>{const e=new iN;e.background=new Rt(0);const t=new di(60,document.getElementById(n).clientWidth/document.getElementById(n).clientHeight,1,1e4);t.position.set(0,0,30);const i=new qF({canvas:document.querySelector("#"+n),antialias:!0,depth:!0});i.shadowMap.enabled=!0,i.shadowMap.type=xT,i.setPixelRatio(window.devicePixelRatio),i.setSize(document.getElementById(n).clientWidth,document.getElementById(n).clientHeight),i.render(e,t);function o(u,d,h){const p=new yg(20,5),g=new WT({color:16777215,size:.1,side:Ui}),v=new aN(p,g);v.position.set(u,d,h),v.rotation.x=90,v.name="1",e.add(v),i.render(e,t)}o(0,0,0);function a(){t.aspect=document.getElementById(n).clientWidth/document.getElementById(n).clientHeight,t.updateProjectionMatrix(),i.setSize(document.getElementById(n).clientWidth,document.getElementById(n).clientHeight),i.render(e,t)}function c(){window.addEventListener("resize",a);let u=0;n=="bg1"?(e.getObjectByName("1").position.y+=u,u>=0&&u<=5?u+=1:u-=1,e.getObjectByName("1").rotation.x+=.005):e.getObjectByName("1").rotation.y+=.005,i.render(e,t)}i.setAnimationLoop(c)}),be.jsx("canvas",{id:n,className:"relative w-[100%] h-[100%] m-auto p-[0] bg-transparent z-[97] "})}function ZF(){return be.jsxs("div",{className:"relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ",children:[be.jsx(KF,{}),be.jsxs("section",{id:"home",className:"flex flex-col align-middle justify-center text-center min-h-[90vh] min-w-[100%] h-[75vh] z-[98] ",children:[be.jsx("div",{className:"relative w-[100%] m-auto p-[0] min-h-[90vh] h-[90vh] z-[97] flex flex-row align-middle justify-center text-center bg-transparent ",children:be.jsx(YF,{id:"bg1"})}),be.jsxs("div",{className:"fixed w-[100%] h-[100vh] m-auto p-[0] bg-transparent z-[98] flex flex-col align-middle justify-center text-center ",children:[be.jsx("div",{className:"relative w-[100%] h-[65%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ",children:be.jsxs("div",{className:"relative w-[100%] h-[20em] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ",children:[be.jsx("h1",{className:"text-5xl text-white",children:"TwoPrompt - LLM Model Prompter"}),be.jsx("h1",{className:"text-3xl mt-[5%] text-white",children:"Prompt 6 Different LLMs"})]})}),be.jsx("div",{className:"relative w-[100%] h-[35%] m-auto p-[0] bg-black flex flex-row md:flex-col align-middle justify-center text-center ",children:be.jsxs("div",{className:"relative w-[100%] md:w-[45%] h-[100%] md:h-[50%] m-auto p-[0] rotate-z-[0deg] grid grid-cols-2 grid-rows-2 md:flex md:align-middle md:justify-center md:text-center gap-[30px] ",children:[be.jsx(Ws.button,{initial:{scale:1},whileHover:{scale:1.1},whileTap:{scale:.9},className:"relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all ",children:be.jsx("a",{href:"https://github.com/Jamcha123/twoPrompt",children:"The Github Repo"})}),be.jsx(Ws.button,{initial:{scale:1},whileHover:{scale:1.1},whileTap:{scale:.9},className:"relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all ",children:be.jsx("a",{href:"https://pypi.org/project/twoprompt/",children:"The Python Package"})}),be.jsx(Ws.button,{initial:{scale:1},whileHover:{scale:1.1},whileTap:{scale:.9},className:"relative w-[10em] h-[3em] m-0 ml-auto mr-auto mt-[0%] md:mb-[0%] p-[0] bg-gradient-to-tr from-emerald-800 to-lime-800 text-center text-xl text-white cursor-pointer underline underline-offset-2 hover:rounded-md duration-100 transition-all ",children:be.jsx("a",{href:"/chats.html",children:"Start Prompting"})})]})})]})]}),be.jsxs("section",{id:"about",className:"flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] bg-cyan-950 z-[99] ",children:[be.jsx("div",{className:"relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-start justify-start text-start ",children:be.jsx("h1",{className:"text-3xl text-white ml-[15%] ",children:"About TwoPrompt"})}),be.jsx("div",{className:"relative w-[100%] h-[95%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ",children:be.jsxs("div",{className:"relative w-[100%] h-[95%] m-auto p-[0] flex flex-col align-middle justify-start text-start",children:[be.jsxs("p",{className:"text-2xl text-white ml-[15%] mt-[2%] ",children:["TwoPrompt is a Python CLI tool for Prompting LLMs",be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white ml-[15%] mt-[2%]",children:["TwoPrompt has a free guest account (no login needed, 10 free prompts)",be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white ml-[15%] mt-[2%]",children:["TwoPrompt has a paid login account (login needed, unlimited prompts)",be.jsx("br",{}),"Cost is $0.02 per prompt or $1 per 50 prompts"]}),be.jsx("p",{className:"text-2xl text-white ml-[15%] mt-[2%]",children:be.jsx("code",{children:"pip install twoprompt --break-system-packages"})})]})})]}),be.jsxs("section",{id:"models",className:"flex flex-col align-middle justify-center text-center min-h-[75vh] min-w-[100%] bg-cyan-900 z-[99] ",children:[be.jsx("div",{className:"relative w-[100%] h-[5%] m-auto p-[0] bg-transparent flex flex-row align-middle text-end justify-end ",children:be.jsx("h1",{className:"text-3xl text-white mr-[15%] ",children:"LLMs Model List"})}),be.jsxs("div",{className:"relative w-[100%] h-[95%] m-auto p-[0] bg-transparent flex flex-col align-middle text-end justify-end",children:[be.jsxs("p",{className:"text-2xl text-white mr-[15%] mt-[2%] ",children:[be.jsx("code",{children:"LLM 1: Cohere-command-r-plus-08-2024"}),be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white mr-[15%] mt-[2%] ",children:[be.jsx("code",{children:"LLM 2: DeepSeek-V3-0324"}),be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white mr-[15%] mt-[2%] ",children:[be.jsx("code",{children:"LLM 3: Llama-4-Scout-17B-16E-Instruct"}),be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white mr-[15%] mt-[2%] ",children:[be.jsx("code",{children:"LLM 4: Ministral-3B"}),be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white mr-[15%] mt-[2%] ",children:[be.jsx("code",{children:"LLM 5: Phi-4-mini-instruc"}),be.jsx("br",{})]}),be.jsxs("p",{className:"text-2xl text-white mr-[15%] mt-[2%] ",children:[be.jsx("code",{children:"LLM 6: Meta-Llama-3.1-405B-Instruc4"}),be.jsx("br",{})]})]})]})]})}ub.createRoot(document.getElementById("root")).render(be.jsx(ZF,{}));
