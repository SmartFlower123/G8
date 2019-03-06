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
var DragonBonesElement = (function (_super) {
    __extends(DragonBonesElement, _super);
    function DragonBonesElement(_graph) {
        var _this = _super.call(this) || this;
        _this.m_isDispose = false;
        _this.m_graph = _graph;
        _this.m_graph.visible = false;
        return _this;
    }
    DragonBonesElement.prototype.create = function (_id) {
        if (this.m_isDispose == true || this.m_id == _id)
            return this;
        this.m_id = _id;
        var dragonbonesData = RES.getRes(this.m_id + "_ske_json");
        var textureData = RES.getRes(this.m_id + "_tex_json");
        var texture = RES.getRes(this.m_id + "_tex_png");
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);
        egretFactory.parseTextureAtlasData(textureData, texture);
        if (typeof (this.m_armatureDisplay) != "undefined")
            this.m_armatureDisplay.dispose();
        this.m_armatureDisplay = egretFactory.buildArmatureDisplay(this.m_id);
        var _x = this.m_graph.width * this.m_graph.pivotX;
        var _y = this.m_graph.height * this.m_graph.pivotY;
        this.m_armatureDisplay.x += _x;
        this.m_armatureDisplay.y += _y;
        this.m_graph.setNativeObject(this.m_armatureDisplay);
        return this;
    };
    /**dragonBones.EventObject */
    DragonBonesElement.prototype.addDBEventListener = function (_eventType, _listener, _eventThis) {
        this.m_armatureDisplay.addDBEventListener(_eventType, _listener, _eventThis);
    };
    /**dragonBones.EventObject */
    DragonBonesElement.prototype.removeDBEventListener = function (_eventType, _listener, _eventThis) {
        this.m_armatureDisplay.removeDBEventListener(_eventType, _listener, _eventThis);
    };
    DragonBonesElement.prototype.play = function (_name, _number) {
        if (_name === void 0) { _name = "newAnimation"; }
        if (_number === void 0) { _number = 0; }
        if (this.m_isDispose == true)
            return this;
        this.m_armatureDisplay.animation.play(_name, _number);
        return this;
    };
    DragonBonesElement.prototype.show = function () {
        if (this.m_isDispose == true)
            return this;
        this.m_graph.visible = true;
        return this;
    };
    DragonBonesElement.prototype.hide = function () {
        if (this.m_isDispose == true)
            return;
        this.m_graph.visible = false;
    };
    DragonBonesElement.prototype.dispose = function () {
        if (this.m_isDispose == true)
            return;
        this.m_isDispose = true;
        if (typeof (this.m_armatureDisplay) != "undefined") {
            this.m_armatureDisplay.dispose();
            if (this.m_armatureDisplay.parent)
                this.m_armatureDisplay.parent.removeChild(this.m_armatureDisplay);
        }
        this.m_graph = null;
        this.m_armatureDisplay = null;
        this.m_id = null;
    };
    return DragonBonesElement;
}(egret.HashObject));
__reflect(DragonBonesElement.prototype, "DragonBonesElement");
//# sourceMappingURL=DragonBonesElement.js.map