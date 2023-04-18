import {Circle} from "./Circle";

class Cylinder extends Circle {
    private _height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getVolume() {
        return super.getArea() * this._height;
    }
}

let cylinder = new Cylinder(5,"blue", 10);
console.log(cylinder.getVolume());
