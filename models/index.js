var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quotes");

module.exports.Quote = require('./quote.js');