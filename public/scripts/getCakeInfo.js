const db = require("./dbConnection")


//queries the database and returns all cakes until the filter is used and then it will return cakes based on price range

const getCakeInfo = (value) => {

  // FILTER QUERY BASE ON VALUE ON HTML SKELETON

  if (value === 0) {
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id;"
      )
      .then((response) => {
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });


  } else if (value === 1) {
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id WHERE cakes.price < 50 ORDER BY cakes.price ASC;"
      )
      .then((response) => {
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });

  } else if (value === 2) {
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id WHERE cakes.price > 50 AND cakes.price <100 ORDER BY cakes.price ASC;"
      )
      .then((response) => {
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });

  } else if (value === 3) {
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id WHERE cakes.price > 100 AND cakes.price < 150 ORDER BY cakes.price ASC;"
      )
      .then((response) => {
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });

  } else if (value === 4) {
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id  WHERE cakes.price > 150 ORDER BY cakes.price ASC;"
      )
      .then((response) => {
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return db
  .query(
    "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id;"
  )
  .then((response) => {
    return response.rows;
  })
  .catch((error) => {
    console.log(error);
  });

};

module.exports = getCakeInfo;
