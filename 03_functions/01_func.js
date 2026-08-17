
function sayMyname(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}

//sayMyname()

// function addTwo(num1,num2){
//     console.log(num1+num2);
// }

function addTwo(num1,num2){
    return num1+num2;
}

const result = addTwo(2,3);
//console.log("Result",result);

function loginUser(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`;
}
//console.log(loginUser("pranay"));
//console.log(loginUser());

// rest operator ---> its use for many items or entries at once
// its used in the ecom websites
function calculateCartprice(...num1){
    return num1;
}
//console.log(calculateCartprice(200,300,500))

const user = {
    username: "pranay",
    price:199
}

//please handle types
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject(
    {
        username:"sam",
        price:300
    }
)

const myNewarray =[200,300,3003,322];
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewarray)) 
// console.log(returnSecondValue([200,300,400,1000,500]));

