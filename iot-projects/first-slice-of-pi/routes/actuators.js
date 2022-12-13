const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

	router.route('/').get(function (req, res, next) {
		res.send(resources.pi.sensors);
	 });
	 
	 router.route('/leds').get(function (req, res, next) {
		res.send(resources.pi.sensors.leds);
	 });

	 router.route('/leds/:1').get(function (req, res, next) {
		res.send(resources.pi.actuators.leds[req.params.id]);
	});

	router.route('/leds/:2').get(function (req, res, next) {
		res.send(resources.pi.actuators.leds[req.params.id]);
	});

module.exports = router;
