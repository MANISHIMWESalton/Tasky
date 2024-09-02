const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = authMiddleware;
