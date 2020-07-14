var wow = new WOW();
new WOW().init();


$('.instruction__row').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<div class="slide-arrow arrow-next"><svg class="icon icon-arrow-right"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></div>',
  prevArrow: '<div class="slide-arrow arrow-prev"><svg class="icon icon-arrow-right"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></div>'
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
   /*Если сделали скролл на 100px задаём новый класс для header*/
  if(height > 70){
  $('header').addClass('header-fixed');
  } else{
  /*Если меньше 100px удаляем класс для header*/
  $('header').removeClass('header-fixed');
  }
  });

  $('#wrapper').fullpage({
    autoScrolling:true,
    scrollHorizontally: true
  });


  $('[data-fancybox="wash"]').fancybox({
    btnTpl: {
  
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left prev" title="{{PREV}}">' +
        '<i class="fa fa-angle-left" aria-hidden="true"></i>' +
        "</button>",
  
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right next" title="{{NEXT}}">' +
        '<i class="fa fa-angle-right" aria-hidden="true"></i>' +
        "</button>"
  
    }
  
  });