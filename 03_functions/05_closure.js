// function outer(){
//     let name = "Pranay";
//     function inner(){
//         console.log(name);
//     }
//     inner(); 
// }
// outer();


//closure comees in the picture
// function outer(){
//     let name = "Pranay";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }
// const myFunc = outer();
// myFunc()


function counter(){
    let count = 0;
    return function (){
        count++;
        console.log(count);
    }
}

const increment = counter();
increment()
increment()
increment()