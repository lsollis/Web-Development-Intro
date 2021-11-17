//primitive dataTypes:
//int, string, float, boolean

//data structures:
//arrays [true, "meatballs"]
//objects (dictionaries) objectName {"key"  : true; "key2" : "Meatballs"}

var myArr = [true, "meatballs"];

var myObj = { "bool": true, "string": "Meatballs"};

console.log(myArr[1]);
console.log(myObj["food"]);//outputs value attached to key
console.log(myObj.food);//outputs value attached to key

//object keys are always strings
var a = 10;
var b = 5;
if(element.hasOwnProperty("src")) {
    //things like images will run here, not divs, et cetera
    console.log("yup");
}
else {
    console.log("nope");
}