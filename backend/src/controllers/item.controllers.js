import Item from "../models/item.model.js";

export const createItem = async (req, res) => {
  try {
    const imageUrls = req.files.map(file => file.path);

    const item = await Item.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      type: req.body.type,
      priceText: req.body.priceText,
      images: imageUrls,
      owner: req.user.id   // from auth middleware
    });

    res.status(201).json(item);
  } catch (error) {
        console.log("CREATE ITEM ERROR:", error);
        res.status(500).json({ error: error.message });
    }
};