import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import uploadRoutes from "./src/routes/upload.routes.js";

import itemRoutes from "./src/routes/item.routes.js";



const app = express();


app.use(cors()); // for frontend to backend communication
app.use(express.json());  // for parsing application/json


// routes
app.use("/api/auth", authRoutes);

// user routes
app.use('/api/users', userRoutes);
app.use('/api/users', userRoutes);


// upload routes
app.use("/api/upload", uploadRoutes)


//item routes
app.use("/items", itemRoutes);


// test route
app.get("/", (req, res) => {
  res.send("CampusHub Backend Running");
});

export default app;
