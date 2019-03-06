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
var MergeWinPlayNumber = (function (_super) {
    __extends(MergeWinPlayNumber, _super);
    function MergeWinPlayNumber(txtValue, WinType, winstake, totalwin, duration, controller, bet, downCT) {
        var _this = _super.call(this, txtValue) || this;
        _this.m_isSuperWinOver = false;
        _this.m_isMergeWinOver = false;
        _this.count = 0;
        _this.m_winType = WinType;
        _this.m_bet = bet;
        _this.m_showTime = duration;
        _this.m_totalWin = totalwin;
        _this.m_winStake = winstake;
        _this.m_controller = controller;
        _this.setTxtValueString("");
        _this.setStartValue();
        _this.m_to = downCT;
        _this.m_to.play();
        _this.playMergeWin(_this.StartValue, _this.m_winStake[WinStage.ZEROTOONE] * _this.m_bet, _this.m_showTime);
        _this.m_controller.setControllerIndex(winType.BigWin);
        return _this;
    }
    MergeWinPlayNumber.prototype.playComplete = function () {
        this.count += 1;
        if (this.count == 1) {
            this.m_to.play();
            this.m_controller.setControllerIndex(winType.MergerWin);
            this.playMergeWin(this.m_winStake[WinStage.ZEROTOONE] * this.m_bet, this.m_totalWin, this.m_showTime);
        }
        if (this.count == 2) {
            this.dispatchSmartEvent(SmartEvent.OneToTotal, winType.MergerWin, true);
            this.count = 0;
        }
    };
    MergeWinPlayNumber.prototype.playMergeWin = function (startvalue, endValue, duration) {
        this.setTxtValue(startvalue);
        this.setStartValue(startvalue);
        this.setEndValue(endValue);
        this.play(duration);
    };
    return MergeWinPlayNumber;
}(BaseText));
__reflect(MergeWinPlayNumber.prototype, "MergeWinPlayNumber");
var WinStage;
(function (WinStage) {
    WinStage[WinStage["BEGIN"] = 0] = "BEGIN";
    WinStage[WinStage["ZEROTOONE"] = 1] = "ZEROTOONE";
    WinStage[WinStage["ONETOTWO"] = 2] = "ONETOTWO";
    WinStage[WinStage["ONETOTOTAL"] = 3] = "ONETOTOTAL";
    WinStage[WinStage["TWOTOTOTAL"] = 4] = "TWOTOTOTAL";
})(WinStage || (WinStage = {}));
//# sourceMappingURL=MergeWinPlayNumber.js.map