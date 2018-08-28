var DonutFactory = function (n, t) {
    this.name = n;
    this.taste = t;


};

var tablo = [];


var addObject = function () {
    var donutName = document.getElementById("donutName").value;
    var donutTaste = document.getElementById("donutTaste").value;
    var res = new DonutFactory(donutName, donutTaste);

    tablo.push(res);

    addLi(donutName);
    addLi(donutTaste);


    window.console.log(tablo);

};

var addLi = function (param) {
    "use strict";
    var dad = document.getElementById("ul"),
        li = document.createElement("li"),
        liCree = dad.appendChild(li);
    liCree.innerHTML = param;


};
