var count = 1;
var countElement = document.querySelector("#count");
/* document.querySelector allows us to select elements using JavaScript.
* If >1 element matches the query selector it will only return the first it finds
* If none match then "null" will be returned
*/

console.log(countElement);

function add1() {
    count++;
    countElement.innerText = "The count is " + count;
    console.log(count);
}

function subtract1() {
    count--;
    countElement.innerText = "The count is " + count;
    console.log(count);
}