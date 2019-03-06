class BaseController {
	private m_target: fairygui.Controller;

	public constructor(target: fairygui.Controller) {
		this.m_target = target;
	}
	public setControllerIndex(index: number) {
		let _index = this.m_target.selectedIndex;
		if (_index == index) {
			return;
		}
		else {
			this.m_target.selectedIndex = index;
		}
	}
}