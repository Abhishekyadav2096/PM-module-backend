const express = require("express");
const router = express.Router();

const manual = require("../../controllers/manualController");

router.post("/upload", manual.uploadManual);

module.exports = router;
