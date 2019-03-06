class RuleLightExtention {
	private m_pkgName: string;

	public constructor() {
		this.RuleLightExtention();
	}
	private RuleLightExtention() {
		var _language = "_" + PlayerInfo.language;
		this.m_pkgName = "ShowRuleLightUI" + _language;
		fairygui.UIPackage.addPackage(this.m_pkgName);
		let _url = fairygui.UIPackage.getItemURL(this.m_pkgName, "Main");
		fairygui.UIObjectFactory.setPackageItemExtension(_url, BaseRuleLight);
	}
	public get PkgName() {
		return this.m_pkgName;
	}
	public destoryCom() {
		this.m_pkgName = null;
	}
}