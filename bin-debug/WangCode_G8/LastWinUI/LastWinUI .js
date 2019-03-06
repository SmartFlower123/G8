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
    var LastWinUI = (function (_super) {
        __extends(LastWinUI, _super);
        function LastWinUI(totalWin, onClick, thisObj) {
            var _this = _super.call(this) || this;
            _this.initFgui(totalWin, onClick, thisObj);
            return _this;
        }
        LastWinUI.prototype.initFgui = function (totalWin, onClick, thisObj) {
            this.m_lastWinExtention = new LastWinExtention();
            this.m_lastWin = fairygui.UIPackage.createObject(this.m_lastWinExtention.getPkgName, "Main").asCom;
            this.addChild(this.m_lastWin.displayObject);
            this.m_lastWin.initFGUI(totalWin);
            this.m_lastWin.addOnClickLisner(onClick, thisObj);
        };
        LastWinUI.prototype.destoryCom = function () {
            _super.prototype.DistoryCom.call(this);
            this.m_lastWin.destoryCom();
        };
        return LastWinUI;
    }(FguiContainer));
    Wang.LastWinUI = LastWinUI;
    __reflect(LastWinUI.prototype, "Wang.LastWinUI");
})(Wang || (Wang = {}));
//# sourceMappingURL=LastWinUI .js.map