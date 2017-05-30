var PORT = 1337;
var HOST = '127.0.0.1';
var methods = require('./api/models/trackingModel');
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var message = {
  deviceId:"EVA12345",
  timestamp:'2017-05-29',
  lat:'9.5662',
  lng:'76.2128',
  speed:'80',
  igniStatus:'0',
  meterReading:'52.22'
};

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {

    methods.data.pushtoDb(message);
    console.log("hai"+remote.address + ':' + remote.port +' - ' + message);

});

methods.data.pushtoDb(message);
methods.data.trackDb(message);
server.bind(PORT, HOST);
