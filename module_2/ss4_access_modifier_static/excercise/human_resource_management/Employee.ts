export class Employee {
    private _firstName: string
    private _lastName: string;
    private _birthDay: string;
    private _address: string;
    private _position: string;


    constructor(firstName: string, lastName: string, birthDay: string, address: string, position: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDay = birthDay;
        this._address = address;
        this._position = position;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get birthDay(): string {
        return this._birthDay;
    }

    set birthDay(value: string) {
        this._birthDay = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }
    getInfo () {
        return "Name: " + this.firstName + " " + this.lastName + ", sinh ngày: "
        + this.birthDay + ", địa chỉ: " + this.address + ", ví trị: " + this.position;

    }
}
