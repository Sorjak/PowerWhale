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
        var background = new PIXI.Graphics();
        background.beginFill(0x111111);
        background.drawRect(0, 0, self.width, self.height);
        self.stage.addChild(background);



        var player = new Player(20, 20, "Jimmy");
        player.init(self.stage).then(function() {
            self.entities.push(player);
            World.addBody(self.world, player.body);
            console.log(player);
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



module.exports = Game;