const express = require("express");
const router = express.Router();

const movieHandler = require("../controllers/movies");

router.get("/homepage", movieHandler.homePage);

module.exports = router;
