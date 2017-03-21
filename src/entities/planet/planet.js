var Entity  = require("../entity.js"),
    Utils   = require("../../util.js"),
    PIXI    = require('pixi.js'),
    machina = require('machina');

var Bodies  = require('matter-js').Bodies,
    Body    = require('matter-js').Body
    Vector  = require('matter-js').Vector;


function Planet(position) {
    Entity.call(this);

    this.startPos = position;
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
        
        self.sprite.scale = new PIXI.Point(2, 2);
        var planetRadius = self.sprite.width / 2;
        self.body = Bodies.circle( self.startPos.x, self.startPos.y, planetRadius, {
            plugin: {
                attractors: [self.getGravity]
            }
        });

        console.log(self.startPos);

        Body.setStatic(self.body, true);

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


Planet.prototype.getGravity = function(planet, other) {
    
    var towardPlanet = Vector.sub(planet.position, other.position);
    var distance = Vector.magnitude(towardPlanet);

    if (distance <= 1500) {
        var intensity = Utils.bezierCube(
            {x: 0, y:1},
            {x: 0, y:0},
            {x: 0, y:0},
            {x: 1, y:0},
            ((distance - planet.circleRadius - 10) / 1500)
        );

        var normalized = Vector.normalise(towardPlanet);
        return Vector.mult(normalized, intensity.y * 1e-3);
    }

    return {x: 0, y: 0};
}


module.exports = Planet;