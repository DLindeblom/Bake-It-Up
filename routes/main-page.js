const { application } = require('express');
const express = require('express');
const router  = express.Router();





module.exports = (db) => {
  router.get("", (req, res) => {
    db.query(`SELECT cakes.id, cakes.title,cakes.photo, cakes.description, users.email as user_email, cakes.status
    JOIN users ON users.id = cakes
    WHERE featured = true
    `)
    .then(result => {
    res.render("welcome-page", {cakes: result.rows})
    })

})

  router.get("/buyer", (req, res) => {
  db.query(`SELECT cakes.id, cakes.title,cakes.photo, cakes.description, users.email as user_email, cakes.status
  JOIN users ON users.id = cakes
  
  `)
  .then(result => {
  res.render("buyer-main-page", {cakes: result.rows})
  })

})
  return router;
}





 router.get("", (req, res) => {
    db.query(`SELECT cakes.id, cakes.title,cakes.photo, cakes.description, users.email as user_email, cakes.status
    JOIN users ON users.id = cakes
    WHERE featured = true
    `)
    .then(result => {
    res.render("welcome-page", {cakes: result.rows})
    })

})

// move filterItems function  below to appropriate file

/* function filterItems(arr, query) {
  return arr.filter(function(element) {
  return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
  }
 */
