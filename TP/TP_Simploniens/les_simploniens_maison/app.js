/* global window*/
//On va faire une fonction qui va nous permettre de crée des simploniens 

var usineSimploniens = function (n, a, c) {
    "use strict";
    return {
        name: n,
        age: a,
        catchPhrase: c
    };
};

//On crée notre tableau simplonien et on y met nos objet avec un push
var tableauSimploniens = [];
tableauSimploniens.push(usineSimploniens("Alex", 23, "On code pas nouuus?"));
tableauSimploniens.push(usineSimploniens("Sirine", 22, "T'es un guedin gros"));
tableauSimploniens.push(usineSimploniens("Nico", undefined, "Ouais mais c'est d'la merde"));
tableauSimploniens.push(usineSimploniens("Gui", 37, "Alors c'est true ou false ?"));

window.console.log(tableauSimploniens);

//On fait une fonction qui va nous permettre de parcourir le tableau 

var parcourirSimplon = function () {
    "use strict";
    tableauSimploniens.forEach(function (simp) {
        addLi(simp.name, simp.age, simp.catchPhrase);

    });
};

//parcourirSimplon();


//On fait une fonction qui va créer des li dans notre ul et qui va écrire une phrase dedans

var addLi = function (name, age, catchPhrase) {
    "use strict";
    var dad = document.getElementById("ul"),
        li = document.createElement("li"),
        liCree = dad.appendChild(li);
    liCree.innerHTML = `Lui c'est ${name} il a ${age} clique pour savoir sa catchphrase `;
    liCree.addEventListener("click", function (simp) {
        alert(catchPhrase);
    })
};

var start = function (e) {
    parcourirSimplon();
    console.log("----try src----->");
    console.log(e.target);
}
window.addEventListener("DOMContentLoaded", start);
