var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ButtonActionFactory = (function () {
    function ButtonActionFactory(name) {
        this.m_name = name;
    }
    ButtonActionFactory.prototype.Action = function () {
        switch (this.m_name) {
            case ButtonActionEnum[0]:
                window.location.reload();
                break;
            case ButtonActionEnum[1]:
                break;
            default:
                break;
        }
    };
    return ButtonActionFactory;
}());
__reflect(ButtonActionFactory.prototype, "ButtonActionFactory");
var ButtonActionEnum;
(function (ButtonActionEnum) {
    ButtonActionEnum[ButtonActionEnum["refresh"] = 0] = "refresh";
    ButtonActionEnum[ButtonActionEnum["close"] = 1] = "close";
})(ButtonActionEnum || (ButtonActionEnum = {}));
//# sourceMappingURL=ButtonActionFactory.js.map