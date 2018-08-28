/** 
 * @fileOverview Documentation décrivant les fonctions crée dans function parametre return I
 * @author Flex
 * @version 3.7.4
 */

/*global document*/
// Enoncé 1


/** @function one */
/**
 * La fonction one permet de faire une alerte
 * @author Flex
 */

var one = function () {
    alert("salut ca va");
};
one();



// Enoncé 2

/** @function hello */
/** 
 * La fonction hello envois un "hello" dans la console
 * @author Flex
 */
var hello = function () {
    console.log("hello");
};

console.log(hello());

// Enoncé 3
/** @function dymmyReturn */
/** 
 * La fonction retourne le parametre 
 * @author Flex
 * @param {whatever} un parametre quelconque
 */

var dummyReturn = function (p) {
    return p;
};
console.log(dummyReturn(13));

// Enoncé 4
/** @function foo */
/** 
 * La fonction retourne la string bar 
 * @author Flex
 */

var foo = function () {
    return "bar";
};

console.log(foo());

// Enoncé 5
/** @function helloWho */
/** 
 * La fonction retourne hello suivis du nom entré en parametre  
 * @author Flex
 * @param {string} le parametre nom
 */

var helloWho = function (n) {
    return "hello " + n;
};

console.log(helloWho("maggle"));

// Enoncé 6
/** @function isNumber */
/** 
 * La fonction Retourne true si n est un nombre, false sinon. 
 * @author Flex
 * @param {whatever} un parametre quelconque
 */

var isNumber = function (n) {
    if (isNaN(n) === false) {
        return true;
    } else {
        return false;
    }
};

console.log(isNumber(12));
console.log("true");
console.log(isNumber(true));
console.log("nan");
console.log(isNumber(NaN));

// Enoncé 7
/** @function contraire */
/** 
 * Si b n’est pas une booléen, retourner une nouvelle Erreur. Sinon retourner le booléen contraire de b.  
 * @author Flex
 * @param {whatever} un parametre quelconque
 */

var contraire = function (b) {
    if (typeof (b) !== "boolean") {
        return new Error("Erreur, entrer un booleen");
    } else {
        return !b;
    }
};

console.log(contraire("bendo"));

// Enoncé 8
/** @function isEmpty */
/** 
 * 
 * La fonction retourne true: Si p est un tableau et que sa longueur est nulle. Si p est une string de taille 0. Si p est un objet sans aucune 
 * propriété. Sinon isEmpty retourne false.
 * @author Flex
 * @param {whatever} un parametre quelconque
 */

var isEmpty = function (p) {
    if (Array.isArray(p) === true && p.length == 0) {

        return "tableau vide";
    } else if (typeof (p) === "") {
        return "chaine vide";
    } else if (Object.keys(p).length == 0 && typeof (p) === "object") {
        return "objet vide";
    } else {
        console.log(p.length);
        return false;
    }
};
console.log("------isEmpty----->");
console.log(isEmpty(["bonbon"]));


//Enoncé 9
/** @function addCSSClass */
/**
 * La fonction Sélectionne le (ou les) objet(s) HTML trouvés avec s. Ajouter à chaque élément la classe css, sans écraser les autres classes. 
 * Retourne un tableau contenant le ou les éléments modifiés.    
 * @author Flex
 * @param {string} s - parametre représentant le selecteur css
 * @param {string} css - parametre représentant la classe a ajouter
 */

var addCSSClass = function (s, css) {
    var queryall = document.querySelectorAll(s);
    console.log("----selector---->");
    console.log(queryall);
    var i;
    for (i = 0; i < queryall.length; i++) {
        queryall[i].classList.add(css);
    }
    return queryall;
};

//function load

var start = function () {
    addCSSClass("div", "bendo");

    console.log("-----isEmpty?--->");

}
document.addEventListener("DOMContentLoaded", start);
