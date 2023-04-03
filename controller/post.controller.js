const Post = require("./../model/post.model")
const Comment = require('./../model/comment.model')
const User = require('./../model/user.model')


exports.create = async (req, res, next) => {
  const post = req.body.post;
  Post.create({
    ...post,
    userId: req.token.id
  });
  res.status(201).json({ message: "Post créé" });
}

exports.createComment = async (req, res, next) => {
  const comment = req.body.comment;
    const postId = req.params.id;
    Comment.create({
        ...comment,
        postId: postId,
        userId: req.token.id
    });
    res.status(201).json({ message: "Commentaire créé" });
}

exports.getAll = async (req, res, next) => {
  try {
    const postList = await Post.find();
    let allPosts = [];

    for (const post of postList) {
      const comments = await Comment.find({ postId: post._id });
      let commentsList = [];
      comments.forEach(async (comment) => {
        const user = await User.findById(comment.userId)
        commentsList.push({
          ...comment.toObject(),
          user: {
            firstname: user.firstname,
            email: user.email
          }
        })
      });
      allPosts.push({
        ...post.toObject(),
        comments: commentsList
      });
    }

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.edit = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Le post n'existe pas" });
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, req.body.post, {
      new: true,
    });

    res.status(200).json({ message: "Post mis à jour !", post: updatedPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req,res,next) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);
  if (post) {
    if (post.userId.equals(req.token.id)) {
      // Supprimer tous les commentaires associés au post
      await Comment.deleteMany({ postId: postId });

      // Supprimer le post
      const suppression = await Post.findByIdAndDelete(postId);

      if (suppression) {
        return res.status(201).json({ message: "Post supprimé" });
      }
    } else {
      return res.status(401).json({ message: "Authorisation non accordée" });
    }
  }

  return res.status(400).json({ message: "Erreur" });
}
