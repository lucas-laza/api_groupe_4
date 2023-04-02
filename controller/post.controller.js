const Post = require("./../model/post.model")

exports.create = (req,res,next) => {
  Post.create({});
  res.status(201).json({ message: "Votre post à été créé" });
}

exports.getAll = (req,res,next) => {
}

exports.edit = (req,res,next) => { 
  res.status(201).json({ message: "Post mis à jour !" });
}

exports.delete = (req,res,next) => {
  res.status(201).json({ message: "Post supprimé" });
}