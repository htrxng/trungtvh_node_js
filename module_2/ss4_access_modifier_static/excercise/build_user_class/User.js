var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.isAdmin = function () {
        return this._role == 1 ? "admin" : this._role == 2 ? "user" : "not found";
    };
    User.prototype.getInfo = function () {
        return "Name: " + this.name + ", email: " + this.email + ", role: " + this.isAdmin();
    };
    return User;
}());
var users = [];
var user1 = new User("Trung", "htr@gmail.com", 1);
var user2 = new User("Toan", "htoan@gmail.com", 2);
users.push(user1);
users.push(user2);
users.forEach(showUser);
function showUser(user) {
    console.log(user.getInfo());
}
