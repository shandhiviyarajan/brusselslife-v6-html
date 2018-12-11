/**
 * Brusselslife v7.0 Article
 */

(function (window, $) {
    'use strict';

    var BrusselslifeArticle = (function ($) {
        function BrusselslifeArticle() {
            return {
                init: function () {
                    _article_edit_modal();
                }
            };

            function _article_edit_modal() {

                CKEDITOR.replace('edit_article_body', {
                    language: 'en'
                });

                $("#chk_article_publish").each(function () {
                    var chk_publish_wrap = $(this);
                    var chk = chk_publish_wrap.find("input[type='checkbox']");
                    var chk_publish_options = chk_publish_wrap.find(".article_publish_options");

                    chk.on('change', function () {
                        if (chk.prop('checked')) {
                            chk_publish_options.show();
                        } else {
                            chk_publish_options.hide();
                        }
                    });
                });
            }
        }

        return BrusselslifeArticle;

    })(jQuery);

    var BA = new BrusselslifeArticle();
    BA.init();

})(window, jQuery);

