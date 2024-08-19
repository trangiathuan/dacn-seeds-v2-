const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authUser = require('../middleware/authComment');

router.post('/:productId/comment', authUser, commentController.addComment);
router.get('/:productId/comments', commentController.getComments);

module.exports = router;
