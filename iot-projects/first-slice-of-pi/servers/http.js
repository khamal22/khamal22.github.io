const express = require('express'),
	cors = require('cors');
	
	var app = express(cors);

	app.get('/', function(req, res){
		res.send('root accessed');
	 });

module.exports = app;



//i have looked through all files//