const Comment = require('../models/comment');
const Product = require('../models/product');

// Thêm bình luận cho sản phẩm
exports.addComment = async (req, res) => {
    try {

        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const newComment = new Comment({
            userID: req.user.userId,
            productID: req.params.productId,
            comment: req.body.comment
        });

        await newComment.save();
        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Lấy danh sách bình luận cho sản phẩm
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ productID: req.params.productId }).populate('userID', 'fullName');
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
