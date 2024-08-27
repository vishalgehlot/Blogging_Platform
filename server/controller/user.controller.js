import User from "../model/user.model.js";
import jwt from 'jsonwebtoken';

export const SignUp = async (req, res) => {
    try {
        const result = await User.create(req.body);
        const token = jwt.sign({ id: result._id }, 'asjdflajsdfoiajvishal');

        return res.status(200).json({ message: "Signup success", result, token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error", err });
    }
};

export const SignIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const isMatch = await user.comparePass(req.body.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const payload = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(payload, 'asjdflajsdfoiajvishal', { expiresIn: '24h' });

        return res.status(200).json({ message: "Sign in success", token, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};