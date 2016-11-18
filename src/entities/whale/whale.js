var Entity  = require("../entity.js"),
    Util    = require("../../util.js"),
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

    this.rider = null;
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

        return self;
    });
};

Whale.prototype.update = function(deltaTime) {
    var self = this;


    Entity.prototype.update.call(self, deltaTime);
};

Whale.prototype.onDown = function(event) {
    var self = this;



    Entity.prototype.onDown.call(self, event);
};

Whale.prototype.onUp = function(event) {
    var self = this;

    Entity.prototype.onUp.call(self, event);
};

Whale.prototype.initStateMachine = function(BaseFSM) {
    var self = this;

    Entity.prototype.initStateMachine.call(self);

    
};

// LOCAL



module.exports = Whale;