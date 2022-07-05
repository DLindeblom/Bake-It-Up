const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log(req.body)
    res.render("sell-a-cake-form")

  })

  return router;
}
