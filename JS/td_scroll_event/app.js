const app = (function app() {
    "use strict";

    var displayBlock;


    var start = function () {
        displayBlock = document.getElementById('scroll_position');
        window.addEventListener("scroll", getScrollPos)
    };

    const getScrollPos = function getScrollPos() {
        const pos = window.scrollY + "px";
        displayBlock.innerText = pos;
        displayBlock.style.top = pos;
    }
    document.addEventListener("DOMContentLoaded", start);
}())
