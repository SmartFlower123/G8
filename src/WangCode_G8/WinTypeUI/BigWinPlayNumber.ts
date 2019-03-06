class BigWinPlayNumber extends BaseText {
	private m_winType: number;
	private m_isSuperWinOver: boolean = false;
	private m_isMergeWinOver: boolean = false;
	private m_bet: number;
	private m_downTran: fairygui.Transition;

	public constructor(txtValue: fairygui.GTextField, winType: number, winstake: Array<number>, totalwin: number, duration: number, controller: BaseController, bet: number, downTranr: fairygui.Transition) {
		super(txtValue)
		this.m_winType = winType;
		this.m_bet = bet;
		this.m_downTran = downTranr;
		this.setTxtValueString("");
		this.setStartValue();
		this.m_downTran.play();
		this.playNum(winstake, totalwin, duration);
		controller.setControllerIndex(winType);

	}
	private playNum(winstake: Array<number>, totalwin: number, duration: number) {
		this.playBigWin(totalwin, duration);
	}
	private playBigWin(totalwin: number, duration: number) {
		this.setTxtValue(this.StartValue);
		this.setStartValue(this.StartValue);
		this.setEndValue(totalwin);
		this.play(duration);
	}

	protected playComplete() {
		console.log("bigwin");
		this.dispatchSmartEvent(SmartEvent.ZeroToTotal, winType.BigWin, true);
	}
}
enum winType {
	BigWin,
	MergerWin,
	SuperWin
}