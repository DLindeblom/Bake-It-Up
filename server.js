// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// PG database client/connection setup
const db = require("./public/scripts/dbConnection");



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource

const homePage = require("./routes/main-page");
const buyerPage = require("./routes/buyer-main-page");
const cakeForm = require("./routes/sell-a-cake-form");
const login = require("./routes/login");
const myCakes = require("./routes/my-cakes");
const logout = require("./routes/logout");
const deleteCake = require("./routes/delete");
const updateCake = require("./routes/update-status");
const addCake = require("./routes/addFavCake");
const favCakes = require("./routes/buyer-fav-page");
const removeCake = require("./routes/remove-fav-cake");

// Mount all resource routes

// Note: mount other resources here, using the same pattern aboves

// Home page

app.use("/", homePage(db));
app.use("/login", login());
app.use("/cakes", buyerPage(db));
app.use("/form", cakeForm(db));
app.use("/mycakes", myCakes(db));
app.use("/logout", logout());
app.use("/delete", deleteCake());
app.use("/update", updateCake());
app.use("/favs", favCakes());
app.use("/fav", addCake());
app.use("/remove", removeCake());

// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
