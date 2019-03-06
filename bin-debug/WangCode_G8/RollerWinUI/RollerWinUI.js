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
    var RollerWinUI = (function (_super) {
        __extends(RollerWinUI, _super);
        function RollerWinUI(rollerWinData, thisObj, onShowWinNumberOver) {
            var _this = _super.call(this) || this;
            _this.m_singleLineData = [];
            _this.m_count = 0;
            _this.m_allData = rollerWinData;
            _this.m_thisObj = thisObj;
            _this.init();
            _this.playSet();
            return _this;
        }
        RollerWinUI.prototype.init = function () {
            //初始化数据
            this.initData();
            //加包和注册扩展类
            new RollerWinExtention();
            //初始化FGUI
            this.initFGUI();
        };
        RollerWinUI.prototype.initData = function () {
            /**初始化单条线的中奖数据 */
            var _linePokerArray = this.m_allData["linePokerArray"];
            this.m_singleLineLen = _linePokerArray.length;
            for (var i = 0; i < _linePokerArray.length; ++i) {
                var _singleData = _linePokerArray[i];
                var _singleItem = new SingleLineData();
                _singleItem.initData(_singleData);
                this.m_singleLineData.push(_singleItem);
            }
            //初始化单线和所有线的动画播放时间
            this.m_winShowTime = new RollerWinTime();
            this.m_winShowTime.initData(this.m_allData);
            //初始化中奖棋牌的所有数据
            this.m_allWinData = new RollerShowData();
            this.m_allWinData.initData(this.m_allData);
        };
        /**销毁 */
        RollerWinUI.prototype.destoryCom = function () {
            _super.prototype.DistoryCom.call(this);
            this.m_allData = null;
            for (var key in this.m_singleLineData) {
                this.m_singleLineData[key].destoryData();
            }
            this.m_winShowTime.destoryData();
            this.m_allWinData.destoryData();
            if (this.m_winGroup.parent) {
                this.m_winGroup.parent.removeChild(this.m_winGroup, true);
            }
            if (this.m_timer) {
                this.m_timer.stop();
                this.m_timer.removeEventListener(egret.TimerEvent.TIMER, this.SingleLoopPlay, this);
                this.m_timer = null;
            }
            //中奖线的长度
            this.m_singleLineLen = null;
            this.m_thisObj = null;
            this.m_count = null;
        };
        RollerWinUI.prototype.initFGUI = function () {
            this.contentPane = fairygui.UIPackage.createObject("RollerWinUI", "Main").asCom;
            this.m_winGroup = this.contentPane.getChild("WinGroup").asCom;
            this.m_winGroup.initRollerData(this.m_allWinData.AllPokerArray);
            this.m_Text = this.contentPane.getChild("Txt").asTextField;
            console.log("========" + this.m_Text.x, this.m_Text.y);
            this.m_Text.text = "";
        };
        /**播放管理 */
        RollerWinUI.prototype.playSet = function () {
            //先播放所有的中奖线
            this.PLayAllLine();
            //播单线
            this.playSingleLine();
        };
        /**播放所有线的动画*/
        RollerWinUI.prototype.PLayAllLine = function () {
            if (this.m_allWinData.ToShowOne)
                return;
            this.m_winGroup.playAllWinLine(this.m_allWinData.AllWinPokerArr);
            this.setTxtValue(this.m_allWinData.AllWinCoins);
        };
        RollerWinUI.prototype.setTxtValue = function (value) {
            this.m_Text.text = "";
            this.m_Text.text = "" + value.toFixed(0);
        };
        RollerWinUI.prototype.playSingleLine = function () {
            var _this = this;
            var _delayTime = this.m_winShowTime.ShowAlltime;
            //如果直接播单线就不延迟
            if (this.m_allWinData.ToShowOne) {
                _delayTime = 0;
            }
            egret.setTimeout(function () {
                //回调
                if (_this.m_allWinData.ShowAllEnd)
                    _this.m_allWinData.ShowAllEnd.call(_this.m_thisObj);
                //如果是Freespin就只播总的中奖线
                if (_this.m_allWinData.IsFreeSpin)
                    return;
                //创建计时器循环播放
                if (_this.m_allWinData.HaveshowOne) {
                    _this.createSingleLineTimer();
                }
            }, this, _delayTime);
        };
        //在所有线播放完成后循环的播放单线
        RollerWinUI.prototype.createSingleLineTimer = function () {
            //创建计时器循环播放单线
            var _deltaTime = this.m_winShowTime.ShowoneTime;
            this.m_timer = new egret.Timer(_deltaTime, 0);
            this.m_timer.addEventListener(egret.TimerEvent.TIMER, this.SingleLoopPlay, this);
            this.m_timer.start();
        };
        RollerWinUI.prototype.SingleLoopPlay = function () {
            this.m_winGroup.playAllWinLine(this.m_singleLineData[this.m_count].Line);
            this.setTxtValue(this.m_singleLineData[this.m_count].Coins);
            this.m_count++;
            if (this.m_count >= this.m_singleLineLen) {
                this.m_count = 0;
            }
        };
        return RollerWinUI;
    }(FguiContainer));
    Wang.RollerWinUI = RollerWinUI;
    __reflect(RollerWinUI.prototype, "Wang.RollerWinUI");
})(Wang || (Wang = {}));
//# sourceMappingURL=RollerWinUI.js.map