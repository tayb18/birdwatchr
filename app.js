var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var geocoder = require('geocoder');

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

// DB setup
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = "mongodb://localhost:27017/birdwatcher";
var db;
MongoClient.connect(mongoUrl, function(err, database){
  if (err) {
    console.log(err);
  }
  console.log("connected!");
  db = database;
  process.on('exit', db.close);
});


// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/sightings/new', function(req, res){
  res.render('form');
});

app.post('/sightings', function(req, res){
  var newSighting = req.body.sighting;
  newSighting.date = new Date();

  db.collection('sightings').insert(
  newSighting, function(err, data, result) {
    console.log(result);
    res.redirect('/api/sightings');
  });
});

app.get('/api/sightings', function(req, res) {
  db.collection('sightings').find({}).toArray(function(err, results) {
    res.json(results);
  });
});

app.listen(process.env.PORT || 3000);
