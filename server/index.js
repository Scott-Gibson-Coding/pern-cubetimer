const express = require("express");
const app = express();
const port = 5050;

app.get("/solvetimes", (req, res) => {
  res.send("REST api for solvetimes db");
});

app.listen(port, () => {
  console.log(`solvetimes api listening on port ${port}`);
});
