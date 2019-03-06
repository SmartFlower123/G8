module Wang {
	export class InfoUI extends FguiContainer {
		private m_baseInfo: BaseInfoUI;
		private m_infoExtention: InforExtention;
		private m_Rtb: number;
		public constructor(rtb?: number) {
			super();
			this.m_Rtb = rtb;
			this.init();
		}
		private init() {
			this.m_infoExtention = new InforExtention();
			let _pkgName = this.m_infoExtention.getPkgName;
			this.m_baseInfo = <BaseInfoUI>fairygui.UIPackage.createObject(_pkgName, "Main").asCom;
			this.addChild(this.m_baseInfo.displayObject);
			this.m_baseInfo.init(_pkgName);
			if (this.m_Rtb) {
				this.m_baseInfo.setTxtValue(this.m_Rtb);
			}
		}
		public destoryCom() {
			super.DistoryCom();
			this.m_baseInfo.destroyCom();
			this.m_infoExtention = null;
			this.m_Rtb = null;
		}
	}
}