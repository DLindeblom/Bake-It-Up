const express = require("express");
const getFavCakes = require("../public/scripts/getFavCakes");
const router = express.Router()



module.exports = (db) => {

  router.get("/", (req, res) => {

    const userId = req.cookies.user_id
    // console.log(req.cookies)

    getFavCakes(userId)
      .then((result) => {
        const templateVars = {cakes: result}
        return res.render("seller-my-cakes", templateVars)
      })
      .catch((err) => {
        console.log(err)
      })


  })

  router.post("/", (req, res) => {

  })

  return router;
}
