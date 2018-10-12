'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brusselslife = function () {
    function Brusselslife() {
        _classCallCheck(this, Brusselslife);
    }

    //Create custom HTML elements


    _createClass(Brusselslife, [{
        key: 'createCustomElements',
        value: function createCustomElements() {

        }
    }, {
        key: 'enablePlugins',
        value: function enablePlugins() {
            if (document.querySelector(".home-carousel-agenda")) {
                var homeCarouselAgenda = new Flickity('.home-carousel-agenda', {
                    cellAlign: 'left',
                    contain: true,
                    wrapAround: false,
                    draggable: '>1',
                    groupCells: 1,
                    lazyLoad: 4,
                    pageDots: false
                });
            }
            if (document.querySelector(".address-list-carousel")) {
                var addressListCarousel = new Flickity('.address-list-carousel', {
                    cellAlign: 'left',
                    contain: true,
                    wrapAround: false,
                    draggable: '>1',
                    groupCells: 1,
                    lazyLoad: 0,
                    pageDots: false
                });
            }


            if (document.querySelector(".address-list-carousel-2")) {
                var addressListCarousel = new Flickity('.address-list-carousel-2', {
                    cellAlign: 'left',
                    contain: true,
                    wrapAround: false,
                    draggable: '>1',
                    groupCells: 1,
                    lazyLoad: 0,
                    pageDots: false
                });
            }

            if (document.querySelector(".home-block-3-carousel")) {
                var homeBlock3Carousel = new Flickity('.home-block-3-carousel', {
                    cellAlign: 'center',
                    contain: true,
                    wrapAround: false,
                    draggable: '>1',
                    groupCells: 1,
                    lazyLoad: 2,
                    pageDots: false
                });
            }
            if (document.querySelector(".section-content-carousel")) {
                var sectionContentCarousel = new Flickity('.section-content-carousel', {
                    cellAlign: "left",
                    contain: true,
                    wrapAround: false,
                    draggable: '>1',
                    groupCells: 1,
                    lazyLoad: 4,
                    pageDots: false
                });
            }
            if (document.querySelector(".section-content-carousel-2")) {
                var sectionContentCarousel2 = new Flickity('.section-content-carousel-2', {
                    contain: true,
                    wrapAround: false,
                    draggable: '>1',
                    pageDots: false
                });
            }

            var b = document.querySelector("body");
            window.onscroll = function () {

                // if (window.scrollTop > 200) {
                //     console.log(window.scrollTop);
                // }

            };
        }
    }]);

    return Brusselslife;
}();

var BrusselslifeApp = new Brusselslife();
BrusselslifeApp.createCustomElements();
BrusselslifeApp.enablePlugins();
//# sourceMappingURL=app.js.map
