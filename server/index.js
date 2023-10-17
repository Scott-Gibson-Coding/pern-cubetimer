const express = require("express");
const app = express();
const port = 5050;

// used to query to db
const pool = require("./db_connect");

// setup middleware
app.use(express.json());

// solvetimes GET - return all solves and session best/avgs
app.get("/solvetimes", async (req, res) => {
  const command = "SELECT * FROM solvetimes";

  try {
    const response = await pool.query(command);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
});

// solvetimes POST - add new solve time to db
app.post("/solvetimes", async (req, res) => {
  const { solvetime } = req.body;

  const command = "INSERT INTO solvetimes(solvetime) VALUES($1) RETURNING *";
  const values = [solvetime];

  try {
    const response = await pool.query(command, values);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

// solvetimes DELETE - delete solve time from db
app.delete("/solvetimes/:id", async (req, res) => {
  const id = req.params.id;

  const command = "DELETE FROM solvetimes WHERE time_id = $1";
  const values = [id];

  try {
    const response = await pool.query(command, values);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`solvetimes api listening on port ${port}`);
});
