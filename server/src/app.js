const express = require("express");
const cors = require("cors");
const notes = require("./data/notes.json");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/notes", (req, res) => {
  const data = req.body;

  console.log(data);
  res.send("data recieved");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
