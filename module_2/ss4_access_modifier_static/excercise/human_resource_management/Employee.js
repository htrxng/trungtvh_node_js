"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, birthDay, address, position) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDay = birthDay;
        this._address = address;
        this._position = position;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "birthDay", {
        get: function () {
            return this._birthDay;
        },
        set: function (value) {
            this._birthDay = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getInfo = function () {
        return "Name: " + this.firstName + " " + this.lastName + ", sinh ngày: "
            + this.birthDay + ", địa chỉ: " + this.address + ", ví trị: " + this.position;
    };
    return Employee;
}());
exports.Employee = Employee;
