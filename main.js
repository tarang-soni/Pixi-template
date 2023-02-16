import * as PIXI from "./node_modules/pixi.js/dist/pixi.mjs";

var app = new PIXI.Application                                                          //Create our application instance
({
    width: 512, //width: window.innerWidth - 20,
    height: 512, //height: window.innerHeight - 20,
    backgroundColor: 0x2c3e50
});
document.body.appendChild(app.view);