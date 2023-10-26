"use strict";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 500,
  loop: true,
  autoHeight: false,
  centeredSlides: true,
  followFinger: true,
  freeMode: false,
  slideToClickedSlide: false,
  slidesPerView: 1,
  spaceBetween: "4%",
  rewind: false,
  mousewheel: {
    forceToAxis: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    // mobile landscape
    320: {
      slidesPerView: 1.25,
      spaceBetween: "4%",
    },
    // tablet
    800: {
      slidesPerView: 1.25,
      spaceBetween: "4%",
    },
    // desktop
    992: {
      slidesPerView: 2.25,
      spaceBetween: "2%",
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
