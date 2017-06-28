var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var rp = require('request-promise');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/eventful', function (req, res) {
  // var data = JSON.parse(req.body);
  console.log(req.body);
  var loc = '&l=' + req.body.location.split(' ').join('+');
  var topic = req.body.topic; 
  var eventfulOptions = { method: 'GET',
  url: 'http://api.eventful.com/json/events/search',
  qs: { app_key: 'CwcF9Lt3qkKh4gWB', l: 'san francisco' },
  headers: 
   { l: 'san%20francisco',
     q: topic,
     date: 'future' } };


     console.log('Going to promises');
    
    
    rp(eventfulOptions).then(function (data) {
      console.log('In the promises');
      return data;
    }).then(eventfulData => {
        var sumData = JSON.stringify('[' + eventfulData + ', ');
        var meetupCategories = 
        {
          // meetup searches catagories by numbers 
          // it is weird but functional
          music: 21,
          food: 10,
          arts: 1,
          books: 18,
          animals: 26,
        }
        var meetupOptions = {
        method: 'GET',
        url: 'https://api.meetup.com//find/groups',
        qs: 
       { sign: 'true',
         key: '2771396637a6981749467c7663e19',
         category: meetupCategories[topic] }
        }
        
        rp(meetupOptions).then(function (data) {
          sumData += JSON.stringify(data);
          res.send(sumData);
        })
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
  }) */ 

