var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ParaseJson = (function () {
    function ParaseJson() {
    }
    Object.defineProperty(ParaseJson, "Instance", {
        get: function () {
            if (ParaseJson.instance == null) {
                ParaseJson.instance = new ParaseJson();
            }
            return ParaseJson.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**通过id获取对应id的数据*/
    ParaseJson.prototype.getDataFromID = function (id) {
        this.m_id = id;
        console.log("SetID=======>" + this.data);
        var _one = this.data[this.m_id];
        for (var key in _one) {
            console.log(key);
        }
        return _one;
    };
    /**解析Json数据 */
    ParaseJson.prototype.ParaseData = function () {
        if (this.data != null)
            return;
        var _documentNameLengh = this.ParaseDataDocumentName.length;
        var _ParaseDataType = this.ParaseDataDocumentName.substring(_documentNameLengh - 4, _documentNameLengh);
        if (_ParaseDataType == "json") {
            this.data = RES.getRes(this.ParaseDataDocumentName);
        }
        else {
            egret.warn("You ParaseDocument is not typeof XML");
        }
        return this.data;
    };
    /**设置解析文档的名字*/
    ParaseJson.prototype.setParaseDataDocumentName = function (name) {
        this.ParaseDataDocumentName = name;
        return this;
    };
    return ParaseJson;
}());
__reflect(ParaseJson.prototype, "ParaseJson", ["IParaseData"]);
//# sourceMappingURL=ParaseJson.js.map