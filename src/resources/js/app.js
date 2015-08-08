var PANDOX = PANDOX || {};

/*=====================================================================================================
 * Pandox SYSTEM Module
 *======================================================================================================*/
PANDOX.SYSTEM = function () {

    var init = function () {
        console.debug("PANDOX INIT");

        $('.scroller').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'data-href') ).offset().top
            }, 500, "easeInCubic");

            return false;
        });

        $('.fi-heart').click(function() {
            $('aside').toggleClass('open', 200);
            $('#aside-fade').toggleClass('open', 200);
        })

        $('#aside-fade').click(function() {
            $('aside').toggleClass('open', 200);
            $('#aside-fade').toggleClass('open', 200);
        })

    };

    var menu = function () {
      $('aside').toggleClass('open', 200);
      $('#aside-fade').toggleClass('open', 200);
    };


    return {
        init: init,
        menu: menu
    }

}();



$(document).ready(function(){
    PANDOX.SYSTEM.init();
});
