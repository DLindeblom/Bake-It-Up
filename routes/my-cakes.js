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
    const cake_photo_url = req.body.cake_photo_url;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const userId = req.cookies.user_id;

    const queryString = `
    INSERT INTO cakes (user_id, cake_photo_url, title, description, price)
    VALUES ($1, $2, $3, $4, $5)
    `
    const queryParams = [userId, cake_photo_url, title, description, price];

    return db.query(queryString, queryParams)
      .then(() => {
        res.redirect("/form")
      })
      .catch((err) => {
        console.log(err)
      })

  })

  return router;
}
