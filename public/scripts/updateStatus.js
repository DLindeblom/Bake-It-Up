const db = require("./dbConnection");


// queries the database and changes default status of available when posted to sold if the cake is sold

const updateCakeStatus = (cakeId) => {

  return db.query(
    `
    UPDATE cakes
    SET cake_status = 'SOLD!'
    WHERE id = $1`,
    [cakeId])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      console.log(err);
    });

};

module.exports = updateCakeStatus;
