// Exercice 1

var deleteNode = function (list) {
    var node = document.querySelectorAll(list);
    node.forEach(function (e) {
        e.remove();
    })

};


//Exercice 2 

var isOdd = function (numb) {
    var typeNum = typeof numb;
    if (typeNum !== "number") {
        throw "Le parametre n'est pas un nombre";
    } else if (numb % 2 !== 0) {
        return true;
    } else return false;
};

// Exercice 3

var sum = function (arr) {
    var i, somme = 0;
    for (i = 0; i < arr.length; i++) {
        var typeNum = typeof arr[i];
        if (typeNum !== "number") {
            throw "Le parametre n'est pas un nombre";
        } else somme += arr[i];
    }
    return somme;
};


// Exercice 4 

var getNodesMetrics = function (nl) {
    var node = document.querySelectorAll(nl),
        tableau = [];
    node.forEach(function (e) {
        var haut, larg;
        haut = e.offsetHeight || e.style.pixelHeight;
        larg = e.offsetWidth || e.style.pixelWidth;

        tableau.push({
            element: e,
            height: haut,
            width: larg
        })
    })
    return window.console.log(tableau);
};



// Exercice 5 


var usingCallback = function (clbk) {
    clbk();
};

usingCallback(function () {
    window.console.log("Salut ca va");
});





var start = function () {
    getNodesMetrics(".ex1");
}
document.addEventListener("DOMContentLoaded", start);
