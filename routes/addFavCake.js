const express = require("express");
const router = express.Router();


const addFavCakes = require("../public/scripts/addFavCakes");

module.exports = (db) => {
  router.post("/:id/", (req, res) => {
    const cakeID = req.params.id;
    const userID = req.cookies.user_id;
    addFavCakes(cakeID, userID)
      .then(() => {
        res.redirect("/cakes")

      })
      .catch((error) => {
        console.log(error);

      })


  });
  return router;
};
