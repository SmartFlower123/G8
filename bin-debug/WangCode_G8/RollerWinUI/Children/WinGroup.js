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
var WinGroup = (function (_super) {
    __extends(WinGroup, _super);
    function WinGroup() {
        return _super.call(this) || this;
    }
    WinGroup.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.initFGUI();
    };
    /**初始化所有棋盘的数据*/
    WinGroup.prototype.initRollerData = function (data) {
        this.m_allShowData = data;
        this.hideAll();
        this.resetState();
    };
    /**播放中奖线 所有和单个都可以调用这个接口 */
    WinGroup.prototype.playAllWinLine = function (data) {
        var _allWinData = data;
        this.hideAll();
        this.resetState();
        for (var i = 0; i < _allWinData.length; ++i) {
            var _index = _allWinData[i];
            this.m_allWinItems[_index].setControllerState("show");
            this.m_allWinItems[_index].setLoaderUrl(this.m_allShowData[_index] + "-mc");
            console.log("item name is-------" + this.m_allWinItems[_allWinData[i]].name);
        }
    };
    //----------------------------下面是私有方法----------------------------------------
    WinGroup.prototype.initFGUI = function () {
        /**初始化数组*/
        this.m_allWinItems = [];
        for (var i = 0; i < this.numChildren; ++i) {
            var _item = this.getChildAt(i);
            var _index = parseInt(_item.name);
            this.m_allWinItems[_index] = _item;
        }
    };
    /**让所有图标变暗 */
    WinGroup.prototype.hideAll = function () {
        for (var key in this.m_allWinItems) {
            this.m_allWinItems[key].setControllerState();
        }
    };
    WinGroup.prototype.resetState = function () {
        for (var i = 0; i < this.m_allWinItems.length; ++i) {
            this.m_allWinItems[i].setLoaderUrl(this.m_allShowData[i]);
        }
    };
    return WinGroup;
}(fairygui.GComponent));
__reflect(WinGroup.prototype, "WinGroup");
//# sourceMappingURL=WinGroup.js.map