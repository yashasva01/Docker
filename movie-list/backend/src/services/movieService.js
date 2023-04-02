const db = require('../models');

const addMovieService = async (movieName) => {
    try{
        const isPresent = await db.Movies.findOne({
            where:{
                name:movieName
            }
        });
        if(isPresent){
            return {status: 409, data: { message:'Movie name already exists'}};
        }
        await db.Movies.create({name: movieName});
        return {status: 200, data: { message:'Movie name added successfully'}};

    }
    catch (error) {
        return {status: 500, data:{ message: error.message}};
    }
};

const removeMovieService = async (movieName) => {
    try{
        const response = await db.Movies.destroy({
            where: {
                name:movieName
            }
        });
        if (response === 0){
            return {status: 400, data:{ message: 'Movie name does not exits'}};
        }
        return {status: 200, data: { message: 'Movie name deleted successfully'}};
    }catch (error){
        return {status: 500, data: { message: error.message}};
    }
};

const getAllMoviesService = async() => {
    try{
        const response = await db.Movies.findAll();
        return {status: 200, data: {movies: response}};
    }catch(error){
        return {status: 500, data: {message: error.message}};
    }
};

module.exports= {
    addMovieService,
    removeMovieService,
    getAllMoviesService
};
