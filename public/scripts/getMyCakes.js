const { Pool } = require("pg");
const dbParams = require("../../lib/db.js");
const db = new Pool(dbParams);
db.connect();


const getMyCakes = (id) => {

  return db.query(
    `
    SELECT *
    FROM cakes
    WHERE user_id = $1
    `, [id])

    .then((response) => {
      return response.rows
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = getMyCakes
