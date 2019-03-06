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
var BasePoster = (function (_super) {
    __extends(BasePoster, _super);
    function BasePoster(onclick, thisObj) {
        var _this = _super.call(this) || this;
        _this.m_moduName = ModuleWang.moduName;
        _this.m_isValidClick = true;
        _this.m_onClick = onclick;
        _this.m_thisObj = thisObj;
        _this.init();
        return _this;
    }
    BasePoster.prototype.destoryCom = function () {
        _super.prototype.DistoryCom.call(this);
        this.m_pkgName = null;
        this.m_language = null;
        if (this.contentPane)
            this.contentPane.removeClickListener(this.onClick, this);
        this.contentPane.dispose();
        this.m_moduName = null;
    };
    BasePoster.prototype.setIsValidClick = function (isValid) {
        if (isValid === void 0) { isValid = false; }
        this.m_isValidClick = isValid;
    };
    BasePoster.prototype.init = function () {
        this.initLanguage();
        this.addPkg();
        this.initFGUI();
        this.addEvent();
    };
    /**初始化语言类型*/
    BasePoster.prototype.initLanguage = function () {
        this.m_language = "_" + PlayerInfo.language;
    };
    /**加包*/
    BasePoster.prototype.addPkg = function () {
        this.m_pkgName = this["__proto__"]["__class__"];
        this.m_pkgName = this.m_pkgName.replace(this.m_moduName, "");
        this.m_pkgName += this.m_language;
        fairygui.UIPackage.addPackage(this.m_pkgName);
    };
    /**FGUI组件的初始化 */
    BasePoster.prototype.initFGUI = function () {
        this.contentPane = fairygui.UIPackage.createObject(this.m_pkgName, "Main").asCom;
    };
    /**添加事件*/
    BasePoster.prototype.addEvent = function () {
        this.contentPane.addClickListener(this.onClick, this);
    };
    /**点击事件*/
    BasePoster.prototype.onClick = function () {
        //this.destoryCom();
        if (!this.m_isValidClick)
            return;
        if (this.m_onClick)
            this.m_onClick.call(this.m_thisObj);
    };
    return BasePoster;
}(FguiContainer));
__reflect(BasePoster.prototype, "BasePoster");
//# sourceMappingURL=BasePoster.js.map