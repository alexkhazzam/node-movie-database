const express = require("express");
const router = express.Router();

const movieHandler = require("../controllers/movies");

router.get("/add-movie", movieHandler.createMovies);

module.exports = router;
