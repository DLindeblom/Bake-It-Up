const db = require("./dbConnection");

// queries the database and returns favorite cakes based on the user who is logged in

const getFavCakes = (id) => {

  return db.query(
`   SELECT *
    FROM fav_cakes
      JOIN users ON fav_cakes.user_id = users.id
      JOIN cakes ON fav_cakes.cake_id = cakes.id
    WHERE users.id = $1`
    , [id])

    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getFavCakes;
