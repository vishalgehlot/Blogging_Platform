import express from 'express';
import { SignIn, SignUp, } from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post("/signup", SignUp)
router.post("/signin", isAuthenticated, SignIn)

export default router;