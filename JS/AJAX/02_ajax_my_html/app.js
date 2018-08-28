const app = (function app() {
    "use strict";

    var mainContent;

    const start = function () {
        window.console.log("ready to rock");
        mainContent = document.getElementById('content_main');
        listenClicks();
    }

    const listenClicks = function listenClicks() {
        var nodes = document.querySelectorAll('#nav_list .item');
        nodes.forEach(function (node) {
            node.onclick = loadHTML;
        });
    };

    const loadHTML = function loadHTML(e) {
        const src = e.target || e.srcElement;
        const key = Number(src.getAttribute("data-page-key"));
        const url = `./pages/page${key}.html`;
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        xhr.onload = function getHTML() {
            displayHTML(this.response)
        };
        xhr.send();
    }

    const displayHTML = function displayHTML(html) {
        mainContent.innerHTML = html;
    };









    document.addEventListener("DOMContentLoaded", start);

}());
