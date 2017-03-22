var EntityAI    = require("../entity_ai.js"),
    Util        = require("../../util.js"),
    PIXI        = require('pixi.js');

var Body        = require('matter-js').Body,
    Bodies      = require('matter-js').Bodies,
    Vector      = require('matter-js').Vector,
    Common      = require('matter-js').Common;

function Whale(pos) {
    EntityAI.call(this);

    this.tags.push("rideable");
    this.tags.push("whale");

    this.startPos = pos;

    this.rider = null;

    this.thrustPower = 0;
    this.thrustModifier = .7;
    this.forceThrustModifier = 4;

    this.fatigue = 0;
}

Whale.prototype = Object.create(EntityAI.prototype);
Whale.prototype.constructor = Whale;

// OVERRIDES

Whale.prototype.init = function(stage) {
    var self = this;

    return EntityAI.prototype.init.call(this, stage, "../images/whale_blue.png")
    .then(function() {
        self.body = Bodies.rectangle(
            self.startPos.x, self.startPos.y, 32, 134
        );

        Body.rotate(self.body, Math.random() * 3);
        return self;
    });
};

Whale.prototype.update = function(deltaTime) {
    var self = this;

    // self.debugText.text = self.moveState.state;

    if (self.aiState.state == "roaming") {
        self.thrustPower += deltaTime * self.thrustModifier;
        self.moveState.thrust();
    }

    self.thrustPower = Math.min(1000, self.thrustPower);

    EntityAI.prototype.update.call(self, deltaTime);
};

Whale.prototype.debug = function() {
    var self = this;
    EntityAI.prototype.debug.call(self);

    self.info.lineStyle(1, 0xff0000);
    self.info.drawCircle(self.getPosition().x, self.getPosition().y, 32);
};

Whale.prototype.onDown = function(event) {
    var self = this;

    var info = {
        id: self.body.id,
        aiState : self.aiState.state,
        moveState : self.moveState.state
    }

    EntityAI.prototype.onDown.call(self, event);
};

Whale.prototype.onUp = function(event) {
    var self = this;

    EntityAI.prototype.onUp.call(self, event);
};

Whale.prototype.initStateMachine = function(BaseFSM) {
    var self = this;

    var AI_FSM = EntityAI.prototype.initStateMachine.call(self, BaseFSM);
    self.aiState = new AI_FSM();

    var WhaleFSM = BaseFSM.extend({
        states: {
            init: {
                _onEnter : function() {
                    this.transition("preparing");
                }
            },
            preparing : {
                _onEnter : function() {
                    var waitTime = (Math.random() * 3000) + 1000;
                    this.timer = setTimeout( function() {
                        this.transition("prepared");
                    }.bind( this ), waitTime);
                },
                thrust : function() {
                    this.deferUntilTransition("prepared");
                },
                forceThrust : function() {

                    this.transition("thrusting");
                },
                _onExit: function() {
                    clearTimeout( this.timer );
                }                
            },
            prepared : {
                thrust : function() { 
                    this.cooldown = self.thrustPower * 8;
                    this.transition("thrusting"); 
                },
                forceThrust : function() { 
                    this.cooldown = self.thrustPower * 2;
                    this.transition("thrusting") 
                },
            },
            thrusting : {
                _onEnter : function() {
                    this.timer = setTimeout( function() {
                        this.transition("preparing");
                    }.bind( this ), this.cooldown );

                    self.thrustForward(self.thrustPower);
                },

                _onExit: function() {
                    clearTimeout( this.timer );
                    self.thrustPower = 0;
                }
            },
        },
        thrust : function() {
            this.handle("thrust");
        },
        forceThrust : function() {
            self.fatigue += 5;
            this.handle("forceThrust");
        }
    });

    self.moveState = new WhaleFSM();
};

// PRIVATE

Whale.prototype.thrustForward = function(force) {
    var self = this;

    var bod = self.getBody();
    var f_vec = self.getFacingVector();

    var thrust_force = Vector.mult(f_vec, bod.mass * force * .0001);

    var tail_vec = Vector.mult(Vector.neg(f_vec), (self.sprite.height/2) );
    var tail_point = Vector.add(bod.position, tail_vec);

    Body.applyForce(bod, tail_point, thrust_force);
};


// PUBLIC 

Whale.prototype.chargeThrust = function(deltaTime) {
    this.thrustPower += deltaTime * this.forceThrustModifier;

    this.thrustPower = Math.min(1000, this.thrustPower);
};

Whale.prototype.requestMove = function() {
    this.moveState.forceThrust();
};

module.exports = Whale;