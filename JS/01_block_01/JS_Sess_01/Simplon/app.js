/*global window*/


/* function qui fait pop une fenetre et qui ecrit le message */
var displayTextBox = function (msg) {
    "use strict";
    window.alert(msg);
};

displayTextBox("wesh");


/* function qui ecrit bonjour + nomdelapersonne */
/* cette fonction retourne le nombre de lettre du nom */

var sayHello = function (name) {
    "use strict";
    window.console.log("Salut " + name);
    return (name.length);
};

// on met le resultat dans des variables

var result1 = sayHello("Alex");
var result2 = sayHello("Bebouz");

// on affiche 

window.console.log(result1);
window.console.log(result2);



// Exercice 2 

var double = function (a, b) {
    "use strict";
    window.console.log(a + " " + b);

};

var test = double("salut", "ca va");

window.console.log(test);


// Exercice 3

var multi = function (a, b) {
    "use strict";
    var result = a * b;

    if (isNaN(result) === false) {
        return result;
    } else {
        window.alert("c'est pas un nombre");
    }

};

var test2 = multi("a", 2);

window.console.log(test2);



// Exercice 4
/*global document*/


//var user1 = {
//
//    name: "Alex",
//    age: 23
//};
//var user2 = {
//
//    name: "Flex",
//    age: 17
//};
//
//var getName = function (user) {
//    "use strict";
//    return user.name;
//};
//
//var getAge = function (user) {
//    "use strict";
//    return user.age;
//};
//
//var afficherInfoUser = function (user) {
//    "use strict";
//    return "cet utilisateur se nommant " + getName(user) + " est agé de " + getAge(user);
//};
//
//

//var start = function () {
//    "use strict";
//    window.console.log("DOM LOADED PAPY !!!!");
//    var divCible = document.getElementById("res_user1");
//    window.console.log("divCible ----->");
//    window.console.log(divCible);
//    divCible.innerHTML = afficherInfoUser(user1);
//    divCible.innerHTML += afficherInfoUser(user2);
//
//};
//
//
//
//window.addEventListener("DOMContentLoaded", start);


//Exercice 5




var afficherId = function () {
    "use strict";
    var table = document.getElementById("parent").children; //
    window.console.log(table);
    var para = document.getElementById("p1");
    var i;
    for (i = 0; i < table.length; i++) {
        para.innerHTML += "id n° " + (i + 1) + " " + table[i].id + "</br>";
    }
};

window.addEventListener("DOMContentLoaded", afficherId);


//Exercice 6

//var clique = function (elm) {
//    elm.style.backgroundColor = "blue";
//};
var changeBgAll = function (s, color) {
    var elm = document.querySelectorAll(s);
    var changeBg = function (event) {
        event.target.style.backgroundColor = color;
        console.log("----typeof----->");
        console.log(typeof event);
    }
    var i;
    for (i = 0; i < elm.length; i++) {
        elm[i].addEventListener("click", changeBg)
    }
};






//console.log(elm);
//elm.addEventListener("click", function (event) {
//    event.target.style.backgroundColor = "purple";
//})


var start = function () {
    changeBgAll("h1", "orange");
    changeBgAll("div>div", "blue");
}
document.addEventListener("DOMContentLoaded", start);
