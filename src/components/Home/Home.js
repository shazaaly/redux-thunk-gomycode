import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";
import { asyncFetchMovies } from '../../Features/Movies/MoviesSlice';
import { MovieApiKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../Features/Movies/MoviesSlice';
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(asyncFetchMovies())

    }, [dispatch]);


    return (
        <div className='banner'>
            <MovieListing />

        </div>
    );
};

export default Home;