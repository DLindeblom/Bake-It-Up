const express = require("express");
const router = express.Router();

const removeFromFav = require("../public/scripts/removeFromFav");

module.exports = () => {

  router.post("/:id", (req, res) => {


    const cakeID = req.params.id;

    console.log("cakeID:" , cakeID)
    removeFromFav(cakeID)
      .then((response) => {
        console.log("the repoinse inside of remove from fav is:", response)
        res.redirect("/favs");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
};
