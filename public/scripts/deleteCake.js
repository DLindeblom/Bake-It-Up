// const { Pool } = require("pg");
// const dbParams = require("../../lib/db.js");
// const db = new Pool(dbParams);
// db.connect();

// const deleteCake = (cakeId) => {

//   return db.query(
//     `
//     DELETE FROM cakes
//     WHERE cakes.id =  $1`,
//     [cakeId])
//     .then((response) => {
//       return response.rows;
//     })
//     .catch((err) => {
//       console.log(err)
//     });
// }

// module.exports = deleteCake;
