var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/eventful', function (req, res) {
  // var data = JSON.parse(req.body);
  console.log(req.body);
  var loc = '&l=' + req.body.location.split(' ').join('+');

  var topic = req.body.topic;
  var app_key = 'app_key=CwcF9Lt3qkKh4gWB';
  var options = {
    method: 'GET',
    url: 'http://api.eventful.com/json/events/search?' + app_key + loc + '&date=future&categories=' + topic ,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  request(options, function(err, reponse, body) {
    if (err) {
      console.log(err);
    } else {
      var data = JSON.parse(body);
      var data = data.events.event;
      res.send(data);
    }
  })

});

app.get('/eventful', function (req, res) {
  models.users.get()
  .then((result)=>{
    console.log(result);
    res.send(result);
  })
});

app.get('/meetup', function(req, res) {
  res.send('get sucessful at meetup');
});

app.post('', function (req, res) {
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

/*
var loc = '&l=' + req.query.location.split(' ').join('+');
  var topic = '&q=' + req.query.topic;
  var options = {
    app_key: 'app_key=CwcF9Lt3qkKh4gWB',
    url: 'http://api.eventful.com/json/events/search?' + this.app_key + topic + loc + '&date=future',
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  request(options, function(err, reponse, body) {
    console.log('in request', body);
  })
*/