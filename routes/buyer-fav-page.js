const express = require('express');
const router = express.Router();

const getCakeInfo = require("../public/scripts/getCakeInfo");
const getFavCakes = require('../public/scripts/getFavCakes');

module.exports = (db) => {
  router.get("/", (req, res) => {

    getCakeInfo().then((result) => {
      console.log(result)
      const templateVars = { cakes: result };
      return res.render("buyer-fav-page", templateVars);

    })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });

  });

  return router;
};





