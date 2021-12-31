console.log("page loading...");

var likeCounts = [9,12,9];

var neilLikeSpan = document.querySelector('#neil-likes');
var nicholeLikeSpan = document.querySelector("#nichole-likes");
var jimLikeSpan = document.querySelector('#jim-likes');
console.log(likeCounts[2]);
console.log(jimLikeSpan);

function increment(x,whoLikeSpan) {
    likeCounts[x]++;
    console.log(likeCounts[x]);
    whoLikeSpan.innerText = likeCounts[x] + " like(s)";
}