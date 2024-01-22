const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root", //sesuaikan dengan user database anda
  password: "", //sesuaikan dengan password database anda
  database: "ridtech_db",
});

module.exports = pool;
