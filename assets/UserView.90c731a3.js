var N=Object.defineProperty;var j=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var U=(a,t,e)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,R=(a,t)=>{for(var e in t||(t={}))I.call(t,e)&&U(a,e,t[e]);if(j)for(var e of j(t))O.call(t,e)&&U(a,e,t[e]);return a};import{d as E,_ as P}from"./dayjs.min.6e8bf651.js";import{d as y,r as b,o as s,c as n,a as u,F as A,b as D,e as p,w as g,f as l,g as $,v as w,t as f,h as T,i as L,j as Q,k as z,u as S,n as J,l as M,p as K,m as q,q as Z,s as Y,x as G,y as H,z as W,A as X,B,C as uu}from"./index.7bc6ffb5.js";function x(a){const t={},e=new FormData(a.target);for(const h of e.keys())t[h]=e.getAll(h).join("|");return t}const eu=["onSubmit"],tu=u("h5",null,"1.\u5152\u7AE5\u57FA\u672C\u8CC7\u6599",-1),su={class:"row"},ou={class:"col-md-4"},lu=l(" \u5152\u7AE5\u8EAB\u4EFD\u8B49\u865F\uFF1A "),nu=["readonly"],au={class:"col-md-4"},iu=l(" \u5152\u7AE5\u59D3\u540D\uFF1A "),du=["readonly"],ru=u("br",null,null,-1),cu={class:"row"},_u={class:"col-md-12"},hu=l(" \u586B\u5BEB\u4EBA\u8207\u5152\u7AE5\u95DC\u4FC2\uFF1A "),mu={class:"form-inline"},bu={class:"form-check-inline"},vu={class:"form-check-label"},Fu=["value","disabled"],pu=["placeholder","disabled","readonly"],fu=u("div",{class:"row"},[u("div",{class:"col-md-4"},[u("label",null,[l(" \u586B\u8868\u4EBA\u806F\u7E6B\u96FB\u8A71\uFF1A "),u("input",{type:"text",class:"form-control",placeholder:"(\u52D9\u5FC5\u7559\u4E0B\u53EF\u806F\u7E6B\u96FB\u8A71)",name:"phoneNumber",required:""})])])],-1),Au={class:"row"},Eu=l(" \u5C31\u8A3A\u554F\u984C(\u53EF\u8907\u9078)\uFF1A"),Du=u("br",null,null,-1),Bu={class:"form-check-label"},yu=["value","disabled"],$u=u("br",null,null,-1),Cu={key:0,class:"btn btn-primary",type:"submit"},ku=y({__name:"UserFrom1",props:{disabled:{type:Boolean}},emits:["kidBirthdayChange","submit"],setup(a,{emit:t}){const e=["\u7236\u6BCD/\u76E3\u8B77\u4EBA","\u8001\u5E2B","\u793E\u5DE5","\u8B77\u7406\u5E2B","\u5176\u4ED6"],h=["\u52D5\u4F5C","\u8A9E\u8A00","\u5B78\u7FD2","\u60C5\u7DD2","\u5C08\u6CE8\u529B\u3001\u904E\u52D5","\u5B78\u524D\u9451\u5B9A"],i=b("");E();const _=b(null);function m(r){t("submit",x(r),!0)}return(r,o)=>(s(),n("form",{id:"from",onSubmit:g(m,["prevent"])},[tu,u("div",su,[u("div",ou,[lu,u("input",{type:"text",class:"form-control",name:"identityNumber",required:"",pattern:"[A-Z][01][0-9]{8}",readonly:a.disabled},null,8,nu)]),u("div",au,[iu,u("input",{type:"text",class:"form-control",name:"childName",required:"",readonly:a.disabled},null,8,du)])]),ru,u("div",cu,[u("div",_u,[hu,u("div",mu,[(s(),n(A,null,D(e,(d,v)=>u("div",bu,[u("label",vu,[$(u("input",{class:"form-check-input",type:"radio",name:"userRelationship",value:d,"onUpdate:modelValue":o[0]||(o[0]=c=>i.value=c),required:"",disabled:a.disabled},null,8,Fu),[[w,i.value]]),l(f(d),1)])])),64)),u("div",null,[u("input",{type:"text",class:"form-control",name:"userRelationshipOther",placeholder:i.value==e.at(e.length-1)?"\u8ACB\u8F38\u5165\u95DC\u4FC2":"",disabled:i.value!=e.at(e.length-1),readonly:a.disabled},null,8,pu)])])])]),fu,u("div",Au,[Eu,Du,(s(),n(A,null,D(h,d=>u("label",Bu,[u("input",{class:"form-check-input",type:"checkbox",name:"questionsAbouts",value:d,disabled:a.disabled},null,8,yu),l(" "+f(d)+"\u2003 ",1)])),64))]),$u,_.value?p("",!0):(s(),n("button",Cu,"\u78BA\u8A8D"))],40,eu))}}),gu=["onSubmit"],xu=u("h5",null,"2.\u662F\u5426\u66FE\u7D93\u65BC\u672C\u9662/\u4ED6\u9662\u770B\u904E\u5152\u7AE5\u767C\u5C55\u806F\u5408\u8A55\u4F30\u9580\u8A3A\uFF1F",-1),wu={class:"col-md-12"},Su={class:"form-check"},Yu={class:"form-check-label"},qu=["disabled"],Mu=l("\u5426 "),ju={class:"form-check"},Uu={class:"form-check-label"},Ru=["disabled"],Vu=l("\u662F "),Tu={key:0},Nu={class:"row"},Iu={class:"form-inline col-md-6"},Ou=l(" \u524D\u6B21\u8A55\u4F30\u65E5\u671F\uFF1A"),Pu=["disabled"],Lu={class:"form-inline col-md-6"},Qu=l(" \u5EFA\u8B70\u8907\u8A55\u6642\u9593\uFF08\u53EF\u4E0D\u586B\uFF09\uFF1A"),zu=["disabled"],Ju={key:0},Ku=u("div",{class:"alert alert-warning"},[l(" \u7121\u8AD6\u65BC\u672C\u9662\u6216\u4ED6\u9662\u8A55\u4F30\u4E00\u5E74\u5167\u4E0D\u5F97\u91CD\u8A55\uFF0C\u67E5\u8A62\u5F8C\u82E5\u91CD\u8986\u770B\u8A3A\uFF0C\u76F4\u63A5\u62D2\u7D55\u8A55\u4F30"),u("br")],-1),Zu=[Ku],Gu={key:1},Hu={class:"form-inline"},Wu=l(" \u524D\u6B21\u8A55\u4F30\u65E5\u671F\uFF1A"),Xu=["disabled"],ue={class:"form-inline"},ee=l(" \u5EFA\u8B70\u8907\u8A55\u6642\u9593\uFF1A"),te=["disabled"],se=l("\uFF08\u53EF\u4E0D\u586B\uFF09 "),oe=u("br",null,null,-1),le={key:0,class:"btn btn-primary",type:"submit"},ne=y({__name:"UserFrom2",props:{disabled:{type:Boolean}},emits:["submit"],setup(a,{emit:t}){const e=b(!1),h=b(null),i=b(null);function _(m){const r=E().diff(h.value);h.value&&e.value?i.value=r/(1e3*60*60*24)>365-61:i.value=!0,t("submit",x(m),!0)}return(m,r)=>(s(),n("form",{id:"from",onSubmit:g(_,["prevent"])},[xu,u("div",wu,[u("div",Su,[u("label",Yu,[$(u("input",{type:"radio",class:"form-check-input",value:!1,"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),required:"",disabled:a.disabled},null,8,qu),[[w,e.value]]),Mu])]),u("div",ju,[u("label",Uu,[$(u("input",{type:"radio",class:"form-check-input",value:!0,"onUpdate:modelValue":r[1]||(r[1]=o=>e.value=o),required:"",disabled:a.disabled},null,8,Ru),[[w,e.value]]),Vu]),e.value?(s(),n("div",Tu,[u("div",Nu,[u("div",Iu,[Ou,$(u("input",{type:"date",class:"form-control",name:"lastEvaluate",required:"","onUpdate:modelValue":r[2]||(r[2]=o=>h.value=o),disabled:a.disabled},null,8,Pu),[[T,h.value]])]),u("div",Lu,[Qu,u("input",{type:"date",class:"form-control",name:"SuggestEvaluate",disabled:a.disabled},null,8,zu)]),i.value===!1?(s(),n("div",Ju,Zu)):p("",!0)])])):p("",!0),e.value?p("",!0):$((s(),n("div",Gu,[u("div",Hu,[Wu,u("input",{type:"date",class:"form-control",name:"lastEvaluate",value:"",disabled:a.disabled},null,8,Xu)]),u("div",ue,[ee,u("input",{type:"date",class:"form-control",name:"SuggestEvaluate",value:"",disabled:a.disabled},null,8,te),se])],512)),[[L,!1]])])]),oe,i.value?p("",!0):(s(),n("button",le,"\u78BA\u8A8D"))],40,gu))}}),ae=["onSubmit"],ie=u("h5",null,"3\u3001\u662F\u5426\u6709\u7279\u6B8A\u75BE\u75C5\uFF1F",-1),de={class:"col-md-12"},re={class:"form-check"},ce={class:"form-check-label"},_e=["disabled"],he=l("\u5426 "),me={class:"form-check"},be={class:"form-check-label"},ve=["disabled"],Fe=l("\u662F "),pe={class:"form-check form-check-inline"},fe={class:"form-check-label"},Ae=["value","disabled"],Ee=u("br",null,null,-1),De={key:0,class:"btn btn-primary",type:"submit"},Be=y({__name:"UserFrom3",props:{disabled:{type:Boolean}},emits:["submit"],setup(a,{emit:t}){const e=b(!1),h=["\u795E\u7D93\u7CFB\u7D71","\u5167\u5206\u6CCC","\u7F55\u898B\u75BE\u75C5","\u65E9\u7522"],i=b(null);function _(m){i.value=!0,t("submit",x(m),i.value)}return(m,r)=>(s(),n("form",{id:"from",onSubmit:g(_,["prevent"])},[ie,u("div",de,[u("div",re,[u("label",ce,[$(u("input",{type:"radio",class:"form-check-input",value:!1,"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),required:"",disabled:a.disabled},null,8,_e),[[w,e.value]]),he])]),u("div",me,[u("label",be,[$(u("input",{type:"radio",class:"form-check-input",value:!0,"onUpdate:modelValue":r[1]||(r[1]=o=>e.value=o),required:"",disabled:a.disabled},null,8,ve),[[w,e.value]]),Fe]),u("div",null,[(s(),n(A,null,D(h,(o,d)=>u("div",pe,[u("label",fe,[u("input",{type:"checkbox",class:"form-check-input",name:"specialDisease",value:o,disabled:a.disabled||!e.value},null,8,Ae),l(f(o),1)])])),64))])])]),Ee,i.value?p("",!0):(s(),n("button",De,"\u78BA\u8A8D"))],40,ae))}}),ye=["onSubmit"],$e=u("h5",null,"4\u3001\u524D\u6B21\u8A55\u4F30\u9072\u7DE9/\u81E8\u754C\u9072\u7DE9\uFF1A",-1),Ce={class:"col-md-12"},ke={class:"form-inline"},ge={class:"form-check"},xe={class:"form-check-label"},we=["value","disabled"],Se={key:0,class:"alert alert-warning"},Ye=l(" \u2027\u55AE\u4E00\u9805\u76EE\u7684\u767C\u5C55\u9072\u7DE9\uFF0C\u975E\u672C\u9580\u8A3A\u770B\u8A3A\u5C0D\u8C61"),qe=u("br",null,null,-1),Me=l(" \u2027\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5176\u5B83\u767C\u5C55\u9072\u7DE9 \u2192 \u7CFB\u7D71\u76F4\u63A5\u8DF3\u8F49\u639B\u300C\u5152\u7AE5\u5FC3\u667A\u79D1\u300D"),je=u("br",null,null,-1),Ue=l(" \u2027\u52D5\u4F5C \u2192 \u7CFB\u7D71\u76F4\u63A5\u8DF3\u8F49\u639B\u300C\u5FA9\u5065\u79D1\u300D "),Re=[Ye,qe,Me,je,Ue],Ve=u("br",null,null,-1),Te={key:0,class:"btn btn-primary",type:"submit"},Ne=y({__name:"UserFrom4",props:{disabled:{type:Boolean}},emits:["submit"],setup(a,{emit:t}){const e=b(null),h=["\u52D5\u4F5C\u985E","\u8A9E\u8A00","\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49"],i=b([]);function _(m){e.value=i.value.length>=2,t("submit",x(m),e.value)}return(m,r)=>(s(),n("form",{id:"from",onSubmit:g(_,["prevent"])},[$e,u("div",Ce,[(s(),n(A,null,D(h,(o,d)=>u("div",ke,[u("div",ge,[u("label",xe,[$(u("input",{type:"checkbox",class:"form-check-input",name:"previousAssessment","onUpdate:modelValue":r[0]||(r[0]=v=>i.value=v),value:o,disabled:a.disabled},null,8,we),[[Q,i.value]]),l(f(o),1)])])])),64)),e.value===!1?(s(),n("div",Se,Re)):p("",!0)]),Ve,e.value?p("",!0):(s(),n("button",Te,"\u78BA\u8A8D"))],40,ye))}});const Ie=["onSubmit"],Oe=u("h5",null,"5\u3001TAIPEI II \u7BE9\u6AA2\u8868",-1),Pe={class:"col-md-12"},Le={key:0},Qe=u("h6",null,"\u8ACB\u8F38\u5165\u51FA\u751F\u65E5\u671F/\u65E5\u671F\u4E0D\u5728\u7BE9\u6AA2\u8868\u5167",-1),ze=[Qe],Je={key:1},Ke={class:"row"},Ze={class:"col-md-1"},Ge={style:{color:"red"}},He={class:"col-md-9"},We={class:"form-check-label"},Xe={class:"col-md-2 text-center"},ut=["id","name"],et=["for"],tt=["id","name"],st=["for"],ot=["src"],lt=u("br",null,null,-1),nt={key:0,class:"btn btn-primary",type:"submit"},at=y({__name:"UserFrom5",props:{kidBirthday:null},emits:["submit"],setup(a,{emit:t}){const e=a,h=b({}),i=b({questions:[],image:""});fetch("assets/monthRoot.json").then(o=>o.json()).then(o=>{h.value=o});const _=z(()=>{const d=E().diff(E(e.kidBirthday))/(1e3*60*60*24);let v="";for(const c in h.value)if(h.value[c].min<=d&&h.value[c].max>=d){v=h.value[c].title,fetch(c).then(F=>F.json()).then(F=>{F.questions.forEach((C,k,Qt)=>{C.title=C.title.replace(/^\d+\./gm,""),C.answer=!!C.answer}),i.value=F});break}return v}),m=b(null);function r(o){const d=x(o),v=[];i.value.questions.forEach((c,F,C)=>{const k=c.answer?"true":"false";d["q_"+F]==k&&v.push(F+1),delete d["q_"+F]}),d.wrongAnswers=v.join("|"),t("submit",d,!0)}return(o,d)=>(s(),n("form",{id:"from",onSubmit:g(r,["prevent"])},[Oe,u("div",Pe,[S(_)?p("",!0):(s(),n("div",Le,ze)),S(_)?(s(),n("div",Je,[u("h6",null,f(S(_)),1),u("div",null,[(s(!0),n(A,null,D(i.value.questions,(v,c)=>(s(),n("div",{class:J(c%2==0?"q_white_line":"q_gray_line")},[u("div",Ke,[u("div",Ze,[l(f(c+1),1),u("span",Ge,f(v.special?"\u2605":""),1)]),u("div",He,[u("label",We,f(v.title),1)]),u("div",Xe,[u("input",{type:"radio",class:"slist_radio_input",id:`q5t_${c}`,name:`q_${c}`,required:"",value:!0},null,8,ut),u("label",{class:"slist_radio_label",for:`q5t_${c}`},"\u662F",8,et),u("input",{type:"radio",class:"slist_radio_input",id:`q5f_${c}`,name:`q_${c}`,required:"",value:!1},null,8,tt),u("label",{class:"slist_radio_label",for:`q5f_${c}`},"\u5426",8,st)])])],2))),256)),u("img",{src:i.value.image,style:{width:"100%"}},null,8,ot)])])):p("",!0)]),lt,m.value?p("",!0):(s(),n("button",nt,"\u78BA\u8A8D"))],40,Ie))}}),it={key:0},dt={key:1},rt=y({__name:"EndPage",props:{jsondata:null},setup(a){const t=a,e=E(t.jsondata.registrationDate),h=t.jsondata.registrationDate||"error",i=e.year()-1911+e.format("\u5E74 MM\u6708 DD\u65E5"),_=b(!1);let m=t.jsondata;m.unix=E().unix();function r(o){_.value=!1,console.log(o);const d=M();K(q(d,"register/"),{data:o}).then(v=>{console.log(v.key);let c={};c[v.key+""]=m.keyday<360*3,Z(q(d,"registrationDate/"+h+"/"),R({},c)).then(()=>{_.value=!0}).catch(alert)}).catch(alert)}return r(t.jsondata),(o,d)=>(s(),n(A,null,[_.value?p("",!0):(s(),n("div",it,"\u5831\u540D\u7533\u8ACB\u9001\u51FA\u4E2D...")),_.value?(s(),n("div",dt,"\u5831\u540D\u5B8C\u6210\u3002\u9810\u8A08\u770B\u8A3A\u65E5\u671F\u70BA"+f(i)+"\uFF0C\u7D93\u7CFB\u7D71\u5831\u540D\u6210\u529F\u4E0D\u7B49\u65BC\u639B\u865F\u6210\u529F\uFF0C\u7D93\u672C\u9662\u78BA\u8A8D\u8EAB\u4EFD\u8CC7\u683C\u7B26\u5408\u8A55\u4F30\u8CC7\u683C\u5F8C\uFF0C\u6703\u518D\u4EE5\u96FB\u8A71\u901A\u77E5\u3002 \u672A\u63A5\u5230\u96FB\u8A71\u901A\u77E5\u5373\u4E0D\u7B26\u5408\u770B\u8A3A\u8CC7\u683C\uFF0C\u8ACB\u52FF\u64C5\u81EA\u524D\u4F86\u770B\u8A3A\uFF0C\u4EE5\u514D\u767D\u8DD1\u4E00\u8D9F\u3002")):p("",!0)],64))}});const ct=["onSubmit"],_t=u("h1",null,"\u5152\u7AE5\u767C\u5C55\u8A55\u4F30\u5831\u540D\u7CFB\u7D71",-1),ht=l(" \u6B63\u78BA\u5E74\u9F61\u8A08\u7B97\u65B9\u5F0F\uFF1A"),mt=u("br",null,null,-1),bt=l(" \u300C\u5BE6\u8DB3\u5E74\u9F61\u300D\uFF1A\u300C\u65BD\u6E2C\u65E5\u671F - \u51FA\u751F\u65E5\u671F = \u5BE6\u8DB3\u5E74\u9F61\u300D"),vt=u("br",null,null,-1),Ft=l(" \uFF0A\u65E9\u7522\u5152\u4E8C\u6B72\u524D\u5EFA\u8B70\u4EE5\u9810\u7522\u671F\u4EE3\u66FF\u51FA\u751F\u65E5\u671F\u8A08\u7B97"),pt=u("br",null,null,-1),ft={class:"kidBirthdayFrom"},At=l(" \u8ACB\u9078\u64C7\u60A8\u7684\u5BF6\u8C9D\u51FA\u751F\u65E5\u671F\u9032\u884C\u6AA2\u6E2C\uFF1A"),Et=u("br",null,null,-1),Dt={class:"form-label"},Bt=u("br",null,null,-1),yt={key:0,class:"col-md-12"},$t=u("div",{class:"alert alert-info"},[l(" \u5E74\u9F61\u4E0D\u7B26\u5408\u672C\u9662\u770B\u8A3A\u689D\u4EF6\uFF0C\u82E5\u4ECD\u9700\u8981\u672C\u9662\u5C31\u8A3A\uFF0C\u5EFA\u8B70\u8F49\u8A3A\u81F3\u4EE5\u4E0B\u79D1\u5225\uFF1A"),u("br"),l(" \u52D5\u4F5C\u3001\u8A9E\u8A00\u985E\u767C\u5C55\u554F\u984C \u2192 \u8ACB\u639B\u5FA9\u5065\u79D1"),u("br"),l(" \u8A8D\u77E5\u3001\u4EBA\u969B\u3001\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49 \u2192 \u8ACB\u639B\u5152\u7AE5\u5FC3\u667A\u79D1 ")],-1),Ct=[$t],kt={key:1,class:"btn btn-primary",type:"submit"},gt=u("br",null,null,-1),xt=y({__name:"UserFrom0",props:{disabled:{type:Boolean}},emits:["kidBirthdayChange","submit"],setup(a,{emit:t}){const e=b(E("2022-07-01").add(-106,"day")),h=b(E("2010-01-01").add(-106,"day"));b(h.value.format("YYYY\u5E74MM\u6708DD\u65E5")),b(e.value.format("YYYY\u5E74MM\u6708DD\u65E5")),b(h.value.format("YYYY\u5E74MM\u6708DD\u65E5")),b(e.value.format("YYYY\u5E74MM\u6708DD\u65E5")),b(e.value.format("YYYY\u5E74MM\u6708DD\u65E5"));const i=b(E().format("YYYY-MM-DD")),_=Y(()=>Math.floor(E().diff(i.value)/(1e3*60*60*24))),m=Y(()=>E(i.value)),r=Y(()=>(_.value>360?Math.floor(_.value/360)+"\u5E74":"")+(_.value>30?Math.floor(_.value%360/30)+"\u500B\u6708":"")+(_.value>0?_.value%360%30+"\u5929":"")),o=b(null);function d(v){t("kidBirthdayChange",m.value),o.value=m.value.isBefore(e.value)&&m.value.isAfter(h.value),t("submit",Object.assign({},x(v),{kidDay:_.value}),o.value)}return(v,c)=>(s(),n(A,null,[u("form",{id:"from",onSubmit:g(d,["prevent"])},[_t,ht,mt,bt,vt,Ft,pt,u("div",ft,[At,Et,u("label",Dt,[$(u("input",{type:"date",class:"form-control",name:"kidBirthday","onUpdate:modelValue":c[0]||(c[0]=F=>i.value=F),required:""},null,512),[[T,i.value]])]),Bt,l(" \u8A66\u7B97\u7D50\u679C\uFF1A"+f(S(r)),1)]),o.value===!1?(s(),n("div",yt,Ct)):p("",!0),o.value?p("",!0):(s(),n("button",kt,"\u78BA\u8A8D"))],40,ct),gt],64))}});const wt={class:"tablebox"},St=u("br",null,null,-1),Yt=l("\xA0 "),qt=u("br",null,null,-1),V=y({__name:"RegistrationTime",props:{dateStr:null,special:{type:Boolean}},emits:["submit"],setup(a,{emit:t}){const e=a,h=E(e.dateStr),i=e.dateStr,_=h.year()-1911+h.format(".MM.DD");M();const m=b("\u3010\u5831\u540D\u3011"),r=b(0),o=b(0);Promise.all([G(),H(i)]).then(([v,c])=>{r.value=c?Object.keys(c).length:0,o.value=v.quota+(e.special?v.specialQuota:0)});function d(){t("submit",e.dateStr)}return(v,c)=>(s(),n("tr",wt,[u("td",null,[u("a",{class:"red",onclick:d,style:{"white-space":"nowrap"}},f(m.value),1),St,Yt]),u("td",null,[l(f(_)),qt,l("\u5DF2\u639B\u4EBA\u6578\uFF1A"+f(r.value+"/"+o.value),1)])]))}});const Mt=u("h5",null,"\u9078\u64C7\u770B\u8A3A\u65E5\u671F",-1),jt={class:"table table-sm"},Ut={class:"weekhead"},Rt=u("th",null,[l("\u661F\u671F/"),u("br"),l("\u5348\u5225")],-1),Vt={class:"weekbody"},Tt=u("th",{class:"weekside"},[l("\u4E0A\u5348"),u("br"),l("08:30"),u("br"),l("~"),u("br"),l("12:00")],-1),Nt=u("th",{class:"weekside"},[l("\u4E0B\u5348"),u("br"),l("13:30"),u("br"),l("~"),u("br"),l("17:00")],-1),It=u("br",null,null,-1),Ot=y({__name:"RegistrationFrom",props:{jsondata:null},emits:["submit"],setup(a,{emit:t}){const h=b(a.jsondata.kidDay<360*3),i=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],_=b([[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]]]),m=q(M());W(X(m,"setting/")).then(d=>{if(d.exists()){const v=d.val();r(v.dayofweek,E().add(v.minday,"day"),E().add(v.maxday,"day"))}else console.log("No data available")}).catch(d=>{console.error(d)});function r(d,v,c){let F=v;for(F=F.day(d),F.isBefore(v)&&(F=F.add(1,"week"));F.isBefore(c);)_.value[0][F.day()].push(F),F=F.add(1,"week")}function o(d){t("submit",{registrationDate:d},!0)}return(d,v)=>(s(),n(A,null,[Mt,u("table",jt,[u("thead",Ut,[u("tr",null,[Rt,(s(!0),n(A,null,D(i.slice(1),c=>(s(),n("th",null,"\u661F\u671F"+f(c),1))),256)),u("th",null,"\u661F\u671F"+f(i[0]),1)])]),u("tbody",Vt,[u("tr",null,[Tt,(s(!0),n(A,null,D(_.value[0].slice(1),(c,F,C)=>(s(),n("td",null,[(s(!0),n(A,null,D(c,k=>(s(),B(V,{dateStr:k.format("YYYY-MM-DD"),onSubmit:o,special:h.value},null,8,["dateStr","special"]))),256))]))),256)),(s(!0),n(A,null,D([_.value[0][0]],(c,F,C)=>(s(),n("td",null,[(s(!0),n(A,null,D(c,k=>(s(),B(V,{dateStr:k.format("YYYY-MM-DD"),onSubmit:o,special:h.value},null,8,["dateStr","special"]))),256))]))),256))]),u("tr",null,[Nt,(s(),n(A,null,D(i,c=>u("td")),64))])])]),It],64))}}),Pt=u("br",null,null,-1),Lt=u("br",null,null,-1),Zt=y({__name:"UserView",setup(a){const t=b(-1),e=b("");function h(r){e.value=r.format("YYYY-MM-DD")}const i=b(""),_={};function m(r,o){if(!!o){t.value+=1;for(const d of Object.keys(r))_[d]=r[d];i.value=JSON.stringify(_,null,2),console.log(i.value)}}return(r,o)=>(s(),n("div",null,[Pt,uu(P),t.value==-1?(s(),B(xt,{key:0,disabled:t.value!=-1,onSubmit:m,onKidBirthdayChange:h},null,8,["disabled"])):p("",!0),t.value==0?(s(),B(Ot,{key:1,onSubmit:m,jsondata:_})):p("",!0),t.value==1?(s(),B(ku,{key:2,disabled:t.value!=1,onSubmit:m},null,8,["disabled"])):p("",!0),t.value==2?(s(),B(ne,{key:3,disabled:t.value!=2,onSubmit:m},null,8,["disabled"])):p("",!0),t.value==3?(s(),B(Be,{key:4,disabled:t.value!=3,onSubmit:m},null,8,["disabled"])):p("",!0),t.value==4?(s(),B(Ne,{key:5,disabled:t.value!=4,onSubmit:m},null,8,["disabled"])):p("",!0),t.value==5?(s(),B(at,{key:6,disabled:t.value!=5,onSubmit:m,"kid-birthday":e.value},null,8,["disabled","kid-birthday"])):p("",!0),t.value==6?(s(),B(rt,{key:7,jsondata:_})):p("",!0),Lt]))}});export{Zt as default};
