class BaseLastWin extends fairygui.GComponent {
	private m_inTrans: fairygui.Transition;
	private m_daijiTrans: fairygui.Transition;
	private m_onClick: Function;
	private m_thisObj: any;
	private m_text: fairygui.GTextField;
	private m_textVal: number;
	protected constructFromXML(XML: any) {
		super.constructFromXML(XML);
	}
	public constructor() {
		super();
	}
	public initFGUI(textVal: number) {
		this.m_inTrans = this.getTransition("in");
		this.m_daijiTrans = this.getTransition("daiji");
		this.m_text = this.getChild("Txt").asTextField;
		this.m_textVal = textVal;
		this.m_text.text = "";
		this.playTrans();
	}
	private playTrans() {
		this.m_inTrans.play(this.playComplete, this, this.m_textVal, 1);
	}
	private playComplete(val: number) {
		this.m_text.text = val.toFixed(0) + "";
		this.m_daijiTrans.play();
		egret.setTimeout(() => {this.addClickListener(this.onClick, this); }, this, 1000);
	}
	private onClick() {
		if (this.m_onClick) this.m_onClick.call(this.m_thisObj);
	}
	/**点击的回调 */
	public addOnClickLisner(onclick: Function, thisObj: any) {
		this.m_onClick = onclick;
		this.m_thisObj = thisObj;
	}
	/**销毁 */
	public destoryCom() {
		if (this.parent) {
			this.parent.removeChild(this, true);
		}
		this.removeClickListener(this.onClick, this);
		this.m_onClick = null;
		this.m_thisObj = null;
		this.m_textVal = null;
	}
}