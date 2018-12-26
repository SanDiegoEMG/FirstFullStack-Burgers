DROP DATABASE IF EXISTS burgers_db;
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(55) NOT NULL,
meat_type VARCHAR(40),
devoured BOOLEAN DEFAULT false NOT NULL,
PRIMARY KEY (id)
);


-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Traditional', 1, now(), now());
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Royale - with cheese', 0, now(), now());
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Royale - NO cheese', 1, now(), now());

-- testing code for syntax
DELETE FROM burgers WHERE id = 2;

-- show table
SELECT * FROM burgers;

INSERT INTO burgers (burger_name, meat_type, devoured) VALUES ('Traditional', "beef", 1);
INSERT INTO burgers (burger_name, meat_type, devoured) VALUES ('Extreme', "various", 0);
INSERT INTO burgers (burger_name, meat_type, devoured) VALUES ('Vegetarian', "plant based", 0);