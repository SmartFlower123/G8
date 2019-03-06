var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MathUtils = (function () {
    function MathUtils() {
    }
    //计算两点之间的角度
    MathUtils.GetAngle = function (targetX, targetY, ballX, ballY) {
        var offsetX = ballX - targetX;
        var offsetY = ballY - targetY;
        var rad = Math.atan2(offsetY, offsetX);
        var degree = rad * 180 / Math.PI;
        var distance = degree - 90;
        return distance;
    };
    //计算两点之间的角度
    MathUtils.GetAnglePoint = function (targetPoint, startPoint) {
        var offsetX = startPoint.x - targetPoint.x;
        var offsetY = startPoint.y - targetPoint.y;
        var rad = Math.atan2(offsetY, offsetX);
        var degree = rad * 180 / Math.PI;
        var distance = degree - 90;
        return distance;
    };
    //查找舞台上的多个元件是否存在
    MathUtils.FindChildRenInView = function (stage, childrenName, lister, thisObj) {
        for (var i = 0; i < stage.numChildren; ++i) {
            var _child = stage.getChildAt(i);
            for (var j = 0; j < childrenName.length; ++j) {
                if (_child.name == childrenName[j]) {
                    if (lister != null && lister != undefined)
                        _child.addClickListener(lister, thisObj);
                }
            }
        }
    };
    //查找舞台上的单个元件是否存在
    MathUtils.FindChildInView = function (stage, childrenName, lister, thisObj) {
        for (var i = 0; i < stage.numChildren; ++i) {
            var _child = stage.getChildAt(i);
            if (_child.name == childrenName) {
                if (lister)
                    _child.addClickListener(lister, thisObj);
            }
        }
    };
    //查找舞台上的单个元件是否存在 并返回bool值
    MathUtils.hasChild = function (stage, childrenName) {
        var _hasChild = false;
        for (var i = 0; i < stage.numChildren; ++i) {
            var _child = stage.getChildAt(i);
            if (_child.name == childrenName) {
                _hasChild = true;
            }
        }
        return _hasChild;
    };
    return MathUtils;
}());
__reflect(MathUtils.prototype, "MathUtils");
var ModuleWang = (function () {
    function ModuleWang() {
    }
    ModuleWang.moduName = "Wang.";
    return ModuleWang;
}());
__reflect(ModuleWang.prototype, "ModuleWang");
//# sourceMappingURL=MathUtils.js.map