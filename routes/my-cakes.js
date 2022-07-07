const express = require("express");
const getMyCakes = require("../public/scripts/getMyCakes");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.cookies.user_id;
    
    // console.log(req.cookies)

    getMyCakes(userID)
      .then((result) => {
        const templateVars = { cakes: result, userID };
        // console.log(templateVars);
        return res.render("seller-main-page", templateVars);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.post("/", (req, res) => {
    const cake_photo_url = req.body.cake_photo_url;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const userID = req.cookies.user_id;

    const queryString = `
    INSERT INTO cakes (user_id, cake_photo_url, title, description, price)
    VALUES ($1, $2, $3, $4, $5)
    `;
    const queryParams = [userID, cake_photo_url, title, description, price];

    return db
      .query(queryString, queryParams)
      .then(() => {
        res.redirect("/form");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
