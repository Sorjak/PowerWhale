var World   = require("matter-js").World,
    Body    = require("matter-js").Body;

var Player  = require("./entities/player/player.js"),
    Camera  = require('./camera.js'),
    Input   = require('./input.js'),
    UI      = require('./ui.js'),
    ChunkManager    = require('./map/chunkManager.js'),
    WhaleManager    = require('./entities/whale/whaleManager.js');

function Game(renderer, world, width, height) {
    this.camera = null;

    world.bounds.min.x = -Math.Infinity;
    world.bounds.min.y = -Math.Infinity;
    world.bounds.max.x = Math.Infinity;
    world.bounds.max.y = Math.Infinity;

    this.width = width;
    this.height = height;

    this.stage = null;
    this.world = world;
    this.chunkManager = new ChunkManager(renderer, this.width, this.height);
    this.whaleManager = new WhaleManager(world);
    this.initChunks = 5;

    this.player = null;
    this.entities = [];

    this.launchLine = null;
}

Game.prototype.start = function() {
    var self = this;

    self.world.gravity.y = 0;

    var background = new PIXI.Container();
    var first_layer = new PIXI.Container();

    self.stage = new PIXI.Container();
    self.stage.addChild(background);
    self.stage.addChild(first_layer);

    self.stage.interactive = true;
    self.camera = new Camera(self);

    self.input = new Input(self);

    self.ui = new UI(self);

    return self.chunkManager.init(background, self.initChunks)
        .then(function(chunkMap) {

        self.targetPoint = new PIXI.Graphics();
        self.stage.addChild(self.targetPoint);

        var whaleProm = self.whaleManager.init(first_layer, 10);

        self.player = new Player();
        var playerProm = self.player.init(first_layer).then(function() {
            Body.translate(self.player.body, 
                {x: (self.stage.width / 2), y:(self.stage.height/2)}
            );
            World.addBody(self.world, self.player.body);
            self.camera.followEntity(self.player);
        });

        return Promise.all([whaleProm, playerProm]);
    });
};

Game.prototype.handleInput = function() {
    var moveVector = {x : 0, y : 0};
    if (this.input.anyKeysDown()) {

        if (this.input.isDown('W')) { // W
            moveVector = Vector.add(moveVector, {x: 0, y: -1});
        }
        if (this.input.isDown('A')) { // A
            moveVector = Vector.add(moveVector, {x: -1, y: 0});
        }    
        if (this.input.isDown('D')) { // D
            moveVector = Vector.add(moveVector, {x: 1, y: 0});
        }
        if (this.input.isDown('S')) { // S
            moveVector = Vector.add(moveVector, {x: 0, y: 1});
        }
    } 

    this.player.move(moveVector);
};

Game.prototype.update = function(deltaTime) {
    this.handleInput();

    this.player.update(deltaTime);

    this.chunkManager.update(deltaTime, this.player);
    this.whaleManager.update(deltaTime);

    this.camera.update(deltaTime);
    this.ui.update(deltaTime);
};

Game.prototype.handleMouse = function(event) {
    var self = this;

    // This is to check if we are clicking empty space
    if (event.data.target.parent == null) {
        var worldPoint = self.camera.screenToWorld(event.data.global);

        if (event.type == "pointerdown") {
            self.ui.toggleLaunchLine(true);
        }

        else if (event.type == "pointerup") {
            self.ui.toggleLaunchLine(false);
            self.player.launch(worldPoint);
        }
    }

};

Game.prototype.getEntitiesByTag = function(tag) {
    var output = [];
    for (var i = this.entities.length - 1; i >= 0; i--) {
        var entity = this.entities[i];

        if (entity.tags.includes(tag)) {
            output.push(entity);
        }
    }

    return output;
};

module.exports = Game;