/*global window*/
/*global document*/


//Exercice 1
//
//var displayTextBox = function (msg) {
//    "use strict";
//    window.alert(msg);
//};
//
//window.console.log(displayTextBox("wassup"));




//Exercie 2

var double = function (a, b) {
    "use strict";
    window.console.log(a + " " + b);

};

window.console.log(double("C'est une belle journée...", "Pour s’exercer à JS!&"));




//Exercice 3

var multi = function (a, b) {
    "use strict";
    var result = a * b;
    if (Number.isFinite(result) === true) {
        return result;
    } else {
        window.alert("Erreur sur la multiplication");
    }
};

window.console.log(multi(true, 14));




//Exercice 4
//
//
var user1 = {

    name: "Alex",
    age: 23
};
var user2 = {

    name: "Flex",
    age: 17
};

var getName = function (user) {
    "use strict";
    return user.name;
};

var getAge = function (user) {
    "use strict";
    return user.age;
};

var displayUserInfo = function (user) {
    "use strict";
    document.getElementById('res_user1').innerHTML = "cet utilisateur se nommant " + getName(user) + " est agé de " + getAge(user);
};


window.console.log(displayUserInfo(user1));

// question par rapport au script en dessous du body

//Exercice 5



//var divArr = [document.querySelectorAll.getElementById("div")];
//
//window.console.log(divArr);




