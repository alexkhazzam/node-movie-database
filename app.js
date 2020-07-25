const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public", "styles")));

app.set("view engine", "ejs");
app.set("views", "views");

const admin = require("./routes/admin");
const renderMovies = require("./routes/renderMovies");
const error = require("./controllers/error");

app.use(admin);
app.use(renderMovies);
app.use(error.get404);

app.listen(5000);
