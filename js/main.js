import * as PIXI from "../node_modules/pixi.js/dist/pixi.mjs";
import Game from "./Game.js";
var app = new PIXI.Application                                                          //Create our application instance
({
    width: 512, //width: window.innerWidth - 20,
    height: 512, //height: window.innerHeight - 20,
    backgroundColor: 0x22330f   
});
document.body.appendChild(app.view);

var game = new Game(app);