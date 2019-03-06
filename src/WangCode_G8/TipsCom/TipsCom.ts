module Wang {
	export class TipsCom extends FguiContainer {
		private m_id: string;
		private m_callBack: Function;
		private m_thisObj: any;
		private m_tipsParent: any;
		private m_shapMask: egret.Shape;
		private m_tipsData: tipsData;
		private m_nodeTips: egret.XML;
		//private contentPane: fairygui.GComponent;
		private m_ContentPanePkgName: string;
		private m_errorResName: string = "error";
		private m_okBt: TipsButton;
		private m_cancelBt: TipsButton;
		private m_okBtnName = "okBtn";
		private m_cancleBtnName = "cancleBtn";
		private m_language: string;
		private m_moduName = "Wang.";
		private m_underline = "_";



		public constructor(id: string, tipsParent: any, callBack: Function, thisObj: any) {
			super();
			this.m_language = PlayerInfo.language;
			this.getPkgName();
			fairygui.UIPackage.addPackage(this.m_ContentPanePkgName);
			this.m_id = id;
			this.m_tipsParent = tipsParent;
			this.m_thisObj = thisObj;
			this.m_callBack = callBack;
			this.init();
		}
		private init(): void {
			this.initData();
			this.initFGUI();
			this.setShap();
			this.setThisWidthAndHeight();
			this.setThisPoint();
		}
		/**获取到b包的名字 */
		private getPkgName() {
			let _className: string = this["__proto__"]["__class__"];
			let _pkgName = _className.replace(this.m_moduName, "");
			this.m_ContentPanePkgName = _pkgName + this.m_underline + this.m_language;
		}
		/**初始化FGUI */
		private initFGUI(): void {
			if (this.m_nodeTips) {
				let _id = this.m_tipsData.value;
				let _resName = _id + this.m_underline + this.m_language;
				this.contentPane = fairygui.UIPackage.createObject(this.m_ContentPanePkgName, _resName).asCom;
				this.initButton();
			}
		}

		private setThisWidthAndHeight() {
			this.width = this.contentPane.width;
			this.height = this.contentPane.height;
		}
		/**初始化button*/
		private initButton() {
			this.getBtnAction(this.m_okBtnName, this.m_tipsData.btnOK, this.addcallbackAndDestroy, this);
			this.getBtnAction(this.m_cancleBtnName, this.m_tipsData.btnCancel, this.addcallbackAndDestroy, this);
		}

		private setShap() {
			//绘制一个矩形遮罩
			this.m_shapMask = new egret.Shape();
			this.m_shapMask.graphics.beginFill(0x000000);
			this.m_shapMask.graphics.drawRect(0, 0, this.m_tipsParent.width, this.m_tipsParent.height);
			this.m_shapMask.graphics.endFill();
			this.m_shapMask.alpha = 0.5;
			this.m_shapMask.touchEnabled = true;
			this.m_tipsParent.addChild(this.m_shapMask);
		}
		/**
       * 设置tips居中 (在addchild之后)
         */
		private setThisPoint() {
			console.log("tipscom setthisPoint+parent:" + this.m_tipsParent.width);
			console.log("tipscom setthisPoint+thiswidth:" + this.width);
			console.log("tipscom setthisPoint+thiswidth:" + this.height);
			this.x = (this.m_tipsParent.width - this.width) / 2;
			this.y = (this.m_tipsParent.height - this.height) / 2;
		}
		/**初始化数据 */
		private initData(): void {
			this.initTipsData();
		}
		/**回调+销毁*/
		private addcallbackAndDestroy() {
			if (this.m_callBack) this.m_callBack.call(this.m_thisObj);
			this.DistoryTips();
		}
		private initTipsData() {
			this.m_nodeTips = TipsByWang.dictionaryTips[this.m_id];
			if (this.m_nodeTips != null) {
				this.m_tipsData = new tipsData(this.m_nodeTips["$value"], Number(this.m_nodeTips["$btnNum"]), this.m_nodeTips["$btnOK"], this.m_nodeTips["$btnCancel"]);// TipsConfig.tipsConfig[this.id];
			}
			else {
				this.contentPane = fairygui.UIPackage.createObject(this.m_ContentPanePkgName, this.m_errorResName + this.m_underline + this.m_language).asCom;
				this.initSingleButton(this.m_okBtnName, null, this.addcallbackAndDestroy, this);
				console.log("new tips======================================================================================>tipsCom");
			}
		}
		private initSingleButton(btName: string, btnAction: string, callBack: Function, thisObj: any) {
			let _haBt = MathUtils.hasChild(this.contentPane, btName);
			if (_haBt) {
				let _Bt = this.contentPane.getChild(btName).asButton;
				this.m_okBt = new TipsButton(_Bt);
				this.m_okBt.setActionName(btnAction);
				this.m_okBt.addonClickBtCallBack(callBack, thisObj);
				this.m_okBt.addEvent();
			}
		}
		/**返回点击按钮要执行的动作*/
		private getBtnAction(btnName: string, data: string, onclickBt: Function, thisobj: any): string {
			if (this.m_nodeTips == null) return;
			let _btnID = data;
			if (_btnID != "") {
				let _node = TipsByWang.BtnActionDictionary[_btnID];
				let _data = new BtnActionData(_node["$action"]);
				let _action = _data.action;
				this.initSingleButton(btnName, _action, onclickBt, thisobj);
				return _action;
			}
		}
		private DistoryTips(): void {
			super.DistoryCom();
			if (this.m_shapMask.parent) {
				this.m_shapMask.parent.removeChild(this.m_shapMask);
			}
			if (this.parent) {
				this.parent.removeChild(this);
			}
			if (this.contentPane) this.contentPane.dispose();
			this.m_id = null;
			this.m_tipsData = null;
			this.m_shapMask = null;
			this.m_nodeTips = null;
			this.m_ContentPanePkgName = null;
			this.m_errorResName = null;
			this.m_okBtnName = null;
			this.m_cancleBtnName = null;
			this.m_language = null;
			this.m_moduName = null;
			this.m_underline = null;
		}
	}
}




















class tipsData {
	/**tips value*/
	public readonly value: string;
	/**tips button num*/
	public readonly btnNum: number;
	/**tips leftbutton action*/
	public readonly btnOK: string;
	/**tips rightbutton action*/
	public readonly btnCancel: string;
	public constructor(vl: string, num: number, ok: string, cancle: string) {
		this.value = vl;
		this.btnNum = num;
		this.btnOK = ok;
		this.btnCancel = cancle;
	}
}
class BtnActionData {
	/**click button action*/
	public readonly action: string;
	public constructor(action: string) {
		this.action = action;
	}
}
