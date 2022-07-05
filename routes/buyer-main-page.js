const express = require('express');
const router  = express.Router();

const getCakeInfo = require("../public/scripts/getCakeInfo")

module.exports = (db) => {
  router.get("/", (req, res) => {

    getCakeInfo().then((result) => {

      const templateVars = { cakes: result }
      return res.render("buyer-main-page", templateVars)

    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })

  })

  router.get("/favs", (req, res) => {
    res.render("buyer-fav-page")
  })

  return router;
}

