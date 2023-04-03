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

