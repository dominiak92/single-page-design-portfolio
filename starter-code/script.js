const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
  
    // Navigation arrows
    navigation: {
      nextEl: '.left-button',
      prevEl: '.right-button',
    },
  });