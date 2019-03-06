module Wang {
	export class RollerWinUI extends FguiContainer {
		private m_allData: Object;
		private m_singleLineData: Array<SingleLineData> = [];
		private m_winShowTime: RollerWinTime;
		private m_allWinData: RollerShowData;
		private m_winGroup: WinGroup;
		private m_timer: egret.Timer;
		//中奖线的长度
		private m_singleLineLen: number;
		private m_thisObj: any;
		private m_count: number = 0;
		private m_Text: fairygui.GTextField;
		public constructor(rollerWinData: Object, thisObj: any, onShowWinNumberOver?: Function, ) {
			super();
			this.m_allData = rollerWinData;
			this.m_thisObj = thisObj;
			this.init();
			this.playSet();
		}
		private init() {
			//初始化数据
			this.initData();
			//加包和注册扩展类
			new RollerWinExtention();
			//初始化FGUI
			this.initFGUI();
		}
		private initData() {
			/**初始化单条线的中奖数据 */
			var _linePokerArray: Array<Object> = this.m_allData["linePokerArray"];
			this.m_singleLineLen = _linePokerArray.length;
			for (let i = 0; i < _linePokerArray.length; ++i) {
				let _singleData = _linePokerArray[i];
				var _singleItem = new SingleLineData();
				_singleItem.initData(_singleData);
				this.m_singleLineData.push(_singleItem);
			}
			//初始化单线和所有线的动画播放时间
			this.m_winShowTime = new RollerWinTime();
			this.m_winShowTime.initData(this.m_allData);
			//初始化中奖棋牌的所有数据
			this.m_allWinData = new RollerShowData();
			this.m_allWinData.initData(this.m_allData);
		}
		/**销毁 */
		public destoryCom() {
			super.DistoryCom();
			this.m_allData = null;
			for (var key in this.m_singleLineData) {
				this.m_singleLineData[key].destoryData();
			}
			this.m_winShowTime.destoryData();
			this.m_allWinData.destoryData();
			if (this.m_winGroup.parent) {
				this.m_winGroup.parent.removeChild(this.m_winGroup, true);
			}
			if (this.m_timer) {
				this.m_timer.stop();
				this.m_timer.removeEventListener(egret.TimerEvent.TIMER, this.SingleLoopPlay, this);
				this.m_timer = null;
			}
			//中奖线的长度
			this.m_singleLineLen = null;
			this.m_thisObj = null;
			this.m_count = null;
		}
	
		private initFGUI() {
			this.contentPane = fairygui.UIPackage.createObject("RollerWinUI", "Main").asCom;
			this.m_winGroup = <WinGroup>this.contentPane.getChild("WinGroup").asCom;
			this.m_winGroup.initRollerData(this.m_allWinData.AllPokerArray);
			this.m_Text = this.contentPane.getChild("Txt").asTextField;
			console.log("========"+this.m_Text.x,this.m_Text.y);
			this.m_Text.text = "";
		}
		/**播放管理 */
		private playSet() {
			//先播放所有的中奖线
			this.PLayAllLine();
			//播单线
			this.playSingleLine();
		}
		/**播放所有线的动画*/
		private PLayAllLine() {
			if (this.m_allWinData.ToShowOne) return;
			this.m_winGroup.playAllWinLine(this.m_allWinData.AllWinPokerArr);
			this.setTxtValue(this.m_allWinData.AllWinCoins);
		}
		private setTxtValue(value: number) {
			this.m_Text.text = "";
			this.m_Text.text = "" + value.toFixed(0);
		}
		private playSingleLine() {
			var _delayTime = this.m_winShowTime.ShowAlltime;
			//如果直接播单线就不延迟
			if (this.m_allWinData.ToShowOne) {
				_delayTime = 0;
			}
			egret.setTimeout(() => {
				//回调
				if (this.m_allWinData.ShowAllEnd) this.m_allWinData.ShowAllEnd.call(this.m_thisObj);
				//如果是Freespin就只播总的中奖线
				if (this.m_allWinData.IsFreeSpin) return;
				//创建计时器循环播放
				if (this.m_allWinData.HaveshowOne) {
					this.createSingleLineTimer();
				}
			}, this, _delayTime);

		}
		//在所有线播放完成后循环的播放单线
		private createSingleLineTimer() {
			//创建计时器循环播放单线
			var _deltaTime = this.m_winShowTime.ShowoneTime;
			this.m_timer = new egret.Timer(_deltaTime, 0);
			this.m_timer.addEventListener(egret.TimerEvent.TIMER, this.SingleLoopPlay, this);
			this.m_timer.start();
		}
		private SingleLoopPlay() {
			this.m_winGroup.playAllWinLine(this.m_singleLineData[this.m_count].Line);
			this.setTxtValue(this.m_singleLineData[this.m_count].Coins);
			this.m_count++;
			if (this.m_count >= this.m_singleLineLen) {
				this.m_count = 0;
			}
		}
	}
}