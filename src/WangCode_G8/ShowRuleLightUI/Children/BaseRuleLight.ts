class BaseRuleLight extends fairygui.GComponent {
	private m_loader: fairygui.GLoader;
	private m_dragonBonContainer: fairygui.GGraph;
	protected constructFromXML(xml: any) {
		super.constructFromXML(xml);
		this.initFGUI();
	}
	public constructor() {
		super();
	}
	private initFGUI() {
		this.m_loader = this.getChild("loader").asLoader;
		this.m_dragonBonContainer = this.getChild("dragonContainer").asGraph;
		this.m_loader.url = "";
	}
	public setLoadrUrl(resName: number, pkgName) {
		let _url = fairygui.UIPackage.getItemURL(pkgName, (resName + ""));
		this.m_loader.url = _url;
	}
	public get DragonBonContainer() {
		return this.m_dragonBonContainer;
	}
}