const accountID = 12423
let accountEmail = "pranay@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountID = 2    // const doesnt allow to change the variable

accountEmail = "hsfdf@gmail.com"
accountPassword = "3453"
accountCity = "kolhapur"


console.log(accountID);

/*
Prefer not to use 'var' 
because of issue in block or functional scope

let ---> is block scoped and cannot be redeclared in same scope
const ---> block scoped but cannot change the value
*/
// we use table to display data in a table format 
console.table([
    accountID,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

