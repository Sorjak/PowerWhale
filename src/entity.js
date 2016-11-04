var Bodies = require('matter-js').Bodies,
    Body   = require('matter-js').Body
    Vector = require('matter-js').Vector;

function Entity() {
    this.sprite = null;
    this.body   = null;

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

        self.body = Bodies.rectangle(
            0, 0, self.sprite.width, self.sprite.height
        );

        resolve(true);
    });
};

Entity.prototype.update = function(deltaTime) {
    var self = this;

    self.sprite.position = self.body.position;
    self.sprite.rotation = self.body.angle;
};

Entity.prototype.onDown = function(event) {};

Entity.prototype.onUp = function(event) {};


Entity.prototype.getFacingVector = function() {
    return Vector.normalise( {x: Math.sin(this.body.angle), y: -Math.cos(this.body.angle)} );
};

// PRIVATE METHODS

Entity.prototype._bindListeners = function () {
    var self = this;

    this.sprite.on('mousedown', function(e) {
        self.onDown(e);
    });
    this.sprite.on('touchstart', function(e) {
        self.onDown(e);
    });

    this.sprite.on('mouseup', function(e) {
        self.onUp(e);
    });
};

module.exports = Entity;