var express = require('express'),
		path = require('path');

var app = express();

// Config
app.configure(function(){
});

app.configure('development', function(){
	app.use(express.static(path.resolve('./app/client')));
})
// Main Route
app.get('/', function(req, res){
	res.sendfile(path.resolve('./app/client/index-dev.html'));
});

module.exports = app;