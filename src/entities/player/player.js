var Entity  = require("../entity.js"),
    Util    = require("../../util.js"),
    PIXI    = require('pixi.js'),
    machina = require('machina');

var Body    = require('matter-js').Body,
    Bodies  = require('matter-js').Bodies,
    Vector  = require('matter-js').Vector,
    Common  = require('matter-js').Common;

function Player() {
    Entity.call(this);

    this.info = new PIXI.Graphics();

    this.body = null;
    this.backupBody = null;

    this.inputVector = {x: 0, y: 0};
    this.rotateRate = .1;

    this.launchOrigin = null;
    this.launchModifier = .0001;

    this.rideEntity = null;
    this.charging = false;
    this.wasCharging = false;

    this.energy = 0;
    this.energyRate = .0002;

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
            0, 0, 24
        );

        self.body.frictionAir = 1e-6;

        
        stage.addChild(self.info);
        
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;

    // var thrustPoint = Vector.add(self.getBody().position, Vector.neg(self.inputVector));

    // Body.applyForce(self.getBody(), thrustPoint, Vector.mult(self.inputVector, self.getBody().mass * .0001));

    self.energy = Math.min(1, self.energy + (self.energyRate * deltaTime));

    if (Math.abs(self.inputVector.x) > 0) {
        Body.rotate(self.getBody(), self.inputVector.x * self.rotateRate);
        Body.setAngularVelocity(self.getBody(), 0);
    }

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

Player.prototype.getBody = function() {
    if (this.stateMachine.state == "flying") {
        return this.body;
    } else {
        return this.rideEntity.body;
    }
};

Player.prototype.debug = function() {
    var self = this;
    Entity.prototype.debug.call(self);
    
    self.info.lineStyle(1, 0xff0000);
    self.info.drawCircle(self.getPosition().x, self.getPosition().y, self.getBody().circleRadius);
};

Player.prototype.initStateMachine = function(BaseFSM) {
    var self = this;
    Entity.prototype.initStateMachine.call(self);

    var PlayerFSM = BaseFSM.extend({
        states : {
            init: {
                _onEnter : function() {
                    this.transition("flying");
                }
            },
            flying : {
                _onEnter : function() {
                    console.log("Player body id: " + self.body.id );
                },
                ride :  function(entity) {
                    entity.override();
                    self.rideEntity = entity;
                    this.transition("riding");
                }
            },

            riding : {
                _onEnter : function() {
                    // Body.setStatic(self.body, true);
                    // self.backupBody = self.body;
                    // self.body = self.rideEntity.body;
                    console.log("player entering riding mode");
                }, 
                dismount : function() {
                    var displaceDir = Vector.perp(self.getFacingVector());
                    var displacePos = Vector.add(self.rideEntity.body.position, Vector.mult(displaceDir, 70));
                    Body.setPosition(self.body, displacePos);
                    self.rideEntity.release();
                    self.rideEntity = null;

                    this.transition("flying");
                }
            }
        },
        rideWhale : function(whale) {
            this.handle("ride", whale);
        },
        dismount : function() {
            this.handle("dismount");
        }
    });

    this.stateMachine = new PlayerFSM();
};

// PUBLIC

Player.prototype.launch = function(point) {
    var self = this;

    var origin = self.getPosition();
    var launchVector = Vector.sub(point, origin);
    var launchDir = Vector.normalise(launchVector);

    var thrustPoint = Vector.add(origin, Vector.neg(launchDir));
    var thrustForce = self.getThrustForce(launchVector);

    var new_energy = self.energy - Vector.magnitude(thrustForce);

    if (new_energy > 0) {
        self.energy = new_energy;
        Body.applyForce(self.getBody(), thrustPoint, thrustForce);
    }
};

Player.prototype.getThrustForce = function(vector) {
    return Vector.mult(vector, this.getBody().mass * this.launchModifier);
};

Player.prototype.move = function(vector) {
    var self = this;

    self.inputVector = vector;
};

Player.prototype.rideWhale = function(whale) {
    this.stateMachine.rideWhale(whale);
};

Player.prototype.dismount = function() {
    this.stateMachine.dismount();
};

module.exports = Player;