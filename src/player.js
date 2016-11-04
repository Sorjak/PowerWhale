var Entity = require("./entity.js"),
    Body   = require('matter-js').Body,
    Vector = require('matter-js').Vector;

function Player() {
    Entity.call(this);

    this.tags.push("player");
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/whale_blue.png")
    .then(function() {
        Body.translate(self.body, {x: 300, y: 400});
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;


    Entity.prototype.update.call(self, deltaTime);
};

Player.prototype.onDown = function(event) {
    var self = this;

    var rawMousePos = event.data.global;

    var localX = self.body.position.x - rawMousePos.x;
    var localY = self.body.position.y - rawMousePos.y;
    var worldMouse = { x : self.body.position.x + localX, y : self.body.position.y + localY};

    var forceMagnitude = 0.009 * self.body.mass;

    var normalForce = Vector.normalise(Vector.sub(worldMouse, self.body.position));
    var finalForce = Vector.mult(normalForce, forceMagnitude);

    Body.applyForce(self.body, worldMouse, finalForce);

    Entity.prototype.onDown.call(self, event);
};

Player.prototype.onUp = function(event) {
    var self = this;

    Entity.prototype.onUp.call(self, event);
};

Player.prototype.follow = function(target) {
    var self = this;

    var vecToTarget = Vector.normalise( Vector.sub(target, self.body.position) );
    var angleVector = Vector.normalise( {x: Math.cos(self.body.angle), y: Math.sin(self.body.angle)} );
    var headingVector = Vector.normalise(Vector.add(self.body.position, angleVector));

    // var angleDelta = headingVector vecToTarget;

    var tailVector = Vector.add( self.body.position, Vector.neg(vecToTarget) );

    // console.log( angleDelta);
    Body.applyForce(self.body, tailVector, Vector.mult(vecToTarget, self.body.mass * 0.009) )

};

module.exports = Player;