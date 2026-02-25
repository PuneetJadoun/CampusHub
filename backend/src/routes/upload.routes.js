import express from 'express';
import upload from '../middleware/upload.js';

const router = express.Router();


router.post("/", upload.array("images", 5), (req, res) => {
  const imageUrls = req.files.map(file => file.path);
  res.json({ images: imageUrls });
});

export default router;
