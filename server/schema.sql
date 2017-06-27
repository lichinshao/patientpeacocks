DROP DATABASE IF EXISTS events_app;

/*psql -U postgres < server/schema.sql

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


CREATE TABLE events (
  id serial PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  category VARCHAR(20) NOT NULL,
  url TEXT NOT NULL,
  description varchar (100) NOT NULL
);


CREATE TABLE usersEvents (
  userId serial foreign key,
  eventId serial foreign key

);

INSERT INTO users (name, password) VALUES ('julia', 'hellowpass');
INSERT INTO users (name, password) VALUES ('jey', 'mypassword');