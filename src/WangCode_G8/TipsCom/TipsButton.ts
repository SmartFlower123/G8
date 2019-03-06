class TipsButton {
	private m_ButtonName: string;
	private m_targetButton: fairygui.GButton;
	private m_callBack: Function;
	private m_thisObj: any;
	private m_setActionName: string;
	private m_buttonAction: ButtonActionFactory;
	public constructor(target: fairygui.GButton) {
		this.m_targetButton = target;
	}
	/**第一步设置行为的名字*/
	public setActionName(name: string) {
		this.m_setActionName = name;
		//创建一个ButtonActionFactor的对象
		this.initBtAction();
	}
	/**回调*/
	public addonClickBtCallBack(callBack: Function, thisObj: any) {
		this.m_callBack = callBack;
		this.m_thisObj = thisObj;
	}
	/**添加事件 */
	public addEvent() {
		this.m_targetButton.addClickListener(this.onClickBt, this);
	}



	//===================下面是私有方法========================》
	private onClickBt() {
		this.m_buttonAction.Action();
		if (this.m_callBack) this.m_callBack.call(this.m_thisObj);
		//销毁
		this.destroyCom();
	}

	private initBtAction() {
		this.m_buttonAction = new ButtonActionFactory(this.m_setActionName);
	}
	public destroyCom() {
		this.m_callBack = null;
		this.m_thisObj = null;
		this.m_setActionName = null;
		this.m_buttonAction = null;
		this.m_ButtonName = null;
		if (this.m_targetButton) this.m_targetButton.removeClickListener(this.onClickBt, this);
		this.m_targetButton.dispose();
	}
}

//tips工厂类
