const express = require("express");
const router = express.Router();
<<<<<<< HEAD


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
=======
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

>>>>>>> fav-page
  return router;
};
