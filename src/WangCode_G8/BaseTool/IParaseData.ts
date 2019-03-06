
interface IParaseData {
	/*设置要解析的数据名字 请在调用ParaseData之前设置 */
	setParaseDataDocumentName(name: string): IParaseData;
	/**通过id获取对应id的数据*/
	getDataFromID(arg: any);
	/**解析数据 后再调用getDataFromID*/
	ParaseData();
}





























/**js数据格式 */
    //   var aa = {
    //         "BGN": { img: "BGN_symbol", sym: "лв" },
    //         "BRL": { img: "BRL_symbol", sym: "R$" },
    //         "CHF": { img: "CHF_symbol", sym: "CHF" },
    //         "ETH": { img: "ETH_symbol", sym: "ETH" },
    //         "EUR": { img: "EURO_symbol", sym: "€" },
    //         "FR": { img: "Fr_symbol", sym: "Fr" },
    //         "GBP": { img: "GBP_symbol", sym: "£" },
    //         "INR": { img: "INR_symbol", sym: "₹" },
    //         "CNY": { img: "RMB_symbol", sym: "元" },
    //         "SEK": { img: "SEK_symbol", sym: "kr" },
    //         "TRY": { img: "TRY_symbol", sym: "TRY" },
    //         "USD": { img: "USD_symbol", sym: "$" },
    //         "VND": { img: "VNC_symbol", sym: "₫" },
    //         "mBTC": { img: "mBTC_symbol", sym: "mBTC" },
    //         "uBTC": { img: "uBTC_symbol", sym: "uBTC" }
    //     }
	/**把js数据转化为json字符串 */
    //     let _b = JSON.stringify(aa, null, 4);
	/**把js字符串转换为json对象 */
    //     var obj = eval('(' + _b + ')');
    //     console.log(typeof obj);
    //     console.log("bng"+obj["BRL"]["img"]);结果BRL_symbol；