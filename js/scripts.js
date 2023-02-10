

hamburger = document.querySelector(".hamburger");

// add a function that runs when the hamburger is
// clicked
hamburger.addEventListener("click", function() {

    // query the navbar and use its classList.toggle 
    // method to toggle the active class
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
});

const swiper = new Swiper('.swiper', {
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
    loop: true,
    pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
