//Exercice 1
/*global window*/


var selectionneCarre = function () {
    "use strict";
    var select = window.document.getElementById('select');

    select.addEventListener("change", function () {


        var divClass = window.document.querySelector('div#container>.red'),
            id = select.value,
            divSelect = window.document.getElementById(id);
        if (divClass !== null && id !== "choix") {
            divClass.classList.remove("red");
            divSelect.classList.add("red");

        } else if (divClass !== null && id == "choix") {
            divClass.classList.remove("red");
        } else {
            divSelect.classList.add("red");
        }
        window.console.log(id);
        window.console.log(divSelect);

    });
};



//Exercice 2

var i = 0
var goToPageTop = function (vitesse) {
    "use strict";
    //on recup l'id du btn
    var idBtn = window.document.getElementById('goTop');
    //on met un event au clique du btn qui lance une fonction
    idBtn.addEventListener("click", function () {
        var nbPix = window.document.body.scrollTop || window.document.documentElement.scrollTop;
        var pix = nbPix * 6 / vitesse;
        var ite = nbPix / pix;
        var i = 0;
        var loops = function () {
            window.console.log(ite);
            if (i < ite) {
                window.console.log(i);
                window.scrollBy(0, -pix);

                i++;
                var timeOut = window.setTimeout(loops, pix);
            } else window.console.log("finiiii");
        }
        loops();

    });
};

var start = function () {
    "use strict";
    selectionneCarre();
    goToPageTop(1000);


};
window.addEventListener("DOMContentLoaded", start);

//else if (i > ite && i !== ite) {
//                window.scrollBy(0, -pix);
//                i++;
//                window.console.log(i);
//                var timeOut = window.setTimeout(loops, delay);
//
//            }
