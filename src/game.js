var Player  = require("./player.js");
var World   = require("matter-js").World;

function Game(world) {
    console.log(world);
    this.width = world.bounds.max.x - world.bounds.min.x;
    this.height = world.bounds.max.y - world.bounds.min.y;

    world.bounds.min.x = -300;
    world.bounds.min.y = -300;
    world.bounds.max.x = 1100;
    world.bounds.max.y = 900;

    this.stage = null;
    this.world = world;

    this.entities = [];

}

Game.prototype.start = function() {
    var self = this;

    return new Promise(function(resolve, reject) {
        self.world.gravity.y = 0;

        self.stage = new PIXI.Container();
        self.stage.interactive = true;

        self._bindListeners();

        var background = new PIXI.Graphics();
        background.beginFill(0x111111);
        background.drawRect(0, 0, self.width, self.height);
        self.stage.addChild(background);

        var player = new Player();
        player.init(self.stage).then(function() {
            self.entities.push(player);
            World.addBody(self.world, player.body);
        });

        resolve(true);

    });
};

Game.prototype.update = function(deltaTime) {
    for (var i = this.entities.length - 1; i >= 0; i--) {
        var e = this.entities[i];
        e.update(deltaTime);
    };
};

Game.prototype.onDown = function(event) {
    var self = this;
    // Check if we are the target of the click.
    if (event.data.target.parent == null) {
        var player = self.getEntitiesByTag("player")[0];
        player.follow(event.data.global);
    }
};

Game.prototype.onUp = function(event) {

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
}




module.exports = Game;