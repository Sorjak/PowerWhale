var Bodies = require('matter-js').Bodies,
    Body   = require('matter-js').Body;

function Entity(width, height) {
    this.width  = width;
    this.height = height;

    this.sprite = null;
    this.body   = null;
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

        self.body = Bodies.circle(
            self.sprite.position.x, self.sprite.position.y, self.sprite.height * .5
        );

        resolve(true);
    });
};

Entity.prototype.update = function(deltaTime) {
    var self = this;

    self.sprite.position = self.body.position;
    self.sprite.rotation = self.body.angle;
};

Entity.prototype.onDown = function(event) {
    console.log(event);
};

Entity.prototype.onUp = function(event) {
    console.log(event);
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