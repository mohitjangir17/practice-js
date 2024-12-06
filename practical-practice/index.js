

// document.body.style.backgroundColor = 'black'
// find largest number 
// let arr = [3, 6, 2, 54, 7, 0, 65]
// arr.sort((a, b) => b - a)
// // console.log(sortedArr)
// console.log(`largest number in arr:`, arr[0])



// Reverse a string without using built-in methods.
let string = "Hello"
function rev() {
    let reversStr = ''
    for (let i = string.length - 1; i = 0; i--) {
        // console.log([i], string[i], reversStr)
        reversStr += string[i]
    }
    return reversStr
}
// console.log(rev())



// Flatten a nested array.
let flatarr = [5, 34, 45, 2, 345, [4, 3, 6, 8], [6, [4, 6], 89, 0]]
function flatArr(arr) {
    if (!Array.isArray(arr)) {
        return 'Not an array'
    }
    let flattenedArr = []
    for (let i = 0; i < arr.length; i++) {
        flattenedArr = flattenedArr.concat(flatArr(arr[i]));
    }
    return flattenedArr
}
// function flatArr(arr) {
//     if (!Array.isArray(arr)) {
//         return 'Not an array'
//     }
//     let flattenedArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 flattenedArr.push(arr[i][j])
//             }
//         } else {
//             flattenedArr.push(arr[i])
//         }
//     }
//     return flattenedArr
// }
// console.log(flatArr(flatarr))
// console.timeEnd()




// Write a function to remove duplicates from an array.
let dupArr = [3, 5, 3, 4, 6, 6, 5]
function filterDup() {
    let uniqueArr = new Set([])
    for (let i = 0; i < dupArr.length; i++) {
        // if (uniqueArr.has(dupArr[i])) {
        //     console.log('dup dectected')
        // } else {
        //     uniqueArr.add(uniqueArr[i])
        // }
        uniqueArr.add(dupArr[i])
    }
    console.log(Array.isArray(uniqueArr));

    return uniqueArr
}
// console.log(filterDup())
const setnew = new Set()
setnew.add('hello')
setnew.add('WIDOW');
// console.log(typeof setnew,)


// // creating deepbounce functions 
// let apiSearch = function (query) {
//     console.log('Query is:', query)
// }
// let deepbounce = function (func, delay) {
//     let timeout;
//     return function (...args) {
//         clearInterval(timeout)
//         timeout = setInterval(() => {
//             func.apply(this, args)
//             setTimeout(() => {
//                 clearInterval(timeout)
//             }, 1000)
//         }, delay);
//     }
// }
// let deepbounceSearch = deepbounce(apiSearch, 700)
// const inputSearchBox = document.querySelector('#searchQuery')
// inputSearchBox.addEventListener('input', (e) => deepbounceSearch(e.target.value))



//  Write a function to check if a string is a palindrome (reads the same forward and backward).
function checkPal(str) {
    let revStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return str === revStr
}
// console.log(checkPal('racecar'))



// Object iteration 
const salaries = { John: 100, Ann: 160, Pete: 130 };
// function totalSalaries(salaries) {
//     let total = 0
//     for (const key in salaries) {
//         total = total + salaries[key]
//     }
//     return `Total of salaries is: ${total}`

// }
// console.log(totalSalaries(salaries))
function totalSalaries(salaries) {
    const total = Object.values(salaries).reduce((sum, salaries) => {
        return sum += salaries
    }, 0)
    console.log(total)
}
// totalSalaries(salaries)


//  Create a function counter that returns a function. Each time the returned function is called, it should increase and return a count.
function counter() {
    let counter = 0
    function count() {
        counter++
        console.log(counter)
    }
    return count;
}
const myCounter = counter();
// myCounter(); // 1
// myCounter(); // 2
// myCounter(); // 3



// Write a function to filter out all falsy values(false, 0, "", null, undefined, NaN) from an array.
const filterArr = [0, "hello", false, undefined, 42]
// console.log(filterArr.filter((val) => val))


// Simulate a delayed API call using setTimeout and Promises. Create a function fakeApiCall that takes a message and resolves it after 2 seconds.
function fakeApiCall(str) {
    const newPromise = new Promise((resolve, reject) => {
        let error = false
        if (!error) {
            setTimeout(() => {
                resolve(str)
            }, 2000)
        } else {
            reject('Error: There is some error')
        }
    })
    return newPromise
}
// fakeApiCall("Hello").then((response) => console.log(response)).catch((error) => console.log(error));



// Create a constructor function Person with a method sayHello that logs "Hello, I am <name>". Create a Student that inherits from Person and adds a study method.
function Student(fullname, age, status) {
    this.fullname = fullname,
        this.age = age,
        this.status = status
}
Student.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.fullname}`)
}
Student.prototype.study = function study() {
    console.log(`I am ${this.status}`)
}
const student = new Student("Alice", 23, 'studying');
// student.sayHello(); // "Hello, I am Alice"
// student.study(); // "I am studying"


// Write a function to sort an array of numbers in ascending order without using the built-in .sort() method.
const arrTwoZeroSix = [3, 5, 7, 2, 6]
function sortArray(arr) {
    let sortArray = arr
    if (Array.isArray(arr)) {
        // let sortedArr = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++)
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
        }
    }
    return sortArray
}
// console.log(sortArray(arrTwoZeroSix));


// Write a function to calculate the sum of the digits of a given number.
function sumOfDigits(num) {
    return String(num).split('').reduce((total, crr) => {
        return total + Number(crr)
    }, 0)
}
// console.log(sumOfDigits(12849578933))


// Write a function to count the occurrences of each character in a string
function freqCounter(str) {
    let unq = new Set(str)
    unq.forEach((char) => {
        let count = 0
        for (const c of str) {
            if (char === c) {
                count++
            }
        }
        console.log(` ${char} : ${count} `)
    }
    )
}
// freqCounter('hello');


// Reverse Words in a String
function RevWord(str) {
    const words = String(str).split(' ')
    // console.log(words)
    let result = ''
    for (let i = words.length - 1; i >= 0; i--) {
        result += `${words[i]} `
    }
    return result
}
// console.log(RevWord('Hello world'))


// Write a function to find two numbers in an array that add up to a target sum.

function addToTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            } else {
            }
        }
    }
    return null
}
// console.log(addToTarget([2, 7, 11, 15], 18))


// 
const mergeArray = (arr1, arr2) => {
    let mergedArray = arr1.concat(arr2)
    return mergedArray.sort((a, b) => a - b)
}
// console.log(mergeArray([1, 3, 5], [2, 4, 6]))

function uniqueArray(arr) {
    return [...new Set(arr)]
}
// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]))


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.table([left, right, mid])

        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Shift the left pointer
        } else {
            right = mid - 1; // Shift the right pointer
        }
    }

    return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2));

// filter out unique values 
const users = [
    { id: 1, username: "john_doe" },
    { id: 2, username: "jane_doe" },
    { id: 3, username: "john_doe" },
    { id: 4, username: "alex_smith" },
    { id: 5, username: "jane_doe" }
];
const seenUsernames = new Set();
const filteredUsers = users.filter(user => {
    if (seenUsernames.has(user.username)) {
        return false; // Skip duplicates
    }
    seenUsernames.add(user.username);
    return true;
});
// console.log(filteredUsers);
// console.log(seenUsernames);


// rest spread
let names = ['mohit', 'vivek', 'rajesh']

function getnames() {
    console.log(...names)
}
// getnames()

let num = [0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5]
const unqIdentifier = function (nums) {
    if (nums.length == 0) { return 'Array has less values' }
    let k = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
    // return num.splice(0, k)
}
// console.log(unqIdentifier(num))

let rmArray = [0, 1, 2, 3, 2, 3, 0, 4, 2]
let removeElement = function (nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }

    }
    return k
};
// console.log(removeElement(rmArray, 2))
// console.log(rmArray)

let fullstring = 'sadbutsad'
let inc = 'sad'
let strStr = function (haystack, needle) {
    // if (haystack.match(`${inc}`)) {
    return haystack.indexOf(`${needle}`)
    // }
    return -1
};
// console.log(strStr(fullstring, inc))


var searchInsert = function (nums, target) {

    if (nums.indexOf(target) >= 0) {
        return nums.indexOf(target)
    } else
        nums.push(target);
    // console.log(nums)
    nums.sort((a, b) => a - b)
    return nums.indexOf(target)

};

// console.log(searchInsert([1, 3, 4, 5, 6], 5))

const newArray = []
// const anotherArray =  new Array()
newArray.push(0);
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
// console.log(newArray[0]);
// newArray[0] = 55


console.log(newArray);
// newArray.shift()
// newArray.unshift(5)
// newArray.splice(newArray.length - 1, 0, 55)
// newArray.sort((a, b) => b - a)
// const index = newArray.findIndex((a) => a < 3)
// const find = newArray.find()
// newArray.splice(newArray.length - 1, 0, 55)
console.log(newArray);
// const sliced = newArray.slice(1, 4)
// console.log(index)

// const doubled = newArray.map((num) => num * 2)
// const evenNum = newArray.filter((num) => num % 2 == 0)
// const sumOfAll = newArray.reduce((acc, crr) => {
//     return acc = acc + crr
// }, 0)
// console.log(sumOfAll)

const myFavFruits = [];
myFavFruits.push('apple');
myFavFruits.push('banana');
myFavFruits.push('grapes');
myFavFruits.push('pomogranate');
myFavFruits.splice(myFavFruits.length - 1, 1, 'berries')
myFavFruits.join()
myFavFruits.sort((a, b) => {
    if (a > b) {
        return 1
    } if (a < b) {
        return -1
    }
    return 0

})
// myFavFruits[3] = 'berries'
// console.log(myFavFruits)

// for (num of newArray) {
//     console.log(num)
// }


function print(num) {
    for (let i = num; i > 0; i--) {
        let str = ''
        for (let j = num; j > num - i; j--) {
            str += j
        }
        console.log(str)
    }
}
print(5)