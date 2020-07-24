const express = require("express");

const app = express();

const controllerMovies = require("../controllers/movies");

app.use("/create-movie", controllerMovies);

module.exports = controllerMovies;
