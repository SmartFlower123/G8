module Wang {
	export class LastWinUI extends FguiContainer {
		private m_lastWinExtention: LastWinExtention;
		private m_lastWin: BaseLastWin;
		public constructor(totalWin: number, onClick: Function, thisObj: any) {
			super();
			this.initFgui(totalWin, onClick, thisObj);
		}
		private initFgui(totalWin: number, onClick: Function, thisObj: any) {
			this.m_lastWinExtention = new LastWinExtention();
			this.m_lastWin = <BaseLastWin>fairygui.UIPackage.createObject(this.m_lastWinExtention.getPkgName, "Main").asCom;
			this.addChild(this.m_lastWin.displayObject);
			this.m_lastWin.initFGUI(totalWin);
			this.m_lastWin.addOnClickLisner(onClick, thisObj);
		}
		public destoryCom() {
			super.DistoryCom();
			this.m_lastWin.destoryCom();
		}
	}
}