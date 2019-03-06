class MergeWinPlayNumber extends BaseText {
	private m_winType: number;
	private m_isSuperWinOver: boolean = false;
	private m_isMergeWinOver: boolean = false;
	private m_bet: number;
	private m_showTime: number;
	private m_totalWin: number;
	private m_winStake: Array<number>;
	private count: number = 0;
	private m_controller: BaseController;
   private m_to:fairygui.Transition;

	public constructor(txtValue: fairygui.GTextField, WinType: number, winstake: Array<number>, totalwin: number, duration: number, controller: BaseController, bet: number, downCT: fairygui.Transition) {
		super(txtValue);
		this.m_winType = WinType;
		this.m_bet = bet;
		this.m_showTime = duration;
		this.m_totalWin = totalwin;
		this.m_winStake = winstake;
		this.m_controller = controller;
		this.setTxtValueString("");
		this.setStartValue();
		this.m_to = downCT;
		this.m_to.play();
		this.playMergeWin(this.StartValue, this.m_winStake[WinStage.ZEROTOONE] * this.m_bet, this.m_showTime);
		this.m_controller.setControllerIndex(winType.BigWin);

	}
	protected playComplete() {
		this.count += 1;
		if (this.count == 1) {
			this.m_to.play();
			this.m_controller.setControllerIndex(winType.MergerWin);
			this.playMergeWin(this.m_winStake[WinStage.ZEROTOONE] * this.m_bet, this.m_totalWin, this.m_showTime);
		}
		if (this.count == 2) {
			this.dispatchSmartEvent(SmartEvent.OneToTotal, winType.MergerWin, true);
			this.count = 0;
		}
	}
	private playMergeWin(startvalue: number, endValue: number, duration: number) {
		this.setTxtValue(startvalue);
		this.setStartValue(startvalue);
		this.setEndValue(endValue);
		this.play(duration);
	}
}
enum WinStage {
	BEGIN,
	ZEROTOONE,
	ONETOTWO,
	ONETOTOTAL,
	TWOTOTOTAL
}