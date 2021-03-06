var World   = require("matter-js").World,
    Bounds  = require("matter-js").Bounds,
    Bodies  = require("matter-js").Bodies,
    Body    = require("matter-js").Body;

var Player  = require("./entities/player/player.js"),
    Camera  = require('./camera.js'),
    Input   = require('./input.js'),
    UI      = require('./ui.js'),
    ChunkManager    = require('./map/chunkManager.js'),
    WhaleManager    = require('./entities/whale/whaleManager.js'),
    PlanetManager   = require("./entities/planet/planetManager.js");

function Game(renderer, world, screen_width, screen_height, world_width, world_height) {
    
    this.world = world;

    this.screen_width = screen_width;
    this.screen_height = screen_height;

    this.world_width = world_width;
    this.world_height = world_height;

    this.setWorldOptions();

    this.camera = null;
    this.stage = null;
    this.ui_container = null;

    this.chunkManager = new ChunkManager(renderer, 
        {x: this.world_width, y: this.world_height},
        {x: this.screen_width, y: this.screen_height}
    );
    this.whaleManager = new WhaleManager(this);
    this.planetManager = new PlanetManager(this);
    this.initChunks = 5;

    this.player = null;
    this.entities = [];

    this.debug = false;

}

Game.prototype.start = function() {
    var self = this;

    self.stage = new PIXI.Container();
    self.stage.interactive = true;

    var background = new PIXI.Container();
    var first_layer = new PIXI.Container();

    self.stage.addChild(background);
    self.stage.addChild(first_layer);

    self.ui_container = new PIXI.Container();
    self.stage.addChild(self.ui_container);

    self.camera = new Camera(self);
    self.input = new Input(self);
    self.ui = new UI(self);

    // Create world and spawn entities

    return self.chunkManager.init(background, self.initChunks)
        .then(function(chunkMap) {

        self.targetPoint = new PIXI.Graphics();
        self.stage.addChild(self.targetPoint);

        var planetProm = self.planetManager.init(first_layer, 3);

        // var whaleProm = self.whaleManager.init(first_layer, 10);

        self.player = new Player();
        var playerProm = self.player.init(first_layer).then(function() {
            Body.translate(self.player.body, 
                {x: (self.stage.width / 2) , y:(self.stage.height / 2)}
            );
            World.addBody(self.world, self.player.body);
            self.camera.followEntity(self.player);
        });

        // return Promise.all([whaleProm, playerProm, planetProm]);
        return Promise.all([playerProm, planetProm]);
    });
};

Game.prototype.setWorldOptions = function() {
    this.world.bounds.min.x = -Math.Infinity;
    this.world.bounds.min.y = -Math.Infinity;
    this.world.bounds.max.x = Math.Infinity;
    this.world.bounds.max.y = Math.Infinity;

    World.add(this.world, [
        // walls
        Bodies.rectangle(0, -(this.world_height / 2), this.world_width, 10, { isStatic: true }),
        Bodies.rectangle(-(this.world_width / 2), 0, 10, this.world_height - 20, { isStatic: true }),
        Bodies.rectangle(0, this.world_height / 2, this.world_width, 10, { isStatic: true }),
        Bodies.rectangle(this.world_width / 2, 0, 10, this.world_height - 20, { isStatic: true }),
    ]);

    this.world.gravity.y = 0;

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
    this.planetManager.update(deltaTime);
    // this.whaleManager.update(deltaTime);

    this.camera.update(deltaTime);
    this.ui.update(deltaTime);

    if (this.debug) {
        this.player.debug();
        this.planetManager.debug();
        // this.whaleManager.debug();
    }

};

Game.prototype.handleMouse = function(event) {
    var self = this;

    var clickPoint = event.data.global;
    
    // Check if we are in game window
    if ((clickPoint.x > 0 && clickPoint.y > 0) &&
        (clickPoint.x <= self.screen_width && clickPoint.y <= self.screen_height)) {

            var worldPoint = self.camera.screenToWorld(clickPoint);

            if (event.type == "pointerdown") {
                self.ui.toggleLaunchLine(true);
            }

            else if (event.type == "pointerup") {
                self.ui.toggleLaunchLine(false);
                self.player.launch(worldPoint);
            }
    } else {
        if (event.type == "pointerup") {
            self.ui.toggleLaunchLine(false);
            self.player.launch(self.player.getPosition());
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