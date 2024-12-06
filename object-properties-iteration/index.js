console.log('Hello');


const pro = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(pro);


const myObje = {
    username: "Mohit",
    email: "mohitt@gmail.com"
    , loginCount: 4
}

const myObjProps = Object.getOwnPropertyDescriptor(myObje, 'loginCount')
console.log(myObjProps)
Object.defineProperty(myObje, "loginCount", {
    // enumerable: false,
    writable: false
})

myObje.loginCount = 45
for (let [keys, value] of Object.entries(myObje)) {
    console.log(keys, value)
}


// console.log("loginCount", Object.getOwnPropertyDescriptor(myObje, 'loginCount'));
