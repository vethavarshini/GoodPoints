const express = require("express");
const router = express.Router();
const Request = require("../models/Request");
const authMiddleware = require("../middleware/authMiddleware");

// POST create request
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, category, area, description, priority, deadline } = req.body;

    const newRequest = new Request({
      title,
      category,
      area,
      description,
      priority,
      deadline,
      user: req.user.id, // from JWT
    });

    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;