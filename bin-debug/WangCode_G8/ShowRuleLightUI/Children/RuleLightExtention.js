var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RuleLightExtention = (function () {
    function RuleLightExtention() {
        this.RuleLightExtention();
    }
    RuleLightExtention.prototype.RuleLightExtention = function () {
        var _language = "_" + PlayerInfo.language;
        this.m_pkgName = "ShowRuleLightUI" + _language;
        fairygui.UIPackage.addPackage(this.m_pkgName);
        var _url = fairygui.UIPackage.getItemURL(this.m_pkgName, "Main");
        fairygui.UIObjectFactory.setPackageItemExtension(_url, BaseRuleLight);
    };
    Object.defineProperty(RuleLightExtention.prototype, "PkgName", {
        get: function () {
            return this.m_pkgName;
        },
        enumerable: true,
        configurable: true
    });
    RuleLightExtention.prototype.destoryCom = function () {
        this.m_pkgName = null;
    };
    return RuleLightExtention;
}());
__reflect(RuleLightExtention.prototype, "RuleLightExtention");
//# sourceMappingURL=RuleLightExtention.js.map