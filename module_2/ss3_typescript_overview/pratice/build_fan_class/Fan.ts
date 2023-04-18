class Fan {
    private SLOW = Speed.SLOW;
    private MEDIUM = Speed.MEDIUM;
    private FAST = Speed.FAST;
    private _speed: number = this.SLOW;
    private _radius: number = 5;
    private _color: string = "blue";
    private _on: boolean = false;

    constructor(speed, radius, color, on) {
        this._speed = speed;
        this._radius = radius;
        this._color = color;
        this._on = on;
    }


    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    toString() {
        return "Fan: speed = " + this.speed + ", radius = " + this.radius + ", color = " + this.color + ", fan is "
            + (this.on ? "on" : "off");
    }
}

enum Speed {SLOW = 1, MEDIUM = 2, FAST = 3};
//    constructor(speed, radius, color, on) {
let fan1 = new Fan(Speed.SLOW, 10, "green", true);
let fan2 = new Fan(Speed.FAST, 7, "pink", false);
console.log(fan1.toString());
console.log(fan2.toString());

