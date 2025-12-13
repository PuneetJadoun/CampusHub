import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config(); // reading .env file using node inbuilt module
connectDB();  // connecting to database

const app = express();
app.use(express.json());  // to accept json data in request body

app.get("/", (req, res) => {  
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
