var PIXI = require('pixi.js');
var Game = require('./game.js');

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;

var game = new Game(GAME_WIDTH, GAME_HEIGHT);

var rendererOptions = {
    antialiasing: true,
    transparent: false,
    resolution: window.devicePixelRatio,
    autoResize: true,
};
var RENDERER = new PIXI.autoDetectRenderer(GAME_WIDTH, GAME_HEIGHT, rendererOptions);

$("#pixi-canvas").append(RENDERER.view);

var STAGE = new PIXI.Container();
var background = new PIXI.Graphics();
background.beginFill(0x111111);
background.drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
STAGE.addChild(background);

var animFrame = null;

var mainLoop = function() {
    animFrame = requestAnimationFrame(mainLoop);

    game.update(PIXI.ticker.shared.deltaTime);


    RENDERER.render(STAGE);
}


game.start().then(function() {
    mainLoop();
});
