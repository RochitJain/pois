const express = require("express");
const router = express.Router();
const { getLatestReport } = require("./report.model");

router.get("/report", async (req, res) => {
  try {
    const report = await getLatestReport();
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch report" });
  }
});

module.exports = router;
