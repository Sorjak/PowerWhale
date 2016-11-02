var Player = require("./player.js");


function Game(width, height) {
    this.width = width;
    this.height = height;

    this.stage = null;

    this.entities = [];
}

Game.prototype.start = function() {
    var self = this;

    return new Promise(function(resolve, reject) {
        self.stage = new PIXI.Container();
        var background = new PIXI.Graphics();
        background.beginFill(0x111111);
        background.drawRect(0, 0, self.width, self.height);
        self.stage.addChild(background);

        var player = new Player(20, 20, "Jimmy");
        player.init(self.stage).then(function() {
            self.entities.push(player);
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