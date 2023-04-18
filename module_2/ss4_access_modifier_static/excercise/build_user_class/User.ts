class User {
    protected _name: string;
    protected _email: string;
    public _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: number) {
        this._role = value;
    }

    isAdmin() {
        return this._role == 1 ? "admin" : this._role == 2 ? "user" : "not found";
    }

    getInfo() {
        return "Name: " + this.name + ", email: " + this.email + ", role: " + this.isAdmin();
    }
}

let users = [];
let user1 = new User("Trung", "htr@gmail.com", 1);
let user2 = new User("Toan", "htoan@gmail.com", 2);
users.push(user1);
users.push(user2);
users.forEach(showUser);

function showUser(user: User) {
    console.log(user.getInfo())
}
