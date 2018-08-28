/* global window*/




// Enoncé 1
var one = function () {
    "use strict";
    window.alert("salut ca va");
};
//one();

// Enoncé 2

var hello = function () {
    "use strict";
    window.console.log("hello");
};
//window.console.log(hello());

// Ca affiche hello et undefined car la fonction affiche le message et retourne la valeur par defaut 

//Enoncé 3

var dummyReturn = function (p) {
    "use strict";
    return p;
};

//window.console.log(dummyReturn());
//var x = dummyReturn();
//window.console.log(x);



// Enoncé 4

var foo = function () {
    "use strict";
    return "bar";
};

//window.console.log(foo());
//var y = foo();
//window.console.log(y);

//????????????,

//Enoncé 5

var helloWho = function (nom) {
    "use strict";
    return "hello" + nom;
};

//window.console.log(helloWho());
//var z = helloWho();
//window.console.log(z);


// Enoncé 6

var isNumber = function (n) {
    if (isNaN(n) === false) {
        return true;
    } else {
        return false;
    }
};

//window.console.log(isNumber());
//var a = isNumber();
//window.console.log(a);


// Enoncé 7

var contraire = function (b) {
    if (typeof (b) === "boolean") {
        return !b;
    } else {
        window.alert("pas booleen");
    }
};

//window.console.log(contraire());
//var b = contraire();
//window.console.log(b);


// Enoncé 8

var isEmpty = function (p) {
    if (Array.isArray(p) == true && p.length == 0) {
        return true;
    } else if (typeof (p) === "string" && p.length == 0) {
        return true;
    } else if (typeof (p) === "object" && Object.keys(p).length == 0) {
        return true;
    } else {
        return false;
    }
}
//window.console.log("EMPTY ---------->");
//window.console.log(isEmpty({}));

//var c = !isEmpty([]);
//window.console.log(c)

// Enoncé 9


var addCSSClass = function (s, css) {
    document.querySelectorAll(s).className += css;



}
window.addEventListener("DOMContentLoaded", addCSSClass);
addCSSClass("div", "bendo");
