$('.center').slick({
    centerMode: true,
    centerPadding: '330px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
});

$('.main-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    nextArrow:$('.next'),
    prevArrow: $('.prev'),
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-img',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    nextArrow:$('.next'),
    prevArrow: $('.prev'),
  });
