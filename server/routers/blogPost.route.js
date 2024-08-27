import express from 'express';
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controller/blogPost.controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', isAuthenticated, createPost);
router.put('/update/:id', isAuthenticated, updatePost);
router.get('/view', getAllPosts);
router.get('/viewById/:id', getPostById);
router.delete('/delete/:id', isAuthenticated, deletePost);

export default router;
