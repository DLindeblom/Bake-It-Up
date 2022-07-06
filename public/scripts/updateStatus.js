const { Pool } = require("pg");
// const dbParams = require("../../lib/db.js");
const db = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});
db.connect();


const updateCakeStatus = (cakeId) => {

  return db.query(
    `
    UPDATE cakes
    SET cake_status = 'SOLD!'
    WHERE id = $1`,
    [cakeId])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      console.log(err);
    });

};

module.exports = updateCakeStatus;
