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
var Wang;
(function (Wang) {
    var FreeAddUI = (function (_super) {
        __extends(FreeAddUI, _super);
        function FreeAddUI() {
            var _this = _super.call(this) || this;
            fairygui.UIPackage.addPackage("FreeAddUI");
            _this.initFGUI();
            return _this;
        }
        FreeAddUI.prototype.destoryCom = function () {
            _super.prototype.DistoryCom.call(this);
        };
        FreeAddUI.prototype.initFGUI = function () {
            this.contentPane = fairygui.UIPackage.createObject("FreeAddUI", "Main").asCom;
            var _tran = this.contentPane.getTransition("t0");
            _tran.play();
        };
        return FreeAddUI;
    }(FguiContainer));
    Wang.FreeAddUI = FreeAddUI;
    __reflect(FreeAddUI.prototype, "Wang.FreeAddUI");
})(Wang || (Wang = {}));
//# sourceMappingURL=FreeAddUI.js.map