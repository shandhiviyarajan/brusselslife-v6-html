'use strict';


class Brusselslife {


    constructor() {


    }

    //Create custom HTML elements
    createCustomElements() {
        // let full_news_block = document.registerElement('full-news-block', {
        //     extends: 'div'
        // });
        // let blife_block = document.registerElement('blife-block', {
        //     extends: 'div'
        // });
        //
        let block_edit = document.registerElement('block-edit', {
            extends: 'div'
        });
        document.body.appendChild(new block_edit());
        //
        // let author_block = document.registerElement('author-block', {
        //     extends: 'div'
        // });
        //
        // document.body.appendChild(new full_news_block());
        // document.body.appendChild(new blife_block());
        // document.body.appendChild(new author_block());

    }


    enablePlugins() {
        if (document.querySelector(".home-carousel-agenda")) {
            let homeCarouselAgenda = new Flickity('.home-carousel-agenda', {
                cellAlign: 'left',
                contain: true,
                wrapAround: false,
                draggable: '>1',
                groupCells: 1,
                lazyLoad: 4,
                pageDots: false
            });
        }

        if (document.querySelector(".home-block-3-carousel")) {
            let homeBlock3Carousel = new Flickity('.home-block-3-carousel', {
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
            let sectionContentCarousel = new Flickity('.section-content-carousel', {
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
            let sectionContentCarousel2 = new Flickity('.section-content-carousel-2', {
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

        }

    }
}

let BrusselslifeApp = new Brusselslife();
BrusselslifeApp.createCustomElements();
BrusselslifeApp.enablePlugins();


