require('newrelic');
var express = require('express');
// var bodyParser  = require('body-parser');
var cors = require('cors');
var db = require('../database/postgresQueries');

var port = 8080;
var app = express();


//middleware
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use('/stocks/:id', express.static(__dirname + '/../public/'));

app.get('/api/stocks/:query', db.getStock)


app.listen(port, () => {
    console.log('Server listening on port ', port);
})
