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
  var returnData;
  var eventfulOptions = { method: 'GET',
  url: 'http://api.eventful.com/json/events/search',
  qs: { app_key: 'CwcF9Lt3qkKh4gWB', l: 'san francisco' },
  headers: 
   { l: 'san%20francisco',
     q: topic,
     date: 'future' } };

    rp(eventfulOptions).then(function (data) {
      var eventData;
      if(data) {
        eventData = JSON.parse(data).events.event.map((singleEvent) => {
          var item = {
            name: singleEvent.title,
            time: singleEvent.start_time,
            category: topic,
            url: singleEvent.url,
            //image: singleEvent.image,
            description: singleEvent.description,
            location: singleEvent.venue_address
          };
          return item;
        })
      }
      eventData = JSON.stringify(eventData);
      returnData += eventData.substring(0, eventData.length - 1);
      res.write(eventData.substring(0, eventData.length - 1));
      return;
    }).then( () => {
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
        url: 'https://api.meetup.com/find/groups',
        qs: 
       { sign: 'true',
         key: '2771396637a6981749467c7663e19',
         category: meetupCategories[topic] }
        }
        
        rp(meetupOptions).then(function (data) {
            if(data) {
              var eventData = JSON.parse(data).map((singleEvent) => {
                var checkTime;
                if(singleEvent.next_event){
                  checkTime = singleEvent.next_event.time;
                }
                var item = {
                  name: singleEvent.name,
                  time: checkTime,
                  category: topic,
                  url: singleEvent.link,
                  //image: singleEvent.image,
                  description: singleEvent.description,
                  location: singleEvent.city +', '+ singleEvent.state
                };
                return item;
              })
              console.log('EVENT DATA', eventData)
            }
            eventData = JSON.stringify(eventData);
            returnData += ',' + eventData.substring(1, eventData.length ) + ']';
            console.log(returnData);
            res.write(',' + eventData.substring(1, eventData.length ));
            res.end();
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
