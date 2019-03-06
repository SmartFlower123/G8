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
var BaseWinNumUI = (function (_super) {
    __extends(BaseWinNumUI, _super);
    function BaseWinNumUI() {
        return _super.call(this) || this;
    }
    BaseWinNumUI.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.initFGUI();
    };
    /**@param	starIndex  跳钱起始位置
   * @param   stopIndex 跳钱结束位置
   * @param   time 跳钱时常(总共时常,实际跳钱时常需要减去500毫秒)
   * @param   callback 跳钱结束回调
   */
    BaseWinNumUI.prototype.setMoney = function (starIndex, stopIndex, time, callback) {
        this.m_Txt.addPlayCompleteCallBack(callback, this.m_thisObj);
        this.m_Txt.setTxtValueFloor(starIndex);
        this.m_Txt.setStartValue(starIndex);
        this.m_Txt.setEndValue(stopIndex);
        this.m_Txt.play(time);
    };
    BaseWinNumUI.prototype.setIsX3Font = function (isX3) {
        if (isX3 === void 0) { isX3 = false; }
        if (isX3) {
            this.m_Txt.setTxtFont("BaseAssets", "x3Winnumber-Font");
            this.setCTState("show");
        }
        else {
            this.m_Txt.setTxtFont("BaseAssets", "Winnumber-Font");
            this.setCTState();
        }
    };
    BaseWinNumUI.prototype.setDelayTime = function (val) {
        this.m_Txt.setDelayTime(val);
    };
    /**销毁 */
    BaseWinNumUI.prototype.destoryCom = function () {
        this.m_Txt.DistoryCom();
        this.m_thisObj = null;
        if (this.parent) {
            this.parent.removeChild(this, true);
        }
    };
    /**设置指针指向 */
    BaseWinNumUI.prototype.setThisObj = function (thisObj) {
        this.m_thisObj = thisObj;
    };
    /**初始化FGUI*/
    BaseWinNumUI.prototype.initFGUI = function () {
        var _txt = this.getChild("Txt").asTextField;
        this.m_Txt = new BaseText(_txt);
        this.m_Txt.setTxtValueString();
        this.m_CT = this.getController("c1");
    };
    BaseWinNumUI.prototype.setCTState = function (state) {
        if (state === void 0) { state = "hide"; }
        this.m_CT.selectedPage = state;
    };
    return BaseWinNumUI;
}(fairygui.GComponent));
__reflect(BaseWinNumUI.prototype, "BaseWinNumUI");
//# sourceMappingURL=BaseWinNumUI.js.map