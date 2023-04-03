const Comment = require("./../model/comment.model")

exports.getAll = (req, res, next) => {
    Comment.find()
    .then(productList => {
        res.status(200).json(productList);
    })
    .catch(error => {
        res.status(500).json(error);    
    })
}

exports.delete = async (req,res,next) => {
    const commentId = req.params.id;
    const suppression = await Comment.findByIdAndDelete(commentId);
  
    if (suppression) {
        res.status(201).json({ message: "Commentaire supprimé" });
    }
}
