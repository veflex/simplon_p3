var forCeption = function () {
    var bigTablo = [
        [{
                name: "joe",
                age: 22
        }, {
                name: "ben",
                age: 22
        }, {
                name: "sam",
                age: 22
        }],
        [{
                name: "ale",
                age: 22
        }, {
                name: "big",
                age: 22
        }, {
                name: "do",
                age: 22
        }],
        [{
                name: "wussup",
                age: 22
        }, {
                name: "2-7",
                age: 22
        }, {
                name: "kaaris",
                age: 22
        }]
    ],
        i, j;

    for (i = 0; i < bigTablo.length; i += 1) {
        for (j = 0; j < bigTablo[i].length; j += 1) {
            window.console.log("salut moi c'est " +
                bigTablo[i][j].name + " et j'ai " + bigTablo[i][j].age + " ans");
        }
    }
}
