const db = require('../database');

module.exports.users = {
  // test
  // models.events.post(body)
  // .then( (results) => {

  // })
  // create a user
  createUser: (username, salt, hashedpass) => {
    // if user does not exists in users table
    // make unique check id attached to that username
    return db.query(`INSERT INTO users (name, password) VALUES ('${username}', '${salt}', '${hashedpass}'`);
  },

  saveEvent: (username, event) => {
    //`SELECT id from users where name = '${username}'`
    return db.query(`INSERT INTO events (name, dateAndTime, category, url, description, location) VALUES ('${event.name}', '${event.dateAndTime}', '${event.category}', '${event.url}', '${event.description}', '${event.location}')`)
    .then( () => {
      return db.query(`INSERT INTO users_events (userId, eventId) VALUES ( (SELECT id from users WHERE name = '${username}') , (SELECT id from events WHERE name = '${event.name}') )`)
    })
  }
}

module.exports.events = {
  // get all events for a specific user
  getUsersEvents: (username) => {
    return db.query(`SELECT id from user where name = '${username}'`);
  }
  // create an event for a user id based on username
  // subquery
 }


// module.exports = {
//   events: {
//     // fetch all events
//     get: function () {
//     //
//     },
//     //
//     post: function () {

//     }
//   },
//   users: {
//     get: function () {
//       //
//     },
//       //
//     post: function () {

//     }
//   }





