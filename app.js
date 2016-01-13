var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 3000);
