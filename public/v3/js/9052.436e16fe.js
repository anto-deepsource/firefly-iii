"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[9052],{9052:(e,s,r)=>{r.r(s),r.d(s,{default:()=>H});var t=r(9835),o=r(6970);const a={class:"row q-mx-md"},i={class:"col-12"},l={class:"row q-mx-md q-mt-md"},n={class:"col-12"},u=(0,t._)("div",{class:"text-h6"},"Info for new category",-1),d={class:"row"},m={class:"col-12 q-mb-xs"},c={class:"row q-mx-md"},h={class:"col-12"},b={class:"row"},p={class:"col-12 text-right"},g={class:"row"},f={class:"col-12 text-right"},w=(0,t._)("br",null,null,-1);function _(e,s,r,_,v,q){const y=(0,t.up)("q-btn"),C=(0,t.up)("q-banner"),E=(0,t.up)("q-card-section"),k=(0,t.up)("q-input"),x=(0,t.up)("q-card"),R=(0,t.up)("q-checkbox"),I=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(I,null,{default:(0,t.w5)((()=>[(0,t._)("div",a,[(0,t._)("div",i,[""!==v.errorMessage?((0,t.wg)(),(0,t.j4)(C,{key:0,class:"bg-orange text-white","inline-actions":"",rounded:""},{action:(0,t.w5)((()=>[(0,t.Wm)(y,{flat:"",label:"Dismiss",onClick:q.dismissBanner},null,8,["onClick"])])),default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(v.errorMessage)+" ",1)])),_:1})):(0,t.kq)("",!0)])]),(0,t._)("div",l,[(0,t._)("div",n,[(0,t.Wm)(x,{bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[u])),_:1}),(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t._)("div",d,[(0,t._)("div",m,[(0,t.Wm)(k,{modelValue:v.name,"onUpdate:modelValue":s[0]||(s[0]=e=>v.name=e),disable:q.disabledInput,error:v.hasSubmissionErrors.name,"error-message":v.submissionErrors.name,label:e.$t("form.name"),"bottom-slots":"",clearable:"",outlined:"",type:"text"},null,8,["modelValue","disable","error","error-message","label"])])])])),_:1})])),_:1})])]),(0,t._)("div",c,[(0,t._)("div",h,[(0,t.Wm)(x,{class:"q-mt-xs"},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t._)("div",b,[(0,t._)("div",p,[(0,t.Wm)(y,{disable:q.disabledInput,color:"primary",label:"Submit",onClick:q.submitCategory},null,8,["disable","onClick"])])]),(0,t._)("div",g,[(0,t._)("div",f,[(0,t.Wm)(R,{modelValue:v.doReturnHere,"onUpdate:modelValue":s[1]||(s[1]=e=>v.doReturnHere=e),disable:q.disabledInput,label:"Return here to create another one","left-label":""},null,8,["modelValue","disable"]),w,(0,t.Wm)(R,{modelValue:v.doResetForm,"onUpdate:modelValue":s[2]||(s[2]=e=>v.doResetForm=e),disable:!v.doReturnHere||q.disabledInput,label:"Reset form after submission","left-label":""},null,8,["modelValue","disable"])])])])),_:1})])),_:1})])])])),_:1})}var v=r(1569);class q{post(e){let s="/api/v1/categories";return v.api.post(s,e)}}const y={name:"Create",data(){return{submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",type:"",name:""}},computed:{disabledInput:function(){return this.submitting}},created(){this.resetForm(),this.type=this.$route.params.type},methods:{resetForm:function(){this.name="",this.resetErrors()},resetErrors:function(){this.submissionErrors={name:""},this.hasSubmissionErrors={name:!1}},submitCategory:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const e=this.buildCategory();let s=new q;s.post(e).catch(this.processErrors).then(this.processSuccess)},buildCategory:function(){return{name:this.name}},dismissBanner:function(){this.errorMessage=""},processSuccess:function(e){if(!e)return;this.submitting=!1;let s={level:"success",text:"I am new category",show:!0,action:{show:!0,text:"Go to category",link:{name:"categories.show",params:{id:parseInt(e.data.data.id)}}}};this.$q.localStorage.set("flash",s),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(e){if(e.response){let s=e.response.data;this.errorMessage=s.message,console.log(s);for(let e in s.errors)s.errors.hasOwnProperty(e)&&(this.submissionErrors[e]=s.errors[e][0],this.hasSubmissionErrors[e]=!0)}this.submitting=!1}}};var C=r(1639),E=r(9885),k=r(7128),x=r(8879),R=r(4458),I=r(3190),S=r(6611),W=r(1221),V=r(9984),Z=r.n(V);const Q=(0,C.Z)(y,[["render",_]]),H=Q;Z()(y,"components",{QPage:E.Z,QBanner:k.Z,QBtn:x.Z,QCard:R.Z,QCardSection:I.Z,QInput:S.Z,QCheckbox:W.Z})}}]);