!function(){"use strict";
/**
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
     */
/**
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
     */const t=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,c=i>>2,l=(3&i)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,s||(u=64)),r.push(n[c],n[l],n[u],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=r[t.charAt(e++)],o=e<t.length?r[t.charAt(e)]:0;++e;const a=e<t.length?r[t.charAt(e)]:64;++e;const h=e<t.length?r[t.charAt(e)]:64;if(++e,null==s||null==o||null==a||null==h)throw new n;const c=s<<2|o>>4;if(i.push(c),64!==a){const t=o<<4&240|a>>2;if(i.push(t),64!==h){const t=a<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(n){return function(n){const r=t(n);return e.encodeByteArray(r,!0)}(n).replace(/\./g,"")};
/**
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
     */
const i=()=>
/**
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
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,s=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const n=t&&function(t){try{return e.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return n&&JSON.parse(n)},o=()=>{try{return i()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||s()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},a=t=>{const e=(t=>{var e,n;return null===(n=null===(e=o())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h=()=>{var t;return null===(t=o())||void 0===t?void 0:t.config};
/**
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
     */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
     */
/**
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
     */
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function u(){return!function(){var t;const e=null===(t=o())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d(){try{return"object"==typeof indexedDB}catch(t){return!1}}class f extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(g,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new f(r,o,n)}}const g=/\{\$([^}]+)}/g;function m(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(y(n)&&y(s)){if(!m(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function y(t){return null!==t&&"object"==typeof t}
/**
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
     */function v(t){return t&&t._delegate?t._delegate:t}class w{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
     */const b="[DEFAULT]";
/**
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
     */class E{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new c;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:b})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=b){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=b){return this.instances.has(t)}getOptions(t=b){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===b?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=b){return this.component?this.component.multipleInstances?t:b:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new E(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
     */var T;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(T||(T={}));const I={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},S=T.INFO,A={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},C=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=A[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class D{constructor(t){this.name=t,this._logLevel=S,this._logHandler=C,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in T))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?I[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...t),this._logHandler(this,T.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...t),this._logHandler(this,T.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,T.INFO,...t),this._logHandler(this,T.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,T.WARN,...t),this._logHandler(this,T.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...t),this._logHandler(this,T.ERROR,...t)}}const N=(t,e)=>e.some((e=>t instanceof e));let k,x;const R=new WeakMap,O=new WeakMap,L=new WeakMap,P=new WeakMap,M=new WeakMap;let F={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return O.get(t);if("objectStoreNames"===e)return t.objectStoreNames||L.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return B(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function V(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(j(this),e),B(R.get(this))}:function(...e){return B(t.apply(j(this),e))}:function(e,...n){const r=t.call(j(this),e,...n);return L.set(r,e.sort?e.sort():[e]),B(r)}}function U(t){return"function"==typeof t?V(t):(t instanceof IDBTransaction&&function(t){if(O.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));O.set(t,e)}(t),N(t,k||(k=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,F):t)}function B(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(B(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&R.set(e,t)})).catch((()=>{})),M.set(e,t),e}(t);if(P.has(t))return P.get(t);const e=U(t);return e!==t&&(P.set(t,e),M.set(e,t)),e}const j=t=>M.get(t);const q=["get","getKey","getAll","getAllKeys","count"],z=["put","add","delete","clear"],G=new Map;function H(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(G.get(e))return G.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=z.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!q.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return G.set(e,s),s}F=(t=>({...t,get:(e,n,r)=>H(e,n)||t.get(e,n,r),has:(e,n)=>!!H(e,n)||t.has(e,n)}))(F);
/**
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
     */
class K{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Q="@firebase/app",W="0.9.26",X=new D("@firebase/app"),J="[DEFAULT]",Y={[Q]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Z=new Map,tt=new Map;function et(t,e){try{t.container.addComponent(e)}catch(n){X.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nt(t){const e=t.name;if(tt.has(e))return X.debug(`There were multiple attempts to register component ${e}.`),!1;tt.set(e,t);for(const e of Z.values())et(e,t);return!0}
/**
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
     */
const rt=new p("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
     */
class it{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new w("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}
/**
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
     */function st(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:J,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw rt.create("bad-app-name",{appName:String(i)});if(n||(n=h()),!n)throw rt.create("no-options");const s=Z.get(i);if(s){if(m(n,s.options)&&m(r,s.config))return s;throw rt.create("duplicate-app",{appName:i})}const o=new _(i);for(const t of tt.values())o.addComponent(t);const a=new it(n,r,o);return Z.set(i,a),a}function ot(t,e,n){var r;let i=null!==(r=Y[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void X.warn(t.join(" "))}nt(new w(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
     */const at="firebase-heartbeat-database",ht=1,ct="firebase-heartbeat-store";let lt=null;function ut(){return lt||(lt=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=B(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(B(o.result),t.oldVersion,t.newVersion,B(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(at,ht,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(ct)}catch(t){console.warn(t)}}}).catch((t=>{throw rt.create("idb-open",{originalErrorMessage:t.message})}))),lt}async function dt(t,e){try{const n=(await ut()).transaction(ct,"readwrite"),r=n.objectStore(ct);await r.put(e,ft(t)),await n.done}catch(t){if(t instanceof f)X.warn(t.message);else{const e=rt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});X.warn(e.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}
/**
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
     */class pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=gt(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),yt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gt(){return(new Date).toISOString().substring(0,10)}class mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!d()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await ut();return await e.transaction(ct).objectStore(ct).get(ft(t))}catch(t){if(t instanceof f)X.warn(t.message);else{const e=rt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});X.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function yt(t){return r(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
     */var vt;vt="",nt(new w("platform-logger",(t=>new K(t)),"PRIVATE")),nt(new w("heartbeat",(t=>new pt(t)),"PRIVATE")),ot(Q,W,vt),ot(Q,W,"esm2017"),ot("fire-js","");var wt,bt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Et=Et||{},_t=bt||self;function Tt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function It(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var St="closure_uid_"+(1e9*Math.random()>>>0),At=0;function Ct(t,e,n){return t.call.apply(t.bind,arguments)}function Dt(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Nt(t,e,n){return(Nt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ct:Dt).apply(null,arguments)}function kt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function xt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Rt(){this.s=this.s,this.o=this.o}Rt.prototype.s=!1,Rt.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,St)&&t[St]||(t[St]=++At))},Rt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ot=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lt(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pt(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Tt(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function Mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!_t.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};_t.addEventListener("test",t,e),_t.removeEventListener("test",t,e)}catch(t){}return t}();function Vt(t){return/^[\s\xa0]*$/.test(t)}function Ut(){var t=_t.navigator;return t&&(t=t.userAgent)?t:""}function Bt(t){return-1!=Ut().indexOf(t)}function jt(t){return jt[" "](t),t}jt[" "]=function(){};var $t,qt,zt,Gt=Bt("Opera"),Ht=Bt("Trident")||Bt("MSIE"),Kt=Bt("Edge"),Qt=Kt||Ht,Wt=Bt("Gecko")&&!(-1!=Ut().toLowerCase().indexOf("webkit")&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),Xt=-1!=Ut().toLowerCase().indexOf("webkit")&&!Bt("Edge");function Jt(){var t=_t.document;return t?t.documentMode:void 0}t:{var Yt="",Zt=(qt=Ut(),Wt?/rv:([^\);]+)(\)|;)/.exec(qt):Kt?/Edge\/([\d\.]+)/.exec(qt):Ht?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(qt):Xt?/WebKit\/(\S+)/.exec(qt):Gt?/(?:Version)[ \/]?(\S+)/.exec(qt):void 0);if(Zt&&(Yt=Zt?Zt[1]:""),Ht){var te=Jt();if(null!=te&&te>parseFloat(Yt)){$t=String(te);break t}}$t=Yt}if(_t.document&&Ht){var ee=Jt();zt=ee||(parseInt($t,10)||void 0)}else zt=void 0;var ne=zt;function re(t,e){if(Mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wt){t:{try{jt(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ie[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&re.$.h.call(this)}}xt(re,Mt);var ie={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),oe=0;function ae(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++oe,this.fa=this.ia=!1}function he(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ce(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function le(t){const e={};for(const n in t)e[n]=t[n];return e}const ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<ue.length;e++)n=ue[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fe(t){this.src=t,this.g={},this.h=0}function pe(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Ot(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(he(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ge(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}fe.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ge(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new ae(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var me="closure_lm_"+(1e6*Math.random()|0),ye={};function ve(t,e,n,r,i){if(r&&r.once)return be(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ve(t,e[s],n,r,i);return null}return n=Ce(n),t&&t[se]?t.O(e,n,It(r)?!!r.capture:!!r,i):we(t,e,n,!1,r,i)}function we(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=It(i)?!!i.capture:!!i,a=Se(t);if(a||(t[me]=a=new fe(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ie;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ft||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Te(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function be(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)be(t,e[s],n,r,i);return null}return n=Ce(n),t&&t[se]?t.P(e,n,It(r)?!!r.capture:!!r,i):we(t,e,n,!0,r,i)}function Ee(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ee(t,e[s],n,r,i);else r=It(r)?!!r.capture:!!r,n=Ce(n),t&&t[se]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ge(s=t.g[e],n,r,i))&&(he(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Se(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ge(e,n,r,i)),(n=-1<t?e[t]:null)&&_e(n))}function _e(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[se])pe(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Te(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Se(e))?(pe(n,t),0==n.h&&(n.src=null,e[me]=null)):he(t)}}}function Te(t){return t in ye?ye[t]:ye[t]="on"+t}function Ie(t,e){if(t.fa)t=!0;else{e=new re(e,this);var n=t.listener,r=t.la||t.src;t.ia&&_e(t),t=n.call(r,e)}return t}function Se(t){return(t=t[me])instanceof fe?t:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(t){return"function"==typeof t?t:(t[Ae]||(t[Ae]=function(e){return t.handleEvent(e)}),t[Ae])}function De(){Rt.call(this),this.i=new fe(this),this.S=this,this.J=null}function Ne(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new Mt(e,t);else if(e instanceof Mt)e.target=e.target||t;else{var i=e;de(e=new Mt(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ke(o,r,!0,e)&&i}if(i=ke(o=e.g=t,r,!0,e)&&i,i=ke(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=ke(o=e.g=n[s],r,!1,e)&&i}function ke(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&pe(t.i,o),i=!1!==a.call(h,r)&&i}}return i&&!r.defaultPrevented}xt(De,Rt),De.prototype[se]=!0,De.prototype.removeEventListener=function(t,e,n,r){Ee(this,t,e,n,r)},De.prototype.N=function(){if(De.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)he(n[r]);delete e.g[t],e.h--}}this.J=null},De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xe=_t.JSON.stringify;function Re(){var t=Ue;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Oe=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Le),(t=>t.reset()));class Le{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Me(t){_t.setTimeout((()=>{throw t}),0)}let Fe,Ve=!1,Ue=new class{constructor(){this.h=this.g=null}add(t,e){const n=Oe.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Be=()=>{const t=_t.Promise.resolve(void 0);Fe=()=>{t.then(je)}};var je=()=>{for(var t;t=Re();){try{t.h.call(t.g)}catch(t){Me(t)}var e=Oe;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ve=!1};function $e(t,e){De.call(this),this.h=t||1,this.g=e||_t,this.j=Nt(this.qb,this),this.l=Date.now()}function qe(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function ze(t,e,n){if("function"==typeof t)n&&(t=Nt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Nt(t.handleEvent,t)}return 2147483647<Number(e)?-1:_t.setTimeout(t,e||0)}function Ge(t){t.g=ze((()=>{t.g=null,t.i&&(t.i=!1,Ge(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}xt($e,De),(wt=$e.prototype).ga=!1,wt.T=null,wt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ne(this,"tick"),this.ga&&(qe(this),this.start()))}},wt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},wt.N=function(){$e.$.N.call(this),qe(this),delete this.g};class He extends Rt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(_t.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(t){Rt.call(this),this.h=t,this.g={}}xt(Ke,Rt);var Qe=[];function We(t,e,n,r){Array.isArray(n)||(n&&(Qe[0]=n.toString()),n=Qe);for(var i=0;i<n.length;i++){var s=ve(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xe(t){ce(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_e(t)}),t),t.g={}}function Je(){this.g=!0}function Ye(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xe(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ke.prototype.N=function(){Ke.$.N.call(this),Xe(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Ea=function(){this.g=!1},Je.prototype.info=function(){};var Ze={},tn=null;function en(){return tn=tn||new De}function nn(t){Mt.call(this,Ze.Ta,t)}function rn(t){const e=en();Ne(e,new nn(e))}function sn(t,e){Mt.call(this,Ze.STAT_EVENT,t),this.stat=e}function on(t){const e=en();Ne(e,new sn(e,t))}function an(t,e){Mt.call(this,Ze.Ua,t),this.size=e}function hn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return _t.setTimeout((function(){t()}),e)}Ze.Ta="serverreachability",xt(nn,Mt),Ze.STAT_EVENT="statevent",xt(sn,Mt),Ze.Ua="timingevent",xt(an,Mt);var cn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ln={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function un(){}function dn(t){return t.h||(t.h=t.i())}function fn(){}un.prototype.h=null;var pn,gn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mn(){Mt.call(this,"d")}function yn(){Mt.call(this,"c")}function vn(){}function wn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ke(this),this.P=En,t=Qt?125:void 0,this.V=new $e(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bn}function bn(){this.i=null,this.g="",this.h=!1}xt(mn,Mt),xt(yn,Mt),xt(vn,un),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},pn=new vn;var En=45e3,_n={},Tn={};function In(t,e,n){t.L=1,t.A=qn(Vn(e)),t.u=n,t.S=!0,Sn(t,null)}function Sn(t,e){t.G=Date.now(),Nn(t),t.B=Vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),nr(n.i,"t",r),t.o=0,n=t.l.J,t.h=new bn,t.g=ni(t.l,n?e:null,!t.u),0<t.O&&(t.M=new He(Nt(t.Pa,t,t.g),t.O)),We(t.U,t.g,"readystatechange",t.nb),e=t.I?le(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),rn(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function An(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function Cn(t,e,n){let r,i=!0;for(;!t.J&&t.o<n.length;){if(r=Dn(t,n),r==Tn){4==e&&(t.s=4,on(14),i=!1),Ye(t.j,t.m,null,"[Incomplete Response]");break}if(r==_n){t.s=4,on(15),Ye(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ye(t.j,t.m,r,null),Ln(t,r)}An(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,on(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qr(e),e.M=!0,on(11))):(Ye(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),Rn(t))}function Dn(t,e){var n=t.o,r=e.indexOf("\n",n);return-1==r?Tn:(n=Number(e.substring(n,r)),isNaN(n)?_n:(r+=1)+n>e.length?Tn:(e=e.slice(r,r+n),t.o=r+n,e))}function Nn(t){t.Y=Date.now()+t.P,kn(t,t.P)}function kn(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=hn(Nt(t.lb,t),e)}function xn(t){t.C&&(_t.clearTimeout(t.C),t.C=null)}function Rn(t){0==t.l.H||t.J||Jr(t.l,t)}function On(t){xn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,qe(t.V),Xe(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ln(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||cr(n.i,t)))if(!t.K&&cr(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Xr(n),Br(n)}Kr(n),on(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=hn(Nt(n.ib,n),6e3));if(1>=hr(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Zr(n,11)}else if((t.K||n.g==t)&&Xr(n),!Vt(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(lr(s,s.h),s.h=null))}if(r.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,$n(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=ei(r,r.J?r.pa:null,r.Y),o.K){ur(r.i,o);var a=o,h=r.L;h&&a.setTimeout(h),a.C&&(xn(a),Nn(a)),r.g=o}else Hr(r);0<n.j.length&&$r(n)}else"stop"!=c[0]&&"close"!=c[0]||Zr(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Zr(n,7):Ur(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}rn()}catch(t){}}function Pn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Tt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Tt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Tt(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(wt=wn.prototype).setTimeout=function(t){this.P=t},wt.nb=function(t){t=t.target;const e=this.M;e&&3==Or(t)?e.l():this.Pa(t)},wt.Pa=function(t){try{if(t==this.g)t:{const l=Or(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Qt||this.g&&(this.h.h||this.g.ja()||Lr(this.g)))){this.J||4!=l||7==e||rn(),xn(this);var n=this.g.da();this.ca=n;e:if(An(this)){var r=Lr(this.g);t="";var i=r.length,s=4==Or(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){On(this),Rn(this);var o="";break e}this.h.i=new _t.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vt(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.s=3,on(12),On(this),Rn(this);break t}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ln(this,n)}this.S?(Cn(this,l,o),Qt&&this.i&&3==l&&(We(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),Ln(this,o)),4==l&&On(this),this.i&&!this.J&&(4==l?Jr(this.l,this):(this.i=!1,Nn(this)))}else(function(t){const e={};t=(t.g&&2<=Or(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(Vt(t[r]))continue;var n=Pe(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,on(12)):(this.s=0,on(13)),On(this),Rn(this)}}}catch(t){}},wt.mb=function(){if(this.g){var t=Or(this.g),e=this.g.ja();this.o<e.length&&(xn(this),Cn(this,t,e),this.i&&4!=t&&Nn(this))}},wt.cancel=function(){this.J=!0,On(this)},wt.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(rn(),on(17)),On(this),this.s=2,Rn(this)):kn(this,this.Y-t)};var Mn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fn){this.h=t.h,Un(this,t.j),this.s=t.s,this.g=t.g,Bn(this,t.m),this.l=t.l;var e=t.i,n=new Yn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jn(this,n),this.o=t.o}else t&&(e=String(t).match(Mn))?(this.h=!1,Un(this,e[1]||"",!0),this.s=zn(e[2]||""),this.g=zn(e[3]||"",!0),Bn(this,e[4]),this.l=zn(e[5]||"",!0),jn(this,e[6]||"",!0),this.o=zn(e[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}function Vn(t){return new Fn(t)}function Un(t,e,n){t.j=n?zn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jn(t,e,n){e instanceof Yn?(t.i=e,function(t,e){e&&!t.j&&(Zn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(tr(this,e),nr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Gn(e,Xn)),t.i=new Yn(e,t.h))}function $n(t,e,n){t.i.set(e,n)}function qn(t){return $n(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Hn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Hn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Fn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gn(e,Kn,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Gn(e,Kn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Gn(n,"/"==n.charAt(0)?Wn:Qn,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gn(n,Jn)),t.join("")};var Kn=/[#\/\?@]/g,Qn=/[#\?:]/g,Wn=/[#\?]/g,Xn=/[#\?@]/g,Jn=/#/g;function Yn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function tr(t,e){Zn(t),e=rr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function er(t,e){return Zn(t),e=rr(t,e),t.g.has(e)}function nr(t,e,n){tr(t,e),0<n.length&&(t.i=null,t.g.set(rr(t,e),Lt(n)),t.h+=n.length)}function rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(wt=Yn.prototype).add=function(t,e){Zn(this),this.i=null,t=rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},wt.forEach=function(t,e){Zn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},wt.ta=function(){Zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},wt.Z=function(t){Zn(this);let e=[];if("string"==typeof t)er(this,t)&&(e=e.concat(this.g.get(rr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},wt.set=function(t,e){return Zn(this),this.i=null,er(this,t=rr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},wt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},wt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var ir=class{constructor(t,e){this.g=t,this.map=e}};function sr(t){this.l=t||or,_t.PerformanceNavigationTiming?t=0<(t=_t.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(_t.g&&_t.g.Ka&&_t.g.Ka()&&_t.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var or=10;function ar(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hr(t){return t.h?1:t.g?t.g.size:0}function cr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function lr(t,e){t.g?t.g.add(e):t.h=e}function ur(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function dr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Lt(t.i)}sr.prototype.cancel=function(){if(this.i=dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var fr=class{stringify(t){return _t.JSON.stringify(t,void 0)}parse(t){return _t.JSON.parse(t,void 0)}};function pr(){this.g=new fr}function gr(t,e,n){const r=n||"";try{Pn(t,(function(t,n){let i=t;It(t)&&(i=xe(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function mr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function yr(t){this.l=t.ec||null,this.j=t.ob||!1}function vr(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=wr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(yr,un),yr.prototype.g=function(){return new vr(this.l,this.j)},yr.prototype.i=function(t){return function(){return t}}({}),xt(vr,De);var wr=0;function br(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Er(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_r(t)}function _r(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(wt=vr.prototype).open=function(t,e){if(this.readyState!=wr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_r(this)},wt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||_t).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},wt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Er(this)),this.readyState=wr},wt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==_t.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;br(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},wt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Er(this):_r(this),3==this.readyState&&br(this)}},wt.Za=function(t){this.g&&(this.response=this.responseText=t,Er(this))},wt.Ya=function(t){this.g&&(this.response=t,Er(this))},wt.ka=function(){this.g&&Er(this)},wt.setRequestHeader=function(t,e){this.v.append(t,e)},wt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},wt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Tr=_t.JSON.parse;function Ir(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sr,this.L=this.M=!1}xt(Ir,De);var Sr="",Ar=/^https?$/i,Cr=["POST","PUT"];function Dr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nr(t),xr(t)}function Nr(t){t.F||(t.F=!0,Ne(t,"complete"),Ne(t,"error"))}function kr(t){if(t.h&&void 0!==Et&&(!t.C[1]||4!=Or(t)||2!=t.da()))if(t.v&&4==Or(t))ze(t.La,0,t);else if(Ne(t,"readystatechange"),4==Or(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.I).match(Mn)[1]||null;!i&&_t.self&&_t.self.location&&(i=_t.self.location.protocol.slice(0,-1)),r=!Ar.test(i?i.toLowerCase():"")}n=r}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var s=2<Or(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",Nr(t)}}finally{xr(t)}}}function xr(t,e){if(t.g){Rr(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Rr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(_t.clearTimeout(t.A),t.A=null)}function Or(t){return t.g?t.g.readyState:0}function Lr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Sr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Pr(t){let e="";return ce(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Mr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pr(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):$n(t,e,n))}function Fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vr(t){this.Ga=0,this.j=[],this.l=new Je,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fr("baseRetryDelayMs",5e3,t),this.hb=Fr("retryDelaySeedMs",1e4,t),this.eb=Fr("forwardChannelMaxRetries",2,t),this.xa=Fr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new sr(t&&t.concurrentRequestLimit),this.Ja=new pr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Ur(t){if(jr(t),3==t.H){var e=t.W++,n=Vn(t.I);if($n(n,"SID",t.K),$n(n,"RID",e),$n(n,"TYPE","terminate"),zr(t,n),(e=new wn(t,t.l,e)).L=2,e.A=qn(Vn(n)),n=!1,_t.navigator&&_t.navigator.sendBeacon)try{n=_t.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&_t.Image&&((new Image).src=e.A,n=!0),n||(e.g=ni(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Nn(e)}ti(t)}function Br(t){t.g&&(Qr(t),t.g.cancel(),t.g=null)}function jr(t){Br(t),t.u&&(_t.clearTimeout(t.u),t.u=null),Xr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&_t.clearTimeout(t.m),t.m=null)}
function $r(t){if(!ar(t.i)&&!t.m){t.m=!0;var e=t.Na;Fe||Be(),Ve||(Fe(),Ve=!0),Ue.add(e,t),t.C=0}}function qr(t,e){var n;n=e?e.m:t.W++;const r=Vn(t.I);$n(r,"SID",t.K),$n(r,"RID",n),$n(r,"AID",t.V),zr(t,r),t.o&&t.s&&Mr(r,t.o,t.s),n=new wn(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Gr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),lr(t.i,n),In(n,r,e)}function zr(t,e){t.na&&ce(t.na,(function(t,n){$n(e,n,t)})),t.h&&Pn({},(function(t,n){$n(e,n,t)}))}function Gr(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Nt(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{gr(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Hr(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fe||Be(),Ve||(Fe(),Ve=!0),Ue.add(e,t),t.A=0}}function Kr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=hn(Nt(t.Ma,t),Yr(t,t.A)),t.A++,!0)}function Qr(t){null!=t.B&&(_t.clearTimeout(t.B),t.B=null)}function Wr(t){t.g=new wn(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Vn(t.wa);$n(e,"RID","rpc"),$n(e,"SID",t.K),$n(e,"AID",t.V),$n(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$n(e,"TO",t.qa),$n(e,"TYPE","xmlhttp"),zr(t,e),t.o&&t.s&&Mr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=qn(Vn(e)),n.u=null,n.S=!0,Sn(n,t)}function Xr(t){null!=t.v&&(_t.clearTimeout(t.v),t.v=null)}function Jr(t,e){var n=null;if(t.g==e){Xr(t),Qr(t),t.g=null;var r=2}else{if(!cr(t.i,e))return;n=e.F,ur(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;Ne(r=en(),new an(r,n)),$r(t)}else Hr(t);else if(3==(i=e.s)||0==i&&0<e.ca||!(1==r&&function(t,e){return!(hr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=hn(Nt(t.Na,t,e),Yr(t,t.C)),t.C++,0)))}(t,e)||2==r&&Kr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}function Yr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zr(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=Nt(t.pb,t);n||(n=new Fn("//www.google.com/images/cleardot.gif"),_t.location&&"http"==_t.location.protocol||Un(n,"https"),qn(n)),function(t,e){const n=new Je;if(_t.Image){const r=new Image;r.onload=kt(mr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=kt(mr,n,r,"TestLoadImage: error",!1,e),r.onabort=kt(mr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=kt(mr,n,r,"TestLoadImage: timeout",!1,e),_t.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else on(2);t.H=0,t.h&&t.h.za(e),ti(t),jr(t)}function ti(t){if(t.H=0,t.ma=[],t.h){const e=dr(t.i);0==e.length&&0==t.j.length||(Pt(t.ma,e),Pt(t.ma,t.j),t.i.i.length=0,Lt(t.j),t.j.length=0),t.h.ya()}}function ei(t,e,n){var r=n instanceof Fn?Vn(n):new Fn(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Bn(r,r.m);else{var i=_t.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fn(null);r&&Un(s,r),e&&(s.g=e),i&&Bn(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&$n(r,n,e),$n(r,"VER",t.ra),zr(t,r),r}function ni(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new Ir(new yr({ob:n})):new Ir(t.va)).Oa(t.J),e}function ri(){}function ii(){if(Ht&&!(10<=Number(ne)))throw Error("Environmental error: no available transport.")}function si(t,e){De.call(this),this.g=new Vr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Vt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vt(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new hi(this)}function oi(t){mn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ai(){yn.call(this),this.status=1}function hi(t){this.g=t}function ci(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function li(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function ui(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}(wt=Ir.prototype).Oa=function(t){this.M=t},wt.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pn.g(),this.C=this.u?dn(this.u):dn(pn),this.g.onreadystatechange=Nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Dr(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=_t.FormData&&t instanceof _t.FormData,!(0<=Ot(Cr,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rr(this),0<this.B&&((this.L=function(t){return Ht&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.ua,this)):this.A=ze(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Dr(this,t)}},wt.ua=function(){void 0!==Et&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))},wt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),xr(this))},wt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xr(this,!0)),Ir.$.N.call(this)},wt.La=function(){this.s||(this.G||this.v||this.l?kr(this):this.kb())},wt.kb=function(){kr(this)},wt.isActive=function(){return!!this.g},wt.da=function(){try{return 2<Or(this)?this.g.status:-1}catch(t){return-1}},wt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},wt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Tr(e)}},wt.Ia=function(){return this.m},wt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(wt=Vr.prototype).ra=8,wt.H=1,wt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new wn(this,this.l,t);let s=this.s;if(this.U&&(s?(s=le(s),de(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Gr(this,i,e),$n(n=Vn(this.I),"RID",t),$n(n,"CVER",22),this.F&&$n(n,"X-HTTP-Session-Id",this.F),zr(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Pr(s)))+"&"+e:this.o&&Mr(n,this.o,s)),lr(this.i,i),this.bb&&$n(n,"TYPE","init"),this.P?($n(n,"$req",e),$n(n,"SID","null"),i.aa=!0,In(i,n,null)):In(i,n,e),this.H=2}}else 3==this.H&&(t?qr(this,t):0==this.j.length||ar(this.i)||qr(this))},wt.Ma=function(){if(this.u=null,Wr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=hn(Nt(this.jb,this),t)}},wt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,on(10),Br(this),Wr(this))},wt.ib=function(){null!=this.v&&(this.v=null,Br(this),Kr(this),on(19))},wt.pb=function(t){t?(this.l.info("Successfully pinged google.com"),on(2)):(this.l.info("Failed to ping google.com"),on(1))},wt.isActive=function(){return!!this.h&&this.h.isActive(this)},(wt=ri.prototype).Ba=function(){},wt.Aa=function(){},wt.za=function(){},wt.ya=function(){},wt.isActive=function(){return!0},wt.Va=function(){},ii.prototype.g=function(t,e){return new si(t,e)},xt(si,De),si.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;on(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ei(t,null,t.Y),$r(t)},si.prototype.close=function(){Ur(this.g)},si.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=xe(t),t=n);e.j.push(new ir(e.fb++,t)),3==e.H&&$r(e)},si.prototype.N=function(){this.g.h=null,delete this.j,Ur(this.g),delete this.g,si.$.N.call(this)},xt(oi,mn),xt(ai,yn),xt(hi,ri),hi.prototype.Ba=function(){Ne(this.g,"a")},hi.prototype.Aa=function(t){Ne(this.g,new oi(t))},hi.prototype.za=function(t){Ne(this.g,new ai)},hi.prototype.ya=function(){Ne(this.g,"b")},xt(ci,(function(){this.blockSize=-1})),ci.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ci.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)li(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){li(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){li(this,r),i=0;break}}this.h=i,this.i+=e},ci.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var di={};function fi(t){return-128<=t&&128>t?function(t,e){var n=di;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new ui([0|t],0>t?-1:0)})):new ui([0|t],0>t?-1:0)}function pi(t){if(isNaN(t)||!isFinite(t))return mi;if(0>t)return Ei(pi(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=gi;return new ui(e,0)}var gi=4294967296,mi=fi(0),yi=fi(1),vi=fi(16777216);function wi(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function bi(t){return-1==t.h}function Ei(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ui(n,~t.h).add(yi)}function _i(t,e){return t.add(Ei(e))}function Ti(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ii(t,e){this.g=t,this.h=e}function Si(t,e){if(wi(e))throw Error("division by zero");if(wi(t))return new Ii(mi,mi);if(bi(t))return e=Si(Ei(t),e),new Ii(Ei(e.g),Ei(e.h));if(bi(e))return e=Si(t,Ei(e)),new Ii(Ei(e.g),e.h);if(30<t.g.length){if(bi(t)||bi(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yi,r=e;0>=r.X(t);)n=Ai(n),r=Ai(r);var i=Ci(n,1),s=Ci(r,1);for(r=Ci(r,2),n=Ci(n,2);!wi(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ci(r,1),n=Ci(n,1)}return e=_i(t,i.R(e)),new Ii(i,e)}for(i=mi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=pi(n)).R(e);bi(o)||0<o.X(t);)o=(s=pi(n-=r)).R(e);wi(s)&&(s=yi),i=i.add(s),t=_i(t,o)}return new Ii(i,t)}function Ai(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ui(n,t.h)}function Ci(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ui(i,t.h)}(wt=ui.prototype).ea=function(){if(bi(this))return-Ei(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:gi+r)*e,e*=gi}return t},wt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(wi(this))return"0";if(bi(this))return"-"+Ei(this).toString(t);for(var e=pi(Math.pow(t,6)),n=this,r="";;){var i=Si(n,e).g,s=((0<(n=_i(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(wi(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},wt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},wt.X=function(t){return bi(t=_i(this,t))?-1:wi(t)?0:1},wt.abs=function(){return bi(this)?Ei(this):this},wt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ui(n,-2147483648&n[n.length-1]?-1:0)},wt.R=function(t){if(wi(this)||wi(t))return mi;if(bi(this))return bi(t)?Ei(this).R(Ei(t)):Ei(Ei(this).R(t));if(bi(t))return Ei(this.R(Ei(t)));if(0>this.X(vi)&&0>t.X(vi))return pi(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,h=65535&t.D(i);n[2*r+2*i]+=o*h,Ti(n,2*r+2*i),n[2*r+2*i+1]+=s*h,Ti(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ti(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ti(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ui(n,0)},wt.gb=function(t){return Si(this,t).h},wt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ui(n,this.h&t.h)},wt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ui(n,this.h|t.h)},wt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ui(n,this.h^t.h)},ii.prototype.createWebChannel=ii.prototype.g,si.prototype.send=si.prototype.u,si.prototype.open=si.prototype.m,si.prototype.close=si.prototype.close,cn.NO_ERROR=0,cn.TIMEOUT=8,cn.HTTP_ERROR=6,ln.COMPLETE="complete",fn.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",De.prototype.listen=De.prototype.O,Ir.prototype.listenOnce=Ir.prototype.P,Ir.prototype.getLastError=Ir.prototype.Sa,Ir.prototype.getLastErrorCode=Ir.prototype.Ia,Ir.prototype.getStatus=Ir.prototype.da,Ir.prototype.getResponseJson=Ir.prototype.Wa,Ir.prototype.getResponseText=Ir.prototype.ja,Ir.prototype.send=Ir.prototype.ha,Ir.prototype.setWithCredentials=Ir.prototype.Oa,ci.prototype.digest=ci.prototype.l,ci.prototype.reset=ci.prototype.reset,ci.prototype.update=ci.prototype.j,ui.prototype.add=ui.prototype.add,ui.prototype.multiply=ui.prototype.R,ui.prototype.modulo=ui.prototype.gb,ui.prototype.compare=ui.prototype.X,ui.prototype.toNumber=ui.prototype.ea,ui.prototype.toString=ui.prototype.toString,ui.prototype.getBits=ui.prototype.D,ui.fromNumber=pi,ui.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Ei(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=pi(Math.pow(n,8)),i=mi,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=pi(Math.pow(n,o)),i=i.R(o).add(pi(a))):i=(i=i.R(r)).add(pi(a))}return i};var Di=cn,Ni=ln,ki=Ze,xi=10,Ri=11,Oi=fn,Li=Ir,Pi=ui;const Mi="@firebase/firestore";
/**
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
     */class Fi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fi.UNAUTHENTICATED=new Fi(null),Fi.GOOGLE_CREDENTIALS=new Fi("google-credentials-uid"),Fi.FIRST_PARTY=new Fi("first-party-uid"),Fi.MOCK_USER=new Fi("mock-user");
/**
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
     */
let Vi="10.7.2";
/**
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
     */const Ui=new D("@firebase/firestore");function Bi(){return Ui.logLevel}function ji(t,...e){if(Ui.logLevel<=T.DEBUG){const n=e.map(zi);Ui.debug(`Firestore (${Vi}): ${t}`,...n)}}function $i(t,...e){if(Ui.logLevel<=T.ERROR){const n=e.map(zi);Ui.error(`Firestore (${Vi}): ${t}`,...n)}}function qi(t,...e){if(Ui.logLevel<=T.WARN){const n=e.map(zi);Ui.warn(`Firestore (${Vi}): ${t}`,...n)}}function zi(t){if("string"==typeof t)return t;try{
/**
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
     */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
     */function Gi(t="Unexpected state"){const e=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+t;throw $i(e),new Error(e)}function Hi(t,e){t||Gi()}function Ki(t,e){return t}
/**
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
     */const Qi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wi extends f{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
     */class Xi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
     */class Ji{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Fi.UNAUTHENTICATED)))}shutdown(){}}class Zi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ts{constructor(t){this.t=t,this.currentUser=Fi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xi,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{ji("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ji("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xi)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ji("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Hi("string"==typeof e.accessToken),new Ji(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Hi(null===t||"string"==typeof t),new Fi(t)}}class es{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Fi.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ns{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new es(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Fi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class is{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&ji("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,ji("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{ji("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):ji("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Hi("string"==typeof t.token),this.R=t.token,new rs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
     */function ss(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
     */class os{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=ss(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function as(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
     */class cs{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Wi(Qi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Wi(Qi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Wi(Qi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Wi(Qi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return cs.fromMillis(Date.now())}static fromDate(t){return cs.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new cs(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?as(this.nanoseconds,t.nanoseconds):as(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
     */class ls{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ls(t)}static min(){return new ls(new cs(0,0))}static max(){return new ls(new cs(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
     */class us{constructor(t,e,n){void 0===e?e=0:e>t.length&&Gi(),void 0===n?n=t.length-e:n>t.length-e&&Gi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===us.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof us?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ds extends us{construct(t,e,n){return new ds(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Wi(Qi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ds(e)}static emptyPath(){return new ds([])}}const fs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ps extends us{construct(t,e,n){return new ps(t,e,n)}static isValidIdentifier(t){return fs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ps.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ps(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Wi(Qi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Wi(Qi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Wi(Qi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Wi(Qi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ps(e)}static emptyPath(){return new ps([])}}
/**
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
     */class gs{constructor(t){this.path=t}static fromPath(t){return new gs(ds.fromString(t))}static fromName(t){return new gs(ds.fromString(t).popFirst(5))}static empty(){return new gs(ds.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ds.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ds.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new gs(new ds(t.slice()))}}function ms(t){return new ys(t.readTime,t.key,-1)}class ys{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ys(ls.min(),gs.empty(),-1)}static max(){return new ys(ls.max(),gs.empty(),-1)}}function vs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=gs.comparator(t.documentKey,e.documentKey),0!==n?n:as(t.largestBatchId,e.largestBatchId))}
/**
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
     */const ws="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
     */async function Es(t){if(t.code!==Qi.FAILED_PRECONDITION||t.message!==ws)throw t;ji("LocalStore","Unexpectedly lost primary lease")}
/**
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
     */class _s{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Gi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new _s(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof _s?e:_s.resolve(e)}catch(t){return _s.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):_s.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):_s.reject(e)}static resolve(t){return new _s(((e,n)=>{e(t)}))}static reject(t){return new _s(((e,n)=>{n(t)}))}static waitFor(t){return new _s(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=_s.resolve(!1);for(const n of t)e=e.next((t=>t?_s.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new _s(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const h=a;e(t[h]).next((t=>{s[h]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new _s(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
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
     */class Ts{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Xi,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new As(t,e.error)):this.V.resolve()},this.transaction.onerror=e=>{const n=xs(e.target.error);this.V.reject(new As(t,n))}}static open(t,e,n,r){try{return new Ts(e,t.transaction(r,n))}catch(t){throw new As(e,t)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(ji("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ds(e)}}class Is{constructor(t,e,n){this.name=t,this.version=e,this.p=n,12.2===Is.S(l())&&$i("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return ji("SimpleDb","Removing database:",t),Ns(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!d())return!1;if(Is.C())return!0;const t=l(),e=Is.S(t),n=0<e&&e<10,r=Is.v(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static C(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.__PRIVATE_env)||void 0===t?void 0:t.F)}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(t){return this.db||(ji("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new As(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new Wi(Qi.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Wi(Qi.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new As(t,r))},r.onupgradeneeded=t=>{ji("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.p.N(e,r.transaction,t.oldVersion,this.version).next((()=>{ji("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.O(t);const e=Ts.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).next((t=>(e.g(),t))).catch((t=>(e.abort(t),_s.reject(t)))).toPromise();return s.catch((()=>{})),await e.m,s}catch(t){const e=t,n="FirebaseError"!==e.name&&s<3;if(ji("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ss{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ns(this.k.delete())}}class As extends Wi{constructor(t,e){super(Qi.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Cs(t){return"IndexedDbTransactionError"===t.name}class Ds{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(ji("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(ji("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ns(n)}add(t){return ji("SimpleDb","ADD",this.store.name,t,t),Ns(this.store.add(t))}get(t){return Ns(this.store.get(t)).next((e=>(void 0===e&&(e=null),ji("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return ji("SimpleDb","DELETE",this.store.name,t),Ns(this.store.delete(t))}count(){return ji("SimpleDb","COUNT",this.store.name),Ns(this.store.count())}W(t,e){const n=this.options(t,e),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const t=r.getAll(n.range);return new _s(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}{const t=this.cursor(n),e=[];return this.G(t,((t,n)=>{e.push(n)})).next((()=>e))}}j(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new _s(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}H(t,e){ji("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.J=!1;const r=this.cursor(n);return this.G(r,((t,e,n)=>n.delete()))}Y(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.G(r,e)}Z(t){const e=this.cursor({});return new _s(((n,r)=>{e.onerror=t=>{const e=xs(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next((t=>{t?r.continue():n()})):n()}}))}G(t,e){const n=[];return new _s(((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new Ss(i),o=e(i.primaryKey,i.value,s);if(o instanceof _s){const t=o.catch((t=>(s.done(),_s.reject(t))));n.push(t)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>_s.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.J?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ns(t){return new _s(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=xs(t.target.error);n(e)}}))}let ks=!1;function xs(t){const e=Is.S(l());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new Wi("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ks||(ks=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
     * @license
     * Copyright 2018 Google LLC
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
     */class Rs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Os(t){return null==t}function Ls(t){return 0===t&&1/t==-1/0}
/**
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
     */
function Ps(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
     */Rs._e=-1;class Vs{constructor(t,e){this.comparator=t,this.root=e||Bs.EMPTY}insert(t,e){return new Vs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bs.BLACK,null,null))}remove(t){return new Vs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Us(this.root,t,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Us(this.root,t,this.comparator,!0)}}class Us{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bs{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Bs.RED,this.left=null!=r?r:Bs.EMPTY,this.right=null!=i?i:Bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Bs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Bs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Bs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gi();if(this.right.isRed())throw Gi();const t=this.left.check();if(t!==this.right.check())throw Gi();return t+(this.isRed()?0:1)}}Bs.EMPTY=null,Bs.RED=!0,Bs.BLACK=!1,Bs.EMPTY=new class{constructor(){this.size=0}get key(){throw Gi()}get value(){throw Gi()}get color(){throw Gi()}get left(){throw Gi()}get right(){throw Gi()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Bs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
     */
class js{constructor(t){this.comparator=t,this.data=new Vs(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $s(this.data.getIterator())}getIteratorFrom(t){return new $s(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof js))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new js(this.comparator);return e.data=t,e}}class $s{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
     */class qs{constructor(t){this.fields=t,t.sort(ps.comparator)}static empty(){return new qs([])}unionWith(t){let e=new js(ps.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new qs(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
     */class zs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
     */class Gs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new zs("Invalid base64 string: "+t):t}}(t);return new Gs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Gs(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return as(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gs.EMPTY_BYTE_STRING=new Gs("");const Hs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ks(t){if(Hi(!!t),"string"==typeof t){let e=0;const n=Hs.exec(t);if(Hi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qs(t.seconds),nanos:Qs(t.nanos)}}function Qs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ws(t){return"string"==typeof t?Gs.fromBase64String(t):Gs.fromUint8Array(t)}
/**
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
     */function Xs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Js(t){const e=t.mapValue.fields.__previous_value__;return Xs(e)?Js(e):e}function Ys(t){const e=Ks(t.mapValue.fields.__local_write_time__.timestampValue);return new cs(e.seconds,e.nanos)}
/**
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
     */class Zs{constructor(t,e,n,r,i,s,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class to{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof to&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
     */const eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function no(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xs(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
     */(t)?9007199254740991:10:Gi()}function ro(t,e){if(t===e)return!0;const n=no(t);if(n!==no(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ks(t.timestampValue),r=Ks(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ws(t.bytesValue).isEqual(Ws(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Qs(t.geoPointValue.latitude)===Qs(e.geoPointValue.latitude)&&Qs(t.geoPointValue.longitude)===Qs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Qs(t.integerValue)===Qs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Qs(t.doubleValue),r=Qs(e.doubleValue);return n===r?Ls(n)===Ls(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],ro);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ps(n)!==Ps(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!ro(n[t],r[t])))return!1;return!0}(t,e);default:return Gi()}}function io(t,e){return void 0!==(t.values||[]).find((t=>ro(t,e)))}function so(t,e){if(t===e)return 0;const n=no(t),r=no(e);if(n!==r)return as(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return as(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Qs(t.integerValue||t.doubleValue),r=Qs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return oo(t.timestampValue,e.timestampValue);case 4:return oo(Ys(t),Ys(e));case 5:return as(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ws(t),r=Ws(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=as(n[t],r[t]);if(0!==e)return e}return as(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=as(Qs(t.latitude),Qs(e.latitude));return 0!==n?n:as(Qs(t.longitude),Qs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=so(n[t],r[t]);if(e)return e}return as(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===eo.mapValue&&e===eo.mapValue)return 0;if(t===eo.mapValue)return 1;if(e===eo.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=as(r[t],s[t]);if(0!==e)return e;const o=so(n[r[t]],i[s[t]]);if(0!==o)return o}return as(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Gi()}}function oo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return as(t,e);const n=Ks(t),r=Ks(e),i=as(n.seconds,r.seconds);return 0!==i?i:as(n.nanos,r.nanos)}function ao(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ks(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ws(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return gs.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ho(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ho(t.fields[i])}`;return n+"}"}(t.mapValue):Gi()}function co(t){return!!t&&"integerValue"in t}function lo(t){return!!t&&"arrayValue"in t}function uo(t){return!!t&&"mapValue"in t}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class po{constructor(t){this.value=t}static empty(){return new po({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!uo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fo(e)}setAll(t){let e=ps.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=fo(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());uo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ro(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];uo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ms(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new po(fo(this.value))}}function go(t){const e=[];return Ms(t.fields,((t,n)=>{const r=new ps([t]);if(uo(n)){const t=go(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new qs(e)
/**
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
     */}class mo{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new mo(t,0,ls.min(),ls.min(),ls.min(),po.empty(),0)}static newFoundDocument(t,e,n,r){return new mo(t,1,e,ls.min(),n,r,0)}static newNoDocument(t,e){return new mo(t,2,e,ls.min(),ls.min(),po.empty(),0)}static newUnknownDocument(t,e){return new mo(t,3,e,ls.min(),ls.min(),po.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ls.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=po.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=po.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ls.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof mo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
     */class yo{constructor(t,e){this.position=t,this.inclusive=e}}function vo(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?gs.comparator(gs.fromName(o.referenceValue),n.key):so(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function wo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ro(t.position[n],e.position[n]))return!1;return!0}
/**
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
     */class bo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Eo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
     */class _o{}class To extends _o{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ko(t,e,n):"array-contains"===e?new Lo(t,n):"in"===e?new Po(t,n):"not-in"===e?new Mo(t,n):"array-contains-any"===e?new Fo(t,n):new To(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new xo(t,n):new Ro(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(so(e,this.value)):null!==e&&no(this.value)===no(e)&&this.matchesComparison(so(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Gi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Io extends _o{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Io(t,e)}matches(t){return So(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function So(t){return"and"===t.op}function Ao(t){return function(t){for(const e of t.filters)if(e instanceof Io)return!1;return!0}(t)&&So(t)}function Co(t){if(t instanceof To)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(Ao(t))return t.filters.map((t=>Co(t))).join(",");{const e=t.filters.map((t=>Co(t))).join(",");return`${t.op}(${e})`}}function Do(t,e){return t instanceof To?function(t,e){return e instanceof To&&t.op===e.op&&t.field.isEqual(e.field)&&ro(t.value,e.value)}(t,e):t instanceof Io?function(t,e){return e instanceof Io&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Do(n,e.filters[r])),!0)}(t,e):void Gi()}function No(t){return t instanceof To?function(t){return`${t.field.canonicalString()} ${t.op} ${ao(t.value)}`}(t):t instanceof Io?function(t){return t.op.toString()+" {"+t.getFilters().map(No).join(" ,")+"}"}(t):"Filter"}class ko extends To{constructor(t,e,n){super(t,e,n),this.key=gs.fromName(n.referenceValue)}matches(t){const e=gs.comparator(t.key,this.key);return this.matchesComparison(e)}}class xo extends To{constructor(t,e){super(t,"in",e),this.keys=Oo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ro extends To{constructor(t,e){super(t,"not-in",e),this.keys=Oo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Oo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>gs.fromName(t.referenceValue)))}class Lo extends To{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lo(e)&&io(e.arrayValue,this.value)}}class Po extends To{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&io(this.value.arrayValue,e)}}class Mo extends To{constructor(t,e){super(t,"not-in",e)}matches(t){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!io(this.value.arrayValue,e)}}class Fo extends To{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>io(this.value.arrayValue,t)))}}
/**
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
     */class Vo{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function Uo(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Vo(t,e,n,r,i,s,o)}function Bo(t){const e=Ki(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Co(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ao(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ao(t))).join(",")),e.ce=t}return e.ce}function jo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Eo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Do(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wo(t.startAt,e.startAt)&&wo(t.endAt,e.endAt)}
/**
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
     */class $o{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function qo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function zo(t){const e=Ki(t);if(null===e.le){e.le=[];const t=new Set;for(const n of e.explicitOrderBy)e.le.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new js(ps.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new bo(r,n))})),t.has(ps.keyField().canonicalString())||e.le.push(new bo(ps.keyField(),n))}return e.le}function Go(t){const e=Ki(t);return e.he||(e.he=function(t,e){if("F"===t.limitType)return Uo(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new bo(t.field,e)}));const n=t.endAt?new yo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yo(t.startAt.position,t.startAt.inclusive):null;return Uo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,zo(t))),e.he}function Ho(t,e,n){return new $o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ko(t,e){return jo(Go(t),Go(e))&&t.limitType===e.limitType}function Qo(t){return`${Bo(Go(t))}|lt:${t.limitType}`}function Wo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>No(t))).join(", ")}]`),Os(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ao(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ao(t))).join(",")),`Target(${e})`}(Go(t))}; limitType=${t.limitType})`}function Xo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):gs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of zo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=vo(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,zo(t),e))&&!(t.endAt&&!function(t,e,n){const r=vo(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,zo(t),e))}(t,e)}function Jo(t,e,n){const r=t.field.isKeyField()?gs.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?so(r,i):Gi()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Gi()}}
/**
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
     */class Yo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ms(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return Fs(this.inner)}size(){return this.innerSize}}
/**
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
     */const Zo=new Vs(gs.comparator);function ta(){return Zo}const ea=new Vs(gs.comparator);function na(...t){let e=ea;for(const n of t)e=e.insert(n.key,n);return e}function ra(t){let e=ea;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ia(){return oa()}function sa(){return oa()}function oa(){return new Yo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const aa=new Vs(gs.comparator),ha=new js(gs.comparator);function ca(...t){let e=ha;for(const n of t)e=e.add(n);return e}const la=new js(as);
/**
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
     */
function ua(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function da(t){return{integerValue:""+t}}function fa(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Ls(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?da(e):ua(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
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
     */class pa{constructor(){this._=void 0}}function ga(t,e,n){return t instanceof va?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Xs(e)&&(e=Js(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof wa?ba(t,e):t instanceof Ea?_a(t,e):function(t,e){const n=ya(t,e),r=Ia(n)+Ia(t.Ie);return co(n)&&co(t.Ie)?da(r):ua(t.serializer,r)}(t,e)}function ma(t,e,n){return t instanceof wa?ba(t,e):t instanceof Ea?_a(t,e):n}function ya(t,e){return t instanceof Ta?function(t){return co(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class va extends pa{}class wa extends pa{constructor(t){super(),this.elements=t}}function ba(t,e){const n=Sa(e);for(const e of t.elements)n.some((t=>ro(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ea extends pa{constructor(t){super(),this.elements=t}}function _a(t,e){let n=Sa(e);for(const e of t.elements)n=n.filter((t=>!ro(t,e)));return{arrayValue:{values:n}}}class Ta extends pa{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ia(t){return Qs(t.integerValue||t.doubleValue)}function Sa(t){return lo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
     */class Aa{constructor(t,e){this.field=t,this.transform=e}}class Ca{constructor(t,e){this.version=t,this.transformResults=e}}class Da{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Da}static exists(t){return new Da(void 0,t)}static updateTime(t){return new Da(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Na(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ka{}function xa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ja(t.key,Da.none()):new Ma(t.key,t.data,Da.none());{const n=t.data,r=po.empty();let i=new js(ps.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Fa(t.key,r,new qs(i.toArray()),Da.none())}}function Ra(t,e,n){t instanceof Ma?function(t,e,n){const r=t.value.clone(),i=Ua(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Fa?function(t,e,n){if(!Na(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ua(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Va(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Oa(t,e,n,r){return t instanceof Ma?function(t,e,n,r){if(!Na(t.precondition,e))return n;const i=t.value.clone(),s=Ba(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fa?function(t,e,n,r){if(!Na(t.precondition,e))return n;const i=Ba(t.fieldTransforms,r,e),s=e.data;return s.setAll(Va(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Na(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function La(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ya(r.transform,t||null);null!=i&&(null===n&&(n=po.empty()),n.set(r.field,i))}return n||null}function Pa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hs(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof wa&&e instanceof wa||t instanceof Ea&&e instanceof Ea?hs(t.elements,e.elements,ro):t instanceof Ta&&e instanceof Ta?ro(t.Ie,e.Ie):t instanceof va&&e instanceof va}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends ka{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fa extends ka{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Va(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ua(t,e,n){const r=new Map;Hi(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ma(o,a,n[i]))}return r}function Ba(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ga(t,s,e))}return r}class ja extends ka{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $a extends ka{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
     */class qa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Ra(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Oa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Oa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sa();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=xa(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ls.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ca())}isEqual(t){return this.batchId===t.batchId&&hs(this.mutations,t.mutations,((t,e)=>Pa(t,e)))&&hs(this.baseMutations,t.baseMutations,((t,e)=>Pa(t,e)))}}class za{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Hi(t.mutations.length===n.length);let r=aa;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new za(t,e,n,r)}}
/**
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
     */class Ga{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
     */var Ha,Ka;(Ka=Ha||(Ha={}))[Ka.OK=0]="OK",Ka[Ka.CANCELLED=1]="CANCELLED",Ka[Ka.UNKNOWN=2]="UNKNOWN",Ka[Ka.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ka[Ka.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ka[Ka.NOT_FOUND=5]="NOT_FOUND",Ka[Ka.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ka[Ka.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ka[Ka.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ka[Ka.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ka[Ka.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ka[Ka.ABORTED=10]="ABORTED",Ka[Ka.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ka[Ka.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ka[Ka.INTERNAL=13]="INTERNAL",Ka[Ka.UNAVAILABLE=14]="UNAVAILABLE",Ka[Ka.DATA_LOSS=15]="DATA_LOSS",
/**
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
     */
new Pi([4294967295,4294967295],0);class Qa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ja(t,e){return Wa(t,e.toTimestamp())}function Ya(t){return Hi(!!t),ls.fromTimestamp(function(t){const e=Ks(t);return new cs(e.seconds,e.nanos)}(t))}function Za(t,e){return th(t,e).canonicalString()}function th(t,e){const n=function(t){return new ds(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function eh(t,e){return Za(t.databaseId,e.path)}function nh(t){const e=function(t){const e=ds.fromString(t);return Hi(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
     */(e)),e}(t);return 4===e.length?ds.emptyPath():function(t){return Hi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function rh(t,e,n){return{name:eh(t,e),fields:n.value.mapValue.fields}}function ih(t){let e=nh(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Hi(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=sh(t);return e instanceof Io&&Ao(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new bo(oh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Os(e)?null:e}(n.limit));let h=null;n.startAt&&(h=function(t){const e=!!t.before,n=t.values||[];return new yo(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new yo(n,e)}(n.endAt)),function(t,e,n,r,i,s,o,a){return new $o(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",h,c)}function sh(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=oh(t.unaryFilter.field);return To.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=oh(t.unaryFilter.field);return To.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=oh(t.unaryFilter.field);return To.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=oh(t.unaryFilter.field);return To.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gi()}}(t):void 0!==t.fieldFilter?function(t){return To.create(oh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gi()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Io.create(t.compositeFilter.filters.map((t=>sh(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Gi()}}(t.compositeFilter.op))}(t):Gi()}function oh(t){return ps.fromServerFormat(t.fieldPath)}function ah(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class hh{constructor(t){this.ct=t}}function ch(t){const e=ih({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ho(e,e.limit,"L"):e}
/**
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
     */class lh{constructor(){this._n=new uh}addToCollectionParentIndex(t,e){return this._n.add(e),_s.resolve()}getCollectionParents(t,e){return _s.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return _s.resolve()}deleteFieldIndex(t,e){return _s.resolve()}deleteAllFieldIndexes(t){return _s.resolve()}createTargetIndexes(t,e){return _s.resolve()}getDocumentsMatchingTarget(t,e){return _s.resolve(null)}getIndexType(t,e){return _s.resolve(0)}getFieldIndexes(t,e){return _s.resolve([])}getNextCollectionGroupToUpdate(t){return _s.resolve(null)}getMinOffset(t,e){return _s.resolve(ys.min())}getMinOffsetFromCollectionGroup(t,e){return _s.resolve(ys.min())}updateCollectionGroup(t,e,n){return _s.resolve()}updateIndexEntries(t,e){return _s.resolve()}}class uh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new js(ds.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new js(ds.comparator)).toArray()}}
/**
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
     */class dh{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new dh(0)}static Bn(){return new dh(-1)}}
/**
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
     */class fh{constructor(){this.changes=new Yo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?_s.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
     */
/**
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
     */class ph{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
     */class gh{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Oa(n.mutation,t,qs.empty(),cs.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ca()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ca()){const r=ia();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=na();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ia();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ca())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=ta();const s=oa(),o=oa();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Fa)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Oa(o.mutation,e,o.mutation.getFieldMask(),cs.now())):s.set(e.key,qs.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ph(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=oa();let r=new Vs(((t,e)=>t-e)),i=ca();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||qs.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ca()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,h=r.value,c=sa();h.forEach((t=>{if(!i.has(t)){const r=xa(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return _s.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return gs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):_s.resolve(ia());let o=-1,a=i;return s.next((e=>_s.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?_s.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ca()))).next((t=>({batchId:o,changes:ra(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new gs(e)).next((t=>{let e=na();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=na();return this.indexManager.getCollectionParents(t,i).next((o=>_s.forEach(o,(o=>{const a=function(t,e){return new $o(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,mo.newInvalidDocument(r)))}));let n=na();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Oa(s.mutation,r,qs.empty(),cs.now()),Xo(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
     */class mh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return _s.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ya(t.createTime)}}(e)),_s.resolve()}getNamedQuery(t,e){return _s.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:ch(t.bundledQuery),readTime:Ya(t.readTime)}}(e)),_s.resolve()}}
/**
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
     */class yh{constructor(){this.overlays=new Vs(gs.comparator),this.hr=new Map}getOverlay(t,e){return _s.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ia();return _s.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),_s.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),_s.resolve()}getOverlaysForCollection(t,e,n){const r=ia(),i=e.length+1,s=new gs(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return _s.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Vs(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ia(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ia(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return _s.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ga(e,n));let i=this.hr.get(e);void 0===i&&(i=ca(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}
/**
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
     */class vh{constructor(){this.Pr=new js(wh.Ir),this.Tr=new js(wh.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new wh(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new wh(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new gs(new ds([])),n=new wh(e,t),r=new wh(e,t+1),i=[];return this.Tr.forEachInRange([n,r],(t=>{this.Ar(t),i.push(t.key)})),i}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new gs(new ds([])),n=new wh(e,t),r=new wh(e,t+1);let i=ca();return this.Tr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new wh(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class wh{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return gs.comparator(t.key,e.key)||as(t.pr,e.pr)}static Er(t,e){return as(t.pr,e.pr)||gs.comparator(t.key,e.key)}}
/**
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
     */class bh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new js(wh.Ir)}checkEmpty(t){return _s.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qa(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.wr=this.wr.add(new wh(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return _s.resolve(s)}lookupMutationBatch(t,e){return _s.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.br(n),i=r<0?0:r;return _s.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _s.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return _s.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new wh(e,0),r=new wh(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(t=>{const e=this.Sr(t.pr);i.push(e)})),_s.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new js(as);return e.forEach((t=>{const e=new wh(t,0),r=new wh(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,r],(t=>{n=n.add(t.pr)}))})),_s.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;gs.isDocumentKey(i)||(i=i.child(""));const s=new wh(new gs(i),0);let o=new js(as);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.pr)),!0)}),s),_s.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Hi(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return _s.forEach(e.mutations,(r=>{const i=new wh(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new wh(e,0),r=this.wr.firstAfterOrEqual(n);return _s.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,_s.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
     */class Eh{constructor(t){this.vr=t,this.docs=new Vs(gs.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return _s.resolve(n?n.document.mutableCopy():mo.newInvalidDocument(e))}getEntries(t,e){let n=ta();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():mo.newInvalidDocument(t))})),_s.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=ta();const s=e.path,o=new gs(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||vs(ms(o),n)<=0||(r.has(o.key)||Xo(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return _s.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Gi()}Fr(t,e){return _s.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new _h(this)}getSize(t){return _s.resolve(this.size)}}class _h extends fh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.ar.addEntry(t,r)):this.ar.removeEntry(n)})),_s.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
/**
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
     */class Th{constructor(t){this.persistence=t,this.Mr=new Yo((t=>Bo(t)),jo),this.lastRemoteSnapshotVersion=ls.min(),this.highestTargetId=0,this.Or=0,this.Nr=new vh,this.targetCount=0,this.Br=dh.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),_s.resolve()}getLastRemoteSnapshotVersion(t){return _s.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _s.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_s.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),_s.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new dh(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,_s.resolve()}updateTargetData(t,e){return this.qn(e),_s.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,_s.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),_s.waitFor(i).next((()=>r))}getTargetCount(t){return _s.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return _s.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),_s.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),_s.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),_s.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return _s.resolve(n)}containsKey(t,e){return _s.resolve(this.Nr.containsKey(e))}}
/**
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
     */class Ih{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Rs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Th(this),this.indexManager=new lh,this.remoteDocumentCache=function(t){return new Eh(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new hh(e),this.$r=new mh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new bh(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){ji("MemoryPersistence","Starting transaction:",t);const r=new Sh(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((t=>this.referenceDelegate.Wr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gr(t,e){return _s.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class Sh extends bs{constructor(t){super(),this.currentSequenceNumber=t}}class Ah{constructor(t){this.persistence=t,this.zr=new vh,this.jr=null}static Hr(t){return new Ah(t)}get Jr(){if(this.jr)return this.jr;throw Gi()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),_s.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),_s.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),_s.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _s.forEach(this.Jr,(n=>{const r=gs.fromPath(n);return this.Yr(t,r).next((t=>{t||e.removeEntry(r,ls.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return _s.or([()=>_s.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
/**
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
     */class Ch{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=r}static Ki(t,e){let n=ca(),r=ca();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Ch(t,e.fromCache,n,r)}}
/**
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
     */class Dh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
     */class Nh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=u()?8:Is.v(l())>0?6:4}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.ji(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Hi(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Dh;return this.Ji(t,e,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(t,e,n,r.size)}))})).next((()=>i.result))}Yi(t,e,n,r){return n.documentReadCount<this.Wi?(Bi()<=T.DEBUG&&ji("QueryEngine","SDK will not create cache indexes for query:",Wo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_s.resolve()):(Bi()<=T.DEBUG&&ji("QueryEngine","Query:",Wo(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(Bi()<=T.DEBUG&&ji("QueryEngine","The SDK decides to create cache indexes for query:",Wo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Go(e))):_s.resolve())}ji(t,e){if(qo(e))return _s.resolve(null);let n=Go(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ho(e,null,"F"),n=Go(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ca(...r);return this.zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,r);return this.Xi(e,s,i,n.readTime)?this.ji(t,Ho(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,r){return qo(e)||r.isEqual(ls.min())?_s.resolve(null):this.zi.getDocuments(t,n).next((i=>{const s=this.Zi(e,i);return this.Xi(e,s,n,r)?_s.resolve(null):(Bi()<=T.DEBUG&&ji("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wo(e)),this.es(t,s,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ls.fromTimestamp(1e9===r?new cs(n+1,0):new cs(n,r));return new ys(i,gs.empty(),e)}(r,-1)).next((t=>t)))}))}Zi(t,e){let n=new js(function(t){return(e,n)=>{let r=!1;for(const i of zo(t)){const t=Jo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}(t));return e.forEach(((e,r)=>{Xo(t,r)&&(n=n.add(r))})),n}Xi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(t,e,n){return Bi()<=T.DEBUG&&ji("QueryEngine","Using full collection scan to execute query:",Wo(e)),this.zi.getDocumentsMatchingQuery(t,e,ys.min(),n)}es(t,e,n,r){return this.zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
     */class kh{constructor(t,e,n,r){this.persistence=t,this.ts=e,this.serializer=r,this.ns=new Vs(as),this.rs=new Yo((t=>Bo(t)),jo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function xh(t,e){const n=Ki(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=ca();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Rh(t,e){const n=Ki(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Oh{constructor(){this.activeTargetIds=la}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lh{constructor(){this.no=new Oh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Oh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
     */class Ph{io(t){}shutdown(){}}
/**
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
     */class Mh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ji("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){ji("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
     */let Fh=null;function Vh(){return null===Fh?Fh=268435456+Math.round(2147483648*Math.random()):Fh++,"0x"+Fh.toString(16)
/**
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
     */}const Uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
     */class Bh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
/**
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
     */const jh="WebChannelConnection";class $h extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(t,e,n,r,i){const s=Vh(),o=this.bo(t,e.toUriEncodedString());ji("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(t,o,a,n).then((e=>(ji("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw qi("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,r,i,s){return this.So(t,e,n,r,i)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Uh[t];return`${this.fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,r){const i=Vh();return new Promise(((s,o)=>{const a=new Li;a.setWithCredentials(!0),a.listenOnce(Ni.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Di.NO_ERROR:const e=a.getResponseJson();ji(jh,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Di.TIMEOUT:ji(jh,`RPC '${t}' ${i} timed out`),o(new Wi(Qi.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const n=a.getStatus();if(ji(jh,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qi).indexOf(e)>=0?e:Qi.UNKNOWN}(e.status);o(new Wi(t,e.message))}else o(new Wi(Qi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Wi(Qi.UNAVAILABLE,"Connection failed."));break;default:Gi()}}finally{ji(jh,`RPC '${t}' ${i} completed.`)}}));const h=JSON.stringify(r);ji(jh,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",h,n,15)}))}Fo(t,e,n){const r=Vh(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new ii,o=en(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");ji(jh,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let u=!1,d=!1;const f=new Bh({lo:e=>{d?ji(jh,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(u||(ji(jh,`Opening RPC '${t}' stream ${r} transport.`),l.open(),u=!0),ji(jh,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},ho:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Oi.EventType.OPEN,(()=>{d||ji(jh,`RPC '${t}' stream ${r} transport opened.`)})),p(l,Oi.EventType.CLOSE,(()=>{d||(d=!0,ji(jh,`RPC '${t}' stream ${r} transport closed`),f.Vo())})),p(l,Oi.EventType.ERROR,(e=>{d||(d=!0,qi(jh,`RPC '${t}' stream ${r} transport errored:`,e),f.Vo(new Wi(Qi.UNAVAILABLE,"The operation could not be completed")))})),p(l,Oi.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];Hi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ji(jh,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Ha[t];if(void 0!==e)return function(t){if(void 0===t)return $i("GRPC error has no .code"),Qi.UNKNOWN;switch(t){case Ha.OK:return Qi.OK;case Ha.CANCELLED:return Qi.CANCELLED;case Ha.UNKNOWN:return Qi.UNKNOWN;case Ha.DEADLINE_EXCEEDED:return Qi.DEADLINE_EXCEEDED;case Ha.RESOURCE_EXHAUSTED:return Qi.RESOURCE_EXHAUSTED;case Ha.INTERNAL:return Qi.INTERNAL;case Ha.UNAVAILABLE:return Qi.UNAVAILABLE;case Ha.UNAUTHENTICATED:return Qi.UNAUTHENTICATED;case Ha.INVALID_ARGUMENT:return Qi.INVALID_ARGUMENT;case Ha.NOT_FOUND:return Qi.NOT_FOUND;case Ha.ALREADY_EXISTS:return Qi.ALREADY_EXISTS;case Ha.PERMISSION_DENIED:return Qi.PERMISSION_DENIED;case Ha.FAILED_PRECONDITION:return Qi.FAILED_PRECONDITION;case Ha.ABORTED:return Qi.ABORTED;case Ha.OUT_OF_RANGE:return Qi.OUT_OF_RANGE;case Ha.UNIMPLEMENTED:return Qi.UNIMPLEMENTED;case Ha.DATA_LOSS:return Qi.DATA_LOSS;default:return Gi()}}(e)}(e),i=o.message;void 0===n&&(n=Qi.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Vo(new Wi(n,i)),l.close()}else ji(jh,`RPC '${t}' stream ${r} received:`,i),f.mo(i)}})),p(o,ki.STAT_EVENT,(e=>{e.stat===xi?ji(jh,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Ri&&ji(jh,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}function qh(){return"undefined"!=typeof document?document:null}
/**
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
     */function zh(t){return new Qa(t,!0)}
/**
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
     */class Gh{constructor(t,e,n=1e3,r=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,e-n);r>0&&ji("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
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
     */class Hh{constructor(t,e,n,r,i,s,o,a){this.oi=t,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Gh(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===Qi.RESOURCE_EXHAUSTED?($i(e.toString()),$i("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===Qi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new Wi(Qi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return ji("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(ji("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Kh extends Hh{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(Hi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?(Hi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ya(t.updateTime):Ya(e);return n.isEqual(ls.min())&&(n=Ya(e)),new Ca(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Ya(t.commitTime);return this.listener.T_(n,e)}return Hi(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=function(t){return new ds(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Ma)n={update:rh(t,e.key,e.value)};else if(e instanceof ja)n={delete:eh(t,e.key)};else if(e instanceof Fa)n={update:rh(t,e.key,e.data),updateMask:ah(e.fieldMask)};else{if(!(e instanceof $a))return Gi();n={verify:eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof va)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ea)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ta)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw Gi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ja(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Gi()}(t,e.precondition)),n}(this.serializer,t)))};this.t_(e)}}
/**
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
     */class Qh extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new Wi(Qi.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(t,th(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Wi(Qi.UNKNOWN,t.toString())}))}vo(t,e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(t,th(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Wi(Qi.UNKNOWN,t.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class Wh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?($i(e),this.g_=!1):ji("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
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
     */class Xh{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((t=>{n.enqueueAndForget((async()=>{Zh(this)&&(ji("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ki(t);e.v_.add(4),await Yh(e),e.x_.set("Unknown"),e.v_.delete(4),await Jh(e)}(this))}))})),this.x_=new Wh(n,r)}}async function Jh(t){if(Zh(t))for(const e of t.F_)await e(!0)}async function Yh(t){for(const e of t.F_)await e(!1)}function Zh(t){return 0===Ki(t).v_.size}async function tc(t,e,n){if(!Cs(e))throw e;t.v_.add(1),await Yh(t),t.x_.set("Offline"),n||(n=()=>function(t){const e=Ki(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ji("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Jh(t)}))}function ec(t,e){return e().catch((n=>tc(t,n,e)))}async function nc(t){const e=Ki(t),n=dc(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;rc(e);)try{const t=await Rh(e.localStore,r);if(null===t){0===e.D_.length&&n.Xo();break}r=t.batchId,ic(e,t)}catch(t){await tc(e,t)}sc(e)&&oc(e)}function rc(t){return Zh(t)&&t.D_.length<10}function ic(t,e){t.D_.push(e);const n=dc(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function sc(t){return Zh(t)&&!dc(t).Ho()&&t.D_.length>0}function oc(t){dc(t).start()}async function ac(t){dc(t).d_()}async function hc(t){const e=dc(t);for(const n of t.D_)e.I_(n.mutations)}async function cc(t,e,n){const r=t.D_.shift(),i=za.from(r,e,n);await ec(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await nc(t)}async function lc(t,e){e&&dc(t).P_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return Gi();case Qi.CANCELLED:case Qi.UNKNOWN:case Qi.DEADLINE_EXCEEDED:case Qi.RESOURCE_EXHAUSTED:case Qi.INTERNAL:case Qi.UNAVAILABLE:case Qi.UNAUTHENTICATED:return!1;case Qi.INVALID_ARGUMENT:case Qi.NOT_FOUND:case Qi.ALREADY_EXISTS:case Qi.PERMISSION_DENIED:case Qi.FAILED_PRECONDITION:case Qi.ABORTED:case Qi.OUT_OF_RANGE:case Qi.UNIMPLEMENTED:case Qi.DATA_LOSS:return!0}}(t)&&t!==Qi.ABORTED}(e.code)){const n=t.D_.shift();dc(t).Zo(),await ec(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await nc(t)}}(t,e),sc(t)&&oc(t)}async function uc(t,e){const n=Ki(t);n.asyncQueue.verifyOperationInProgress(),ji("RemoteStore","RemoteStore received new credentials");const r=Zh(n);n.v_.add(3),await Yh(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Jh(n)}function dc(t){return t.B_||(t.B_=function(t,e,n){const r=Ki(t);return r.R_(),new Kh(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Po:ac.bind(null,t),To:lc.bind(null,t),E_:hc.bind(null,t),T_:cc.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await nc(t)):(await t.B_.stop(),t.D_.length>0&&(ji("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
/**
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
     */}class fc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new fc(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Wi(Qi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pc(t,e){if($i("AsyncQueue",`${e}: ${t}`),Cs(t))return new Wi(Qi.UNAVAILABLE,`${e}: ${t}`);throw t}class gc{constructor(){this.queries=new Yo((t=>Qo(t)),Ko),this.onlineState="Unknown",this.K_=new Set}}class mc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Yo((t=>Qo(t)),Ko),this.pa=new Map,this.ya=new Set,this.wa=new Vs(gs.comparator),this.Sa=new Map,this.ba=new vh,this.Da={},this.Ca=new Map,this.va=dh.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function yc(t,e,n){const r=function(t){const e=Ki(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bc.bind(null,e),e}(t);try{const t=await function(t,e){const n=Ki(t),r=cs.now(),i=e.reduce(((t,e)=>t.add(e.key)),ca());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ta(),h=ca();return n.os.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(h=h.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=La(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Fa(t.key,e,go(e.value.mapValue),Da.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,h);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ra(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Da[t.currentUser.toKey()];r||(r=new Vs(as)),r=r.insert(e,n),t.Da[t.currentUser.toKey()]=r}(r,t.batchId,n),await Tc(r,t.changes),await nc(r.remoteStore)}catch(t){const e=pc(t,"Failed to persist write");n.reject(e)}}function vc(t,e,n){const r=Ki(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ki(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.Q_)t.U_(e)&&(r=!0)})),r&&function(t){t.K_.forEach((t=>{t.next()}))}(n)}(r.eventManager,e),t.length&&r.fa.u_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wc(t,e){const n=Ki(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Ki(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=_s.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Hi(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ca();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);_c(n,r,null),Ec(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tc(n,t)}catch(t){await Es(t)}}async function bc(t,e,n){const r=Ki(t);try{const t=await function(t,e){const n=Ki(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Hi(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);_c(r,e,n),Ec(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tc(r,t)}catch(n){await Es(n)}}function Ec(t,e){(t.Ca.get(e)||[]).forEach((t=>{t.resolve()})),t.Ca.delete(e)}function _c(t,e,n){const r=Ki(t);let i=r.Da[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}async function Tc(t,e,n){const r=Ki(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((t,a)=>{o.push(r.Ma(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Ch.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.fa.u_(i),await async function(t,e){const n=Ki(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>_s.forEach(e,(e=>_s.forEach(e.qi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>_s.forEach(e.Qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Cs(t))throw t;ji("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(e,i)}}}(r.localStore,s))}async function Ic(t,e){const n=Ki(t);if(!n.currentUser.isEqual(e)){ji("SyncEngine","User change. New user:",e.toKey());const t=await xh(n.localStore,e);n.currentUser=e,function(t,e){t.Ca.forEach((t=>{t.forEach((t=>{t.reject(new Wi(Qi.CANCELLED,e))}))})),t.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Tc(n,t.us)}}class Sc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=zh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,r){return new kh(t,e,n,r)}(this.persistence,new Nh,t.initialUser,this.serializer)}createPersistence(t){return new Ih(Ah.Hr,this.serializer)}createSharedClientState(t){return new Lh}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ac{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>vc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ic.bind(null,this.syncEngine),await async function(t,e){const n=Ki(t);e?(n.v_.delete(2),await Jh(n)):e||(n.v_.add(2),await Yh(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gc}createDatastore(t){const e=zh(t.databaseInfo.databaseId),n=function(t){return new $h(t)}(t.databaseInfo);return function(t,e,n,r){return new Qh(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Xh(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>vc(this.syncEngine,t,0)),Mh.D()?new Mh:new Ph)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new mc(t,e,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(t){const e=Ki(t);ji("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Yh(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate()}}
/**
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
     */class Cc{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Fi.UNAUTHENTICATED,this.clientId=os.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ji("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ji("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wi(Qi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=pc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),ji("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await xh(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ji("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===Qi.FAILED_PRECONDITION||t.code===Qi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new Sc)}}else ji("FirestoreClient","Using default OfflineComponentProvider"),await Dc(t,new Sc);return t._offlineComponents}(t);ji("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>uc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>uc(e.remoteStore,n))),t._onlineComponents=e}function kc(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ji("FirestoreClient","Using user provided OnlineComponentProvider"),await Nc(t,t._uninitializedComponentsProvider._online)):(ji("FirestoreClient","Using default OnlineComponentProvider"),await Nc(t,new Ac))),t._onlineComponents}(t).then((t=>t.syncEngine))}
/**
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
     */function xc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
     */}const Rc=new Map;
/**
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
     */function Oc(t,e,n){if(!n)throw new Wi(Qi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lc(t){if(!gs.isDocumentKey(t))throw new Wi(Qi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pc(t){if(gs.isDocumentKey(t))throw new Wi(Qi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Gi()}function Fc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Wi(Qi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new Wi(Qi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
     */class Vc{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Wi(Qi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Wi(Qi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Wi(Qi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xc(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Wi(Qi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Wi(Qi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Wi(Qi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Uc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Wi(Qi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Wi(Qi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Yi;switch(t.type){case"firstParty":return new ns(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Wi(Qi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Rc.get(t);e&&(ji("ComponentProvider","Removing Datastore"),Rc.delete(t),e.terminate())}(this),Promise.resolve()}}function Bc(t,e,n,i={}){var s;const o=(t=Fc(t,Uc))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Fi.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[r(JSON.stringify({alg:"none",type:"JWT"})),r(JSON.stringify(o)),""].join(".")}(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new Wi(Qi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Fi(o)}t._authCredentials=new Zi(new Ji(e,n))}}
/**
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
     */class jc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new jc(this.firestore,t,this._query)}}class $c{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $c(this.firestore,t,this._key)}}class qc extends jc{constructor(t,e,n){super(t,e,function(t){return new $o(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $c(this.firestore,null,new gs(t))}withConverter(t){return new qc(this.firestore,t,this._path)}}
/**
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
     */
class zc{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Gh(this,"async_queue_retry"),this._u=()=>{const t=qh();t&&ji("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=qh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=qh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise((()=>{}));const e=new Xi;return this.uu((()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.eu.push(t),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Cs(t))throw t;ji("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(t){const e=this.Xa.then((()=>(this.iu=!0,t().catch((t=>{this.ru=t,this.iu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
     */(t);throw $i("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.iu=!1,t))))));return this.Xa=e,e}enqueueAfterDelay(t,e,n){this.au(),this.ou.indexOf(t)>-1&&(e=0);const r=fc.createAndSchedule(this,t,e,n,(t=>this.lu(t)));return this.nu.push(r),r}au(){this.ru&&Gi()}verifyOperationInProgress(){}async hu(){let t;do{t=this.Xa,await t}while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then((()=>{this.nu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.nu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.hu()}))}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class Gc extends Uc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new zc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hc(this),this._firestoreClient.terminate()}}function Hc(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new Zs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,xc(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Cc(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
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
     */class Kc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kc(Gs.fromBase64String(t))}catch(t){throw new Wi(Qi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Kc(Gs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
     */class Qc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Wi(Qi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ps(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
     */class Wc{constructor(t){this._methodName=t}}
/**
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
     */class Xc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Wi(Qi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Wi(Qi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return as(this._lat,t._lat)||as(this._long,t._long)}}
/**
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
     */const Jc=/^__.*__$/;class Yc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Fa(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ma(t,this.data,e,this.fieldTransforms)}}function Zc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gi()}}class tl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new tl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Au({path:n,Vu:!1});return r.mu(t),r}fu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Au({path:n,Vu:!1});return r.Eu(),r}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return ul(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(0===t.length)throw this.pu("Document fields must not be empty");if(Zc(this.du)&&Jc.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class el{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||zh(t)}Su(t,e,n,r=!1){return new tl({du:t,methodName:e,wu:n,path:ps.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nl(t){const e=t._freezeSettings(),n=zh(t._databaseId);return new el(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rl(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);hl("Data must be an object, but it was:",o,r);const a=ol(r,o);let h,c;if(s.merge)h=new qs(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=cl(e,r,n);if(!o.contains(i))throw new Wi(Qi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);dl(t,i)||t.push(i)}h=new qs(t),c=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,c=o.fieldTransforms;return new Yc(new po(a),h,c)}class il extends Wc{_toFieldTransform(t){return new Aa(t.path,new va)}isEqual(t){return t instanceof il}}function sl(t,e){if(al(t=v(t)))return hl("Unsupported field value:",e,t),ol(t,e);if(t instanceof Wc)return function(t,e){if(!Zc(e.du))throw e.pu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.pu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&4!==e.du)throw e.pu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=sl(i,e.gu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=v(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fa(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=cs.fromDate(t);return{timestampValue:Wa(e.serializer,n)}}if(t instanceof cs){const n=new cs(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wa(e.serializer,n)}}if(t instanceof Xc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Kc)return{bytesValue:Xa(e.serializer,t._byteString)};if(t instanceof $c){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.pu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Za(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.pu(`Unsupported field value: ${Mc(t)}`)}(t,e)}function ol(t,e){const n={};return Fs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,((t,r)=>{const i=sl(r,e.Ru(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function al(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof cs||t instanceof Xc||t instanceof Kc||t instanceof $c||t instanceof Wc)}function hl(t,e,n){if(!al(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Mc(n);throw"an object"===r?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function cl(t,e,n){if((e=v(e))instanceof Qc)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(ll)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qc(...e.split("."))._internalPath}catch(r){throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const ll=new RegExp("[~\\*/\\[\\]]");function ul(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(s||o)&&(h+=" (found",s&&(h+=` in field ${r}`),o&&(h+=` in document ${i}`),h+=")"),new Wi(Qi.INVALID_ARGUMENT,a+t+h)}function dl(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
     */function fl(t,e){const n=Fc(t.firestore,Gc),r=function(t,e,...n){if(t=v(t),1===arguments.length&&(e=os.newId()),Oc("doc","path",e),t instanceof Uc){const r=ds.fromString(e,...n);return Lc(r),new $c(t,null,new gs(r))}{if(!(t instanceof $c||t instanceof qc))throw new Wi(Qi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ds.fromString(e,...n));return Lc(r),new $c(t.firestore,t instanceof qc?t.converter:null,new gs(r))}}(t),i=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t.converter,e);return function(t,e){return function(t,e){const n=new Xi;return t.asyncQueue.enqueueAndForget((async()=>yc(await kc(t),e,n))),n.promise}(function(t){return t._firestoreClient||Hc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[rl(nl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Da.exists(!1))]).then((()=>r))}!function(t,e=!0){!function(t){Vi=t}("10.7.2"),nt(new w("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Gc(new ts(t.getProvider("auth-internal")),new is(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Wi(Qi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),ot(Mi,"4.4.1",t),ot(Mi,"4.4.1","esm2017")}();
/**
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
     */
ot("firebase","10.7.2","app");st({apiKey:"AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",authDomain:"howardlucas-7fcb0.firebaseapp.com",projectId:"howardlucas-7fcb0",storageBucket:"howardlucas-7fcb0.appspot.com",messagingSenderId:"945745527827",appId:"1:945745527827:web:3e282534ecdd22c66eabe6",measurementId:"G-QEE9Y648VB"});const pl=function(t,e){const n="object"==typeof t?t:function(t=J){const e=Z.get(t);if(!e&&t===J&&h())return st();if(!e)throw rt.create("no-app",{appName:t});return e}(),r="string"==typeof t?t:e||"(default)",i=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=a("firestore");t&&Bc(i,...t)}return i}(),gl=function(t,e,...n){if(t=v(t),Oc("collection","path",e),t instanceof Uc){const r=ds.fromString(e,...n);return Pc(r),new qc(t,null,r)}{if(!(t instanceof $c||t instanceof qc))throw new Wi(Qi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ds.fromString(e,...n));return Pc(r),new qc(t.firestore,null,r)}}(pl,"contacts"),ml=document.querySelector(".contact-form"),yl=document.querySelector(".feedback");ml.addEventListener("submit",(t=>{t.preventDefault(),fl(gl,{name:ml.name.value,email:ml.email.value,message:ml.message.value,createdAt:new il("serverTimestamp")}).then((()=>{yl.style.display="block",setTimeout((()=>{yl.style.display="none",ml.reset()}),3e3)}))}))}();