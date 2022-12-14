import { db } from "../connect.js";
import bcryptjs from "bcryptjs";
import { hasUncaughtExceptionCaptureCallback } from "process";
export const register = (req, res) => {
  return;
  //check user if exists

  const query = "SELECT FROM USER WHERE USER NAME =?";

  db.query(query, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length) {
      return res.status(409).json("User already exists!");
    }
  });
  //create a new user
  //hash the password
  const salt = bcryptjs.genSalt();
  const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

  const q =
    "INSERT INTO user (`username`, `email`, `password`, `name`) VALUE(?)";

  const { username, email, name } = req.body;
  const values = [username, email, hashedPassword, name];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("User has been created");
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
