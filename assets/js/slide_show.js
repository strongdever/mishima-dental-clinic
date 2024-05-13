!(function ($) {
  "use strict";

  $(document).ready(function () {

    /*
    https://codepen.io/young/pen/MWYzOgO
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/

    // Init slick slider + animation
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      pauseOnHover: false,
      pauseOnFocus: false,
      lazyLoad: 'progressive',
      arrows: false,
      // fade: true,
      dots: true,
      // cssEase: 'ease-in-out',
    }).slickAnimation();


    $('.slick-nav').on('click touch', function (e) {

      e.preventDefault();

      var arrow = $(this);

      if (!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
          arrow.removeClass('animate');
        }, 1600);
      }

    });
  });

})(jQuery);