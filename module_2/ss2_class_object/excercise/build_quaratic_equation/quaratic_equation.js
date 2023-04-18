class QuadraticEquation {
    constructor(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }

    getRoot1() {
        return (-this.b + Math.sqrt((Math.pow(this.b, 2)) - 4 * this.a * this.c)) / (2 * this.a);

    }

    getRoot2() {
        return (-this.b - Math.sqrt((Math.pow(this.b, 2)) - 4 * this.a * this.c)) / (2 * this.a);
    }

    getDiscriminant() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }


    get a() {
        return this._a;
    }

    get b() {
        return this._b;
    }

    get c() {
        return this._c;
    }
}

let qE1 = new QuadraticEquation(1, 3, 1);
let qE2 = new QuadraticEquation(1, 2, 1);
let qE3 = new QuadraticEquation(1, 2, 3);

findRoot(qE1);
findRoot(qE2);
findRoot(qE3);

function findRoot(quadraticEquation) {
    let delta = quadraticEquation.getDiscriminant();
    if (delta < 0) {
        console.log("The equation has no roots.");
    } else if (delta === 0) {
        console.log("The equation has one root: " + quadraticEquation.getRoot1());
    } else {
        console.log("The equation has root 1: " + quadraticEquation.getRoot1());
        console.log("The equation has root 2: " + quadraticEquation.getRoot2());
    }
}
