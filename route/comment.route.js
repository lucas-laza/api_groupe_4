const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");
<<<<<<< HEAD

router.delete("/comment/:id", commentController.delete);
=======
const auth = require("./../middleware/auth");

router.delete("/:id", auth, commentController.delete);
>>>>>>> dcea56d3dbbb8445bff16ba19b0736fc1adf8ff2

module.exports = router;