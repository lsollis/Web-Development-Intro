function login(element) {
    if (element.innerText == "Login") {
        element.innerText="Logout";
    }
    else if (element.innerText == "Logout") {
        element.innerText="Login";
    }
}

function hide(element) {
    element.remove();
}