define("underscore backbone backboneCommon ajaxControl command js/gacha/GachaSaleSettingPopupView".split(" "),function(k,l,b,m,g,n){l.Model.extend({});return l.View.extend({className:function(){var a="gachaBtn TE se_decide";!1===this.model.toJSON().enable&&(a+=" off");return a},events:function(){var a={};a[b.cgti]=this.gachaPopup;return a},initialize:function(a){this.drawFlg=!1;this.listenTo(this.parentView,"removeBtnView",this.removeView)},render:function(){var a=this.model.toJSON();"NORMAL10"===
a.beanKind&&this.checkFreeGacha()&&(this.btnBadge=a.userGachaKind?"badge_free_additional":"badge_free",this.free=!0);0===a.needQuantity&&(this.free=!0);!0===a.enable&&a.enableImagePath?this.btnBadge=a.userGachaKind&&"badge_stepup"!==a.enableImagePath?"badge_free_additional":a.enableImagePath:!1===a.enable&&a.disableImagePath&&(this.btnBadge=a.disableImagePath);"badge_stepup"===this.btnBadge&&(this.badgeText=this.parentView.model.toJSON().viewParameterMap?this.parentView.model.toJSON().viewParameterMap.BADGE_TEXT:
"STEP 1",this.parentView.model.toJSON().viewParameterMap&&this.parentView.model.toJSON().viewParameterMap.BALLOON_IMG&&(this.btnBadge=this.parentView.model.toJSON().viewParameterMap.BALLOON_IMG));this.$el.html(this.template({model:this.model.toJSON()}));this.free&&"NORMAL10"!==a.beanKind&&b.addClass(this.el,"freeBtn");return this},gachaPopup:function(a){if(a&&(a.preventDefault(),b.isScrolled()))return;a=this.model.toJSON();if(!(this.checkCapacity()||"NORMAL10"===a.beanKind&&this.checkFreeGacha(!0)||
!a.userUseItem.subItemFlag&&this.checkGachaPoint())){var c=this.parentView.model.toJSON?this.parentView.model.toJSON():this.parentView.model.playedGacha,e="typeA",h="";if(0<a.needQuantity&&("MONEY"===a.userUseItem.item.itemCode||"PURCHASED_MONEY"===a.userUseItem.item.itemCode)){e="typeB";h=" moneyPopup";if(-1!==c.gachaType.indexOf("SELECTABLE_MEMORIA")||-1!==c.gachaType.indexOf("SELECTABLE"))h=" moneyPopup selectableGacha";-1!==c.gachaType.indexOf("SELECTABLE_TUTORIAL")&&(h=" moneyPopup selectableGacha tutorialGacha");
var d=!1;"PURCHASED_MONEY"===a.userUseItem.item.itemCode&&(d=!0);d=b.calcExpendStone({quantity:a.needQuantity,isPurchasedMoneyOnly:d});a.remainUserMoney=d.userMoney;a.remainPresentedMoney=d.presentedMoney;a.remainTotalMoney=d.totalMoney;a.remainClassUserMoney="";a.remainClassPresentedMoney="";a.remainClassTotalMoney="";a.userUseItem.moneyObj.totalMoney==a.remainTotalMoney&&(a.remainClassTotalMoney="same");a.userUseItem.moneyObj.userMoney==a.remainUserMoney&&(a.remainClassUserMoney="same");a.userUseItem.moneyObj.presentedMoney==
a.remainPresentedMoney&&(a.remainClassPresentedMoney="same");var f=d="";a.viewStartAt&&(d=b.getDateShortening({date:a.viewStartAt}),d=d.yr+"/"+d.mo+"/"+d.da+" "+d.ho+":"+d.mi);a.viewEndAt&&(f=b.getDateShortening({date:a.viewEndAt}),f=f.yr+"/"+f.mo+"/"+f.da+" "+f.ho+":"+f.mi);a.openTermText="";d&&f?a.openTermText=d+" 〜 "+f+"まで":d?a.openTermText=d+" 〜 ":f&&(a.openTermText="〜 "+f+"まで")}a.openTermClass="";-1!==c.gachaType.indexOf("SELECTABLE_MEMORIA")&&(a.openTermClass="selectableMemoria");d=k.template($("#GachaStartPop").text())({model:a});
if(-1!==c.gachaType.indexOf("SELECTABLE_MEMORIA")){var g="現在、以下のメモリアを選択しています。\x3cbr\x3e\x3cdiv id\x3d'pieceImgList' class\x3d'commonFrame2'\x3e";k.each(c.selectablePieceList,function(a){-1!==b.selectablePieceIdList.indexOf(a.pieceId)&&(g+="\x3cimg src\x3d'/magica/resource/image_web/memoria/memoria_"+a.pieceId+"_s.png' width\x3d'80'\x3e")});d=g+"\x3c/div\x3e"+d}else-1!==c.gachaType.indexOf("SELECTABLE")&&(c=b.selectableCharaData[c.id],d=c.title?"現在、\x3cspan class\x3d'c_pink'\x3e"+c.cardName+"("+c.title+
")\x3c/span\x3eを選択しています。\x3cbr\x3e"+d:"現在、\x3cspan class\x3d'c_pink'\x3e"+c.cardName+"\x3c/span\x3eを選択しています。\x3cbr\x3e"+d);new b.PopupClass({title:a.name,content:d,popupType:e,decideBtnText:"ガチャを引く",decideBtnEvent:function(a){a.preventDefault();b.isScrolled()||(b.g_popup_instance.popupView.close(),this.gachaStart())}.bind(this),closeBtnText:"キャンセル",exClass:"gachaPop"+h},null,this.gachaPopupCallback.bind(this),this.gachaPopupCloseEvent)}},gachaPopupCallback:function(){var a=function(a){a.preventDefault();
b.isScrolled()||n.instantPopup(this.gachaPopup.bind(this))}.bind(this);$("#saleSettingBtn").on(b.cgti,a);g.getBaseData(b.getNativeObj())},gachaPopupCloseEvent:function(){$("#saleSettingBtn").off(b.cgti)},checkCapacity:function(){var a=b.storage.userPieceList.toJSON().length;if(-100>=b.storage.gameUser.get("cardCapacity")-a)return new b.PopupClass({title:this.model.toJSON().name,content:"所持可能なメモリアの上限を100枠以上超えています。\x3cbr\x3eメモリアの所持枠を空けてください。",decideBtnText:"メモリアへ",decideBtnLink:"#/MemoriaTop",closeBtnText:"キャンセル",
exClass:"gachaPop"}),!0},checkFreeGacha:function(a){var c=m.getPageJson(),e=b.storage.gameUser.get("freeGachaAt")?b.storage.gameUser.get("freeGachaAt"):"";if(""===e||e.substr(0,10)!==c.currentTime.substr(0,10))return a&&(a="1日1回無料10連ノーマルガチャを行います。\x3cbr\x3eよろしいですか？\x3cdiv id\x3d'saleSettingBtn' class\x3d'sb_gold_02 TE se_decide'\x3e自動設定\x3c/div\x3e",this.model.attributes.userGachaKind&&(a=this.model.attributes.userGachaKind,a="1日1回無料10連ノーマルガチャを行います。\x3cbr\x3eよろしいですか？\x3cdiv class\x3d'gachaAttentionArea commonFrame3'\x3e本日、\x3cspan class\x3d'c_pink'\x3e残り"+
(a.totalCount-a.canRemainCount)+"回無料\x3c/span\x3eでガチャを行うことができます\x3c/div\x3e\x3cdiv id\x3d'saleSettingBtn' class\x3d'sb_gold_02 TE se_decide'\x3e自動設定\x3c/div\x3e"),new b.PopupClass({title:this.model.toJSON().name,content:a,decideBtnText:"ガチャを引く",decideBtnEvent:function(a){a.preventDefault();b.isScrolled()||(b.freeNormalGacha=!0,b.g_popup_instance.popupView.close(),this.gachaStart())}.bind(this),closeBtnText:"キャンセル",exClass:"gachaPop"},null,this.gachaPopupCallback.bind(this),this.gachaPopupCloseEvent)),
!0},checkGachaPoint:function(){var a=k.clone(this.model.toJSON());if(!a.userUseItem.subItemFlag){if("MONEY"===a.userUseItem.item.itemCode||"PURCHASED_MONEY"===a.userUseItem.item.itemCode){var c=b.getTotalStone();"MONEY"===a.userUseItem.item.itemCode&&(a.userUseItem.quantity=c.totalMoney);"PURCHASED_MONEY"===a.userUseItem.item.itemCode&&(a.userUseItem.quantity=c.userMoney);a.userUseItem.moneyObj=c;this.model.set(a,{silent:!0})}if(a.userUseItem.quantity<a.needQuantity)return c=k.template($("#GachaConfPop").text())({model:a,
needPoint:a.needQuantity-a.userUseItem.quantity}),c={title:this.model.toJSON().name,content:c,exClass:"gachaPop",closeBtnText:"キャンセル"},"MONEY"===a.userUseItem.item.itemCode||"PURCHASED_MONEY"===a.userUseItem.item.itemCode?(c.decideBtnText="マギアストーン購入",c.decideBtnEvent=function(a){a.preventDefault();b.isScrolled()||b.globalMenuView.moneyPopup(a)}):"YELL"!==a.userUseItem.item.itemCode&&(c.decideBtnText="ショップへ",c.decideBtnEvent=function(a){a.preventDefault();b.isScrolled()||(location.href="#/ShopTop")}),
new b.PopupClass(c),!0}},gachaStart:function(a){var c=this.model.toJSON();if(!this.drawFlg){this.drawFlg=b.androidKeyStop=!0;b.playedGachaPrm=null;b.playedGachaType=null;b.gachaDisp=null;b.playedGachaKindId=null;var e={gachaBeanKind:c.beanKind,gachaScheduleId:this.parentView.nowGacha.id};"SELECTABLE_TUTORIAL"===e.gachaBeanKind&&b.selectableChara[this.parentView.nowGacha.id]&&(e.cardId=b.selectableChara[this.parentView.nowGacha.id].cardId);if(a=localStorage.getItem("GachaSaleSeting")){a=a.split(",");
for(var h=0;h<a.length;){switch(a[h]){case "EVENT":e.isSaleEvent=!0;break;default:e.autoSaleRankPieceList||(e.autoSaleRankPieceList=[]),e.autoSaleRankPieceList.push(a[h])}h=h+1|0}}var d=this.parentView.model.toJSON?this.parentView.model.toJSON():this.parentView.model.playedGacha;$("#popupArea").on(b.cgti,"#resultCodeError .popupCloseBtn",function(a){a.preventDefault();b.isScrolled()||($("#popupArea").off(),g.nativeReload("#/TopPage"))});g.stopNormalGachaMemoria();g.hideMiniChara();b.toastStop=!0;
m.ajaxPost(b.linkList.gachaResult,e,function(a){b.responseSetStorage(a);k.each(a.gachaAnimation.autoSalePieceIdList,function(a){b.storage.userPieceList.remove(b.storage.userPieceList.findWhere({id:a}))});$(b.ready.target).on("webkitAnimationEnd",function(){$(b.ready.target).off("webkitAnimationEnd");$(b.ready.target).on("webkitAnimationEnd",function(a){"readyFadeOut"==a.originalEvent.animationName&&(b.ready.target.className="")});g.changeBg("web_black.jpg");g.stopNormalGachaMemoria();g.hideMiniChara();
b.gachaResultJson=a;b.playedGachaPrm=e;b.gachaDisp=d.id;b.playedGachaType=d.gachaType;b.playedGachaKindId=c.gachaKindId;b.globalMenuView.removeView();b.globalMenuView=null;b.reGacha=!0;setTimeout(function(){if(b.tutorialId)b.tutorialUtil[b.tutorialId]();else location.href="#/GachaAnimation"},500)});b.addClass(b.ready.target,"preNativeFadeIn")})}},removeView:function(){this.off();this.remove()}})});