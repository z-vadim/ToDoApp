var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//----- db -----
var database = require('./config/database');
mongoose.connect(database.url);

//----- config -----
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());


//===== routes =====
require('./app/routes')(app);
//===== listen =====
app.listen(3000);
console.log("App listening on port 3000");