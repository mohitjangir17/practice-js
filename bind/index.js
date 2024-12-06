class React {
    constructor() {
        this.library = 'React',
            this.server = 'https://localhost:3000/',
            console.log('initialized');

        document.querySelector('.btn')
            .addEventListener('click', this.clickHandle.bind(this))
    }

    clickHandle() {
        console.log('Clicked')
        console.log(this);

    }
}

// document.querySelector('.btn')
//     .addEventListener('click', this.clickHandle)

// function clickHandle() {
//     console.log('Clicked')
//     console.log(this)
// }

const app = new React()