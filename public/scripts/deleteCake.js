const db = require("./dbConnection")

// queries the database and removes cake after seller chooses to delete from mycakes

const deleteCake = (cakeId) => {

  return db.query(
    `
    DELETE FROM cakes
    WHERE cakes.id =  $1`,
    [cakeId])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      console.log(err)
    });
}

module.exports = deleteCake;
