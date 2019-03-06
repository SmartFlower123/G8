module Wang {
	//状态机
	enum WinOptionState {
		BEGIN = 0,
		CLICKONE = 1,
		AUTOFINISHED = 2,
		BIGWINSHOWOVER = 3,
	}
	export class WinTypeUI extends FguiContainer {
		private m_bigWinType: number;
		private m_winStake: Array<number>;
		private m_nowBet: number;
		private m_showTime: number;
		private m_controller: BaseController;
		private m_totalWin: number;
		private m_NumberTxt: fairygui.GTextField;
		private m_count: WinOptionState = WinOptionState.BEGIN;
		private m_beginTime: number;
		private m_winNumber: BaseText;
		private m_language: string;
		private m_pkgName: string;
		private m_moduName = ModuleWang.moduName;
		private m_onBigWinOver: Function;
		private m_thisObj: any;
		private m_downCT:BaseController;
		private m_t0:fairygui.Transition;
		public constructor(bigWinType: number, winStake: Array<number>, totalWin: number, nowBet: number, showTime: number, onBigwinShowOver: Function, thisObj: any) {
			super();
			this.m_bigWinType = bigWinType;
			this.m_winStake = winStake;
			this.m_nowBet = nowBet;
			this.m_onBigWinOver = onBigwinShowOver;
			this.m_thisObj = thisObj;
			this.m_showTime = showTime;
			this.m_totalWin = totalWin;
			this.init();
		}
		private init() {
			//this.initLanguage();
			this.addPkg();
			this.initFGUI();
			this.initWinType();
			this.addEvent();
		}
		/**初始化语言类型*/
		// private initLanguage() {
		// 	this.m_language = "_" + PlayerInfo.language;
		// }
		/**加包*/
		private addPkg() {
			this.m_pkgName = this["__proto__"]["__class__"];
			this.m_pkgName = this.m_pkgName.replace(this.m_moduName, "");
			//this.m_pkgName += this.m_language;
			fairygui.UIPackage.addPackage(this.m_pkgName);
		}
		/**初始化FGUI */
		private initFGUI() {
			this.contentPane = fairygui.UIPackage.createObject(this.m_pkgName, "Main").asCom;
			//let _contentPane = this.contentPane.getChild("n170").asCom;
			//smart
			//let _controller = _contentPane.getController("c1");
			let _controller = this.contentPane.getController("c1");
			//this.m_NumberTxt = _contentPane.getChild("n171").asCom.getChild("n171").asTextField;
			this.m_NumberTxt = this.contentPane.getChild("Txt").asTextField;
			this.m_controller = new BaseController(_controller);
			this.m_t0=this.contentPane.getTransition("t0");
			// let _downController=this.contentPane.getController("winTypeCT");
			// this.m_downCT=new BaseController(_downController);

		}
		private initWinType() {
			switch (this.m_bigWinType) {
				case winType.BigWin:
					this.m_count = WinOptionState.BEGIN;
					this.m_winNumber = new BigWinPlayNumber(this.m_NumberTxt, this.m_bigWinType, this.m_winStake, this.m_totalWin, this.m_showTime, this.m_controller, this.m_nowBet,this.m_t0);
					break;
				case winType.MergerWin:
					this.m_count = WinOptionState.BEGIN;
					this.m_winNumber = new MergeWinPlayNumber(this.m_NumberTxt, this.m_bigWinType, this.m_winStake, this.m_totalWin, this.m_showTime, this.m_controller, this.m_nowBet,this.m_t0);
					break;
				case winType.SuperWin:
					this.m_count = WinOptionState.BEGIN;
					this.m_winNumber = new SuperWinPlayNumber(this.m_NumberTxt, this.m_bigWinType, this.m_winStake, this.m_totalWin, this.m_showTime, this.m_controller, this.m_nowBet,this.m_t0);
					break;
				default:
					break;
			}
		}

		/**添加事件 */
		private addEvent() {
			this.contentPane.addClickListener(this.onClickPane, this);
			this.m_winNumber.addEventListener(SmartEvent.ZeroToTotal, this.PlayNumOver, this);
			this.m_winNumber.addEventListener(SmartEvent.OneToTotal, this.PlayNumOver, this);
			this.m_winNumber.addEventListener(SmartEvent.TwoToTotal, this.PlayNumOver, this);
		}
		/**只有数字滚动完成后才会进来 */
		private PlayNumOver(evt: SmartEvent) {
			//如果数字滚动完成 且没有进行任何点击操作
			if (evt.isPlayOver && this.m_count == WinOptionState.BEGIN) {
				this.m_winNumber.setTxtValue(this.m_totalWin);
				this.m_count = WinOptionState.AUTOFINISHED;
			}
		}
		/**点击面板 */
		private onClickPane() {
			/**如果自动完成 点击销毁和回调*/
			//如果已经点击了一次
			if (this.m_count == WinOptionState.AUTOFINISHED || this.m_count == WinOptionState.CLICKONE) {
				//状态为结束
				this.m_count = WinOptionState.BIGWINSHOWOVER;
				//this.destroyCom();
				if (this.m_onBigWinOver) this.m_onBigWinOver.call(this.m_thisObj);
			}
			else if (this.m_count == WinOptionState.BEGIN) {
				//状态为点击了一次
				this.m_count = WinOptionState.CLICKONE;
				console.log("onclickPane" + this.m_count);
				//停止tween
				this.m_winNumber.PauseTween();
				//设置文本值为totalwin
				this.m_winNumber.setTxtValue(this.m_totalWin);
				//设置控制器状态为传入的wintype
				this.m_controller.setControllerIndex(this.m_bigWinType);
			}
		}
		/**销毁 */
		public destroyCom() {
			super.DistoryCom();
			this.m_count = null;
			this.m_totalWin = null;
			this.m_bigWinType = null;
			this.m_winStake = null;
			this.m_nowBet = null;
			this.m_showTime = null;
			this.m_beginTime = null;
			if (this.m_winNumber) {
				this.m_winNumber.removeEventListener(SmartEvent.ZeroToTotal, this.PlayNumOver, this);
				this.m_winNumber.removeEventListener(SmartEvent.OneToTotal, this.PlayNumOver, this);
				this.m_winNumber.removeEventListener(SmartEvent.TwoToTotal, this.PlayNumOver, this);
			}
			if (this.contentPane) {
				this.contentPane.removeClickListener(this.onClickPane, this);
			}
			this.m_winNumber.DistoryCom();
			this.m_count = null;
			this.m_language = null;
			this.m_pkgName = null;
		}
	}
}
























class SmartEvent extends egret.Event {
	public static ONCLICKWINTYPEUINUM: string = "点击winTypeUI的次数";
	public static WINTYPE: string = "播放winType的类型";
	public static ZeroToTotal: string = "0到TotalWin";
	public static ZeroToOne: string = "0到1";
	public static OneToTotal: string = "1到Total";
	public static OneToTwo: string = "1到2"
	public static TwoToTotal: string = "2到Total"
	public winType: number;
	public clickNumber: number;
	public isPlayOver: boolean = false;

	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}
}
class DispachSmartEvent extends egret.EventDispatcher {
	private static instance: DispachSmartEvent;
	public static get Instance() {
		if (DispachSmartEvent.instance == null) {
			DispachSmartEvent.instance = new DispachSmartEvent();
		}
		return DispachSmartEvent.instance;
	}
	public dispatchSmartEvent(type: any, datavalue: any, isOver: boolean) {
		var daterEvent: SmartEvent = egret.Event.create(SmartEvent, type);
		daterEvent.winType = datavalue;
		daterEvent.isPlayOver = isOver;
		this.dispatchEvent(daterEvent);
		egret.Event.release(daterEvent);
	}

}


