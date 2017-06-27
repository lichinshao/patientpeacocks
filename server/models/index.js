const db = require('../database');

module.exports.users = {
  get: function () {
    return db.query('select * from users');
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





