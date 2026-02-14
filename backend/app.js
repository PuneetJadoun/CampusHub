import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("CampusHub Backend Running");
});

export default app;
