const express = require("express");
const app = express();
const path = require("path");
const port = 5555;


app.use(express.static(__dirname + '/public', {
    extensions: ['html']
}));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/get-users', function (req, res) {
    console.log("tout va bien juqu'ici");
    res.send({
        data: [],
        toutResteAFaire: true
    })
})

app.listen(port, function () {
    console.log(`serveur waiting => http://localhost:${port}`);
});
