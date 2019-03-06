class RollerWinExtention {
	public constructor() {
		this.registerClass();
	}
	/**所有的命名为WinItem */
	private registerClass() {
		fairygui.UIPackage.addPackage("RollerWinUI");
		let _winItemUrl = fairygui.UIPackage.getItemURL("RollerWinUI", "WinItem");
		let _itemGroup = fairygui.UIPackage.getItemURL("RollerWinUI", "WinGroup");
		fairygui.UIObjectFactory.setPackageItemExtension(_winItemUrl, WinItem);
		fairygui.UIObjectFactory.setPackageItemExtension(_itemGroup, WinGroup);
	}
}