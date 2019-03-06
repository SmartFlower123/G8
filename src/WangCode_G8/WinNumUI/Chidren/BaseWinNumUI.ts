
class BaseWinNumUI extends fairygui.GComponent {
	private m_Txt: BaseText;
	private m_thisObj: any;
	private m_CommonWinUI: fairygui.GComponent;
	private m_CT: fairygui.Controller;
	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.initFGUI();
	}
	public constructor() {
		super();
	}
	/**@param	starIndex  跳钱起始位置
   * @param   stopIndex 跳钱结束位置
   * @param   time 跳钱时常(总共时常,实际跳钱时常需要减去500毫秒)
   * @param   callback 跳钱结束回调
   */
	public setMoney(starIndex: number, stopIndex: number, time: number, callback: Function) {
		this.m_Txt.addPlayCompleteCallBack(callback, this.m_thisObj);
		this.m_Txt.setTxtValueFloor(starIndex);
		this.m_Txt.setStartValue(starIndex);
		this.m_Txt.setEndValue(stopIndex);
		this.m_Txt.play(time);
	}
	public setIsX3Font(isX3: boolean = false) {
		if (isX3) {
			this.m_Txt.setTxtFont("BaseAssets", "x3Winnumber-Font");
			this.setCTState("show");
		}
		else {
			this.m_Txt.setTxtFont("BaseAssets", "Winnumber-Font");
			this.setCTState();
		}
	}
	public setDelayTime(val: number) {
		this.m_Txt.setDelayTime(val);
	}
	/**销毁 */
	public destoryCom() {
		this.m_Txt.DistoryCom();
		this.m_thisObj = null;
		if (this.parent) {
			this.parent.removeChild(this, true);
		}
	}
	/**设置指针指向 */
	public setThisObj(thisObj: any) {
		this.m_thisObj = thisObj;
	}
	/**初始化FGUI*/
	private initFGUI() {
		var _txt: fairygui.GTextField = this.getChild("Txt").asTextField;
		this.m_Txt = new BaseText(_txt);
		this.m_Txt.setTxtValueString();
		this.m_CT = this.getController("c1");
	}
	private setCTState(state: string = "hide") {
		this.m_CT.selectedPage = state;
	}
}
