const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");
const auth = require("./../middleware/auth");

router.delete("/:id", auth, commentController.delete);

module.exports = router;