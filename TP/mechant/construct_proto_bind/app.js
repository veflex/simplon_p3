var bind = (function () {
    "use strict";
    var Cars = function (obj) {
        this.brand = obj.brand;
        this.year = obj.year;
        this.color = obj.color;

    };

    var mustang = new Cars({
        brand: "mustang",
        year: 1987,
        color: "violets"
    });

    Cars.prototype.ficheTech = function () {

        window.console.log(`Une magnifique ${this.brand} de ${this.year} avec des reflets ${this.color}`);
    };


    var rolls = new Cars({
        brand: "rolls",
        year: 1947,
        color: "perlé"
    });

    var chevrolet = new Cars({
        brand: "chevrolet",
        year: 2018,
        color: "bumblebanx"
    });


    window.console.log(this);
    var start = function () {
        var idBtn = document.getElementById('fiche_tech');
        idBtn.addEventListener("click", mustang.ficheTech.bind(mustang));

    };
    document.addEventListener("DOMContentLoaded", start);

}());
