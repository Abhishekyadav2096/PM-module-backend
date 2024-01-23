const express = require("express");
const router = express.Router();

const userRole = require("../../controllers/userRoleController");

router.post("/add", userRole.create);

module.exports = router;
