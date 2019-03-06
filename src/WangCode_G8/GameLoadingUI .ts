module Wang {
	export class GameLoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
		private m_progreesBar: fairygui.GProgressBar;
		public constructor() {
			super();
			this.addPkg();
			if (!fairygui.GRoot.inst.displayObject.parent)
				this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}
		private addPkg() {
			fairygui.UIPackage.addPackage("GameLoadingUI");
			console.log("------------gameloadingUI");
		}
		private initFGUI() {
			var _main: fairygui.GComponent = fairygui.UIPackage.createObject("GameLoadingUI", "Main").asCom;
			this.addChild(_main.displayObject);
			this.m_progreesBar = _main.getChild("n0").asProgress;
			this.m_progreesBar.value = 0;
		}
		private onAddToStage(): void {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			if (!fairygui.GRoot.inst.displayObject.parent)
				this.stage.addChild(fairygui.GRoot.inst.displayObject);
			this.initFGUI();
		}
		public onProgress(current: number, total: number): void {
			this.m_progreesBar.value = Math.floor((current / total) * 100);
			// this.textField.text = `Loading...${current}/${total}`;
		}
	}
}