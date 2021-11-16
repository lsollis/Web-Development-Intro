function codeToRunlater() {
    for(var i=0; i<1111; i++) {
        console.log("running: " + i);
    }
}

setTimeout(codeToRunlater, 1000); 
/*
in ms
parameters: a function to be called (callback function) and delay time in ms
the setTimeout() function will call the callback function after the specified delay

function message() {
    console.log("Delayed message");    
} 
console.log("Start");
setTimeout(message, 3000);
console.log("End");

*/

console.log("END");