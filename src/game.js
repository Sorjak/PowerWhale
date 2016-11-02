
function Game(width, height) {
    this.width = width;
    this.height = height;


}

Game.prototype.start = function() {
    var prom = new Promise(function(resolve, reject) {
        console.log('new game start');
        resolve(true);

    });

    return prom;
};

Game.prototype.update = function(timeDelta) {
    console.log("Updating");
};

module.exports = Game;