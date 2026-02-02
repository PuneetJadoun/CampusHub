import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// REGISTER

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Allow only bennett.edu.in emails
    if (!email.endsWith("@bennett.edu.in")) {
      return res.status(400).json({
        message: "Only bennett.edu.in email addresses are allowed",
      });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a verification token to send to user email
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Save user
    await User.create({
      name,
      email,
      password: hashedPassword,
      isVerified: false,
      verificationToken,
    });

    // Response 
    res.status(201).json({
      message: "User registered successfully. Please verify your email.",
    });


  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};



  
