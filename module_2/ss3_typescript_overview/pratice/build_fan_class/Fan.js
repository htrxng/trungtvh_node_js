var Fan = /** @class */ (function () {
    function Fan(speed, radius, color, on) {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this._speed = this.SLOW;
        this._radius = 5;
        this._color = "blue";
        this._on = false;
        this._speed = speed;
        this._radius = radius;
        this._color = color;
        this._on = on;
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        return "Fan: speed = " + this.speed + ", radius = " + this.radius + ", color = " + this.color + ", fan is "
            + (this.on ? "on" : "off");
    };
    return Fan;
}());
var SLOW = 1;
var MEDIUM = 2;
var FAST = 3;
//    constructor(speed, radius, color, on) {
var fan1 = new Fan(FAST, 10, "green", true);
var fan2 = new Fan(MEDIUM, 7, "pink", false);
console.log(fan1.toString());
console.log(fan2.toString());
//tsc -t es5 script.ts
