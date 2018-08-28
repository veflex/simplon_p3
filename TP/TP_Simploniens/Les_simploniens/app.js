var creeSimplonien = function (n, a, c) {
    return {
        name: n,
        age: a,
        catchPhrase: c,
    }
};
// Création du tableau

var tableauObject = [];
tableauObject.push(creeSimplonien("alex", 23, "bendo"));
tableauObject.push(creeSimplonien("gui", 37, "true ou false ?"));
tableauObject.push(creeSimplonien("siriné", 22, "t'es guedin"));
tableauObject.push(creeSimplonien("nico", undefined, "c'est d'la merde"));
console.log(tableauObject);

//fonction de parcours du tableau + appel de la fonction de création de Li avec les parametre des objets  
var parcourirSimploniens = function () {
    tableauObject.forEach(function (simp) {
        addLi(simp.name, simp.age, simp.catchPhrase);
    });
};

//fonction ajout de li dans la ul + ecriture dans la Li
var addLi = function (name, age, catchPhrase) {
    var parent = document.getElementById("ul");
    var li = document.createElement("li");
    var liCree = parent.appendChild(li);
    liCree.innerHTML = "Lui c'est " + name + " il a " + age + " et il kiff trop dire " + catchPhrase;
    liCree.addEventListener("click")
};

var start = function () {
    parcourirSimploniens();
}
document.addEventListener("DOMContentLoaded", start);
