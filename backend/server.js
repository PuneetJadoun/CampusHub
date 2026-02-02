import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
import authRoutes from "./src/routes/auth.routes.js";

// temporary check
import sendEmail from "./src/utils/sendEmail.util.js";


dotenv.config();          // load env variables
connectDB();              // connect MongoDB

const app = express();

app.use(express.json());  // parse JSON body

// auth routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {  
  res.send("CampusHub Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// temporary email test route

// app.get("/test-email", async (req, res) => {
//   await sendEmail({
//     to: process.env.EMAIL_USER,
//     subject: "CampusHub Test Email",
//     html: "<h2>Email system working ✅</h2>",
//   });

//   res.send("Email sent");
// });