import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";

import userRoutes from "./src/routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// user routes
app.use('/api/users', userRoutes);
app.use('/api/users', userRoutes);


// test route
app.get("/", (req, res) => {
  res.send("CampusHub Backend Running");
});

export default app;
