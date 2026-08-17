
const user = {
    username: "prnay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome tot website`)
        console.log(this);
        
    }
}
// this --> current context
// user.welcomeMessage()
// user.username  = "sam"      // context changed so this key prints only current context
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "pranay"
//     console.log(this.username);
    
// }
//chai()

// Arrow funtions
// cannnot be used in the function
// function chai() => {
//     let username = "pranay"
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2     //explicit return
// }

// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => ( num1 + num2 )

// console.log(addTwo(3,4));

