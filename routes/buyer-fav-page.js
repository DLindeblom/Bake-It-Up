const express = require('express');
const router = express.Router();

const getCakeInfo = require("../public/scripts/getCakeInfo");
const getFavCakes = require('../public/scripts/getFavCakes');

module.exports = (db) => {
  router.get("/", (req, res) => {

    getCakeInfo().then((result) => {

      const templateVars = { cakes: result };
      return res.render("buyer-fav-page", templateVars);

    })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });

  });

  router.get("/favs", (req, res) => {


      res.render("buyer-fav-page")


  });

  return router;
};

router.post("/", (req, res) => {
  console.log(req.body);
  const item_id = req.body.item_Id;
  const userID = req.session.user_id;
  console.log("ItemID: ", item_id)
  console.log("userID: ", userID)
  const sql = `INSERT INTO favourites (user_id, item_id) VALUES ($1, $2) RETURNING *;`
  db.query(sql, [userID, item_id])
  .then(data => {
    res.redirect("/")
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

router.post("/delete", (req, res) => {
  const item_id = req.body.itemId;
  const userID = req.session.user_id;
  const sql = `DELETE FROM favourites WHERE user_id = $1 AND item_id = $2 RETURNING *;`
  db.query(sql, [userID, item_id])
  .then(data => {
    res.redirect("/")
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

return router;
};

