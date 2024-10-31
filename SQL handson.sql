USE instagram;

SELECT * 
FROM users;

SELECT *
FROM users
WHERE followers >= 200 and (age BETWEEN 15 and 20) ;

SELECT *
FROM users
WHERE email in ("bob123@gmail.com", "donald@gmail.com") and age in (20);

SELECT name, followers 
FROM users
WHERE followers >= 200
ORDER BY followers DESC;


INSERT INTO users
VALUES
(5, "Smith" , "idf@gmail.com", 15000, 1, 25);

SELECT age,max(followers)
FROM users
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

UPDATE users
SET followers = 200
WHERE followers < 200;

SET SQL_SAFE_UPDATES = 0;

SELECT * 
FROM users;

ALTER TABLE users
DROP COLUMN city;

ALTER TABLE users
ADD COLUMN city VARCHAR(10) DEFAULT "Hyderabad" ;

SELECT * FROM InstaUsers;

ALTER TABLE users
RENAME TO InstaUsers;

ALTER TABLE InstaUsers
RENAME TO users;

ALTER TABLE users
CHANGE COLUMN  followers subscribers int DEFAULT 10;

ALTER TABLE users
MODIFY subscribers INT DEFAULT 50;

INSERT INTO users (id, name, email, following, age)
VALUES
(8, "John" , "idfIsrael@gmail.com", 10,  25);

SELECT *
FROM users;


