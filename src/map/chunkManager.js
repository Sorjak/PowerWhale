var PIXI    = require('pixi.js');

var Chunk   = require('./chunk.js');

function ChunkManager(renderer, world_dimensions, chunk_dimensions) {
    this.renderer = renderer;

    this.chunk_width = chunk_dimensions.x;
    this.chunk_height = chunk_dimensions.y;

    this.width = (world_dimensions.x / this.chunk_width) / 2;
    this.height = (world_dimensions.y / this.chunk_height) / 2;

    // this.chunks = {};
    this.chunks = [];

    this.currentChunk = null;
    this.stage = null;
}

// OVERRIDES

ChunkManager.prototype.init = function(stage, starting_chunks) {
    var self = this;

    self.stage = stage;
    var chunkPromises = [];

    for (var i = 0; i < starting_chunks; i++) {
        for (var j = 0; j < starting_chunks; j++) {
            var c = new Chunk(i, j, self.chunk_width, self.chunk_height);
            var prom = c.generate(self.renderer);
            chunkPromises.push(prom);
        }
    }

    return Promise.all(chunkPromises).then(function(chunks) {
        chunks.forEach(function(chunk, index) {

            self.addChunk(chunk);
            stage.addChild(chunk.sprite);
        });

        return self.chunks;
    });
}

ChunkManager.prototype.generateChunks = function(chunkIndexes) {
    var self = this;

    chunkIndexes.forEach(function(chunkIndex) {
        // Check to see if requested chunk would be outside our world width and height
        if (Math.abs(chunkIndex.x) <= (self.width + 1) && Math.abs(chunkIndex.y) <= (self.height + 1)) {

            var c = new Chunk(chunkIndex.x, chunkIndex.y, self.chunk_width, self.chunk_height);
            c.generate(self.renderer).then(function(chunk) {
                self.addChunk(chunk);
                self.stage.addChild(chunk.sprite);
            });
        }
    });
}

ChunkManager.prototype.update = function(deltaTime, player) {
    if (this.currentChunk) {
        if (!this.chunkContainsPoint(this.currentChunk, player.getPosition())) {
            var currentChunk = this.getChunkFromPoint(player.getPosition());
            this.setCurrentChunk(currentChunk);
        }
    } else {
        var currentChunk = this.getChunkFromPoint(player.getPosition());
        this.setCurrentChunk(currentChunk);
    }
}

ChunkManager.prototype.addChunk = function(chunk) {
    if (this.chunks[chunk.x] == null) {
        this.chunks[chunk.x] = [];
    }

    this.chunks[chunk.x][chunk.y] = chunk;
};

ChunkManager.prototype.getChunk = function(x, y) {
    try {
        return this.chunks[x][y];
    } catch (e) {
        return null;
    }
};

// LOCAL

ChunkManager.prototype.getChunkFromPoint = function(point) {
    var self = this;

    var output = null;
    
    var x = Math.floor(point.x / self.chunk_width);
    var y = Math.floor(point.y / self.chunk_height);

    var chunk = self.getChunk(x, y);
    if (chunk && self.chunkContainsPoint(chunk, point)) {
        output = chunk;
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

    var chunk_index = chunk.getIndex();
    var chunk_x = chunk_index.x; //chunk.position.x / chunk.width;
    var chunk_y = chunk_index.y; //chunk.position.y / chunk.height;

    var output = [];
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            var c = self.getChunk(chunk_x + i, chunk_y + j);
            if (!c) {
                output.push({x : chunk_x + i, y : chunk_y + j});
            }
        }
    }

    return output;
}

ChunkManager.prototype.chunkContainsPoint = function(chunk, point) {
    return chunk.containsPoint(point);
};

ChunkManager.prototype.getNeighborsForChunk = function(chunk, diagonal) {
    var chunk_index = chunk.getIndex();
    var x = chunk_index.x; // chunk.position.x / chunk.width;
    var y = chunk_index.y; // chunk.position.y / chunk.height;
    var output = [];
    
    //west
    if (this.getChunk((x-1), y)) {
        output.push(this.getChunk((x-1), y));
    }
    
    //north
    if (this.getChunk(x, (y-1))) {
        output.push(this.getChunk(x, (y-1)));
    }
    
    //east
    if (this.getChunk((x+1), y)) {
        output.push(this.getChunk((x+1), y));
    }
    
    //south
    if (this.getChunk(x, (y+1))) {
        output.push(this.getChunk(x, (y+1)));
    }
    

    if (diagonal) {
        //northwest
        if (this.getChunk((x-1), (y-1))) {
            output.push(this.getChunk((x-1), (y-1)));
        }
        
        //northeast
        if (this.getChunk((x+1), (y+1))) {
            output.push(this.getChunk((x+1), (y+1)));
        }
        
        //southwest
        if (this.getChunk((x-1), (y+1))) {
            output.push(this.getChunk((x-1), (y+1)));
        }
        
        //southeast
        if (this.getChunk((x+1), (y-1))) {
            output.push(this.getChunk((x+1), (y-1)));
        }
    }

    return output;
}

module.exports = ChunkManager;