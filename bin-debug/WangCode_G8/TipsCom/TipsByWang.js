var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TipsByWang = (function () {
    function TipsByWang() {
    }
    TipsByWang.getConfigTips = function () {
        TipsByWang.initTipsData();
        TipsByWang.initButonActionData();
    };
    TipsByWang.initTipsData = function () {
        console.log("initTipsData--------------TipsByWang");
        if (TipsByWang.dictionaryTips != null)
            return;
        TipsByWang.dictionaryTips = {};
        var tex = RES.getRes("SmartTipsConfig_xml");
        var datas = egret.XML.parse(tex);
        console.log(datas.children.length);
        for (var i = 0; i < datas.children.length; i++) {
            var tip = datas.children[i];
            TipsByWang.dictionaryTips[tip["$id"]] = tip;
        }
    };
    TipsByWang.initButonActionData = function () {
        if (TipsByWang.BtnActionDictionary != null)
            return;
        TipsByWang.BtnActionDictionary = {};
        var tex = RES.getRes("SmarttipsBtnActionConfig_xml");
        var datas = egret.XML.parse(tex);
        console.log(datas.children.length);
        for (var i = 0; i < datas.children.length; i++) {
            var tip = datas.children[i];
            TipsByWang.BtnActionDictionary[tip["$id"]] = tip;
            console.log(tip);
        }
    };
    /**
     * 系统错误弹窗提示
     * @param tipsParent  : tips pareent  承载TIPS的容器
     * @param errorId     : error id      错误码来自于错误配置
     * @param callBack	  : on complete function 结束后的回调
    */
    TipsByWang.showTips = function (tipsParent, errorId, callBack, thisObj) {
        //new Smart.LoadSource(tipsParent,errorId,callBack,thisObj);
        TipsByWang.getConfigTips();
        var _tips = new Wang.TipsCom(errorId, tipsParent, callBack, thisObj);
        tipsParent.addChild(_tips);
    };
    return TipsByWang;
}());
__reflect(TipsByWang.prototype, "TipsByWang");
//# sourceMappingURL=TipsByWang.js.map