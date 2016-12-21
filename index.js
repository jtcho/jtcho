// Main site entry point.
// Serves simple static content.

var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(8080);
