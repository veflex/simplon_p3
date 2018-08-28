const app = (function app() {
    var dom = {};

    const goTop = function (time) {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        time = 30

        var pix = scrollTop / time
        if (scrollTop > 0) {
            scrollBy(0, -pix);
            window.requestAnimationFrame(goTop);
        }
        window.console.log("ca monte");
    }




    const eventHandler = function eventHandler() {
        dom.btn.addEventListener("click", goTop)
    }


    const start = function () {
        dom.btn = document.getElementById('goTop');
        eventHandler();
    }
    document.addEventListener("DOMContentLoaded", start);

}());
