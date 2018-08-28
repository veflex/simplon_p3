var createElemIn = function (elem, parent) {
    var dad = document.getElementById(parent),
        element = document.createElement(elem),
        elementCreated = dad.appendChild(element);
    return elementCreated;
}
var addAllElemCreated = function () {
    var numberInput = document.getElementById('number'),
        number = numberInput.value,
        colorInput = document.getElementById('color'),
        color = colorInput.value,
        i;
    for (i = 0; i < number; i += 1) {
        var newElem = createElemIn("div", "blocks");
        newElem.style.background = color;
        newElem.addEventListener("click", function () {
            this.classList.toggle("border");
        })
    }
}
var start = function () {
    var button = document.getElementById('valider'),
        suppr = document.getElementById('suppr');
    button.addEventListener("click", function () {
        var divClicked = document.querySelectorAll('#blocks .border');
        window.console.log(divClicked);
        if (divClicked.length === 0) {
            addAllElemCreated();
        } else {
            var colorInput2 = document.getElementById('color'),
                color2 = colorInput2.value;
            divClicked.forEach(function (e) {
                e.style.background = color2;
                e.classList.remove("border")
            })
        }
    })
    suppr.addEventListener("click", function () {
        var divClicked = document.querySelectorAll('#blocks .border');
        if (divClicked.length === 0) {
            var allDivs = document.querySelectorAll('#blocks div');
            allDivs.forEach(function (e) {
                e.remove();
            })
        } else divClicked.forEach(function (e) {
            e.remove();
        })
    })
};
window.addEventListener("DOMContentLoaded", start);
