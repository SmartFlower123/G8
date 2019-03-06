class WinItem extends fairygui.GComponent {
	private m_loader: fairygui.GLoader;
	private m_winBgController: fairygui.Controller;
	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.init();
	}
	public constructor() {
		super();
	}
	/**装载器统一命名为loader
	 * 控制器统一命名为WinBgCT
	*/
	private init() {
		this.initFGUI();
		this.initState();
	}
	private initFGUI() {
		this.m_loader = this.getChild("loader").asLoader;
		this.m_winBgController = this.getController("c1");
	}
	private initState() {
		this.m_loader.url = "";
		this.setControllerState();
	}
	/**控制显示器 默认是隐藏 */
	public setControllerState(state: string = "hide") {
		this.m_winBgController.selectedPage = state;
	}
	/**设置url */
	public setLoaderUrl(resName: string, pkgName: string = "PokerRes") {
		let _resName=resName;
		let _url = fairygui.UIPackage.getItemURL(pkgName, _resName);
		this.m_loader.url = _url;
	}
	// /**销毁*/
	// public destoryCom() {
	// 	if (this.parent) {
	// 		this.parent.removeChild(this, true);
	// 	}
	// }
}