import express from "express";
import upload from "../middleware/upload.js";
import { createItem } from "../controllers/item.controllers.js";
import {protect} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  upload.array("images", 5),
  createItem
);

export default router;