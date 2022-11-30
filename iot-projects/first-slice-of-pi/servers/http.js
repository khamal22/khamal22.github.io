const express = require('express'),
	cors = require('cors');
	
	var app = express();
	app.use(cors());

	app.get('/', function(req, res){
		res.send('Some response for accessing the root');
	 });

module.exports = app;



//i have looked through all files//