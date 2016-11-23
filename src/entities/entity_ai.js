var Entity  = require("./entity.js"),
    Util    = require("../util.js"),
    PIXI    = require('pixi.js');

function EntityAI(pos) {
    Entity.call(this);

    this.aiState = null;

    this.manualControl = false;
}

EntityAI.prototype = Object.create(Entity.prototype);
EntityAI.prototype.constructor = EntityAI;

// OVERRIDES

EntityAI.prototype.init = function(stage, image_path) {
    return Entity.prototype.init.call(this, stage, image_path);
};

EntityAI.prototype.update = function(deltaTime) {
    Entity.prototype.update.call(this, deltaTime);
};

EntityAI.prototype.onDown = function(event) {
    Entity.prototype.onDown.call(this, event);
};

EntityAI.prototype.onUp = function(event) {
    Entity.prototype.onUp.call(this, event);
};

EntityAI.prototype.initStateMachine = function(BaseFSM) {
    var self = this;

    Entity.prototype.initStateMachine.call(self);

    var EntityAI_FSM = BaseFSM.extend({
        states: {
            init: {
                _onEnter : function() {
                    this.transition("roaming");
                }
            },
            roaming : {
                _onEnter : function() {
                    self.manualControl = false;
                },
                override : "overridden"
            },
            overridden : {
                _onEnter : function() {
                    self.manualControl = true;
                },
                release : "roaming"
            }
        },
        override : function() {
            this.handle("override");
        },
        release : function() {
            this.handle("release");
        }
    });

    return EntityAI_FSM;
};

// LOCAL

EntityAI.prototype.override = function() {
    this.aiState.override();
};

EntityAI.prototype.release = function() {
    this.aiState.release();
};
module.exports = EntityAI;