var panier = (function () {

    var Product = function (obj) {
        this.ref = obj.ref;
        this.prix = obj.prix;
        this.quantite = obj.quantite;
    }
    var productsArray = [],
        harley, shirt, batmobile;

    harley = new Product({
        ref: "Harley 4007",
        prix: 12665,
        quantite: 0
    })
    shirt = new Product({
        ref: "ShirtXgr12",
        prix: 37,
        quantite: 0
    })
    batmobile = new Product({
        ref: "Batmobile",
        prix: 900000,
        quantite: 0
    })

    var addProducts = function (prod) {
        productsArray.push(prod)
        return productsArray;
    };

    var nbProducts = function () {
        return productsArray.length;
    };


    var guiHint = function (article) {
        console.log(article.getAttribute("data-nom-prod"));
    };

    var start = function () {

        var btns = document.querySelectorAll("#shop .btn");
        btns.forEach((b) => {
            b.onclick = () => {
                guiHint(b.parentElement);
            }
        })


        return;
        var panier = document.getElementById('panier'),
            cart = document.getElementById('cart'),
            articles = document.getElementById('articles'),
            achats = document.getElementById('achats'),
            obj1 = document.getElementById('obj1'),
            obj2 = document.getElementById('obj2'),
            obj3 = document.getElementById('obj3'),
            tot1 = 0,
            tot2 = 0,
            tot3 = 0,
            tot = 0,
            total = document.getElementById('tot');
        document.getElementById('obj_1').addEventListener("click", function () {
            addProducts(shirt);
            panier.innerHTML = nbProducts();
            shirt.quantite += 1;
            tot1 = shirt.prix * shirt.quantite;
            obj1.innerHTML = "Vous avez " + shirt.quantite + " " + shirt.ref + " " + tot1 + "€";
            total.innerHTML = "Votre total : " + tot1 + tot2 + tot3 + "€";
        });
        document.getElementById('obj_2').addEventListener("click", function () {
            addProducts(harley);
            panier.innerHTML = nbProducts();
            harley.quantite += 1;
            tot2 = harley.prix * harley.quantite;
            obj2.innerHTML = "Vous avez " + harley.quantite + " " + harley.ref + " " + tot2 + "€";
            total.innerHTML = "Votre total : " + tot1 + tot2 + tot3 + "€";
        });
        document.getElementById('obj_3').addEventListener("click", function () {
            window.console.log(addProducts(batmobile));
            panier.innerHTML = nbProducts();
            batmobile.quantite += 1;
            tot3 = batmobile.prix * batmobile.quantite;
            obj3.innerHTML = "Vous avez " + batmobile.quantite + " " + batmobile.ref + " " + tot3 + "€";
            total.innerHTML = "Votre total : " + tot1 + tot2 + tot3 + "€";
        });


        cart.addEventListener("click", function () {


            achats.classList.toggle("is-revealed");
        });


    }
    document.addEventListener("DOMContentLoaded", start);


}());
