var PANDOX = PANDOX || {};

/*=====================================================================================================
 * Pandox SYSTEM Module
 *======================================================================================================*/
PANDOX.SYSTEM = function () {

    var init = function () {
        console.debug("PANDOX INIT");

        $(".card").hover(function() {
          $(this).toggleClass('open', 200);
        });


                $(".card").click(function() {
                  $(this).toggleClass('selected', 200);
                });
    };




    return {
        init: init
    }

}();



$(document).ready(function(){
    PANDOX.SYSTEM.init();
});
