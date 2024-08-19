let userName: string = 'Jack'
let hasLoggedIn = true

// Messes up in JS, stopped in TS
//hasLoggedIn += userName


let myRegex: RegExp = /foo/

type myPerson = {
    first: string,
    last: string
}

const myPer: myPerson = {
    first: 'jack',
    last: 'jackson'
}