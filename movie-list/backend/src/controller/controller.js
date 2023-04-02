const movieService = require('../services/movieService');

const addMovieHandler = async (req, res) => {
    const { name } = req.body;
    const response = await movieService.addMovieService(name);
    res.status(response.status).json(response.data);
};


const removeMovieHandler = async (req, res) => { 
    const { name } = req.body;
    console.log(name);
    const response = await movieService.removeMovieService(name);
    res.status(response.status).json(response.data);
};

const getAllMoviesHandler = async (req, res) => {
    const response = await movieService.getAllMoviesService();
    res.status(response.status).json(response.data);
};

module.exports = {
    addMovieHandler,
    removeMovieHandler,
    getAllMoviesHandler
};