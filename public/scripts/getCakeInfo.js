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



// get database info
const getCakeInfo = () => {

  return db.query('SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id;')
    .then((response) => {
      console.log(response.rows)
      return response.rows;
    })
    .catch((error) => {
      console.log(error)
    })

}

module.exports = getCakeInfo



