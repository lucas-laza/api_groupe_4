const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");

router.delete("/comment/:id", commentController.delete);

module.exports = router;