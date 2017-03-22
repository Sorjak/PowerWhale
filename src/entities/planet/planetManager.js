var PIXI    = require('pixi.js'),
    machina = require('machina'),
    World   = require('matter-js').World,
    Comp    = require('matter-js').Composite,
    Vector  = require('matter-js').Vector,
    Body    = require('matter-js').Body;

var Planet   = require('./planet.js');


function PlanetManager(game) {
    this.game = game;
    this.world = game.world;
    this.entities = [];
    this.stage = null;
}

// OVERRIDES

PlanetManager.prototype.init = function(stage, num_planets) {
    var self = this;

    self.stage = stage;
    var planetPromises = [];


    var planetDimensions = {x: self.game.screen_width, y: self.game.screen_height};
    for (var i = 0; i < num_planets; i++) {
        var randx = Math.floor((Math.random() * 20000) - 10000);
        var randy = Math.floor((Math.random() * 20000) - 10000);
        if (i == 0) {
            randx = 2000;
            randy = 2000;
        }

        var planet = new Planet({x: randx, y: randy}, planetDimensions);
        var planetProm = planet.init(stage).then(function(new_planet) {
            self.entities.push(new_planet);
            World.addBody(self.world, new_planet.body);

            return new_planet;
        });
        planetPromises.push(planetProm);
    }

    return Promise.all(planetPromises);
}


PlanetManager.prototype.update = function(deltaTime) {
    var self = this;

    self.entities.forEach(function(planet) {
        planet.update(deltaTime);
    });
}

PlanetManager.prototype.debug = function() {
    var self = this;

    self.entities.forEach(function(planet) {
        planet.debug();
    });
};

// PUBLIC

PlanetManager.prototype.nearestPlanet = function(point) {
    var self = this;

    var nearest = null;
    var minLength = Infinity;

    self.entities.forEach(function(planet) {
        var vecToPlanet = Vector.sub(point, planet.body.position);
        var length = Vector.magnitude(vecToPlanet);

        if (length < minLength) {
            minLength = length;
            nearest = planet;
        }
    });

    return nearest;
};



module.exports = PlanetManager;