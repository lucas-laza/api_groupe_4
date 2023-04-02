const mongoose = require('mongoose');
const { Schema } = mongoose;

const Post = new Schema({
  title:   String,
  content: Number,
  userid: {type: String, ref: "User"}
});

module.exports = mongoose.model("Post",Post);