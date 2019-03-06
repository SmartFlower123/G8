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
    var WinNumUI = (function (_super) {
        __extends(WinNumUI, _super);
        function WinNumUI(thisObj) {
            var _this = _super.call(this) || this;
            _this.m_thisObj = thisObj;
            _this.initFGUI();
            return _this;
        }
        /**@param	starIndex  跳钱起始位置
       * @param   stopIndex 跳钱结束位置
       * @param   time 跳钱时常(总共时常,实际跳钱时常需要减去500毫秒)
       * @param   callback 跳钱结束回调
       */
        WinNumUI.prototype.setMoney = function (starIndex, stopIndex, time, callback) {
            this.m_CommonWinUI.setIsX3Font(false);
            this.m_CommonWinUI.setThisObj(this.m_thisObj);
            this.m_CommonWinUI.setMoney(starIndex, stopIndex, time, callback);
        };
        /**@param	starIndex  跳钱起始位置
         * @param   stopIndex 跳钱结束位置
         * @param   time 跳钱时常(总共时常,实际跳钱时常需要减去500毫秒)
         * @param   callback 跳钱结束回调
         */
        WinNumUI.prototype.setX3Money = function (starIndex, stopIndex, time, callback) {
            this.m_CommonWinUI.setIsX3Font(false);
            this.m_CommonWinUI.setThisObj(this);
            /**计算x3展示的时间 */
            this.m_x3StartStart = Math.floor(stopIndex * 0.3);
            this.m_end = stopIndex;
            this.m_x3RollTime = time - Math.floor(time * 0.3);
            this.m_CommonWinUI.setMoney(starIndex, this.m_x3StartStart, Math.floor(time * 0.3), this.commonPlayOver);
            this.m_CommonWinUI.setDelayTime(0);
            this.m_x3CallBack = callback;
        };
        WinNumUI.prototype.commonPlayOver = function () {
            this.m_CommonWinUI.setIsX3Font(true);
            this.m_CommonWinUI.setThisObj(this.m_thisObj);
            this.m_CommonWinUI.setDelayTime(800);
            this.m_CommonWinUI.setMoney(this.m_x3StartStart, this.m_end, this.m_x3RollTime, this.m_x3CallBack);
        };
        /**销毁*/
        WinNumUI.prototype.destoryCom = function () {
            _super.prototype.DistoryCom.call(this);
            this.m_CommonWinUI.destoryCom();
        };
        //---------------------下面是私有方法--------------------------------------------------
        WinNumUI.prototype.initFGUI = function () {
            //报名命名规则  普通中奖WinNumberUI  3倍中奖WinNumberUI3X
            new WinNumExtention();
            this.initCommonWinNum();
        };
        WinNumUI.prototype.initCommonWinNum = function () {
            this.m_CommonWinUI = fairygui.UIPackage.createObject("WinNumberUI", "Main").asCom;
            this.addChild(this.m_CommonWinUI.displayObject);
        };
        return WinNumUI;
    }(FguiContainer));
    Wang.WinNumUI = WinNumUI;
    __reflect(WinNumUI.prototype, "Wang.WinNumUI");
})(Wang || (Wang = {}));
//# sourceMappingURL=WinNumUI.js.map