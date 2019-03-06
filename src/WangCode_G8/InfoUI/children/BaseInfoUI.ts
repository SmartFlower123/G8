
class BaseInfoUI extends fairygui.GComponent {
	private m_btnRight: fairygui.GButton;
	private m_btnLeft: fairygui.GButton;
	private m_loader: fairygui.GLoader;
	private m_startImgIndex: number;
	private m_endImgIndex: number;
	private m_pkgName: string;
	private m_count: number;
	private m_txt: fairygui.GTextField;
	protected construtFromXML(XML: any) {
		super.constructFromXML(XML);
	}
	public constructor() {
		super();
	}
	public init(pkgName: string) {
		this.initFGUI(pkgName);
		this.addEvent();
	}
	private initFGUI(pkgName: string) {
		this.m_btnRight = this.getChild("btnRight").asButton;
		this.m_btnLeft = this.getChild("btnLeft").asButton;
		this.m_loader = this.getChild("loader").asLoader;
		this.m_txt = this.getChild("Txt").asTextField;
		this.m_count = 1;
		this.m_startImgIndex = 1;
		this.m_endImgIndex = 5;
		this.m_pkgName = pkgName;
		this.setLoaderUrl(this.m_startImgIndex);
	}
	public setTxtValue(val: number) {
		this.m_txt.setVar("val",""+val).flushVars();
	}
	public destroyCom() {
		this.m_startImgIndex = null;
		this.m_endImgIndex = null;
		this.m_pkgName = null;
		this.m_count = null;
		this.m_txt = null;
		if (this.m_btnLeft) this.m_btnLeft.removeClickListener(this.onClickLeft, this);
		if (this.m_btnRight) this.m_btnRight.removeClickListener(this.onClickRight, this);
		if (this.parent) {
			this.parent.removeChild(this, true);
		}
	}
	private addEvent() {
		this.m_btnLeft.addClickListener(this.onClickLeft, this);
		this.m_btnRight.addClickListener(this.onClickRight, this);
	}
	private setLoaderUrl(resName: number) {
		let _url = fairygui.UIPackage.getItemURL(this.m_pkgName, resName + "");
		this.m_loader.url = _url;
	}
	private onClickLeft() {
		this.m_count--;
		if (this.m_count < this.m_startImgIndex) this.m_count = this.m_startImgIndex;
		this.setLoaderUrl(this.m_count);
	}
	private onClickRight() {
		this.m_count++;
		if (this.m_count > this.m_endImgIndex) this.m_count = this.m_endImgIndex;
		this.setLoaderUrl(this.m_count);
	}
}
