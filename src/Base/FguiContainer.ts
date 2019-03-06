class FguiContainer extends egret.DisplayObjectContainer {
	protected m_isDistory: boolean = false;
	private m_contentPane: fairygui.GComponent;
	public constructor() {
		super();
		fairygui.UIPackage.addPackage("BaseAssets");
		fairygui.UIPackage.addPackage("PokerRes");
		if (!fairygui.GRoot.inst.displayObject.parent)
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	public set contentPane(_contentPane: fairygui.GComponent) {
		if (this.m_contentPane) return;
		this.m_contentPane = _contentPane;
		this.addChild(this.m_contentPane.displayObject);
	}

	public get contentPane(): fairygui.GComponent {
		return this.m_contentPane;
	}
	/**销毁按钮*/
	public DistoryCom(): void {
		if (this.m_isDistory == true) return;
		if (this.parent) {
			this.parent.removeChild(this);
		}
		//---备注 我这里做了更改
		if (this.m_contentPane) {
			this.removeChild(this.m_contentPane.displayObject);
			this.m_contentPane.dispose();
		}
		this.m_isDistory = true;

	}
	private onAddToStage(): void {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		if (!fairygui.GRoot.inst.displayObject.parent)
			this.stage.addChild(fairygui.GRoot.inst.displayObject);

	}
}