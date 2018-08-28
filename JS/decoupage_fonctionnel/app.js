///////////////////////
//Fonction Carre + 2///
///////////////////////

var carrePlusDeux = function (x) {
    var carre = x * x;
    var result = carre + 2;
    return result;
};
window.console.log(carrePlusDeux(9));

//////////////////////////////////////////////
//Fonction Carre + 2 découpée en 2 fonctions//
//////////////////////////////////////////////

var app = (function () {
    var carre1;
    var carre = function (x) {
        return carre1 = x * x
    };
    var plusDeux = function (y) {
        return carre1 + 2;
    };
    window.console.log(carre(8));
    window.console.log(plusDeux());
    window.console.log(carre(9));
    window.console.log(plusDeux());
}());

////////////////////////////////////////////////////////
//Fonction creation de div plus ajouter dans un parent//
////////////////////////////////////////////////////////

var createElemIn = function (elem, dad) {
    var element = document.createElement(elem),
        parent = document.getElementById(dad);
    parent.appendChild(element);

};


//////////////////////////////////////////////////////////////////////////////
//Fonction creation de div plus ajouter dans un parent séparé en 2 fonctions//
//////////////////////////////////////////////////////////////////////////////

//var createElemInEverything = function () {
//    var fullFunc = (function () {
//        var newElement, parent;
//        var createElem = function (elem) {
//            return newElement = document.createElement(elem);
//        }
//
//        var addToFather = function (dad) {
//            parent = document.querySelectorAll(dad);
//            parent.forEach(function (e) {
//                e.appendChild(newElement);
//            })
//
//        }
//
//        createElem("div");
//        addToFather("#daddy");
//        createElem("span");
//        addToFather("#daddy>div");
//
//    }());
//}
//document.addEventListener("DOMContentLoaded", createElemInEverything);

///////////////////////////////////////////////////////
//Fonction qui crée un paragraphe et qui ecrit dedans//
///////////////////////////////////////////////////////

var writePara = function (str) {
    var newP = createElemIn("p", "daddy");
    window.console.log("salut");
    newP.innerHTML = str;
}

var start = function () {
    writePara("bendo na bendo");
}
document.addEventListener("DOMContentLoaded", start);
