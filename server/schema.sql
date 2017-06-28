DROP DATABASE IF EXISTS events_app;

/* Use this one to connect
psql -U postgres < server/schema.sql
psql dbname username

psql -U userName dbName < server/schema.sql


psql postgres -d events_app -f server/schema.sql*/
CREATE DATABASE events_app;
\c events_app;

DROP TABLE if exists users;
DROP TABLE if exists events;


CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  password TEXT NOT NULL
);

-- dont forget to add user id, because only store event if user saved
CREATE TABLE events (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  dateAndTime VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  url TEXT NOT NULL,
  description VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL
);


CREATE TABLE usersEvents (
  -- userId serial foreign key,
  -- eventId serial foreign key

);

INSERT INTO users (name, password) VALUES ('julia', 'hellowpass');
INSERT INTO users (name, password) VALUES ('jey', 'mypassword');
INSERT INTO users (name, password) VALUES ('kevin', 'heypass');

INSERT INTO users (name, password) VALUES ('li', 'password123');


INSERT INTO events (name, dateAndTime, category, url, description, location) VALUES ('Jeys Music Show', '2017-06-28', 'music', 'http://sanfrancisco.eventful.com/events/', 'Jeys music sucks but come on by', 'San Francisco St');

INSERT INTO events (name, dateAndTime, category, url, description, location) VALUES ('Kitten Petting Party', '2017-06-29', 'animals', 'http://sanfrancisco.eventful.com/events/', 'Come and pet all the kitties!', 'Oakland Blvd');

INSERT INTO events (name, dateAndTime, category, url, description, location) VALUES ('Lis Art Show', '2017-06-29', 'art', 'http://sanfrancisco.eventful.com/events/', 'Art by Li, must come and see!', 'Hayward St');

INSERT INTO events (name, dateAndTime, category, url, description, location) VALUES ('Kevins Pizza Cook Off!', '2017-07-01', 'food', 'http://sanfrancisco.eventful.com/events/', 'Dare to challenge Kevin in a pizza cook off!', 'Berkeley Blvd');





