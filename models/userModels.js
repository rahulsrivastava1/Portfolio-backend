const mongoose = require("mongoose");

const UserSchema = {
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  linkedinUrl: {
    type: String,
  },
  message: {
    type: String,
  },
};

const collection = {
  collection: "messagelist",
};

const User = mongoose.Schema(UserSchema, collection);

module.exports = new mongoose.model("User", User);
