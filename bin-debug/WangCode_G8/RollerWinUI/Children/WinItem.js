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
var WinItem = (function (_super) {
    __extends(WinItem, _super);
    function WinItem() {
        return _super.call(this) || this;
    }
    WinItem.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.init();
    };
    /**装载器统一命名为loader
     * 控制器统一命名为WinBgCT
    */
    WinItem.prototype.init = function () {
        this.initFGUI();
        this.initState();
    };
    WinItem.prototype.initFGUI = function () {
        this.m_loader = this.getChild("loader").asLoader;
        this.m_winBgController = this.getController("c1");
    };
    WinItem.prototype.initState = function () {
        this.m_loader.url = "";
        this.setControllerState();
    };
    /**控制显示器 默认是隐藏 */
    WinItem.prototype.setControllerState = function (state) {
        if (state === void 0) { state = "hide"; }
        this.m_winBgController.selectedPage = state;
    };
    /**设置url */
    WinItem.prototype.setLoaderUrl = function (resName, pkgName) {
        if (pkgName === void 0) { pkgName = "PokerRes"; }
        var _resName = resName;
        var _url = fairygui.UIPackage.getItemURL(pkgName, _resName);
        this.m_loader.url = _url;
    };
    return WinItem;
}(fairygui.GComponent));
__reflect(WinItem.prototype, "WinItem");
//# sourceMappingURL=WinItem.js.map