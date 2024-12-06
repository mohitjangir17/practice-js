const promiseone = new Promise((resolve, reject) => {
    // db.conect 
    // reading files 
    setTimeout(() => {
        // console.log("fetched data")
        resolve()
    }, 2000)
})
// promiseone.then(() => {
//     console.log('data received')
// })


const promisetwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('data fetched')
        resolve({
            username: "Mohit",
            age: 23,
            dob: "30 Dec",
            hobby: 'code'
        })
    }, 2000)
})
// promisetwo.then((data) => {
//     console.log(data);
// })



const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        // console.log('data fetched')
        if (!error) {
            resolve({
                username: "Mohit",
                age: 23,
                dob: "30 Dec",
                hobby: 'code'
            })
        } else {
            reject(
                // console.log("ERROR:  Something went wrong while fetching data")
                'ERROR:  Something went wrong while fetching data'
            )
        }
    }, 2000)
});
// promisethree.then((data) => {
//     return data.age
// }
// ).then((age) => {
//     console.log("User age is:", age);

// }).catch((error) => {
//     console.log("Err:", error);
// }
// )


// async function getData() {
//     try {
//         const data = await promisethree
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData();

// IEFI
// (async () => {
//     try {
//         const data = await promisethree
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// })();

let url = 'https://jsonplaceholder.typicode.com/users'
async function fetchData() {
    try {
        const data = await fetch(`${url}`)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// fetchData()

; (() => {
    fetch(url)
        .then((res) => {
            const data = res.json()
            return data
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
})() 
