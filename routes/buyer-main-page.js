const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("buyer-main-page")
  })

  router.get("/favs", (req, res) => {
    res.render("buyer-fav-page")
  })

  return router;
}
