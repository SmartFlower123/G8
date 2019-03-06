

class TipsByWang {
	public static dictionaryTips: Object;
	public static BtnActionDictionary: Object;

	public constructor() {

	}
	public static getConfigTips(): void {
		TipsByWang.initTipsData();
		TipsByWang.initButonActionData();
	}
	public static initTipsData() {
		console.log("initTipsData--------------TipsByWang");
		if (TipsByWang.dictionaryTips != null)
			return;
		TipsByWang.dictionaryTips = {};
		let tex: any = RES.getRes("SmartTipsConfig_xml");
		let datas = egret.XML.parse(tex);
		console.log(datas.children.length);
		for (let i = 0; i < datas.children.length; i++) {
			var tip: egret.XML = <egret.XML><any>datas.children[i];
			TipsByWang.dictionaryTips[tip["$id"]] = tip;
		}
	}
	public static initButonActionData() {
		if (TipsByWang.BtnActionDictionary != null) return;
		TipsByWang.BtnActionDictionary = {};
		let tex: any = RES.getRes("SmarttipsBtnActionConfig_xml");
		let datas = egret.XML.parse(tex);
		console.log(datas.children.length);
		for (let i = 0; i < datas.children.length; i++) {
			var tip: egret.XML = <egret.XML><any>datas.children[i];
			TipsByWang.BtnActionDictionary[tip["$id"]] = tip;
			console.log(tip);
		}
	}
	/**
	 * 系统错误弹窗提示
	 * @param tipsParent  : tips pareent  承载TIPS的容器
	 * @param errorId     : error id      错误码来自于错误配置
	 * @param callBack	  : on complete function 结束后的回调
	*/
	public static showTips(tipsParent: any, errorId: string, callBack: Function, thisObj: any) {
		//new Smart.LoadSource(tipsParent,errorId,callBack,thisObj);
		TipsByWang.getConfigTips();
		let _tips = new Wang.TipsCom(errorId, tipsParent, callBack, thisObj);
		tipsParent.addChild(_tips);
	}
}