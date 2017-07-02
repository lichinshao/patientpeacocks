const pgp = require('pg-promise')();
const pgs = require('pg');

pgs.defaults.ssl = true;

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'meow2meow'
}

const db = pgp(process.env.DATABASE_URL || connection);
module.exports = db;


// var DATABASE_URL = 'postgres://qbzvgvuvdevbhj:d8d57b137756bc3b7029b3531c69e562285752ea2b1a066c1ec4e8596ad93837@ec2-23-23-222-147.compute-1.amazonaws.com:5432/dpd0sg8kgct09';

// pgs.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) {
//   	console.log(err);
//   }
//   client.query('SELECT table_schema,table_name FROM information_schema.tables;')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     })
// });



// db.query('select * from users').then((result)=> {
//   console.log(result);
// })
// })
