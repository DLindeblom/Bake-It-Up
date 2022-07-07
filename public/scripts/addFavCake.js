const db = require("./dbConnection")

const addFavCake = (userId, cakeId) => {
  const queryString = `
  INSERT INTO fav-cakes (user_id, cake_id)
    Values ($1, $2)`

  const queryParams = [userId, cakeId]

  return db.query(queryString, queryParams)
    .then((response) => {
      return response.rows
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = addFavCake;
