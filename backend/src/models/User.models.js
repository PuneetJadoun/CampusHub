import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    // This will store the OTP (6-digit string)
    verificationToken: {
      type: String,
    },

    // OTP expiry time (e.g. now + 10 minutes)
    otpExpiresAt: {
      type: Date,
    },

    // When OTP was last sent (for 2-min resend rule)
    otpLastSentAt: {
      type: Date,
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
