import express from "express";
import {protect} from '../middleware/auth.middleware.js';
import {getMe} from '../controllers/user.contollers.js';
import {updateUser} from '../controllers/user.contollers.js';


const router = express.Router();


// get user info
router.get('/me', protect, getMe);

// update user
router.put("/update", protect, updateUser);

export default router;