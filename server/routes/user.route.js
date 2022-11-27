import Express from "express";
const router = Express.Router();

router.get("/test", (req, res) => {
  res.send("working so far");
});

export default router;
