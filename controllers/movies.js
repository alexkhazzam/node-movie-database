const movies = [];

exports.homePage = (req, res, next) => {
  res.render("home", {
    pageTitle: "Homepage",
  });
};

exports.createMovies = (req, res, next) => {
  movies.push({ title: req.body.title });
  console.log(req.body.title);
  res.render("add-movie", {
    pageTitle: "Create Movie",
    movies: movies,
    movieTitle: req.body.title,
  });
};
