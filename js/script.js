$(document).ready(function(){
  $('.reviews__block').slick({
  	slidesToShow: 3,
  	swipeToSlide: true,
  	autoplay: true,
  	prevArrow: '<span class="arrow arrow__back"><i class="fas fa-chevron-left"></i></span>',
  	nextArrow: '<span class="arrow arrow__next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    }],
    responsive: [{
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }]
  });
  if($(window).width() <= '480'){
    $('.services').slick({
      slidesToShow: 1,
      swipeToSlide: true,
      arrows: false
    });
}
  $('.slider').slick({
  	slidesToShow: 6,
  	swipeToSlide: true,
  	autoplay: true,
  	prevArrow: '<span class="arrow arrow__back"><i class="fas fa-chevron-left"></i></span>',
  	nextArrow: '<span class="arrow arrow__next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    }],
    responsive: [{
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    }]
  });
});

$(document).ready(function() {


   $("a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 600,
         easing: "swing"
      });
      return false;
   });

   $('.for__one').click(function(){
    $(this).addClass('active');
    $('.for__two').removeClass('active');
    $('.for__three').removeClass('active');
      $('.one').addClass('db');
      $('.two').removeClass('db');
      $('.three').removeClass('db');
   })
   $('.for__two').click(function(){
    $(this).addClass('active');
    $('.for__one').removeClass('active');
    $('.for__three').removeClass('active');
      $('.two').addClass('db');
      $('.three').removeClass('db');
      $('.one').removeClass('db');
   })
   $('.for__three').click(function(){
    $(this).addClass('active');
    $('.for__two').removeClass('active');
    $('.for__one').removeClass('active');
      $('.three').addClass('db');
      $('.two').removeClass('db');
      $('.one').removeClass('db');
   })


   $('.mobile__menu').click(function(){
    $('.header__contact').toggleClass('active__menu');
    $('.header__nav').toggleClass('active__menu');
    $('header').toggleClass('mb');;
   })


   $('.master__btn').click(function() {
    $('.popup').addClass('show');
    $('.popup').removeClass('dn');

    if( $('.popup').hasClass('show'))
      $('.popup__bg').addClass('overlay');
  });
  $('.call__icon').click(function() {
    $('.popup').addClass('show');
    $('.popup').removeClass('dn');

    if( $('.popup').hasClass('show'))
      $('.popup__bg').addClass('overlay');
  });
  $('.close').click(function() {
    $('.popup').addClass('dn');
    $('.popup').removeClass('show');
    $('.popup__bg').removeClass('overlay');
  });
});


function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2019, 2, 9);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

 updater(document.getElementById("days"), //id від блоку днів
 document.getElementById("hours"), //id від блоку годин
 document.getElementById("minutes"), //id від хвилин
 document.getElementById("seconds")); //id від блоку секунд