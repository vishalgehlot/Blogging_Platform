import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const isAuthenticated = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            console.log("Token received:", token);

            const decoded = jwt.verify(token, "bylooptechnology");
            console.log("Decoded Token:", decoded);

            req.user = await User.findById(decoded.id).select("-password");
            console.log("User found:", req.user);

            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            next();
        } catch (error) {
            console.error("Token verification error:", error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

export { isAuthenticated };
