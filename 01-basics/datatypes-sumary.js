// Primitive

/*
7 types: String, Number, boolean, null, undefined, symbol, BigInt
*/

const score = 100
const scoreValue = 100.3
const isLog = false
const ousideTemp = null


const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


// Reference type or Non primitive
// Array, Objects, Functions

const heros= ["pranay", "yash", "anish"]
let myObj = {
    name:"pranay",
    age:12,
    city:"pune",
    isEligible:true
}

const myfunction = function() {
    console.log("Hello Prnay");
}

console.log(typeof myfunction);
console.log(typeof myObj);
console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory management in js

// jitne bi primitive datatype hai vo stack memory use krte hai
// jitne bi non-primitive datatype hai vo Heap memory use krte hai
// Stack ( Primitivve ),  Heap (Non-primitive)


//stack memory
let myName = "Dnyaneshwarbhaskarnaktode"    //primitive

let anotherName = myName
anotherName = "chaiaurcode"
console.log(anotherName)

//heap memory
let userOne = {
    email: "dnaktode@gmail.com",
    upi: "user@ybl"
}

let usertwo = userOne
usertwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);


