// Get Slider Items 
var sliderItems = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderItems.length;

// Set Current Index
currentSlide = 1;

// Slide Number String Element
var slideNumberElement = document.getElementById('slide-number');

// Previous And Next Buttons
var prev = document.getElementById('prev'),
    next = document.getElementById('next');


// Handle Click On Previous And Next Buttons
next.onclick = nextSlide;
prev.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Se ID On Crreated UL Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

    // Create LI Element
    var paginationItem = document.createElement('li');
    // Set data-index Attribute On LI Element
    paginationItem.setAttribute('data-index', i);

    //Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items To The Main List
    paginationElement.appendChild(paginationItem);

}

// Add The Created UL To The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get The Pagination Bullets
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {

        currentSlide = parseInt(this.getAttribute('data-index'));
        // Trigger Checker Function
        checker();


    }
};

// Trigger Checker Function
checker();




// Next Slide Function
function nextSlide(){

    if ( currentSlide == slidesCount){
        currentSlide = 1;
        checker();

    }else{
        currentSlide++;
        checker();
    }
}

// Previous Slide Function
function prevSlide(){

    if ( currentSlide == 1){
        currentSlide = slidesCount;
        checker();

    }else{
        currentSlide--;
        checker();
    }
    
}

// Checker Function
function checker() {
    // Set The Slide Number
    slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount); 

    // Remove All Active Classes
    removeAllActive();

    //Set Active Class On Current Slide 
    sliderItems[currentSlide - 1].classList.add('active');

    //Set  Active Class On Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // // Check If The Current Slide Is The First
    // if (currentSlide == 1 ) {
    //    currentSlide = slidesCount ;
    // }
    // else if (currentSlide == slidesCount){
    //     currentSlide = 1;
    // }
    // else {
    //     prev.classList.remove('disabled');
    //     next.classList.remove('disabled');
    // }

}

// Remove All Active Classes From Images And Bullets
function removeAllActive() {

    // Loop Through Images
    sliderItems.forEach(function(img) {

        img.classList.remove('active');

    });
    // Loop Through Bullets
    paginationBullets.forEach(function(bullet) {

        bullet.classList.remove('active');

    });

}