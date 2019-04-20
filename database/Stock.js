const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
    id : Number,
    name : String,
    ticker : String, 
    currentPrice : Number
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;