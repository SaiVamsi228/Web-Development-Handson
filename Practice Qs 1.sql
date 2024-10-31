CREATE DATABASE IARE;

CREATE TABLE Teacher (
	id int PRIMARY KEY,
    name VARCHAR(30) UNIQUE,
    subject VARCHAR(10),
    salary int DEFAULT 25000
);

INSERT INTO Teacher 
VALUES
(23, "ajay", "math", 50000),
(47, "bharat","english", 60000),
(18, "chetan","chemistry", 45000),
(9, "divya","physics", 75000);

SELECT * 
FROM Teacher
ORDER BY ctc DESC;

SELECT * 
FROM Teacher
WHERE salary > 55000;

ALTER TABLE Teacher
CHANGE COLUMN salary ctc int DEFAULT 25000;

UPDATE Teacher
SET ctc = ctc + 0.25 * ctc ;

ALTER TABLE Teacher 
ADD COLUMN city VARCHAR(10) DEFAULT "Gurgaon";

SELECT *
FROM Teacher;

ALTER TABLE Teacher
DROP COLUMN ctc;

CREATE TABLE student(
	roll_no int PRIMARY KEY,
    name varchar(20),
    city varchar(10),
    marks int DEFAULT 0
);

INSERT INTO student
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai" , 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune" , 80);

SELECT * 
FROM student
where marks > 75;

SELECT DISTINCT city
FROM student ;

SELECT city, max(marks)
FROM student
GROUP BY city
ORDER BY max(marks) DESC;

SELECT avg(marks) 
FROM student;

ALTER TABLE student
ADD COLUMN grade varchar(1) ;

SELECT * 
FROM student
ORDER BY marks DESC;

UPDATE student
SET grade = "O"
WHERE marks > 80;

UPDATE student
SET grade = "A"
WHERE marks BETWEEN 70 AND 80;

UPDATE student
SET grade = "B"
WHERE marks BETWEEN 60 AND 70;





