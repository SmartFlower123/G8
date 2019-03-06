var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/** 每条中奖线赢得钱和牌 */
var SingleLineData = (function () {
    function SingleLineData() {
    }
    /**请只传入单线的数据 */
    SingleLineData.prototype.initData = function (singledata) {
        var _data = singledata;
        this.coins = _data["coins"];
        this.line = _data["line"];
    };
    Object.defineProperty(SingleLineData.prototype, "Coins", {
        /** 当前线路中奖货币数量  硬币 滚钱用*/
        get: function () {
            return this.coins;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleLineData.prototype, "Line", {
        /** line 单线中奖的牌*/
        get: function () {
            return this.line;
        },
        enumerable: true,
        configurable: true
    });
    SingleLineData.prototype.destoryData = function () {
        this.win = null;
        this.coins = null;
        this.line = null;
    };
    return SingleLineData;
}());
__reflect(SingleLineData.prototype, "SingleLineData");
/**棋盘显示数据 */
var RollerShowData = (function () {
    function RollerShowData() {
    }
    /**请传入所有的数据 */
    RollerShowData.prototype.initData = function (data) {
        this.allPokerArray = data["allPokerArr"];
        this.allWinPokerArr = data["allWinPokerArr"];
        this.haveshowOne = data["haveshowOne"];
        this.showAllEnd = data["showAllEnd"];
        this.allWinCoins = data["allWinCoins"];
        this.isFreeSpin = data["isFreeSpin"];
        this.toShowOne = data["toShowOne"];
    };
    Object.defineProperty(RollerShowData.prototype, "AllPokerArray", {
        /**当前棋盘上的所有牌 */
        get: function () {
            return this.allPokerArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerShowData.prototype, "ToShowOne", {
        /**是否直接播放单线中奖*/
        get: function () {
            return this.toShowOne;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerShowData.prototype, "AllWinPokerArr", {
        /**当前棋盘上所有中奖牌 */
        get: function () {
            return this.allWinPokerArr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerShowData.prototype, "AllWinCoins", {
        /** 总硬币 滚钱用*/
        get: function () {
            return this.allWinCoins;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerShowData.prototype, "ShowAllEnd", {
        /**所有线中奖结束后的回调 所有线播完了 开始播单线的时候添加*/
        get: function () {
            return this.showAllEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerShowData.prototype, "IsFreeSpin", {
        /**如果是freespin就只播放总中奖线 */
        get: function () {
            return this.isFreeSpin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerShowData.prototype, "HaveshowOne", {
        /**是否播放单线中奖 */
        get: function () {
            return this.haveshowOne;
        },
        enumerable: true,
        configurable: true
    });
    RollerShowData.prototype.destoryData = function () {
        this.allPokerArray = null;
        this.allWinPokerArr = null;
        this.allWinCoins = null;
        this.haveshowOne = null;
        this.showAllEnd = null;
        this.isFreeSpin = null;
        this.toShowOne = null;
    };
    return RollerShowData;
}());
__reflect(RollerShowData.prototype, "RollerShowData");
var RollerWinTime = (function () {
    function RollerWinTime() {
    }
    RollerWinTime.prototype.initData = function (data) {
        this.showAlltime = data["showAlltime"];
        this.showoneTime = data["showoneTime"];
    };
    Object.defineProperty(RollerWinTime.prototype, "ShowAlltime", {
        /**所有线中奖播放时长 */
        get: function () {
            return this.showAlltime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollerWinTime.prototype, "ShowoneTime", {
        /*单线中奖播放时常 */
        get: function () {
            return this.showoneTime;
        },
        enumerable: true,
        configurable: true
    });
    RollerWinTime.prototype.destoryData = function () {
        this.showAlltime = null;
        this.showoneTime = null;
    };
    return RollerWinTime;
}());
__reflect(RollerWinTime.prototype, "RollerWinTime");
/**暂时不用的数据 */
var WinRollerDataNo = (function () {
    function WinRollerDataNo() {
    }
    return WinRollerDataNo;
}());
__reflect(WinRollerDataNo.prototype, "WinRollerDataNo");
/**中奖线的条数和每个中奖线上的金额 */
var LineNum = (function () {
    function LineNum(lindeArray, lineWinNum) {
        this.lineArray = lindeArray;
        this.linewinNum = lineWinNum;
    }
    return LineNum;
}());
__reflect(LineNum.prototype, "LineNum");
//# sourceMappingURL=RollerWinData.js.map