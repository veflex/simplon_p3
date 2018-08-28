var app = (function () {
    var myFirstAjaxGet = function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function (evt) {
            window.console.log(this);
            window.console.log(this.response);
            var res = JSON.parse(this.response);
            window.console.log(res);
            displayData(res.records);
        };
        xhr.send();
    }
    var parseRecordProperties = function (record) {
        for (let prop in record) {
            if (record.hasOwnProperty(prop)) {
                window.console.log("prop ======>");
                window.console.log(prop);
                window.console.log("value ======>");
                window.console.log(record[prop]);
            }
        }
    }
    var displayData = function (tablo) {
        tablo.forEach(function (e) {
            parseRecordProperties(e);
            var li = document.createElement("li");
            var idUl = document.getElementById('ul');
            var liCree = idUl.appendChild(li);
            liCree.innerHTML = "Vous pouvez acceder au wifi au " + e.fields.adresse + " dans le " + e.fields.arrondissement;
        })
    }
    var start = function () {
        var site = "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_sites_des_hotspots_paris_wifi&rows=100&facet=arrondissement"
        myFirstAjaxGet(site)
    }
    document.addEventListener("DOMContentLoaded", start);
}());
