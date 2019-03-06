class WinNumExtention {
	public constructor() {
		this.ExtentionClass();
	}
	private ExtentionClass() {
		fairygui.UIPackage.addPackage("WinNumberUI");
		let _baseUrl = fairygui.UIPackage.getItemURL("WinNumberUI", "Main");
	    fairygui.UIObjectFactory.setPackageItemExtension(_baseUrl,BaseWinNumUI);
	}
}