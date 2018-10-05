'use strict';
var center;
(function (window, $) {

    //Brusselslife Search


    var search_input = document.getElementById("search_input");
    var s_len = search_input.value.length;
    var btn_clear = document.getElementById("btn_clear");
    var logged_in = false;
    var google_map = document.getElementById("google-map");

    BrusselslifeSearch = (function ($) {
        function BrusselslifeSearch() {

            return {
                init: function () {
                    _load();
                    _loadmap();
                    _search_results();
                    _select_location();
                }
            };
        }

        function _load() {
            console.log("Brusselslife - Search v6.0 HTML");
            var c = document.getElementsByClassName("custom-checkbox");
            var i = c.length;
            while (i--) {
                c[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    this.classList.toggle("active");
                });
            }

            if (s_len) {
                btn_clear.style.display = "block";
            }
            search_input.addEventListener('keyup', function () {
                s_len = this.value.trim().length;
                btn_clear.style.display = "block";
            });
            btn_clear.addEventListener('click', function (e) {
                e.preventDefault();
                this.style.display = "none";
                search_input.value = "";
                search_input.focus();
            });
            $(".btn-book-mark").click(function () {

                if (!logged_in) {
                    $("#login-register > a").trigger('click');
                    $("#login-register").find(".dropdown-menu").addClass("show");
                }
            });
        }

        function _search_results() {
            $(".paid-gallery").swipebox({
                initialIndexOnArray: 0,
                afterOpen: function () {
                    console.log("swipebox opened - get review and recent comments");
                }
            });
        }

        function _loadmap() {

            // if (false) {
            //     navigator.geolocation.getCurrentPosition(function (position) {
            //         center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //     });
            // }

            if(google_map){
                var center = new google.maps.LatLng(50.839383500000, 4.349299900000);

                var mapOptions = {
                    center: center,
                    zoom: 12,
                    zoomControl: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: true,
                    scrollwheel: true
                };

                var map = new google.maps.Map(google_map, mapOptions);

                var marker = new google.maps.Marker({
                    position: center,
                    map: map,
                    title: 'Hello World!',
                    icon: '/public/svg/map-marker.svg'
                });

                google.maps.event.addDomListenerOnce(map, 'idle', function () {
                    google.maps.event.addDomListener(window, 'resize', function () {
                        map.setCenter(center);
                    });
                });
            }



        }

        function _select_location() {

            var bs = $(".belgium-states");
            bs.select2();
            bs.on('select2:select', function (e) {

                window.location = window.location.origin + window.location.pathname + "?location=" + e.params.data.text;
            });

            var bv = $("#belgium_venues");
            bv.select2();
            bv.on('select2:select', function (e) {
                window.location = window.location.origin + window.location.pathname + "?venue=" + e.params.data.text;
            });


        }

        return BrusselslifeSearch;
    })(jQuery);

    var BrusselslifeSearch = new BrusselslifeSearch();
    BrusselslifeSearch.init();
})(window, jQuery);