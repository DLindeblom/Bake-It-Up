const db = require("./dbConnection")

const addFavCake = (userId, cakeId) => {

  console.log(userId, cakeId)
  const queryString = `
  INSERT INTO fav_cakes (user_id, cake_id)
    Values ($1, $2)`

  const queryParams = [userId, cakeId]

  return db.query(queryString, queryParams)
    .then((response) => {
      console.log(response.rows)
      return response.rows
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = addFavCake;
