const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground.js");

// import Campground from "./models/campground.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

mongoose
  .connect(
    "mongodb+srv://ankurit:ankurit123@cluster0.mcejy.mongodb.net/Cluster0?retryWrites=true&w=majority"
  )
  .then(async () => {
    app.listen(3000, async () => {
      console.log(`Server running on port 3000 | http://localhost:3000`);
      const data = await Campground.insertMany([
        {
          title: "Hello",
          price: "20",
          description: "hello",
          location: "HKG",
        },
      ]);
      const check = await Campground.find({});
      console.log("data", check);
    });
  })
  .catch((err) => console.log(err));
