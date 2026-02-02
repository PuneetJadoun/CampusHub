import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
import authRoutes from "./src/routes/auth.routes.js";

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
