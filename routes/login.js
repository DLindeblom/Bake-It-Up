//simple login
const express = require('express');
const router  = express.Router();


module.exports = () => {
  router.get('/:id', (req, res) => {

    const userID = req.params.id

    res.cookie('user_id', userID);

    // res.redirect('/form')

    if (userID < 10) {
      res.redirect('/form');
    } else {
      res.redirect('/cakes')
    }


  });
  return router;
}
