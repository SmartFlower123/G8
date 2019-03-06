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
var FguiContainer = (function (_super) {
    __extends(FguiContainer, _super);
    function FguiContainer() {
        var _this = _super.call(this) || this;
        _this.m_isDistory = false;
        fairygui.UIPackage.addPackage("BaseAssets");
        fairygui.UIPackage.addPackage("PokerRes");
        if (!fairygui.GRoot.inst.displayObject.parent)
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Object.defineProperty(FguiContainer.prototype, "contentPane", {
        get: function () {
            return this.m_contentPane;
        },
        set: function (_contentPane) {
            if (this.m_contentPane)
                return;
            this.m_contentPane = _contentPane;
            this.addChild(this.m_contentPane.displayObject);
        },
        enumerable: true,
        configurable: true
    });
    /**销毁按钮*/
    FguiContainer.prototype.DistoryCom = function () {
        if (this.m_isDistory == true)
            return;
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //---备注 我这里做了更改
        if (this.m_contentPane) {
            this.removeChild(this.m_contentPane.displayObject);
            this.m_contentPane.dispose();
        }
        this.m_isDistory = true;
    };
    FguiContainer.prototype.onAddToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        if (!fairygui.GRoot.inst.displayObject.parent)
            this.stage.addChild(fairygui.GRoot.inst.displayObject);
    };
    return FguiContainer;
}(egret.DisplayObjectContainer));
__reflect(FguiContainer.prototype, "FguiContainer");
//# sourceMappingURL=FguiContainer.js.map