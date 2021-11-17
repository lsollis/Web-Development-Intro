var cardsDiv = document.querySelector("#cards");
var currentUsername = "";

function getUsername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data) {
    var res =   `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3>
                        <p> Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

//async and await keywords go together - if await used in function must have async in title of func
async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    //fetch is a built-in function used to make an API call (requests info from a URL we provide)
    //have to use await keyword to tell javascript to wait for the response
    var coderData = await response.json(); //json: javascript object notation (tells to converto to json format)
    //console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;

    //AJAX - asynchronous javascipt and HTML
    //gives ability to update or submit data on a webpage without needing to refresh the page
}