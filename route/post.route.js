const express = require("express");
const router = express.Router();
const postController = require("./../controller/post.controller");

router.post("/", postController.create);

router.post("/:id/comment", postController.createComment);

router.get("/", postController.getAll);

router.put("/", postController.edit);

router.deletePost("/:postId", postController.delete);

router.deleteComment("/:CommentId", postController.delete);

module.exports = router;