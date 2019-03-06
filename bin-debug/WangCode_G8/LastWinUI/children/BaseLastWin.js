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
var BaseLastWin = (function (_super) {
    __extends(BaseLastWin, _super);
    function BaseLastWin() {
        return _super.call(this) || this;
    }
    BaseLastWin.prototype.constructFromXML = function (XML) {
        _super.prototype.constructFromXML.call(this, XML);
    };
    BaseLastWin.prototype.initFGUI = function (textVal) {
        this.m_inTrans = this.getTransition("in");
        this.m_daijiTrans = this.getTransition("daiji");
        this.m_text = this.getChild("Txt").asTextField;
        this.m_textVal = textVal;
        this.m_text.text = "";
        this.playTrans();
    };
    BaseLastWin.prototype.playTrans = function () {
        this.m_inTrans.play(this.playComplete, this, this.m_textVal, 1);
    };
    BaseLastWin.prototype.playComplete = function (val) {
        var _this = this;
        this.m_text.text = val.toFixed(0) + "";
        this.m_daijiTrans.play();
        egret.setTimeout(function () { _this.addClickListener(_this.onClick, _this); }, this, 1000);
    };
    BaseLastWin.prototype.onClick = function () {
        if (this.m_onClick)
            this.m_onClick.call(this.m_thisObj);
    };
    /**点击的回调 */
    BaseLastWin.prototype.addOnClickLisner = function (onclick, thisObj) {
        this.m_onClick = onclick;
        this.m_thisObj = thisObj;
    };
    /**销毁 */
    BaseLastWin.prototype.destoryCom = function () {
        if (this.parent) {
            this.parent.removeChild(this, true);
        }
        this.removeClickListener(this.onClick, this);
        this.m_onClick = null;
        this.m_thisObj = null;
        this.m_textVal = null;
    };
    return BaseLastWin;
}(fairygui.GComponent));
__reflect(BaseLastWin.prototype, "BaseLastWin");
//# sourceMappingURL=BaseLastWin.js.map