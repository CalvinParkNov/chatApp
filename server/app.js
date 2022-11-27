import * as dotenv from "dotenv";
dotenv.config();
import Express from "express";
const app = Express();
const port = process.env.PORT;

import userRoute from "./routes/user.route.js";

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Your port is running on ${port}`);
});
