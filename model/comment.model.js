const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment = new Schema ({
    content: String,
    userId: {type: String, ref: "User"},
    postId: {type: String, ref: "Post"}
})

module.exports = mongoose.model("Comment", Comment);