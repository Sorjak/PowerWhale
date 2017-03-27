var Entity  = require("../entity.js"),
    Utils   = require("../../util.js"),
    PIXI    = require('pixi.js'),
    machina = require('machina');

var Bodies  = require('matter-js').Bodies,
    Body    = require('matter-js').Body
    Vector  = require('matter-js').Vector;


function Planet(position, dimensions) {
    Entity.call(this);

    this.startPos = position;
    this.dimensions = dimensions;
    this.body = null;

    this.tags.push("planet");
}

Planet.prototype = Object.create(Entity.prototype);
Planet.prototype.constructor = Planet;

// PUBLIC METHODS

Planet.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/mars.png")
    .then(function() {
        
        var maxScale = Math.min(self.dimensions.x / self.sprite.width, self.dimensions.y / self.sprite.height);
        var scaleFactor = Math.random() * maxScale;

        self.sprite.scale = new PIXI.Point(scaleFactor, scaleFactor);
        var planetRadius = self.sprite.width / 2;
        self.body = Bodies.circle( self.startPos.x, self.startPos.y, planetRadius, {
            plugin: {
                attractors: [self.getGravity]
            }
        });

        Body.setStatic(self.body, true);
        console.log("x: " + self.body.position.x + ", y:" + self.body.position.y + " mass:" + (Planet.getMass(planetRadius)) / 1e11);

        return self;
    });
};

Planet.prototype.update = function(deltaTime) {
    var self = this;

    Entity.prototype.update.call(self, deltaTime);
};

Planet.prototype.debug = function() {
    var self = this;
    Entity.prototype.debug.call(self);

    self.info.lineStyle(1, 0xff0000);
    self.info.drawCircle(self.getPosition().x, self.getPosition().y, self.getBody().circleRadius);
};


Planet.getMass = function(radius) {
    return 1e11 * ((radius / 100) * 5);
};

Planet.prototype.getGravity = function(planet, other) {
  
    var towardPlanet = Vector.sub(planet.position, other.position);
    var distance = Vector.magnitude(towardPlanet);

    var planetMass = Planet.getMass(planet.circleRadius);

    var intensity = Utils.gravityForce(planetMass, other.mass, distance);
    
    var normalized = Vector.normalise(towardPlanet);
    return Vector.mult(normalized, intensity);

    // return {x: 0, y: 0};
}


module.exports = Planet;