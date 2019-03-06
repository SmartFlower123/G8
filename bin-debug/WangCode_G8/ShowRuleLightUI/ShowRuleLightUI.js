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
    var ShowRuleLightUI = (function (_super) {
        __extends(ShowRuleLightUI, _super);
        function ShowRuleLightUI() {
            var _this = _super.call(this) || this;
            _this.m_delayTime = 2000;
            _this.initFGUI();
            _this.createTimer();
            return _this;
        }
        ShowRuleLightUI.prototype.initFGUI = function () {
            this.m_ruleLightExtention = new RuleLightExtention();
            this.m_pkgName = this.m_ruleLightExtention.PkgName;
            this.m_ruleLight = fairygui.UIPackage.createObject(this.m_pkgName, "Main").asCom;
            this.addChild(this.m_ruleLight.displayObject);
            this.m_count = 1;
            this.m_ruleLight.setLoadrUrl(this.m_count, this.m_pkgName);
            this.m_count++;
            this.m_state = RuleLightState.LOOP;
            this.m_maxCount = 5;
        };
        ShowRuleLightUI.prototype.createTimer = function () {
            this.m_timer = new egret.Timer(this.m_delayTime, 0);
            this.m_timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.TimerStateManager();
        };
        ShowRuleLightUI.prototype.TimerStateManager = function () {
            switch (this.m_state) {
                case RuleLightState.LOOP:
                    this.m_timer.start();
                    break;
                default:
                    this.m_timer.stop();
                    break;
            }
        };
        ShowRuleLightUI.prototype.timerFunc = function () {
            this.m_ruleLight.setLoadrUrl(this.m_count, this.m_pkgName);
            this.m_count++;
            if (this.m_count >= this.m_maxCount)
                this.m_count = 1;
        };
        return ShowRuleLightUI;
    }(FguiContainer));
    Wang.ShowRuleLightUI = ShowRuleLightUI;
    __reflect(ShowRuleLightUI.prototype, "Wang.ShowRuleLightUI");
    var RuleLightState;
    (function (RuleLightState) {
        RuleLightState[RuleLightState["LOOP"] = 0] = "LOOP";
    })(RuleLightState || (RuleLightState = {}));
})(Wang || (Wang = {}));
//# sourceMappingURL=ShowRuleLightUI.js.map