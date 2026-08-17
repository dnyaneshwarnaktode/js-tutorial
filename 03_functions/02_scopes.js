
//sccopes: local and global
if (true){
    let a = 10;
    const b=20;
    var c =30;
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "parnay";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}

// one()
if (true) {
    const username = "pranay"
    if( username === "pranay"){
        const web = " youtube";
        //console.log(username + web);
    }
    //console.log(web);
}
//console.log(username)

console.log(addOne(5));
function addOne(num){
    return num+1;
}

//Hoisting in JavaScript 
// means JavaScript processes certain declarations before executing the code, 
// so you can sometimes use a variable or function before the line where it appears.

console.log(addTwo(5))
const addTwo = function(num){
    return num+2;
}
