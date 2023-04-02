const router = require('express').Router();
const controller = require('../controller/controller');

router.post('/addMovie', controller.addMovieHandler);

router.delete('/removeMovie', controller.removeMovieHandler);

router.get('/allMovies', controller.getAllMoviesHandler);

module.exports = router;