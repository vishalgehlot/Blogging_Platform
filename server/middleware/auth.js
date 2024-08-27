import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

export const isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'asjdflajsdfoiajvishal');
        req.user = await User.findById(decoded.user.id).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: 'Invalid token, authorization denied' });
    }
};
