var PIXI    = require('pixi.js');

function Chunk(x, y, width, height) {
    this.num_stars = 100;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.container = new PIXI.Container();
    this.sprite = null;
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

        self.sprite = new PIXI.Sprite(tex);
        self.sprite.position = self.getScreenPosition();
        resolve(self);
    });
}

Chunk.prototype.getScreenPosition = function() {
    return {x: (this.x * this.width), y: (this.y * this.height)};
    // return this.sprite.position;
};

Chunk.prototype.getIndex = function() {
    return {x: this.x, y: this.y};
};

Chunk.prototype.getIndexString = function() {
    return this.x + "|" + this.y;
};

Chunk.prototype.containsPoint = function(point) {
    var chunk_pos = this.getScreenPosition();

    if (chunk_pos.x <= point.x &&
        chunk_pos.x + this.width > point.x &&
        chunk_pos.y <= point.y &&
        chunk_pos.y + this.height > point.y) {
        return true;
    }

    return false;

};

// PRIVATE

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