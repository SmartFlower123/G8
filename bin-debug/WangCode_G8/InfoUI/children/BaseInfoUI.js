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
var BaseInfoUI = (function (_super) {
    __extends(BaseInfoUI, _super);
    function BaseInfoUI() {
        return _super.call(this) || this;
    }
    BaseInfoUI.prototype.construtFromXML = function (XML) {
        _super.prototype.constructFromXML.call(this, XML);
    };
    BaseInfoUI.prototype.init = function (pkgName) {
        this.initFGUI(pkgName);
        this.addEvent();
    };
    BaseInfoUI.prototype.initFGUI = function (pkgName) {
        this.m_btnRight = this.getChild("btnRight").asButton;
        this.m_btnLeft = this.getChild("btnLeft").asButton;
        this.m_loader = this.getChild("loader").asLoader;
        this.m_txt = this.getChild("Txt").asTextField;
        this.m_count = 1;
        this.m_startImgIndex = 1;
        this.m_endImgIndex = 5;
        this.m_pkgName = pkgName;
        this.setLoaderUrl(this.m_startImgIndex);
    };
    BaseInfoUI.prototype.setTxtValue = function (val) {
        this.m_txt.setVar("val", "" + val).flushVars();
    };
    BaseInfoUI.prototype.destroyCom = function () {
        this.m_startImgIndex = null;
        this.m_endImgIndex = null;
        this.m_pkgName = null;
        this.m_count = null;
        this.m_txt = null;
        if (this.m_btnLeft)
            this.m_btnLeft.removeClickListener(this.onClickLeft, this);
        if (this.m_btnRight)
            this.m_btnRight.removeClickListener(this.onClickRight, this);
        if (this.parent) {
            this.parent.removeChild(this, true);
        }
    };
    BaseInfoUI.prototype.addEvent = function () {
        this.m_btnLeft.addClickListener(this.onClickLeft, this);
        this.m_btnRight.addClickListener(this.onClickRight, this);
    };
    BaseInfoUI.prototype.setLoaderUrl = function (resName) {
        var _url = fairygui.UIPackage.getItemURL(this.m_pkgName, resName + "");
        this.m_loader.url = _url;
    };
    BaseInfoUI.prototype.onClickLeft = function () {
        this.m_count--;
        if (this.m_count < this.m_startImgIndex)
            this.m_count = this.m_startImgIndex;
        this.setLoaderUrl(this.m_count);
    };
    BaseInfoUI.prototype.onClickRight = function () {
        this.m_count++;
        if (this.m_count > this.m_endImgIndex)
            this.m_count = this.m_endImgIndex;
        this.setLoaderUrl(this.m_count);
    };
    return BaseInfoUI;
}(fairygui.GComponent));
__reflect(BaseInfoUI.prototype, "BaseInfoUI");
//# sourceMappingURL=BaseInfoUI.js.map