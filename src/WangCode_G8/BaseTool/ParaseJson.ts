
class ParaseJson implements IParaseData {

	private ParaseDataDocumentName: string;
	protected data: any;
	protected m_JsonDocumentName: string;
	private static instance: ParaseJson;
	protected m_id: string;
	public static get Instance() {
		if (ParaseJson.instance == null) {
			ParaseJson.instance = new ParaseJson();
		}
		return ParaseJson.instance;
	}
	public constructor() {

	}
	/**通过id获取对应id的数据*/
	public getDataFromID(id: string): any {
		this.m_id = id;
		console.log("SetID=======>" + this.data);
		let _one = this.data[this.m_id];
		for (var key in _one) {
			console.log(key);
		}
		return _one;
	}
	/**解析Json数据 */
	public ParaseData(): any {
		if (this.data != null) return;
		let _documentNameLengh = this.ParaseDataDocumentName.length;
		let _ParaseDataType = this.ParaseDataDocumentName.substring(_documentNameLengh - 4, _documentNameLengh);
		if (_ParaseDataType == "json") {
			this.data = RES.getRes(this.ParaseDataDocumentName);
		}
		else {
			egret.warn("You ParaseDocument is not typeof XML");
		}
		return this.data;
	}
	/**设置解析文档的名字*/
	public setParaseDataDocumentName(name: string): IParaseData {
		this.ParaseDataDocumentName = name;
		return this;
	}
}
