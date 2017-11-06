var express = require('express');
var app = express();

// setup ports

var DEFAULT_PORT =  process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

console.log((__dirname + '/src/assets'));
app.use(express.static(__dirname + '/src/assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


//routes
//require('./src/app/app-routing.module.ts')(app);

// server listens in on port
app.listen(DEFAULT_PORT, server_ip_address, function () {
	 console.log( "Listening on " + server_ip_address + ", server_port " + DEFAULT_PORT );
});
