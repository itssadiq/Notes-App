const mongoose = require("mongoose");

const url =
  "mongodb+srv://devsadiqali:practice123@cluster.o52po4q.mongodb.net/";

const connectDB = async () => {
  await mongoose.connect(url);
};

module.exports = {
  connectDB,
};
