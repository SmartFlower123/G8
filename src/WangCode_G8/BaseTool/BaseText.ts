class BaseText extends DispachSmartEvent {
	private m_WinNumTxt: fairygui.GTextField;
	private m_callBack: Function;
	private m_callBackObj: any;
	private m_startValue: number;
	private m_endValue: number;
	// private m_bet: number = 2;
	private m_tweenobj: any = null;
	private is_complete: boolean = false;
	private m_delayTime: number = 800;
	public constructor(target: fairygui.GTextField) {
		super();
		this.m_WinNumTxt = target;
		// this.m_callBack = callback;
		// this.m_callBackObj = callbackObj;

	}
	/**这里演示了一个数字变化的过程*/
	public play(duration: number = 2000): void {
		this.m_WinNumTxt.visible = true;
		this.m_tweenobj = { value: this.m_startValue };
		var vars: any = {
			onChange: function (): void {
				// this.m_WinNumTxt.text = "" + this.m_tweenobj.value.toFixed(2);
				this.m_WinNumTxt.text = "" + this.m_tweenobj.value.toFixed(0);;
				//console.log(this.m_tweenobj.value);
			},
			onChangeObj: this
		};
		egret.Tween.get(this.m_tweenobj, vars).to({ value: this.m_endValue }, duration).call(this.playComplete, this);
	}
	public setTxtFont(Pkgname: string, res: string) {
		let _url = fairygui.UIPackage.getItemURL(Pkgname, res);
		this.m_WinNumTxt.font = _url
	}
	public addPlayCompleteCallBack(callback: Function, thisObj: any) {
		this.m_callBack = callback;
		this.m_callBackObj = thisObj;

	}
	/**销毁*/
	public DistoryCom(): void {
		if (this.m_tweenobj) {
			egret.Tween.removeTweens(this.m_tweenobj);
		}
		if (this.m_WinNumTxt)
			this.m_WinNumTxt.dispose();
		this.m_WinNumTxt = null;
		this.m_startValue = null;
		this.m_endValue = null;
		//this.m_bet = null;
	}
	public PauseTween() {
		if (this.m_tweenobj) {
			egret.Tween.pauseTweens(this.m_tweenobj);
			egret.Tween.removeTweens(this.m_tweenobj);
		}
	}
	/**设置文本的初始值*/
	public setStartValue(startvalue: number = 0): void {
		this.m_startValue = startvalue;
	}
	public get StartValue() {
		return this.m_startValue;
	}
	public canVisible(isVisible: boolean = false) {
		this.m_WinNumTxt.visible = isVisible;
	}
	/**设置文本的结束值*/
	public setEndValue(endvalue: number = 0): void {
		this.m_endValue = endvalue;
	}
	/**获取当前text的值 类型是number类型*/
	public getTxtValueToNumber(currentcyType: string = "", replaceCurrencyType: string = ""): number {
		return parseFloat(this.m_WinNumTxt.text.replace(currentcyType, replaceCurrencyType));
	}
	/**设置文本的值 不保留两位*/
	public setTxtValue(value: number, type: string = ""): void {
		this.m_WinNumTxt.text = type + value;
	}
	/**设置文本的值 不保留两位*/
	public setTxtValueString(value: string = ""): void {
		this.m_WinNumTxt.text = value;
	}
	/**设置文本的值 取整数*/
	public setTxtValueFloor(value: number, type: string = ""): void {
		this.m_WinNumTxt.text = Math.floor(value) + type;
	}
	/**设置文本的值 保留两位*/
	public setTxtValueToFixedTwo(value: number, type: string = ""): void {
		this.m_WinNumTxt.text = type + value.toFixed(2);
	}
	/**获取动画结束值*/
	public get EndValue() {
		return this.m_endValue;
	}
	protected playComplete(): void {
		this.setTxtValue(this.m_endValue);
		egret.setTimeout(() => {
			if (this.m_callBack) this.m_callBack.call(this.m_callBackObj);
		}, this, this.m_delayTime);
	}
	
	public setDelayTime(val: number) {
		this.m_delayTime = val;
	}
	public setVisible(isVisible: boolean) {
		this.m_WinNumTxt.visible = isVisible;
	}
}