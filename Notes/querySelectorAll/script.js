var pTags = document.querySelectorAll("p"); // querySelector will grab only the 1st match
//querySelectorAll will get all matches

function getColor(element) {
    console.log(element.value);
    console.log(pTags); //pTags will now be an array
    for(var i=0; i<pTags.length; i++) {
        pTags[i].style.color = element.value;
    }
}