var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseExtention = (function () {
    function BaseExtention() {
        this.ClassExtention();
    }
    Object.defineProperty(BaseExtention.prototype, "getPkgName", {
        get: function () {
            return this.PkgName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return BaseExtention;
}());
__reflect(BaseExtention.prototype, "BaseExtention");
//# sourceMappingURL=BaseExtention.js.map