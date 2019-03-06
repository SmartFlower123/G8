class MathUtils {
	//计算两点之间的角度
	public static GetAngle(targetX: number, targetY: number, ballX: number, ballY: number): number {
		var offsetX: number = ballX - targetX;
		var offsetY: number = ballY - targetY;
		var rad: number = Math.atan2(offsetY, offsetX);
		var degree: number = rad * 180 / Math.PI;
		let distance = degree - 90;
		return distance;
	}
	//计算两点之间的角度
	public static GetAnglePoint(targetPoint: egret.Point, startPoint: egret.Point): number {
		var offsetX: number = startPoint.x - targetPoint.x;
		var offsetY: number = startPoint.y - targetPoint.y;
		var rad: number = Math.atan2(offsetY, offsetX);
		var degree: number = rad * 180 / Math.PI;
		let distance = degree - 90;
		return distance;
	}
	//查找舞台上的多个元件是否存在
	public static FindChildRenInView(stage: fairygui.GComponent, childrenName: Array<string>, lister: Function, thisObj: any) {
		for (let i = 0; i < stage.numChildren; ++i) {
			let _child: fairygui.GObject = stage.getChildAt(i);
			for (let j = 0; j < childrenName.length; ++j) {
				if (_child.name == childrenName[j]) {
					if (lister != null && lister != undefined)
						_child.addClickListener(lister, thisObj);
				}
			}
		}
	}
	//查找舞台上的单个元件是否存在
	public static FindChildInView(stage: fairygui.GComponent, childrenName: string, lister: Function, thisObj: any) {
		for (let i = 0; i < stage.numChildren; ++i) {
			let _child: fairygui.GObject = stage.getChildAt(i);
			if (_child.name == childrenName) {
				if (lister) _child.addClickListener(lister, thisObj);
			}
		}
	}
	//查找舞台上的单个元件是否存在 并返回bool值
	public static hasChild(stage: fairygui.GComponent, childrenName: string): boolean {
		var _hasChild: boolean = false;
		for (let i = 0; i < stage.numChildren; ++i) {
			let _child: fairygui.GObject = stage.getChildAt(i);
			if (_child.name == childrenName) {
				_hasChild = true;
			}
		}
		return _hasChild;
	}
}
class ModuleWang {
	public static readonly moduName = "Wang.";
}