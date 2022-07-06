const db = require("./dbConnection");

// queries the database and returns all cakes that particular seller has posted to the database

const getMyCakes = (id) => {

  return db.query(
    `
    SELECT *
    FROM cakes
    WHERE user_id = $1
    `, [id])

    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getMyCakes;
