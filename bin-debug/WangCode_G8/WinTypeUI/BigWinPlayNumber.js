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
var BigWinPlayNumber = (function (_super) {
    __extends(BigWinPlayNumber, _super);
    function BigWinPlayNumber(txtValue, winType, winstake, totalwin, duration, controller, bet, downTranr) {
        var _this = _super.call(this, txtValue) || this;
        _this.m_isSuperWinOver = false;
        _this.m_isMergeWinOver = false;
        _this.m_winType = winType;
        _this.m_bet = bet;
        _this.m_downTran = downTranr;
        _this.setTxtValueString("");
        _this.setStartValue();
        _this.m_downTran.play();
        _this.playNum(winstake, totalwin, duration);
        controller.setControllerIndex(winType);
        return _this;
    }
    BigWinPlayNumber.prototype.playNum = function (winstake, totalwin, duration) {
        this.playBigWin(totalwin, duration);
    };
    BigWinPlayNumber.prototype.playBigWin = function (totalwin, duration) {
        this.setTxtValue(this.StartValue);
        this.setStartValue(this.StartValue);
        this.setEndValue(totalwin);
        this.play(duration);
    };
    BigWinPlayNumber.prototype.playComplete = function () {
        console.log("bigwin");
        this.dispatchSmartEvent(SmartEvent.ZeroToTotal, winType.BigWin, true);
    };
    return BigWinPlayNumber;
}(BaseText));
__reflect(BigWinPlayNumber.prototype, "BigWinPlayNumber");
var winType;
(function (winType) {
    winType[winType["BigWin"] = 0] = "BigWin";
    winType[winType["MergerWin"] = 1] = "MergerWin";
    winType[winType["SuperWin"] = 2] = "SuperWin";
})(winType || (winType = {}));
//# sourceMappingURL=BigWinPlayNumber.js.map