define("backboneCommon ajaxControl command QuestUtil cardUtil memoriaUtil js/view/user/APPopup js/quest/puellaHistoria/CreateModel js/event/EventArenaRankMatch/Utility js/event/EventArenaRankMatch/parts/DeckEditCountDown js/quest/puellaHistoria/lastBattle/Utility js/quest/scene0/Utility".split(" "),function(a,u,h,y,z,D,t,A,w,J,v,x){function E(b){if(b){b=b.webData;var c=b.userQuestBattleResultList[0].questBattle;a.responseSetStorage(b);if(b=(b=a.storage.userSectionList.findWhere({sectionId:c.sectionId}))?
b.toJSON():null)c=(c=a.storage.userChapterList.findWhere({chapterId:b.section.genericId}))?c.toJSON():null,a.playChapter=c,a.playSection=b}}t=function(a){this.deckCatType=a;this.questDisableFlg=!1};t.prototype.setCurrentDeckType=function(){var b=w.getDeckType(),c=u.getPageJson(),e=null;this.deckCatType&&"quest"!==this.deckCatType?"support"==this.deckCatType?e=20:"arena"==this.deckCatType?e=21:"eventArena"==this.deckCatType?e=22:"arenaRankMatchAttack"==this.deckCatType?e=a.currentArenaRankMatchDeckType?
a.currentArenaRankMatchDeckType:b.attackBase+1:"arenaRankMatchDefence"==this.deckCatType?e=b.defence:"dungeon"===this.deckCatType||"dungeonInMap"===this.deckCatType?e=a.currentDungeonDeckType?a.currentDungeonDeckType:a.userEventDungeon&&a.userEventDungeon.selectedDeckType?a.userEventDungeon.selectedDeckType:41:"group"==this.deckCatType||"groupPrepare"==this.deckCatType?e=a.currentGroupDeckType?a.currentGroupDeckType:a.groupDeckType?a.groupDeckType:51:"endless"==this.deckCatType?e=a.currentEndlessDeckType?
a.currentEndlessDeckType:61:"extermination"==this.deckCatType?e=a.currentExterminationDeckType?a.currentExterminationDeckType:71:"secondPartLast"==this.deckCatType?e=a.currentSecondPartLastDeckType?a.currentSecondPartLastDeckType:101:"accomplish"==this.deckCatType?e=81:"puellaHistoriaGroupRaid"==this.deckCatType?e=a.currentPuellaHistoriaGroupRaidDeckType?a.currentPuellaHistoriaGroupRaidDeckType:v.getDeckType({})+1:"scene0Challenge"==this.deckCatType&&(e=a.currentScene0ChallengeDeckType?a.currentScene0ChallengeDeckType:
x.getDeckType()+1):e=a.currentDeckType?a.currentDeckType:c.gameUser&&c.gameUser.deckType&&20>c.gameUser.deckType?c.gameUser.deckType:11;return e||11};t.prototype.deckPrmInit=function(){var b=u.getPageJson(),c=this.setCurrentDeckType(),e=a.storage.userDeckList.findWhere({deckType:c});e?b=this.deckDataCreate(e.toJSON()):(b={deckType:c,formationSheetId:111,formationSheet:_.findWhere(b.userFormationSheetList,{formationSheetId:111}).formationSheet,name:"チーム"+String(c).slice(-1),switchNpcEventId:null,switchNpcFlag1:null,
switchNpcFlag2:null,switchNpcFlag3:null,switchNpcFlag4:null,switchNpcFlag5:null,switchNpcFlag6:null,switchNpcFlag7:null,switchNpcFlag8:null,switchNpcFlag9:null,switchNpcFlag10:null,rentalPieceSetId1:null,rentalPieceSetId2:null,rentalPieceSetId3:null,rentalPieceSetId4:null,rentalPieceSetId5:null,rentalPieceSetId6:null,rentalPieceSetId7:null,rentalPieceSetId8:null,rentalPieceSetId9:null,rentalPieceSetId10:null},this.deckCatType&&"quest"!==this.deckCatType||(b.questPositionHelper=3),e=w.getDeckType(),
c==e.attackBase+1&&(b.name="攻撃編成"),c==e.defence&&(b.name="防衛編成"),b=this.deckDataCreate(b));return{currentDeckType:c,currentDeckModel:b}};t.prototype.savePrmCreate=function(a,c){for(var b={deckType:a.deckType,formationSheetId:a.formationSheetId,name:a.name,questPositionHelper:a.questPositionHelper,episodeUserCardId:a.questEpisodeUserCardId},d=[],k=[],l=[],g=0;10>g;){if(a["userCardId"+(g+1)]){d.push(a["userCardId"+(g+1)]);k.push(a["questPositionId"+(g+1)]);for(var q="place"+a["questPositionId"+(g+1)],
n=[],r=0;4>r;){if(a.userPieceObj[q]&&a.userPieceObj[q][r]&&!a.userPieceObj[q][r].invalidFlag){var p="userPieceId"+("000"+(g+1)+(r+1)).slice(-3);a[p]&&n.push(a[p])}r=r+1|0}l.push(n)}g=g+1|0}if("notRentalData"!=c)for(b.rentalPieceSetIdList=[],g=1;10>=g;g++)void 0!=a["rentalPieceSetId"+g]?b.rentalPieceSetIdList.push(a["rentalPieceSetId"+g]):b.rentalPieceSetIdList.push(null);b.userCardIds=d;b.questPositionIds=k;b.userPieceIdLists=l;return b};t.prototype.deckDataCreate=function(b){var c=this;a.storage.userCardListEx||
z.createCardList();var e=u.getPageJson(),d=_.clone(b);d.deckCatType=this.deckCatType;if("RegularEventExterminationFormation"!=a.location||"SecondPartLastFormation"!=a.location)a.firstLoad=null!=a.firstLoad?a.firstLoad+1:0;if(!d.name&&!this.deckCatType||!d.name&&"quest"===this.deckCatType||!d.name&&"extermination"===this.deckCatType||!d.name&&"secondPartLast"===this.deckCatType||!d.name&&"dungeon"===this.deckCatType||!d.name&&"dungeonInMap"===this.deckCatType){var k="チーム"+String(b.deckType).slice(-1);
d.name=k}var l={},g=[];_.each(d.formationSheet,function(a,c){if(-1!==c.indexOf("placeSkill")&&-1===c.indexOf("placeSkillId")){g.push(c.split("placeSkill")[1]);var b=null;a.art1&&(b=[a.viewAttributeId]);l[c]=b}});"support"==this.deckCatType?d.posArr="123456".split(""):("dungeon"!=this.deckCatType&&"dungeonInMap"!=this.deckCatType||Array.prototype.push.apply(g,["10","11"]),d.placeEffect=l,d.posArr=g);a.switchNpcValidList||(a.switchNpcValidList=[]);var q=[];if(a.questBattleModel)for(k=0;5>k;++k){var n=
a.questBattleModel.questBattle["switchCharaId"+(k+1)];n&&(void 0!==a.switchNpcValidList[n]?(q[n]=a.switchNpcValidList[n],q["load_"+n]=a.switchNpcValidList["load_"+n]):(q[n]=!0,q["load_"+n]=!1),a.switchNpcValidList["set_"+n]&&(q["set_"+n]=a.switchNpcValidList["set_"+n]))}a.switchNpcValidList=q;var r={};d.leaderPos=null;_.each(d.posArr,function(c,e){var m="userCardId"+(e+1),k="questPositionId"+(e+1),g="switchNpcFlag"+(e+1);if(d[m]){var m=d[m],f=_.findWhere(a.storage.userCardListEx.toJSON(),{id:m});
f.switchNpcPos=e+1;f.userCardId==d.questEpisodeUserCardId&&(d.leaderPos=Number(b[k]));a.userRegularEventAccomplishCharaArr&&F(f);if(a.rentalPieceData&&a.rentalPieceData.rentalPieceSetList&&a.rentalPieceData.rentalFlag){2>a.firstLoad&&(a.rentalPieceData[m]=d["rentalPieceSetId"+(e+1)]?d["rentalPieceSetId"+(e+1)]:null);if(a.rentalPieceData[m]){var l=_.findWhere(a.rentalPieceData.rentalPieceSetList,{pieceSetId:a.rentalPieceData[m]});if(void 0==l||null==l)l=null;a.rentalSetFlag||(a.rentalReversFlag?a.rentalPieceData[m]=
d["rentalPieceSetId"+(e+1)]:d["rentalPieceSetId"+(e+1)]=a.rentalPieceData[m]);null!=a.rentalPieceData[m]?(f.rentalFlag=l,f.rentalID=a.rentalPieceData[m],f.rentalMemoriaUse=!0):(f.rentalFlag=null,f.rentalID=null,f.rentalMemoriaUse=!1)}else a.rentalReversFlag?(a.rentalPieceData[m]=d["rentalPieceSetId"+(e+1)],l=_.findWhere(a.rentalPieceData.rentalPieceSetList,{pieceSetId:a.rentalPieceData[m]}),null!=a.rentalPieceData[m]?(f.rentalFlag=l,f.rentalID=a.rentalPieceData[m],f.rentalMemoriaUse=!0):(f.rentalFlag=
null,f.rentalID=null,f.rentalMemoriaUse=!1)):d["rentalPieceSetId"+(e+1)]=null;m=Object.assign({},f);m.supportFlag=!0;m.isNpc=!0;var p=[];_.each(f.rentalFlag,function(a,c){"object"===typeof a&&(c=c.slice(-1)-0,p[c-1]={},p[c-1].level=f.rentalFlag["pieceLevel"+c],p[c-1].pieceId=f.rentalFlag["pieceId"+c],p[c-1].hp=f.rentalFlag["pieceHp"+c],p[c-1].attack=f.rentalFlag["pieceAtk"+c],p[c-1].defense=f.rentalFlag["pieceDef"+c],p[c-1].lbCount=f.rentalFlag["pieceLbCount"+c],p[c-1].piece=a,p[c-1].rank=a.rank,
p[c-1].lockFlg=!0,p[c-1].btnHide=!0)});f.rentalMemoriaModel=z.addExStatus(m,p,m.userDoppelList,m.userDeck)}else 2>a.firstLoad?d["rentalPieceSetId"+(e+1)]?(void 0==a.rentalPieceData&&(a.rentalPieceData={}),a.rentalPieceData[m]=d["rentalPieceSetId"+(e+1)]):(void 0==a.rentalPieceData&&(a.rentalPieceData={}),d["rentalPieceSetId"+(e+1)]=null,a.rentalPieceData[m]=null):(a.rentalPieceData&&void 0!=a.rentalPieceData[m]&&(d["rentalPieceSetId"+(e+1)]=a.rentalPieceData[m]),f.rentalMemoriaUse=!1);if(void 0!=
a.switchNpcValidList[f.chara.id]){if(m=_.find(a.switchNpcList,function(a){return a.userCharaList[0].charaId==f.chara.id}))1==a.switchNpcValidList["set_"+f.chara.id]&&1==a.switchNpcCompar.setReturn?a.switchNpcValidList[f.chara.id]=f.switchCharaFlag=d[g]:null!=d.switchNpcEventId&&a.switchNpcCompar.eventId==d.switchNpcEventId?null==d[g]?(f.switchCharaFlag=d[g]=a.switchNpcValidList[f.chara.id],a.switchNpcValidList["load_"+f.chara.id]=!0):1==a.switchNpcValidList["load_"+f.chara.id]?f.switchCharaFlag=d[g]=
a.switchNpcValidList[f.chara.id]:(f.switchCharaFlag=a.switchNpcValidList[f.chara.id]=d[g],a.switchNpcValidList["load_"+f.chara.id]=!0):void 0!=a.switchNpcCompar.eventId&&a.switchNpcCompar.eventId!=d.switchNpcEventId?(d.switchNpcEventId=a.switchNpcCompar.eventId,void 0==f.switchCharaFlag&&(f.switchCharaFlag=d[g]=a.switchNpcValidList[f.chara.id])):void 0==f.switchCharaFlag&&(f.switchCharaFlag=void 0!=d[g]?a.switchNpcValidList[f.chara.id]=d[g]:d[g]=a.switchNpcValidList[f.chara.id]),d["switchNpcFlag"+
(e+1)]=f.switchCharaFlag,e=$.extend(m.userCardList[0],m.userCharaList[0]),e.supportFlag=!0,e.isNpc=!0,_.each(m.userPieceList,function(a){a.lockFlg=!0;a.rank=a.piece.rank;a.btnHide=!0}),f.switchCharaModel=z.addExStatus(e,m.userPieceList,m.userDoppelList,m.userDeck)}else void 0!==a.switchNpcCompar&&null!==a.switchNpcCompar&&(void 0!==a.switchNpcCompar[f.userCardId]?null!=a.switchNpcCompar[f.userCardId]?d[g]=a.switchNpcCompar[f.userCardId]:void 0!=d[g]&&null!=d[g]&&(d[g]=a.switchNpcCompar[f.userCardId]):
null!=d[g]?null==a.switchNpcCompar[f.userCardId]?null!=a.switchNpcCompar.eventId?d[g]=null:a.switchNpcCompar[f.userCardId]=d[g]:a.switchNpcCompar[f.userCardId]=d[g]:a.switchNpcCompar[f.userCardId]=null);r["place"+d[k]]=f}else d[g]=null;"support"!==this.deckCatType&&d.questPositionHelper==c&&(f={},"quest"===this.deckCatType&&a.questSupportModel&&(f=a.questSupportModel),f.support=!0,r["place"+c]=f)}.bind(this));d.userCardObj=r;var p={};_.each(d.posArr,function(c,e){if(b["questPositionId"+(e+1)]){c=
"place"+b["questPositionId"+(e+1)];var m="userPieceId"+("00"+(e+1)).slice(-2),g=d.userCardObj[c],k=g?g.revision+1:0;for(e=0;4>e;){var f=m+(e+1);if(d[f]){0==c in p&&(p[c]=[]);var f=_.findWhere(a.storage.userPieceList.toJSON(),{id:d[f]}),l=!1;0>=k&&(l="invalidRev");f.piece.charaList&&(_.findWhere(f.piece.charaList,{charaId:g.charaId|0})||(l="invalidChara"));"ALL"!==f.piece.attributeId&&f.piece.attributeId!==g.chara.attributeId&&(l="invalidAtt");k--;f.maxLevel=D.getMaxLevel(f.piece.rank,f.lbCount);f.invalidFlag=
l;p[c][e]=f}else k--;e=e+1|0}}});if("quest"===this.deckCatType&&a.questSupportModel)for(k=0;4>k;)n="equipPiece"+(k+1),a.questSupportModel[n]&&(q="place"+b.questPositionHelper,0==q in p&&(p[q]=[]),n=a.questSupportModel[n],n.maxLevel=D.getMaxLevel(n.piece.rank,n.lbCount),p[q][k]=n),k=k+1|0;d.userPieceObj=p;_.each(d.userCardObj,function(a,c){a.switchCharaModel&&(a.switchCharaModel.userPieceList=0);d.userPieceObj[c]&&(_.each(d.userPieceObj[c],function(c,b){c&&(a["equipPiece"+(b+1)]=c)}),a=z.totalEventEffectSet(a))});
var h,t,B;if("group"===this.deckCatType||"groupPrepare"===this.deckCatType)if(e=_.findWhere(e.regularEventList,{regularEventType:"GROUPBATTLE"}))h=e.regularEventGroupBattle.recommendRatingPointRate/1E3,t=(e.regularEventGroupBattle.atkRatingPointRate-1E3)/1E3,B=e.regularEventGroupBattle.recommendCharaAttributes.split(",");d.teamStatus=0;_.each(d.userCardObj,function(b,e){b.supportFlag||(b.rating=1,b.appendPoint=0,b.addHp=b.hp?b.hp:0,b.addAttack=b.attack?b.attack:0,b.addDefense=b.defense?b.defense:
0,b.memoriaHp=0,b.memoriaAttack=0,b.memoriaDefense=0,b.addAttribute={hp:0,attack:0,defense:0},b.composeAttribute&&(b.addAttribute.hp=b.composeAttribute.composed.HP,b.addAttribute.attack=b.composeAttribute.composed.ATTACK,b.addAttribute.defense=b.composeAttribute.composed.DEFENSE),h&&B&&-1<B.indexOf(b.chara.attributeId)&&(b.rating*=h),t&&(b.appendPoint+=t*b.attack),d.userPieceObj[e]&&_.each(d.userPieceObj[e],function(a){a&&!a.invalidFlag&&(b.addHp+=a.hp,b.addAttack+=a.attack,b.addDefense+=a.defense,
b.memoriaHp+=a.hp,b.memoriaAttack+=a.attack,b.memoriaDefense+=a.defense)}),b.isPHLBUseItem=null,"puellaHistoriaGroupRaid"==d.deckCatType&&a.PuellaHistoriaLastBattleGroupRaidPrm&&"main"==a.PuellaHistoriaLastBattleGroupRaidPrm.battleType&&(b.isPHLBUseItem=a.PuellaHistoriaLastBattleGroupRaidPrm.isUseItem),b.addEvent={hp:0,attack:0,defense:0},("arenaRankMatchAttack"===c.deckCatType||"arenaRankMatchDefence"===c.deckCatType)&&a.EventArenaRankMatchPrm&&a.EventArenaRankMatchPrm.spPlusList&&_.each(a.EventArenaRankMatchPrm.spPlusList,
function(a,c,d){c==b.card.attributeId&&_.each(a,function(a,c,d){b.addEvent[c]=a;b.isArenaRankMatchPrmChange="plus";0>a&&(b.isArenaRankMatchPrmChange="minus")})}),b.totalHp=b.addHp+b.addEvent.hp+b.addendHp+b.addAttribute.hp,b.totalAttack=b.addAttack+b.addEvent.attack+b.addendAttack+b.addAttribute.attack,b.totalDefense=b.addDefense+b.addEvent.defense+b.addendDefense+b.addAttribute.defense,0>b.totalHp&&(b.totalHp=0),0>b.totalAttack&&(b.totalAttack=0),0>b.totalDefense&&(b.totalDefense=0),d.teamStatus+=
(b.totalHp+b.totalAttack+b.totalDefense+b.appendPoint)*b.rating)});20==b.deckType&&(d.name="サポートチーム");21==b.deckType&&(d.name="ミラーズチーム");22==b.deckType&&(d.name="イベントミラーズチーム");"arenaRankMatchAttack"==d.deckCatType&&(d.name="攻撃編成");e=w.getDeckType();b.deckType==e.defence&&(d.name="防衛編成");return d};var K=function(a,c){switch(a){case "quest":return 11<=c&&19>=c;case "dungeon":case "dungeonInMap":return 41<=c&&49>=c;case "group":case "groupPrepare":return 51<=c&&54>=c;case "endless":return 61<=c&&63>=
c;case "extermination":return 71<=c&&75>=c;case "secondPartLast":return 101<=c&&105>=c;case "accomplish":return 71<=c&&75>=c;case "puellaHistoriaGroupRaid":return c>=v.getDeckType({})+1&&v.getDeckType({})+5>=c;case "scene0Challenge":return c>=x.getDeckType()+1&&x.getDeckType()+5>=c;case "arenaRankMatchAttack":return c>=w.getDeckType().attackBase+1&&w.getDeckType().attackBase+5>=c;default:return 11<=c&&19>=c}},L={quest:"1",dungeon:"4",dungeonInMap:"4",group:"5",groupPrepare:"5",endless:"6",extermination:"7",
secondPartLast:"10",accomplish:"8",puellaHistoriaGroupRaid:String(v.getDeckType({})/10),scene0Challenge:String(x.getDeckType()/10),arenaRankMatchAttack:String(w.getDeckType().attackBase/10),exterminationCopy:"1",secondPartLastCopy:"1"};t.prototype.deckListDataCreate=function(){var b=this.deckCatType||"quest",c=[];_.each(a.storage.userDeckList.toJSON(),function(a,b){if(K(this.deckCatType,a.deckType)){var d=[];_.each(a.formationSheet,function(a,b){-1!==b.indexOf("placeSkillId")&&d.push(b.split("placeSkillId")[1])});
a.posArr=d;c.push(a)}}.bind(this));var e=0;a.rentalSetFlag=!1;var d=9;for("group"===b||"groupPrepare"===b?d=4:"endless"===b?d=3:"accomplish"===b?d=1:"puellaHistoriaGroupRaid"===b?d=5:"scene0Challenge"===b?d=5:"arenaRankMatchAttack"===b&&(d=5);e<d;){var k=L[b]+(e+1);_.findWhere(c,{deckType:Number(k)})||(k={name:"チーム"+String(k).slice(-1),deckType:Number(k)},c.push(k));e=e+1|0}c.sort(function(a,b){return a.deckType<b.deckType?-1:a.deckType>b.deckType?1:0});return c};t.prototype.nextPageFunc=function(a){switch(this.deckCatType){case "quest":case "group":case "accomplish":case "endless":case "scene0Challenge":this.questFunc(a);
break;case "puellaHistoriaGroupRaid":this.startPuellaHistoriaGroupRaidBattle({deckModel:a});break;case "dungeon":case "dungeonInMap":this.dungeonMapStartFunc(a);break;case "arenaRankMatchAttack":this.startEventArenaRankMatchBattle({currentDeckModel:a})}};t.prototype.questFunc=function(b){if(!this.questDisableFlg){a.androidKeyStop=!0;var c=function(){for(var a=[],c=0;10>c;){var d=b["userCardId"+(c+1)];d&&a.push(d);c=c+1|0}return a}();if("endless"===b.deckCatType&&3>c.length){h.startSe(1002);var e=
new a.PopupClass({title:"編成エラー",content:"バトル開始には、3人以上の魔法少女が\x3cbr\x3e編成に含まれている必要があります。",closeBtnText:"OK"});a.androidKeyStop=!1}else if(c.length)if((a.questBattleModel&&a.questBattleModel.questBattle.onlyCharaIds||a.questBattleModel&&a.questBattleModel.questBattle.containCharaIds)&&!y.charaConditionCheck(a.questBattleModel.questBattle,c))c=y.charaConditionText(a.questBattleModel.questBattle),h.startSe(1002),e=new a.PopupClass({title:"クエスト開始条件",popupId:"charaConditionPopup",content:c,decideBtnText:"OK",
canClose:!1},null,function(){$("#charaConditionPopup .decideBtn").on(a.cgti,function(a){e.remove()})});else{if("accomplish"===b.deckCatType){var d=!1,k=!1;_.each(b.userCardObj,function(a,b){a.isRetired&&(k=!0);40>a.level&&(d=!0)});if(d){e=new a.PopupClass({title:"編成エラー",content:"レベル40未満の魔法少女がチームに含まれています。",closeBtnText:"OK"});a.androidKeyStop=!1;return}if(k){h.startSe(1002);e=new a.PopupClass({title:"編成エラー",content:"戦闘不能の魔法少女が含まれています。",closeBtnText:"OK"});a.androidKeyStop=!1;return}}var l={};l.questBattleId=
a.questBattleModel.questBattle.questBattleId;l.deckType=b.deckType;"RAID"===a.questBattleModel.questType?l.raidId=a.questBattleModel.raidId:"GROUPBATTLE"===a.questBattleModel.questType&&(l.groupId=a.questBattleModel.groupId);_.each(b,function(a,b){if(-1!==b.indexOf("questPositionId")||-1!==b.indexOf("userCardId")||-1!==b.indexOf("userPieceId"))l[b]=a});for(var g=c=0;5>c;++c){var q=b.userCardObj["place"+b.posArr[c]];q&&!0===q.switchCharaFlag&&(l["switchCharaId"+(g+1)]=q.chara.id,g++);!q||!0!==q.rentalFlag&&
"extermination"!==b.deckCatType||(b["rentalPieceSetId"+(g+1)]&&(l["rentalPieceSetId"+(g+1)]=b["rentalPieceSetId"+(g+1)]),g++)}a.questSupportModel&&(a.questSupportModel.isNpc?l.npcHelpId=a.questSupportModel.npcHelpId:(l.helperUserId=a.questSupportModel.userId,a.questHelperId=a.questSupportModel.userId,l.helperUserCardId=a.questSupportModel.userCardId),l.helpAttributeId=a.questSupportModel.supportTabAtt.toUpperCase(),l.helperPositionId=b.questPositionHelper);var c=null,g=a.questBattleModel.questBattle.startStory,
n=[];a.questBattleModel.questBattle.questStoryList&&_.each(a.questBattleModel.questBattle.questStoryList,function(a){a&&n.push(a)});a.questBattleModel.questBattle.endStory&&n.push(a.questBattleModel.questBattle.endStory);a.questBattleModel.secret&&(c=a.questBattleModel.secret);this.questDisableFlg=!0;G(g,n,a.questBattleModel.userQuestAdventureList,l,c,b);h.startSe(1001)}else h.startSe(1002),e=new a.PopupClass({title:"編成エラー",content:"魔法少女を１体以上編成してください。",closeBtnText:"OK"}),a.androidKeyStop=!1}};var G=
function(b,c,e,d,k,l){$(a.ready.target).on("webkitAnimationEnd",function(){h.changeBg("web_black.jpg");$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});var g=!0,q=!0,n=0;if(!a.questBattleModel.storyForceStart){_.each(e,function(a){b===a.adventureId&&(g=!1);-1<c.indexOf(a.adventureId)&&n++});if(0==c.length||0<c.length&&c.length==n)q=!1;"MAIN"!=a.questBattleModel.questType&&"SUB"!=a.questBattleModel.questType&&
"CHARA"!=a.questBattleModel.questType&&"COSTUME"!=a.questBattleModel.questType||a.storage.gameUser.toJSON().skipAdventure||(q=g=!0);b||(g=!1);0==c.length&&(q=!1)}a.questBattleModel.eventBranchData&&!a.questBattleModel.eventBranchData.startStoryJson&&(g=!1);h.endL2d();var r=null;if(window.isBrowser)a.stubQuest=d,a.apiQuestPrm=d,h.sendCommand("QuestStub");else if(a.apiQuestPrm=d,g){var p=function(c){var e=function(){$("#commandDiv").on("nativeCallback",function(a,b){$("#commandDiv").off();E(b);location.href=
"#/QuestBackground"});H(c)};$("#commandDiv").on("nativeCallback",function(c,g){$("#commandDiv").off();g&&g.isSkipped&&(c={},c.adventureId=String(b),u.ajaxPost(a.linkList.adventureSkip,c,function(b){a.responseSetStorage(b)}));a.questBattleModel.eventBranchData&&g&&g.alternativeIdList&&u.ajaxPost(a.linkList.branchAlternativeStart,{pointId:a.questBattleModel.eventBranchData.pointId,alternativeIdList:g.alternativeIdList});I({questBattleId:d.questBattleId})?C({deckModel:l,callback:e}):e()})},t=function(b,
c){$("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();p(c);h.startStory(b);window.isBrowser&&$("#commandDiv").trigger("nativeCallback")});h.downloadFileFullVoice("section_"+a.questBattleModel.questBattle.sectionId);window.isBrowser&&$("#commandDiv").trigger("nativeCallback")},v=function(b,c){$("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();p(c);h.startStory(b);window.isBrowser&&$("#commandDiv").trigger("nativeCallback")});h.downloadFileFullVoice("section_event_"+
a.questBattleModel.eventObj.event.eventId);window.isBrowser&&$("#commandDiv").trigger("nativeCallback")},r=function(c){c.isLoop=a.questBattleModel.isLoop;var d=String(b);k&&(d+="_"+k);setTimeout(function(){h.setWebView(!1);a.questBattleModel.eventBranchData?(p(c),h.startBranchStory(a.questBattleModel.eventBranchData.startStoryJson)):A.getIsPuellaHistoriaInfo({sectionInfo:a.storage.userSectionList.findWhere({sectionId:a.questBattleModel.questBattle.sectionId}).toJSON()}).isPuellaHistoria?(p(c),h.startStory(d)):
"MAIN"==a.questBattleModel.questType||"SECONDPARTLAST"===a.questBattleModel.questType?t(d,c):a.questBattleModel.eventObj&&a.questBattleModel.eventObj.event&&a.questBattleModel.eventObj.event.existsVoice?v(d,c):(p(c),h.startStory(d),window.isBrowser&&$("#commandDiv").trigger("nativeCallback"))},500)};$("#popupArea").on(a.cgti,"#resultCodeError .popupCloseBtn",function(b){b.preventDefault();a.isScrolled()||($("#popupArea").off(),h.nativeReload("#/TopPage"))});"SECONDPARTLAST"===a.questBattleModel.questType?
u.ajaxPost(a.linkList.secondPartLastBattleStart,d,r):u.ajaxPost(a.linkList.questStart,d,r)}else p=function(b){b.isLoop=a.questBattleModel.isLoop;var c=function(){$("#commandDiv").on("nativeCallback",function(a,b){$("#commandDiv").off();E(b);location.href="#/QuestBackground"});H(b)};I({questBattleId:d.questBattleId})?C({deckModel:l,callback:c}):c()},r=function(b){setTimeout(function(){h.setWebView(!1);if(q){var c=null;"MAIN"==a.questBattleModel.questType?c="section_"+a.questBattleModel.questBattle.sectionId:
a.questBattleModel.eventObj&&a.questBattleModel.eventObj.event&&a.questBattleModel.eventObj.event.existsVoice&&(c="section_event_"+a.questBattleModel.eventObj.event.eventId);A.getIsPuellaHistoriaInfo({sectionInfo:a.storage.userSectionList.findWhere({sectionId:a.questBattleModel.questBattle.sectionId}).toJSON()}).isPuellaHistoria&&(c=null);c?($("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();p(b)}),h.downloadFileFullVoice(c),window.isBrowser&&$("#commandDiv").trigger("nativeCallback")):
p(b)}else p(b)},500)},$("#popupArea").on(a.cgti,"#resultCodeError .popupCloseBtn",function(b){b.preventDefault();a.isScrolled()||($("#popupArea").off(),h.nativeReload("#/TopPage"))}),"RAID"===a.questBattleModel.questType?u.ajaxPost(a.linkList.raidQuestStart,d,r):"GROUPBATTLE"===a.questBattleModel.questType?a.questBattleModel.isSimulate?u.ajaxPost(a.linkList.groupBattleBattleSimulateStart,d,r):u.ajaxPost(a.linkList.groupBattleBattleStart,d,r):"EXTERMINATION"===a.questBattleModel.questType?u.ajaxPost(a.linkList.exterminationBattleStart,
d,r):"SECONDPARTLAST"===a.questBattleModel.questType?u.ajaxPost(a.linkList.secondPartLastBattleStart,d,r):u.ajaxPost(a.linkList.questStart,d,r)});a.ready.target.classList.contains("preNativeFadeIn")?$(a.ready.target).trigger("webkitAnimationEnd"):a.addClass(a.ready.target,"preNativeFadeIn")},H=function(b){a.acpTimeCure&&(clearInterval(a.acpTimeCure),a.acpTimeCure=null);var c=null;if(b.userQuestBattleResultList[0]&&b.userQuestBattleResultList[0].questBattle&&b.userQuestBattleResultList[0].questBattle.sectionId){var e=
b.userQuestBattleResultList[0].questBattleId,c={},d=a.storage.userSectionList.findWhere({sectionId:b.userQuestBattleResultList[0].questBattle.sectionId});if(a.searchQuestGiftId&&"MAIN"==d.toJSON().section.questType||a.searchQuestGiftId&&"SUB"==d.toJSON().section.questType||a.searchQuestGiftId&&"CHARA"==d.toJSON().section.questType||a.searchQuestGiftId&&"COSTUME"==d.toJSON().section.questType)c.resultUrl="/magica/index.html#/QuestResult",c.retireUrl="/magica/index.html#/SearchQuest/"+e;else switch(d.toJSON().section.questType){case "SUB":c.resultUrl=
"/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/SubQuest";break;case "CHARA":case "COSTUME":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/CharaQuest";break;case "EVENT_S":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventTrainingTop";break;case "COMPOSE":case "MATERIAL":case "ENHANCEMENT_AROUSAL":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventQuest";break;case "TOWER":c.resultUrl=
"/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventTowerTop";break;case "DAILYTOWER":var k=d.toJSON().section.parameter.split("\x3d")[1];c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventDailyTowerTop/"+k.toLowerCase()+"/"+e;break;case "BRANCH":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventBranchTop";break;case "SINGLERAID":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventSingleRaidTop/"+
e;break;case "ACCOMPLISH":c.resultUrl="/magica/index.html#/RegularEventAccomplishTop/"+e;c.retireUrl="/magica/index.html#/RegularEventAccomplishTop";break;case "STORYRAID":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventStoryRaidTop/"+e;break;case "RAID":c.resultUrl="/magica/index.html#/EventRaidTop";c.retireUrl="/magica/index.html#/EventRaidTop";break;case "GROUPBATTLE":c.resultUrl="/magica/index.html#/RegularEventGroupBattleTop/"+e;c.retireUrl="/magica/index.html#/RegularEventGroupBattleTop/"+
e;break;case "EXTERMINATION":c.resultUrl="/magica/index.html#/RegularEventExterminationBattleSelect/"+e;c.retireUrl="/magica/index.html#/RegularEventExterminationBattleSelect";break;case "REG_ACC":c.resultUrl="/magica/index.html#/RegularEventAccomplishTop/"+e;c.retireUrl="/magica/index.html#/RegularEventAccomplishTop";break;case "WITCH":c.resultUrl="/magica/index.html#/QuestResult";c.retireUrl="/magica/index.html#/EventWitchTopPage";break;default:c.resultUrl="/magica/index.html#/QuestResult",c.retireUrl=
"/magica/index.html#/MainQuest"}"SECONDPARTLAST"===a.questBattleModel.questType&&(c.resultUrl="/magica/index.html#/SecondPartLastRouter/battleWin/"+e,c.retireUrl="/magica/index.html#/SecondPartLastRouter");1033044===e&&(c.resultUrl="/magica/index.html#/SecondPartLastRouter/forceLoseBattle/"+e,c.retireUrl="/magica/index.html#/MainQuest");e=A.getIsPuellaHistoriaInfo({sectionInfo:d.toJSON()});e.isPuellaHistoria&&(c.resultUrl="/magica/index.html#/QuestResult",c.retireUrl="/magica/index.html#/PuellaHistoriaTop",
e.num&&e.num==v.getPuellaHistoriaLastBattleNum({type:"singleRaid"})&&(c.resultUrl="/magica/index.html#/QuestResult",c.retireUrl="/magica/index.html#/PuellaHistoriaSingleRaid"),e.num&&e.num==v.getPuellaHistoriaLastBattleNum({type:"singleRaidLast"})&&(c.resultUrl="/magica/index.html#/QuestResult",c.retireUrl="/magica/index.html#/PuellaHistoriaSingleRaid"),e.num&&e.num==v.getPuellaHistoriaLastBattleNum({type:"groupRaid"})&&(c.resultUrl="/magica/index.html#/PuellaHistoriaGroupRaidQuestResultSubBoss",
c.retireUrl="/magica/index.html#/EventPuellaRaidTop",a.PuellaHistoriaLastBattleGroupRaidPrm&&"main"==a.PuellaHistoriaLastBattleGroupRaidPrm.battleType&&(c.resultUrl="/magica/index.html#/PuellaHistoriaGroupRaidQuestResultMainBoss")));x.getIsScene0Info({section:d.toJSON()}).isScene0&&(c.resultUrl="/magica/index.html#/QuestResult",c.retireUrl="/magica/index.html#/Scene0BattleSelect")}h.setWebView(!1);a.nativeQuestPrm=b;a.nativeQuestPrm.urls=c;h.startQuest(b.userQuestBattleResultList[0].id,c,b.isLoop);
window.isBrowser&&$("#commandDiv").trigger("nativeCallback")};t.prototype.dungeonMapStartFunc=function(b){if(!this.questDisableFlg)if(a.androidKeyStop=!0,function(){for(var a=[],c=0;10>c;){var k=b["userCardId"+(c+1)];k&&a.push(k);c=c+1|0}return a}(),b.leaderPos){if("dungeon"===this.deckCatType){h.startSe(1001);var c={areaId:a.dungeonAreaModel.areaId,deckType:b.deckType};this.questDisableFlg=!0;u.ajaxPost(a.linkList.dungeonStart,c,function(b){a.responseSetStorage(b);location.href="#/EventDungeonMap"})}"dungeonInMap"===
this.deckCatType&&(h.startSe(1002),a.backLinkHandler())}else h.startSe(1002),new a.PopupClass({title:"編成エラー",content:"メインメンバーに魔法少女を１体以上編成してください。",closeBtnText:"OK"}),a.androidKeyStop=!1};t.prototype.appendCharaStatus=function(){"accomplish"===this.deckCatType&&a.userRegularEventAccomplishCharaArr&&a.storage.userCardListEx.each(function(a){var c=a.toJSON();F(c);a.clear({silent:!0});a.set(c,{silent:!0})})};var F=function(b){var c=a.userRegularEventAccomplishCharaArr[b.charaId];c?(b.damage=c.damage,
b.mp=c.mp,b.dp=0,b.isRetired=c.isRetired,0<c.mp&&(b.mp=Math.floor(c.mp/10),0==b.mp&&(b.mp=1)),100<b.mp&&(b.dp=b.mp-100,b.mp=100)):(b.damage=0,b.mp=0,b.dp=0,b.isRetired=null)};t.prototype.startEventArenaRankMatchBattle=function(b){b=b.currentDeckModel;if(a.EventArenaRankMatchPrm){var c=u.getPageJson();a.EventArenaRankMatchPrm.deckEditPageJson&&(c=a.EventArenaRankMatchPrm.deckEditPageJson);if(b.userCardId1)if(a.EventArenaRankMatchPrm.isDeckEditTimeOver)J.openPopup({});else if(a.EventArenaRankMatchPrm.deckEditAccessTime&&
!w.isOpenEvent({pageJson:c,pageAccessLocalTime:a.EventArenaRankMatchPrm.deckEditAccessTime,rankMatchEventInfo:a.EventArenaRankMatchPrm.eventInfo}))new a.PopupClass({title:"イベント終了",content:"イベント開催期間外です。",closeBtnText:"OK",canClose:!1,popupType:"typeC"},null,function(){},function(){location.href="#/ArenaTop"});else{if(c=a.EventArenaRankMatchPrm,!c.started){c.started=!0;var e={deckNum:b.deckType,opponentUserId:c.opponentInfo.userId,arenaBattleType:c.arenaBattleType,matchId:c.matchId};a.currentArenaRankMatchDeckType=
b.deckType;a.battleEnemy=c.opponentInfo.userId;window.isBrowser?(a.arenaJson=e,a.globalMenuView&&a.globalMenuView.trigger("removeView"),h.sendCommand("ArenaStub,"+JSON.stringify(e))):u.ajaxPost(a.linkList.arenaStart,e,function(c){a.acpTimeCure&&(clearInterval(a.acpTimeCure),a.acpTimeCure=null);$(a.ready.target).on("webkitAnimationEnd",function(){h.changeBg("web_black.jpg");$(a.ready.target).off("webkitAnimationEnd");$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&
(a.ready.target.className="")});var b={};b.questId=c.userQuestBattleResultList[0].id;b.replayId=c.userQuestBattleResultList[0].replayId;b.resultUrl="/magica/index.html#/RegularEventArenaRankMatchResult";b.retireUrl="/magica/index.html#/RegularEventArenaRankMatchTop";b.tips={type:2};a.globalMenuView&&a.globalMenuView.trigger("removeView");setTimeout(function(){h.setWebView(!1);$("#commandDiv").on("nativeCallback",function(b,c){$("#commandDiv").off();c&&c.webData&&a.responseSetStorage(c.webData);location.href=
"#/QuestBackground"});h.startArena(b)},500)});a.addClass(a.ready.target,"preNativeFadeIn")})}}else h.startSe(1002),new a.PopupClass({title:"編成エラー",content:"バトル開始には、"+a.EventArenaRankMatchPrm.deckMinNumList.arenaRankMatchAttack+"人以上の魔法少女が\x3cbr\x3e編成に含まれている必要があります。",closeBtnText:"OK"}),a.androidKeyStop=!1}else location.href="#/ArenaTop"};t.prototype.startPuellaHistoriaGroupRaidBattle=function(b){var c=b.deckModel,e=this;if(!e.questDisableFlg)if(a.androidKeyStop=!0,b=function(){for(var a=[],b=0;10>
b;){var d=c["userCardId"+(b+1)];d&&a.push(d);b=b+1|0}return a}(),b.length)(a.questBattleModel&&a.questBattleModel.questBattle.onlyCharaIds||a.questBattleModel&&a.questBattleModel.questBattle.containCharaIds)&&!y.charaConditionCheck(a.questBattleModel.questBattle,b)?(b=y.charaConditionText(a.questBattleModel.questBattle),h.startSe(1002),d=new a.PopupClass({title:"クエスト開始条件",popupId:"charaConditionPopup",content:b,decideBtnText:"OK",canClose:!1},null,function(){$("#charaConditionPopup .decideBtn").on(a.cgti,
function(a){d.remove()})})):(h.startSe(1001),b=function(){var b={};b.questBattleId=a.questBattleModel.questBattle.questBattleId;b.deckType=c.deckType;"RAID"===a.questBattleModel.questType?b.raidId=a.questBattleModel.raidId:"GROUPBATTLE"===a.questBattleModel.questType&&(b.groupId=a.questBattleModel.groupId);_.each(c,function(a,c){if(-1!==c.indexOf("questPositionId")||-1!==c.indexOf("userCardId")||-1!==c.indexOf("userPieceId"))b[c]=a});for(var d=0,g=0;5>d;++d){var h=c.userCardObj["place"+c.posArr[d]];
h&&!0===h.switchCharaFlag&&(b["switchCharaId"+(g+1)]=h.chara.id,g++);!h||!0!==h.rentalFlag&&"extermination"!==c.deckCatType||(c["rentalPieceSetId"+(g+1)]&&(b["rentalPieceSetId"+(g+1)]=c["rentalPieceSetId"+(g+1)]),g++)}var d=null,n=[];a.questBattleModel.questBattle.questStoryList&&_.each(a.questBattleModel.questBattle.questStoryList,function(a){a&&n.push(a)});a.questBattleModel.questBattle.endStory&&n.push(a.questBattleModel.questBattle.endStory);a.questBattleModel.secret&&(d=a.questBattleModel.secret);
e.questDisableFlg=!0;a.PuellaHistoriaLastBattleGroupRaidPrm&&"main"==a.PuellaHistoriaLastBattleGroupRaidPrm.battleType&&(b.isPuellaRaidBreakItemUse=a.PuellaHistoriaLastBattleGroupRaidPrm.isUseItem);G(null,n,a.questBattleModel.userQuestAdventureList,b,d,c)},a.PuellaHistoriaLastBattleGroupRaidPrm&&"sub"==a.PuellaHistoriaLastBattleGroupRaidPrm.battleType?b():C({deckModel:c,callback:b}));else{h.startSe(1002);var d=new a.PopupClass({title:"編成エラー",content:"魔法少女を１体以上編成してください。",closeBtnText:"OK"});a.androidKeyStop=
!1}};var C=function(b){var c=b.deckModel,e=b.callback,d=v.getStoryIdList(),k=[];_.each(c.userCardObj,function(a,b,c){_.each(d.special,function(b,c,d){a.charaId==b.charaId&&k.push(b)})});var l=0,g=function(){l>=k.length?e():a.playStory({cmd:h,ajaxControl:u,storyId:k[l].storyId,callback:function(){l++;g()}})};g()},I=function(a){var b=!1;1041021==a.questBattleId&&(b=!0);return b};return t});