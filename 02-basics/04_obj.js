
// const user = new Object();
const user = {}

user.id = "121abc";
user.name = "pranay";
user.isLoggedIn = false;


//console.log(user)
const regularUser = {
    name: "pranay",
    email: "prnay@gmail.com",
    fullname: {
        userFullname:{
            firstname:"pranay",
            lastname:"naktode"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:"a", 2: "b"};
const obj2 = {1:"3", 4: "b"};

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1, obj2);

const obj3 = {...obj1, ...obj2};
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "ora@gmail.com"
    },
    {
        id: 2,
        email: "ora@gmail.com"
    },
    {
        id: 3,
        email: "ora@gmail.com"
    }
]

users[1].email
//console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLoggedIn'))

const course = {
    name: "js hindi",
    price:"999",
    instructor: "hitesh"
}
// object de structure

const {instructor: i} = course
//console.log(i)

