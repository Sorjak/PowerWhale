var PIXI = require('pixi.js'),
    Matter = require("matter-js"),
    MatterAttractors = require('matter-attractors');
    

var Game = require('./game.js');

var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

var WORLD_WIDTH = 24000;
var WORLD_HEIGHT = 24000;

var rendererOptions = {
    antialiasing: true,
    transparent: false,
    resolution: window.devicePixelRatio,
    autoResize: true,
};
var RENDERER = new PIXI.autoDetectRenderer(SCREEN_WIDTH, SCREEN_HEIGHT, rendererOptions);

Matter.use(MatterAttractors);

var engine = Matter.Engine.create($("#pixi-canvas"));

$("#pixi-canvas").append(RENDERER.view);

var game = new Game(RENDERER, engine.world, SCREEN_WIDTH, SCREEN_HEIGHT, WORLD_WIDTH, WORLD_HEIGHT);
var animFrame = null;

var mainLoop = function() {
    animFrame = requestAnimationFrame(mainLoop);

    game.update(PIXI.ticker.shared.deltaTime);

    RENDERER.render(game.stage);
}

// create a new loader
const loader = new PIXI.loaders.Loader("../images/");

loader.add("astronaut", "astronaut-white.png")
      .add("whale", "whale_blue.png")
      .add("mars", "mars.png");

loader.load((loader, resources) => {

    game.start().then(function() {
        Matter.Engine.run(engine);
        mainLoop();
    });
});


