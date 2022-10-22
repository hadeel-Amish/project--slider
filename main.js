// get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
// console.table(sliderImages);

// get number of slider
var slidesCount = sliderImages.length;
// console.log(slidesCount);

//set current slide
var currentSlide = 1;

//slide number element
var slideNumberElement = document.getElementById("slide-number");
//previous and next button
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
//handle click on prev and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//creat the main ul element
var paginationElement = document.createElement("ul");
// set id on created ul elemnt
paginationElement.setAttribute("id", "pagination-ul");

//create list items based on slides count
for (var i = 1; i <= slidesCount; i++) {
  //creat the li
  var paginationItems = document.createElement("li");
  // set  custom attribute
  paginationItems.setAttribute("data-index", i);
  // set item content
  paginationItems.appendChild(document.createTextNode(i));
  //append items to the main ul list
  paginationElement.appendChild(paginationItems);
}
//add the created ul element to the page
document.getElementById("indicator").appendChild(paginationElement);

// get the new created ul  // for checker
var paginationCreatedUl = document.getElementById("pagination-ul");

//
// get pagination items   //for remove
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
//loop through all bullets items
for (var i = 0; i <= paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
//trigger the checker function
theChecker();

//next slide function
function nextSlide() {
  //   console.log("next");
  if (nextButton.classList.contains("disabled")) {
    //do nothig
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
//prev slide function
function prevSlide() {
  //   console.log("prev");
  if (prevButton.classList.contains("disabled")) {
    //do nothig
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
//create the checker function
function theChecker() {
  //set the slide number
  slideNumberElement.textContent =
    "slide#" + currentSlide + " of " + slidesCount;
  //remove active classes
  removeAllActive();
  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  //set active class on current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  // check if current slide is the first
  if (currentSlide == 1) {
    //add disabled class on prev button
    prevButton.classList.add("disabled");
  } else {
    // remove disabled class from prev button
    prevButton.classList.remove("disabled");
  }
  // check if current slide is the last
  if (currentSlide == slidesCount) {
    //add disabled class on next button
    nextButton.classList.add("disabled");
  } else {
    // remove disabled class from next button
    nextButton.classList.remove("disabled");
  }
}

//remove all active classes from images and pagination bullets

function removeAllActive() {
  //loop through images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  //loop through pagination bullets
  paginationBullets.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
