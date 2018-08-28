var app = (function () {
    var url = "./state.json",
        tableau = [],
        tableauFiltrer = [];

    var ecrireDansUl = function (dad, elem) {
        var li = document.createElement("li");
        var ul = document.getElementById(dad);
        var liCree = ul.appendChild(li);
        liCree.innerHTML = elem
    }

    var myFirstAjaxGet = function (u, write) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", u);
        xhr.onload = function (evt) {
            var res = JSON.parse(this.response);
            //            console.log(res);
            res.forEach(function (e) {
                write("liste", e.name)
                tableau.push(e.name);
            })
        };
        xhr.send();
    }

    var filtrer = function (input) {
        tableauFiltrer = tableau.filter(function (e) {
            var stateLow = e.toLowerCase();
            var inputLow = input.value.toLowerCase();
            return stateLow.indexOf(inputLow) > -1
        })
    }

    var start = function () {
        myFirstAjaxGet(url, ecrireDansUl);
        var inputTxt = document.getElementById('input');

        inputTxt.addEventListener("input", function () {
            var ul = document.getElementById('liste');
            ul.innerHTML = "";
            filtrer(inputTxt);
            tableauFiltrer.forEach(function (e) {
                ecrireDansUl("liste", e)
            })
        })
    }
    document.addEventListener("DOMContentLoaded", start);
}());
