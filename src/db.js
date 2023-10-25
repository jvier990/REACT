const { Pool } = require("pg");
const { db_credentials } = require("./config");

const db = new Pool({
  user: db_credentials.user,
  password: db_credentials.password,
  host: db_credentials.host,
  port: db_credentials.port,
  database: db_credentials.database,
});
module.exports = db;
//jdbc:postgresql://localhost:5432/TestProyecto
