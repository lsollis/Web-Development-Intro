Booleans

var isSunny = true;
var isRaining = false;

var number = 5;
console.log(number < 3) // this will log 'false'

if(isSunny) {
    console.log("Wear sunscreen");
}

if(isRaining) {
    console.log("Bring an umbrella");
}

var today = new Date();
if(today.getDay() == 1) {
    console.log("I hate Mondays!");
} else {
    console.log("Today is alright!");
}

var temperature = 60; // let's assume this is degrees Fahrenheit
var isRaining = false;
    
if(temperature >= 50) {
    if(!isRaining) {
        console.log("This is a good day to go for a walk!");
    }
}

var is5even = 5 % 2 == 0;
var is500even = 500 % 2 == 0;
    
console.log(is5Even);   // false
console.log(is500Even); // true

Loops

for(var i=0; i<3; i++) {
    console.log(i);
}

for(var i=10; i>0; i--) {
    console.log(i);
}

var i = 0;
while(i<3) {
    console.log(i);
    i++;
}

Arrays
- store whatever you want 
- access with an index 

.length()
.push()
.pop()

var purchasesWeekFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
    // ...more purchases
];

console.log("the first purchase cost: $" + purchasesWeekFeb15[0]);

var numberOfPurchases = purchasesWeekFeb15.length;

var total = 0;
for(var i=0; i<purchasesWeekFeb15.length; i++) {
    total += purchasesWeekFeb15[i];
}
console.log("The total spent was: $" + total);

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    user.push("jello");    
    console.log(user);    // ["Dwight", "Schrute", "beetsbears@battlestar.com", "jello"]

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    user.pop();    
    console.log(user);    // ["Dwight", "Schrute"]

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    console.log(user.length);    // 3    
    user.pop();    
    console.log(user.length);    // 2