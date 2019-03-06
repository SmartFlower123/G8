class LastWinExtention extends BaseExtention {

	public constructor() {
		super();
	}
	public ClassExtention() {
		this.PkgName = "LastWinUI" + "_" + PlayerInfo.language;
		fairygui.UIPackage.addPackage(this.PkgName);
		let _url = fairygui.UIPackage.getItemURL(this.PkgName, "Main");
		fairygui.UIObjectFactory.setPackageItemExtension(_url, BaseLastWin);
	}
	// public getPkgName(): string {
	// 	return this.PkgName;
	// }
}