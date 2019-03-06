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
var SuperWinPlayNumber = (function (_super) {
    __extends(SuperWinPlayNumber, _super);
    function SuperWinPlayNumber(txtValue, WinType, winstake, totalwin, duration, controller, bet, downTrans) {
        var _this = _super.call(this, txtValue) || this;
        _this.count = 0;
        _this.m_winType = WinType;
        _this.m_bet = bet;
        _this.m_showTime = duration;
        _this.m_totalWin = totalwin;
        _this.m_winStake = winstake;
        _this.m_controller = controller;
        _this.m_downTrans = downTrans;
        _this.setTxtValueString("");
        _this.setStartValue();
        _this.m_downTrans.play();
        _this.playSuperWin(_this.StartValue, _this.m_winStake[_this.count + 1] * _this.m_bet, _this.m_showTime);
        _this.m_controller.setControllerIndex(winType.BigWin);
        return _this;
    }
    SuperWinPlayNumber.prototype.playComplete = function () {
        this.count += 1;
        if (this.count == 1) {
            this.m_controller.setControllerIndex(winType.MergerWin);
            this.m_downTrans.play();
            this.playSuperWin(this.m_winStake[this.count] * this.m_bet, this.m_winStake[this.count + 1] * this.m_bet, this.m_showTime);
        }
        if (this.count == 2) {
            this.m_downTrans.play();
            this.m_controller.setControllerIndex(winType.SuperWin);
            this.playSuperWin(this.m_winStake[this.count] * this.m_bet, this.m_totalWin, this.m_showTime);
        }
        if (this.count == 3) {
            this.dispatchSmartEvent(SmartEvent.TwoToTotal, winType.SuperWin, true);
            this.count = 0;
        }
    };
    SuperWinPlayNumber.prototype.playSuperWin = function (startvalue, endValue, duration) {
        this.setTxtValue(startvalue);
        this.setStartValue(startvalue);
        this.setEndValue(endValue);
        this.play(duration);
    };
    return SuperWinPlayNumber;
}(BaseText));
__reflect(SuperWinPlayNumber.prototype, "SuperWinPlayNumber");
//# sourceMappingURL=SuperWinPlayNumber.js.map