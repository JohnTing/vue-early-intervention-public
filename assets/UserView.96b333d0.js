import{d as he,r as R,c as hi,o as C,a as A,b as d,w as K,v as Vn,u as Ge,F as re,e as Fe,f as xe,g as T,t as z,h as x,i as tt,j as di,k as fi,l as _i,n as pi,m as _,p as mi,_ as gi,C as yi,q as ln,s as P,x as xt,y as J,z as vi,S as Ci,A as ve,B as Ye,L as Ei,D as Oe,E as Mt,G as Si,H as Gn,I as Pt,J as Ti,K as bi,M as un,N as Yn,O as wi,P as Ii,Q as nt,R as Le,T as Ai,U as Ri,V as Ni,W as ki,X as Di,Y as Fi,Z as _e}from"./index.dbdcda22.js";import{d as ne,_ as xi}from"./dayjs.min.3144d035.js";const Mi=["onSubmit"],Pi=d("h5",null,"1.\u5152\u7AE5\u57FA\u672C\u8CC7\u6599",-1),Oi={class:"row"},Li={class:"col-md-4"},Bi=T(" \u5152\u7AE5\u8EAB\u4EFD\u8B49\u865F\uFF1A "),Wi=["readonly"],Ui={class:"col-md-4"},$i=T(" \u5152\u7AE5\u59D3\u540D\uFF1A "),qi=["readonly"],Hi={class:"col-md-4"},Vi=T(" \u5152\u7AE5\u51FA\u751F\u65E5\u671F\uFF1A "),Gi=["onchange","readonly"],Yi=d("br",null,null,-1),Ki={class:"col-md-12"},zi=T(" \u586B\u5BEB\u4EBA\u8207\u5152\u7AE5\u95DC\u4FC2\uFF1A "),ji={class:"form-inline"},Qi={class:"form-check-inline"},Xi={class:"form-check-label"},Ji=["value","disabled"],Zi=["placeholder","disabled","readonly"],eo=T(" \u586B\u8868\u4EBA\u806F\u7E6B\u96FB\u8A71\uFF08\u52D9\u5FC5\u7559\u4E0B\u53EF\u806F\u7E6B\u96FB\u8A71\uFF09\uFF1A "),to=["readonly"],no=d("div",{class:"valid-feedback"},"Valid.",-1),so=d("div",{class:"invalid-feedback"},"Please fill out this field.",-1),io=d("br",null,null,-1),oo=T(" \u5C31\u8A3A\u554F\u984C(\u53EF\u8907\u9078)\uFF1A"),ro=d("br",null,null,-1),lo={class:"form-check-label"},uo=["value","disabled"],ao={class:"col-md-12"},co={key:0,class:"alert alert-warning"},ho=T(" \u5E74\u9F61\u4E0D\u7B26\u5408\u672C\u9662\u770B\u8A3A\u689D\u4EF6\uFF0C\u82E5\u4ECD\u9700\u8981\u672C\u9662\u5C31\u8A3A\uFF0C\u5EFA\u8B70\u8F49\u8A3A\u81F3\u4EE5\u4E0B\u79D1\u5225\uFF1A"),fo=d("br",null,null,-1),_o=T(" \u52D5\u4F5C\u3001\u8A9E\u8A00\u985E\u767C\u5C55\u554F\u984C \u2192 \u8ACB\u639B\u5FA9\u5065\u79D1"),po=d("br",null,null,-1),mo=T(" \u8A8D\u77E5\u3001\u4EBA\u969B\u3001\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49 \u2192 \u8ACB\u639B\u5152\u7AE5\u5FC3\u667A\u79D1 "),go=[ho,fo,_o,po,mo],yo=d("br",null,null,-1),vo={key:0,class:"btn btn-primary",type:"submit"},Co=he({__name:"UserFrom1",props:{disabled:{type:Boolean}},emits:["kidBirthdayChange","submit"],setup(n,{emit:e}){const t=R(ne("2022-07-01").add(-106,"day")),s=R(ne("2010-01-01").add(-106,"day"));R(s.value.format("YYYY\u5E74MM\u6708DD\u65E5")),R(t.value.format("YYYY\u5E74MM\u6708DD\u65E5")),R(s.value.format("YYYY\u5E74MM\u6708DD\u65E5")),R(t.value.format("YYYY\u5E74MM\u6708DD\u65E5")),R(t.value.format("YYYY\u5E74MM\u6708DD\u65E5"));const i=["\u7236\u6BCD/\u76E3\u8B77\u4EBA","\u8001\u5E2B","\u793E\u5DE5","\u8B77\u7406\u5E2B","\u5176\u4ED6"],o=["\u52D5\u4F5C","\u8A9E\u8A00","\u5B78\u7FD2","\u60C5\u7DD2","\u5C08\u6CE8\u529B\u3001\u904E\u52D5","\u5B78\u524D\u9451\u5B9A"],r=R("");ne();const l=R(""),u=hi(()=>ne(l.value)),a=R(null);function c(h){a.value=u.value.isBefore(t.value)&&u.value.isAfter(s.value),e("submit",h,a.value)}return(h,f)=>(C(),A("form",{id:"from",onSubmit:tt(c,["prevent"])},[Pi,d("div",Oi,[d("div",Li,[Bi,d("input",{type:"text",class:"form-control",name:"identityNumber",required:"",pattern:"[A-Z][01][0-9]{8}",readonly:n.disabled},null,8,Wi)]),d("div",Ui,[$i,d("input",{type:"text",class:"form-control",name:"childName",required:"",readonly:n.disabled},null,8,qi)]),d("div",Hi,[Vi,K(d("input",{type:"date",class:"form-control",name:"childBirthday",required:"","onUpdate:modelValue":f[0]||(f[0]=p=>l.value=p),onchange:e("kidBirthdayChange",Ge(u)),readonly:n.disabled},null,8,Gi),[[Vn,l.value]])])]),Yi,d("div",Ki,[zi,d("div",ji,[(C(),A(re,null,Fe(i,(p,m)=>d("div",Qi,[d("label",Xi,[K(d("input",{class:"form-check-input",type:"radio",name:"userRelationship",value:p,"onUpdate:modelValue":f[1]||(f[1]=N=>r.value=N),required:"",disabled:n.disabled},null,8,Ji),[[xe,r.value]]),T(z(p),1)])])),64)),d("div",null,[d("input",{type:"text",class:"form-control",name:"userRelationshipOther",placeholder:r.value==i.at(i.length-1)?"\u8ACB\u8F38\u5165\u95DC\u4FC2":"",disabled:r.value!=i.at(i.length-1),readonly:n.disabled},null,8,Zi)])])]),eo,d("input",{type:"tel",class:"form-control",name:"phoneNumber",required:"",readonly:n.disabled,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}"},null,8,to),no,so,io,oo,ro,(C(),A(re,null,Fe(o,p=>d("label",lo,[d("input",{class:"form-check-input",type:"checkbox",name:"questionsAbouts",value:p,disabled:n.disabled},null,8,uo),T(" "+z(p)+"\u2003 ",1)])),64)),d("div",ao,[a.value===!1?(C(),A("div",co,go)):x("",!0)]),yo,a.value?x("",!0):(C(),A("button",vo,"\u78BA\u8A8D"))],40,Mi))}}),Eo=["onSubmit"],So=d("h5",null,"2.\u662F\u5426\u66FE\u7D93\u65BC\u672C\u9662/\u4ED6\u9662\u770B\u904E\u5152\u7AE5\u767C\u5C55\u806F\u5408\u8A55\u4F30\u9580\u8A3A\uFF1F",-1),To={class:"col-md-12"},bo={class:"form-check"},wo={class:"form-check-label"},Io=["disabled"],Ao=T("\u5426 "),Ro={class:"form-check"},No={class:"form-check-label"},ko=["disabled"],Do=T("\u662F "),Fo={key:0},xo={class:"row"},Mo={class:"form-inline col-md-6"},Po=T(" \u524D\u6B21\u8A55\u4F30\u65E5\u671F\uFF1A"),Oo=["disabled"],Lo={class:"form-inline col-md-6"},Bo=T(" \u5EFA\u8B70\u8907\u8A55\u6642\u9593\uFF08\u53EF\u4E0D\u586B\uFF09\uFF1A"),Wo=["disabled"],Uo={key:0},$o=d("div",{class:"alert alert-warning"},[T(" \u7121\u8AD6\u65BC\u672C\u9662\u6216\u4ED6\u9662\u8A55\u4F30\u4E00\u5E74\u5167\u4E0D\u5F97\u91CD\u8A55\uFF0C\u67E5\u8A62\u5F8C\u82E5\u91CD\u8986\u770B\u8A3A\uFF0C\u76F4\u63A5\u62D2\u7D55\u8A55\u4F30"),d("br")],-1),qo=[$o],Ho={key:1},Vo={class:"form-inline"},Go=T(" \u524D\u6B21\u8A55\u4F30\u65E5\u671F\uFF1A"),Yo=["disabled"],Ko={class:"form-inline"},zo=T(" \u5EFA\u8B70\u8907\u8A55\u6642\u9593\uFF1A"),jo=["disabled"],Qo=T("\uFF08\u53EF\u4E0D\u586B\uFF09 "),Xo=d("br",null,null,-1),Jo={key:0,class:"btn btn-primary",type:"submit"},Zo=he({__name:"UserFrom2",props:{disabled:{type:Boolean}},emits:["submit"],setup(n,{emit:e}){const t=R(!1),s=R(null),i=R(null);function o(r){const l=ne().diff(s.value);s.value&&t.value?i.value=l/(1e3*60*60*24)>365-61:i.value=!0,e("submit",r,i.value)}return(r,l)=>(C(),A("form",{id:"from",onSubmit:tt(o,["prevent"])},[So,d("div",To,[d("div",bo,[d("label",wo,[K(d("input",{type:"radio",class:"form-check-input",name:"isEvaluate",value:!1,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),required:"",disabled:n.disabled},null,8,Io),[[xe,t.value]]),Ao])]),d("div",Ro,[d("label",No,[K(d("input",{type:"radio",class:"form-check-input",name:"isEvaluate",value:!0,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),required:"",disabled:n.disabled},null,8,ko),[[xe,t.value]]),Do]),t.value?(C(),A("div",Fo,[d("div",xo,[d("div",Mo,[Po,K(d("input",{type:"date",class:"form-control",name:"lastEvaluate",required:"","onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),disabled:n.disabled},null,8,Oo),[[Vn,s.value]])]),d("div",Lo,[Bo,d("input",{type:"date",class:"form-control",name:"SuggestEvaluate",disabled:n.disabled},null,8,Wo)]),i.value===!1?(C(),A("div",Uo,qo)):x("",!0)])])):x("",!0),t.value?x("",!0):K((C(),A("div",Ho,[d("div",Vo,[Go,d("input",{type:"date",class:"form-control",name:"lastEvaluate",value:"",disabled:n.disabled},null,8,Yo)]),d("div",Ko,[zo,d("input",{type:"date",class:"form-control",name:"SuggestEvaluate",value:"",disabled:n.disabled},null,8,jo),Qo])],512)),[[di,!1]])])]),Xo,i.value?x("",!0):(C(),A("button",Jo,"\u78BA\u8A8D"))],40,Eo))}}),er=["onSubmit"],tr=d("h5",null,"3\u3001\u662F\u5426\u6709\u7279\u6B8A\u75BE\u75C5\uFF1F",-1),nr={class:"col-md-12"},sr={class:"form-check"},ir={class:"form-check-label"},or=["disabled"],rr=T("\u5426 "),lr={class:"form-check"},ur={class:"form-check-label"},ar=["disabled"],cr=T("\u662F "),hr={class:"form-check form-check-inline"},dr={class:"form-check-label"},fr=["value","disabled"],_r=d("br",null,null,-1),pr={key:0,class:"btn btn-primary",type:"submit"},mr=he({__name:"UserFrom3",props:{disabled:{type:Boolean}},emits:["submit"],setup(n,{emit:e}){const t=R(!1),s=["\u795E\u7D93\u7CFB\u7D71","\u5167\u5206\u6CCC","\u7F55\u898B\u75BE\u75C5","\u65E9\u7522"],i=R(null);function o(r){i.value=!0,e("submit",r,i.value)}return(r,l)=>(C(),A("form",{id:"from",onSubmit:tt(o,["prevent"])},[tr,d("div",nr,[d("div",sr,[d("label",ir,[K(d("input",{type:"radio",class:"form-check-input",name:"isSpecialDisease",value:!1,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),required:"",disabled:n.disabled},null,8,or),[[xe,t.value]]),rr])]),d("div",lr,[d("label",ur,[K(d("input",{type:"radio",class:"form-check-input",name:"isSpecialDisease",value:!0,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),required:"",disabled:n.disabled},null,8,ar),[[xe,t.value]]),cr]),d("div",null,[(C(),A(re,null,Fe(s,(u,a)=>d("div",hr,[d("label",dr,[d("input",{type:"checkbox",class:"form-check-input",name:"specialDisease",value:u,disabled:n.disabled||!t.value},null,8,fr),T(z(u),1)])])),64))])])]),_r,i.value?x("",!0):(C(),A("button",pr,"\u78BA\u8A8D"))],40,er))}}),gr=["onSubmit"],yr=d("h5",null,"4\u3001\u524D\u6B21\u8A55\u4F30\u9072\u7DE9/\u81E8\u754C\u9072\u7DE9\uFF1A",-1),vr={class:"col-md-12"},Cr={class:"form-inline"},Er={class:"form-check"},Sr={class:"form-check-label"},Tr=["value","disabled"],br={key:0,class:"alert alert-warning"},wr=T(" \u2027\u55AE\u4E00\u9805\u76EE\u7684\u767C\u5C55\u9072\u7DE9\uFF0C\u975E\u672C\u9580\u8A3A\u770B\u8A3A\u5C0D\u8C61"),Ir=d("br",null,null,-1),Ar=T(" \u2027\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5176\u5B83\u767C\u5C55\u9072\u7DE9 \u2192 \u7CFB\u7D71\u76F4\u63A5\u8DF3\u8F49\u639B\u300C\u5152\u7AE5\u5FC3\u667A\u79D1\u300D"),Rr=d("br",null,null,-1),Nr=T(" \u2027\u52D5\u4F5C \u2192 \u7CFB\u7D71\u76F4\u63A5\u8DF3\u8F49\u639B\u300C\u5FA9\u5065\u79D1\u300D "),kr=[wr,Ir,Ar,Rr,Nr],Dr=d("br",null,null,-1),Fr={key:0,class:"btn btn-primary",type:"submit"},xr=he({__name:"UserFrom4",props:{disabled:{type:Boolean}},emits:["submit"],setup(n,{emit:e}){const t=R(null),s=["\u52D5\u4F5C\u985E","\u8A9E\u8A00","\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49"],i=R([]);function o(r){t.value=i.value.length>=2,e("submit",r,t.value)}return(r,l)=>(C(),A("form",{id:"from",onSubmit:tt(o,["prevent"])},[yr,d("div",vr,[(C(),A(re,null,Fe(s,(u,a)=>d("div",Cr,[d("div",Er,[d("label",Sr,[K(d("input",{type:"checkbox",class:"form-check-input",name:"previousAssessment","onUpdate:modelValue":l[0]||(l[0]=c=>i.value=c),value:a,disabled:n.disabled},null,8,Tr),[[fi,i.value]]),T(z(u),1)])])])),64)),t.value===!1?(C(),A("div",br,kr)):x("",!0)]),Dr,t.value?x("",!0):(C(),A("button",Fr,"\u78BA\u8A8D"))],40,gr))}});const Mr=d("h5",null,"5\u3001TAIPEI II \u7BE9\u6AA2\u8868",-1),Pr={class:"col-md-12"},Or={key:0},Lr=d("h6",null,"\u8ACB\u8F38\u5165\u51FA\u751F\u65E5\u671F/\u65E5\u671F\u4E0D\u5728\u7BE9\u6AA2\u8868\u5167",-1),Br=[Lr],Wr={key:1},Ur={class:"row"},$r={class:"col-md-1"},qr={style:{color:"red"}},Hr={class:"col-md-9"},Vr={class:"form-check-label"},Gr={class:"col-md-2 text-center"},Yr=["id","name"],Kr=["for"],zr=["id","name"],jr=["for"],Qr=["src"],Xr=d("br",null,null,-1),Jr=he({__name:"UserFrom5",props:{kidBirthday:null},emits:["submit"],setup(n,{emit:e}){const t=n,s=R({}),i=R({questions:[],image:""});fetch("assets/monthRoot.json").then(r=>r.json()).then(r=>{s.value=r});const o=_i(()=>{console.log(t.kidBirthday);const l=ne().diff(ne(t.kidBirthday))/(1e3*60*60*24);let u="";for(const a in s.value)if(console.log(l),s.value[a].min<=l&&s.value[a].max>=l){u=s.value[a].title,fetch(a).then(c=>c.json()).then(c=>{console.log(c),c.questions.forEach((h,f,p)=>{h.title=h.title.replace(/^\d+\./gm,"")}),i.value=c});break}return console.log(u),u});return R(null),(r,l)=>(C(),A(re,null,[Mr,d("div",Pr,[Ge(o)?x("",!0):(C(),A("div",Or,Br)),Ge(o)?(C(),A("div",Wr,[d("h6",null,z(Ge(o)),1),d("div",null,[(C(!0),A(re,null,Fe(i.value.questions,(u,a)=>(C(),A("div",{class:pi(a%2==0?"q_white_line":"q_gray_line")},[d("div",Ur,[d("div",$r,[T(z(a+1),1),d("span",qr,z(u.special?"\u2605":""),1)]),d("div",Hr,[d("label",Vr,z(u.title),1)]),d("div",Gr,[d("input",{type:"radio",class:"slist_radio_input",id:`q5t_${a}`,name:`q5_${a}`,required:"",value:!0},null,8,Yr),d("label",{class:"slist_radio_label",for:`q5t_${a}`},"\u662F",8,Kr),d("input",{type:"radio",class:"slist_radio_input",id:`q5f_${a}`,name:`q5_${a}`,required:"",value:!1},null,8,zr),d("label",{class:"slist_radio_label",for:`q5f_${a}`},"\u5426",8,jr)])])],2))),256)),d("img",{src:i.value.image,style:{width:"100%"}},null,8,Qr)])])):x("",!0)]),Xr],64))}}),an="@firebase/database",cn="0.13.6";/**
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
 */let Kn="";function Zr(n){Kn=n}/**
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
 */class el{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),P(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:xt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return J(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const zn=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new el(e)}}catch{}return new tl},se=zn("localStorage"),yt=zn("sessionStorage");/**
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
 */const ge=new Ei("@firebase/database"),nl=function(){let n=1;return function(){return n++}}(),jn=function(n){const e=vi(n),t=new Ci;t.update(e);const s=t.digest();return mi.encodeByteArray(s)},Be=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Be.apply(null,s):typeof s=="object"?e+=P(s):e+=s,e+=" "}return e};let oe=null,hn=!0;const sl=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ge.logLevel=Si.VERBOSE,oe=ge.log.bind(ge),e&&yt.set("logging_enabled",!0)):typeof n=="function"?oe=n:(oe=null,yt.remove("logging_enabled"))},O=function(...n){if(hn===!0&&(hn=!1,oe===null&&yt.get("logging_enabled")===!0&&sl(!0)),oe){const e=Be.apply(null,n);oe(e)}},We=function(n){return function(...e){O(n,...e)}},vt=function(...n){const e="FIREBASE INTERNAL ERROR: "+Be(...n);ge.error(e)},le=function(...n){const e=`FIREBASE FATAL ERROR: ${Be(...n)}`;throw ge.error(e),new Error(e)},W=function(...n){const e="FIREBASE WARNING: "+Be(...n);ge.warn(e)},il=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&W("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qn=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ol=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ce="[MIN_NAME]",ue="[MAX_NAME]",Se=function(n,e){if(n===e)return 0;if(n===Ce||e===ue)return-1;if(e===Ce||n===ue)return 1;{const t=dn(n),s=dn(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},rl=function(n,e){return n===e?0:n<e?-1:1},we=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+P(e))},Ot=function(n){if(typeof n!="object"||n===null)return P(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=P(e[s]),t+=":",t+=Ot(n[e[s]]);return t+="}",t},Xn=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Jn=function(n){_(!Qn(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,o,r,l,u;n===0?(o=0,r=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),o=l+s,r=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(o=0,r=Math.round(n/Math.pow(2,1-s-t))));const a=[];for(u=t;u;u-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(u=e;u;u-=1)a.push(o%2?1:0),o=Math.floor(o/2);a.push(i?1:0),a.reverse();const c=a.join("");let h="";for(u=0;u<64;u+=8){let f=parseInt(c.substr(u,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},ll=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ul=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},al=new RegExp("^-?(0*)\\d{1,10}$"),cl=-2147483648,hl=2147483647,dn=function(n){if(al.test(n)){const e=Number(n);if(e>=cl&&e<=hl)return e}return null},Te=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw W("Exception was thrown by user callback.",t),e},Math.floor(0))}},dl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ne=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class fl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){W(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _l{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',W(e)}}class Ct{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ct.OWNER="owner";/**
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
 */const Lt="5",Zn="v",es="s",ts="r",ns="f",ss=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,is="ls",os="p",Et="ac",rs="websocket",ls="long_polling";/**
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
 */class pl{constructor(e,t,s,i,o=!1,r="",l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=r,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=se.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&se.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ml(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function us(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===rs)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ls)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ml(n)&&(t.ns=n.namespace);const i=[];return q(t,(o,r)=>{i.push(o+"="+r)}),s+i.join("&")}/**
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
 */class gl{constructor(){this.counters_={}}incrementCounter(e,t=1){J(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ri(this.counters_)}}/**
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
 */const ht={},dt={};function Bt(n){const e=n.toString();return ht[e]||(ht[e]=new gl),ht[e]}function yl(n,e){const t=n.toString();return dt[t]||(dt[t]=e()),dt[t]}/**
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
 */class vl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Te(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fn="start",Cl="close",El="pLPCommand",Sl="pRTLPCB",as="id",cs="pw",hs="ser",Tl="cb",bl="seg",wl="ts",Il="d",Al="dframe",ds=1870,fs=30,Rl=ds-fs,Nl=25e3,kl=3e4;class me{constructor(e,t,s,i,o,r,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=o,this.transportSessionId=r,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=We(e),this.stats_=Bt(t),this.urlFn=u=>(this.appCheckToken&&(u[Et]=this.appCheckToken),us(t,ls,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kl)),ol(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wt((...o)=>{const[r,l,u,a,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===fn)this.id=l,this.password=u;else if(r===Cl)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+r)},(...o)=>{const[r,l]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(r,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[fn]="t",s[hs]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Zn]=Lt,this.transportSessionId&&(s[es]=this.transportSessionId),this.lastSessionId&&(s[is]=this.lastSessionId),this.applicationId&&(s[os]=this.applicationId),this.appCheckToken&&(s[Et]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ss.test(location.hostname)&&(s[ts]=ns);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){me.forceAllow_=!0}static forceDisallow(){me.forceDisallow_=!0}static isAvailable(){return me.forceAllow_?!0:!me.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!ll()&&!ul()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Di(t),i=Xn(s,Rl);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Al]="t",s[as]=e,s[cs]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Wt{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nl(),window[El+this.uniqueCallbackIdentifier]=e,window[Sl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Wt.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;o='<script>document.domain="'+l+'";<\/script>'}const r="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(l){O("frame writing exception"),l.stack&&O(l.stack),O(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||O("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[as]=this.myID,e[cs]=this.myPW,e[hs]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fs+s.length<=ds;){const r=this.pendingSegs.shift();s=s+"&"+bl+i+"="+r.seg+"&"+wl+i+"="+r.ts+"&"+Il+i+"="+r.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Nl)),o=()=>{clearTimeout(i),s()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Dl=16384,Fl=45e3;let Ke=null;typeof MozWebSocket!="undefined"?Ke=MozWebSocket:typeof WebSocket!="undefined"&&(Ke=WebSocket);class H{constructor(e,t,s,i,o,r,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=We(this.connId),this.stats_=Bt(t),this.connURL=H.connectionURL_(t,r,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,o){const r={};return r[Zn]=Lt,typeof location!="undefined"&&location.hostname&&ss.test(location.hostname)&&(r[ts]=ns),t&&(r[es]=t),s&&(r[is]=s),i&&(r[Et]=i),o&&(r[os]=o),us(e,rs,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,se.set("previous_websocket_failure",!0);try{let s;Gn(),this.mySock=new Ke(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){H.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ke!==null&&!H.forceDisallow_}static previouslyFailed(){return se.isInMemoryStorage||se.get("previous_websocket_failure")===!0}markConnectionHealthy(){se.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=xt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Xn(t,Dl);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}H.responsesRequiredToBeHealthy=2;H.healthyTimeout=3e4;/**
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
 */class Me{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[me,H]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=H&&H.isAvailable();let s=t&&!H.previouslyFailed();if(e.webSocketOnly&&(t||W("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[H];else{const i=this.transports_=[];for(const o of Me.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Me.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Me.globalTransportInitialized_=!1;/**
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
 */const xl=6e4,Ml=5e3,Pl=10*1024,Ol=100*1024,ft="t",_n="d",Ll="s",pn="r",Bl="e",mn="o",gn="a",yn="n",vn="p",Wl="h";class Ul{constructor(e,t,s,i,o,r,l,u,a,c){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=r,this.onReady_=l,this.onDisconnect_=u,this.onKill_=a,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=We("c:"+this.id+":"),this.transportManager_=new Me(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ne(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ol?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ft in e){const t=e[ft];t===gn?this.upgradeIfSecondaryHealthy_():t===pn?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===mn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=we("t",e),s=we("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vn,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gn,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yn,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=we("t",e),s=we("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=we(ft,e);if(_n in e){const s=e[_n];if(t===Wl)this.onHandshake_(s);else if(t===yn){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ll?this.onConnectionShutdown_(s):t===pn?this.onReset_(s):t===Bl?vt("Server Error: "+s):t===mn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Lt!==s&&W("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ne(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ne(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ml))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vn,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(se.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class _s{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ps{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===t&&(!s||s===i[o].context)){i.splice(o,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ze extends ps{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Yn()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ze}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cn=32,En=768;class I{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function S(){return new I("")}function g(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ee(n){return n.pieces_.length-n.pieceNum_}function w(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new I(n.pieces_,e)}function ms(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $l(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function gs(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ys(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new I(e,0)}function k(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof I)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new I(t,0)}function y(n){return n.pieceNum_>=n.pieces_.length}function $(n,e){const t=g(n),s=g(e);if(t===null)return e;if(t===s)return $(w(n),w(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function vs(n,e){if(ee(n)!==ee(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function V(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ee(n)>ee(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class ql{constructor(e,t){this.errorPrefix_=t,this.parts_=gs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=nt(this.parts_[s]);Cs(this)}}function Hl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=nt(e),Cs(n)}function Vl(n){const e=n.parts_.pop();n.byteLength_-=nt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Cs(n){if(n.byteLength_>En)throw new Error(n.errorPrefix_+"has a key path longer than "+En+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cn+") or object contains a cycle "+te(n))}function te(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ut extends ps{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ut}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ie=1e3,Gl=60*5*1e3,Sn=30*1e3,Yl=1.3,Kl=3e4,zl="server_kill",Tn=3;class Q extends _s{constructor(e,t,s,i,o,r,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=r,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Q.nextPersistentConnectionId_++,this.log_=We("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ie,this.maxReconnectDelay_=Gl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!Gn())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ut.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ze.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,o={r:i,a:e,b:t};this.log_(P(o)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Pt,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:r=>{const l=r.d;r.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,s,i){this.initConnection_();const o=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+o),this.listens.has(r)||this.listens.set(r,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(r).has(o),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(r).set(o,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const o={p:s},r="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(r,o,l=>{const u=l.d,a=l.s;Q.warnOnListenWarnings_(u,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&J(e,"w")){const s=ve(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();W(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ti(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sn)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=bi(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const o=i.s,r=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const o={p:e},r="n";i&&(o.q=s,o.t=i),this.sendRequest(r,o)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const o={p:t,d:s};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,r=>{i&&setTimeout(()=>{i(r.s,r.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,o){this.initConnection_();const r={p:t,d:s};o!==void 0&&(r.h=o),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const o=s.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+P(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):vt("Unrecognized action received from server: "+P(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kl&&(this.reconnectDelay_=Ie),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Q.nextConnectionId_++,o=this.lastSessionId;let r=!1,l=null;const u=function(){l?l.close():(r=!0,s())},a=function(h){_(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:u,sendRequest:a};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Ul(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{W(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zl)},o))}catch(h){this.log_("Failed to get token: "+h),r||(this.repoInfo_.nodeAdmin&&W(h),u())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],un(this.interruptReasons_)&&(this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(o=>Ot(o)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new I(e).toString();let i;if(this.listens.has(s)){const o=this.listens.get(s);i=o.get(t),o.delete(t),o.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tn&&(this.reconnectDelay_=Sn,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kn.replace(/\./g,"-")]=1,Yn()?e["framework.cordova"]=1:wi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ze.getInstance().currentlyOnline();return un(this.interruptReasons_)&&e}}Q.nextPersistentConnectionId_=0;Q.nextConnectionId_=0;/**
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
 */class v{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new v(e,t)}}/**
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
 */class st{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new v(Ce,e),i=new v(Ce,t);return this.compare(s,i)!==0}minPost(){return v.MIN}}/**
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
 */let He;class Es extends st{static get __EMPTY_NODE(){return He}static set __EMPTY_NODE(e){He=e}compare(e,t){return Se(e.name,t.name)}isDefinedOn(e){throw Oe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return v.MIN}maxPost(){return new v(ue,He)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new v(e,He)}toString(){return".key"}}const ye=new Es;/**
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
 */class Ve{constructor(e,t,s,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=t?s(e.key,t):1,i&&(r*=-1),r<0)this.isReverse_?e=e.left:e=e.right;else if(r===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class F{constructor(e,t,s,i,o){this.key=e,this.value=t,this.color=s!=null?s:F.RED,this.left=i!=null?i:B.EMPTY_NODE,this.right=o!=null?o:B.EMPTY_NODE}copy(e,t,s,i,o){return new F(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const o=s(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):o===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return B.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return B.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}F.RED=!0;F.BLACK=!1;class jl{copy(e,t,s,i,o){return this}insert(e,t,s){return new F(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class B{constructor(e,t=B.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new B(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new B(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ve(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ve(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ve(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ve(this.root_,null,this.comparator_,!0,e)}}B.EMPTY_NODE=new jl;/**
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
 */function Ql(n,e){return Se(n.name,e.name)}function $t(n,e){return Se(n,e)}/**
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
 */let St;function Xl(n){St=n}const Ss=function(n){return typeof n=="number"?"number:"+Jn(n):"string:"+n},Ts=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&J(e,".sv"),"Priority must be a string or number.")}else _(n===St||n.isEmpty(),"priority of unexpected type.");_(n===St||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let bn;class D{constructor(e,t=D.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ts(this.priorityNode_)}static set __childrenNodeConstructor(e){bn=e}static get __childrenNodeConstructor(){return bn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new D(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:g(e)===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:D.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=g(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||ee(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,D.__childrenNodeConstructor.EMPTY_NODE.updateChild(w(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ss(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Jn(this.value_):e+=this.value_,this.lazyHash_=jn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===D.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof D.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=D.VALUE_TYPE_ORDER.indexOf(t),o=D.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(o>=0,"Unknown leaf type: "+s),i===o?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}D.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bs,ws;function Jl(n){bs=n}function Zl(n){ws=n}class eu extends st{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),o=s.compareTo(i);return o===0?Se(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return v.MIN}maxPost(){return new v(ue,new D("[PRIORITY-POST]",ws))}makePost(e,t){const s=bs(e);return new v(t,new D("[PRIORITY-POST]",s))}toString(){return".priority"}}const L=new eu;/**
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
 */const tu=Math.log(2);class nu{constructor(e){const t=o=>parseInt(Math.log(o)/tu,10),s=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const je=function(n,e,t,s){n.sort(e);const i=function(u,a){const c=a-u;let h,f;if(c===0)return null;if(c===1)return h=n[u],f=t?t(h):h,new F(f,h.node,F.BLACK,null,null);{const p=parseInt(c/2,10)+u,m=i(u,p),N=i(p+1,a);return h=n[p],f=t?t(h):h,new F(f,h.node,F.BLACK,m,N)}},o=function(u){let a=null,c=null,h=n.length;const f=function(m,N){const U=h-m,at=h;h-=m;const qe=i(U+1,at),ct=n[U],ci=t?t(ct):ct;p(new F(ci,ct.node,N,null,qe))},p=function(m){a?(a.left=m,a=m):(c=m,a=m)};for(let m=0;m<u.count;++m){const N=u.nextBitIsOne(),U=Math.pow(2,u.count-(m+1));N?f(U,F.BLACK):(f(U,F.BLACK),f(U,F.RED))}return c},r=new nu(n.length),l=o(r);return new B(s||e,l)};/**
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
 */let _t;const pe={};class j{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(pe&&L,"ChildrenNode.ts has not been loaded"),_t=_t||new j({".priority":pe},{".priority":L}),_t}get(e){const t=ve(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof B?t:null}hasIndex(e){return J(this.indexSet_,e.toString())}addIndex(e,t){_(e!==ye,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const o=t.getIterator(v.Wrap);let r=o.getNext();for(;r;)i=i||e.isDefinedOn(r.node),s.push(r),r=o.getNext();let l;i?l=je(s,e.getCompare()):l=pe;const u=e.toString(),a=Object.assign({},this.indexSet_);a[u]=e;const c=Object.assign({},this.indexes_);return c[u]=l,new j(c,a)}addToIndexes(e,t){const s=Ye(this.indexes_,(i,o)=>{const r=ve(this.indexSet_,o);if(_(r,"Missing index implementation for "+o),i===pe)if(r.isDefinedOn(e.node)){const l=[],u=t.getIterator(v.Wrap);let a=u.getNext();for(;a;)a.name!==e.name&&l.push(a),a=u.getNext();return l.push(e),je(l,r.getCompare())}else return pe;else{const l=t.get(e.name);let u=i;return l&&(u=u.remove(new v(e.name,l))),u.insert(e,e.node)}});return new j(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ye(this.indexes_,i=>{if(i===pe)return i;{const o=t.get(e.name);return o?i.remove(new v(e.name,o)):i}});return new j(s,this.indexSet_)}}/**
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
 */let Ae;class E{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ts(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ae||(Ae=new E(new B($t),null,j.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ae}updatePriority(e){return this.children_.isEmpty()?this:new E(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ae:t}}getChild(e){const t=g(e);return t===null?this:this.getImmediateChild(t).getChild(w(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new v(e,t);let i,o;t.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(s,this.children_));const r=i.isEmpty()?Ae:this.priorityNode_;return new E(i,r,o)}}updateChild(e,t){const s=g(e);if(s===null)return t;{_(g(e)!==".priority"||ee(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(w(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,o=!0;if(this.forEachChild(L,(r,l)=>{t[r]=l.val(e),s++,o&&E.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):o=!1}),!e&&o&&i<2*s){const r=[];for(const l in t)r[l]=t[l];return r}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ss(this.getPriority().val())+":"),this.forEachChild(L,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":jn(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const o=i.getPredecessorKey(new v(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new v(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new v(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,v.Wrap);let o=i.peek();for(;o!=null&&t.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,v.Wrap);let o=i.peek();for(;o!=null&&t.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ue?-1:0}withIndex(e){if(e===ye||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new E(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ye||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(L),i=t.getIterator(L);let o=s.getNext(),r=i.getNext();for(;o&&r;){if(o.name!==r.name||!o.node.equals(r.node))return!1;o=s.getNext(),r=i.getNext()}return o===null&&r===null}else return!1;else return!1}}resolveIndex_(e){return e===ye?null:this.indexMap_.get(e.toString())}}E.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class su extends E{constructor(){super(new B($t),E.EMPTY_NODE,j.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return E.EMPTY_NODE}isEmpty(){return!1}}const Ue=new su;Object.defineProperties(v,{MIN:{value:new v(Ce,E.EMPTY_NODE)},MAX:{value:new v(ue,Ue)}});Es.__EMPTY_NODE=E.EMPTY_NODE;D.__childrenNodeConstructor=E;Xl(Ue);Zl(Ue);/**
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
 */const iu=!0;function M(n,e=null){if(n===null)return E.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new D(t,M(e))}if(!(n instanceof Array)&&iu){const t=[];let s=!1;if(q(n,(r,l)=>{if(r.substring(0,1)!=="."){const u=M(l);u.isEmpty()||(s=s||!u.getPriority().isEmpty(),t.push(new v(r,u)))}}),t.length===0)return E.EMPTY_NODE;const o=je(t,Ql,r=>r.name,$t);if(s){const r=je(t,L.getCompare());return new E(o,M(e),new j({".priority":r},{".priority":L}))}else return new E(o,M(e),j.Default)}else{let t=E.EMPTY_NODE;return q(n,(s,i)=>{if(J(n,s)&&s.substring(0,1)!=="."){const o=M(i);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(s,o))}}),t.updatePriority(M(e))}}Jl(M);/**
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
 */class ou extends st{constructor(e){super(),this.indexPath_=e,_(!y(e)&&g(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),o=s.compareTo(i);return o===0?Se(e.name,t.name):o}makePost(e,t){const s=M(e),i=E.EMPTY_NODE.updateChild(this.indexPath_,s);return new v(t,i)}maxPost(){const e=E.EMPTY_NODE.updateChild(this.indexPath_,Ue);return new v(ue,e)}toString(){return gs(this.indexPath_,0).join("/")}}/**
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
 */class ru extends st{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Se(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return v.MIN}maxPost(){return v.MAX}makePost(e,t){const s=M(e);return new v(t,s)}toString(){return".value"}}const lu=new ru;/**
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
 */const wn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uu=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=wn.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let r=o.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)r+=wn.charAt(e[i]);return _(r.length===20,"nextPushId: Length should be 20."),r}}();/**
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
 */function au(n){return{type:"value",snapshotNode:n}}function cu(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function hu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function In(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function du(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class qt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=L}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ce}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ue}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L}copy(){const e=new qt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(n){const e={};if(n.isDefault())return e;let t;return n.index_===L?t="$priority":n.index_===lu?t="$value":n.index_===ye?t="$key":(_(n.index_ instanceof ou,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=P(t),n.startSet_&&(e.startAt=P(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+P(n.indexStartName_))),n.endSet_&&(e.endAt=P(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+P(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Rn(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==L&&(e.i=n.index_.toString()),e}/**
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
 */class Qe extends _s{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=We("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const r=Qe.getListenId_(e,s),l={};this.listens_[r]=l;const u=An(e._queryParams);this.restRequest_(o+".json",u,(a,c)=>{let h=c;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(o,h,!1,s),ve(this.listens_,r)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,t){const s=Qe.getListenId_(e,t);delete this.listens_[s]}get(e){const t=An(e._queryParams),s=e._path.toString(),i=new Pt;return this.restRequest_(s+".json",t,(o,r)=>{let l=r;o===404&&(l=null,o=null),o===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(t.auth=i.accessToken),o&&o.token&&(t.ac=o.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(t);this.log_("Sending REST request for "+r);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+r+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=xt(l.responseText)}catch{W("Failed to parse JSON response for "+r+": "+l.responseText)}s(null,u)}else l.status!==401&&l.status!==404&&W("Got unsuccessful REST response for "+r+" Status: "+l.status),s(l.status);s=null}},l.open("GET",r,!0),l.send()})}}/**
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
 */class fu{constructor(){this.rootNode_=E.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Xe(){return{value:null,children:new Map}}function Is(n,e,t){if(y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=g(e);n.children.has(s)||n.children.set(s,Xe());const i=n.children.get(s);e=w(e),Is(i,e,t)}}function Tt(n,e,t){n.value!==null?t(e,n.value):_u(n,(s,i)=>{const o=new I(e.toString()+"/"+s);Tt(i,o,t)})}function _u(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class pu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Nn=10*1e3,mu=30*1e3,gu=5*60*1e3;class yu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pu(e);const s=Nn+(mu-Nn)*Math.random();Ne(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;q(e,(i,o)=>{o>0&&J(this.statsToReport_,i)&&(t[i]=o,s=!0)}),s&&this.server_.reportStats(t),Ne(this.reportStats_.bind(this),Math.floor(Math.random()*2*gu))}}/**
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
 */var Y;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Y||(Y={}));function As(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ns(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Je{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Y.ACK_USER_WRITE,this.source=As()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new I(e));return new Je(S(),t,this.revert)}}else return _(g(this.path)===e,"operationForChild called for unrelated child."),new Je(w(this.path),this.affectedTree,this.revert)}}/**
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
 */class ae{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Y.OVERWRITE}operationForChild(e){return y(this.path)?new ae(this.source,S(),this.snap.getImmediateChild(e)):new ae(this.source,w(this.path),this.snap)}}/**
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
 */class Pe{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Y.MERGE}operationForChild(e){if(y(this.path)){const t=this.children.subtree(new I(e));return t.isEmpty()?null:t.value?new ae(this.source,S(),t.value):new Pe(this.source,S(),t)}else return _(g(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pe(this.source,w(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ht{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const t=g(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function vu(n,e,t,s){const i=[],o=[];return e.forEach(r=>{r.type==="child_changed"&&n.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)&&o.push(du(r.childName,r.snapshotNode))}),Re(n,i,"child_removed",e,s,t),Re(n,i,"child_added",e,s,t),Re(n,i,"child_moved",o,s,t),Re(n,i,"child_changed",e,s,t),Re(n,i,"value",e,s,t),i}function Re(n,e,t,s,i,o){const r=s.filter(l=>l.type===t);r.sort((l,u)=>Eu(n,l,u)),r.forEach(l=>{const u=Cu(n,l,o);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(u,n.query_))})})}function Cu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Eu(n,e,t){if(e.childName==null||t.childName==null)throw Oe("Should only compare child_ events.");const s=new v(e.childName,e.snapshotNode),i=new v(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function ks(n,e){return{eventCache:n,serverCache:e}}function ke(n,e,t,s){return ks(new Ht(e,t,s),n.serverCache)}function Ds(n,e,t,s){return ks(n.eventCache,new Ht(e,t,s))}function bt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ce(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let pt;const Su=()=>(pt||(pt=new B(rl)),pt);class b{constructor(e,t=Su()){this.value=e,this.children=t}static fromObject(e){let t=new b(null);return q(e,(s,i)=>{t=t.set(new I(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:S(),value:this.value};if(y(e))return null;{const s=g(e),i=this.children.get(s);if(i!==null){const o=i.findRootMostMatchingPathAndValue(w(e),t);return o!=null?{path:k(new I(s),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const t=g(e),s=this.children.get(t);return s!==null?s.subtree(w(e)):new b(null)}}set(e,t){if(y(e))return new b(t,this.children);{const s=g(e),o=(this.children.get(s)||new b(null)).set(w(e),t),r=this.children.insert(s,o);return new b(this.value,r)}}remove(e){if(y(e))return this.children.isEmpty()?new b(null):new b(null,this.children);{const t=g(e),s=this.children.get(t);if(s){const i=s.remove(w(e));let o;return i.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,i),this.value===null&&o.isEmpty()?new b(null):new b(this.value,o)}else return this}}get(e){if(y(e))return this.value;{const t=g(e),s=this.children.get(t);return s?s.get(w(e)):null}}setTree(e,t){if(y(e))return t;{const s=g(e),o=(this.children.get(s)||new b(null)).setTree(w(e),t);let r;return o.isEmpty()?r=this.children.remove(s):r=this.children.insert(s,o),new b(this.value,r)}}fold(e){return this.fold_(S(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,o)=>{s[i]=o.fold_(k(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,S(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(y(e))return null;{const o=g(e),r=this.children.get(o);return r?r.findOnPath_(w(e),k(t,o),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,S(),t)}foreachOnPath_(e,t,s){if(y(e))return this;{this.value&&s(t,this.value);const i=g(e),o=this.children.get(i);return o?o.foreachOnPath_(w(e),k(t,i),s):new b(null)}}foreach(e){this.foreach_(S(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(k(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class G{constructor(e){this.writeTree_=e}static empty(){return new G(new b(null))}}function De(n,e,t){if(y(e))return new G(new b(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let o=s.value;const r=$(i,e);return o=o.updateChild(r,t),new G(n.writeTree_.set(i,o))}else{const i=new b(t),o=n.writeTree_.setTree(e,i);return new G(o)}}}function kn(n,e,t){let s=n;return q(t,(i,o)=>{s=De(s,k(e,i),o)}),s}function Dn(n,e){if(y(e))return G.empty();{const t=n.writeTree_.setTree(e,new b(null));return new G(t)}}function wt(n,e){return de(n,e)!=null}function de(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild($(t.path,e)):null}function Fn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(L,(s,i)=>{e.push(new v(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new v(s,i.value))}),e}function Z(n,e){if(y(e))return n;{const t=de(n,e);return t!=null?new G(new b(t)):new G(n.writeTree_.subtree(e))}}function It(n){return n.writeTree_.isEmpty()}function Ee(n,e){return Fs(S(),n.writeTree_,e)}function Fs(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(_(o.value!==null,"Priority writes must always be leaf nodes"),s=o.value):t=Fs(k(n,i),o,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(k(n,".priority"),s)),t}}/**
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
 */function xs(n,e){return Bs(e,n)}function Tu(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=De(n.visibleWrites,e,t)),n.lastWriteId=s}function bu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wu(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,o=!1,r=n.allWrites.length-1;for(;i&&r>=0;){const l=n.allWrites[r];l.visible&&(r>=t&&Iu(l,s.path)?i=!1:V(s.path,l.path)&&(o=!0)),r--}if(i){if(o)return Au(n),!0;if(s.snap)n.visibleWrites=Dn(n.visibleWrites,s.path);else{const l=s.children;q(l,u=>{n.visibleWrites=Dn(n.visibleWrites,k(s.path,u))})}return!0}else return!1}function Iu(n,e){if(n.snap)return V(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&V(k(n.path,t),e))return!0;return!1}function Au(n){n.visibleWrites=Ms(n.allWrites,Ru,S()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ru(n){return n.visible}function Ms(n,e,t){let s=G.empty();for(let i=0;i<n.length;++i){const o=n[i];if(e(o)){const r=o.path;let l;if(o.snap)V(t,r)?(l=$(t,r),s=De(s,l,o.snap)):V(r,t)&&(l=$(r,t),s=De(s,S(),o.snap.getChild(l)));else if(o.children){if(V(t,r))l=$(t,r),s=kn(s,l,o.children);else if(V(r,t))if(l=$(r,t),y(l))s=kn(s,S(),o.children);else{const u=ve(o.children,g(l));if(u){const a=u.getChild(w(l));s=De(s,S(),a)}}}else throw Oe("WriteRecord should have .snap or .children")}}return s}function Ps(n,e,t,s,i){if(!s&&!i){const o=de(n.visibleWrites,e);if(o!=null)return o;{const r=Z(n.visibleWrites,e);if(It(r))return t;if(t==null&&!wt(r,S()))return null;{const l=t||E.EMPTY_NODE;return Ee(r,l)}}}else{const o=Z(n.visibleWrites,e);if(!i&&It(o))return t;if(!i&&t==null&&!wt(o,S()))return null;{const r=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(V(a.path,e)||V(e,a.path))},l=Ms(n.allWrites,r,e),u=t||E.EMPTY_NODE;return Ee(l,u)}}}function Nu(n,e,t){let s=E.EMPTY_NODE;const i=de(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(L,(o,r)=>{s=s.updateImmediateChild(o,r)}),s;if(t){const o=Z(n.visibleWrites,e);return t.forEachChild(L,(r,l)=>{const u=Ee(Z(o,new I(r)),l);s=s.updateImmediateChild(r,u)}),Fn(o).forEach(r=>{s=s.updateImmediateChild(r.name,r.node)}),s}else{const o=Z(n.visibleWrites,e);return Fn(o).forEach(r=>{s=s.updateImmediateChild(r.name,r.node)}),s}}function ku(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const o=k(e,t);if(wt(n.visibleWrites,o))return null;{const r=Z(n.visibleWrites,o);return It(r)?i.getChild(t):Ee(r,i.getChild(t))}}function Du(n,e,t,s){const i=k(e,t),o=de(n.visibleWrites,i);if(o!=null)return o;if(s.isCompleteForChild(t)){const r=Z(n.visibleWrites,i);return Ee(r,s.getNode().getImmediateChild(t))}else return null}function Fu(n,e){return de(n.visibleWrites,e)}function xu(n,e,t,s,i,o,r){let l;const u=Z(n.visibleWrites,e),a=de(u,S());if(a!=null)l=a;else if(t!=null)l=Ee(u,t);else return[];if(l=l.withIndex(r),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=r.getCompare(),f=o?l.getReverseIteratorFrom(s,r):l.getIteratorFrom(s,r);let p=f.getNext();for(;p&&c.length<i;)h(p,s)!==0&&c.push(p),p=f.getNext();return c}else return[]}function Mu(){return{visibleWrites:G.empty(),allWrites:[],lastWriteId:-1}}function At(n,e,t,s){return Ps(n.writeTree,n.treePath,e,t,s)}function Os(n,e){return Nu(n.writeTree,n.treePath,e)}function xn(n,e,t,s){return ku(n.writeTree,n.treePath,e,t,s)}function Ze(n,e){return Fu(n.writeTree,k(n.treePath,e))}function Pu(n,e,t,s,i,o){return xu(n.writeTree,n.treePath,e,t,s,i,o)}function Vt(n,e,t){return Du(n.writeTree,n.treePath,e,t)}function Ls(n,e){return Bs(k(n.treePath,e),n.writeTree)}function Bs(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Ou{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const o=i.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(s,In(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(s,hu(s,i.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(s,cu(s,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(s,In(s,e.snapshotNode,i.oldSnap));else throw Oe("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Lu{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ws=new Lu;class Gt{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vt(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ce(this.viewCache_),o=Pu(this.writes_,i,t,1,s,e);return o.length===0?null:o[0]}}function Bu(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Wu(n,e,t,s,i){const o=new Ou;let r,l;if(t.type===Y.OVERWRITE){const a=t;a.source.fromUser?r=Rt(n,e,a.path,a.snap,s,i,o):(_(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!y(a.path),r=et(n,e,a.path,a.snap,s,i,l,o))}else if(t.type===Y.MERGE){const a=t;a.source.fromUser?r=$u(n,e,a.path,a.children,s,i,o):(_(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),r=Nt(n,e,a.path,a.children,s,i,l,o))}else if(t.type===Y.ACK_USER_WRITE){const a=t;a.revert?r=Vu(n,e,a.path,s,i,o):r=qu(n,e,a.path,a.affectedTree,s,i,o)}else if(t.type===Y.LISTEN_COMPLETE)r=Hu(n,e,t.path,s,o);else throw Oe("Unknown operation type: "+t.type);const u=o.getChanges();return Uu(e,r,u),{viewCache:r,changes:u}}function Uu(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),o=bt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(o)||!s.getNode().getPriority().equals(o.getPriority()))&&t.push(au(bt(e)))}}function Us(n,e,t,s,i,o){const r=e.eventCache;if(Ze(s,t)!=null)return e;{let l,u;if(y(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=ce(e),c=a instanceof E?a:E.EMPTY_NODE,h=Os(s,c);l=n.filter.updateFullNode(e.eventCache.getNode(),h,o)}else{const a=At(s,ce(e));l=n.filter.updateFullNode(e.eventCache.getNode(),a,o)}else{const a=g(t);if(a===".priority"){_(ee(t)===1,"Can't have a priority with additional path components");const c=r.getNode();u=e.serverCache.getNode();const h=xn(s,t,c,u);h!=null?l=n.filter.updatePriority(c,h):l=r.getNode()}else{const c=w(t);let h;if(r.isCompleteForChild(a)){u=e.serverCache.getNode();const f=xn(s,t,r.getNode(),u);f!=null?h=r.getNode().getImmediateChild(a).updateChild(c,f):h=r.getNode().getImmediateChild(a)}else h=Vt(s,a,e.serverCache);h!=null?l=n.filter.updateChild(r.getNode(),a,h,c,i,o):l=r.getNode()}}return ke(e,l,r.isFullyInitialized()||y(t),n.filter.filtersNodes())}}function et(n,e,t,s,i,o,r,l){const u=e.serverCache;let a;const c=r?n.filter:n.filter.getIndexedFilter();if(y(t))a=c.updateFullNode(u.getNode(),s,null);else if(c.filtersNodes()&&!u.isFiltered()){const p=u.getNode().updateChild(t,s);a=c.updateFullNode(u.getNode(),p,null)}else{const p=g(t);if(!u.isCompleteForPath(t)&&ee(t)>1)return e;const m=w(t),U=u.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?a=c.updatePriority(u.getNode(),U):a=c.updateChild(u.getNode(),p,U,m,Ws,null)}const h=Ds(e,a,u.isFullyInitialized()||y(t),c.filtersNodes()),f=new Gt(i,h,o);return Us(n,h,t,i,f,l)}function Rt(n,e,t,s,i,o,r){const l=e.eventCache;let u,a;const c=new Gt(i,e,o);if(y(t))a=n.filter.updateFullNode(e.eventCache.getNode(),s,r),u=ke(e,a,!0,n.filter.filtersNodes());else{const h=g(t);if(h===".priority")a=n.filter.updatePriority(e.eventCache.getNode(),s),u=ke(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=w(t),p=l.getNode().getImmediateChild(h);let m;if(y(f))m=s;else{const N=c.getCompleteChild(h);N!=null?ms(f)===".priority"&&N.getChild(ys(f)).isEmpty()?m=N:m=N.updateChild(f,s):m=E.EMPTY_NODE}if(p.equals(m))u=e;else{const N=n.filter.updateChild(l.getNode(),h,m,f,c,r);u=ke(e,N,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function Mn(n,e){return n.eventCache.isCompleteForChild(e)}function $u(n,e,t,s,i,o,r){let l=e;return s.foreach((u,a)=>{const c=k(t,u);Mn(e,g(c))&&(l=Rt(n,l,c,a,i,o,r))}),s.foreach((u,a)=>{const c=k(t,u);Mn(e,g(c))||(l=Rt(n,l,c,a,i,o,r))}),l}function Pn(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nt(n,e,t,s,i,o,r,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,a;y(t)?a=s:a=new b(null).setTree(t,s);const c=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Pn(n,p,f);u=et(n,u,new I(h),m,i,o,r,l)}}),a.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!c.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),N=Pn(n,m,f);u=et(n,u,new I(h),N,i,o,r,l)}}),u}function qu(n,e,t,s,i,o,r){if(Ze(i,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(s.value!=null){if(y(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return et(n,e,t,u.getNode().getChild(t),i,o,l,r);if(y(t)){let a=new b(null);return u.getNode().forEachChild(ye,(c,h)=>{a=a.set(new I(c),h)}),Nt(n,e,t,a,i,o,l,r)}else return e}else{let a=new b(null);return s.foreach((c,h)=>{const f=k(t,c);u.isCompleteForPath(f)&&(a=a.set(c,u.getNode().getChild(f)))}),Nt(n,e,t,a,i,o,l,r)}}function Hu(n,e,t,s,i){const o=e.serverCache,r=Ds(e,o.getNode(),o.isFullyInitialized()||y(t),o.isFiltered());return Us(n,r,t,s,Ws,i)}function Vu(n,e,t,s,i,o){let r;if(Ze(s,t)!=null)return e;{const l=new Gt(s,e,i),u=e.eventCache.getNode();let a;if(y(t)||g(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=At(s,ce(e));else{const h=e.serverCache.getNode();_(h instanceof E,"serverChildren would be complete if leaf node"),c=Os(s,h)}c=c,a=n.filter.updateFullNode(u,c,o)}else{const c=g(t);let h=Vt(s,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=u.getImmediateChild(c)),h!=null?a=n.filter.updateChild(u,c,h,w(t),l,o):e.eventCache.getNode().hasChild(c)?a=n.filter.updateChild(u,c,E.EMPTY_NODE,w(t),l,o):a=u,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=At(s,ce(e)),r.isLeafNode()&&(a=n.filter.updateFullNode(a,r,o)))}return r=e.serverCache.isFullyInitialized()||Ze(s,S())!=null,ke(e,a,r,n.filter.filtersNodes())}}function Gu(n,e){const t=ce(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!y(e)&&!t.getImmediateChild(g(e)).isEmpty())?t.getChild(e):null}function On(n,e,t,s){e.type===Y.MERGE&&e.source.queryId!==null&&(_(ce(n.viewCache_),"We should always have a full cache before handling merges"),_(bt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,o=Wu(n.processor_,i,e,t,s);return Bu(n.processor_,o.viewCache),_(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Yu(n,o.changes,o.viewCache.eventCache.getNode(),null)}function Yu(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return vu(n.eventGenerator_,e,t,i)}/**
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
 */let Ln;function Ku(n){_(!Ln,"__referenceConstructor has already been defined"),Ln=n}function Yt(n,e,t,s){const i=e.source.queryId;if(i!==null){const o=n.views.get(i);return _(o!=null,"SyncTree gave us an op for an invalid query."),On(o,e,t,s)}else{let o=[];for(const r of n.views.values())o=o.concat(On(r,e,t,s));return o}}function Kt(n,e){let t=null;for(const s of n.views.values())t=t||Gu(s,e);return t}/**
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
 */let Bn;function zu(n){_(!Bn,"__referenceConstructor has already been defined"),Bn=n}class Wn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new b(null),this.pendingWriteTree_=Mu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $s(n,e,t,s,i){return Tu(n.pendingWriteTree_,e,t,s,i),i?ot(n,new ae(As(),e,t)):[]}function ie(n,e,t=!1){const s=bu(n.pendingWriteTree_,e);if(wu(n.pendingWriteTree_,e)){let o=new b(null);return s.snap!=null?o=o.set(S(),!0):q(s.children,r=>{o=o.set(new I(r),!0)}),ot(n,new Je(s.path,o,t))}else return[]}function it(n,e,t){return ot(n,new ae(Rs(),e,t))}function ju(n,e,t){const s=b.fromObject(t);return ot(n,new Pe(Rs(),e,s))}function Qu(n,e,t,s){const i=Vs(n,s);if(i!=null){const o=Gs(i),r=o.path,l=o.queryId,u=$(r,e),a=new ae(Ns(l),u,t);return Ys(n,r,a)}else return[]}function Xu(n,e,t,s){const i=Vs(n,s);if(i){const o=Gs(i),r=o.path,l=o.queryId,u=$(r,e),a=b.fromObject(t),c=new Pe(Ns(l),u,a);return Ys(n,r,c)}else return[]}function zt(n,e,t){const i=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(r,l)=>{const u=$(r,e),a=Kt(l,u);if(a)return a});return Ps(i,e,o,t,!0)}function ot(n,e){return qs(e,n.syncPointTree_,null,xs(n.pendingWriteTree_,S()))}function qs(n,e,t,s){if(y(n.path))return Hs(n,e,t,s);{const i=e.get(S());t==null&&i!=null&&(t=Kt(i,S()));let o=[];const r=g(n.path),l=n.operationForChild(r),u=e.children.get(r);if(u&&l){const a=t?t.getImmediateChild(r):null,c=Ls(s,r);o=o.concat(qs(l,u,a,c))}return i&&(o=o.concat(Yt(i,n,s,t))),o}}function Hs(n,e,t,s){const i=e.get(S());t==null&&i!=null&&(t=Kt(i,S()));let o=[];return e.children.inorderTraversal((r,l)=>{const u=t?t.getImmediateChild(r):null,a=Ls(s,r),c=n.operationForChild(r);c&&(o=o.concat(Hs(c,l,u,a)))}),i&&(o=o.concat(Yt(i,n,s,t))),o}function Vs(n,e){return n.tagToQueryMap.get(e)}function Gs(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new I(n.substr(0,e))}}function Ys(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=xs(n.pendingWriteTree_,e);return Yt(s,t,i,null)}/**
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
 */class jt{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new jt(t)}node(){return this.node_}}class Qt{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=k(this.path_,e);return new Qt(this.syncTree_,t)}node(){return zt(this.syncTree_,this.path_)}}const Ju=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Un=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Zu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ea(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Zu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},ea=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const r=i.getValue();return typeof r!="number"?s:r+s},ta=function(n,e,t,s){return Xt(e,new Qt(t,n),s)},Ks=function(n,e,t){return Xt(n,new jt(e),t)};function Xt(n,e,t){const s=n.getPriority().val(),i=Un(s,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const r=n,l=Un(r.getValue(),e,t);return l!==r.getValue()||i!==r.getPriority().val()?new D(l,M(i)):n}else{const r=n;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new D(i))),r.forEachChild(L,(l,u)=>{const a=Xt(u,e.getImmediateChild(l),t);a!==u&&(o=o.updateImmediateChild(l,a))}),o}}/**
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
 */class Jt{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Zt(n,e){let t=e instanceof I?e:new I(e),s=n,i=g(t);for(;i!==null;){const o=ve(s.node.children,i)||{children:{},childCount:0};s=new Jt(i,s,o),t=w(t),i=g(t)}return s}function be(n){return n.node.value}function zs(n,e){n.node.value=e,kt(n)}function js(n){return n.node.childCount>0}function na(n){return be(n)===void 0&&!js(n)}function rt(n,e){q(n.node.children,(t,s)=>{e(new Jt(t,n,s))})}function Qs(n,e,t,s){t&&!s&&e(n),rt(n,i=>{Qs(i,e,!0,s)}),t&&s&&e(n)}function sa(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $e(n){return new I(n.parent===null?n.name:$e(n.parent)+"/"+n.name)}function kt(n){n.parent!==null&&ia(n.parent,n.name,n)}function ia(n,e,t){const s=na(t),i=J(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,kt(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,kt(n))}/**
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
 */const oa=/[\[\].#$\/\u0000-\u001F\u007F]/,ra=/[\[\].#$\u0000-\u001F\u007F]/,mt=10*1024*1024,Xs=function(n){return typeof n=="string"&&n.length!==0&&!oa.test(n)},Js=function(n){return typeof n=="string"&&n.length!==0&&!ra.test(n)},la=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Js(n)},Zs=function(n,e,t,s){s&&e===void 0||en(Mt(n,"value"),e,t)},en=function(n,e,t){const s=t instanceof I?new ql(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+te(s));if(typeof e=="function")throw new Error(n+"contains a function "+te(s)+" with contents = "+e.toString());if(Qn(e))throw new Error(n+"contains "+e.toString()+" "+te(s));if(typeof e=="string"&&e.length>mt/3&&nt(e)>mt)throw new Error(n+"contains a string greater than "+mt+" utf8 bytes "+te(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(q(e,(r,l)=>{if(r===".value")i=!0;else if(r!==".priority"&&r!==".sv"&&(o=!0,!Xs(r)))throw new Error(n+" contains an invalid key ("+r+") "+te(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hl(s,r),en(n,l,s),Vl(s)}),i&&o)throw new Error(n+' contains ".value" child '+te(s)+" in addition to actual children.")}},ei=function(n,e,t,s){if(!(s&&t===void 0)&&!Js(t))throw new Error(Mt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ua=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ei(n,e,t,s)},ti=function(n,e){if(g(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},aa=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!la(t))throw new Error(Mt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ca{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ni(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],o=i.getPath();t!==null&&!vs(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(i)}t&&n.eventLists_.push(t)}function X(n,e,t){ni(n,t),ha(n,s=>V(s,e)||V(e,s))}function ha(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const o=i.path;e(o)?(da(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function da(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();oe&&O("event: "+t.toString()),Te(s)}}}/**
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
 */const fa="repo_interrupt",_a=25;class pa{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ca,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xe(),this.transactionQueueTree_=new Jt,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ma(n,e,t){if(n.stats_=Bt(n.repoInfo_),n.forceRestClient_||dl())n.server_=new Qe(n.repoInfo_,(s,i,o,r)=>{$n(n,s,i,o,r)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>qn(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Q(n.repoInfo_,e,(s,i,o,r)=>{$n(n,s,i,o,r)},s=>{qn(n,s)},s=>{ga(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=yl(n.repoInfo_,()=>new yu(n.stats_,n.server_)),n.infoData_=new fu,n.infoSyncTree_=new Wn({startListening:(s,i,o,r)=>{let l=[];const u=n.infoData_.getNode(s._path);return u.isEmpty()||(l=it(n.infoSyncTree_,s._path,u),setTimeout(()=>{r("ok")},0)),l},stopListening:()=>{}}),nn(n,"connected",!1),n.serverSyncTree_=new Wn({startListening:(s,i,o,r)=>(n.server_.listen(s,o,i,(l,u)=>{const a=r(l,u);X(n.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function si(n){const t=n.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function tn(n){return Ju({timestamp:si(n)})}function $n(n,e,t,s,i){n.dataUpdateCount++;const o=new I(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let r=[];if(i)if(s){const u=Ye(t,a=>M(a));r=Xu(n.serverSyncTree_,o,u,i)}else{const u=M(t);r=Qu(n.serverSyncTree_,o,u,i)}else if(s){const u=Ye(t,a=>M(a));r=ju(n.serverSyncTree_,o,u)}else{const u=M(t);r=it(n.serverSyncTree_,o,u)}let l=o;r.length>0&&(l=lt(n,o)),X(n.eventQueue_,l,r)}function qn(n,e){nn(n,"connected",e),e===!1&&va(n)}function ga(n,e){q(e,(t,s)=>{nn(n,t,s)})}function nn(n,e,t){const s=new I("/.info/"+e),i=M(t);n.infoData_.updateSnapshot(s,i);const o=it(n.infoSyncTree_,s,i);X(n.eventQueue_,s,o)}function ii(n){return n.nextWriteId_++}function ya(n,e,t,s,i){sn(n,"set",{path:e.toString(),value:t,priority:s});const o=tn(n),r=M(t,s),l=zt(n.serverSyncTree_,e),u=Ks(r,l,o),a=ii(n),c=$s(n.serverSyncTree_,e,u,a,!0);ni(n.eventQueue_,c),n.server_.put(e.toString(),r.val(!0),(f,p)=>{const m=f==="ok";m||W("set at "+e+" failed: "+f);const N=ie(n.serverSyncTree_,a,!m);X(n.eventQueue_,e,N),Ea(n,i,f,p)});const h=ai(n,e);lt(n,h),X(n.eventQueue_,h,[])}function va(n){sn(n,"onDisconnectEvents");const e=tn(n),t=Xe();Tt(n.onDisconnect_,S(),(i,o)=>{const r=ta(i,o,n.serverSyncTree_,e);Is(t,i,r)});let s=[];Tt(t,S(),(i,o)=>{s=s.concat(it(n.serverSyncTree_,i,o));const r=ai(n,i);lt(n,r)}),n.onDisconnect_=Xe(),X(n.eventQueue_,S(),s)}function Ca(n){n.persistentConnection_&&n.persistentConnection_.interrupt(fa)}function sn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),O(t,...e)}function Ea(n,e,t,s){e&&Te(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let o=i;s&&(o+=": "+s);const r=new Error(o);r.code=i,e(r)}})}function oi(n,e,t){return zt(n.serverSyncTree_,e,t)||E.EMPTY_NODE}function on(n,e=n.transactionQueueTree_){if(e||ut(n,e),be(e)){const t=li(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Sa(n,$e(e),t)}else js(e)&&rt(e,t=>{on(n,t)})}function Sa(n,e,t){const s=t.map(a=>a.currentWriteId),i=oi(n,e,s);let o=i;const r=i.hash();for(let a=0;a<t.length;a++){const c=t[a];_(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=$(e,c.path);o=o.updateChild(h,c.currentOutputSnapshotRaw)}const l=o.val(!0),u=e;n.server_.put(u.toString(),l,a=>{sn(n,"transaction put response",{path:u.toString(),status:a});let c=[];if(a==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,c=c.concat(ie(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();ut(n,Zt(n.transactionQueueTree_,e)),on(n,n.transactionQueueTree_),X(n.eventQueue_,e,c);for(let f=0;f<h.length;f++)Te(h[f])}else{if(a==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{W("transaction at "+u.toString()+" failed: "+a);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=a}lt(n,e)}},r)}function lt(n,e){const t=ri(n,e),s=$e(t),i=li(n,t);return Ta(n,i,s),s}function Ta(n,e,t){if(e.length===0)return;const s=[];let i=[];const r=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],a=$(t,u.path);let c=!1,h;if(_(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)c=!0,h=u.abortReason,i=i.concat(ie(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=_a)c=!0,h="maxretry",i=i.concat(ie(n.serverSyncTree_,u.currentWriteId,!0));else{const f=oi(n,u.path,r);u.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){en("transaction failed: Data returned ",p,u.path);let m=M(p);typeof p=="object"&&p!=null&&J(p,".priority")||(m=m.updatePriority(f.getPriority()));const U=u.currentWriteId,at=tn(n),qe=Ks(m,f,at);u.currentOutputSnapshotRaw=m,u.currentOutputSnapshotResolved=qe,u.currentWriteId=ii(n),r.splice(r.indexOf(U),1),i=i.concat($s(n.serverSyncTree_,u.path,qe,u.currentWriteId,u.applyLocally)),i=i.concat(ie(n.serverSyncTree_,U,!0))}else c=!0,h="nodata",i=i.concat(ie(n.serverSyncTree_,u.currentWriteId,!0))}X(n.eventQueue_,t,i),i=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ut(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Te(s[l]);on(n,n.transactionQueueTree_)}function ri(n,e){let t,s=n.transactionQueueTree_;for(t=g(e);t!==null&&be(s)===void 0;)s=Zt(s,t),e=w(e),t=g(e);return s}function li(n,e){const t=[];return ui(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ui(n,e,t){const s=be(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);rt(e,i=>{ui(n,i,t)})}function ut(n,e){const t=be(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,zs(e,t.length>0?t:void 0)}rt(e,s=>{ut(n,s)})}function ai(n,e){const t=$e(ri(n,e)),s=Zt(n.transactionQueueTree_,e);return sa(s,i=>{gt(n,i)}),gt(n,s),Qs(s,i=>{gt(n,i)}),t}function gt(n,e){const t=be(e);if(t){const s=[];let i=[],o=-1;for(let r=0;r<t.length;r++)t[r].status===3||(t[r].status===1?(_(o===r-1,"All SENT items should be at beginning of queue."),o=r,t[r].status=3,t[r].abortReason="set"):(_(t[r].status===0,"Unexpected transaction status in abort"),t[r].unwatcher(),i=i.concat(ie(n.serverSyncTree_,t[r].currentWriteId,!0)),t[r].onComplete&&s.push(t[r].onComplete.bind(null,new Error("set"),!1,null))));o===-1?zs(e,void 0):t.length=o+1,X(n.eventQueue_,$e(e),i);for(let r=0;r<s.length;r++)Te(s[r])}}/**
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
 */function ba(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wa(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):W(`Invalid query segment '${t}' in query '${n}'`)}return e}const Hn=function(n,e){const t=Ia(n),s=t.namespace;t.domain==="firebase.com"&&le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||il();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new pl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new I(t.pathString)}},Ia=function(n){let e="",t="",s="",i="",o="",r=!0,l="https",u=443;if(typeof n=="string"){let a=n.indexOf("//");a>=0&&(l=n.substring(0,a-1),n=n.substring(a+2));let c=n.indexOf("/");c===-1&&(c=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(c,h)),c<h&&(i=ba(n.substring(c,h)));const f=wa(n.substring(Math.min(n.length,h)));a=e.indexOf(":"),a>=0?(r=l==="https"||l==="wss",u=parseInt(e.substring(a+1),10)):a=e.length;const p=e.slice(0,a);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),o=s}"ns"in f&&(o=f.ns)}return{host:e,port:u,domain:t,subdomain:s,secure:r,scheme:l,pathString:i,namespace:o}};/**
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
 */class rn{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return y(this._path)?null:ms(this._path)}get ref(){return new fe(this._repo,this._path)}get _queryIdentifier(){const e=Rn(this._queryParams),t=Ot(e);return t==="{}"?"default":t}get _queryObject(){return Rn(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof rn))return!1;const t=this._repo===e._repo,s=vs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$l(this._path)}}class fe extends rn{constructor(e,t){super(e,t,new qt,!1)}get parent(){const e=ys(this._path);return e===null?null:new fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Aa(n,e){return n=Le(n),n._checkNotDeleted("ref"),e!==void 0?Dt(n._root,e):n._root}function Dt(n,e){return n=Le(n),g(n._path)===null?ua("child","path",e,!1):ei("child","path",e,!1),new fe(n._repo,k(n._path,e))}function Ra(n,e){n=Le(n),ti("push",n._path),Zs("push",e,n._path,!0);const t=si(n._repo),s=uu(t),i=Dt(n,s),o=Dt(n,s);let r;return e!=null?r=Na(o,e).then(()=>o):r=Promise.resolve(o),i.then=r.then.bind(r),i.catch=r.then.bind(r,void 0),i}function Na(n,e){n=Le(n),ti("set",n._path),Zs("set",e,n._path,!1);const t=new Pt;return ya(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}Ku(fe);zu(fe);/**
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
 */const ka="FIREBASE_DATABASE_EMULATOR_HOST",Ft={};let Da=!1;function Fa(n,e,t,s,i){let o=s||n.options.databaseURL;o===void 0&&(n.options.projectId||le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let r=Hn(o,i),l=r.repoInfo,u,a;typeof process!="undefined"&&process.env&&(a=process.env[ka]),a?(u=!0,o=`http://${a}?ns=${l.namespace}`,r=Hn(o,i),l=r.repoInfo):u=!r.repoInfo.secure;const c=i&&u?new Ct(Ct.OWNER):new _l(n.name,n.options,e);aa("Invalid Firebase Database URL",r),y(r.path)||le("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ma(l,n,c,new fl(n.name,t));return new Pa(h,n)}function xa(n,e){const t=Ft[e];(!t||t[n.key]!==n)&&le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ca(n),delete t[n.key]}function Ma(n,e,t,s){let i=Ft[e.name];i||(i={},Ft[e.name]=i);let o=i[n.toURLString()];return o&&le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new pa(n,Da,t,s),i[n.toURLString()]=o,o}class Pa{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ma(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fe(this._repo,S())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&le("Cannot call "+e+" on a deleted database.")}}function Oa(n=Ni(),e){return Ai(n,"database").getImmediate({identifier:e})}/**
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
 */function La(n){Zr(ki),gi(new yi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Fa(s,i,o,t)},"PUBLIC").setMultipleInstances(!0)),ln(an,cn,n),ln(an,cn,"esm2017")}Q.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Q.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};La();const Ba=he({__name:"EndPage",props:{jsondata:null},setup(n){const e=n;function t(s){const i=Oa();Ra(Aa(i,"register/"),{jsondata:s})}return t(e.jsondata),(s,i)=>" \u9810\u8A08\u770B\u8A3A\u65E5\u671F\u70BA\u25CB\u5E74\u3007\u6708\u3007\u65E5\uFF0C\u7D93\u7CFB\u7D71\u5831\u540D\u6210\u529F\u4E0D\u7B49\u65BC\u639B\u865F\u6210\u529F\uFF0C\u7D93\u672C\u9662\u78BA\u8A8D\u8EAB\u4EFD\u8CC7\u683C\u7B26\u5408\u8A55\u4F30\u8CC7\u683C\u5F8C\uFF0C\u6703\u518D\u4EE5\u96FB\u8A71\u901A\u77E5\u3002 \u672A\u63A5\u5230\u96FB\u8A71\u901A\u77E5\u5373\u4E0D\u7B26\u5408\u770B\u8A3A\u8CC7\u683C\uFF0C\u8ACB\u52FF\u64C5\u81EA\u524D\u4F86\u770B\u8A3A\uFF0C\u4EE5\u514D\u767D\u8DD1\u4E00\u8D9F\u3002 "}}),Wa=d("br",null,null,-1),Ua=d("br",null,null,-1),$a={key:6},Va=he({__name:"UserView",setup(n){const e=R(1),t=R("");function s(l){t.value=l.format("YYYY-MM-DD")}const i=R(""),o={};function r(l,u){if(!u)return;e.value+=1;const a=new FormData(l.target);for(const c of a.keys())o[c]=a.getAll(c).join(",");i.value=JSON.stringify(o,null,2)}return(l,u)=>(C(),A(re,null,[Wa,Fi(xi),e.value==1?(C(),_e(Co,{key:0,disabled:e.value!=1,onSubmit:r,onKidBirthdayChange:s},null,8,["disabled"])):x("",!0),e.value==2?(C(),_e(Zo,{key:1,disabled:e.value!=2,onSubmit:r},null,8,["disabled"])):x("",!0),e.value==3?(C(),_e(mr,{key:2,disabled:e.value!=3,onSubmit:r},null,8,["disabled"])):x("",!0),e.value==4?(C(),_e(xr,{key:3,disabled:e.value!=4,onSubmit:r},null,8,["disabled"])):x("",!0),e.value==5?(C(),_e(Jr,{key:4,disabled:e.value!=5,onSubmit:r,"kid-birthday":t.value},null,8,["disabled","kid-birthday"])):x("",!0),e.value==6?(C(),_e(Ba,{key:5,jsondata:o})):x("",!0),Ua,i.value?(C(),A("pre",$a,`  (\u958B\u767C\u7528)\r
  \u8CC7\u6599\u683C\u5F0F\uFF1A\r
`+z(i.value),1)):x("",!0)],64))}});export{Va as default};
