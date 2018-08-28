/*global document*/
/*global console*/
var clickHandler = function (evt) {
    console.log("clicked");
    //    console.log(evt);    
    //var src = evt.srcElement || evt.target; // pour etre sur de récupérer la source sur n'importe quel navigateur
    //console.log(this); // ce this représente le btn clické
};

var applyCSS = function () {
    "use strict"
    console.log("this css");
    console.log(this);
    var div = document.getElementById("cible");
    div.classList.toggle("rounded");
}

// changer la couleur de la div au passage de la souris Version Alex

var applyCSSHover = function () {
    var div2 = document.getElementById("cible2");
    div2.addEventListener("mouseenter", function () {
        this.classList.toggle("red")
    });
    div2.addEventListener("mouseleave", function () {
        this.classList.toggle("red")
    });

};

// changer la couleur de la div au passage de la souris Version Gui

var applyCSSHoverGui = function () {
    var cibleHover = document.getElementById("cible2");

    var setHoverStyle = function (evt) {
        if (evt.type === "mouseenter") cibleHover.classList.add("red");
        else cibleHover.classList.remove("red");
    }
    cibleHover.onmouseenter = setHoverStyle;
    cibleHover.onmouseleave = setHoverStyle;
};



var start = function () {
    console.log("dom ready");
    var domElement = document.getElementById("mon_btn");
    //    applyCSSHover();
    applyCSSHoverGui();
    //    console.log(domElement);
    domElement.addEventListener("click", function (e) {
        console.log("this ano");
        console.log(this);
        clickHandler();
        applyCSS();
    });



    //    domElement.onclick = clickHandler; //syntaxe alternative
}

window.addEventListener("DOMContentLoaded", start);
