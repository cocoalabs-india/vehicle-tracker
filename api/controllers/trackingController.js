'use strict';


//var firebase = require("firebase/app");
//var trackings = require( '../models/trackingModel' );
//tracking = new trackingModel();
// exports.list_all_tasks = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

var methods = {};


insertDb: function() {
	//	console.log('Current Time in Unix Timestamp: ' + Math.floor(Date.now() / 1000));
  tracking.pushtoDb("#DEV123415",'2017-05-25','9.5662','76.2128','80','0','52.22',function(err,task){

	};


  module.exports = pushtoDb;

//exports.addTracking = function(req, res) {
  //data = ["#DEV12345",2017-05-25,9.5662,76.2128,80,0,52.22];
  // tracking.pushtoDb("#DEV12345",'2017-05-25','9.5662','76.2128','80','0','52.22',function(err,task){
  //
  // });
  //
  //
    // if (err)
    //   res.send(err);
    // res.json(task);

//};


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
//
//
// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
//
//
// exports.delete_a_task = function(req, res) {
//
//
//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
