import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";
import { asyncFectchSeries, asyncFetchMovies } from '../../Features/Movies/MoviesSlice';
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(asyncFetchMovies())
       dispatch(asyncFectchSeries())
    
    

    }, [dispatch]);

    return (
        <div className='banner'>
            <MovieListing />

        </div>
    );
};

export default Home;