import * as PIXI from "../node_modules/pixi.js/dist/pixi.mjs";
export default class Game {

    //TODO: #1 @tarang-soni work on this game class
    constructor(app) {
        this.app = app;
        this.Init();
    }
    LoadAssets(){
        

    }
    Init() {
        this._bunny = PIXI.Sprite.from("../Assets/bunny.png");
        this._bunny.anchor.set(0.5);
        this._bunny.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
        this.app.stage.addChild(this._bunny);
        this.Start();
        this.app.ticker.add(this.Update);
    }

    Start() {

    }

    Update(dT) {

    }
}