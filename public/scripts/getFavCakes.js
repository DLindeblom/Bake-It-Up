const { Pool } = require("pg");
// const dbParams = require("../../lib/db.js");
const db = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});
db.connect();


const getFavCakes = (id) => {

  return db.query(
    `
    SELECT *,
    FROM fav_cakes
      JOIN users ON fav_cakes.user_id = users.id
      JOIN cakes ON fav_cakes.cake_id = cakes.id
    WHERE users.id = $1
    `, [id])

    .then((response) => {
      return response.rows
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = getFavCakes
