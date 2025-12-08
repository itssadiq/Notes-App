const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    currentDateTime: {
      type: String,
      required: true,
    },
  },
  {
    collection: "notes",
  }
);

const Notes = mongoose.model("Note", noteSchema);

module.exports = {
  Notes,
};
