define("underscore backbone backboneCommon ajaxControl command CharaCommon text!template/chara/CharaComposeAttribute/ComposeAttributeList.html text!template/chara/CharaComposeAttribute/ComposeAttributeItem.html text!template/chara/CharaComposeAttribute/popupItemConfirm.html text!template/chara/CharaComposeAttribute/popupAllItemConfirm.html text!template/chara/CharaComposeAttribute/popupUseItem.html text!template/chara/CharaComposeAttribute/groupWrap.html js/chara/CharaComposeAttribute/popupCheckMaterial".split(" "),
function(e,u,d,A,k,q,H,I,J,K,B,L,v){var n,C,l,w,x,h,D,E,N=u.View.extend({className:"listSec commonFrame3",events:function(){var a={};a[d.cgti+" #bulkBtn"]=M;return a},render:function(){this.$el.html(this.template({model:{typeText:n[0].attributeId}}));return this},initialize:function(a){this.template=e.template(H);$("#CharaComposeAttribute #mainSec").empty();$("#CharaComposeAttribute #mainSec").append(this.render().el);F({composeItemList:n})}}),O=u.View.extend({className:"groupWrap commonFrame3",events:function(){return{}},
render:function(a){this.$el.html(this.template({model:a.model}));return this},initialize:function(a){this.template=e.template(L)}}),R=u.View.extend({className:"composeBtnWrap",events:function(){var a={};a[d.cgti+" .composeBtn"]=P;return a},render:function(a){a=a.model;var c=a.attributeId,b=r({type:a.composeType}),f=Q({model:a});this.$el.html(this.template({model:{attribute:c.toLowerCase(),quantity:a.composeQuantity,type:b.toLowerCase(),status:f,id:a.id,index:a.index}}));return this},initialize:function(a){this.template=
e.template(I)}}),F=function(a){var c=a.composeItemList;$("#CharaComposeAttribute #listMain .listMainInner").empty();a=S({composeItemList:c});e.each(a,function(a,b,c){b=new O;$("#CharaComposeAttribute #listMain .listMainInner").append(b.render({model:a}).el)});var b=[1,2,3,4,5,6,7,8,9,10,11,12],f=0;e.each(a,function(a,d,t){e.each(c,function(c,g,d){a.composeType==c.composeType&&(c.index=b[f],f++,g=new R,$("#CharaComposeAttribute #listMain .listMainInner #"+a.composeType+"ListSec").append(g.render({model:c}).el))})})},
P=function(a){a.preventDefault();k.startSe(1002);var c=$(a.currentTarget).data("id"),b=$(a.currentTarget).data("status");T({targetId:c,status:b,$_selectedElm:$(a.currentTarget)})},T=function(a){var c=a.status,b=G({id:a.targetId}),f={width:"600px",height:"360px",top:"-webkit-calc(50% - 189px)",left:"-webkit-calc(50% - 300px)"};if("composed"==c)h=new d.PopupClass({title:"属性強化",content:'\x3cp class\x3d"text"\x3eすでに強化済みです\x3c/p\x3e',closeBtnText:"OK",param:f,popupId:"popupItemConfirm",exClass:"disable"},
null,function(){},function(){});else if("lock"==c)h=new d.PopupClass({title:"属性強化",content:'\x3cp class\x3d"text"\x3e解除条件：'+b.lockInfo.conditionText+"\x3c/p\x3e",closeBtnText:"OK",param:f,popupId:"popupItemConfirm",exClass:"disable"},null,function(){},function(){});else{var g,m,t;g="強化";m="以下のアイテムを使って強化しますか？";t="";"noEnough"==c&&(g=!1,m="素材が足りないため強化できません",t="c_red");h=new d.PopupClass({title:"属性強化確認",content:e.template(J)({model:{attribute:y({attr:b.attributeId}),composeType:r({type:b.composeType}),
quantity:b.composeQuantity,composeText:m,textClass:t}}),closeBtnText:"キャンセル",decideBtnText:g,decideBtnEvent:function(){U({composeItem:b,$_selectedElm:a.$_selectedElm})},param:f,popupId:"popupItemConfirm",showCurtain:!1},null,function(){z({});var a=e.template(B);e.each(b.needItem,function(b,c,g){b.haveClass="ts_pink";b.quantity>b.have&&(b.haveClass="ts_gold");$("#popupItemConfirm #listSec").append(a({model:b}))});k.getBaseData(d.getNativeObj());5<b.needItem.length&&(d.addClass(d.doc.querySelector("#useItemList .useItemScrollInner"),
"scrollWrap"),d.scrollSet("useItemScrollOuter","useItemScrollInner"));$("#popupItemConfirm #listSec .useItem").on(d.cgti,function(a){a.preventDefault();d.isScrolled()||(k.startSe(1002),v.open({elm:a}))})},function(){p({})})}},U=function(a){var c=a.composeItem;d.tapBlock(!0);var b={};b.charaId=x().card.charaNo;b.selectedId=c.id;A.ajaxPost(d.linkList.userCardComposeAttribute,b,function(b){var g=d.getTargetComposeAttribute({attributeId:c.attributeId});d.responseSetStorage(b);h.remove();p();D({res:b,
composeItem:c,convertType:r({type:c.composeType}),$_selectedElm:a.$_selectedElm,beforeComposeAttribute:g,attribute:y({attr:c.attributeId})})})},G=function(a){var c=a.id,b=!1;e.each(n,function(a,g,d){a.id==c&&(b=a)});return b},y=function(a){return{FIRE:"火",WATER:"水",TIMBER:"木",LIGHT:"光",DARK:"闇",VOID:"無"}[a.attr]},r=function(a){return{HP:"HP",ATTACK:"ATK",DEFENSE:"DEF"}[a.type]},z=function(a){d.addClass(q.charaDataView.el,"popupOpen");d.addClass(q.curtainView.el,"show")},p=function(a){d.removeClass(q.charaDataView.el,
"popupOpen");d.removeClass(q.curtainView.el,"show")},Q=function(a){a=a.model;var c="canCompose";if(a.isComposed)return c="composed";if(a.lockInfo.isLock)return c="lock";e.each(a.needItem,function(a,d,g){a.quantity>a.have&&(c="noEnough")});return c},S=function(a){var c=a.composeItemList,b=[];e.each(["HP","ATTACK","DEFENSE"],function(a,g,d){g={};g.composeType=a;g.composeTypeText=r({type:a});var m=0,f=0;e.each(c,function(b,c,g){b.composeType==a&&(f+=b.composeQuantity,b.isComposed&&(m+=b.composeQuantity))});
g.composedValue=m;g.composeAllValue=f;b.push(g)});return b},M=function(a){a.preventDefault();k.startSe(1002);var c=[];l=JSON.parse(JSON.stringify(C));$(".canCompose").each(function(a,b){c.push({id:$(b).data("id"),index:$(b).data("index")})});c.sort(function(a,b){return a.index-b.index});var b=[];e.each(c,function(a,c,d){V({targetId:a.id})&&b.push(a.id)});W({canComposeIdList:b})},W=function(a){var c=a.canComposeIdList;a={width:"600px",height:"380px",top:"-webkit-calc(50% - 200px)",left:"-webkit-calc(50% - 300px)"};
if(0==c.length)h=new d.PopupClass({title:"一括属性強化",content:'\x3cp class\x3d"text"\x3e強化できる魔力印がありません\x3c/p\x3e',closeBtnText:"OK",param:a,popupId:"popupItemConfirm",exClass:"disable"},null,function(){},function(){});else{var b={composeNum:c.length,attribute:"",HP:{quantity:0,dispClass:"hide",type:"HP"},ATTACK:{quantity:0,dispClass:"hide",type:"ATK"},DEFENSE:{quantity:0,dispClass:"hide",type:"DEF"},attributeId:"",canComposeIdList:c},f=0;b.useItemList=[];e.each(c,function(a,c,d){a=G({id:a});b.useItemList.push(a);
b.attribute=y({attr:a.attributeId});b.attributeId=a.attributeId;b[a.composeType].quantity+=a.composeQuantity;0<b[a.composeType].quantity&&("hide"==b[a.composeType].dispClass&&f++,b[a.composeType].dispClass="")});b.beforeInfo=d.getTargetComposeAttribute({attributeId:b.attributeId});a.height="390px";a.top="-webkit-calc(50% - 205px)";c="statusNo1";3==f?(a.height="470px",a.top="-webkit-calc(50% - 245px)",c="statusNo3"):2==f&&(a.height="430px",a.top="-webkit-calc(50% - 225px)",c="statusNo2");h=new d.PopupClass({title:"属性強化確認",
content:e.template(K)({model:b}),closeBtnText:"キャンセル",decideBtnText:"一括強化",decideBtnEvent:function(){X({composeItemInfo:b})},param:a,popupId:"popupAllItemConfirm",exClass:c,showCurtain:!1},null,function(){l=e.sortBy(l,function(a){return a.sortNum});z({});var a=e.template(B);e.each(l,function(c,d,g){c.quantity=0;e.each(b.useItemList,function(a,b,d){e.each(a.needItem,function(a,b,d){a.id==c.id&&(c.quantity+=a.quantity)})});c.haveClass="ts_pink";c.quantity>c.have&&(c.haveClass="ts_gold");var f=!0;e.each(b,
function(a,b,d){"HP"==b&&"hide"==a.dispClass&&"COMPOSE_ITEM_LIFE"==c.id&&(f=!1);"ATTACK"==b&&"hide"==a.dispClass&&"COMPOSE_ITEM_POWER"==c.id&&(f=!1);"DEFENSE"==b&&"hide"==a.dispClass&&"COMPOSE_ITEM_PROTECT"==c.id&&(f=!1)});f&&$("#popupAllItemConfirm #listSec").append(a({model:c}))});k.getBaseData(d.getNativeObj());$("#popupAllItemConfirm #listSec .useItem").on(d.cgti,function(a){a.preventDefault();d.isScrolled()||(k.startSe(1002),v.open({elm:a}))})},function(){p({})})}},V=function(a){var c=a.targetId,
b=!0;e.each(n,function(a,d,h){a.id==c&&(e.each(a.needItem,function(a,c,d){e.each(l,function(c,d,e){a.id==c.id&&(c.afterUse-=a.quantity,0<=c.afterUse&&b?(b=!0,c.quantity+=a.quantity,c.dispClass=""):(b=!1,c.dispClass="none"),c.have>=c.quantity&&(c.dispClass=""))})}),b||e.each(a.needItem,function(a,b,c){e.each(l,function(b,c,d){a.id==b.id&&(b.afterUse+=a.quantity)})}))});return b},X=function(a){var c=a.composeItemInfo;d.tapBlock(!0);a={};a.charaId=x().card.charaNo;A.ajaxPost(d.linkList.userCardBulkComposeAttribute,
a,function(a){d.responseSetStorage(a);h.remove();p();E({res:a,composeItem:c})})};return{init:function(a){n=a.listJson;C=a.needItemHaveList;x=a.getSelectCharaInfo;D=a.setCharaResultView;E=a.setCharaResultBulkView;v.init({popupOpenCallback:z,popupCloseCallback:p});w=new N},setComposeItem:function(a){F({composeItemList:a.composeItemList})},remove:function(){w&&w.remove()}}});