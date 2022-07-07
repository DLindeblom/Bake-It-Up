const { Pool } = require("pg");
// const dbParams = require("../../lib/db.js");
const db = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});
db.connect();

const addFavCake = (cakeID, userID) => {
const queryString = `
INSERT INTO fav_cakes (user_id, cake_id)
Values ($1, $2)`

const queryParams = [userID, cakeID]
return db.query(queryString, queryParams)
  .then((response) => {
      return response.rows
  })
  .catch((err) => {
    console.log(err)

  })
}

module.exports = addFavCake;
