import{s as d,x as Qs,_ as js,C as $s,y as Bt,z as Xs,A,B as mt,D as B,E as Js,S as Zs,G as le,H as Pe,I as Te,J as yt,K as ei,L as ti,N as Se,O as He,P as Ct,Q as ni,R as bn,T as si,U as ii,V as Kt,W as An,X as ri,Y as oi,Z as li,$ as ci,a0 as ai}from"./index.4d385c5f.js";const Yt="@firebase/database",zt="0.13.6";/**
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
 */let kn="";function hi(n){kn=n}/**
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
 */class ui{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),A(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:mt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class di{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return B(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Pn=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ui(e)}}catch{}return new di},Q=Pn("localStorage"),nt=Pn("sessionStorage");/**
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
 */const re=new ti("@firebase/database"),fi=function(){let n=1;return function(){return n++}}(),Mn=function(n){const e=Js(n),t=new Zs;t.update(e);const s=t.digest();return Qs.encodeByteArray(s)},Ie=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ie.apply(null,s):typeof s=="object"?e+=A(s):e+=s,e+=" "}return e};let $=null,Qt=!0;const _i=function(n,e){d(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(re.logLevel=ni.VERBOSE,$=re.log.bind(re),e&&nt.set("logging_enabled",!0)):typeof n=="function"?$=n:($=null,nt.remove("logging_enabled"))},k=function(...n){if(Qt===!0&&(Qt=!1,$===null&&nt.get("logging_enabled")===!0&&_i(!0)),$){const e=Ie.apply(null,n);$(e)}},we=function(n){return function(...e){k(n,...e)}},st=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ie(...n);re.error(e)},X=function(...n){const e=`FIREBASE FATAL ERROR: ${Ie(...n)}`;throw re.error(e),new Error(e)},O=function(...n){const e="FIREBASE WARNING: "+Ie(...n);re.warn(e)},pi=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},On=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gi=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ce="[MIN_NAME]",J="[MAX_NAME]",he=function(n,e){if(n===e)return 0;if(n===ce||e===J)return-1;if(e===ce||n===J)return 1;{const t=jt(n),s=jt(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},mi=function(n,e){return n===e?0:n<e?-1:1},fe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+A(e))},vt=function(n){if(typeof n!="object"||n===null)return A(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=A(e[s]),t+=":",t+=vt(n[e[s]]);return t+="}",t},xn=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function L(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Dn=function(n){d(!On(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const a=[];for(c=t;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},yi=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ci=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vi=new RegExp("^-?(0*)\\d{1,10}$"),Ei=-2147483648,Ti=2147483647,jt=function(n){if(vi.test(n)){const e=Number(n);if(e>=Ei&&e<=Ti)return e}return null},ue=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw O("Exception was thrown by user callback.",t),e},Math.floor(0))}},Si=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},me=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ii{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){O(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wi{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',O(e)}}class it{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}it.OWNER="owner";/**
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
 */const Et="5",Ln="v",Fn="s",Wn="r",Un="f",Hn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gn="ls",qn="p",rt="ac",Vn="websocket",Bn="long_polling";/**
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
 */class Ri{constructor(e,t,s,i,r=!1,o="",l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Q.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Q.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ni(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Kn(n,e,t){d(typeof e=="string","typeof type must == string"),d(typeof t=="object","typeof params must == object");let s;if(e===Vn)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Bn)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ni(n)&&(t.ns=n.namespace);const i=[];return L(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class bi{constructor(){this.counters_={}}incrementCounter(e,t=1){B(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return li(this.counters_)}}/**
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
 */const je={},$e={};function Tt(n){const e=n.toString();return je[e]||(je[e]=new bi),je[e]}function Ai(n,e){const t=n.toString();return $e[t]||($e[t]=e()),$e[t]}/**
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
 */class ki{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ue(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const $t="start",Pi="close",Mi="pLPCommand",Oi="pRTLPCB",Yn="id",zn="pw",Qn="ser",xi="cb",Di="seg",Li="ts",Fi="d",Wi="dframe",jn=1870,$n=30,Ui=jn-$n,Hi=25e3,Gi=3e4;class ie{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=we(e),this.stats_=Tt(t),this.urlFn=c=>(this.appCheckToken&&(c[rt]=this.appCheckToken),Kn(t,Bn,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ki(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gi)),gi(()=>{if(this.isClosed_)return;this.scriptTagHolder=new St((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$t)this.id=l,this.password=c;else if(o===Pi)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[$t]="t",s[Qn]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xi]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ln]=Et,this.transportSessionId&&(s[Fn]=this.transportSessionId),this.lastSessionId&&(s[Gn]=this.lastSessionId),this.applicationId&&(s[qn]=this.applicationId),this.appCheckToken&&(s[rt]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Hn.test(location.hostname)&&(s[Wn]=Un);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ie.forceAllow_=!0}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){return ie.forceAllow_?!0:!ie.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!yi()&&!Ci()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ai(t),i=xn(s,Ui);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Wi]="t",s[Yn]=e,s[zn]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=A(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class St{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fi(),window[Mi+this.uniqueCallbackIdentifier]=e,window[Oi+this.uniqueCallbackIdentifier]=t,this.myIFrame=St.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){k("frame writing exception"),l.stack&&k(l.stack),k(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||k("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yn]=this.myID,e[zn]=this.myPW,e[Qn]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$n+s.length<=jn;){const o=this.pendingSegs.shift();s=s+"&"+Di+i+"="+o.seg+"&"+Li+i+"="+o.ts+"&"+Fi+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Hi)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const qi=16384,Vi=45e3;let Me=null;typeof MozWebSocket!="undefined"?Me=MozWebSocket:typeof WebSocket!="undefined"&&(Me=WebSocket);class F{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=we(this.connId),this.stats_=Tt(t),this.connURL=F.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ln]=Et,typeof location!="undefined"&&location.hostname&&Hn.test(location.hostname)&&(o[Wn]=Un),t&&(o[Fn]=t),s&&(o[Gn]=s),i&&(o[rt]=i),r&&(o[qn]=r),Kn(e,Vn,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Q.set("previous_websocket_failure",!0);try{let s;bn(),this.mySock=new Me(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){F.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Me!==null&&!F.forceDisallow_}static previouslyFailed(){return Q.isInMemoryStorage||Q.get("previous_websocket_failure")===!0}markConnectionHealthy(){Q.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=mt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(d(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=xn(t,qi);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vi))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}F.responsesRequiredToBeHealthy=2;F.healthyTimeout=3e4;/**
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
 */class ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ie,F]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=F&&F.isAvailable();let s=t&&!F.previouslyFailed();if(e.webSocketOnly&&(t||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[F];else{const i=this.transports_=[];for(const r of ve.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ve.globalTransportInitialized_=!1;/**
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
 */const Bi=6e4,Ki=5e3,Yi=10*1024,zi=100*1024,Xe="t",Xt="d",Qi="s",Jt="r",ji="e",Zt="o",en="a",tn="n",nn="p",$i="h";class Xi{constructor(e,t,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=we("c:"+this.id+":"),this.transportManager_=new ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=me(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zi?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yi?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xe in e){const t=e[Xe];t===en?this.upgradeIfSecondaryHealthy_():t===Jt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fe("t",e),s=fe("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nn,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:en,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tn,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fe("t",e),s=fe("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fe(Xe,e);if(Xt in e){const s=e[Xt];if(t===$i)this.onHandshake_(s);else if(t===tn){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qi?this.onConnectionShutdown_(s):t===Jt?this.onReset_(s):t===ji?st("Server Error: "+s):t===Zt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):st("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Et!==s&&O("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),me(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bi))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):me(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ki))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nn,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Q.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xn{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Jn{constructor(e){this.allowedEvents_=e,this.listeners_={},d(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){d(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Oe extends Jn{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!An()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Oe}getInitialEvent(e){return d(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const sn=32,rn=768;class S{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function v(){return new S("")}function g(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Y(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new S(n.pieces_,e)}function Zn(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ji(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function es(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ts(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new S(e,0)}function I(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof S)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new S(t,0)}function m(n){return n.pieceNum_>=n.pieces_.length}function D(n,e){const t=g(n),s=g(e);if(t===null)return e;if(t===s)return D(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ns(n,e){if(Y(n)!==Y(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function W(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Y(n)>Y(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Zi{constructor(e,t){this.errorPrefix_=t,this.parts_=es(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=He(this.parts_[s]);ss(this)}}function er(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=He(e),ss(n)}function tr(n){const e=n.parts_.pop();n.byteLength_-=He(e),n.parts_.length>0&&(n.byteLength_-=1)}function ss(n){if(n.byteLength_>rn)throw new Error(n.errorPrefix_+"has a key path longer than "+rn+" bytes ("+n.byteLength_+").");if(n.parts_.length>sn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sn+") or object contains a cycle "+z(n))}function z(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class It extends Jn{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new It}getInitialEvent(e){return d(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _e=1e3,nr=60*5*1e3,on=30*1e3,sr=1.3,ir=3e4,rr="server_kill",ln=3;class q extends Xn{constructor(e,t,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=q.nextPersistentConnectionId_++,this.log_=we("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_e,this.maxReconnectDelay_=nr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!bn())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");It.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Oe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(A(r)),d(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new yt,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),d(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),d(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;q.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&B(e,"w")){const s=le(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();O(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||si(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=on)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ii(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),d(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+A(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):st("Unrecognized action received from server: "+A(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){d(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_e,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_e,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ir&&(this.reconnectDelay_=_e),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+q.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){d(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Xi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{O(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(rr)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&O(h),c())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kt(this.interruptReasons_)&&(this.reconnectDelay_=_e,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>vt(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new S(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ln&&(this.reconnectDelay_=on,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ln&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kn.replace(/\./g,"-")]=1,An()?e["framework.cordova"]=1:ri()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oe.getInstance().currentlyOnline();return Kt(this.interruptReasons_)&&e}}q.nextPersistentConnectionId_=0;q.nextConnectionId_=0;/**
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
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
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
 */class Ge{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(ce,e),i=new y(ce,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
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
 */let Ae;class is extends Ge{static get __EMPTY_NODE(){return Ae}static set __EMPTY_NODE(e){Ae=e}compare(e,t){return he(e.name,t.name)}isDefinedOn(e){throw Se("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(J,Ae)}makePost(e,t){return d(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,Ae)}toString(){return".key"}}const oe=new is;/**
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
 */class ke{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class N{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:N.RED,this.left=i!=null?i:M.EMPTY_NODE,this.right=r!=null?r:M.EMPTY_NODE}copy(e,t,s,i,r){return new N(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return M.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return M.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,N.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,N.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}N.RED=!0;N.BLACK=!1;class or{copy(e,t,s,i,r){return this}insert(e,t,s){return new N(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class M{constructor(e,t=M.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new M(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,N.BLACK,null,null))}remove(e){return new M(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,N.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ke(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ke(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ke(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ke(this.root_,null,this.comparator_,!0,e)}}M.EMPTY_NODE=new or;/**
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
 */function lr(n,e){return he(n.name,e.name)}function wt(n,e){return he(n,e)}/**
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
 */let ot;function cr(n){ot=n}const rs=function(n){return typeof n=="number"?"number:"+Dn(n):"string:"+n},os=function(n){if(n.isLeafNode()){const e=n.val();d(typeof e=="string"||typeof e=="number"||typeof e=="object"&&B(e,".sv"),"Priority must be a string or number.")}else d(n===ot||n.isEmpty(),"priority of unexpected type.");d(n===ot||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let cn;class R{constructor(e,t=R.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,d(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),os(this.priorityNode_)}static set __childrenNodeConstructor(e){cn=e}static get __childrenNodeConstructor(){return cn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new R(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:R.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return m(e)?this:g(e)===".priority"?this.priorityNode_:R.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:R.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=g(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(d(s!==".priority"||Y(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,R.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Dn(this.value_):e+=this.value_,this.lazyHash_=Mn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===R.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof R.__childrenNodeConstructor?-1:(d(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=R.VALUE_TYPE_ORDER.indexOf(t),r=R.VALUE_TYPE_ORDER.indexOf(s);return d(i>=0,"Unknown leaf type: "+t),d(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}R.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ls,cs;function ar(n){ls=n}function hr(n){cs=n}class ur extends Ge{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?he(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(J,new R("[PRIORITY-POST]",cs))}makePost(e,t){const s=ls(e);return new y(t,new R("[PRIORITY-POST]",s))}toString(){return".priority"}}const P=new ur;/**
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
 */const dr=Math.log(2);class fr{constructor(e){const t=r=>parseInt(Math.log(r)/dr,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xe=function(n,e,t,s){n.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=n[c],f=t?t(h):h,new N(f,h.node,N.BLACK,null,null);{const p=parseInt(u/2,10)+c,_=i(c,p),w=i(p+1,a);return h=n[p],f=t?t(h):h,new N(f,h.node,N.BLACK,_,w)}},r=function(c){let a=null,u=null,h=n.length;const f=function(_,w){const x=h-_,ze=h;h-=_;const be=i(x+1,ze),Qe=n[x],zs=t?t(Qe):Qe;p(new N(zs,Qe.node,w,null,be))},p=function(_){a?(a.left=_,a=_):(u=_,a=_)};for(let _=0;_<c.count;++_){const w=c.nextBitIsOne(),x=Math.pow(2,c.count-(_+1));w?f(x,N.BLACK):(f(x,N.BLACK),f(x,N.RED))}return u},o=new fr(n.length),l=r(o);return new M(s||e,l)};/**
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
 */let Je;const se={};class G{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return d(se&&P,"ChildrenNode.ts has not been loaded"),Je=Je||new G({".priority":se},{".priority":P}),Je}get(e){const t=le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof M?t:null}hasIndex(e){return B(this.indexSet_,e.toString())}addIndex(e,t){d(e!==oe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=xe(s,e.getCompare()):l=se;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new G(u,a)}addToIndexes(e,t){const s=Pe(this.indexes_,(i,r)=>{const o=le(this.indexSet_,r);if(d(o,"Missing index implementation for "+r),i===se)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(y.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),xe(l,o.getCompare())}else return se;else{const l=t.get(e.name);let c=i;return l&&(c=c.remove(new y(e.name,l))),c.insert(e,e.node)}});return new G(s,this.indexSet_)}removeFromIndexes(e,t){const s=Pe(this.indexes_,i=>{if(i===se)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new G(s,this.indexSet_)}}/**
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
 */let pe;class C{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&os(this.priorityNode_),this.children_.isEmpty()&&d(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pe||(pe=new C(new M(wt),null,G.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pe}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?pe:t}}getChild(e){const t=g(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(d(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?pe:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=g(e);if(s===null)return t;{d(g(e)!==".priority"||Y(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(T(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(P,(o,l)=>{t[o]=l.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rs(this.getPriority().val())+":"),this.forEachChild(P,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Mn(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Re?-1:0}withIndex(e){if(e===oe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===oe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(P),i=t.getIterator(P);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===oe?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _r extends C{constructor(){super(new M(wt),C.EMPTY_NODE,G.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Re=new _r;Object.defineProperties(y,{MIN:{value:new y(ce,C.EMPTY_NODE)},MAX:{value:new y(J,Re)}});is.__EMPTY_NODE=C.EMPTY_NODE;R.__childrenNodeConstructor=C;cr(Re);hr(Re);/**
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
 */const pr=!0;function b(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),d(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new R(t,b(e))}if(!(n instanceof Array)&&pr){const t=[];let s=!1;if(L(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=b(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new y(o,c)))}}),t.length===0)return C.EMPTY_NODE;const r=xe(t,lr,o=>o.name,wt);if(s){const o=xe(t,P.getCompare());return new C(r,b(e),new G({".priority":o},{".priority":P}))}else return new C(r,b(e),G.Default)}else{let t=C.EMPTY_NODE;return L(n,(s,i)=>{if(B(n,s)&&s.substring(0,1)!=="."){const r=b(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(b(e))}}ar(b);/**
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
 */class gr extends Ge{constructor(e){super(),this.indexPath_=e,d(!m(e)&&g(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?he(e.name,t.name):r}makePost(e,t){const s=b(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Re);return new y(J,e)}toString(){return es(this.indexPath_,0).join("/")}}/**
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
 */class mr extends Ge{compare(e,t){const s=e.node.compareTo(t.node);return s===0?he(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=b(e);return new y(t,s)}toString(){return".value"}}const yr=new mr;/**
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
 */const an="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Cr=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=an.charAt(t%64),t=Math.floor(t/64);d(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=an.charAt(e[i]);return d(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function vr(n){return{type:"value",snapshotNode:n}}function Er(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Tr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function hn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Sr(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Rt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return d(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return d(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ce}hasEnd(){return this.endSet_}getIndexEndValue(){return d(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return d(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:J}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return d(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){const e=new Rt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function un(n){const e={};if(n.isDefault())return e;let t;return n.index_===P?t="$priority":n.index_===yr?t="$value":n.index_===oe?t="$key":(d(n.index_ instanceof gr,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=A(t),n.startSet_&&(e.startAt=A(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+A(n.indexStartName_))),n.endSet_&&(e.endAt=A(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+A(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function dn(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==P&&(e.i=n.index_.toString()),e}/**
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
 */class De extends Xn{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=we("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(d(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=De.getListenId_(e,s),l={};this.listens_[o]=l;const c=un(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),le(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,t){const s=De.getListenId_(e,t);delete this.listens_[s]}get(e){const t=un(e._queryParams),s=e._path.toString(),i=new yt;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oi(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=mt(l.responseText)}catch{O("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&O("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Ir{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Le(){return{value:null,children:new Map}}function as(n,e,t){if(m(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=g(e);n.children.has(s)||n.children.set(s,Le());const i=n.children.get(s);e=T(e),as(i,e,t)}}function lt(n,e,t){n.value!==null?t(e,n.value):wr(n,(s,i)=>{const r=new S(e.toString()+"/"+s);lt(i,r,t)})}function wr(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Rr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const fn=10*1e3,Nr=30*1e3,br=5*60*1e3;class Ar{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Rr(e);const s=fn+(Nr-fn)*Math.random();me(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;L(e,(i,r)=>{r>0&&B(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),me(this.reportStats_.bind(this),Math.floor(Math.random()*2*br))}}/**
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
 */var H;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(H||(H={}));function hs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function us(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ds(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Fe{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=H.ACK_USER_WRITE,this.source=hs()}operationForChild(e){if(m(this.path)){if(this.affectedTree.value!=null)return d(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new S(e));return new Fe(v(),t,this.revert)}}else return d(g(this.path)===e,"operationForChild called for unrelated child."),new Fe(T(this.path),this.affectedTree,this.revert)}}/**
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
 */class Z{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=H.OVERWRITE}operationForChild(e){return m(this.path)?new Z(this.source,v(),this.snap.getImmediateChild(e)):new Z(this.source,T(this.path),this.snap)}}/**
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
 */class Ee{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=H.MERGE}operationForChild(e){if(m(this.path)){const t=this.children.subtree(new S(e));return t.isEmpty()?null:t.value?new Z(this.source,v(),t.value):new Ee(this.source,v(),t)}else return d(g(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ee(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(m(e))return this.isFullyInitialized()&&!this.filtered_;const t=g(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kr(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sr(o.childName,o.snapshotNode))}),ge(n,i,"child_removed",e,s,t),ge(n,i,"child_added",e,s,t),ge(n,i,"child_moved",r,s,t),ge(n,i,"child_changed",e,s,t),ge(n,i,"value",e,s,t),i}function ge(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,c)=>Mr(n,l,c)),o.forEach(l=>{const c=Pr(n,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,n.query_))})})}function Pr(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Mr(n,e,t){if(e.childName==null||t.childName==null)throw Se("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function fs(n,e){return{eventCache:n,serverCache:e}}function ye(n,e,t,s){return fs(new Nt(e,t,s),n.serverCache)}function _s(n,e,t,s){return fs(n.eventCache,new Nt(e,t,s))}function ct(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ee(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ze;const Or=()=>(Ze||(Ze=new M(mi)),Ze);class E{constructor(e,t=Or()){this.value=e,this.children=t}static fromObject(e){let t=new E(null);return L(e,(s,i)=>{t=t.set(new S(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:v(),value:this.value};if(m(e))return null;{const s=g(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:I(new S(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(m(e))return this;{const t=g(e),s=this.children.get(t);return s!==null?s.subtree(T(e)):new E(null)}}set(e,t){if(m(e))return new E(t,this.children);{const s=g(e),r=(this.children.get(s)||new E(null)).set(T(e),t),o=this.children.insert(s,r);return new E(this.value,o)}}remove(e){if(m(e))return this.children.isEmpty()?new E(null):new E(null,this.children);{const t=g(e),s=this.children.get(t);if(s){const i=s.remove(T(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new E(null):new E(this.value,r)}else return this}}get(e){if(m(e))return this.value;{const t=g(e),s=this.children.get(t);return s?s.get(T(e)):null}}setTree(e,t){if(m(e))return t;{const s=g(e),r=(this.children.get(s)||new E(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new E(this.value,o)}}fold(e){return this.fold_(v(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(I(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,v(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(m(e))return null;{const r=g(e),o=this.children.get(r);return o?o.findOnPath_(T(e),I(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,v(),t)}foreachOnPath_(e,t,s){if(m(e))return this;{this.value&&s(t,this.value);const i=g(e),r=this.children.get(i);return r?r.foreachOnPath_(T(e),I(t,i),s):new E(null)}}foreach(e){this.foreach_(v(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(I(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class U{constructor(e){this.writeTree_=e}static empty(){return new U(new E(null))}}function Ce(n,e,t){if(m(e))return new U(new E(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=D(i,e);return r=r.updateChild(o,t),new U(n.writeTree_.set(i,r))}else{const i=new E(t),r=n.writeTree_.setTree(e,i);return new U(r)}}}function _n(n,e,t){let s=n;return L(t,(i,r)=>{s=Ce(s,I(e,i),r)}),s}function pn(n,e){if(m(e))return U.empty();{const t=n.writeTree_.setTree(e,new E(null));return new U(t)}}function at(n,e){return te(n,e)!=null}function te(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(D(t.path,e)):null}function gn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(P,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function K(n,e){if(m(e))return n;{const t=te(n,e);return t!=null?new U(new E(t)):new U(n.writeTree_.subtree(e))}}function ht(n){return n.writeTree_.isEmpty()}function ae(n,e){return ps(v(),n.writeTree_,e)}function ps(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(d(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ps(I(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(I(n,".priority"),s)),t}}/**
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
 */function gs(n,e){return Es(e,n)}function xr(n,e,t,s,i){d(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ce(n.visibleWrites,e,t)),n.lastWriteId=s}function Dr(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Lr(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);d(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Fr(l,s.path)?i=!1:W(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Wr(n),!0;if(s.snap)n.visibleWrites=pn(n.visibleWrites,s.path);else{const l=s.children;L(l,c=>{n.visibleWrites=pn(n.visibleWrites,I(s.path,c))})}return!0}else return!1}function Fr(n,e){if(n.snap)return W(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&W(I(n.path,t),e))return!0;return!1}function Wr(n){n.visibleWrites=ms(n.allWrites,Ur,v()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ur(n){return n.visible}function ms(n,e,t){let s=U.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)W(t,o)?(l=D(t,o),s=Ce(s,l,r.snap)):W(o,t)&&(l=D(o,t),s=Ce(s,v(),r.snap.getChild(l)));else if(r.children){if(W(t,o))l=D(t,o),s=_n(s,l,r.children);else if(W(o,t))if(l=D(o,t),m(l))s=_n(s,v(),r.children);else{const c=le(r.children,g(l));if(c){const a=c.getChild(T(l));s=Ce(s,v(),a)}}}else throw Se("WriteRecord should have .snap or .children")}}return s}function ys(n,e,t,s,i){if(!s&&!i){const r=te(n.visibleWrites,e);if(r!=null)return r;{const o=K(n.visibleWrites,e);if(ht(o))return t;if(t==null&&!at(o,v()))return null;{const l=t||C.EMPTY_NODE;return ae(o,l)}}}else{const r=K(n.visibleWrites,e);if(!i&&ht(r))return t;if(!i&&t==null&&!at(r,v()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(W(a.path,e)||W(e,a.path))},l=ms(n.allWrites,o,e),c=t||C.EMPTY_NODE;return ae(l,c)}}}function Hr(n,e,t){let s=C.EMPTY_NODE;const i=te(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(P,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=K(n.visibleWrites,e);return t.forEachChild(P,(o,l)=>{const c=ae(K(r,new S(o)),l);s=s.updateImmediateChild(o,c)}),gn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=K(n.visibleWrites,e);return gn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Gr(n,e,t,s,i){d(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=I(e,t);if(at(n.visibleWrites,r))return null;{const o=K(n.visibleWrites,r);return ht(o)?i.getChild(t):ae(o,i.getChild(t))}}function qr(n,e,t,s){const i=I(e,t),r=te(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=K(n.visibleWrites,i);return ae(o,s.getNode().getImmediateChild(t))}else return null}function Vr(n,e){return te(n.visibleWrites,e)}function Br(n,e,t,s,i,r,o){let l;const c=K(n.visibleWrites,e),a=te(c,v());if(a!=null)l=a;else if(t!=null)l=ae(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Kr(){return{visibleWrites:U.empty(),allWrites:[],lastWriteId:-1}}function ut(n,e,t,s){return ys(n.writeTree,n.treePath,e,t,s)}function Cs(n,e){return Hr(n.writeTree,n.treePath,e)}function mn(n,e,t,s){return Gr(n.writeTree,n.treePath,e,t,s)}function We(n,e){return Vr(n.writeTree,I(n.treePath,e))}function Yr(n,e,t,s,i,r){return Br(n.writeTree,n.treePath,e,t,s,i,r)}function bt(n,e,t){return qr(n.writeTree,n.treePath,e,t)}function vs(n,e){return Es(I(n.treePath,e),n.writeTree)}function Es(n,e){return{treePath:n,writeTree:e}}/**
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
 */class zr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;d(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),d(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,hn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Tr(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Er(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,hn(s,e.snapshotNode,i.oldSnap));else throw Se("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Qr{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ts=new Qr;class At{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bt(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ee(this.viewCache_),r=Yr(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function jr(n,e){d(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),d(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function $r(n,e,t,s,i){const r=new zr;let o,l;if(t.type===H.OVERWRITE){const a=t;a.source.fromUser?o=dt(n,e,a.path,a.snap,s,i,r):(d(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!m(a.path),o=Ue(n,e,a.path,a.snap,s,i,l,r))}else if(t.type===H.MERGE){const a=t;a.source.fromUser?o=Jr(n,e,a.path,a.children,s,i,r):(d(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=ft(n,e,a.path,a.children,s,i,l,r))}else if(t.type===H.ACK_USER_WRITE){const a=t;a.revert?o=to(n,e,a.path,s,i,r):o=Zr(n,e,a.path,a.affectedTree,s,i,r)}else if(t.type===H.LISTEN_COMPLETE)o=eo(n,e,t.path,s,r);else throw Se("Unknown operation type: "+t.type);const c=r.getChanges();return Xr(e,o,c),{viewCache:o,changes:c}}function Xr(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ct(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(vr(ct(e)))}}function Ss(n,e,t,s,i,r){const o=e.eventCache;if(We(s,t)!=null)return e;{let l,c;if(m(t))if(d(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=ee(e),u=a instanceof C?a:C.EMPTY_NODE,h=Cs(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=ut(s,ee(e));l=n.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=g(t);if(a===".priority"){d(Y(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=mn(s,t,u,c);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=T(t);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=mn(s,t,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=bt(s,a,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return ye(e,l,o.isFullyInitialized()||m(t),n.filter.filtersNodes())}}function Ue(n,e,t,s,i,r,o,l){const c=e.serverCache;let a;const u=o?n.filter:n.filter.getIndexedFilter();if(m(t))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);a=u.updateFullNode(c.getNode(),p,null)}else{const p=g(t);if(!c.isCompleteForPath(t)&&Y(t)>1)return e;const _=T(t),x=c.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?a=u.updatePriority(c.getNode(),x):a=u.updateChild(c.getNode(),p,x,_,Ts,null)}const h=_s(e,a,c.isFullyInitialized()||m(t),u.filtersNodes()),f=new At(i,h,r);return Ss(n,h,t,i,f,l)}function dt(n,e,t,s,i,r,o){const l=e.eventCache;let c,a;const u=new At(i,e,r);if(m(t))a=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ye(e,a,!0,n.filter.filtersNodes());else{const h=g(t);if(h===".priority")a=n.filter.updatePriority(e.eventCache.getNode(),s),c=ye(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=T(t),p=l.getNode().getImmediateChild(h);let _;if(m(f))_=s;else{const w=u.getCompleteChild(h);w!=null?Zn(f)===".priority"&&w.getChild(ts(f)).isEmpty()?_=w:_=w.updateChild(f,s):_=C.EMPTY_NODE}if(p.equals(_))c=e;else{const w=n.filter.updateChild(l.getNode(),h,_,f,u,o);c=ye(e,w,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function yn(n,e){return n.eventCache.isCompleteForChild(e)}function Jr(n,e,t,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=I(t,c);yn(e,g(u))&&(l=dt(n,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=I(t,c);yn(e,g(u))||(l=dt(n,l,u,a,i,r,o))}),l}function Cn(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ft(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;m(t)?a=s:a=new E(null).setTree(t,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Cn(n,p,f);c=Ue(n,c,new S(h),_,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),w=Cn(n,_,f);c=Ue(n,c,new S(h),w,i,r,o,l)}}),c}function Zr(n,e,t,s,i,r,o){if(We(i,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(m(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ue(n,e,t,c.getNode().getChild(t),i,r,l,o);if(m(t)){let a=new E(null);return c.getNode().forEachChild(oe,(u,h)=>{a=a.set(new S(u),h)}),ft(n,e,t,a,i,r,l,o)}else return e}else{let a=new E(null);return s.foreach((u,h)=>{const f=I(t,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),ft(n,e,t,a,i,r,l,o)}}function eo(n,e,t,s,i){const r=e.serverCache,o=_s(e,r.getNode(),r.isFullyInitialized()||m(t),r.isFiltered());return Ss(n,o,t,s,Ts,i)}function to(n,e,t,s,i,r){let o;if(We(s,t)!=null)return e;{const l=new At(s,e,i),c=e.eventCache.getNode();let a;if(m(t)||g(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ut(s,ee(e));else{const h=e.serverCache.getNode();d(h instanceof C,"serverChildren would be complete if leaf node"),u=Cs(s,h)}u=u,a=n.filter.updateFullNode(c,u,r)}else{const u=g(t);let h=bt(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=n.filter.updateChild(c,u,h,T(t),l,r):e.eventCache.getNode().hasChild(u)?a=n.filter.updateChild(c,u,C.EMPTY_NODE,T(t),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ut(s,ee(e)),o.isLeafNode()&&(a=n.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||We(s,v())!=null,ye(e,a,o,n.filter.filtersNodes())}}function no(n,e){const t=ee(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!m(e)&&!t.getImmediateChild(g(e)).isEmpty())?t.getChild(e):null}function vn(n,e,t,s){e.type===H.MERGE&&e.source.queryId!==null&&(d(ee(n.viewCache_),"We should always have a full cache before handling merges"),d(ct(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=$r(n.processor_,i,e,t,s);return jr(n.processor_,r.viewCache),d(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,so(n,r.changes,r.viewCache.eventCache.getNode(),null)}function so(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return kr(n.eventGenerator_,e,t,i)}/**
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
 */let En;function io(n){d(!En,"__referenceConstructor has already been defined"),En=n}function kt(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return d(r!=null,"SyncTree gave us an op for an invalid query."),vn(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(vn(o,e,t,s));return r}}function Pt(n,e){let t=null;for(const s of n.views.values())t=t||no(s,e);return t}/**
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
 */let Tn;function ro(n){d(!Tn,"__referenceConstructor has already been defined"),Tn=n}class Sn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new E(null),this.pendingWriteTree_=Kr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Is(n,e,t,s,i){return xr(n.pendingWriteTree_,e,t,s,i),i?Ve(n,new Z(hs(),e,t)):[]}function j(n,e,t=!1){const s=Dr(n.pendingWriteTree_,e);if(Lr(n.pendingWriteTree_,e)){let r=new E(null);return s.snap!=null?r=r.set(v(),!0):L(s.children,o=>{r=r.set(new S(o),!0)}),Ve(n,new Fe(s.path,r,t))}else return[]}function qe(n,e,t){return Ve(n,new Z(us(),e,t))}function oo(n,e,t){const s=E.fromObject(t);return Ve(n,new Ee(us(),e,s))}function lo(n,e,t,s){const i=Ns(n,s);if(i!=null){const r=bs(i),o=r.path,l=r.queryId,c=D(o,e),a=new Z(ds(l),c,t);return As(n,o,a)}else return[]}function co(n,e,t,s){const i=Ns(n,s);if(i){const r=bs(i),o=r.path,l=r.queryId,c=D(o,e),a=E.fromObject(t),u=new Ee(ds(l),c,a);return As(n,o,u)}else return[]}function Mt(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=D(o,e),a=Pt(l,c);if(a)return a});return ys(i,e,r,t,!0)}function Ve(n,e){return ws(e,n.syncPointTree_,null,gs(n.pendingWriteTree_,v()))}function ws(n,e,t,s){if(m(n.path))return Rs(n,e,t,s);{const i=e.get(v());t==null&&i!=null&&(t=Pt(i,v()));let r=[];const o=g(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const a=t?t.getImmediateChild(o):null,u=vs(s,o);r=r.concat(ws(l,c,a,u))}return i&&(r=r.concat(kt(i,n,s,t))),r}}function Rs(n,e,t,s){const i=e.get(v());t==null&&i!=null&&(t=Pt(i,v()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,a=vs(s,o),u=n.operationForChild(o);u&&(r=r.concat(Rs(u,l,c,a)))}),i&&(r=r.concat(kt(i,n,s,t))),r}function Ns(n,e){return n.tagToQueryMap.get(e)}function bs(n){const e=n.indexOf("$");return d(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new S(n.substr(0,e))}}function As(n,e,t){const s=n.syncPointTree_.get(e);d(s,"Missing sync point for query tag that we're tracking");const i=gs(n.pendingWriteTree_,e);return kt(s,t,i,null)}/**
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
 */class Ot{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ot(t)}node(){return this.node_}}class xt{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=I(this.path_,e);return new xt(this.syncTree_,t)}node(){return Mt(this.syncTree_,this.path_)}}const ao=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},In=function(n,e,t){if(!n||typeof n!="object")return n;if(d(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ho(n[".sv"],e,t);if(typeof n[".sv"]=="object")return uo(n[".sv"],e);d(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ho=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:d(!1,"Unexpected server value: "+n)}},uo=function(n,e,t){n.hasOwnProperty("increment")||d(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&d(!1,"Unexpected increment value: "+s);const i=e.node();if(d(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},fo=function(n,e,t,s){return Dt(e,new xt(t,n),s)},ks=function(n,e,t){return Dt(n,new Ot(e),t)};function Dt(n,e,t){const s=n.getPriority().val(),i=In(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=In(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new R(l,b(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new R(i))),o.forEachChild(P,(l,c)=>{const a=Dt(c,e.getImmediateChild(l),t);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class Lt{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ft(n,e){let t=e instanceof S?e:new S(e),s=n,i=g(t);for(;i!==null;){const r=le(s.node.children,i)||{children:{},childCount:0};s=new Lt(i,s,r),t=T(t),i=g(t)}return s}function de(n){return n.node.value}function Ps(n,e){n.node.value=e,_t(n)}function Ms(n){return n.node.childCount>0}function _o(n){return de(n)===void 0&&!Ms(n)}function Be(n,e){L(n.node.children,(t,s)=>{e(new Lt(t,n,s))})}function Os(n,e,t,s){t&&!s&&e(n),Be(n,i=>{Os(i,e,!0,s)}),t&&s&&e(n)}function po(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ne(n){return new S(n.parent===null?n.name:Ne(n.parent)+"/"+n.name)}function _t(n){n.parent!==null&&go(n.parent,n.name,n)}function go(n,e,t){const s=_o(t),i=B(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,_t(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,_t(n))}/**
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
 */const mo=/[\[\].#$\/\u0000-\u001F\u007F]/,yo=/[\[\].#$\u0000-\u001F\u007F]/,et=10*1024*1024,xs=function(n){return typeof n=="string"&&n.length!==0&&!mo.test(n)},Ds=function(n){return typeof n=="string"&&n.length!==0&&!yo.test(n)},Co=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ds(n)},Ls=function(n,e,t,s){s&&e===void 0||Wt(Ct(n,"value"),e,t)},Wt=function(n,e,t){const s=t instanceof S?new Zi(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+z(s));if(typeof e=="function")throw new Error(n+"contains a function "+z(s)+" with contents = "+e.toString());if(On(e))throw new Error(n+"contains "+e.toString()+" "+z(s));if(typeof e=="string"&&e.length>et/3&&He(e)>et)throw new Error(n+"contains a string greater than "+et+" utf8 bytes "+z(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(L(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xs(o)))throw new Error(n+" contains an invalid key ("+o+") "+z(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);er(s,o),Wt(n,l,s),tr(s)}),i&&r)throw new Error(n+' contains ".value" child '+z(s)+" in addition to actual children.")}},Fs=function(n,e,t,s){if(!(s&&t===void 0)&&!Ds(t))throw new Error(Ct(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vo=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fs(n,e,t,s)},Ws=function(n,e){if(g(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Eo=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Co(t))throw new Error(Ct(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class To{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Us(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ns(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function V(n,e,t){Us(n,t),So(n,s=>W(s,e)||W(e,s))}function So(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Io(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Io(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();$&&k("event: "+t.toString()),ue(s)}}}/**
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
 */const wo="repo_interrupt",Ro=25;class No{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new To,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Le(),this.transactionQueueTree_=new Lt,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bo(n,e,t){if(n.stats_=Tt(n.repoInfo_),n.forceRestClient_||Si())n.server_=new De(n.repoInfo_,(s,i,r,o)=>{wn(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Rn(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{A(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new q(n.repoInfo_,e,(s,i,r,o)=>{wn(n,s,i,r,o)},s=>{Rn(n,s)},s=>{Ao(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ai(n.repoInfo_,()=>new Ar(n.stats_,n.server_)),n.infoData_=new Ir,n.infoSyncTree_=new Sn({startListening:(s,i,r,o)=>{let l=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(l=qe(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ht(n,"connected",!1),n.serverSyncTree_=new Sn({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);V(n.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Hs(n){const t=n.infoData_.getNode(new S(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ut(n){return ao({timestamp:Hs(n)})}function wn(n,e,t,s,i){n.dataUpdateCount++;const r=new S(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Pe(t,a=>b(a));o=co(n.serverSyncTree_,r,c,i)}else{const c=b(t);o=lo(n.serverSyncTree_,r,c,i)}else if(s){const c=Pe(t,a=>b(a));o=oo(n.serverSyncTree_,r,c)}else{const c=b(t);o=qe(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ke(n,r)),V(n.eventQueue_,l,o)}function Rn(n,e){Ht(n,"connected",e),e===!1&&Po(n)}function Ao(n,e){L(e,(t,s)=>{Ht(n,t,s)})}function Ht(n,e,t){const s=new S("/.info/"+e),i=b(t);n.infoData_.updateSnapshot(s,i);const r=qe(n.infoSyncTree_,s,i);V(n.eventQueue_,s,r)}function Gs(n){return n.nextWriteId_++}function ko(n,e,t,s,i){Gt(n,"set",{path:e.toString(),value:t,priority:s});const r=Ut(n),o=b(t,s),l=Mt(n.serverSyncTree_,e),c=ks(o,l,r),a=Gs(n),u=Is(n.serverSyncTree_,e,c,a,!0);Us(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||O("set at "+e+" failed: "+f);const w=j(n.serverSyncTree_,a,!_);V(n.eventQueue_,e,w),Oo(n,i,f,p)});const h=Ys(n,e);Ke(n,h),V(n.eventQueue_,h,[])}function Po(n){Gt(n,"onDisconnectEvents");const e=Ut(n),t=Le();lt(n.onDisconnect_,v(),(i,r)=>{const o=fo(i,r,n.serverSyncTree_,e);as(t,i,o)});let s=[];lt(t,v(),(i,r)=>{s=s.concat(qe(n.serverSyncTree_,i,r));const o=Ys(n,i);Ke(n,o)}),n.onDisconnect_=Le(),V(n.eventQueue_,v(),s)}function Mo(n){n.persistentConnection_&&n.persistentConnection_.interrupt(wo)}function Gt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),k(t,...e)}function Oo(n,e,t,s){e&&ue(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function qs(n,e,t){return Mt(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function qt(n,e=n.transactionQueueTree_){if(e||Ye(n,e),de(e)){const t=Bs(n,e);d(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&xo(n,Ne(e),t)}else Ms(e)&&Be(e,t=>{qt(n,t)})}function xo(n,e,t){const s=t.map(a=>a.currentWriteId),i=qs(n,e,s);let r=i;const o=i.hash();for(let a=0;a<t.length;a++){const u=t[a];d(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=D(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,a=>{Gt(n,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(j(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Ye(n,Ft(n.transactionQueueTree_,e)),qt(n,n.transactionQueueTree_),V(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)ue(h[f])}else{if(a==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{O("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=a}Ke(n,e)}},o)}function Ke(n,e){const t=Vs(n,e),s=Ne(t),i=Bs(n,t);return Do(n,i,s),s}function Do(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=D(t,c.path);let u=!1,h;if(d(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(j(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Ro)u=!0,h="maxretry",i=i.concat(j(n.serverSyncTree_,c.currentWriteId,!0));else{const f=qs(n,c.path,o);c.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){Wt("transaction failed: Data returned ",p,c.path);let _=b(p);typeof p=="object"&&p!=null&&B(p,".priority")||(_=_.updatePriority(f.getPriority()));const x=c.currentWriteId,ze=Ut(n),be=ks(_,f,ze);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=be,c.currentWriteId=Gs(n),o.splice(o.indexOf(x),1),i=i.concat(Is(n.serverSyncTree_,c.path,be,c.currentWriteId,c.applyLocally)),i=i.concat(j(n.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(j(n.serverSyncTree_,c.currentWriteId,!0))}V(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ye(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)ue(s[l]);qt(n,n.transactionQueueTree_)}function Vs(n,e){let t,s=n.transactionQueueTree_;for(t=g(e);t!==null&&de(s)===void 0;)s=Ft(s,t),e=T(e),t=g(e);return s}function Bs(n,e){const t=[];return Ks(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ks(n,e,t){const s=de(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Be(e,i=>{Ks(n,i,t)})}function Ye(n,e){const t=de(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ps(e,t.length>0?t:void 0)}Be(e,s=>{Ye(n,s)})}function Ys(n,e){const t=Ne(Vs(n,e)),s=Ft(n.transactionQueueTree_,e);return po(s,i=>{tt(n,i)}),tt(n,s),Os(s,i=>{tt(n,i)}),t}function tt(n,e){const t=de(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(d(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(d(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(j(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ps(e,void 0):t.length=r+1,V(n.eventQueue_,Ne(e),i);for(let o=0;o<s.length;o++)ue(s[o])}}/**
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
 */function Lo(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Fo(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):O(`Invalid query segment '${t}' in query '${n}'`)}return e}const Nn=function(n,e){const t=Wo(n),s=t.namespace;t.domain==="firebase.com"&&X(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&X("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||pi();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ri(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new S(t.pathString)}},Wo=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let a=n.indexOf("//");a>=0&&(l=n.substring(0,a-1),n=n.substring(a+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Lo(n.substring(u,h)));const f=Fo(n.substring(Math.min(n.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const p=e.slice(0,a);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Vt{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return m(this._path)?null:Zn(this._path)}get ref(){return new ne(this._repo,this._path)}get _queryIdentifier(){const e=dn(this._queryParams),t=vt(e);return t==="{}"?"default":t}get _queryObject(){return dn(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof Vt))return!1;const t=this._repo===e._repo,s=ns(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ji(this._path)}}class ne extends Vt{constructor(e,t){super(e,t,new Rt,!1)}get parent(){const e=ts(this._path);return e===null?null:new ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Qo(n,e){return n=Te(n),n._checkNotDeleted("ref"),e!==void 0?pt(n._root,e):n._root}function pt(n,e){return n=Te(n),g(n._path)===null?vo("child","path",e,!1):Fs("child","path",e,!1),new ne(n._repo,I(n._path,e))}function jo(n,e){n=Te(n),Ws("push",n._path),Ls("push",e,n._path,!0);const t=Hs(n._repo),s=Cr(t),i=pt(n,s),r=pt(n,s);let o;return e!=null?o=Uo(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Uo(n,e){n=Te(n),Ws("set",n._path),Ls("set",e,n._path,!1);const t=new yt;return ko(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}io(ne);ro(ne);/**
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
 */const Ho="FIREBASE_DATABASE_EMULATOR_HOST",gt={};let Go=!1;function qo(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||X("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Nn(r,i),l=o.repoInfo,c,a;typeof process!="undefined"&&process.env&&(a=process.env[Ho]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=Nn(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new it(it.OWNER):new wi(n.name,n.options,e);Eo("Invalid Firebase Database URL",o),m(o.path)||X("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Bo(l,n,u,new Ii(n.name,t));return new Ko(h,n)}function Vo(n,e){const t=gt[e];(!t||t[n.key]!==n)&&X(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Mo(n),delete t[n.key]}function Bo(n,e,t,s){let i=gt[e.name];i||(i={},gt[e.name]=i);let r=i[n.toURLString()];return r&&X("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new No(n,Go,t,s),i[n.toURLString()]=r,r}class Ko{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bo(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ne(this._repo,v())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&X("Cannot call "+e+" on a deleted database.")}}function $o(n=ei(),e){return Xs(n,"database").getImmediate({identifier:e})}/**
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
 */function Yo(n){hi(ci),js(new $s("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return qo(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Bt(Yt,zt,n),Bt(Yt,zt,"esm2017")}q.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};q.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Yo();export{$o as g,jo as p,Qo as r};
