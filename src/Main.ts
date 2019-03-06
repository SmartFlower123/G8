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

class Main extends egret.DisplayObjectContainer {
    private m_RollerWinUI: Wang.RollerWinUI;
    private m_winType: Wang.WinTypeUI;
    private m_winNumberUI: Wang.WinNumUI;
    private m_ruleLight: Wang.ShowRuleLightUI;
    private m_lastWin: Wang.LastWinUI;
    private m_freeadd: Wang.FreeAddUI;
    private m_infor: Wang.InfoUI;
    private m_rollerObj = {
        allPokerArr: ["WILD", "B", "K", "WILD", "K", "SCATTER", "K", "K", "K", "F", "K", "H", "H", "H", "H"],//棋盘上所有牌
        allWinPokerArr: [0, 3, 6, 4, 2, 1, 7],//棋盘上所有中奖的牌
        allwinNum: 4,//一共赢的钱
        linePokerArray: [{ win: 2.5, coins: 2, line: [0, 3, 6] },//每条中奖线赢得钱和牌   win 单线的钱  line 单线中奖的牌
        { win: 0.2, coins: 4, line: [0, 4] },
        { win: 0.1, coins: 1, line: [2, 4] },
        { win: 0.2, coins: 7, line: [1, 3, 2, 7] },
        { win: 1, coins: 3, line: [0, 3, 7] }],
        lineArray: [2, 4, 5, 6, 9],//所有中奖线
        linewinNum: [1, 2, 3, 8, 9],//所有中奖线对应的钱
        showAlltime: 2000,//所有中奖线的显示时间
        showoneTime: 1000,//单独中奖线的显示时间
        showAllWinMoneyeTime: 1000,//所有中奖的跳钱时间
        showOneWinMoneyeTime: 1500,//单线中奖的跳钱时间
        haveshowOne: true,//
        //新增加的数据
        allWinCoins: 40,
        toShowOne: false,//这个是做什么的？不用跳总线直接单线
        showAllEnd: this.showAllComplete,
        isFreeSpin: false,
        freeoneEnd: this.showOneComplete
    }


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json");
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {

            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0);
            const loadingView = new LoadingUI();
            // const loadingView = new Wang.GameLoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadGroup("othersAssets", 1, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
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
        egret.setTimeout(() => {
        this.m_RollerWinUI = new Wang.RollerWinUI(this.m_rollerObj, this);
        this.addChild(this.m_RollerWinUI);
        }, this, 500)
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


    }
    private playNumOver() {
        console.log("----------数字播放完成啦----------");
        this.m_winNumberUI.destoryCom();
    }
    private lastWinPlayOver() {
        this.m_lastWin.destoryCom();
        //  this.m_lastWin.destoryCom();
    }
    private showAllComplete() {
        console.log("---------------------rollerwinUI 所有线播放完成------------------------");
        // this.m_RollerWinUI.destoryCom();
    }
    private showOneComplete() {
        console.log("---------------------rollerwinUI 这是一条无用的数据-----------------------");
    }
    private bigwinover() {
        this.m_winType.destroyCom();
        console.log("bigwin is over===========================================>");
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */


    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */

}