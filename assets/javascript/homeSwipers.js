const sectorGap = window.innerWidth /100 * 3.38541666667
const sectorsSwiper = new Swiper(".sectorsSwiper", {
    loop:true,
     slidesPerView: window.innerWidth>768? 2.4: 1.4,
      

    spaceBetween: sectorGap,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  setTimeout(function(){
  sectorsSwiper.update(true);
  sectorsSwiper.slideTo(50,0)
  sectorsSwiper.slideTo(0,0)
  sectorsSwiper.update(true);

}, 500);

  const testiomonialSwiperGap = window.innerWidth / 100 * 2.34375
  const testiomonialSwiper = new Swiper(".testiomonialSwiper", {
    cssMode: true,
    slidesPerView: window.innerWidth>768? 5: 2.4,
    spaceBetween:testiomonialSwiperGap,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: true,
  //   },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
