var express = require('express');
var path = require('path');

// create the express application
var app = express();

// __dirname points to the current directory
// we're going to the root directory
var rootPath = path.normalize(__dirname + '/../');

// serve all the files inside app directory
// without processing using the static method
app.use(express.static(rootPath + '/app'))

// listening to port 8000
app.listen(8000);
console.log('Listening to port 8000...');