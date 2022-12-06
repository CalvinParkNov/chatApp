import Express from "express";

import { getUser } from "../controllers/user.controller.js";
const router = Express.Router();

router.get("/", (req, res) => {
  res.send("asdfasf");
});
router.get("/find/:userId", getUser);
export default router;
