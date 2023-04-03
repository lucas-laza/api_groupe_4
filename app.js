const express = require("express");
// const path = require("path");
// const userRoute = require("./route/user.route");
const authRoute = require("./route/auth.route");
const postRoute = require("./route/post.route");
const commentRoute = require("./route/comment.route");


const {connect} = require("./model/connection");

connect();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/comment', commentRoute);
app.use('/auth', authRoute);

module.exports = app;