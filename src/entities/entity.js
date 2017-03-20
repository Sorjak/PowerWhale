var machina = require('machina');

var Bodies  = require('matter-js').Bodies,
    Body    = require('matter-js').Body
    Vector  = require('matter-js').Vector;


var EntityStateMachine = machina.Fsm.extend( {
    initialState: "init",
    states: {
        init : {
            _onEnter : function() {
                console.log("fsm init");
            }
        }
    }
});

function Entity() {
    this.sprite = null;
    this.body   = null;

    this.stateMachine = null;

    this.info = new PIXI.Graphics();

    this.tags = [];
}

// PUBLIC METHODS

Entity.prototype.init = function(stage, image_path) {
    var self = this;

    return new Promise(function(resolve, reject) {
        self.sprite = new PIXI.Sprite.fromImage(image_path);
        self.sprite.anchor = new PIXI.Point(.5, .5);
        self.sprite.interactive = true;


        self._bindListeners();

        stage.addChild(self.sprite);
        stage.addChild(self.info);

        self.body = Bodies.rectangle(
            0, 0, 64, 64
        );

        self.initStateMachine(EntityStateMachine);

        resolve(true);
    });
};

Entity.prototype.update = function(deltaTime) {
    var self = this;

    self.sprite.position = self.getBody().position;
    self.sprite.rotation = self.getBody().angle;
};

Entity.prototype.onDown = function(event) {};

Entity.prototype.onUp = function(event) {};

Entity.prototype.getPosition = function() {
    return this.getBody().position;
};

Entity.prototype.getFacingVector = function() {
    return Vector.normalise( {x: Math.sin(this.getBody().angle), y: -Math.cos(this.getBody().angle)} );
};

Entity.prototype.getBody = function() {
    return this.body;
};

Entity.prototype.debug = function() {
    this.info.clear();
};

// PRIVATE METHODS

Entity.prototype._bindListeners = function () {
    var self = this;

    this.sprite.on('pointerdown', function(e) {
        self.onDown(e);
    });
    this.sprite.on('touchstart', function(e) {
        self.onDown(e);
    });

    this.sprite.on('pointerup', function(e) {
        self.onUp(e);
    });
};

Entity.prototype.initStateMachine = function() {

};

module.exports = Entity;