const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const controller = require("./controller/habit.controller");
const { connectMongoose } = require("./config/db");

// Setting Up view engine and Views Folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mongoose Connection
connectMongoose();

// Connecting Pulic Folder / Static Files
app.use("/public", express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up routes
app.use(controller);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
