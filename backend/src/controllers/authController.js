import User from "../models/User.js";


// REGISTER
export const registerUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "Register route working",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  try {
    res.status(200).json({
      message: "Email verification route working",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "Login route working",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
