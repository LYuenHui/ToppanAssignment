import mysql from "mysql2";
import config from "../jest-mysql-config.js";

const {
  db: { host, user, password, database, multipleStatements },
} = config;
const conn = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
  // multipleStatements: multipleStatements,
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Database is connected successfuly");
});

export default conn;
