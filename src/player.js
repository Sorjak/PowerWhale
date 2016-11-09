var Entity  = require("./entity.js"),
    Util    = require("./util.js"),
    PIXI    = require('pixi.js');

var Body    = require('matter-js').Body,
    Bodies  = require('matter-js').Bodies,
    Vector  = require('matter-js').Vector,
    Common  = require('matter-js').Common;

function Player() {
    Entity.call(this);

    this.tags.push("player");
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

// OVERRIDES

Player.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/astronaut-white.png")
    .then(function() {
        // Body.translate(self.body, {x: stage.width / 2, y: stage.height / 2});

        self.body = Bodies.circle(
            800, 600, 32
        );

        self.info = new PIXI.Graphics();
        stage.addChild(self.info);
        
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;

    Entity.prototype.update.call(self, deltaTime);
};

Player.prototype.onDown = function(event) {
    var self = this;

    Entity.prototype.onDown.call(self, event);
};

Player.prototype.onUp = function(event) {
    var self = this;

    Entity.prototype.onUp.call(self, event);
};

// LOCAL

Player.prototype.move = function(vector) {
    var self = this;
    var thrustPoint = Vector.add(self.body.position, Vector.neg(vector));

    Body.applyForce(self.body, thrustPoint, Vector.mult(vector, self.body.mass * .001));
};

module.exports = Player;