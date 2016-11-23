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

    this.body = null;
    this.backupBody = null;

    this.inputVector = {x: 0, y: 0};

    this.rideEntity = null;
    this.charging = false;
    this.wasCharging = false;

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
            0, 0, 32
        );

        // self.info = new PIXI.Graphics();
        self.debugText = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 12, fill : 0xffffff, align : 'center'});
        self.debugText.position = new PIXI.Point(20, 10);
        // stage.addChild(self.info);

        self.sprite.addChild(self.debugText);
        
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;

    self.debugText.text = self.stateMachine.state;

    if (self.stateMachine.state == "riding") {
        
        var thrust = -self.inputVector.y;
        var rotation = self.inputVector.x;

        if (thrust > 0) {
            self.charging = true;
            self.rideEntity.chargeThrust(deltaTime);
        } else {
            self.charging = false;
            if (self.wasCharging) {
                self.rideEntity.requestMove();
            }
        }

        // var facingVector = self.getFacingVector();

        // var thrustVector = Vector.mult(facingVector, thrust);
        // var thrustPoint = Vector.add(self.getBody().position, Vector.neg(thrustVector));

        // Body.applyForce(self.getBody(), thrustPoint, Vector.mult(thrustVector, self.getBody().mass * .001));

        Body.rotate(self.getBody(), .05 * rotation);

        self.wasCharging = self.charging;

    } else {
        var thrustPoint = Vector.add(self.getBody().position, Vector.neg(self.inputVector));

        Body.applyForce(self.getBody(), thrustPoint, Vector.mult(self.inputVector, self.getBody().mass * .0001));
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
    console.log(this.stateMachine);
};

// LOCAL

Player.prototype.move = function(vector) {
    var self = this;

    self.inputVector = vector;
};

Player.prototype.rideWhale = function(whale) {
    this.stateMachine.rideWhale(whale);
}

Player.prototype.dismount = function() {
    this.stateMachine.dismount();
};



module.exports = Player;