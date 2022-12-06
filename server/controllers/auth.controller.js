import { db } from "../connect.js";
export const register = (req, res) => {
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
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
