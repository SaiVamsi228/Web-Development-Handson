// Primitive 

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Initialised strd as undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3321554668747878n

console.log(typeof bigNumber);


// Dynamically Typed

// Reference (Non Primitive)

// Arrays, Objects, Functions


const heros = ["shakti", "nagraj", "dog"]

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunc = function(){
    console.log('Hello World');
}

myFunc()

console.log(typeof myObj);

console.log(typeof myFunc);

console.log(typeof heros);