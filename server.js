var express = require('express');
var app = express();

var constants = require('./constants.js');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/files/index.html');
});

app.get('/:name', function(req, res) {
    res.sendFile(req.params.name, { root: __dirname + '/files/' });
});

app.enable('trust proxy');

app.listen(constants.SERVER_PORT, constants.SERVER_IP_ADDR);
