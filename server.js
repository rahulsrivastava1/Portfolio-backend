const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const route = require("./route/userRoute");

const PORT = process.env.PORT || 5000;

const URL =
  "mongodb+srv://rahul:Rahul@cluster0.lonuj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", route);

app.get("/", (req, res) => {
  res.send("Welcome to my portfolio API");
});

mongoose.connect(URL, (err) => {
  if (err) throw err;
  console.log("Your database is connected successfully.");
});

app.listen(PORT, () => {
  console.log(`app is served on http://localhost:${PORT}`);
});
