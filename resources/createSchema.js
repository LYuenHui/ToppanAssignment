// Require or import the dependencies
import fs from "fs";
import readline from "readline";
import dbconn from "../util/dbHelper.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
// Read the SQL file
function createSchema() {
  const sql = fs.readFileSync(dirname(fileURLToPath(import.meta.url)) + "\\schema.sql", "utf8");
  dbconn.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      return rows;
    }
  });
}

export default createSchema;
