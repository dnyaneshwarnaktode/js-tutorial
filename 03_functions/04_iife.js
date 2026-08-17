// IIFE --  Immediately Invoked funnctions Expressions 

(function chai() {
    // named IIFE
    console.log(`DB connected`);
    
}) ();

( (name) => {
    console.log(`DB connected two ${name}`);
}
) ('Pranay');