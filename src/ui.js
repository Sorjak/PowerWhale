var PIXI    = require('pixi.js'),
    Vector  = require('matter-js').Vector;

function UI(game) {
    var self = this;

    self.game = game;
    self.container = game.stage;

    self.launchLine = new PIXI.Graphics().lineStyle(2, 0xffffff);
    self.successColor = 0x00ff00;
    self.failureColor = 0xff0000;
    self.showLaunchLine = false;

    self.energyBox = new PIXI.Graphics().lineStyle(1, 0xffffff);
    self.energyLevel = .5;

    self.debugText = new PIXI.Text('', {fontFamily : 'Arial', fontSize: 12, fill : 0xffffff, align : 'center'});
    
    self.container.addChild(self.launchLine);
    self.container.addChild(self.energyBox);
    self.container.addChild(self.debugText);

}

UI.prototype.update = function(deltaTime) {
    var self = this;

    var player = self.game.player;
    var ui_rect = self.getUIRectangle();

    self.launchLine.clear();

    if (self.showLaunchLine) {
        var playerPos = self.game.player.getPosition();
        var mousePos = self.game.input.mousePosition;
        var worldPos = self.game.camera.screenToWorld(mousePos);

        var launchVector = Vector.sub(worldPos, playerPos);
        var thrustForce = self.game.player.getThrustForce(launchVector);

        var color = Vector.magnitude(thrustForce) <= player.energy ? self.successColor : self.failureColor;

        self.drawLaunchLine(playerPos, worldPos, color);
    }

    self.drawEnergyBox(ui_rect, player.energy);
    self.drawDebugText(ui_rect, player);

};

// PRIVATE

UI.prototype.drawLaunchLine = function(origin, end, color) {
    var self = this;

    self.launchLine.lineStyle(2, color);
    self.launchLine.moveTo(origin.x, origin.y);
    self.launchLine.lineTo(end.x, end.y);
};

UI.prototype.drawEnergyBox = function(rect, level) {
    var self = this;

    var boundingRect = new PIXI.Rectangle(rect.x + rect.width - 105, rect.y + rect.height - 20, 100, 15);
    var energyRect = new PIXI.Rectangle(boundingRect.x, boundingRect.y, boundingRect.width * level, boundingRect.height);

    self.energyBox.clear();
    self.energyBox.lineStyle(1, 0xffffff, 1);
    self.energyBox.drawShape(boundingRect);

    self.energyBox.beginFill(0xffffff, 1);
    self.energyBox.drawShape(energyRect);
};

UI.prototype.drawDebugText = function(rect, player) {
    var self = this;

    try {
        self.debugText.position = {x: rect.x + 10, y: rect.y + rect.height - 20};

        var playerPos = player.getPosition();
        var shortPos = {x: Math.floor(playerPos.x), y: Math.floor(playerPos.y) };

        var currentChunk = self.game.chunkManager.currentChunk;

        var output = "x: " + shortPos.x + ", y: " + shortPos.y;
        output += " | Chunk: " + currentChunk.x + ", " + currentChunk.y;
        self.debugText.text = output;
    } catch (e) {
        
    }
};

UI.prototype.getUIRectangle = function() {
    var self = this;

    var stage_pos = self.game.stage.position;
    var screen_pos = {x: 0, y: 0}
    var world_pos = Vector.sub(screen_pos, stage_pos)

    return new PIXI.Rectangle(world_pos.x, world_pos.y, self.game.screen_width, self.game.screen_height);
};

// PUBLIC

UI.prototype.toggleLaunchLine = function(value) {
    this.showLaunchLine = value;
};

UI.prototype.setEnergyLevel = function(level) {
    this.energyLevel = level;
};

module.exports = UI;