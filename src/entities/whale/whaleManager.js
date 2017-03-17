var PIXI    = require('pixi.js'),
    machina = require('machina'),
    World   = require('matter-js').World,
    Comp    = require('matter-js').Composite,
    Vector  = require('matter-js').Vector;

var Whale   = require('./whale.js');


function WhaleManager(game) {
    this.game = game;
    this.world = game.world;
    this.entities = [];
    this.stage = null;
}

// OVERRIDES

WhaleManager.prototype.init = function(stage, num_whales) {
    var self = this;

    self.stage = stage;
    var whalePromises = [];

    for (var i = 0; i < num_whales; i++) {
        var randx = Math.random() * self.game.world_width;
        var randy = Math.random() * self.game.world_height;

        var whale = new Whale({x: randx, y: randy});
        var whaleProm = whale.init(stage).then(function(new_whale) {
            self.entities.push(new_whale);
            World.addBody(self.world, new_whale.body);
            return new_whale;
        });
        whalePromises.push(whaleProm);
    }

    return Promise.all(whalePromises);
}


WhaleManager.prototype.update = function(deltaTime) {
    var self = this;

    self.entities.forEach(function(whale) {
        whale.update(deltaTime);
    });
}

// PUBLIC

WhaleManager.prototype.nearestWhale = function(point) {
    var self = this;

    var nearest = null;
    var minLength = Infinity;

    self.entities.forEach(function(whale) {
        var vecToWhale = Vector.sub(point, whale.body.position);
        var length = Vector.magnitude(vecToWhale);

        if (length < minLength) {
            minLength = length;
            nearest = whale;
        }
    });

    return nearest;
};



module.exports = WhaleManager;