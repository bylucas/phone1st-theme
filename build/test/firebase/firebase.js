!function(){"use strict";function t(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}const e=43200,n=1440;let r={};function i(){return r}function s(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function o(e,n){const r=t(e),i=t(n),s=r.getTime()-i.getTime();return s<0?-1:s>0?1:s}function a(e){const n=t(e);return+function(e){const n=t(e);return n.setHours(23,59,59,999),n}(n)==+function(e){const n=t(e),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}(n)}function c(e,n){const r=t(e),i=t(n),s=o(r,i),c=Math.abs(function(e,n){const r=t(e),i=t(n);return 12*(r.getFullYear()-i.getFullYear())+(r.getMonth()-i.getMonth())}(r,i));let u;if(c<1)u=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-s*c);let n=o(r,i)===-s;a(t(e))&&1===c&&1===o(e,i)&&(n=!1),u=s*(c-Number(n))}return 0===u?0:u}function u(e,n,r){const i=function(e,n){return t(e).getTime()-t(n).getTime()}(e,n)/1e3;return(s=r?.roundingMethod,s?Math[s]:Math.trunc)(i);var s}const h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const d={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,i=n?.width?String(n.width):e;r=t.formattingValues[i]||t.formattingValues[e]}else{const e=t.defaultWidth,i=n?.width?String(n.width):t.defaultWidth;r=t.values[i]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function m(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(a,(t=>t.test(o))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(a,(t=>t.test(o)));let u;u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;return{value:u,rest:e.slice(o.length)}}}var p;const y={code:"en-US",formatDistance:(t,e,n)=>{let r;const i=h[t];return r="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:d,formatRelative:(t,e,n,r)=>f[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(p.matchPattern);if(!n)return null;const r=n[0],i=t.match(p.parsePattern);if(!i)return null;let s=p.valueCallback?p.valueCallback(i[0]):i[0];return s=e.valueCallback?e.valueCallback(s):s,{value:s,rest:t.slice(r.length)}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(r,a){return function(r,a,h){const l=i(),d=h?.locale??l.locale??y,f=o(r,a);if(isNaN(f))throw new RangeError("Invalid time value");const g=Object.assign({},h,{addSuffix:h?.addSuffix,comparison:f});let m,p;f>0?(m=t(a),p=t(r)):(m=t(r),p=t(a));const v=u(p,m),w=(s(p)-s(m))/1e3,b=Math.round((v-w)/60);let _;if(b<2)return h?.includeSeconds?v<5?d.formatDistance("lessThanXSeconds",5,g):v<10?d.formatDistance("lessThanXSeconds",10,g):v<20?d.formatDistance("lessThanXSeconds",20,g):v<40?d.formatDistance("halfAMinute",0,g):v<60?d.formatDistance("lessThanXMinutes",1,g):d.formatDistance("xMinutes",1,g):0===b?d.formatDistance("lessThanXMinutes",1,g):d.formatDistance("xMinutes",b,g);if(b<45)return d.formatDistance("xMinutes",b,g);if(b<90)return d.formatDistance("aboutXHours",1,g);if(b<n){const t=Math.round(b/60);return d.formatDistance("aboutXHours",t,g)}if(b<2520)return d.formatDistance("xDays",1,g);if(b<e){const t=Math.round(b/n);return d.formatDistance("xDays",t,g)}if(b<2*e)return _=Math.round(b/e),d.formatDistance("aboutXMonths",_,g);if(_=c(p,m),_<12){const t=Math.round(b/e);return d.formatDistance("xMonths",t,g)}{const t=_%12,e=Math.floor(_/12);return t<3?d.formatDistance("aboutXYears",e,g):t<9?d.formatDistance("overXYears",e,g):d.formatDistance("almostXYears",e+1,g)}}(r,Date.now(),a)}
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
   */const w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},b={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw new _;const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E=function(t){return function(t){const e=w(t);return b.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const T=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,I=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return b.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},S=()=>{try{return T()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||I()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},C=t=>{const e=(t=>{var e,n;return null===(n=null===(e=S())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},A=()=>{var t;return null===(t=S())||void 0===t?void 0:t.config};
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
class D{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
   */class k extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(M,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new k(r,o,n)}}const M=/\{\$([^}]+)}/g;function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(R(n)&&R(s)){if(!x(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function R(t){return null!==t&&"object"==typeof t}
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
   */function O(t){return t&&t._delegate?t._delegate:t}class L{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
   */const P="[DEFAULT]";
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
   */class F{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new D;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
   */(t))try{this.getOrInitializeService({instanceIdentifier:P})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=P){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=P){return this.instances.has(t)}getOptions(t=P){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===P?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=P){return this.component?this.component.multipleInstances?t:P:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class V{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new F(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
   */var U;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(U||(U={}));const B={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},j=U.INFO,q={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},z=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=q[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class G{constructor(t){this.name=t,this._logLevel=j,this._logHandler=z,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?B[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const K=(t,e)=>e.some((e=>t instanceof e));let H,W;const Q=new WeakMap,X=new WeakMap,Y=new WeakMap,J=new WeakMap,Z=new WeakMap;let tt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return X.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Y.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function et(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(W||(W=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(it(this),e),rt(Q.get(this))}:function(...e){return rt(t.apply(it(this),e))}:function(e,...n){const r=t.call(it(this),e,...n);return Y.set(r,e.sort?e.sort():[e]),rt(r)}}function nt(t){return"function"==typeof t?et(t):(t instanceof IDBTransaction&&function(t){if(X.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));X.set(t,e)}(t),K(t,H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,tt):t)}function rt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(rt(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Q.set(e,t)})).catch((()=>{})),Z.set(e,t),e}(t);if(J.has(t))return J.get(t);const e=nt(t);return e!==t&&(J.set(t,e),Z.set(e,t)),e}const it=t=>Z.get(t);const st=["get","getKey","getAll","getAllKeys","count"],ot=["put","add","delete","clear"],at=new Map;function ct(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(at.get(e))return at.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ot.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!st.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return at.set(e,s),s}tt=(t=>({...t,get:(e,n,r)=>ct(e,n)||t.get(e,n,r),has:(e,n)=>!!ct(e,n)||t.has(e,n)}))(tt);
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
class ut{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ht="@firebase/app",lt="0.9.25",dt=new G("@firebase/app"),ft="[DEFAULT]",gt={[ht]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},mt=new Map,pt=new Map;function yt(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vt(t){const e=t.name;if(pt.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;pt.set(e,t);for(const e of mt.values())yt(e,t);return!0}
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
const wt=new N("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class bt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new L("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}
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
   */function _t(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:ft,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=A()),!n)throw wt.create("no-options");const s=mt.get(i);if(s){if(x(n,s.options)&&x(r,s.config))return s;throw wt.create("duplicate-app",{appName:i})}const o=new V(i);for(const t of pt.values())o.addComponent(t);const a=new bt(n,r,o);return mt.set(i,a),a}function Et(t,e,n){var r;let i=null!==(r=gt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void dt.warn(t.join(" "))}vt(new L(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
   */const Tt="firebase-heartbeat-database",It=1,St="firebase-heartbeat-store";let Ct=null;function At(){return Ct||(Ct=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=rt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(rt(o.result),t.oldVersion,t.newVersion,rt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(Tt,It,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(St)}}).catch((t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function Dt(t,e){try{const n=(await At()).transaction(St,"readwrite"),r=n.objectStore(St);await r.put(e,kt(t)),await n.done}catch(t){if(t instanceof k)dt.warn(t.message);else{const e=wt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});dt.warn(e.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
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
   */class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Mt(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Rt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=E(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mt(){return(new Date).toISOString().substring(0,10)}class xt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await At();return await e.transaction(St).objectStore(St).get(kt(t))}catch(t){if(t instanceof k)dt.warn(t.message);else{const e=wt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});dt.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Rt(t){return E(JSON.stringify({version:2,heartbeats:t})).length}
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
   */var Ot;Ot="",vt(new L("platform-logger",(t=>new ut(t)),"PRIVATE")),vt(new L("heartbeat",(t=>new Nt(t)),"PRIVATE")),Et(ht,lt,Ot),Et(ht,lt,"esm2017"),Et("fire-js","");var Lt,Pt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ft=Ft||{},Vt=Pt||self;function Ut(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Bt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var jt="closure_uid_"+(1e9*Math.random()>>>0),qt=0;function $t(t,e,n){return t.call.apply(t.bind,arguments)}function zt(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Gt(t,e,n){return(Gt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?$t:zt).apply(null,arguments)}function Kt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ht(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Wt(){this.s=this.s,this.o=this.o}Wt.prototype.s=!1,Wt.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,jt)&&t[jt]||(t[jt]=++qt))},Wt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Xt(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yt(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Ut(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function Jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Jt.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!Vt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};Vt.addEventListener("test",t,e),Vt.removeEventListener("test",t,e)}catch(t){}return t}();function te(t){return/^[\s\xa0]*$/.test(t)}function ee(){var t=Vt.navigator;return t&&(t=t.userAgent)?t:""}function ne(t){return-1!=ee().indexOf(t)}function re(t){return re[" "](t),t}re[" "]=function(){};var ie,se,oe,ae=ne("Opera"),ce=ne("Trident")||ne("MSIE"),ue=ne("Edge"),he=ue||ce,le=ne("Gecko")&&!(-1!=ee().toLowerCase().indexOf("webkit")&&!ne("Edge"))&&!(ne("Trident")||ne("MSIE"))&&!ne("Edge"),de=-1!=ee().toLowerCase().indexOf("webkit")&&!ne("Edge");function fe(){var t=Vt.document;return t?t.documentMode:void 0}t:{var ge="",me=(se=ee(),le?/rv:([^\);]+)(\)|;)/.exec(se):ue?/Edge\/([\d\.]+)/.exec(se):ce?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(se):de?/WebKit\/(\S+)/.exec(se):ae?/(?:Version)[ \/]?(\S+)/.exec(se):void 0);if(me&&(ge=me?me[1]:""),ce){var pe=fe();if(null!=pe&&pe>parseFloat(ge)){ie=String(pe);break t}}ie=ge}if(Vt.document&&ce){var ye=fe();oe=ye||(parseInt(ie,10)||void 0)}else oe=void 0;var ve=oe;function we(t,e){if(Jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(le){t:{try{re(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:be[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&we.$.h.call(this)}}Ht(we,Jt);var be={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),Ee=0;function Te(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Ee,this.fa=this.ia=!1}function Ie(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Se(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ce(t){const e={};for(const n in t)e[n]=t[n];return e}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function De(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<Ae.length;e++)n=Ae[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ke(t){this.src=t,this.g={},this.h=0}function Ne(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Qt(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ie(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Me(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}ke.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Me(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Te(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var xe="closure_lm_"+(1e6*Math.random()|0),Re={};function Oe(t,e,n,r,i){if(r&&r.once)return Pe(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Oe(t,e[s],n,r,i);return null}return n=$e(n),t&&t[_e]?t.O(e,n,Bt(r)?!!r.capture:!!r,i):Le(t,e,n,!1,r,i)}function Le(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Bt(i)?!!i.capture:!!i,a=je(t);if(a||(t[xe]=a=new ke(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Be;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Zt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ue(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Pe(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Pe(t,e[s],n,r,i);return null}return n=$e(n),t&&t[_e]?t.P(e,n,Bt(r)?!!r.capture:!!r,i):Le(t,e,n,!0,r,i)}function Fe(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fe(t,e[s],n,r,i);else r=Bt(r)?!!r.capture:!!r,n=$e(n),t&&t[_e]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Me(s=t.g[e],n,r,i))&&(Ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=je(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Me(e,n,r,i)),(n=-1<t?e[t]:null)&&Ve(n))}function Ve(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[_e])Ne(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ue(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=je(e))?(Ne(n,t),0==n.h&&(n.src=null,e[xe]=null)):Ie(t)}}}function Ue(t){return t in Re?Re[t]:Re[t]="on"+t}function Be(t,e){if(t.fa)t=!0;else{e=new we(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ve(t),t=n.call(r,e)}return t}function je(t){return(t=t[xe])instanceof ke?t:null}var qe="__closure_events_fn_"+(1e9*Math.random()>>>0);function $e(t){return"function"==typeof t?t:(t[qe]||(t[qe]=function(e){return t.handleEvent(e)}),t[qe])}function ze(){Wt.call(this),this.i=new ke(this),this.S=this,this.J=null}function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new Jt(e,t);else if(e instanceof Jt)e.target=e.target||t;else{var i=e;De(e=new Jt(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ke(o,r,!0,e)&&i}if(i=Ke(o=e.g=t,r,!0,e)&&i,i=Ke(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Ke(o=e.g=n[s],r,!1,e)&&i}function Ke(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ne(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Ht(ze,Wt),ze.prototype[_e]=!0,ze.prototype.removeEventListener=function(t,e,n,r){Fe(this,t,e,n,r)},ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ie(n[r]);delete e.g[t],e.h--}}this.J=null},ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var He=Vt.JSON.stringify;function We(){var t=en;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Qe=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Xe),(t=>t.reset()));class Xe{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ye(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Je(t){Vt.setTimeout((()=>{throw t}),0)}let Ze,tn=!1,en=new class{constructor(){this.h=this.g=null}add(t,e){const n=Qe.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},nn=()=>{const t=Vt.Promise.resolve(void 0);Ze=()=>{t.then(rn)}};var rn=()=>{for(var t;t=We();){try{t.h.call(t.g)}catch(t){Je(t)}var e=Qe;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tn=!1};function sn(t,e){ze.call(this),this.h=t||1,this.g=e||Vt,this.j=Gt(this.qb,this),this.l=Date.now()}function on(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function an(t,e,n){if("function"==typeof t)n&&(t=Gt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Gt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Vt.setTimeout(t,e||0)}function cn(t){t.g=an((()=>{t.g=null,t.i&&(t.i=!1,cn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ht(sn,ze),(Lt=sn.prototype).ga=!1,Lt.T=null,Lt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(on(this),this.start()))}},Lt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Lt.N=function(){sn.$.N.call(this),on(this),delete this.g};class un extends Wt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:cn(this)}N(){super.N(),this.g&&(Vt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(t){Wt.call(this),this.h=t,this.g={}}Ht(hn,Wt);var ln=[];function dn(t,e,n,r){Array.isArray(n)||(n&&(ln[0]=n.toString()),n=ln);for(var i=0;i<n.length;i++){var s=Oe(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fn(t){Se(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ve(t)}),t),t.g={}}function gn(){this.g=!0}function mn(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return He(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}hn.prototype.N=function(){hn.$.N.call(this),fn(this)},hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},gn.prototype.Ea=function(){this.g=!1},gn.prototype.info=function(){};var pn={},yn=null;function vn(){return yn=yn||new ze}function wn(t){Jt.call(this,pn.Ta,t)}function bn(t){const e=vn();Ge(e,new wn(e))}function _n(t,e){Jt.call(this,pn.STAT_EVENT,t),this.stat=e}function En(t){const e=vn();Ge(e,new _n(e,t))}function Tn(t,e){Jt.call(this,pn.Ua,t),this.size=e}function In(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Vt.setTimeout((function(){t()}),e)}pn.Ta="serverreachability",Ht(wn,Jt),pn.STAT_EVENT="statevent",Ht(_n,Jt),pn.Ua="timingevent",Ht(Tn,Jt);var Sn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Cn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function An(){}function Dn(t){return t.h||(t.h=t.i())}function kn(){}An.prototype.h=null;var Nn,Mn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xn(){Jt.call(this,"d")}function Rn(){Jt.call(this,"c")}function On(){}function Ln(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new hn(this),this.P=Fn,t=he?125:void 0,this.V=new sn(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Pn}function Pn(){this.i=null,this.g="",this.h=!1}Ht(xn,Jt),Ht(Rn,Jt),Ht(On,An),On.prototype.g=function(){return new XMLHttpRequest},On.prototype.i=function(){return{}},Nn=new On;var Fn=45e3,Vn={},Un={};function Bn(t,e,n){t.L=1,t.A=sr(tr(e)),t.u=n,t.S=!0,jn(t,null)}function jn(t,e){t.G=Date.now(),Gn(t),t.B=tr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),vr(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Pn,t.g=vi(t.l,n?e:null,!t.u),0<t.O&&(t.M=new un(Gt(t.Pa,t,t.g),t.O)),dn(t.U,t.g,"readystatechange",t.nb),e=t.I?Ce(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),bn(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function qn(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function $n(t,e,n){let r,i=!0;for(;!t.J&&t.o<n.length;){if(r=zn(t,n),r==Un){4==e&&(t.s=4,En(14),i=!1),mn(t.j,t.m,null,"[Incomplete Response]");break}if(r==Vn){t.s=4,En(15),mn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}mn(t.j,t.m,r,null),Xn(t,r)}qn(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,En(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hi(e),e.M=!0,En(11))):(mn(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Wn(t))}function zn(t,e){var n=t.o,r=e.indexOf("\n",n);return-1==r?Un:(n=Number(e.substring(n,r)),isNaN(n)?Vn:(r+=1)+n>e.length?Un:(e=e.slice(r,r+n),t.o=r+n,e))}function Gn(t){t.Y=Date.now()+t.P,Kn(t,t.P)}function Kn(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=In(Gt(t.lb,t),e)}function Hn(t){t.C&&(Vt.clearTimeout(t.C),t.C=null)}function Wn(t){0==t.l.H||t.J||fi(t.l,t)}function Qn(t){Hn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,on(t.V),fn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xn(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Sr(n.i,t)))if(!t.K&&Sr(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;di(n),ni(n)}ui(n),En(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=In(Gt(n.ib,n),6e3));if(1>=Ir(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else mi(n,11)}else if((t.K||n.g==t)&&di(n),!te(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Cr(s,s.h),s.h=null))}if(r.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,ir(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=yi(r,r.J?r.pa:null,r.Y),o.K){Ar(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Hn(a),Gn(a)),r.g=o}else ci(r);0<n.j.length&&ii(n)}else"stop"!=u[0]&&"close"!=u[0]||mi(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mi(n,7):ei(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}bn()}catch(t){}}function Yn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ut(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Ut(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Ut(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(Lt=Ln.prototype).setTimeout=function(t){this.P=t},Lt.nb=function(t){t=t.target;const e=this.M;e&&3==Qr(t)?e.l():this.Pa(t)},Lt.Pa=function(t){try{if(t==this.g)t:{const h=Qr(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||he||this.g&&(this.h.h||this.g.ja()||Xr(this.g)))){this.J||4!=h||7==e||bn(),Hn(this);var n=this.g.da();this.ca=n;e:if(qn(this)){var r=Xr(this.g);t="";var i=r.length,s=4==Qr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Qn(this),Wn(this);var o="";break e}this.h.i=new Vt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.s=3,En(12),Qn(this),Wn(this);break t}mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xn(this,n)}this.S?($n(this,h,o),he&&this.i&&3==h&&(dn(this.U,this.V,"tick",this.mb),this.V.start())):(mn(this.j,this.m,o,null),Xn(this,o)),4==h&&Qn(this),this.i&&!this.J&&(4==h?fi(this.l,this):(this.i=!1,Gn(this)))}else(function(t){const e={};t=(t.g&&2<=Qr(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(te(t[r]))continue;var n=Ye(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,En(12)):(this.s=0,En(13)),Qn(this),Wn(this)}}}catch(t){}},Lt.mb=function(){if(this.g){var t=Qr(this.g),e=this.g.ja();this.o<e.length&&(Hn(this),$n(this,t,e),this.i&&4!=t&&Gn(this))}},Lt.cancel=function(){this.J=!0,Qn(this)},Lt.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(bn(),En(17)),Qn(this),this.s=2,Wn(this)):Kn(this,this.Y-t)};var Jn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zn){this.h=t.h,er(this,t.j),this.s=t.s,this.g=t.g,nr(this,t.m),this.l=t.l;var e=t.i,n=new gr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),rr(this,n),this.o=t.o}else t&&(e=String(t).match(Jn))?(this.h=!1,er(this,e[1]||"",!0),this.s=or(e[2]||""),this.g=or(e[3]||"",!0),nr(this,e[4]),this.l=or(e[5]||"",!0),rr(this,e[6]||"",!0),this.o=or(e[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}function tr(t){return new Zn(t)}function er(t,e,n){t.j=n?or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rr(t,e,n){e instanceof gr?(t.i=e,function(t,e){e&&!t.j&&(mr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(pr(this,e),vr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ar(e,dr)),t.i=new gr(e,t.h))}function ir(t,e,n){t.i.set(e,n)}function sr(t){return ir(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ar(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,cr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ar(e,ur,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ar(e,ur,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ar(n,"/"==n.charAt(0)?lr:hr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ar(n,fr)),t.join("")};var ur=/[#\/\?@]/g,hr=/[#\?:]/g,lr=/[#\?]/g,dr=/[#\?@]/g,fr=/#/g;function gr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function pr(t,e){mr(t),e=wr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function yr(t,e){return mr(t),e=wr(t,e),t.g.has(e)}function vr(t,e,n){pr(t,e),0<n.length&&(t.i=null,t.g.set(wr(t,e),Xt(n)),t.h+=n.length)}function wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Lt=gr.prototype).add=function(t,e){mr(this),this.i=null,t=wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Lt.forEach=function(t,e){mr(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Lt.ta=function(){mr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Lt.Z=function(t){mr(this);let e=[];if("string"==typeof t)yr(this,t)&&(e=e.concat(this.g.get(wr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Lt.set=function(t,e){return mr(this),this.i=null,yr(this,t=wr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Lt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Lt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var br=class{constructor(t,e){this.g=t,this.map=e}};function _r(t){this.l=t||Er,Vt.PerformanceNavigationTiming?t=0<(t=Vt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Vt.g&&Vt.g.Ka&&Vt.g.Ka()&&Vt.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Er=10;function Tr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ir(t){return t.h?1:t.g?t.g.size:0}function Sr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Cr(t,e){t.g?t.g.add(e):t.h=e}function Ar(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Dr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Xt(t.i)}_r.prototype.cancel=function(){if(this.i=Dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var kr=class{stringify(t){return Vt.JSON.stringify(t,void 0)}parse(t){return Vt.JSON.parse(t,void 0)}};function Nr(){this.g=new kr}function Mr(t,e,n){const r=n||"";try{Yn(t,(function(t,n){let i=t;Bt(t)&&(i=He(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function xr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function Rr(t){this.l=t.ec||null,this.j=t.ob||!1}function Or(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ht(Rr,An),Rr.prototype.g=function(){return new Or(this.l,this.j)},Rr.prototype.i=function(t){return function(){return t}}({}),Ht(Or,ze);var Lr=0;function Pr(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vr(t)}function Vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Lt=Or.prototype).open=function(t,e){if(this.readyState!=Lr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vr(this)},Lt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Vt).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Lt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fr(this)),this.readyState=Lr},Lt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Vt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pr(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Lt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fr(this):Vr(this),3==this.readyState&&Pr(this)}},Lt.Za=function(t){this.g&&(this.response=this.responseText=t,Fr(this))},Lt.Ya=function(t){this.g&&(this.response=t,Fr(this))},Lt.ka=function(){this.g&&Fr(this)},Lt.setRequestHeader=function(t,e){this.v.append(t,e)},Lt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Lt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Or.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ur=Vt.JSON.parse;function Br(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jr,this.L=this.M=!1}Ht(Br,ze);var jr="",qr=/^https?$/i,$r=["POST","PUT"];function zr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gr(t),Hr(t)}function Gr(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}function Kr(t){if(t.h&&void 0!==Ft&&(!t.C[1]||4!=Qr(t)||2!=t.da()))if(t.v&&4==Qr(t))an(t.La,0,t);else if(Ge(t,"readystatechange"),4==Qr(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.I).match(Jn)[1]||null;!i&&Vt.self&&Vt.self.location&&(i=Vt.self.location.protocol.slice(0,-1)),r=!qr.test(i?i.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var s=2<Qr(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",Gr(t)}}finally{Hr(t)}}}function Hr(t,e){if(t.g){Wr(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Wr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Vt.clearTimeout(t.A),t.A=null)}function Qr(t){return t.g?t.g.readyState:0}function Xr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yr(t){let e="";return Se(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yr(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ir(t,e,n))}function Zr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ti(t){this.Ga=0,this.j=[],this.l=new gn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Zr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Zr("baseRetryDelayMs",5e3,t),this.hb=Zr("retryDelaySeedMs",1e4,t),this.eb=Zr("forwardChannelMaxRetries",2,t),this.xa=Zr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new _r(t&&t.concurrentRequestLimit),this.Ja=new Nr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ei(t){if(ri(t),3==t.H){var e=t.W++,n=tr(t.I);if(ir(n,"SID",t.K),ir(n,"RID",e),ir(n,"TYPE","terminate"),oi(t,n),(e=new Ln(t,t.l,e)).L=2,e.A=sr(tr(n)),n=!1,Vt.navigator&&Vt.navigator.sendBeacon)try{n=Vt.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&Vt.Image&&((new Image).src=e.A,n=!0),n||(e.g=vi(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Gn(e)}pi(t)}function ni(t){t.g&&(hi(t),t.g.cancel(),t.g=null)}function ri(t){ni(t),t.u&&(Vt.clearTimeout(t.u),t.u=null),di(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Vt.clearTimeout(t.m),t.m=null)}
function ii(t){if(!Tr(t.i)&&!t.m){t.m=!0;var e=t.Na;Ze||nn(),tn||(Ze(),tn=!0),en.add(e,t),t.C=0}}function si(t,e){var n;n=e?e.m:t.W++;const r=tr(t.I);ir(r,"SID",t.K),ir(r,"RID",n),ir(r,"AID",t.V),oi(t,r),t.o&&t.s&&Jr(r,t.o,t.s),n=new Ln(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ai(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cr(t.i,n),Bn(n,r,e)}function oi(t,e){t.na&&Se(t.na,(function(t,n){ir(e,n,t)})),t.h&&Yn({},(function(t,n){ir(e,n,t)}))}function ai(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Gt(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{Mr(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function ci(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ze||nn(),tn||(Ze(),tn=!0),en.add(e,t),t.A=0}}function ui(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=In(Gt(t.Ma,t),gi(t,t.A)),t.A++,!0)}function hi(t){null!=t.B&&(Vt.clearTimeout(t.B),t.B=null)}function li(t){t.g=new Ln(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=tr(t.wa);ir(e,"RID","rpc"),ir(e,"SID",t.K),ir(e,"AID",t.V),ir(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ir(e,"TO",t.qa),ir(e,"TYPE","xmlhttp"),oi(t,e),t.o&&t.s&&Jr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=sr(tr(e)),n.u=null,n.S=!0,jn(n,t)}function di(t){null!=t.v&&(Vt.clearTimeout(t.v),t.v=null)}function fi(t,e){var n=null;if(t.g==e){di(t),hi(t),t.g=null;var r=2}else{if(!Sr(t.i,e))return;n=e.F,Ar(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;Ge(r=vn(),new Tn(r,n)),ii(t)}else ci(t);else if(3==(i=e.s)||0==i&&0<e.ca||!(1==r&&function(t,e){return!(Ir(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=In(Gt(t.Na,t,e),gi(t,t.C)),t.C++,0)))}(t,e)||2==r&&ui(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}function gi(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function mi(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=Gt(t.pb,t);n||(n=new Zn("//www.google.com/images/cleardot.gif"),Vt.location&&"http"==Vt.location.protocol||er(n,"https"),sr(n)),function(t,e){const n=new gn;if(Vt.Image){const r=new Image;r.onload=Kt(xr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Kt(xr,n,r,"TestLoadImage: error",!1,e),r.onabort=Kt(xr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Kt(xr,n,r,"TestLoadImage: timeout",!1,e),Vt.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else En(2);t.H=0,t.h&&t.h.za(e),pi(t),ri(t)}function pi(t){if(t.H=0,t.ma=[],t.h){const e=Dr(t.i);0==e.length&&0==t.j.length||(Yt(t.ma,e),Yt(t.ma,t.j),t.i.i.length=0,Xt(t.j),t.j.length=0),t.h.ya()}}function yi(t,e,n){var r=n instanceof Zn?tr(n):new Zn(n);if(""!=r.g)e&&(r.g=e+"."+r.g),nr(r,r.m);else{var i=Vt.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Zn(null);r&&er(s,r),e&&(s.g=e),i&&nr(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ir(r,n,e),ir(r,"VER",t.ra),oi(t,r),r}function vi(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new Br(new Rr({ob:n})):new Br(t.va)).Oa(t.J),e}function wi(){}function bi(){if(ce&&!(10<=Number(ve)))throw Error("Environmental error: no available transport.")}function _i(t,e){ze.call(this),this.g=new ti(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!te(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!te(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ii(this)}function Ei(t){xn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ti(){Rn.call(this),this.status=1}function Ii(t){this.g=t}function Si(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ci(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function Ai(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}(Lt=Br.prototype).Oa=function(t){this.M=t},Lt.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nn.g(),this.C=this.u?Dn(this.u):Dn(Nn),this.g.onreadystatechange=Gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void zr(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Vt.FormData&&t instanceof Vt.FormData,!(0<=Qt($r,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Wr(this),0<this.B&&((this.L=function(t){return ce&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.ua,this)):this.A=an(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){zr(this,t)}},Lt.ua=function(){void 0!==Ft&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))},Lt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Hr(this))},Lt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hr(this,!0)),Br.$.N.call(this)},Lt.La=function(){this.s||(this.G||this.v||this.l?Kr(this):this.kb())},Lt.kb=function(){Kr(this)},Lt.isActive=function(){return!!this.g},Lt.da=function(){try{return 2<Qr(this)?this.g.status:-1}catch(t){return-1}},Lt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Lt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ur(e)}},Lt.Ia=function(){return this.m},Lt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Lt=ti.prototype).ra=8,Lt.H=1,Lt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ln(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Ce(s),De(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ai(this,i,e),ir(n=tr(this.I),"RID",t),ir(n,"CVER",22),this.F&&ir(n,"X-HTTP-Session-Id",this.F),oi(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Yr(s)))+"&"+e:this.o&&Jr(n,this.o,s)),Cr(this.i,i),this.bb&&ir(n,"TYPE","init"),this.P?(ir(n,"$req",e),ir(n,"SID","null"),i.aa=!0,Bn(i,n,null)):Bn(i,n,e),this.H=2}}else 3==this.H&&(t?si(this,t):0==this.j.length||Tr(this.i)||si(this))},Lt.Ma=function(){if(this.u=null,li(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=In(Gt(this.jb,this),t)}},Lt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,En(10),ni(this),li(this))},Lt.ib=function(){null!=this.v&&(this.v=null,ni(this),ui(this),En(19))},Lt.pb=function(t){t?(this.l.info("Successfully pinged google.com"),En(2)):(this.l.info("Failed to ping google.com"),En(1))},Lt.isActive=function(){return!!this.h&&this.h.isActive(this)},(Lt=wi.prototype).Ba=function(){},Lt.Aa=function(){},Lt.za=function(){},Lt.ya=function(){},Lt.isActive=function(){return!0},Lt.Va=function(){},bi.prototype.g=function(t,e){return new _i(t,e)},Ht(_i,ze),_i.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;En(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yi(t,null,t.Y),ii(t)},_i.prototype.close=function(){ei(this.g)},_i.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=He(t),t=n);e.j.push(new br(e.fb++,t)),3==e.H&&ii(e)},_i.prototype.N=function(){this.g.h=null,delete this.j,ei(this.g),delete this.g,_i.$.N.call(this)},Ht(Ei,xn),Ht(Ti,Rn),Ht(Ii,wi),Ii.prototype.Ba=function(){Ge(this.g,"a")},Ii.prototype.Aa=function(t){Ge(this.g,new Ei(t))},Ii.prototype.za=function(t){Ge(this.g,new Ti)},Ii.prototype.ya=function(){Ge(this.g,"b")},Ht(Si,(function(){this.blockSize=-1})),Si.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Si.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)Ci(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ci(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ci(this,r),i=0;break}}this.h=i,this.i+=e},Si.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Di={};function ki(t){return-128<=t&&128>t?function(t,e){var n=Di;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Ai([0|t],0>t?-1:0)})):new Ai([0|t],0>t?-1:0)}function Ni(t){if(isNaN(t)||!isFinite(t))return xi;if(0>t)return Fi(Ni(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mi;return new Ai(e,0)}var Mi=4294967296,xi=ki(0),Ri=ki(1),Oi=ki(16777216);function Li(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Pi(t){return-1==t.h}function Fi(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ai(n,~t.h).add(Ri)}function Vi(t,e){return t.add(Fi(e))}function Ui(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bi(t,e){this.g=t,this.h=e}function ji(t,e){if(Li(e))throw Error("division by zero");if(Li(t))return new Bi(xi,xi);if(Pi(t))return e=ji(Fi(t),e),new Bi(Fi(e.g),Fi(e.h));if(Pi(e))return e=ji(t,Fi(e)),new Bi(Fi(e.g),e.h);if(30<t.g.length){if(Pi(t)||Pi(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ri,r=e;0>=r.X(t);)n=qi(n),r=qi(r);var i=$i(n,1),s=$i(r,1);for(r=$i(r,2),n=$i(n,2);!Li(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=$i(r,1),n=$i(n,1)}return e=Vi(t,i.R(e)),new Bi(i,e)}for(i=xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Ni(n)).R(e);Pi(o)||0<o.X(t);)o=(s=Ni(n-=r)).R(e);Li(s)&&(s=Ri),i=i.add(s),t=Vi(t,o)}return new Bi(i,t)}function qi(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ai(n,t.h)}function $i(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ai(i,t.h)}(Lt=Ai.prototype).ea=function(){if(Pi(this))return-Fi(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mi+r)*e,e*=Mi}return t},Lt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Li(this))return"0";if(Pi(this))return"-"+Fi(this).toString(t);for(var e=Ni(Math.pow(t,6)),n=this,r="";;){var i=ji(n,e).g,s=((0<(n=Vi(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Li(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Lt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Lt.X=function(t){return Pi(t=Vi(this,t))?-1:Li(t)?0:1},Lt.abs=function(){return Pi(this)?Fi(this):this},Lt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ai(n,-2147483648&n[n.length-1]?-1:0)},Lt.R=function(t){if(Li(this)||Li(t))return xi;if(Pi(this))return Pi(t)?Fi(this).R(Fi(t)):Fi(Fi(this).R(t));if(Pi(t))return Fi(this.R(Fi(t)));if(0>this.X(Oi)&&0>t.X(Oi))return Ni(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Ui(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Ui(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ui(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ui(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ai(n,0)},Lt.gb=function(t){return ji(this,t).h},Lt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ai(n,this.h&t.h)},Lt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ai(n,this.h|t.h)},Lt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ai(n,this.h^t.h)},bi.prototype.createWebChannel=bi.prototype.g,_i.prototype.send=_i.prototype.u,_i.prototype.open=_i.prototype.m,_i.prototype.close=_i.prototype.close,Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,Cn.COMPLETE="complete",kn.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",ze.prototype.listen=ze.prototype.O,Br.prototype.listenOnce=Br.prototype.P,Br.prototype.getLastError=Br.prototype.Sa,Br.prototype.getLastErrorCode=Br.prototype.Ia,Br.prototype.getStatus=Br.prototype.da,Br.prototype.getResponseJson=Br.prototype.Wa,Br.prototype.getResponseText=Br.prototype.ja,Br.prototype.send=Br.prototype.ha,Br.prototype.setWithCredentials=Br.prototype.Oa,Si.prototype.digest=Si.prototype.l,Si.prototype.reset=Si.prototype.reset,Si.prototype.update=Si.prototype.j,Ai.prototype.add=Ai.prototype.add,Ai.prototype.multiply=Ai.prototype.R,Ai.prototype.modulo=Ai.prototype.gb,Ai.prototype.compare=Ai.prototype.X,Ai.prototype.toNumber=Ai.prototype.ea,Ai.prototype.toString=Ai.prototype.toString,Ai.prototype.getBits=Ai.prototype.D,Ai.fromNumber=Ni,Ai.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Fi(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Ni(Math.pow(n,8)),i=xi,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Ni(Math.pow(n,o)),i=i.R(o).add(Ni(a))):i=(i=i.R(r)).add(Ni(a))}return i};var zi=Sn,Gi=Cn,Ki=pn,Hi=10,Wi=11,Qi=kn,Xi=Br,Yi=Si,Ji=Ai;const Zi="@firebase/firestore";
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
   */class ts{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ts.UNAUTHENTICATED=new ts(null),ts.GOOGLE_CREDENTIALS=new ts("google-credentials-uid"),ts.FIRST_PARTY=new ts("first-party-uid"),ts.MOCK_USER=new ts("mock-user");
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
let es="10.7.0";
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
   */const ns=new G("@firebase/firestore");function rs(){return ns.logLevel}function is(t,...e){if(ns.logLevel<=U.DEBUG){const n=e.map(as);ns.debug(`Firestore (${es}): ${t}`,...n)}}function ss(t,...e){if(ns.logLevel<=U.ERROR){const n=e.map(as);ns.error(`Firestore (${es}): ${t}`,...n)}}function os(t,...e){if(ns.logLevel<=U.WARN){const n=e.map(as);ns.warn(`Firestore (${es}): ${t}`,...n)}}function as(t){if("string"==typeof t)return t;try{
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
   */function cs(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw ss(e),new Error(e)}function us(t,e){t||cs()}function hs(t,e){return t}
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
   */const ls={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ds extends k{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
   */class fs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
   */class gs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ms{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ts.UNAUTHENTICATED)))}shutdown(){}}class ps{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ys{constructor(t){this.t=t,this.currentUser=ts.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fs,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{is("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(is("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fs)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(is("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(us("string"==typeof e.accessToken),new gs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return us(null===t||"string"==typeof t),new ts(t)}}class vs{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=ts.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ws{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new vs(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(ts.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _s{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&is("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,is("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{is("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):is("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(us("string"==typeof t.token),this.R=t.token,new bs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
   */function Es(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
   */class Ts{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Es(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function Is(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
   */class Cs{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ds(ls.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ds(ls.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ds(ls.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ds(ls.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Cs.fromMillis(Date.now())}static fromDate(t){return Cs.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Cs(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Is(this.nanoseconds,t.nanoseconds):Is(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
   */class As{constructor(t){this.timestamp=t}static fromTimestamp(t){return new As(t)}static min(){return new As(new Cs(0,0))}static max(){return new As(new Cs(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
   */class Ds{constructor(t,e,n){void 0===e?e=0:e>t.length&&cs(),void 0===n?n=t.length-e:n>t.length-e&&cs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ds.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ds?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ks extends Ds{construct(t,e,n){return new ks(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ds(ls.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ks(e)}static emptyPath(){return new ks([])}}const Ns=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ms extends Ds{construct(t,e,n){return new Ms(t,e,n)}static isValidIdentifier(t){return Ns.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ms.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ms(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ds(ls.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ds(ls.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ds(ls.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ds(ls.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ms(e)}static emptyPath(){return new Ms([])}}
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
   */class xs{constructor(t){this.path=t}static fromPath(t){return new xs(ks.fromString(t))}static fromName(t){return new xs(ks.fromString(t).popFirst(5))}static empty(){return new xs(ks.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ks.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ks.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new xs(new ks(t.slice()))}}function Rs(t){return new Os(t.readTime,t.key,-1)}class Os{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Os(As.min(),xs.empty(),-1)}static max(){return new Os(As.max(),xs.empty(),-1)}}function Ls(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=xs.comparator(t.documentKey,e.documentKey),0!==n?n:Is(t.largestBatchId,e.largestBatchId))}
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
   */const Ps="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
   */async function Vs(t){if(t.code!==ls.FAILED_PRECONDITION||t.message!==Ps)throw t;is("LocalStore","Unexpectedly lost primary lease")}
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
   */class Us{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&cs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Us(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Us?e:Us.resolve(e)}catch(t){return Us.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Us.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Us.reject(e)}static resolve(t){return new Us(((e,n)=>{e(t)}))}static reject(t){return new Us(((e,n)=>{n(t)}))}static waitFor(t){return new Us(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Us.resolve(!1);for(const n of t)e=e.next((t=>t?Us.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Us(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Us(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}function Bs(t){return"IndexedDbTransactionError"===t.name}
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
   */class js{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function qs(t){return null==t}function $s(t){return 0===t&&1/t==-1/0}
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
function zs(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ks(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
   */js._e=-1;class Hs{constructor(t,e){this.comparator=t,this.root=e||Qs.EMPTY}insert(t,e){return new Hs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qs.BLACK,null,null))}remove(t){return new Hs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ws(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ws(this.root,t,this.comparator,!0)}}class Ws{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qs{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Qs.RED,this.left=null!=r?r:Qs.EMPTY,this.right=null!=i?i:Qs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Qs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Qs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw cs();if(this.right.isRed())throw cs();const t=this.left.check();if(t!==this.right.check())throw cs();return t+(this.isRed()?0:1)}}Qs.EMPTY=null,Qs.RED=!0,Qs.BLACK=!1,Qs.EMPTY=new class{constructor(){this.size=0}get key(){throw cs()}get value(){throw cs()}get color(){throw cs()}get left(){throw cs()}get right(){throw cs()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Qs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Xs{constructor(t){this.comparator=t,this.data=new Hs(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ys(this.data.getIterator())}getIteratorFrom(t){return new Ys(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Xs))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Xs(this.comparator);return e.data=t,e}}class Ys{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
   */class Js{constructor(t){this.fields=t,t.sort(Ms.comparator)}static empty(){return new Js([])}unionWith(t){let e=new Xs(Ms.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Js(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ss(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
   */class Zs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
   */class to{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zs("Invalid base64 string: "+t):t}}(t);return new to(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new to(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
   */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Is(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}to.EMPTY_BYTE_STRING=new to("");const eo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function no(t){if(us(!!t),"string"==typeof t){let e=0;const n=eo.exec(t);if(us(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ro(t.seconds),nanos:ro(t.nanos)}}function ro(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function io(t){return"string"==typeof t?to.fromBase64String(t):to.fromUint8Array(t)}
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
   */function so(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function oo(t){const e=t.mapValue.fields.__previous_value__;return so(e)?oo(e):e}function ao(t){const e=no(t.mapValue.fields.__local_write_time__.timestampValue);return new Cs(e.seconds,e.nanos)}
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
   */class co{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class uo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof uo&&t.projectId===this.projectId&&t.database===this.database}}
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
   */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?so(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
   */(t)?9007199254740991:10:cs()}function fo(t,e){if(t===e)return!0;const n=lo(t);if(n!==lo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=no(t.timestampValue),r=no(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return io(t.bytesValue).isEqual(io(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ro(t.geoPointValue.latitude)===ro(e.geoPointValue.latitude)&&ro(t.geoPointValue.longitude)===ro(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ro(t.integerValue)===ro(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ro(t.doubleValue),r=ro(e.doubleValue);return n===r?$s(n)===$s(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],fo);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(zs(n)!==zs(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!fo(n[t],r[t])))return!1;return!0}(t,e);default:return cs()}}function go(t,e){return void 0!==(t.values||[]).find((t=>fo(t,e)))}function mo(t,e){if(t===e)return 0;const n=lo(t),r=lo(e);if(n!==r)return Is(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Is(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ro(t.integerValue||t.doubleValue),r=ro(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return po(t.timestampValue,e.timestampValue);case 4:return po(ao(t),ao(e));case 5:return Is(t.stringValue,e.stringValue);case 6:return function(t,e){const n=io(t),r=io(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Is(n[t],r[t]);if(0!==e)return e}return Is(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Is(ro(t.latitude),ro(e.latitude));return 0!==n?n:Is(ro(t.longitude),ro(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=mo(n[t],r[t]);if(e)return e}return Is(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ho.mapValue&&e===ho.mapValue)return 0;if(t===ho.mapValue)return 1;if(e===ho.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Is(r[t],s[t]);if(0!==e)return e;const o=mo(n[r[t]],i[s[t]]);if(0!==o)return o}return Is(r.length,s.length)}(t.mapValue,e.mapValue);default:throw cs()}}function po(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Is(t,e);const n=no(t),r=no(e),i=Is(n.seconds,r.seconds);return 0!==i?i:Is(n.nanos,r.nanos)}function yo(t){return vo(t)}function vo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=no(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return io(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return xs.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=vo(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${vo(t.fields[i])}`;return n+"}"}(t.mapValue):cs()}function wo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bo(t){return!!t&&"integerValue"in t}function _o(t){return!!t&&"arrayValue"in t}function Eo(t){return!!t&&"nullValue"in t}function To(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=So(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Co{constructor(t){this.value=t}static empty(){return new Co({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Io(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=So(e)}setAll(t){let e=Ms.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=So(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Io(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Io(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Gs(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Co(So(this.value))}}function Ao(t){const e=[];return Gs(t.fields,((t,n)=>{const r=new Ms([t]);if(Io(n)){const t=Ao(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Js(e)
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
   */}class Do{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Do(t,0,As.min(),As.min(),As.min(),Co.empty(),0)}static newFoundDocument(t,e,n,r){return new Do(t,1,e,As.min(),n,r,0)}static newNoDocument(t,e){return new Do(t,2,e,As.min(),As.min(),Co.empty(),0)}static newUnknownDocument(t,e){return new Do(t,3,e,As.min(),As.min(),Co.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(As.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Co.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Co.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=As.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Do&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Do(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
   */class ko{constructor(t,e){this.position=t,this.inclusive=e}}function No(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?xs.comparator(xs.fromName(o.referenceValue),n.key):mo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Mo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fo(t.position[n],e.position[n]))return!1;return!0}
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
   */class xo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ro(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
   */class Oo{}class Lo extends Oo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new qo(t,e,n):"array-contains"===e?new Ko(t,n):"in"===e?new Ho(t,n):"not-in"===e?new Wo(t,n):"array-contains-any"===e?new Qo(t,n):new Lo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new $o(t,n):new zo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(mo(e,this.value)):null!==e&&lo(this.value)===lo(e)&&this.matchesComparison(mo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return cs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Po extends Oo{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Po(t,e)}matches(t){return Fo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Fo(t){return"and"===t.op}function Vo(t){return function(t){for(const e of t.filters)if(e instanceof Po)return!1;return!0}(t)&&Fo(t)}function Uo(t){if(t instanceof Lo)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(Vo(t))return t.filters.map((t=>Uo(t))).join(",");{const e=t.filters.map((t=>Uo(t))).join(",");return`${t.op}(${e})`}}function Bo(t,e){return t instanceof Lo?function(t,e){return e instanceof Lo&&t.op===e.op&&t.field.isEqual(e.field)&&fo(t.value,e.value)}(t,e):t instanceof Po?function(t,e){return e instanceof Po&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Bo(n,e.filters[r])),!0)}(t,e):void cs()}function jo(t){return t instanceof Lo?function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`}(t):t instanceof Po?function(t){return t.op.toString()+" {"+t.getFilters().map(jo).join(" ,")+"}"}(t):"Filter"}class qo extends Lo{constructor(t,e,n){super(t,e,n),this.key=xs.fromName(n.referenceValue)}matches(t){const e=xs.comparator(t.key,this.key);return this.matchesComparison(e)}}class $o extends Lo{constructor(t,e){super(t,"in",e),this.keys=Go("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class zo extends Lo{constructor(t,e){super(t,"not-in",e),this.keys=Go("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Go(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>xs.fromName(t.referenceValue)))}class Ko extends Lo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _o(e)&&go(e.arrayValue,this.value)}}class Ho extends Lo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&go(this.value.arrayValue,e)}}class Wo extends Lo{constructor(t,e){super(t,"not-in",e)}matches(t){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!go(this.value.arrayValue,e)}}class Qo extends Lo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_o(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>go(this.value.arrayValue,t)))}}
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
   */class Xo{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function Yo(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xo(t,e,n,r,i,s,o)}function Jo(t){const e=hs(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Uo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),qs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>yo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>yo(t))).join(",")),e.ce=t}return e.ce}function Zo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ro(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bo(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mo(t.startAt,e.startAt)&&Mo(t.endAt,e.endAt)}function ta(t){return xs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
   */class ea{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function na(t){return new ea(t)}function ra(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ia(t){return null!==t.collectionGroup}function sa(t){const e=hs(t);if(null===e.le){e.le=[];const t=new Set;for(const n of e.explicitOrderBy)e.le.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Xs(Ms.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new xo(r,n))})),t.has(Ms.keyField().canonicalString())||e.le.push(new xo(Ms.keyField(),n))}return e.le}function oa(t){const e=hs(t);return e.he||(e.he=function(t,e){if("F"===t.limitType)return Yo(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new xo(t.field,e)}));const n=t.endAt?new ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ko(t.startAt.position,t.startAt.inclusive):null;return Yo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,sa(t))),e.he}function aa(t,e){const n=t.filters.concat([e]);return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ca(t,e,n){return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ua(t,e){return Zo(oa(t),oa(e))&&t.limitType===e.limitType}function ha(t){return`${Jo(oa(t))}|lt:${t.limitType}`}function la(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>jo(t))).join(", ")}]`),qs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>yo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>yo(t))).join(",")),`Target(${e})`}(oa(t))}; limitType=${t.limitType})`}function da(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):xs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of sa(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=No(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,sa(t),e))&&!(t.endAt&&!function(t,e,n){const r=No(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,sa(t),e))}(t,e)}function fa(t){return(e,n)=>{let r=!1;for(const i of sa(t)){const t=ga(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ga(t,e,n){const r=t.field.isKeyField()?xs.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?mo(r,i):cs()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return cs()}}
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
   */class ma{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Gs(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return Ks(this.inner)}size(){return this.innerSize}}
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
   */const pa=new Hs(xs.comparator);function ya(){return pa}const va=new Hs(xs.comparator);function wa(...t){let e=va;for(const n of t)e=e.insert(n.key,n);return e}function ba(t){let e=va;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function _a(){return Ta()}function Ea(){return Ta()}function Ta(){return new ma((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ia=new Hs(xs.comparator),Sa=new Xs(xs.comparator);function Ca(...t){let e=Sa;for(const n of t)e=e.add(n);return e}const Aa=new Xs(Is);
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
function Da(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function ka(t){return{integerValue:""+t}}function Na(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!$s(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?ka(e):Da(t,e)}
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
   */class Ma{constructor(){this._=void 0}}function xa(t,e,n){return t instanceof La?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&so(e)&&(e=oo(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Pa?Fa(t,e):t instanceof Va?Ua(t,e):function(t,e){const n=Oa(t,e),r=ja(n)+ja(t.Ie);return bo(n)&&bo(t.Ie)?ka(r):Da(t.serializer,r)}(t,e)}function Ra(t,e,n){return t instanceof Pa?Fa(t,e):t instanceof Va?Ua(t,e):n}function Oa(t,e){return t instanceof Ba?function(t){return bo(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class La extends Ma{}class Pa extends Ma{constructor(t){super(),this.elements=t}}function Fa(t,e){const n=qa(e);for(const e of t.elements)n.some((t=>fo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Va extends Ma{constructor(t){super(),this.elements=t}}function Ua(t,e){let n=qa(e);for(const e of t.elements)n=n.filter((t=>!fo(t,e)));return{arrayValue:{values:n}}}class Ba extends Ma{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ja(t){return ro(t.integerValue||t.doubleValue)}function qa(t){return _o(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
   */class $a{constructor(t,e){this.field=t,this.transform=e}}class za{constructor(t,e){this.version=t,this.transformResults=e}}class Ga{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ga}static exists(t){return new Ga(void 0,t)}static updateTime(t){return new Ga(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ka(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ha{}function Wa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ic(t.key,Ga.none()):new Za(t.key,t.data,Ga.none());{const n=t.data,r=Co.empty();let i=new Xs(Ms.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new tc(t.key,r,new Js(i.toArray()),Ga.none())}}function Qa(t,e,n){t instanceof Za?function(t,e,n){const r=t.value.clone(),i=nc(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof tc?function(t,e,n){if(!Ka(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=nc(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ec(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Xa(t,e,n,r){return t instanceof Za?function(t,e,n,r){if(!Ka(t.precondition,e))return n;const i=t.value.clone(),s=rc(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof tc?function(t,e,n,r){if(!Ka(t.precondition,e))return n;const i=rc(t.fieldTransforms,r,e),s=e.data;return s.setAll(ec(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Ka(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ya(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Oa(r.transform,t||null);null!=i&&(null===n&&(n=Co.empty()),n.set(r.field,i))}return n||null}function Ja(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ss(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Pa&&e instanceof Pa||t instanceof Va&&e instanceof Va?Ss(t.elements,e.elements,fo):t instanceof Ba&&e instanceof Ba?fo(t.Ie,e.Ie):t instanceof La&&e instanceof La}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Za extends Ha{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tc extends Ha{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ec(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function nc(t,e,n){const r=new Map;us(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ra(o,a,n[i]))}return r}function rc(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,xa(t,s,e))}return r}class ic extends Ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sc extends Ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
   */class oc{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Qa(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ea();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Wa(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(As.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ca())}isEqual(t){return this.batchId===t.batchId&&Ss(this.mutations,t.mutations,((t,e)=>Ja(t,e)))&&Ss(this.baseMutations,t.baseMutations,((t,e)=>Ja(t,e)))}}class ac{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){us(t.mutations.length===n.length);let r=Ia;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new ac(t,e,n,r)}}
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
   */class cc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
   */class uc{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
   */var hc,lc;function dc(t){if(void 0===t)return ss("GRPC error has no .code"),ls.UNKNOWN;switch(t){case hc.OK:return ls.OK;case hc.CANCELLED:return ls.CANCELLED;case hc.UNKNOWN:return ls.UNKNOWN;case hc.DEADLINE_EXCEEDED:return ls.DEADLINE_EXCEEDED;case hc.RESOURCE_EXHAUSTED:return ls.RESOURCE_EXHAUSTED;case hc.INTERNAL:return ls.INTERNAL;case hc.UNAVAILABLE:return ls.UNAVAILABLE;case hc.UNAUTHENTICATED:return ls.UNAUTHENTICATED;case hc.INVALID_ARGUMENT:return ls.INVALID_ARGUMENT;case hc.NOT_FOUND:return ls.NOT_FOUND;case hc.ALREADY_EXISTS:return ls.ALREADY_EXISTS;case hc.PERMISSION_DENIED:return ls.PERMISSION_DENIED;case hc.FAILED_PRECONDITION:return ls.FAILED_PRECONDITION;case hc.ABORTED:return ls.ABORTED;case hc.OUT_OF_RANGE:return ls.OUT_OF_RANGE;case hc.UNIMPLEMENTED:return ls.UNIMPLEMENTED;case hc.DATA_LOSS:return ls.DATA_LOSS;default:return cs()}}(lc=hc||(hc={}))[lc.OK=0]="OK",lc[lc.CANCELLED=1]="CANCELLED",lc[lc.UNKNOWN=2]="UNKNOWN",lc[lc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lc[lc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lc[lc.NOT_FOUND=5]="NOT_FOUND",lc[lc.ALREADY_EXISTS=6]="ALREADY_EXISTS",lc[lc.PERMISSION_DENIED=7]="PERMISSION_DENIED",lc[lc.UNAUTHENTICATED=16]="UNAUTHENTICATED",lc[lc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lc[lc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lc[lc.ABORTED=10]="ABORTED",lc[lc.OUT_OF_RANGE=11]="OUT_OF_RANGE",lc[lc.UNIMPLEMENTED=12]="UNIMPLEMENTED",lc[lc.INTERNAL=13]="INTERNAL",lc[lc.UNAVAILABLE=14]="UNAVAILABLE",lc[lc.DATA_LOSS=15]="DATA_LOSS";
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
const fc=new Ji([4294967295,4294967295],0);function gc(t){const e=(new TextEncoder).encode(t),n=new Yi;return n.update(e),new Uint8Array(n.digest())}function mc(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ji([n,r],0),new Ji([i,s],0)]}class pc{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new yc(`Invalid padding: ${e}`);if(n<0)throw new yc(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new yc(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new yc(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Ji.fromNumber(this.Te)}de(t,e,n){let r=t.add(e.multiply(Ji.fromNumber(n)));return 1===r.compare(fc)&&(r=new Ji([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=gc(t),[n,r]=mc(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,r,t);if(!this.Ae(e))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new pc(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=gc(t),[n,r]=mc(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,r,t);this.Re(e)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class yc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
   */class vc{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,wc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new vc(As.min(),r,new Hs(Is),ya(),Ca())}}class wc{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new wc(n,e,Ca(),Ca(),Ca())}}
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
   */class bc{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class _c{constructor(t,e){this.targetId=t,this.fe=e}}class Ec{constructor(t,e,n=to.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Tc{constructor(){this.ge=0,this.pe=Cc(),this.ye=to.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Ca(),e=Ca(),n=Ca();return this.pe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:cs()}})),new wc(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Cc()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,us(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Ic{constructor(t){this.Le=t,this.ke=new Map,this.qe=ya(),this.Qe=Sc(),this.Ke=new Hs(Is)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:cs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const i=r.target;if(ta(i))if(0===n){const t=new xs(i.path);this.We(e,t,Do.newNoDocument(t,As.min()))}else us(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),i=n?this.et(n,t,r):1;if(0!==i){this.He(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=io(n).toUint8Array()}catch(t){if(t instanceof Zs)return os("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new pc(s,r,i)}catch(t){return os(t instanceof yc?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&ta(i.target)){const e=new xs(i.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,Do.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=Ca();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new vc(t,e,this.Ke,this.qe,n);return this.qe=ya(),this.Qe=Sc(),this.Ke=new Hs(Is),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Tc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Xs(Is),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||is("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Tc),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Sc(){return new Hs(xs.comparator)}function Cc(){return new Hs(xs.comparator)}const Ac={asc:"ASCENDING",desc:"DESCENDING"},Dc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kc={and:"AND",or:"OR"};class Nc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mc(t,e){return t.useProto3Json||qs(e)?e:{value:e}}function xc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Oc(t,e){return xc(t,e.toTimestamp())}function Lc(t){return us(!!t),As.fromTimestamp(function(t){const e=no(t);return new Cs(e.seconds,e.nanos)}(t))}function Pc(t,e){return function(t){return new ks(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Fc(t){const e=ks.fromString(t);return us(eu(e)),e}function Vc(t,e){return Pc(t.databaseId,e.path)}function Uc(t,e){const n=Fc(e);if(n.get(1)!==t.databaseId.projectId)throw new ds(ls.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ds(ls.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new xs(qc(n))}function Bc(t,e){return Pc(t.databaseId,e)}function jc(t){return new ks(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qc(t){return us(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $c(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function zc(t,e){return{documents:[Bc(t,e.path)]}}function Gc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Bc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return Zc(Po.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Yc(t.field),direction:Wc(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Mc(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Kc(t){let e=function(t){const e=Fc(t);return 4===e.length?ks.emptyPath():qc(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){us(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Hc(t);return e instanceof Po&&Vo(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new xo(Jc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,qs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ko(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ko(n,e)}(n.endAt)),function(t,e,n,r,i,s,o,a){return new ea(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function Hc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jc(t.unaryFilter.field);return Lo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jc(t.unaryFilter.field);return Lo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jc(t.unaryFilter.field);return Lo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jc(t.unaryFilter.field);return Lo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return cs()}}(t):void 0!==t.fieldFilter?function(t){return Lo.create(Jc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return cs()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Po.create(t.compositeFilter.filters.map((t=>Hc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return cs()}}(t.compositeFilter.op))}(t):cs()}function Wc(t){return Ac[t]}function Qc(t){return Dc[t]}function Xc(t){return kc[t]}function Yc(t){return{fieldPath:t.canonicalString()}}function Jc(t){return Ms.fromServerFormat(t.fieldPath)}function Zc(t){return t instanceof Lo?function(t){if("=="===t.op){if(To(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NAN"}};if(Eo(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(To(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NOT_NAN"}};if(Eo(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yc(t.field),op:Qc(t.op),value:t.value}}}(t):t instanceof Po?function(t){const e=t.getFilters().map((t=>Zc(t)));return 1===e.length?e[0]:{compositeFilter:{op:Xc(t.op),filters:e}}}(t):cs()}function tu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function eu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
   */class nu{constructor(t,e,n,r,i=As.min(),s=As.min(),o=to.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new nu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
   */class ru{constructor(t){this.ut=t}}function iu(t){const e=Kc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ca(e,e.limit,"L"):e}
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
   */class su{constructor(){this.on=new ou}addToCollectionParentIndex(t,e){return this.on.add(e),Us.resolve()}getCollectionParents(t,e){return Us.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Us.resolve()}deleteFieldIndex(t,e){return Us.resolve()}deleteAllFieldIndexes(t){return Us.resolve()}createTargetIndexes(t,e){return Us.resolve()}getDocumentsMatchingTarget(t,e){return Us.resolve(null)}getIndexType(t,e){return Us.resolve(0)}getFieldIndexes(t,e){return Us.resolve([])}getNextCollectionGroupToUpdate(t){return Us.resolve(null)}getMinOffset(t,e){return Us.resolve(Os.min())}getMinOffsetFromCollectionGroup(t,e){return Us.resolve(Os.min())}updateCollectionGroup(t,e,n){return Us.resolve()}updateIndexEntries(t,e){return Us.resolve()}}class ou{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Xs(ks.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Xs(ks.comparator)).toArray()}}
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
   */class au{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new au(0)}static Nn(){return new au(-1)}}
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
   */class cu{constructor(){this.changes=new ma((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Do.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Us.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
   */class uu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
   */class hu{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Xa(n.mutation,t,Js.empty(),Cs.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ca()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ca()){const r=_a();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=wa();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=_a();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ca())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=ya();const s=Ta(),o=Ta();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof tc)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Xa(o.mutation,e,o.mutation.getFieldMask(),Cs.now())):s.set(e.key,Js.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new uu(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ta();let r=new Hs(((t,e)=>t-e)),i=Ca();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Js.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Ca()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ea();c.forEach((t=>{if(!i.has(t)){const r=Wa(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Us.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return xs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ia(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Us.resolve(_a());let o=-1,a=i;return s.next((e=>Us.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Us.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ca()))).next((t=>({batchId:o,changes:ba(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new xs(e)).next((t=>{let e=wa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=wa();return this.indexManager.getCollectionParents(t,i).next((o=>Us.forEach(o,(o=>{const a=function(t,e){return new ea(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Do.newInvalidDocument(r)))}));let n=wa();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Xa(s.mutation,r,Js.empty(),Cs.now()),da(e,r)&&(n=n.insert(t,r))})),n}))}}
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
   */class lu{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return Us.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Lc(t.createTime)}}(e)),Us.resolve()}getNamedQuery(t,e){return Us.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:iu(t.bundledQuery),readTime:Lc(t.readTime)}}(e)),Us.resolve()}}
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
   */class du{constructor(){this.overlays=new Hs(xs.comparator),this.lr=new Map}getOverlay(t,e){return Us.resolve(this.overlays.get(e))}getOverlays(t,e){const n=_a();return Us.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.lt(t,e,r)})),Us.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Us.resolve()}getOverlaysForCollection(t,e,n){const r=_a(),i=e.length+1,s=new xs(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Us.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Hs(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=_a(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=_a(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Us.resolve(o)}lt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new cc(e,n));let i=this.lr.get(e);void 0===i&&(i=Ca(),this.lr.set(e,i)),this.lr.set(e,i.add(n.key))}}
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
   */class fu{constructor(){this.hr=new Xs(gu.Pr),this.Ir=new Xs(gu.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new gu(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new gu(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new xs(new ks([])),n=new gu(e,t),r=new gu(e,t+1),i=[];return this.Ir.forEachInRange([n,r],(t=>{this.dr(t),i.push(t.key)})),i}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new xs(new ks([])),n=new gu(e,t),r=new gu(e,t+1);let i=Ca();return this.Ir.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new gu(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class gu{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return xs.comparator(t.key,e.key)||Is(t.gr,e.gr)}static Tr(t,e){return Is(t.gr,e.gr)||xs.comparator(t.key,e.key)}}
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
   */class mu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Xs(gu.Pr)}checkEmpty(t){return Us.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new oc(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.yr=this.yr.add(new gu(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Us.resolve(s)}lookupMutationBatch(t,e){return Us.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),i=r<0?0:r;return Us.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Us.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Us.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gu(e,0),r=new gu(e,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],(t=>{const e=this.wr(t.gr);i.push(e)})),Us.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Xs(Is);return e.forEach((t=>{const e=new gu(t,0),r=new gu(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,r],(t=>{n=n.add(t.gr)}))})),Us.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;xs.isDocumentKey(i)||(i=i.child(""));const s=new gu(new xs(i),0);let o=new Xs(Is);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gr)),!0)}),s),Us.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){us(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Us.forEach(e.mutations,(r=>{const i=new gu(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new gu(e,0),r=this.yr.firstAfterOrEqual(n);return Us.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Us.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
   */class pu{constructor(t){this.Cr=t,this.docs=new Hs(xs.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Us.resolve(n?n.document.mutableCopy():Do.newInvalidDocument(e))}getEntries(t,e){let n=ya();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Do.newInvalidDocument(t))})),Us.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=ya();const s=e.path,o=new xs(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Ls(Rs(o),n)<=0||(r.has(o.key)||da(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Us.resolve(i)}getAllFromCollectionGroup(t,e,n,r){cs()}vr(t,e){return Us.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new yu(this)}getSize(t){return Us.resolve(this.size)}}class yu extends cu{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)})),Us.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
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
   */class vu{constructor(t){this.persistence=t,this.Fr=new ma((t=>Jo(t)),Zo),this.lastRemoteSnapshotVersion=As.min(),this.highestTargetId=0,this.Mr=0,this.Or=new fu,this.targetCount=0,this.Nr=au.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Us.resolve()}getLastRemoteSnapshotVersion(t){return Us.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Us.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Us.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Us.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new au(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Us.resolve()}updateTargetData(t,e){return this.kn(e),Us.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Us.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Us.waitFor(i).next((()=>r))}getTargetCount(t){return Us.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Us.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Us.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Us.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Us.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Us.resolve(n)}containsKey(t,e){return Us.resolve(this.Or.containsKey(e))}}
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
   */class wu{constructor(t,e){this.Br={},this.overlays={},this.Lr=new js(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new vu(this),this.indexManager=new su,this.remoteDocumentCache=function(t){return new pu(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new ru(e),this.Kr=new lu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new du,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new mu(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){is("MemoryPersistence","Starting transaction:",t);const r=new bu(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((t=>this.referenceDelegate.Ur(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Wr(t,e){return Us.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class bu extends Fs{constructor(t){super(),this.currentSequenceNumber=t}}class _u{constructor(t){this.persistence=t,this.Gr=new fu,this.zr=null}static jr(t){return new _u(t)}get Hr(){if(this.zr)return this.zr;throw cs()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Us.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Us.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Us.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Us.forEach(this.Hr,(n=>{const r=xs.fromPath(n);return this.Jr(t,r).next((t=>{t||e.removeEntry(r,As.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Us.or([()=>Us.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
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
   */class Eu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}static Qi(t,e){let n=Ca(),r=Ca();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Eu(t,e.fromCache,n,r)}}
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
   */class Tu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
   */class Iu{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.zi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ji(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Tu;return this.Hi(t,e,n).next((r=>{if(i.result=r,this.$i)return this.Ji(t,e,n,r.size)}))})).next((()=>i.result))}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(rs()<=U.DEBUG&&is("QueryEngine","SDK will not create cache indexes for query:",la(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Us.resolve()):(rs()<=U.DEBUG&&is("QueryEngine","Query:",la(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(rs()<=U.DEBUG&&is("QueryEngine","The SDK decides to create cache indexes for query:",la(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,oa(e))):Us.resolve())}zi(t,e){if(ra(e))return Us.resolve(null);let n=oa(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ca(e,null,"F"),n=oa(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ca(...r);return this.Gi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,r);return this.Zi(e,s,i,n.readTime)?this.zi(t,ca(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,r){return ra(e)||r.isEqual(As.min())?Us.resolve(null):this.Gi.getDocuments(t,n).next((i=>{const s=this.Yi(e,i);return this.Zi(e,s,n,r)?Us.resolve(null):(rs()<=U.DEBUG&&is("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),la(e)),this.Xi(t,s,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=As.fromTimestamp(1e9===r?new Cs(n+1,0):new Cs(n,r));return new Os(i,xs.empty(),e)}(r,-1)).next((t=>t)))}))}Yi(t,e){let n=new Xs(fa(t));return e.forEach(((e,r)=>{da(t,r)&&(n=n.add(r))})),n}Zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(t,e,n){return rs()<=U.DEBUG&&is("QueryEngine","Using full collection scan to execute query:",la(e)),this.Gi.getDocumentsMatchingQuery(t,e,Os.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
   */class Su{constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new Hs(Is),this.ns=new ma((t=>Jo(t)),Zo),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hu(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}async function Cu(t,e){const n=hs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Ca();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Au(t){const e=hs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function Du(t,e){const n=hs(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(to.EMPTY_BYTE_STRING,As.min()).withLastLimboFreeSnapshotVersion(As.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.qr.updateTargetData(t,u))}));let a=ya(),c=Ca();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=Ca(),i=Ca();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ya();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(As.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):is("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:r,cs:i}}))}(t,s,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!r.isEqual(As.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Us.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=i,t)))}function ku(t,e){const n=hs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function Nu(t,e,n){const r=hs(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Bs(t))throw t;is("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Mu(t,e,n){const r=hs(t);let i=As.min(),s=Ca();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=hs(t),i=r.ns.get(n);return void 0!==i?Us.resolve(r.ts.get(i)):r.qr.getTargetData(e,n)}(r,t,oa(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.es.getDocumentsMatchingQuery(t,e,n?i:As.min(),n?s:Ca()))).next((t=>(function(t,e,n){let r=t.rs.get(e)||As.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.rs.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ls:s})))))}class xu{constructor(){this.activeTargetIds=Aa}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ru{constructor(){this.eo=new xu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new xu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
   */class Ou{ro(t){}shutdown(){}}
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
   */class Lu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){is("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){is("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
   */let Pu=null;function Fu(){return null===Pu?Pu=268435456+Math.round(2147483648*Math.random()):Pu++,"0x"+Pu.toString(16)
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
   */}const Vu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
   */class Uu{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
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
   */const Bu="WebChannelConnection";class ju extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(t,e,n,r,i){const s=Fu(),o=this.So(t,e);is("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,i),this.Do(t,o,a,n).then((e=>(is("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw os("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.wo(t,e,n,r,i)}bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+es,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=Vu[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,r){const i=Fu();return new Promise(((s,o)=>{const a=new Xi;a.setWithCredentials(!0),a.listenOnce(Gi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case zi.NO_ERROR:const e=a.getResponseJson();is(Bu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case zi.TIMEOUT:is(Bu,`RPC '${t}' ${i} timed out`),o(new ds(ls.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const n=a.getStatus();if(is(Bu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ls).indexOf(e)>=0?e:ls.UNKNOWN}(e.status);o(new ds(t,e.message))}else o(new ds(ls.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ds(ls.UNAVAILABLE,"Connection failed."));break;default:cs()}}finally{is(Bu,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);is(Bu,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}vo(t,e,n){const r=Fu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new bi,o=vn(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");is(Bu,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);let l=!1,d=!1;const f=new Uu({co:e=>{d?is(Bu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(is(Bu,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),is(Bu,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},lo:()=>h.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(h,Qi.EventType.OPEN,(()=>{d||is(Bu,`RPC '${t}' stream ${r} transport opened.`)})),g(h,Qi.EventType.CLOSE,(()=>{d||(d=!0,is(Bu,`RPC '${t}' stream ${r} transport closed`),f.Ro())})),g(h,Qi.EventType.ERROR,(e=>{d||(d=!0,os(Bu,`RPC '${t}' stream ${r} transport errored:`,e),f.Ro(new ds(ls.UNAVAILABLE,"The operation could not be completed")))})),g(h,Qi.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];us(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){is(Bu,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=hc[t];if(void 0!==e)return dc(e)}(e),i=o.message;void 0===n&&(n=ls.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Ro(new ds(n,i)),h.close()}else is(Bu,`RPC '${t}' stream ${r} received:`,i),f.Vo(i)}})),g(o,Ki.STAT_EVENT,(e=>{e.stat===Hi?is(Bu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Wi&&is(Bu,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ao()}),0),f}}function qu(){return"undefined"!=typeof document?document:null}
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
   */function $u(t){return new Nc(t,!0)}
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
   */class zu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&is("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
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
   */class Gu{constructor(t,e,n,r,i,s,o,a){this.si=t,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new zu(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===ls.RESOURCE_EXHAUSTED?(ss(e.toString()),ss("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===ls.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new ds(ls.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return is("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(is("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ku extends Gu{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:cs()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(us(void 0===e||"string"==typeof e),to.fromBase64String(e||"")):(us(void 0===e||e instanceof Uint8Array),to.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ls.UNKNOWN:dc(t.code);return new ds(e,t.message||"")}(o);n=new Ec(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uc(t,r.document.name),s=Lc(r.document.updateTime),o=r.document.createTime?Lc(r.document.createTime):As.min(),a=new Co({mapValue:{fields:r.document.fields}}),c=Do.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new bc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uc(t,r.document),s=r.readTime?Lc(r.readTime):As.min(),o=Do.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uc(t,r.document),s=r.removedTargetIds||[];n=new bc([],s,i,null)}else{if(!("filter"in e))return cs();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new uc(r,i),o=t.targetId;n=new _c(o,s)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return As.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?As.min():e.readTime?Lc(e.readTime):As.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=jc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=ta(r)?{documents:zc(t,r)}:{query:Gc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Rc(t,e.resumeToken);const r=Mc(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(As.min())>0){n.readTime=xc(t,e.snapshotVersion.toTimestamp());const r=Mc(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return cs()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=jc(this.serializer),e.removeTarget=t,this.e_(e)}}class Hu extends Gu{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(us(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=function(t,e){return t&&t.length>0?(us(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Lc(t.updateTime):Lc(e);return n.isEqual(As.min())&&(n=Lc(e)),new za(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Lc(t.commitTime);return this.listener.I_(n,e)}return us(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=jc(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Za)n={update:$c(t,e.key,e.value)};else if(e instanceof ic)n={delete:Vc(t,e.key)};else if(e instanceof tc)n={update:$c(t,e.key,e.data),updateMask:tu(e.fieldMask)};else{if(!(e instanceof sc))return cs();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof La)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Pa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Va)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ba)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw cs()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Oc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:cs()}(t,e.precondition)),n}(this.serializer,t)))};this.e_(e)}}
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
   */class Wu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new ds(ls.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.wo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ls.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ds(ls.UNKNOWN,t.toString())}))}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Co(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ls.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ds(ls.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class Qu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ss(e),this.f_=!1):is("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
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
   */class Xu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro((t=>{n.enqueueAndForget((async()=>{sh(this)&&(is("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=hs(t);e.C_.add(4),await Ju(e),e.M_.set("Unknown"),e.C_.delete(4),await Yu(e)}(this))}))})),this.M_=new Qu(n,r)}}async function Yu(t){if(sh(t))for(const e of t.v_)await e(!0)}async function Ju(t){for(const e of t.v_)await e(!1)}function Zu(t,e){const n=hs(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ih(n)?rh(n):Eh(n).Ho()&&eh(n,e))}function th(t,e){const n=hs(t),r=Eh(n);n.D_.delete(e),r.Ho()&&nh(n,e),0===n.D_.size&&(r.Ho()?r.Zo():sh(n)&&n.M_.set("Unknown"))}function eh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(As.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eh(t).u_(e)}function nh(t,e){t.x_.Oe(e),Eh(t).c_(e)}function rh(t){t.x_=new Ic({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Eh(t).start(),t.M_.g_()}function ih(t){return sh(t)&&!Eh(t).jo()&&t.D_.size>0}function sh(t){return 0===hs(t).C_.size}function oh(t){t.x_=void 0}async function ah(t){t.D_.forEach(((e,n)=>{eh(t,e)}))}async function ch(t,e){oh(t),ih(t)?(t.M_.w_(e),rh(t)):t.M_.set("Unknown")}async function uh(t,e,n){if(t.M_.set("Online"),e instanceof Ec&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.D_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.D_.delete(r),t.x_.removeTarget(r))}(t,e)}catch(n){is("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hh(t,n)}else if(e instanceof bc?t.x_.$e(e):e instanceof _c?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(As.min()))try{const e=await Au(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.D_.get(r);i&&t.D_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.D_.get(e);if(!r)return;t.D_.set(e,r.withResumeToken(to.EMPTY_BYTE_STRING,r.snapshotVersion)),nh(t,e);const i=new nu(r.target,e,n,r.sequenceNumber);eh(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){is("RemoteStore","Failed to raise snapshot:",e),await hh(t,e)}}async function hh(t,e,n){if(!Bs(e))throw e;t.C_.add(1),await Ju(t),t.M_.set("Offline"),n||(n=()=>Au(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{is("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Yu(t)}))}function lh(t,e){return e().catch((n=>hh(t,n,e)))}async function dh(t){const e=hs(t),n=Th(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;fh(e);)try{const t=await ku(e.localStore,r);if(null===t){0===e.b_.length&&n.Zo();break}r=t.batchId,gh(e,t)}catch(t){await hh(e,t)}mh(e)&&ph(e)}function fh(t){return sh(t)&&t.b_.length<10}function gh(t,e){t.b_.push(e);const n=Th(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function mh(t){return sh(t)&&!Th(t).jo()&&t.b_.length>0}function ph(t){Th(t).start()}async function yh(t){Th(t).E_()}async function vh(t){const e=Th(t);for(const n of t.b_)e.P_(n.mutations)}async function wh(t,e,n){const r=t.b_.shift(),i=ac.from(r,e,n);await lh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await dh(t)}async function bh(t,e){e&&Th(t).h_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return cs();case ls.CANCELLED:case ls.UNKNOWN:case ls.DEADLINE_EXCEEDED:case ls.RESOURCE_EXHAUSTED:case ls.INTERNAL:case ls.UNAVAILABLE:case ls.UNAUTHENTICATED:return!1;case ls.INVALID_ARGUMENT:case ls.NOT_FOUND:case ls.ALREADY_EXISTS:case ls.PERMISSION_DENIED:case ls.FAILED_PRECONDITION:case ls.ABORTED:case ls.OUT_OF_RANGE:case ls.UNIMPLEMENTED:case ls.DATA_LOSS:return!0}}(t)&&t!==ls.ABORTED}(e.code)){const n=t.b_.shift();Th(t).Yo(),await lh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await dh(t)}}(t,e),mh(t)&&ph(t)}async function _h(t,e){const n=hs(t);n.asyncQueue.verifyOperationInProgress(),is("RemoteStore","RemoteStore received new credentials");const r=sh(n);n.C_.add(3),await Ju(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Yu(n)}function Eh(t){return t.O_||(t.O_=function(t,e,n){const r=hs(t);return r.A_(),new Ku(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
   */}(t.datastore,t.asyncQueue,{ho:ah.bind(null,t),Io:ch.bind(null,t),a_:uh.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),ih(t)?rh(t):t.M_.set("Unknown")):(await t.O_.stop(),oh(t))}))),t.O_}function Th(t){return t.N_||(t.N_=function(t,e,n){const r=hs(t);return r.A_(),new Hu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:yh.bind(null,t),Io:bh.bind(null,t),T_:vh.bind(null,t),I_:wh.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await dh(t)):(await t.N_.stop(),t.b_.length>0&&(is("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
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
   */}class Ih{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ih(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ds(ls.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(ss("AsyncQueue",`${e}: ${t}`),Bs(t))return new ds(ls.UNAVAILABLE,`${e}: ${t}`);throw t}
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
   */class Ch{constructor(t){this.comparator=t?(e,n)=>t(e,n)||xs.comparator(e.key,n.key):(t,e)=>xs.comparator(t.key,e.key),this.keyedMap=wa(),this.sortedSet=new Hs(this.comparator)}static emptySet(t){return new Ch(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ch))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ch;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
   */class Ah{constructor(){this.B_=new Hs(xs.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):cs():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Dh{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Dh(t,e,Ch.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ua(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
   */class kh{constructor(){this.k_=void 0,this.listeners=[]}}class Nh{constructor(){this.queries=new ma((t=>ha(t)),ua),this.onlineState="Unknown",this.q_=new Set}}function Mh(t,e){const n=hs(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.K_(t)&&(r=!0);i.k_=t}}r&&Rh(n)}function xh(t,e,n){const r=hs(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Rh(t){t.q_.forEach((t=>{t.next()}))}class Oh{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Dh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=Dh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
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
   */class Lh{constructor(t){this.key=t}}class Ph{constructor(t){this.key=t}}class Fh{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ca(),this.mutatedKeys=Ca(),this._a=fa(t),this.aa=new Ch(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new Ah,r=e?e.aa:this.aa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=da(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ha(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this._a(h,a)>0||c&&this._a(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{aa:s,la:n,Zi:o,mutatedKeys:i}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return cs()}};return n(t)-n(e)}
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
   */(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n),r=null!=r&&r;const o=e&&!r?this.Ia():[],a=0===this.oa.size&&this.current&&!r?1:0,c=a!==this.sa;return this.sa=a,0!==s.length||c?{snapshot:new Dh(this.query,t.aa,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ah,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=Ca(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new Ph(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new Lh(n))})),e}da(t){this.ia=t.ls,this.oa=Ca();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Dh.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class Vh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Uh{constructor(t){this.key=t,this.Ra=!1}}class Bh{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new ma((t=>ha(t)),ua),this.fa=new Map,this.ga=new Set,this.pa=new Hs(xs.comparator),this.ya=new Map,this.wa=new fu,this.Sa={},this.ba=new Map,this.Da=au.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function jh(t,e){const n=function(t){const e=hs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=il.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kh.bind(null,e),e.Va.a_=Mh.bind(null,e.eventManager),e.Va.Fa=xh.bind(null,e.eventManager),e}(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const t=await function(t,e){const n=hs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qr.getTargetData(t,e).next((i=>i?(r=i,Us.resolve(r)):n.qr.allocateTargetId(t).next((i=>(r=new nu(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}(n.localStore,oa(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r,i){t.va=(e,n,r)=>async function(t,e,n,r){let i=e.view.ca(n);i.Zi&&(i=await Mu(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return Zh(t,e.targetId,a.Ta),a.snapshot}(t,e,n,r);const s=await Mu(t.localStore,e,!0),o=new Fh(e,s.ls),a=o.ca(s.documents),c=wc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Zh(t,n,u.Ta);const h=new Vh(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Zu(n.remoteStore,t)}return i}async function qh(t,e){const n=hs(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter((t=>!ua(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),th(n.remoteStore,r.targetId),Yh(n,r.targetId)})).catch(Vs)):(Yh(n,r.targetId),await Nu(n.localStore,r.targetId,!0))}async function $h(t,e,n){const r=function(t){const e=hs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wh.bind(null,e),e}(t);try{const t=await function(t,e){const n=hs(t),r=Cs.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ca());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ya(),c=Ca();return n.ss.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Ya(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new tc(t.key,e,Ao(e.value.mapValue),Ga.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ba(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Sa[t.currentUser.toKey()];r||(r=new Hs(Is)),r=r.insert(e,n),t.Sa[t.currentUser.toKey()]=r}(r,t.batchId,n),await nl(r,t.changes),await dh(r.remoteStore)}catch(t){const e=Sh(t,"Failed to persist write");n.reject(e)}}async function zh(t,e){const n=hs(t);try{const t=await Du(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ya.get(e);r&&(us(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?us(r.Ra):t.removedDocuments.size>0&&(us(r.Ra),r.Ra=!1))})),await nl(n,t,e)}catch(t){await Vs(t)}}function Gh(t,e,n){const r=hs(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ma.forEach(((n,r)=>{const i=r.view.Q_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=hs(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Q_(e)&&(r=!0)})),r&&Rh(n)}(r.eventManager,e),t.length&&r.Va.a_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kh(t,e,n){const r=hs(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let t=new Hs(xs.comparator);t=t.insert(s,Do.newNoDocument(s,As.min()));const n=Ca().add(s),i=new vc(As.min(),new Map,new Hs(Is),t,n);await zh(r,i),r.pa=r.pa.remove(s),r.ya.delete(e),el(r)}else await Nu(r.localStore,e,!1).then((()=>Yh(r,e,n))).catch(Vs)}async function Hh(t,e){const n=hs(t),r=e.batch.batchId;try{const t=await function(t,e){const n=hs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Us.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);us(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ca();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);Xh(n,r,null),Qh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nl(n,t)}catch(t){await Vs(t)}}async function Wh(t,e,n){const r=hs(t);try{const t=await function(t,e){const n=hs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(us(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Xh(r,e,n),Qh(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nl(r,t)}catch(n){await Vs(n)}}function Qh(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function Xh(t,e,n){const r=hs(t);let i=r.Sa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||Jh(t,e)}))}function Jh(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(th(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),el(t))}function Zh(t,e,n){for(const r of n)r instanceof Lh?(t.wa.addReference(r.key,e),tl(t,r)):r instanceof Ph?(is("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Jh(t,r.key)):cs()}function tl(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(is("SyncEngine","New document in limbo: "+n),t.ga.add(r),el(t))}function el(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new xs(ks.fromString(e)),r=t.Da.next();t.ya.set(r,new Uh(n)),t.pa=t.pa.insert(n,r),Zu(t.remoteStore,new nu(oa(na(n.path)),r,"TargetPurposeLimboResolution",js._e))}}async function nl(t,e,n){const r=hs(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((t,a)=>{o.push(r.va(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Eu.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Va.a_(i),await async function(t,e){const n=hs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Us.forEach(e,(e=>Us.forEach(e.ki,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Us.forEach(e.qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Bs(t))throw t;is("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(e,i)}}}(r.localStore,s))}async function rl(t,e){const n=hs(t);if(!n.currentUser.isEqual(e)){is("SyncEngine","User change. New user:",e.toKey());const t=await Cu(n.localStore,e);n.currentUser=e,function(t,e){t.ba.forEach((t=>{t.forEach((t=>{t.reject(new ds(ls.CANCELLED,e))}))})),t.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await nl(n,t._s)}}function il(t,e){const n=hs(t),r=n.ya.get(e);if(r&&r.Ra)return Ca().add(r.key);{let t=Ca();const r=n.fa.get(e);if(!r)return t;for(const e of r){const r=n.ma.get(e);t=t.unionWith(r.view.ua)}return t}}class sl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$u(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,r){return new Su(t,e,n,r)}(this.persistence,new Iu,t.initialUser,this.serializer)}createPersistence(t){return new wu(_u.jr,this.serializer)}createSharedClientState(t){return new Ru}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ol{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Gh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=rl.bind(null,this.syncEngine),await async function(t,e){const n=hs(t);e?(n.C_.delete(2),await Yu(n)):e||(n.C_.add(2),await Ju(n),n.M_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Nh}createDatastore(t){const e=$u(t.databaseInfo.databaseId),n=function(t){return new ju(t)}(t.databaseInfo);return function(t,e,n,r){return new Wu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Xu(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Gh(this.syncEngine,t,0)),Lu.D()?new Lu:new Ou)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Bh(t,e,n,r,i,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=hs(t);is("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await Ju(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
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
   */class al{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):ss("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
   */class cl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=ts.UNAUTHENTICATED,this.clientId=Ts.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{is("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(is("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ds(ls.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),is("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Cu(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function hl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){is("FirestoreClient","Using user provided OfflineComponentProvider");try{await ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===ls.FAILED_PRECONDITION||t.code===ls.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await ul(t,new sl)}}else is("FirestoreClient","Using default OfflineComponentProvider"),await ul(t,new sl);return t._offlineComponents}(t);is("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>_h(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>_h(e.remoteStore,n))),t._onlineComponents=e}async function ll(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(is("FirestoreClient","Using user provided OnlineComponentProvider"),await hl(t,t._uninitializedComponentsProvider._online)):(is("FirestoreClient","Using default OnlineComponentProvider"),await hl(t,new ol))),t._onlineComponents}async function dl(t){const e=await ll(t),n=e.eventManager;return n.onListen=jh.bind(null,e.syncEngine),n.onUnlisten=qh.bind(null,e.syncEngine),n
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
   */}function fl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
   */}const gl=new Map;
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
   */function ml(t,e,n){if(!n)throw new ds(ls.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pl(t){if(!xs.isDocumentKey(t))throw new ds(ls.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yl(t){if(xs.isDocumentKey(t))throw new ds(ls.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":cs()}function wl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ds(ls.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new ds(ls.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
   */class bl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ds(ls.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ds(ls.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new ds(ls.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ds(ls.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ds(ls.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ds(ls.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
   */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _l{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ds(ls.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ds(ls.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ms;switch(t.type){case"firstParty":return new ws(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ds(ls.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=gl.get(t);e&&(is("ComponentProvider","Removing Datastore"),gl.delete(t),e.terminate())}(this),Promise.resolve()}}function El(t,e,n,r={}){var i;const s=(t=wl(t,_l))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=ts.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[E(JSON.stringify({alg:"none",type:"JWT"})),E(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ds(ls.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ts(s)}t._authCredentials=new ps(new gs(e,n))}}
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
   */class Tl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Tl(this.firestore,t,this._query)}}class Il{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Il(this.firestore,t,this._key)}}class Sl extends Tl{constructor(t,e,n){super(t,e,na(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Il(this.firestore,null,new xs(t))}withConverter(t){return new Sl(this.firestore,t,this._path)}}function Cl(t,e,...n){if(t=O(t),1===arguments.length&&(e=Ts.newId()),ml("doc","path",e),t instanceof _l){const r=ks.fromString(e,...n);return pl(r),new Il(t,null,new xs(r))}{if(!(t instanceof Il||t instanceof Sl))throw new ds(ls.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ks.fromString(e,...n));return pl(r),new Il(t.firestore,t instanceof Sl?t.converter:null,new xs(r))}}
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
   */class Al{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new zu(this,"async_queue_retry"),this.iu=()=>{const t=qu();t&&is("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=qu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=qu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new fs;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Bs(t))throw t;is("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
   */(t);throw ss("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=Ih.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(r),r}su(){this.eu&&cs()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function Dl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of e)if(t in n&&"function"==typeof n[t])return!0;return!1}
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
   */(t,["next","error","complete"])}class kl extends _l{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Al,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ml(this),this._firestoreClient.terminate()}}function Nl(t){return t._firestoreClient||Ml(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ml(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new co(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,fl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cl(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
   */class xl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xl(to.fromBase64String(t))}catch(t){throw new ds(ls.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new xl(to.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
   */class Rl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ds(ls.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ms(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
   */class Ol{constructor(t){this._methodName=t}}
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
   */class Ll{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ds(ls.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ds(ls.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Is(this._lat,t._lat)||Is(this._long,t._long)}}
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
   */const Pl=/^__.*__$/;class Fl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new tc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Za(t,this.data,e,this.fieldTransforms)}}function Vl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw cs()}}class Ul{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Ul(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Yl(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(Vl(this.Iu)&&Pl.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Bl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||$u(t)}pu(t,e,n,r=!1){return new Ul({Iu:t,methodName:e,gu:n,path:Ms.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jl(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new Bl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ql(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Hl("Data must be an object, but it was:",o,r);const a=Gl(r,o);let c,u;if(s.merge)c=new Js(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Wl(e,r,n);if(!o.contains(i))throw new ds(ls.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Jl(t,i)||t.push(i)}c=new Js(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Fl(new Co(a),c,u)}class $l extends Ol{_toFieldTransform(t){return new $a(t.path,new La)}isEqual(t){return t instanceof $l}}function zl(t,e){if(Kl(t=O(t)))return Hl("Unsupported field value:",e,t),Gl(t,e);if(t instanceof Ol)return function(t,e){if(!Vl(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=zl(i,e.Vu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=O(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Na(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Cs.fromDate(t);return{timestampValue:xc(e.serializer,n)}}if(t instanceof Cs){const n=new Cs(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xc(e.serializer,n)}}if(t instanceof Ll)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof xl)return{bytesValue:Rc(e.serializer,t._byteString)};if(t instanceof Il){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Pc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${vl(t)}`)}(t,e)}function Gl(t,e){const n={};return Ks(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,((t,r)=>{const i=zl(r,e.Eu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Kl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Cs||t instanceof Ll||t instanceof xl||t instanceof Il||t instanceof Ol)}function Hl(t,e,n){if(!Kl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=vl(n);throw"an object"===r?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Wl(t,e,n){if((e=O(e))instanceof Rl)return e._internalPath;if("string"==typeof e)return Xl(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ql=new RegExp("[~\\*/\\[\\]]");function Xl(t,e,n){if(e.search(Ql)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rl(...e.split("."))._internalPath}catch(r){throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ds(ls.INVALID_ARGUMENT,a+t+c)}function Jl(t,e){return t.some((t=>t.isEqual(e)))}
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
   */class Zl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Il(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new td(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ed("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class td extends Zl{data(){return super.data()}}function ed(t,e){return"string"==typeof e?Xl(t,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}
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
   */class nd{}class rd extends nd{}class id extends rd{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new id(t,e,n)}_apply(t){const e=this._parse(t);return ud(t._query,e),new Tl(t.firestore,t.converter,aa(t._query,e))}_parse(t){const e=jl(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ds(ls.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){cd(o,s);const e=[];for(const n of o)e.push(ad(r,t,n));a={arrayValue:{values:e}}}else a=ad(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||cd(o,s),a=function(t,e,n,r=!1){return zl(n,t.pu(r?4:3,e))}(n,e,o,"in"===s||"not-in"===s);return Lo.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class sd extends nd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new sd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Po.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const t of r)ud(n,t),n=aa(n,t)}(t._query,e),new Tl(t.firestore,t.converter,aa(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class od extends rd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new od(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ds(ls.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ds(ls.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xo(e,n)}(t._query,this._field,this._direction);return new Tl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ea(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function ad(t,e,n){if("string"==typeof(n=O(n))){if(""===n)throw new ds(ls.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ia(e)&&-1!==n.indexOf("/"))throw new ds(ls.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ks.fromString(n));if(!xs.isDocumentKey(r))throw new ds(ls.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wo(t,new xs(r))}if(n instanceof Il)return wo(t,n._key);throw new ds(ls.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function cd(t,e){if(!Array.isArray(t)||0===t.length)throw new ds(ls.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ud(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ds(ls.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ds(ls.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hd{convertValue(t,e="none"){switch(lo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ro(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(io(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw cs()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Gs(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Ll(ro(t.latitude),ro(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=oo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ao(t));default:return null}}convertTimestamp(t){const e=no(t);return new Cs(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ks.fromString(t);us(eu(n));const r=new uo(n.get(1),n.get(3)),i=new xs(n.popFirst(5));return r.isEqual(e)||ss(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
class ld{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dd extends Zl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ed("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class fd extends dd{data(t={}){return super.data(t)}}class gd{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ld(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new fd(this._firestore,this._userDataWriter,n.key,n,new ld(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ds(ls.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new fd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ld(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new fd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ld(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:md(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function md(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return cs()}}class pd extends hd{constructor(t){super(),this.firestore=t}convertBytes(t){return new xl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Il(this.firestore,null,e)}}function yd(t,e){return function(t,e){const n=new fs;return t.asyncQueue.enqueueAndForget((async()=>$h(await function(t){return ll(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Nl(t),e)}!function(t,e=!0){!function(t){es=t}("10.7.1"),vt(new L("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new kl(new ys(t.getProvider("auth-internal")),new _s(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ds(ls.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Et(Zi,"4.4.0",t),Et(Zi,"4.4.0","esm2017")}();
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
Et("firebase","10.7.1","app");_t({apiKey:"AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",authDomain:"howardlucas-7fcb0.firebaseapp.com",projectId:"howardlucas-7fcb0",storageBucket:"howardlucas-7fcb0.appspot.com",messagingSenderId:"945745527827",appId:"1:945745527827:web:3e282534ecdd22c66eabe6",measurementId:"G-QEE9Y648VB"});const vd=function(t,e){const n="object"==typeof t?t:function(t=ft){const e=mt.get(t);if(!e&&t===ft&&A())return _t();if(!e)throw wt.create("no-app",{appName:t});return e}(),r="string"==typeof t?t:e||"(default)",i=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=C("firestore");t&&El(i,...t)}return i}(),wd=function(t,e,...n){if(t=O(t),ml("collection","path",e),t instanceof _l){const r=ks.fromString(e,...n);return yl(r),new Sl(t,null,r)}{if(!(t instanceof Il||t instanceof Sl))throw new ds(ls.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ks.fromString(e,...n));return yl(r),new Sl(t.firestore,null,r)}}(vd,"contacts"),bd=document.querySelector(".contact-form"),_d=document.querySelector(".feedback"),Ed=document.querySelector(".showcontacts"),Td=function(t,e,...n){let r=[];e instanceof nd&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof sd)).length,n=t.filter((t=>t instanceof id)).length;if(e>1||e>0&&n>0)throw new ds(ls.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
   */(r);for(const e of r)t=e._apply(t);return t}(wd,function(t,e="asc"){const n=e,r=ed("orderBy",t);return od._create(r,n)}("createdAt"));!function(t,...e){var n,r,i;t=O(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Dl(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Dl(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,h;if(t instanceof Il)u=wl(t.firestore,kl),h=na(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const r=n.docs.get(e._key),i=new pd(t);return new dd(t,i,e._key,r,new ld(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=wl(t,Tl);u=wl(n.firestore,kl),h=n._query;const r=new pd(u);c={next:t=>{e[o]&&e[o](new gd(u,r,n,t))},error:e[o+1],complete:e[o+2]},function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ds(ls.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}(function(t,e,n,r){const i=new al(r),s=new Oh(e,i,n);t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=hs(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new kh),i)try{s.k_=await n.onListen(r)}catch(t){const n=Sh(t,`Initialization of query '${la(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Rh(n)}(await dl(t),s)))})(Nl(u),h,a,c)}(Td,(t=>{let e=[];t.docs.forEach((t=>{t.data().createdAt&&e.push({...t.data(),id:t.id})})),e.forEach((t=>{const e=v(t.createdAt.toDate(),{addSuffix:!0});let n=`<div data-id="${t.id}">\n    <h3>${t.name}</h3>\n    <p>${t.email}</p>\n    <p>${e}</p>\n    </div>`;Ed.innerHTML+=n})),bd.addEventListener("submit",(t=>{t.preventDefault(),function(t,e){const n=wl(t.firestore,kl),r=Cl(t),i=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t.converter,e);return yd(n,[ql(jl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ga.exists(!1))]).then((()=>r))}(wd,{name:bd.name.value,email:bd.email.value,createdAt:new $l("serverTimestamp")}).then((()=>{_d.style.display="block",setTimeout((()=>{_d.style.display="none",bd.reset()}),5e3)})).catch((t=>{console.log(t.message)}))})),Ed.addEventListener("click",(t=>{if("H3"===t.target.tagName){const e=t.target.parentElement.getAttribute("data-id");!function(t){yd(wl(t.firestore,kl),[new ic(t._key,Ga.none())])}(Cl(vd,"contacts",e))}}))}))}();