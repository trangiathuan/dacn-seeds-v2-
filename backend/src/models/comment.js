const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho Comment
const commentSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Tạo model Comment
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
