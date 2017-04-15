var express = require('express');
var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/node', express.static(__dirname + '/node_modules/'));
app.use('/bin', express.static(__dirname + '/bin/'));
app.use('/js', express.static(__dirname + '/js/'));
app.use('/css', express.static(__dirname + '/css/'));
app.use('/images', express.static(__dirname + '/images/'));
app.get('/', function (req, res) {
    res.render("index");
});
