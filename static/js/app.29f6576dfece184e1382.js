webpackJsonp([0],{"1DEM":function(t,e){},"2IfY":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),t._v(" "),s("router-view")],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"5RmD":function(t,e){},"7vr7":function(t,e){},DDjb:function(t,e,s){"use strict";var a=s("mvHQ"),i=s.n(a),r=s("bRBh"),n=s("Zklj");e.a={name:"card-form",data:function(){return{defaultItem:{title:"",artist:"",regress:0,rhythm:{value:100,state:!0},solo:{value:100,state:!1}},item:{},submitted:!1,error:!1}},props:{openModal:Boolean,card:Object,edit:Boolean},watch:{openModal:function(){this.submitted=!1,this.error=!1,this.card&&this.edit?this.item=this.card:this.item=JSON.parse(i()(this.defaultItem));var t=this,e=this.$el.querySelector(".modal");e.classList.toggle("is-active"),e.querySelector(".modal-background").onclick=function(){t.closeModal()}}},methods:{closeModal:function(){this.$el.querySelector(".modal").classList.toggle("is-active"),this.item=JSON.parse(i()(this.defaultItem))},submit:function(t){console.log("submit: ",JSON.parse(i()(t))),this.isValid(t)?this.submitted=!0:this.error=!0},submitData:function(t){this.edit?r.a.updateItem(t):r.a.addItem(t),this.closeModal()},isValid:function(t){return t.title.trim()&&t.artist.trim()},handleProgressChange:function(t){this.item.rhythm=t.rhythm,this.item.solo=t.solo,this.submitData(this.item)},resetError:function(){this.error=!1}},components:{progressControl:n.a}}},FDYt:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",{staticClass:"title"},[t._v("\n            "+t._s(t.card.title)+"\n        ")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.card.artist)+"\n        ")]),t._v(" "),s("progress",{staticClass:"progress",class:[{"is-success":t.card.regress>65,"is-warning":t.card.regress<=65&&t.card.regress>35,"is-danger":t.card.regress<=35}],attrs:{max:"100"},domProps:{value:t.card.regress}}),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.progressPercentage)+" %\n        ")])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",on:{click:t.editCard}},[t._v("Edit")]),t._v(" "),s("a",{staticClass:"card-footer-item",on:{click:function(e){t.deleteCard(t.card)}}},[t._v("Delete")]),t._v(" "),s("a",{staticClass:"card-footer-item",on:{click:function(e){t.resetRegress(t.card)}}},[t._v("Power Up!")])]),t._v(" "),s("card-form",{attrs:{openModal:t.openForm,card:t.card,edit:!0}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},FHQl:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("h2",{staticClass:"title navbar-item"},[t._v(t._s(t.title))]),t._v(" "),s("a",{staticClass:"button is-dark is-outlined",on:{click:t.openCardForm}},[t._v("\n            New\n        ")])]),t._v(" "),s("card-form",{attrs:{openModal:t.openForm}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},IWYc:function(t,e,s){"use strict";function a(t){s("f0Xv")}var i=s("yxFX"),r=s("Mv2w"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,null,null);e.a=l.exports},JyAC:function(t,e){},K3F8:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress-control"},[s("div",{staticClass:"field"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-2"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.rhythmSelection,expression:"rhythmSelection"}],attrs:{type:"checkbox",disabled:t.defaultSelection},domProps:{checked:Array.isArray(t.rhythmSelection)?t._i(t.rhythmSelection,null)>-1:t.rhythmSelection},on:{__c:function(e){var s=t.rhythmSelection,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.rhythmSelection=s.concat([null])):r>-1&&(t.rhythmSelection=s.slice(0,r).concat(s.slice(r+1)))}else t.rhythmSelection=i}}}),t._v("\n                        Rhythm\n                    ")])])]),t._v(" "),s("div",{staticClass:"tile"},[s("div",{staticClass:"control"},[s("slider",{class:t.rhythmSelection||t.defaultSelection?"is-success":"is-light",attrs:{disabled:!t.rhythmSelection,size:"medium",value:t.rhythmValue,max:100,step:1,"is-fullwidth":""},on:{change:t.updateRhythmValue}})],1)])])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-2"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.soloSelection,expression:"soloSelection"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.soloSelection)?t._i(t.soloSelection,null)>-1:t.soloSelection},on:{__c:function(e){var s=t.soloSelection,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.soloSelection=s.concat([null])):r>-1&&(t.soloSelection=s.slice(0,r).concat(s.slice(r+1)))}else t.soloSelection=i}}}),t._v("\n                        Solo\n                    ")])])]),t._v(" "),s("div",{staticClass:"tile"},[s("div",{staticClass:"control"},[s("slider",{class:t.soloSelection?"is-success":"is-light",attrs:{disabled:!t.soloSelection,size:"medium",value:t.soloValue,max:100,step:1,"is-fullwidth":""},on:{change:t.updateSoloValue}})],1)])])])])},i=[],r={render:a,staticRenderFns:i};e.a=r},Lwe2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello section"},[s("div",{staticClass:"container"},[s("div",{},t._l(t.cards,function(t){return s("card",{key:t.id,attrs:{card:t}})}))])])},i=[],r={render:a,staticRenderFns:i};e.a=r},M93x:function(t,e,s){"use strict";function a(t){s("JyAC"),s("7vr7")}var i=s("xJD8"),r=s("2IfY"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,null,null);e.a=l.exports},Mv2w:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.realValue,expression:"realValue"}],class:t.classObject,attrs:{type:"range",min:t.min,max:t.max,step:t.step,name:t.name,orient:t.vertical&&"vertical",disabled:t.disabled,number:""},domProps:{value:t.realValue},on:{__r:function(e){t.realValue=e.target.value}}})},i=[],r={render:a,staticRenderFns:i};e.a=r},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("M93x"),r=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",data:{msg:"s"},router:r.a,template:"<App/>",components:{App:i.a}})},"Qt+R":function(t,e){},R5He:function(t,e){},SRJI:function(t,e,s){"use strict";function a(t){s("Qt+R")}var i=s("DDjb"),r=s("y6z5"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,"data-v-2c493659",null);e.a=l.exports},TdT6:function(t,e,s){"use strict";function a(t){s("iuPd")}var i=s("U+zB"),r=s("FHQl"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,"data-v-6f085996",null);e.a=l.exports},"U+zB":function(t,e,s){"use strict";var a=s("SRJI");e.a={name:"navbar",data:function(){return{title:"Shredema",openForm:!1}},methods:{openCardForm:function(){this.openForm=!this.openForm}},components:{"card-form":a.a}}},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),i=s("/ocq"),r=s("qSdX");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:r.a}]})},Zklj:function(t,e,s){"use strict";function a(t){s("1DEM")}var i=s("lpOG"),r=s("K3F8"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,"data-v-b5238d6c",null);e.a=l.exports},bRBh:function(t,e,s){"use strict";var a=s("mvHQ"),i=s.n(a),r=s("wBIE"),n={state:{list:[],nextId:0},addItem:function(t){r.a.create(t),this.state.list.unshift(t),localStorage.setItem("state",i()(this.state))},updateItem:function(t){r.a.update(t);var e=r.a.getItemIndex(t);e>=0&&(this.state.list[e]=t,localStorage.setItem("state",i()(this.state)))},removeItem:function(t){r.a.remove(t);var e=r.a.getItemIndex(t);e>=0&&(this.state.list.splice(e,1),localStorage.setItem("state",i()(this.state)))},initStore:function(){var t=r.a.getList();t&&(this.state=t)}};e.a=n},f0Xv:function(t,e){},gfTN:function(t,e,s){"use strict";function a(t){s("5RmD")}var i=s("mFMg"),r=s("FDYt"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,"data-v-148c8416",null);e.a=l.exports},iuPd:function(t,e){},lpOG:function(t,e,s){"use strict";var a=s("IWYc");e.a={name:"progress-control",props:["rhythm","solo","submitted"],data:function(){return{rhythmSelection:!1,soloSelection:!1,rhythmValue:100,soloValue:100}},watch:{submitted:function(t){t&&this.returnData()},rhythm:function(t){this.rhythmSelection=t.state,this.rhythmValue=t.value},solo:function(t){this.soloSelection=t.state,this.soloValue=t.value}},computed:{defaultSelection:function(){var t=!this.soloSelection&&!this.rhythmSelection;return t&&(this.rhythmSelection=!this.soloSelection&&!this.rhythmSelection),t}},methods:{updateSoloValue:function(t){this.soloValue=Number(t)},updateRhythmValue:function(t){this.rhythmValue=Number(t)},returnData:function(){var t={rhythm:{value:this.rhythmValue,state:this.rhythmSelection},solo:{value:this.soloValue,state:this.soloSelection}};this.$emit("returnData",t)}},components:{slider:a.a}}},mFMg:function(t,e,s){"use strict";var a=s("SRJI"),i=s("bRBh");e.a={name:"card",props:{card:{}},data:function(){return{openForm:!1}},computed:{progressPercentage:function(){return 100*((this.card.solo.state?this.card.solo.value:0)+(this.card.rhythm.state?this.card.rhythm.value:0))/(this.card.solo.state&&this.card.rhythm.state?200:100)}},methods:{deleteCard:function(t){i.a.removeItem(t)},editCard:function(){this.openForm=!this.openForm},resetRegress:function(t){this.card.rehearsed_at=Date.now(),this.smoothProgressAnimation(t)},smoothProgressAnimation:function(t){var e=setInterval(function(){t.regress<100?(t.regress+=1,t.regress>100&&(t.regress=100)):clearInterval(e)},15)}},components:{cardForm:a.a}}},pMZz:function(t,e,s){"use strict";var a=s("bRBh"),i=s("gfTN");e.a={name:"hello",data:function(){return{state:a.a.state,cards:[]}},components:{card:i.a},created:function(){this.cards=this.state.list}}},qSdX:function(t,e,s){"use strict";function a(t){s("R5He")}var i=s("pMZz"),r=s("Lwe2"),n=s("VU/8"),o=a,l=n(i.a,r.a,o,"data-v-0e0c4558",null);e.a=l.exports},wBIE:function(t,e,s){"use strict";function a(t){t.id=i(),t.created_at=new Date,t.rehearsed_at=new Date,t.regress=n.calculateRegress(t)}function i(){return++r.a.state.nextId}var r=s("bRBh"),n={create:function(t){t=a(t)},update:function(){},remove:function(){},getList:function(){var t=this,e=JSON.parse(localStorage.getItem("state"));return e.list.forEach(function(e){e.regress=t.calculateRegress(e)}),e},getItemIndex:function(t){for(var e=void 0,s=0;s<r.a.state.list.length;s++)if(r.a.state.list[s].id===t.id){e=s;break}return e},calculateRegress:function(t){var e=Date.now()-new Date(t.rehearsed_at).getTime(),s=100-100*e/12096e5;return s<0&&(s=0),s}};e.a=n},xJD8:function(t,e,s){"use strict";var a=s("bRBh"),i=s("TdT6");a.a.initStore(),e.a={name:"app",components:{navbar:i.a}}},y6z5:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-form"},[s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.edit?"Edit":"New")+" Song")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("form",[s("div",{staticClass:"field"},[s("label",{staticClass:"label is-pulled-left"},[t._v("Artist")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.artist,expression:"item.artist"}],staticClass:"input",class:{"is-danger":t.error},attrs:{type:"text",placeholder:"e.g The Demos"},domProps:{value:t.item.artist},on:{input:[function(e){e.target.composing||(t.item.artist=e.target.value)},t.resetError]}})]),t._v(" "),s("label",{staticClass:"label is-pulled-left"},[t._v("Title")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"input",class:{"is-danger":t.error},attrs:{type:"text",placeholder:"e.g Rock it"},domProps:{value:t.item.title},on:{input:[function(e){e.target.composing||(t.item.title=e.target.value)},t.resetError]}})])]),t._v(" "),t.error?s("p",{staticClass:"help is-danger"},[t._v("\n                        All fields are required\n                    ")]):t._e(),t._v(" "),s("div",{staticClass:"box"},[s("progress-control",{attrs:{submitted:t.submitted,rhythm:t.item.rhythm,solo:t.item.solo},on:{returnData:t.handleProgressChange}})],1)])]),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success",on:{click:function(e){t.submit(t.item)}}},[t._v("Save")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.closeModal}},[t._v("Cancel")])])])])])},i=[],r={render:a,staticRenderFns:i};e.a=r},yxFX:function(t,e,s){"use strict";var a=s("bOdI"),i=s.n(a);e.a={props:{min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},value:{type:Number,default:0},type:String,name:String,size:String,isFullwidth:Boolean,disabled:Boolean,vertical:Boolean},data:function(){return{realValue:this.value}},beforeMount:function(){if(this.max<this.min)throw"Unexpected range setting: Maximum cannot be less than minimum";this.update(this.value)},mounted:function(){this.$el.style.setProperty("--low",this.low),this.$el.style.setProperty("--high",this.high)},watch:{realValue:function(t,e){Number(t)!==Number(e)&&(this.$el.style.setProperty("--high",this.high),this.$emit("change",t))},value:function(t){this.update(t)}},methods:{update:function(t){t>this.max?this.realValue=this.max:t<this.min?this.realValue=this.min:this.realValue=t}},computed:{low:function(){return"0%"},high:function(){return(this.realValue-this.min)/(this.max-this.min)*100+"%"},classObject:function(){var t,e=this.type,s=this.size,a=this.isFullwidth;return t={slider:!0},i()(t,"is-"+e,e),i()(t,"is-"+s,s),i()(t,"is-fullwidth",a),t}}}}},["NHnr"]);
//# sourceMappingURL=app.29f6576dfece184e1382.js.map