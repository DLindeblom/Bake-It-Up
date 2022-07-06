const express = require("express");
const deleteCake = require("../public/scripts/app");
const router = express.Router();

module.exports = (db) => {

  router.post("/:id/", (req, res) => {

    const cakeId = req.params.id;

      deleteCake(cakeId)
        .then(() => {
          res.redirect("/mycakes")
        })
        .catch((err) => {
          console.log(err)
        })
  })

  return router;
}

