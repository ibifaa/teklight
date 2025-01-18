CREATE DATABASE teklightdb;

CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) not null,
    last_name VARCHAR(255)
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)

INSERT INTO users (first_name, last_name, email, password) VALUES ("Ibifaa", "Ibisaki", "ibifaaibisaki@yahoomail.com", "12345")