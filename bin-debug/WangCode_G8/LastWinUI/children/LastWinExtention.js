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
var LastWinExtention = (function (_super) {
    __extends(LastWinExtention, _super);
    function LastWinExtention() {
        return _super.call(this) || this;
    }
    LastWinExtention.prototype.ClassExtention = function () {
        this.PkgName = "LastWinUI" + "_" + PlayerInfo.language;
        fairygui.UIPackage.addPackage(this.PkgName);
        var _url = fairygui.UIPackage.getItemURL(this.PkgName, "Main");
        fairygui.UIObjectFactory.setPackageItemExtension(_url, BaseLastWin);
    };
    return LastWinExtention;
}(BaseExtention));
__reflect(LastWinExtention.prototype, "LastWinExtention");
//# sourceMappingURL=LastWinExtention.js.map