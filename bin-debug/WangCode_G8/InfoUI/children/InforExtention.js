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
var InforExtention = (function (_super) {
    __extends(InforExtention, _super);
    function InforExtention() {
        return _super.call(this) || this;
    }
    InforExtention.prototype.ClassExtention = function () {
        this.PkgName = "InfoUI" + "_" + PlayerInfo.language;
        fairygui.UIPackage.addPackage(this.PkgName);
        var _url = fairygui.UIPackage.getItemURL(this.PkgName, "Main");
        fairygui.UIObjectFactory.setPackageItemExtension(_url, BaseInfoUI);
    };
    return InforExtention;
}(BaseExtention));
__reflect(InforExtention.prototype, "InforExtention");
//# sourceMappingURL=InforExtention.js.map