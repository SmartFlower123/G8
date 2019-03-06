module Wang {
	export class FreeAddUI extends FguiContainer {
		public constructor() {
			super();
			fairygui.UIPackage.addPackage("FreeAddUI");
			this.initFGUI();
		}
		public destoryCom() {
			super.DistoryCom();
		}
		private initFGUI() {
			this.contentPane = fairygui.UIPackage.createObject("FreeAddUI", "Main").asCom;
			var _tran: fairygui.Transition = this.contentPane.getTransition("t0");
			_tran.play();
		}
	}
}