const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const asyncWrapper = require("../middleware/async");

router.route("/user").get(asyncWrapper(UserController.test));

module.exports = router;
