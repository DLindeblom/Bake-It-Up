// require("dotenv").config();

const { Pool } = require("pg");
// const dbParams = require("../../lib/db.js");
const db = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});
db.connect();

// get database info
const getCakeInfo = (value) => {
  // FILTER QUERY BASE ON VALUE ON HTML SKELETON
  // value = 0 => select all
  if (value === 0) {
    console.log("value is 0");
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id;"
      )
      .then((response) => {
        console.log(response.rows);
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });

    // value = 1 => select price <50
  } else if (value === 1) {
    console.log("value is 1 so less than $50");
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id WHERE cakes.price < 50;"
      )
      .then((response) => {
        console.log(response.rows);
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });
      
    // value = 2 => select price from 50 to 100
  } else if (value === 2) {
    console.log("value is 2 ");
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id WHERE cakes.price > 50 AND cakes.price <100;"
      )
      .then((response) => {
        console.log(response.rows);
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (value === 3) {
    console.log("value is 3");
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id WHERE cakes.price > 100 AND cakes.price < 150;"
      )
      .then((response) => {
        console.log(response.rows);
        return response.rows;
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (value === 4) {
    console.log("value is 4 ");
    return db
      .query(
        "SELECT cakes.*, users.email FROM cakes JOIN users ON cakes.user_id = users.id  WHERE cakes.price > 150;"
      )
      .then((response) => {
        console.log(response.rows);
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
      console.log(response.rows);
      return response.rows;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getCakeInfo;
