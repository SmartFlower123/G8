class ButtonActionFactory {
	private tips: TipsButton;
	private m_name: string;
	public constructor(name: string) {
		this.m_name = name;
	}
	public Action() {
		switch (this.m_name) {
			case ButtonActionEnum[0]:
				window.location.reload();
				break;
			case ButtonActionEnum[1]:
				break;
			default:
				break;
		}
	}
}

enum ButtonActionEnum {
	refresh,
	close,
}

