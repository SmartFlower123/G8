//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.m_rollerObj = {
            allPokerArr: ["WILD", "B", "K", "WILD", "K", "SCATTER", "K", "K", "K", "F", "K", "H", "H", "H", "H"],
            allWinPokerArr: [0, 3, 6, 4, 2, 1, 7],
            allwinNum: 4,
            linePokerArray: [{ win: 2.5, coins: 2, line: [0, 3, 6] },
                { win: 0.2, coins: 4, line: [0, 4] },
                { win: 0.1, coins: 1, line: [2, 4] },
                { win: 0.2, coins: 7, line: [1, 3, 2, 7] },
                { win: 1, coins: 3, line: [0, 3, 7] }],
            lineArray: [2, 4, 5, 6, 9],
            linewinNum: [1, 2, 3, 8, 9],
            showAlltime: 2000,
            showoneTime: 1000,
            showAllWinMoneyeTime: 1000,
            showOneWinMoneyeTime: 1500,
            haveshowOne: true,
            //新增加的数据
            allWinCoins: 40,
            toShowOne: false,
            showAllEnd: _this.showAllComplete,
            isFreeSpin: false,
            freeoneEnd: _this.showOneComplete
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 2:
                        _a.sent();
                        loadingView = new LoadingUI();
                        // const loadingView = new Wang.GameLoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadGroup("othersAssets", 1, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var _this = this;
        this.width = 750;
        this.height = 1336;
        // fairygui.UIPackage.addPackage("FGUITest");
        // this.stage.addChild(fairygui.GRoot.inst.displayObject);
        // let _main = fairygui.UIPackage.createObject("FGUITest", "Main").asCom;
        // fairygui.GRoot.inst.addChild(_main);
        //====>测试ok
        // this.m_winType = new Wang.WinTypeUI(2, [1000, 2000, 3000], 4000, 0.1, 2000, this.bigwinover, this);
        // this.addChild(this.m_winType);
        //=======================>测试中奖线
        //数据
        egret.setTimeout(function () {
            _this.m_RollerWinUI = new Wang.RollerWinUI(_this.m_rollerObj, _this);
            _this.addChild(_this.m_RollerWinUI);
        }, this, 500);
        //=====================测试WinNumUI ok
        //     this.m_winNumberUI = new Wang.WinNumUI(this);
        //     this.m_winNumberUI.setMoney(100, 1000, 2000, this.playNumOver);
        //    // this.m_winNumberUI.setX3Money(100, 1000, 2000, this.playNumOver);
        //     this.addChild(this.m_winNumberUI);
        //======================测试跑马灯 ok
        // this.m_ruleLight = new Wang.ShowRuleLightUI();
        // this.addChild(this.m_ruleLight);
        //==================计算界面测试 ok
        // egret.setTimeout(() => {
        // this.m_lastWin = new Wang.LastWinUI(500, this.lastWinPlayOver, this);
        // this.addChild(this.m_lastWin);
        // }, this, 500);
        //==================freeadd测试
        //    this.m_freeadd=new Wang.FreeAddUI();
        //    this.addChild(this.m_freeadd);
        //========================info测试
        // egret.setTimeout(() => {
        //     this.m_infor = new Wang.InfoUI();
        //     this.addChild(this.m_infor);
        // }, this, 500);
        // this.addChild(sky);
        //tips测试  ok
        // TipsByWang.showTips(this,"10000003",null,null);
    };
    Main.prototype.playNumOver = function () {
        console.log("----------数字播放完成啦----------");
        this.m_winNumberUI.destoryCom();
    };
    Main.prototype.lastWinPlayOver = function () {
        this.m_lastWin.destoryCom();
        //  this.m_lastWin.destoryCom();
    };
    Main.prototype.showAllComplete = function () {
        console.log("---------------------rollerwinUI 所有线播放完成------------------------");
        // this.m_RollerWinUI.destoryCom();
    };
    Main.prototype.showOneComplete = function () {
        console.log("---------------------rollerwinUI 这是一条无用的数据-----------------------");
    };
    Main.prototype.bigwinover = function () {
        this.m_winType.destroyCom();
        console.log("bigwin is over===========================================>");
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map