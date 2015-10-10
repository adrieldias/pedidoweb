// config/express.js
var bodyParser = require('body-parser');
var load = require('express-load');
var express = require('express');


module.exports = function(){
	var app = express();
	//var home = require('../app/routes/home');
	
	// variável de ambiente
	app.set('port', 3000);
	
	// middleware
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;	
};
