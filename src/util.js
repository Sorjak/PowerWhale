var Util = {
	lerp : function(a, b, t) {
		return a + t * (b - a);
	},

    bezierQuad : function(p1, p2, p3, t) {
        x = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * p2.x + t * t * p3.x;
        y = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * p2.y + t * t * p3.y;

        return {x : x, y : y};
    },

    bezierCube : function(p1, p2, p3, p4, t) {
        x = (1-t)*(1-t)*(1-t)*p1.x + 3*(1-t)*(1-t)*t*p2.x + 3*(1-t)*t*t*p3.x + t*t*t*p4.x;
        y = (1-t)*(1-t)*(1-t)*p1.y + 3*(1-t)*(1-t)*t*p2.y + 3*(1-t)*t*t*p3.y + t*t*t*p4.y;

        return {x : x, y : y};
    }
}

module.exports = Util;