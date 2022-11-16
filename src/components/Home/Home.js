import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";
import { MovieApiKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../Features/Movies/MoviesSlice';
const Home = () => {

    let movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()
    useEffect(() => {

        const movieText = 'Harry'
        const fetchMovies = async () => {
            //  per site req to : http://www.omdbapi.com/?apikey=[yourkey]& 
            // and we need only what after ?
            try {
                const response = await movieApi.get(`?api_key=${MovieApiKey}&query=harry`)
                // console.log(response.data)
                dispatch(moviesActions.addMovies(response.data))


            } catch (error) {
                console.log(error);

            }

        }
        fetchMovies()

    }, []);
    return (
        <div className='banner'>
            <MovieListing />

        </div>
    );
};

export default Home;