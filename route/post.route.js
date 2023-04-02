const express = require("express");
const router = express.Router();
const postController = require("./../controller/post.controller");

router.post("/post", postController.create);

router.get("/post", postController.getAll);

router.put("/post", postController.edit);

router.delete("/post", postController.delete);

module.exports = router;