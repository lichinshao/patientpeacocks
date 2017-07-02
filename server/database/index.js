const pg = require('pg-promise')();
const pgs = require('pg');

pgs.defaults.ssl = true;
const connection = {
  host: 'localhost',
  port: process.eventNames.PORT || 3000,
  database: 'events_app',
  user: 'postgres',
  password: 'meow2meow'
}


// pgs.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) {
//   	console.log(err);
//   }
//   client.query('SELECT table_schema,table_name FROM information_schema.tables;')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     })
// });

const db = pg(connection);
module.exports = db;


// db.query('select * from users').then((result)=> {
//   console.log(result);
// })
// })
