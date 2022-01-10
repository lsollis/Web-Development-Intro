console.log("loading js...");

var cookieBox = document.querySelector("#cookie-notification");

function hideCookie() {
    cookieBox.remove();
    console.log("removed cookie");
}

var maxTempsFahrenheit = [24,27,21,26];
var minTempsFahrenheit = [18,19,16,21];
var maxTempsCelsius = [-4,-3,-6,-3];
var minTempsCelsius = [-8,-7,-9,-6]

function convert(element) {
    console.log("converting the temperatures...");
    console.log(element.value);
}
function loading() {
    alert("Loading local weather...");
}

function celsius2Fahrenheit(temp) {
    return Math.round((9 / 5) * temp + 32);
}

function fahrenheit2Celsius(temp) {
    return Math.round((temp - 32) * (5 / 9));
}

function convert(element) {
    for (var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempValue = tempSpan.innerText;

        if(element.value == "°C") {
            tempSpan.innerText = fahrenheit2Celsius(tempValue);
        }
        else {
            tempSpan.innerText = celsius2Fahrenheit(tempValue);
        }
    }

    console.log(element.value);
}