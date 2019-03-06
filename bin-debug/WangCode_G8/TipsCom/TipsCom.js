var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Wang;
(function (Wang) {
    var TipsCom = (function (_super) {
        __extends(TipsCom, _super);
        function TipsCom(id, tipsParent, callBack, thisObj) {
            var _this = _super.call(this) || this;
            _this.m_errorResName = "error";
            _this.m_okBtnName = "okBtn";
            _this.m_cancleBtnName = "cancleBtn";
            _this.m_moduName = "Wang.";
            _this.m_underline = "_";
            _this.m_language = PlayerInfo.language;
            _this.getPkgName();
            fairygui.UIPackage.addPackage(_this.m_ContentPanePkgName);
            _this.m_id = id;
            _this.m_tipsParent = tipsParent;
            _this.m_thisObj = thisObj;
            _this.m_callBack = callBack;
            _this.init();
            return _this;
        }
        TipsCom.prototype.init = function () {
            this.initData();
            this.initFGUI();
            this.setShap();
            this.setThisWidthAndHeight();
            this.setThisPoint();
        };
        /**获取到b包的名字 */
        TipsCom.prototype.getPkgName = function () {
            var _className = this["__proto__"]["__class__"];
            var _pkgName = _className.replace(this.m_moduName, "");
            this.m_ContentPanePkgName = _pkgName + this.m_underline + this.m_language;
        };
        /**初始化FGUI */
        TipsCom.prototype.initFGUI = function () {
            if (this.m_nodeTips) {
                var _id = this.m_tipsData.value;
                var _resName = _id + this.m_underline + this.m_language;
                this.contentPane = fairygui.UIPackage.createObject(this.m_ContentPanePkgName, _resName).asCom;
                this.initButton();
            }
        };
        TipsCom.prototype.setThisWidthAndHeight = function () {
            this.width = this.contentPane.width;
            this.height = this.contentPane.height;
        };
        /**初始化button*/
        TipsCom.prototype.initButton = function () {
            this.getBtnAction(this.m_okBtnName, this.m_tipsData.btnOK, this.addcallbackAndDestroy, this);
            this.getBtnAction(this.m_cancleBtnName, this.m_tipsData.btnCancel, this.addcallbackAndDestroy, this);
        };
        TipsCom.prototype.setShap = function () {
            //绘制一个矩形遮罩
            this.m_shapMask = new egret.Shape();
            this.m_shapMask.graphics.beginFill(0x000000);
            this.m_shapMask.graphics.drawRect(0, 0, this.m_tipsParent.width, this.m_tipsParent.height);
            this.m_shapMask.graphics.endFill();
            this.m_shapMask.alpha = 0.5;
            this.m_shapMask.touchEnabled = true;
            this.m_tipsParent.addChild(this.m_shapMask);
        };
        /**
       * 设置tips居中 (在addchild之后)
         */
        TipsCom.prototype.setThisPoint = function () {
            console.log("tipscom setthisPoint+parent:" + this.m_tipsParent.width);
            console.log("tipscom setthisPoint+thiswidth:" + this.width);
            console.log("tipscom setthisPoint+thiswidth:" + this.height);
            this.x = (this.m_tipsParent.width - this.width) / 2;
            this.y = (this.m_tipsParent.height - this.height) / 2;
        };
        /**初始化数据 */
        TipsCom.prototype.initData = function () {
            this.initTipsData();
        };
        /**回调+销毁*/
        TipsCom.prototype.addcallbackAndDestroy = function () {
            if (this.m_callBack)
                this.m_callBack.call(this.m_thisObj);
            this.DistoryTips();
        };
        TipsCom.prototype.initTipsData = function () {
            this.m_nodeTips = TipsByWang.dictionaryTips[this.m_id];
            if (this.m_nodeTips != null) {
                this.m_tipsData = new tipsData(this.m_nodeTips["$value"], Number(this.m_nodeTips["$btnNum"]), this.m_nodeTips["$btnOK"], this.m_nodeTips["$btnCancel"]); // TipsConfig.tipsConfig[this.id];
            }
            else {
                this.contentPane = fairygui.UIPackage.createObject(this.m_ContentPanePkgName, this.m_errorResName + this.m_underline + this.m_language).asCom;
                this.initSingleButton(this.m_okBtnName, null, this.addcallbackAndDestroy, this);
                console.log("new tips======================================================================================>tipsCom");
            }
        };
        TipsCom.prototype.initSingleButton = function (btName, btnAction, callBack, thisObj) {
            var _haBt = MathUtils.hasChild(this.contentPane, btName);
            if (_haBt) {
                var _Bt = this.contentPane.getChild(btName).asButton;
                this.m_okBt = new TipsButton(_Bt);
                this.m_okBt.setActionName(btnAction);
                this.m_okBt.addonClickBtCallBack(callBack, thisObj);
                this.m_okBt.addEvent();
            }
        };
        /**返回点击按钮要执行的动作*/
        TipsCom.prototype.getBtnAction = function (btnName, data, onclickBt, thisobj) {
            if (this.m_nodeTips == null)
                return;
            var _btnID = data;
            if (_btnID != "") {
                var _node = TipsByWang.BtnActionDictionary[_btnID];
                var _data = new BtnActionData(_node["$action"]);
                var _action = _data.action;
                this.initSingleButton(btnName, _action, onclickBt, thisobj);
                return _action;
            }
        };
        TipsCom.prototype.DistoryTips = function () {
            _super.prototype.DistoryCom.call(this);
            if (this.m_shapMask.parent) {
                this.m_shapMask.parent.removeChild(this.m_shapMask);
            }
            if (this.parent) {
                this.parent.removeChild(this);
            }
            if (this.contentPane)
                this.contentPane.dispose();
            this.m_id = null;
            this.m_tipsData = null;
            this.m_shapMask = null;
            this.m_nodeTips = null;
            this.m_ContentPanePkgName = null;
            this.m_errorResName = null;
            this.m_okBtnName = null;
            this.m_cancleBtnName = null;
            this.m_language = null;
            this.m_moduName = null;
            this.m_underline = null;
        };
        return TipsCom;
    }(FguiContainer));
    Wang.TipsCom = TipsCom;
    __reflect(TipsCom.prototype, "Wang.TipsCom");
})(Wang || (Wang = {}));
var tipsData = (function () {
    function tipsData(vl, num, ok, cancle) {
        this.value = vl;
        this.btnNum = num;
        this.btnOK = ok;
        this.btnCancel = cancle;
    }
    return tipsData;
}());
__reflect(tipsData.prototype, "tipsData");
var BtnActionData = (function () {
    function BtnActionData(action) {
        this.action = action;
    }
    return BtnActionData;
}());
__reflect(BtnActionData.prototype, "BtnActionData");
//# sourceMappingURL=TipsCom.js.map