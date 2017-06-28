var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var auth = require('passport-local-authenticate');
var db = require('./database');

var app = express();
var rp = require('request-promise');

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../react-client/dist'));



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
      // models.events.post(body)
      // .then( (results) => {

      // })
      var data = JSON.parse(body);
      var data = data.events.event;
      res.send(data);
    }
  });
var database = {
  username: 'david',
  password: 'sucks'
};

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
  },
  function(username, password, done) {
    console.log(username, password);
    if (username === database.username) {
      return done(null, database);
    }
  }
));

app.get('/register', function(req, res) {
  res.render('register');
})

app.post('/register', function(req, res) {
  // auth.hash(req.body.password, function(err, hashed) {
  //   console.log(hashed.hash);
  //   console.log(hashed.salt);
    db.query(`select * from users where name = '${req.body.name}'`).
    then((users) => {
      console.log(users);
      if (users.length) {
        res.end('User already exists!'); 
      } else {
        db.query(`INSERT INTO users (name, password) VALUES ('${req.body.name}', '${req.body.password}')`).
          then((users) => {
            res.end();
            //where we will pass the token back inside res.end
          })
          .catch(error => {
            res.end(JSON.stringify(error));
          })

      }
    })
    .catch(error => {
      console.log(error);
      res.end();
    });
  });

app.post('/login', function(req, res) {
  db.query(`select * from users where name = '${req.body.name}'`).
    then((user) => {
      if (user.length && user[0].password === req.body.password) {
        res.end('successful login');
      } else {
        res.writeHead(403, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'user doesn\'t exist or password is incorrect'}));
      }
    })
})

app.get('/login', function(req, res) {
  res.render('login');
})


/*
verifies password: this will return a boolean (true if pswd matches)
auth.hash('password', function (err, hashed) {
  auth.verify('password', hashed, function(err, verified) {
    console.log(verified);
  })
})
*/




app.post('/login', passport.authenticate('local', {}),
  function(req, res) {

  res.end('testing ');
});
  // passport.authenticate('local', { 
  //                                 successRedirect: '/',
  //                                 failureRedirect: '/login',
  //                                 failureFlash: 'Invalid username or password.',
  //                                 successFlash: 'Welcome!' })
  // );



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

