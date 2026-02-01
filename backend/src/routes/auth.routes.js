import express from "express";
import {
  registerUser,
  //loginUser,
  //verifyEmail,
} from "../controllers/auth.controllers.js";


// this is type of virtual router
const router = express.Router();


router.post("/register", registerUser);
//router.get("/verify-email", verifyEmail);
//router.post("/login", loginUser);

export default router;
