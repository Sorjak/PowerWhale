


function Input(game) {
    this.game = game;

    this._bindListeners();

    this.heldKeys = new Set();

    this.keyMap = {
        'A' : 65,
        'D' : 68,
        'W' : 87,
        'S' : 83,
    };
}


Input.prototype.onMouseDown = function(event) {
    this.game.handleMouse(event);
};

Input.prototype.onMouseUp = function(event) {

};

Input.prototype.onKeyDown = function(event) {
    this.heldKeys.add(event.keyCode);
};

Input.prototype.onKeyUp = function(event) {
    this.heldKeys.delete(event.keyCode);
};

Input.prototype._bindListeners = function() {
    var self = this;

    this.game.stage.on('mousedown', function(e) {
        self.onMouseDown(e);
    });
    this.game.stage.on('touchstart', function(e) {
        self.onMouseDown(e);
    });

    this.game.stage.on('mouseup', function(e) {
        self.onMouseUp(e);
    });

    window.addEventListener(
        "keydown", self.onKeyDown.bind(this), false
    );
    window.addEventListener(
        "keyup", self.onKeyUp.bind(this), false
    );
}

Input.prototype.isDown = function(key) {
    return this.heldKeys.has(this.keyMap[key]);
};

module.exports = Input;