abstract class BaseExtention {
	public constructor() {
		this.ClassExtention();
	}
	abstract ClassExtention(): void;
	protected PkgName: string;
	public get getPkgName() {
		return this.PkgName;
	};
}
