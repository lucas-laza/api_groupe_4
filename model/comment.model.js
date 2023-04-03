const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment = new Schema ({
    content: String,
    userId: {type: mongoose.ObjectId, ref: "User"},
    postId: {type: mongoose.ObjectId, ref: "Post"}
})

module.exports = mongoose.model("Comment", Comment);