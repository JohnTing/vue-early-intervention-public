import{d as A,r as l,s as k,o as a,c as d,a as u,F,b as $,g as D,v as y,f as n,t as E,G as Y,h as g,e as h,k as x,u as C,n as M,H as q,C as S,B as b,w,l as V,p as R,m as N}from"./index.2b8f517b.js";import{d as p,_ as U}from"./dayjs.min.4d4890b6.js";const j=Y('<h5>1.\u5152\u7AE5\u57FA\u672C\u8CC7\u6599</h5><div class="row"><div class="col-md-4"><label> \u5152\u7AE5\u8EAB\u4EFD\u8B49\u865F\uFF1A <input type="text" class="form-control" name="identityNumber" required pattern="[A-Z][01][0-9]{8}"></label></div><div class="col-md-4"><label> \u5152\u7AE5\u59D3\u540D\uFF1A <input type="text" class="form-control" name="childName" required></label></div></div><br>',3),T={class:"row"},I={class:"form-inline"},L=n(" \u586B\u5BEB\u4EBA\u8207\u5152\u7AE5\u95DC\u4FC2\uFF1A"),K=u("br",null,null,-1),O={class:"form-check-inline"},Q={class:"form-check-label"},z=["value"],G=["placeholder","disabled"],H=u("br",null,null,-1),J=u("div",{class:"row"},[u("div",{class:"col-md-4"},[u("label",null,[n(" \u586B\u8868\u4EBA\u806F\u7E6B\u96FB\u8A71\uFF1A "),u("input",{type:"text",class:"form-control",placeholder:"(\u52D9\u5FC5\u7559\u4E0B\u53EF\u806F\u7E6B\u96FB\u8A71)",name:"phoneNumber",required:""})])])],-1),P=u("br",null,null,-1),W=n(" \u5C31\u8A3A\u554F\u984C(\u53EF\u8907\u9078)\uFF1A "),Z=u("br",null,null,-1),X={class:"form-check-label"},uu=["value"],eu=u("br",null,null,-1),tu=A({__name:"SimpleFrom1",setup(v){const t=l(p("2022-07-01").add(-106,"day")),c=l(p("2010-01-01").add(-106,"day"));l(c.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(t.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(c.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(t.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(t.value.format("YYYY\u5E74MM\u6708DD\u65E5"));const _=["\u7236\u6BCD/\u76E3\u8B77\u4EBA","\u7956\u7236\u6BCD","\u8001\u5E2B","\u793E\u5DE5","\u8B77\u7406\u5E2B","\u4FDD\u6BCD","\u5176\u4ED6"],o=["\u52D5\u4F5C","\u8A9E\u8A00","\u5B78\u7FD2","\u60C5\u7DD2","\u5C08\u6CE8\u529B\u3001\u904E\u52D5","\u5B78\u524D\u9451\u5B9A"],s=l("");p();const r=l("");return k(()=>p(r.value)),(f,i)=>(a(),d(F,null,[j,u("div",T,[u("div",I,[L,K,(a(),d(F,null,$(_,(e,m)=>u("div",O,[u("label",Q,[D(u("input",{class:"form-check-input",type:"radio",name:"userRelationship",value:e,"onUpdate:modelValue":i[0]||(i[0]=B=>s.value=B),required:""},null,8,z),[[y,s.value]]),n(E(e),1)])])),64)),u("div",null,[u("input",{type:"text",class:"form-control",name:"userRelationshipOther",placeholder:s.value==_.at(_.length-1)?"\u8ACB\u8F38\u5165\u95DC\u4FC2":"",disabled:s.value!=_.at(_.length-1),required:""},null,8,G)])])]),H,J,P,W,Z,(a(),d(F,null,$(o,e=>u("label",X,[u("input",{class:"form-check-input",type:"checkbox",name:"questionsAbouts",value:e},null,8,uu),n(" "+E(e)+"\u2003 ",1)])),64)),eu],64))}}),su=u("h5",null,"2.\u662F\u5426\u66FE\u7D93\u65BC\u672C\u9662/\u4ED6\u9662\u770B\u904E\u5152\u7AE5\u767C\u5C55\u806F\u5408\u8A55\u4F30\u9580\u8A3A\uFF1F",-1),lu={class:"form-check"},ou={class:"form-check-label"},nu=n("\u5426 "),au={class:"form-check"},iu={class:"form-check-label"},ru=n("\u662F "),cu={key:0,class:"row"},du={class:"form-inline col-md-6"},_u=n(" \u524D\u6B21\u8A55\u4F30\u65E5\u671F\uFF1A"),hu=["disabled"],mu={class:"form-inline col-md-6"},Fu=n(" \u5EFA\u8B70\u8907\u8A55\u6642\u9593\uFF08\u53EF\u4E0D\u586B\uFF09\uFF1A"),pu=["disabled"],Eu=u("div",null,[u("div",{class:"alert alert-warning"},[n(" \u7121\u8AD6\u65BC\u672C\u9662\u6216\u4ED6\u9662\u8A55\u4F30\u4E00\u5E74\u5167\u4E0D\u5F97\u91CD\u8A55\uFF0C\u67E5\u8A62\u5F8C\u82E5\u91CD\u8986\u770B\u8A3A\uFF0C\u76F4\u63A5\u62D2\u7D55\u8A55\u4F30"),u("br")])],-1),vu=u("br",null,null,-1),fu=A({__name:"SimpleFrom2",setup(v){const t=l(null),c=l(null);return(_,o)=>(a(),d(F,null,[su,u("div",lu,[u("label",ou,[D(u("input",{type:"radio",class:"form-check-input",name:"isEvaluate",value:!1,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),required:""},null,512),[[y,t.value]]),nu])]),u("div",au,[u("label",iu,[D(u("input",{type:"radio",class:"form-check-input",name:"isEvaluate",value:!0,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),required:""},null,512),[[y,t.value]]),ru]),t.value?(a(),d("div",cu,[u("div",du,[_u,D(u("input",{type:"date",class:"form-control",name:"lastEvaluate",required:"","onUpdate:modelValue":o[2]||(o[2]=s=>c.value=s),disabled:!t.value},null,8,hu),[[g,c.value]])]),u("div",mu,[Fu,u("input",{type:"date",class:"form-control",name:"SuggestEvaluate",disabled:!t.value},null,8,pu)]),Eu])):h("",!0)]),vu],64))}}),Du=u("h5",null,"3\u3001\u662F\u5426\u6709\u7279\u6B8A\u75BE\u75C5\uFF1F",-1),Au={class:"col-md-12"},Bu={class:"form-check"},bu={class:"form-check-label"},Cu=n("\u5426 "),$u={class:"form-check"},yu={class:"form-check-label"},ku=n("\u662F "),gu={key:0},Yu={class:"form-check form-check-inline"},xu={class:"form-check-label"},Mu=["value","disabled"],qu=u("br",null,null,-1),Su=A({__name:"SimpleFrom3",setup(v){const t=l(null),c=["\u795E\u7D93\u7CFB\u7D71","\u5167\u5206\u6CCC","\u7F55\u898B\u75BE\u75C5","\u65E9\u7522"];return(_,o)=>(a(),d(F,null,[Du,u("div",Au,[u("div",Bu,[u("label",bu,[D(u("input",{type:"radio",class:"form-check-input",name:"isSpecialDisease",value:!1,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),required:""},null,512),[[y,t.value]]),Cu])]),u("div",$u,[u("label",yu,[D(u("input",{type:"radio",class:"form-check-input",name:"isSpecialDisease",value:!0,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),required:""},null,512),[[y,t.value]]),ku]),t.value?(a(),d("div",gu,[(a(),d(F,null,$(c,(s,r)=>u("div",Yu,[u("label",xu,[u("input",{type:"checkbox",class:"form-check-input",name:"specialDisease",value:s,disabled:!t.value},null,8,Mu),n(E(s),1)])])),64))])):h("",!0)])]),qu],64))}}),wu=u("h5",null,"4\u3001\u524D\u6B21\u8A55\u4F30\u9072\u7DE9/\u81E8\u754C\u9072\u7DE9\uFF1A",-1),Vu={class:"col-md-12"},Ru={class:"form-inline"},Nu={class:"form-check"},Uu={class:"form-check-label"},ju=["value"],Tu=u("div",{class:"alert alert-warning"},[n(" \u2027\u55AE\u4E00\u9805\u76EE\u7684\u767C\u5C55\u9072\u7DE9\uFF0C\u975E\u672C\u9580\u8A3A\u770B\u8A3A\u5C0D\u8C61"),u("br"),n(" \u2027\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5176\u5B83\u767C\u5C55\u9072\u7DE9 \u2192 \u7CFB\u7D71\u76F4\u63A5\u8DF3\u8F49\u639B\u300C\u5152\u7AE5\u5FC3\u667A\u79D1\u300D"),u("br"),n(" \u2027\u52D5\u4F5C \u2192 \u7CFB\u7D71\u76F4\u63A5\u8DF3\u8F49\u639B\u300C\u5FA9\u5065\u79D1\u300D ")],-1),Iu=u("br",null,null,-1),Lu=A({__name:"SimpleFrom4",setup(v){const t=["\u52D5\u4F5C\u985E","\u8A9E\u8A00","\u8A8D\u77E5\u3001\u793E\u6703\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49"];return(c,_)=>(a(),d(F,null,[wu,u("div",Vu,[(a(),d(F,null,$(t,(o,s)=>u("div",Ru,[u("div",Nu,[u("label",Uu,[u("input",{type:"checkbox",class:"form-check-input",name:"previousAssessment",value:o},null,8,ju),n(E(o),1)])])])),64)),Tu]),Iu],64))}});const Ku=u("h5",null,"5\u3001TAIPEI II \u7BE9\u6AA2\u8868",-1),Ou={class:"col-md-12"},Qu={key:0},zu=u("h6",null,"\u8ACB\u8F38\u5165\u51FA\u751F\u65E5\u671F/\u65E5\u671F\u4E0D\u5728\u7BE9\u6AA2\u8868\u7BC4\u570D",-1),Gu=[zu],Hu={key:1},Ju={class:"row"},Pu={class:"col"},Wu={style:{color:"red"}},Zu={class:"col-md-9"},Xu={class:"form-check-label"},ue=["src"],ee={class:"col-md-2 text-center"},te=["id","name"],se=["for"],le=["id","name"],oe=["for"],ne=["src"],ae=u("br",null,null,-1),ie=A({__name:"SimpleFrom5",props:{kidBirthday:null},setup(v){const t=v,c=l({}),_=l({questions:[],image:""});fetch("assets/monthRoot.json").then(r=>r.json()).then(r=>{c.value=r});const o=l(""),s=x(()=>{const f=p().diff(p(t.kidBirthday))/(1e3*60*60*24);let i="";for(const e in c.value)if(c.value[e].min<=f&&c.value[e].max>=f){o.value=e,i=c.value[e].title,fetch(e).then(m=>m.json()).then(m=>{m.questions.forEach((B,xe,Me)=>{B.title=B.title.replace(/^\d+\./gm,"")}),_.value=m});break}return i});return(r,f)=>(a(),d(F,null,[Ku,u("div",Ou,[C(s)?h("",!0):(a(),d("div",Qu,Gu)),C(s)?(a(),d("div",Hu,[u("h6",null,E(C(s)),1),u("div",null,[(a(!0),d(F,null,$(_.value.questions,(i,e)=>(a(),d("div",{class:M(e%2==0?"q_white_line":"q_gray_line")},[u("div",Ju,[u("div",Pu,[n(E(e+1),1),u("span",Wu,E(i.special?"\u2605":""),1)]),u("div",Zu,[u("label",Xu,E(i.title),1),i.image?(a(),d("img",{key:0,src:i.image,height:"64"},null,8,ue)):h("",!0)]),u("div",ee,[u("input",{type:"radio",class:"slist_radio_input",id:`q5t_${e}`,name:`${o.value}_${e}`,required:"",value:!0},null,8,te),u("label",{class:"slist_radio_label",for:`q5t_${e}`},"\u662F",8,se),u("input",{type:"radio",class:"slist_radio_input",id:`q5f_${e}`,name:`${o.value}_${e}`,required:"",value:!1},null,8,le),u("label",{class:"slist_radio_label",for:`q5f_${e}`},"\u5426",8,oe)])])],2))),256)),u("img",{src:_.value.image,style:{width:"100%"}},null,8,ne)])])):h("",!0)]),ae],64))}}),re=u("h1",null,"\u5152\u7AE5\u65E9\u7642\u5831\u540D\u7CFB\u7D71",-1),ce=n(" \u6B63\u78BA\u5E74\u9F61\u8A08\u7B97\u65B9\u5F0F\uFF1A"),de=u("br",null,null,-1),_e=n(" \u300C\u5BE6\u8DB3\u5E74\u9F61\u300D\uFF1A\u300C\u65BD\u6E2C\u65E5\u671F - \u51FA\u751F\u65E5\u671F = \u5BE6\u8DB3\u5E74\u9F61\u300D"),he=u("br",null,null,-1),me=n(" \uFF0A\u65E9\u7522\u5152\u4E8C\u6B72\u524D\u5EFA\u8B70\u4EE5\u9810\u7522\u671F\u4EE3\u66FF\u51FA\u751F\u65E5\u671F\u8A08\u7B97"),Fe=u("br",null,null,-1),pe={class:"kidBirthdayFrom"},Ee=n(" \u8ACB\u9078\u64C7\u60A8\u7684\u5BF6\u8C9D\u51FA\u751F\u65E5\u671F\u9032\u884C\u6AA2\u6E2C\uFF1A"),ve=u("br",null,null,-1),fe={class:"form-label"},De=u("br",null,null,-1),Ae={key:0,class:"col-md-12"},Be=u("div",{class:"alert alert-info"},[n(" \u5E74\u9F61\u4E0D\u7B26\u5408\u672C\u9662\u770B\u8A3A\u689D\u4EF6\uFF0C\u82E5\u4ECD\u9700\u8981\u672C\u9662\u5C31\u8A3A\uFF0C\u5EFA\u8B70\u8F49\u8A3A\u81F3\u4EE5\u4E0B\u79D1\u5225\uFF1A"),u("br"),n(" \u52D5\u4F5C\u3001\u8A9E\u8A00\u985E\u767C\u5C55\u554F\u984C \u2192 \u8ACB\u639B\u5FA9\u5065\u79D1"),u("br"),n(" \u8A8D\u77E5\u3001\u4EBA\u969B\u3001\u60C5\u7DD2\u3001\u5C08\u6CE8\u529B\u3001\u904E\u52D5\u7B49 \u2192 \u8ACB\u639B\u5152\u7AE5\u5FC3\u667A\u79D1 ")],-1),be=[Be],Ce=u("br",null,null,-1),$e=A({__name:"SimpleFrom0",emits:["kidBirthdayChange"],setup(v,{emit:t}){const c=l(p("2022-07-01").add(-106,"day")),_=l(p("2010-01-01").add(-106,"day"));l(_.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(c.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(_.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(c.value.format("YYYY\u5E74MM\u6708DD\u65E5")),l(c.value.format("YYYY\u5E74MM\u6708DD\u65E5"));const o=l(""),s=l(!1);l(!1);const r=k(()=>Math.floor(p().diff(o.value)/(1e3*60*60*24)));return(f,i)=>(a(),d(F,null,[re,ce,de,_e,he,me,Fe,u("div",pe,[Ee,ve,u("label",fe,[D(u("input",{type:"date",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=e=>o.value=e),required:""},null,512),[[g,o.value]])]),De,n(" \u8A66\u7B97\u7D50\u679C\uFF1A"+E(C(r)>=0?Math.floor(C(r)/30)+"\u500B\u6708"+Math.floor(C(r)%30)+"\u5929":""),1)]),s.value?(a(),d("div",Ae,be)):h("",!0),Ce],64))}});const ye=u("br",null,null,-1),ke=["onSubmit"],ge=u("br",null,null,-1),Ye=u("button",{type:"submit",class:"btn btn-primary"},"\u78BA\u8A8D",-1),we=A({__name:"SimpleFromView",setup(v){const t={};function c(i){const e=new FormData(i.target);for(const m of e.keys()){const B=m.replace(/[\./]/gm,"_");t[B]=e.getAll(m).join("|")}if(console.log(t),r.value+=1,r.value>5){o(t);return}}const _=q();function o(i){i.unix_timestamp=p().unix();const e=V();R(N(e,"register/"),{jsondata:i}).then(m=>{alert(JSON.stringify(i,null,2)),_.push({path:"submited"})}).catch(m=>{console.error(m)})}const s=l(""),r=l(0);function f(i){s.value=i.toString()}return(i,e)=>(a(),d("main",null,[ye,S(U),u("form",{id:"form",onSubmit:w(c,["prevent"])},[ge,r.value==0?(a(),b($e,{key:0,onKidBirthdayChange:f})):h("",!0),r.value==1?(a(),b(tu,{key:1})):h("",!0),r.value==2?(a(),b(fu,{key:2})):h("",!0),r.value==3?(a(),b(Su,{key:3})):h("",!0),r.value==4?(a(),b(Lu,{key:4})):h("",!0),r.value==5?(a(),b(ie,{key:5,"kid-birthday":s.value},null,8,["kid-birthday"])):h("",!0),Ye],40,ke)]))}});export{we as default};
