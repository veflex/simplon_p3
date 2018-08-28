var start = function () {

    var idRoot = document.getElementById('root'),
        idCheck = document.getElementById('check'),
        idRangeDiv = document.getElementById('rangeDiv'),
        divs = document.querySelectorAll('div#root>div');


    var enter = function () {
        this.classList.add("is-revealed");
    };


    var leave = function () {
        if (idCheck.checked === false) {
            this.classList.remove("is-revealed");
        }
    }


    idRoot.addEventListener("mouseenter", enter);
    idRoot.addEventListener("mouseleave", leave);

    idCheck.addEventListener("input", function () {
        idRoot.classList.toggle("is-revealed");
    })


    idRangeDiv.addEventListener("input", function () {
        divs.forEach(function (e) {
            var height = e.offsetHeight || e.style.pixelHeight;
            e.style.height = idRangeDiv.value + "px";
        })
        //        window.console.log(idRangeDiv.value);
    })
}
document.addEventListener("DOMContentLoaded", start);
