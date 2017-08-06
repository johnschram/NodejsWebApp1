/* Pre checks */
Server = require('./lib/server/server');
Client = require('./lib/client/client');
SendEmail = require('./lib/server/email');

Client.ModuleCheck();
Server.ModuleCheck();
//SendEmail.email();







var http = require('http');
var port = process.env.port || 1337;
/*
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
*/