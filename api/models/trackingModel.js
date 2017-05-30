var firebase = require("firebase/app");
//var firebase = require('firebase');

//require('firebase/database');
// require('firebase/auth');
//
//  var config = {
//     apiKey: "AIzaSyDCDxn-15yf_gxSZGFqbwOixF_nh_KxGDw",
//     authDomain: "vehicle-tracking-ef829.firebaseapp.com",
//     databaseURL: "https://vehicle-tracking-ef829.firebaseio.com",
//     projectId: "vehicle-tracking-ef829",
//     storageBucket: "vehicle-tracking-ef829.appspot.com",
//     messagingSenderId: "561100428925"
//   };
//
// firebase.initializeApp(config);
// //const db = firebase.database();
//
//
// console.log('Authenticating...');
// firebase.auth().signInWithEmailAndPassword('salucocoalabs@gmail.com', 'salucoco').catch(error => {
//     console.log('Error while authenticating:', error);
//       }).then(loginObject => {
//           if (loginObject) {
//               console.log('Success!!');
//               // now do your thing!
//                firebase.database().ref('vehicle/' + loginObject.uid);
//               // do something with something
//               console.log(loginObject.uid);
//
//           } else {
//               console.log('Oops, something went wrong while authenticating:', loginObject);
//           }
//       });


// var vehicleRef = firebase.database().ref('vehicle_data').child('device');
// var newMessageRef = messageListRef.push();
// newMessageRef.set({
//   'user_id': 'ada',
//   'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
// });
//
//
//   var  vehicle = {text:"car",timestamp:new Date().toString()};
//   var ref = firebase.database().ref();
//   var logsRef = ref.child('logs');
//   var vehicles = ref.child('vehicle');
//   var vehicleRef = vehicles.push(vehicle);

//pushtoDb("#DEV12345",2017-05-25,9.5662,76.2128,80,0,52.22);

var methods = {
  pushtoDb:function (data) {
  //pushtoDb:function (deviceId, timestamp, lat, lng,speed,igniStatus,meterReading) {
  //var data =  decoder.write(data);
  console.log(data+"datasssss");
     firebase.database().ref('vehicle_data/').child(data.deviceId).push({
        timestamp: data.timestamp,
        latitude: data.lat,
        longitude :data.lng,
        speed:data.speed,
        ignitionStatus:data.igniStatus,
        audometerReading:data.meterReading
    });
},
  trackDb:function(data){
      firebase.database().ref('tracking_data/').push({
       device_id:data.deviceId,
       timestamp: data.timestamp,
       latitude: data.lat,
       longitude :data.lng,
       speed:data.speed,
       ignitionStatus:data.igniStatus,
       audometerReading:data.meterReading
   });

  }
}
exports.data = methods;
