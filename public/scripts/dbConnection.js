const dbConnection = () => {

  const { Pool } = require("pg");
  const dbParams = require("../../lib/db.js");
  const db = new Pool(dbParams);
  db.connect();

  return db
};

const db = dbConnection();

module.exports = db;
