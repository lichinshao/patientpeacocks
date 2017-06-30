const db = require('../database');

module.exports = {
  // create a user
  createUser: (username, hashedpass) => {
    // if user does not exists in users table
    // make unique check id attached to that username
    return db.query(`INSERT INTO users (name, password) VALUES ('${username}', '${hashedpass}'`);
  },

  saveEvent: (username, event) => {
    return db.query(`INSERT INTO events (name, dateAndTime, category, url, description, location) VALUES ('${event.name}', '${event.dateAndTime}', '${event.category}', '${event.url}', '${event.description}', '${event.location}')`)
    .then( () => {
      return db.query(`INSERT INTO users_events (userId, eventId) VALUES ( (SELECT id from users WHERE name = '${username}') , (SELECT id from events WHERE name = '${event.name}') )`)
    })
  },

  // get all events for a specific user
  getUsersEvents: (username) => {
  return db.query(`SELECT e.name, e.dateAndTime, e.category, e.description, e.location from events e INNER JOIN users_events ue ON e.id = ue.eventId INNER JOIN users u ON u.id = ue.userId where u.name = '${username}'`);
  }
}








