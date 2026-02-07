import express from "express";
import {
  registerUser,
  verifyOtp,
  loginUser
} from "../controllers/auth.controllers.js";


// this is type of virtual router
const router = express.Router();


// register user
router.post("/register", registerUser);

// verify otp
router.post("/verify-otp", verifyOtp);


// login user
router.post("/login", loginUser);

// logout user
//router.post("/logout", logoutUser);




export default router;
