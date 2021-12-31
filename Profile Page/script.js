console.log("JS active");

var alayneRequest = document.querySelector("#alayne");
var anneRequest = document.querySelector("#anne");

var profileName = document.querySelector("h3");

function accept(whoseRequest) {
    whoseRequest.remove();
}

function nameChange() {
    profileName.innerText = "JRR Tolkien";
}

var connectionArray = [2, 418];

var numConnectionRequests = document.querySelector("#connection-requests-number");
var numConnections = document.querySelector("#my-connections");

function increment(x,connections) {
    ++connectionArray[x];
    console.log(connectionArray[x]);
    connections.innerText=connectionArray[x];
}

function decrement(x,connections) {
    --connectionArray[x];
    console.log(connectionArray[x]);
    connections.innerText=connectionArray[x];
}