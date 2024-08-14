const jwt = require('jsonwebtoken');

const authAdmin = (req, res, next) => {
    try {
        // Lấy token từ header Authorization
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token) {
            console.error('No token provided, authorization denied');
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }

        // Sử dụng biến môi trường để bảo mật secret key
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        // Kiểm tra role của người dùng
        if (req.user.role !== 'admin') {
            console.error('Access denied: User is not an admin');
            return res.status(403).json({ msg: 'Access denied: Admins only' });
        }

        // Cho phép tiếp tục nếu là admin
        next();
    } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = authAdmin;
