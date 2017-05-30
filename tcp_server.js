/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp
server, but for some reason omit a client connecting to it.  I added an
example at the bottom.

Save the following server in example.js:
*/
//
// var net = require('net');
//
// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.pipe(socket);
// });
//
// server.listen(1337, '127.0.0.1');



//  var net = require('net');
//
//  var client = new net.Socket();
//  client.connect(1337, '127.0.0.1', function() {
//  console.log('Connected');
//  client.write('Hello, server! Love, Client.');
// });
//
// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });
//
// client.on('close', function() {
// 	console.log('Connection closed');
// });


var data = {
  deviceId:"EVA12345",
  timestamp:'2017-05-29',
  lat:'9.5662',
  lng:'76.2128',
  speed:'80',
  igniStatus:'0',
  meterReading:'52.22'
};
//
var net = require('net');

var HOST = '127.0.0.1';
var PORT = 33333;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
//  net.createServer(function(sock) { console.log(3333);
//     // We have a connection - a socket object is assigned to the connection automatically
//     console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
//
//     // Add a 'data' event handler to this instance of socket
//     sock.on('data', function(data) {
//
//         console.log('DATA ' + sock.remoteAddress + ': ' + data);
//         // Write the data back to the socket, the client will receive it as data from the server
//         sock.write('You said "' + data + '"');
//
//     });
//
//     // Add a 'close' event handler to this instance of socket
//     sock.on('close', function(data) {
//         console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
//     });
//
// }).listen(PORT, HOST);
//
// console.log('Server listening on ' + HOST +':'+ PORT);


var net = require('net');
var server = net.createServer();
// server.listen(1337, '127.0.0.1'); console.log(server);
 server.listen(1337, function () {
// console.log('Server listening at port %d', 1337);
		//console.log('Server listening on ' + server.address().address +':'+ server.address().port);

});
server.on('connection', function(sock) {

    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    // other stuff is the same from here

});
