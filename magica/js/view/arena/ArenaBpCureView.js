define("underscore backbone backboneCommon ajaxControl command text!template/arena/ArenaCurePop.html".split(" "),function(d,e,b,f,k,g){var c=!1,h=function(){return new (e.View.extend({tagName:"div",id:"BpCureWrap",events:function(){var a={};a[b.cgti+" #decideUse"]=this.decideUse;return a},initialize:function(){this.listenTo(b.storage.userStatusList,"change",this.render);this.template=d.template(g);c=!1},render:function(){this.model=b.storage.userStatusList.toJSON();var a=b.storage.userItemList.findWhere({itemId:"CURE_BP"}),
a=a?a.get("quantity"):0;this.$el.html(this.template({model:this.model,quantity:a}));return this},decideUse:function(a){a.preventDefault();b.isScrolled()||c||(c=!0,f.ajaxPost(b.linkList.useItem,{itemId:"CURE_BP",num:1},function(a){c=!1;"error"!==a.resultCode&&(b.responseSetStorage(a),new b.PopupClass({title:"BP回復薬",content:"BPを回復しました。",popupType:"typeE",exClass:"bpCureAfter",closeBtnText:"OK"}))}))},removeView:function(){this.off();this.remove()}}))};return{popupStart:function(){var a=h();new b.PopupClass({title:"BP回復薬",
content:"",popupType:"typeE"},null,null,function(){a.removeView()});b.doc.getElementById("popupArea").getElementsByClassName("popupInner")[0].appendChild(a.render().el)}}});