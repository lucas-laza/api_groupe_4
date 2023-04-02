const mongoose = require('mongoose');
const { Schema } = mongoose;

const Post = new Schema({
  title:   String,
  content: String,
  // userid: {type: String, ref: "User"}
  userId: String,
});

module.exports = mongoose.model("Post",Post);