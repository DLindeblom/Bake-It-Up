const express = require("express");
const getFavCakes = require("../public/scripts/getFavCakes");
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const userID = req.cookies.user_id;

    getFavCakes(userID)
      .then((result) => {
        const templateVars = { cakes: result, userID };
        console.log(templateVars)
        return res.render("buyer-fav-page", templateVars);
      });
  });


  return router;
};
