require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connect");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const route = require("./routes");

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());

app.use("/api", route);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    //connect DB
    await connectDB.connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};
start();