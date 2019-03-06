module Wang {
	export class WinNumUI extends FguiContainer {
		private m_thisObj: any;
		private m_CommonWinUI: BaseWinNumUI;
		private m_x3StartStart: number;
		private m_x3RollTime: number;
		private m_end: number;
		private m_x3CallBack: Function;
		public constructor(thisObj: any) {
			super();
			this.m_thisObj = thisObj;
			this.initFGUI();
		}
		/**@param	starIndex  跳钱起始位置
	   * @param   stopIndex 跳钱结束位置
	   * @param   time 跳钱时常(总共时常,实际跳钱时常需要减去500毫秒)
	   * @param   callback 跳钱结束回调
	   */
		public setMoney(starIndex: number, stopIndex: number, time: number, callback: Function) {
			this.m_CommonWinUI.setIsX3Font(false);
			this.m_CommonWinUI.setThisObj(this.m_thisObj);
			this.m_CommonWinUI.setMoney(starIndex, stopIndex, time, callback);
		}
		/**@param	starIndex  跳钱起始位置
		 * @param   stopIndex 跳钱结束位置
		 * @param   time 跳钱时常(总共时常,实际跳钱时常需要减去500毫秒)
		 * @param   callback 跳钱结束回调
		 */
		public setX3Money(starIndex: number, stopIndex: number, time: number, callback: Function) {
			this.m_CommonWinUI.setIsX3Font(false);
			this.m_CommonWinUI.setThisObj(this);
			/**计算x3展示的时间 */
			this.m_x3StartStart = Math.floor(stopIndex * 0.3);
			this.m_end = stopIndex;
			this.m_x3RollTime = time - Math.floor(time * 0.3);
			this.m_CommonWinUI.setMoney(starIndex, this.m_x3StartStart, Math.floor(time * 0.3), this.commonPlayOver);
			this.m_CommonWinUI.setDelayTime(0);
			this.m_x3CallBack = callback;
		}
		private commonPlayOver() {
			this.m_CommonWinUI.setIsX3Font(true);
			this.m_CommonWinUI.setThisObj(this.m_thisObj);
			this.m_CommonWinUI.setDelayTime(800);
			this.m_CommonWinUI.setMoney(this.m_x3StartStart, this.m_end, this.m_x3RollTime, this.m_x3CallBack);
		}
		/**销毁*/
		public destoryCom() {
			super.DistoryCom();
			this.m_CommonWinUI.destoryCom();
		}
		//---------------------下面是私有方法--------------------------------------------------
		private initFGUI() {
			//报名命名规则  普通中奖WinNumberUI  3倍中奖WinNumberUI3X
			new WinNumExtention();
			this.initCommonWinNum();
		}
		private initCommonWinNum() {
			this.m_CommonWinUI = <BaseWinNumUI>fairygui.UIPackage.createObject("WinNumberUI", "Main").asCom;
			this.addChild(this.m_CommonWinUI.displayObject);
		}
	}
}