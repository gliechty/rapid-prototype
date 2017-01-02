'use strict'

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', function (req, res){
  res.sendFile(__dirname+"/public/index.html");
});

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('server started on', port);
});

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
})

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Gets all quotes
app.get('/quotes', function(req, res){
  console.log("get is hit");
  db.Quote.find(function(err, quotes){
    if (err) {return console.log("index err: "+err);}
      res.json(quotes);
  });
});

// gets one quote
app.get('/quotes/:id', function(req, res){
  db.Quote.findById(req.params.id, function(err, quote){
    if (err){return console.log("show err: "+err);}
      res.json(quote);
  });
});

// Ads a quote
app.post('/quotes', function (req, res){
    res.json(req.body);
    var newQuote = new db.Quote(req.body);
    newQuote.save(function(err, quote){
      if (err) {return console.log("create err:", err); }
      console.log("created", quote);
      res.json({quote:quote});
    });
});

// deletes quote
app.delete('/quotes/:id', function (req, res){
  var id = req.params.id;
  db.Quote.remove({_id : id}, function(error){
    if(error) res.json({message: 'could not delete b/c' + error});
    res.json({message: "Successfully deleted"});
  }).select('-__v');
});

// updates quote



