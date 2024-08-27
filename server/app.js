import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRouter from './routers/user.route.js';
import BlogPostRouter from './routers/blogPost.route.js';
import { isAuthenticated } from './middleware/auth.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/bloggingApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");

    app.use("/user", UserRouter);
    app.use("/blogpost", isAuthenticated, BlogPostRouter);

    app.listen(3000, () => {
        console.log("Server started on PORT 3000");
    });
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
