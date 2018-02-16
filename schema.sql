DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE activities (
  id int NOT NULL AUTO_INCREMENT,
  day varchar(55) NOT NULL,
  title varchar(55) NOT NULL,
  hour varchar(55) NOT NULL,
  location varchar(55) NOT NULL,
  description varchar(55) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO activities (day, title, hour, location, description) VALUES ("01/16/18", "Chinese New Yaer", "21:00", "Asian Green Cuisine", "Dumplings bring abundance for Lunar Year");
