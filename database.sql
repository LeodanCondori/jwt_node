CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE jwtdb;

DROP TABLE users;

DELETE FROM users;

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL UNIQUE,
  user_password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (user_name,user_email,user_password) VALUES ('Bob','bob@email.com','bob');
INSERT INTO users (user_name,user_email,user_password) VALUES ('Fred','fred@email.com','fred');

--psql -U postgres
--\c jwtdb
--\dt
--heroku pg:psql
