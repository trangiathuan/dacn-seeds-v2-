const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    console.log("Decoded token:", decoded); // Log toàn bộ decoded token để kiểm tra

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Thay 'your_jwt_secret' bằng khóa bí mật thực tế của bạn
        req.user = { userId: decoded.userId }; // Gán userId từ JWT vào req.user
        console.log("Decoded user ID:", req.user.userId); // Log kiểm tra userId
        next();
    } catch (err) {
        console.error("Token verification failed:", err);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
