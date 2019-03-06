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
var BaseRuleLight = (function (_super) {
    __extends(BaseRuleLight, _super);
    function BaseRuleLight() {
        return _super.call(this) || this;
    }
    BaseRuleLight.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.initFGUI();
    };
    BaseRuleLight.prototype.initFGUI = function () {
        this.m_loader = this.getChild("loader").asLoader;
        this.m_dragonBonContainer = this.getChild("dragonContainer").asGraph;
        this.m_loader.url = "";
    };
    BaseRuleLight.prototype.setLoadrUrl = function (resName, pkgName) {
        var _url = fairygui.UIPackage.getItemURL(pkgName, (resName + ""));
        this.m_loader.url = _url;
    };
    Object.defineProperty(BaseRuleLight.prototype, "DragonBonContainer", {
        get: function () {
            return this.m_dragonBonContainer;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRuleLight;
}(fairygui.GComponent));
__reflect(BaseRuleLight.prototype, "BaseRuleLight");
//# sourceMappingURL=BaseRuleLight.js.map