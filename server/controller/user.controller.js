import User from "../model/user.model.js";
import jwt from 'jsonwebtoken';

export const SignUp = async (req, res) => {
    try {
        const result = await User.create(req.body);
        return res.status(200).json({ message: "Signup Success", result });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error", err });
    }
};

export const SignIn = async (req, res) => {
    console.log("user email", req.body);
    console.log(res.body);

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).json({ message: "User not found" });

        const isMatch = await user.comparePass(req.body.password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, email: user.email }, "bylooptechnology", { expiresIn: '7d' });


        return res.status(200).json({ message: "Sign in success", token, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};