!function () {
    'use strict';

    function sombal() {
        var imgs = document.getElementsByClassName("sombal");
        var i = imgs.length;
        if (!i) {
            window.removeEventListener("scroll", sombal);
        }

        console.log(imgs[0].files);
        while (i--) {

            var innerHeight = window.innerHeight;
            var offset = 60;
            var yPosition = imgs[i].getBoundingClientRect().top - innerHeight;
            if (yPosition <= offset) {
                imgs[i].src = imgs[i].getAttribute("data-src");
                imgs[i].addEventListener('load', function () {
                    var self = this;
                    setTimeout(function () {
                        self.classList.remove("sombal");
                    }, 300);
                });
            }
        }
    }


    // var url = "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg";
    //
    // Image.prototype.load = function (url) {
    //     var thisImg = this;
    //     var xmlHTTP = new XMLHttpRequest();
    //     xmlHTTP.open('GET', url, true);
    //     xmlHTTP.responseType = 'arraybuffer';
    //     xmlHTTP.onload = function (e) {
    //         var blob = new Blob([this.response]);
    //         thisImg.src = window.URL.createObjectURL(blob);
    //     };
    //     xmlHTTP.onprogress = function (e) {
    //         thisImg.completedPercentage = parseInt((e.loaded / e.total) * 100);
    //     };
    //     xmlHTTP.onloadstart = function () {
    //         thisImg.completedPercentage = 0;
    //     };
    //     xmlHTTP.send();
    // };
    //
    // Image.prototype.completedPercentage = 0;


    sombal();
    window.addEventListener("scroll", sombal);
}();
