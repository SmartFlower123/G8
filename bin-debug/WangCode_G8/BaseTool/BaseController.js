var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseController = (function () {
    function BaseController(target) {
        this.m_target = target;
    }
    BaseController.prototype.setControllerIndex = function (index) {
        var _index = this.m_target.selectedIndex;
        if (_index == index) {
            return;
        }
        else {
            this.m_target.selectedIndex = index;
        }
    };
    return BaseController;
}());
__reflect(BaseController.prototype, "BaseController");
//# sourceMappingURL=BaseController.js.map