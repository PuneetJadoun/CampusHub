import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.util.js";
import jwt from "jsonwebtoken";

// REGISTER WITH OTP
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

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Set OTP expiry (10 minutes) and last sent time
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
    const otpLastSentAt = new Date();

    // Save user with OTP details
    await User.create({
      name,
      email,
      password: hashedPassword,
      isVerified: false,
      verificationToken: otp,
      otpExpiresAt,
      otpLastSentAt,
    });

    // Send OTP email
    await sendEmail({
      to: email,
      subject: "CampusHub Email Verification OTP",
      html: `
        <h3>Welcome to CampusHub</h3>
        <p>Your verification code is:</p>
        <h2>${otp}</h2>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    // Response
    res.status(201).json({
      message: "OTP sent to your email. Please verify to continue.",
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// verify otp 
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Validate input
    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Already verified
    if (user.isVerified) {
      return res.status(400).json({
        message: "Email already verified",
      });
    }

    // OTP match
    if (user.verificationToken !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // OTP expired
    if (user.otpExpiresAt < Date.now()) {
      return res.status(400).json({
        message: "OTP expired",
      });
    }

    // Verify user
    user.isVerified = true;
    user.verificationToken = null;
    user.otpExpiresAt = null;
    user.otpLastSentAt = null;

    await user.save();

    res.json({
      message: "Email verified successfully",
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // BLOCK UNVERIFIED USERS
    if (!user.isVerified) {
      return res.status(401).json({
        message: "Please verify your college email before login",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // create jwt token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// logout user
export const logoutUser = (req, res) => {
  res.json({ message: "Logged out successfully" });
};
