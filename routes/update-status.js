const express = require("express");
const router = express.Router()

module.exports = (db) => {

  router.post("/:id/", (req, res) => {

    const cakeId = req.params.id;

    return db.query(`UPDATE cakes SET cake_status = 'SOLD!' WHERE id = $1`, [cakeId])
      .then(() => {
        res.redirect("/mycakes")
      })
      .catch((err) => {
        console.log(err)
      })

  })

  return router;
}
