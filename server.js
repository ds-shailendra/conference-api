var express		= 	require('express'),
	bodyParser	= 	require('body-parser');

//start the express web framework

var app = express();
app.use(bodyParser());

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/conference-api');

app.listen(port);
console.log('test post'+ port);


var Speaker = require('./server/models/speaker');

//defining the routes starts $exceptionHandlerProvider
var router = express.Router();

router.user(function(req,res,next){
	console.log("routing test");
	next();
});