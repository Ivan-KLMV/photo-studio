new Swiper('.swiper', {
  loop: true,
  //   effect: 'coverflow',
  //   centeredSlides: true,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  initialSlide: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
