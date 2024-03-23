// const dotenv = require("dotenv");

// dotenv.config();

const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb+srv://nikhilshekar:nikhil@cluster0.tufyorp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
    })
    .then((e) => console.log("Connected to Mongodb"))
    .catch((e) => console.log("Not Connect Mongodb", e));
};
