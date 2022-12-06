import * as dotenv from "dotenv";
dotenv.config();
import Express from "express";
const app = Express();
const port = process.env.PORT;

import authRoutes from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import postRoutes from "./routes/posts.route.js";
import commentRoutes from "./routes/comment.route.js";
import likeRoutes from "./routes/likes.route.js";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/like", likeRoutes);

app.listen(port, () => {
  console.log(`Your port is running on ${port}`);
});
