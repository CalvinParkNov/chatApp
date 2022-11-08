const express = require("express");
const router = express.Router();
const Users = require("./user.route");
const authMiddleware = require("../middleware/auth");

router.use("/", Users);

module.exports = router;
