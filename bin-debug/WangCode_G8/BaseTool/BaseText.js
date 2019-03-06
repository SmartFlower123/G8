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
var BaseText = (function (_super) {
    __extends(BaseText, _super);
    function BaseText(target) {
        var _this = _super.call(this) || this;
        // private m_bet: number = 2;
        _this.m_tweenobj = null;
        _this.is_complete = false;
        _this.m_delayTime = 800;
        _this.m_WinNumTxt = target;
        return _this;
        // this.m_callBack = callback;
        // this.m_callBackObj = callbackObj;
    }
    /**这里演示了一个数字变化的过程*/
    BaseText.prototype.play = function (duration) {
        if (duration === void 0) { duration = 2000; }
        this.m_WinNumTxt.visible = true;
        this.m_tweenobj = { value: this.m_startValue };
        var vars = {
            onChange: function () {
                // this.m_WinNumTxt.text = "" + this.m_tweenobj.value.toFixed(2);
                this.m_WinNumTxt.text = "" + this.m_tweenobj.value.toFixed(0);
                ;
                //console.log(this.m_tweenobj.value);
            },
            onChangeObj: this
        };
        egret.Tween.get(this.m_tweenobj, vars).to({ value: this.m_endValue }, duration).call(this.playComplete, this);
    };
    BaseText.prototype.setTxtFont = function (Pkgname, res) {
        var _url = fairygui.UIPackage.getItemURL(Pkgname, res);
        this.m_WinNumTxt.font = _url;
    };
    BaseText.prototype.addPlayCompleteCallBack = function (callback, thisObj) {
        this.m_callBack = callback;
        this.m_callBackObj = thisObj;
    };
    /**销毁*/
    BaseText.prototype.DistoryCom = function () {
        if (this.m_tweenobj) {
            egret.Tween.removeTweens(this.m_tweenobj);
        }
        if (this.m_WinNumTxt)
            this.m_WinNumTxt.dispose();
        this.m_WinNumTxt = null;
        this.m_startValue = null;
        this.m_endValue = null;
        //this.m_bet = null;
    };
    BaseText.prototype.PauseTween = function () {
        if (this.m_tweenobj) {
            egret.Tween.pauseTweens(this.m_tweenobj);
            egret.Tween.removeTweens(this.m_tweenobj);
        }
    };
    /**设置文本的初始值*/
    BaseText.prototype.setStartValue = function (startvalue) {
        if (startvalue === void 0) { startvalue = 0; }
        this.m_startValue = startvalue;
    };
    Object.defineProperty(BaseText.prototype, "StartValue", {
        get: function () {
            return this.m_startValue;
        },
        enumerable: true,
        configurable: true
    });
    BaseText.prototype.canVisible = function (isVisible) {
        if (isVisible === void 0) { isVisible = false; }
        this.m_WinNumTxt.visible = isVisible;
    };
    /**设置文本的结束值*/
    BaseText.prototype.setEndValue = function (endvalue) {
        if (endvalue === void 0) { endvalue = 0; }
        this.m_endValue = endvalue;
    };
    /**获取当前text的值 类型是number类型*/
    BaseText.prototype.getTxtValueToNumber = function (currentcyType, replaceCurrencyType) {
        if (currentcyType === void 0) { currentcyType = ""; }
        if (replaceCurrencyType === void 0) { replaceCurrencyType = ""; }
        return parseFloat(this.m_WinNumTxt.text.replace(currentcyType, replaceCurrencyType));
    };
    /**设置文本的值 不保留两位*/
    BaseText.prototype.setTxtValue = function (value, type) {
        if (type === void 0) { type = ""; }
        this.m_WinNumTxt.text = type + value;
    };
    /**设置文本的值 不保留两位*/
    BaseText.prototype.setTxtValueString = function (value) {
        if (value === void 0) { value = ""; }
        this.m_WinNumTxt.text = value;
    };
    /**设置文本的值 取整数*/
    BaseText.prototype.setTxtValueFloor = function (value, type) {
        if (type === void 0) { type = ""; }
        this.m_WinNumTxt.text = Math.floor(value) + type;
    };
    /**设置文本的值 保留两位*/
    BaseText.prototype.setTxtValueToFixedTwo = function (value, type) {
        if (type === void 0) { type = ""; }
        this.m_WinNumTxt.text = type + value.toFixed(2);
    };
    Object.defineProperty(BaseText.prototype, "EndValue", {
        /**获取动画结束值*/
        get: function () {
            return this.m_endValue;
        },
        enumerable: true,
        configurable: true
    });
    BaseText.prototype.playComplete = function () {
        var _this = this;
        this.setTxtValue(this.m_endValue);
        egret.setTimeout(function () {
            if (_this.m_callBack)
                _this.m_callBack.call(_this.m_callBackObj);
        }, this, this.m_delayTime);
    };
    BaseText.prototype.setDelayTime = function (val) {
        this.m_delayTime = val;
    };
    BaseText.prototype.setVisible = function (isVisible) {
        this.m_WinNumTxt.visible = isVisible;
    };
    return BaseText;
}(DispachSmartEvent));
__reflect(BaseText.prototype, "BaseText");
//# sourceMappingURL=BaseText.js.map