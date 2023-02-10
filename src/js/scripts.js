hamburger = document.querySelector(".hamburger");

// add a function that runs when the hamburger is
// clicked
hamburger.addEventListener("click", function() {

    // query the navbar and use its classList.toggle 
    // method to toggle the active class
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
});