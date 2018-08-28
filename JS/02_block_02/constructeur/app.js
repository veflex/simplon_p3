/* global window */
var UsineSimplon = function (n, a, s) {
    "use strict";
    this.name = n;
    this.age = a;
    this.sexe = s;

};


var simp1 = new UsineSimplon("alex", 23, "G");
var simp2 = new UsineSimplon("flex", undefined, "matrix");
simp1.gimmick = "lunette teinté";
window.console.log(simp1);
