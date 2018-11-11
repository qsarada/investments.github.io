
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

$(window).scroll(function(){
   $('.mov').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop() ;
    if (imagePos > topOfWindow){
      $(this).addClass('bounceInLeft')
    }
   });
});
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
 