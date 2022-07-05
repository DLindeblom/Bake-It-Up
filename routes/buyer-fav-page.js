const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const cakeQuery = "SELECT * FROM fav_cakes JOIN cakes ON cake_id = cake.id WHERE fav_cakes.id IN (SELECT fav_cakes.id FROM fav_cakes);";
    db.query(cakeQuery)
    .then(data => {
      const templateVars = { cakes: data.rows }
      res.render("buyer-fav-page", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });
}

