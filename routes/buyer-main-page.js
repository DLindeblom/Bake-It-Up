const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/cakes", (req, res) => {
    res.render("buyer-main-page")
  })

  return router;
}
