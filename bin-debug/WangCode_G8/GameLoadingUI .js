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
    var GameLoadingUI = (function (_super) {
        __extends(GameLoadingUI, _super);
        function GameLoadingUI() {
            var _this = _super.call(this) || this;
            _this.addPkg();
            if (!fairygui.GRoot.inst.displayObject.parent)
                _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        GameLoadingUI.prototype.addPkg = function () {
            fairygui.UIPackage.addPackage("GameLoadingUI");
            console.log("------------gameloadingUI");
        };
        GameLoadingUI.prototype.initFGUI = function () {
            var _main = fairygui.UIPackage.createObject("GameLoadingUI", "Main").asCom;
            this.addChild(_main.displayObject);
            this.m_progreesBar = _main.getChild("n0").asProgress;
            this.m_progreesBar.value = 0;
        };
        GameLoadingUI.prototype.onAddToStage = function () {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            if (!fairygui.GRoot.inst.displayObject.parent)
                this.stage.addChild(fairygui.GRoot.inst.displayObject);
            this.initFGUI();
        };
        GameLoadingUI.prototype.onProgress = function (current, total) {
            this.m_progreesBar.value = Math.floor((current / total) * 100);
            // this.textField.text = `Loading...${current}/${total}`;
        };
        return GameLoadingUI;
    }(egret.Sprite));
    Wang.GameLoadingUI = GameLoadingUI;
    __reflect(GameLoadingUI.prototype, "Wang.GameLoadingUI", ["RES.PromiseTaskReporter"]);
})(Wang || (Wang = {}));
//# sourceMappingURL=GameLoadingUI .js.map