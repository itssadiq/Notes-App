const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const { connectDB } = require("./config/database.js");
const { Notes } = require("./model/userSchema.js");
// const notes = require("./data/notes.json");
// const fs = require("fs");
// const path = require("path");
// const { randomUUID } = require("crypto");

const app = express();

app.use(cors());

app.use(express.json());

// app.get("/notes", (req, res) => {
//   res.send(notes);
// });

// app.post("/notes", (req, res) => {
//   const data = req.body;

//   if (data.id) {
//     const filteredNote = notes.find((note) => note.id === data.id);
//     const index = notes.findIndex((n) => n.id === data.id);
//     filteredNote.title = data.title;
//     filteredNote.category = data.category;
//     filteredNote.content = data.content;
//     filteredNote.currentDateTime = data.currentDateTime;

//     notes[index] = filteredNote;
//     const filePath = path.join(__dirname, "data", "notes.json");

//     fs.writeFile(filePath, JSON.stringify(notes), (err, data) => {
//       return res.send({ message: "Note Added" });
//     });

//     res.send({
//       message: "Editing Note",
//     });
//   } else {
//     notes.push({ ...data, id: randomUUID() });
//     const filePath = path.join(__dirname, "data", "notes.json");

//     fs.writeFile(filePath, JSON.stringify(notes), (err, data) => {
//       return res.send({ message: "Note Added" });
//     });
//     res.send({
//       message: "Adding Note",
//     });
//   }
// });

// app.delete("/notes", (req, res) => {
//   const id = req.body.id;

//   const index = notes.findIndex((note) => note.id === id);

//   notes.splice(index, 1);

//   const filePath = path.join(__dirname, "data", "notes.json");

//   fs.writeFile(filePath, JSON.stringify(notes), (err, data) => {
//     return res.send({
//       message: "Note Deleted",
//       id,
//     });
//   });
// });

app.post("/create-note", async (req, res) => {
  const data = req.body;

  try {
    const note = await Notes(data);

    await note.save();

    res.send({
      message: "Note Added Succesfully",
    });
  } catch (error) {
    res.send({
      message: "Error Saving Data",
    });
  }
});

app.get("/get-notes", async (req, res) => {
  try {
    const notes = await Notes.find({});

    res.send({
      message: "Notes Fethced Successfully",
      notes,
    });
  } catch (error) {
    res.send({
      message: "Error Fetching Notes",
      error,
    });
  }
});

connectDB()
  .then(() => {
    console.log("Connected successfully to Database using Mongoose");

    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to Database", err);
  });
