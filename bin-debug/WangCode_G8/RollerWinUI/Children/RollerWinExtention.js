var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RollerWinExtention = (function () {
    function RollerWinExtention() {
        this.registerClass();
    }
    /**所有的命名为WinItem */
    RollerWinExtention.prototype.registerClass = function () {
        fairygui.UIPackage.addPackage("RollerWinUI");
        var _winItemUrl = fairygui.UIPackage.getItemURL("RollerWinUI", "WinItem");
        var _itemGroup = fairygui.UIPackage.getItemURL("RollerWinUI", "WinGroup");
        fairygui.UIObjectFactory.setPackageItemExtension(_winItemUrl, WinItem);
        fairygui.UIObjectFactory.setPackageItemExtension(_itemGroup, WinGroup);
    };
    return RollerWinExtention;
}());
__reflect(RollerWinExtention.prototype, "RollerWinExtention");
//# sourceMappingURL=RollerWinExtention.js.map