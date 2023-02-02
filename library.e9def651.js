function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var i={},o={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var i,o;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var r={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},o=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("lY1JX",(function(t,e){var n=r("krGWQ");function i(){try{"dark"===localStorage.getItem("theme")?(n.refs.bodyTheme.classList.add("theme-dark"),n.refs.changeThemeBtn.checked=!0):n.refs.bodyTheme.classList.remove("theme-dark")}catch(t){}}n.refs.changeThemeBtn.addEventListener("click",(function(){"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark");i()})),i()})),r.register("krGWQ",(function(e,n){t(e.exports,"refs",(function(){return i}));const i={API_URL:"https://api.themoviedb.org/3/",API_KEY:"158819e65eb0fbf8513ba7b934c25216",closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),title:document.querySelector(".table__title"),voteAverage:document.querySelector(".table__value--orange"),voteCount:document.querySelector(".table__value--grey"),popularity:document.querySelector(".js-film-popularity"),originalTitle:document.querySelector(".js-film-original-title"),genre:document.querySelector(".js-film-genre"),about:document.querySelector(".js-film-about"),modalImg:document.querySelector(".modal__img"),galleryEl:document.querySelector(".js-gallery"),modalText:document.querySelector(".modal__text"),modalBtnClose:document.querySelector(".modal__btn-close"),loginForm:document.querySelector(".login-form"),signupForm:document.querySelector(".registration-form"),logout:document.querySelector(".js-btn-exit"),logBtnContainer:document.querySelector(".js-btn-in"),exitBtnContainer:document.querySelector(".js-btn-exit"),loginFormBtn:document.querySelector("#data-formBtn-login"),regFormBtn:document.querySelector("#data-formBtn-reg"),logForm:document.querySelector("#data-login-box"),regForm:document.querySelector("#data-reg-box"),libraryHidden:document.querySelector(".library_hidden"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".inputsearch"),galleryEl:document.querySelector(".js-gallery"),seacrhError:document.querySelector(".search-error"),loader:document.querySelector(".loader"),galleryElMain:document.querySelector(".gallery"),changeThemeBtn:document.querySelector(".switch-checkbox"),bodyTheme:document.querySelector("body"),buttonTop:document.getElementById("btnTop"),openBtnRegistration:document.querySelector("[data-modal-reg-open]"),closeBtnRegistration:document.querySelector("[data-modal-reg-close]"),modalRegistration:document.querySelector("[data-reg-modal]"),bodyEl:document.body,openBtn:document.querySelector(".footer_btn"),closeBtnStudents:document.querySelector(".modal-window__button"),backdropEl:document.querySelectorAll(".back-drop"),modalEl:document.querySelector(".modal-window"),galleryStudents:document.querySelector(".gallery_students"),paginationBox:document.querySelector(".pagination"),trailerBtn:document.querySelector(".js-trailer__btn"),modalTrailer:document.querySelector(".trailer"),back_drop:document.querySelector("[data-modal-trailer]"),closeBtn:document.querySelector("[data-modal-close-trailer]"),getWatchedBtn:document.querySelector(".js-watched-btn"),getQueueBtn:document.querySelector(".js-queue-btn"),watchBtn:document.querySelector('[data-action="watch"]'),queueBtn:document.querySelector('[data-action="queue"]')}})),r.register("gjiCh",(function(e,n){t(e.exports,"default",(function(){return r}));const i={loader:document.querySelector(".loader")};function o(){i.loader.classList.add("loader-hidden")}function r(){document.querySelector(".movie__poster");i.loader.classList.remove("loader-hidden"),"complete"===document.readyState&&setTimeout(o,500)}document.addEventListener("readystatechange",r)})),r.register("5AVro",(function(e,n){t(e.exports,"default",(function(){return s}));var i=r("krGWQ"),o=r("2ix2C");function s(t){const e=i.refs.watchBtn,n=i.refs.queueBtn;(0,o.checker)(t.id,e,n),e.addEventListener("click",(function(){if(t){const n=e.textContent;"Add to watched"==n&&(0,o.createNewWatchedDataItem)(t.id,t),"Remove from watched"==n&&(0,o.deleteWatchedDataItem)(t.id,t)}})),n.addEventListener("click",(function(){if(t){const e=n.textContent;"Add to queue"==e&&(0,o.createNewQueueDataItem)(t.id,t),"Remove from queue"==e&&(0,o.deleteQueueDataItem)(t.id,t)}}))}})),r.register("2ix2C",(function(e,n){t(e.exports,"createNewQueueDataItem",(function(){return d})),t(e.exports,"createNewWatchedDataItem",(function(){return m})),t(e.exports,"deleteWatchedDataItem",(function(){return y})),t(e.exports,"deleteQueueDataItem",(function(){return v})),t(e.exports,"checker",(function(){return b})),t(e.exports,"markUpWatched",(function(){return w})),t(e.exports,"markUpQueue",(function(){return x})),r("gKkQl");var i=r("ix4Jr");r("eyjy7");var o=r("8erlf");r("ftYLF");var s=r("3PjDZ"),a=r("7Y9D8"),l=r("bmZal"),c=r("krGWQ");const u=new URL(r("fOhbs")),h=((0,i.initializeApp)({apiKey:"AIzaSyDpHH4vTWioKzjyjXO2I80-uE6v02JiNMc",authDomain:"filmoteka-students-goit.firebaseapp.com",projectId:"filmoteka-students-goit",storageBucket:"filmoteka-students-goit.appspot.com",messagingSenderId:"474370553773",appId:"1:474370553773:web:273214bc0fea8263371324",measurementId:"G-8CJGR7QN75"}),(0,s.getFirestore)());(0,o.n)();async function d(t,e){const n=t,i=e;(0,o.n)().onAuthStateChanged((t=>{if(t){const e=t.email;p(e,"queue").then((async t=>(null==t.queue[0]?t.queue[0]=i:t.queue.find((t=>t.id===n))||t.queue.push(i),t))).then((async t=>{await f(e,t,"queue")}))}else a.Notify.info("You need to log in")}))}async function f(t,e,n){const i=(0,s.doc)(h,t,n);await(0,s.setDoc)(i,e,{merge:!0}).then((()=>{})).catch((t=>a.Notify.failure(t.message)))}async function m(t,e){const n=t,i=e;(0,o.n)().onAuthStateChanged((t=>{if(t){const e=t.email;g(e,"watched").then((async t=>(null==t.watched[0]?t.watched[0]=i:t.watched.find((t=>t.id===n))||t.watched.push(i),t))).then((async t=>{await f(e,t,"watched")}))}else a.Notify.info("You need to log in")}))}async function p(t,e){const n=(0,s.doc)(h,t,e),i=await(0,s.getDoc)(n),o={queue:[]};return i.exists()?(void 0===i.data().queue||i.data().queue.map((t=>{o.queue.push(t)})),o):o}async function g(t,e){const n=(0,s.doc)(h,t,e),i=await(0,s.getDoc)(n),o={watched:[]};return i.exists()?(void 0===i.data().watched||i.data().watched.map((t=>{o.watched.push(t)})),o):o}async function y(t,e){const n=t;(0,o.n)().onAuthStateChanged((t=>{if(t){const e=t.email;g(e,"watched").then((async t=>{if(null==t.watched[0])return t;for(let e=0;e<t.watched.length;e+=1)if(t.watched[e].id===n)return t.watched.splice(e,1),t})).then((async t=>{await f(e,t,"watched")}))}else a.Notify.info("You need to log in")}))}async function v(t,e){const n=t;(0,o.n)().onAuthStateChanged((t=>{if(t){const e=t.email;p(e,"queue").then((async t=>{if(null==t.queue[0])return t;for(let e=0;e<t.queue.length;e+=1)if(t.queue[e].id===n)return t.queue.splice(e,1),t})).then((async t=>{await f(e,t,"queue")}))}else a.Notify.info("You need to log in")}))}async function b(t,e,n){(0,o.n)().onAuthStateChanged((i=>{if(i){const o=i.email,r=(0,s.collection)(h,o);(0,s.onSnapshot)(r,(i=>{let o=[];i.docs.forEach((t=>{o.push({...t.data()})}));let[r,s]=o;r.queue.find((e=>e.id===t))?(n.classList.add("button__accent"),n.textContent="Remove from queue"):(n.textContent="Add to queue",n.classList.remove("button__accent")),s.watched.find((e=>e.id===t))?(e.classList.add("button__accent"),e.textContent="Remove from watched"):(e.textContent="Add to watched",e.classList.remove("button__accent"))}))}}))}async function w(){(0,o.n)().onAuthStateChanged((t=>{if(t){const e=t.email,n=(0,s.collection)(h,e);(0,s.onSnapshot)(n,(t=>{let e=[];t.docs.forEach((t=>{e.push({...t.data()})}));let[n,i]=e;try{i.watched.length?(0,l.createCardMarkup)(i.watched):c.refs.galleryEl.innerHTML=`<img src="${u}" alt="empty library" />`}catch(t){console.log(t)}localStorage.setItem("watched",JSON.stringify(i.watched))}))}}))}async function x(){(0,o.n)().onAuthStateChanged((t=>{if(t){const e=t.email,n=(0,s.collection)(h,e);(0,s.onSnapshot)(n,(t=>{let e=[];t.docs.forEach((t=>{e.push({...t.data()})}));let[n,i]=e;(0,l.createCardMarkup)(n.queue);try{n.queue.length?(0,l.createCardMarkup)(n.queue):c.refs.galleryEl.innerHTML=`<img src="${u}" alt="empty library" />`}catch(t){console.log(t)}localStorage.setItem("queue",JSON.stringify(n.queue))}))}}))}})),r.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return r("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return r("ix4Jr").registerVersion}));r("ix4Jr");
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
(0,r("ix4Jr").registerVersion)("firebase","9.16.0","app")})),r.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return b})),t(e.exports,"SDK_VERSION",(function(){return C})),t(e.exports,"initializeApp",(function(){return I})),t(e.exports,"getApp",(function(){return E})),t(e.exports,"registerVersion",(function(){return N}));var i=r("4a6xH"),o=r("7vF8m"),s=r("ffjl9"),a=r("cCiiD");s=r("ffjl9");
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
class l{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const c="@firebase/app",u="0.9.1",h=new(0,o.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},m=new Map,p=new Map;function g(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(p.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;p.set(e,t);for(const e of m.values())g(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function b(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
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
const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x=new(0,s.ErrorFactory)("app","Firebase",w);
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
class k{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
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
 */const C="9.16.0";function I(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const o=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),r=o.name;if("string"!=typeof r||!r)throw x.create("bad-app-name",{appName:String(r)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw x.create("no-options");const a=m.get(r);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(o,a.config))return a;throw x.create("duplicate-app",{appName:r})}const l=new(0,i.ComponentContainer)(r);for(const t of p.values())l.addComponent(t);const c=new k(n,o,l);return m.set(r,c),c}function E(t="[DEFAULT]"){const e=m.get(t);if(!e&&t===d)return I();if(!e)throw x.create("no-app",{appName:t});return e}function N(t,e,n){var o;let r=null!==(o=f[t])&&void 0!==o?o:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}y(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
const S="firebase-heartbeat-store";let T=null;function _(){return T||(T=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(S)}}).catch((t=>{throw x.create("idb-open",{originalErrorMessage:t.message})}))),T}async function A(t,e){try{const n=(await _()).transaction(S,"readwrite"),i=n.objectStore(S);return await i.put(e,D(t)),n.done}catch(t){if(t instanceof s.FirebaseError)h.warn(t.message);else{const e=x.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});h.warn(e.message)}}}function D(t){return`${t.name}!${t.options.appId}`}
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
 */class O{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=L(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const o of t){const t=n.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),M(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new R(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function L(){return(new Date).toISOString().substring(0,10)}class R{async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await _()).transaction(S).objectStore(S).get(D(t))}catch(t){if(t instanceof s.FirebaseError)h.warn(t.message);else{const e=x.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});h.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var P;P="",y(new(0,i.Component)("platform-logger",(t=>new l(t)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(t=>new O(t)),"PRIVATE")),N(c,u,P),N(c,u,"esm2017"),N("fire-js","")})),r.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return o})),t(e.exports,"ComponentContainer",(function(){return l}));var i=r("ffjl9");class o{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const s="[DEFAULT]";
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
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,i.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&t(r,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===s?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class l{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),r.register("ffjl9",(function(n,i){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return l})),t(n.exports,"base64Decode",(function(){return c})),t(n.exports,"getDefaultEmulatorHost",(function(){return d})),t(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return f})),t(n.exports,"getDefaultAppConfig",(function(){return m})),t(n.exports,"getExperimentalSetting",(function(){return p})),t(n.exports,"Deferred",(function(){return g})),t(n.exports,"createMockUserToken",(function(){return y})),t(n.exports,"getUA",(function(){return v})),t(n.exports,"isMobileCordova",(function(){return b})),t(n.exports,"isBrowserExtension",(function(){return w})),t(n.exports,"isReactNative",(function(){return x})),t(n.exports,"isIE",(function(){return k})),t(n.exports,"isSafari",(function(){return C})),t(n.exports,"isIndexedDBAvailable",(function(){return I})),t(n.exports,"validateIndexedDBOpenable",(function(){return E})),t(n.exports,"FirebaseError",(function(){return N})),t(n.exports,"ErrorFactory",(function(){return S})),t(n.exports,"isEmpty",(function(){return _})),t(n.exports,"deepEqual",(function(){return A})),t(n.exports,"querystring",(function(){return O})),t(n.exports,"querystringDecode",(function(){return L})),t(n.exports,"extractQuerystring",(function(){return R})),t(n.exports,"createSubscribe",(function(){return M})),t(n.exports,"getModularInstance",(function(){return U}));var o=r("4TNnu");
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
 */const s=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296==(64512&o)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++i)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const o=t[e],r=e+1<t.length,s=r?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=o>>2,u=(3&o)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=t[n++];e[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const o=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==o||null==r||null==s||null==a)throw Error();const l=o<<2|r>>4;if(i.push(l),64!==s){const t=r<<4&240|s>>2;if(i.push(t),64!==a){const t=s<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){return function(t){const e=s(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
 */
const u=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,h=()=>{try{return u()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},d=t=>{var e,n;return null===(n=null===(e=h())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},f=t=>{const e=d(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},m=()=>{var t;return null===(t=h())||void 0===t?void 0:t.config},p=t=>{var e;return null===(e=h())||void 0===e?void 0:e[`_${t}`]};
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
class g{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */function y(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(r)),""].join(".")}
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
 */function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function w(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function x(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){const t=v();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){return!function(){var t;const n=null===(t=h())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){try{return"object"==typeof indexedDB}catch(t){return!1}}function E(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class N extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],r=o?function(t,e){return t.replace(T,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${r} (${i}).`;return new N(i,s,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const T=/\{\$([^}]+)}/g;
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
 */function _(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const n=t[o],r=e[o];if(D(n)&&D(r)){if(!A(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function D(t){return null!==t&&"object"==typeof t}
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
function O(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function L(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function R(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function M(t,e){const n=new P(t,e);return n.subscribe.bind(n)}class P{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=F),void 0===i.error&&(i.error=F),void 0===i.complete&&(i.complete=F);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),o}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function F(){}
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
function U(t){return t&&t._delegate?t._delegate:t}})),r.register("4TNnu",(function(t,e){var n,i,o=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var t=a(d);u=!0;for(var e=c.length;e;){for(l=c,c=[];++h<e;)l&&l[h].run();h=-1,e=c.length}l=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new m(t,e)),1!==c.length||u||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),r.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return o})),t(e.exports,"Logger",(function(){return u})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return d}));
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
const i=[];var o,r;(r=o||(o={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,l={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),o=l[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${i}]  ${t.name}:`,...n)};class u{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}}function h(t){i.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...r)=>{const s=r.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:o[n].toLowerCase(),message:s,args:r,type:e.name})}}}})),r.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return o}));var i=r("ekHjI");i=r("ekHjI");function o(t,e,{blocked:n,upgrade:o,blocking:r,terminated:s}={}){const a=indexedDB.open(t,e),l=(0,i.w)(a);return o&&a.addEventListener("upgradeneeded",(t=>{o((0,i.w)(a.result),t.oldVersion,t.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),l}const s=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(l.get(e))return l.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!s.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),o&&r.done]))[0]};return l.set(e,r),r}(0,i.r)((t=>({...t,get:(e,n,i)=>c(e,n)||t.get(e,n,i),has:(e,n)=>!!c(e,n)||t.has(e,n)})))})),r.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return m})),t(e.exports,"r",(function(){return h}));let i,o;const r=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let u={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return s.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){u=t(u)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),m(r.get(this))}:function(...e){return m(t.apply(p(this),e))}:function(e,...n){const i=t.call(p(this),e,...n);return a.set(i,e.sort?e.sort():[e]),m(i)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(s.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)}));s.set(t,e)}(t),e=t,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,u):t);var e}function m(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{e(m(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&r.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(l.has(t))return l.get(t);const e=f(t);return e!==t&&(l.set(t,e),c.set(e,t)),e}const p=t=>c.get(t)})),r.register("eyjy7",(function(e,n){t(e.exports,"getAuth",(function(){return r("8erlf").n})),t(e.exports,"createUserWithEmailAndPassword",(function(){return r("8erlf").a5})),t(e.exports,"signInWithEmailAndPassword",(function(){return r("8erlf").a6})),t(e.exports,"signOut",(function(){return r("8erlf").y})),t(e.exports,"onAuthStateChanged",(function(){return r("8erlf").v})),r("1iO0g")})),r.register("1iO0g",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return r("8erlf").a5})),t(e.exports,"getAuth",(function(){return r("8erlf").n})),t(e.exports,"onAuthStateChanged",(function(){return r("8erlf").v})),t(e.exports,"signInWithEmailAndPassword",(function(){return r("8erlf").a6})),t(e.exports,"signOut",(function(){return r("8erlf").y})),r("ffjl9"),r("ix4Jr"),r("7vF8m"),r("4a6xH");r("8erlf")})),r.register("8erlf",(function(e,n){t(e.exports,"a5",(function(){return Vt})),t(e.exports,"a6",(function(){return jt})),t(e.exports,"v",(function(){return Bt})),t(e.exports,"y",(function(){return Wt})),t(e.exports,"n",(function(){return on}));var i=r("ffjl9"),o=r("ix4Jr"),s=r("7vF8m"),a=r("l73V3"),l=r("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,s.Logger)("@firebase/auth");function f(t,...e){d.logLevel<=s.LogLevel.ERROR&&d.error(`Auth (${o.SDK_VERSION}): ${t}`,...e)}
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
 */function m(t,...e){throw y(t,...e)}function p(t,...e){return y(t,...e)}function g(t,e,n){const o=Object.assign(Object.assign({},u()),{[e]:n});return new(0,i.ErrorFactory)("auth","Firebase",o).create(e,{appName:t.name})}function y(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return h.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||b(e)}
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
 */const x=new Map;function k(t){w(t instanceof Function,"Expected a class definition");let e=x.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x.set(t,e),e)}
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
function C(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===E()||"https:"===E()}function E(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
class N{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(I()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
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
 */function S(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class T{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const _={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},A=new N(3e4,6e4);
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
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function O(t,e,n,o,r={}){return L(t,r,(async()=>{let r={},s={};o&&("GET"===e?s=o:r={body:JSON.stringify(o)});const a=(0,i.querystring)(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),T.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))}))}async function L(t,e,n){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},_),e);try{const e=new P(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw F(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw F(t,"user-disabled",r);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(t,a,s);m(t,a)}}catch(e){if(e instanceof i.FirebaseError)throw e;m(t,"network-request-failed")}}async function R(t,e,n,i,o={}){const r=await O(t,e,n,i,o);return"mfaPendingCredential"in r&&m(t,"multi-factor-auth-required",{_serverResponse:r}),r}function M(t,e,n,i){const o=`${e}${n}?${i}`;return t.config.emulator?S(t.config,o):`${t.config.apiScheme}://${o}`}class P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),A.get())}))}}function F(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=p(t,e,i);return o.customData._tokenResponse=n,o}
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
function U(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function z(t){return 1e3*Number(t)}function V(t){const[e,n,o]=t.split(".");if(void 0===e||void 0===n||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.base64Decode)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(t){return f("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function j(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof i.FirebaseError&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class B{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class W{_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function H(t){var e;const n=t.auth,i=await t.getIdToken(),o=await j(t,async function(t,e){return O(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));v(null==o?void 0:o.users.length,n,"internal-error");const r=o.users[0];t._notifyReloadListener(r);const s=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=(0,a.__rest)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=t.providerData,u=s,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const h=t.isAnonymous,d=!(t.email&&r.passwordHash||(null==l?void 0:l.length)),f=!!h&&d,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new W(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,m)}
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
class q{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v(void 0!==t.idToken,"internal-error"),v(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=V(t);return v(e,"internal-error"),v(void 0!==e.exp,"internal-error"),v(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:o,expiresIn:r}=await
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
async function(t,e){const n=await L(t,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:r}=t.config,s=M(t,o,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,o,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:o}=e,r=new q;return n&&(v("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(v("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),o&&(v("number"==typeof o,"internal-error",{appName:t}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new q,this.toJSON())}_performRefresh(){return b("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function X(t,e){v("string"==typeof t||void 0===t,"internal-error",{appName:e})}class ${async getIdToken(t){const e=await j(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=(0,i.getModularInstance)(t),o=await n.getIdToken(e),r=V(o);v(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:o,authTime:U(z(r.auth_time)),issuedAtTime:U(z(r.iat)),expirationTime:U(z(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=(0,i.getModularInstance)(t);await H(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await j(this,async function(t,e){return O(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,o,r,s,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(o=e.phoneNumber)&&void 0!==o?o:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,m=null!==(s=e.tenantId)&&void 0!==s?s:void 0,p=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:x,providerData:k,stsTokenManager:C}=e;v(b&&C,t,"internal-error");const I=q.fromJSON(this.name,C);v("string"==typeof b,t,"internal-error"),X(u,t.name),X(h,t.name),v("boolean"==typeof w,t,"internal-error"),v("boolean"==typeof x,t,"internal-error"),X(d,t.name),X(f,t.name),X(m,t.name),X(p,t.name),X(g,t.name),X(y,t.name);const E=new $({uid:b,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:x,photoURL:f,phoneNumber:d,tenantId:m,stsTokenManager:I,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(E.providerData=k.map((t=>Object.assign({},t)))),p&&(E._redirectEventId=p),E}static async _fromIdTokenResponse(t,e,n=!1){const i=new q;i.updateFromServerResponse(e);const o=new $({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await H(o),o}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,o=(0,a.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new W(o.createdAt||void 0,o.lastLoginAt||void 0)}}
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
 */class K{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}K.type="NONE";const Y=K;
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
 */function G(t,e,n){return`firebase:${t}:${e}:${n}`}class Q{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Q(k(Y),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let o=i[0]||k(Y);const r=G(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(r);if(e){const i=$._fromJSON(t,e);n!==o&&(s=i),o=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==o)try{await t._remove(r)}catch(t){}}))),new Q(o,t,n)):new Q(o,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=G(this.userKey,i.apiKey,o),this.fullPersistenceKey=G("persistence",i.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function J(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ot(e))return"Blackberry";if(rt(e))return"Webos";if(tt(e))return"Safari";if((e.includes("chrome/")||et(e))&&!e.includes("edge/"))return"Chrome";if(it(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(t=(0,i.getUA)()){return/firefox\//i.test(t)}function tt(t=(0,i.getUA)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function et(t=(0,i.getUA)()){return/crios\//i.test(t)}function nt(t=(0,i.getUA)()){return/iemobile/i.test(t)}function it(t=(0,i.getUA)()){return/android/i.test(t)}function ot(t=(0,i.getUA)()){return/blackberry/i.test(t)}function rt(t=(0,i.getUA)()){return/webos/i.test(t)}function st(t=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function at(t=(0,i.getUA)()){return st(t)||it(t)||rt(t)||ot(t)||/windows phone/i.test(t)||nt(t)}
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
function lt(t,e=[]){let n;switch(t){case"Browser":n=J((0,i.getUA)());break;case"Worker":n=`${J((0,i.getUA)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.SDK_VERSION}/${r}`}
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
 */class ct{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class ut{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=k(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Q.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==r||!(null==s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await H(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.getModularInstance)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(k(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&k(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[k(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const o="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return v(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dt(this),this.idTokenSubscription=new dt(this),this.beforeStateQueue=new ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function ht(t){return(0,i.getModularInstance)(t)}class dt{get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.createSubscribe)((t=>this.observer=t))}}function ft(t,e,n){const i=ht(t);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!!(null==n?void 0:n.disableWarnings),r=mt(e),{host:s,port:a}=function(t){const e=mt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const t=o[1];return{host:t,port:pt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:pt(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function mt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class gt{toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function yt(t,e){return O(t,"POST","/v1/accounts:update",e)}
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
class vt extends gt{static _fromEmailAndPassword(t,e){return new vt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new vt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return R(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return R(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}(t,{email:this._email,oobCode:this._password});default:m(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return yt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return R(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:m(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
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
 */async function bt(t,e){return R(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
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
 */class wt extends gt{static _fromParams(t){const e=new wt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):m("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,o=(0,a.__rest)(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new wt(n,i);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(t){return bt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,bt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,bt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=(0,i.querystring)(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const xt={USER_NOT_FOUND:"user-not-found"};
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
class kt extends gt{static _fromVerification(t,e){return new kt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new kt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return R(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await R(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return R(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),xt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:o}=t;return n||e||i||o?new kt({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class Ct{static parseLink(t){const e=function(t){const e=(0,i.querystringDecode)((0,i.extractQuerystring)(t)).link,n=e?(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id:null,o=(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id;return(o?(0,i.querystringDecode)((0,i.extractQuerystring)(o)).link:null)||o||n||e||t}(t);try{return new Ct(e)}catch(t){return null}}constructor(t){var e,n,o,r,s,a;const l=(0,i.querystringDecode)((0,i.extractQuerystring)(t)),c=null!==(e=l.apiKey)&&void 0!==e?e:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=l.mode)&&void 0!==o?o:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(r=l.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}}
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
class It{static credential(t,e){return vt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ct.parseLink(e);return v(n,"argument-error"),vt._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=It.PROVIDER_ID}}It.PROVIDER_ID="password",It.EMAIL_PASSWORD_SIGN_IN_METHOD="password",It.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Et{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Nt extends Et{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class St extends Nt{static credential(t){return wt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";
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
class Tt extends Nt{static credential(t,e){return wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Tt.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Tt.GOOGLE_SIGN_IN_METHOD="google.com",Tt.PROVIDER_ID="google.com";
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
class _t extends Nt{static credential(t){return wt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}_t.GITHUB_SIGN_IN_METHOD="github.com",_t.PROVIDER_ID="github.com";
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
class At extends Nt{static credential(t,e){return wt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return At.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
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
async function Dt(t,e){return R(t,"POST","/v1/accounts:signUp",D(t,e))}
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
 */At.TWITTER_SIGN_IN_METHOD="twitter.com",At.PROVIDER_ID="twitter.com";class Ot{static async _fromIdTokenResponse(t,e,n,i=!1){const o=await $._fromIdTokenResponse(t,n,i),r=Lt(n);return new Ot({user:o,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Lt(n);return new Ot({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Lt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Rt extends i.FirebaseError{static _fromErrorAndOperation(t,e,n,i){return new Rt(t,e,n,i)}constructor(t,e,n,i){var o;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Rt.prototype),this.customData={appName:t.name,tenantId:null!==(o=t.tenantId)&&void 0!==o?o:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Mt(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Rt._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function Pt(t,e,n=!1){const i=await j(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ot._forOperation(t,"link",i)}
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
async function Ft(t,e,n=!1){const{auth:i}=t,o="reauthenticate";try{const r=await j(t,Mt(i,o,e,t),n);v(r.idToken,i,"internal-error");const s=V(r.idToken);v(s,i,"internal-error");const{sub:a}=s;return v(t.uid===a,i,"user-mismatch"),Ot._forOperation(t,o,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&m(i,"user-mismatch"),t}}
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
 */async function Ut(t,e,n=!1){const i="signIn",o=await Mt(t,i,e),r=await Ot._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(r.user),r}async function zt(t,e){return Ut(ht(t),e)}async function Vt(t,e,n){const i=ht(t),o=await Dt(i,{returnSecureToken:!0,email:e,password:n}),r=await Ot._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(r.user),r}function jt(t,e,n){return zt((0,i.getModularInstance)(t),It.credential(e,n))}
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
 */function Bt(t,e,n,o){return(0,i.getModularInstance)(t).onAuthStateChanged(e,n,o)}function Wt(t){return(0,i.getModularInstance)(t).signOut()}new WeakMap;const Ht="__sak";
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
 */class qt{_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class Xt extends qt{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const o=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,10):o()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=(0,i.getUA)();return tt(t)||st(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=at(),this._shouldAllowMigration=!0}}Xt.type="LOCAL";const $t=Xt;
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
 */class Kt extends qt{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Kt.type="SESSION";const Yt=Kt;
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
class Gt{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Gt(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:o}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(r).map((async t=>t(e.origin,o))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Qt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */Gt.receivers=[];class Jt{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const l=Qt("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(e.data.response);break;default:clearTimeout(c),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function Zt(){return window}
/**
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
 */
function te(){return void 0!==Zt().WorkerGlobalScope&&"function"==typeof Zt().importScripts}
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
const ee="firebaseLocalStorageDb",ne="firebaseLocalStorage",ie="fbase_key";class oe{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function re(t,e){return t.transaction([ne],e?"readwrite":"readonly").objectStore(ne)}function se(){const t=indexedDB.open(ee,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ne,{keyPath:ie})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ne)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(ee);return new oe(t).toPromise()}(),e(await se()))}))}))}async function ae(t,e,n){const i=re(t,!0).put({[ie]:e,value:n});return new oe(i).toPromise()}function le(t,e){const n=re(t,!0).delete(e);return new oe(n).toPromise()}class ce{async _openDb(){return this.db||(this.db=await se()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return te()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gt._getInstance(te()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Jt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await se();return await ae(t,Ht,"1"),await le(t,Ht),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ae(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=re(t,!1).get(e),i=await new oe(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>le(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=re(t,!1).getAll();return new oe(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ce.type="LOCAL";const ue=ce;
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
 */function he(t){return new Promise(((e,n)=>{const i=document.createElement("script");
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
var o,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==r?r:document).appendChild(i)}))}function de(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
de("rcb"),new N(3e4,6e4);
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
const fe="recaptcha";async function me(t,e,n){var i;const o=await n.verify();try{let r;if(v("string"==typeof o,t,"argument-error"),v(n.type===fe,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){v("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return O(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;v(n,t,"missing-multi-factor-info");const s=await function(t,e){return O(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return O(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:o});return e}}finally{n._reset()}}
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
class pe{verifyPhoneNumber(t,e){return me(this.auth,t,(0,i.getModularInstance)(e))}static credential(t,e){return kt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return pe.credentialFromTaggedObject(e)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?kt._fromTokenResponse(e,n):null}constructor(t){this.providerId=pe.PROVIDER_ID,this.auth=ht(t)}}
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
function ge(t,e){return e?k(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */pe.PROVIDER_ID="phone",pe.PHONE_SIGN_IN_METHOD="phone";class ye extends gt{_getIdTokenResponse(t){return bt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return bt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return bt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function ve(t){return Ut(t.auth,new ye(t),t.bypassAuthState)}function be(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Ft(n,new ye(t),t.bypassAuthState)}async function we(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Pt(n,new ye(t),t.bypassAuthState)}
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
 */class xe{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:o,error:r,type:s}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ve;case"linkViaPopup":case"linkViaRedirect":return we;case"reauthViaPopup":case"reauthViaRedirect":return be;default:m(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const ke=new N(2e3,1e4);class Ce extends xe{async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ce.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ke.get())};t()}constructor(t,e,n,i,o){super(t,e,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Ce.currentPopupAction&&Ce.currentPopupAction.cancel(),Ce.currentPopupAction=this}}Ce.currentPopupAction=null;
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
const Ie=new Map;class Ee extends xe{async execute(){let t=Ie.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Te(e),i=Se(t);if(!await i._isAvailable())return!1;const o="true"===await i._get(n);return await i._remove(n),o}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Ie.set(this.auth._key(),t)}return this.bypassAuthState||Ie.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Ne(t,e){Ie.set(t._key(),e)}function Se(t){return k(t._redirectPersistence)}function Te(t){return G("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function _e(t,e,n=!1){const i=ht(t),o=ge(i,e),r=new Ee(i,o,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class Ae{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oe(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Oe(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(De(t))}saveEventToCache(t){this.cachedEventUids.add(De(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function De(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Oe({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const Le=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Re=/^https?/;async function Me(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return O(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Pe(t))return}catch(t){}m(t,"unauthorized-domain")}function Pe(t){const e=C(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return""===o.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!Re.test(n))return!1;if(Le.test(t))return i===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
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
 */const Fe=new N(3e4,6e4);function Ue(){const t=Zt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let ze=null;function Ve(t){return ze=ze||function(t){return new Promise(((e,n)=>{var i,o,r;function s(){Ue(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ue(),n(p(t,"network-request-failed"))},timeout:Fe.get()})}if(null===(o=null===(i=Zt().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Zt().gapi)||void 0===r?void 0:r.load)){const e=de("iframefcb");return Zt()[e]=()=>{gapi.load?s():n(p(t,"network-request-failed"))},he(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw ze=null,t}))}(t),ze}
/**
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
 */const je=new N(5e3,15e3),Be={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},We=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function He(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?S(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:o.SDK_VERSION},s=We.get(t.config.apiHost);s&&(r.eid=s);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.querystring)(r).slice(1)}`}
/**
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
 */
const qe={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Xe{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function $e(t,e,n,o=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let l="";const c=Object.assign(Object.assign({},qe),{width:o.toString(),height:r.toString(),top:s,left:a}),u=(0,i.getUA)().toLowerCase();n&&(l=et(u)?"_blank":n),Z(u)&&(e=e||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=(0,i.getUA)()){var e;return st(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==l)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",l),new Xe(null);const d=window.open(e||"",l,h);v(d,t,"popup-blocked");try{d.focus()}catch(t){}return new Xe(d)}const Ke="emulator/auth/handler";function Ye(t,e,n,r,s,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:o.SDK_VERSION,eventId:s};if(e instanceof Et){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,i.isEmpty)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))l[t]=e}if(e instanceof Nt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const t of Object.keys(c))void 0===c[t]&&delete c[t];return`${function({config:t}){return t.emulator?S(t,Ke):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${(0,i.querystring)(c).slice(1)}`}const Ge="webStorageSupport";const Qe=class{async _openPopup(t,e,n,i){var o;w(null===(o=this.eventManagers[t._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");return $e(t,Ye(t,e,n,C(),i),Qt())}async _openRedirect(t,e,n,i){var o;return await this._originValidation(t),o=Ye(t,e,n,C(),i),Zt().location.href=o,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Ve(t),n=Zt().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:He(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Be,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const o=p(t,"network-request-failed"),r=Zt().setTimeout((()=>{i(o)}),je.get());function s(){Zt().clearTimeout(r),n(e)}e.ping(s).then(s,(()=>{i(o)}))}))))}(t),n=new Ae(t);return e.register("authEvent",(e=>{v(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ge,{type:Ge},(n=>{var i;const o=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==o&&e(!!o),m(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Me(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return at()||tt()||st()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yt,this._completeRedirectFn=_e,this._overrideRedirectResult=Ne}};var Je="@firebase/auth",Ze="0.21.1";
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
class tn{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const en=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let nn=null;function on(t=(0,o.getApp)()){const e=(0,o._getProvider)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=(0,o._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),o=n.getOptions();if((0,i.deepEqual)(o,null!=e?e:{}))return t;m(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Qe,persistence:[ue,$t,Yt]}),r=(0,i.getExperimentalSetting)("authTokenSyncURL");if(r){const t=(s=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>en)return;const i=null==e?void 0:e.token;nn!==i&&(nn=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){(0,i.getModularInstance)(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,o){(0,i.getModularInstance)(t).onIdTokenChanged(e,n,o)}(n,(e=>t(e)))}var s;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&ft(n,`http://${a}`),n}var rn;rn="Browser",(0,o._registerComponent)(new(0,l.Component)("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:r}=n.options;return((t,n)=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null==r?void 0:r.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:r,clientPlatform:rn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lt(rn)},s=new ut(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(k);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),(0,o._registerComponent)(new(0,l.Component)("auth-internal",(t=>{const e=ht(t.getProvider("auth").getImmediate());return new tn(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)(Je,Ze,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(rn)),(0,o.registerVersion)(Je,Ze,"esm2017")})),r.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return i}));function i(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}Object.create;Object.create})),r.register("ftYLF",(function(e,n){t(e.exports,"getFirestore",(function(){return r("3PjDZ").getFirestore})),t(e.exports,"doc",(function(){return r("3PjDZ").doc})),t(e.exports,"setDoc",(function(){return r("3PjDZ").setDoc})),t(e.exports,"getDoc",(function(){return r("3PjDZ").getDoc})),t(e.exports,"collection",(function(){return r("3PjDZ").collection})),t(e.exports,"onSnapshot",(function(){return r("3PjDZ").onSnapshot})),r("3PjDZ")})),r.register("3PjDZ",(function(e,n){t(e.exports,"collection",(function(){return Vr})),t(e.exports,"doc",(function(){return jr})),t(e.exports,"getFirestore",(function(){return ts})),t(e.exports,"getDoc",(function(){return Rs})),t(e.exports,"setDoc",(function(){return Ps})),t(e.exports,"onSnapshot",(function(){return Fs}));var i=r("ix4Jr"),o=r("4a6xH"),s=r("7vF8m"),a=r("ffjl9"),l=r("lW9Fu");r("4TNnu");const c="@firebase/firestore";
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
 */class u{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
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
let h="9.16.0";
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
 */const d=new(0,s.Logger)("@firebase/firestore");function f(){return d.logLevel}function m(t,...e){if(d.logLevel<=s.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(d.logLevel<=s.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=s.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function b(t,e){t||v()}function w(t,e){return t}
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class C{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(u.UNAUTHENTICATED)))}shutdown(){}}class N{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class S{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let o=new C;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new C,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=o;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},s=t=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new C)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class T{I(){return this.g?this.g():(b(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}}class _{getToken(){return Promise.resolve(new T(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(u.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class A{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{start(t,e){const n=t=>{null!=t.error&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(b("string"==typeof t.token),this.A=t.token,new A(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
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
function O(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class L{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=O(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
class P{static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new P(0,0))}static max(){return new F(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class U{get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),o=e.get(i);if(n<o)return-1;if(n>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class z extends U{construct(t,e,n){return new z(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new z(e)}static emptyPath(){return new z([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends U{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(0===n.length)throw new k(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new k(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new k(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(o(),i++)}if(o(),r)throw new k(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
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
 */class B{static fromPath(t){return new B(z.fromString(t))}static fromName(t){return new B(z.fromString(t).popFirst(5))}static empty(){return new B(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===z.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new z(t.slice()))}constructor(t){this.path=t}}
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
 */class W{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}W.UNKNOWN_ID=-1;function H(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,o=F.fromTimestamp(1e9===i?new P(n+1,0):new P(n,i));return new X(o,B.empty(),e)}function q(t){return new X(t.readTime,t.key,-1)}class X{static min(){return new X(F.min(),B.empty(),-1)}static max(){return new X(F.max(),B.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function $(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=B.comparator(t.documentKey,e.documentKey),0!==n?n:R(t.largestBatchId,e.largestBatchId))}
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
 */const K="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function G(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==K)throw t;m("LocalStore","Unexpectedly lost primary lease")}
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
 */class Q{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Q(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Q?e:Q.resolve(e)}catch(t){return Q.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Q.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Q.reject(e)}static resolve(t){return new Q(((e,n)=>{e(t)}))}static reject(t){return new Q(((e,n)=>{n(t)}))}static waitFor(t){return new Q(((e,n)=>{let i=0,o=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++o,r&&o===i&&e()}),(t=>n(t)))})),r=!0,o===i&&e()}))}static or(t){let e=Q.resolve(!1);for(const n of t)e=e.next((t=>t?Q.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Q(((n,i)=>{const o=t.length,r=new Array(o);let s=0;for(let a=0;a<o;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++s,s===o&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new Q(((n,i)=>{const o=()=>{!0===t()?e().next((()=>{o()}),i):n()};o()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function J(t){return"IndexedDbTransactionError"===t.name}
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
 */
class Z{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Z.at=-1;
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
class tt{constructor(t,e,n,i,o,r,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class et{static empty(){return new et("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof et&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function nt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function it(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ot(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function rt(t){return null==t}function st(t){return 0===t&&1/t==-1/0}function at(t){return"number"==typeof t&&Number.isInteger(t)&&!st(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */let lt=Symbol.iterator;
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
 */class ct{static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[lt](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ct.EMPTY_BYTE_STRING=new ct("");const ut=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(b(!!t),"string"==typeof t){let e=0;const n=ut.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ft(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
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
 */function mt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pt(t){const e=t.mapValue.fields.__previous_value__;return mt(e)?pt(e):e}function gt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
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
 */const yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mt(t)?4:Dt(t)?9007199254740991:10:v()}function bt(t,e){if(t===e)return!0;const n=vt(t);if(n!==vt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gt(t).isEqual(gt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),i=ht(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,ft(t.bytesValue).isEqual(ft(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dt(t.geoPointValue.latitude)===dt(e.geoPointValue.latitude)&&dt(t.geoPointValue.longitude)===dt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dt(t.integerValue)===dt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dt(t.doubleValue),i=dt(e.doubleValue);return n===i?st(n)===st(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(nt(n)!==nt(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!bt(n[t],i[t])))return!1;return!0}(t,e);default:return v()}var i}function wt(t,e){return void 0!==(t.values||[]).find((t=>bt(t,e)))}function xt(t,e){if(t===e)return 0;const n=vt(t),i=vt(e);if(n!==i)return R(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dt(t.integerValue||t.doubleValue),i=dt(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return kt(t.timestampValue,e.timestampValue);case 4:return kt(gt(t),gt(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ft(t),i=ft(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=R(n[t],i[t]);if(0!==e)return e}return R(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R(dt(t.latitude),dt(e.latitude));return 0!==n?n:R(dt(t.longitude),dt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=xt(n[t],i[t]);if(e)return e}return R(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===yt.mapValue&&e===yt.mapValue)return 0;if(t===yt.mapValue)return 1;if(e===yt.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),o=e.fields||{},r=Object.keys(o);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=R(i[t],r[t]);if(0!==e)return e;const s=xt(n[i[t]],o[r[t]]);if(0!==s)return s}return R(i.length,r.length)}(t.mapValue,e.mapValue);default:throw v()}}function kt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=ht(t),i=ht(e),o=R(n.seconds,i.seconds);return 0!==o?o:R(n.nanos,i.nanos)}function Ct(t){return It(t)}function It(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ft(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=It(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const o of e)i?i=!1:n+=",",n+=`${o}:${It(t.fields[o])}`;return n+"}"}(t.mapValue):v()}function Et(t){return!!t&&"integerValue"in t}function Nt(t){return!!t&&"arrayValue"in t}function St(t){return!!t&&"nullValue"in t}function Tt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _t(t){return!!t&&"mapValue"in t}function At(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return it(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=At(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=At(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Dt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ot{constructor(t,e){this.position=t,this.inclusive=e}}function Lt(t,e,n){let i=0;for(let o=0;o<t.position.length;o++){const r=e[o],s=t.position[o];if(i=r.field.isKeyField()?B.comparator(B.fromName(s.referenceValue),n.key):xt(s,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Rt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}
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
 */class Mt{}class Pt extends Mt{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ht(t,e,n):"array-contains"===e?new Kt(t,n):"in"===e?new Yt(t,n):"not-in"===e?new Gt(t,n):"array-contains-any"===e?new Qt(t,n):new Pt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new qt(t,n):new Xt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(xt(e,this.value)):null!==e&&vt(this.value)===vt(e)&&this.matchesComparison(xt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Ft extends Mt{static create(t,e){return new Ft(t,e)}matches(t){return Ut(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function Ut(t){return"and"===t.op}function zt(t){return Vt(t)&&Ut(t)}function Vt(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function jt(t){if(t instanceof Pt)return t.field.canonicalString()+t.op.toString()+Ct(t.value);if(zt(t))return t.filters.map((t=>jt(t))).join(",");{const e=t.filters.map((t=>jt(t))).join(",");return`${t.op}(${e})`}}function Bt(t,e){return t instanceof Pt?(n=t,(i=e)instanceof Pt&&n.op===i.op&&n.field.isEqual(i.field)&&bt(n.value,i.value)):t instanceof Ft?function(t,e){return e instanceof Ft&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Bt(n,e.filters[i])),!0)}(t,e):void v();var n,i}function Wt(t){return t instanceof Pt?`${(e=t).field.canonicalString()} ${e.op} ${Ct(e.value)}`:t instanceof Ft?function(t){return t.op.toString()+" {"+t.getFilters().map(Wt).join(" ,")+"}"}(t):"Filter";var e}class Ht extends Pt{matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=B.fromName(n.referenceValue)}}class qt extends Pt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=$t("in",e)}}class Xt extends Pt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=$t("not-in",e)}}function $t(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>B.fromName(t.referenceValue)))}class Kt extends Pt{matches(t){const e=t.data.field(this.field);return Nt(e)&&wt(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Yt extends Pt{matches(t){const e=t.data.field(this.field);return null!==e&&wt(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Gt extends Pt{matches(t){if(wt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!wt(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Qt extends Pt{matches(t){const e=t.data.field(this.field);return!(!Nt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>wt(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
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
 */class Jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class te{insert(t,e){return new te(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new te(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ee(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ee(this.root,t,this.comparator,!1)}getReverseIterator(){return new ee(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ee(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}}class ee{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(0===o){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class ne{copy(t,e,n,i,o){return new ne(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===o?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ne.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=null!=n?n:ne.RED,this.left=null!=i?i:ne.EMPTY,this.right=null!=o?o:ne.EMPTY,this.size=this.left.size+1+this.right.size}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1,ne.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class ie{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oe(this.data.getIterator())}getIteratorFrom(t){return new oe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ie))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ie(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new te(this.comparator)}}class oe{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class re{static empty(){return new re([])}unionWith(t){let e=new ie(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new re(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(j.comparator)}}
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
 */class se{static empty(){return new se({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!_t(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=At(e)}setAll(t){let e=j.emptyPath(),n={},i=[];t.forEach(((t,o)=>{if(!e.isImmediateParentOf(o)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=o.popLast()}t?n[o.lastSegment()]=At(t):i.push(o.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());_t(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];_t(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){it(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new se(At(this.value))}constructor(t){this.value=t}}function ae(t){const e=[];return it(t.fields,((t,n)=>{const i=new j([t]);if(_t(n)){const t=ae(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new re(e)
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
 */}class le{static newInvalidDocument(t){return new le(t,0,F.min(),F.min(),F.min(),se.empty(),0)}static newFoundDocument(t,e,n,i){return new le(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new le(t,2,e,F.min(),F.min(),se.empty(),0)}static newUnknownDocument(t,e){return new le(t,3,e,F.min(),F.min(),se.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=se.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof le&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,o,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=r,this.documentState=s}}
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
 */class ce{constructor(t,e=null,n=[],i=[],o=null,r=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=r,this.endAt=s,this.ft=null}}function ue(t,e=null,n=[],i=[],o=null,r=null,s=null){return new ce(t,e,n,i,o,r,s)}function he(t){const e=w(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>jt(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),rt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ct(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ct(t))).join(",")),e.ft=t}return e.ft}function de(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bt(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rt(t.startAt,e.startAt)&&Rt(t.endAt,e.endAt)}function fe(t){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class me{constructor(t,e=null,n=[],i=[],o=null,r="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=r,this.startAt=s,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function pe(t,e,n,i,o,r,s,a){return new me(t,e,n,i,o,r,s,a)}function ge(t){return new me(t)}function ye(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ve(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function be(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function we(t){return null!==t.collectionGroup}function xe(t){const e=w(t);if(null===e.dt){e.dt=[];const t=be(e),n=ve(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Jt(t)),e.dt.push(new Jt(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Jt(j.keyField(),t))}}}return e.dt}function ke(t){const e=w(t);if(!e._t)if("F"===e.limitType)e._t=ue(e.path,e.collectionGroup,xe(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of xe(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Jt(n.field,e))}const n=e.endAt?new Ot(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ot(e.startAt.position,e.startAt.inclusive):null;e._t=ue(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function Ce(t,e,n){return new me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ie(t,e){return de(ke(t),ke(e))&&t.limitType===e.limitType}function Ee(t){return`${he(ke(t))}|lt:${t.limitType}`}function Ne(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Wt(t))).join(", ")}]`),rt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ct(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ct(t))).join(",")),`Target(${e})`}(ke(t))}; limitType=${t.limitType})`}function Se(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):B.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of xe(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=Lt(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,xe(n),i)||n.endAt&&!function(t,e,n){const i=Lt(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,xe(n),i)));var n,i}function Te(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _e(t){return(e,n)=>{let i=!1;for(const o of xe(t)){const t=Ae(o,e,n);if(0!==t)return t;i=i||o.field.isKeyField()}return 0}}function Ae(t,e,n){const i=t.field.isKeyField()?B.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),o=n.data.field(t);return null!==i&&null!==o?xt(i,o):v()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return v()}}
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
 */function De(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:st(e)?"-0":e}}function Oe(t){return{integerValue:""+t}}function Le(t,e){return at(e)?Oe(e):De(t,e)}
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
 */class Re{constructor(){this._=void 0}}function Me(t,e,n){return t instanceof Ue?ze(t,e):t instanceof Ve?je(t,e):n}function Pe(t,e){var n,i;return t instanceof Be?Et(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class Fe extends Re{}class Ue extends Re{constructor(t){super(),this.elements=t}}function ze(t,e){const n=He(e);for(const e of t.elements)n.some((t=>bt(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ve extends Re{constructor(t){super(),this.elements=t}}function je(t,e){let n=He(e);for(const e of t.elements)n=n.filter((t=>!bt(t,e)));return{arrayValue:{values:n}}}class Be extends Re{constructor(t,e){super(),this.yt=t,this.gt=e}}function We(t){return dt(t.integerValue||t.doubleValue)}function He(t){return Nt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class qe{constructor(t,e){this.version=t,this.transformResults=e}}class Xe{static none(){return new Xe}static exists(t){return new Xe(void 0,t)}static updateTime(t){return new Xe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function $e(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ke{}function Ye(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new sn(t.key,Xe.none()):new tn(t.key,t.data,Xe.none());{const n=t.data,i=se.empty();let o=new ie(j.comparator);for(let t of e.fields)if(!o.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),o=o.add(t)}return new en(t.key,i,new re(o.toArray()),Xe.none())}}function Ge(t,e,n){var i;t instanceof tn?function(t,e,n){const i=t.value.clone(),o=on(t.fieldTransforms,e,n.transformResults);i.setAll(o),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof en?function(t,e,n){if(!$e(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=on(t.fieldTransforms,e,n.transformResults),o=e.data;o.setAll(nn(t)),o.setAll(i),e.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Qe(t,e,n,i){return t instanceof tn?function(t,e,n,i){if(!$e(t.precondition,e))return n;const o=t.value.clone(),r=rn(t.fieldTransforms,i,e);return o.setAll(r),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null}(t,e,n,i):t instanceof en?function(t,e,n,i){if(!$e(t.precondition,e))return n;const o=rn(t.fieldTransforms,i,e),r=e.data;return r.setAll(nn(t)),r.setAll(o),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(o=e,r=n,$e(t.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):r);var o,r}function Je(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),o=Pe(i.transform,t||null);null!=o&&(null===n&&(n=se.empty()),n.set(i.field,o))}return n||null}function Ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&M(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Ue&&i instanceof Ue||n instanceof Ve&&i instanceof Ve?M(n.elements,i.elements,bt):n instanceof Be&&i instanceof Be?bt(n.gt,i.gt):n instanceof Fe&&i instanceof Fe);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class tn extends Ke{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class en extends Ke{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}}function nn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function on(t,e,n){const i=new Map;b(t.length===n.length);for(let o=0;o<n.length;o++){const r=t[o],s=r.transform,a=e.data.field(r.field);i.set(r.field,Me(s,a,n[o]))}return i}function rn(t,e,n){const i=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,s=e,(o=t)instanceof Fe?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(s,r):o instanceof Ue?ze(o,r):o instanceof Ve?je(o,r):function(t,e){const n=Pe(t,e),i=We(n)+We(t.gt);return Et(n)&&Et(t.gt)?Oe(i):De(t.yt,i)}(o,r)))}var o,r,s;return i}class sn extends Ke{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class an extends Ke{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class ln{constructor(t){this.count=t}}
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
 */var cn,un;function hn(t){switch(t){default:return v();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function dn(t){if(void 0===t)return p("GRPC error has no .code"),x.UNKNOWN;switch(t){case cn.OK:return x.OK;case cn.CANCELLED:return x.CANCELLED;case cn.UNKNOWN:return x.UNKNOWN;case cn.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case cn.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case cn.INTERNAL:return x.INTERNAL;case cn.UNAVAILABLE:return x.UNAVAILABLE;case cn.UNAUTHENTICATED:return x.UNAUTHENTICATED;case cn.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case cn.NOT_FOUND:return x.NOT_FOUND;case cn.ALREADY_EXISTS:return x.ALREADY_EXISTS;case cn.PERMISSION_DENIED:return x.PERMISSION_DENIED;case cn.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case cn.ABORTED:return x.ABORTED;case cn.OUT_OF_RANGE:return x.OUT_OF_RANGE;case cn.UNIMPLEMENTED:return x.UNIMPLEMENTED;case cn.DATA_LOSS:return x.DATA_LOSS;default:return v()}}(un=cn||(cn={}))[un.OK=0]="OK",un[un.CANCELLED=1]="CANCELLED",un[un.UNKNOWN=2]="UNKNOWN",un[un.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",un[un.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",un[un.NOT_FOUND=5]="NOT_FOUND",un[un.ALREADY_EXISTS=6]="ALREADY_EXISTS",un[un.PERMISSION_DENIED=7]="PERMISSION_DENIED",un[un.UNAUTHENTICATED=16]="UNAUTHENTICATED",un[un.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",un[un.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",un[un.ABORTED=10]="ABORTED",un[un.OUT_OF_RANGE=11]="OUT_OF_RANGE",un[un.UNIMPLEMENTED=12]="UNIMPLEMENTED",un[un.INTERNAL=13]="INTERNAL",un[un.UNAVAILABLE=14]="UNAVAILABLE",un[un.DATA_LOSS=15]="DATA_LOSS";
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
class fn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){it(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return ot(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const mn=new te(B.comparator);function pn(){return mn}const gn=new te(B.comparator);function yn(...t){let e=gn;for(const n of t)e=e.insert(n.key,n);return e}function vn(t){let e=gn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function bn(){return xn()}function wn(){return xn()}function xn(){return new fn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const kn=new te(B.comparator),Cn=new ie(B.comparator);function In(...t){let e=Cn;for(const n of t)e=e.add(n);return e}const En=new ie(R);function Nn(){return En}
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
 */class Sn{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Sn(F.min(),i,Nn(),pn(),In())}constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}}class Tn{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Tn(n,e,In(),In(),In())}constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}}
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
 */class _n{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class An{constructor(t,e){this.targetId=t,this.Et=e}}class Dn{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class On{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=In(),e=In(),n=In();return this.Rt.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:v()}})),new Tn(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Mn()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Mn(),this.bt=ct.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class Ln{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,i=this.Yt(e);if(i){const t=i.target;if(fe(t))if(0===n){const n=new B(t.path);this.Qt(e,n,le.newNoDocument(n,F.min()))}else b(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const o=this.Yt(i);if(o){if(n.current&&fe(o.target)){const e=new B(o.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,le.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=In();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Sn(t,e,this.Ut,this.Lt,n);return this.Lt=pn(),this.qt=Rn(),this.Ut=new ie(R),i}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new On,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new ie(R),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||m("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new On),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=pn(),this.qt=Rn(),this.Ut=new ie(R)}}function Rn(){return new te(B.comparator)}function Mn(){return new te(B.comparator)}
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
 */const Pn={asc:"ASCENDING",desc:"DESCENDING"},Fn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Un={and:"AND",or:"OR"};class zn{constructor(t,e){this.databaseId=t,this.wt=e}}function Vn(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jn(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Bn(t,e){return Vn(t,e.toTimestamp())}function Wn(t){return b(!!t),F.fromTimestamp(function(t){const e=ht(t);return new P(e.seconds,e.nanos)}(t))}function Hn(t,e){return(n=t,new z(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function qn(t){const e=z.fromString(t);return b(ui(e)),e}function Xn(t,e){return Hn(t.databaseId,e.path)}function $n(t,e){const n=qn(e);if(n.get(1)!==t.databaseId.projectId)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Qn(n))}function Kn(t,e){return Hn(t.databaseId,e)}function Yn(t){const e=qn(t);return 4===e.length?z.emptyPath():Qn(e)}function Gn(t){return new z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Jn(t,e,n){return{name:Xn(t,e),fields:n.value.mapValue.fields}}function Zn(t,e){let n;if(e instanceof tn)n={update:Jn(t,e.key,e.value)};else if(e instanceof sn)n={delete:Xn(t,e.key)};else if(e instanceof en)n={update:Jn(t,e.key,e.data),updateMask:ci(e.fieldMask)};else{if(!(e instanceof an))return v();n={verify:Xn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Fe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ue)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ve)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Be)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(o=e.precondition).updateTime?{updateTime:Bn(i,o.updateTime)}:void 0!==o.exists?{exists:o.exists}:v())),n;var i,o}function ti(t,e){return{documents:[Kn(t,e.path)]}}function ei(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Kn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const o=function(t){if(0!==t.length)return li(Ft.create(t,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const r=function(t){if(0!==t.length)return t.map((t=>{return{field:si((e=t).field),direction:oi(e.dir)};var e}))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const s=(a=t,l=e.limit,a.wt||rt(l)?l:{value:l});var a,l,c;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ni(t){let e=Yn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let o=null;if(i>0){b(1===i);const t=n.from[0];t.allDescendants?o=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=ii(t);return e instanceof Ft&&zt(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>{return new Jt(ai((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,rt(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Ot(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Ot(n,e)}(n.endAt)),pe(e,o,s,r,a,"F",l,c)}function ii(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ai(t.unaryFilter.field);return Pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ai(t.unaryFilter.field);return Pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ai(t.unaryFilter.field);return Pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ai(t.unaryFilter.field);return Pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?(n=t,Pt.create(ai(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Ft.create(e.compositeFilter.filters.map((t=>ii(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))):v();var e,n}function oi(t){return Pn[t]}function ri(t){return Fn[t]}function si(t){return{fieldPath:t.canonicalString()}}function ai(t){return j.fromServerFormat(t.fieldPath)}function li(t){return t instanceof Pt?function(t){if("=="===t.op){if(Tt(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NAN"}};if(St(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Tt(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NOT_NAN"}};if(St(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(t.field),op:ri(t.op),value:t.value}}}(t):t instanceof Ft?function(t){const e=t.getFilters().map((t=>li(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Un[n]),filters:e}};var n}(t):v()}function ci(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ui(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const hi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],di=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fi=di;
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
 */
class mi{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Ge(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Qe(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Qe(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wn();return this.mutations.forEach((i=>{const o=t.get(i.key),r=o.overlayedDocument;let s=this.applyToLocalView(r,o.mutatedFields);s=e.has(i.key)?null:s;const a=Ye(r,s);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),In())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,((t,e)=>Ze(t,e)))&&M(this.baseMutations,t.baseMutations,((t,e)=>Ze(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class pi{static from(t,e,n){b(t.mutations.length===n.length);let i=kn;const o=t.mutations;for(let t=0;t<o.length;t++)i=i.insert(o[t].key,n[t].version);return new pi(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
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
 */class gi{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
 */class yi{withSequenceNumber(t){return new yi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,i,o=F.min(),r=F.min(),s=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=s}}
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
 */class vi{constructor(t){this.ie=t}}function bi(t){const e=ni({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ce(e,e.limit,"L"):e}
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
 */class wi{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(dt(t.integerValue));else if("doubleValue"in t){const n=dt(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),st(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(ft(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Dt(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):v()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),B.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}wi.Ie=new wi;
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
class xi{addToCollectionParentIndex(t,e){return this.Je.add(e),Q.resolve()}getCollectionParents(t,e){return Q.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return Q.resolve()}deleteFieldIndex(t,e){return Q.resolve()}getDocumentsMatchingTarget(t,e){return Q.resolve(null)}getIndexType(t,e){return Q.resolve(0)}getFieldIndexes(t,e){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,e){return Q.resolve(X.min())}getMinOffsetFromCollectionGroup(t,e){return Q.resolve(X.min())}updateCollectionGroup(t,e,n){return Q.resolve()}updateIndexEntries(t,e){return Q.resolve()}constructor(){this.Je=new ki}}class ki{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ie(z.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ie(z.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Ci{static withCacheSize(t){return new Ci(t,Ci.DEFAULT_COLLECTION_PERCENTILE,Ci.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Ci.DEFAULT_COLLECTION_PERCENTILE=10,Ci.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ci.DEFAULT=new Ci(41943040,Ci.DEFAULT_COLLECTION_PERCENTILE,Ci.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ci.DISABLED=new Ci(-1,0,0);
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
class Ii{next(){return this.bn+=2,this.bn}static Pn(){return new Ii(0)}static vn(){return new Ii(-1)}constructor(t){this.bn=t}}
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
 */
class Ei{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,le.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Q.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new fn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
 */
class Ni{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Si{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Qe(n.mutation,t,re.empty(),P.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,In()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=In()){const i=bn();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=yn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=bn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,In())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let o=pn();const r=xn(),s=xn();return e.forEach(((t,e)=>{const s=n.get(e.key);i.has(e.key)&&(void 0===s||s.mutation instanceof en)?o=o.insert(e.key,e):void 0!==s?(r.set(e.key,s.mutation.getFieldMask()),Qe(s.mutation,e,s.mutation.getFieldMask(),P.now())):r.set(e.key,re.empty())})),this.recalculateAndSaveOverlays(t,o).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new Ni(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=xn();let i=new te(((t,e)=>t-e)),o=In();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const o of t)o.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let s=n.get(t)||re.empty();s=o.applyToLocalView(r,s),n.set(t,s);const a=(i.get(o.batchId)||In()).add(t);i=i.insert(o.batchId,a)}))})).next((()=>{const r=[],s=i.getReverseIterator();for(;s.hasNext();){const i=s.getNext(),a=i.key,l=i.value,c=wn();l.forEach((t=>{if(!o.has(t)){const i=Ye(e.get(t),n.get(t));null!==i&&c.set(t,i),o=o.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Q.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,B.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):we(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const r=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):Q.resolve(bn());let s=-1,a=o;return r.next((e=>Q.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),o.get(e)?Q.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,o))).next((()=>this.computeViews(t,a,e,In()))).next((t=>({batchId:s,changes:vn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next((t=>{let e=yn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let o=yn();return this.indexManager.getCollectionParents(t,i).next((r=>Q.forEach(r,(r=>{const s=(a=e,l=r.child(i),new me(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{o=o.insert(t,e)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((o=>(i=o,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,le.newInvalidDocument(n)))}));let n=yn();return i.forEach(((i,o)=>{const r=t.get(i);void 0!==r&&Qe(r.mutation,o,re.empty(),P.now()),Se(e,o)&&(n=n.insert(i,o))})),n}))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
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
 */class Ti{getBundleMetadata(t,e){return Q.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Wn(n.createTime)}),Q.resolve()}getNamedQuery(t,e){return Q.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,{name:(n=e).name,query:bi(n.bundledQuery),readTime:Wn(n.readTime)}),Q.resolve();var n}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
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
 */class _i{getOverlay(t,e){return Q.resolve(this.overlays.get(e))}getOverlays(t,e){const n=bn();return Q.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.oe(t,e,i)})),Q.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Q.resolve()}getOverlaysForCollection(t,e,n){const i=bn(),o=e.length+1,r=new B(e.child("")),s=this.overlays.getIteratorFrom(r);for(;s.hasNext();){const t=s.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===o&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new te(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=o.get(t.largestBatchId);null===e&&(e=bn(),o=o.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=bn(),a=o.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>s.set(t,e))),!(s.size()>=i)););return Q.resolve(s)}oe(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new gi(e,n));let o=this.es.get(e);void 0===o&&(o=In(),this.es.set(e,o)),this.es.set(e,o.add(n.key))}constructor(){this.overlays=new te(B.comparator),this.es=new Map}}
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
 */class Ai{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Di(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Di(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new B(new z([])),n=new Di(e,t),i=new Di(e,t+1),o=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),o.push(t.key)})),o}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new B(new z([])),n=new Di(e,t),i=new Di(e,t+1);let o=In();return this.rs.forEachInRange([n,i],(t=>{o=o.add(t.key)})),o}containsKey(t){const e=new Di(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new ie(Di.ss),this.rs=new ie(Di.os)}}class Di{static ss(t,e){return B.comparator(t.key,e.key)||R(t._s,e._s)}static os(t,e){return R(t._s,e._s)||B.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
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
 */class Oi{checkEmpty(t){return Q.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new mi(o,e,n,i);this.mutationQueue.push(r);for(const e of i)this.gs=this.gs.add(new Di(e.key,o)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Q.resolve(r)}lookupMutationBatch(t,e){return Q.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),o=i<0?0:i;return Q.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Di(e,0),i=new Di(e,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);o.push(e)})),Q.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ie(R);return e.forEach((t=>{const e=new Di(t,0),i=new Di(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),Q.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;B.isDocumentKey(o)||(o=o.child(""));const r=new Di(new B(o),0);let s=new ie(R);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(s=s.add(t._s)),!0)}),r),Q.resolve(this.Is(s))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){b(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Q.forEach(e.mutations,(i=>{const o=new Di(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Di(e,0),i=this.gs.firstAfterOrEqual(n);return Q.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new ie(Di.ss)}}
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
 */class Li{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Q.resolve(n?n.document.mutableCopy():le.newInvalidDocument(e))}getEntries(t,e){let n=pn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():le.newInvalidDocument(t))})),Q.resolve(n)}getAllFromCollection(t,e,n){let i=pn();const o=new B(e.child("")),r=this.docs.getIteratorFrom(o);for(;r.hasNext();){const{key:t,value:{document:o}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||$(q(o),n)<=0||(i=i.insert(o.key,o.mutableCopy()))}return Q.resolve(i)}getAllFromCollectionGroup(t,e,n,i){v()}As(t,e){return Q.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ri(this)}getSize(t){return Q.resolve(this.size)}constructor(t){this.Es=t,this.docs=new te(B.comparator),this.size=0}}class Ri extends Ei{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),Q.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
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
 */class Mi{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Q.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ii(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Q.resolve()}updateTargetData(t,e){return this.Dn(e),Q.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Rs.forEach(((r,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Rs.delete(r),o.push(this.removeMatchingKeysForTargetId(t,s.targetId)),i++)})),Q.waitFor(o).next((()=>i))}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Q.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Q.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((e=>{o.push(i.markPotentiallyOrphaned(t,e))})),Q.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Q.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Q.resolve(n)}containsKey(t,e){return Q.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new fn((t=>he(t)),de),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ai,this.targetCount=0,this.vs=Ii.Pn()}}
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
 */class Pi{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new _i,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Oi(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){m("MemoryPersistence","Starting transaction:",t);const i=new Fi(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return Q.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Z(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Mi(this),this.indexManager=new xi,this.remoteDocumentCache=new Li((t=>this.referenceDelegate.xs(t))),this.yt=new vi(e),this.Ns=new Ti(this.yt)}}class Fi extends Y{constructor(t){super(),this.currentSequenceNumber=t}}class Ui{static Bs(t){return new Ui(t)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Q.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Q.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Q.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Ls,(n=>{const i=B.fromPath(n);return this.qs(t,i).next((t=>{t||e.removeEntry(i,F.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return Q.or([()=>Q.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new Ai,this.$s=null}}
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
 */
class zi{static Ci(t,e){let n=In(),i=In();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new zi(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}}
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
 */class Vi{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((o=>o||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(ye(e))return Q.resolve(null);let n=ke(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Ce(e,null,"F"),n=ke(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const o=In(...i);return this.Ni.getDocuments(t,o).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,i);return this.$i(e,r,o,n.readTime)?this.ki(t,Ce(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,i){return ye(e)||i.isEqual(F.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((o=>{const r=this.Fi(e,o);return this.$i(e,r,n,i)?this.Mi(t,e):(f()<=s.LogLevel.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ne(e)),this.Bi(t,r,e,H(i,-1)))}))}Fi(t,e){let n=new ie(_e(t));return e.forEach(((e,i)=>{Se(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const o="F"===t.limitType?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Mi(t,e){return f()<=s.LogLevel.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.Ni.getDocumentsMatchingQuery(t,e,X.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
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
 */class ji{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Si(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,i){this.persistence=t,this.Li=e,this.yt=i,this.qi=new te(R),this.Ui=new fn((t=>he(t)),de),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function Bi(t,e,n,i){return new ji(t,e,n,i)}async function Wi(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((o=>(i=o,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const o=[],r=[];let s=In();for(const t of i){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({ji:t,removedBatchIds:o,addedBatchIds:r})))}))}))}function Hi(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function qi(t,e,n){let i=In(),o=In();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=pn();return n.forEach(((n,r)=>{const s=t.get(n);r.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(F.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):m("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)})),{Wi:i,zi:o}}))}function Xi(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function $i(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((o=>o?(i=o,Q.resolve(i)):n.Cs.allocateTargetId(t).next((o=>(i=new yi(e,o,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qi.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Ki(t,e,n){const i=w(t),o=i.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,o)))}catch(t){if(!J(t))throw t;m("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qi=i.qi.remove(e),i.Ui.delete(o.target)}function Yi(t,e,n){const i=w(t);let o=F.min(),r=In();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=w(t),o=i.Ui.get(n);return void 0!==o?Q.resolve(i.qi.get(o)):i.Cs.getTargetData(e,n)}(i,t,ke(e)).next((e=>{if(e)return o=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?o:F.min(),n?r:In()))).next((t=>(Gi(i,Te(e),t),{documents:t,Hi:r})))))}function Gi(t,e,n){let i=t.Ki.get(e)||F.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class Qi{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Nn()}}class Ji{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Qi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new Qi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Zi{Ur(t){}shutdown(){}}
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
 */class to{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
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
 */const eo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class no{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
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
 */class io extends class{get co(){return!1}ao(t,e,n,i,o){const r=this.ho(t,e);m("RestConnection","Sending: ",r,n);const s={};return this.lo(s,i,o),this.fo(t,r,s,n).then((t=>(m("RestConnection","Received: ",t),t)),(e=>{throw g("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,i,o,r){return this.ao(t,e,n,i,o)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=eo[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,i){return new Promise(((o,r)=>{const s=new(0,l.XhrIo);s.setWithCredentials(!0),s.listenOnce(l.EventType.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case l.ErrorCode.NO_ERROR:const e=s.getResponseJson();m("Connection","XHR received:",JSON.stringify(e)),o(e);break;case l.ErrorCode.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),r(new k(x.DEADLINE_EXCEEDED,"Request time out"));break;case l.ErrorCode.HTTP_ERROR:const n=s.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){let t=s.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(e)>=0?e:x.UNKNOWN}(e.status);r(new k(t,e.message))}else r(new k(x.UNKNOWN,"Server responded with status "+s.getStatus()))}else r(new k(x.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{m("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);s.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=(0,l.createWebChannelTransport)(),r=(0,l.getStatEventTarget)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new(0,l.FetchXmlHttpFactory)({})),this.lo(s.initMessageHeaders,e,n),s.encodeInitMessageHeaders=!0;const a=i.join("");m("Connection","Creating WebChannel: "+a,s);const c=o.createWebChannel(a,s);let u=!1,h=!1;const d=new no({Hr:t=>{h?m("Connection","Not sending because WebChannel is closed:",t):(u||(m("Connection","Opening WebChannel transport."),c.open(),u=!0),m("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,l.WebChannel.EventType.OPEN,(()=>{h||m("Connection","WebChannel transport opened.")})),f(c,l.WebChannel.EventType.CLOSE,(()=>{h||(h=!0,m("Connection","WebChannel transport closed"),d.io())})),f(c,l.WebChannel.EventType.ERROR,(t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),d.io(new k(x.UNAVAILABLE,"The operation could not be completed")))})),f(c,l.WebChannel.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];b(!!n);const i=n,o=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(o){m("Connection","WebChannel received error:",o);const t=o.status;let e=function(t){const e=cn[t];if(void 0!==e)return dn(e)}(t),n=o.message;void 0===e&&(e=x.INTERNAL,n="Unknown error status: "+t+" with message "+o.message),h=!0,d.io(new k(e,n)),c.close()}else m("Connection","WebChannel received:",n),d.ro(n)}})),f(r,l.Event.STAT_EVENT,(t=>{t.stat===l.Stat.PROXY?m("Connection","Detected buffering proxy"):t.stat===l.Stat.NOPROXY&&m("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function oo(){return"undefined"!=typeof document?document:null}
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
 */function ro(t){return new zn(t,!0)}class so{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
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
 */class ao{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new k(x.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,o,r,s,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new so(t,e)}}class lo extends ao{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const o="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:v(),r=e.targetChange.targetIds||[],s=function(t,e){return t.wt?(b(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(t){const e=void 0===t.code?x.UNKNOWN:dn(t.code);return new k(e,t.message||"")}(a);n=new Dn(o,r,s,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=$n(t,i.document.name),r=Wn(i.document.updateTime),s=i.document.createTime?Wn(i.document.createTime):F.min(),a=new se({mapValue:{fields:i.document.fields}}),l=le.newFoundDocument(o,r,s,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new _n(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=$n(t,i.document),r=i.readTime?Wn(i.readTime):F.min(),s=le.newNoDocument(o,r),a=i.removedTargetIds||[];n=new _n([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=$n(t,i.document),r=i.removedTargetIds||[];n=new _n([],r,o,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,o=new ln(i),r=t.targetId;n=new An(r,o)}}var i;return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?Wn(e.readTime):F.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Gn(this.yt),e.addTarget=function(t,e){let n;const i=e.target;return n=fe(i)?{documents:ti(t,i)}:{query:ei(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jn(t,e.resumeToken):e.snapshotVersion.compareTo(F.min())>0&&(n.readTime=Vn(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Gn(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,i,o,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.yt=o}}class co extends ao{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(b(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Wn(t.updateTime):Wn(e);return n.isEqual(F.min())&&(n=Wn(e)),new qe(n,t.transformResults||[])}(t,n)))):[]),o=Wn(t.commitTime);return this.listener.Zo(o,i)}var e,n;return b(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Gn(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Zn(this.yt,t)))};this.Bo(e)}constructor(t,e,n,i,o,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.yt=o,this.Jo=!1}}
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
 */class uo extends class{}{su(){if(this.nu)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.ao(t,e,n,i,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new k(x.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection._o(t,e,n,o,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new k(x.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=i,this.nu=!1}}class ho{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(e),this.ou=!1):m("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
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
 */class fo{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{ko(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e._u.add(4),await po(e),e.gu.set("Unknown"),e._u.delete(4),await mo(e)}(this))}))})),this.gu=new ho(n,i)}}async function mo(t){if(ko(t))for(const e of t.wu)await e(!0)}async function po(t){for(const e of t.wu)await e(!1)}function go(t,e){const n=w(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),xo(n)?wo(n):Vo(n).ko()&&vo(n,e))}function yo(t,e){const n=w(t),i=Vo(n);n.du.delete(e),i.ko()&&bo(n,e),0===n.du.size&&(i.ko()?i.Fo():ko(n)&&n.gu.set("Unknown"))}function vo(t,e){t.yu.Ot(e.targetId),Vo(t).zo(e)}function bo(t,e){t.yu.Ot(e),Vo(t).Ho(e)}function wo(t){t.yu=new Ln({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Vo(t).start(),t.gu.uu()}function xo(t){return ko(t)&&!Vo(t).No()&&t.du.size>0}function ko(t){return 0===w(t)._u.size}function Co(t){t.yu=void 0}async function Io(t){t.du.forEach(((e,n)=>{vo(t,e)}))}async function Eo(t,e){Co(t),xo(t)?(t.gu.hu(e),wo(t)):t.gu.set("Unknown")}async function No(t,e,n){if(t.gu.set("Online"),e instanceof Dn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){m("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await So(t,n)}else if(e instanceof _n?t.yu.Kt(e):e instanceof An?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(F.min()))try{const e=await Hi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const o=t.du.get(i);o&&t.du.set(i,o.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),bo(t,e);const i=new yi(n.target,e,1,n.sequenceNumber);vo(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){m("RemoteStore","Failed to raise snapshot:",e),await So(t,e)}}async function So(t,e,n){if(!J(e))throw e;t._u.add(1),await po(t),t.gu.set("Offline"),n||(n=()=>Hi(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await mo(t)}))}function To(t,e){return e().catch((n=>So(t,n,e)))}async function _o(t){const e=w(t),n=jo(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Ao(e);)try{const t=await Xi(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,Do(e,t)}catch(t){await So(e,t)}Oo(e)&&Lo(e)}function Ao(t){return ko(t)&&t.fu.length<10}function Do(t,e){t.fu.push(e);const n=jo(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Oo(t){return ko(t)&&!jo(t).No()&&t.fu.length>0}function Lo(t){jo(t).start()}async function Ro(t){jo(t).eu()}async function Mo(t){const e=jo(t);for(const n of t.fu)e.Xo(n.mutations)}async function Po(t,e,n){const i=t.fu.shift(),o=pi.from(i,e,n);await To(t,(()=>t.remoteSyncer.applySuccessfulWrite(o))),await _o(t)}async function Fo(t,e){e&&jo(t).Yo&&await async function(t,e){if(hn(n=e.code)&&n!==x.ABORTED){const n=t.fu.shift();jo(t).Mo(),await To(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await _o(t)}var n}(t,e),Oo(t)&&Lo(t)}async function Uo(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const i=ko(n);n._u.add(3),await po(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await mo(n)}async function zo(t,e){const n=w(t);e?(n._u.delete(2),await mo(n)):e||(n._u.add(2),await po(n),n.gu.set("Unknown"))}function Vo(t){return t.pu||(t.pu=function(t,e,n){const i=w(t);return i.su(),new lo(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:Io.bind(null,t),Zr:Eo.bind(null,t),Wo:No.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),xo(t)?wo(t):t.gu.set("Unknown")):(await t.pu.stop(),Co(t))}))),t.pu}function jo(t){return t.Iu||(t.Iu=function(t,e,n){const i=w(t);return i.su(),new co(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:Ro.bind(null,t),Zr:Fo.bind(null,t),tu:Mo.bind(null,t),Zo:Po.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await _o(t)):(await t.Iu.stop(),t.fu.length>0&&(m("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
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
 */}class Bo{static createAndSchedule(t,e,n,i,o){const r=Date.now()+n,s=new Bo(t,e,r,i,o);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new k(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Wo(t,e){if(p("AsyncQueue",`${e}: ${t}`),J(t))return new k(x.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Ho{static emptySet(t){return new Ho(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ho))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ho;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||B.comparator(e.key,n.key):(t,e)=>B.comparator(t.key,e.key),this.keyedMap=yn(),this.sortedSet=new te(this.comparator)}}
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
 */class qo{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):v():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new te(B.comparator)}}class Xo{static fromInitialDocuments(t,e,n,i,o){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Xo(t,e,Ho.emptySet(e),r,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,i,o,r,s,a,l){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
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
 */class $o{constructor(){this.Au=void 0,this.listeners=[]}}class Ko{constructor(){this.queries=new fn((t=>Ee(t)),Ie),this.onlineState="Unknown",this.Ru=new Set}}async function Yo(t,e){const n=w(t),i=e.query;let o=!1,r=n.queries.get(i);if(r||(o=!0,r=new $o),o)try{r.Au=await n.onListen(i)}catch(t){const n=Wo(t,`Initialization of query '${Ne(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Zo(n)}async function Go(t,e){const n=w(t),i=e.query;let o=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),o=0===r.listeners.length)}if(o)return n.queries.delete(i),n.onUnlisten(i)}function Qo(t,e){const n=w(t);let i=!1;for(const t of e){const e=t.query,o=n.queries.get(e);if(o){for(const e of o.listeners)e.Pu(t)&&(i=!0);o.Au=t}}i&&Zo(n)}function Jo(t,e,n){const i=w(t),o=i.queries.get(e);if(o)for(const t of o.listeners)t.onError(n);i.queries.delete(e)}function Zo(t){t.Ru.forEach((t=>{t.next()}))}class tr{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Xo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Xo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
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
 */
class er{constructor(t){this.key=t}}class nr{constructor(t){this.key=t}}class ir{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new qo,i=e?e.Qu:this.Qu;let o=e?e.mutatedKeys:this.mutatedKeys,r=i,s=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),u=Se(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||l&&this.Gu(u,l)<0)&&(s=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(s=!0)),f&&(u?(r=r.add(u),o=d?o.add(t):o.delete(t)):(r=r.delete(t),o=o.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),o=o.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:s,mutatedKeys:o}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const o=t.zu.Eu();o.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.Uu;return this.Uu=s,0!==o.length||a?{snapshot:new Xo(this.query,t.Qu,i,o,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new qo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=In(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new nr(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new er(n))})),e}tc(t){this.qu=t.Hi,this.Ku=In();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Xo.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=In(),this.mutatedKeys=In(),this.Gu=_e(t),this.Qu=new Ho(this.Gu)}}class or{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rr{constructor(t){this.key=t,this.nc=!1}}class sr{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,i,o,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new fn((t=>Ee(t)),Ie),this.rc=new Map,this.oc=new Set,this.uc=new te(B.comparator),this.cc=new Map,this.ac=new Ai,this.hc={},this.lc=new Map,this.fc=Ii.vn(),this.onlineState="Unknown",this.dc=void 0}}async function ar(t,e){const n=Er(t);let i,o;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),o=r.view.ec();else{const t=await $i(n.localStore,ke(e));n.isPrimaryClient&&go(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,o=await lr(n,e,i,"current"===r,t.resumeToken)}return o}async function lr(t,e,n,i,o){t._c=(e,n,i)=>async function(t,e,n,i){let o=e.view.Wu(n);o.$i&&(o=await Yi(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,o))));const r=i&&i.targetChanges.get(e.targetId),s=e.view.applyChanges(o,t.isPrimaryClient,r);return br(t,e.targetId,s.Xu),s.snapshot}(t,e,n,i);const r=await Yi(t.localStore,e,!0),s=new ir(e,r.Hi),a=s.Wu(r.documents),l=Tn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,o),c=s.applyChanges(a,t.isPrimaryClient,l);br(t,n,c.Xu);const u=new or(e,n,s);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function cr(t,e){const n=w(t),i=n.ic.get(e),o=n.rc.get(i.targetId);if(o.length>1)return n.rc.set(i.targetId,o.filter((t=>!Ie(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ki(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),yo(n.remoteStore,i.targetId),yr(n,i.targetId)})).catch(G)):(yr(n,i.targetId),await Ki(n.localStore,i.targetId,!0))}async function ur(t,e){const n=w(t);try{const t=await function(t,e){const n=w(t),i=e.snapshotVersion;let o=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});o=n.qi;const s=[];e.targetChanges.forEach(((r,a)=>{const l=o.get(a);if(!l)return;s.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let c=l.withSequenceNumber(t.currentSequenceNumber);var u,h,d;e.targetMismatches.has(a)?c=c.withResumeToken(ct.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),o=o.insert(a,c),h=c,d=r,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&s.push(n.Cs.updateTargetData(t,c))}));let a=pn(),l=In();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),s.push(qi(t,r,e.documentUpdates).next((t=>{a=t.Wi,l=t.zi}))),!i.isEqual(F.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));s.push(e)}return Q.waitFor(s).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,l))).next((()=>a))})).then((t=>(n.qi=o,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?b(i.nc):t.removedDocuments.size>0&&(b(i.nc),i.nc=!1))})),await kr(n,t,e)}catch(t){await G(t)}}function hr(t,e,n){const i=w(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const o=i.view.bu(e);o.snapshot&&t.push(o.snapshot)})),function(t,e){const n=w(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(i=!0)})),i&&Zo(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dr(t,e,n){const i=w(t);i.sharedClientState.updateQueryState(e,"rejected",n);const o=i.cc.get(e),r=o&&o.key;if(r){let t=new te(B.comparator);t=t.insert(r,le.newNoDocument(r,F.min()));const n=In().add(r),o=new Sn(F.min(),new Map,new ie(R),t,n);await ur(i,o),i.uc=i.uc.remove(r),i.cc.delete(e),xr(i)}else await Ki(i.localStore,e,!1).then((()=>yr(i,e,n))).catch(G)}async function fr(t,e){const n=w(t),i=e.batch.batchId;try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),o=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const o=n.batch,r=o.keys();let s=Q.resolve();return r.forEach((t=>{s=s.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);b(null!==r),e.version.compareTo(r)<0&&(o.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,o)))}(n,t,e,o).next((()=>o.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=In();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);gr(n,i,null),pr(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await kr(n,t)}catch(t){await G(t)}}async function mr(t,e,n){const i=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(b(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);gr(i,e,n),pr(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await kr(i,t)}catch(t){await G(t)}}function pr(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function gr(t,e,n){const i=w(t);let o=i.hc[i.currentUser.toKey()];if(o){const t=o.get(e);t&&(n?t.reject(n):t.resolve(),o=o.remove(e)),i.hc[i.currentUser.toKey()]=o}}function yr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||vr(t,e)}))}function vr(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(yo(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),xr(t))}function br(t,e,n){for(const i of n)i instanceof er?(t.ac.addReference(i.key,e),wr(t,i)):i instanceof nr?(m("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||vr(t,i.key)):v()}function wr(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(m("SyncEngine","New document in limbo: "+n),t.oc.add(i),xr(t))}function xr(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(z.fromString(e)),i=t.fc.next();t.cc.set(i,new rr(n)),t.uc=t.uc.insert(n,i),go(t.remoteStore,new yi(ke(ge(n.path)),i,2,Z.at))}}async function kr(t,e,n){const i=w(t),o=[],r=[],s=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{s.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){o.push(t);const e=zi.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(s),i.sc.Wo(o),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Q.forEach(e,(e=>Q.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Q.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!J(t))throw t;m("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),i=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(e,o)}}}(i.localStore,r))}async function Cr(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){m("SyncEngine","User change. New user:",e.toKey());const t=await Wi(n.localStore,e);n.currentUser=e,(i=n).lc.forEach((t=>{t.forEach((t=>{t.reject(new k(x.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.lc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await kr(n,t.ji)}var i}function Ir(t,e){const n=w(t),i=n.cc.get(e);if(i&&i.nc)return In().add(i.key);{let t=In();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function Er(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ur.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ir.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dr.bind(null,e),e.sc.Wo=Qo.bind(null,e.eventManager),e.sc.wc=Jo.bind(null,e.eventManager),e}function Nr(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fr.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mr.bind(null,e),e}class Sr{async initialize(t){this.yt=ro(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Bi(this.persistence,new Vi,t.initialUser,this.yt)}yc(t){return new Pi(Ui.Bs,this.yt)}gc(t){return new Ji}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Tr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cr.bind(null,this.syncEngine),await zo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ko}createDatastore(t){const e=ro(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new io(i));var i,o,r;return o=t.authCredentials,r=t.appCheckCredentials,new uo(o,r,n,e)}createRemoteStore(t){var e,n,i,o,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,o=t=>hr(this.syncEngine,t,0),r=to.C()?new to:new Zi,new fo(e,n,i,o,r)}createSyncEngine(t,e){return function(t,e,n,i,o,r,s){const a=new sr(t,e,n,i,o,r);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);m("RemoteStore","RemoteStore shutting down."),e._u.add(5),await po(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
 */function _r(t,e,n){if(!n)throw new k(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ar(t){if(!B.isDocumentKey(t))throw new k(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dr(t){if(B.isDocumentKey(t))throw new k(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Or(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Or(t);throw new k(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Rr=new Map;class Mr{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new k(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new k(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new k(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class Pr{get app(){if(!this._app)throw new k(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new k(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new E;switch(t.type){case"gapi":const e=t.client;return new _(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new k(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Rr.get(t);e&&(m("ComponentProvider","Removing Datastore"),Rr.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mr({}),this._settingsFrozen=!1}}
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
class Fr{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fr(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ur{withConverter(t){return new Ur(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class zr extends Ur{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fr(this.firestore,null,new B(t))}withConverter(t){return new zr(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ge(n)),this._path=n,this.type="collection"}}function Vr(t,e,...n){if(t=(0,a.getModularInstance)(t),_r("collection","path",e),t instanceof Pr){const i=z.fromString(e,...n);return Dr(i),new zr(t,null,i)}{if(!(t instanceof Fr||t instanceof zr))throw new k(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(z.fromString(e,...n));return Dr(i),new zr(t.firestore,null,i)}}function jr(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=L.R()),_r("doc","path",e),t instanceof Pr){const i=z.fromString(e,...n);return Ar(i),new Fr(t,null,new B(i))}{if(!(t instanceof Fr||t instanceof zr))throw new k(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(z.fromString(e,...n));return Ar(i),new Fr(t.firestore,t instanceof zr?t.converter:null,new B(i))}}
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
 */
class Br{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):p("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
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
 */
class Wr{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Wo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{m("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(m("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Hr(t,e){t.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Wi(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function qr(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xr(t);m("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Uo(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Uo(e.remoteStore,n))),t.onlineComponents=e}async function Xr(t){return t.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Hr(t,new Sr)),t.offlineComponents}async function $r(t){return t.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await qr(t,new Tr)),t.onlineComponents}function Kr(t){return $r(t).then((t=>t.syncEngine))}async function Yr(t){const e=await $r(t),n=e.eventManager;return n.onListen=ar.bind(null,e.syncEngine),n.onUnlisten=cr.bind(null,e.syncEngine),n}function Gr(t,e,n={}){const i=new C;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,o){const r=new Br({next:r=>{e.enqueueAndForget((()=>Go(t,s)));const a=r.docs.has(n);!a&&r.fromCache?o.reject(new k(x.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?o.reject(new k(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(r)},error:t=>o.reject(t)}),s=new tr(ge(n.path),r,{includeMetadataChanges:!0,Nu:!0});return Yo(t,s)}(await Yr(t),t.asyncQueue,e,n,i))),i.promise}class Qr{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=oo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new C;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!J(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Bo.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new so(this,"async_queue_retry"),this.Wc=()=>{const t=oo();t&&m("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=oo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}function Jr(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}(t)}class Zr extends Pr{_terminate(){return this._firestoreClient||ns(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Qr,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function ts(t,e){const n="object"==typeof t?t:(0,i.getApp)(),o="string"==typeof t?t:e||"(default)",r=(0,i._getProvider)(n,"firestore").getImmediate({identifier:o});if(!r._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,i={}){var o;const r=(t=Lr(t,Pr))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=u.MOCK_USER;else{e=(0,a.createMockUserToken)(i.mockUserToken,null===(o=t._app)||void 0===o?void 0:o.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new k(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(r)}t._authCredentials=new N(new I(e,n))}}(r,...t)}return r}function es(t){return t._firestoreClient||ns(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ns(t){var e;const n=t._freezeSettings(),i=(o=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",s=t._persistenceKey,new tt(o,r,s,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var o,r,s,a;t._firestoreClient=new Wr(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class is{static fromBase64String(t){try{return new is(ct.fromBase64String(t))}catch(t){throw new k(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new is(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class os{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new k(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}}
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
class rs{constructor(t){this._methodName=t}}
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
 */class ss{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const as=/^__.*__$/;class ls{toMutation(t,e){return null!==this.fieldMask?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function cs(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class us{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new us(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return xs(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(cs(this.sa)&&as.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,o,r){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=i,void 0===o&&this.na(),this.fieldTransforms=o||[],this.fieldMask=r||[]}}class hs{da(t,e,n,i=!1){return new us({sa:t,methodName:e,fa:n,path:j.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||ro(t)}}function ds(t){const e=t._freezeSettings(),n=ro(t._databaseId);return new hs(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fs(t,e,n,i,o,r={}){const s=t.da(r.merge||r.mergeFields?2:0,e,n,o);ys("Data must be an object, but it was:",s,i);const a=ps(i,s);let l,c;if(r.merge)l=new re(s.fieldMask),c=s.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const o=vs(e,i,n);if(!s.contains(o))throw new k(x.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);ks(t,o)||t.push(o)}l=new re(t),c=s.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=s.fieldTransforms;return new ls(new se(a),l,c)}function ms(t,e){if(gs(t=(0,a.getModularInstance)(t)))return ys("Unsupported field value:",e,t),ps(t,e);if(t instanceof rs)return function(t,e){if(!cs(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const o of t){let t=ms(o,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Le(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:Vn(e.yt,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Vn(e.yt,n)}}if(t instanceof ss)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof is)return{bytesValue:jn(e.yt,t._byteString)};if(t instanceof Fr){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Hn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Or(t)}`)}(t,e)}function ps(t,e){const n={};return ot(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):it(t,((t,i)=>{const o=ms(i,e.ra(t));null!=o&&(n[t]=o)})),{mapValue:{fields:n}}}function gs(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof ss||t instanceof is||t instanceof Fr||t instanceof rs)}function ys(t,e,n){if(!gs(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Or(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}var i}function vs(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof os)return e._internalPath;if("string"==typeof e)return ws(t,e);throw xs("Field path arguments must be of type string or ",t,!1,void 0,n)}const bs=new RegExp("[~\\*/\\[\\]]");function ws(t,e,n){if(e.search(bs)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new os(...e.split("."))._internalPath}catch(i){throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xs(t,e,n,i,o){const r=i&&!i.isEmpty(),s=void 0!==o;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||s)&&(l+=" (found",r&&(l+=` in field ${i}`),s&&(l+=` in document ${o}`),l+=")"),new k(x.INVALID_ARGUMENT,a+t+l)}function ks(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Cs{get id(){return this._key.path.lastSegment()}get ref(){return new Fr(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Is(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Es("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}}class Is extends Cs{data(){return super.data()}}function Es(t,e){return"string"==typeof e?ws(t,e):e instanceof os?e._internalPath:e._delegate._internalPath}
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
 */function Ns(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new k(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ss{convertValue(t,e="none"){switch(vt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return it(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new ss(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=pt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(gt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=z.fromString(t);b(ui(n));const i=new et(n.get(1),n.get(3)),o=new B(n.popFirst(5));return i.isEqual(e)||p(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}
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
 */function Ts(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
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
class _s{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class As extends Cs{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Es("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,i,o,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=o}}class Ds extends As{data(t={}){return super.data(t)}}class Os{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ds(this._firestore,this._userDataWriter,n.key,n,new _s(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new Ds(t._firestore,t._userDataWriter,n.doc.key,n.doc,new _s(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Ds(t._firestore,t._userDataWriter,e.doc.key,e.doc,new _s(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let o=-1,r=-1;return 0!==e.type&&(o=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Ls(e.type),doc:i,oldIndex:o,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new _s(i.hasPendingWrites,i.fromCache),this.query=n}}function Ls(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
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
function Rs(t){t=Lr(t,Fr);const e=Lr(t.firestore,Zr);return Gr(es(e),t._key).then((n=>zs(e,t,n)))}class Ms extends Ss{convertBytes(t){return new is(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Fr(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Ps(t,e,n){t=Lr(t,Fr);const i=Lr(t.firestore,Zr),o=Ts(t.converter,e,n);return Us(i,[fs(ds(i),"setDoc",t._key,o,null!==t.converter,n).toMutation(t._key,Xe.none())])}function Fs(t,...e){var n,i,o;t=(0,a.getModularInstance)(t);let r={includeMetadataChanges:!1},s=0;"object"!=typeof e[s]||Jr(e[s])||(r=e[s],s++);const l={includeMetadataChanges:r.includeMetadataChanges};if(Jr(e[s])){const t=e[s];e[s]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[s+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[s+2]=null===(o=t.complete)||void 0===o?void 0:o.bind(t)}let c,u,h;if(t instanceof Fr)u=Lr(t.firestore,Zr),h=ge(t._key.path),c={next:n=>{e[s]&&e[s](zs(u,t,n))},error:e[s+1],complete:e[s+2]};else{const n=Lr(t,Ur);u=Lr(n.firestore,Zr),h=n._query;const i=new Ms(u);c={next:t=>{e[s]&&e[s](new Os(u,i,n,t))},error:e[s+1],complete:e[s+2]},Ns(t._query)}return function(t,e,n,i){const o=new Br(i),r=new tr(e,o,n);return t.asyncQueue.enqueueAndForget((async()=>Yo(await Yr(t),r))),()=>{o.bc(),t.asyncQueue.enqueueAndForget((async()=>Go(await Yr(t),r)))}}(es(u),h,l,c)}function Us(t,e){return function(t,e){const n=new C;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Nr(t);try{const t=await function(t,e){const n=w(t),i=P.now(),o=e.reduce(((t,e)=>t.add(e.key)),In());let r,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=pn(),l=In();return n.Gi.getEntries(t,o).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((o=>{r=o;const s=[];for(const t of e){const e=Je(t,r.get(t.key).overlayedDocument);null!=e&&s.push(new en(t.key,e,ae(e.value.mapValue),Xe.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,s,e)})).next((e=>{s=e;const i=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:s.batchId,changes:vn(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new te(R)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await kr(i,t.changes),await _o(i.remoteStore)}catch(t){const e=Wo(t,"Failed to persist write");n.reject(e)}}(await Kr(t),e,n))),n.promise}(es(t),e)}function zs(t,e,n){const i=n.docs.get(e._key),o=new Ms(t);return new As(t,o,e._key,i,new _s(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){var n;n=i.SDK_VERSION,h=n,(0,i._registerComponent)(new(0,o.Component)("firestore",((t,{instanceIdentifier:n,options:i})=>{const o=t.getProvider("app").getImmediate(),r=new Zr(new S(t.getProvider("auth-internal")),new D(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new k(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new et(t.options.projectId,e)}(o,n),o);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,"3.8.1",t),(0,i.registerVersion)(c,"3.8.1","esm2017")}()})),r.register("lW9Fu",(function(n,i){t(n.exports,"createWebChannelTransport",(function(){return Jn})),t(n.exports,"getStatEventTarget",(function(){return Zn})),t(n.exports,"ErrorCode",(function(){return ti})),t(n.exports,"EventType",(function(){return ei})),t(n.exports,"Event",(function(){return ni})),t(n.exports,"Stat",(function(){return ii})),t(n.exports,"FetchXmlHttpFactory",(function(){return oi})),t(n.exports,"WebChannel",(function(){return ri})),t(n.exports,"XhrIo",(function(){return si}));var o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},a=a||{},l=r||self;function c(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function m(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:p).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var o=Array(arguments.length-2),r=2;r<arguments.length;r++)o[r-2]=arguments[r];return e.prototype[n].apply(t,o)}}function b(){this.s=this.s,this.o=this.o}b.prototype.s=!1,b.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f))},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function x(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function k(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(u(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let o=0;o<i;o++)t[e+o]=n[o]}else t.push(n)}}function C(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",c,e),l.removeEventListener("test",c,e)}catch(t){}return t}();function E(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function S(t,e){return t<e?-1:t>e?1:0}function T(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function _(t){return-1!=T().indexOf(t)}function A(t){return A[" "](t),t}A[" "]=c;var D,O,L=_("Opera"),R=_("Trident")||_("MSIE"),M=_("Edge"),P=M||R,F=_("Gecko")&&!(-1!=T().toLowerCase().indexOf("webkit")&&!_("Edge"))&&!(_("Trident")||_("MSIE"))&&!_("Edge"),U=-1!=T().toLowerCase().indexOf("webkit")&&!_("Edge");function z(){var t=l.document;return t?t.documentMode:void 0}t:{var V="",j=(O=T(),F?/rv:([^\);]+)(\)|;)/.exec(O):M?/Edge\/([\d\.]+)/.exec(O):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(O):U?/WebKit\/(\S+)/.exec(O):L?/(?:Version)[ \/]?(\S+)/.exec(O):void 0);if(j&&(V=j?j[1]:""),R){var B=z();if(null!=B&&B>parseFloat(V)){D=String(B);break t}}D=V}var W,H={};function q(){return function(t){var e=H;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=N(String(D)).split("."),n=N("9").split("."),i=Math.max(e.length,n.length);for(let s=0;0==t&&s<i;s++){var o=e[s]||"",r=n[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==o[0].length&&0==r[0].length)break;t=S(0==o[1].length?0:parseInt(o[1],10),0==r[1].length?0:parseInt(r[1],10))||S(0==o[2].length,0==r[2].length)||S(o[2],r[2]),o=o[3],r=r[3]}while(0==t)}return 0<=t}))}if(l.document&&R){var X=z();W=X||(parseInt(D,10)||void 0)}else W=void 0;var $=W;function K(t,e){if(C.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F){t:{try{A(e.nodeName);var o=!0;break t}catch(t){}o=!1}o||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Y[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&K.X.h.call(this)}}v(K,C);var Y={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),Q=0;function J(t,e,n,i,o){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=o,this.key=++Q,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ot(t){this.src=t,this.g={},this.h=0}function rt(t,e){var n=e.type;if(n in t.g){var i,o=t.g[n],r=w(o,e);(i=0<=r)&&Array.prototype.splice.call(o,r,1),i&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function st(t,e,n,i){for(var o=0;o<t.length;++o){var r=t[o];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return o}return-1}ot.prototype.add=function(t,e,n,i,o){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var s=st(t,e,i,o);return-1<s?(e=t[s],n||(e.ea=!1)):((e=new J(e,this.src,r,!!i,o)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),lt={};function ct(t,e,n,i,o){if(i&&i.once)return ht(t,e,n,i,o);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ct(t,e[r],n,i,o);return null}return n=vt(n),t&&t[G]?t.N(e,n,h(i)?!!i.capture:!!i,o):ut(t,e,n,!1,i,o)}function ut(t,e,n,i,o,r){if(!e)throw Error("Invalid event type");var s=h(o)?!!o.capture:!!o,a=gt(t);if(a||(t[at]=a=new ot(t)),(n=a.add(e,n,i,s,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=pt;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)I||(o=s),void 0===o&&(o=!1),t.addEventListener(e.toString(),i,o);else if(t.attachEvent)t.attachEvent(mt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ht(t,e,n,i,o){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ht(t,e[r],n,i,o);return null}return n=vt(n),t&&t[G]?t.O(e,n,h(i)?!!i.capture:!!i,o):ut(t,e,n,!0,i,o)}function dt(t,e,n,i,o){if(Array.isArray(e))for(var r=0;r<e.length;r++)dt(t,e[r],n,i,o);else i=h(i)?!!i.capture:!!i,n=vt(n),t&&t[G]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=st(r=t.g[e],n,i,o))&&(Z(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=gt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=st(e,n,i,o)),(n=-1<t?e[t]:null)&&ft(n))}function ft(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[G])rt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=gt(e))?(rt(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function mt(t){return t in lt?lt[t]:lt[t]="on"+t}function pt(t,e){if(t.ba)t=!0;else{e=new K(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&ft(t),t=n.call(i,e)}return t}function gt(t){return(t=t[at])instanceof ot?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function bt(){b.call(this),this.i=new ot(this),this.P=this,this.I=null}function wt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new C(e,t);else if(e instanceof C)e.target=e.target||t;else{var o=e;it(e=new C(i,t),o)}if(o=!0,n)for(var r=n.length-1;0<=r;r--){var s=e.g=n[r];o=xt(s,i,!0,e)&&o}if(o=xt(s=e.g=t,i,!0,e)&&o,o=xt(s,i,!1,e)&&o,n)for(r=0;r<n.length;r++)o=xt(s=e.g=n[r],i,!1,e)&&o}function xt(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var o=!0,r=0;r<e.length;++r){var s=e[r];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&rt(t.i,s),o=!1!==a.call(l,i)&&o}}return o&&!i.defaultPrevented}v(bt,b),bt.prototype[G]=!0,bt.prototype.removeEventListener=function(t,e,n,i){dt(this,t,e,n,i)},bt.prototype.M=function(){if(bt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Z(n[i]);delete e.g[t],e.h--}}this.I=null},bt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},bt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var kt=l.JSON.stringify;function Ct(){var t=At;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var It,Et=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Nt),(t=>t.reset()));class Nt{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function St(t){l.setTimeout((()=>{throw t}),0)}function Tt(t,e){It||function(){var t=l.Promise.resolve(void 0);It=function(){t.then(Dt)}}(),_t||(It(),_t=!0),At.add(t,e)}var _t=!1,At=new class{add(t,e){const n=Et.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Dt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(t){St(t)}var e=Et;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_t=!1}function Ot(t,e){bt.call(this),this.h=t||1,this.g=e||l,this.j=g(this.lb,this),this.l=Date.now()}function Lt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Rt(t,e,n){if("function"==typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Mt(t){t.g=Rt((()=>{t.g=null,t.i&&(t.i=!1,Mt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Ot,bt),(o=Ot.prototype).ca=!1,o.R=null,o.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),wt(this,"tick"),this.ca&&(Lt(this),this.start()))}},o.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){Ot.X.M.call(this),Lt(this),delete this.g};class Pt extends b{l(t){this.h=arguments,this.g?this.i=!0:Mt(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ft(t){b.call(this),this.h=t,this.g={}}v(Ft,b);var Ut=[];function zt(t,e,n,i){Array.isArray(n)||(n&&(Ut[0]=n.toString()),n=Ut);for(var o=0;o<n.length;o++){var r=ct(e,n[o],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Vt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ft(t)}),t),t.g={}}function jt(){this.g=!0}function Bt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var o=i[1];if(Array.isArray(o)&&!(1>o.length)){var r=o[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var s=1;s<o.length;s++)o[s]=""}}}return kt(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Ft.prototype.M=function(){Ft.X.M.call(this),Vt(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},jt.prototype.Aa=function(){this.g=!1},jt.prototype.info=function(){};var Wt={},Ht=null;function qt(){return Ht=Ht||new bt}function Xt(t){C.call(this,Wt.Pa,t)}function $t(t){const e=qt();wt(e,new Xt(e))}function Kt(t,e){C.call(this,Wt.STAT_EVENT,t),this.stat=e}function Yt(t){const e=qt();wt(e,new Kt(e,t))}function Gt(t,e){C.call(this,Wt.Qa,t),this.size=e}function Qt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}Wt.Pa="serverreachability",v(Xt,C),Wt.STAT_EVENT="statevent",v(Kt,C),Wt.Qa="timingevent",v(Gt,C);var Jt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function te(){}function ee(t){return t.h||(t.h=t.i())}function ne(){}te.prototype.h=null;var ie,oe={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function re(){C.call(this,"d")}function se(){C.call(this,"c")}function ae(){}function le(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Ft(this),this.O=ue,t=P?125:void 0,this.T=new Ot(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ce}function ce(){this.i=null,this.g="",this.h=!1}v(re,C),v(se,C),v(ae,te),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},ie=new ae;var ue=45e3,he={},de={};function fe(t,e,n){t.K=1,t.v=Oe(Se(e)),t.s=n,t.P=!0,me(t,null)}function me(t,e){t.F=Date.now(),ve(t),t.A=Se(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),qe(n.i,"t",i),t.C=0,n=t.l.H,t.h=new ce,t.g=qn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Pt(g(t.La,t,t.g),t.N)),zt(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),$t(),function(t,e,n,i,o,r){t.info((function(){if(t.g)if(r)for(var s="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+c+"&":s+(u+"=redacted&")}}else s=null;else s=r;return"XMLHTTP REQ ("+i+") [attempt "+o+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function pe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ge(t,e,n){let i,o=!0;for(;!t.I&&t.C<n.length;){if(i=ye(t,n),i==de){4==e&&(t.o=4,Yt(14),o=!1),Bt(t.j,t.m,null,"[Incomplete Response]");break}if(i==he){t.o=4,Yt(15),Bt(t.j,t.m,n,"[Invalid Chunk]"),o=!1;break}Bt(t.j,t.m,i,null),Ce(t,i)}pe(t)&&i!=de&&i!=he&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Yt(16),o=!1),t.i=t.i&&o,o?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(e),e.K=!0,Yt(11))):(Bt(t.j,t.m,n,"[Invalid Chunked Response]"),ke(t),xe(t))}function ye(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?de:(n=Number(e.substring(n,i)),isNaN(n)?he:(i+=1)+n>e.length?de:(e=e.substr(i,n),t.C=i+n,e))}function ve(t){t.V=Date.now()+t.O,be(t,t.O)}function be(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Qt(g(t.gb,t),e)}function we(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||Vn(t.l,t)}function ke(t){we(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Lt(t.T),Vt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ce(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Qe(n.h,t)))if(!t.J&&Qe(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var o=i;if(0==o[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;zn(n),_n(n)}Pn(n),Yt(18)}}else n.Ba=o[1],0<n.Ba-n.T&&37500>o[2]&&n.L&&0==n.A&&!n.v&&(n.v=Qt(g(n.cb,n),6e3));if(1>=Ge(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&zn(n),!E(e))for(o=n.Fa.g.parse(e),e=0;e<o.length;e++){let c=o[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const o=c[4];null!=o&&(n.Ca=o,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Je(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,De(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=t;if((i=n).sa=Hn(i,i.H?i.ka:null,i.V),s.J){Ze(i.h,s);var a=s,l=i.J;l&&a.setTimeout(l),a.B&&(we(a),ve(a)),i.g=s}else Mn(i);0<n.i.length&&Dn(n)}else"stop"!=c[0]&&"close"!=c[0]||Bn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Bn(n,7):Tn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}$t()}catch(t){}}function Ie(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(u(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),o=i.length,r=0;r<o;r++)e.call(void 0,i[r],n&&n[r],t)}(o=le.prototype).setTimeout=function(t){this.O=t},o.ib=function(t){t=t.target;const e=this.L;e&&3==kn(t)?e.l():this.La(t)},o.La=function(t){try{if(t==this.g)t:{const h=kn(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||P||this.g&&(this.h.h||this.g.fa()||Cn(this.g)))){this.I||4!=h||7==e||$t(),we(this);var n=this.g.aa();this.Y=n;e:if(pe(this)){var i=Cn(this.g);t="";var o=i.length,r=4==kn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ke(this),xe(this);var s="";break e}this.h.i=new l.TextDecoder}for(e=0;e<o;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==o-1});i.splice(0,o),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(t,e,n,i,o,r,s){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+o+"]: "+e+"\n"+n+"\n"+r+" "+s}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Yt(12),ke(this),xe(this);break t}Bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ce(this,n)}this.P?(ge(this,h,s),P&&this.i&&3==h&&(zt(this.S,this.T,"tick",this.hb),this.T.start())):(Bt(this.j,this.m,s,null),Ce(this,s)),4==h&&ke(this),this.i&&!this.I&&(4==h?Vn(this.l,this):(this.i=!1,ve(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Yt(12)):(this.o=0,Yt(13)),ke(this),xe(this)}}}catch(t){}},o.hb=function(){if(this.g){var t=kn(this.g),e=this.g.fa();this.C<e.length&&(we(this),ge(this,t,e),this.i&&4!=t&&ve(this))}},o.cancel=function(){this.I=!0,ke(this)},o.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&($t(),Yt(17)),ke(this),this.o=2,xe(this)):be(this,this.V-t)};var Ee=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ne(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ne){this.h=void 0!==e?e:t.h,Te(this,t.j),this.s=t.s,this.g=t.g,_e(this,t.m),this.l=t.l,e=t.i;var n=new je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ae(this,n),this.o=t.o}else t&&(n=String(t).match(Ee))?(this.h=!!e,Te(this,n[1]||"",!0),this.s=Le(n[2]||""),this.g=Le(n[3]||"",!0),_e(this,n[4]),this.l=Le(n[5]||"",!0),Ae(this,n[6]||"",!0),this.o=Le(n[7]||"")):(this.h=!!e,this.i=new je(null,this.h))}function Se(t){return new Ne(t)}function Te(t,e,n){t.j=n?Le(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _e(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ae(t,e,n){e instanceof je?(t.i=e,function(t,e){e&&!t.j&&(Be(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),qe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Re(e,ze)),t.i=new je(e,t.h))}function De(t,e,n){t.i.set(e,n)}function Oe(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Le(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Re(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Me),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Me(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ne.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Re(e,Pe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Re(e,Pe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Re(n,"/"==n.charAt(0)?Ue:Fe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Re(n,Ve)),t.join("")};var Pe=/[#\/\?@]/g,Fe=/[#\?:]/g,Ue=/[#\?]/g,ze=/[#\?@]/g,Ve=/#/g;function je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Be(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),o=null;if(0<=i){var r=t[n].substring(0,i);o=t[n].substring(i+1)}else r=t[n];e(r,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){Be(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function He(t,e){return Be(t),e=Xe(t,e),t.g.has(e)}function qe(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),x(n)),t.h+=n.length)}function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(o=je.prototype).add=function(t,e){Be(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},o.forEach=function(t,e){Be(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},o.oa=function(){Be(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const o=t[i];for(let t=0;t<o.length;t++)n.push(e[i])}return n},o.W=function(t){Be(this);let e=[];if("string"==typeof t)He(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},o.set=function(t,e){return Be(this),this.i=null,He(this,t=Xe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},o.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),s=this.W(i);for(i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function $e(t){this.l=t||Ke,l.PerformanceNavigationTiming?t=0<(t=l.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(l.g&&l.g.Ga&&l.g.Ga()&&l.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ke=10;function Ye(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ge(t){return t.h?1:t.g?t.g.size:0}function Qe(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Je(t,e){t.g?t.g.add(e):t.h=e}function Ze(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return x(t.i)}function en(){}function nn(){this.g=new en}function on(t,e,n){const i=n||"";try{Ie(t,(function(t,n){let o=t;h(t)&&(o=kt(t)),e.push(i+n+"="+encodeURIComponent(o))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function rn(t,e,n,i,o){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,o(i)}catch(t){}}function sn(t){this.l=t.ac||null,this.j=t.jb||!1}function an(t,e){bt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},en.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},en.prototype.parse=function(t){return l.JSON.parse(t,void 0)},v(sn,te),sn.prototype.g=function(){return new an(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),v(an,bt);var ln=0;function cn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function un(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hn(t)}function hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(o=an.prototype).open=function(t,e){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hn(this)},o.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,un(this)),this.readyState=ln},o.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},o.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?un(this):hn(this),3==this.readyState&&cn(this)}},o.Va=function(t){this.g&&(this.response=this.responseText=t,un(this))},o.Ua=function(t){this.g&&(this.response=t,un(this))},o.ga=function(){this.g&&un(this)},o.setRequestHeader=function(t,e){this.v.append(t,e)},o.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var dn=l.JSON.parse;function fn(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mn,this.K=this.L=!1}v(fn,bt);var mn="",pn=/^https?$/i,gn=["POST","PUT"];function yn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vn(t),wn(t)}function vn(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}function bn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=kn(t)||2!=t.aa()))if(t.v&&4==kn(t))Rt(t.Ha,0,t);else if(wt(t,"readystatechange"),4==kn(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var o=String(t.H).match(Ee)[1]||null;if(!o&&l.self&&l.self.location){var r=l.self.location.protocol;o=r.substr(0,r.length-1)}i=!pn.test(o?o.toLowerCase():"")}n=i}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var s=2<kn(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.aa()+"]",vn(t)}}finally{wn(t)}}}function wn(t,e){if(t.g){xn(t);const n=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function kn(t){return t.g?t.g.readyState:0}function Cn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case mn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function In(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function En(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=In(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):De(t,e,n))}function Nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Ca=0,this.i=[],this.j=new jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Nn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Nn("baseRetryDelayMs",5e3,t),this.bb=Nn("retryDelaySeedMs",1e4,t),this.$a=Nn("forwardChannelMaxRetries",2,t),this.ta=Nn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $e(t&&t.concurrentRequestLimit),this.Fa=new nn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Tn(t){if(An(t),3==t.G){var e=t.U++,n=Se(t.F);De(n,"SID",t.I),De(n,"RID",e),De(n,"TYPE","terminate"),Ln(t,n),(e=new le(t,t.j,e,void 0)).K=2,e.v=Oe(Se(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=qn(e.l,null),e.g.da(e.v)),e.F=Date.now(),ve(e)}Wn(t)}function _n(t){t.g&&(Fn(t),t.g.cancel(),t.g=null)}function An(t){_n(t),t.u&&(l.clearTimeout(t.u),t.u=null),zn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&l.clearTimeout(t.m),t.m=null)}function Dn(t){Ye(t.h)||t.m||(t.m=!0,Tt(t.Ja,t),t.C=0)}function On(t,e){var n;n=e?e.m:t.U++;const i=Se(t.F);De(i,"SID",t.I),De(i,"RID",n),De(i,"AID",t.T),Ln(t,i),t.o&&t.s&&En(i,t.o,t.s),n=new le(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Rn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Je(t.h,n),fe(n,i,e)}function Ln(t,e){t.ia&&tt(t.ia,(function(t,n){De(e,n,t)})),t.l&&Ie({},(function(t,n){De(e,n,t)}))}function Rn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?g(t.l.Ra,t.l,t):null;t:{var o=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=o[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let s=0;s<n;s++){let n=o[s].h;const a=o[s].g;if(n-=e,0>n)e=Math.max(0,o[s].h-100),r=!1;else try{on(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Mn(t){t.g||t.u||(t.Z=1,Tt(t.Ia,t),t.A=0)}function Pn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Qt(g(t.Ia,t),jn(t,t.A)),t.A++,!0)}function Fn(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function Un(t){t.g=new le(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Se(t.sa);De(e,"RID","rpc"),De(e,"SID",t.I),De(e,"CI",t.L?"0":"1"),De(e,"AID",t.T),De(e,"TYPE","xmlhttp"),Ln(t,e),t.o&&t.s&&En(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Oe(Se(e)),n.s=null,n.P=!0,me(n,t)}function zn(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function Vn(t,e){var n=null;if(t.g==e){zn(t),Fn(t),t.g=null;var i=2}else{if(!Qe(t.h,e))return;n=e.D,Ze(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var o=t.C;wt(i=qt(),new Gt(i,n)),Dn(t)}else Mn(t);else if(3==(o=e.o)||0==o&&0<t.pa||!(1==i&&function(t,e){return!(Ge(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Qt(g(t.Ja,t,e),jn(t,t.C)),t.C++,0)))}(t,e)||2==i&&Pn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),o){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function jn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=g(t.kb,t);n||(n=new Ne("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Te(n,"https"),Oe(n)),function(t,e){const n=new jt;if(l.Image){const i=new Image;i.onload=y(rn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=y(rn,n,i,"TestLoadImage: error",!1,e),i.onabort=y(rn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=y(rn,n,i,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Yt(2);t.G=0,t.l&&t.l.va(e),Wn(t),An(t)}function Wn(t){if(t.G=0,t.la=[],t.l){const e=tn(t.h);0==e.length&&0==t.i.length||(k(t.la,e),k(t.la,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ua()}}function Hn(t,e,n){var i=n instanceof Ne?Se(n):new Ne(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),_e(i,i.m);else{var o=l.location;i=o.protocol,e=e?e+"."+o.hostname:o.hostname,o=+o.port;var r=new Ne(null,void 0);i&&Te(r,i),e&&(r.g=e),o&&_e(r,o),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&De(i,n,e),De(i,"VER",t.ma),Ln(t,i),i}function qn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new fn(new sn({jb:!0})):new fn(t.ra)).Ka(t.H),e}function Xn(){}function $n(){if(R&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function Kn(t,e){bt.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!E(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!E(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Qn(this)}function Yn(t){re.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gn(){se.call(this),this.status=1}function Qn(t){this.g=t}(o=fn.prototype).Ka=function(t){this.L=t},o.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ie.g(),this.C=this.u?ee(this.u):ee(ie),this.g.onreadystatechange=g(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void yn(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var o in i)n.set(o,i[o]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),o=l.FormData&&t instanceof l.FormData,!(0<=w(gn,e))||i||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xn(this),0<this.B&&((this.K=function(t){return R&&q()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.qa,this)):this.A=Rt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){yn(this,t)}},o.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))},o.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),wn(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wn(this,!0)),fn.X.M.call(this)},o.Ha=function(){this.s||(this.F||this.v||this.l?bn(this):this.fb())},o.fb=function(){bn(this)},o.aa=function(){try{return 2<kn(this)?this.g.status:-1}catch(t){return-1}},o.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},o.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dn(e)}},o.Ea=function(){return this.m},o.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Sn.prototype).ma=8,o.G=1,o.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const o=new le(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=et(r),it(r,this.S)):r=this.S),null!==this.o||this.N||(o.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Rn(this,o,e),De(n=Se(this.F),"RID",t),De(n,"CVER",22),this.D&&De(n,"X-HTTP-Session-Id",this.D),Ln(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(In(r)))+"&"+e:this.o&&En(n,this.o,r)),Je(this.h,o),this.Ya&&De(n,"TYPE","init"),this.O?(De(n,"$req",e),De(n,"SID","null"),o.Z=!0,fe(o,n,null)):fe(o,n,e),this.G=2}}else 3==this.G&&(t?On(this,t):0==this.i.length||Ye(this.h)||On(this))},o.Ia=function(){if(this.u=null,Un(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qt(g(this.eb,this),t)}},o.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Yt(10),_n(this),Un(this))},o.cb=function(){null!=this.v&&(this.v=null,_n(this),Pn(this),Yt(19))},o.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Yt(2)):(this.j.info("Failed to ping google.com"),Yt(1))},(o=Xn.prototype).xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Ra=function(){},$n.prototype.g=function(t,e){return new Kn(t,e)},v(Kn,bt),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Yt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Hn(t,null,t.V),Dn(t)},Kn.prototype.close=function(){Tn(this.g)},Kn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=kt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Dn(e)},Kn.prototype.M=function(){this.g.l=null,delete this.j,Tn(this.g),delete this.g,Kn.X.M.call(this)},v(Yn,re),v(Gn,se),v(Qn,Xn),Qn.prototype.xa=function(){wt(this.g,"a")},Qn.prototype.wa=function(t){wt(this.g,new Yn(t))},Qn.prototype.va=function(t){wt(this.g,new Gn)},Qn.prototype.ua=function(){wt(this.g,"b")},$n.prototype.createWebChannel=$n.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,Zt.COMPLETE="complete",ne.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",bt.prototype.listen=bt.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Jn=s.createWebChannelTransport=function(){return new $n},Zn=s.getStatEventTarget=function(){return qt()},ti=s.ErrorCode=Jt,ei=s.EventType=Zt,ni=s.Event=Wt,ii=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},oi=s.FetchXmlHttpFactory=sn,ri=s.WebChannel=ne,si=s.XhrIo=fn})),r.register("7Y9D8",(function(t,n){var i,o;i=void 0===e?"undefined"==typeof window?t.exports:window:e,o=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,o,r,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",m="Failure",p="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",C="Hourglass",I="Circle",E="Arrows",N="Dots",S="Pulse",T="Custom",_="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D="Standard",O="Hourglass",L="Circle",R="Arrows",M="Dots",P="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},z=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},V=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},j=function(e,n){if(!V("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},B=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?B(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},Y=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},G=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Q=0,J=function(n,i,o,r){if(!V("body"))return!1;e||lt.Notify.init({});var s=B(!0,e,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof r&&!Array.isArray(r)){var f={};"object"==typeof o?f=o:"object"==typeof r&&(f=r),e=B(!0,e,f)}var m=e[n.toLocaleLowerCase("en")];Q++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=B(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(m.fontAwesomeIconColor=m.background),e.cssAnimation||(e.cssAnimationDuration=0);var p=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(p.id=d.wrapID,p.style.width=e.width,p.style.zIndex=e.zindex,p.style.opacity=e.opacity,"center-center"===e.position?(p.style.left=e.distance,p.style.top=e.distance,p.style.right=e.distance,p.style.bottom=e.distance,p.style.margin="auto",p.classList.add("nx-flex-center-center"),p.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",p.style.display="flex",p.style.flexWrap="wrap",p.style.flexDirection="column",p.style.justifyContent="center",p.style.alignItems="center",p.style.pointerEvents="none"):"center-top"===e.position?(p.style.left=e.distance,p.style.right=e.distance,p.style.top=e.distance,p.style.bottom="auto",p.style.margin="auto"):"center-bottom"===e.position?(p.style.left=e.distance,p.style.right=e.distance,p.style.bottom=e.distance,p.style.top="auto",p.style.margin="auto"):"right-bottom"===e.position?(p.style.right=e.distance,p.style.bottom=e.distance,p.style.top="auto",p.style.left="auto"):"left-top"===e.position?(p.style.left=e.distance,p.style.top=e.distance,p.style.right="auto",p.style.bottom="auto"):"left-bottom"===e.position?(p.style.left=e.distance,p.style.bottom=e.distance,p.style.top="auto",p.style.right="auto"):(p.style.right=e.distance,p.style.top=e.distance,p.style.left="auto",p.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=m.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(p);var y=t.document.createElement("div");y.id=e.ID+"-"+Q,y.className=e.className+" "+m.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof o?"nx-with-close-button":"")+" "+("function"==typeof o?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=m.textColor,y.style.background=m.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof o&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+m.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+m.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+m.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,C,I=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=p.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},E=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=p.childElementCount&&null!==p.parentNode){p.parentNode.removeChild(p);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};if(e.closeButton&&"function"!=typeof o&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof o||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof o&&o(),I();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof o){var N=function(){k=setTimeout((function(){I()}),e.timeout),C=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};N(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(C)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),N()})))}}if(e.showOnlyTheLastOne&&0<Q)for(var S,T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Q+"])"),_=0;_<T.length;_++)null!==(S=T[_]).parentNode&&S.parentNode.removeChild(S);e=B(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,o,r,s,l){if(!V("body"))return!1;n||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=B(!0,n,{}),n=B(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof o&&(e===f?o='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===m?o='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===p?o='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(o='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof r&&(r="Okay"),n.plainText&&(i=W(i),o=W(o),r=W(r)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',r="Okay"),o.length>n.messageMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',r="Okay"),r.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',r="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),o.length>n.messageMaxLength&&(o=o.substring(0,n.messageMaxLength)+"..."),r.length>n.buttonMaxLength&&(r=r.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===f?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===m?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===p?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+o+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+r+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var C=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),C()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){C()}))}n=B(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,o,r,s,l,c,u,h){if(!V("body"))return!1;i||lt.Confirm.init({});var d=B(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=B(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof o&&(o="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),o=W(o),s=W(s),l=W(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),o.length>i.messageMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),o.length>i.messageMaxLength&&(o=o.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var m="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+m),f.style.fontFamily='"'+i.fontFamily+'", '+a;var p="";i.backOverlay&&(p='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=r||"";var C=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+C+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=p+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+o+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var I=t.document.getElementById(f.id),E=t.document.getElementById("NXConfirmButtonOk"),N=t.document.getElementById("NXConfirmValidationInput");N&&(N.focus(),N.setSelectionRange(0,(N.value||"").length),N.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),N.classList.add("nx-validation-failure"),N.classList.remove("nx-validation-success")):(e===b&&(N.classList.remove("nx-validation-failure"),N.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&E.dispatchEvent(new Event("click")))}))),E.addEventListener("click",(function(t){if(e===b&&v&&N){if((N.value||"").toString()!==v)return N.focus(),N.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;N.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===w&&N&&(k=N.value||""),c(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&N&&(k=N.value||""),u(k)),I.classList.add("nx-remove");var t=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(t))}),i.cssAnimationDuration)}))}i=B(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ot=function(e,n,i,r,s){if(!V("body"))return!1;o||lt.Loading.init({});var l=B(!0,o,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),o=B(!0,o,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),r){var h="";0<(u=u.length>o.messageMaxLength?W(u).toString().substring(0,o.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+u+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var d="";if(e===k)d=H(o.svgSize,o.svgColor);else if(e===C)d=q(o.svgSize,o.svgColor);else if(e===I)d=X(o.svgSize,o.svgColor);else if(e===E)d=$(o.svgSize,o.svgColor);else if(e===N)d=K(o.svgSize,o.svgColor);else if(e===S)d=Y(o.svgSize,o.svgColor);else if(e===T&&null!==o.customSvgCode&&null===o.customSvgUrl)d=o.customSvgCode||"";else if(e===T&&null!==o.customSvgUrl&&null===o.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(e===T&&(null===o.customSvgUrl||null===o.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(o.svgSize,"#f8f8f8","#32c682")}var f=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),m=t.innerWidth,p=f>=m?m-40+"px":f+"px",g='<div style="width:'+p+"; height:"+p+';" class="'+o.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=o.zindex,y.style.background=o.backgroundColor,y.style.animationDuration=o.cssAnimationDuration+"ms",y.style.fontFamily='"'+o.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",o.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),o.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),o.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),o.cssAnimationDuration);clearTimeout(b)}),s);o=B(!0,o,l)},rt=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,n,i,o,s,l){var c;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}r||lt.Block.init({});var h=B(!0,r,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof o?d=o:"object"==typeof s&&(d=s),r=B(!0,r,d)}var f="";"string"==typeof o&&0<o.length&&(f=o),r.cssAnimation||(r.cssAnimationDuration=0);var m=F.className;"string"==typeof r.className&&(m=r.className.trim());var p="number"==typeof r.querySelectorLimit?r.querySelectorLimit:200,g=(c||[]).length>=p?p:c.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var k="";n&&(k=n===O?q(r.svgSize,r.svgColor):n===L?X(r.svgSize,r.svgColor):n===R?$(r.svgSize,r.svgColor):n===M?K(r.svgSize,r.svgColor):n===P?Y(r.svgSize,r.svgColor):H(r.svgSize,r.svgColor));var C='<span class="'+m+'-icon" style="width:'+r.svgSize+";height:"+r.svgSize+';">'+k+"</span>",I="";0<f.length&&(f=f.length>r.messageMaxLength?W(f).substring(0,r.messageMaxLength)+"...":W(f),I='<span style="font-size:'+r.messageFontSize+";color:"+r.messageColor+';" class="'+m+'-message">'+f+"</span>"),st++;var E=t.document.createElement("div");E.id=F.ID+"-"+st,E.className=m+(r.cssAnimation?" nx-with-animation":""),E.style.position=r.position,E.style.zIndex=r.zindex,E.style.background=r.backgroundColor,E.style.animationDuration=r.cssAnimationDuration+"ms",E.style.fontFamily='"'+r.fontFamily+'", '+a,E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",r.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=C+I;var N,S=t.getComputedStyle(v).getPropertyValue("position"),T="string"==typeof S?S.toLocaleLowerCase("en"):"relative",_=Math.round(1.25*parseInt(r.svgSize))+40,A="";_>(v.offsetHeight||0)&&(A="min-height:"+_+"px;"),N=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var D="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(T);if(j||0<A.length){if(!V("head"))return!1;j&&(D="position:relative!important;");var G='<style id="Style-'+F.ID+"-"+st+'">'+N+"."+y+"{"+D+A+"}</style>",Q=t.document.createRange();Q.selectNode(t.document.head);var J=Q.createContextualFragment(G);t.document.head.appendChild(J),v.classList.add(y)}v.appendChild(E)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),o=t.document.getElementById("Style-"+i);o&&null!==o.parentNode&&o.parentNode.removeChild(o),clearTimeout(n)}),r.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else z("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),r.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+F.ID+"]"),tt(x));clearTimeout(nt)}),l);r=B(!0,r,h)},lt={Notify:{init:function(t){e=B(!0,d,t),j(G,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=B(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){J(l,t,e,n)},failure:function(t,e,n){J(c,t,e,n)},warning:function(t,e,n){J(u,t,e,n)},info:function(t,e,n){J(h,t,e,n)}},Report:{init:function(t){n=B(!0,y,t),j(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=B(!0,n,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,o){tt(f,t,e,n,i,o)},failure:function(t,e,n,i,o){tt(m,t,e,n,i,o)},warning:function(t,e,n,i,o){tt(p,t,e,n,i,o)},info:function(t,e,n,i,o){tt(g,t,e,n,i,o)}},Confirm:{init:function(t){i=B(!0,x,t),j(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=B(!0,i,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,o,r,s){nt(v,t,e,null,n,i,o,r,s)},ask:function(t,e,n,i,o,r,s,a){nt(b,t,e,n,i,o,r,s,a)},prompt:function(t,e,n,i,o,r,s,a){nt(w,t,e,n,i,o,r,s,a)}},Loading:{init:function(t){o=B(!0,A,t),j(it,"NotiflixLoadingInternalCSS")},merge:function(t){return o?void(o=B(!0,o,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){ot(k,t,e,!0,0)},hourglass:function(t,e){ot(C,t,e,!0,0)},circle:function(t,e){ot(I,t,e,!0,0)},arrows:function(t,e){ot(E,t,e,!0,0)},dots:function(t,e){ot(N,t,e,!0,0)},pulse:function(t,e){ot(S,t,e,!0,0)},custom:function(t,e){ot(T,t,e,!0,0)},notiflix:function(t,e){ot(_,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),ot(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>o.messageMaxLength?W(e).substring(0,o.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var r=t.document.createElement("p");r.id=o.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=o.messageColor,r.style.fontSize=o.messageFontSize,r.innerHTML=e,n.appendChild(r)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){r=B(!0,F,t),j(rt,"NotiflixBlockInternalCSS")},merge:function(t){return r?void(r=B(!0,r,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,D,t,e,n)},hourglass:function(t,e,n){at(!0,O,t,e,n)},circle:function(t,e,n){at(!0,L,t,e,n)},arrows:function(t,e,n){at(!0,R,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?B(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return o(i)})):"object"==typeof t.exports?t.exports=o(i):i.Notiflix=o(i)})),r.register("bmZal",(function(e,n){t(e.exports,"createCardMarkup",(function(){return c})),t(e.exports,"createPopularMoviesMarkup",(function(){return u}));var i=r("fvCRb"),o=r("2nhTy");const s=document.querySelector(".gallery");let a="";const l=new URL(r("1YFTL"));function c(t){const e=t.map((({poster_path:t,title:e,release_date:n,genre_ids:i,vote_average:o,id:r})=>{!function(t){let e=[];t.map((t=>{e.push(localStorage.getItem(t))})),a=e?e.length<4?e.join(", "):e.slice(0,2).join(", ").concat(", Other"):"Other"}(i);const s=void 0===n?"no date":n.slice(0,4);return`<li class="movie" data-movie-id=${r}>\n        <img src="https://image.tmdb.org/t/p/w500/${t}" onerror="this.src='${l}'" alt="movie poster" class="movie__poster" data-movie-id=${r} loading="lazy"/>\n        <div class="movie__description">\n        <h2 class="movie__title" data-movie-id=${r}>${e}</h2>\n        <p class="movie__subtitle" data-movie-id=${r}>${a}${" | "+s}</p>\n        <p class="movie__rate" data-movie-id="${r}">${o.toFixed(1)}</p>\n        </div>\n        </li>`})).join("");return s.innerHTML=e,t.length&&function(){const{height:t}=s.firstElementChild.getBoundingClientRect();window.scrollBy({top:-200*t,behavior:"smooth"})}(),e}async function u(){await(0,i.getPopularMoviesFetch)().then((t=>{c(t.results),(0,o.default)(t.page,t.total_pages)})).catch((t=>console.log(t)))}!async function(){try{const t=await fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=158819e65eb0fbf8513ba7b934c25216");if(!t.ok)throw new Error(t.statusText);const e=await t.json();await e.genres.forEach((t=>{localStorage.setItem(t.id,t.name)}))}catch(t){console.log(t)}}()})),r.register("fvCRb",(function(e,n){t(e.exports,"getPopularMoviesFetch",(function(){return o})),t(e.exports,"getSearchMoviesFetch",(function(){return s}));var i=r("gjiCh");async function o(t){try{(0,i.default)();const e=await fetch(`https://api.themoviedb.org/3//trending/movie/day?api_key=158819e65eb0fbf8513ba7b934c25216&page=${t||1}`);if(!e.ok)throw new Error(e.statusText);const n=await e.json();return localStorage.setItem("currentData",JSON.stringify(n)),n}catch(t){console.log(t)}}async function s(t,e){if(t)try{(0,i.default)();const n=await fetch(`https://api.themoviedb.org/3//search/movie?api_key=158819e65eb0fbf8513ba7b934c25216&query=${t}&page=${e||1}`);if(!n.ok)throw new Error(n.statusText);const o=await n.json();return localStorage.setItem("currentData",JSON.stringify(o)),o}catch(t){console.log(t)}}})),r.register("2nhTy",(function(e,i){t(e.exports,"default",(function(){return h}));var o=r("fvCRb"),s=r("bmZal"),a=r("7Y9D8"),l=r("5MxpA");const c=document.querySelector(".pagination");let u=0;function h(t,e){let n="",i=t+1,o=t+2;if(u=t,t>1&&(n+="<li><button class='arrow-left'>left</button></li>",n+="<li class='number-pagination'><button>1</button></li>"),t>4&&(n+="<li>...</li>"),t>3&&(n+=`<li class='number-pagination'><button> ${t-2}</button></li>`),t>2&&(n+=`<li class='number-pagination'><button>${t-1}</button></li>`),n+=`<li class='number-pagination'><button class='currentPage'>${t}</button></li>`,t>=e)return c.innerHTML=n;e-1>t&&i<=e&&(n+=`<li class='number-pagination'><button>${i}</button></li>`),e-2>t&&o<=e&&(n+=`<li class='number-pagination'><button>${o}</button></li>`),e-3>t&&(n+="<li>...</li>"),(e>t||e<t)&&(n+=`<li class='number-pagination'><button>${e}</button></li>`,n+="<li><button class='arrow-right'>right</button></li>"),c.innerHTML=n}c.addEventListener("click",(function(t){if("LI"!==t.target.nodeName&&"BUTTON"!==t.target.nodeName)return;if("..."===t.target.textContent)return;if("left"===t.target.textContent){return""!==l.searchQuery?void(0,o.getSearchMoviesFetch)(l.searchQuery,u-=1).then((t=>{(0,s.createCardMarkup)(t.results),h(t.page,t.total_pages)})).catch((t=>{n(a).Notify.failure("Data error1")})):(localStorage.getItem("watched"),void(0,o.getPopularMoviesFetch)(u-=1).then((t=>{(0,s.createCardMarkup)(t.results),h(t.page,t.total_pages)})).catch((t=>{n(a).Notify.failure("Data error1")})))}if("right"===t.target.textContent){return""!==l.searchQuery?void(0,o.getSearchMoviesFetch)(l.searchQuery,u+=1).then((t=>{(0,s.createCardMarkup)(t.results),h(t.page,t.total_pages)})).catch((t=>{n(a).Notify.failure("Data error1")})):(localStorage.getItem("watched"),void(0,o.getPopularMoviesFetch)(u+=1).then((t=>{(0,s.createCardMarkup)(t.results),h(t.page,t.total_pages)})).catch((t=>{n(a).Notify.failure("Data error1")})))}const e=t.target.textContent;return""!==l.searchQuery?void(0,o.getSearchMoviesFetch)(l.searchQuery,e).then((t=>{(0,s.createCardMarkup)(t.results),h(t.page,t.total_pages)})).catch((t=>{n(a).Notify.failure("Data error1")})):(localStorage.getItem("watched"),void(0,o.getPopularMoviesFetch)(e).then((t=>{(0,s.createCardMarkup)(t.results),h(t.page,t.total_pages)})).catch((t=>{n(a).Notify.failure(console.log(t))})))}))})),r.register("5MxpA",(function(e,n){t(e.exports,"searchQuery",(function(){return l}));var i=r("iQIUW"),o=r("fvCRb"),s=r("bmZal"),a=(s=r("bmZal"),r("2nhTy"));i.Notify.init({width:"400px",position:"center-top",closeButton:!1,timeout:1e3,clickToClose:!0,cssAnimationStyle:"from-top"});let l="";const c=document.querySelector(".search-form"),u=document.querySelector(".inputsearch"),h=(document.querySelector(".js-gallery"),document.querySelector(".search-error"));function d(){setTimeout((()=>{h.classList.add("is-hidden")}),1e3)}c&&c.addEventListener("submit",(async function(t){t.preventDefault(),u.setAttribute("autocomplete","off"),l=t.target.elements.searchQuery.value.trim(),u.value="";try{if(""===l)return h.classList.remove("is-hidden"),i.Notify.warning("Search result not successful. Enter the correct movie name and try again"),(0,s.createPopularMoviesMarkup)(),void d();const t=await(0,o.getSearchMoviesFetch)(l,null),e=await t.results;if((0,s.createCardMarkup)(e),(0,a.default)(t.page,t.total_pages),d(),!e.length)return h.classList.remove("is-hidden"),(0,s.createPopularMoviesMarkup)(),void i.Notify.failure("Ooops, movies matching your search were not found")}catch(t){i.Notify.failure(`Something is wrong. ${t.message}`)}}))})),r.register("iQIUW",(function(t,n){var i,o;i=void 0!==e?e:"undefined"!=typeof window?window:t.exports,o=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",o="Warning",r="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=c(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,m){if(!l("body"))return!1;e||f.Notify.init({});var p=c(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof m&&!Array.isArray(m)){var g={};"object"==typeof d?g=d:"object"==typeof m&&(g=m),e=c(!0,e,g)}var y,v,b=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(w.id=s.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(s.overlayID)||t.document.createElement("div");x.id=s.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+h,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var C="";if(e.closeButton&&"function"!=typeof d&&(C='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?C:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===o?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?C:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?C:"");if("left-bottom"===e.position||"right-bottom"===e.position){var E=t.document.getElementById(s.wrapID);E.insertBefore(k,E.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var N=t.document.getElementById(k.id);if(N){var S,T,_=function(){N.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(S)},A=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(T)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){_();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&N.addEventListener("click",(function(){"function"==typeof d&&d(),_();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var D=function(){S=setTimeout((function(){_()}),e.timeout),T=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};D(),e.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(S),clearTimeout(T)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),D()})))}}if(e.showOnlyTheLastOne&&h>0)for(var O=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),L=0;L<O.length;L++){var R=O[L];null!==R.parentNode&&R.parentNode.removeChild(R)}e=c(!0,e,p)},f={Notify:{init:function(n){e=c(!0,s,n),function(e,n){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(o,t,e,n)},info:function(t,e,n){d(r,t,e,n)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return o(i)})):"object"==typeof t.exports?t.exports=o(i):i.Notiflix=o(i)})),r.register("1YFTL",(function(t,e){t.exports=new URL(r("kyEFX").resolve("dy2LO"),import.meta.url).toString()})),r.register("fOhbs",(function(t,e){t.exports=new URL(r("kyEFX").resolve("el93z"),import.meta.url).toString()})),r.register("kFjtm",(function(t,e){r("krGWQ")})),r.register("bTcpz",(function(t,e){var n=r("3INcY");r("kFjtm");var i=r("krGWQ"),o=r("5AVro");let s=null;const a={disablesScroll(){document.body.style.overflow="hidden"},enabledScroll(){document.body.style.overflow="scroll"}};function l(){i.refs.modal.classList.remove("is-hidden"),i.refs.body.addEventListener("keydown",u),i.refs.modal.addEventListener("click",h),a.disablesScroll()}function c(){i.refs.modal.classList.add("is-hidden"),i.refs.body.removeEventListener("keydown",u),i.refs.modal.removeEventListener("click",h),i.refs.modalImg.src="",a.enabledScroll()}function u(t){27===t.keyCode&&c()}function h(t){"backdrop"===t.target.classList.value&&c()}i.refs.galleryEl.addEventListener("click",(function(t){if(!t.target.dataset.movieId)return;i.refs.getWatchedBtn?i.refs.getWatchedBtn.classList.contains("library_btn--current")?s=JSON.parse(localStorage.getItem("watched")):i.refs.getQueueBtn.classList.contains("library_btn--current")&&(s=JSON.parse(localStorage.getItem("queue"))):s=JSON.parse(localStorage.getItem("currentData")).results;for(const e of s)if(e.id===+t.target.dataset.movieId){(0,n.findId)(e.id);const t=[];e.genre_ids.map((e=>{t.push(localStorage.getItem(e))})),i.refs.modalImg.src=`https://image.tmdb.org/t/p/original/${e.poster_path}`,i.refs.title.textContent=e.title,i.refs.voteAverage.textContent=e.vote_average.toFixed(1),i.refs.voteCount.textContent=e.vote_count,i.refs.popularity.textContent=e.popularity.toFixed(1),i.refs.originalTitle.textContent=e.original_title,i.refs.genre.textContent=t.join(", "),i.refs.about.textContent=e.overview,l(),(0,o.default)(e);break}})),i.refs.closeModalBtn.addEventListener("click",c)})),r.register("3INcY",(function(e,i){t(e.exports,"findId",(function(){return c}));var o=r("9448T"),s=r("krGWQ"),a=r("7Y9D8");let l=null;function c(t){l=t}function u(){s.refs.back_drop.classList.toggle("is-hidden"),s.refs.modalTrailer.innerHTML=""}s.refs.trailerBtn.addEventListener("click",(async function(){s.refs.back_drop.classList.toggle("is-hidden");try{const e=await(0,o.fetchTrailer)(l),{results:i}=e;if(0===i.length)return u(),void n(a).Notify.info("Sorry, no trailer found!",{timeout:1e3});t=i[0].key,s.refs.modalTrailer.insertAdjacentHTML("beforeend",`<iframe\n            class="trailer__video"\n            src="https://www.youtube.com/embed/${t}?&autoplay=1"\n            title="YouTube video player"\n            frameborder="0"\n            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n\t\t    allowautoplay\n            allowfullscreen\n        ></iframe>`)}catch(t){n(a).Notify.failure(t.message)}var t})),s.refs.closeBtn.addEventListener("click",u),s.refs.body.addEventListener("keydown",(function(t){27===t.keyCode&&u()})),s.refs.back_drop.addEventListener("click",(function(t){"back-drop"===t.target.classList.value&&u()}))})),r.register("9448T",(function(e,n){t(e.exports,"fetchTrailer",(function(){return o}));var i=r("krGWQ");async function o(t=536554){try{return await fetch(`${i.refs.API_URL}movie/${t}/videos?api_key=${i.refs.API_KEY}`).then((t=>{if(!t.ok)throw new Error("Bad request!!!");return t.json()}))}catch(t){console.log(t)}}})),r.register("cddKH",(function(t,e){var i=r("8fbcn"),o=r("krGWQ"),s=r("fZKcF");o.refs.openBtn.addEventListener("click",c),o.refs.closeBtnStudents.addEventListener("click",c);const a=o.refs.backdropEl[o.refs.backdropEl.length-1];let l=new(n(s))(".gallery_item a",{captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function c(){a.classList.toggle("is-hidden"),o.refs.bodyEl.addEventListener("keydown",(function t(e){"Escape"===e.key&&(u(a),o.refs.bodyEl.removeEventListener("keydown",t))})),a.addEventListener("click",(function t(e){if(e.target!==a)return;u(a),a.removeEventListener("click",t)})),function(t){const e=t.reduce(((t,{name:e,photoPreview:n,position:i,photo:o})=>t+`<li class="gallery_item">\n      <a class="gallery_link" href="${o}">\n        <img src="${n}" alt="${e}" class="gallery_img">\n        <h2 class="gallery_name">${e}</h2>\n        <p class="gallery_text">${i}</p></li>\n        <a/>\n        `),"");o.refs.galleryStudents.innerHTML=e,l.refresh()}(i.galleryTeam)}function u(t){t.classList.add("is-hidden")}})),r.register("8fbcn",(function(e,i){t(e.exports,"galleryTeam",(function(){return D}));var o=r("bGRw9"),s=r("27pgB"),a=r("jAR5G"),l=r("aOHdN"),c=r("9FdYS"),u=r("l8I9e"),h=r("dl5sQ"),d=r("brCO2"),f=r("999YR"),m=r("fVyVA"),p=r("5Pr5c"),g=r("bJThL"),y=r("ljvVW"),v=r("4Vlap"),b=r("kEHzt"),w=r("f12eC"),x=r("6Dal8"),k=r("2GX4Q"),C=r("9u19o"),I=r("l1Njc"),E=r("4erqA"),N=r("ea7N8"),S=r("2NtzQ"),T=r("170E8"),_=r("7nL8x"),A=r("87fnt");const D=[{id:1,name:"Orest Mykhalchuk",photoPreview:`${n(o)}`,photo:`${n(s)}`,position:"Scrum Master"},{id:2,name:"Konstantin Yevchuk",photoPreview:`${n(a)}`,photo:`${n(l)}`,position:"Team Lead"},{id:3,name:"Eugene Titov",photoPreview:`${n(c)}`,photo:`${n(u)}`,position:"Developer"},{id:4,name:"Olexander Yanchenko",photoPreview:`${n(h)}`,photo:`${n(d)}`,position:"Developer"},{id:5,name:"Sergiy Maxymchuk",photoPreview:`${n(f)}`,photo:`${n(m)}`,position:"Developer"},{id:6,name:"Alexey Ryzhenko",photoPreview:`${n(p)}`,photo:`${n(g)}`,position:"Developer"},{id:7,name:"Ruslan Tenderyts",photoPreview:`${n(y)}`,photo:`${n(v)}`,position:"Developer"},{id:8,name:"Vladyslav Rohalov",photoPreview:`${n(b)}`,photo:`${n(w)}`,position:"Developer"},{id:9,name:"Svitlana Kozachenko",photoPreview:`${n(x)}`,photo:`${n(k)}`,position:"Developer"},{id:10,name:"Volodymyr Zankevych",photoPreview:`${n(C)}`,photo:`${n(I)}`,position:"Developer"},{id:11,name:"Olexandr Kutsenko",photoPreview:`${n(E)}`,photo:`${n(N)}`,position:"Developer"},{id:12,name:"Viacheslav Borysov",photoPreview:`${n(S)}`,photo:`${n(T)}`,position:"Developer"},{id:13,name:"Yuriy Grechyha",photoPreview:`${n(_)}`,photo:`${n(A)}`,position:"Developer"}]})),r.register("bGRw9",(function(t,e){t.exports=new URL(r("kyEFX").resolve("a6qtw"),import.meta.url).toString()})),r.register("27pgB",(function(t,e){t.exports=new URL(r("kyEFX").resolve("4Vv23"),import.meta.url).toString()})),r.register("jAR5G",(function(t,e){t.exports=new URL(r("kyEFX").resolve("32Jrw"),import.meta.url).toString()})),r.register("aOHdN",(function(t,e){t.exports=new URL(r("kyEFX").resolve("aOkmt"),import.meta.url).toString()})),r.register("9FdYS",(function(t,e){t.exports=new URL(r("kyEFX").resolve("5jN0D"),import.meta.url).toString()})),r.register("l8I9e",(function(t,e){t.exports=new URL(r("kyEFX").resolve("leepJ"),import.meta.url).toString()})),r.register("dl5sQ",(function(t,e){t.exports=new URL(r("kyEFX").resolve("ex4ti"),import.meta.url).toString()})),r.register("brCO2",(function(t,e){t.exports=new URL(r("kyEFX").resolve("8gMZ2"),import.meta.url).toString()})),r.register("999YR",(function(t,e){t.exports=new URL(r("kyEFX").resolve("f5Rj7"),import.meta.url).toString()})),r.register("fVyVA",(function(t,e){t.exports=new URL(r("kyEFX").resolve("1qXdj"),import.meta.url).toString()})),r.register("5Pr5c",(function(t,e){t.exports=new URL(r("kyEFX").resolve("fIps1"),import.meta.url).toString()})),r.register("bJThL",(function(t,e){t.exports=new URL(r("kyEFX").resolve("a0Pfd"),import.meta.url).toString()})),r.register("ljvVW",(function(t,e){t.exports=new URL(r("kyEFX").resolve("fMj5M"),import.meta.url).toString()})),r.register("4Vlap",(function(t,e){t.exports=new URL(r("kyEFX").resolve("a2U8I"),import.meta.url).toString()})),r.register("kEHzt",(function(t,e){t.exports=new URL(r("kyEFX").resolve("7vH7R"),import.meta.url).toString()})),r.register("f12eC",(function(t,e){t.exports=new URL(r("kyEFX").resolve("iMOiV"),import.meta.url).toString()})),r.register("6Dal8",(function(t,e){t.exports=new URL(r("kyEFX").resolve("5NgjG"),import.meta.url).toString()})),r.register("2GX4Q",(function(t,e){t.exports=new URL(r("kyEFX").resolve("jz5kf"),import.meta.url).toString()})),r.register("9u19o",(function(t,e){t.exports=new URL(r("kyEFX").resolve("dYwVk"),import.meta.url).toString()})),r.register("l1Njc",(function(t,e){t.exports=new URL(r("kyEFX").resolve("2tnIg"),import.meta.url).toString()})),r.register("4erqA",(function(t,e){t.exports=new URL(r("kyEFX").resolve("ceQUz"),import.meta.url).toString()})),r.register("ea7N8",(function(t,e){t.exports=new URL(r("kyEFX").resolve("cHv2J"),import.meta.url).toString()})),r.register("2NtzQ",(function(t,e){t.exports=new URL(r("kyEFX").resolve("3qYZX"),import.meta.url).toString()})),r.register("170E8",(function(t,e){t.exports=new URL(r("kyEFX").resolve("kIWp9"),import.meta.url).toString()})),r.register("7nL8x",(function(t,e){t.exports=new URL(r("kyEFX").resolve("h7kKm"),import.meta.url).toString()})),r.register("87fnt",(function(t,e){t.exports=new URL(r("kyEFX").resolve("4A1Py"),import.meta.url).toString()})),r.register("fZKcF",(function(t,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw r}}}}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var u=function(){function t(e,n){var i=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),c(this,"transitionPrefix",void 0),c(this,"isPassiveEventsSupported",void 0),c(this,"transitionCapable",!1),c(this,"isTouchDevice","ontouchstart"in window),c(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),c(this,"initialLocationHash",void 0),c(this,"pushStateSupport","pushState"in history),c(this,"isOpen",!1),c(this,"isAnimating",!1),c(this,"isClosing",!1),c(this,"isFadeIn",!1),c(this,"urlChangedOnce",!1),c(this,"hashReseted",!1),c(this,"historyHasChanges",!1),c(this,"historyUpdateTimeout",null),c(this,"currentImage",void 0),c(this,"eventNamespace","simplelightbox"),c(this,"domNodes",{}),c(this,"loadedImages",[]),c(this,"initialImageIndex",0),c(this,"currentImageIndex",0),c(this,"initialSelector",null),c(this,"globalScrollbarWidth",0),c(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof e?(this.initialSelector=e,this.elements=Array.from(document.querySelectorAll(e))):this.elements=void 0!==e.length&&e.length>0?Array.from(e):[e],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var o=[];this.elements=Array.from(this.elements).filter((function(t){var e=t.getAttribute(i.options.sourceAttr);return-1===o.indexOf(e)&&(o.push(e),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(t){if(i.isValidLink(t.currentTarget)){if(t.preventDefault(),i.isAnimating)return!1;i.initialImageIndex=i.elements.indexOf(t.currentTarget),i.openImage(t.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(t){i.isOpen&&t.target===t.currentTarget&&i.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(t){t.target.parentElement.classList.contains("sl-image")&&t.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(t){if(i.controlCoordinates.swipeDiff=0,i.isAnimating&&"Escape"===t.key)return i.currentImage.setAttribute("src",""),i.isAnimating=!1,i.close();i.isOpen&&(t.preventDefault(),"Escape"===t.key&&i.close(),!i.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(t.key)>-1&&i.loadImage("ArrowRight"===t.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var e,n,s;return e=t,n=[{key:"checkPassiveEventsSupport",value:function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(t){}return t}},{key:"generateQuerySelector",value:function(t){var e=t.tagName,n=t.id,i=t.className,o=t.parentNode;if("HTML"===e)return"HTML";var r=e;if(r+=""!==n?"#".concat(n):"",i)for(var s=i.trim().split(/\s/),a=0;a<s.length;a++)r+=".".concat(s[a]);for(var l=1,c=t;c.previousElementSibling;c=c.previousElementSibling)l+=1;return r+=":nth-child(".concat(l,")"),"".concat(this.generateQuerySelector(o)," > ").concat(r)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var t,e=this.options.captionClass.split(/[\s,]+/);(t=this.domNodes.caption.classList).add.apply(t,r(e))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(t,e){var n;return function(){n||(t.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),e))}}},{key:"isValidLink",value:function(t){return!this.options.fileExt||t.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(t.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var t=(document.body||document.documentElement).style;return"transition"in t?"":"WebkitTransition"in t?"-webkit-":"MozTransition"in t?"-moz-":"OTransition"in t&&"-o"}},{key:"getScrollbarWidth",value:function(){var t,e=document.createElement("div");return e.classList.add("sl-scrollbar-measure"),document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e),t}},{key:"toggleScrollbar",value:function(t){var e=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===t){var i=window.innerWidth;if(!i){var o=document.documentElement.getBoundingClientRect();i=o.right-Math.abs(o.left)}if(document.body.clientWidth<i||this.isAppleDevice){var r=parseInt(document.body.style.paddingRight||0,10);e=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=r,(e>0||0==e&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=r+e+"px",n.forEach((function(t){var n=t.style.paddingRight,i=window.getComputedStyle(t)["padding-right"];t.dataset.originalPaddingRight=n,t.style.paddingRight="".concat(parseFloat(i)+e,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight,n.forEach((function(t){var e=t.dataset.originalPaddingRight;void 0!==e&&(t.style.paddingRight=e)}));return e}},{key:"close",value:function(){var t=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var e=this.relatedElements[this.currentImageIndex];for(var n in e.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){t.options.disableScroll&&t.toggleScrollbar("show"),t.options.htmlClass&&""!==t.options.htmlClass&&document.querySelector("html").classList.remove(t.options.htmlClass),document.body.removeChild(t.domNodes.wrapper),document.body.removeChild(t.domNodes.overlay),t.domNodes.additionalHtml=null,t.domNodes.download=null,e.dispatchEvent(new Event("closed.simplelightbox")),t.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var t=this,e=this.currentImageIndex,n=this.relatedElements.length,i=e+1<0?n-1:e+1>=n-1?0:e+1,o=e-1<0?n-1:e-1>=n-1?0:e-1,r=new Image,s=new Image;r.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===t.loadedImages.indexOf(i)&&t.loadedImages.push(i),t.relatedElements[e].dispatchEvent(new Event("nextImageLoaded."+t.eventNamespace))})),r.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===t.loadedImages.indexOf(i)&&t.loadedImages.push(i),t.relatedElements[e].dispatchEvent(new Event("prevImageLoaded."+t.eventNamespace))})),s.setAttribute("src",this.relatedElements[o].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(t){var e=this,n=t;this.options.rtl&&(t=-t),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===t?"next":"prev")+"."+this.eventNamespace));var i=this.currentImageIndex+t;if(this.isAnimating||(i<0||i>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=i<0?this.relatedElements.length-1:i>this.relatedElements.length-1?0:i,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){e.isAnimating=!0,e.isClosing?e.isAnimating=!1:setTimeout((function(){var t=e.relatedElements[e.currentImageIndex];e.currentImage.setAttribute("src",t.getAttribute(e.options.sourceAttr)),-1===e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr))&&e.show(e.domNodes.spinner),e.domNodes.image.contains(e.domNodes.caption)&&e.domNodes.image.removeChild(e.domNodes.caption),e.adjustImage(n),e.options.preloading&&e.preload()}),100)}))}},{key:"adjustImage",value:function(t){var e=this;if(!this.currentImage)return!1;var n=new Image,i=window.innerWidth*this.options.widthRatio,o=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("error."+e.eventNamespace)),e.isAnimating=!1,e.isOpen=!0,e.domNodes.spinner.style.display="none";var i=1===t||-1===t;if(e.initialImageIndex===e.currentImageIndex&&i)return e.close();e.options.alertError&&alert(e.options.alertErrorMessage),e.loadImage(i?t:1)})),n.addEventListener("load",(function(n){void 0!==t&&(e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("changed."+e.eventNamespace)),e.relatedElements[e.currentImageIndex].dispatchEvent(new Event((1===t?"nextDone":"prevDone")+"."+e.eventNamespace))),e.options.history&&e.updateURL(),-1===e.loadedImages.indexOf(e.currentImage.getAttribute("src"))&&e.loadedImages.push(e.currentImage.getAttribute("src"));var r,s,a=n.target.width,l=n.target.height;if(e.options.scaleImageToRatio||a>i||l>o){var c=a/l>i/o?a/i:l/o;a/=c,l/=c}e.domNodes.image.style.top=(window.innerHeight-l)/2+"px",e.domNodes.image.style.left=(window.innerWidth-a-e.globalScrollbarWidth)/2+"px",e.domNodes.image.style.width=a+"px",e.domNodes.image.style.height=l+"px",e.domNodes.spinner.style.display="none",e.options.focus&&e.forceFocus(),e.fadeIn(e.currentImage,e.options.fadeSpeed,(function(){e.options.focus&&e.domNodes.wrapper.focus()})),e.isOpen=!0,"string"==typeof e.options.captionSelector?r="self"===e.options.captionSelector?e.relatedElements[e.currentImageIndex]:document.querySelector(e.generateQuerySelector(e.relatedElements[e.currentImageIndex])+" "+e.options.captionSelector):"function"==typeof e.options.captionSelector&&(r=e.options.captionSelector(e.relatedElements[e.currentImageIndex])),e.options.captions&&r&&(s="data"===e.options.captionType?r.dataset[e.options.captionsData]:"text"===e.options.captionType?r.innerHTML:r.getAttribute(e.options.captionsData)),e.options.loop?1===e.relatedElements.length?e.hide(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):e.show(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===e.currentImageIndex&&e.hide(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex>=e.relatedElements.length-1&&e.hide(e.domNodes.navigation.querySelector(".sl-next")),e.currentImageIndex>0&&e.show(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex<e.relatedElements.length-1&&e.show(e.domNodes.navigation.querySelector(".sl-next"))),1===t||-1===t?(e.options.animationSlide&&(e.slide(0,100*t+"px"),setTimeout((function(){e.slide(e.options.animationSpeed/1e3,"0px")}),50)),e.fadeIn(e.domNodes.image,e.options.fadeSpeed,(function(){e.isAnimating=!1,e.setCaption(s,a)}))):(e.isAnimating=!1,e.setCaption(s,a)),e.options.additionalHtml&&!e.domNodes.additionalHtml&&(e.domNodes.additionalHtml=document.createElement("div"),e.domNodes.additionalHtml.classList.add("sl-additional-html"),e.domNodes.additionalHtml.innerHTML=e.options.additionalHtml,e.domNodes.image.appendChild(e.domNodes.additionalHtml)),e.options.download&&e.domNodes.downloadLink.setAttribute("href",e.currentImage.getAttribute("src"))}))}},{key:"zoomPanElement",value:function(t,e,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+t+","+e+") scale("+n+")"}},{key:"minMax",value:function(t,e,n){return t<e?e:t>n?n:t}},{key:"setZoomData",value:function(t,e,n){this.currentImage.dataset.scale=t,this.currentImage.dataset.translateX=e,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var t=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(e){t.isOpen&&t.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){t.addEventListener(window,"hashchange."+t.eventNamespace,(function(e){t.isOpen&&t.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(e){if(!e.currentTarget.tagName.match(/button/i))return!0;e.preventDefault(),t.controlCoordinates.swipeDiff=0,t.loadImage(e.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var e=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(t.controlCoordinates.mousedown||t.isAnimating||t.isClosing||!t.isOpen)return!0;0==t.controlCoordinates.containerHeight&&(t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY)),n.preventDefault();var i=n.delta||n.wheelDelta;void 0===i&&(i=n.detail),i=Math.max(-1,Math.min(1,i)),e+=i*t.options.scrollZoomFactor*e,e=Math.max(1,Math.min(t.options.maxZoom,e)),t.controlCoordinates.targetScale=e;var o=document.documentElement.scrollTop||document.body.scrollTop;t.controlCoordinates.pinchOffsetX=n.pageX,t.controlCoordinates.pinchOffsetY=n.pageY-o||0,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1?(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)):(1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.setZoomData(t.controlCoordinates.targetScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(e){if("A"===e.target.tagName&&"touchstart"===e.type)return!0;if("mousedown"===e.type)e.preventDefault(),t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.capture=!0;else{if(t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,1===t.controlCoordinates.touchCount){if(t.controlCoordinates.doubleTapped)return t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout((function(){t.currentImage&&t.currentImage.classList.remove("sl-transition")}),200),!1;t.controlCoordinates.doubleTapped=!0,setTimeout((function(){t.controlCoordinates.doubleTapped=!1}),300),t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY)}else 2===t.controlCoordinates.touchCount&&(t.controlCoordinates.initialPointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.initialPointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.pinchOffsetX=(t.controlCoordinates.initialPointerOffsetX+t.controlCoordinates.initialPointerOffsetX2)/2,t.controlCoordinates.pinchOffsetY=(t.controlCoordinates.initialPointerOffsetY+t.controlCoordinates.initialPointerOffsetY2)/2,t.controlCoordinates.initialPinchDistance=Math.sqrt((t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)*(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)+(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)*(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)));t.controlCoordinates.capture=!0}return!!t.controlCoordinates.mousedown||(t.transitionCapable&&(t.controlCoordinates.imageLeft=parseInt(t.domNodes.image.style.left,10)),t.controlCoordinates.mousedown=!0,t.controlCoordinates.swipeDiff=0,t.controlCoordinates.swipeYDiff=0,t.controlCoordinates.swipeStart=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYStart=e.pageY||e.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(e){if(!t.controlCoordinates.mousedown)return!0;if("touchmove"===e.type){if(!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.touches[0].clientX,t.controlCoordinates.pointerOffsetY=e.touches[0].clientY,t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.touchmoveCount++,t.controlCoordinates.touchCount>1?(t.controlCoordinates.pointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.pointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.targetPinchDistance=Math.sqrt((t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)*(t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)+(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)*(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)),null===t.controlCoordinates.initialPinchDistance&&(t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance),Math.abs(t.controlCoordinates.initialPinchDistance-t.controlCoordinates.targetPinchDistance)>=1&&(t.controlCoordinates.targetScale=t.minMax(t.controlCoordinates.targetPinchDistance/t.controlCoordinates.initialPinchDistance*t.controlCoordinates.initialScale,1,t.options.maxZoom),t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1&&(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY)):(t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale))}if("mousemove"===e.type&&t.controlCoordinates.mousedown){if("touchmove"==e.type)return!0;if(e.preventDefault(),!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.clientX,t.controlCoordinates.pointerOffsetY=e.clientY,t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}t.controlCoordinates.zoomed||(t.controlCoordinates.swipeEnd=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYEnd=e.pageY||e.touches[0].pageY,t.controlCoordinates.swipeDiff=t.controlCoordinates.swipeStart-t.controlCoordinates.swipeEnd,t.controlCoordinates.swipeYDiff=t.controlCoordinates.swipeYStart-t.controlCoordinates.swipeYEnd,t.options.animationSlide&&t.slide(0,-t.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(e){if(t.isTouchDevice&&"touchend"===e.type&&(t.controlCoordinates.touchCount=e.touches.length,0===t.controlCoordinates.touchCount?(t.currentImage&&t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1):1===t.controlCoordinates.touchCount?(t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY):t.controlCoordinates.touchCount>1&&(t.controlCoordinates.initialPinchDistance=null)),t.controlCoordinates.mousedown){t.controlCoordinates.mousedown=!1;var n=!0;t.options.loop||(0===t.currentImageIndex&&t.controlCoordinates.swipeDiff<0&&(n=!1),t.currentImageIndex>=t.relatedElements.length-1&&t.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(t.controlCoordinates.swipeDiff)>t.options.swipeTolerance&&n?t.loadImage(t.controlCoordinates.swipeDiff>0?1:-1):t.options.animationSlide&&t.slide(t.options.animationSpeed/1e3,"0px"),t.options.swipeClose&&Math.abs(t.controlCoordinates.swipeYDiff)>50&&Math.abs(t.controlCoordinates.swipeDiff)<t.options.swipeTolerance&&t.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(e){if(!t.isTouchDevice)return t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout((function(){t.currentImage&&(t.currentImage.classList.remove("sl-transition"),t.currentImage.style[t.transitionPrefix+"transform-origin"]=null)}),200),t.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(t){var e=window.getComputedStyle(t),n=t.offsetHeight,i=t.offsetWidth,o=parseFloat(e.borderTopWidth);return{height:n-parseFloat(e.borderBottomWidth)-o-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom),width:i-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)}}},{key:"updateHash",value:function(){var t="pid="+(this.currentImageIndex+1),e=window.location.href.split("#")[0]+"#"+t;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,e):this.historyHasChanges?window.location.replace(e):window.location.hash=t,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(t,e){var n=this;this.options.captions&&t&&""!==t&&void 0!==t&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=e+"px",this.domNodes.caption.innerHTML=t,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(t,e){if(!this.transitionCapable)return this.domNodes.image.style.left=e;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+e+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+t+"s linear"}},{key:"getRelated",value:function(t){return t&&!1!==t&&"nofollow"!==t?Array.from(this.elements).filter((function(e){return e.getAttribute("rel")===t})):this.elements}},{key:"openImage",value:function(t){var e=this;t.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(t.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(t);var n=t.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){t.dispatchEvent(new Event("shown."+e.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var t=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(e){document===e.target||t.domNodes.wrapper===e.target||t.domNodes.wrapper.contains(e.target)||t.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(t,e,n,r){t=this.wrap(t),e=this.wrap(e);var s,a=o(t);try{for(a.s();!(s=a.n()).done;){var l=s.value;l.namespaces||(l.namespaces={});var c,u=o(e);try{for(u.s();!(c=u.n()).done;){var h=c.value,d=r||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(h.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===i(d)?d.passive=!0:d={passive:!0}),l.namespaces[h]=n,l.addEventListener(h.split(".")[0],n,d)}}catch(t){u.e(t)}finally{u.f()}}}catch(t){a.e(t)}finally{a.f()}}},{key:"removeEventListener",value:function(t,e){t=this.wrap(t),e=this.wrap(e);var n,i=o(t);try{for(i.s();!(n=i.n()).done;){var r,s=n.value,a=o(e);try{for(a.s();!(r=a.n()).done;){var l=r.value;s.namespaces&&s.namespaces[l]&&(s.removeEventListener(l.split(".")[0],s.namespaces[l]),delete s.namespaces[l])}}catch(t){a.e(t)}finally{a.f()}}}catch(t){i.e(t)}finally{i.f()}}},{key:"fadeOut",value:function(t,e,n){var i,r=this,s=o(t=this.wrap(t));try{for(s.s();!(i=s.n()).done;){var a=i.value;a.style.opacity=parseFloat(a)||window.getComputedStyle(a).getPropertyValue("opacity")}}catch(t){s.e(t)}finally{s.f()}this.isFadeIn=!1;var l=16.66666/(e||this.options.fadeSpeed);!function e(){var i=parseFloat(t[0].style.opacity);if((i-=l)<0){var s,a=o(t);try{for(a.s();!(s=a.n()).done;){var c=s.value;c.style.display="none",c.style.opacity=1}}catch(t){a.e(t)}finally{a.f()}n&&n.call(r,t)}else{var u,h=o(t);try{for(h.s();!(u=h.n()).done;)u.value.style.opacity=i}catch(t){h.e(t)}finally{h.f()}requestAnimationFrame(e)}}()}},{key:"fadeIn",value:function(t,e,n,i){var r,s=this,a=o(t=this.wrap(t));try{for(a.s();!(r=a.n()).done;){var l=r.value;l&&(l.style.opacity=0,l.style.display=i||"block")}}catch(t){a.e(t)}finally{a.f()}this.isFadeIn=!0;var c=parseFloat(t[0].dataset.opacityTarget||1),u=16.66666*c/(e||this.options.fadeSpeed);!function e(){var i=parseFloat(t[0].style.opacity);if((i+=u)>c){var r,a=o(t);try{for(a.s();!(r=a.n()).done;){var l=r.value;l&&(l.style.opacity=c)}}catch(t){a.e(t)}finally{a.f()}n&&n.call(s,t)}else{var h,d=o(t);try{for(d.s();!(h=d.n()).done;){var f=h.value;f&&(f.style.opacity=i)}}catch(t){d.e(t)}finally{d.f()}if(!s.isFadeIn)return;requestAnimationFrame(e)}}()}},{key:"hide",value:function(t){var e,n=o(t=this.wrap(t));try{for(n.s();!(e=n.n()).done;){var i=e.value;"none"!=i.style.display&&(i.dataset.initialDisplay=i.style.display),i.style.display="none"}}catch(t){n.e(t)}finally{n.f()}}},{key:"show",value:function(t,e){var n,i=o(t=this.wrap(t));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.style.display=r.dataset.initialDisplay||e||"block"}}catch(t){i.e(t)}finally{i.f()}}},{key:"wrap",value:function(t){return"function"==typeof t[Symbol.iterator]&&"string"!=typeof t?t:[t]}},{key:"on",value:function(t,e){t=this.wrap(t);var n,i=o(this.elements);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.fullyNamespacedEvents||(r.fullyNamespacedEvents={});var s,a=o(t);try{for(a.s();!(s=a.n()).done;){var l=s.value;r.fullyNamespacedEvents[l]=e,r.addEventListener(l,e)}}catch(t){a.e(t)}finally{a.f()}}}catch(t){i.e(t)}finally{i.f()}return this}},{key:"off",value:function(t){t=this.wrap(t);var e,n=o(this.elements);try{for(n.s();!(e=n.n()).done;){var i,r=e.value,s=o(t);try{for(s.s();!(i=s.n()).done;){var a=i.value;void 0!==r.fullyNamespacedEvents&&a in r.fullyNamespacedEvents&&r.removeEventListener(a,r.fullyNamespacedEvents[a])}}catch(t){s.e(t)}finally{s.f()}}}catch(t){n.e(t)}finally{n.f()}return this}},{key:"open",value:function(t){t=t||this.elements[0],"undefined"!=typeof jQuery&&t instanceof jQuery&&(t=t.get(0)),this.initialImageIndex=this.elements.indexOf(t),this.initialImageIndex>-1&&this.openImage(t)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var t=this.options,e=this.initialSelector;return this.destroy(),this.constructor(e,t),this}}],n&&l(e.prototype,n),s&&l(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}(),h=u;t.exports.default=h,e.SimpleLightbox=u})),r("kyEFX").register(JSON.parse('{"eM9ss":"library.e9def651.js","5UbS1":"index.b9217f94.css","dy2LO":"modal-Default-Img.de958bad.jpeg","el93z":"empty-lib.f3c12ca5.jpg","a6qtw":"Orest_Mykhalchuk_150.e74703e7.jpg","4Vv23":"Orest_Mykhalchuk_450.6b0f740e.jpg","32Jrw":"Konstantin_Yevchuk_150.b42b8ff4.jpg","aOkmt":"Konstantin_Yevchuk_450.79136935.jpg","5jN0D":"Yevgen_Titov_150.b706490a.jpg","leepJ":"Yevgen_Titov_450.7dd5218f.jpg","ex4ti":"Olexander_Yanchenko_150.dd10619a.jpg","8gMZ2":"Olexander_Yanchenko_450.ad60b006.jpg","f5Rj7":"Sergiy_Maxymchuk_150.b8e458a8.jpg","1qXdj":"Sergiy_Maxymchuk_450.68d63002.jpg","fIps1":"Aleksey_Ryzhenko_150.8db507c6.jpg","a0Pfd":"Aleksey_Ryzhenko_450.be3371ca.jpg","fMj5M":"Ruslan_Tenderyts_150.16187353.jpg","a2U8I":"Ruslan_Tenderyts_450.a61272c4.jpg","7vH7R":"Vladyslav_Rohalov_150.8d6375b4.jpg","iMOiV":"Vladyslav_Rohalov_450.7b59ff4f.jpg","5NgjG":"Svitlana_Kozachenko_150.d40d2810.jpg","jz5kf":"Svitlana_Kozachenko_450.a61cb262.jpg","dYwVk":"Volodymur_Zankevych_150.b89f6855.jpg","2tnIg":"Volodymur_Zankevych_450.af4f58d4.jpg","ceQUz":"Olekcsndr_Kutsenko_150.a09148aa.jpg","cHv2J":"Olekcsndr_Kutsenko_450.286ef0b7.jpg","3qYZX":"Viacheslav_Borysov_150.4a48fcc3.jpg","kIWp9":"Viacheslav_Borysov_450.6322173a.jpg","h7kKm":"Yuriy_Grechyha_150.beef2d79.jpg","4A1Py":"Yuriy_Grechyha_450.206c4beb.jpg"}'));
//# sourceMappingURL=library.e9def651.js.map
