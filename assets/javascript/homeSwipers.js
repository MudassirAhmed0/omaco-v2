const sectorGap = (window.innerWidth / 100) * 3.38541666667;
const sectorsSwiper = new Swiper(".sectorssSwiper", {
  loop: true,
  slidesPerView: window.innerWidth > 768 ? 2.4 : 1.4,

  spaceBetween: sectorGap,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
setTimeout(function () {
  sectorsSwiper.update(true);
  sectorsSwiper.slideTo(50, 0);
  sectorsSwiper.slideTo(0, 0);
  sectorsSwiper.update(true);
}, 500);

const testiomonialSwiperGap = (window.innerWidth / 100) * 2.34375;
const testiomonialSwiper = new Swiper(".testiomonialSwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 8000,
  },
  slidesPerView: window.innerWidth > 768 ? 5 : 2.4,
  spaceBetween: testiomonialSwiperGap,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  mousewheel: true,
  keyboard: true,
});

const sectorSlides = document.querySelectorAll(".sectorSlide");
const sectorSlideContents = document.querySelectorAll(".sectorSlideContent");

const handleMouseMove = (index) => {
  sectorSlideContents.forEach((slide, i) => {
    if (i == index + 1) {
      slide.classList.remove("opacity-0");
      slide.classList.remove("pointer-events-none");
    } else {
      slide.classList.add("opacity-0");
      slide.classList.add("pointer-events-none");
    }
  });
};
const handleMouseOut = () => {
  sectorSlideContents.forEach((slide, i) => {
    if (i == 0) {
      slide.classList.remove("opacity-0");
      slide.classList.remove("pointer-events-none");
    } else {
      slide.classList.add("opacity-0");
      slide.classList.add("pointer-events-none");
    }
  });
};

sectorSlides.forEach((slide, index) => {
  slide.addEventListener("mousemove", () => handleMouseMove(index));
  slide.addEventListener("mouseout", handleMouseOut);
});
