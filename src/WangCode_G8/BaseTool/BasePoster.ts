class BasePoster extends FguiContainer {
	private m_pkgName: string;
	private m_language: string;
	protected m_onClick: Function;
	protected m_thisObj: any;
	private m_moduName = ModuleWang.moduName;
	private m_isValidClick: boolean = true;
	
	public constructor(onclick: Function, thisObj: any) {
		super();
		this.m_onClick = onclick;
		this.m_thisObj = thisObj;
		this.init();
	}
	public destoryCom() {
		super.DistoryCom();
		this.m_pkgName = null;
		this.m_language = null;
		if (this.contentPane) this.contentPane.removeClickListener(this.onClick, this);
		this.contentPane.dispose();
		this.m_moduName = null;
	}
	public setIsValidClick(isValid: boolean = false) {
		this.m_isValidClick = isValid;
	}
	private init() {
		this.initLanguage();
		this.addPkg();
		this.initFGUI();
		this.addEvent();

	}
	/**初始化语言类型*/
	private initLanguage() {
		this.m_language = "_" + PlayerInfo.language;
	}
	/**加包*/
	private addPkg() {
		this.m_pkgName = this["__proto__"]["__class__"];
		this.m_pkgName = this.m_pkgName.replace(this.m_moduName, "");
		this.m_pkgName += this.m_language;
		fairygui.UIPackage.addPackage(this.m_pkgName);
	}
	/**FGUI组件的初始化 */
	private initFGUI() {
		this.contentPane = fairygui.UIPackage.createObject(this.m_pkgName, "Main").asCom;
	}
	/**添加事件*/
	private addEvent() {
		this.contentPane.addClickListener(this.onClick, this);

	}
	/**点击事件*/
	private onClick() {
		//this.destoryCom();
		if(!this.m_isValidClick) return;
		if (this.m_onClick) this.m_onClick.call(this.m_thisObj);

	}
}
