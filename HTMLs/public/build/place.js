/**
 * Brusselslife v7.0 Place
 */

(function (window, $) {
    'use strict';
    var default_rating = "Very good";
    var offer_form = $(".offer-form");
    var online_url = $(".online-url");
    var address_nav = $("#address-nav");
    var overlay = $("#overlay");
    var mapOptions, center;

    var BrusselslifePlace = (function ($) {
        function BrusselslifePlace() {
            return {
                init: function () {

                    _load();
                    _google_maps();
                    _address_nav();
                    _content_body();
                    _places_post_form();


                    _promotion_modal();
                    _events_modal();
                    _article_modal();
                    _address_edit_modal();

                    _star_rating();

                    _show_hint();

                }
            }
        }

        function _address_nav() {
            address_nav.find("li").on('click', function () {
                var li = $(this);
                li.addClass("wait active");
                address_nav.find("li").not(li).removeClass("active");
                setTimeout(function () {
                    li.removeClass("wait");
                }, 800);
            });
        }

        function _promotion_modal() {
            $("#select_offer_type").on('change', function () {
                var vf = $(this).val();
                offer_form.removeClass("active");
                offer_form.eq(vf).addClass("active");
            });
            $("input[name='redeem']").on('click', function () {
                if ($(this).val() == 1) {
                    online_url.show(0);
                    online_url.find("input").focus();
                } else {
                    online_url.hide(0);
                }
            });
        }

        function _article_modal() {
            CKEDITOR.replace('article_modal_desc', {
                language: 'en'
            });
        }

        function _events_modal() {
            // var schedule_date = $(".schedule_date");
            // schedule_date.datepicker({
            //     autoclose: false,
            //     multidate: true,
            //     todayHighlight: true
            // });
            //
            // schedule_date.on('changeDate', function () {
            //     $('#my_hidden_input').val(
            //         schedule_date.datepicker('getFormattedDate')
            //     );
            // });


            $('#keywords-select').dropdown({
                placeholder: "Select keywords"
            });


            CKEDITOR.replace('event_editor', {
                language: 'en'
            });

            var sel_category = $("#event_modal_category");

            $("#add_event_modal").on('show.bs.modal', function () {

            });
        }

        function _address_edit_modal() {
            CKEDITOR.replace('edit_address_body', {
                language: 'en'
            });

            $(".edit-address-drag-container").sortable();

            $("#sel-address-category").dropdown({
                placeholder: "Select sub categories"
            });

            $("#keywords-select-2").dropdown({
                placeholder: "Keywords"
            });

            $("#sel-address-branch").dropdown({
                placeholder: "Select a branch"
            });

            var d_canvas = document.getElementById("drag_to_find_location");
            var d_map = new google.maps.Map(d_canvas, mapOptions);
            var d_marker = new google.maps.Marker({
                position: center,
                map: d_map,
                title: 'Drag this',
                draggable: true

            });


            google.maps.event.addListener(d_marker, 'dragend', function (e) {
                //console.log(d_marker.getPosition());
                document.getElementById("d_lng").value = e.latLng.lat();
                document.getElementById("d_lat").value = e.latLng.lng();

            });
        }

        function _google_maps() {


            // var marker = new google.maps.Marker({
            //     position: new google.maps.LatLng(address.latitude, address.longitude),
            //     icon: icon
            // });
            center = new google.maps.LatLng(50.839383500000, 4.349299900000);
            var r_canvas = document.getElementById("address-map-canvas");

            mapOptions = {
                center: center,
                zoom: 9,
                zoomControl: false,
                navigationControl: false,
                scaleControl: false,
                mapTypeControl: false
            };

            var map = new google.maps.Map(r_canvas, mapOptions);

            var marker = new google.maps.Marker({
                position: center,
                map: map,
                title: 'The address'
            });


        }

        function _content_body() {
            $("#content-body").find("img").each(function () {
                $(this).wrap("<figure></figure>");
                var caption = $("<p class='img_caption'/>").text($(this).attr('alt'));
                $(this).parent().append(caption);
            });
        }

        function _places_post_form() {
            var place_post_form = $("#place_post_form");
            place_post_form.find(".textarea").focus(function () {
                overlay.show();
                $(this).addClass("on-edit");
                place_post_form.addClass("expanded");
            });

            place_post_form.find(".close-status").on('click', function () {
                overlay.hide();
                place_post_form.find(".textarea").removeClass("on-edit");
                place_post_form.removeClass("expanded show-image-upload");

            });

            $(".btn-post-image").click(function () {
                place_post_form.find(".textarea").trigger('focus');
                place_post_form.addClass("show-image-upload");
            });
        }

        function _star_rating() {

            var unrated_stars = $(".unrated-stars .fa-star");
            var rating_word = $("#rating_word");
            unrated_stars.mouseenter(function () {
                rating_word.text($(this).data('text'));
                for (var i = 0; i <= $(this).index(); i++) {
                    unrated_stars.eq(i).addClass("fill");
                }
            });

            unrated_stars.mouseleave(function () {
                rating_word.text(default_rating);
                $("i.fa").removeClass("fill");
            });
        }

        function _show_hint() {


            $("#content-body p a").each(function () {
                if ($(this).attr('href').search('brusselslife.be')) {
                    $(this).addClass("show-hint");
                }
            });

            $("a.show-hint").hover(function () {

                $(this).find(".hint-content").fadeIn(0).addClass('active');
            }, function () {
                $(this).find(".hint-content").fadeOut(0).removeClass('active');

            });


        }

        function _load() {

        }

        return BrusselslifePlace;

    })(jQuery);

    var BP = new BrusselslifePlace();
    BP.init();

})(window, jQuery);

