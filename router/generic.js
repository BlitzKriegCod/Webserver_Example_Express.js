import express from "express";

export const router = express.Router();
router.get("/generic", (req, res) => {
    res.render("index");
  });
  