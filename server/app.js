import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT;
import cors from "cors";
import cookieParser from "cookie-parser";

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

import authRoutes from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import postRoutes from "./routes/posts.route.js";
import commentRoutes from "./routes/comment.route.js";
import likeRoutes from "./routes/likes.route.js";
import cookieParser from "cookie-parser";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/like", likeRoutes);

app.listen(port, () => {
  console.log(`Your port is running on ${port}`);
});
