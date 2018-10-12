/**
 * Brusselslife 7.0 Agenda
 */
(function (window, $) {
    'use strict';

    var BrusselslifeAgenda = (function ($) {

        function BrusselslifeAgenda() {

            return {
                init: function () {
                    _what();
                    _when();
                    _event_eat_drink_carousel();
                }
            }
        };


        function _what() {
            var ec = $("#event_categories");
            ec.select2();
//        ec.on('select2:select', function (e) {
//
//        });
        }


        function _when() {

            var start = moment().subtract(0, 'days');
            var end = moment();

            function cb(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }

            $("#date_range_picker").daterangepicker({
                startDate: start,
                endDate: end,
                autoApply: true,
                alwaysShowCalendars: true,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, cb);

            cb(start, end);
            var date_range_picker = $("#date_range_picker");

            date_range_picker.on('apply.daterangepicker', function (dr, picker) {


                if (picker.startDate.format('YYYY-MM-DD') == picker.endDate.format('YYYY-MM-DD')) {
                    date_range_picker.attr('data-original-title', picker.startDate.format('YYYY-MM-DD'));
                } else {
                    date_range_picker.attr('data-original-title', picker.startDate.format('YYYY-MM-DD') + "  -  " + picker.startDate.format('YYYY-MM-DD'));
                }


            });


        }

        function _event_eat_drink_carousel() {


        }


        return BrusselslifeAgenda;
    })(jQuery);


    var BA = new BrusselslifeAgenda();
    BA.init();


})(jQuery);