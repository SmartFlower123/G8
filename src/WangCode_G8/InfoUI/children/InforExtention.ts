class InforExtention extends BaseExtention {
	public constructor() {
		super();
	}
	public ClassExtention() {
		this.PkgName = "InfoUI" + "_" + PlayerInfo.language;
		fairygui.UIPackage.addPackage(this.PkgName);
		let _url = fairygui.UIPackage.getItemURL(this.PkgName, "Main");
		fairygui.UIObjectFactory.setPackageItemExtension(_url, BaseInfoUI);
	}
}