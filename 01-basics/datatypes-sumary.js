// Primitive

/*
7 types:
String, Number, boolean, null, undefined, symbol, BigInt
*/

const score = 100
const scoreValue = 100.3
const isLog = false
const ousideTemp = null


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


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

