// Main site entry point.
// Serves simple static content.

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(express.static('dist'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(express.static(process.env.STATIC_DIR));
}

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/dist/about.html');
});
app.get('/work', function(req, res) {
    res.sendFile(__dirname + '/dist/work.html');
});
app.get('/projects', function(req, res) {
    res.sendFile(__dirname + '/dist/projects.html');
});
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/dist/contact.html');
});
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
})
app.listen(8080);
