var count = 0;
var countLikesElement = document.querySelector("#likes");

function addLike() {
    count++;
    countLikesElement.innerText = count + " like(s)";
    console.log(count);
}