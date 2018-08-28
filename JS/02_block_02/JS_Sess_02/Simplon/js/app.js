// Exercice 1

var invertColor = function (e) {
    var thisBg = e.style.backgroundColor,
        sibling = e.nextElementSibling || e.previousElementSibling;
    e.style.backgroundColor = sibling.style.backgroundColor;
    sibling.style.backgroundColor = thisBg;
};



// Exercice 2 melanger

var swapLetters = function (str) {
    str = str.split("");
    for (var position = str.length - 1; position >= 1; position--) {

        //hasard reçoit un nombre entier aléatoire entre 0 et position
        var hasard = Math.floor(Math.random() * (position + 1));

        //Echange
        var sauve = str[position];
        str[position] = str[hasard];
        str[hasard] = sauve;

    }

    return console.log(str.join(""));
};
swapLetters("salut ca va mon pote");


// Exercice 2 inversé 

var inverseLetter = function (str) {
    var i, tabl = str.split(""),
        tablo = [];


    for (i = tabl.length - 1; i >= 0; i--) {

        tablo.push(tabl[i]);
    }


    return tablo.join("");

};

// Exercice 3 

var drawRow = function (row, col) {
    var y, tabl = [];
    for (y = 0; y < row; y++) {

        var i;
        tabl = [];
        for (i = 0; i < col; i++) {
            tabl.push(drawCol() + i);
        }
        window.console.log(tabl.join("") + drawCol());
    }

};

var drawCol = function () {
    return "|"
};


// Exercice 4

//var estPalindrome = function (str) {
//    var inverse = inverseLetter(str);
//    window.console.log("-----inverse----->");
//    window.console.log(inverse);
//    window.console.log(typeof inverse);
//    window.console.log("-----str----->");
//    window.console.log(str);
//    window.console.log(typeof str);
//
//    if (str == inverse) {
//        return true;
//    } else {
//        return false;
//    }
//};

var estPalindrome = function (str) {
    var regex = /\W/g;
    str = str.toLowerCase().replace(regex, "");
    window.console.log("----stringsansrien------->");
    window.console.log(str);
    var palin = inverseLetter(str);
    window.console.log("----stringinverse------->");
    window.console.log(palin);

    if (str === palin) {
        return true;
    } else {
        return false;
    }

}
