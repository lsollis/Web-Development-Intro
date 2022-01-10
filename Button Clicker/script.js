function hide(element) {
    element.remove();
}

function logout() {
    var change = document.getElementById("login");
    if (change.innerHTML== "Login") {
        change.innerHTML = "Logout";
    }
    else {
        change.innerHTML = "Login";
    }
    console.log("signout");
}
