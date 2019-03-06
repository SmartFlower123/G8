class SuperWinPlayNumber extends BaseText {
	private m_winType: number;
	private m_bet: number;
	private m_showTime: number;
	private m_totalWin: number;
	private m_winStake: Array<number>;
	private count: number = 0;
	private m_controller: BaseController;
	private m_downTrans: fairygui.Transition;


	public constructor(txtValue: fairygui.GTextField, WinType: number, winstake: Array<number>, totalwin: number, duration: number, controller: BaseController, bet: number, downTrans: fairygui.Transition) {
		super(txtValue)
		this.m_winType = WinType;
		this.m_bet = bet;
		this.m_showTime = duration;
		this.m_totalWin = totalwin;
		this.m_winStake = winstake;
		this.m_controller = controller;
		this.m_downTrans = downTrans;
		this.setTxtValueString("");
		this.setStartValue();
		this.m_downTrans.play();
		this.playSuperWin(this.StartValue, this.m_winStake[this.count + 1] * this.m_bet, this.m_showTime);
		this.m_controller.setControllerIndex(winType.BigWin);
	}
	protected playComplete() {
		this.count += 1;
		if (this.count == 1) {
			this.m_controller.setControllerIndex(winType.MergerWin);
			this.m_downTrans.play();
			this.playSuperWin(this.m_winStake[this.count] * this.m_bet, this.m_winStake[this.count + 1] * this.m_bet, this.m_showTime);
		}
		if (this.count == 2) {
			this.m_downTrans.play();
			this.m_controller.setControllerIndex(winType.SuperWin);
			this.playSuperWin(this.m_winStake[this.count] * this.m_bet, this.m_totalWin, this.m_showTime);

		}
		if (this.count == 3) {
			this.dispatchSmartEvent(SmartEvent.TwoToTotal, winType.SuperWin, true);
			this.count = 0;
		}
	}
	private playSuperWin(startvalue: number, endValue: number, duration: number) {
		this.setTxtValue(startvalue);
		this.setStartValue(startvalue);
		this.setEndValue(endValue);
		this.play(duration);
	}
}
