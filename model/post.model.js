const mongoose = require('mongoose');
const { Schema } = mongoose;

const Post = new Schema({
  title:   String,
  content: String,
  userId: {type: mongoose.ObjectId, ref: "User"}
});

module.exports = mongoose.model("Post",Post);