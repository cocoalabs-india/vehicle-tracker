var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
//var methods = require('./api/models/trackingModel');


var data = [
  "DEV123145",
  '2017-05-26',
  '9.5662',
  '76.2128',
  '80',
  '0',
  '52.22'
];
//methods.data.pushtoDb(data);
var message = new Buffer(data);


var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
  //  console.log(data);
    console.log('UDP message sent to ' + HOST +':'+ PORT + message);
    client.close();
});
