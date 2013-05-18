var express = require('express'),
		path = require('path');

var app = express();

// Config
app.configure(function(){

});

app.configure('development', function(){
	app.use(express.static(path.resolve(__dirname, '../client')));
})
// API routes go here

// Main Route
app.get('*', function(req, res){
	res.sendfile(__dirname + '/index-dev.html');
});

module.exports = app;