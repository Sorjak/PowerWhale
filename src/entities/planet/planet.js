var Entity  = require("../entity.js"),
    PIXI    = require('pixi.js'),
    machina = require('machina');

var Bodies  = require('matter-js').Bodies,
    Body    = require('matter-js').Body
    Vector  = require('matter-js').Vector;


function Planet(position) {
    Entity.call(this);

    this.startPos = position;
    this.body = null;

    this.tags.push("planet");
}

Planet.prototype = Object.create(Entity.prototype);
Planet.prototype.constructor = Planet;

// PUBLIC METHODS

Planet.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/mars.png")
    .then(function() {
        self.body = Bodies.circle(
            self.startPos.x, self.startPos.y, 128
        );

        Body.setStatic(self.body, true);

        return self;

    });
};

Planet.prototype.update = function(deltaTime) {
    var self = this;

    Entity.prototype.update.call(self, deltaTime);
};

Planet.prototype.debug = function() {
    var self = this;
    Entity.prototype.debug.call(self);

    self.info.lineStyle(1, 0xff0000);
    self.info.drawCircle(self.getPosition().x, self.getPosition().y, self.getBody().circleRadius);
};


module.exports = Planet;