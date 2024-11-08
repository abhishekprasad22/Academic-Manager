import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

import pkg from "pg"; // Import the pg library as a default export
const { Pool } = pkg; // Destructure Pool from the imported package

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

app.use(bodyParser.urlencoded({ extended: true}));

// Serve static files from the "public" directory
app.use(express.static("public"));

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

// Example route to query the database
app.post("/submit", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students;'); // Replace 'your_table' with your actual table name
    console.log(result.rows); // Output the results
    res.send(result.rows); // Send results back to the client
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying the database");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
