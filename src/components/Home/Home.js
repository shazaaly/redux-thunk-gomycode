import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";
import { asyncFectchSeries, asyncFetchMovies } from '../../Features/Movies/MoviesSlice';
import { useDispatch } from 'react-redux';
const Home = () => {
    const textMovie = 'Harry'
    const textSeries = 'Friends'
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(asyncFetchMovies(textMovie))
       dispatch(asyncFectchSeries(textSeries))
        

    }, [dispatch]);

    return (
        <div className='banner'>
            <MovieListing />

        </div>
    );
};

export default Home;