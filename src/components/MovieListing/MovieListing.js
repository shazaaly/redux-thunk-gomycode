import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { useSelector } from 'react-redux';
import '../MovieListing/movieListing.scss'
import { Link } from 'react-router-dom';


export const MovieListing = () => {
  let movies = useSelector(state => state.movies.movies)
  let series = useSelector(state => state.movies.series)
  // console.log(series.payload);

  let renderMovies = ''
  try {
    renderMovies = movies ?
      movies.payload.map((movie) =>
        <Link to={`/movies/${movie.id}`}>

          <MovieCard key={movie.id} data={movie} />
        </Link>

      )
      : <div className='movies-error'><h3>Error</h3></div>

  } catch (error) {
    // console.log(error);

  }
  // Series:
  let renderSeries = ''
  try {
    renderSeries = series ?
      series.payload.map((show) =>

        <Link to={`/movies/${show.id}`}>
          <MovieCard key={show.id} data={show} />
        </Link>

      )
      : <div className='movies-error'><h3>Error</h3></div>

  } catch (error) {
    // console.log(error);

  }


  return (

    <>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
            {renderMovies}
          </div>

        </div>

        <div className='series-list'>
          <h2>Series</h2>
          <div className='series-container'>
            {renderSeries}
          </div>

        </div>


      </div>

    </>
  )
}
