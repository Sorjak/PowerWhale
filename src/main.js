var PIXI = require('pixi.js');
var Game = require('./game.js');

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;

var rendererOptions = {
    antialiasing: true,
    transparent: false,
    resolution: window.devicePixelRatio,
    autoResize: true,
};
var RENDERER = new PIXI.autoDetectRenderer(GAME_WIDTH, GAME_HEIGHT, rendererOptions);

$("#pixi-canvas").append(RENDERER.view);

var game = new Game(GAME_WIDTH, GAME_HEIGHT);

var animFrame = null;

var mainLoop = function() {
    animFrame = requestAnimationFrame(mainLoop);

    game.update(PIXI.ticker.shared.deltaTime);

    RENDERER.render(game.stage);
}


game.start().then(function() {
    mainLoop();
});
