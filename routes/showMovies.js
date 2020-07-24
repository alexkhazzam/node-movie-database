const express = require("express");

const app = express();

const controllerMovies = require("../controllers/movies");

app.use("/", controllerMovies);

module.exports = controllerMovies;
