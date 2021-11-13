var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(element) {
    //element.style.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src="cat.jpeg";
    console.log(animalImg.src);
}

function pickDog(element) {
    element.classList.add("btn");
    animalImg.src="dog.jpeg";
    console.log(animalImg.src);
}

/* We can modify HTML we select with .innerText
* var h3 = document.querySelector("h3");
* h3.innerText="New Title";
* Can alter element attributes, ie change img src from one file
* to another.
* <img src = "cat.jpg" alt="pet" id="pet-img">
* <button onclick="switchImg()">Switch</button>

* var petImg = document.querySelector("#pet-img");
* function switchImg() {
    petImg.src = "dog.jpg"
}

Changing an element's style
* <button onclick="setActive(this)">Switch to dark mode</button>
* function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
    element.classList.add("dark-mode");
}

CSS styles will hae to be rewritten without hyphenation, ie
marginLeft instead of margin-left

an element is allowed to have multiple classes - can treat the classList
like an array

use classList with .add and .remove to add and remove classes to the list

<button onclick="setActive(this)">Switch to dark mode</button>

function setActive(element) {
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}
*/