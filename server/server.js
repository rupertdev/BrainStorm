//Link dependencies
var express = require('express');
var config = require('./config.json');

//Setup server
var app = express();

//Middleware definitions
var logging = function (req, res, next) {
    console.log(new Date().toLocaleTimeString() + ' | Address: "' + req.originalUrl + '" | IP: "' + req.ip + '"');
    next();
};

//Middleware bindings
app.use(logging);

//Starts the server
app.listen(config.port, function () {
    console.log(new Date().toLocaleTimeString() + ' | ' + config.server_name + ' Express server running on port ' + config.port);
});