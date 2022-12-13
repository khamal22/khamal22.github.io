const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

	router.route('/').get(function (req, res, next) {
		res.send(resources.pi.sensors);
	 });
	 
	 router.route('/leds').get(function (req, res, next) {
		res.send(resources.pi.sensors.leds);
	 });

	 router.route('/leds1/:id').get(function (req, res, next) {
		res.send(resources.pi.actuators.leds1[req.params.id]);
	});

	router.route('/leds2/:id').get(function (req, res, next) {
		res.send(resources.pi.actuators.leds2[req.params.id]);
	});

module.exports = router;
