const express = require ('express') 
let app = express.Router ()

app.get ('/', function (req, res) { 
    res.send ('Página del panel de control del dasnsd'); 
});
app.get ('/crear', function (req, res) { 
    res.send ('Crear '); 
});

module.exports = app