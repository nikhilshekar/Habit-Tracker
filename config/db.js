// const dotenv = require("dotenv");

// dotenv.config();

const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose.set("strictQuery", false);
  // mongoose.connect(
  //   "mongodb+srv://himadrinayak:12345@cluster0.h7n86ah.mongodb.net/csv-upload?retryWrites=true&w=majority",
  //   { useNewUrlParser: true }
  // );
  mongoose
    .connect("mongodb://127.0.0.1:27017/habit-tracker", {
      useNewUrlParser: true,
    })
    .then((e) => console.log("Connected to Mongodb"))
    .catch((e) => console.log("Not Connect Mongodb", e));
};
