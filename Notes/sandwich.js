var bread = "wheat";
var protein = ["turkey", "bacon"];
var cheese = "provolone";
var condiments = ["arugula", "tomatoes", "mayo"];

var sandwich1 = { //java object like a dictionary, has key: value pairs
    bread: "wheat",
    protein: ["turkey", "bacon"],
    cheese: "provolone",
    condiments: ["arugula", "tomatoes", "mayo"],
    display: function() { //methods can be defined in objects as well; give them action
        console.log("The bread is: " + this.bread); //using this prevents having to retype variable name many times
        console.log("The protein is: " + this.protein);
        console.log("The cheese is: " + this.cheese);
        console.log("The condiments are: " + this.condiments);
    }
}

console.log(sandwich1.bread);

sandwich1.display();

new Date();
new Date().toLocaleTimeString();