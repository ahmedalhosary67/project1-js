

// colecting formation

// get slider items | Array.form [es6 features]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slides
var slideCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// get slide number element
var slideNumberElement = document.getElementById("slider-number");

// get prev and next buttons
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// handle click with prev and next buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// creat the main ul element
var paginationElement = document.createElement("ul");

// set id on created ul Element
paginationElement.setAttribute('id', 'pagination-ul');

//set li based on slide count
var i;
for (i = 1; i <= slideCount; i++) {
    
    // creat list item
    var paginationItem = document.createElement("li");
    
    // set data index on created list item
    paginationItem.setAttribute('data-index', i);
    
    // set item content
    paginationItem.appendChild(document.createTextNode(i));
    
    // append list items to ul Element
    paginationElement.appendChild(paginationItem);
}

// add the created element to the page
document.getElementById("indicators").appendChild(paginationElement);

// get the new created Ul
var paginationCreatedUl = document.getElementById("pagination-ul");

// get pagination items | Array.form [es6 features]
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop through pagination items
var i;
for (i = 0; i < paginationBullets.length; i++) {
    
    paginationBullets[i].onclick = function () {
        
        'use strict';
        
        currentSlide = parseInt(this.getAttribute('data-index'));
        
        theChecker();
    };
}

// trigger the checker function
theChecker();





// next slide function
function nextSlide() {
    'use strict';
    
    if (nextButton.classList.contains("disabled")) {
        
        return false;
        
    } else {
        
        currentSlide++;
        
        theChecker();
    }
}

// prev slide function
function prevSlide() {
    'use strict';
    
    if (prevButton.classList.contains("disabled")) {
        
        return false;
        
    } else {
        
        currentSlide--;
        
        theChecker();
    }
}

// create the checker function
function theChecker() {
    'use strict';
    
    // set the slide number
    slideNumberElement.textContent = "Slide# " + currentSlide + " of " + slideCount;
    
    // remove active class from all
    removeActive();
    
    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");
    
    // set active class to pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    
    // check if the current slide is the first
    if (currentSlide === 1) {
        
        // add disabled class to prev Button
        prevButton.classList.add("disabled");
    
    } else {
        
        //remove disabled class from prev Button
        prevButton.classList.remove("disabled");
    }
    
    // check if the current slide is the last
    if (currentSlide === slideCount) {
        
        // add disabled class to next Button
        nextButton.classList.add("disabled");
    
    } else {
        
        //remove disabled class from next Button
        nextButton.classList.remove("disabled");
    }
}

// remove active class from all images and pagination items
function removeActive() {
    'use strict';
    
    // loop through images
    sliderImages.forEach(function (img) {
        
        img.classList.remove("active");
    });
    
    // loop through paginations
    paginationBullets.forEach(function (li) {
        
        li.classList.remove("active");
    });
}




// memory game

document.querySelector(".control-button span").onclick = function () {
    
    'use strict';
    
    let yourName = prompt('Whats your name ?');
    
    if (yourName == "") {

        document.querySelector(".info-container .name span").textContent = "Unkown";

        document.querySelector(".control-button").remove();
        
    } else {

        document.querySelector(".info-container .name span").textContent = yourName;

        document.querySelector(".control-button").remove();
    }
}

// Efect Duration
let duration = 1000;

// select blocks container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Creat Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Creat Range Of Keys
//let orderRange = [...Array(blocks.length).keys()];
// or
let orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {

    block.style.order = orderRange[index];

    block.addEventListener("click", function () {

        flipBlock(block);
    })
})

// flip block function
function flipBlock(selectedBlock) {

    // Add Class is-flipped
    selectedBlock.classList.add("is-flipped")

    // collect all flipped cards
    let allFlippedBlocks = blocks.filter(allFlippedBlock => allFlippedBlock.classList.contains('is-flipped'))

    // if theres two selected blocks
    if (allFlippedBlocks.length === 2){

        // console.log('two')

        // stop Clicking function
        stopClicking();

        // check matched block function
        checkMatchedBlock(blocksContainer[0], blocksContainer[1]);
    }
}

// stop Clicking function
function stopClicking() {

    //add class no clicking on main container
    blocksContainer.classList.add("no-clicking");

    // remove no-clicking class after duration
    setTimeout(() => {

        blocksContainer.classList.remove("no-clicking");

    }, duration)

    
}

// check matched block function
function checkMatchedBlock(firstBlock, secondBlock) {

    let triesElement = document.querySelector(".tries span")

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        firstBlock.classList.add("has-matched");
        secondBlock.classList.add("has-matched");

    } else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");

        }, duration);
    }
}

// Shuffle Function
function shuffle(array) {

    //setting vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {

        //get random number
        random = Math.floor(Math.random() * current);

        // decrease length by one
        current--;

        // [1] save current element in stash
        temp = array[current];

        // [2] current element = random element
        array[current] = array[random]

        // [3] random element = get element from stash
        array[random] = temp
    }
}

// current array [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// current array [2, 7, 1, 4, 9, 6, 0, 8, 5, 3]
/*
    [1] save current element in stash
    [2] current element = random element
    [3] random element = get element from stash
*/









