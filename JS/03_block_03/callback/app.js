var getDataViaAjax = function (clbk) {
    var xhr = new XMLHttpRequest();
    var url = "./data.json";
    xhr.open("GET", url);
    xhr.onload = function (evt) {
        clbk(JSON.parse(this.response));
    };
    xhr.send();
}
var getAjaxResp = function (resp) {
    window.console.log(resp);
}

var start = function () {
    getDataViaAjax(getAjaxResp);
}
document.addEventListener("DOMContentLoaded", start);
