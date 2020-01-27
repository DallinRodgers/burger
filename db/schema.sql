DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) auto_increment NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);