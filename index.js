
'use strict';
var firebase = require('firebase');

//var methods = require('./api/models/trackingModel');


 var config = {
    apiKey: "AIzaSyDCDxn-15yf_gxSZGFqbwOixF_nh_KxGDw",
    authDomain: "vehicle-tracking-ef829.firebaseapp.com",
    databaseURL: "https://vehicle-tracking-ef829.firebaseio.com",
    projectId: "vehicle-tracking-ef829",
    storageBucket: "vehicle-tracking-ef829.appspot.com",
    messagingSenderId: "561100428925"
  };

firebase.initializeApp(config);
//console.log(methods);


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




      //
      // var data = {
      //   deviceId:"DEV123145",
      //   timestamp:'2017-05-26',
      //   lat:'9.5662',
      //   lng:'76.2128',
      //   speed:'80',
      //   igniStatus:'0',
      //   meterReading:'52.22'
      // };
  //    methods.data.pushtoDb(data);
    //  methods.data.trackDb(data);
//startListeners();
//startWeeklyTopPostEmailer();
