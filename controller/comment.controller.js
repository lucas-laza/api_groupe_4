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

<<<<<<< HEAD
=======
exports.delete = async (req,res,next) => {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);
    if (comment) {
        if (comment.userId.equals(req.token.id)) {
            let suppression = await Comment.findByIdAndDelete(commentId);
            if (suppression) {
                res.status(201).json({ message: "Commentaire supprimé" });
            }
        }
    }
    
    return res.status(400).json({ message: "Erreur" });
}
>>>>>>> dcea56d3dbbb8445bff16ba19b0736fc1adf8ff2
