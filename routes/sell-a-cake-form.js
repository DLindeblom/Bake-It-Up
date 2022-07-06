const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.cookies.user_id;
    const templateVars = { userID };

    res.render("sell-a-cake-form", templateVars);
  });

  return router;
};
