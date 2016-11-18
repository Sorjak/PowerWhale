var fs = require('fs');
var express = require('express');
var app = express();

var server = require('http').Server(app);

app.set('view engine', 'ejs');
app.set('view options', { layout: false });

app.use('/node', express.static(__dirname + '/node_modules/'));
app.use('/bin', express.static(__dirname + '/bin/'));
app.use('/js', express.static(__dirname + '/js/'));
app.use('/css', express.static(__dirname + '/css/'));
app.use('/images', express.static(__dirname + '/images/'));

app.get('/', function(req, res) {
    res.render("index");
});

const socketFile = __dirname + '/powerwhale.sock';

// check for socket file and delete if exists

fs.access(socketFile, fs.F_OK, (err) => {
    if (err) {
        start_server();
    }
    else {
        fs.unlink(socketFile, (err) => {
            if (err) throw err;
            start_server();
        });
    }
});

function start_server() {
    server.listen(socketFile);

    server.on('listening', function() {
        fs.chmodSync(socketFile, '777');
    });

    console.log('Server running at ' + socketFile);
}