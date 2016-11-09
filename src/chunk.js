var PIXI    = require('pixi.js');

function Chunk(pos, bounds) {
    this.num_stars = 100;
    this.position = pos;
    this.width = bounds.x;
    this.height = bounds.y;

    this.container = new PIXI.Container();
}

Chunk.prototype.generate = function(renderer) {
    var self = this;
    console.log(self.width + " " + self.height);

    return new Promise(function(resolve, reject) {
        var background = new PIXI.Graphics();
        background.beginFill(0x111111);
        background.drawRect(0, 0, self.width, self.height);
        self.container.addChild(background);

        var stars = self._createStars(self.num_stars);
        self.container.addChild(stars);

        var tex = self.container.generateTexture(renderer);
        var output = new PIXI.Sprite(tex);
        output.position = new PIXI.Point(
            self.position.x * self.width, 
            self.position.y * self.height
        );
        resolve(output);
    });
}

Chunk.prototype._createStars = function(num_stars) {
    var self = this;

    var star_container = new PIXI.Graphics();
    star_container.beginFill(0xFFFFFF, 1);
    for (var i = 0; i < num_stars; i++) {
        var x = Math.floor(Math.random() * self.width);
        var y = Math.floor(Math.random() * self.height);
        star_container.drawCircle(x, y, Math.random() * 4);
    };
    star_container.endFill();
    return star_container;
}

module.exports = Chunk;