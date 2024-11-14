import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pkg from "pg"; 
import path from 'path';
import ejs from "ejs"; // Import ejs package

const { Pool } = pkg;

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'myuser', 
  host: 'localhost', 
  database: 'myuser', 
  password: 'mypassword', 
  port: 5432, 
});

app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); // Make sure the 'views' directory path is correct

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for specific HTML files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/professorLoginPage.html", (req, res) => {
  res.sendFile(__dirname + "/public/professorLoginPage.html");
});

app.get("/studentLoginPage.html", (req, res) => {
  res.sendFile(__dirname + "/public/studentLoginPage.html");
});

// Student login
app.post("/studentLogin", async (req, res) => {
  const { userId, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM student_login WHERE roll_no = $1 AND password = $2",
      [userId, password]
    );

    if (result.rows.length > 0) {
      const rollNo = userId;
      res.redirect(`/studentDashboard?roll_no=${rollNo}`);
    } else {
      res.send("Invalid Roll Number or Password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying the database");
  }
});

app.get("/studentDashboard", async (req, res) => {
  const rollNo = req.query.roll_no;

  try {
    // Log the roll number to check if it's being received
    console.log("Roll Number:", rollNo);

    // Query to fetch student data
    const result = await pool.query(`
      SELECT 
          s.roll_no, 
          s.first_name, 
          s.last_name, 
          s.semester, 
          s.course_code, 
          s.branch_code,  
          b.name AS branch_name, 
          c.name AS course_name, 
          sc.phone_no, 
          m.cie1, m.cie2, m.cie3, m.assignment,
          m.semester1_sgpa, m.semester2_sgpa, m.semester3_sgpa, m.semester4_sgpa, 
          m.semester5_sgpa, m.semester6_sgpa, m.semester7_sgpa, m.semester8_sgpa
      FROM 
          students s
      JOIN 
          branch b ON s.branch_code = b.branch_code
      JOIN 
          course_code c ON s.course_code = c.code
      JOIN 
          students_contact sc ON s.roll_no = sc.roll_no
      JOIN 
          marks m ON s.roll_no = m.roll_no
      WHERE 
          s.roll_no = $1
    `, [rollNo]);

    // Log the result to see if data is fetched
    console.log("Query Result:", result.rows);

    if (result.rows.length > 0) {
      const student = result.rows[0]; // Student data

      // Render the EJS template with the student data
      res.render("studentAccount", { student });
    } else {
      res.send("Student details not found");
    }
  } catch (err) {
    console.error("Database Query Error:", err);
    res.status(500).send("Error fetching student details");
  }
});


// Professor login
app.post("/professorLogin", async (req, res) => {
  const { userId, password } = req.body;

  try {
    // Query to check if the professor's credentials are correct
    const result = await pool.query(
      "SELECT * FROM teacher_login WHERE username = $1 AND password = $2",
      [userId, password]
    );

    // Log the query result to check if data is fetched correctly
    console.log("Professor Query Result:", result.rows);

    if (result.rows.length > 0) {
      // Redirect to the professor's account page upon successful login
      res.redirect("/professorDashboard");
    } else {
      // If credentials do not match, send an error message
      res.send("Invalid Username or Password");
    }
  } catch (err) {
    console.error("Database Query Error:", err);
    res.status(500).send("Error querying the database");
  }
});

// Route to render the professor dashboard (or account page)
app.get("/professorDashboard", async (req, res) => {
  try {
    // Query to fetch all students' names and roll numbers
    const result = await pool.query("SELECT first_name, last_name, roll_no FROM students");

    // Log the result to see if data is fetched
    console.log("Students Query Result:", result.rows);

    // Render the EJS template with the student data
    res.render("professorAccount", { students: result.rows });
  } catch (err) {
    console.error("Database Query Error:", err);
    res.status(500).send("Error fetching student details");
  }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});