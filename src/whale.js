var Entity  = require("./entity.js"),
    Util    = require("./util.js"),
    PIXI    = require('pixi.js');

var Body    = require('matter-js').Body,
    Bodies  = require('matter-js').Bodies,
    Vector  = require('matter-js').Vector,
    Common  = require('matter-js').Common;

function Whale(pos) {
    Entity.call(this);

    this.tags.push("rideable");
    this.tags.push("whale");

    this.startPos = pos;

    this.target = null;
    this.startDistance = 0;
}

Whale.prototype = Object.create(Entity.prototype);
Whale.prototype.constructor = Whale;

// OVERRIDES

Whale.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/whale_blue.png")
    .then(function() {
        self.body = Bodies.rectangle(
            self.startPos.x, self.startPos.y, 32, 134
        );

        self.info = new PIXI.Graphics();
        stage.addChild(self.info);
    });
};

Whale.prototype.update = function(deltaTime) {
    var self = this;

    if (self.target != null) {
        var vecToTarget = Vector.sub(self.target, self.body.position);
        var targetDir = Vector.normalise(vecToTarget);
        var facingVector = self.getFacingVector();

        var currentAngle = Math.atan2(facingVector.y, facingVector.x);
        var targetAngle = Math.atan2(targetDir.y, targetDir.x);

        var angleDelta = targetAngle - currentAngle;
        var distanceRatio = Vector.magnitude(vecToTarget) / self.startDistance;

        distanceRatio = Common.clamp(distanceRatio, 0, 1);
        // var angleDelta = Util.lerp(currentAngle, targetAngle, (1 - distanceRatio));

        Body.rotate( self.body, angleDelta * (1 - distanceRatio));

        if (Vector.magnitude(vecToTarget) < 60) {
            self.target = null;
        }
    }

    Entity.prototype.update.call(self, deltaTime);
};

Whale.prototype.onDown = function(event) {
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

Whale.prototype.onUp = function(event) {
    var self = this;

    Entity.prototype.onUp.call(self, event);
};

// LOCAL

Whale.prototype.follow = function(target) {
    var self = this;

    self.target = Vector.clone(target);
    var targetVector = Vector.sub(target, self.body.position);
    self.startDistance = Vector.magnitude( targetVector );
    var targetDir = Vector.normalise( targetVector );

    var tailPoint = Vector.add( self.body.position, Vector.mult(Vector.neg(targetDir), 10) );
    Body.applyForce(self.body, tailPoint, Vector.mult(targetDir, self.body.mass * 0.009) );

};



module.exports = Whale;