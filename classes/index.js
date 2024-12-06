/*
class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }
    showName() {
        return `The username is ${this.username}`
    }
}

const newuser = new User('m0hit', 'mohitjangir17@gmail.com', 'password')
console.log(newuser);
console.log(newuser.showName());
*/

// bts
function User(username, email, password) {
    this.username = username,
        this.email = email,
        this.password = password
}

User.prototype.showName = function () {
    return `The username is ${this.username}`
}

const newuser = new User('dallaghoghad', 'dalla14@gmail.com', 'password')
console.log(newuser);
console.log(newuser.showName());

// inheritence 
class User2 {
    constructor(username, email) {
        this.username = username,
            this.email = email
    }

    static logME() {
        console.log(`Hello ${this.username}, you are logged in successfully!!!`)
    }
}

class Admin extends User2 {
    constructor(username, email) {
        super(username),
            this.email = email
    }

    deleteUser() {
        return `${this.username} user is deleted`
    }
}

const deleteUser = new Admin('Chai', 'chai@gmail.com')
console.log(deleteUser.deleteUser())
