/**
 * Brusselslife v7.0 Homepage
 */

(function (window, $) {
    'use strict';


    var BrusselslifeHome = (function ($) {
        function BrusselslifeHome() {
            return {
                init: function () {
                    _load();
                    _home_block_slider();
                }
            }
        }


        function _home_block_slider() {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }

        function _load() {

        }

        return BrusselslifeHome;

    })(jQuery);

    var BH = new BrusselslifeHome();
    BH.init();

})(window, jQuery);



