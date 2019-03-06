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
    //状态机
    var WinOptionState;
    (function (WinOptionState) {
        WinOptionState[WinOptionState["BEGIN"] = 0] = "BEGIN";
        WinOptionState[WinOptionState["CLICKONE"] = 1] = "CLICKONE";
        WinOptionState[WinOptionState["AUTOFINISHED"] = 2] = "AUTOFINISHED";
        WinOptionState[WinOptionState["BIGWINSHOWOVER"] = 3] = "BIGWINSHOWOVER";
    })(WinOptionState || (WinOptionState = {}));
    var WinTypeUI = (function (_super) {
        __extends(WinTypeUI, _super);
        function WinTypeUI(bigWinType, winStake, totalWin, nowBet, showTime, onBigwinShowOver, thisObj) {
            var _this = _super.call(this) || this;
            _this.m_count = WinOptionState.BEGIN;
            _this.m_moduName = ModuleWang.moduName;
            _this.m_bigWinType = bigWinType;
            _this.m_winStake = winStake;
            _this.m_nowBet = nowBet;
            _this.m_onBigWinOver = onBigwinShowOver;
            _this.m_thisObj = thisObj;
            _this.m_showTime = showTime;
            _this.m_totalWin = totalWin;
            _this.init();
            return _this;
        }
        WinTypeUI.prototype.init = function () {
            //this.initLanguage();
            this.addPkg();
            this.initFGUI();
            this.initWinType();
            this.addEvent();
        };
        /**初始化语言类型*/
        // private initLanguage() {
        // 	this.m_language = "_" + PlayerInfo.language;
        // }
        /**加包*/
        WinTypeUI.prototype.addPkg = function () {
            this.m_pkgName = this["__proto__"]["__class__"];
            this.m_pkgName = this.m_pkgName.replace(this.m_moduName, "");
            //this.m_pkgName += this.m_language;
            fairygui.UIPackage.addPackage(this.m_pkgName);
        };
        /**初始化FGUI */
        WinTypeUI.prototype.initFGUI = function () {
            this.contentPane = fairygui.UIPackage.createObject(this.m_pkgName, "Main").asCom;
            //let _contentPane = this.contentPane.getChild("n170").asCom;
            //smart
            //let _controller = _contentPane.getController("c1");
            var _controller = this.contentPane.getController("c1");
            //this.m_NumberTxt = _contentPane.getChild("n171").asCom.getChild("n171").asTextField;
            this.m_NumberTxt = this.contentPane.getChild("Txt").asTextField;
            this.m_controller = new BaseController(_controller);
            this.m_t0 = this.contentPane.getTransition("t0");
            // let _downController=this.contentPane.getController("winTypeCT");
            // this.m_downCT=new BaseController(_downController);
        };
        WinTypeUI.prototype.initWinType = function () {
            switch (this.m_bigWinType) {
                case winType.BigWin:
                    this.m_count = WinOptionState.BEGIN;
                    this.m_winNumber = new BigWinPlayNumber(this.m_NumberTxt, this.m_bigWinType, this.m_winStake, this.m_totalWin, this.m_showTime, this.m_controller, this.m_nowBet, this.m_t0);
                    break;
                case winType.MergerWin:
                    this.m_count = WinOptionState.BEGIN;
                    this.m_winNumber = new MergeWinPlayNumber(this.m_NumberTxt, this.m_bigWinType, this.m_winStake, this.m_totalWin, this.m_showTime, this.m_controller, this.m_nowBet, this.m_t0);
                    break;
                case winType.SuperWin:
                    this.m_count = WinOptionState.BEGIN;
                    this.m_winNumber = new SuperWinPlayNumber(this.m_NumberTxt, this.m_bigWinType, this.m_winStake, this.m_totalWin, this.m_showTime, this.m_controller, this.m_nowBet, this.m_t0);
                    break;
                default:
                    break;
            }
        };
        /**添加事件 */
        WinTypeUI.prototype.addEvent = function () {
            this.contentPane.addClickListener(this.onClickPane, this);
            this.m_winNumber.addEventListener(SmartEvent.ZeroToTotal, this.PlayNumOver, this);
            this.m_winNumber.addEventListener(SmartEvent.OneToTotal, this.PlayNumOver, this);
            this.m_winNumber.addEventListener(SmartEvent.TwoToTotal, this.PlayNumOver, this);
        };
        /**只有数字滚动完成后才会进来 */
        WinTypeUI.prototype.PlayNumOver = function (evt) {
            //如果数字滚动完成 且没有进行任何点击操作
            if (evt.isPlayOver && this.m_count == WinOptionState.BEGIN) {
                this.m_winNumber.setTxtValue(this.m_totalWin);
                this.m_count = WinOptionState.AUTOFINISHED;
            }
        };
        /**点击面板 */
        WinTypeUI.prototype.onClickPane = function () {
            /**如果自动完成 点击销毁和回调*/
            //如果已经点击了一次
            if (this.m_count == WinOptionState.AUTOFINISHED || this.m_count == WinOptionState.CLICKONE) {
                //状态为结束
                this.m_count = WinOptionState.BIGWINSHOWOVER;
                //this.destroyCom();
                if (this.m_onBigWinOver)
                    this.m_onBigWinOver.call(this.m_thisObj);
            }
            else if (this.m_count == WinOptionState.BEGIN) {
                //状态为点击了一次
                this.m_count = WinOptionState.CLICKONE;
                console.log("onclickPane" + this.m_count);
                //停止tween
                this.m_winNumber.PauseTween();
                //设置文本值为totalwin
                this.m_winNumber.setTxtValue(this.m_totalWin);
                //设置控制器状态为传入的wintype
                this.m_controller.setControllerIndex(this.m_bigWinType);
            }
        };
        /**销毁 */
        WinTypeUI.prototype.destroyCom = function () {
            _super.prototype.DistoryCom.call(this);
            this.m_count = null;
            this.m_totalWin = null;
            this.m_bigWinType = null;
            this.m_winStake = null;
            this.m_nowBet = null;
            this.m_showTime = null;
            this.m_beginTime = null;
            if (this.m_winNumber) {
                this.m_winNumber.removeEventListener(SmartEvent.ZeroToTotal, this.PlayNumOver, this);
                this.m_winNumber.removeEventListener(SmartEvent.OneToTotal, this.PlayNumOver, this);
                this.m_winNumber.removeEventListener(SmartEvent.TwoToTotal, this.PlayNumOver, this);
            }
            if (this.contentPane) {
                this.contentPane.removeClickListener(this.onClickPane, this);
            }
            this.m_winNumber.DistoryCom();
            this.m_count = null;
            this.m_language = null;
            this.m_pkgName = null;
        };
        return WinTypeUI;
    }(FguiContainer));
    Wang.WinTypeUI = WinTypeUI;
    __reflect(WinTypeUI.prototype, "Wang.WinTypeUI");
})(Wang || (Wang = {}));
var SmartEvent = (function (_super) {
    __extends(SmartEvent, _super);
    function SmartEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.isPlayOver = false;
        return _this;
    }
    SmartEvent.ONCLICKWINTYPEUINUM = "点击winTypeUI的次数";
    SmartEvent.WINTYPE = "播放winType的类型";
    SmartEvent.ZeroToTotal = "0到TotalWin";
    SmartEvent.ZeroToOne = "0到1";
    SmartEvent.OneToTotal = "1到Total";
    SmartEvent.OneToTwo = "1到2";
    SmartEvent.TwoToTotal = "2到Total";
    return SmartEvent;
}(egret.Event));
__reflect(SmartEvent.prototype, "SmartEvent");
var DispachSmartEvent = (function (_super) {
    __extends(DispachSmartEvent, _super);
    function DispachSmartEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DispachSmartEvent, "Instance", {
        get: function () {
            if (DispachSmartEvent.instance == null) {
                DispachSmartEvent.instance = new DispachSmartEvent();
            }
            return DispachSmartEvent.instance;
        },
        enumerable: true,
        configurable: true
    });
    DispachSmartEvent.prototype.dispatchSmartEvent = function (type, datavalue, isOver) {
        var daterEvent = egret.Event.create(SmartEvent, type);
        daterEvent.winType = datavalue;
        daterEvent.isPlayOver = isOver;
        this.dispatchEvent(daterEvent);
        egret.Event.release(daterEvent);
    };
    return DispachSmartEvent;
}(egret.EventDispatcher));
__reflect(DispachSmartEvent.prototype, "DispachSmartEvent");
//# sourceMappingURL=WinTypeUI .js.map