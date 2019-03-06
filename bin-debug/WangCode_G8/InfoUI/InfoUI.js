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
    var InfoUI = (function (_super) {
        __extends(InfoUI, _super);
        function InfoUI(rtb) {
            var _this = _super.call(this) || this;
            _this.m_Rtb = rtb;
            _this.init();
            return _this;
        }
        InfoUI.prototype.init = function () {
            this.m_infoExtention = new InforExtention();
            var _pkgName = this.m_infoExtention.getPkgName;
            this.m_baseInfo = fairygui.UIPackage.createObject(_pkgName, "Main").asCom;
            this.addChild(this.m_baseInfo.displayObject);
            this.m_baseInfo.init(_pkgName);
            if (this.m_Rtb) {
                this.m_baseInfo.setTxtValue(this.m_Rtb);
            }
        };
        InfoUI.prototype.destoryCom = function () {
            _super.prototype.DistoryCom.call(this);
            this.m_baseInfo.destroyCom();
            this.m_infoExtention = null;
            this.m_Rtb = null;
        };
        return InfoUI;
    }(FguiContainer));
    Wang.InfoUI = InfoUI;
    __reflect(InfoUI.prototype, "Wang.InfoUI");
})(Wang || (Wang = {}));
//# sourceMappingURL=InfoUI.js.map