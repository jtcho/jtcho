// Main site entry point.
// Serves simple static content.

var express = require('express');
var app = express();
app.use(express.static('dist'));
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/dist/about.html');
});
app.get('/work', function(req, res) {
    res.sendFile(__dirname + '/dist/work.html');
});
app.get('/projects', function(req, res) {
    res.sendFile(__dirname + '/dist/projects.html');
});
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
})
app.listen(8080);
