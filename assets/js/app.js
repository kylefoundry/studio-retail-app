$(document).ready(function(){

  $('.slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    asNavFor: '.thumbnails'
  });

  $('.thumbnails').slick({
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    asNavFor: '.slides'
  });

});
