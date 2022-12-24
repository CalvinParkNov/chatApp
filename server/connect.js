import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});
