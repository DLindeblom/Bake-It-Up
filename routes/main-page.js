const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("", (req, res) => {
    res.render("welcome-page")
  })

  return router;
}


// move filterItems function  below to appropriate file

/* function filterItems(arr, query) {
  return arr.filter(function(element) {
  return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
  }
 */
