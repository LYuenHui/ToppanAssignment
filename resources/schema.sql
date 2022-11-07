
drop schema if exists toppantest;

CREATE SCHEMA `toppantest` ;

Use toppantest;
drop table if exists studentDB;
drop table if exists teacherdb;
drop table if exists teacher_studentDB;

CREATE TABLE `studentDB`(
`StudentID` int(11) NOT NULL AUTO_INCREMENT,
`Name` varchar(99),
`Email` varchar(99) UNIQUE,
`Status` varchar(1),
PRIMARY KEY(`StudentID`)
)AUTO_INCREMENT=0;

CREATE TABLE `teacherDB`(
`TeacherID` int(11) NOT NULL AUTO_INCREMENT,
`Name` varchar(99),
`Email` varchar(99) UNIQUE,
`Status` varchar(1),
PRIMARY KEY(`TeacherID`)
)AUTO_INCREMENT=0;

CREATE TABLE `teacher_studentDB`(
`teacheremail` varchar(99),
`studentemail` varchar(99)
);



INSERT into studentdb VALUES (1,'Aaron','aaron@gmail.com','A'),(2,'Geroge','george@gmail.com','A'),(3,'Jeremy','jeremy@gmail.comteacher_studentdb','A');
INSERT into studentdb VALUES (4,'studentjon','studentjon@gmail.com','A'),(5,'studenthon','studenthon@gmail.com','A');
INSERT into teacherdb VALUES (1,'Marvin','marvin@gmail.com','A'),(2,'rex','rex@gmail.com','A'),(3,'david','david@gmail.com','S');
INSERT into teacherdb VALUES (4,'teacherken','teacherken@gmail.com','A'),(5,'teacherjoe','teacherjoe@gmail.com','A');
INSERT into teacher_studentdb VALUES ('marvin@gmail.com','george@gmail.com'),('marvin@gmail.com','jeremy@gmail.com'),('marvin@gmail.com','aaron@gmail.com');



