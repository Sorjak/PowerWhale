var PIXI = require('pixi.js'),
    Vector = require('matter-js').Vector;

function UI(game) {
    var self = this;

    self.game = game;
    self.stage = game.stage;

    self.launchLine = new PIXI.Graphics().lineStyle(2, 0xffffff);

    self.stage.addChild(self.launchLine);

    self.showLaunchLine = false;

}

UI.prototype.update = function(deltaTime) {
    var self = this;

    self.launchLine.clear();

    if (self.showLaunchLine) {
        var playerPos = self.game.player.getPosition();
        var mousePos = self.game.input.mousePosition;
        var worldPos = self.game.camera.screenToWorld(mousePos);

        self.drawLaunchLine(playerPos, worldPos);
    }
};

UI.prototype.drawLaunchLine = function(origin, end) {
    var self = this;

    self.launchLine.lineStyle(2, 0xffffff);
    self.launchLine.moveTo(origin.x, origin.y);
    self.launchLine.lineTo(end.x, end.y);
};

UI.prototype.toggleLaunchLine = function(value) {
    this.showLaunchLine = value;
};

module.exports = UI;