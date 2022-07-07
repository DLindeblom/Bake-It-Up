const express = require("express");
const router = express.Router();
const addFavCake = require("../public/scripts/addFavCake")

module.exports = () => {

  router.post("/:id/", (req, res) => {

    const userID = req.cookies.user_id;
    const cakeID = req.params.id;

    addFavCake(userID, cakeID)
      .then(() => {
        res.redirect("/cakes");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
