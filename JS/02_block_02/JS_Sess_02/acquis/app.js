//////////////
//Exercice 1//
//////////////
var invertColor = function (e) {
    "use strict";
    // on récupère l'élément voisin de l'élément cliqué
    var sibling = e.nextElementSibling || e.previousElementSibling,
        // on lock le currentBg dans la var du meme nom
        currentBg = e.style.backgroundColor;

    // on change le background de l'élément cliqué avec celui du sibling
    e.style.backgroundColor = sibling.style.backgroundColor;

    // on change le background du sibling avec le bg locké au début
    sibling.style.backgroundColor = currentBg;


};

//////////////
//Exercice 2//
//////////////
//Avec fonction déja programmé
var swapLetters = function (str) {
    "use strict";
    return str.split("").reverse().join("");
};

//Avec le reverse a la main en boucle for inversée

var lettersSwap = function (str) {
    "use strict";
    var strTabl = str.split("");
    var i, newTab = [];
    for (i = strTabl.length - 1; i >= 0; i--) {
        newTab.push(strTabl[i]);
    }
    return newTab.join("");

};

//////////////
//Exercice 3//
//////////////
var draw = function (row, col) {
    "use strict";
    var str = "";
    var drawCol = function (col) {
        var i;

        for (i = 0; i < col; i++) {
            str += "|" + i;
        }
    };

    var drawRow = function (row, col) {
        var j;
        for (j = 0; j < row; j++) {
            drawCol(col);
        }
        return str;
    };
    return drawRow(row, col) + "|";
};

//////////////
//Exercice 4//
//////////////

var estPalindrome = function (str) {
    "use strict";
    str = str.toLowerCase().replace(/ /g, "");
    var inverse = swapLetters(str);
    if (str === inverse) {
        return true;
    } else return false;

};


//////////////
//Exercice 5//
//////////////

var User = function (name, age) {
    "use strict";
    this.name = name;
    this.age = age;
};

User.prototype.sayHello = function (toUser) {
    window.console.log(this.name + " dis: Hey salut " + toUser);
};


var createUser = function (n) {
    var i,
        tableauUser = [];
    for (i = 0; i < n; i++) {
        tableauUser.push(new User(verifName(), verifAge()))
    };
    return tableauUser;

}

var verifName = function () {
    var regexLetters = new RegExp("^[a-zA-Z]+$");
    do {
        var name = prompt("Saisissez un Nom");
    } while (regexLetters.test(name) !== true && name !== null);
    return name;
};
var verifAge = function () {
    var regexNumbers = new RegExp("^[0-9]+$");
    do {
        var age = prompt("Saisissez un Age");
    } while (regexNumbers.test(age) !== true && age !== null);
    return age;
};






var start = function () {
    var idBtn = document.getElementById('trigger_greetings');
    idBtn.addEventListener("click", function helloUser() {
        var i;
        for (i = 0; i < tableauUser.length; i++) {
            var precedent = tableauUser[i - 1];

            if (precedent === undefined) {
                tableauUser[i].sayHello("ah ... j'suis tout seul")
            } else {
                tableauUser[i].sayHello(precedent.name)
            }
        }
    })




};
window.addEventListener("DOMContentLoaded", start);
