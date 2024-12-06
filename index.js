"use strict"
// function cycle(...args) {
//     let index = 0
//     return () => {
//         const value = args[index]
//         index = (index + 1) % args.length
//         return value
//     }
// }

// const onOffFn = cycle('on', 'off');
// console.log(onOffFn());
// console.log(onOffFn());
// console.log(onOffFn());
// console.log(onOffFn());



// for (let i = 2; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(` ${i}*${j} = ${i * j}`);
//     }
// }

// let myNumbers = 56
// switch (myNumbers) {
//     case 23:
//         console.log(`Not my number`);
//         break;
//     case 56:
//         console.log(`My number ${myNumbers}`);
//         break;
//     default: console.log(`Not intrested`);
//         break;
// }

// const numbers = [2, 2, '2', '3'];

// const countNumOcc = () => {
//     if (!Array.isArray(numbers)) {
//         console.log('Not an array');
//     } else {
//         return numbers.reduce((acc, curr) => {
//             if (typeof (currNum) != "string") {
//                 curr.toString()
//                 if (acc[curr]) {
//                     acc[curr]++
//                 } else {
//                     acc[curr] = 1
//                 }
//                 return acc
//             } else {
//                 if (acc[curr]) {
//                     acc[curr]++
//                 } else {
//                     acc[curr] = 1
//                 }
//                 return acc
//             }
//         }, {})
//     }
// }
// console.log(countNumOcc())

// Data types************************
// // constant 
const name = 'Mohit'

// // variable
let age = 34

// // Not to use but variable too 
var city = 'jaipur'
// name = 'jangir'
age = 33
city = 'Bangluru'
// console.table([name, age, city])
// ***************************


// Data types *****************************

// // premitive
let number = 34758
let string = "Mohit"
let boolean = true
let bigInt = BigInt(11335343534534)
undefined
let nullish = null
const symbol = Symbol("hello")
// // Non premitive
const obj = { any: 'Object' }

// console.log(typeof number)
// console.log(typeof string)
// console.log(typeof boolean)
// console.log(typeof bigInt)
// console.log(typeof undefined)
// console.log("Null value is:", typeof nullish)
// console.log(typeof symbol)
// console.log(typeof obj)
// ***************************************

// String Conversions *********************

// const string = String(null)

// const number = 3

// const boolean = Boolean(null)
// // console.log(typeof string, typeof number);
// console.log(string);

// ****************************************

// Prefix postfix ***************************

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// ***************************************

// comparisons in js 

// console.time('data')
// console.table([
//     null >= 0,
//     null == 0,
//     null === 0,
// ])

// console.table(
//     [undefined == 0, undefined >= 0, , undefined <= 0]
// )
// console.timeEnd('data')
// *****************************************

// Memory allocation in js *************************

//  Stack => Premitive datatypes (Number , string , Boolean , BigInt , Symbol , null , undefined) => copy of declaired variable is provided.

let userEmail = 'mohitjangir@gmail.com'
let anotherUserEmail = userEmail

anotherUserEmail = 'mohitjangir17@gmail.com'  // updating the second variable data //

/*so the anotherUser email value is changed but not the original user email is changed coz only a copy of orginal is provided not the ref. */
// console.table([userEmail, anotherUserEmail])  

// Heap => Non premitive data types => Reference from heap memory is provided

let user = {
    username: 'mohitjangir',
    age: 23
}

let user2 = user
user2.username = 'm0hit'

/* so here in heap memory case (non premitive data types ) we got the original in when we were changing the user2 from user itself and it changed the
coz of the referece we had not copy */
// console.table([user, user2])
// ***************************************************

// Strings ********************************************

const str = 'I am a string'
const newStr = new String('I am a string')
const v = 'v'
const u = 'V'

// console.log(str[2])
// console.log(newStr[0])
// console.log(v.toLowerCase() === u.toLowerCase())
function changeToLower(str1) {
    return str1.toLowerCase()
}
// console.log(changeToLower(str))
// console.log(changeToLower(str) == newStr.toLowerCase())

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"
// console.log(str.charAt(2))
// console.log(str.charCodeAt(3), str.charAt(3))


// let greet = 'Hello '
// let nameUser = 'Krishna '
// let salutation = 'have a nice day '

// function greeting(greet, nameUser, salutation) {
//     // return `${greet}, ${nameUser} - ${salutation}`
//     return greet.concat(nameUser, salutation)
// }

// console.log(greeting(greet, nameUser, salutation))

// console.log(str.toLowerCase().includes('i am'))

const paragraph = "I think Ruth's dog is cuter than your dog!";

// for (let index = 0; index < paragraph.length; index++) {
//     console.log(index, paragraph[index])
// }

const searchTerm = 'th';
const indexOfFirst = paragraph.indexOf(searchTerm);
const IndexLast = paragraph.lastIndexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

// console.log(
//     paragraph.match(/s/)
// );

// console.log(paragraph.localeCompare(34))


// for (let index = 0; index < 6; index++) {
//     let start = ''
//     console.log(start.padEnd(index, '*'))
// }


const userMobile = 9166927513

let hasedMobile = userMobile.toString().slice(-4).padStart(10, '*')

// console.log(`otp sent, Mobile number ending with ${hasedMobile}`)

let correctedNumber = userMobile.toString().replaceAll(/1/g, 5) //g for global to allpply globlayy in the string 
// console.log(correctedNumber);

// console.log(hasedMobile.slice(6, 10))  //range to slice (last 4 digits)

const token = 'Bearer- 34b5kk3l5j544kjSd8f8fs8dufsDDi87'
let splitted = token.split('Bearer- ')
// console.log(`Access token: ${splitted[1]}`)

const forStart = 'Saturday Afternoon plans';
// console.log(forStart.startsWith('Sat')); // Expected output: true
// console.log(forStart.startsWith('urday', 3)); // Expected output: false
let toSplitFor3 = forStart.split(' ')
// console.log(`${toSplitFor3[1].startsWith('night') ? 'yes plan is for night' : 'Not plan is not for night its for day '}`)

// Practiceee ****************

// A function to convert a number to a string and vice versa.

function convertData(value) {
    if (typeof value == 'number') {
        return `The type of ${value} is ${typeof value.toString()}`
    } else if (typeof value == 'string') {
        return `The type of ${value} is ${typeof parseInt(value)}`
    } else {
        return `${value} is not a number nor string`
    }
}
// console.log(convertData(null))

// Implement a function that takes a string and a word to search for and replaces it with another word.
function searchTermAndReplace(str, searchWord, replace) {
    if (typeof str !== 'string' || str == '') {
        return "Please enter a valid string"
    } else if (typeof searchWord !== 'string' || searchWord == '') {
        return "Please enter a valid string to search"
    } else if (typeof replace !== 'string' || replace == '') {
        return "Please enter a valid string to replace"
    }
    else {
        let matched = str.includes(searchWord)
        return matched ? str.replace(searchWord, replace) : "No match found"
    }
}
// console.log(searchTermAndReplace("hello this is word", 'hello', "hola!!"))

// Write a function that converts a sentence to "Title Case" (e.g., "this is a sentence" becomes "This Is A Sentence").
function upperCaseTitle(val) {
    if (typeof val !== 'string') {
        return "Not a valid string"
    }
    let i = 0
    let realString = String(val).split(' ')
    for (i in realString) {
        realString[i] = realString[i]?.charAt(0).toUpperCase() + realString[i]?.slice(1)
    }
    return realString.join(' ')
}
// console.log(upperCaseTitle("z fd"))

// Create a function that takes a number and returns a string in currency format

function changeToCurrency(val) {
    let num = Number(val).toLocaleString('En-In')
    return num
}
// console.log(changeToCurrency('233332'))

// Write a function that takes a string and returns the number of characters in it
const char = "hello world"
// console.log(char.replace(' ', '').length)

// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
const vowels = 'hello this is me'
// console.log(vowels.match(/[aeiou]/g).length)

// Given a sentence, write a function that returns a string of the first letter of each word.
const extractFc = "Hello World, i am chitti robo"
function eFc(val) {
    let str = String(val).split(' ')
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0)
    }
    return str.join('')
}
// console.log(eFc(extractFc))

// Write a function that takes a number and returns "Odd" if the number is odd and "Even" if the number is even.
const oddEven = (number) => {
    let cNum = Number(number)
    // console.log(cNum)
    if (isNaN(cNum)) {
        return "Not a Number please enter a valid number"
    } else {
        let result = cNum % 2
        if (result == 0) {
            return `The number ${cNum} is even`
        } else {
            return `The number ${cNum} is odd`
        }
    }
}
// console.log(oddEven('34'))

// Identify Data Type: Create a function that takes a value and returns a string indicating the data type of the value 

function typeId(value) {
    let dataType = typeof value
    switch (dataType) {
        case 'string':
            console.log(`${value} is string`)
            break;
        case 'number':
            console.log(`${value} is number`)
            break;
        default:
            break;
    }
}

// typeId(2)

// Write a function that takes two numbers and a string representing an operation

function calc(valueA, valueB, operation) {
    let a = Number(valueA)
    let b = Number(valueB)
    let result = undefined
    console.log(typeof operation)

    if (isNaN(a) || isNaN(b)) {
        return "Please enter valid values"
    } else if ((operation == '+') || (operation == '-') || (operation == '*') || (operation == '/')) {
        switch (operation) {
            case "+":
                result = `The sum of ${a} + ${b} = ${a + b} `
                break;
            case "-":
                result = `The subtraction of ${a} - ${b} = ${a - b}`
                break;
            case "*":
                result = `The multiplication of ${a} * ${b} =  ${a * b}`
                break;
            case "/":
                result = `The divison of ${a} / ${b} = ${(a / b).toPrecision(2)}`
                break;

            default:
                break;
        }
    } else {
        return "Enter a valid operation. i.e.= + , - , * , / "
    }
    return result
}
// console.log(calc("2", '3', '/'))

// Write a function that converts a temperature from Celsius to Fahrenheit, and another function that converts Fahrenheit to Celsius.
function tempCon(celcius) {
    let val = Number(celcius)
    if (isNaN(val)) {
        return "Enter valid temprature"
    }
    return ` The current temp is ${((val * (9 / 5)) + 32).toPrecision(4)
        } F`
}
// console.log(tempCon(23.43))

//Maths **********************

// console.log(Math.abs(-2))

// console.log(Math.floor((Math.random() * 100 + 1)))

// Dates *************************************

// const date = new Date()
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString())
// console.log(date.toString())
// console.log(date.toTimeString())
// console.log(date.toUTCString())
// console.log(Math.floor(Date.now() / 1000))

// Arrays ***********************************

const myArr = [1, 3, 5, 3, 5, 7, 8, 4]
const myArr1 = new Array(1, 3, 5, 3, 5, 7, 8, 4)

// console.log(myArr)
// console.log(myArr1)
const fruits = []

fruits.push('banana', 'apple', 'Javchip')
fruits[5] = 'pineapple'
// console.log(fruits)

// console.log(Object.keys(fruits))
let keys = (fruits.keys())

// for (let item of keys) {
//     console.log(item)
// }

// const slice = fruits.slice(1, 3)
// console.log(slice)
// console.log(fruits)

// console.log(Array.from(fruits, (fruit) => fruit == undefined ? `${fruit} is not fruit` : `${fruit} is a fruit`))
const secondLast = new Array(34, 39, 3, 32, 34, 23)

// console.log(secondLast.at(secondLast.length - 2));

// let entI = secondLast.entries()

// console.log(entI.next())
// console.log(entI.next())
// console.log(entI.next())

// let valuelessthan = (value) => value < 40
// console.log(secondLast.every(valuelessthan))
// const filteredArray = secondLast.filter((num) => num == 32 ? '' : num)
// console.log(filteredArray)
// console.log(secondLast)

const arr1 = [1, 2, 3];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : num));
// console.log(result);
// console.time("map.filter")
// console.log(fruits.map((fruit) => fruit).filter((fruit) => fruit == 'apple'))
// console.timeEnd('map.filter')
// console.time('filter')
// console.log(fruits.filter((fruit) => fruit == "apple"))
// console.timeEnd('filter')

// objectsss *************************************************
// const target = { a: 1, b: 2 };
// const source = { d: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// console.log(returnedTarget);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true


const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman} ${this.age}`);
    },
};

const me = Object.create(person);

me.age = 'buddha'
// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
// console.log(me.isHuman)
// me.printIntroduction();

const object1 = {
    a: 'somestring',
    b: 42,
};

// console.log(Object.entries(object1))

// for (let entry of Object.entries(object1)) {
//     console.log(entry[0] + ' : ' + entry[1])
// }

console.log(typeof Object.entries(object1)) // change objects to individual iteralble array like objects
// console.log(typeof fruits);


const map = new Map(Object.entries(object1));
// console.log(object1);


const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

// let grouped = Object.groupBy(inventory, ({ type }) => type)
// *****************************************************


// functions ********************************************

function calculation(...numberspassed) {

    const itr = Object.keys(numberspassed)

    for (let val in itr) {
        console.log(val)
    }
}

console.log(calculation(32, 34, 32
))