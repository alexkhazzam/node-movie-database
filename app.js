const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const createMovieRoutes = require("./routes/createMovies");
const showMovieRoutes = require("./routes/showMovies");

app.use(createMovieRoutes);
app.use(showMovieRoutes);

app.listen(5000);
