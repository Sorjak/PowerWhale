var World   = require("matter-js").World;

var Player  = require("./player.js"),
    Whale   = require("./whale.js"),
    Camera  = require('./camera.js'),
    Chunk   = require('./chunk.js');

function Game(renderer, world, width, height) {
    this.camera = null;
    this.renderer = renderer;

    world.bounds.min.x = -Math.Infinity;
    world.bounds.min.y = -Math.Infinity;
    world.bounds.max.x = Math.Infinity;
    world.bounds.max.y = Math.Infinity;

    this.width = width;
    this.height = height;

    this.stage = null;
    this.world = world;

    this.entities = [];
}

Game.prototype.start = function() {
    var self = this;

    self.world.gravity.y = 0;

    self.stage = new PIXI.Container();
    self.stage.interactive = true;
    self.camera = new Camera(self);

    self._bindListeners();
    var chunkPromises = [];
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            var chunk = new Chunk(
                {x: i, y: j},
                {x : self.width, y: self.height}
            );
            var prom = chunk.generate(self.renderer);
            chunkPromises.push(prom);
        }
    }

    return Promise.all(chunkPromises).then(function(chunks) {
        for (var i = chunks.length - 1; i >= 0; i--) {
            console.log(chunks[i].position);
            self.stage.addChild(chunks[i]);
        }

        self.targetPoint = new PIXI.Graphics();
        self.stage.addChild(self.targetPoint);

        var whale = new Whale({x: 200, y: 300});
        whale.init(self.stage).then(function() {
            self.entities.push(whale);
            World.addBody(self.world, whale.body);
        });

        var player = new Player();
        player.init(self.stage).then(function() {
            self.entities.push(player);
            World.addBody(self.world, player.body);
            self.camera.followEntity(player);
        });

        console.log(self.stage.width);
        return true;
    });
};

Game.prototype.update = function(deltaTime) {
    for (var i = this.entities.length - 1; i >= 0; i--) {
        var e = this.entities[i];
        e.update(deltaTime);
    };

    this.camera.update(deltaTime);
};

Game.prototype.onDown = function(event) {
    var self = this;
    // Check if we are the target of the click.
    if (event.data.target.parent == null) {
        var drawPoint = self.camera.screenToWorld(event.data.global);
        var whale = self.getEntitiesByTag("whale")[0];

        whale.follow(drawPoint);

        self.targetPoint.clear();
        self.targetPoint.beginFill(0xFF0000, 1);
        self.targetPoint.drawCircle(drawPoint.x, drawPoint.y, 5);
        self.targetPoint.endFill();
    }
};

Game.prototype.onUp = function(event) {

};

Game.prototype.onKeyDown = function(event) {
    var player = this.getEntitiesByTag("player")[0];
    if (event.keyCode == 87) { // W
        player.move({x: 0, y: -1});
    }
    else if (event.keyCode == 65) { // A
        player.move({x: -1, y: 0});
    }    
    else if (event.keyCode == 68) { // D
        player.move({x: 1, y: 0});
    }
    else if (event.keyCode == 83) { // S
        player.move({x: 0, y: 1});
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

Game.prototype._createStars = function(num_stars) {
    var self = this;

    var star_container = new PIXI.Graphics();
    star_container.clear();
    star_container.beginFill(0xFFFFFF, 1);
    for (var i = 0; i < num_stars; i++) {
        var x = Math.floor(Math.random() * self.width);
        var y = Math.floor(Math.random() * self.height);
        star_container.drawCircle(x, y, Math.random() * 4);
    };
    star_container.endFill();
    return star_container;
}

module.exports = Game;