var Entity = require("./entity.js"),
    Body   = require('matter-js').Body;

function Player(width, height, name) {
    Entity.call(this, width, height);

    this.name = name;
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.init = function(stage) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/whale_blue.png")
    .then(function() {
        Body.translate(self.body, {x: 300, y: 400});
    });
};

Player.prototype.update = function(deltaTime) {
    var self = this;


    Entity.prototype.update.call(self, deltaTime);
};

Player.prototype.onDown = function(event) {
    var self = this;

    console.log(event);
    console.log(self.body.position);

    var forceMagnitude = 0.001 * self.body.mass;

    // Body.applyForce(self.body, {x : 0, y: 0}, { 
    //     x: forceMagnitude, 
    //     y: -forceMagnitude
    // });

    Entity.prototype.onDown.call(self, event);
};

Player.prototype.onUp = function(event) {
    var self = this;

    Entity.prototype.onUp.call(self, event);
};

module.exports = Player;