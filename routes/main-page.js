const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("", (req, res) => {
    const userID = req.params.id;

    res.cookie("user_id", userID);

    const templateVars = {
      userID,
    };

    res.render("welcome-page", templateVars);
  });

  return router;
};
