const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'giathuan'); // 
        req.user = { userId: decoded.userId };
        next();
    } catch (err) {
        console.error("Token verification failed:", err);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
