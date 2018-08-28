/*global window*/

//Exercice 1

var invertColor = function (e) {
    "use strict";
    // on capture le bg actuel
    var actualBg = e.style.backgroundColor,
        // on selectionne le siblig
        sibling = e.nextElementSibling || e.previousElementSibling;
    // on echange le bg de l'element cliqué avec celui du sibling
    e.style.backgroundColor = sibling.style.backgroundColor;
    // on echange le bg du sibling avec le bg capturé au début
    sibling.style.backgroundColor = actualBg;
};


//Exercice 2 fonction existante

var swapLetters = function (str) {
    "use strict";
    return str.split("").reverse().join("");
};

// Exercice 2 main

var swap = function (str) {
    "use strict";
    var tabl = str.split(""),
        i, tablo = [];
    for (i = tabl.length - 1; i >= 0; i--) {
        tablo.push(tabl[i]);
    }
    return tablo.join("");
};

// Exercice 3 

var drawCol = function () {
    "use strict";
    return "|";
};


var drawRow = function (col, row) {
    "use strict";
    var i;
    for (i = 0; i < col; i++) {

        var y, tabl = [];
        for (y = 0; y < row; y++) {
            tabl.push(y);
        }

        window.console.log(drawCol() + tabl.join(drawCol()) + drawCol());
    }
};


//Exercice 4

var estPalindrome = function (str) {
    var modif = str.toLowerCase().replace(/ /g, "");
    window.console.log("-----strmodif------>");
    window.console.log(modif);
    var invers = swapLetters(modif);
    window.console.log("-----inverse------>");
    window.console.log(invers);
    if (modif === invers) {
        return true;
    } else return false;
};


// Exercice 5
var User = function (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function (toUser) {
        window.console.log(this.name + " dis: Hey salut " + toUser);
    };
};

var tabloUser = [];

var createUser = function (n) {
    var i;
    for (i = 0; i < n; i++) {
        tabloUser[i] = new User(verifPromptStr(), verifPromptNbr());
    }
    return tabloUser;
};

var helloUser = function () {
    if (tabloUser.length !== 0) {
        var i;
        for (i = 0; i < tabloUser.length; i++) {
            var precedent = tabloUser[i - 1];
            if (precedent === undefined) {
                window.console.log(tabloUser[i].sayHello("... ah bah j'suis tout seul"));
            } else {
                window.console.log(tabloUser[i].sayHello(precedent.name));
            }

        }
    } else return alert("tablo vide");
};


var verifPromptStr = function () {
    var regex = new RegExp("^[a-zA-Z]+$");
    do {
        var str = prompt("Quel est le nom de l'objet");
        window.console.log(str);
        window.console.log(typeof str);

    } while (!regex.test(str))
    return str;
    //méthode regex => verifier qu'il n'y a que des lettre pareil pour les chiffre verif only numbers
};
var verifPromptNbr = function () {
    var regex = new RegExp("^[0-9]+$");
    do {
        var nbr = prompt("Quel est son age ?");

    } while (!regex.test(nbr))
    return nbr;
};
