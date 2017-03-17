var Entity  = require("./entity.js"),
    PIXI    = require('pixi.js'),
    machina = require('machina');

var Bodies  = require('matter-js').Bodies,
    Body    = require('matter-js').Body
    Vector  = require('matter-js').Vector;


// var PlanetStateMachine = machina.Fsm.extend( {
//     initialState: "init",
//     states: {
//         init : {
//             _onEnter : function() {
//                 console.log("fsm init");
//             }
//         }
//     }
// });

function Planet() {
    Entity.call(this);

    this.body = null;

    this.tags.push("planet");
}

Planet.prototype = Object.create(Entity.prototype);
Planet.prototype.constructor = Planet;

// PUBLIC METHODS

Planet.prototype.init = function(stage, image_path) {
    var self = this;

    return Entity.prototype.init.call(this, stage, "../images/mars.png")
    .then(function() {
        self.body = Bodies.circle(
            0, 0, 100
        );

        Body.setStatic(self.body, true);

        return self;

    });
};

Planet.prototype.update = function(deltaTime) {
    var self = this;

    Entity.prototype.update.call(self, deltaTime);
};


module.exports = Planet;