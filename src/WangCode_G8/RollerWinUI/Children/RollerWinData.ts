
/** 每条中奖线赢得钱和牌 */
class SingleLineData {
	/** 当前线路中奖金额 真实货币---暂时不用 */
	private win: number;
	private coins: number;
	private line: Array<number>;
	/**请只传入单线的数据 */
	public initData(singledata: Object) {
		var _data = singledata;
		this.coins = _data["coins"];
		this.line = _data["line"];
	}
	/** 当前线路中奖货币数量  硬币 滚钱用*/
	public get Coins() {
		return this.coins;
	}
	/** line 单线中奖的牌*/
	public get Line() {
		return this.line;
	}
	public destoryData() {
		this.win = null;
		this.coins = null;
		this.line = null;
	}
}

/**棋盘显示数据 */
class RollerShowData {
	private allPokerArray: Array<string>;
	private allWinPokerArr: Array<number>;
	private allWinCoins: number;
	private haveshowOne: boolean;
	private showAllEnd: Function;
	private isFreeSpin: boolean;
	private toShowOne: boolean;
	/**请传入所有的数据 */
	public initData(data: Object) {
		this.allPokerArray = data["allPokerArr"];
		this.allWinPokerArr = data["allWinPokerArr"];
		this.haveshowOne = data["haveshowOne"];
		this.showAllEnd = data["showAllEnd"];
		this.allWinCoins = data["allWinCoins"];
		this.isFreeSpin = data["isFreeSpin"];
		this.toShowOne = data["toShowOne"];
	}
	/**当前棋盘上的所有牌 */
	public get AllPokerArray() {
		return this.allPokerArray;
	}
	/**是否直接播放单线中奖*/
	public get ToShowOne() {
		return this.toShowOne;
	}
	/**当前棋盘上所有中奖牌 */
	public get AllWinPokerArr() {
		return this.allWinPokerArr;
	}
	/** 总硬币 滚钱用*/
	public get AllWinCoins() {
		return this.allWinCoins;
	}
	/**所有线中奖结束后的回调 所有线播完了 开始播单线的时候添加*/
	public get ShowAllEnd() {
		return this.showAllEnd;
	}
	/**如果是freespin就只播放总中奖线 */
	public get IsFreeSpin() {
		return this.isFreeSpin;
	}
	/**是否播放单线中奖 */
	public get HaveshowOne() {
		return this.haveshowOne
	}
	public destoryData() {
		this.allPokerArray = null;
		this.allWinPokerArr = null;
		this.allWinCoins = null;
		this.haveshowOne = null;
		this.showAllEnd = null;
		this.isFreeSpin = null;
		this.toShowOne = null;
	}
}
class RollerWinTime {
	private showAlltime: number;
	private showoneTime: number;
	public initData(data: Object) {
		this.showAlltime = data["showAlltime"];
		this.showoneTime = data["showoneTime"];
	}
	/**所有线中奖播放时长 */
	public get ShowAlltime() {
		return this.showAlltime;
	}
	/*单线中奖播放时常 */
	public get ShowoneTime() {
		return this.showoneTime;
	}
	public destoryData() {
		this.showAlltime = null;
		this.showoneTime = null;
	}
}










/**暂时不用的数据 */
class WinRollerDataNo {
	//-----------下面数据暂时不用--------------------
	/**所有中奖跳钱时常 */
	public showAllWinMoneyeTime: number;
	/**单线中奖跳钱时常 */
	public showOneWinMoneyeTime: number;
	/** 本轮总赢钱数 真实货币不做滚钱用*/
	public allwinNum: number;
	/**中奖第一轮跳钱结束回调 function*/
	public freeoneEnd: Function;
}
/**中奖线的条数和每个中奖线上的金额 */
class LineNum {
	/**所有中奖线*/
	public lineArray: Array<number>;
	/**所有中奖线对应的钱*/
	public linewinNum: Array<number>;
	/**单线中奖跳钱时常 */
	public showOneWinMoneyeTime: number;
	public constructor(lindeArray: Array<number>, lineWinNum: Array<number>) {
		this.lineArray = lindeArray;
		this.linewinNum = lineWinNum;
	}
}
