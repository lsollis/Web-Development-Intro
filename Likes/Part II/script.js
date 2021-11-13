var count1 = 9;
var count2 = 12;
var count3 = 9;

var countLikesElement1 = document.querySelector("#likes1");
var countLikesElement2 = document.querySelector("#likes2");
var countLikesElement3 = document.querySelector("#likes3");


function addLike1() {
    count1++;
    countLikesElement1.innerText = count1 + " like(s)";
    console.log(count1);
}

function addLike2() {
    count2++;
    countLikesElement2.innerText = count2 + " like(s)";
    console.log(count2);
}

function addLike3() {
    count3++;
    countLikesElement3.innerText = count3 + " like(s)";
    console.log(count3);
}