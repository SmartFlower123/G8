class WinGroup extends fairygui.GComponent {
	private m_allWinItems: Array<WinItem>;
	private m_allShowData: Array<string>;
	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.initFGUI();
	}
	public constructor() {
		super();
	}

	/**初始化所有棋盘的数据*/
	public initRollerData(data: Array<string>) {
		this.m_allShowData = data;
		this.hideAll();
	   this.resetState();
	}
	/**播放中奖线 所有和单个都可以调用这个接口 */
	public playAllWinLine(data: Array<number>) {
		var _allWinData = data;
		 this.hideAll();
		this.resetState();
		for (let i = 0; i < _allWinData.length; ++i) {
			let _index=_allWinData[i];
			this.m_allWinItems[_index].setControllerState("show");
			this.m_allWinItems[_index].setLoaderUrl(this.m_allShowData[_index]+"-mc");
			console.log("item name is-------" + this.m_allWinItems[_allWinData[i]].name);
		}
	}
	//----------------------------下面是私有方法----------------------------------------
	private initFGUI() {
		/**初始化数组*/
		this.m_allWinItems = [];
		for (let i = 0; i < this.numChildren; ++i) {
			var _item: WinItem = <WinItem>this.getChildAt(i);
			let _index = parseInt(_item.name);
			this.m_allWinItems[_index] = _item;
		}

	}
	/**让所有图标变暗 */
	private hideAll() {
		for (var key in this.m_allWinItems) {
			this.m_allWinItems[key].setControllerState();
		}
	}
	private resetState() {
		for (var i = 0; i < this.m_allWinItems.length; ++i) {
			this.m_allWinItems[i].setLoaderUrl(this.m_allShowData[i])
		}
	}
}