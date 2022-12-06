import mysql from "mysql";
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});
