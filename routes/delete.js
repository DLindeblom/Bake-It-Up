const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.post("/:id/", (req, res) => {

    const cakeId = req.params.id
    console.log(cakeId)
    return db.query(`
      DELETE FROM cakes WHERE cakes.id =  $1`, [cakeId])
        .then(() => {
          res.redirect("/mycakes")
        })
        .catch((err) => {
          console.log(err)
        })
  })

  return router;
}

