var start = function () {
    var s = document.getElementById('fade').style;
    s.opacity = 1;

    function fade() {
        (s.opacity -= .1) < 0 ? s.display = "none" : setTimeout(fade, 500)
    }

    fade();
}
document.addEventListener("DOMContentLoaded", start);
