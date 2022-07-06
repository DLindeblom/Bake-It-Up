const express = require("express");
const updateCakeStatus = require("../public/scripts/updateStatus");
const router = express.Router()

module.exports = () => {

  router.post("/:id/", (req, res) => {

    const cakeId = req.params.id;

    updateCakeStatus(cakeId)
      .then(() => {
        res.redirect("/mycakes")
      })
      .catch((err) => {
        console.log(err)
      })

  })

  return router;
}
