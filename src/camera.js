var PIXI = require('pixi.js'),
    Comp = require('matter-js').Composite,
    World = require('matter-js').World,
    Vector = require('matter-js').Vector;

function Camera(game) {
    var self = this;

    self.game = game;
    self.stage = game.stage;
    self.offset = {x : 0, y: 0};
    self.followTarget = null;

}

Camera.prototype.update = function(deltaTime) {
    var self = this;

    if (self.followTarget) {
        var targetPos = self.followTarget.getBody().position;
        var adjusted = {
            x: targetPos.x - (self.game.width / 2), 
            y: targetPos.y - (self.game.height / 2)
        };
        self.offset = Vector.neg(adjusted);
    }

    self.stage.position = self.offset;
};


Camera.prototype.moveScreen = function(vector) {
    this.offset = Vector.add(this.offset, vector);
    
};

Camera.prototype.followEntity = function(entity) {
    this.followTarget = entity;
};

Camera.prototype.screenToWorld = function(point) {
    return Vector.sub(point, this.offset);
};

Camera.prototype.worldToScreen = function(point) {
    return Vector.add(point, this.offset);
};

module.exports = Camera;