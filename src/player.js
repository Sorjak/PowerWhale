var Entity = require("./entity.js");
var Vector2 = require("./vector2.js");

function Player(width, height, name) {
    Entity.call(this, width, height);
    
    this.position = new Vector2(0, 0);
    this.velocity = new Vector2(.2, .2);
    this.name = name;
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/whale_blue.png")
    .then(function() {
        self.sprite.position = new PIXI.Point(400, 300);
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;

    if (self.rotating) {
        self.sprite.rotation += deltaTime * .05;
    }

    // self.sprite.position = new PIXI.Point(self.position.x, self.position.y);
    Entity.prototype.update.call(self, deltaTime);
};

Player.prototype.onDown = function(event) {

    this.rotating = true;

    // self.sprite.position = new PIXI.Point(self.position.x, self.position.y);
    Entity.prototype.onDown.call(self, event);
};

Player.prototype.onUp = function(event) {


    this.rotating = false;
    // self.sprite.position = new PIXI.Point(self.position.x, self.position.y);
    Entity.prototype.onUp.call(self, event);
};

module.exports = Player;