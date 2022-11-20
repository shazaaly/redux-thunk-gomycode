import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { useSelector } from 'react-redux';
import '../MovieListing/movieListing.scss'


export const MovieListing = () => {
  const movies = useSelector(state => state.movies.movies)

  let renderMovies = ''
  renderMovies = movies.type === "movies/addMovies" ?
    movies.payload.map((movie, index) => 
    <MovieCard key={index} data={movie} />
    )
    : <div className='movies-error'><h3>Error : {movies.Error}</h3></div>

  return (

    <>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
          {renderMovies}
          </div>

        </div>


      </div>

    </>
  )
}
