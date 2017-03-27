var PIXI    = require('pixi.js');

var World   = require('matter-js').World,
    Bodies  = require('matter-js').Bodies,
    Body    = require('matter-js').Body
    Vector  = require('matter-js').Vector;

var ChunkManager    = require('./map/chunkManager.js'),
    PlanetManager   = require("./entities/planet/planetManager.js");



function GameWorld(renderer, dims) {
    this.dimensions = dims;

    this.chunkManager = new ChunkManager(renderer, 
        {x: dims.x, y: dims.y},
        {x: 800, y: 600}
    );
    this.planetManager = new PlanetManager(this);
}

// PUBLIC METHODS

GameWorld.prototype.init = function(stage) {
    var self = this;

    return new Promise(function(resolve, reject) {
        


        resolve(self);
    });
};

GameWorld.prototype.update = function(deltaTime) {
    var self = this;

    Entity.prototype.update.call(self, deltaTime);
};

GameWorld.prototype.debug = function() {
    var self = this;
};


module.exports = GameWorld;