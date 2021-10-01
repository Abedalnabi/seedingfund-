-- this file for create database for any one who need to download my projct from data base 
-- and i will explain who you can run database on docomntation in my githup porject page

DROP DATABASE IF EXISTS seedingfund;
CREATE DATABASE seedingfund;
USE seedingfund;

-- role table (admin or project manger)
CREATE TABLE roles (
role_id INT AUTO_INCREMENT NOT NULL,
role VARCHAR(255) NOT NULL,
PRIMARY KEY (role_id)
);

-- user tabel
CREATE TABLE users (
user_id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(255),
lastName VARCHAR(255),
phone VARCHAR(255),
age INT(3),
email VARCHAR(255),
password VARCHAR(255),
role_id INT,
active boolean,
is_deleted TINYINT DEFAULT 0,
FOREIGN KEY (role_id) REFERENCES roles(role_id),
PRIMARY KEY (user_id)
);

-- funding table with its state
CREATE TABLE fundingDetails (
funding_id INT AUTO_INCREMENT NOT NULL,
projct_name VARCHAR(255),
projct_description VARCHAR(255),
projct_sector VARCHAR(255),
porject_state VARCHAR(255),
is_deleted TINYINT DEFAULT 0,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id),
PRIMARY KEY (funding_id)
);

-- insert admin and projectManger to roles Table
INSERT INTO roles (role) VALUES ("admin"); 
INSERT INTO roles (role) VALUES ("projectManger"); 
