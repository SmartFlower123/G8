var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TipsButton = (function () {
    function TipsButton(target) {
        this.m_targetButton = target;
    }
    /**第一步设置行为的名字*/
    TipsButton.prototype.setActionName = function (name) {
        this.m_setActionName = name;
        //创建一个ButtonActionFactor的对象
        this.initBtAction();
    };
    /**回调*/
    TipsButton.prototype.addonClickBtCallBack = function (callBack, thisObj) {
        this.m_callBack = callBack;
        this.m_thisObj = thisObj;
    };
    /**添加事件 */
    TipsButton.prototype.addEvent = function () {
        this.m_targetButton.addClickListener(this.onClickBt, this);
    };
    //===================下面是私有方法========================》
    TipsButton.prototype.onClickBt = function () {
        this.m_buttonAction.Action();
        if (this.m_callBack)
            this.m_callBack.call(this.m_thisObj);
        //销毁
        this.destroyCom();
    };
    TipsButton.prototype.initBtAction = function () {
        this.m_buttonAction = new ButtonActionFactory(this.m_setActionName);
    };
    TipsButton.prototype.destroyCom = function () {
        this.m_callBack = null;
        this.m_thisObj = null;
        this.m_setActionName = null;
        this.m_buttonAction = null;
        this.m_ButtonName = null;
        if (this.m_targetButton)
            this.m_targetButton.removeClickListener(this.onClickBt, this);
        this.m_targetButton.dispose();
    };
    return TipsButton;
}());
__reflect(TipsButton.prototype, "TipsButton");
//tips工厂类
//# sourceMappingURL=TipsButton.js.map