const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/styles.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/client.js"));
});

const port = process.env.PORT || 4005;
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
