const express = require("express");
const cors = require("cors");
const notes = require("./data/notes.json");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/notes", (req, res) => {
  const data = req.body;

  notes.push({ ...data, id: randomUUID() });
  const filePath = path.join(__dirname, "data", "notes.json");

  fs.writeFile(filePath, JSON.stringify(notes), (err, data) => {
    return res.send({ message: "Note Added" });
  });
});

app.delete("/notes", (req, res) => {
  const id = req.body.id;

  const index = notes.findIndex((note) => note.id === id);

  notes.splice(index, 1);

  const filePath = path.join(__dirname, "data", "notes.json");

  fs.writeFile(filePath, JSON.stringify(notes), (err, data) => {
    return res.send({
      message: "Note Deleted",
      id,
    });
  });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
