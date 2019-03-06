module Wang {
	export class ShowRuleLightUI extends FguiContainer {
		private m_timer: egret.Timer;
		private m_delayTime: number = 2000;
		private m_state: RuleLightState;
		private m_ruleLight: BaseRuleLight;
		private m_count: number;
		private m_maxCount: number;
		private m_ruleLightExtention:RuleLightExtention;
		private m_pkgName:string;
		public constructor() {
			super();
			this.initFGUI();
			this.createTimer();
		}
		private initFGUI() {
			this.m_ruleLightExtention=new RuleLightExtention();
			this.m_pkgName=this.m_ruleLightExtention.PkgName;
			this.m_ruleLight = <BaseRuleLight>fairygui.UIPackage.createObject(this.m_pkgName, "Main").asCom;
			this.addChild(this.m_ruleLight.displayObject);
			this.m_count = 1;
			this.m_ruleLight.setLoadrUrl(this.m_count,this.m_pkgName);
			this.m_count++;
			this.m_state = RuleLightState.LOOP;
			this.m_maxCount = 5;
		}
		private createTimer() {
			this.m_timer = new egret.Timer(this.m_delayTime, 0);
			this.m_timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this)
			this.TimerStateManager()
		}
		private TimerStateManager() {
			switch (this.m_state) {
				case RuleLightState.LOOP:
					this.m_timer.start();
					break;
				default:
					this.m_timer.stop();
					break;
			}
		}
		private timerFunc() {
			this.m_ruleLight.setLoadrUrl(this.m_count,this.m_pkgName);
			this.m_count++;
			if (this.m_count >= this.m_maxCount)
				this.m_count = 1;
		}
	}
	enum RuleLightState {
		LOOP,
	}
}
