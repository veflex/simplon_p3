const app = (function app() {
    "use strict";
    const doAjax = function doAjax(url, method, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = evt => {
            const src = evt.srcElement || evt.target;
            callback(src.response);
        }
        xhr.send();
    }

    const getUsers = function getUsers() {
        const url = "http://localhost:5555/get-users/";
        doAjax(url, "GET", res => {
            console.log(JSON.parse(res));
        })
    }

    var start = function () {
        window.console.log("salut les pote");
        document.getElementById('btn_get_users').onclick = getUsers;

    }
    document.addEventListener("DOMContentLoaded", start);

}());
