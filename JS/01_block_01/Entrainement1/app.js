
/*global window*/



// fonction heypeople

function heyPeople(nom, msg) {
    "use strict";
    window.console.log("hey " + nom + "!!!");
    
    if (msg && typeof msg === "string") {
        console.log(msg);
    }
    
    window.console.log("-------------");
    
}

heyPeople("Flex", "ca flux?");

//var objet


var flex = {nom: "Alex", pseudo: "Veflex", age: 23, sexe: "homme"};

window.console.log(flex.nom);
window.console.log(flex.pseudo);
window.console.log(flex.age);
window.console.log(flex.sexe);

window.console.log(`Le pseudo d' ${flex.nom} dans les gameZ est ${flex.pseudo} il à ${flex.age} et c'est un ${flex.sexe}`);


//fonction de creation d'objet avec different parametres

var charac = function (name, nick, age, sex) {
    "use strict";
    return {nom: name,
            pseudo: nick,
            age: age,
            sexe: sex};
};

window.console.log(charac("benoit", "ben", 13, "f"));


//fonction de création de produit 

var creerProduit = function (n, p, r, s) {
    return {
        name: n;
        price: p;
        ref: r;
        stock: s;
    };
};

var prod1 = creerProduit("synthé", 1299, "synth666", 10);
var prod1 = creerProduit("sneaker", 120, "nikerpztkt", 10);
//var prod2 = creerProduit(150, "tkt", 12); les element ne sont pas dans le bon ordre

console.log(prod1);
console.log(prod2);
console.log("prod1 === prod2");
console.log(prod1 === prod2);








