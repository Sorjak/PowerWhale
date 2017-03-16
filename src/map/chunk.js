var PIXI    = require('pixi.js');

function Chunk(x, y, width, height) {
    this.num_stars = 100;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.container = new PIXI.Container();
}

Chunk.prototype.generate = function(renderer) {
    var self = this;

    return new Promise(function(resolve, reject) {
        // var background = new PIXI.Graphics();
        // background.lineStyle(2, 0xFF0000, 1);
        // background.drawRect(0, 0, self.width -2 , self.height -2);
        // self.container.addChild(background);

        var background = new PIXI.Graphics();
        background.lineStyle(0x000000, 1);
        background.drawRect(0, 0, self.width, self.height);
        self.container.addChild(background);

        var stars = self._createStars(self.num_stars);
        self.container.addChild(stars);

        var tex = renderer.generateTexture(self.container);
        var output = new PIXI.Sprite(tex);
        output.position = new PIXI.Point(
            self.x * self.width, 
            self.y * self.height
        );
        console.log(output.width + ", " + output.height);
        resolve(output);
    });
}

Chunk.prototype._createStars = function(num_stars) {
    var self = this;

    var star_container = new PIXI.Graphics();
    star_container.beginFill(0xFFFFFF, 1);
    for (var i = 0; i < num_stars; i++) {
        var randx = Math.random() * self.width;
        var randy = Math.random() * self.height;

        var x = Math.min(Math.max(10, randx), self.width - 10);
        var y = Math.min(Math.max(10, randy), self.height - 10);

        star_container.drawCircle(x, y, Math.random() * 4);
    };
    star_container.endFill();
    return star_container;
}

module.exports = Chunk;