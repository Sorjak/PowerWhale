var World   = require("matter-js").World,
    Body    = require("matter-js").Body;

var Player  = require("./player.js"),
    Whale   = require("./whale.js"),
    Camera  = require('./camera.js'),
    ChunkManager    = require('./chunkManager.js'),
    WhaleManager    = require('./whaleManager.js');

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

    self._bindListeners();

    return self.chunkManager.init(background, self.initChunks)
        .then(function(chunkMap) {

        self.targetPoint = new PIXI.Graphics();
        self.stage.addChild(self.targetPoint);

        // var whale = new Whale({x: 200, y: 300});
        // var whaleProm = whale.init(first_layer).then(function() {
        //     self.entities.push(whale);
        //     World.addBody(self.world, whale.body);
        // });

        var whaleProm = self.whaleManager.init(first_layer, 5);

        self.player = new Player();
        var pProm = self.player.init(first_layer).then(function() {
            Body.translate(self.player.body, 
                {x: (self.stage.width / 2), y:(self.stage.height/2)}
            );
            World.addBody(self.world, self.player.body);
            self.camera.followEntity(self.player);
        });

        return Promise.all([whaleProm, pProm]);
    });
};

Game.prototype.update = function(deltaTime) {
    this.player.update(deltaTime);
    // for (var i = this.entities.length - 1; i >= 0; i--) {
    //     var e = this.entities[i];
    //     e.update(deltaTime);
    // };

    this.chunkManager.update(deltaTime, this.player);
    this.whaleManager.update(deltaTime);
    this.camera.update(deltaTime);
};

Game.prototype.onDown = function(event) {
    var self = this;
    // Check if we are the target of the click.
    if (event.data.target.parent == null) {
        var drawPoint = self.camera.screenToWorld(event.data.global);
        // var whale = self.getEntitiesByTag("whale")[0];

        // whale.follow(drawPoint);

        self.targetPoint.clear();
        self.targetPoint.beginFill(0xFF0000, 1);
        self.targetPoint.drawCircle(drawPoint.x, drawPoint.y, 5);
        self.targetPoint.endFill();
    }
};

Game.prototype.onUp = function(event) {

};

Game.prototype.onKeyDown = function(event) {
    if (event.keyCode == 87) { // W
        this.player.move({x: 0, y: -1});
    }
    else if (event.keyCode == 65) { // A
        this.player.move({x: -1, y: 0});
    }    
    else if (event.keyCode == 68) { // D
        this.player.move({x: 1, y: 0});
    }
    else if (event.keyCode == 83) { // S
        this.player.move({x: 0, y: 1});
    }    
};

Game.prototype.onKeyUp = function(event) {
    // body...
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

Game.prototype._bindListeners = function() {
    var self = this;

    this.stage.on('mousedown', function(e) {
        self.onDown(e);
    });
    this.stage.on('touchstart', function(e) {
        self.onDown(e);
    });

    this.stage.on('mouseup', function(e) {
        self.onUp(e);
    });

    window.addEventListener(
        "keydown", self.onKeyDown.bind(this), false
    );
    window.addEventListener(
        "keyup", self.onKeyUp.bind(this), false
    );
}


module.exports = Game;