var express = require('express'),
	path = require('path'),
	app = express();



// app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/public')));
// app.use('/controllers', express.static(__dirname + '/public/controllers'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(3000, function () {

console.log("listening on port 3000");

});