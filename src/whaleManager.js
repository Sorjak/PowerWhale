var PIXI    = require('pixi.js'),
    World   = require('matter-js').World;

var Whale   = require('./whale.js');

function WhaleManager(physicsWorld) {
    this.world = physicsWorld;
    this.entities = [];
    this.stage = null;
}

// OVERRIDES

WhaleManager.prototype.init = function(stage, num_whales) {
    var self = this;

    self.stage = stage;
    var whalePromises = [];

    for (var i = 0; i < num_whales; i++) {
        var randx = Math.random() * 200;
        var randy = Math.random() * 300;

        var whale = new Whale({x: randx, y: randy});
        var whaleProm = whale.init(stage).then(function() {
            self.entities.push(whale);
            World.addBody(self.world, whale.body);

            return whale;
        });
        whalePromises.push(whaleProm);
    }

    return Promise.all(whalePromises).then(function(whales) {
        console.log(whales);
    });
}


WhaleManager.prototype.update = function(deltaTime) {
    var self = this;

    self.entities.forEach(function(whale) {
        whale.update(deltaTime);
    });
}

// LOCAL



module.exports = WhaleManager;