class DragonBonesElement extends egret.HashObject {

	protected m_graph: fairygui.GGraph;
	protected m_armatureDisplay: dragonBones.EgretArmatureDisplay
	protected m_id: string;
	protected m_isDispose: boolean = false;
	public constructor(_graph: fairygui.GGraph) {
		super();
		this.m_graph = _graph;
		this.m_graph.visible = false;
	}

	public create(_id: string): this {
		if (this.m_isDispose == true || this.m_id == _id) return this;
		this.m_id = _id;
		let dragonbonesData = RES.getRes(this.m_id + "_ske_json");
		let textureData = RES.getRes(this.m_id + "_tex_json");
		let texture = RES.getRes(this.m_id + "_tex_png");
		let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		egretFactory.parseDragonBonesData(dragonbonesData);
		egretFactory.parseTextureAtlasData(textureData, texture);
		if (typeof (this.m_armatureDisplay) != "undefined")
			this.m_armatureDisplay.dispose();
		this.m_armatureDisplay = egretFactory.buildArmatureDisplay(this.m_id);

		let _x = this.m_graph.width * this.m_graph.pivotX;
		let _y = this.m_graph.height * this.m_graph.pivotY;
		this.m_armatureDisplay.x += _x;
		this.m_armatureDisplay.y += _y;
		this.m_graph.setNativeObject(this.m_armatureDisplay);
		return this;

	}

	/**dragonBones.EventObject */
	public addDBEventListener(_eventType: string, _listener: (event: dragonBones.EgretEvent) => void, _eventThis: any) {
		this.m_armatureDisplay.addDBEventListener(_eventType, _listener, _eventThis);
	}

	/**dragonBones.EventObject */
	public removeDBEventListener(_eventType: string, _listener: (event: dragonBones.EgretEvent) => void, _eventThis: any) {
		this.m_armatureDisplay.removeDBEventListener(_eventType, _listener, _eventThis);
	}

	public play(_name: string = "newAnimation", _number: number = 0) {
		if (this.m_isDispose == true) return this;
		this.m_armatureDisplay.animation.play(_name, _number);
		return this;
	}

	public show(): this {
		if (this.m_isDispose == true) return this;
		this.m_graph.visible = true;
		return this;
	}

	public hide() {
		if (this.m_isDispose == true) return;
		this.m_graph.visible = false;
	}

	public dispose() {
		if (this.m_isDispose == true) return;
		this.m_isDispose = true;
		if (typeof (this.m_armatureDisplay) != "undefined") {
			this.m_armatureDisplay.dispose();
			if (this.m_armatureDisplay.parent) this.m_armatureDisplay.parent.removeChild(this.m_armatureDisplay);
		}
		this.m_graph = null;
		this.m_armatureDisplay = null;
		this.m_id = null;
	}
}