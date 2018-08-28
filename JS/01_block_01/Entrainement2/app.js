var reviserWhile = function () {
    var count = 1;

    while (count <= 100) {
        console.log(count);
        count++;
    }
};

var reviserTableauWhile = function () {
    var i = 0;
    var arr = ["a", "b", "c", "d", "e"];
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
};
reviserWhile();
reviserTableauWhile();
var reviserForEach = function () {
    var arr = ["a1", "a2", "a3", "a4"];
    arr.forEach(function (item, i) {
        console.log("-------foreach----->");
        console.log(item);
        console.log(i);
    })
};
var start = function () {
    reviserForEach();
}
window.addEventListener("DOMContentLoaded", start);
