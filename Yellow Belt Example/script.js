
function like(id) {
    document.getElementById(id).innerHTML++;
    /* document.querySelector("#" + id).innerHTML++; */

}

function join(element) {
    document.getElementById("class-counter").innerHTML++;
    element.remove();
}

var joinBtns = document.querySelectorAll(".join-button");

for(var i = 0; i < joinBtns.length; i++) {
    joinBtns[i].addEventListener("click", function(){join(this)});
}