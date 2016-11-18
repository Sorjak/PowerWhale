var PIXI    = require('pixi.js');

var Chunk   = require('./chunk.js');

function ChunkManager(renderer, width, height) {
    this.renderer = renderer;

    this.width = width;
    this.height = height;

    this.chunks = {};

    this.currentChunk = null;
    this.stage = null;
}

// OVERRIDES

ChunkManager.prototype.init = function(stage, num_chunks) {
    var self = this;

    self.stage = stage;
    var chunkPromises = [];

    for (var i = 0; i < num_chunks; i++) {
        for (var j = 0; j < num_chunks; j++) {
            var c = new Chunk(i, j, self.width, self.height);
            var prom = c.generate(self.renderer);
            chunkPromises.push(prom);
        }
    }

    return Promise.all(chunkPromises).then(function(chunks) {
        chunks.forEach(function(chunk, index) {
            var x = chunk.position.x / self.width;
            var y = chunk.position.y / self.height;

            self.chunks[x+"|"+y] = chunk;
            stage.addChild(chunk);
        });

        return self.chunks;
    });
}

ChunkManager.prototype.generateChunks = function(chunkIndexes) {
    var self = this;

    chunkIndexes.forEach(function(chunkIndex) {
        var c = new Chunk(chunkIndex.x, chunkIndex.y, self.width, self.height);
        c.generate(self.renderer).then(function(sprite) {
            self.chunks[chunkIndex.x+"|"+chunkIndex.y] = sprite
            self.stage.addChild(sprite);
        });
    });
}

ChunkManager.prototype.update = function(deltaTime, player) {
    if (this.currentChunk) {
        if (!this.chunkContainsPoint(this.currentChunk, player.getBody().position)) {
            var currentChunk = this.getChunkFromPoint(player.getBody().position);
            this.setCurrentChunk(currentChunk);
        }
    } else {
        var currentChunk = this.getChunkFromPoint(player.getBody().position);
        this.setCurrentChunk(currentChunk);
    }
}

// LOCAL

ChunkManager.prototype.getChunkFromPoint = function(point) {
    var self = this;

    var output = null;
    for (var index in self.chunks) {
        var chunk = self.chunks[index];
        if (chunk && self.chunkContainsPoint(chunk, point)) {
            output = chunk;
        }
    }

    return output;
}

ChunkManager.prototype.setCurrentChunk = function(chunk) {
    this.currentChunk = chunk;

    if (this.currentChunk) {
        var neighbors = this.getNeighborsForChunk(this.currentChunk, true);
        if (neighbors.length < 8) {
            // we need to add more chunks around the area.
            var missing = this.getMissingNeighborIndexes(this.currentChunk, neighbors);
            this.generateChunks(missing);

        }
    } else {
        console.log("setting null chunk");
    }
}

ChunkManager.prototype.getMissingNeighborIndexes = function(chunk, neighbors) {
    var self = this;
    var chunk_x = chunk.position.x / chunk.width;
    var chunk_y = chunk.position.y / chunk.height;

    var output = [];
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            if (!self.chunks[(chunk_x + i)+"|"+(chunk_y + j)]) {
                output.push({x : chunk_x + i, y : chunk_y + j});
            }
        }
    }

    return output;
}

ChunkManager.prototype.chunkContainsPoint = function(chunk, point) {
    if (chunk.position.x <= point.x &&
        chunk.position.x + chunk.width > point.x &&
        chunk.position.y <= point.y &&
        chunk.position.y + chunk.height > point.y) {
        return true;
    }

    return false;
};

ChunkManager.prototype.getNeighborsForChunk = function(chunk, diagonal) {
    var x = chunk.position.x / chunk.width;
    var y = chunk.position.y / chunk.height;
    var output = [];
    
    //west
    if (this.chunks[(x-1)+"|"+y]) {
        output.push(this.chunks[(x-1)+"|"+y]);
    }
    
    //north
    if (this.chunks[x+"|"+(y-1)]) {
        output.push(this.chunks[x+"|"+(y-1)]);
    }
    
    //east
    if (this.chunks[(x+1)+"|"+y]) {
        output.push(this.chunks[(x+1)+"|"+y]);
    }
    
    //south
    if (this.chunks[x+"|"+(y+1)]) {
        output.push(this.chunks[x+"|"+(y+1)]);
    }
    

    if (diagonal) {
        //northwest
        if (this.chunks[(x-1)+"|"+(y-1)]) {
            output.push(this.chunks[(x-1)+"|"+(y-1)]);
        }
        
        //northeast
        if (this.chunks[(x+1)+"|"+(y+1)]) {
            output.push(this.chunks[(x+1)+"|"+(y+1)]);
        }
        
        //southwest
        if (this.chunks[(x-1)+"|"+(y+1)]) {
            output.push(this.chunks[(x-1)+"|"+(y+1)]);
        }
        
        //southeast
        if (this.chunks[(x+1)+"|"+(y-1)]) {
            output.push(this.chunks[(x+1)+"|"+(y-1)]);
        }
    }

    return output;
}

module.exports = ChunkManager;