var express = require('express');
var bodyParser  = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var db = require('../database/index.js');
var Stock = require('../database/Stock.js');

var port = 8080;
var app = express();


//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public/'));

app.get('/stocks/:query', (req, res) => {
    var query = req.params.query;
    var dbQuery = {ticker : req.params.query}

     if(parseInt(query)) {
         dbQuery = {id : req.params.query}
     }
    

    Stock.find(dbQuery, (err, data) => {
        if(err) { 
            throw err;
        }
            res.send(JSON.stringify(data))
    });
    
})


app.listen(port, () => {
    console.log('Server listening on port ', port);
})
