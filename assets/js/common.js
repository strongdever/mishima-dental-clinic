!(function ($) {
    "use strict";

    $(document).ready(function () {
        $('.href-link').click(function () {
            var target_element = '#' + $(this).data('href');
            var target = $(target_element);
            var offset = 120;
            console.log(target_element)
            gotoanchor(target);
        });

        window.addEventListener('load', function () {
            var url = window.location.href;
            var target_element = '#' + url.split('#')[1];
            var target = $(target_element);
            gotoanchor(target);
        });
    });

    function gotoanchor(target) {
        var offset = 120;
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 300);
        }
    }
})(jQuery);

//modal dialog end----------------->
