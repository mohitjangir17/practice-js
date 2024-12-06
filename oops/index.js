const User = function (username, age, loginCount,) {
    this.username = username,
        this.age = age,
        this.loginCount = loginCount
    // return this
}


const userMohit = new User("mohit", 24, 8)
const userAshish = new User('Ashish', 24, 67)

// console.log(userMohit, userAshish);


function SetUsername(username) {
    this.username = username
    console.log('Set the username')
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username)
    this.password
    this.email = email
    this.password = password
}


const newUser = new CreateUser("M0hit", "mohitjangir17@gmail.com", "password")
// console.log(newUser.username)