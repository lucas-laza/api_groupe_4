const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  email:   String,
  password: String,
  firstname: String
});

module.exports = mongoose.model("User", User);