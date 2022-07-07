const db = require("./dbConnection")

const removeFromFavs = (favCakeId) => {

  console.log("fav cake id is:", favCakeId)
  const queryString = `
  DELETE FROM fav_cakes
  WHERE fav_cakes.id = $1;
  `;
  const queryParams = [favCakeId];

 return db.query(queryString, queryParams)


}

module.exports = removeFromFavs;
