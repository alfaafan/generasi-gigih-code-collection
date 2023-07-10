const express = require("express");
const profile = require("./profile");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.status(200).send(profile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
