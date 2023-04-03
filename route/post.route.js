const express = require("express");
const router = express.Router();
const postController = require("./../controller/post.controller");
const auth = require("./../middleware/auth");

router.post("/", auth, postController.create);

router.post("/:id/comment", auth, postController.createComment);

router.get("/", auth, postController.getAll);
router.get("/:id", auth, postController.getOne);


router.put("/:postId", auth, postController.edit);

router.delete("/:postId", auth, postController.delete);

module.exports = router;