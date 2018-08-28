var guiHint = function (article) {
    console.log(article.getAttribute("data-nom-prod"));
};

var start = function () {
        //on recup les btn dans la div shop
        var btns = document.querySelectorAll("#shop .btn");
        //boucle forEach 
        btns.forEach((b) => {
            // ajout d'un event onclick des btns qui appelle la fonction guiHint avec en parametre le parent de chaque btn 
            b.onclick = () => {
                guiHint(b.parentElement);
            }
        })
