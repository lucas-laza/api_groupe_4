const express = require("express");
const router = express.Router();
const postController = require("./../controller/post.controller");
const auth = require("./../middleware/auth");

<<<<<<< HEAD
router.post("/", postController.create);

router.post("/:id/comment", postController.createComment);

router.get("/", postController.getAll);

router.put("/", postController.edit);

router.deletePost("/:postId", postController.delete);

router.deleteComment("/:CommentId", postController.delete);
=======
router.post("/", auth, postController.create);

router.post("/:id/comment", auth, postController.createComment);

router.get("/", auth, postController.getAll);
router.get("/:id", auth, postController.getOne);


router.put("/", auth, postController.edit);

router.delete("/:postId", auth, postController.delete);
>>>>>>> dcea56d3dbbb8445bff16ba19b0736fc1adf8ff2

module.exports = router;