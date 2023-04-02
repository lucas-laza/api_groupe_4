const Post = require("./../model/post.model")
const Comment = require('./../model/comment.model')

exports.create = async (req, res, next) => {
  const post = req.body.post;
  Post.create({
    ...post,
    // userId: req.token.id
  });
  res.status(201).json({ message: "Post créé" });
}

exports.createComment = async (req, res, next) => {
  const comment = req.body.comment;
    const postId = req.params.id;
    Comment.create({
        ...comment,
        postId: postId
        // userId: req.token.id
    });
    res.status(201).json({ message: "Commentaire créé" });
}

exports.getAll = (req,res,next) => {
  Post.find()
    .then(postList => {
        res.status(200).json(postList);
    })
    .catch(error => {
        res.status(500).json(error);    
    })
}

exports.edit = (req,res,next) => {
  res.status(201).json({ message: "Post mis à jour !" });
}

exports.delete = (req,res,next) => {
  res.status(201).json({ message: "Post supprimé" });
}