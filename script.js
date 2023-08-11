$(document).ready(function () {
  $(".slider1").slick({
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".arrow-prev1"),
    nextArrow: $(".arrow-next1"),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider2").slick({
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".arrow-prev2"),
    nextArrow: $(".arrow-next2"),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
