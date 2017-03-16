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

    this.mouseDown = false;
    this.mousePosition = null;
}


Input.prototype.onMouseDown = function(event) {
    this.mouseDown = true;
    this.mousePosition = event.data.global;
    this.game.handleMouse(event);
};

Input.prototype.onMouseUp = function(event) {
    this.mouseDown = false;
    this.mousePosition = null;
    this.game.handleMouse(event);
};

Input.prototype.onKeyDown = function(event) {
    this.heldKeys.add(event.keyCode);
};

Input.prototype.onKeyUp = function(event) {
    this.heldKeys.delete(event.keyCode);
};

Input.prototype._bindListeners = function() {
    var self = this;

    this.game.stage.on('pointerdown', function(e) {
        self.onMouseDown(e);
    });
    this.game.stage.on('touchstart', function(e) {
        self.onMouseDown(e);
    });

    this.game.stage.on('pointerup', function(e) {
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

Input.prototype.anyKeysDown = function() {
    return this.heldKeys.size > 0;
};

module.exports = Input;