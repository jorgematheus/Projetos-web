var http = require('http');
var app = require('./config/express');
var port = process.env.PORT|| 4500;
http.createServer(app).listen(port, function() {
	console.log('Servidor iniciado');
});
