// object litrals

const mySym = Symbol("key1")
const myUser = {
    name : "pranay",
    age: 22,
    [mySym]: "key1",
    location: "Pune",
    isLoggedin: false,
    email: "dnaktode@gmail.com"
}
console.log(myUser.email);
console.log(myUser["email"])
console.log(myUser[mySym])

myUser.email = "abs@gmail.com";
// Object.freeze(myUser);
myUser.email = "pranay@paypall.com";
console.log(myUser)

myUser.greeting = function(){
    console.lo( );
}
console.log(myUser.greeting())