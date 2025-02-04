-- List of relations
-- Schema |         Name         |   Type   | Owner  
-- --------+----------------------+----------+--------
-- public | branch               | table    | myuser
-- public | course_code          | table    | myuser
-- public | marks                | table    | myuser
-- public | student_login        | table    | myuser
-- public | students             | table    | myuser
-- public | students_contact     | table    | myuser
-- public | students_roll_no_seq | sequence | myuser
-- public | teacher_login        | table    | myuser

-- Creating the students table with a primary key and foreign keys
CREATE TABLE students (
    roll_no SERIAL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50), 
    semester INT NOT NULL CHECK (semester > 0), 
    course_code VARCHAR(10) NOT NULL, 
    branch_code VARCHAR(10) NOT NULL
);

-- Creating the course_code table
CREATE TABLE course_code (
    code VARCHAR(10) PRIMARY KEY, 
    name VARCHAR(100) NOT NULL
);

-- Adding a foreign key constraint to the students table referencing course_code
ALTER TABLE students ADD CONSTRAINT fk_course_code FOREIGN KEY (course_code) REFERENCES course_code(code);

-- Creating the branch table
CREATE TABLE branch (
    branch_code VARCHAR(10) PRIMARY KEY, 
    name VARCHAR(100) NOT NULL
);

-- Adding a foreign key constraint to the students table referencing branch
ALTER TABLE students ADD CONSTRAINT fk_branch_code FOREIGN KEY (branch_code) REFERENCES branch(branch_code);

-- Creating the students_contact table with a composite primary key and a foreign key
CREATE TABLE students_contact (
    roll_no INT REFERENCES students(roll_no) ON DELETE CASCADE, 
    phone_no VARCHAR(15) NOT NULL, 
    PRIMARY KEY (roll_no, phone_no)
);

-- Creating the marks table with a primary key and a foreign key
CREATE TABLE marks (
    roll_no INT PRIMARY KEY REFERENCES students(roll_no) ON DELETE CASCADE, 
    CIE1 DECIMAL(4, 2), 
    CIE2 DECIMAL(4, 2), 
    CIE3 DECIMAL(4, 2), 
    assignment DECIMAL(4, 2), 
    semester1_SGPA DECIMAL(3, 2), 
    semester2_SGPA DECIMAL(3, 2), 
    semester3_SGPA DECIMAL(3, 2), 
    semester4_SGPA DECIMAL(3, 2), 
    semester5_SGPA DECIMAL(3, 2), 
    semester6_SGPA DECIMAL(3, 2), 
    semester7_SGPA DECIMAL(3, 2), 
    semester8_SGPA DECIMAL(3, 2)
);

-- Creating the student_login table
CREATE TABLE student_login (
    roll_no INT PRIMARY KEY REFERENCES students(roll_no) ON DELETE CASCADE, 
    password VARCHAR(50) NOT NULL
);

-- Creating the teacher_login table
CREATE TABLE teacher_login (
    username VARCHAR(50) PRIMARY KEY, 
    password VARCHAR(50) NOT NULL
);


-- Inserting data into course_code table
INSERT INTO course_code (code, name) VALUES 
('BT', 'Bachelor of Technology'), 
('MT', 'Master of Technology'), 
('MCA', 'Master of Computer Applications');

-- Inserting data into branch table
INSERT INTO branch (branch_code, name) VALUES 
('CSE', 'Computer Science and Engineering'), 
('EE', 'Electrical Engineering'), 
('ME', 'Mechanical Engineering'), 
('CE', 'Civil Engineering'), 
('IE', 'Instrumentation Engineering');

-- Inserting data into students table
INSERT INTO students (roll_no, first_name, last_name, semester, course_code, branch_code) VALUES 
(1, 'John', 'Walter', 5, 'BT', 'CSE'), (2, 'Emma', 'Johnson', 5, 'BT', 'CSE'), 
(3, 'Michael', 'Brown', 5, 'BT', 'CSE'), (4, 'Olivia', 'Davis', 5, 'BT', 'CSE'), 
(5, 'William', 'Miller', 5, 'BT', 'CSE'), (6, 'James', 'Wilson', 5, 'BT', 'ME'), 
(7, 'Sophia', 'Moore', 5, 'BT', 'ME'), (8, 'Benjamin', 'Taylor', 5, 'BT', 'ME'), 
(9, 'Isabella', 'Anderson', 5, 'BT', 'ME'), (10, 'Lucas', 'Thomas', 5, 'BT', 'ME'), 
(11, 'Mia', 'Jackson', 5, 'BT', 'EE'), (12, 'Alexander', 'White', 5, 'BT', 'EE'), 
(13, 'Charlotte', 'Harris', 5, 'BT', 'EE'), (14, 'Ethan', 'Martin', 5, 'BT', 'EE'), 
(15, 'Amelia', 'Thompson', 5, 'BT', 'EE'), (16, 'Daniel', 'Garcia', 5, 'BT', 'CE'), 
(17, 'Ella', 'Martinez', 5, 'BT', 'CE'), (18, 'Henry', 'Roberts', 5, 'BT', 'CE'), 
(19, 'Grace', 'Perez', 5, 'BT', 'CE'), (20, 'Jack', 'Wilson', 5, 'BT', 'CE');

-- Inserting data into students_contact table
INSERT INTO students_contact (roll_no, phone_no) VALUES 
(1, '1234567890'), (2, '1234567891'), (3, '1234567892'), (4, '1234567893'), 
(5, '1234567894'), (6, '1234567895'), (7, '1234567896'), (8, '1234567897'), 
(9, '1234567898'), (10, '1234567899'), (11, '1234567800'), (12, '1234567801'), 
(13, '1234567802'), (14, '1234567803'), (15, '1234567804'), (16, '1234567805'), 
(17, '1234567806'), (18, '1234567807'), (19, '1234567808'), (20, '1234567809');

-- Inserting data into marks table
INSERT INTO marks (roll_no, cie1, cie2, cie3, assignment, semester1_sgpa, semester2_sgpa, semester3_sgpa, semester4_sgpa, semester5_sgpa, semester6_sgpa, semester7_sgpa, semester8_sgpa) VALUES 
(1, 25.00, 20.00, 22.50, 8.00, 7, 6, 5, 4, 5, 6, 7, 6), 
(2, 18.00, 15.00, 25.50, 6.00, 6, 5, 4, 6, 7, 5, 6, 5), 
(3, 28.00, 22.00, 27.00, 9.00, 6, 6, 5, 6, 5, 6, 7, 6), 
(4, 24.50, 18.50, 26.00, 7.50, 5, 4, 4, 3, 4, 5, 5, 5), 
(5, 23.00, 19.00, 20.00, 7.50, 6, 5, 4, 6, 5, 6, 7, 5), 
(6, 27.00, 20.00, 28.00, 9.00, 7, 6, 6, 5, 6, 7, 6, 6), 
(7, 26.50, 21.00, 25.00, 8.50, 6, 7, 6, 5, 5, 6, 7, 5), 
(8, 20.00, 18.00, 24.00, 6.00, 6, 5, 5, 6, 5, 6, 5, 6), 
(9, 29.00, 22.50, 28.00, 8.00, 6, 5, 6, 7, 6, 6, 7, 6), 
(10, 24.00, 21.00, 25.50, 7.00, 5, 6, 5, 4, 5, 5, 6, 5), 
(11, 22.50, 19.00, 23.00, 6.50, 6, 6, 5, 4, 4, 5, 5, 6), 
(12, 21.00, 20.00, 20.50, 7.00, 6, 5, 5, 5, 6, 7, 6, 7), 
(13, 19.00, 17.50, 28.00, 5.00, 5, 6, 6, 5, 5, 5, 6, 4), 
(14, 26.00, 22.00, 25.00, 8.00, 6, 7, 7, 6, 7, 6, 7, 6), 
(15, 27.50, 20.00, 24.00, 7.50, 7, 6, 5, 5, 6, 6, 7, 6), 
(16, 28.00, 20.00, 27.50, 8.00, 6, 6, 6, 5, 6, 7, 6, 7), 
(17, 24.50, 22.00, 23.00, 8.50, 6, 7, 6, 5, 5, 6, 7, 6), 
(18, 21.00, 19.00, 20.50, 6.00, 5, 5, 6, 5, 5, 6, 5, 5), 
(19, 28.50, 20.00, 26.00, 9.00, 7, 6, 5, 6, 7, 6, 5, 6), 
(20, 25.00, 21.00, 23.00, 7.50, 6, 6, 7, 5, 6, 5, 6, 7);

-- Inserting data into student_login table
INSERT INTO student_login (roll_no, password) VALUES 
(1, 'password1'), (2, 'password2'), (3, 'password3'), (4, 'password4'), 
(5, 'password5'), (6, 'password6'), (7, 'password7'), (8, 'password8'), 
(9, 'password9'), (10, 'password10'), (11, 'password11'), (12, 'password12'), 
(13, 'password13'), (14, 'password14'), (15, 'password15'), (16, 'password16'), 
(17, 'password17'), (18, 'password18'), (19, 'password19'), (20, 'password20');

-- Inserting data into teacher_login table
INSERT INTO teacher_login (username, password) VALUES ('teacher', 'password');
