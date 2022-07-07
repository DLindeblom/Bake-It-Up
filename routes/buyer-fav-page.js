const express = require("express");
const router = express.Router();


const getFavCakes = require("../public/scripts/getFavCakes");


module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.cookies.user_id;
    getFavCakes(userID)
      .then((result) => {
        const templateVars = { cakes: result, userID };
        return res.render("buyer-fav-page", templateVars);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });
  return router;
};
