const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../db.js");
const SECRET_KEY = "your-secret-key";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid credintials" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token, userid: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password tidak cocok" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
      "INSERT INTO users (username,email,password) VALUES(?,?,?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  login,
  register,
};
