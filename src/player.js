var Entity = require("./entity.js"),
    Body   = require('matter-js').Body,
    Vector = require('matter-js').Vector
    PIXI   = require('pixi.js');

function Player() {
    Entity.call(this);

    this.tags.push("player");
    this.target = null;
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/whale_blue.png")
    .then(function() {
        Body.translate(self.body, {x: 300, y: 400});

        self.info = new PIXI.Graphics();
        stage.addChild(self.info);
        
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;

    if (self.target != null) {
        var vecToTarget = Vector.sub(self.target, self.body.position);
        var targetDir = Vector.normalise(vecToTarget);
        var facingVector = self.getFacingVector();

        var currentAngle = Math.atan2(facingVector.y, facingVector.x);
        var targetAngle = Math.atan2(targetDir.y, targetDir.x);

        var angleDelta = targetAngle - currentAngle;

        // TODO: ADD LERP

        Body.rotate(self.body, angleDelta);
    }

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

    self.target = Vector.clone(target);
    var targetDir = Vector.normalise( Vector.sub(target, self.body.position) );

    var tailPoint = Vector.add( self.body.position, Vector.mult(Vector.neg(targetDir), 10) );
    Body.applyForce(self.body, tailPoint, Vector.mult(targetDir, self.body.mass * 0.009) );

};

module.exports = Player;