var express = require('express');
var path = require('path');

var events = require('./eventsController');

// create the express application
var app = express();

// __dirname points to the current directory
// we're going to the root directory
var rootPath = path.normalize(__dirname + '/../');

var bodyParser = require('body-parser');
app.use(bodyParser.json());


// serve all the files inside app directory
// without processing using the static method
app.use(express.static(rootPath + '/app'));


app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);

app.get('*', function(req, res){res.sendFile(rootPath + '/app/index.html');});

// listening to port 8000
app.listen(8000);
console.log('Listening to port 8000...');