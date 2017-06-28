const db = require('../database');

module.exports.users = {
  get: function () {
    return db.query('select * from users');
  },
  //post: username, hashedpass
  // create a user
  post: function (username, hashedpass) {
    //return db.query(`insert into users (name)`;
  }
}

module.exports.events = {
  // get all events for a specific user
  get: function () {
    return db.query('select * from events');
  },
  // create an event for a user id based on username
  // subquery
  post: function () {
    return db.query('insert')
  }
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





