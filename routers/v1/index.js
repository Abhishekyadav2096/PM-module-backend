const router = require("express").Router();

router.use("/manual", require("./manualRoutes"));
router.use("/userRole", require("./userRoleRoutes"));

module.exports = router;
