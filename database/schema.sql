DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE activities (
  id int NOT NULL AUTO_INCREMENT,
  day varchar(8) NOT NULL,
  title varchar(25) NOT NULL,
  hour varchar(10) NOT NULL,
  location varchar(8) NOT NULL,
  description: varchar(40) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO activities (day, tittle, hour, location, description) VALUES ("01/16/18", "Chinese New Yaer", "21:00", "Asian Green Cuisine", "Dumplings bring abundance for Lunar Year");
