const express = require('express');
const router = express.Router();

module.exports = () => {

  router.post("/", (req, res) => {

    res.clearCookie("user_id").redirect("/");

  });

  return router;
};
