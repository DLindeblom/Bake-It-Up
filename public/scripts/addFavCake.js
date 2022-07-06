// require("dotenv").config();

const { Pool } = require("pg");
// const dbParams = require("../../lib/db.js");
const db = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});
db.connect();



// insert data to database info
const addFavCake = (userID, cakeID) => {

  return db.query(`INSERT INTO fav_cakes (user_id, cake_id) VALUES (${userID}, ${cakeID})`)

    .then((response) => {
      console.log(response.rows)
      return response.rows;
    })
    .catch((error) => {
      console.log(error)
    })

}






module.exports = addFavCake
