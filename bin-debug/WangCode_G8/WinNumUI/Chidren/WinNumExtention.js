var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WinNumExtention = (function () {
    function WinNumExtention() {
        this.ExtentionClass();
    }
    WinNumExtention.prototype.ExtentionClass = function () {
        fairygui.UIPackage.addPackage("WinNumberUI");
        var _baseUrl = fairygui.UIPackage.getItemURL("WinNumberUI", "Main");
        fairygui.UIObjectFactory.setPackageItemExtension(_baseUrl, BaseWinNumUI);
    };
    return WinNumExtention;
}());
__reflect(WinNumExtention.prototype, "WinNumExtention");
//# sourceMappingURL=WinNumExtention.js.map