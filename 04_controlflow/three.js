// for of --array specific loops

// const arr = [1,2,3,4,5,6]

// for (const num of arr){
//     console.log(num);
// }

// const greetings = "hello worlds"
// for ( const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

// maps
const map = new Map();
map.set('IN', "India")
map.set('Us', "United states")
map.set('Fr', "France")
map.set('IN', "India")


for(const [key,value] of map){
    console.log(key, ' : ', value);
    
}